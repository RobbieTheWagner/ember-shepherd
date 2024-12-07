var __ember_auto_import__;(()=>{var e,r,t,i={8990:(e,r,t)=>{"use strict"
t.r(r),t.d(r,{default:()=>z})
var i=t(9553),n=t(2735),o=t.n(n)
const s=require("@ember/object/evented")
var a,c,u,l,m,b,p,d,h,f,g,y,v,_,j,k=t.n(s),x=t(1223),O=t(473),w=(t(3528),t(1603))
function q(e){const{classes:r,disabled:t,label:i,secondary:n,text:o,type:s}=e
return s?((0,w.assert)("'type' property must be one of 'back', 'cancel', or 'next'",["back","cancel","next"].includes(s)),{action:(0,x.bind)(this,(function(){this[s]()})),classes:r,disabled:t,label:i,secondary:n,text:o,type:s}):e}function E(e,r,t,i,n){var o={}
return Object.keys(i).forEach((function(e){o[e]=i[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=t.slice().reverse().reduce((function(t,i){return i(e,r,t)||t}),o),void 0===o.initializer?(Object.defineProperty(e,r,o),null):o}function C(e,r,t,i){t&&Object.defineProperty(e,r,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(i):void 0})}let z=(a=class extends(o().extend(k())){constructor(...e){super(...e),C(this,"classPrefix",c,this),C(this,"confirmCancel",u,this),C(this,"confirmCancelMessage",l,this),C(this,"defaultStepOptions",m,this),C(this,"errorTitle",b,this),C(this,"exitOnEsc",p,this),C(this,"isActive",d,this),C(this,"keyboardNavigation",h,this),C(this,"messageForUser",f,this),C(this,"modal",g,this),C(this,"modalContainer",y,this),C(this,"requiredElements",v,this),C(this,"stepsContainer",_,this),C(this,"tourObject",j,this)}addSteps(e){return this._initialize().then((()=>{const r=this.tourObject;(0,i.isEmpty)(e)||(this._requiredElementsPresent()?e.forEach((e=>{e.buttons&&(e.buttons=e.buttons.map(q.bind(this),this)),r.addStep(e)})):r.addStep({buttons:[{text:"Exit",action:r.cancel}],id:"error",title:this.errorTitle,text:this.messageForUser}))}))}back(){this.tourObject.back(),this.trigger("back")}cancel(){this.tourObject.cancel()}complete(){this.tourObject.complete()}hide(){this.tourObject.hide()}next(){this.tourObject.next(),this.trigger("next")}show(e){this.tourObject.show(e)}start(){const e=this.tourObject
if(null==e)throw new Error("the Promise from addSteps must be in a resolved state before the tour can be started")
this.isActive=!0,e.start()}_onTourStart(){this.trigger("start")}_onTourFinish(e){this.isDestroyed||(this.isActive=!1),this.trigger(e)}_initialize(){const{classPrefix:e,confirmCancel:r,confirmCancelMessage:i,defaultStepOptions:n,exitOnEsc:o,keyboardNavigation:s,modal:a,modalContainer:c,stepsContainer:u,tourName:l}=this
return n.floatingUIOptions=n.floatingUIOptions||{},Promise.resolve().then(t.bind(t,3528)).then((t=>{const m=new t.default.Tour({classPrefix:e,confirmCancel:r,confirmCancelMessage:i,defaultStepOptions:n,exitOnEsc:o,keyboardNavigation:s,modalContainer:c||document.body,stepsContainer:u||document.body,tourName:l,useModalOverlay:a})
m.on("start",(0,x.bind)(this,"_onTourStart")),m.on("complete",(0,x.bind)(this,"_onTourFinish","complete")),m.on("cancel",(0,x.bind)(this,"_onTourFinish","cancel")),this.tourObject=m}))}_requiredElementsPresent(){let e=!0
const r=this.requiredElements
return(0,i.isPresent)(r)&&r.forEach((r=>{const t=document.querySelector(r.selector)
!e||t&&!function(e){return 0===e.offsetWidth&&0===e.offsetHeight}(t)||(e=!1,this.errorTitle=r.title,this.messageForUser=r.message)})),e}},c=E(a.prototype,"classPrefix",[O.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=E(a.prototype,"confirmCancel",[O.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),l=E(a.prototype,"confirmCancelMessage",[O.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=E(a.prototype,"defaultStepOptions",[O.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),b=E(a.prototype,"errorTitle",[O.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=E(a.prototype,"exitOnEsc",[O.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=E(a.prototype,"isActive",[O.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),h=E(a.prototype,"keyboardNavigation",[O.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=E(a.prototype,"messageForUser",[O.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=E(a.prototype,"modal",[O.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),y=E(a.prototype,"modalContainer",[O.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=E(a.prototype,"requiredElements",[O.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),_=E(a.prototype,"stepsContainer",[O.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=E(a.prototype,"tourObject",[O.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a)},4463:e=>{"use strict"
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
e.exports=require("ember-concurrency/-private/async-arrow-runtime")},8612:(e,r,t)=>{e.exports=function(){var e=_eai_d,r=_eai_r
function i(e){return e&&e.__esModule?e:Object.assign({default:e},e)}window.emberAutoImportDynamic=function(e){return 1===arguments.length?r("_eai_dyn_"+e):r("_eai_dynt_"+e)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(e){return r("_eai_sync_"+e)(Array.prototype.slice.call(arguments,1))},e("@ember-data/adapter",["@ember/object","@ember/service","@ember/debug","@ember/-internals/metal","@glimmer/validator","@ember/runloop","@glimmer/tracking/primitives/cache","@ember/object/compat","@ember/object/mixin"],(function(){return i(t(9248))})),e("@ember-data/debug/data-adapter",["@ember/array","@ember/debug/data-adapter","@ember/object/observers","@ember/service","@ember/debug","@ember/-internals/metal","@glimmer/validator","@ember/runloop","@glimmer/tracking/primitives/cache","@ember/object/compat"],(function(){return i(t(2648))})),e("@ember-data/model",["@ember/debug","@ember/object","@ember/-internals/metal","@glimmer/validator","@ember/runloop","@glimmer/tracking/primitives/cache","@ember/object/compat","@ember/array","@ember/array/proxy","@ember/object/computed","@ember/object/promise-proxy-mixin","@ember/object/proxy","@ember/object/internals","@ember/application"],(function(){return i(t(7194))})),e("@ember-data/request-utils/deprecation-support",["@ember/debug"],(function(){return i(t(1855))})),e("@ember-data/serializer",["@ember/object","@ember/service"],(function(){return i(t(3406))})),e("@ember-data/serializer/transform",["@ember/object"],(function(){return i(t(8690))})),e("@handlebars/parser",[],(function(){return i(t(2612))})),e("clipboard",[],(function(){return i(t(8895))})),e("ember-data/store",["@ember/debug","@ember/-internals/metal","@glimmer/validator","@ember/runloop","@glimmer/tracking/primitives/cache","@ember/object/compat","@ember/application","@ember/object","@ember/array","@ember/array/proxy","@ember/object/computed","@ember/object/promise-proxy-mixin","@ember/object/proxy","@ember/object/internals"],(function(){return i(t(7925))})),e("ember-keyboard",["@ember/utils","@ember/service","@ember/destroyable","@ember/debug"],(function(){return i(t(9063))})),e("ember-keyboard/helpers/if-key.js",["@ember/component/helper","@ember/debug","@ember/utils"],(function(){return i(t(250))})),e("ember-keyboard/helpers/on-key.js",["@ember/component/helper","@ember/debug","@ember/service"],(function(){return i(t(2420))})),e("ember-keyboard/modifiers/on-key.js",["@ember/application","@ember/modifier","@ember/destroyable","@ember/service","@ember/object","@ember/debug","@ember/utils"],(function(){return i(t(1953))})),e("ember-keyboard/services/keyboard.js",["@ember/service","@ember/application","@ember/object","@ember/runloop","@ember/debug","@ember/utils"],(function(){return i(t(6199))})),e("ember-modifier",["@ember/application","@ember/modifier","@ember/destroyable"],(function(){return i(t(4061))})),e("ember-page-title/helpers/page-title",["@ember/service","@ember/component/helper","@ember/object/internals"],(function(){return i(t(7227))})),e("ember-page-title/services/page-title",["@ember/runloop","@ember/service","@ember/utils","@ember/debug"],(function(){return i(t(8908))})),e("ember-shepherd/services/tour",["@ember/utils","@ember/service","@ember/runloop","@glimmer/tracking","@ember/debug"],(function(){return i(t(8990))})),e("ember-shiki/components/code-block",["@ember/application","@ember/service","@glimmer/component","@glimmer/tracking","@ember/template","@ember/component","@ember/template-factory"],(function(){return i(t(9869))})),e("ember-shiki/components/code-group",["@glimmer/component","@glimmer/tracking","@ember/component","@ember/template-factory"],(function(){return i(t(6003))})),e("ember-shiki/components/code-tab",["@glimmer/component","@ember/component","@ember/template-factory"],(function(){return i(t(4307))})),e("ember-shiki/components/copy-button",["ember-concurrency/-private/async-arrow-runtime","@glimmer/component","@glimmer/tracking","ember-concurrency","@ember/component","@ember/template-factory"],(function(){return i(t(6754))})),e("ember-shiki/modifiers/shiki-render",["ember-concurrency/-private/async-arrow-runtime","@ember/application","@ember/modifier","@ember/destroyable","@ember/service","ember-concurrency"],(function(){return i(t(4527))})),e("ember-shiki/services/shiki",["ember-concurrency/-private/async-arrow-runtime","@ember/application","@ember/service","ember-concurrency","@glimmer/tracking"],(function(){return i(t(7955))})),e("ember-truth-helpers/helpers/and",["@ember/component/helper","@ember/array"],(function(){return i(t(9146))})),e("ember-truth-helpers/helpers/eq",[],(function(){return i(t(6837))})),e("ember-truth-helpers/helpers/gt",[],(function(){return i(t(4904))})),e("ember-truth-helpers/helpers/gte",[],(function(){return i(t(469))})),e("ember-truth-helpers/helpers/is-array",["@ember/array"],(function(){return i(t(8731))})),e("ember-truth-helpers/helpers/is-empty",["@ember/utils"],(function(){return i(t(6595))})),e("ember-truth-helpers/helpers/is-equal",["@ember/utils"],(function(){return i(t(5030))})),e("ember-truth-helpers/helpers/lt",[],(function(){return i(t(4591))})),e("ember-truth-helpers/helpers/lte",[],(function(){return i(t(1116))})),e("ember-truth-helpers/helpers/not",["@ember/array"],(function(){return i(t(7066))})),e("ember-truth-helpers/helpers/not-eq",[],(function(){return i(t(8617))})),e("ember-truth-helpers/helpers/or",["@ember/array","@ember/component/helper"],(function(){return i(t(8854))})),e("ember-truth-helpers/helpers/xor",["@ember/array"],(function(){return i(t(8022))})),e("highlight.js/lib/core",[],(function(){return i(t(4645))})),e("highlight.js/lib/languages/css",[],(function(){return i(t(4363))})),e("highlight.js/lib/languages/diff",[],(function(){return i(t(9705))})),e("highlight.js/lib/languages/handlebars",[],(function(){return i(t(5722))})),e("highlight.js/lib/languages/javascript",[],(function(){return i(t(1721))})),e("highlight.js/lib/languages/json",[],(function(){return i(t(4052))})),e("highlight.js/lib/languages/shell",[],(function(){return i(t(214))})),e("highlight.js/lib/languages/typescript",[],(function(){return i(t(3329))})),e("highlight.js/lib/languages/xml",[],(function(){return i(t(5277))})),e("line-column",[],(function(){return i(t(1206))})),e("lodash",[],(function(){return i(t(6064))})),e("lunr",[],(function(){return i(t(1165))})),e("marked",[],(function(){return i(t(1403))})),e("marked-highlight",[],(function(){return i(t(9949))})),e("node-html-parser",[],(function(){return i(t(864))})),e("prop-types",[],(function(){return i(t(8555))})),e("tether",[],(function(){return i(t(8254))})),e("tracked-toolbox",["@ember/debug","@ember/object","@glimmer/tracking","@glimmer/tracking/primitives/cache"],(function(){return i(t(324))}))}()},2089:function(e,r){window._eai_r=require,window._eai_d=define},374:(e,r,t)=>{var i,n
e.exports=(i=_eai_d,n=_eai_r,window.emberAutoImportDynamic=function(e){return 1===arguments.length?n("_eai_dyn_"+e):n("_eai_dynt_"+e)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(e){return n("_eai_sync_"+e)(Array.prototype.slice.call(arguments,1))},i("dom-element-descriptors",[],(function(){return(e=t(715))&&e.__esModule?e:Object.assign({default:e},e)
var e})),void t(8612))},715:(e,r,t)=>{"use strict"
t.r(r),t.d(r,{IS_DESCRIPTOR:()=>i,createDescriptor:()=>m,isDescriptor:()=>n,lookupDescriptorData:()=>a,registerDescriptorData:()=>s,resolveDOMElement:()=>c,resolveDOMElements:()=>u,resolveDescription:()=>l})
const i="__dom_element_descriptor_is_descriptor__"
function n(e){return Boolean("object"==typeof e&&e&&i in e)}function o(){const e=window
return e.domElementDescriptorsRegistry=e.domElementDescriptorsRegistry||new WeakMap,e.domElementDescriptorsRegistry}function s(e,r){r?o().set(e,r):o().delete(e)}function a(e){return o().get(e)||null}function c(e){let r=n(e)?a(e):e
if(!r)return null
if(void 0!==r.element)return r.element
for(let t of r.elements||[])return t
return null}function u(e){let r=n(e)?a(e):e
if(!r)return[]
if(r.elements)return Array.from(r.elements)
{let e=r.element
return e?[e]:[]}}function l(e){let r=n(e)?a(e):e
return r?.description}function m(e){let r={[i]:!0}
return s(r,e),r}}},n={}
function o(e){var r=n[e]
if(void 0!==r)return r.exports
var t=n[e]={id:e,loaded:!1,exports:{}}
return i[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}o.m=i,e=[],o.O=(r,t,i,n)=>{if(!t){var s=1/0
for(l=0;l<e.length;l++){for(var[t,i,n]=e[l],a=!0,c=0;c<t.length;c++)(!1&n||s>=n)&&Object.keys(o.O).every((e=>o.O[e](t[c])))?t.splice(c--,1):(a=!1,n<s&&(s=n))
if(a){e.splice(l--,1)
var u=i()
void 0!==u&&(r=u)}}return r}n=n||0
for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1]
e[l]=[t,i,n]},o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e
return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>"chunk."+e+"."+{601:"945f7b68ed48d8edc4de",808:"c5ddd5aea19f135cee12"}[e]+".js",o.miniCssF=e=>{},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="__ember_auto_import__:",o.l=(e,i,n,s)=>{if(r[e])r[e].push(i)
else{var a,c
if(void 0!==n)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var m=u[l]
if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==t+n){a=m
break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+n),a.src=e),r[e]=[i]
var b=(t,i)=>{a.onerror=a.onload=null,clearTimeout(p)
var n=r[e]
if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(i))),t)return t(i)},p=setTimeout(b.bind(null,void 0,{type:"timeout",target:a}),12e4)
a.onerror=b.bind(null,a.onerror),a.onload=b.bind(null,a.onload),c&&document.head.appendChild(a)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.p="/ember-shepherd/assets/",(()=>{var e={524:0,582:0}
o.f.j=(r,t)=>{var i=o.o(e,r)?e[r]:void 0
if(0!==i)if(i)t.push(i[2])
else{var n=new Promise(((t,n)=>i=e[r]=[t,n]))
t.push(i[2]=n)
var s=o.p+o.u(r),a=new Error
o.l(s,(t=>{if(o.o(e,r)&&(0!==(i=e[r])&&(e[r]=void 0),i)){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src
a.message="Loading chunk "+r+" failed.\n("+n+": "+s+")",a.name="ChunkLoadError",a.type=n,a.request=s,i[1](a)}}),"chunk-"+r,r)}},o.O.j=r=>0===e[r]
var r=(r,t)=>{var i,n,[s,a,c]=t,u=0
if(s.some((r=>0!==e[r]))){for(i in a)o.o(a,i)&&(o.m[i]=a[i])
if(c)var l=c(o)}for(r&&r(t);u<s.length;u++)n=s[u],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0
return o.O(l)},t=globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]
t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),o.O(void 0,[994],(()=>o(2089)))
var s=o.O(void 0,[994],(()=>o(374)))
s=o.O(s),__ember_auto_import__=s})()
