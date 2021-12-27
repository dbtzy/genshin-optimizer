import { mapContextualFormulas as mapFormulas } from "./internal"
import { Node } from "./type"
import { input, prod, sum } from "./utils"

const inputs = [...Array(6).keys()].map(i => input(`${i}`));

describe("internal `mapFormulas`", () => {
  test("Access order", () => {
    const r1 = Object.freeze(inputs[0])
    const r2 = Object.freeze(inputs[1])
    const r3 = Object.freeze(inputs[2])
    const r4 = Object.freeze(inputs[3])

    const f1 = Object.freeze(sum(r1, r2, r1))
    const f2 = Object.freeze(prod(r3, r4))

    /**
     * f1
     * - r1
     * - r2  -->  f2
     * - r1       - r3
     *            - r4
     */

    // Top-down with replace
    const mockTopDown = jest.fn((x: Node, contextId: number) => [x === r2 ? f2 : x, contextId] as [Node, number])
    const mockBottomUp = jest.fn((x: Node, _: Node) => x)

    const result = mapFormulas([f1], mockTopDown, mockBottomUp)
    expect(result).toEqual([sum(r1, prod(r3, r4), r1)])

    expect(mockTopDown.mock.calls.map(x => x[0])).toEqual(
      [f1, r1, r2, r3, r4])
    expect(mockBottomUp.mock.calls.map(x => [x[0], x[1]])).toEqual(
      [[r1, r1], [r3, r3], [r4, r4], [f2, r2], [sum(r1, f2, r1), f1]])
  })
  test("Deduplicate accesses", () => {
    const r1 = Object.freeze(inputs[0])
    const r2 = Object.freeze(inputs[1])
    const r3 = Object.freeze(inputs[2])
    const r4 = Object.freeze(inputs[3])

    const f1 = Object.freeze(sum(r1, r2, r3))
    const f2 = Object.freeze(sum(r4))
    const mockTopDown = jest.fn((x: Node, contextId: number) => [(x === r1 || x === r3) ? f2 : x, contextId] as [Node, number])
    const mockBottomUp = jest.fn((x: Node, _: Node) => x)

    const result = mapFormulas([f1], mockTopDown, mockBottomUp)
    expect(result).toEqual([sum(sum(r4), r2, sum(r4))])

    /**
     * `mapFormulas` should access f2 (and r4) only once.
     * f1
     * - r1  -->  f2
     * - r2       - r4
     * - r3  -->  f2
     *            - r4
     */

    expect(mockTopDown.mock.calls.map(x => x[0])).toEqual(
      [f1, r1, r4, r2, r3])
    expect(mockBottomUp.mock.calls.map(x => [x[0], x[1]])).toEqual(
      [[r4, r4], [f2, r1], [r2, r2], [sum(f2, r2, f2), f1]])
  })
})