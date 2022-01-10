import { transformativeReactionLevelMultipliers } from "../StatConstants"
import { allMainStatKeys, allSubstats, MainStatKey, SubstatKey } from "../Types/artifact"
import { allArtifactSets, allElementsWithPhy, ArtifactSetKey } from "../Types/consts"
import { objectFromKeyMap } from "../Util/Util"
import { ConstantNode, Data, Node, NumFormulaTemplate, ReadNode, StringFormulaTemplate, StringNode, StringReadNode } from "./type"
import { frac, prod, res, subscript, sum, min, max, read, setReadNodeKeys, stringRead } from "./utils"

const allStats = [...allMainStatKeys, ...allSubstats] as const
const unit: ConstantNode = { operation: "const", value: 1, info: { unit: "%" }, operands: [] }

// All string read nodes
const str = setReadNodeKeys({
  char: {
    key: stringRead(),
    element: stringRead(),
  },
  weapon: {
    key: stringRead(),
    type: stringRead(),
  },
  dmg: {
    element: stringRead(),
    reaction: stringRead(),
    move: stringRead(),
    critType: stringRead(),
  }
})

// All read nodes
const rd = setReadNodeKeys({
  base: objectFromKeyMap(["atk", "def", "hp"] as const, _ => read("add")),
  premod: objectFromKeyMap(allStats, _ => read("add")),
  postmod: { ...objectFromKeyMap(allStats, _ => read("add")), },
  total: {
    ...objectFromKeyMap(allStats, _ => read("add")),
    cappedCritRate: read("unique"),
  },

  art: {
    ...objectFromKeyMap(allStats, _ => read("add")),
    ...objectFromKeyMap(allArtifactSets, _ => read("add")),
  },
  char: {
    auto: read("add"), skill: read("add"), burst: read("add"),
    level: read("unique"), constellation: read("unique"), ascension: read("unique"),
  },
  weapon: { level: read("unique"), refinement: read("unique"), },

  hit: {
    base: read("add"),
    dmgBonus: read("add"),
    amp: { reactionMulti: read("add"), multi: read("add"), base: read("add"), },
    critValue: {
      byType: read("unique", undefined, str.dmg.critType),
    },
  },

  enemy: {
    res: { byElement: read("unique", undefined, str.dmg.element), },
    level: read("unique"),
    def: read("add"),
    defRed: read("add"),
  },
})

const { base, premod, postmod, total, char, hit, enemy, } = rd

const common = {
  premod: objectFromKeyMap(["atk", "def", "hp"] as const,
    key => prod(base[key], premod[`${key}_` as const])),
  postmod: {
    ...objectFromKeyMap(allStats, key => premod[key] as Node),
  },
  total: {
    ...objectFromKeyMap(allStats, key => postmod[key] as Node),
    cappedCritRate: max(min(postmod.critRate_, unit), 0),
  },

  hit: {
    dmg: prod(
      hit.base,
      sum(unit, hit.dmgBonus),
      hit.critValue.byType,
      enemy.def,
      enemy.res.byElement,
      hit.amp.multi),
    critValue: {
      base: unit as Node,
      crit: sum(unit, total.critDMG_),
      avg: sum(unit, prod(total.cappedCritRate, total.critDMG_)),
    },
    amp: {
      multi: prod(hit.amp.reactionMulti, hit.amp.base),
      base: sum(unit, prod(25 / 9, frac(total.eleMas, 1400))),
    },
  },

  enemy: {
    def: frac(sum(char.level, 100), prod(sum(enemy.level, 100), sum(1, prod(-1, enemy.defRed))))
  }
} as const

function typecheck<K, T extends K>() { }

// Make sure we don't add anything outside of `Data` while maintaining precise typing
type DeepRequired<T, Element> = T extends Element ? Element : { [key in keyof T]-?: DeepRequired<T[key], Element> }
type ReplaceLeaves<T, Element, NewElement> = Element extends T ? NewElement : { [key in keyof T]: ReplaceLeaves<T[key], Element, NewElement> }
typecheck<typeof str, DeepRequired<StringFormulaTemplate<StringReadNode>, StringReadNode>>()
typecheck<typeof rd, DeepRequired<NumFormulaTemplate<ReadNode>, ReadNode>>()
typecheck<typeof common, DeepRequired<NumFormulaTemplate<Node>, Node>>()

export {
  rd as input, common
}