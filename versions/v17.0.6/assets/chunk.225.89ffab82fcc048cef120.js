"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[225],{1225:(t,e,n)=>{function o(t){return t instanceof HTMLElement}function i(t){return"function"==typeof t}function s(t){return"string"==typeof t}function r(t){return void 0===t}n.r(e),n.d(e,{ShepherdBase:()=>un,default:()=>dn})
class l{on(t,e,n,o=!1){var i
return r(this.bindings)&&(this.bindings={}),r(this.bindings[t])&&(this.bindings[t]=[]),null==(i=this.bindings[t])||i.push({handler:e,ctx:n,once:o}),this}once(t,e,n){return this.on(t,e,n,!0)}off(t,e){return r(this.bindings)||r(this.bindings[t])||(r(e)?delete this.bindings[t]:null==(n=this.bindings[t])||n.forEach(((n,o)=>{var i
n.handler===e&&(null==(i=this.bindings[t])||i.splice(o,1))}))),this
var n}trigger(t,...e){var n
return!r(this.bindings)&&this.bindings[t]&&(null==(n=this.bindings[t])||n.forEach(((n,o)=>{const{ctx:i,handler:s,once:r}=n,l=i||this
var c
s.apply(l,e),r&&(null==(c=this.bindings[t])||c.splice(o,1))}))),this}}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var o in n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},c.apply(null,arguments)}function a(t,e){if(null==t)return{}
var n={}
for(var o in t)if({}.hasOwnProperty.call(t,o)){if(e.includes(o))continue
n[o]=t[o]}return n}const u={defaultMerge:Symbol("deepmerge-ts: default merge"),skip:Symbol("deepmerge-ts: skip")}
function d(t,e){return e}function f(t,e){return t.filter((t=>void 0!==t))}var h
function p(t){return"object"!=typeof t||null===t?0:Array.isArray(t)?2:function(t){if(!g.has(Object.prototype.toString.call(t)))return!1
const{constructor:e}=t
if(void 0===e)return!0
const n=e.prototype
return!(null===n||"object"!=typeof n||!g.has(Object.prototype.toString.call(n))||!n.hasOwnProperty("isPrototypeOf"))}(t)?1:t instanceof Set?3:t instanceof Map?4:5}function m(t){return{*[Symbol.iterator](){for(const e of t)for(const t of e)yield t}}}!function(t){t[t.NOT=0]="NOT",t[t.RECORD=1]="RECORD",t[t.ARRAY=2]="ARRAY",t[t.SET=3]="SET",t[t.MAP=4]="MAP",t[t.OTHER=5]="OTHER"}(h||(h={}))
const g=new Set(["[object Object]","[object Module]"]),y={mergeRecords:function(t,e,n){const o={}
for(const r of function(t){const e=new Set
for(const n of t)for(const t of[...Object.keys(n),...Object.getOwnPropertySymbols(n)])e.add(t)
return e}(t)){const l=[]
for(const e of t)s=r,"object"==typeof(i=e)&&Object.prototype.propertyIsEnumerable.call(i,s)&&l.push(e[r])
if(0===l.length)continue
const c=e.metaDataUpdater(n,{key:r,parents:t}),a=b(l,e,c)
a!==u.skip&&("__proto__"===r?Object.defineProperty(o,r,{value:a,configurable:!0,enumerable:!0,writable:!0}):o[r]=a)}var i,s
return o},mergeArrays:function(t){return t.flat()},mergeSets:function(t){return new Set(m(t))},mergeMaps:function(t){return new Map(m(t))},mergeOthers:function(t){return t.at(-1)}}
function v(...t){return function(){const t=function(t,e){var n,o,i
return{defaultMergeFunctions:y,mergeFunctions:c({},y,Object.fromEntries(Object.entries(t).filter((([t,e])=>Object.hasOwn(y,t))).map((([t,e])=>!1===e?[t,y.mergeOthers]:[t,e])))),metaDataUpdater:null!=(n=t.metaDataUpdater)?n:d,deepmerge:e,useImplicitDefaultMerging:null!=(o=t.enableImplicitDefaultMerging)&&o,filterValues:!1===t.filterValues?void 0:null!=(i=t.filterValues)?i:f,actions:u}}({},e)
function e(...e){return b(e,t,void 0)}return e}()(...t)}function b(t,e,n){var o
const i=null!=(o=null==e.filterValues?void 0:e.filterValues(t,n))?o:t
if(0===i.length)return
if(1===i.length)return x(i,e,n)
const s=p(i[0])
if(0!==s&&5!==s)for(let r=1;r<i.length;r++)if(p(i[r])!==s)return x(i,e,n)
switch(s){case 1:return function(t,e,n){const o=e.mergeFunctions.mergeRecords(t,e,n)
return o===u.defaultMerge||e.useImplicitDefaultMerging&&void 0===o&&e.mergeFunctions.mergeRecords!==e.defaultMergeFunctions.mergeRecords?e.defaultMergeFunctions.mergeRecords(t,e,n):o}(i,e,n)
case 2:return function(t,e,n){const o=e.mergeFunctions.mergeArrays(t,e,n)
return o===u.defaultMerge||e.useImplicitDefaultMerging&&void 0===o&&e.mergeFunctions.mergeArrays!==e.defaultMergeFunctions.mergeArrays?e.defaultMergeFunctions.mergeArrays(t):o}(i,e,n)
case 3:return function(t,e,n){const o=e.mergeFunctions.mergeSets(t,e,n)
return o===u.defaultMerge||e.useImplicitDefaultMerging&&void 0===o&&e.mergeFunctions.mergeSets!==e.defaultMergeFunctions.mergeSets?e.defaultMergeFunctions.mergeSets(t):o}(i,e,n)
case 4:return function(t,e,n){const o=e.mergeFunctions.mergeMaps(t,e,n)
return o===u.defaultMerge||e.useImplicitDefaultMerging&&void 0===o&&e.mergeFunctions.mergeMaps!==e.defaultMergeFunctions.mergeMaps?e.defaultMergeFunctions.mergeMaps(t):o}(i,e,n)
default:return x(i,e,n)}}function x(t,e,n){const o=e.mergeFunctions.mergeOthers(t,e,n)
return o===u.defaultMerge||e.useImplicitDefaultMerging&&void 0===o&&e.mergeFunctions.mergeOthers!==e.defaultMergeFunctions.mergeOthers?e.defaultMergeFunctions.mergeOthers(t):o}function w(t){const e=Object.getOwnPropertyNames(t.constructor.prototype)
for(let n=0;n<e.length;n++){const o=e[n],i=t[o]
"constructor"!==o&&"function"==typeof i&&(t[o]=i.bind(t))}return t}function $(t){return s(t)&&""!==t?"-"!==t.charAt(t.length-1)?`${t}-`:t:""}function E(t){return null==t||!t.element||!t.on}function O(){let t=Date.now()
return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const n=(t+16*Math.random())%16|0
return t=Math.floor(t/16),("x"==e?n:3&n|8).toString(16)}))}const T=["start","end"],_=["top","right","bottom","left"].reduce(((t,e)=>t.concat(e,e+"-"+T[0],e+"-"+T[1])),[]),S=Math.min,A=Math.max,I=Math.round,L=Math.floor,P=t=>({x:t,y:t}),M={left:"right",right:"left",bottom:"top",top:"bottom"},R={start:"end",end:"start"}
function k(t,e,n){return A(t,S(e,n))}function C(t,e){return"function"==typeof t?t(e):t}function F(t){return t.split("-")[0]}function D(t){return t.split("-")[1]}function H(t){return"x"===t?"y":"x"}function j(t){return"y"===t?"height":"width"}function B(t){return["top","bottom"].includes(F(t))?"y":"x"}function V(t){return H(B(t))}function N(t,e,n){void 0===n&&(n=!1)
const o=D(t),i=V(t),s=j(i)
let r="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top"
return e.reference[s]>e.floating[s]&&(r=q(r)),[r,q(r)]}function W(t){return t.replace(/start|end/g,(t=>R[t]))}function q(t){return t.replace(/left|right|bottom|top/g,(t=>M[t]))}function z(t){return"number"!=typeof t?function(t){return c({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function U(t){const{x:e,y:n,width:o,height:i}=t
return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}const Y=["crossAxis","alignment","allowedPlacements","autoAlignment"],X=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],Z=["mainAxis","crossAxis","limiter"]
function K(t,e,n){let{reference:o,floating:i}=t
const s=B(e),r=V(e),l=j(r),c=F(e),a="y"===s,u=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,f=o[l]/2-i[l]/2
let h
switch(c){case"top":h={x:u,y:o.y-i.height}
break
case"bottom":h={x:u,y:o.y+o.height}
break
case"right":h={x:o.x+o.width,y:d}
break
case"left":h={x:o.x-i.width,y:d}
break
default:h={x:o.x,y:o.y}}switch(D(e)){case"start":h[r]-=f*(n&&a?-1:1)
break
case"end":h[r]+=f*(n&&a?-1:1)}return h}async function G(t,e){var n
void 0===e&&(e={})
const{x:o,y:i,platform:s,rects:r,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=C(e,t),p=z(h),m=l[f?"floating"===d?"reference":"floating":d],g=U(await s.getClippingRect({element:null==(n=await(null==s.isElement?void 0:s.isElement(m)))||n?m:m.contextElement||await(null==s.getDocumentElement?void 0:s.getDocumentElement(l.floating)),boundary:a,rootBoundary:u,strategy:c})),y="floating"===d?{x:o,y:i,width:r.floating.width,height:r.floating.height}:r.reference,v=await(null==s.getOffsetParent?void 0:s.getOffsetParent(l.floating)),b=await(null==s.isElement?void 0:s.isElement(v))&&await(null==s.getScale?void 0:s.getScale(v))||{x:1,y:1},x=U(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:v,strategy:c}):y)
return{top:(g.top-x.top+p.top)/b.y,bottom:(x.bottom-g.bottom+p.bottom)/b.y,left:(g.left-x.left+p.left)/b.x,right:(x.right-g.right+p.right)/b.x}}function J(t){return et(t)?(t.nodeName||"").toLowerCase():"#document"}function Q(t){var e
return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function tt(t){var e
return null==(e=(et(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function et(t){return t instanceof Node||t instanceof Q(t).Node}function nt(t){return t instanceof Element||t instanceof Q(t).Element}function ot(t){return t instanceof HTMLElement||t instanceof Q(t).HTMLElement}function it(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof Q(t).ShadowRoot)}function st(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=dt(t)
return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function rt(t){return["table","td","th"].includes(J(t))}function lt(t){return[":popover-open",":modal"].some((e=>{try{return t.matches(e)}catch(t){return!1}}))}function ct(t){const e=at(),n=nt(t)?dt(t):t
return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function at(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function ut(t){return["html","body","#document"].includes(J(t))}function dt(t){return Q(t).getComputedStyle(t)}function ft(t){return nt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function ht(t){if("html"===J(t))return t
const e=t.assignedSlot||t.parentNode||it(t)&&t.host||tt(t)
return it(e)?e.host:e}function pt(t){const e=ht(t)
return ut(e)?t.ownerDocument?t.ownerDocument.body:t.body:ot(e)&&st(e)?e:pt(e)}function mt(t,e,n){var o
void 0===e&&(e=[]),void 0===n&&(n=!0)
const i=pt(t),s=i===(null==(o=t.ownerDocument)?void 0:o.body),r=Q(i)
return s?e.concat(r,r.visualViewport||[],st(i)?i:[],r.frameElement&&n?mt(r.frameElement):[]):e.concat(i,mt(i,[],n))}function gt(t){const e=dt(t)
let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0
const i=ot(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,l=I(n)!==s||I(o)!==r
return l&&(n=s,o=r),{width:n,height:o,$:l}}function yt(t){return nt(t)?t:t.contextElement}function vt(t){const e=yt(t)
if(!ot(e))return P(1)
const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=gt(e)
let r=(s?I(n.width):n.width)/o,l=(s?I(n.height):n.height)/i
return r&&Number.isFinite(r)||(r=1),l&&Number.isFinite(l)||(l=1),{x:r,y:l}}const bt=P(0)
function xt(t){const e=Q(t)
return at()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:bt}function wt(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1)
const i=t.getBoundingClientRect(),s=yt(t)
let r=P(1)
e&&(o?nt(o)&&(r=vt(o)):r=vt(t))
const l=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==Q(t))&&e}(s,n,o)?xt(s):P(0)
let c=(i.left+l.x)/r.x,a=(i.top+l.y)/r.y,u=i.width/r.x,d=i.height/r.y
if(s){const t=Q(s),e=o&&nt(o)?Q(o):o
let n=t,i=n.frameElement
for(;i&&o&&e!==n;){const t=vt(i),e=i.getBoundingClientRect(),o=dt(i),s=e.left+(i.clientLeft+parseFloat(o.paddingLeft))*t.x,r=e.top+(i.clientTop+parseFloat(o.paddingTop))*t.y
c*=t.x,a*=t.y,u*=t.x,d*=t.y,c+=s,a+=r,n=Q(i),i=n.frameElement}}return U({width:u,height:d,x:c,y:a})}function $t(t){return wt(tt(t)).left+ft(t).scrollLeft}function Et(t,e,n){let o
if("viewport"===e)o=function(t,e){const n=Q(t),o=tt(t),i=n.visualViewport
let s=o.clientWidth,r=o.clientHeight,l=0,c=0
if(i){s=i.width,r=i.height
const t=at();(!t||t&&"fixed"===e)&&(l=i.offsetLeft,c=i.offsetTop)}return{width:s,height:r,x:l,y:c}}(t,n)
else if("document"===e)o=function(t){const e=tt(t),n=ft(t),o=t.ownerDocument.body,i=A(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=A(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight)
let r=-n.scrollLeft+$t(t)
const l=-n.scrollTop
return"rtl"===dt(o).direction&&(r+=A(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:l}}(tt(t))
else if(nt(e))o=function(t,e){const n=wt(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=ot(t)?vt(t):P(1)
return{width:t.clientWidth*s.x,height:t.clientHeight*s.y,x:i*s.x,y:o*s.y}}(e,n)
else{const n=xt(t)
o=c({},e,{x:e.x-n.x,y:e.y-n.y})}return U(o)}function Ot(t,e){const n=ht(t)
return!(n===e||!nt(n)||ut(n))&&("fixed"===dt(n).position||Ot(n,e))}function Tt(t,e,n){const o=ot(e),i=tt(e),s="fixed"===n,r=wt(t,!0,s,e)
let l={scrollLeft:0,scrollTop:0}
const c=P(0)
if(o||!o&&!s)if(("body"!==J(e)||st(i))&&(l=ft(e)),o){const t=wt(e,!0,s,e)
c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else i&&(c.x=$t(i))
return{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}function _t(t){return"static"===dt(t).position}function St(t,e){return ot(t)&&"fixed"!==dt(t).position?e?e(t):t.offsetParent:null}function At(t,e){const n=Q(t)
if(lt(t))return n
if(!ot(t)){let e=ht(t)
for(;e&&!ut(e);){if(nt(e)&&!_t(e))return e
e=ht(e)}return n}let o=St(t,e)
for(;o&&rt(o)&&_t(o);)o=St(o,e)
return o&&ut(o)&&_t(o)&&!ct(o)?n:o||function(t){let e=ht(t)
for(;ot(e)&&!ut(e);){if(ct(e))return e
if(lt(e))return null
e=ht(e)}return null}(t)||n}const It={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t
const s="fixed"===i,r=tt(o),l=!!e&&lt(e.floating)
if(o===r||l&&s)return n
let c={scrollLeft:0,scrollTop:0},a=P(1)
const u=P(0),d=ot(o)
if((d||!d&&!s)&&(("body"!==J(o)||st(r))&&(c=ft(o)),ot(o))){const t=wt(o)
a=vt(o),u.x=t.x+o.clientLeft,u.y=t.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+u.x,y:n.y*a.y-c.scrollTop*a.y+u.y}},getDocumentElement:tt,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t
const s="clippingAncestors"===n?lt(e)?[]:function(t,e){const n=e.get(t)
if(n)return n
let o=mt(t,[],!1).filter((t=>nt(t)&&"body"!==J(t))),i=null
const s="fixed"===dt(t).position
let r=s?ht(t):t
for(;nt(r)&&!ut(r);){const e=dt(r),n=ct(r)
n||"fixed"!==e.position||(i=null),(s?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||st(r)&&!n&&Ot(t,r))?o=o.filter((t=>t!==r)):i=e,r=ht(r)}return e.set(t,o),o}(e,this._c):[].concat(n),r=[...s,o],l=r[0],c=r.reduce(((t,n)=>{const o=Et(e,n,i)
return t.top=A(o.top,t.top),t.right=S(o.right,t.right),t.bottom=S(o.bottom,t.bottom),t.left=A(o.left,t.left),t}),Et(e,l,i))
return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:At,getElementRects:async function(t){const e=this.getOffsetParent||At,n=this.getDimensions,o=await n(t.floating)
return{reference:Tt(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=gt(t)
return{width:e,height:n}},getScale:vt,isElement:nt,isRTL:function(t){return"rtl"===dt(t).direction}},Lt=function(t){return void 0===t&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:i,rects:s,middlewareData:r}=e,{offset:l=0,mainAxis:a=!0,crossAxis:u=!0}=C(t,e),d={x:n,y:o},f=B(i),h=H(f)
let p=d[h],m=d[f]
const g=C(l,e),y="number"==typeof g?{mainAxis:g,crossAxis:0}:c({mainAxis:0,crossAxis:0},g)
if(a){const t="y"===h?"height":"width",e=s.reference[h]-s.floating[t]+y.mainAxis,n=s.reference[h]+s.reference[t]-y.mainAxis
p<e?p=e:p>n&&(p=n)}if(u){var v,b
const t="y"===h?"width":"height",e=["top","left"].includes(F(i)),n=s.reference[f]-s.floating[t]+(e&&(null==(v=r.offset)?void 0:v[f])||0)+(e?0:y.crossAxis),o=s.reference[f]+s.reference[t]+(e?0:(null==(b=r.offset)?void 0:b[f])||0)-(e?y.crossAxis:0)
m<n?m=n:m>o&&(m=o)}return{[h]:p,[f]:m}}}}
function Pt(){}function Mt(t,e){for(const n in e)t[n]=e[n]
return t}function Rt(t){return t()}function kt(){return Object.create(null)}function Ct(t){t.forEach(Rt)}function Ft(t){return"function"==typeof t}function Dt(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function Ht(t,e){t.appendChild(e)}function jt(t,e,n){t.insertBefore(e,n||null)}function Bt(t){t.parentNode&&t.parentNode.removeChild(t)}function Vt(t){return document.createElement(t)}function Nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Wt(t){return document.createTextNode(t)}function qt(){return Wt(" ")}function zt(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function Ut(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Yt=["width","height"]
function Xt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__)
for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set&&-1===Yt.indexOf(o)?t[o]=e[o]:Ut(t,o,e[o])}function Zt(t,e,n){t.classList.toggle(e,!!n)}let Kt
function Gt(t){Kt=t}function Jt(){if(!Kt)throw new Error("Function called outside component initialization")
return Kt}function Qt(t){Jt().$$.after_update.push(t)}const te=[],ee=[]
let ne=[]
const oe=[],ie=Promise.resolve()
let se=!1
function re(t){ne.push(t)}const le=new Set
let ce=0
function ae(){if(0!==ce)return
const t=Kt
do{try{for(;ce<te.length;){const t=te[ce]
ce++,Gt(t),ue(t.$$)}}catch(t){throw te.length=0,ce=0,t}for(Gt(null),te.length=0,ce=0;ee.length;)ee.pop()()
for(let t=0;t<ne.length;t+=1){const e=ne[t]
le.has(e)||(le.add(e),e())}ne.length=0}while(te.length)
for(;oe.length;)oe.pop()()
se=!1,le.clear(),Gt(t)}function ue(t){if(null!==t.fragment){t.update(),Ct(t.before_update)
const e=t.dirty
t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(re)}}const de=new Set
let fe
function he(){fe={r:0,c:[],p:fe}}function pe(){fe.r||Ct(fe.c),fe=fe.p}function me(t,e){t&&t.i&&(de.delete(t),t.i(e))}function ge(t,e,n,o){if(t&&t.o){if(de.has(t))return
de.add(t),fe.c.push((()=>{de.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function ye(t){return void 0!==(null==t?void 0:t.length)?t:Array.from(t)}function ve(t){t&&t.c()}function be(t,e,n){const{fragment:o,after_update:i}=t.$$
o&&o.m(e,n),re((()=>{const e=t.$$.on_mount.map(Rt).filter(Ft)
t.$$.on_destroy?t.$$.on_destroy.push(...e):Ct(e),t.$$.on_mount=[]})),i.forEach(re)}function xe(t,e){const n=t.$$
null!==n.fragment&&(function(t){const e=[],n=[]
ne.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),ne=e}(n.after_update),Ct(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function we(t,e,n,o,i,s,r=null,l=[-1]){const c=Kt
Gt(t)
const a=t.$$={fragment:null,ctx:[],props:s,update:Pt,not_equal:i,bound:kt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:kt(),dirty:l,skip_bound:!1,root:e.target||c.$$.root}
r&&r(a.root)
let u=!1
if(a.ctx=n?n(t,e.props||{},((e,n,...o)=>{const s=o.length?o[0]:n
return a.ctx&&i(a.ctx[e],a.ctx[e]=s)&&(!a.skip_bound&&a.bound[e]&&a.bound[e](s),u&&function(t,e){-1===t.$$.dirty[0]&&(te.push(t),se||(se=!0,ie.then(ae)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],a.update(),u=!0,Ct(a.before_update),a.fragment=!!o&&o(a.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target)
a.fragment&&a.fragment.l(t),t.forEach(Bt)}else a.fragment&&a.fragment.c()
e.intro&&me(t.$$.fragment),be(t,e.target,e.anchor),ae()}Gt(c)}class $e{constructor(){this.$$=void 0,this.$$set=void 0}$destroy(){xe(this,1),this.$destroy=Pt}$on(t,e){if(!Ft(e))return Pt
const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[])
return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e
this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Ee(t){let e,n,o,i,s
return{c(){e=Vt("button"),Ut(e,"aria-label",n=t[3]?t[3]:null),Ut(e,"class",o=`${t[1]||""} shepherd-button ${t[4]?"shepherd-button-secondary":""}`),e.disabled=t[2],Ut(e,"tabindex","0"),Ut(e,"type","button")},m(n,o){jt(n,e,o),e.innerHTML=t[5],i||(s=zt(e,"click",(function(){Ft(t[0])&&t[0].apply(this,arguments)})),i=!0)},p(i,[s]){t=i,32&s&&(e.innerHTML=t[5]),8&s&&n!==(n=t[3]?t[3]:null)&&Ut(e,"aria-label",n),18&s&&o!==(o=`${t[1]||""} shepherd-button ${t[4]?"shepherd-button-secondary":""}`)&&Ut(e,"class",o),4&s&&(e.disabled=t[2])},i:Pt,o:Pt,d(t){t&&Bt(e),i=!1,s()}}}function Oe(t,e,n){let o,s,r,l,c,a,{config:u,step:d}=e
function f(t){return i(t)?t.call(d):t}return t.$$set=t=>{"config"in t&&n(6,u=t.config),"step"in t&&n(7,d=t.step)},t.$$.update=()=>{192&t.$$.dirty&&(n(0,o=u.action?u.action.bind(d.tour):null),n(1,s=u.classes),n(2,r=!!u.disabled&&f(u.disabled)),n(3,l=u.label?f(u.label):null),n(4,c=u.secondary),n(5,a=u.text?f(u.text):null))},[o,s,r,l,c,a,u,d]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4")
class Te extends $e{constructor(t){super(),we(this,t,Oe,Ee,Dt,{config:6,step:7})}}function _e(t,e,n){const o=t.slice()
return o[2]=e[n],o}function Se(t){let e,n,o=ye(t[1]),i=[]
for(let r=0;r<o.length;r+=1)i[r]=Ae(_e(t,o,r))
const s=t=>ge(i[t],1,1,(()=>{i[t]=null}))
return{c(){for(let t=0;t<i.length;t+=1)i[t].c()
e=Wt("")},m(t,o){for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(t,o)
jt(t,e,o),n=!0},p(t,n){if(3&n){let r
for(o=ye(t[1]),r=0;r<o.length;r+=1){const s=_e(t,o,r)
i[r]?(i[r].p(s,n),me(i[r],1)):(i[r]=Ae(s),i[r].c(),me(i[r],1),i[r].m(e.parentNode,e))}for(he(),r=o.length;r<i.length;r+=1)s(r)
pe()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)me(i[t])
n=!0}},o(t){i=i.filter(Boolean)
for(let e=0;e<i.length;e+=1)ge(i[e])
n=!1},d(t){t&&Bt(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(i,t)}}}function Ae(t){let e,n
return e=new Te({props:{config:t[2],step:t[0]}}),{c(){ve(e.$$.fragment)},m(t,o){be(e,t,o),n=!0},p(t,n){const o={}
2&n&&(o.config=t[2]),1&n&&(o.step=t[0]),e.$set(o)},i(t){n||(me(e.$$.fragment,t),n=!0)},o(t){ge(e.$$.fragment,t),n=!1},d(t){xe(e,t)}}}function Ie(t){let e,n,o=t[1]&&Se(t)
return{c(){e=Vt("footer"),o&&o.c(),Ut(e,"class","shepherd-footer")},m(t,i){jt(t,e,i),o&&o.m(e,null),n=!0},p(t,[n]){t[1]?o?(o.p(t,n),2&n&&me(o,1)):(o=Se(t),o.c(),me(o,1),o.m(e,null)):o&&(he(),ge(o,1,1,(()=>{o=null})),pe())},i(t){n||(me(o),n=!0)},o(t){ge(o),n=!1},d(t){t&&Bt(e),o&&o.d()}}}function Le(t,e,n){let o,{step:i}=e
return t.$$set=t=>{"step"in t&&n(0,i=t.step)},t.$$.update=()=>{1&t.$$.dirty&&n(1,o=i.options.buttons)},[i,o]}class Pe extends $e{constructor(t){super(),we(this,t,Le,Ie,Dt,{step:0})}}function Me(t){let e,n,o,i,s
return{c(){e=Vt("button"),n=Vt("span"),n.textContent="×",Ut(n,"aria-hidden","true"),Ut(e,"aria-label",o=t[0].label?t[0].label:"Close Tour"),Ut(e,"class","shepherd-cancel-icon"),Ut(e,"type","button")},m(o,r){jt(o,e,r),Ht(e,n),i||(s=zt(e,"click",t[1]),i=!0)},p(t,[n]){1&n&&o!==(o=t[0].label?t[0].label:"Close Tour")&&Ut(e,"aria-label",o)},i:Pt,o:Pt,d(t){t&&Bt(e),i=!1,s()}}}function Re(t,e,n){let{cancelIcon:o,step:i}=e
return t.$$set=t=>{"cancelIcon"in t&&n(0,o=t.cancelIcon),"step"in t&&n(2,i=t.step)},[o,t=>{t.preventDefault(),i.cancel()},i]}class ke extends $e{constructor(t){super(),we(this,t,Re,Me,Dt,{cancelIcon:0,step:2})}}function Ce(t){let e
return{c(){e=Vt("h3"),Ut(e,"id",t[1]),Ut(e,"class","shepherd-title")},m(n,o){jt(n,e,o),t[3](e)},p(t,[n]){2&n&&Ut(e,"id",t[1])},i:Pt,o:Pt,d(n){n&&Bt(e),t[3](null)}}}function Fe(t,e,n){let{labelId:o,element:s,title:r}=e
return Qt((()=>{i(r)&&n(2,r=r()),n(0,s.innerHTML=r,s)})),t.$$set=t=>{"labelId"in t&&n(1,o=t.labelId),"element"in t&&n(0,s=t.element),"title"in t&&n(2,r=t.title)},[s,o,r,function(t){ee[t?"unshift":"push"]((()=>{s=t,n(0,s)}))}]}class De extends $e{constructor(t){super(),we(this,t,Fe,Ce,Dt,{labelId:1,element:0,title:2})}}function He(t){let e,n
return e=new De({props:{labelId:t[0],title:t[2]}}),{c(){ve(e.$$.fragment)},m(t,o){be(e,t,o),n=!0},p(t,n){const o={}
1&n&&(o.labelId=t[0]),4&n&&(o.title=t[2]),e.$set(o)},i(t){n||(me(e.$$.fragment,t),n=!0)},o(t){ge(e.$$.fragment,t),n=!1},d(t){xe(e,t)}}}function je(t){let e,n
return e=new ke({props:{cancelIcon:t[3],step:t[1]}}),{c(){ve(e.$$.fragment)},m(t,o){be(e,t,o),n=!0},p(t,n){const o={}
8&n&&(o.cancelIcon=t[3]),2&n&&(o.step=t[1]),e.$set(o)},i(t){n||(me(e.$$.fragment,t),n=!0)},o(t){ge(e.$$.fragment,t),n=!1},d(t){xe(e,t)}}}function Be(t){let e,n,o,i=t[2]&&He(t),s=t[3]&&t[3].enabled&&je(t)
return{c(){e=Vt("header"),i&&i.c(),n=qt(),s&&s.c(),Ut(e,"class","shepherd-header")},m(t,r){jt(t,e,r),i&&i.m(e,null),Ht(e,n),s&&s.m(e,null),o=!0},p(t,[o]){t[2]?i?(i.p(t,o),4&o&&me(i,1)):(i=He(t),i.c(),me(i,1),i.m(e,n)):i&&(he(),ge(i,1,1,(()=>{i=null})),pe()),t[3]&&t[3].enabled?s?(s.p(t,o),8&o&&me(s,1)):(s=je(t),s.c(),me(s,1),s.m(e,null)):s&&(he(),ge(s,1,1,(()=>{s=null})),pe())},i(t){o||(me(i),me(s),o=!0)},o(t){ge(i),ge(s),o=!1},d(t){t&&Bt(e),i&&i.d(),s&&s.d()}}}function Ve(t,e,n){let o,i,{labelId:s,step:r}=e
return t.$$set=t=>{"labelId"in t&&n(0,s=t.labelId),"step"in t&&n(1,r=t.step)},t.$$.update=()=>{2&t.$$.dirty&&(n(2,o=r.options.title),n(3,i=r.options.cancelIcon))},[s,r,o,i]}class Ne extends $e{constructor(t){super(),we(this,t,Ve,Be,Dt,{labelId:0,step:1})}}function We(t){let e
return{c(){e=Vt("div"),Ut(e,"class","shepherd-text"),Ut(e,"id",t[1])},m(n,o){jt(n,e,o),t[3](e)},p(t,[n]){2&n&&Ut(e,"id",t[1])},i:Pt,o:Pt,d(n){n&&Bt(e),t[3](null)}}}function qe(t,e,n){let{descriptionId:s,element:r,step:l}=e
return Qt((()=>{let{text:t}=l.options
i(t)&&(t=t.call(l)),o(t)?r.appendChild(t):n(0,r.innerHTML=t,r)})),t.$$set=t=>{"descriptionId"in t&&n(1,s=t.descriptionId),"element"in t&&n(0,r=t.element),"step"in t&&n(2,l=t.step)},[r,s,l,function(t){ee[t?"unshift":"push"]((()=>{r=t,n(0,r)}))}]}class ze extends $e{constructor(t){super(),we(this,t,qe,We,Dt,{descriptionId:1,element:0,step:2})}}function Ue(t){let e,n
return e=new Ne({props:{labelId:t[1],step:t[2]}}),{c(){ve(e.$$.fragment)},m(t,o){be(e,t,o),n=!0},p(t,n){const o={}
2&n&&(o.labelId=t[1]),4&n&&(o.step=t[2]),e.$set(o)},i(t){n||(me(e.$$.fragment,t),n=!0)},o(t){ge(e.$$.fragment,t),n=!1},d(t){xe(e,t)}}}function Ye(t){let e,n
return e=new ze({props:{descriptionId:t[0],step:t[2]}}),{c(){ve(e.$$.fragment)},m(t,o){be(e,t,o),n=!0},p(t,n){const o={}
1&n&&(o.descriptionId=t[0]),4&n&&(o.step=t[2]),e.$set(o)},i(t){n||(me(e.$$.fragment,t),n=!0)},o(t){ge(e.$$.fragment,t),n=!1},d(t){xe(e,t)}}}function Xe(t){let e,n
return e=new Pe({props:{step:t[2]}}),{c(){ve(e.$$.fragment)},m(t,o){be(e,t,o),n=!0},p(t,n){const o={}
4&n&&(o.step=t[2]),e.$set(o)},i(t){n||(me(e.$$.fragment,t),n=!0)},o(t){ge(e.$$.fragment,t),n=!1},d(t){xe(e,t)}}}function Ze(t){let e,n,o,i,s=!r(t[2].options.title)||t[2].options.cancelIcon&&t[2].options.cancelIcon.enabled,l=!r(t[2].options.text),c=Array.isArray(t[2].options.buttons)&&t[2].options.buttons.length,a=s&&Ue(t),u=l&&Ye(t),d=c&&Xe(t)
return{c(){e=Vt("div"),a&&a.c(),n=qt(),u&&u.c(),o=qt(),d&&d.c(),Ut(e,"class","shepherd-content"),Ut(e,"tabindex","0")},m(t,s){jt(t,e,s),a&&a.m(e,null),Ht(e,n),u&&u.m(e,null),Ht(e,o),d&&d.m(e,null),i=!0},p(t,[i]){4&i&&(s=!r(t[2].options.title)||t[2].options.cancelIcon&&t[2].options.cancelIcon.enabled),s?a?(a.p(t,i),4&i&&me(a,1)):(a=Ue(t),a.c(),me(a,1),a.m(e,n)):a&&(he(),ge(a,1,1,(()=>{a=null})),pe()),4&i&&(l=!r(t[2].options.text)),l?u?(u.p(t,i),4&i&&me(u,1)):(u=Ye(t),u.c(),me(u,1),u.m(e,o)):u&&(he(),ge(u,1,1,(()=>{u=null})),pe()),4&i&&(c=Array.isArray(t[2].options.buttons)&&t[2].options.buttons.length),c?d?(d.p(t,i),4&i&&me(d,1)):(d=Xe(t),d.c(),me(d,1),d.m(e,null)):d&&(he(),ge(d,1,1,(()=>{d=null})),pe())},i(t){i||(me(a),me(u),me(d),i=!0)},o(t){ge(a),ge(u),ge(d),i=!1},d(t){t&&Bt(e),a&&a.d(),u&&u.d(),d&&d.d()}}}function Ke(t,e,n){let{descriptionId:o,labelId:i,step:s}=e
return t.$$set=t=>{"descriptionId"in t&&n(0,o=t.descriptionId),"labelId"in t&&n(1,i=t.labelId),"step"in t&&n(2,s=t.step)},[o,i,s]}class Ge extends $e{constructor(t){super(),we(this,t,Ke,Ze,Dt,{descriptionId:0,labelId:1,step:2})}}function Je(t){let e
return{c(){e=Vt("div"),Ut(e,"class","shepherd-arrow"),Ut(e,"data-popper-arrow","")},m(t,n){jt(t,e,n)},d(t){t&&Bt(e)}}}function Qe(t){let e,n,o,i,s,l,c,a,u=t[4].options.arrow&&t[4].options.attachTo&&t[4].options.attachTo.element&&t[4].options.attachTo.on&&Je()
o=new Ge({props:{descriptionId:t[2],labelId:t[3],step:t[4]}})
let d=[{"aria-describedby":i=r(t[4].options.text)?null:t[2]},{"aria-labelledby":s=t[4].options.title?t[3]:null},t[1],{open:"true"}],f={}
for(let r=0;r<d.length;r+=1)f=Mt(f,d[r])
return{c(){e=Vt("dialog"),u&&u.c(),n=qt(),ve(o.$$.fragment),Xt(e,f),Zt(e,"shepherd-has-cancel-icon",t[5]),Zt(e,"shepherd-has-title",t[6]),Zt(e,"shepherd-element",!0)},m(i,s){jt(i,e,s),u&&u.m(e,null),Ht(e,n),be(o,e,null),t[13](e),l=!0,c||(a=zt(e,"keydown",t[7]),c=!0)},p(t,[c]){t[4].options.arrow&&t[4].options.attachTo&&t[4].options.attachTo.element&&t[4].options.attachTo.on?u||(u=Je(),u.c(),u.m(e,n)):u&&(u.d(1),u=null)
const a={}
4&c&&(a.descriptionId=t[2]),8&c&&(a.labelId=t[3]),16&c&&(a.step=t[4]),o.$set(a),Xt(e,f=function(t,e){const n={},o={},i={$$scope:1}
let s=t.length
for(;s--;){const r=t[s],l=e[s]
if(l){for(const t in r)t in l||(o[t]=1)
for(const t in l)i[t]||(n[t]=l[t],i[t]=1)
t[s]=l}else for(const t in r)i[t]=1}for(const r in o)r in n||(n[r]=void 0)
return n}(d,[(!l||20&c&&i!==(i=r(t[4].options.text)?null:t[2]))&&{"aria-describedby":i},(!l||24&c&&s!==(s=t[4].options.title?t[3]:null))&&{"aria-labelledby":s},2&c&&t[1],{open:"true"}])),Zt(e,"shepherd-has-cancel-icon",t[5]),Zt(e,"shepherd-has-title",t[6]),Zt(e,"shepherd-element",!0)},i(t){l||(me(o.$$.fragment,t),l=!0)},o(t){ge(o.$$.fragment,t),l=!1},d(n){n&&Bt(e),u&&u.d(),xe(o),t[13](null),c=!1,a()}}}function tn(t){return t.split(" ").filter((t=>!!t.length))}function en(t,e,n){let o,i,r,{classPrefix:l,element:c,descriptionId:a,firstFocusableElement:u,focusableElements:d,labelId:f,lastFocusableElement:h,step:p,dataStepId:m}=e
var g
return g=()=>{n(1,m={[`data-${l}shepherd-step-id`]:p.id}),n(9,d=c.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]')),n(8,u=d[0]),n(10,h=d[d.length-1])},Jt().$$.on_mount.push(g),Qt((()=>{r!==p.options.classes&&(function(t){if(s(t)){const e=tn(t)
e.length&&c.classList.remove(...e)}}(r),r=p.options.classes,function(t){if(s(t)){const e=tn(t)
e.length&&c.classList.add(...e)}}(r))})),t.$$set=t=>{"classPrefix"in t&&n(11,l=t.classPrefix),"element"in t&&n(0,c=t.element),"descriptionId"in t&&n(2,a=t.descriptionId),"firstFocusableElement"in t&&n(8,u=t.firstFocusableElement),"focusableElements"in t&&n(9,d=t.focusableElements),"labelId"in t&&n(3,f=t.labelId),"lastFocusableElement"in t&&n(10,h=t.lastFocusableElement),"step"in t&&n(4,p=t.step),"dataStepId"in t&&n(1,m=t.dataStepId)},t.$$.update=()=>{16&t.$$.dirty&&(n(5,o=p.options&&p.options.cancelIcon&&p.options.cancelIcon.enabled),n(6,i=p.options&&p.options.title))},[c,m,a,f,p,o,i,t=>{const{tour:e}=p
switch(t.keyCode){case 9:if(0===d.length){t.preventDefault()
break}t.shiftKey?(document.activeElement===u||document.activeElement.classList.contains("shepherd-element"))&&(t.preventDefault(),h.focus()):document.activeElement===h&&(t.preventDefault(),u.focus())
break
case 27:e.options.exitOnEsc&&(t.preventDefault(),t.stopPropagation(),p.cancel())
break
case 37:e.options.keyboardNavigation&&(t.preventDefault(),t.stopPropagation(),e.back())
break
case 39:e.options.keyboardNavigation&&(t.preventDefault(),t.stopPropagation(),e.next())}},u,d,h,l,()=>c,function(t){ee[t?"unshift":"push"]((()=>{c=t,n(0,c)}))}]}class nn extends $e{constructor(t){super(),we(this,t,en,Qe,Dt,{classPrefix:11,element:0,descriptionId:2,firstFocusableElement:8,focusableElements:9,labelId:3,lastFocusableElement:10,step:4,dataStepId:1,getElement:12})}get getElement(){return this.$$.ctx[12]}}class on extends l{constructor(t,e={}){return super(),this._resolvedAttachTo=void 0,this._resolvedExtraHighlightElements=void 0,this.classPrefix=void 0,this.el=void 0,this.target=void 0,this.tour=void 0,this.tour=t,this.classPrefix=this.tour.options?$(this.tour.options.classPrefix):"",this.styles=t.styles,this._resolvedAttachTo=null,w(this),this._setOptions(e),this}cancel(){this.tour.cancel(),this.trigger("cancel")}complete(){this.tour.complete(),this.trigger("complete")}destroy(){this.cleanup&&this.cleanup(),this.cleanup=null,o(this.el)&&(this.el.remove(),this.el=null),this._updateStepTargetOnHide(),this.trigger("destroy")}getTour(){return this.tour}hide(){var t
null==(t=this.tour.modal)||t.hide(),this.trigger("before-hide"),this.el&&(this.el.hidden=!0),this._updateStepTargetOnHide(),this.trigger("hide")}_resolveExtraHiglightElements(){return this._resolvedExtraHighlightElements=this.options.extraHighlights?this.options.extraHighlights.flatMap((t=>Array.from(document.querySelectorAll(t)))):[],this._resolvedExtraHighlightElements}_resolveAttachToOptions(){return this._resolvedAttachTo=function(t){const e=t.options.attachTo||{},n=Object.assign({},e)
if(i(n.element)&&(n.element=n.element.call(t)),s(n.element)){try{n.element=document.querySelector(n.element)}catch(t){}n.element||console.error(`The element for this Shepherd step was not found ${e.element}`)}return n}(this),this._resolvedAttachTo}_getResolvedAttachToOptions(){return null===this._resolvedAttachTo?this._resolveAttachToOptions():this._resolvedAttachTo}isOpen(){return Boolean(this.el&&!this.el.hidden)}show(){return i(this.options.beforeShowPromise)?Promise.resolve(this.options.beforeShowPromise()).then((()=>this._show())):Promise.resolve(this._show())}updateStepOptions(t){Object.assign(this.options,t),this.shepherdElementComponent&&this.shepherdElementComponent.$set({step:this})}getElement(){return this.el}getTarget(){return this.target}_createTooltipContent(){const t=`${this.id}-description`,e=`${this.id}-label`
return this.shepherdElementComponent=new nn({target:this.tour.options.stepsContainer||document.body,props:{classPrefix:this.classPrefix,descriptionId:t,labelId:e,step:this,styles:this.styles}}),this.shepherdElementComponent.getElement()}_scrollTo(t){const{element:e}=this._getResolvedAttachToOptions()
i(this.options.scrollToHandler)?this.options.scrollToHandler(e):e instanceof Element&&"function"==typeof e.scrollIntoView&&e.scrollIntoView(t)}_getClassOptions(t){const e=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions,n=t.classes?t.classes:"",o=e&&e.classes?e.classes:"",i=[...n.split(" "),...o.split(" ")],s=new Set(i)
return Array.from(s).join(" ").trim()}_setOptions(t={}){let e=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions
e=v({},e||{}),this.options=Object.assign({arrow:!0},e,t,function(t,e){return{floatingUIOptions:v(t.floatingUIOptions||{},e.floatingUIOptions||{})}}(e,t))
const{when:n}=this.options
this.options.classes=this._getClassOptions(t),this.destroy(),this.id=this.options.id||`step-${O()}`,n&&Object.keys(n).forEach((t=>{this.on(t,n[t],this)}))}_setupElements(){r(this.el)||this.destroy(),this.el=this._createTooltipContent(),this.options.advanceOn&&function(t){const{event:e,selector:n}=t.options.advanceOn||{}
if(!e)return console.error("advanceOn was defined, but no event name was passed.")
{const o=function(t,e){return n=>{if(t.isOpen()){const o=t.el&&n.currentTarget===t.el;(!r(e)&&n.currentTarget.matches(e)||o)&&t.tour.next()}}}(t,n)
let i=null
if(!r(n)&&(i=document.querySelector(n),!i))return console.error(`No element was found for the selector supplied to advanceOn: ${n}`)
i?(i.addEventListener(e,o),t.on("destroy",(()=>i.removeEventListener(e,o)))):(document.body.addEventListener(e,o,!0),t.on("destroy",(()=>document.body.removeEventListener(e,o,!0))))}}(this),function(t){t.cleanup&&t.cleanup()
const e=t._getResolvedAttachToOptions()
let n=e.element
const i=function(t,e){var n,o,i
const s={strategy:"absolute",middleware:[]},r=function(t){return!(!t.options.arrow||!t.el)&&t.el.querySelector(".shepherd-arrow")}(e),l=E(t),u=null==(n=t.on)?void 0:n.includes("auto"),d=(null==t||null==(o=t.on)?void 0:o.includes("-start"))||(null==t||null==(i=t.on)?void 0:i.includes("-end"))
var f
return l||(u?s.middleware.push(function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i
const{rects:s,middlewareData:r,placement:l,platform:c,elements:u}=e,d=C(t,e),{crossAxis:f=!1,alignment:h,allowedPlacements:p=_,autoAlignment:m=!0}=d,g=a(d,Y),y=void 0!==h||p===_?function(t,e,n){return(t?[...n.filter((e=>D(e)===t)),...n.filter((e=>D(e)!==t))]:n.filter((t=>F(t)===t))).filter((n=>!t||D(n)===t||!!e&&W(n)!==n))}(h||null,m,p):p,v=await G(e,g),b=(null==(n=r.autoPlacement)?void 0:n.index)||0,x=y[b]
if(null==x)return{}
const w=N(x,s,await(null==c.isRTL?void 0:c.isRTL(u.floating)))
if(l!==x)return{reset:{placement:y[0]}}
const $=[v[F(x)],v[w[0]],v[w[1]]],E=[...(null==(o=r.autoPlacement)?void 0:o.overflows)||[],{placement:x,overflows:$}],O=y[b+1]
if(O)return{data:{index:b+1,overflows:E},reset:{placement:O}}
const T=E.map((t=>{const e=D(t.placement)
return[t.placement,e&&f?t.overflows.slice(0,2).reduce(((t,e)=>t+e),0):t.overflows[0],t.overflows]})).sort(((t,e)=>t[1]-e[1])),S=(null==(i=T.filter((t=>t[2].slice(0,D(t[0])?2:3).every((t=>t<=0))))[0])?void 0:i[0])||T[0][0]
return S!==l?{data:{index:b+1,overflows:E},reset:{placement:S}}:{}}}}({crossAxis:!0,alignment:d?null==t||null==(f=t.on)?void 0:f.split("-").pop():null})):s.middleware.push(function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,o
const{placement:i,middlewareData:s,rects:r,initialPlacement:l,platform:c,elements:u}=e,d=C(t,e),{mainAxis:f=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0}=d,v=a(d,X)
if(null!=(n=s.arrow)&&n.alignmentOffset)return{}
const b=F(i),x=B(l),w=F(l)===l,$=await(null==c.isRTL?void 0:c.isRTL(u.floating)),E=p||(w||!y?[q(l)]:function(t){const e=q(t)
return[W(t),e,W(e)]}(l)),O="none"!==g
!p&&O&&E.push(...function(t,e,n,o){const i=D(t)
let s=function(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"]
switch(t){case"top":case"bottom":return n?e?i:o:e?o:i
case"left":case"right":return e?s:r
default:return[]}}(F(t),"start"===n,o)
return i&&(s=s.map((t=>t+"-"+i)),e&&(s=s.concat(s.map(W)))),s}(l,y,g,$))
const T=[l,...E],_=await G(e,v),S=[]
let A=(null==(o=s.flip)?void 0:o.overflows)||[]
if(f&&S.push(_[b]),h){const t=N(i,r,$)
S.push(_[t[0]],_[t[1]])}if(A=[...A,{placement:i,overflows:S}],!S.every((t=>t<=0))){var I,L
const t=((null==(I=s.flip)?void 0:I.index)||0)+1,e=T[t]
if(e)return{data:{index:t,overflows:A},reset:{placement:e}}
let n=null==(L=A.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:L.placement
if(!n)switch(m){case"bestFit":{var P
const t=null==(P=A.filter((t=>{if(O){const e=B(t.placement)
return e===x||"y"===e}return!0})).map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:P[0]
t&&(n=t)
break}case"initialPlacement":n=l}if(i!==n)return{reset:{placement:n}}}return{}}}}()),s.middleware.push(function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,s=C(t,e),{mainAxis:r=!0,crossAxis:l=!1,limiter:u={fn:t=>{let{x:e,y:n}=t
return{x:e,y:n}}}}=s,d=a(s,Z),f={x:n,y:o},h=await G(e,d),p=B(F(i)),m=H(p)
let g=f[m],y=f[p]
if(r){const t="y"===m?"bottom":"right"
g=k(g+h["y"===m?"top":"left"],g,g-h[t])}if(l){const t="y"===p?"bottom":"right"
y=k(y+h["y"===p?"top":"left"],y,y-h[t])}const v=u.fn(c({},e,{[m]:g,[p]:y}))
return c({},v,{data:{x:v.x-n,y:v.y-o}})}}}({limiter:Lt(),crossAxis:!0})),r&&s.middleware.push((t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:l,middlewareData:a}=e,{element:u,padding:d=0}=C(t,e)||{}
if(null==u)return{}
const f=z(d),h={x:n,y:o},p=V(i),m=j(p),g=await r.getDimensions(u),y="y"===p,v=y?"top":"left",b=y?"bottom":"right",x=y?"clientHeight":"clientWidth",w=s.reference[m]+s.reference[p]-h[p]-s.floating[m],$=h[p]-s.reference[p],E=await(null==r.getOffsetParent?void 0:r.getOffsetParent(u))
let O=E?E[x]:0
O&&await(null==r.isElement?void 0:r.isElement(E))||(O=l.floating[x]||s.floating[m])
const T=w/2-$/2,_=O/2-g[m]/2-1,A=S(f[v],_),I=S(f[b],_),L=A,P=O-g[m]-I,M=O/2-g[m]/2+T,R=k(L,M,P),F=!a.arrow&&null!=D(i)&&M!==R&&s.reference[m]/2-(M<L?A:I)-g[m]/2<0,H=F?M<L?M-L:M-P:0
return{[p]:h[p]+H,data:c({[p]:R,centerOffset:M-R-H},F&&{alignmentOffset:H}),reset:F}}}))({element:r,padding:d?4:0})),u||(s.placement=t.on)),v(s,e.options.floatingUIOptions||{})}(e,t),s=E(e)
s&&(n=document.body,t.shepherdElementComponent.getElement().classList.add("shepherd-centered")),t.cleanup=function(t,e,n,o){void 0===o&&(o={})
const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:a=!1}=o,u=yt(t),d=i||s?[...u?mt(u):[],...mt(e)]:[]
d.forEach((t=>{i&&t.addEventListener("scroll",n,{passive:!0}),s&&t.addEventListener("resize",n)}))
const f=u&&l?function(t,e){let n,o=null
const i=tt(t)
function s(){var t
clearTimeout(n),null==(t=o)||t.disconnect(),o=null}return function r(l,a){void 0===l&&(l=!1),void 0===a&&(a=1),s()
const{left:u,top:d,width:f,height:h}=t.getBoundingClientRect()
if(l||e(),!f||!h)return
const p={rootMargin:-L(d)+"px "+-L(i.clientWidth-(u+f))+"px "+-L(i.clientHeight-(d+h))+"px "+-L(u)+"px",threshold:A(0,S(1,a))||1}
let m=!0
function g(t){const e=t[0].intersectionRatio
if(e!==a){if(!m)return r()
e?r(!1,e):n=setTimeout((()=>{r(!1,1e-7)}),1e3)}m=!1}try{o=new IntersectionObserver(g,c({},p,{root:i.ownerDocument}))}catch(t){o=new IntersectionObserver(g,p)}o.observe(t)}(!0),s}(u,n):null
let h,p=-1,m=null
r&&(m=new ResizeObserver((t=>{let[o]=t
o&&o.target===u&&m&&(m.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var t
null==(t=m)||t.observe(e)}))),n()})),u&&!a&&m.observe(u),m.observe(e))
let g=a?wt(t):null
return a&&function e(){const o=wt(t)
!g||o.x===g.x&&o.y===g.y&&o.width===g.width&&o.height===g.height||n(),g=o,h=requestAnimationFrame(e)}(),n(),()=>{var t
d.forEach((t=>{i&&t.removeEventListener("scroll",n),s&&t.removeEventListener("resize",n)})),null==f||f(),null==(t=m)||t.disconnect(),m=null,a&&cancelAnimationFrame(h)}}(n,t.el,(()=>{t.el?function(t,e,n,i){((t,e,n)=>{const o=new Map,i=c({platform:It},n),s=c({},i.platform,{_c:o})
return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,l=s.filter(Boolean),a=await(null==r.isRTL?void 0:r.isRTL(e))
let u=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:f}=K(u,o,a),h=o,p={},m=0
for(let g=0;g<l.length;g++){const{name:n,fn:s}=l[g],{x:y,y:v,data:b,reset:x}=await s({x:d,y:f,initialPlacement:o,placement:h,strategy:i,middlewareData:p,rects:u,platform:r,elements:{reference:t,floating:e}})
d=null!=y?y:d,f=null!=v?v:f,p=c({},p,{[n]:c({},p[n],b)}),x&&m<=50&&(m++,"object"==typeof x&&(x.placement&&(h=x.placement),x.rects&&(u=!0===x.rects?await r.getElementRects({reference:t,floating:e,strategy:i}):x.rects),({x:d,y:f}=K(u,h,a))),g=-1)}return{x:d,y:f,placement:h,strategy:i,middlewareData:p}})(t,e,c({},i,{platform:s}))})(t,e.el,n).then(function(t,e){return({x:n,y:i,placement:s,middlewareData:r})=>t.el?(e?Object.assign(t.el.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}):Object.assign(t.el.style,{position:"absolute",left:`${n}px`,top:`${i}px`}),t.el.dataset.popperPlacement=s,function(t,e){const n=t.querySelector(".shepherd-arrow")
if(o(n)&&e.arrow){const{x:t,y:o}=e.arrow
Object.assign(n.style,{left:null!=t?`${t}px`:"",top:null!=o?`${o}px`:""})}}(t.el,r),t):t}(e,i)).then((t=>new Promise((e=>{setTimeout((()=>e(t)),300)})))).then((t=>{null!=t&&t.el&&t.el.focus({preventScroll:!0})}))}(n,t,i,s):null==t.cleanup||t.cleanup()})),t.target=e.element}(this)}_show(){var t
this.trigger("before-show"),this._resolveAttachToOptions(),this._resolveExtraHiglightElements(),this._setupElements(),this.tour.modal||this.tour.setupModal(),null==(t=this.tour.modal)||t.setupForStep(this),this._styleTargetElementForStep(this),this.el&&(this.el.hidden=!1),this.options.scrollTo&&setTimeout((()=>{this._scrollTo(this.options.scrollTo)})),this.el&&(this.el.hidden=!1)
const e=this.shepherdElementComponent.getElement(),n=this.target||document.body,o=this._resolvedExtraHighlightElements
n.classList.add(`${this.classPrefix}shepherd-enabled`),n.classList.add(`${this.classPrefix}shepherd-target`),e.classList.add("shepherd-enabled"),null==o||o.forEach((t=>{t.classList.add(`${this.classPrefix}shepherd-enabled`),t.classList.add(`${this.classPrefix}shepherd-target`)})),this.trigger("show")}_styleTargetElementForStep(t){const e=t.target,n=t._resolvedExtraHighlightElements
if(!e)return
const o=t.options.highlightClass
o&&(e.classList.add(o),null==n||n.forEach((t=>t.classList.add(o)))),e.classList.remove("shepherd-target-click-disabled"),null==n||n.forEach((t=>t.classList.remove("shepherd-target-click-disabled"))),!1===t.options.canClickTarget&&(e.classList.add("shepherd-target-click-disabled"),null==n||n.forEach((t=>t.classList.add("shepherd-target-click-disabled"))))}_updateStepTargetOnHide(){const t=this.target||document.body,e=this._resolvedExtraHighlightElements,n=this.options.highlightClass
n&&(t.classList.remove(n),null==e||e.forEach((t=>t.classList.remove(n)))),t.classList.remove("shepherd-target-click-disabled",`${this.classPrefix}shepherd-enabled`,`${this.classPrefix}shepherd-target`),null==e||e.forEach((t=>{t.classList.remove("shepherd-target-click-disabled",`${this.classPrefix}shepherd-enabled`,`${this.classPrefix}shepherd-target`)}))}}function sn(t){let e,n,o,i,s
return{c(){e=Nt("svg"),n=Nt("path"),Ut(n,"d",t[2]),Ut(e,"class",o=(t[1]?"shepherd-modal-is-visible":"")+" shepherd-modal-overlay-container")},m(o,r){jt(o,e,r),Ht(e,n),t[11](e),i||(s=zt(e,"touchmove",t[3]),i=!0)},p(t,[i]){4&i&&Ut(n,"d",t[2]),2&i&&o!==(o=(t[1]?"shepherd-modal-is-visible":"")+" shepherd-modal-overlay-container")&&Ut(e,"class",o)},i:Pt,o:Pt,d(n){n&&Bt(e),t[11](null),i=!1,s()}}}function rn(t){if(!t)return null
const e=t instanceof HTMLElement&&window.getComputedStyle(t).overflowY
return"hidden"!==e&&"visible"!==e&&t.scrollHeight>=t.clientHeight?t:rn(t.parentElement)}function ln(t,e){const n=t.getBoundingClientRect()
let o=n.y||n.top,i=n.bottom||o+n.height
if(e){const t=e.getBoundingClientRect(),n=t.y||t.top,s=t.bottom||n+t.height
o=Math.max(o,n),i=Math.min(i,s)}return{y:o,height:Math.max(i-o,0)}}function cn(t,e,n){let o,i,{element:s,openingProperties:r}=e,l=!1
function c(){n(4,r=[{width:0,height:0,x:0,y:0,r:0}])}function a(){n(1,l=!1),h()}function u(t=0,e=0,o=0,i=0,s,l,a){if(l){const c=[l,...a||[]]
n(4,r=[])
for(const n of c){if(!n)continue
if(c.indexOf(n)!==c.lastIndexOf(n))continue
const{y:l,height:a}=ln(n,s),{x:u,width:d,left:f}=n.getBoundingClientRect()
c.some((t=>{if(t===n)return!1
const e=t.getBoundingClientRect()
return u>=e.left&&u+d<=e.right&&l>=e.top&&l+a<=e.bottom}))||r.push({width:d+2*t,height:a+2*t,x:(u||f)+o-t,y:l+i-t,r:e})}}else c()}function d(){n(1,l=!0)}c()
const f=t=>{t.preventDefault()}
function h(){o&&(cancelAnimationFrame(o),o=void 0),window.removeEventListener("touchmove",f,{passive:!1})}return t.$$set=t=>{"element"in t&&n(0,s=t.element),"openingProperties"in t&&n(4,r=t.openingProperties)},t.$$.update=()=>{16&t.$$.dirty&&n(2,i=function(t){let e=""
const{innerWidth:n,innerHeight:o}=window
return t.forEach((t=>{const{width:n,height:o,x:i=0,y:s=0,r:r=0}=t,{topLeft:l=0,topRight:c=0,bottomRight:a=0,bottomLeft:u=0}="number"==typeof r?{topLeft:r,topRight:r,bottomRight:r,bottomLeft:r}:r
e+=`M${i+l},${s}      a${l},${l},0,0,0-${l},${l}      V${o+s-u}      a${u},${u},0,0,0,${u},${u}      H${n+i-a}      a${a},${a},0,0,0,${a}-${a}      V${s+c}      a${c},${c},0,0,0-${c}-${c}      Z`})),`M${n},${o}          H0          V0          H${n}          V${o}          Z          ${e}`.replace(/\s/g,"")}(r))},[s,l,i,t=>{t.stopPropagation()},r,()=>s,c,a,u,function(t){h(),t.tour.options.useModalOverlay?(function(t){const{modalOverlayOpeningPadding:e,modalOverlayOpeningRadius:n,modalOverlayOpeningXOffset:i=0,modalOverlayOpeningYOffset:s=0}=t.options,r=function(t){let e={top:0,left:0}
if(!t)return e
let n=t.ownerDocument.defaultView
for(;n!==window.top;){var o
const t=null==(o=n)?void 0:o.frameElement
if(t){var i,s
const n=t.getBoundingClientRect()
e.top+=n.top+(null!=(i=n.scrollTop)?i:0),e.left+=n.left+(null!=(s=n.scrollLeft)?s:0)}n=n.parent}return e}(t.target),l=rn(t.target),c=()=>{o=void 0,u(e,n,i+r.left,s+r.top,l,t.target,t._resolvedExtraHighlightElements),o=requestAnimationFrame(c)}
c(),window.addEventListener("touchmove",f,{passive:!1})}(t),d()):a()},d,function(t){ee[t?"unshift":"push"]((()=>{s=t,n(0,s)}))}]}class an extends $e{constructor(t){super(),we(this,t,cn,sn,Dt,{element:0,openingProperties:4,getElement:5,closeModalOpening:6,hide:7,positionModal:8,setupForStep:9,show:10})}get getElement(){return this.$$.ctx[5]}get closeModalOpening(){return this.$$.ctx[6]}get hide(){return this.$$.ctx[7]}get positionModal(){return this.$$.ctx[8]}get setupForStep(){return this.$$.ctx[9]}get show(){return this.$$.ctx[10]}}class un extends l{constructor(){super(),this.activeTour=void 0,w(this)}}const dn=new un,fn="undefined"==typeof window
dn.Step=fn?class{constructor(t){}}:on,dn.Tour=fn?class{constructor(t,e){}}:class extends l{constructor(t={}){return super(),this.trackedEvents=["active","cancel","complete","show"],this.classPrefix=void 0,this.currentStep=void 0,this.focusedElBeforeOpen=void 0,this.id=void 0,this.modal=void 0,this.options=void 0,this.steps=void 0,w(this),this.options=Object.assign({},{exitOnEsc:!0,keyboardNavigation:!0},t),this.classPrefix=$(this.options.classPrefix),this.steps=[],this.addSteps(this.options.steps),["active","cancel","complete","inactive","show","start"].map((t=>{(t=>{this.on(t,(e=>{(e=e||{}).tour=this,dn.trigger(t,e)}))})(t)})),this._setTourID(t.id),this}addStep(t,e){let n=t
return n instanceof on?n.tour=this:n=new on(this,n),r(e)?this.steps.push(n):this.steps.splice(e,0,n),n}addSteps(t){return Array.isArray(t)&&t.forEach((t=>{this.addStep(t)})),this}back(){const t=this.steps.indexOf(this.currentStep)
this.show(t-1,!1)}async cancel(){if(this.options.confirmCancel){const t=this.options.confirmCancelMessage||"Are you sure you want to stop the tour?"
let e
e=i(this.options.confirmCancel)?await this.options.confirmCancel():window.confirm(t),e&&this._done("cancel")}else this._done("cancel")}complete(){this._done("complete")}getById(t){return this.steps.find((e=>e.id===t))}getCurrentStep(){return this.currentStep}hide(){const t=this.getCurrentStep()
if(t)return t.hide()}isActive(){return dn.activeTour===this}next(){const t=this.steps.indexOf(this.currentStep)
t===this.steps.length-1?this.complete():this.show(t+1,!0)}removeStep(t){const e=this.getCurrentStep()
this.steps.some(((e,n)=>{if(e.id===t)return e.isOpen()&&e.hide(),e.destroy(),this.steps.splice(n,1),!0})),e&&e.id===t&&(this.currentStep=void 0,this.steps.length?this.show(0):this.cancel())}show(t=0,e=!0){const n=s(t)?this.getById(t):this.steps[t]
n&&(this._updateStateBeforeShow(),i(n.options.showOn)&&!n.options.showOn()?this._skipStep(n,e):(this.currentStep=n,this.trigger("show",{step:n,previous:this.currentStep}),n.show()))}async start(){this.trigger("start"),this.focusedElBeforeOpen=document.activeElement,this.currentStep=null,this.setupModal(),this._setupActiveTour(),this.next()}_done(t){const e=this.steps.indexOf(this.currentStep)
if(Array.isArray(this.steps)&&this.steps.forEach((t=>t.destroy())),function(t){if(t){const{steps:e}=t
e.forEach((t=>{t.options&&!1===t.options.canClickTarget&&t.options.attachTo&&(o(t.target)&&t.target.classList.remove("shepherd-target-click-disabled"),t._resolvedExtraHighlightElements&&t._resolvedExtraHighlightElements.forEach((t=>{o(t)&&t.classList.remove("shepherd-target-click-disabled")})))}))}}(this),this.trigger(t,{index:e}),dn.activeTour=null,this.trigger("inactive",{tour:this}),this.modal&&this.modal.hide(),("cancel"===t||"complete"===t)&&this.modal){const t=document.querySelector(".shepherd-modal-overlay-container")
t&&(t.remove(),this.modal=null)}o(this.focusedElBeforeOpen)&&this.focusedElBeforeOpen.focus()}_setupActiveTour(){this.trigger("active",{tour:this}),dn.activeTour=this}setupModal(){this.modal=new an({target:this.options.modalContainer||document.body,props:{styles:this.styles}})}_skipStep(t,e){const n=this.steps.indexOf(t)
if(n===this.steps.length-1)this.complete()
else{const t=e?n+1:n-1
this.show(t,e)}}_updateStateBeforeShow(){this.currentStep&&this.currentStep.hide(),this.isActive()||this._setupActiveTour()}_setTourID(t){const e=this.options.tourName||"tour",n=t||O()
this.id=`${e}--${n}`}}}}])