(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[22],{513:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var c=a(25),s=a(9),i=a(131),n=a(71),r=a(142),l=a(187),h=a.p+"static/media/Overview.bd3f216a.png",o=a.p+"static/media/Inventory.8edf8e22.png",d=a.p+"static/media/enemyEditor.94cfd089.png",j=a.p+"static/media/ArtifactView.436de609.png",b=a.p+"static/media/TalentView.900d5ba8.png",x=a(1);function O(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(i.a,{className:"mb-2",children:[Object(x.jsx)(n.a,{xs:12,lg:7,children:Object(x.jsx)(r.a,{src:o,className:"w-100 h-auto"})}),Object(x.jsxs)(n.a,{xs:12,lg:5,children:[Object(x.jsx)("h4",{children:"Character Inventory"}),Object(x.jsx)("p",{children:"All the characers that you've added to Genshin Optimizer is in this screen. This inventory screen allow you to Add/edit/delete characters, as well as see an overview of each character from each card."}),Object(x.jsxs)("p",{children:["To Edit specific details of a character, click on its corresponding card, or click on the ",Object(x.jsx)(l.a,{variant:"primary",children:Object(x.jsx)(s.a,{icon:c.h})})," Button"]}),Object(x.jsx)("h5",{children:"Filtering and sorting"}),Object(x.jsx)("p",{children:"You can also filter the characters by Elemental or Weapons, and sort the characters by Level/Rarity/Name."})]})]}),Object(x.jsxs)(i.a,{className:"mb-2",children:[Object(x.jsxs)(n.a,{xs:12,lg:6,xl:7,children:[Object(x.jsx)("h4",{children:"Character Editor"}),Object(x.jsx)("p",{children:"This is the main character editor. There is a lot to unpack here, so each sections are labeled. "}),Object(x.jsx)("h5",{children:"1. Character & level template selector"}),Object(x.jsx)("p",{children:"You can change the character to edit here. The Level template changes the default base stats that are populated in the editor for the character. Currently, GO only offers milestone templates, so the stats will need to be manually adjusted for non-milestone levels."}),Object(x.jsx)("h5",{children:"2. Navigation tabs"}),Object(x.jsxs)("p",{children:["The tabs here navigate to different views of the character editor. Currently the ",Object(x.jsx)("i",{children:"Character"})," view is enabled. The ",Object(x.jsx)("i",{children:"Artifacts"})," and ",Object(x.jsx)("i",{children:"Talents"})," view will be elaborated in their dedicated section below."]}),Object(x.jsx)("h5",{children:"3. Party Infusion, Hit Mode & Reaction Mode"}),Object(x.jsxs)("p",{children:["If a character's autos can be infused with an element from their talents(e.g. ",Object(x.jsx)("i",{children:"Chongyun's Spirit Blade: Chonghua's Layered Frost"}),"), this will need to be manually enabled here."]}),Object(x.jsxs)("p",{children:["For the DMG numbers shown in GO, the ",Object(x.jsx)("b",{children:"Hit Mode"})," determines how they are calculated: "]}),Object(x.jsxs)("ul",{className:"mb-0",children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("b",{children:"Avg. DMG:"})," The damage is averaged over CRIT Rate & CRIT DMG."]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("b",{children:"Non Crit DMG:"})," The damage of a non-crit hit. CRIT Rate & CRIT DMG are not part of the calculations."]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("b",{children:"Crit Hit DMG:"})," The damage of a  crit hit. CRIT Rate is ignored. Only CRIT DMG is part of the calculations."]})]}),Object(x.jsxs)("p",{children:["A character's damage changes drastically when they do an amplifing reaction, like ",Object(x.jsx)("span",{className:"text-vaporize",children:"Vaporize"})," or ",Object(x.jsx)("span",{className:"text-melt",children:"Melt"}),". You can enable the ",Object(x.jsx)("b",{children:"Reaction Mode"})," from this toggle."]})]}),Object(x.jsx)(n.a,{xs:12,lg:6,xl:5,children:Object(x.jsx)(r.a,{src:h,className:"w-100 h-auto"})})]}),Object(x.jsxs)(i.a,{children:[Object(x.jsx)(n.a,{xs:12,lg:6,xl:5,children:Object(x.jsx)(r.a,{src:d,className:"w-100 h-auto"})}),Object(x.jsxs)(n.a,{xs:12,lg:6,xl:7,children:[Object(x.jsx)("h5",{children:"4. Enemy Editor & Calculation details."}),Object(x.jsxs)("p",{children:["This UI is usually Hidden. You need to expand it by clicking on the ",Object(x.jsxs)(l.a,{variant:"info",children:[Object(x.jsx)(s.a,{icon:c.D})," Expand"]})," Button."]}),Object(x.jsx)("h6",{children:"4.1 Enemy Editor"}),Object(x.jsx)("p",{children:"For the calculated numbers in GO to truely reflect in-game numbers, the exact enemy conditions must be replicated. This means that the relevant enemy resistance/level must be set here. "}),Object(x.jsx)("h6",{children:"4.2 Calculation details"}),Object(x.jsx)("p",{children:"For every number calculated by a formula, GO will display exactly how exactly that number is calculated. Just click on the number to show the full calculations."})]})]}),Object(x.jsx)(i.a,{children:Object(x.jsxs)(n.a,{children:[Object(x.jsx)("h5",{children:"5. Character Overview"}),Object(x.jsxs)("p",{children:["Contains general character information. Setting the ",Object(x.jsx)("b",{children:"level"})," in this UI changes the calculations for damage, but it does NOT change the stats in the editor. Only the Template Level can change the base stats in the editor."]}),Object(x.jsx)("p",{children:"You can also set the constellations of the character here by clicking on the icons."})]})}),Object(x.jsx)(i.a,{children:Object(x.jsxs)(n.a,{children:[Object(x.jsx)("h5",{children:"6. Weapon Editor"}),Object(x.jsxs)("p",{children:["Shows the weapon description & stats. You can change the weapon by clicking on the ",Object(x.jsxs)(l.a,{variant:"info",children:[Object(x.jsx)(s.a,{icon:c.h})," EDIT"]})," Button."]}),Object(x.jsxs)("p",{children:["Some weapons have passives that provide additional stats. You can enable them to provide more real-time stats to the character, as well as provide more base stats to the Build Generator. In the image, the ",Object(x.jsx)("i",{children:"Whiteblind"})," passive is fully stacked."]})]})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h5",{children:"7. Stats Editor"}),Object(x.jsxs)("p",{children:["These sections shows the calculated stats, from weapons/artifacts/talents. To change the base value of a stat or to add a external buff/debuff to a stat, click on the ",Object(x.jsxs)(l.a,{variant:"info",children:[Object(x.jsx)(s.a,{icon:c.h})," EDIT"]})," Button, and overwrite the stat in question. A overwritten stat will show up in yellow."]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h5",{children:"8. Share character"}),Object(x.jsxs)("p",{children:["Do you want to share your character build with friends? Click on the ",Object(x.jsxs)(l.a,{variant:"info",children:[Object(x.jsx)(s.a,{icon:c.m})," Share Character"]})," button, which will generate a URL that you can share."]})]}),Object(x.jsxs)(i.a,{className:"mb-2",children:[Object(x.jsx)(n.a,{xs:12,lg:4,children:Object(x.jsx)(r.a,{src:j,className:"w-100 h-auto"})}),Object(x.jsxs)(n.a,{xs:12,lg:4,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:"Artifact View"}),Object(x.jsx)("p",{children:"The top half of the artifact view shows a overview of the character stats, as well as all the formula results from a character."}),Object(x.jsx)("p",{children:"The bottom half of the artifact view shows the equipped artifacts on your character. If the artifact set has a condtional effect, you can enable it here."})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:"Talent View"}),Object(x.jsx)("p",{children:"This page shows all the detailed character talent/constellations details. This is also the place to set your talent levels of your talents."}),Object(x.jsx)("p",{children:"Any conditional stats from talents can be enabled here. "})]})]}),Object(x.jsx)(n.a,{xs:12,lg:4,children:Object(x.jsx)(r.a,{src:b,className:"w-100 h-auto"})})]})]})}}}]);
//# sourceMappingURL=22.6a598eab.chunk.js.map