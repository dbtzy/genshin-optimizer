(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[16],{105:function(e,t,n){"use strict";var c=n(2),a=n(4),s=n(5),r=n.n(s),i=n(0),o=n.n(i),l=n(7),u=n(54),j=o.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.variant,i=e.size,j=e.active,b=e.className,d=e.block,m=e.type,f=e.as,h=Object(a.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),x=Object(l.a)(n,"btn"),O=r()(b,x,j&&"active",s&&x+"-"+s,d&&x+"-block",i&&x+"-"+i);if(h.href)return o.a.createElement(u.a,Object(c.a)({},h,{as:f,ref:t,className:r()(O,h.disabled&&"disabled")}));t&&(h.ref=t),m?h.type=m:f||(h.type="button");var p=f||"button";return o.a.createElement(p,Object(c.a)({},h,{className:O}))}));j.displayName="Button",j.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=j},108:function(e,t,n){"use strict";var c={elements:{anemo:n.p+"static/media/Element_Anemo.f809fde3.png",cryo:n.p+"static/media/Element_Cryo.019d72f9.png",dendro:n.p+"static/media/Element_Dendro.8ee0f26d.png",electro:n.p+"static/media/Element_Electro.342332ac.png",geo:n.p+"static/media/Element_Geo.b7e865c6.png",hydro:n.p+"static/media/Element_Hydro.f2f8bd8a.png",pyro:n.p+"static/media/Element_Pyro.f65c2e38.png"},weaponTypes:{bow:n.p+"static/media/Weapon-class-bow-icon.b8e7b5ca.png",catalyst:n.p+"static/media/Weapon-class-catalyst-icon.2cbef800.png",claymore:n.p+"static/media/Weapon-class-claymore-icon.17418b20.png",polearm:n.p+"static/media/Weapon-class-polearm-icon.a4e7fffc.png",sword:n.p+"static/media/Weapon-class-sword-icon.4470b487.png"},resin:{fragile:n.p+"static/media/Item_Fragile_Resin.f9ec8223.png",condensed:n.p+"static/media/Item_Condensed_Resin.1cecf64a.png"},exp_books:{advice:n.p+"static/media/Item_Wanderer's_Advice.58c62cf7.png",wit:n.p+"static/media/Item_Hero's_Wit.a79e36d0.png",experience:n.p+"static/media/Item_Adventurer's_Experience.92b5d195.png"}};t.a=c},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(16),a=n(0),s=n(150),r=n(1);function i(e){var t=e.value,n=e.onChange,i=e.disabled,o=e.float,l=void 0!==o&&o,u=e.placeholder,j=e.allowEmpty,b=void 0!==j&&j,d=Object(a.useState)(null!==t&&void 0!==t?t:""),m=Object(c.a)(d,2),f=m[0],h=m[1],x=Object(a.useState)({}),O=Object(c.a)(x,2),p=O[0],v=O[1],g=Object(a.useCallback)((function(){if(v({}),b&&""===f)return n(null);""===f&&h(0);var e=l?parseFloat:parseInt;n(e(f)||0)}),[n,f,l,b]);return Object(a.useEffect)((function(){return h(null!==t&&void 0!==t?t:"")}),[t,h,p]),Object(r.jsx)(s.a,{value:f,"aria-label":"custom-input",className:"hide-appearance",type:"number",placeholder:u,onChange:function(e){return h(e.target.value)},onBlur:g,disabled:i,onKeyDown:function(e){return"Enter"===e.key&&g()}})}},120:function(e,t,n){"use strict";var c,a=n(2),s=n(4),r=n(5),i=n.n(r),o=n(0),l=n.n(o),u=n(26),j=n(57),b=n(56),d=((c={})[u.b]="show",c[u.a]="show",c),m=l.a.forwardRef((function(e,t){var n=e.className,c=e.children,r=Object(s.a)(e,["className","children"]),m=Object(o.useCallback)((function(e){Object(b.a)(e),r.onEnter&&r.onEnter(e)}),[r]);return l.a.createElement(u.e,Object(a.a)({ref:t,addEndListener:j.a},r,{onEnter:m}),(function(e,t){return l.a.cloneElement(c,Object(a.a)({},t,{className:i()("fade",n,c.props.className,d[e])}))}))}));m.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},m.displayName="Fade",t.a=m},129:function(e,t,n){"use strict";function c(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}n.d(t,"a",(function(){return c}))},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(0);function a(){var e=Object(c.useRef)(!0),t=Object(c.useRef)((function(){return e.current}));return Object(c.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(0);function a(){return Object(c.useState)(null)}},139:function(e,t,n){"use strict";var c=n(2),a=n(4),s=n(5),r=n.n(s),i=n(0),o=n.n(i),l=n(7),u=o.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.size,i=e.toggle,u=e.vertical,j=e.className,b=e.as,d=void 0===b?"div":b,m=Object(a.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),f=Object(l.a)(n,"btn-group"),h=f;return u&&(h=f+"-vertical"),o.a.createElement(d,Object(c.a)({},m,{ref:t,className:r()(j,h,s&&f+"-"+s,i&&f+"-toggle")}))}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=u},149:function(e,t,n){"use strict";var c=n(2),a=n(4),s=n(5),r=n.n(s),i=n(0),o=n.n(i),l=n(3),u=n.n(l),j=n(7),b=(u.a.string,u.a.bool,u.a.bool,u.a.bool,u.a.bool,o.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,i=e.fluid,l=e.rounded,u=e.roundedCircle,b=e.thumbnail,d=Object(a.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);n=Object(j.a)(n,"img");var m=r()(i&&n+"-fluid",l&&"rounded",u&&"rounded-circle",b&&n+"-thumbnail");return o.a.createElement("img",Object(c.a)({ref:t},d,{className:r()(s,m)}))})));b.displayName="Image",b.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=b},153:function(e,t,n){"use strict";var c=n(2),a=n(4),s=n(3),r=n.n(s),i=n(0),o=n.n(i),l=n(5),u=n.n(l),j={label:r.a.string.isRequired,onClick:r.a.func},b=o.a.forwardRef((function(e,t){var n=e.label,s=e.onClick,r=e.className,i=Object(a.a)(e,["label","onClick","className"]);return o.a.createElement("button",Object(c.a)({ref:t,type:"button",className:u()("close",r),onClick:s},i),o.a.createElement("span",{"aria-hidden":"true"},"\xd7"),o.a.createElement("span",{className:"sr-only"},n))}));b.displayName="CloseButton",b.propTypes=j,b.defaultProps={label:"Close"},t.a=b},165:function(e,t,n){"use strict";function c(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}n.d(t,"a",(function(){return c}))},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(0);function a(e){var t=Object(c.useRef)(null);return Object(c.useEffect)((function(){t.current=e})),t.current}},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r}));var c=n(6);function a(e){var t=e%1e3,n=Math.floor(e/1e3%60),c=Math.floor(e/6e4%60);return{hours:Math.floor(e/36e5),minutes:c,seconds:n,milliseconds:t}}function s(e){var t=a(e),n=t.hours,s=t.minutes,r=t.seconds,i="Minutes";return n&&(i="Hours"),"".concat(n?"".concat(n,":"):"").concat(Object(c.r)(s,"0",2),":").concat(Object(c.r)(r,"0",2)," ").concat(i)}function r(e){var t=a(e),n=t.hours,s=t.minutes,r=t.seconds,i=t.milliseconds,o="Minutes";return n&&(o="Hours"),"".concat(n?"".concat(n,":"):"").concat(Object(c.r)(s,"0",2),":").concat(Object(c.r)(r,"0",2),".").concat(Object(c.r)(i,"0",3)," ").concat(o)}},275:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var c=n(16),a=n(31),s=n(34);function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(c,arguments,a)}else n=c.apply(this,arguments);return l(this,n)}}var j=n(50),b=n(27),d=n(0),m=n.n(d),f=n(73),h=n(42),x=n(149),O=n(51),p=n(41),v=n(139),g=n(105),y=n(268),N=n(125),w=n(173),E=n(262),k=n(25),C=n(108),_=n(118),T=n(185),R=n(6),D=n(1),S=1e3,M=36e5;function P(e){return Object(D.jsxs)(f.a,{className:"mb-2",children:[Object(D.jsx)(W,{}),Object(D.jsx)(z,{}),Object(D.jsx)(F,{})]})}var I=160,B=48e4,z=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(n,e);var t=u(n);function n(e){var c;Object(a.a)(this,n),(c=t.call(this,e)).setResin=function(e){return c.setState((function(t){var n={resin:e=parseInt(e)||0};return e>=I?(c.resinIncrement&&clearTimeout(c.resinIncrement),c.resinIncrement=0,t.resin<I&&(n.date=(new Date).getTime())):(c.resinIncrement&&clearTimeout(c.resinIncrement),c.resinIncrement=setInterval((function(){return c.setResin(c.state.resin+1)}),B),n.date=(new Date).getTime()),n}))};var s=Object(R.m)("resinInfo");c.state=s||{resin:100,date:(new Date).getTime()};var r=c.state,i=r.resin,o=r.date;if(i<I&&Date.now()-o>B){var l=I-i,u=Math.min(Math.floor((Date.now()-o)/B),l);i+=u,o+=u*B,c.state.resin=i,c.state.date=o}return k.a.pageview("/tools"),c}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.state,n=t.resin,c=t.date;if(n<I){var a=c+B-new Date;this.resinIncrement=setTimeout((function(){e.setResin(e.state.resin+1)}),a)}this.updateTimer=setInterval((function(){return e.forceUpdate()}),S)}},{key:"componentWillUnmount",value:function(){this.updateTimer&&clearInterval(this.updateTimer),this.resinIncrement&&clearTimeout(this.resinIncrement)}},{key:"componentDidUpdate",value:function(){var e=Object(R.f)(this.state);Object(R.q)("resinInfo",e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.resin,c=t.date,a=n>=I?c:c+B,s=new Date(n>=I?c:c+(I-n)*B),r=Object(T.a)(Math.abs(a-Date.now()));return Object(D.jsxs)(h.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:[Object(D.jsxs)(h.a.Header,{children:[Object(D.jsx)(x.a,{src:C.a.resin.fragile,className:"thumb-small d-inline my-n1 ml-n2"}),Object(D.jsx)("span",{children:"Resin Counter"})]}),Object(D.jsx)(h.a.Body,{children:Object(D.jsxs)(O.a,{children:[Object(D.jsx)(p.a,{xs:"auto",className:"px-3",children:Object(D.jsxs)("span",{style:{fontSize:"4em"},children:[Object(D.jsx)(x.a,{src:C.a.resin.fragile,className:"d-inline w-auto mt-n3 ml-n3 mr-n4",style:{height:"1.5em"}}),Object(D.jsx)("input",{type:"number",className:"invisible-input hide-appearance text-white mb-0 text-right",size:"4",value:n,min:0,max:999,style:{width:"2.1em"},onChange:function(t){return e.setResin(t.target.value)}}),"/",I]})}),Object(D.jsxs)(p.a,{children:[Object(D.jsxs)(v.a,{className:"w-100 d-flex mb-2",children:[Object(D.jsx)(g.a,{onClick:function(){return e.setResin(0)},disabled:0===n,children:"0"}),Object(D.jsx)(g.a,{onClick:function(){return e.setResin(n-1)},disabled:0===n,children:"-1"}),Object(D.jsx)(g.a,{onClick:function(){return e.setResin(n-20)},disabled:n<20,children:"-20"}),Object(D.jsx)(g.a,{onClick:function(){return e.setResin(n-40)},disabled:n<40,children:"-40"}),Object(D.jsx)(g.a,{onClick:function(){return e.setResin(n-60)},disabled:n<60,children:"-60"}),Object(D.jsx)(g.a,{onClick:function(){return e.setResin(n+1)},children:"+1"}),Object(D.jsx)(g.a,{onClick:function(){return e.setResin(n+60)},children:"+60"}),Object(D.jsxs)(g.a,{onClick:function(){return e.setResin(I)},disabled:n===I,children:["MAX ",I]})]}),Object(D.jsx)("h5",{children:n<I?Object(D.jsxs)("span",{children:["Next resin in ",r,", full Resin at ",s.toLocaleTimeString()," ",s.toLocaleDateString()]}):Object(D.jsxs)("span",{children:["Resin has been full for at least ",r,", since ",s.toLocaleTimeString()," ",s.toLocaleDateString()]})})]}),Object(D.jsx)("small",{children:"Because we do not provide a mechanism to synchronize resin time, actual resin recharge time might be as much as 8 minutes earlier than predicted."})]})})]})}}]),n}(m.a.Component),H={America:-18e6,Europe:M,Asia:288e5,"TW, HK, MO":288e5};function W(e){var t=Object(d.useState)(Object.keys(H)[0]),n=Object(c.a)(t,2),a=n[0],s=n[1],r=Object(d.useState)(new Date(Date.now()+H[a])),i=Object(c.a)(r,2),o=i[0],l=i[1];Object(d.useEffect)((function(){return s(Object(R.m)("server_timezone")||Object.keys(H)[0])}),[]),Object(d.useEffect)((function(){var e=function t(){return l(new Date(Date.now()+H[a])),setTimeout((function(){e=t()}),S-Date.now()%S)}();return Object(R.q)("server_timezone",a),function(){return clearTimeout(e)}}),[a]);var u=new Date(o);u.getUTCHours()<4?u.setUTCHours(4,0,0,0):(u=new Date(u.getTime()+864e5)).setUTCHours(4,0,0,0);var m=u.getTime()-o.getTime(),f=Object(T.a)(m);return Object(D.jsxs)(h.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:[Object(D.jsx)(h.a.Header,{children:Object(D.jsxs)(O.a,{children:[Object(D.jsxs)(p.a,{xs:"auto",children:[Object(D.jsx)("h5",{className:"d-inline",children:Object(D.jsx)(b.a,{icon:j.c,className:"fa-fw mr-2"})}),Object(D.jsx)("span",{children:"Teyvat Time"})]}),Object(D.jsx)(p.a,{xs:"auto",children:Object(D.jsx)(y.a,{title:a,children:Object.keys(H).map((function(e){return Object(D.jsx)(N.a.Item,{onClick:function(){return s(e)},children:e},e)}))})})]})}),Object(D.jsx)(h.a.Body,{children:Object(D.jsxs)(O.a,{className:"d-flex justify-content-center",children:[Object(D.jsx)(p.a,{xs:"auto",className:"px-3",children:Object(D.jsx)("span",{style:{fontSize:"4em"},className:"d-block",children:o.toLocaleTimeString([],{timeZone:"UTC"})})}),Object(D.jsx)(p.a,{xs:"auto ",children:Object(D.jsxs)("div",{className:"h-100 d-flex flex-column",children:[Object(D.jsxs)("div",{xs:12,className:"flex-grow-1",children:["Server Date: ",Object(D.jsx)("b",{children:o.toDateString()})]}),Object(D.jsxs)("div",{xs:12,className:"flex-grow-1",children:["Time until reset: ",Object(D.jsx)("b",{children:f})]}),Object(D.jsxs)("div",{xs:12,className:"flex-grow-1",children:["Resin until reset: ",Object(D.jsx)("b",{children:Math.floor(m/48e4)})]})]})})]})})]})}var q={advice:{name:"Wanderer's Advice",exp:1e3,cost:200,img:C.a.exp_books.advice},experience:{name:"Adventurer's Experience",exp:5e3,cost:1e3,img:C.a.exp_books.experience},wit:{name:"Hero's Wit",exp:2e4,cost:4e3,img:C.a.exp_books.wit}},A=[0,1e3,1325,1700,2150,2625,3150,3725,4350,5e3,5700,6450,7225,8050,8925,9825,10750,11725,12725,13775,14875,16800,18e3,19250,20550,21875,23250,24650,26100,27575,29100,30650,32250,33875,35550,37250,38975,40750,42575,44425,46300,50625,52700,54775,56900,59075,61275,63525,65800,68125,70475,76500,79050,81650,84275,86950,89650,92400,95175,98e3,100875,108950,112050,115175,118325,121525,124775,128075,131400,134775,138175,148700,152375,156075,159825,163600,167425,171300,175225,179175,183175,216225,243025,273100,306800,344600,386950,434425,487625,547200],L=[20,40,50,60,70,80,90];function F(e){var t=Object(d.useState)(0),n=Object(c.a)(t,2),a=n[0],s=n[1],r=Object(d.useState)(0),i=Object(c.a)(r,2),o=i[0],l=i[1],u=Object(d.useState)(0),j=Object(c.a)(u,2),b=j[0],m=j[1],f={advice:a,experience:o,wit:b},y={advice:s,experience:l,wit:m},N=Object(d.useState)(!1),k=Object(c.a)(N,2),C=k[0],T=k[1],S=Object(d.useState)(1),M=Object(c.a)(S,2),P=M[0],I=M[1],B=Object(d.useState)(0),z=Object(c.a)(B,2),H=z[0],W=z[1],F=Object(d.useState)(0),X=Object(c.a)(F,2),V=X[0],Y=X[1];Object(d.useEffect)((function(){return Y(Object(R.m)("mora")||0)}),[]),Object(d.useEffect)((function(){Object(R.q)("mora",V)}),[V]),Object(d.useEffect)((function(){return I(Object(R.m)("exp_calc_level")||1)}),[]),Object(d.useEffect)((function(){Object(R.q)("exp_calc_level",P)}),[P]),Object(d.useEffect)((function(){return W(Object(R.m)("exp_calc_cur_exp")||0)}),[]),Object(d.useEffect)((function(){Object(R.q)("exp_calc_cur_exp",H)}),[H]),Object(d.useEffect)((function(){var e=Object(R.m)("exp_books")||{},t={advice:s,experience:l,wit:m};Object.entries(e).forEach((function(e){var n,a=Object(c.a)(e,2),s=a[0],r=a[1];return null===(n=t[s])||void 0===n?void 0:n.call(t,r)}))}),[]),Object(d.useEffect)((function(){return Object(R.q)("exp_books",{advice:a,experience:o,wit:b})}),[a,o,b]);for(var G=L.find((function(e){return e>P})),J=-H,K=P;K<Math.min(G,A.length);K++)J+=A[K];for(var Z=function(e,t,n,c,a){var s=a?Math.floor(c/1e3):Math.ceil(c/1e3),r=Math.min(Math.floor(s/20),e);s-=20*r;var i=Math.min(Math.floor(s/5),t);s-=5*i;var o=Math.min(s,n);if(s-=o,a||0===s)return[r,i,o];if(3===i&&r!==e)return[r+1,0,0];if(i!==t)return[r,i+1,0];if(r!==e)return[r+1,0,0];return null}(b,o,a,J,C)||[],Q=Object(c.a)(Z,3),$=Q[0],ee=void 0===$?0:$,te=Q[1],ne=void 0===te?0:te,ce=Q[2],ae=void 0===ce?0:ce,se={advice:ae,experience:ne,wit:ee},re=2e4*ee+5e3*ne+1e3*ae,ie=re/5,oe=J-re,le=V-ie,ue=re+H,je=P;je<Math.min(G,A.length)&&A[je]<=ue;je++)ue-=A[je];je===G&&(ue=0);var be="";return le<0?be=Object(D.jsxs)("span",{children:["You don't have enough ",Object(D.jsx)("b",{children:"Mora"})," for this operation."]}):0===Z.length?be=Object(D.jsxs)("span",{children:["You don't have enough ",Object(D.jsx)("b",{children:"EXP. books"})," to level to the next milestone."]}):90===P&&(be="You are at the maximum level."),Object(D.jsxs)(h.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:[Object(D.jsx)(h.a.Header,{children:Object(D.jsxs)(O.a,{children:[Object(D.jsxs)(p.a,{xs:"auto",children:[Object(D.jsx)(x.a,{src:q.wit.img,className:"thumb-small d-inline my-n1 ml-n2"}),Object(D.jsx)("span",{children:"Experience Calculator"})]}),Object(D.jsx)(p.a,{children:Object(D.jsxs)(v.a,{children:[Object(D.jsx)(g.a,{variant:C?"primary":"success",disabled:!C,onClick:function(){return T(!1)},children:"Full Level"}),Object(D.jsx)(g.a,{variant:C?"success":"primary",disabled:C,onClick:function(){return T(!0)},children:"Don't fully level"})]})})]})}),Object(D.jsxs)(h.a.Body,{children:[Object(D.jsx)(O.a,{className:"mb-2",children:Object(D.jsxs)(p.a,{children:[Object(D.jsx)("span",{children:"This calcualtor tries to calculate the amount of exp books required to get to the next milestone level. "}),C?"It will try to get as close to the milestone level as possible, so you can grind the rest of the exp without any waste.":"It will try to calculate the amount of books needed to minize as much exp loss as possible."]})}),Object(D.jsxs)(O.a,{children:[Object(D.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(D.jsxs)(w.a,{children:[Object(D.jsx)(w.a.Prepend,{children:Object(D.jsx)(w.a.Text,{children:"Current Level"})}),Object(D.jsx)(_.a,{value:P,onChange:function(e){return I(Object(R.a)(e,0,90))}})]})}),Object(D.jsx)(p.a,{xs:12,md:8,className:"mb-2",children:Object(D.jsxs)(w.a,{children:[Object(D.jsx)(w.a.Prepend,{children:Object(D.jsx)(w.a.Text,{children:"Current EXP."})}),Object(D.jsx)(_.a,{value:H,onChange:function(e){return W(Object(R.a)(e,0,(A[P]||1)-1))}}),Object(D.jsx)(w.a.Append,{children:Object(D.jsxs)(w.a.Text,{children:["/",A[P]||0]})})]})}),Object(D.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(D.jsx)(h.a,{bg:"lightcontent",text:"lightfont",children:Object(D.jsxs)(h.a.Body,{className:"py-2",children:[Object(D.jsx)("span",{children:"Next Milestone: "}),Object(D.jsx)("span",{className:"float-right text-right",children:Object(D.jsx)("b",{children:G})})]})})}),Object(D.jsx)(p.a,{xs:12,md:8,className:"mb-2",children:Object(D.jsx)(h.a,{bg:"lightcontent",text:"lightfont",children:Object(D.jsxs)(h.a.Body,{className:"py-2",children:[Object(D.jsx)("span",{children:"EXP. needed to milestone: "}),Object(D.jsxs)("span",{className:"float-right text-right",children:[Object(D.jsx)("strong",{children:re})," / ",Object(D.jsx)("b",{children:J})]})]})})})]}),Object(D.jsxs)(O.a,{children:[Object.entries(q).map((function(e){var t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(D.jsx)(p.a,{xs:12,lg:4,children:Object(D.jsx)(U,{bookObj:a,value:f[n],setValue:y[n],required:se[n]})},n)})),Object(D.jsx)(p.a,{xs:12,lg:4,className:"mb-2",children:Object(D.jsxs)(w.a,{children:[Object(D.jsx)(w.a.Prepend,{children:Object(D.jsx)(w.a.Text,{children:"Current Mora"})}),Object(D.jsx)(_.a,{value:V,onChange:function(e){return Y(Math.max(e,0))}})]})}),Object(D.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(D.jsx)(h.a,{bg:"lightcontent",text:"lightfont",children:Object(D.jsxs)(h.a.Body,{className:"py-2",children:[Object(D.jsx)("span",{children:"Mora Cost: "}),Object(D.jsx)("span",{className:"float-right text-right",children:Object(D.jsx)("b",{children:ie})})]})})}),Object(D.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(D.jsx)(h.a,{bg:"lightcontent",text:"lightfont",children:Object(D.jsxs)(h.a.Body,{className:"py-2",children:[Object(D.jsxs)("span",{children:["EXP ",C?"Diff":"Waste",": "]}),Object(D.jsx)("span",{className:"float-right text-right",children:Object(D.jsx)("b",{className:oe<0?"text-danger":"text-success",children:oe})})]})})}),Object(D.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(D.jsx)(h.a,{bg:"lightcontent",text:"lightfont",children:Object(D.jsxs)(h.a.Body,{className:"py-2",children:[Object(D.jsx)("span",{children:"Final Mora: "}),Object(D.jsx)("span",{className:"float-right text-right",children:Object(D.jsx)("b",{className:le<0?"text-danger":"text-success",children:le})})]})})}),Object(D.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(D.jsx)(h.a,{bg:"lightcontent",text:"lightfont",children:Object(D.jsxs)(h.a.Body,{className:"py-2",children:[Object(D.jsx)("span",{children:"Final Level: "}),Object(D.jsx)("span",{className:"float-right text-right",children:Object(D.jsx)("b",{className:"text-success",children:je})})]})})}),Object(D.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(D.jsx)(h.a,{bg:"lightcontent",text:"lightfont",children:Object(D.jsxs)(h.a.Body,{className:"py-2",children:[Object(D.jsx)("span",{children:"Final EXP: "}),Object(D.jsx)("span",{className:"float-right text-right",children:Object(D.jsx)("b",{className:ue<0?"text-danger":"text-success",children:ue})})]})})})]})]}),Object(D.jsx)(h.a.Footer,{children:Object(D.jsxs)(O.a,{children:[Object(D.jsx)(p.a,{children:Boolean(be)&&Object(D.jsx)(E.a,{variant:"danger",className:"mb-0 py-2",children:be})}),Object(D.jsx)(p.a,{xs:"auto",children:Object(D.jsx)(g.a,{disabled:be,onClick:function(){I(je),W(ue),Object.entries(se).forEach((function(e){var t,n=Object(c.a)(e,2),a=n[0],s=n[1];return null===(t=y[a])||void 0===t?void 0:t.call(y,f[a]-s)})),Y(le)},variant:"success",children:"Apply"})})]})})]})}function U(e){var t=e.bookObj,n=t.name,c=t.img,a=e.value,s=void 0===a?0:a,r=e.setValue,i=e.required,o=void 0===i?0:i;return Object(D.jsxs)(h.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(D.jsx)(h.a.Header,{children:n}),Object(D.jsx)(h.a.Body,{children:Object(D.jsxs)(O.a,{children:[Object(D.jsx)(p.a,{xs:3,children:Object(D.jsx)(x.a,{src:c,className:"w-100 h-auto",rounded:!0})}),Object(D.jsxs)(p.a,{children:[Object(D.jsxs)(w.a,{children:[Object(D.jsx)(w.a.Prepend,{children:Object(D.jsx)(w.a.Text,{children:"Amount"})}),Object(D.jsx)(_.a,{value:s,onChange:function(e){return r(Math.max(e,0))}})]}),Object(D.jsxs)("div",{className:"mt-2",children:[Object(D.jsx)("span",{children:"Required: "}),Object(D.jsx)("span",{className:"float-right text-right",children:Object(D.jsx)("b",{className:o?"text-success":"",children:o})})]})]})]})})]})}}}]);
//# sourceMappingURL=16.8eff286a.chunk.js.map