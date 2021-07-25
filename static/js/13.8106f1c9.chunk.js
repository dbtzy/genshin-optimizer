(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[13],{184:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(28),r=a(14),i=a(50),c=a(1),o=function(){return Object(c.jsx)(i.a,{icon:r.x})},u=function(e){var t=e.stars,a=e.colored,r=void 0!==a&&a;return Object(c.jsx)("span",{className:r?"text-5star":"",children:t?Object(n.a)(Array(t).keys()).map((function(e,t){return Object(c.jsx)(o,{},t)})):null})}},185:function(e,t,a){"use strict";a.d(t,"a",(function(){return S}));var n=a(10),r=a(204),i=a(106),c=a(28),o=a(54),u=a(3),l=a(22),s=a(29),f=a(43),d=a(105),v=a(93),p=a(35),m=a(74),b=a(42),h=a(190),O=a(36),g=a(196),y=a(12),j=a(9),S=function(){function e(){if(Object(l.a)(this,e),this instanceof e)throw Error("A static class cannot be instantiated.")}return Object(s.a)(e,null,[{key:"getDisplayHeading",value:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"anemo";if("basicKeys"===e)return"Basic Stats";if("genericAvgHit"===e)return"Generic Optimization Values";if("transReactions"===e)return"Transformation Reaction";if(e.startsWith("talentKey_")){var r,i,c=e.split("talentKey_")[1];return null!==(r=null===t||void 0===t||null===(i=t.getTalentOfKey(c,n))||void 0===i?void 0:i.name)&&void 0!==r?r:c}if(e.startsWith("weapon_")){var o,u=e.split("weapon_")[1];return null!==(o=null===a||void 0===a?void 0:a.name)&&void 0!==o?o:u}return""}}]),e}();S.getElementalName=function(e){return m.a[e].name},S.getLevelString=function(e){return"".concat(e.level,"/").concat(p.a[e.ascension])},S.getTalentFieldValue=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return e[t]?Object(j.f)(e[t],a):n},S.hasOverride=function(e,t){return"finalHP"===t?S.hasOverride(e,"hp")||S.hasOverride(e,"hp_")||S.hasOverride(e,"characterHP"):"finalDEF"===t?S.hasOverride(e,"def")||S.hasOverride(e,"def_")||S.hasOverride(e,"characterDEF"):"finalATK"===t?S.hasOverride(e,"atk")||S.hasOverride(e,"atk_")||S.hasOverride(e,"characterATK"):!!(null===e||void 0===e?void 0:e.baseStatOverrides)&&t in e.baseStatOverrides},S.getBaseStatValue=function(e,t,a,n){return"enemyLevel"===n?e.level:n.includes("enemyRes_")?10:n in p.b?p.b[n]:0},S.getStatValueWithOverride=function(e,t,a,n){var r,i;return S.hasOverride(e,n)?null!==(r=null===(i=e.baseStatOverrides)||void 0===i?void 0:i[n])&&void 0!==r?r:0:S.getBaseStatValue(e,t,a,n)},S.calculateBuild=function(e,t,a,n){var r,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;e.artifacts?r=Object.fromEntries(e.artifacts.map((function(e,t){return[t,e]}))):e.equippedArtifacts&&(r=Object.fromEntries(Object.entries(e.equippedArtifacts).map((function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];return[a,b.a._getArt(n)]}))));var c=S.createInitialStats(e,t,a);return c.mainStatAssumptionLevel=i,S.calculateBuildwithArtifact(c,r,n)},S.calculateBuildwithArtifact=function(e,t,a){var n,r=f.a.setToSlots(t),i=d.a.setEffectsStats(a,e,r),c=Object(j.d)(e);Object.values(t).forEach((function(e){e&&(c[e.mainStatKey]=(c[e.mainStatKey]||0)+f.a.mainStatValue(e.mainStatKey,e.numStars,Math.max(Math.min(c.mainStatAssumptionLevel,4*e.numStars),e.level)),e.substats.forEach((function(e){return e&&e.key&&(c[e.key]=(c[e.key]||0)+e.value)})))})),i.forEach((function(e){return c[e.key]=(c[e.key]||0)+e.value})),v.a.parseConditionalValues({artifact:null===c||void 0===c||null===(n=c.conditionalValues)||void 0===n?void 0:n.artifact},(function(e,t,a){var n,i,o=Object(u.a)(a,2)[1],l=e.setNumKey;if(!(parseInt(l)>(null!==(n=null===r||void 0===r||null===(i=r[o])||void 0===i?void 0:i.length)&&void 0!==n?n:0))){var s=v.a.resolve(e,c,t).stats;Object.entries(s).forEach((function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];return c[a]=(c[a]||0)+n}))}})),c.equippedArtifacts=Object.fromEntries(Object.entries(t).map((function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];return[a,null===n||void 0===n?void 0:n.id]}))),c.setToSlots=r;var o=Object(g.a)(null===c||void 0===c?void 0:c.modifiers);return Object(O.c)(o,c).formula(c),c},S.mergeStats=function(e,t){return t&&Object.entries(t).forEach((function(t){var a=Object(u.a)(t,2),n=a[0],r=a[1];if("modifiers"===n){var i;e.modifiers=null!==(i=e.modifiers)&&void 0!==i?i:{};var c,l=Object(o.a)(Object.entries(r));try{for(l.s();!(c=l.n()).done;){var s,f=Object(u.a)(c.value,2),d=f[0],v=f[1];e.modifiers[d]=null!==(s=e.modifiers[d])&&void 0!==s?s:{};var p,m=Object(o.a)(Object.entries(v));try{for(m.s();!(p=m.n()).done;){var b,h=Object(u.a)(p.value,2),O=h[0],g=h[1];e.modifiers[d][O]=(null!==(b=e.modifiers[d][O])&&void 0!==b?b:0)+g}}catch(y){m.e(y)}finally{m.f()}}}catch(y){l.e(y)}finally{l.f()}}else void 0===e[n]?e[n]=r:"number"===typeof e[n]&&(e[n]+=r)}))},S.createInitialStats=function(e,t,a){var o,l,s,f=e=Object(j.d)(e),d=f.characterKey,m=f.elementKey,b=f.level,h=f.ascension,O=f.hitMode,g=f.infusionAura,E=f.reactionMode,_=f.talentLevelKeys,w=f.constellation,k=f.equippedArtifacts,A=f.conditionalValues,K=void 0===A?{}:A,x=f.weapon,P=["enemyLevel"].concat(Object(c.a)(Object.keys(p.b))),N=Object.fromEntries(P.map((function(n){return[n,S.getStatValueWithOverride(e,t,a,n)]})));N.characterHP=t.getBase("hp",b,h),N.characterDEF=t.getBase("def",b,h),N.characterATK=t.getBase("atk",b,h),N.characterLevel=b,N.characterEle=null!==(o=null!==(l=t.elementKey)&&void 0!==l?l:m)&&void 0!==o?o:"anemo",N.characterKey=d,N.hitMode=O,N.infusionAura=g,N.reactionMode=E,N.conditionalValues=K,N.weaponType=t.weaponTypeKey,N.tlvl=_,N.constellation=w,N.ascension=h,N.weapon=Object(j.d)(x),N.equippedArtifacts=k,["physical"].concat(Object(c.a)(y.d)).forEach((function(n){var r="".concat(n,"_enemyRes_");N[r]=S.getStatValueWithOverride(e,t,a,r),r="".concat(n,"_enemyImmunity"),N[r]=S.getStatValueWithOverride(e,t,a,r)}));var T=(null===(s=e)||void 0===s?void 0:s.baseStatOverrides)||{};Object.entries(T).forEach((function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];N.hasOwnProperty(a)||(N[a]=n)}));var C=t.getSpecializedStat(h);if(C){var V=t.getSpecializedStatVal(h);S.mergeStats(N,Object(i.a)({},C,V))}for(var R in t.getTalentStatsAll(N,N.characterEle).forEach((function(e){return S.mergeStats(N,e)})),N.tlvl){var B;N.tlvl[R]+=null!==(B=N["".concat(R,"Boost")])&&void 0!==B?B:0}var I=a.getMainStatValue(x.level,x.ascension);N.weaponATK=I;var W=a.getSubStatKey();W&&S.mergeStats(N,Object(i.a)({},W,a.getSubStatValue(x.level,x.ascension))),S.mergeStats(N,a.stats(N));K.artifact;var M=K.weapon,z=Object(r.a)(K,["artifact","weapon"]);return v.a.parseConditionalValues(Object(n.a)(Object(n.a)({},x.key&&{weapon:Object(i.a)({},x.key,null===M||void 0===M?void 0:M[x.key])}),z),(function(e,t,a){if(("character"!==a[0]||"talents"!==a[3]||a[4]===m)&&v.a.canShow(e,N)){var n=v.a.resolve(e,N,t).stats;S.mergeStats(N,n)}})),N},S.getDisplayStatKeys=function(e,t){var a,r,i=e.characterEle,c=["finalHP","finalATK","finalDEF","eleMas","critRate_","critDMG_","heal_","enerRech_","".concat(i,"_dmg_")];t.isAutoElemental||c.push("physical_dmg_");var o=Object(j.d)(O.a[i]),l=t.weaponTypeKey;o.includes("shattered_hit")||"claymore"!==l||o.push("shattered_hit");var s={},f=t.getTalent(i);f&&Object.entries(f.formula).forEach((function(t){var a=Object(u.a)(t,2),n=a[0],r=a[1];Object.values(r).forEach((function(t){if(t.field.canShow(e)){"normal"!==n&&"charged"!==n&&"plunging"!==n||(n="auto");var a="talentKey_".concat(n);s[a]||(s[a]=[]),s[a].push(t.keys)}}))}));var d=null===(a=h.a.formulas)||void 0===a||null===(r=a.weapon)||void 0===r?void 0:r[e.weapon.key];return d&&Object.values(d).forEach((function(t){if(t.field.canShow(e)){var a="weapon_".concat(e.weapon.key);s[a]||(s[a]=[]),s[a].push(t.keys)}})),Object(n.a)(Object(n.a)({basicKeys:c},s),{},{transReactions:o})}},188:function(e,t,a){"use strict";var n={elements:{anemo:a.p+"static/media/Element_Anemo.f809fde3.png",cryo:a.p+"static/media/Element_Cryo.019d72f9.png",dendro:a.p+"static/media/Element_Dendro.8ee0f26d.png",electro:a.p+"static/media/Element_Electro.342332ac.png",geo:a.p+"static/media/Element_Geo.b7e865c6.png",hydro:a.p+"static/media/Element_Hydro.f2f8bd8a.png",pyro:a.p+"static/media/Element_Pyro.f65c2e38.png"},weaponTypes:{bow:a.p+"static/media/Weapon-class-bow-icon.b8e7b5ca.png",catalyst:a.p+"static/media/Weapon-class-catalyst-icon.2cbef800.png",claymore:a.p+"static/media/Weapon-class-claymore-icon.17418b20.png",polearm:a.p+"static/media/Weapon-class-polearm-icon.a4e7fffc.png",sword:a.p+"static/media/Weapon-class-sword-icon.4470b487.png"},resin:{fragile:a.p+"static/media/Item_Fragile_Resin.f9ec8223.png",condensed:a.p+"static/media/Item_Condensed_Resin.1cecf64a.png"},exp_books:{advice:a.p+"static/media/Item_Wanderer's_Advice.58c62cf7.png",wit:a.p+"static/media/Item_Hero's_Wit.a79e36d0.png",experience:a.p+"static/media/Item_Adventurer's_Experience.92b5d195.png"}};t.a=n},189:function(e,t,a){"use strict";var n=a(2),r=a(5),i=a(6),c=a.n(i),o=a(0),u=a.n(o),l=a(8),s=["bsPrefix","size","toggle","vertical","className","as"],f=u.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.size,o=e.toggle,f=e.vertical,d=e.className,v=e.as,p=void 0===v?"div":v,m=Object(r.a)(e,s),b=Object(l.a)(a,"btn-group"),h=b;return f&&(h=b+"-vertical"),u.a.createElement(p,Object(n.a)({},m,{ref:t,className:c()(d,h,i&&b+"-"+i,o&&b+"-toggle")}))}));f.displayName="ButtonGroup",f.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=f},190:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(22),r=a(9),i=Promise.all([a.e(0),a.e(3)]).then(a.bind(null,144)).then((function(e){return c.formulas=e.default,e.default})),c=function e(){if(Object(n.a)(this,e),this instanceof e)throw Error("A static class cannot be instantiated.")};c.formulas={},c.get=function(e){return i.then((function(t){return Object(r.p)(t,e)}))}},192:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(e){var t=function(e){var t=Object(n.useRef)(e);return t.current=e,t}(e);Object(n.useEffect)((function(){return function(){return t.current()}}),[])}},193:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,n(e,t)}a.d(t,"a",(function(){return r}))},194:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(76),r=a(0),i=function(e){var t;return"undefined"===typeof document?null:null==e?Object(n.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};function c(e,t){var a=Object(r.useState)((function(){return i(e)})),n=a[0],c=a[1];if(!n){var o=i(e);o&&c(o)}return Object(r.useEffect)((function(){t&&n&&t(n)}),[t,n]),Object(r.useEffect)((function(){var t=i(e);t!==n&&c(t)}),[e,n]),n}},195:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n);function i(e,t){var a=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,a++):e}))}},196:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(3),r=a(28),i=a(36);function c(e){var t=new Set;return e(new Proxy({},{get:function(e,a,n){t.add(a.toString())}}),new Proxy({},{get:function(e,a,n){t.add(a.toString())}})),Object(r.a)(t)}var o=Object.freeze(Object.fromEntries(Object.entries(i.b).map((function(e){var t=Object(n.a)(e,2);return[t[0],c(t[1])]}))));function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object.keys(i.d),a=new Set;return t.forEach((function(t){return l(t,e,a)})),Object(r.a)(a)}function l(e,t,a){var n,r;a.has(e)||(null===(n=o[e])||void 0===n||n.forEach((function(e){return l(e,t,a)})),Object.keys(null!==(r=t[e])&&void 0!==r?r:{}).forEach((function(e){return l(e,t,a)})),a.add(e))}},198:function(e,t,a){"use strict";var n=a(2),r=a(5),i=a(6),c=a.n(i),o=a(0),u=a.n(o),l=a(7),s=a.n(l),f=a(8),d=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],v=(s.a.string,s.a.bool,s.a.bool,s.a.bool,s.a.bool,u.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,o=e.fluid,l=e.rounded,s=e.roundedCircle,v=e.thumbnail,p=Object(r.a)(e,d);a=Object(f.a)(a,"img");var m=c()(o&&a+"-fluid",l&&"rounded",s&&"rounded-circle",v&&a+"-thumbnail");return u.a.createElement("img",Object(n.a)({ref:t},p,{className:c()(i,m)}))})));v.displayName="Image",v.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=v},204:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",(function(){return n}))},208:function(e,t,a){"use strict";var n=a(2),r=a(5),i=a(6),c=a.n(i),o=a(0),u=a.n(o),l=a(56),s=["children","name","className","checked","type","onChange","value","disabled","inputRef"],f=function(){},d=u.a.forwardRef((function(e,t){var a=e.children,i=e.name,d=e.className,v=e.checked,p=e.type,m=e.onChange,b=e.value,h=e.disabled,O=e.inputRef,g=Object(r.a)(e,s),y=Object(o.useState)(!1),j=y[0],S=y[1],E=Object(o.useCallback)((function(e){"INPUT"===e.target.tagName&&S(!0)}),[]),_=Object(o.useCallback)((function(e){"INPUT"===e.target.tagName&&S(!1)}),[]);return u.a.createElement(l.a,Object(n.a)({},g,{ref:t,className:c()(d,j&&"focus",h&&"disabled"),type:void 0,active:!!v,as:"label"}),u.a.createElement("input",{name:i,type:p,value:b,ref:O,autoComplete:"off",checked:!!v,disabled:!!h,onFocus:E,onBlur:_,onChange:m||f}),a)}));d.displayName="ToggleButton",t.a=d},257:function(e,t,a){"use strict";var n=a(2),r=a(5),i=a(0),c=a.n(i),o=a(67),u=a.n(o),l=a(34),s=a(46),f=a(195),d=a(189),v=a(208),p=["children","type","name","value","onChange"],m=c.a.forwardRef((function(e,t){var a=Object(l.a)(e,{value:"onChange"}),i=a.children,o=a.type,v=a.name,m=a.value,b=a.onChange,h=Object(r.a)(a,p),O=function(){return null==m?[]:[].concat(m)};return"radio"!==o||v||u()(!1),c.a.createElement(d.a,Object(n.a)({},h,{ref:t,toggle:!0}),Object(f.a)(i,(function(e){var t=O(),a=e.props,n=a.value,r=a.onChange;return c.a.cloneElement(e,{type:o,name:e.name||v,checked:-1!==t.indexOf(n),onChange:Object(s.a)(r,(function(e){return function(e,t){if(b){var a=O(),n=-1!==a.indexOf(e);"radio"!==o?b(n?a.filter((function(t){return t!==e})):[].concat(a,[e]),t):!n&&b&&b(e,t)}}(n,e)}))})})))}));m.defaultProps={type:"radio",vertical:!1},m.Button=v.a,t.a=m},490:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var n=a(166),r=a(214),i=a(1);function c(){return Object(i.jsx)(n.a,{children:Object(i.jsx)(r.default,{editable:!0,characterKey:"traveler",tabName:"talent"})})}}}]);
//# sourceMappingURL=13.8106f1c9.chunk.js.map