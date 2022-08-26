/*! For license information please see chunk.574.55dd52836b50b236133f.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[574],{9574:(t,e,n)=>{n.r(e),n.d(e,{default:()=>dn})
var o=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t)
return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===r}(t)}(t)},r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103
function i(t,e){return!1!==e.clone&&e.isMergeableObject(t)?c((n=t,Array.isArray(n)?[]:{}),t,e):t
var n}function s(t,e,n){return t.concat(e).map((function(t){return i(t,n)}))}function l(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return t.propertyIsEnumerable(e)})):[]}(t))}function a(t,e){try{return e in t}catch(t){return!1}}function c(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||s,n.isMergeableObject=n.isMergeableObject||o,n.cloneUnlessOtherwiseSpecified=i
var r=Array.isArray(e)
return r===Array.isArray(t)?r?n.arrayMerge(t,e,n):function(t,e,n){var o={}
return n.isMergeableObject(t)&&l(t).forEach((function(e){o[e]=i(t[e],n)})),l(e).forEach((function(r){(function(t,e){return a(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,r)||(a(t,r)&&n.isMergeableObject(e[r])?o[r]=function(t,e){if(!e.customMerge)return c
var n=e.customMerge(t)
return"function"==typeof n?n:c}(r,n)(t[r],e[r],n):o[r]=i(e[r],n))})),o}(t,e,n):i(e,n)}c.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array")
return t.reduce((function(t,n){return c(t,n,e)}),{})}
var p=c
function u(t){return t instanceof HTMLElement}function f(t){return"function"==typeof t}function d(t){return"string"==typeof t}function h(t){return void 0===t}class m{on(t,e,n,o){return void 0===o&&(o=!1),h(this.bindings)&&(this.bindings={}),h(this.bindings[t])&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:o}),this}once(t,e,n){return this.on(t,e,n,!0)}off(t,e){return h(this.bindings)||h(this.bindings[t])||(h(e)?delete this.bindings[t]:this.bindings[t].forEach(((n,o)=>{n.handler===e&&this.bindings[t].splice(o,1)}))),this}trigger(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o]
return!h(this.bindings)&&this.bindings[t]&&this.bindings[t].forEach(((e,o)=>{const{ctx:r,handler:i,once:s}=e,l=r||this
i.apply(l,n),s&&this.bindings[t].splice(o,1)})),this}}function g(t){const e=Object.getOwnPropertyNames(t.constructor.prototype)
for(let n=0;n<e.length;n++){const o=e[n],r=t[o]
"constructor"!==o&&"function"==typeof r&&(t[o]=r.bind(t))}return t}var b="top",v="bottom",y="right",x="left",w="auto",$=[b,v,y,x],O="start",E="end",T="viewport",S="popper",_=$.reduce((function(t,e){return t.concat([e+"-"+O,e+"-"+E])}),[]),A=[].concat($,[w]).reduce((function(t,e){return t.concat([e,e+"-"+O,e+"-"+E])}),[]),I=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]
function j(t){return t?(t.nodeName||"").toLowerCase():null}function L(t){if(null==t)return window
if("[object Window]"!==t.toString()){var e=t.ownerDocument
return e&&e.defaultView||window}return t}function k(t){return t instanceof L(t).Element||t instanceof Element}function M(t){return t instanceof L(t).HTMLElement||t instanceof HTMLElement}function C(t){return"undefined"!=typeof ShadowRoot&&(t instanceof L(t).ShadowRoot||t instanceof ShadowRoot)}var P={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state
Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},o=e.attributes[t]||{},r=e.elements[t]
M(r)&&j(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(t){var e=o[t]
!1===e?r.removeAttribute(t):r.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var o=e.elements[t],r=e.attributes[t]||{},i=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{})
M(o)&&j(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(t){o.removeAttribute(t)})))}))}},requires:["computeStyles"]}
function B(t){return t.split("-")[0]}var D=Math.max,H=Math.min,R=Math.round
function W(t,e){void 0===e&&(e=!1)
var n=t.getBoundingClientRect(),o=1,r=1
if(M(t)&&e){var i=t.offsetHeight,s=t.offsetWidth
s>0&&(o=R(n.width)/s||1),i>0&&(r=R(n.height)/i||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function F(t){var e=W(t),n=t.offsetWidth,o=t.offsetHeight
return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:o}}function N(t,e){var n=e.getRootNode&&e.getRootNode()
if(t.contains(e))return!0
if(n&&C(n)){var o=e
do{if(o&&t.isSameNode(o))return!0
o=o.parentNode||o.host}while(o)}return!1}function V(t){return L(t).getComputedStyle(t)}function q(t){return["table","td","th"].indexOf(j(t))>=0}function Y(t){return((k(t)?t.ownerDocument:t.document)||window.document).documentElement}function X(t){return"html"===j(t)?t:t.assignedSlot||t.parentNode||(C(t)?t.host:null)||Y(t)}function U(t){return M(t)&&"fixed"!==V(t).position?t.offsetParent:null}function z(t){for(var e=L(t),n=U(t);n&&q(n)&&"static"===V(n).position;)n=U(n)
return n&&("html"===j(n)||"body"===j(n)&&"static"===V(n).position)?e:n||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox")
if(-1!==navigator.userAgent.indexOf("Trident")&&M(t)&&"fixed"===V(t).position)return null
var n=X(t)
for(C(n)&&(n=n.host);M(n)&&["html","body"].indexOf(j(n))<0;){var o=V(n)
if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||e&&"filter"===o.willChange||e&&o.filter&&"none"!==o.filter)return n
n=n.parentNode}return null}(t)||e}function Z(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function K(t,e,n){return D(t,H(e,n))}function G(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function J(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}var Q={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,o=t.name,r=t.options,i=n.elements.arrow,s=n.modifiersData.popperOffsets,l=B(n.placement),a=Z(l),c=[x,y].indexOf(l)>=0?"height":"width"
if(i&&s){var p=function(t,e){return G("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:J(t,$))}(r.padding,n),u=F(i),f="y"===a?b:x,d="y"===a?v:y,h=n.rects.reference[c]+n.rects.reference[a]-s[a]-n.rects.popper[c],m=s[a]-n.rects.reference[a],g=z(i),w=g?"y"===a?g.clientHeight||0:g.clientWidth||0:0,O=h/2-m/2,E=p[f],T=w-u[c]-p[d],S=w/2-u[c]/2+O,_=K(E,S,T),A=a
n.modifiersData[o]=((e={})[A]=_,e.centerOffset=_-S,e)}},effect:function(t){var e=t.state,n=t.options.element,o=void 0===n?"[data-popper-arrow]":n
null!=o&&("string"!=typeof o||(o=e.elements.popper.querySelector(o)))&&N(e.elements.popper,o)&&(e.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}
function tt(t){return t.split("-")[1]}var et={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function nt(t){var e,n=t.popper,o=t.popperRect,r=t.placement,i=t.variation,s=t.offsets,l=t.position,a=t.gpuAcceleration,c=t.adaptive,p=t.roundOffsets,u=t.isFixed,f=s.x,d=void 0===f?0:f,h=s.y,m=void 0===h?0:h,g="function"==typeof p?p({x:d,y:m}):{x:d,y:m}
d=g.x,m=g.y
var w=s.hasOwnProperty("x"),$=s.hasOwnProperty("y"),O=x,T=b,S=window
if(c){var _=z(n),A="clientHeight",I="clientWidth"
_===L(n)&&"static"!==V(_=Y(n)).position&&"absolute"===l&&(A="scrollHeight",I="scrollWidth"),(r===b||(r===x||r===y)&&i===E)&&(T=v,m-=(u&&_===S&&S.visualViewport?S.visualViewport.height:_[A])-o.height,m*=a?1:-1),r!==x&&(r!==b&&r!==v||i!==E)||(O=y,d-=(u&&_===S&&S.visualViewport?S.visualViewport.width:_[I])-o.width,d*=a?1:-1)}var j,k=Object.assign({position:l},c&&et),M=!0===p?function(t){var e=t.x,n=t.y,o=window.devicePixelRatio||1
return{x:R(e*o)/o||0,y:R(n*o)/o||0}}({x:d,y:m}):{x:d,y:m}
return d=M.x,m=M.y,a?Object.assign({},k,((j={})[T]=$?"0":"",j[O]=w?"0":"",j.transform=(S.devicePixelRatio||1)<=1?"translate("+d+"px, "+m+"px)":"translate3d("+d+"px, "+m+"px, 0)",j)):Object.assign({},k,((e={})[T]=$?m+"px":"",e[O]=w?d+"px":"",e.transform="",e))}var ot={passive:!0},rt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,o=t.options,r=o.scroll,i=void 0===r||r,s=o.resize,l=void 0===s||s,a=L(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper)
return i&&c.forEach((function(t){t.addEventListener("scroll",n.update,ot)})),l&&a.addEventListener("resize",n.update,ot),function(){i&&c.forEach((function(t){t.removeEventListener("scroll",n.update,ot)})),l&&a.removeEventListener("resize",n.update,ot)}},data:{}},it={left:"right",right:"left",bottom:"top",top:"bottom"}
function st(t){return t.replace(/left|right|bottom|top/g,(function(t){return it[t]}))}var lt={start:"end",end:"start"}
function at(t){return t.replace(/start|end/g,(function(t){return lt[t]}))}function ct(t){var e=L(t)
return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function pt(t){return W(Y(t)).left+ct(t).scrollLeft}function ut(t){var e=V(t),n=e.overflow,o=e.overflowX,r=e.overflowY
return/auto|scroll|overlay|hidden/.test(n+r+o)}function ft(t){return["html","body","#document"].indexOf(j(t))>=0?t.ownerDocument.body:M(t)&&ut(t)?t:ft(X(t))}function dt(t,e){var n
void 0===e&&(e=[])
var o=ft(t),r=o===(null==(n=t.ownerDocument)?void 0:n.body),i=L(o),s=r?[i].concat(i.visualViewport||[],ut(o)?o:[]):o,l=e.concat(s)
return r?l:l.concat(dt(X(s)))}function ht(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function mt(t,e){return e===T?ht(function(t){var e=L(t),n=Y(t),o=e.visualViewport,r=n.clientWidth,i=n.clientHeight,s=0,l=0
return o&&(r=o.width,i=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,l=o.offsetTop)),{width:r,height:i,x:s+pt(t),y:l}}(t)):k(e)?function(t){var e=W(t)
return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):ht(function(t){var e,n=Y(t),o=ct(t),r=null==(e=t.ownerDocument)?void 0:e.body,i=D(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),s=D(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),l=-o.scrollLeft+pt(t),a=-o.scrollTop
return"rtl"===V(r||n).direction&&(l+=D(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:s,x:l,y:a}}(Y(t)))}function gt(t){var e,n=t.reference,o=t.element,r=t.placement,i=r?B(r):null,s=r?tt(r):null,l=n.x+n.width/2-o.width/2,a=n.y+n.height/2-o.height/2
switch(i){case b:e={x:l,y:n.y-o.height}
break
case v:e={x:l,y:n.y+n.height}
break
case y:e={x:n.x+n.width,y:a}
break
case x:e={x:n.x-o.width,y:a}
break
default:e={x:n.x,y:n.y}}var c=i?Z(i):null
if(null!=c){var p="y"===c?"height":"width"
switch(s){case O:e[c]=e[c]-(n[p]/2-o[p]/2)
break
case E:e[c]=e[c]+(n[p]/2-o[p]/2)}}return e}function bt(t,e){void 0===e&&(e={})
var n=e,o=n.placement,r=void 0===o?t.placement:o,i=n.boundary,s=void 0===i?"clippingParents":i,l=n.rootBoundary,a=void 0===l?T:l,c=n.elementContext,p=void 0===c?S:c,u=n.altBoundary,f=void 0!==u&&u,d=n.padding,h=void 0===d?0:d,m=G("number"!=typeof h?h:J(h,$)),g=p===S?"reference":S,x=t.rects.popper,w=t.elements[f?g:p],O=function(t,e,n){var o="clippingParents"===e?function(t){var e=dt(X(t)),n=["absolute","fixed"].indexOf(V(t).position)>=0&&M(t)?z(t):t
return k(n)?e.filter((function(t){return k(t)&&N(t,n)&&"body"!==j(t)})):[]}(t):[].concat(e),r=[].concat(o,[n]),i=r[0],s=r.reduce((function(e,n){var o=mt(t,n)
return e.top=D(o.top,e.top),e.right=H(o.right,e.right),e.bottom=H(o.bottom,e.bottom),e.left=D(o.left,e.left),e}),mt(t,i))
return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(k(w)?w:w.contextElement||Y(t.elements.popper),s,a),E=W(t.elements.reference),_=gt({reference:E,element:x,strategy:"absolute",placement:r}),A=ht(Object.assign({},x,_)),I=p===S?A:E,L={top:O.top-I.top+m.top,bottom:I.bottom-O.bottom+m.bottom,left:O.left-I.left+m.left,right:I.right-O.right+m.right},C=t.modifiersData.offset
if(p===S&&C){var P=C[r]
Object.keys(L).forEach((function(t){var e=[y,v].indexOf(t)>=0?1:-1,n=[b,v].indexOf(t)>=0?"y":"x"
L[t]+=P[n]*e}))}return L}function vt(t,e){void 0===e&&(e={})
var n=e,o=n.placement,r=n.boundary,i=n.rootBoundary,s=n.padding,l=n.flipVariations,a=n.allowedAutoPlacements,c=void 0===a?A:a,p=tt(o),u=p?l?_:_.filter((function(t){return tt(t)===p})):$,f=u.filter((function(t){return c.indexOf(t)>=0}))
0===f.length&&(f=u)
var d=f.reduce((function(e,n){return e[n]=bt(t,{placement:n,boundary:r,rootBoundary:i,padding:s})[B(n)],e}),{})
return Object.keys(d).sort((function(t,e){return d[t]-d[e]}))}var yt={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name
if(!e.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,s=n.altAxis,l=void 0===s||s,a=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,f=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,g=e.options.placement,$=B(g),E=a||($!==g&&h?function(t){if(B(t)===w)return[]
var e=st(t)
return[at(t),e,at(e)]}(g):[st(g)]),T=[g].concat(E).reduce((function(t,n){return t.concat(B(n)===w?vt(e,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),S=e.rects.reference,_=e.rects.popper,A=new Map,I=!0,j=T[0],L=0;L<T.length;L++){var k=T[L],M=B(k),C=tt(k)===O,P=[b,v].indexOf(M)>=0,D=P?"width":"height",H=bt(e,{placement:k,boundary:p,rootBoundary:u,altBoundary:f,padding:c}),R=P?C?y:x:C?v:b
S[D]>_[D]&&(R=st(R))
var W=st(R),F=[]
if(i&&F.push(H[M]<=0),l&&F.push(H[R]<=0,H[W]<=0),F.every((function(t){return t}))){j=k,I=!1
break}A.set(k,F)}if(I)for(var N=function(t){var e=T.find((function(e){var n=A.get(e)
if(n)return n.slice(0,t).every((function(t){return t}))}))
if(e)return j=e,"break"},V=h?3:1;V>0&&"break"!==N(V);V--);e.placement!==j&&(e.modifiersData[o]._skip=!0,e.placement=j,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}
function xt(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function wt(t){return[b,y,v,x].some((function(e){return t[e]>=0}))}function $t(t,e,n){void 0===n&&(n=!1)
var o,r=M(e),i=M(e)&&function(t){var e=t.getBoundingClientRect(),n=R(e.width)/t.offsetWidth||1,o=R(e.height)/t.offsetHeight||1
return 1!==n||1!==o}(e),s=Y(e),l=W(t,i),a={scrollLeft:0,scrollTop:0},c={x:0,y:0}
return(r||!r&&!n)&&(("body"!==j(e)||ut(s))&&(a=(o=e)!==L(o)&&M(o)?function(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}(o):ct(o)),M(e)?((c=W(e,!0)).x+=e.clientLeft,c.y+=e.clientTop):s&&(c.x=pt(s))),{x:l.left+a.scrollLeft-c.x,y:l.top+a.scrollTop-c.y,width:l.width,height:l.height}}function Ot(t){var e=new Map,n=new Set,o=[]
function r(t){n.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!n.has(t)){var o=e.get(t)
o&&r(o)}})),o.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||r(t)})),o}var Et={placement:"bottom",modifiers:[],strategy:"absolute"}
function Tt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}var St=function(t){void 0===t&&(t={})
var e=t,n=e.defaultModifiers,o=void 0===n?[]:n,r=e.defaultOptions,i=void 0===r?Et:r
return function(t,e,n){void 0===n&&(n=i)
var r,s,l={placement:"bottom",orderedModifiers:[],options:Object.assign({},Et,i),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},a=[],c=!1,p={state:l,setOptions:function(n){var r="function"==typeof n?n(l.options):n
u(),l.options=Object.assign({},i,l.options,r),l.scrollParents={reference:k(t)?dt(t):t.contextElement?dt(t.contextElement):[],popper:dt(e)}
var s,c,f=function(t){var e=Ot(t)
return I.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}((s=[].concat(o,l.options.modifiers),c=s.reduce((function(t,e){var n=t[e.name]
return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))))
return l.orderedModifiers=f.filter((function(t){return t.enabled})),l.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,o=void 0===n?{}:n,r=t.effect
if("function"==typeof r){var i=r({state:l,name:e,instance:p,options:o})
a.push(i||function(){})}})),p.update()},forceUpdate:function(){if(!c){var t=l.elements,e=t.reference,n=t.popper
if(Tt(e,n)){l.rects={reference:$t(e,z(n),"fixed"===l.options.strategy),popper:F(n)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach((function(t){return l.modifiersData[t.name]=Object.assign({},t.data)}))
for(var o=0;o<l.orderedModifiers.length;o++)if(!0!==l.reset){var r=l.orderedModifiers[o],i=r.fn,s=r.options,a=void 0===s?{}:s,u=r.name
"function"==typeof i&&(l=i({state:l,options:a,name:u,instance:p})||l)}else l.reset=!1,o=-1}}},update:(r=function(){return new Promise((function(t){p.forceUpdate(),t(l)}))},function(){return s||(s=new Promise((function(t){Promise.resolve().then((function(){s=void 0,t(r())}))}))),s}),destroy:function(){u(),c=!0}}
if(!Tt(t,e))return p
function u(){a.forEach((function(t){return t()})),a=[]}return p.setOptions(n).then((function(t){!c&&n.onFirstUpdate&&n.onFirstUpdate(t)})),p}}({defaultModifiers:[rt,{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name
e.modifiersData[n]=gt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,s=void 0===i||i,l=n.roundOffsets,a=void 0===l||l,c={placement:B(e.placement),variation:tt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:"fixed"===e.options.strategy}
null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,nt(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:a})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,nt(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},P,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,o=t.name,r=n.offset,i=void 0===r?[0,0]:r,s=A.reduce((function(t,n){return t[n]=function(t,e,n){var o=B(t),r=[x,b].indexOf(o)>=0?-1:1,i="function"==typeof n?n(Object.assign({},e,{placement:t})):n,s=i[0],l=i[1]
return s=s||0,l=(l||0)*r,[x,y].indexOf(o)>=0?{x:l,y:s}:{x:s,y:l}}(n,e.rects,i),t}),{}),l=s[e.placement],a=l.x,c=l.y
null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=a,e.modifiersData.popperOffsets.y+=c),e.modifiersData[o]=s}},yt,{name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name,r=n.mainAxis,i=void 0===r||r,s=n.altAxis,l=void 0!==s&&s,a=n.boundary,c=n.rootBoundary,p=n.altBoundary,u=n.padding,f=n.tether,d=void 0===f||f,h=n.tetherOffset,m=void 0===h?0:h,g=bt(e,{boundary:a,rootBoundary:c,padding:u,altBoundary:p}),w=B(e.placement),$=tt(e.placement),E=!$,T=Z(w),S="x"===T?"y":"x",_=e.modifiersData.popperOffsets,A=e.rects.reference,I=e.rects.popper,j="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,L="number"==typeof j?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),k=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,M={x:0,y:0}
if(_){if(i){var C,P="y"===T?b:x,R="y"===T?v:y,W="y"===T?"height":"width",N=_[T],V=N+g[P],q=N-g[R],Y=d?-I[W]/2:0,X=$===O?A[W]:I[W],U=$===O?-I[W]:-A[W],G=e.elements.arrow,J=d&&G?F(G):{width:0,height:0},Q=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},et=Q[P],nt=Q[R],ot=K(0,A[W],J[W]),rt=E?A[W]/2-Y-ot-et-L.mainAxis:X-ot-et-L.mainAxis,it=E?-A[W]/2+Y+ot+nt+L.mainAxis:U+ot+nt+L.mainAxis,st=e.elements.arrow&&z(e.elements.arrow),lt=st?"y"===T?st.clientTop||0:st.clientLeft||0:0,at=null!=(C=null==k?void 0:k[T])?C:0,ct=N+it-at,pt=K(d?H(V,N+rt-at-lt):V,N,d?D(q,ct):q)
_[T]=pt,M[T]=pt-N}if(l){var ut,ft="x"===T?b:x,dt="x"===T?v:y,ht=_[S],mt="y"===S?"height":"width",gt=ht+g[ft],vt=ht-g[dt],yt=-1!==[b,x].indexOf(w),xt=null!=(ut=null==k?void 0:k[S])?ut:0,wt=yt?gt:ht-A[mt]-I[mt]-xt+L.altAxis,$t=yt?ht+A[mt]+I[mt]-xt-L.altAxis:vt,Ot=d&&yt?function(t,e,n){var o=K(t,e,n)
return o>n?n:o}(wt,ht,$t):K(d?wt:gt,ht,d?$t:vt)
_[S]=Ot,M[S]=Ot-ht}e.modifiersData[o]=M}},requiresIfExists:["offset"]},Q,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,o=e.rects.reference,r=e.rects.popper,i=e.modifiersData.preventOverflow,s=bt(e,{elementContext:"reference"}),l=bt(e,{altBoundary:!0}),a=xt(s,o),c=xt(l,r,i),p=wt(a),u=wt(c)
e.modifiersData[n]={referenceClippingOffsets:a,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]})
function _t(){return _t=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},_t.apply(this,arguments)}function At(t){return{name:"focusAfterRender",enabled:!0,phase:"afterWrite",fn(){setTimeout((()=>{if(t.el){const e={preventScroll:!0}
t.el.focus(e)}}),300)}}}function It(t){return d(t)&&""!==t?"-"!==t.charAt(t.length-1)?`${t}-`:t:""}function jt(t){return null==t||!t.element||!t.on}function Lt(){let t=Date.now()
return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const n=(t+16*Math.random())%16|0
return t=Math.floor(t/16),("x"==e?n:3&n|8).toString(16)}))}function kt(t,e){if(t.popperOptions){let n=Object.assign({},e,t.popperOptions)
if(t.popperOptions.modifiers&&t.popperOptions.modifiers.length>0){const o=t.popperOptions.modifiers.map((t=>t.name)),r=e.modifiers.filter((t=>!o.includes(t.name)))
n.modifiers=Array.from(new Set([...r,...t.popperOptions.modifiers]))}return n}return e}function Mt(){}function Ct(t,e){for(const n in e)t[n]=e[n]
return t}function Pt(t){return t()}function Bt(){return Object.create(null)}function Dt(t){t.forEach(Pt)}function Ht(t){return"function"==typeof t}function Rt(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function Wt(t,e){t.appendChild(e)}function Ft(t,e,n){t.insertBefore(e,n||null)}function Nt(t){t.parentNode.removeChild(t)}function Vt(t){return document.createElement(t)}function qt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Yt(t){return document.createTextNode(t)}function Xt(){return Yt(" ")}function Ut(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function zt(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Zt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__)
for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:zt(t,o,e[o])}function Kt(t,e,n){t.classList[n?"add":"remove"](e)}let Gt
function Jt(t){Gt=t}function Qt(){if(!Gt)throw new Error("Function called outside component initialization")
return Gt}function te(t){Qt().$$.after_update.push(t)}const ee=[],ne=[],oe=[],re=[],ie=Promise.resolve()
let se=!1
function le(t){oe.push(t)}const ae=new Set
let ce=0
function pe(){const t=Gt
do{for(;ce<ee.length;){const t=ee[ce]
ce++,Jt(t),ue(t.$$)}for(Jt(null),ee.length=0,ce=0;ne.length;)ne.pop()()
for(let t=0;t<oe.length;t+=1){const e=oe[t]
ae.has(e)||(ae.add(e),e())}oe.length=0}while(ee.length)
for(;re.length;)re.pop()()
se=!1,ae.clear(),Jt(t)}function ue(t){if(null!==t.fragment){t.update(),Dt(t.before_update)
const e=t.dirty
t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(le)}}const fe=new Set
let de
function he(){de={r:0,c:[],p:de}}function me(){de.r||Dt(de.c),de=de.p}function ge(t,e){t&&t.i&&(fe.delete(t),t.i(e))}function be(t,e,n,o){if(t&&t.o){if(fe.has(t))return
fe.add(t),de.c.push((()=>{fe.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function ve(t){t&&t.c()}function ye(t,e,n,o){const{fragment:r,on_mount:i,on_destroy:s,after_update:l}=t.$$
r&&r.m(e,n),o||le((()=>{const e=i.map(Pt).filter(Ht)
s?s.push(...e):Dt(e),t.$$.on_mount=[]})),l.forEach(le)}function xe(t,e){const n=t.$$
null!==n.fragment&&(Dt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function we(t,e){-1===t.$$.dirty[0]&&(ee.push(t),se||(se=!0,ie.then(pe)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $e(t,e,n,o,r,i,s,l){void 0===l&&(l=[-1])
const a=Gt
Jt(t)
const c=t.$$={fragment:null,ctx:null,props:i,update:Mt,not_equal:r,bound:Bt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Bt(),dirty:l,skip_bound:!1,root:e.target||a.$$.root}
s&&s(c.root)
let p=!1
if(c.ctx=n?n(t,e.props||{},(function(e,n){const o=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n
return c.ctx&&r(c.ctx[e],c.ctx[e]=o)&&(!c.skip_bound&&c.bound[e]&&c.bound[e](o),p&&we(t,e)),n})):[],c.update(),p=!0,Dt(c.before_update),c.fragment=!!o&&o(c.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target)
c.fragment&&c.fragment.l(t),t.forEach(Nt)}else c.fragment&&c.fragment.c()
e.intro&&ge(t.$$.fragment),ye(t,e.target,e.anchor,e.customElement),pe()}Jt(a)}class Oe{$destroy(){xe(this,1),this.$destroy=Mt}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[])
return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e
this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Ee(t){let e,n,o,r,i
return{c(){e=Vt("button"),zt(e,"aria-label",n=t[3]?t[3]:null),zt(e,"class",o=`${t[1]||""} shepherd-button ${t[4]?"shepherd-button-secondary":""}`),e.disabled=t[2],zt(e,"tabindex","0")},m(n,o){Ft(n,e,o),e.innerHTML=t[5],r||(i=Ut(e,"click",(function(){Ht(t[0])&&t[0].apply(this,arguments)})),r=!0)},p(r,i){let[s]=i
t=r,32&s&&(e.innerHTML=t[5]),8&s&&n!==(n=t[3]?t[3]:null)&&zt(e,"aria-label",n),18&s&&o!==(o=`${t[1]||""} shepherd-button ${t[4]?"shepherd-button-secondary":""}`)&&zt(e,"class",o),4&s&&(e.disabled=t[2])},i:Mt,o:Mt,d(t){t&&Nt(e),r=!1,i()}}}function Te(t,e,n){let o,r,i,s,l,a,{config:c,step:p}=e
function u(t){return f(t)?t.call(p):t}return t.$$set=t=>{"config"in t&&n(6,c=t.config),"step"in t&&n(7,p=t.step)},t.$$.update=()=>{192&t.$$.dirty&&(n(0,o=c.action?c.action.bind(p.tour):null),n(1,r=c.classes),n(2,i=!!c.disabled&&u(c.disabled)),n(3,s=c.label?u(c.label):null),n(4,l=c.secondary),n(5,a=c.text?u(c.text):null))},[o,r,i,s,l,a,c,p]}class Se extends Oe{constructor(t){super(),$e(this,t,Te,Ee,Rt,{config:6,step:7})}}function _e(t,e,n){const o=t.slice()
return o[2]=e[n],o}function Ae(t){let e,n,o=t[1],r=[]
for(let s=0;s<o.length;s+=1)r[s]=Ie(_e(t,o,s))
const i=t=>be(r[t],1,1,(()=>{r[t]=null}))
return{c(){for(let t=0;t<r.length;t+=1)r[t].c()
e=Yt("")},m(t,o){for(let e=0;e<r.length;e+=1)r[e].m(t,o)
Ft(t,e,o),n=!0},p(t,n){if(3&n){let s
for(o=t[1],s=0;s<o.length;s+=1){const i=_e(t,o,s)
r[s]?(r[s].p(i,n),ge(r[s],1)):(r[s]=Ie(i),r[s].c(),ge(r[s],1),r[s].m(e.parentNode,e))}for(he(),s=o.length;s<r.length;s+=1)i(s)
me()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)ge(r[t])
n=!0}},o(t){r=r.filter(Boolean)
for(let e=0;e<r.length;e+=1)be(r[e])
n=!1},d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t),t&&Nt(e)}}}function Ie(t){let e,n
return e=new Se({props:{config:t[2],step:t[0]}}),{c(){ve(e.$$.fragment)},m(t,o){ye(e,t,o),n=!0},p(t,n){const o={}
2&n&&(o.config=t[2]),1&n&&(o.step=t[0]),e.$set(o)},i(t){n||(ge(e.$$.fragment,t),n=!0)},o(t){be(e.$$.fragment,t),n=!1},d(t){xe(e,t)}}}function je(t){let e,n,o=t[1]&&Ae(t)
return{c(){e=Vt("footer"),o&&o.c(),zt(e,"class","shepherd-footer")},m(t,r){Ft(t,e,r),o&&o.m(e,null),n=!0},p(t,n){let[r]=n
t[1]?o?(o.p(t,r),2&r&&ge(o,1)):(o=Ae(t),o.c(),ge(o,1),o.m(e,null)):o&&(he(),be(o,1,1,(()=>{o=null})),me())},i(t){n||(ge(o),n=!0)},o(t){be(o),n=!1},d(t){t&&Nt(e),o&&o.d()}}}function Le(t,e,n){let o,{step:r}=e
return t.$$set=t=>{"step"in t&&n(0,r=t.step)},t.$$.update=()=>{1&t.$$.dirty&&n(1,o=r.options.buttons)},[r,o]}class ke extends Oe{constructor(t){super(),$e(this,t,Le,je,Rt,{step:0})}}function Me(t){let e,n,o,r,i
return{c(){e=Vt("button"),n=Vt("span"),n.textContent="×",zt(n,"aria-hidden","true"),zt(e,"aria-label",o=t[0].label?t[0].label:"Close Tour"),zt(e,"class","shepherd-cancel-icon"),zt(e,"type","button")},m(o,s){Ft(o,e,s),Wt(e,n),r||(i=Ut(e,"click",t[1]),r=!0)},p(t,n){let[r]=n
1&r&&o!==(o=t[0].label?t[0].label:"Close Tour")&&zt(e,"aria-label",o)},i:Mt,o:Mt,d(t){t&&Nt(e),r=!1,i()}}}function Ce(t,e,n){let{cancelIcon:o,step:r}=e
return t.$$set=t=>{"cancelIcon"in t&&n(0,o=t.cancelIcon),"step"in t&&n(2,r=t.step)},[o,t=>{t.preventDefault(),r.cancel()},r]}class Pe extends Oe{constructor(t){super(),$e(this,t,Ce,Me,Rt,{cancelIcon:0,step:2})}}function Be(t){let e
return{c(){e=Vt("h3"),zt(e,"id",t[1]),zt(e,"class","shepherd-title")},m(n,o){Ft(n,e,o),t[3](e)},p(t,n){let[o]=n
2&o&&zt(e,"id",t[1])},i:Mt,o:Mt,d(n){n&&Nt(e),t[3](null)}}}function De(t,e,n){let{labelId:o,element:r,title:i}=e
return te((()=>{f(i)&&n(2,i=i()),n(0,r.innerHTML=i,r)})),t.$$set=t=>{"labelId"in t&&n(1,o=t.labelId),"element"in t&&n(0,r=t.element),"title"in t&&n(2,i=t.title)},[r,o,i,function(t){ne[t?"unshift":"push"]((()=>{r=t,n(0,r)}))}]}class He extends Oe{constructor(t){super(),$e(this,t,De,Be,Rt,{labelId:1,element:0,title:2})}}function Re(t){let e,n
return e=new He({props:{labelId:t[0],title:t[2]}}),{c(){ve(e.$$.fragment)},m(t,o){ye(e,t,o),n=!0},p(t,n){const o={}
1&n&&(o.labelId=t[0]),4&n&&(o.title=t[2]),e.$set(o)},i(t){n||(ge(e.$$.fragment,t),n=!0)},o(t){be(e.$$.fragment,t),n=!1},d(t){xe(e,t)}}}function We(t){let e,n
return e=new Pe({props:{cancelIcon:t[3],step:t[1]}}),{c(){ve(e.$$.fragment)},m(t,o){ye(e,t,o),n=!0},p(t,n){const o={}
8&n&&(o.cancelIcon=t[3]),2&n&&(o.step=t[1]),e.$set(o)},i(t){n||(ge(e.$$.fragment,t),n=!0)},o(t){be(e.$$.fragment,t),n=!1},d(t){xe(e,t)}}}function Fe(t){let e,n,o,r=t[2]&&Re(t),i=t[3]&&t[3].enabled&&We(t)
return{c(){e=Vt("header"),r&&r.c(),n=Xt(),i&&i.c(),zt(e,"class","shepherd-header")},m(t,s){Ft(t,e,s),r&&r.m(e,null),Wt(e,n),i&&i.m(e,null),o=!0},p(t,o){let[s]=o
t[2]?r?(r.p(t,s),4&s&&ge(r,1)):(r=Re(t),r.c(),ge(r,1),r.m(e,n)):r&&(he(),be(r,1,1,(()=>{r=null})),me()),t[3]&&t[3].enabled?i?(i.p(t,s),8&s&&ge(i,1)):(i=We(t),i.c(),ge(i,1),i.m(e,null)):i&&(he(),be(i,1,1,(()=>{i=null})),me())},i(t){o||(ge(r),ge(i),o=!0)},o(t){be(r),be(i),o=!1},d(t){t&&Nt(e),r&&r.d(),i&&i.d()}}}function Ne(t,e,n){let o,r,{labelId:i,step:s}=e
return t.$$set=t=>{"labelId"in t&&n(0,i=t.labelId),"step"in t&&n(1,s=t.step)},t.$$.update=()=>{2&t.$$.dirty&&(n(2,o=s.options.title),n(3,r=s.options.cancelIcon))},[i,s,o,r]}class Ve extends Oe{constructor(t){super(),$e(this,t,Ne,Fe,Rt,{labelId:0,step:1})}}function qe(t){let e
return{c(){e=Vt("div"),zt(e,"class","shepherd-text"),zt(e,"id",t[1])},m(n,o){Ft(n,e,o),t[3](e)},p(t,n){let[o]=n
2&o&&zt(e,"id",t[1])},i:Mt,o:Mt,d(n){n&&Nt(e),t[3](null)}}}function Ye(t,e,n){let{descriptionId:o,element:r,step:i}=e
return te((()=>{let{text:t}=i.options
f(t)&&(t=t.call(i)),u(t)?r.appendChild(t):n(0,r.innerHTML=t,r)})),t.$$set=t=>{"descriptionId"in t&&n(1,o=t.descriptionId),"element"in t&&n(0,r=t.element),"step"in t&&n(2,i=t.step)},[r,o,i,function(t){ne[t?"unshift":"push"]((()=>{r=t,n(0,r)}))}]}class Xe extends Oe{constructor(t){super(),$e(this,t,Ye,qe,Rt,{descriptionId:1,element:0,step:2})}}function Ue(t){let e,n
return e=new Ve({props:{labelId:t[1],step:t[2]}}),{c(){ve(e.$$.fragment)},m(t,o){ye(e,t,o),n=!0},p(t,n){const o={}
2&n&&(o.labelId=t[1]),4&n&&(o.step=t[2]),e.$set(o)},i(t){n||(ge(e.$$.fragment,t),n=!0)},o(t){be(e.$$.fragment,t),n=!1},d(t){xe(e,t)}}}function ze(t){let e,n
return e=new Xe({props:{descriptionId:t[0],step:t[2]}}),{c(){ve(e.$$.fragment)},m(t,o){ye(e,t,o),n=!0},p(t,n){const o={}
1&n&&(o.descriptionId=t[0]),4&n&&(o.step=t[2]),e.$set(o)},i(t){n||(ge(e.$$.fragment,t),n=!0)},o(t){be(e.$$.fragment,t),n=!1},d(t){xe(e,t)}}}function Ze(t){let e,n
return e=new ke({props:{step:t[2]}}),{c(){ve(e.$$.fragment)},m(t,o){ye(e,t,o),n=!0},p(t,n){const o={}
4&n&&(o.step=t[2]),e.$set(o)},i(t){n||(ge(e.$$.fragment,t),n=!0)},o(t){be(e.$$.fragment,t),n=!1},d(t){xe(e,t)}}}function Ke(t){let e,n,o,r,i=!h(t[2].options.title)||t[2].options.cancelIcon&&t[2].options.cancelIcon.enabled,s=!h(t[2].options.text),l=Array.isArray(t[2].options.buttons)&&t[2].options.buttons.length,a=i&&Ue(t),c=s&&ze(t),p=l&&Ze(t)
return{c(){e=Vt("div"),a&&a.c(),n=Xt(),c&&c.c(),o=Xt(),p&&p.c(),zt(e,"class","shepherd-content")},m(t,i){Ft(t,e,i),a&&a.m(e,null),Wt(e,n),c&&c.m(e,null),Wt(e,o),p&&p.m(e,null),r=!0},p(t,r){let[u]=r
4&u&&(i=!h(t[2].options.title)||t[2].options.cancelIcon&&t[2].options.cancelIcon.enabled),i?a?(a.p(t,u),4&u&&ge(a,1)):(a=Ue(t),a.c(),ge(a,1),a.m(e,n)):a&&(he(),be(a,1,1,(()=>{a=null})),me()),4&u&&(s=!h(t[2].options.text)),s?c?(c.p(t,u),4&u&&ge(c,1)):(c=ze(t),c.c(),ge(c,1),c.m(e,o)):c&&(he(),be(c,1,1,(()=>{c=null})),me()),4&u&&(l=Array.isArray(t[2].options.buttons)&&t[2].options.buttons.length),l?p?(p.p(t,u),4&u&&ge(p,1)):(p=Ze(t),p.c(),ge(p,1),p.m(e,null)):p&&(he(),be(p,1,1,(()=>{p=null})),me())},i(t){r||(ge(a),ge(c),ge(p),r=!0)},o(t){be(a),be(c),be(p),r=!1},d(t){t&&Nt(e),a&&a.d(),c&&c.d(),p&&p.d()}}}function Ge(t,e,n){let{descriptionId:o,labelId:r,step:i}=e
return t.$$set=t=>{"descriptionId"in t&&n(0,o=t.descriptionId),"labelId"in t&&n(1,r=t.labelId),"step"in t&&n(2,i=t.step)},[o,r,i]}class Je extends Oe{constructor(t){super(),$e(this,t,Ge,Ke,Rt,{descriptionId:0,labelId:1,step:2})}}function Qe(t){let e
return{c(){e=Vt("div"),zt(e,"class","shepherd-arrow"),zt(e,"data-popper-arrow","")},m(t,n){Ft(t,e,n)},d(t){t&&Nt(e)}}}function tn(t){let e,n,o,r,i,s,l,a,c=t[4].options.arrow&&t[4].options.attachTo&&t[4].options.attachTo.element&&t[4].options.attachTo.on&&Qe()
o=new Je({props:{descriptionId:t[2],labelId:t[3],step:t[4]}})
let p=[{"aria-describedby":r=h(t[4].options.text)?null:t[2]},{"aria-labelledby":i=t[4].options.title?t[3]:null},t[1],{role:"dialog"},{tabindex:"0"}],u={}
for(let f=0;f<p.length;f+=1)u=Ct(u,p[f])
return{c(){e=Vt("div"),c&&c.c(),n=Xt(),ve(o.$$.fragment),Zt(e,u),Kt(e,"shepherd-has-cancel-icon",t[5]),Kt(e,"shepherd-has-title",t[6]),Kt(e,"shepherd-element",!0)},m(r,i){Ft(r,e,i),c&&c.m(e,null),Wt(e,n),ye(o,e,null),t[13](e),s=!0,l||(a=Ut(e,"keydown",t[7]),l=!0)},p(t,l){let[a]=l
t[4].options.arrow&&t[4].options.attachTo&&t[4].options.attachTo.element&&t[4].options.attachTo.on?c||(c=Qe(),c.c(),c.m(e,n)):c&&(c.d(1),c=null)
const f={}
4&a&&(f.descriptionId=t[2]),8&a&&(f.labelId=t[3]),16&a&&(f.step=t[4]),o.$set(f),Zt(e,u=function(t,e){const n={},o={},r={$$scope:1}
let i=t.length
for(;i--;){const s=t[i],l=e[i]
if(l){for(const t in s)t in l||(o[t]=1)
for(const t in l)r[t]||(n[t]=l[t],r[t]=1)
t[i]=l}else for(const t in s)r[t]=1}for(const s in o)s in n||(n[s]=void 0)
return n}(p,[(!s||20&a&&r!==(r=h(t[4].options.text)?null:t[2]))&&{"aria-describedby":r},(!s||24&a&&i!==(i=t[4].options.title?t[3]:null))&&{"aria-labelledby":i},2&a&&t[1],{role:"dialog"},{tabindex:"0"}])),Kt(e,"shepherd-has-cancel-icon",t[5]),Kt(e,"shepherd-has-title",t[6]),Kt(e,"shepherd-element",!0)},i(t){s||(ge(o.$$.fragment,t),s=!0)},o(t){be(o.$$.fragment,t),s=!1},d(n){n&&Nt(e),c&&c.d(),xe(o),t[13](null),l=!1,a()}}}function en(t){return t.split(" ").filter((t=>!!t.length))}function nn(t,e,n){let o,r,i,{classPrefix:s,element:l,descriptionId:a,firstFocusableElement:c,focusableElements:p,labelId:u,lastFocusableElement:f,step:h,dataStepId:m}=e
var g
return g=()=>{n(1,m={[`data-${s}shepherd-step-id`]:h.id}),n(9,p=l.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]')),n(8,c=p[0]),n(10,f=p[p.length-1])},Qt().$$.on_mount.push(g),te((()=>{i!==h.options.classes&&(function(t){if(d(t)){const e=en(t)
e.length&&l.classList.remove(...e)}}(i),i=h.options.classes,function(t){if(d(t)){const e=en(t)
e.length&&l.classList.add(...e)}}(i))})),t.$$set=t=>{"classPrefix"in t&&n(11,s=t.classPrefix),"element"in t&&n(0,l=t.element),"descriptionId"in t&&n(2,a=t.descriptionId),"firstFocusableElement"in t&&n(8,c=t.firstFocusableElement),"focusableElements"in t&&n(9,p=t.focusableElements),"labelId"in t&&n(3,u=t.labelId),"lastFocusableElement"in t&&n(10,f=t.lastFocusableElement),"step"in t&&n(4,h=t.step),"dataStepId"in t&&n(1,m=t.dataStepId)},t.$$.update=()=>{16&t.$$.dirty&&(n(5,o=h.options&&h.options.cancelIcon&&h.options.cancelIcon.enabled),n(6,r=h.options&&h.options.title))},[l,m,a,u,h,o,r,t=>{const{tour:e}=h
switch(t.keyCode){case 9:if(0===p.length){t.preventDefault()
break}t.shiftKey?(document.activeElement===c||document.activeElement.classList.contains("shepherd-element"))&&(t.preventDefault(),f.focus()):document.activeElement===f&&(t.preventDefault(),c.focus())
break
case 27:e.options.exitOnEsc&&h.cancel()
break
case 37:e.options.keyboardNavigation&&e.back()
break
case 39:e.options.keyboardNavigation&&e.next()}},c,p,f,s,()=>l,function(t){ne[t?"unshift":"push"]((()=>{l=t,n(0,l)}))}]}class on extends Oe{constructor(t){super(),$e(this,t,nn,tn,Rt,{classPrefix:11,element:0,descriptionId:2,firstFocusableElement:8,focusableElements:9,labelId:3,lastFocusableElement:10,step:4,dataStepId:1,getElement:12})}get getElement(){return this.$$.ctx[12]}}var rn,sn,ln=(rn=function(t,e){t.exports={polyfill:function(){var t=window,e=document
if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var n,o=t.HTMLElement||t.Element,r={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:o.prototype.scroll||l,scrollIntoView:o.prototype.scrollIntoView},i=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,s=(n=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0)
t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?h.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):r.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(a(arguments[0])?r.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==a(arguments[0])){var t=arguments[0].left,e=arguments[0].top
h.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted")
r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==a(arguments[0])){var n=f(this),o=n.getBoundingClientRect(),i=this.getBoundingClientRect()
n!==e.body?(h.call(this,n,n.scrollLeft+i.left-o.left,n.scrollTop+i.top-o.top),"fixed"!==t.getComputedStyle(n).position&&t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):t.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(t,e){this.scrollLeft=t,this.scrollTop=e}function a(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0
if("object"==typeof t&&"smooth"===t.behavior)return!1
throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(t,e){return"Y"===e?t.clientHeight+s<t.scrollHeight:"X"===e?t.clientWidth+s<t.scrollWidth:void 0}function p(e,n){var o=t.getComputedStyle(e,null)["overflow"+n]
return"auto"===o||"scroll"===o}function u(t){var e=c(t,"Y")&&p(t,"Y"),n=c(t,"X")&&p(t,"X")
return e||n}function f(t){for(;t!==e.body&&!1===u(t);)t=t.parentNode||t.host
return t}function d(e){var n,o,r,s,l=(i()-e.startTime)/468
s=l=l>1?1:l,n=.5*(1-Math.cos(Math.PI*s)),o=e.startX+(e.x-e.startX)*n,r=e.startY+(e.y-e.startY)*n,e.method.call(e.scrollable,o,r),o===e.x&&r===e.y||t.requestAnimationFrame(d.bind(t,e))}function h(n,o,s){var a,c,p,u,f=i()
n===e.body?(a=t,c=t.scrollX||t.pageXOffset,p=t.scrollY||t.pageYOffset,u=r.scroll):(a=n,c=n.scrollLeft,p=n.scrollTop,u=l),d({scrollable:a,method:u,startTime:f,startX:c,startY:p,x:o,y:s})}}}},rn(sn={exports:{}}),sn.exports)
ln.polyfill,ln.polyfill()
class an extends m{constructor(t,e){return void 0===e&&(e={}),super(t,e),this.tour=t,this.classPrefix=this.tour.options?It(this.tour.options.classPrefix):"",this.styles=t.styles,this._resolvedAttachTo=null,g(this),this._setOptions(e),this}cancel(){this.tour.cancel(),this.trigger("cancel")}complete(){this.tour.complete(),this.trigger("complete")}destroy(){this.tooltip&&(this.tooltip.destroy(),this.tooltip=null),u(this.el)&&this.el.parentNode&&(this.el.parentNode.removeChild(this.el),this.el=null),this._updateStepTargetOnHide(),this.trigger("destroy")}getTour(){return this.tour}hide(){this.tour.modal.hide(),this.trigger("before-hide"),this.el&&(this.el.hidden=!0),this._updateStepTargetOnHide(),this.trigger("hide")}_resolveAttachToOptions(){return this._resolvedAttachTo=function(t){const e=t.options.attachTo||{},n=Object.assign({},e)
if(f(n.element)&&(n.element=n.element.call(t)),d(n.element)){try{n.element=document.querySelector(n.element)}catch(t){}n.element||console.error(`The element for this Shepherd step was not found ${e.element}`)}return n}(this),this._resolvedAttachTo}_getResolvedAttachToOptions(){return null===this._resolvedAttachTo?this._resolveAttachToOptions():this._resolvedAttachTo}isOpen(){return Boolean(this.el&&!this.el.hidden)}show(){if(f(this.options.beforeShowPromise)){const t=this.options.beforeShowPromise()
if(!h(t))return t.then((()=>this._show()))}this._show()}updateStepOptions(t){Object.assign(this.options,t),this.shepherdElementComponent&&this.shepherdElementComponent.$set({step:this})}getElement(){return this.el}getTarget(){return this.target}_createTooltipContent(){const t=`${this.id}-description`,e=`${this.id}-label`
return this.shepherdElementComponent=new on({target:this.tour.options.stepsContainer||document.body,props:{classPrefix:this.classPrefix,descriptionId:t,labelId:e,step:this,styles:this.styles}}),this.shepherdElementComponent.getElement()}_scrollTo(t){const{element:e}=this._getResolvedAttachToOptions()
f(this.options.scrollToHandler)?this.options.scrollToHandler(e):e instanceof Element&&"function"==typeof e.scrollIntoView&&e.scrollIntoView(t)}_getClassOptions(t){const e=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions,n=t.classes?t.classes:"",o=e&&e.classes?e.classes:"",r=[...n.split(" "),...o.split(" ")],i=new Set(r)
return Array.from(i).join(" ").trim()}_setOptions(t){void 0===t&&(t={})
let e=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions
e=p({},e||{}),this.options=Object.assign({arrow:!0},e,t)
const{when:n}=this.options
this.options.classes=this._getClassOptions(t),this.destroy(),this.id=this.options.id||`step-${Lt()}`,n&&Object.keys(n).forEach((t=>{this.on(t,n[t],this)}))}_setupElements(){h(this.el)||this.destroy(),this.el=this._createTooltipContent(),this.options.advanceOn&&function(t){const{event:e,selector:n}=t.options.advanceOn||{}
if(!e)return console.error("advanceOn was defined, but no event name was passed.")
{const o=function(t,e){return n=>{if(e.isOpen()){const o=e.el&&n.currentTarget===e.el;(!h(t)&&n.currentTarget.matches(t)||o)&&e.tour.next()}}}(n,t)
let r
try{r=document.querySelector(n)}catch(t){}if(!h(n)&&!r)return console.error(`No element was found for the selector supplied to advanceOn: ${n}`)
r?(r.addEventListener(e,o),t.on("destroy",(()=>r.removeEventListener(e,o)))):(document.body.addEventListener(e,o,!0),t.on("destroy",(()=>document.body.removeEventListener(e,o,!0))))}}(this),function(t){t.tooltip&&t.tooltip.destroy()
const e=t._getResolvedAttachToOptions()
let n=e.element
const o=function(t,e){let n={modifiers:[{name:"preventOverflow",options:{altAxis:!0,tether:!1}},At(e)],strategy:"absolute"}
jt(t)?n=function(t){const e=[{name:"applyStyles",fn(t){let{state:e}=t
Object.keys(e.elements).forEach((t=>{if("popper"!==t)return
const n=e.attributes[t]||{},o=e.elements[t]
Object.assign(o.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}),Object.keys(n).forEach((t=>{const e=n[t]
!1===e?o.removeAttribute(t):o.setAttribute(t,!0===e?"":e)}))}))}},{name:"computeStyles",options:{adaptive:!1}}]
let n={placement:"top",strategy:"fixed",modifiers:[At(t)]}
return n=_t({},n,{modifiers:Array.from(new Set([...n.modifiers,...e]))}),n}(e):n.placement=t.on
const o=e.tour&&e.tour.options&&e.tour.options.defaultStepOptions
return o&&(n=kt(o,n)),n=kt(e.options,n),n}(e,t)
jt(e)&&(n=document.body,t.shepherdElementComponent.getElement().classList.add("shepherd-centered")),t.tooltip=St(n,t.el,o),t.target=e.element}(this)}_show(){this.trigger("before-show"),this._resolveAttachToOptions(),this._setupElements(),this.tour.modal||this.tour._setupModal(),this.tour.modal.setupForStep(this),this._styleTargetElementForStep(this),this.el.hidden=!1,this.options.scrollTo&&setTimeout((()=>{this._scrollTo(this.options.scrollTo)})),this.el.hidden=!1
const t=this.shepherdElementComponent.getElement(),e=this.target||document.body
e.classList.add(`${this.classPrefix}shepherd-enabled`),e.classList.add(`${this.classPrefix}shepherd-target`),t.classList.add("shepherd-enabled"),this.trigger("show")}_styleTargetElementForStep(t){const e=t.target
e&&(t.options.highlightClass&&e.classList.add(t.options.highlightClass),e.classList.remove("shepherd-target-click-disabled"),!1===t.options.canClickTarget&&e.classList.add("shepherd-target-click-disabled"))}_updateStepTargetOnHide(){const t=this.target||document.body
this.options.highlightClass&&t.classList.remove(this.options.highlightClass),t.classList.remove("shepherd-target-click-disabled",`${this.classPrefix}shepherd-enabled`,`${this.classPrefix}shepherd-target`)}}function cn(t){let e,n,o,r,i
return{c(){e=qt("svg"),n=qt("path"),zt(n,"d",t[2]),zt(e,"class",o=(t[1]?"shepherd-modal-is-visible":"")+" shepherd-modal-overlay-container")},m(o,s){Ft(o,e,s),Wt(e,n),t[11](e),r||(i=Ut(e,"touchmove",t[3]),r=!0)},p(t,r){let[i]=r
4&i&&zt(n,"d",t[2]),2&i&&o!==(o=(t[1]?"shepherd-modal-is-visible":"")+" shepherd-modal-overlay-container")&&zt(e,"class",o)},i:Mt,o:Mt,d(n){n&&Nt(e),t[11](null),r=!1,i()}}}function pn(t){if(!t)return null
const e=t instanceof HTMLElement&&window.getComputedStyle(t).overflowY
return"hidden"!==e&&"visible"!==e&&t.scrollHeight>=t.clientHeight?t:pn(t.parentElement)}function un(t,e,n){let{element:o,openingProperties:r}=e
Lt()
let i,s,l=!1
function a(){n(4,r={width:0,height:0,x:0,y:0,r:0})}function c(){n(1,l=!1),d()}function p(t,e,o,i){if(void 0===t&&(t=0),void 0===e&&(e=0),i){const{y:s,height:l}=function(t,e){const n=t.getBoundingClientRect()
let o=n.y||n.top,r=n.bottom||o+n.height
if(e){const t=e.getBoundingClientRect(),n=t.y||t.top,i=t.bottom||n+t.height
o=Math.max(o,n),r=Math.min(r,i)}return{y:o,height:Math.max(r-o,0)}}(i,o),{x:a,width:c,left:p}=i.getBoundingClientRect()
n(4,r={width:c+2*t,height:l+2*t,x:(a||p)-t,y:s-t,r:e})}else a()}function u(){n(1,l=!0)}a()
const f=t=>{t.preventDefault()}
function d(){i&&(cancelAnimationFrame(i),i=void 0),window.removeEventListener("touchmove",f,{passive:!1})}return t.$$set=t=>{"element"in t&&n(0,o=t.element),"openingProperties"in t&&n(4,r=t.openingProperties)},t.$$.update=()=>{16&t.$$.dirty&&n(2,s=function(t){let{width:e,height:n,x:o=0,y:r=0,r:i=0}=t
const{innerWidth:s,innerHeight:l}=window
return`M${s},${l}H0V0H${s}V${l}ZM${o+i},${r}a${i},${i},0,0,0-${i},${i}V${n+r-i}a${i},${i},0,0,0,${i},${i}H${e+o-i}a${i},${i},0,0,0,${i}-${i}V${r+i}a${i},${i},0,0,0-${i}-${i}Z`}(r))},[o,l,s,t=>{t.stopPropagation()},r,()=>o,a,c,p,function(t){d(),t.tour.options.useModalOverlay?(function(t){const{modalOverlayOpeningPadding:e,modalOverlayOpeningRadius:n}=t.options,o=pn(t.target),r=()=>{i=void 0,p(e,n,o,t.target),i=requestAnimationFrame(r)}
r(),window.addEventListener("touchmove",f,{passive:!1})}(t),u()):c()},u,function(t){ne[t?"unshift":"push"]((()=>{o=t,n(0,o)}))}]}class fn extends Oe{constructor(t){super(),$e(this,t,un,cn,Rt,{element:0,openingProperties:4,getElement:5,closeModalOpening:6,hide:7,positionModal:8,setupForStep:9,show:10})}get getElement(){return this.$$.ctx[5]}get closeModalOpening(){return this.$$.ctx[6]}get hide(){return this.$$.ctx[7]}get positionModal(){return this.$$.ctx[8]}get setupForStep(){return this.$$.ctx[9]}get show(){return this.$$.ctx[10]}}const dn=new m
Object.assign(dn,{Tour:class extends m{constructor(t){return void 0===t&&(t={}),super(t),g(this),this.options=Object.assign({},{exitOnEsc:!0,keyboardNavigation:!0},t),this.classPrefix=It(this.options.classPrefix),this.steps=[],this.addSteps(this.options.steps),["active","cancel","complete","inactive","show","start"].map((t=>{(t=>{this.on(t,(e=>{(e=e||{}).tour=this,dn.trigger(t,e)}))})(t)})),this._setTourID(),this}addStep(t,e){let n=t
return n instanceof an?n.tour=this:n=new an(this,n),h(e)?this.steps.push(n):this.steps.splice(e,0,n),n}addSteps(t){return Array.isArray(t)&&t.forEach((t=>{this.addStep(t)})),this}back(){const t=this.steps.indexOf(this.currentStep)
this.show(t-1,!1)}cancel(){if(this.options.confirmCancel){const t=this.options.confirmCancelMessage||"Are you sure you want to stop the tour?"
window.confirm(t)&&this._done("cancel")}else this._done("cancel")}complete(){this._done("complete")}getById(t){return this.steps.find((e=>e.id===t))}getCurrentStep(){return this.currentStep}hide(){const t=this.getCurrentStep()
if(t)return t.hide()}isActive(){return dn.activeTour===this}next(){const t=this.steps.indexOf(this.currentStep)
t===this.steps.length-1?this.complete():this.show(t+1,!0)}removeStep(t){const e=this.getCurrentStep()
this.steps.some(((e,n)=>{if(e.id===t)return e.isOpen()&&e.hide(),e.destroy(),this.steps.splice(n,1),!0})),e&&e.id===t&&(this.currentStep=void 0,this.steps.length?this.show(0):this.cancel())}show(t,e){void 0===t&&(t=0),void 0===e&&(e=!0)
const n=d(t)?this.getById(t):this.steps[t]
n&&(this._updateStateBeforeShow(),f(n.options.showOn)&&!n.options.showOn()?this._skipStep(n,e):(this.trigger("show",{step:n,previous:this.currentStep}),this.currentStep=n,n.show()))}start(){this.trigger("start"),this.focusedElBeforeOpen=document.activeElement,this.currentStep=null,this._setupModal(),this._setupActiveTour(),this.next()}_done(t){const e=this.steps.indexOf(this.currentStep)
if(Array.isArray(this.steps)&&this.steps.forEach((t=>t.destroy())),function(t){if(t){const{steps:e}=t
e.forEach((t=>{t.options&&!1===t.options.canClickTarget&&t.options.attachTo&&t.target instanceof HTMLElement&&t.target.classList.remove("shepherd-target-click-disabled")}))}}(this),this.trigger(t,{index:e}),dn.activeTour=null,this.trigger("inactive",{tour:this}),this.modal&&this.modal.hide(),("cancel"===t||"complete"===t)&&this.modal){const t=document.querySelector(".shepherd-modal-overlay-container")
t&&t.remove()}u(this.focusedElBeforeOpen)&&this.focusedElBeforeOpen.focus()}_setupActiveTour(){this.trigger("active",{tour:this}),dn.activeTour=this}_setupModal(){this.modal=new fn({target:this.options.modalContainer||document.body,props:{classPrefix:this.classPrefix,styles:this.styles}})}_skipStep(t,e){const n=this.steps.indexOf(t)
if(n===this.steps.length-1)this.complete()
else{const t=e?n+1:n-1
this.show(t,e)}}_updateStateBeforeShow(){this.currentStep&&this.currentStep.hide(),this.isActive()||this._setupActiveTour()}_setTourID(){const t=this.options.tourName||"tour"
this.id=`${t}--${Lt()}`}},Step:an})}}])
