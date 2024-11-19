var __ember_auto_import__;(()=>{var e,r,t,i={4566:(e,r,t)=>{"use strict"
t.r(r),t.d(r,{default:()=>d})
var i=t(4471),n=t(9553),o=t(2735),s=t.n(o)
const c=require("@ember/object/evented")
var a=t.n(c),u=t(2294),m=t(1223),b=t(1603)
function l(e){const{classes:r,disabled:t,label:i,secondary:n,text:o,type:s}=e
return s?((0,b.assert)("'type' property must be one of 'back', 'cancel', or 'next'",["back","cancel","next"].includes(s)),{action:(0,m.bind)(this,(function(){this[s]()})),classes:r,disabled:t,label:i,secondary:n,text:o}):e}function p(e,r,t){return(r=function(e){var r=function(e){if("object"!=typeof e||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var t=r.call(e,"string")
if("object"!=typeof t)return t
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof r?r:r+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class d extends(s().extend(a())){constructor(...e){super(...e),p(this,"classPrefix",void 0),p(this,"confirmCancel",!1),p(this,"confirmCancelMessage",null),p(this,"defaultStepOptions",{}),p(this,"errorTitle",null),p(this,"exitOnEsc",void 0),p(this,"isActive",!1),p(this,"keyboardNavigation",void 0),p(this,"messageForUser",null),p(this,"modal",!1),p(this,"modalContainer",void 0),p(this,"requiredElements",[]),p(this,"steps",[])}addSteps(e){return this._initialize().then((()=>{const r=this.tourObject;(0,n.isEmpty)(e)||(this._requiredElementsPresent()?e.forEach((e=>{e.buttons&&(e.buttons=e.buttons.map(l.bind(this),this)),r.addStep(e)})):r.addStep({buttons:[{text:"Exit",action:r.cancel}],id:"error",title:this.errorTitle,text:this.messageForUser}))}))}back(){this.tourObject.back(),this.trigger("back")}cancel(){this.tourObject.cancel()}complete(){this.tourObject.complete()}hide(){this.tourObject.hide()}next(){this.tourObject.next(),this.trigger("next")}show(e){this.tourObject.show(e)}start(){const e=this.tourObject
if(null==e)throw new Error("the Promise from addSteps must be in a resolved state before the tour can be started");(0,i.set)(this,"isActive",!0),e.start()}_onTourStart(){this.trigger("start")}_onTourFinish(e){this.isDestroyed||(0,i.set)(this,"isActive",!1),this.trigger(e)}_initialize(){const{classPrefix:e,confirmCancel:r,confirmCancelMessage:n,defaultStepOptions:o,exitOnEsc:s,keyboardNavigation:c,modal:a,modalContainer:b,tourName:l}=this
o.popperOptions=o.popperOptions||{}
let{rootElement:p}=(0,u.getOwner)(this)
return"string"==typeof p&&(p=document.querySelector(p)),t.e(225).then(t.bind(t,1225)).then((t=>{const u=new t.default.Tour({classPrefix:e,confirmCancel:r,confirmCancelMessage:n,defaultStepOptions:o,exitOnEsc:s,keyboardNavigation:c,modalContainer:b||document.body,tourName:l,useModalOverlay:a})
u.on("start",(0,m.bind)(this,"_onTourStart")),u.on("complete",(0,m.bind)(this,"_onTourFinish","complete")),u.on("cancel",(0,m.bind)(this,"_onTourFinish","cancel")),(0,i.set)(this,"tourObject",u)}))}_requiredElementsPresent(){let e=!0
const r=this.requiredElements
return(0,n.isPresent)(r)&&r.forEach((r=>{const t=document.querySelector(r.selector)
!e||t&&!function(e){return 0===e.offsetWidth&&0===e.offsetHeight}(t)||(e=!1,(0,i.set)(this,"errorTitle",r.title),(0,i.set)(this,"messageForUser",r.message))})),e}}},4463:e=>{"use strict"
e.exports=require("@ember/-internals/metal")},2294:e=>{"use strict"
e.exports=require("@ember/application")},1389:e=>{"use strict"
e.exports=require("@ember/array")},8410:e=>{"use strict"
e.exports=require("@ember/array/proxy")},2663:e=>{"use strict"
e.exports=require("@ember/component")},336:e=>{"use strict"
e.exports=require("@ember/component/helper")},1603:e=>{"use strict"
e.exports=require("@ember/debug")},1806:e=>{"use strict"
e.exports=require("@ember/debug/data-adapter")},1130:e=>{"use strict"
e.exports=require("@ember/destroyable")},2377:e=>{"use strict"
e.exports=require("@ember/modifier")},4471:e=>{"use strict"
e.exports=require("@ember/object")},394:e=>{"use strict"
e.exports=require("@ember/object/compat")},3991:e=>{"use strict"
e.exports=require("@ember/object/computed")},4666:e=>{"use strict"
e.exports=require("@ember/object/internals")},2181:e=>{"use strict"
e.exports=require("@ember/object/mixin")},123:e=>{"use strict"
e.exports=require("@ember/object/observers")},9280:e=>{"use strict"
e.exports=require("@ember/object/promise-proxy-mixin")},7104:e=>{"use strict"
e.exports=require("@ember/object/proxy")},1223:e=>{"use strict"
e.exports=require("@ember/runloop")},2735:e=>{"use strict"
e.exports=require("@ember/service")},7970:e=>{"use strict"
e.exports=require("@ember/template")},1465:e=>{"use strict"
e.exports=require("@ember/template-factory")},9553:e=>{"use strict"
e.exports=require("@ember/utils")},8855:e=>{"use strict"
e.exports=require("@glimmer/component")},473:e=>{"use strict"
e.exports=require("@glimmer/tracking")},4217:e=>{"use strict"
e.exports=require("@glimmer/tracking/primitives/cache")},5606:e=>{"use strict"
e.exports=require("@glimmer/validator")},8993:e=>{"use strict"
e.exports=require("ember-concurrency")},9338:e=>{"use strict"
e.exports=require("ember-concurrency/-private/async-arrow-runtime")},3133:(e,r,t)=>{e.exports=function(){var e=_eai_d,r=_eai_r
function i(e){return e&&e.__esModule?e:Object.assign({default:e},e)}window.emberAutoImportDynamic=function(e){return 1===arguments.length?r("_eai_dyn_"+e):r("_eai_dynt_"+e)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(e){return r("_eai_sync_"+e)(Array.prototype.slice.call(arguments,1))},e("@ember-data/adapter",["@ember/object","@ember/service","@ember/debug","@ember/-internals/metal","@glimmer/validator","@ember/runloop","@glimmer/tracking/primitives/cache","@ember/object/compat","@ember/object/mixin"],(function(){return i(t(6120))})),e("@ember-data/debug/data-adapter",["@ember/array","@ember/debug/data-adapter","@ember/object/observers","@ember/service","@ember/debug","@ember/-internals/metal","@glimmer/validator","@ember/runloop","@glimmer/tracking/primitives/cache","@ember/object/compat"],(function(){return i(t(7153))})),e("@ember-data/model",["@ember/debug","@ember/object","@ember/-internals/metal","@glimmer/validator","@ember/runloop","@glimmer/tracking/primitives/cache","@ember/object/compat","@ember/array","@ember/array/proxy","@ember/object/computed","@ember/object/promise-proxy-mixin","@ember/object/proxy","@ember/object/internals","@ember/application"],(function(){return i(t(4446))})),e("@ember-data/request-utils/deprecation-support",["@ember/debug"],(function(){return i(t(3358))})),e("@ember-data/serializer",["@ember/object","@ember/service"],(function(){return i(t(2354))})),e("@ember-data/serializer/transform",["@ember/object"],(function(){return i(t(1158))})),e("@handlebars/parser",[],(function(){return i(t(1487))})),e("clipboard",[],(function(){return i(t(7602))})),e("ember-data/store",["@ember/debug","@ember/-internals/metal","@glimmer/validator","@ember/runloop","@glimmer/tracking/primitives/cache","@ember/object/compat","@ember/application","@ember/object","@ember/array","@ember/array/proxy","@ember/object/computed","@ember/object/promise-proxy-mixin","@ember/object/proxy","@ember/object/internals"],(function(){return i(t(6602))})),e("ember-keyboard",["@ember/utils","@ember/service","@ember/destroyable","@ember/debug"],(function(){return i(t(6203))})),e("ember-keyboard/helpers/if-key.js",["@ember/component/helper","@ember/debug","@ember/utils"],(function(){return i(t(9770))})),e("ember-keyboard/helpers/on-key.js",["@ember/component/helper","@ember/debug","@ember/service"],(function(){return i(t(2308))})),e("ember-keyboard/modifiers/on-key.js",["@ember/application","@ember/modifier","@ember/destroyable","@ember/service","@ember/object","@ember/debug","@ember/utils"],(function(){return i(t(2449))})),e("ember-keyboard/services/keyboard.js",["@ember/service","@ember/application","@ember/object","@ember/runloop","@ember/debug","@ember/utils"],(function(){return i(t(7628))})),e("ember-modifier",["@ember/application","@ember/modifier","@ember/destroyable"],(function(){return i(t(2033))})),e("ember-page-title/helpers/page-title",["@ember/service","@ember/component/helper","@ember/object/internals"],(function(){return i(t(6191))})),e("ember-page-title/services/page-title",["@ember/runloop","@ember/service","@ember/utils","@ember/debug"],(function(){return i(t(9944))})),e("ember-shepherd/services/tour",["@ember/object","@ember/utils","@ember/service","@ember/application","@ember/runloop","@ember/debug"],(function(){return i(t(4566))})),e("ember-shiki/components/code-block",["@ember/application","@ember/service","@glimmer/component","@glimmer/tracking","@ember/template","@ember/component","@ember/template-factory"],(function(){return i(t(2437))})),e("ember-shiki/components/code-group",["@glimmer/component","@glimmer/tracking","@ember/component","@ember/template-factory"],(function(){return i(t(7723))})),e("ember-shiki/components/code-tab",["@glimmer/component","@ember/component","@ember/template-factory"],(function(){return i(t(9195))})),e("ember-shiki/components/copy-button",["ember-concurrency/-private/async-arrow-runtime","@glimmer/component","@glimmer/tracking","ember-concurrency","@ember/component","@ember/template-factory"],(function(){return i(t(6970))})),e("ember-shiki/modifiers/shiki-render",["ember-concurrency/-private/async-arrow-runtime","@ember/application","@ember/modifier","@ember/destroyable","@ember/service","ember-concurrency"],(function(){return i(t(839))})),e("ember-shiki/services/shiki",["ember-concurrency/-private/async-arrow-runtime","@ember/application","@ember/service","ember-concurrency","@glimmer/tracking"],(function(){return i(t(3160))})),e("ember-truth-helpers/helpers/and",["@ember/component/helper","@ember/array"],(function(){return i(t(8680))})),e("ember-truth-helpers/helpers/eq",[],(function(){return i(t(2307))})),e("ember-truth-helpers/helpers/gt",[],(function(){return i(t(6290))})),e("ember-truth-helpers/helpers/gte",[],(function(){return i(t(219))})),e("ember-truth-helpers/helpers/is-array",["@ember/array"],(function(){return i(t(4829))})),e("ember-truth-helpers/helpers/is-empty",["@ember/utils"],(function(){return i(t(1589))})),e("ember-truth-helpers/helpers/is-equal",["@ember/utils"],(function(){return i(t(6488))})),e("ember-truth-helpers/helpers/lt",[],(function(){return i(t(1317))})),e("ember-truth-helpers/helpers/lte",[],(function(){return i(t(6982))})),e("ember-truth-helpers/helpers/not",["@ember/array"],(function(){return i(t(6420))})),e("ember-truth-helpers/helpers/not-eq",[],(function(){return i(t(7431))})),e("ember-truth-helpers/helpers/or",["@ember/array","@ember/component/helper"],(function(){return i(t(876))})),e("ember-truth-helpers/helpers/xor",["@ember/array"],(function(){return i(t(7088))})),e("highlight.js/lib/core",[],(function(){return i(t(738))})),e("highlight.js/lib/languages/css",[],(function(){return i(t(350))})),e("highlight.js/lib/languages/diff",[],(function(){return i(t(5262))})),e("highlight.js/lib/languages/handlebars",[],(function(){return i(t(2213))})),e("highlight.js/lib/languages/javascript",[],(function(){return i(t(4478))})),e("highlight.js/lib/languages/json",[],(function(){return i(t(3055))})),e("highlight.js/lib/languages/shell",[],(function(){return i(t(1735))})),e("highlight.js/lib/languages/typescript",[],(function(){return i(t(9566))})),e("highlight.js/lib/languages/xml",[],(function(){return i(t(4280))})),e("line-column",[],(function(){return i(t(8171))})),e("lodash",[],(function(){return i(t(7359))})),e("lunr",[],(function(){return i(t(3942))})),e("marked",[],(function(){return i(t(1403))})),e("marked-highlight",[],(function(){return i(t(3031))})),e("node-html-parser",[],(function(){return i(t(8077))})),e("prop-types",[],(function(){return i(t(9368))})),e("tether",[],(function(){return i(t(1845))})),e("tracked-toolbox",["@ember/debug","@ember/object","@glimmer/tracking","@glimmer/tracking/primitives/cache"],(function(){return i(t(5451))}))}()},7992:function(e,r){window._eai_r=require,window._eai_d=define}},n={}
function o(e){var r=n[e]
if(void 0!==r)return r.exports
var t=n[e]={id:e,loaded:!1,exports:{}}
return i[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}o.m=i,e=[],o.O=(r,t,i,n)=>{if(!t){var s=1/0
for(m=0;m<e.length;m++){for(var[t,i,n]=e[m],c=!0,a=0;a<t.length;a++)(!1&n||s>=n)&&Object.keys(o.O).every((e=>o.O[e](t[a])))?t.splice(a--,1):(c=!1,n<s&&(s=n))
if(c){e.splice(m--,1)
var u=i()
void 0!==u&&(r=u)}}return r}n=n||0
for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1]
e[m]=[t,i,n]},o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e
return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>"chunk."+e+"."+{225:"89ffab82fcc048cef120",341:"2ec740b91959b2c34254",601:"6634fc9a00c7f944ae4f"}[e]+".js",o.miniCssF=e=>{},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="__ember_auto_import__:",o.l=(e,i,n,s)=>{if(r[e])r[e].push(i)
else{var c,a
if(void 0!==n)for(var u=document.getElementsByTagName("script"),m=0;m<u.length;m++){var b=u[m]
if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==t+n){c=b
break}}c||(a=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",t+n),c.src=e),r[e]=[i]
var l=(t,i)=>{c.onerror=c.onload=null,clearTimeout(p)
var n=r[e]
if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((e=>e(i))),t)return t(i)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4)
c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),a&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.p="ADDON_DOCS_ROOT_URL/assets/",(()=>{var e={524:0}
o.f.j=(r,t)=>{var i=o.o(e,r)?e[r]:void 0
if(0!==i)if(i)t.push(i[2])
else{var n=new Promise(((t,n)=>i=e[r]=[t,n]))
t.push(i[2]=n)
var s=o.p+o.u(r),c=new Error
o.l(s,(t=>{if(o.o(e,r)&&(0!==(i=e[r])&&(e[r]=void 0),i)){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src
c.message="Loading chunk "+r+" failed.\n("+n+": "+s+")",c.name="ChunkLoadError",c.type=n,c.request=s,i[1](c)}}),"chunk-"+r,r)}},o.O.j=r=>0===e[r]
var r=(r,t)=>{var i,n,[s,c,a]=t,u=0
if(s.some((r=>0!==e[r]))){for(i in c)o.o(c,i)&&(o.m[i]=c[i])
if(a)var m=a(o)}for(r&&r(t);u<s.length;u++)n=s[u],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0
return o.O(m)},t=globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]
t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),o.O(void 0,[805],(()=>o(7992)))
var s=o.O(void 0,[805],(()=>o(3133)))
s=o.O(s),__ember_auto_import__=s})()
