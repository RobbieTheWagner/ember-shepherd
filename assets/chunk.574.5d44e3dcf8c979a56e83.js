/*! For license information please see chunk.574.5d44e3dcf8c979a56e83.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[574],{9574:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Be})
var o=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t)
return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===i}(t)}(t)},i="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103
function s(t,e){return!1!==e.clone&&e.isMergeableObject(t)?a((n=t,Array.isArray(n)?[]:{}),t,e):t
var n}function r(t,e,n){return t.concat(e).map((function(t){return s(t,n)}))}function l(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return t.propertyIsEnumerable(e)})):[]}(t))}function c(t,e){try{return e in t}catch(t){return!1}}function a(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||r,n.isMergeableObject=n.isMergeableObject||o,n.cloneUnlessOtherwiseSpecified=s
var i=Array.isArray(e)
return i===Array.isArray(t)?i?n.arrayMerge(t,e,n):function(t,e,n){var o={}
return n.isMergeableObject(t)&&l(t).forEach((function(e){o[e]=s(t[e],n)})),l(e).forEach((function(i){(function(t,e){return c(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,i)||(c(t,i)&&n.isMergeableObject(e[i])?o[i]=function(t,e){if(!e.customMerge)return a
var n=e.customMerge(t)
return"function"==typeof n?n:a}(i,n)(t[i],e[i],n):o[i]=s(e[i],n))})),o}(t,e,n):s(e,n)}a.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array")
return t.reduce((function(t,n){return a(t,n,e)}),{})}
var u=a
function h(t){return t instanceof HTMLElement}function d(t){return"function"==typeof t}function p(t){return"string"==typeof t}function f(t){return void 0===t}class m{on(t,e,n,o){return void 0===o&&(o=!1),f(this.bindings)&&(this.bindings={}),f(this.bindings[t])&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:o}),this}once(t,e,n){return this.on(t,e,n,!0)}off(t,e){return f(this.bindings)||f(this.bindings[t])||(f(e)?delete this.bindings[t]:this.bindings[t].forEach(((n,o)=>{n.handler===e&&this.bindings[t].splice(o,1)}))),this}trigger(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o]
return!f(this.bindings)&&this.bindings[t]&&this.bindings[t].forEach(((e,o)=>{const{ctx:i,handler:s,once:r}=e,l=i||this
s.apply(l,n),r&&this.bindings[t].splice(o,1)})),this}}function g(t){const e=Object.getOwnPropertyNames(t.constructor.prototype)
for(let n=0;n<e.length;n++){const o=e[n],i=t[o]
"constructor"!==o&&"function"==typeof i&&(t[o]=i.bind(t))}return t}function b(t){return p(t)&&""!==t?"-"!==t.charAt(t.length-1)?`${t}-`:t:""}function y(t){return null==t||!t.element||!t.on}function x(){let t=Date.now()
return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const n=(t+16*Math.random())%16|0
return t=Math.floor(t/16),("x"==e?n:3&n|8).toString(16)}))}function $(){return $=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},$.apply(this,arguments)}const v=["mainAxis","crossAxis","limiter"]
function w(t){return t.split("-")[0]}function E(t){return t.split("-")[1]}function O(t){return["top","bottom"].includes(w(t))?"x":"y"}function T(t){return"y"===t?"height":"width"}function _(t,e,n){let{reference:o,floating:i}=t
const s=o.x+o.width/2-i.width/2,r=o.y+o.height/2-i.height/2,l=O(e),c=T(l),a=o[c]/2-i[c]/2,u="x"===l
let h
switch(w(e)){case"top":h={x:s,y:o.y-i.height}
break
case"bottom":h={x:s,y:o.y+o.height}
break
case"right":h={x:o.x+o.width,y:r}
break
case"left":h={x:o.x-i.width,y:r}
break
default:h={x:o.x,y:o.y}}switch(E(e)){case"start":h[l]-=a*(n&&u?-1:1)
break
case"end":h[l]+=a*(n&&u?-1:1)}return h}function I(t){return"number"!=typeof t?function(t){return $({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function S(t){return $({},t,{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}const A=Math.min,L=Math.max
function P(t,e,n){return L(t,A(e,n))}function C(t){return"x"===t?"y":"x"}const k=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:t=>{let{x:e,y:n}=t
return{x:e,y:n}}}}=t,c=function(t,e){if(null==t)return{}
var n,o,i={},s=Object.keys(t)
for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(i[n]=t[n])
return i}(t,v),a={x:n,y:o},u=await async function(t,e){var n
void 0===e&&(e={})
const{x:o,y:i,platform:s,rects:r,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:d=!1,padding:p=0}=e,f=I(p),m=l[d?"floating"===h?"reference":"floating":h],g=S(await s.getClippingRect({element:null==(n=await(null==s.isElement?void 0:s.isElement(m)))||n?m:m.contextElement||await(null==s.getDocumentElement?void 0:s.getDocumentElement(l.floating)),boundary:a,rootBoundary:u,strategy:c})),b=S(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===h?$({},r.floating,{x:o,y:i}):r.reference,offsetParent:await(null==s.getOffsetParent?void 0:s.getOffsetParent(l.floating)),strategy:c}):r[h])
return{top:g.top-b.top+f.top,bottom:b.bottom-g.bottom+f.bottom,left:g.left-b.left+f.left,right:b.right-g.right+f.right}}(e,c),h=O(w(i)),d=C(h)
let p=a[h],f=a[d]
if(s){const t="y"===h?"bottom":"right"
p=P(p+u["y"===h?"top":"left"],p,p-u[t])}if(r){const t="y"===d?"bottom":"right"
f=P(f+u["y"===d?"top":"left"],f,f-u[t])}const m=l.fn($({},e,{[h]:p,[d]:f}))
return $({},m,{data:{x:m.x-n,y:m.y-o}})}}},R=function(t){return void 0===t&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:i,rects:s,middlewareData:r}=e,{offset:l=0,mainAxis:c=!0,crossAxis:a=!0}=t,u={x:n,y:o},h=O(i),d=C(h)
let p=u[h],f=u[d]
const m="function"==typeof l?l(e):l,g="number"==typeof m?{mainAxis:m,crossAxis:0}:$({mainAxis:0,crossAxis:0},m)
if(c){const t="y"===h?"height":"width",e=s.reference[h]-s.floating[t]+g.mainAxis,n=s.reference[h]+s.reference[t]-g.mainAxis
p<e?p=e:p>n&&(p=n)}if(a){var b,y,x,v
const t="y"===h?"width":"height",e=["top","left"].includes(w(i)),n=s.reference[d]-s.floating[t]+(e&&null!=(b=null==(y=r.offset)?void 0:y[d])?b:0)+(e?0:g.crossAxis),o=s.reference[d]+s.reference[t]+(e?0:null!=(x=null==(v=r.offset)?void 0:v[d])?x:0)-(e?g.crossAxis:0)
f<n?f=n:f>o&&(f=o)}return{[h]:p,[d]:f}}}}
function M(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function j(t){if(null==t)return window
if(!M(t)){const e=t.ownerDocument
return e&&e.defaultView||window}return t}function H(t){return j(t).getComputedStyle(t)}function D(t){return M(t)?"":t?(t.nodeName||"").toLowerCase():""}function F(){const t=navigator.userAgentData
return null!=t&&t.brands?t.brands.map((t=>t.brand+"/"+t.version)).join(" "):navigator.userAgent}function B(t){return t instanceof j(t).HTMLElement}function W(t){return t instanceof j(t).Element}function N(t){return"undefined"!=typeof ShadowRoot&&(t instanceof j(t).ShadowRoot||t instanceof ShadowRoot)}function V(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=H(t)
return/auto|scroll|overlay|hidden/.test(e+o+n)&&!["inline","contents"].includes(i)}function q(t){return["table","td","th"].includes(D(t))}function z(t){const e=/firefox/i.test(F()),n=H(t),o=n.backdropFilter||n.WebkitBackdropFilter
return"none"!==n.transform||"none"!==n.perspective||!!o&&"none"!==o||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some((t=>n.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=n.contain
return null!=e&&e.includes(t)}))}function U(){return!/^((?!chrome|android).)*safari/i.test(F())}function Y(t){return["html","body","#document"].includes(D(t))}const X=Math.min,Z=Math.max,K=Math.round
function G(t,e,n){var o,i,s,r
void 0===e&&(e=!1),void 0===n&&(n=!1)
const l=t.getBoundingClientRect()
let c=1,a=1
e&&B(t)&&(c=t.offsetWidth>0&&K(l.width)/t.offsetWidth||1,a=t.offsetHeight>0&&K(l.height)/t.offsetHeight||1)
const u=W(t)?j(t):window,h=!U()&&n,d=(l.left+(h&&null!=(o=null==(i=u.visualViewport)?void 0:i.offsetLeft)?o:0))/c,p=(l.top+(h&&null!=(s=null==(r=u.visualViewport)?void 0:r.offsetTop)?s:0))/a,f=l.width/c,m=l.height/a
return{width:f,height:m,top:p,right:d+f,bottom:p+m,left:d,x:d,y:p}}function J(t){return(e=t,(e instanceof j(e).Node?t.ownerDocument:t.document)||window.document).documentElement
var e}function Q(t){return W(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function tt(t){return G(J(t)).left+Q(t).scrollLeft}function et(t,e,n){const o=B(e),i=J(e),s=G(t,o&&function(t){const e=G(t)
return K(e.width)!==t.offsetWidth||K(e.height)!==t.offsetHeight}(e),"fixed"===n)
let r={scrollLeft:0,scrollTop:0}
const l={x:0,y:0}
if(o||!o&&"fixed"!==n)if(("body"!==D(e)||V(i))&&(r=Q(e)),B(e)){const t=G(e,!0)
l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else i&&(l.x=tt(i))
return{x:s.left+r.scrollLeft-l.x,y:s.top+r.scrollTop-l.y,width:s.width,height:s.height}}function nt(t){if("html"===D(t))return t
const e=t.assignedSlot||t.parentNode||(N(t)?t.host:null)||J(t)
return N(e)?e.host:e}function ot(t){return B(t)&&"fixed"!==H(t).position?t.offsetParent:null}function it(t){const e=j(t)
let n=ot(t)
for(;n&&q(n)&&"static"===H(n).position;)n=ot(n)
return n&&("html"===D(n)||"body"===D(n)&&"static"===H(n).position&&!z(n))?e:n||function(t){let e=nt(t)
for(;B(e)&&!Y(e);){if(z(e))return e
e=nt(e)}return null}(t)||e}function st(t){if(B(t))return{width:t.offsetWidth,height:t.offsetHeight}
const e=G(t)
return{width:e.width,height:e.height}}function rt(t){const e=nt(t)
return Y(e)?t.ownerDocument.body:B(e)&&V(e)?e:rt(e)}function lt(t,e){var n
void 0===e&&(e=[])
const o=rt(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),s=j(o),r=i?[s].concat(s.visualViewport||[],V(o)?o:[]):o,l=e.concat(r)
return i?l:l.concat(lt(r))}function ct(t,e,n){return"viewport"===e?S(function(t,e){const n=j(t),o=J(t),i=n.visualViewport
let s=o.clientWidth,r=o.clientHeight,l=0,c=0
if(i){s=i.width,r=i.height
const t=U();(t||!t&&"fixed"===e)&&(l=i.offsetLeft,c=i.offsetTop)}return{width:s,height:r,x:l,y:c}}(t,n)):W(e)?function(t,e){const n=G(t,!1,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft
return{top:o,left:i,x:i,y:o,right:i+t.clientWidth,bottom:o+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(e,n):S(function(t){var e
const n=J(t),o=Q(t),i=null==(e=t.ownerDocument)?void 0:e.body,s=Z(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),r=Z(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0)
let l=-o.scrollLeft+tt(t)
const c=-o.scrollTop
return"rtl"===H(i||n).direction&&(l+=Z(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:r,x:l,y:c}}(J(t)))}const at={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t
const s="clippingAncestors"===n?function(t){let e=lt(t).filter((t=>W(t)&&"body"!==D(t))),n=t,o=null
for(;W(n)&&!Y(n);){const t=H(n)
"static"===t.position&&o&&["absolute","fixed"].includes(o.position)&&!z(n)?e=e.filter((t=>t!==n)):o=t,n=nt(n)}return e}(e):[].concat(n),r=[...s,o],l=r[0],c=r.reduce(((t,n)=>{const o=ct(e,n,i)
return t.top=Z(o.top,t.top),t.right=X(o.right,t.right),t.bottom=X(o.bottom,t.bottom),t.left=Z(o.left,t.left),t}),ct(e,l,i))
return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t
const i=B(n),s=J(n)
if(n===s)return e
let r={scrollLeft:0,scrollTop:0}
const l={x:0,y:0}
if((i||!i&&"fixed"!==o)&&(("body"!==D(n)||V(s))&&(r=Q(n)),B(n))){const t=G(n,!0)
l.x=t.x+n.clientLeft,l.y=t.y+n.clientTop}return $({},e,{x:e.x-r.scrollLeft+l.x,y:e.y-r.scrollTop+l.y})},isElement:W,getDimensions:st,getOffsetParent:it,getDocumentElement:J,getElementRects:t=>{let{reference:e,floating:n,strategy:o}=t
return{reference:et(e,it(n),o),floating:$({},st(n),{x:0,y:0})}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===H(t).direction}
function ut(){}function ht(t,e){for(const n in e)t[n]=e[n]
return t}function dt(t){return t()}function pt(){return Object.create(null)}function ft(t){t.forEach(dt)}function mt(t){return"function"==typeof t}function gt(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function bt(t,e){t.appendChild(e)}function yt(t,e,n){t.insertBefore(e,n||null)}function xt(t){t.parentNode&&t.parentNode.removeChild(t)}function $t(t){return document.createElement(t)}function vt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function wt(t){return document.createTextNode(t)}function Et(){return wt(" ")}function Ot(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function Tt(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _t(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__)
for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:Tt(t,o,e[o])}function It(t,e,n){t.classList[n?"add":"remove"](e)}let St
function At(t){St=t}function Lt(){if(!St)throw new Error("Function called outside component initialization")
return St}function Pt(t){Lt().$$.after_update.push(t)}const Ct=[],kt=[],Rt=[],Mt=[],jt=Promise.resolve()
let Ht=!1
function Dt(t){Rt.push(t)}const Ft=new Set
let Bt=0
function Wt(){const t=St
do{for(;Bt<Ct.length;){const t=Ct[Bt]
Bt++,At(t),Nt(t.$$)}for(At(null),Ct.length=0,Bt=0;kt.length;)kt.pop()()
for(let t=0;t<Rt.length;t+=1){const e=Rt[t]
Ft.has(e)||(Ft.add(e),e())}Rt.length=0}while(Ct.length)
for(;Mt.length;)Mt.pop()()
Ht=!1,Ft.clear(),At(t)}function Nt(t){if(null!==t.fragment){t.update(),ft(t.before_update)
const e=t.dirty
t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Dt)}}const Vt=new Set
let qt
function zt(){qt={r:0,c:[],p:qt}}function Ut(){qt.r||ft(qt.c),qt=qt.p}function Yt(t,e){t&&t.i&&(Vt.delete(t),t.i(e))}function Xt(t,e,n,o){if(t&&t.o){if(Vt.has(t))return
Vt.add(t),qt.c.push((()=>{Vt.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function Zt(t){t&&t.c()}function Kt(t,e,n,o){const{fragment:i,after_update:s}=t.$$
i&&i.m(e,n),o||Dt((()=>{const e=t.$$.on_mount.map(dt).filter(mt)
t.$$.on_destroy?t.$$.on_destroy.push(...e):ft(e),t.$$.on_mount=[]})),s.forEach(Dt)}function Gt(t,e){const n=t.$$
null!==n.fragment&&(ft(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Jt(t,e){-1===t.$$.dirty[0]&&(Ct.push(t),Ht||(Ht=!0,jt.then(Wt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qt(t,e,n,o,i,s,r,l){void 0===l&&(l=[-1])
const c=St
At(t)
const a=t.$$={fragment:null,ctx:[],props:s,update:ut,not_equal:i,bound:pt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:pt(),dirty:l,skip_bound:!1,root:e.target||c.$$.root}
r&&r(a.root)
let u=!1
if(a.ctx=n?n(t,e.props||{},(function(e,n){const o=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n
return a.ctx&&i(a.ctx[e],a.ctx[e]=o)&&(!a.skip_bound&&a.bound[e]&&a.bound[e](o),u&&Jt(t,e)),n})):[],a.update(),u=!0,ft(a.before_update),a.fragment=!!o&&o(a.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target)
a.fragment&&a.fragment.l(t),t.forEach(xt)}else a.fragment&&a.fragment.c()
e.intro&&Yt(t.$$.fragment),Kt(t,e.target,e.anchor,e.customElement),Wt()}At(c)}class te{$destroy(){Gt(this,1),this.$destroy=ut}$on(t,e){if(!mt(e))return ut
const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[])
return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e
this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ee(t){let e,n,o,i,s
return{c(){e=$t("button"),Tt(e,"aria-label",n=t[3]?t[3]:null),Tt(e,"class",o=`${t[1]||""} shepherd-button ${t[4]?"shepherd-button-secondary":""}`),e.disabled=t[2],Tt(e,"tabindex","0")},m(n,o){yt(n,e,o),e.innerHTML=t[5],i||(s=Ot(e,"click",(function(){mt(t[0])&&t[0].apply(this,arguments)})),i=!0)},p(i,s){let[r]=s
t=i,32&r&&(e.innerHTML=t[5]),8&r&&n!==(n=t[3]?t[3]:null)&&Tt(e,"aria-label",n),18&r&&o!==(o=`${t[1]||""} shepherd-button ${t[4]?"shepherd-button-secondary":""}`)&&Tt(e,"class",o),4&r&&(e.disabled=t[2])},i:ut,o:ut,d(t){t&&xt(e),i=!1,s()}}}function ne(t,e,n){let o,i,s,r,l,c,{config:a,step:u}=e
function h(t){return d(t)?t.call(u):t}return t.$$set=t=>{"config"in t&&n(6,a=t.config),"step"in t&&n(7,u=t.step)},t.$$.update=()=>{192&t.$$.dirty&&(n(0,o=a.action?a.action.bind(u.tour):null),n(1,i=a.classes),n(2,s=!!a.disabled&&h(a.disabled)),n(3,r=a.label?h(a.label):null),n(4,l=a.secondary),n(5,c=a.text?h(a.text):null))},[o,i,s,r,l,c,a,u]}class oe extends te{constructor(t){super(),Qt(this,t,ne,ee,gt,{config:6,step:7})}}function ie(t,e,n){const o=t.slice()
return o[2]=e[n],o}function se(t){let e,n,o=t[1],i=[]
for(let r=0;r<o.length;r+=1)i[r]=re(ie(t,o,r))
const s=t=>Xt(i[t],1,1,(()=>{i[t]=null}))
return{c(){for(let t=0;t<i.length;t+=1)i[t].c()
e=wt("")},m(t,o){for(let e=0;e<i.length;e+=1)i[e].m(t,o)
yt(t,e,o),n=!0},p(t,n){if(3&n){let r
for(o=t[1],r=0;r<o.length;r+=1){const s=ie(t,o,r)
i[r]?(i[r].p(s,n),Yt(i[r],1)):(i[r]=re(s),i[r].c(),Yt(i[r],1),i[r].m(e.parentNode,e))}for(zt(),r=o.length;r<i.length;r+=1)s(r)
Ut()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)Yt(i[t])
n=!0}},o(t){i=i.filter(Boolean)
for(let e=0;e<i.length;e+=1)Xt(i[e])
n=!1},d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(i,t),t&&xt(e)}}}function re(t){let e,n
return e=new oe({props:{config:t[2],step:t[0]}}),{c(){Zt(e.$$.fragment)},m(t,o){Kt(e,t,o),n=!0},p(t,n){const o={}
2&n&&(o.config=t[2]),1&n&&(o.step=t[0]),e.$set(o)},i(t){n||(Yt(e.$$.fragment,t),n=!0)},o(t){Xt(e.$$.fragment,t),n=!1},d(t){Gt(e,t)}}}function le(t){let e,n,o=t[1]&&se(t)
return{c(){e=$t("footer"),o&&o.c(),Tt(e,"class","shepherd-footer")},m(t,i){yt(t,e,i),o&&o.m(e,null),n=!0},p(t,n){let[i]=n
t[1]?o?(o.p(t,i),2&i&&Yt(o,1)):(o=se(t),o.c(),Yt(o,1),o.m(e,null)):o&&(zt(),Xt(o,1,1,(()=>{o=null})),Ut())},i(t){n||(Yt(o),n=!0)},o(t){Xt(o),n=!1},d(t){t&&xt(e),o&&o.d()}}}function ce(t,e,n){let o,{step:i}=e
return t.$$set=t=>{"step"in t&&n(0,i=t.step)},t.$$.update=()=>{1&t.$$.dirty&&n(1,o=i.options.buttons)},[i,o]}class ae extends te{constructor(t){super(),Qt(this,t,ce,le,gt,{step:0})}}function ue(t){let e,n,o,i,s
return{c(){e=$t("button"),n=$t("span"),n.textContent="×",Tt(n,"aria-hidden","true"),Tt(e,"aria-label",o=t[0].label?t[0].label:"Close Tour"),Tt(e,"class","shepherd-cancel-icon"),Tt(e,"type","button")},m(o,r){yt(o,e,r),bt(e,n),i||(s=Ot(e,"click",t[1]),i=!0)},p(t,n){let[i]=n
1&i&&o!==(o=t[0].label?t[0].label:"Close Tour")&&Tt(e,"aria-label",o)},i:ut,o:ut,d(t){t&&xt(e),i=!1,s()}}}function he(t,e,n){let{cancelIcon:o,step:i}=e
return t.$$set=t=>{"cancelIcon"in t&&n(0,o=t.cancelIcon),"step"in t&&n(2,i=t.step)},[o,t=>{t.preventDefault(),i.cancel()},i]}class de extends te{constructor(t){super(),Qt(this,t,he,ue,gt,{cancelIcon:0,step:2})}}function pe(t){let e
return{c(){e=$t("h3"),Tt(e,"id",t[1]),Tt(e,"class","shepherd-title")},m(n,o){yt(n,e,o),t[3](e)},p(t,n){let[o]=n
2&o&&Tt(e,"id",t[1])},i:ut,o:ut,d(n){n&&xt(e),t[3](null)}}}function fe(t,e,n){let{labelId:o,element:i,title:s}=e
return Pt((()=>{d(s)&&n(2,s=s()),n(0,i.innerHTML=s,i)})),t.$$set=t=>{"labelId"in t&&n(1,o=t.labelId),"element"in t&&n(0,i=t.element),"title"in t&&n(2,s=t.title)},[i,o,s,function(t){kt[t?"unshift":"push"]((()=>{i=t,n(0,i)}))}]}class me extends te{constructor(t){super(),Qt(this,t,fe,pe,gt,{labelId:1,element:0,title:2})}}function ge(t){let e,n
return e=new me({props:{labelId:t[0],title:t[2]}}),{c(){Zt(e.$$.fragment)},m(t,o){Kt(e,t,o),n=!0},p(t,n){const o={}
1&n&&(o.labelId=t[0]),4&n&&(o.title=t[2]),e.$set(o)},i(t){n||(Yt(e.$$.fragment,t),n=!0)},o(t){Xt(e.$$.fragment,t),n=!1},d(t){Gt(e,t)}}}function be(t){let e,n
return e=new de({props:{cancelIcon:t[3],step:t[1]}}),{c(){Zt(e.$$.fragment)},m(t,o){Kt(e,t,o),n=!0},p(t,n){const o={}
8&n&&(o.cancelIcon=t[3]),2&n&&(o.step=t[1]),e.$set(o)},i(t){n||(Yt(e.$$.fragment,t),n=!0)},o(t){Xt(e.$$.fragment,t),n=!1},d(t){Gt(e,t)}}}function ye(t){let e,n,o,i=t[2]&&ge(t),s=t[3]&&t[3].enabled&&be(t)
return{c(){e=$t("header"),i&&i.c(),n=Et(),s&&s.c(),Tt(e,"class","shepherd-header")},m(t,r){yt(t,e,r),i&&i.m(e,null),bt(e,n),s&&s.m(e,null),o=!0},p(t,o){let[r]=o
t[2]?i?(i.p(t,r),4&r&&Yt(i,1)):(i=ge(t),i.c(),Yt(i,1),i.m(e,n)):i&&(zt(),Xt(i,1,1,(()=>{i=null})),Ut()),t[3]&&t[3].enabled?s?(s.p(t,r),8&r&&Yt(s,1)):(s=be(t),s.c(),Yt(s,1),s.m(e,null)):s&&(zt(),Xt(s,1,1,(()=>{s=null})),Ut())},i(t){o||(Yt(i),Yt(s),o=!0)},o(t){Xt(i),Xt(s),o=!1},d(t){t&&xt(e),i&&i.d(),s&&s.d()}}}function xe(t,e,n){let o,i,{labelId:s,step:r}=e
return t.$$set=t=>{"labelId"in t&&n(0,s=t.labelId),"step"in t&&n(1,r=t.step)},t.$$.update=()=>{2&t.$$.dirty&&(n(2,o=r.options.title),n(3,i=r.options.cancelIcon))},[s,r,o,i]}class $e extends te{constructor(t){super(),Qt(this,t,xe,ye,gt,{labelId:0,step:1})}}function ve(t){let e
return{c(){e=$t("div"),Tt(e,"class","shepherd-text"),Tt(e,"id",t[1])},m(n,o){yt(n,e,o),t[3](e)},p(t,n){let[o]=n
2&o&&Tt(e,"id",t[1])},i:ut,o:ut,d(n){n&&xt(e),t[3](null)}}}function we(t,e,n){let{descriptionId:o,element:i,step:s}=e
return Pt((()=>{let{text:t}=s.options
d(t)&&(t=t.call(s)),h(t)?i.appendChild(t):n(0,i.innerHTML=t,i)})),t.$$set=t=>{"descriptionId"in t&&n(1,o=t.descriptionId),"element"in t&&n(0,i=t.element),"step"in t&&n(2,s=t.step)},[i,o,s,function(t){kt[t?"unshift":"push"]((()=>{i=t,n(0,i)}))}]}class Ee extends te{constructor(t){super(),Qt(this,t,we,ve,gt,{descriptionId:1,element:0,step:2})}}function Oe(t){let e,n
return e=new $e({props:{labelId:t[1],step:t[2]}}),{c(){Zt(e.$$.fragment)},m(t,o){Kt(e,t,o),n=!0},p(t,n){const o={}
2&n&&(o.labelId=t[1]),4&n&&(o.step=t[2]),e.$set(o)},i(t){n||(Yt(e.$$.fragment,t),n=!0)},o(t){Xt(e.$$.fragment,t),n=!1},d(t){Gt(e,t)}}}function Te(t){let e,n
return e=new Ee({props:{descriptionId:t[0],step:t[2]}}),{c(){Zt(e.$$.fragment)},m(t,o){Kt(e,t,o),n=!0},p(t,n){const o={}
1&n&&(o.descriptionId=t[0]),4&n&&(o.step=t[2]),e.$set(o)},i(t){n||(Yt(e.$$.fragment,t),n=!0)},o(t){Xt(e.$$.fragment,t),n=!1},d(t){Gt(e,t)}}}function _e(t){let e,n
return e=new ae({props:{step:t[2]}}),{c(){Zt(e.$$.fragment)},m(t,o){Kt(e,t,o),n=!0},p(t,n){const o={}
4&n&&(o.step=t[2]),e.$set(o)},i(t){n||(Yt(e.$$.fragment,t),n=!0)},o(t){Xt(e.$$.fragment,t),n=!1},d(t){Gt(e,t)}}}function Ie(t){let e,n,o,i,s=!f(t[2].options.title)||t[2].options.cancelIcon&&t[2].options.cancelIcon.enabled,r=!f(t[2].options.text),l=Array.isArray(t[2].options.buttons)&&t[2].options.buttons.length,c=s&&Oe(t),a=r&&Te(t),u=l&&_e(t)
return{c(){e=$t("div"),c&&c.c(),n=Et(),a&&a.c(),o=Et(),u&&u.c(),Tt(e,"class","shepherd-content")},m(t,s){yt(t,e,s),c&&c.m(e,null),bt(e,n),a&&a.m(e,null),bt(e,o),u&&u.m(e,null),i=!0},p(t,i){let[h]=i
4&h&&(s=!f(t[2].options.title)||t[2].options.cancelIcon&&t[2].options.cancelIcon.enabled),s?c?(c.p(t,h),4&h&&Yt(c,1)):(c=Oe(t),c.c(),Yt(c,1),c.m(e,n)):c&&(zt(),Xt(c,1,1,(()=>{c=null})),Ut()),4&h&&(r=!f(t[2].options.text)),r?a?(a.p(t,h),4&h&&Yt(a,1)):(a=Te(t),a.c(),Yt(a,1),a.m(e,o)):a&&(zt(),Xt(a,1,1,(()=>{a=null})),Ut()),4&h&&(l=Array.isArray(t[2].options.buttons)&&t[2].options.buttons.length),l?u?(u.p(t,h),4&h&&Yt(u,1)):(u=_e(t),u.c(),Yt(u,1),u.m(e,null)):u&&(zt(),Xt(u,1,1,(()=>{u=null})),Ut())},i(t){i||(Yt(c),Yt(a),Yt(u),i=!0)},o(t){Xt(c),Xt(a),Xt(u),i=!1},d(t){t&&xt(e),c&&c.d(),a&&a.d(),u&&u.d()}}}function Se(t,e,n){let{descriptionId:o,labelId:i,step:s}=e
return t.$$set=t=>{"descriptionId"in t&&n(0,o=t.descriptionId),"labelId"in t&&n(1,i=t.labelId),"step"in t&&n(2,s=t.step)},[o,i,s]}class Ae extends te{constructor(t){super(),Qt(this,t,Se,Ie,gt,{descriptionId:0,labelId:1,step:2})}}function Le(t){let e
return{c(){e=$t("div"),Tt(e,"class","shepherd-arrow"),Tt(e,"data-popper-arrow","")},m(t,n){yt(t,e,n)},d(t){t&&xt(e)}}}function Pe(t){let e,n,o,i,s,r,l,c,a=t[4].options.arrow&&t[4].options.attachTo&&t[4].options.attachTo.element&&t[4].options.attachTo.on&&Le()
o=new Ae({props:{descriptionId:t[2],labelId:t[3],step:t[4]}})
let u=[{"aria-describedby":i=f(t[4].options.text)?null:t[2]},{"aria-labelledby":s=t[4].options.title?t[3]:null},t[1],{role:"dialog"},{tabindex:"0"}],h={}
for(let d=0;d<u.length;d+=1)h=ht(h,u[d])
return{c(){e=$t("div"),a&&a.c(),n=Et(),Zt(o.$$.fragment),_t(e,h),It(e,"shepherd-has-cancel-icon",t[5]),It(e,"shepherd-has-title",t[6]),It(e,"shepherd-element",!0)},m(i,s){yt(i,e,s),a&&a.m(e,null),bt(e,n),Kt(o,e,null),t[13](e),r=!0,l||(c=Ot(e,"keydown",t[7]),l=!0)},p(t,l){let[c]=l
t[4].options.arrow&&t[4].options.attachTo&&t[4].options.attachTo.element&&t[4].options.attachTo.on?a||(a=Le(),a.c(),a.m(e,n)):a&&(a.d(1),a=null)
const d={}
4&c&&(d.descriptionId=t[2]),8&c&&(d.labelId=t[3]),16&c&&(d.step=t[4]),o.$set(d),_t(e,h=function(t,e){const n={},o={},i={$$scope:1}
let s=t.length
for(;s--;){const r=t[s],l=e[s]
if(l){for(const t in r)t in l||(o[t]=1)
for(const t in l)i[t]||(n[t]=l[t],i[t]=1)
t[s]=l}else for(const t in r)i[t]=1}for(const r in o)r in n||(n[r]=void 0)
return n}(u,[(!r||20&c&&i!==(i=f(t[4].options.text)?null:t[2]))&&{"aria-describedby":i},(!r||24&c&&s!==(s=t[4].options.title?t[3]:null))&&{"aria-labelledby":s},2&c&&t[1],{role:"dialog"},{tabindex:"0"}])),It(e,"shepherd-has-cancel-icon",t[5]),It(e,"shepherd-has-title",t[6]),It(e,"shepherd-element",!0)},i(t){r||(Yt(o.$$.fragment,t),r=!0)},o(t){Xt(o.$$.fragment,t),r=!1},d(n){n&&xt(e),a&&a.d(),Gt(o),t[13](null),l=!1,c()}}}function Ce(t){return t.split(" ").filter((t=>!!t.length))}function ke(t,e,n){let o,i,s,{classPrefix:r,element:l,descriptionId:c,firstFocusableElement:a,focusableElements:u,labelId:h,lastFocusableElement:d,step:f,dataStepId:m}=e
var g
return g=()=>{n(1,m={[`data-${r}shepherd-step-id`]:f.id}),n(9,u=l.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]')),n(8,a=u[0]),n(10,d=u[u.length-1])},Lt().$$.on_mount.push(g),Pt((()=>{s!==f.options.classes&&(function(t){if(p(t)){const e=Ce(t)
e.length&&l.classList.remove(...e)}}(s),s=f.options.classes,function(t){if(p(t)){const e=Ce(t)
e.length&&l.classList.add(...e)}}(s))})),t.$$set=t=>{"classPrefix"in t&&n(11,r=t.classPrefix),"element"in t&&n(0,l=t.element),"descriptionId"in t&&n(2,c=t.descriptionId),"firstFocusableElement"in t&&n(8,a=t.firstFocusableElement),"focusableElements"in t&&n(9,u=t.focusableElements),"labelId"in t&&n(3,h=t.labelId),"lastFocusableElement"in t&&n(10,d=t.lastFocusableElement),"step"in t&&n(4,f=t.step),"dataStepId"in t&&n(1,m=t.dataStepId)},t.$$.update=()=>{16&t.$$.dirty&&(n(5,o=f.options&&f.options.cancelIcon&&f.options.cancelIcon.enabled),n(6,i=f.options&&f.options.title))},[l,m,c,h,f,o,i,t=>{const{tour:e}=f
switch(t.keyCode){case 9:if(0===u.length){t.preventDefault()
break}t.shiftKey?(document.activeElement===a||document.activeElement.classList.contains("shepherd-element"))&&(t.preventDefault(),d.focus()):document.activeElement===d&&(t.preventDefault(),a.focus())
break
case 27:e.options.exitOnEsc&&f.cancel()
break
case 37:e.options.keyboardNavigation&&e.back()
break
case 39:e.options.keyboardNavigation&&e.next()}},a,u,d,r,()=>l,function(t){kt[t?"unshift":"push"]((()=>{l=t,n(0,l)}))}]}class Re extends te{constructor(t){super(),Qt(this,t,ke,Pe,gt,{classPrefix:11,element:0,descriptionId:2,firstFocusableElement:8,focusableElements:9,labelId:3,lastFocusableElement:10,step:4,dataStepId:1,getElement:12})}get getElement(){return this.$$.ctx[12]}}class Me extends m{constructor(t,e){return void 0===e&&(e={}),super(t,e),this.tour=t,this.classPrefix=this.tour.options?b(this.tour.options.classPrefix):"",this.styles=t.styles,this._resolvedAttachTo=null,g(this),this._setOptions(e),this}cancel(){this.tour.cancel(),this.trigger("cancel")}complete(){this.tour.complete(),this.trigger("complete")}destroy(){this.cleanup&&this.cleanup(),this.cleanup=null,h(this.el)&&(this.el.remove(),this.el=null),this._updateStepTargetOnHide(),this.trigger("destroy")}getTour(){return this.tour}hide(){this.tour.modal.hide(),this.trigger("before-hide"),this.el&&(this.el.hidden=!0),this._updateStepTargetOnHide(),this.trigger("hide")}_resolveAttachToOptions(){return this._resolvedAttachTo=function(t){const e=t.options.attachTo||{},n=Object.assign({},e)
if(d(n.element)&&(n.element=n.element.call(t)),p(n.element)){try{n.element=document.querySelector(n.element)}catch(t){}n.element||console.error(`The element for this Shepherd step was not found ${e.element}`)}return n}(this),this._resolvedAttachTo}_getResolvedAttachToOptions(){return null===this._resolvedAttachTo?this._resolveAttachToOptions():this._resolvedAttachTo}isOpen(){return Boolean(this.el&&!this.el.hidden)}show(){return d(this.options.beforeShowPromise)?Promise.resolve(this.options.beforeShowPromise()).then((()=>this._show())):Promise.resolve(this._show())}updateStepOptions(t){Object.assign(this.options,t),this.shepherdElementComponent&&this.shepherdElementComponent.$set({step:this})}getElement(){return this.el}getTarget(){return this.target}_createTooltipContent(){const t=`${this.id}-description`,e=`${this.id}-label`
return this.shepherdElementComponent=new Re({target:this.tour.options.stepsContainer||document.body,props:{classPrefix:this.classPrefix,descriptionId:t,labelId:e,step:this,styles:this.styles}}),this.shepherdElementComponent.getElement()}_scrollTo(t){const{element:e}=this._getResolvedAttachToOptions()
d(this.options.scrollToHandler)?this.options.scrollToHandler(e):e instanceof Element&&"function"==typeof e.scrollIntoView&&e.scrollIntoView(t)}_getClassOptions(t){const e=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions,n=t.classes?t.classes:"",o=e&&e.classes?e.classes:"",i=[...n.split(" "),...o.split(" ")],s=new Set(i)
return Array.from(s).join(" ").trim()}_setOptions(t){void 0===t&&(t={})
let e=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions
e=u({},e||{}),this.options=Object.assign({arrow:!0},e,t,function(t,e){return{floatingUIOptions:u(t.floatingUIOptions||{},e.floatingUIOptions||{})}}(e,t))
const{when:n}=this.options
this.options.classes=this._getClassOptions(t),this.destroy(),this.id=this.options.id||`step-${x()}`,n&&Object.keys(n).forEach((t=>{this.on(t,n[t],this)}))}_setupElements(){f(this.el)||this.destroy(),this.el=this._createTooltipContent(),this.options.advanceOn&&function(t){const{event:e,selector:n}=t.options.advanceOn||{}
if(!e)return console.error("advanceOn was defined, but no event name was passed.")
{const o=function(t,e){return n=>{if(e.isOpen()){const o=e.el&&n.currentTarget===e.el;(!f(t)&&n.currentTarget.matches(t)||o)&&e.tour.next()}}}(n,t)
let i
try{i=document.querySelector(n)}catch(t){}if(!f(n)&&!i)return console.error(`No element was found for the selector supplied to advanceOn: ${n}`)
i?(i.addEventListener(e,o),t.on("destroy",(()=>i.removeEventListener(e,o)))):(document.body.addEventListener(e,o,!0),t.on("destroy",(()=>document.body.removeEventListener(e,o,!0))))}}(this),function(t){t.cleanup&&t.cleanup()
const e=t._getResolvedAttachToOptions()
let n=e.element
const o=function(t,e){const n={strategy:"absolute",middleware:[k({limiter:R(),crossAxis:!0})]},o=function(t){return!(!t.options.arrow||!t.el)&&t.el.querySelector(".shepherd-arrow")}(e)
return o&&n.middleware.push((t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:o=0}=null!=t?t:{},{x:i,y:s,placement:r,rects:l,platform:c}=e
if(null==n)return{}
const a=I(o),u={x:i,y:s},h=O(r),d=E(r),p=T(h),f=await c.getDimensions(n),m="y"===h?"top":"left",g="y"===h?"bottom":"right",b=l.reference[p]+l.reference[h]-u[h]-l.floating[p],y=u[h]-l.reference[h],x=await(null==c.getOffsetParent?void 0:c.getOffsetParent(n))
let $=x?"y"===h?x.clientHeight||0:x.clientWidth||0:0
0===$&&($=l.floating[p])
const v=b/2-y/2,w=a[m],_=$-f[p]-a[g],S=$/2-f[p]/2+v,A=P(w,S,_),L=("start"===d?a[m]:a[g])>0&&S!==A&&l.reference[p]<=l.floating[p]
return{[h]:u[h]-(L?S<w?w-S:_-S:0),data:{[h]:A,centerOffset:S-A}}}}))({element:o})),y(t)||(n.placement=t.on),u(e.options.floatingUIOptions||{},n)}(e,t)
y(e)&&(n=document.body,t.shepherdElementComponent.getElement().classList.add("shepherd-centered")),t.cleanup=function(t,e,n,o){void 0===o&&(o={})
const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=!0,animationFrame:l=!1}=o,c=i&&!l,a=c||s?[...W(t)?lt(t):t.contextElement?lt(t.contextElement):[],...lt(e)]:[]
a.forEach((t=>{c&&t.addEventListener("scroll",n,{passive:!0}),s&&t.addEventListener("resize",n)}))
let u,h=null
if(r){let o=!0
h=new ResizeObserver((()=>{o||n(),o=!1})),W(t)&&!l&&h.observe(t),W(t)||!t.contextElement||l||h.observe(t.contextElement),h.observe(e)}let d=l?G(t):null
return l&&function e(){const o=G(t)
!d||o.x===d.x&&o.y===d.y&&o.width===d.width&&o.height===d.height||n(),d=o,u=requestAnimationFrame(e)}(),n(),()=>{var t
a.forEach((t=>{c&&t.removeEventListener("scroll",n),s&&t.removeEventListener("resize",n)})),null==(t=h)||t.disconnect(),h=null,l&&cancelAnimationFrame(u)}}(n,t.el,(()=>{t.el?function(t,e,n){var o,i,s;(o=t,i=e.el,s=n,(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,l=s.filter(Boolean),c=await(null==r.isRTL?void 0:r.isRTL(e))
let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:h}=_(a,o,c),d=o,p={},f=0
for(let m=0;m<l.length;m++){const{name:n,fn:s}=l[m],{x:g,y:b,data:y,reset:x}=await s({x:u,y:h,initialPlacement:o,placement:d,strategy:i,middlewareData:p,rects:a,platform:r,elements:{reference:t,floating:e}})
u=null!=g?g:u,h=null!=b?b:h,p=$({},p,{[n]:$({},p[n],y)}),x&&f<=50&&(f++,"object"==typeof x&&(x.placement&&(d=x.placement),x.rects&&(a=!0===x.rects?await r.getElementRects({reference:t,floating:e,strategy:i}):x.rects),({x:u,y:h}=_(a,d,c))),m=-1)}return{x:u,y:h,placement:d,strategy:i,middlewareData:p}})(o,i,$({platform:at},s))).then(function(t){return e=>{let{x:n,y:o,placement:i,middlewareData:s}=e
return t.el?(Object.assign(t.el.style,{position:"absolute",left:`${n}px`,top:`${o}px`}),t.el.dataset.popperPlacement=i,function(t,e,n){const o=t.querySelector(".shepherd-arrow")
if(o){const{x:t,y:i}=n.arrow,s={top:"bottom",right:"left",bottom:"top",left:"right"}[e.split("-")[0]]
Object.assign(o.style,{left:null!=t?`${t}px`:"",top:null!=i?`${i}px`:"",right:"",bottom:"",[s]:"-35px"})}}(t.el,i,s),t):t}}(e)).then((t=>new Promise((e=>{setTimeout((()=>e(t)),300)})))).then((t=>{t&&t.el&&t.el.focus({preventScroll:!0})}))}(n,t,o):t.cleanup()})),t.target=e.element}(this)}_show(){this.trigger("before-show"),this._resolveAttachToOptions(),this._setupElements(),this.tour.modal||this.tour._setupModal(),this.tour.modal.setupForStep(this),this._styleTargetElementForStep(this),this.el.hidden=!1,this.options.scrollTo&&setTimeout((()=>{this._scrollTo(this.options.scrollTo)})),this.el.hidden=!1
const t=this.shepherdElementComponent.getElement(),e=this.target||document.body
e.classList.add(`${this.classPrefix}shepherd-enabled`),e.classList.add(`${this.classPrefix}shepherd-target`),t.classList.add("shepherd-enabled"),this.trigger("show")}_styleTargetElementForStep(t){const e=t.target
e&&(t.options.highlightClass&&e.classList.add(t.options.highlightClass),e.classList.remove("shepherd-target-click-disabled"),!1===t.options.canClickTarget&&e.classList.add("shepherd-target-click-disabled"))}_updateStepTargetOnHide(){const t=this.target||document.body
this.options.highlightClass&&t.classList.remove(this.options.highlightClass),t.classList.remove("shepherd-target-click-disabled",`${this.classPrefix}shepherd-enabled`,`${this.classPrefix}shepherd-target`)}}function je(t){let e,n,o,i,s
return{c(){e=vt("svg"),n=vt("path"),Tt(n,"d",t[2]),Tt(e,"class",o=(t[1]?"shepherd-modal-is-visible":"")+" shepherd-modal-overlay-container")},m(o,r){yt(o,e,r),bt(e,n),t[11](e),i||(s=Ot(e,"touchmove",t[3]),i=!0)},p(t,i){let[s]=i
4&s&&Tt(n,"d",t[2]),2&s&&o!==(o=(t[1]?"shepherd-modal-is-visible":"")+" shepherd-modal-overlay-container")&&Tt(e,"class",o)},i:ut,o:ut,d(n){n&&xt(e),t[11](null),i=!1,s()}}}function He(t){if(!t)return null
const e=t instanceof HTMLElement&&window.getComputedStyle(t).overflowY
return"hidden"!==e&&"visible"!==e&&t.scrollHeight>=t.clientHeight?t:He(t.parentElement)}function De(t,e,n){let{element:o,openingProperties:i}=e
x()
let s,r,l=!1
function c(){n(4,i={width:0,height:0,x:0,y:0,r:0})}function a(){n(1,l=!1),p()}function u(t,e,o,s){if(void 0===t&&(t=0),void 0===e&&(e=0),s){const{y:r,height:l}=function(t,e){const n=t.getBoundingClientRect()
let o=n.y||n.top,i=n.bottom||o+n.height
if(e){const t=e.getBoundingClientRect(),n=t.y||t.top,s=t.bottom||n+t.height
o=Math.max(o,n),i=Math.min(i,s)}return{y:o,height:Math.max(i-o,0)}}(s,o),{x:c,width:a,left:u}=s.getBoundingClientRect()
n(4,i={width:a+2*t,height:l+2*t,x:(c||u)-t,y:r-t,r:e})}else c()}function h(){n(1,l=!0)}c()
const d=t=>{t.preventDefault()}
function p(){s&&(cancelAnimationFrame(s),s=void 0),window.removeEventListener("touchmove",d,{passive:!1})}return t.$$set=t=>{"element"in t&&n(0,o=t.element),"openingProperties"in t&&n(4,i=t.openingProperties)},t.$$.update=()=>{16&t.$$.dirty&&n(2,r=function(t){let{width:e,height:n,x:o=0,y:i=0,r:s=0}=t
const{innerWidth:r,innerHeight:l}=window,{topLeft:c=0,topRight:a=0,bottomRight:u=0,bottomLeft:h=0}="number"==typeof s?{topLeft:s,topRight:s,bottomRight:s,bottomLeft:s}:s
return`M${r},${l}H0V0H${r}V${l}ZM${o+c},${i}a${c},${c},0,0,0-${c},${c}V${n+i-h}a${h},${h},0,0,0,${h},${h}H${e+o-u}a${u},${u},0,0,0,${u}-${u}V${i+a}a${a},${a},0,0,0-${a}-${a}Z`}(i))},[o,l,r,t=>{t.stopPropagation()},i,()=>o,c,a,u,function(t){p(),t.tour.options.useModalOverlay?(function(t){const{modalOverlayOpeningPadding:e,modalOverlayOpeningRadius:n}=t.options,o=He(t.target),i=()=>{s=void 0,u(e,n,o,t.target),s=requestAnimationFrame(i)}
i(),window.addEventListener("touchmove",d,{passive:!1})}(t),h()):a()},h,function(t){kt[t?"unshift":"push"]((()=>{o=t,n(0,o)}))}]}class Fe extends te{constructor(t){super(),Qt(this,t,De,je,gt,{element:0,openingProperties:4,getElement:5,closeModalOpening:6,hide:7,positionModal:8,setupForStep:9,show:10})}get getElement(){return this.$$.ctx[5]}get closeModalOpening(){return this.$$.ctx[6]}get hide(){return this.$$.ctx[7]}get positionModal(){return this.$$.ctx[8]}get setupForStep(){return this.$$.ctx[9]}get show(){return this.$$.ctx[10]}}const Be=new m,We="undefined"==typeof window
class Ne{constructor(){}}We?Object.assign(Be,{Tour:Ne,Step:Ne}):Object.assign(Be,{Tour:class extends m{constructor(t){return void 0===t&&(t={}),super(t),g(this),this.options=Object.assign({},{exitOnEsc:!0,keyboardNavigation:!0},t),this.classPrefix=b(this.options.classPrefix),this.steps=[],this.addSteps(this.options.steps),["active","cancel","complete","inactive","show","start"].map((t=>{(t=>{this.on(t,(e=>{(e=e||{}).tour=this,Be.trigger(t,e)}))})(t)})),this._setTourID(),this}addStep(t,e){let n=t
return n instanceof Me?n.tour=this:n=new Me(this,n),f(e)?this.steps.push(n):this.steps.splice(e,0,n),n}addSteps(t){return Array.isArray(t)&&t.forEach((t=>{this.addStep(t)})),this}back(){const t=this.steps.indexOf(this.currentStep)
this.show(t-1,!1)}cancel(){if(this.options.confirmCancel){const t=this.options.confirmCancelMessage||"Are you sure you want to stop the tour?"
window.confirm(t)&&this._done("cancel")}else this._done("cancel")}complete(){this._done("complete")}getById(t){return this.steps.find((e=>e.id===t))}getCurrentStep(){return this.currentStep}hide(){const t=this.getCurrentStep()
if(t)return t.hide()}isActive(){return Be.activeTour===this}next(){const t=this.steps.indexOf(this.currentStep)
t===this.steps.length-1?this.complete():this.show(t+1,!0)}removeStep(t){const e=this.getCurrentStep()
this.steps.some(((e,n)=>{if(e.id===t)return e.isOpen()&&e.hide(),e.destroy(),this.steps.splice(n,1),!0})),e&&e.id===t&&(this.currentStep=void 0,this.steps.length?this.show(0):this.cancel())}show(t,e){void 0===t&&(t=0),void 0===e&&(e=!0)
const n=p(t)?this.getById(t):this.steps[t]
n&&(this._updateStateBeforeShow(),d(n.options.showOn)&&!n.options.showOn()?this._skipStep(n,e):(this.trigger("show",{step:n,previous:this.currentStep}),this.currentStep=n,n.show()))}start(){this.trigger("start"),this.focusedElBeforeOpen=document.activeElement,this.currentStep=null,this._setupModal(),this._setupActiveTour(),this.next()}_done(t){const e=this.steps.indexOf(this.currentStep)
if(Array.isArray(this.steps)&&this.steps.forEach((t=>t.destroy())),function(t){if(t){const{steps:e}=t
e.forEach((t=>{t.options&&!1===t.options.canClickTarget&&t.options.attachTo&&t.target instanceof HTMLElement&&t.target.classList.remove("shepherd-target-click-disabled")}))}}(this),this.trigger(t,{index:e}),Be.activeTour=null,this.trigger("inactive",{tour:this}),this.modal&&this.modal.hide(),("cancel"===t||"complete"===t)&&this.modal){const t=document.querySelector(".shepherd-modal-overlay-container")
t&&t.remove()}h(this.focusedElBeforeOpen)&&this.focusedElBeforeOpen.focus()}_setupActiveTour(){this.trigger("active",{tour:this}),Be.activeTour=this}_setupModal(){this.modal=new Fe({target:this.options.modalContainer||document.body,props:{classPrefix:this.classPrefix,styles:this.styles}})}_skipStep(t,e){const n=this.steps.indexOf(t)
if(n===this.steps.length-1)this.complete()
else{const t=e?n+1:n-1
this.show(t,e)}}_updateStateBeforeShow(){this.currentStep&&this.currentStep.hide(),this.isActive()||this._setupActiveTour()}_setTourID(){const t=this.options.tourName||"tour"
this.id=`${t}--${x()}`}},Step:Me})}}])
