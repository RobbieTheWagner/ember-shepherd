(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[3],{29:function(t,e,n){"use strict"
function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function")
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&function(t,e){(Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(t,e)}function r(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()
return function(){var n,o=s(t)
if(e){var r=s(this).constructor
n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments)
return i(this,n)}}function i(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return t}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,i=void 0
try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return n}}(t,e)||l(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(t){if("string"==typeof t)return f(t,e)
var n=Object.prototype.toString.call(t).slice(8,-1)
return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length)
for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n]
return o}function p(t,e){var n=Object.keys(t)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t)
e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{}
e%2?p(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var o=e[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function g(t,e,n){return e&&v(t.prototype,e),n&&v(t,n),t}function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*! shepherd.js 8.0.1 */n.r(e)
var b=function(t){return function(t){return!!t&&"object"===y(t)}(t)&&!function(t){var e=Object.prototype.toString.call(t)
return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===w}(t)}(t)},w="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103
function x(t,e){return!1!==e.clone&&e.isMergeableObject(t)?S((n=t,Array.isArray(n)?[]:{}),t,e):t
var n}function O(t,e,n){return t.concat(e).map((function(t){return x(t,n)}))}function $(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return t.propertyIsEnumerable(e)})):[]}(t))}function E(t,e){try{return e in t}catch(t){return!1}}function S(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||O,n.isMergeableObject=n.isMergeableObject||b,n.cloneUnlessOtherwiseSpecified=x
var o=Array.isArray(e)
return o===Array.isArray(t)?o?n.arrayMerge(t,e,n):function(t,e,n){var o={}
return n.isMergeableObject(t)&&$(t).forEach((function(e){o[e]=x(t[e],n)})),$(e).forEach((function(r){(function(t,e){return E(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,r)||(E(t,r)&&n.isMergeableObject(e[r])?o[r]=function(t,e){if(!e.customMerge)return S
var n=e.customMerge(t)
return"function"==typeof n?n:S}(r,n)(t[r],e[r],n):o[r]=x(e[r],n))})),o}(t,e,n):x(e,n)}S.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array")
return t.reduce((function(t,n){return S(t,n,e)}),{})}
var k=S
function j(t){return t instanceof HTMLElement}function T(t){return"function"==typeof t}function I(t){return"string"==typeof t}function _(t){return void 0===t}var M=function(){function t(){m(this,t)}return g(t,[{key:"on",value:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
return _(this.bindings)&&(this.bindings={}),_(this.bindings[t])&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:o}),this}},{key:"once",value:function(t,e,n){return this.on(t,e,n,!0)}},{key:"off",value:function(t,e){var n=this
return _(this.bindings)||_(this.bindings[t])||(_(e)?delete this.bindings[t]:this.bindings[t].forEach((function(o,r){o.handler===e&&n.bindings[t].splice(r,1)}))),this}},{key:"trigger",value:function(t){for(var e=this,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r]
return!_(this.bindings)&&this.bindings[t]&&this.bindings[t].forEach((function(n,r){var i=n.ctx,a=n.handler,s=n.once,c=i||e
a.apply(c,o),s&&e.bindings[t].splice(r,1)})),this}}]),t}()
function P(t){for(var e=Object.getOwnPropertyNames(t.constructor.prototype),n=0;n<e.length;n++){var o=e[n],r=t[o]
"constructor"!==o&&"function"==typeof r&&(t[o]=r.bind(t))}return t}function A(t){var e=t.getBoundingClientRect()
return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function L(t){if("[object Window]"!==t.toString()){var e=t.ownerDocument
return e?e.defaultView:window}return t}function C(t){var e=L(t)
return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function D(t){return t instanceof L(t).Element||t instanceof Element}function B(t){return t instanceof L(t).HTMLElement||t instanceof HTMLElement}function H(t){return t?(t.nodeName||"").toLowerCase():null}function R(t){return(D(t)?t.ownerDocument:t.document).documentElement}function W(t){return A(R(t)).left+C(t).scrollLeft}function F(t){return L(t).getComputedStyle(t)}function N(t){var e=F(t),n=e.overflow,o=e.overflowX,r=e.overflowY
return/auto|scroll|overlay|hidden/.test(n+r+o)}function q(t,e,n){void 0===n&&(n=!1)
var o,r=R(e),i=A(t),a={scrollLeft:0,scrollTop:0},s={x:0,y:0}
return n||(("body"!==H(e)||N(r))&&(a=(o=e)!==L(o)&&B(o)?function(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}(o):C(o)),B(e)?((s=A(e)).x+=e.clientLeft,s.y+=e.clientTop):r&&(s.x=W(r))),{x:i.left+a.scrollLeft-s.x,y:i.top+a.scrollTop-s.y,width:i.width,height:i.height}}function V(t){return{x:t.offsetLeft,y:t.offsetTop,width:t.offsetWidth,height:t.offsetHeight}}function Y(t){return"html"===H(t)?t:t.assignedSlot||t.parentNode||t.host||R(t)}function X(t,e){void 0===e&&(e=[])
var n=function t(e){return["html","body","#document"].indexOf(H(e))>=0?e.ownerDocument.body:B(e)&&N(e)?e:t(Y(e))}(t),o="body"===H(n),r=L(n),i=o?[r].concat(r.visualViewport||[],N(n)?n:[]):n,a=e.concat(i)
return o?a:a.concat(X(Y(i)))}function U(t){return["table","td","th"].indexOf(H(t))>=0}function z(t){return B(t)&&"fixed"!==F(t).position?t.offsetParent:null}function J(t){for(var e=L(t),n=z(t);n&&U(n);)n=z(n)
return n&&"body"===H(n)&&"static"===F(n).position?e:n||e}var Z="top",K="bottom",G="right",Q="left",tt=[Z,K,G,Q],et=tt.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),nt=[].concat(tt,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]),ot=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]
function rt(t){return t.split("-")[0]}var it={placement:"bottom",modifiers:[],strategy:"absolute"}
function at(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}var st={passive:!0}
function ct(t){return t.split("-")[1]}function ut(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function lt(t){var e,n=t.reference,o=t.element,r=t.placement,i=r?rt(r):null,a=r?ct(r):null,s=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2
switch(i){case Z:e={x:s,y:n.y-o.height}
break
case K:e={x:s,y:n.y+n.height}
break
case G:e={x:n.x+n.width,y:c}
break
case Q:e={x:n.x-o.width,y:c}
break
default:e={x:n.x,y:n.y}}var u=i?ut(i):null
if(null!=u){var l="y"===u?"height":"width"
switch(a){case"start":e[u]=Math.floor(e[u])-Math.floor(n[l]/2-o[l]/2)
break
case"end":e[u]=Math.floor(e[u])+Math.ceil(n[l]/2-o[l]/2)}}return e}var ft={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function pt(t){var e,n=t.popper,o=t.popperRect,r=t.placement,i=t.offsets,a=t.position,s=t.gpuAcceleration,c=t.adaptive,u=function(t){var e=t.x,n=t.y,o=window.devicePixelRatio||1
return{x:Math.round(e*o)/o||0,y:Math.round(n*o)/o||0}}(i),l=u.x,f=u.y,p=i.hasOwnProperty("x"),d=i.hasOwnProperty("y"),h=Q,m=Z,v=window
if(c){var g=J(n)
g===L(n)&&(g=R(n)),r===Z&&(m=K,f-=g.clientHeight-o.height,f*=s?1:-1),r===Q&&(h=G,l-=g.clientWidth-o.width,l*=s?1:-1)}var y,b=Object.assign({position:a},c&&ft)
return s?Object.assign({},b,((y={})[m]=d?"0":"",y[h]=p?"0":"",y.transform=(v.devicePixelRatio||1)<2?"translate("+l+"px, "+f+"px)":"translate3d("+l+"px, "+f+"px, 0)",y)):Object.assign({},b,((e={})[m]=d?f+"px":"",e[h]=p?l+"px":"",e.transform="",e))}var dt={left:"right",right:"left",bottom:"top",top:"bottom"}
function ht(t){return t.replace(/left|right|bottom|top/g,(function(t){return dt[t]}))}var mt={start:"end",end:"start"}
function vt(t){return t.replace(/start|end/g,(function(t){return mt[t]}))}function gt(t){return parseFloat(t)||0}function yt(t,e){var n=Boolean(e.getRootNode&&e.getRootNode().host)
if(t.contains(e))return!0
if(n){var o=e
do{if(o&&t.isSameNode(o))return!0
o=o.parentNode||o.host}while(o)}return!1}function bt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function wt(t,e){return"viewport"===e?bt(function(t){var e=L(t),n=e.visualViewport,o=e.innerWidth,r=e.innerHeight
return n&&/iPhone|iPod|iPad/.test(navigator.platform)&&(o=n.width,r=n.height),{width:o,height:r,x:0,y:0}}(t)):B(e)?A(e):bt(function(t){var e=L(t),n=C(t),o=q(R(t),e)
return o.height=Math.max(o.height,e.innerHeight),o.width=Math.max(o.width,e.innerWidth),o.x=-n.scrollLeft,o.y=-n.scrollTop,o}(R(t)))}function xt(t,e,n){var o="clippingParents"===e?function(t){var e=X(t),n=["absolute","fixed"].indexOf(F(t).position)>=0&&B(t)?J(t):t
return D(n)?e.filter((function(t){return D(t)&&yt(t,n)})):[]}(t):[].concat(e),r=[].concat(o,[n]),i=r[0],a=r.reduce((function(e,n){var o=wt(t,n),r=function(t){var e=L(t),n=function(t){var e=B(t)?F(t):{}
return{top:gt(e.borderTopWidth),right:gt(e.borderRightWidth),bottom:gt(e.borderBottomWidth),left:gt(e.borderLeftWidth)}}(t),o="html"===H(t),r=W(t),i=t.clientWidth+n.right,a=t.clientHeight+n.bottom
return o&&e.innerHeight-t.clientHeight>50&&(a=e.innerHeight-n.bottom),{top:o?0:t.clientTop,right:t.clientLeft>n.left?n.right:o?e.innerWidth-i-r:t.offsetWidth-i,bottom:o?e.innerHeight-a:t.offsetHeight-a,left:o?r:t.clientLeft}}(B(n)?n:R(t))
return e.top=Math.max(o.top+r.top,e.top),e.right=Math.min(o.right-r.right,e.right),e.bottom=Math.min(o.bottom-r.bottom,e.bottom),e.left=Math.max(o.left+r.left,e.left),e}),wt(t,i))
return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Ot(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},{},t)}function $t(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}function Et(t,e){void 0===e&&(e={})
var n=e,o=n.placement,r=void 0===o?t.placement:o,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,c=void 0===s?"viewport":s,u=n.elementContext,l=void 0===u?"popper":u,f=n.altBoundary,p=void 0!==f&&f,d=n.padding,h=void 0===d?0:d,m=Ot("number"!=typeof h?h:$t(h,tt)),v="popper"===l?"reference":"popper",g=t.elements.reference,y=t.rects.popper,b=t.elements[p?v:l],w=xt(D(b)?b:b.contextElement||R(t.elements.popper),a,c),x=A(g),O=lt({reference:x,element:y,strategy:"absolute",placement:r}),$=bt(Object.assign({},y,{},O)),E="popper"===l?$:x,S={top:w.top-E.top+m.top,bottom:E.bottom-w.bottom+m.bottom,left:w.left-E.left+m.left,right:E.right-w.right+m.right},k=t.modifiersData.offset
if("popper"===l&&k){var j=k[r]
Object.keys(S).forEach((function(t){var e=[G,K].indexOf(t)>=0?1:-1,n=[Z,K].indexOf(t)>=0?"y":"x"
S[t]+=j[n]*e}))}return S}function St(t,e,n){return Math.max(t,Math.min(e,n))}function kt(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function jt(t){return[Z,G,K,Q].some((function(e){return t[e]>=0}))}var Tt,It=function(t){void 0===t&&(t={})
var e=t,n=e.defaultModifiers,o=void 0===n?[]:n,r=e.defaultOptions,i=void 0===r?it:r
return function(t,e,n){void 0===n&&(n=i)
var r,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},it,{},i),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},c=[],u=!1,l={state:s,setOptions:function(n){f(),s.options=Object.assign({},i,{},s.options,{},n),s.scrollParents={reference:D(t)?X(t):t.contextElement?X(t.contextElement):[],popper:X(e)}
var r,a,u=function(t){var e=function(t){var e=new Map,n=new Set,o=[]
return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||function t(r){n.add(r.name),[].concat(r.requires||[],r.requiresIfExists||[]).forEach((function(o){if(!n.has(o)){var r=e.get(o)
r&&t(r)}})),o.push(r)}(t)})),o}(t)
return ot.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}((r=[].concat(o,s.options.modifiers),a=r.reduce((function(t,e){var n=t[e.name]
return t[e.name]=n?Object.assign({},n,{},e,{options:Object.assign({},n.options,{},e.options),data:Object.assign({},n.data,{},e.data)}):e,t}),{}),Object.keys(a).map((function(t){return a[t]}))))
return s.orderedModifiers=u.filter((function(t){return t.enabled})),s.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,o=void 0===n?{}:n,r=t.effect
if("function"==typeof r){var i=r({state:s,name:e,instance:l,options:o})
c.push(i||function(){})}})),l.update()},forceUpdate:function(){if(!u){var t=s.elements,e=t.reference,n=t.popper
if(at(e,n)){s.rects={reference:q(e,J(n),"fixed"===s.options.strategy),popper:V(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(t){return s.modifiersData[t.name]=Object.assign({},t.data)}))
for(var o=0;o<s.orderedModifiers.length;o++)if(!0!==s.reset){var r=s.orderedModifiers[o],i=r.fn,a=r.options,c=void 0===a?{}:a,f=r.name
"function"==typeof i&&(s=i({state:s,options:c,name:f,instance:l})||s)}else s.reset=!1,o=-1}}},update:(r=function(){return new Promise((function(t){l.forceUpdate(),t(s)}))},function(){return a||(a=new Promise((function(t){Promise.resolve().then((function(){a=void 0,t(r())}))}))),a}),destroy:function(){f(),u=!0}}
if(!at(t,e))return l
function f(){c.forEach((function(t){return t()})),c=[]}return l.setOptions(n).then((function(t){!u&&n.onFirstUpdate&&n.onFirstUpdate(t)})),l}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,o=t.options,r=o.scroll,i=void 0===r||r,a=o.resize,s=void 0===a||a,c=L(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper)
return i&&u.forEach((function(t){t.addEventListener("scroll",n.update,st)})),s&&c.addEventListener("resize",n.update,st),function(){i&&u.forEach((function(t){t.removeEventListener("scroll",n.update,st)})),s&&c.removeEventListener("resize",n.update,st)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name
e.modifiersData[n]=lt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,a=void 0===i||i,s={placement:rt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r}
null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,{},pt(Object.assign({},s,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,{},pt(Object.assign({},s,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state
Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},o=e.attributes[t]||{},r=e.elements[t]
B(r)&&H(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(t){var e=o[t]
!1===e?r.removeAttribute(t):r.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(e.elements.popper.style,n.popper),e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var o=e.elements[t],r=e.attributes[t]||{},i=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{})
B(o)&&H(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(t){o.removeAttribute(t)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,o=t.name,r=n.offset,i=void 0===r?[0,0]:r,a=nt.reduce((function(t,n){return t[n]=function(t,e,n){var o=rt(t),r=[Q,Z].indexOf(o)>=0?-1:1,i="function"==typeof n?n(Object.assign({},e,{placement:t})):n,a=i[0],s=i[1]
return a=a||0,s=(s||0)*r,[Q,G].indexOf(o)>=0?{x:s,y:a}:{x:a,y:s}}(n,e.rects,i),t}),{}),s=a[e.placement],c=s.x,u=s.y
null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=u),e.modifiersData[o]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name
if(!e.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,l=n.boundary,f=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=e.options.placement,g=rt(v),y=c||(g!==v&&h?function(t){if("auto"===rt(t))return[]
var e=ht(t)
return[vt(t),e,vt(e)]}(v):[ht(v)]),b=[v].concat(y).reduce((function(t,n){return t.concat("auto"===rt(n)?function(t,e){void 0===e&&(e={})
var n=e,o=n.placement,r=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?nt:c,l=ct(o),f=(l?s?et:et.filter((function(t){return ct(t)===l})):tt).filter((function(t){return u.indexOf(t)>=0})).reduce((function(e,n){return e[n]=Et(t,{placement:n,boundary:r,rootBoundary:i,padding:a})[rt(n)],e}),{})
return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}(e,{placement:n,boundary:l,rootBoundary:f,padding:u,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),w=e.rects.reference,x=e.rects.popper,O=new Map,$=!0,E=b[0],S=0;S<b.length;S++){var k=b[S],j=rt(k),T="start"===ct(k),I=[Z,K].indexOf(j)>=0,_=I?"width":"height",M=Et(e,{placement:k,boundary:l,rootBoundary:f,altBoundary:p,padding:u}),P=I?T?G:Q:T?K:Z
w[_]>x[_]&&(P=ht(P))
var A=ht(P),L=[]
if(i&&L.push(M[j]<=0),s&&L.push(M[P]<=0,M[A]<=0),L.every((function(t){return t}))){E=k,$=!1
break}O.set(k,L)}if($)for(var C=function(t){var e=b.find((function(e){var n=O.get(e)
if(n)return n.slice(0,t).every((function(t){return t}))}))
if(e)return E=e,"break"},D=h?3:1;D>0&&"break"!==C(D);D--);e.placement!==E&&(e.modifiersData[o]._skip=!0,e.placement=E,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name,r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,u=n.rootBoundary,l=n.altBoundary,f=n.padding,p=n.tether,d=void 0===p||p,h=n.tetherOffset,m=void 0===h?0:h,v=Et(e,{boundary:c,rootBoundary:u,padding:f,altBoundary:l}),g=rt(e.placement),y=ct(e.placement),b=!y,w=ut(g),x="x"===w?"y":"x",O=e.modifiersData.popperOffsets,$=e.rects.reference,E=e.rects.popper,S="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,k={x:0,y:0}
if(O){if(i){var j="y"===w?Z:Q,T="y"===w?K:G,I="y"===w?"height":"width",_=O[w],M=O[w]+v[j],P=O[w]-v[T],A=d?-E[I]/2:0,L="start"===y?$[I]:E[I],C="start"===y?-E[I]:-$[I],D=e.elements.arrow,B=d&&D?V(D):{width:0,height:0},H=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},R=H[j],W=H[T],F=St(0,$[I],B[I]),N=b?$[I]/2-A-F-R-S:L-F-R-S,q=b?-$[I]/2+A+F+W+S:C+F+W+S,Y=e.elements.arrow&&J(e.elements.arrow),X=Y?"y"===w?Y.clientTop||0:Y.clientLeft||0:0,U=e.modifiersData.offset?e.modifiersData.offset[e.placement][w]:0,z=O[w]+N-U-X,tt=O[w]+q-U,et=St(d?Math.min(M,z):M,_,d?Math.max(P,tt):P)
O[w]=et,k[w]=et-_}if(s){var nt="x"===w?Z:Q,ot="x"===w?K:G,it=O[x],at=St(it+v[nt],it,it-v[ot])
O[x]=at,k[x]=at-it}e.modifiersData[o]=k}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,o=t.name,r=n.elements.arrow,i=n.modifiersData.popperOffsets,a=rt(n.placement),s=ut(a),c=[Q,G].indexOf(a)>=0?"height":"width"
if(r&&i){var u=n.modifiersData[o+"#persistent"].padding,l=V(r),f="y"===s?Z:Q,p="y"===s?K:G,d=n.rects.reference[c]+n.rects.reference[s]-i[s]-n.rects.popper[c],h=i[s]-n.rects.reference[s],m=J(r),v=m?"y"===s?m.clientHeight||0:m.clientWidth||0:0,g=d/2-h/2,y=u[f],b=v-l[c]-u[p],w=v/2-l[c]/2+g,x=St(y,w,b),O=s
n.modifiersData[o]=((e={})[O]=x,e.centerOffset=x-w,e)}},effect:function(t){var e=t.state,n=t.options,o=t.name,r=n.element,i=void 0===r?"[data-popper-arrow]":r,a=n.padding,s=void 0===a?0:a
null!=i&&("string"!=typeof i||(i=e.elements.popper.querySelector(i)))&&yt(e.elements.popper,i)&&(e.elements.arrow=i,e.modifiersData[o+"#persistent"]={padding:Ot("number"!=typeof s?s:$t(s,tt))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,o=e.rects.reference,r=e.rects.popper,i=e.modifiersData.preventOverflow,a=Et(e,{elementContext:"reference"}),s=Et(e,{altBoundary:!0}),c=kt(a,o),u=kt(s,r,i),l=jt(c),f=jt(u)
e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":f})}}]})
function _t(t){return I(t)&&""!==t?"-"!==t.charAt(t.length-1)?"".concat(t,"-"):t:""}function Mt(t){var e=t.options.attachTo||{},n=Object.assign({},e)
if(I(e.element)){try{n.element=document.querySelector(e.element)}catch(t){}n.element||console.error("The element for this Shepherd step was not found ".concat(e.element))}return n}function Pt(t){t.tooltip&&t.tooltip.destroy()
var e=Mt(t),n=e.element,o=function(t,e){var n={modifiers:[{name:"preventOverflow",options:{altAxis:!0}},{name:"focusAfterRender",enabled:!0,phase:"afterWrite",fn:function(){setTimeout((function(){e.el&&e.el.focus()}),300)}}],strategy:"absolute"}
e.isCentered()?n=function(t){var e=[{name:"applyStyles",fn:function(t){var e=t.state
Object.keys(e.elements).forEach((function(t){if("popper"===t){var n=e.attributes[t]||{},o=e.elements[t]
Object.assign(o.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}),Object.keys(n).forEach((function(t){var e=n[t]
!1===e?o.removeAttribute(t):o.setAttribute(t,!0===e?"":e)}))}}))}},{name:"computeStyles",options:{adaptive:!1}}],n={placement:"top",strategy:"fixed",modifiers:[{name:"focusAfterRender",enabled:!0,phase:"afterWrite",fn:function(){setTimeout((function(){t.el&&t.el.focus()}),300)}}]}
return d(d({},n),{},{modifiers:Array.from(new Set([].concat(u(n.modifiers),u(e))))})}(e):n.placement=t.on
var o=e.tour&&e.tour.options&&e.tour.options.defaultStepOptions
return o&&(n=Lt(o,n)),Lt(e.options,n)}(e,t)
return t.isCentered()&&(n=document.body,t.shepherdElementComponent.getElement().classList.add("shepherd-centered")),t.tooltip=It(n,t.el,o),t.target=e.element,o}function At(){var t=Date.now()
return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=(t+16*Math.random())%16|0
return t=Math.floor(t/16),("x"==e?n:3&n|8).toString(16)}))}function Lt(t,e){if(t.popperOptions){var n=Object.assign({},e,t.popperOptions)
if(t.popperOptions.modifiers&&t.popperOptions.modifiers.length>0){var o=t.popperOptions.modifiers.map((function(t){return t.name})),r=e.modifiers.filter((function(t){return!o.includes(t.name)}))
n.modifiers=Array.from(new Set([].concat(u(r),u(t.popperOptions.modifiers))))}return n}return e}function Ct(){}function Dt(t,e){for(var n in e)t[n]=e[n]
return t}function Bt(t){return t()}function Ht(){return Object.create(null)}function Rt(t){t.forEach(Bt)}function Wt(t){return"function"==typeof t}function Ft(t,e){return t!=t?e==e:t!==e||t&&"object"===y(t)||"function"==typeof t}function Nt(t,e){t.appendChild(e)}function qt(t,e,n){t.insertBefore(e,n||null)}function Vt(t){t.parentNode.removeChild(t)}function Yt(t){return document.createElement(t)}function Xt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Ut(t){return document.createTextNode(t)}function zt(){return Ut(" ")}function Jt(t,e,n,o){return t.addEventListener(e,n,o),function(){return t.removeEventListener(e,n,o)}}function Zt(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Kt(t,e){var n=Object.getOwnPropertyDescriptors(t.__proto__)
for(var o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:Zt(t,o,e[o])}function Gt(t){return Array.from(t.childNodes)}function Qt(t,e,n){t.classList[n?"add":"remove"](e)}function te(t){Tt=t}function ee(){if(!Tt)throw new Error("Function called outside component initialization")
return Tt}function ne(t){ee().$$.after_update.push(t)}var oe=[],re=[],ie=[],ae=[],se=Promise.resolve(),ce=!1
function ue(t){ie.push(t)}var le=!1,fe=new Set
function pe(){if(!le){le=!0
do{for(var t=0;t<oe.length;t+=1){var e=oe[t]
te(e),de(e.$$)}for(oe.length=0;re.length;)re.pop()()
for(var n=0;n<ie.length;n+=1){var o=ie[n]
fe.has(o)||(fe.add(o),o())}ie.length=0}while(oe.length)
for(;ae.length;)ae.pop()()
ce=!1,le=!1,fe.clear()}}function de(t){if(null!==t.fragment){t.update(),Rt(t.before_update)
var e=t.dirty
t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ue)}}var he,me=new Set
function ve(){he={r:0,c:[],p:he}}function ge(){he.r||Rt(he.c),he=he.p}function ye(t,e){t&&t.i&&(me.delete(t),t.i(e))}function be(t,e,n,o){if(t&&t.o){if(me.has(t))return
me.add(t),he.c.push((function(){me.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function we(t){t&&t.c()}function xe(t,e,n){var o=t.$$,r=o.fragment,i=o.on_mount,a=o.on_destroy,s=o.after_update
r&&r.m(e,n),ue((function(){var e=i.map(Bt).filter(Wt)
a?a.push.apply(a,u(e)):Rt(e),t.$$.on_mount=[]})),s.forEach(ue)}function Oe(t,e){var n=t.$$
null!==n.fragment&&(Rt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(t,e){-1===t.$$.dirty[0]&&(oe.push(t),ce||(ce=!0,se.then(pe)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ee(t,e,n,o,r,i){var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],s=Tt
te(t)
var c=e.props||{},u=t.$$={fragment:null,ctx:null,props:i,update:Ct,not_equal:r,bound:Ht(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:Ht(),dirty:a},l=!1
if(u.ctx=n?n(t,c,(function(e,n){var o=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n
return u.ctx&&r(u.ctx[e],u.ctx[e]=o)&&(u.bound[e]&&u.bound[e](o),l&&$e(t,e)),n})):[],u.update(),l=!0,Rt(u.before_update),u.fragment=!!o&&o(u.ctx),e.target){if(e.hydrate){var f=Gt(e.target)
u.fragment&&u.fragment.l(f),f.forEach(Vt)}else u.fragment&&u.fragment.c()
e.intro&&ye(t.$$.fragment),xe(t,e.target,e.anchor),pe()}te(s)}var Se=function(){function t(){m(this,t)}return g(t,[{key:"$destroy",value:function(){Oe(this,1),this.$destroy=Ct}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[])
return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(){}}]),t}()
function ke(t){var e,n,o,r
return{c:function(){Zt(e=Yt("button"),"aria-label",n=t[4]?t[4]:null),Zt(e,"class",o="".concat(t[1]||""," shepherd-button ").concat(t[2]?"shepherd-button-secondary":"")),e.disabled=t[5],Zt(e,"tabindex","0")},m:function(n,o,i){qt(n,e,o),e.innerHTML=t[3],i&&r(),r=Jt(e,"click",(function(){Wt(t[0])&&t[0].apply(this,arguments)}))},p:function(r,i){var a=c(i,1)[0]
t=r,8&a&&(e.innerHTML=t[3]),16&a&&n!==(n=t[4]?t[4]:null)&&Zt(e,"aria-label",n),6&a&&o!==(o="".concat(t[1]||""," shepherd-button ").concat(t[2]?"shepherd-button-secondary":""))&&Zt(e,"class",o),32&a&&(e.disabled=t[5])},i:Ct,o:Ct,d:function(t){t&&Vt(e),r()}}}function je(t,e,n){var o,r,i,a,s,c,u=e.config,l=e.step
return t.$set=function(t){"config"in t&&n(6,u=t.config),"step"in t&&n(7,l=t.step)},t.$$.update=function(){192&t.$$.dirty&&(n(0,o=u.action?u.action.bind(l.tour):null),n(1,r=u.classes),n(2,i=u.secondary),n(3,a=u.text),n(4,s=u.label),n(5,c=!!u.disabled&&function(t){return T(t)?t.call(l):t}(u.disabled)))},[o,r,i,a,s,c,u,l]}var Te=function(t){o(n,t)
var e=r(n)
function n(t){var o
return m(this,n),Ee(a(o=e.call(this)),t,je,ke,Ft,{config:6,step:7}),o}return n}(Se)
function Ie(t,e,n){var o=t.slice()
return o[2]=e[n],o}function _e(t){for(var e,n,o=t[1],r=[],i=0;i<o.length;i+=1)r[i]=Me(Ie(t,o,i))
var a=function(t){return be(r[t],1,1,(function(){r[t]=null}))}
return{c:function(){for(var t=0;t<r.length;t+=1)r[t].c()
e=Ut("")},m:function(t,o){for(var i=0;i<r.length;i+=1)r[i].m(t,o)
qt(t,e,o),n=!0},p:function(t,n){if(3&n){var i
for(o=t[1],i=0;i<o.length;i+=1){var s=Ie(t,o,i)
r[i]?(r[i].p(s,n),ye(r[i],1)):(r[i]=Me(s),r[i].c(),ye(r[i],1),r[i].m(e.parentNode,e))}for(ve(),i=o.length;i<r.length;i+=1)a(i)
ge()}},i:function(t){if(!n){for(var e=0;e<o.length;e+=1)ye(r[e])
n=!0}},o:function(t){r=r.filter(Boolean)
for(var e=0;e<r.length;e+=1)be(r[e])
n=!1},d:function(t){!function(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t),t&&Vt(e)}}}function Me(t){var e,n=new Te({props:{config:t[2],step:t[0]}})
return{c:function(){we(n.$$.fragment)},m:function(t,o){xe(n,t,o),e=!0},p:function(t,e){var o={}
2&e&&(o.config=t[2]),1&e&&(o.step=t[0]),n.$set(o)},i:function(t){e||(ye(n.$$.fragment,t),e=!0)},o:function(t){be(n.$$.fragment,t),e=!1},d:function(t){Oe(n,t)}}}function Pe(t){var e,n,o=t[1]&&_e(t)
return{c:function(){e=Yt("footer"),o&&o.c(),Zt(e,"class","shepherd-footer")},m:function(t,r){qt(t,e,r),o&&o.m(e,null),n=!0},p:function(t,n){var r=c(n,1)[0]
t[1]?o?(o.p(t,r),2&r&&ye(o,1)):((o=_e(t)).c(),ye(o,1),o.m(e,null)):o&&(ve(),be(o,1,1,(function(){o=null})),ge())},i:function(t){n||(ye(o),n=!0)},o:function(t){be(o),n=!1},d:function(t){t&&Vt(e),o&&o.d()}}}function Ae(t,e,n){var o,r=e.step
return t.$set=function(t){"step"in t&&n(0,r=t.step)},t.$$.update=function(){1&t.$$.dirty&&n(1,o=r.options.buttons)},[r,o]}var Le=function(t){o(n,t)
var e=r(n)
function n(t){var o
return m(this,n),Ee(a(o=e.call(this)),t,Ae,Pe,Ft,{step:0}),o}return n}(Se)
function Ce(t){var e,n,o,r
return{c:function(){e=Yt("button"),(n=Yt("span")).textContent="×",Zt(n,"aria-hidden","true"),Zt(e,"aria-label",o=t[0].label?t[0].label:"Close Tour"),Zt(e,"class","shepherd-cancel-icon"),Zt(e,"type","button")},m:function(o,i,a){qt(o,e,i),Nt(e,n),a&&r(),r=Jt(e,"click",t[1])},p:function(t,n){1&c(n,1)[0]&&o!==(o=t[0].label?t[0].label:"Close Tour")&&Zt(e,"aria-label",o)},i:Ct,o:Ct,d:function(t){t&&Vt(e),r()}}}function De(t,e,n){var o=e.cancelIcon,r=e.step
return t.$set=function(t){"cancelIcon"in t&&n(0,o=t.cancelIcon),"step"in t&&n(2,r=t.step)},[o,function(t){t.preventDefault(),r.cancel()},r]}var Be=function(t){o(n,t)
var e=r(n)
function n(t){var o
return m(this,n),Ee(a(o=e.call(this)),t,De,Ce,Ft,{cancelIcon:0,step:2}),o}return n}(Se)
function He(t){var e
return{c:function(){Zt(e=Yt("h3"),"id",t[1]),Zt(e,"class","shepherd-title")},m:function(n,o){qt(n,e,o),t[3](e)},p:function(t,n){2&c(n,1)[0]&&Zt(e,"id",t[1])},i:Ct,o:Ct,d:function(n){n&&Vt(e),t[3](null)}}}function Re(t,e,n){var o=e.labelId,r=e.element,i=e.title
return ne((function(){T(i)&&n(2,i=i()),n(0,r.innerHTML=i,r)})),t.$set=function(t){"labelId"in t&&n(1,o=t.labelId),"element"in t&&n(0,r=t.element),"title"in t&&n(2,i=t.title)},[r,o,i,function(t){re[t?"unshift":"push"]((function(){n(0,r=t)}))}]}var We=function(t){o(n,t)
var e=r(n)
function n(t){var o
return m(this,n),Ee(a(o=e.call(this)),t,Re,He,Ft,{labelId:1,element:0,title:2}),o}return n}(Se)
function Fe(t){var e,n=new We({props:{labelId:t[0],title:t[2]}})
return{c:function(){we(n.$$.fragment)},m:function(t,o){xe(n,t,o),e=!0},p:function(t,e){var o={}
1&e&&(o.labelId=t[0]),4&e&&(o.title=t[2]),n.$set(o)},i:function(t){e||(ye(n.$$.fragment,t),e=!0)},o:function(t){be(n.$$.fragment,t),e=!1},d:function(t){Oe(n,t)}}}function Ne(t){var e,n=new Be({props:{cancelIcon:t[3],step:t[1]}})
return{c:function(){we(n.$$.fragment)},m:function(t,o){xe(n,t,o),e=!0},p:function(t,e){var o={}
8&e&&(o.cancelIcon=t[3]),2&e&&(o.step=t[1]),n.$set(o)},i:function(t){e||(ye(n.$$.fragment,t),e=!0)},o:function(t){be(n.$$.fragment,t),e=!1},d:function(t){Oe(n,t)}}}function qe(t){var e,n,o,r=t[2]&&Fe(t),i=t[3]&&t[3].enabled&&Ne(t)
return{c:function(){e=Yt("header"),r&&r.c(),n=zt(),i&&i.c(),Zt(e,"class","shepherd-header")},m:function(t,a){qt(t,e,a),r&&r.m(e,null),Nt(e,n),i&&i.m(e,null),o=!0},p:function(t,o){var a=c(o,1)[0]
t[2]?r?(r.p(t,a),4&a&&ye(r,1)):((r=Fe(t)).c(),ye(r,1),r.m(e,n)):r&&(ve(),be(r,1,1,(function(){r=null})),ge()),t[3]&&t[3].enabled?i?(i.p(t,a),8&a&&ye(i,1)):((i=Ne(t)).c(),ye(i,1),i.m(e,null)):i&&(ve(),be(i,1,1,(function(){i=null})),ge())},i:function(t){o||(ye(r),ye(i),o=!0)},o:function(t){be(r),be(i),o=!1},d:function(t){t&&Vt(e),r&&r.d(),i&&i.d()}}}function Ve(t,e,n){var o,r,i=e.labelId,a=e.step
return t.$set=function(t){"labelId"in t&&n(0,i=t.labelId),"step"in t&&n(1,a=t.step)},t.$$.update=function(){2&t.$$.dirty&&(n(2,o=a.options.title),n(3,r=a.options.cancelIcon))},[i,a,o,r]}var Ye=function(t){o(n,t)
var e=r(n)
function n(t){var o
return m(this,n),Ee(a(o=e.call(this)),t,Ve,qe,Ft,{labelId:0,step:1}),o}return n}(Se)
function Xe(t){var e
return{c:function(){Zt(e=Yt("div"),"class","shepherd-text"),Zt(e,"id",t[1])},m:function(n,o){qt(n,e,o),t[3](e)},p:function(t,n){2&c(n,1)[0]&&Zt(e,"id",t[1])},i:Ct,o:Ct,d:function(n){n&&Vt(e),t[3](null)}}}function Ue(t,e,n){var o=e.descriptionId,r=e.element,i=e.step
return ne((function(){var t=i.options.text
T(t)&&(t=t.call(i)),j(t)?r.appendChild(t):n(0,r.innerHTML=t,r)})),t.$set=function(t){"descriptionId"in t&&n(1,o=t.descriptionId),"element"in t&&n(0,r=t.element),"step"in t&&n(2,i=t.step)},[r,o,i,function(t){re[t?"unshift":"push"]((function(){n(0,r=t)}))}]}var ze=function(t){o(n,t)
var e=r(n)
function n(t){var o
return m(this,n),Ee(a(o=e.call(this)),t,Ue,Xe,Ft,{descriptionId:1,element:0,step:2}),o}return n}(Se)
function Je(t){var e,n=new Ye({props:{labelId:t[1],step:t[2]}})
return{c:function(){we(n.$$.fragment)},m:function(t,o){xe(n,t,o),e=!0},p:function(t,e){var o={}
2&e&&(o.labelId=t[1]),4&e&&(o.step=t[2]),n.$set(o)},i:function(t){e||(ye(n.$$.fragment,t),e=!0)},o:function(t){be(n.$$.fragment,t),e=!1},d:function(t){Oe(n,t)}}}function Ze(t){var e,n=new ze({props:{descriptionId:t[0],step:t[2]}})
return{c:function(){we(n.$$.fragment)},m:function(t,o){xe(n,t,o),e=!0},p:function(t,e){var o={}
1&e&&(o.descriptionId=t[0]),4&e&&(o.step=t[2]),n.$set(o)},i:function(t){e||(ye(n.$$.fragment,t),e=!0)},o:function(t){be(n.$$.fragment,t),e=!1},d:function(t){Oe(n,t)}}}function Ke(t){var e,n=new Le({props:{step:t[2]}})
return{c:function(){we(n.$$.fragment)},m:function(t,o){xe(n,t,o),e=!0},p:function(t,e){var o={}
4&e&&(o.step=t[2]),n.$set(o)},i:function(t){e||(ye(n.$$.fragment,t),e=!0)},o:function(t){be(n.$$.fragment,t),e=!1},d:function(t){Oe(n,t)}}}function Ge(t){var e,n,o,r,i=!_(t[2].options.title)||t[2].options.cancelIcon&&t[2].options.cancelIcon.enabled,a=!_(t[2].options.text),s=Array.isArray(t[2].options.buttons)&&t[2].options.buttons.length,u=i&&Je(t),l=a&&Ze(t),f=s&&Ke(t)
return{c:function(){e=Yt("div"),u&&u.c(),n=zt(),l&&l.c(),o=zt(),f&&f.c(),Zt(e,"class","shepherd-content")},m:function(t,i){qt(t,e,i),u&&u.m(e,null),Nt(e,n),l&&l.m(e,null),Nt(e,o),f&&f.m(e,null),r=!0},p:function(t,r){var p=c(r,1)[0]
4&p&&(i=!_(t[2].options.title)||t[2].options.cancelIcon&&t[2].options.cancelIcon.enabled),i?u?(u.p(t,p),4&p&&ye(u,1)):((u=Je(t)).c(),ye(u,1),u.m(e,n)):u&&(ve(),be(u,1,1,(function(){u=null})),ge()),4&p&&(a=!_(t[2].options.text)),a?l?(l.p(t,p),4&p&&ye(l,1)):((l=Ze(t)).c(),ye(l,1),l.m(e,o)):l&&(ve(),be(l,1,1,(function(){l=null})),ge()),4&p&&(s=Array.isArray(t[2].options.buttons)&&t[2].options.buttons.length),s?f?(f.p(t,p),4&p&&ye(f,1)):((f=Ke(t)).c(),ye(f,1),f.m(e,null)):f&&(ve(),be(f,1,1,(function(){f=null})),ge())},i:function(t){r||(ye(u),ye(l),ye(f),r=!0)},o:function(t){be(u),be(l),be(f),r=!1},d:function(t){t&&Vt(e),u&&u.d(),l&&l.d(),f&&f.d()}}}function Qe(t,e,n){var o=e.descriptionId,r=e.labelId,i=e.step
return t.$set=function(t){"descriptionId"in t&&n(0,o=t.descriptionId),"labelId"in t&&n(1,r=t.labelId),"step"in t&&n(2,i=t.step)},[o,r,i]}var tn=function(t){o(n,t)
var e=r(n)
function n(t){var o
return m(this,n),Ee(a(o=e.call(this)),t,Qe,Ge,Ft,{descriptionId:0,labelId:1,step:2}),o}return n}(Se)
function en(t){var e
return{c:function(){Zt(e=Yt("div"),"class","shepherd-arrow"),Zt(e,"data-popper-arrow","")},m:function(t,n){qt(t,e,n)},d:function(t){t&&Vt(e)}}}function nn(t){for(var e,n,o,r,i=t[4].options.arrow&&t[4].options.attachTo&&t[4].options.attachTo.element&&t[4].options.attachTo.on&&en(),a=new tn({props:{descriptionId:t[2],labelId:t[3],step:t[4]}}),s=[{"aria-describedby":_(t[4].options.text)?null:t[2]},{"aria-labelledby":t[4].options.title?t[3]:null},t[1],{role:"dialog"},{tabindex:"0"}],u={},l=0;l<s.length;l+=1)u=Dt(u,s[l])
return{c:function(){e=Yt("div"),i&&i.c(),n=zt(),we(a.$$.fragment),Kt(e,u),Qt(e,"shepherd-has-cancel-icon",t[5]),Qt(e,"shepherd-has-title",t[6]),Qt(e,"shepherd-element",!0)},m:function(s,c,u){qt(s,e,c),i&&i.m(e,null),Nt(e,n),xe(a,e,null),t[17](e),o=!0,u&&r(),r=Jt(e,"keydown",t[7])},p:function(t,o){var r=c(o,1)[0]
t[4].options.arrow&&t[4].options.attachTo&&t[4].options.attachTo.element&&t[4].options.attachTo.on?i||((i=en()).c(),i.m(e,n)):i&&(i.d(1),i=null)
var u={}
4&r&&(u.descriptionId=t[2]),8&r&&(u.labelId=t[3]),16&r&&(u.step=t[4]),a.$set(u),Kt(e,function(t,e){for(var n={},o={},r={$$scope:1},i=t.length;i--;){var a=t[i],s=e[i]
if(s){for(var c in a)c in s||(o[c]=1)
for(var u in s)r[u]||(n[u]=s[u],r[u]=1)
t[i]=s}else for(var l in a)r[l]=1}for(var f in o)f in n||(n[f]=void 0)
return n}(s,[20&r&&{"aria-describedby":_(t[4].options.text)?null:t[2]},24&r&&{"aria-labelledby":t[4].options.title?t[3]:null},2&r&&t[1],{role:"dialog"},{tabindex:"0"}])),Qt(e,"shepherd-has-cancel-icon",t[5]),Qt(e,"shepherd-has-title",t[6]),Qt(e,"shepherd-element",!0)},i:function(t){o||(ye(a.$$.fragment,t),o=!0)},o:function(t){be(a.$$.fragment,t),o=!1},d:function(n){n&&Vt(e),i&&i.d(),Oe(a),t[17](null),r()}}}function on(t){return t.split(" ").filter((function(t){return!!t.length}))}function rn(t,e,n){var o,r,i,a,s=e.classPrefix,c=e.element,l=e.descriptionId,f=e.firstFocusableElement,p=e.focusableElements,d=e.labelId,m=e.lastFocusableElement,v=e.step,g=e.dataStepId
function y(){b(i),w(i=v.options.classes)}function b(t){if(I(t)){var e,n=on(t)
n.length&&(e=c.classList).remove.apply(e,u(n))}}function w(t){if(I(t)){var e,n=on(t)
n.length&&(e=c.classList).add.apply(e,u(n))}}return a=function(){n(1,g=h({},"data-".concat(s,"shepherd-step-id"),v.id)),n(9,p=c.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]')),n(8,f=p[0]),n(10,m=p[p.length-1])},ee().$$.on_mount.push(a),ne((function(){i!==v.options.classes&&y()})),t.$set=function(t){"classPrefix"in t&&n(11,s=t.classPrefix),"element"in t&&n(0,c=t.element),"descriptionId"in t&&n(2,l=t.descriptionId),"firstFocusableElement"in t&&n(8,f=t.firstFocusableElement),"focusableElements"in t&&n(9,p=t.focusableElements),"labelId"in t&&n(3,d=t.labelId),"lastFocusableElement"in t&&n(10,m=t.lastFocusableElement),"step"in t&&n(4,v=t.step),"dataStepId"in t&&n(1,g=t.dataStepId)},t.$$.update=function(){16&t.$$.dirty&&(n(5,o=v.options&&v.options.cancelIcon&&v.options.cancelIcon.enabled),n(6,r=v.options&&v.options.title))},[c,g,l,d,v,o,r,function(t){var e=v.tour
switch(t.keyCode){case 9:if(0===p.length){t.preventDefault()
break}t.shiftKey?document.activeElement===f&&(t.preventDefault(),m.focus()):document.activeElement===m&&(t.preventDefault(),f.focus())
break
case 27:e.options.exitOnEsc&&v.cancel()
break
case 37:e.options.keyboardNavigation&&e.back()
break
case 39:e.options.keyboardNavigation&&e.next()}},f,p,m,s,function(){return c},i,y,b,w,function(t){re[t?"unshift":"push"]((function(){n(0,c=t)}))}]}var an=function(t){o(n,t)
var e=r(n)
function n(t){var o
return m(this,n),Ee(a(o=e.call(this)),t,rn,nn,Ft,{classPrefix:11,element:0,descriptionId:2,firstFocusableElement:8,focusableElements:9,labelId:3,lastFocusableElement:10,step:4,dataStepId:1,getElement:12}),o}return g(n,[{key:"getElement",get:function(){return this.$$.ctx[12]}}]),n}(Se),sn=function(t,e){return function(t,e){t.exports={polyfill:function(){var t=window,e=document
if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var n,o=t.HTMLElement||t.Element,r={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:o.prototype.scroll||s,scrollIntoView:o.prototype.scrollIntoView},i=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,a=(n=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0)
t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?d.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):r.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==y(arguments[0])?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?r.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==y(arguments[0])?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,e=arguments[0].top
d.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted")
r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!==y(arguments[0])?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var n=p(this),o=n.getBoundingClientRect(),i=this.getBoundingClientRect()
n!==e.body?(d.call(this,n,n.scrollLeft+i.left-o.left,n.scrollTop+i.top-o.top),"fixed"!==t.getComputedStyle(n).position&&t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):t.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(t,e){this.scrollLeft=t,this.scrollTop=e}function c(t){if(null===t||"object"!==y(t)||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0
if("object"===y(t)&&"smooth"===t.behavior)return!1
throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function u(t,e){return"Y"===e?t.clientHeight+a<t.scrollHeight:"X"===e?t.clientWidth+a<t.scrollWidth:void 0}function l(e,n){var o=t.getComputedStyle(e,null)["overflow"+n]
return"auto"===o||"scroll"===o}function f(t){var e=u(t,"Y")&&l(t,"Y"),n=u(t,"X")&&l(t,"X")
return e||n}function p(t){for(;t!==e.body&&!1===f(t);)t=t.parentNode||t.host
return t}function d(n,o,a){var c,u,l,f,p=i()
n===e.body?(c=t,u=t.scrollX||t.pageXOffset,l=t.scrollY||t.pageYOffset,f=r.scroll):(c=n,u=n.scrollLeft,l=n.scrollTop,f=s),function e(n){var o,r,a,s,c=(i()-n.startTime)/468
s=c=c>1?1:c,o=.5*(1-Math.cos(Math.PI*s)),r=n.startX+(n.x-n.startX)*o,a=n.startY+(n.y-n.startY)*o,n.method.call(n.scrollable,r,a),r===n.x&&a===n.y||t.requestAnimationFrame(e.bind(t,n))}({scrollable:c,method:f,startTime:p,startX:u,startY:l,x:o,y:a})}}}}(e={exports:{}}),e.exports}()
sn.polyfill,sn.polyfill()
var cn=function(t){o(n,t)
var e=r(n)
function n(t){var o,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return m(this,n),(o=e.call(this,t,r)).tour=t,o.classPrefix=o.tour.options?_t(o.tour.options.classPrefix):"",o.styles=t.styles,P(a(o)),o._setOptions(r),i(o,a(o))}return g(n,[{key:"cancel",value:function(){this.tour.cancel(),this.trigger("cancel")}},{key:"complete",value:function(){this.tour.complete(),this.trigger("complete")}},{key:"destroy",value:function(){this.tooltip&&(this.tooltip.destroy(),this.tooltip=null),j(this.el)&&this.el.parentNode&&(this.el.parentNode.removeChild(this.el),this.el=null),this.target&&this._updateStepTargetOnHide(),this.trigger("destroy")}},{key:"getTour",value:function(){return this.tour}},{key:"hide",value:function(){this.tour.modal.hide(),this.trigger("before-hide"),this.el&&(this.el.hidden=!0),this.target&&this._updateStepTargetOnHide(),this.trigger("hide")}},{key:"isCentered",value:function(){var t=Mt(this)
return!t.element||!t.on}},{key:"isOpen",value:function(){return Boolean(this.el&&!this.el.hidden)}},{key:"show",value:function(){var t=this
if(T(this.options.beforeShowPromise)){var e=this.options.beforeShowPromise()
if(!_(e))return e.then((function(){return t._show()}))}this._show()}},{key:"updateStepOptions",value:function(t){Object.assign(this.options,t),this.shepherdElementComponent&&this.shepherdElementComponent.$set({step:this})}},{key:"_createTooltipContent",value:function(){var t="".concat(this.id,"-description"),e="".concat(this.id,"-label")
return this.shepherdElementComponent=new an({target:document.body,props:{classPrefix:this.classPrefix,descriptionId:t,labelId:e,step:this,styles:this.styles}}),this.shepherdElementComponent.getElement()}},{key:"_scrollTo",value:function(t){var e=Mt(this).element
T(this.options.scrollToHandler)?this.options.scrollToHandler(e):j(e)&&"function"==typeof e.scrollIntoView&&e.scrollIntoView(t)}},{key:"_getClassOptions",value:function(t){var e=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions,n=t.classes?t.classes:"",o=e&&e.classes?e.classes:"",r=[].concat(u(n.split(" ")),u(o.split(" "))),i=new Set(r)
return Array.from(i).join(" ").trim()}},{key:"_setOptions",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions
n=k({},n||{}),this.options=Object.assign({arrow:!0},n,e)
var o=this.options.when
this.options.classes=this._getClassOptions(e),this.destroy(),this.id=this.options.id||"step-".concat(At()),o&&Object.keys(o).forEach((function(e){t.on(e,o[e],t)}))}},{key:"_setupElements",value:function(){_(this.el)||this.destroy(),this.el=this._createTooltipContent(),this.options.advanceOn&&function(t){var e=t.options.advanceOn||{},n=e.event,o=e.selector
if(!n)return console.error("advanceOn was defined, but no event name was passed.")
var r,i=function(t,e){return function(n){if(e.isOpen()){var o=e.el&&n.currentTarget===e.el;(!_(t)&&n.currentTarget.matches(t)||o)&&e.tour.next()}}}(o,t)
try{r=document.querySelector(o)}catch(t){}if(!_(o)&&!r)return console.error("No element was found for the selector supplied to advanceOn: ".concat(o))
r?(r.addEventListener(n,i),t.on("destroy",(function(){return r.removeEventListener(n,i)}))):(document.body.addEventListener(n,i,!0),t.on("destroy",(function(){return document.body.removeEventListener(n,i,!0)})))}(this),Pt(this)}},{key:"_show",value:function(){var t=this
this.trigger("before-show"),this._setupElements(),this.tour.modal||this.tour._setupModal(),this.tour.modal.setupForStep(this),this._styleTargetElementForStep(this),this.el.hidden=!1,this.options.scrollTo&&setTimeout((function(){t._scrollTo(t.options.scrollTo)})),this.el.hidden=!1
var e=this.shepherdElementComponent.getElement(),n=this.target||document.body
n.classList.add("".concat(this.classPrefix,"shepherd-enabled")),n.classList.add("".concat(this.classPrefix,"shepherd-target")),e.classList.add("shepherd-enabled"),this.trigger("show")}},{key:"_styleTargetElementForStep",value:function(t){var e=t.target
e&&(t.options.highlightClass&&e.classList.add(t.options.highlightClass),!1===t.options.canClickTarget&&e.classList.add("shepherd-target-click-disabled"))}},{key:"_updateStepTargetOnHide",value:function(){this.options.highlightClass&&this.target.classList.remove(this.options.highlightClass),this.target.classList.remove("".concat(this.classPrefix,"shepherd-enabled"),"".concat(this.classPrefix,"shepherd-target"))}}]),n}(M)
function un(t){var e,n,o,r
return{c:function(){e=Xt("svg"),Zt(n=Xt("path"),"d",t[2]),Zt(e,"class",o="".concat(t[1]?"shepherd-modal-is-visible":""," shepherd-modal-overlay-container"))},m:function(o,i,a){qt(o,e,i),Nt(e,n),t[17](e),a&&r(),r=Jt(e,"touchmove",t[3])},p:function(t,r){var i=c(r,1)[0]
4&i&&Zt(n,"d",t[2]),2&i&&o!==(o="".concat(t[1]?"shepherd-modal-is-visible":""," shepherd-modal-overlay-container"))&&Zt(e,"class",o)},i:Ct,o:Ct,d:function(n){n&&Vt(e),t[17](null),r()}}}function ln(t,e){var n=t.getBoundingClientRect(),o=n.y||n.top,r=n.bottom||o+n.height
if(e){var i=e.getBoundingClientRect(),a=i.y||i.top,s=i.bottom||a+i.height
o=Math.max(o,a),r=Math.min(r,s)}return{y:o,height:Math.max(r-o,0)}}function fn(t,e,n){var o,r=e.element,i=e.openingProperties,a=At(),s=!1,c=void 0
function u(){n(4,i={width:0,height:0,x:0,y:0,r:0})}function l(){n(1,s=!1),m()}function f(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
if(t.getBoundingClientRect){var a=ln(t,e),s=a.y,c=a.height,u=t.getBoundingClientRect(),l=u.x,f=u.width,p=u.left
n(4,i={width:f+2*o,height:c+2*o,x:(l||p)-o,y:s-o,r:r})}}function p(){n(1,s=!0)}u()
var d=function(t){t.preventDefault()}
function h(){window.addEventListener("touchmove",d,{passive:!1})}function m(){c&&(cancelAnimationFrame(c),c=void 0),window.removeEventListener("touchmove",d,{passive:!1})}function v(t){var e=t.options,n=e.modalOverlayOpeningPadding,o=e.modalOverlayOpeningRadius
if(t.target){var r=function t(e){if(!e)return null
var n=e instanceof HTMLElement&&window.getComputedStyle(e).overflowY
return"hidden"!==n&&"visible"!==n&&e.scrollHeight>=e.clientHeight?e:t(e.parentElement)}(t.target)
!function e(){c=void 0,f(t.target,r,n,o),c=requestAnimationFrame(e)}(),h()}else u()}return t.$set=function(t){"element"in t&&n(0,r=t.element),"openingProperties"in t&&n(4,i=t.openingProperties)},t.$$.update=function(){var e,r,a,s,c,u,l,f,p,d,h,m
16&t.$$.dirty&&n(2,(r=(e=i).width,a=e.height,c=void 0===(s=e.x)?0:s,l=void 0===(u=e.y)?0:u,p=void 0===(f=e.r)?0:f,h=(d=window).innerWidth,m=d.innerHeight,o="M".concat(h,",").concat(m,"H0V0H").concat(h,"V").concat(m,"ZM").concat(c+p,",").concat(l,"a").concat(p,",").concat(p,",0,0,0-").concat(p,",").concat(p,"V").concat(a+l-p,"a").concat(p,",").concat(p,",0,0,0,").concat(p,",").concat(p,"H").concat(r+c-p,"a").concat(p,",").concat(p,",0,0,0,").concat(p,"-").concat(p,"V").concat(l+p,"a").concat(p,",").concat(p,",0,0,0-").concat(p,"-").concat(p,"Z")))},[r,s,o,function(t){t.stopPropagation()},i,function(){return r},u,l,f,function(t){m(),t.tour.options.useModalOverlay?(v(t),p()):l()},p,c,a,d,h,m,v,function(t){re[t?"unshift":"push"]((function(){n(0,r=t)}))}]}var pn=function(t){o(n,t)
var e=r(n)
function n(t){var o
return m(this,n),Ee(a(o=e.call(this)),t,fn,un,Ft,{element:0,openingProperties:4,getElement:5,closeModalOpening:6,hide:7,positionModalOpening:8,setupForStep:9,show:10}),o}return g(n,[{key:"getElement",get:function(){return this.$$.ctx[5]}},{key:"closeModalOpening",get:function(){return this.$$.ctx[6]}},{key:"hide",get:function(){return this.$$.ctx[7]}},{key:"positionModalOpening",get:function(){return this.$$.ctx[8]}},{key:"setupForStep",get:function(){return this.$$.ctx[9]}},{key:"show",get:function(){return this.$$.ctx[10]}}]),n}(Se),dn=new M,hn=function(t){o(n,t)
var e=r(n)
function n(){var t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
m(this,n),P(a(t=e.call(this,o)))
var r={exitOnEsc:!0,keyboardNavigation:!0}
t.options=Object.assign({},r,o),t.classPrefix=_t(t.options.classPrefix),t.steps=[],t.addSteps(t.options.steps)
var s=["active","cancel","complete","inactive","show","start"]
return s.map((function(e){var n
n=e,t.on(n,(function(e){(e=e||{}).tour=a(t),dn.trigger(n,e)}))})),t._setTourID(),i(t,a(t))}return g(n,[{key:"addStep",value:function(t,e){var n=t
return n instanceof cn?n.tour=this:n=new cn(this,n),_(e)?this.steps.push(n):this.steps.splice(e,0,n),n}},{key:"addSteps",value:function(t){var e=this
return Array.isArray(t)&&t.forEach((function(t){e.addStep(t)})),this}},{key:"back",value:function(){var t=this.steps.indexOf(this.currentStep)
this.show(t-1,!1)}},{key:"cancel",value:function(){if(this.options.confirmCancel){var t=this.options.confirmCancelMessage||"Are you sure you want to stop the tour?"
window.confirm(t)&&this._done("cancel")}else this._done("cancel")}},{key:"complete",value:function(){this._done("complete")}},{key:"getById",value:function(t){return this.steps.find((function(e){return e.id===t}))}},{key:"getCurrentStep",value:function(){return this.currentStep}},{key:"hide",value:function(){var t=this.getCurrentStep()
if(t)return t.hide()}},{key:"isActive",value:function(){return dn.activeTour===this}},{key:"next",value:function(){var t=this.steps.indexOf(this.currentStep)
t===this.steps.length-1?this.complete():this.show(t+1,!0)}},{key:"removeStep",value:function(t){var e=this,n=this.getCurrentStep()
this.steps.some((function(n,o){if(n.id===t)return n.isOpen()&&n.hide(),n.destroy(),e.steps.splice(o,1),!0})),n&&n.id===t&&(this.currentStep=void 0,this.steps.length?this.show(0):this.cancel())}},{key:"show",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=I(t)?this.getById(t):this.steps[t]
if(n){this._updateStateBeforeShow()
var o=T(n.options.showOn)&&!n.options.showOn()
o?this._skipStep(n,e):(this.trigger("show",{step:n,previous:this.currentStep}),this.currentStep=n,n.show())}}},{key:"start",value:function(){this.trigger("start"),this.focusedElBeforeOpen=document.activeElement,this.currentStep=null,this._setupModal(),this._setupActiveTour(),this.next()}},{key:"_done",value:function(t){var e=this.steps.indexOf(this.currentStep)
if(Array.isArray(this.steps)&&this.steps.forEach((function(t){return t.destroy()})),this&&this.steps.forEach((function(t){t.options&&!1===t.options.canClickTarget&&t.options.attachTo&&t.target instanceof HTMLElement&&t.target.classList.remove("shepherd-target-click-disabled")})),this.trigger(t,{index:e}),dn.activeTour=null,this.trigger("inactive",{tour:this}),this.modal&&this.modal.hide(),("cancel"===t||"complete"===t)&&this.modal){var n=document.querySelector(".shepherd-modal-overlay-container")
n&&n.remove()}j(this.focusedElBeforeOpen)&&this.focusedElBeforeOpen.focus()}},{key:"_setupActiveTour",value:function(){this.trigger("active",{tour:this}),dn.activeTour=this}},{key:"_setupModal",value:function(){this.modal=new pn({target:this.options.modalContainer||document.body,props:{classPrefix:this.classPrefix,styles:this.styles}})}},{key:"_skipStep",value:function(t,e){var n=this.steps.indexOf(t),o=e?n+1:n-1
this.show(o,e)}},{key:"_updateStateBeforeShow",value:function(){this.currentStep&&this.currentStep.hide(),this.isActive()||this._setupActiveTour()}},{key:"_setTourID",value:function(){var t=this.options.tourName||"tour"
this.id="".concat(t,"--").concat(At())}}]),n}(M)
Object.assign(dn,{Tour:hn,Step:cn}),e.default=dn}}])
