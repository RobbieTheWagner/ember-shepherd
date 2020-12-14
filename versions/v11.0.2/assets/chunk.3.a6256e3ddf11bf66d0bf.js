(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[3],{31:function(t,e,n){"use strict"
function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function")
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()
return function(){var n,o=c(t)
if(e){var r=c(this).constructor
n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments)
return a(this,n)}}function a(t,e){return!e||"object"!==v(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return t}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,i=void 0
try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return n}}(t,e)||f(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||f(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){if(t){if("string"==typeof t)return p(t,e)
var n=Object.prototype.toString.call(t).slice(8,-1)
return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}function p(t,e){(null==e||e>t.length)&&(e=t.length)
for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n]
return o}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(t,e,n){return e&&h(t.prototype,e),n&&h(t,n),t}function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*! shepherd.js 8.1.0 */n.r(e)
var g=function(t){return function(t){return!!t&&"object"===v(t)}(t)&&!function(t){var e=Object.prototype.toString.call(t)
return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===y}(t)}(t)},y="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103
function b(t,e){return!1!==e.clone&&e.isMergeableObject(t)?$((n=t,Array.isArray(n)?[]:{}),t,e):t
var n}function w(t,e,n){return t.concat(e).map((function(t){return b(t,n)}))}function x(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return t.propertyIsEnumerable(e)})):[]}(t))}function O(t,e){try{return e in t}catch(t){return!1}}function $(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||w,n.isMergeableObject=n.isMergeableObject||g,n.cloneUnlessOtherwiseSpecified=b
var o=Array.isArray(e)
return o===Array.isArray(t)?o?n.arrayMerge(t,e,n):function(t,e,n){var o={}
return n.isMergeableObject(t)&&x(t).forEach((function(e){o[e]=b(t[e],n)})),x(e).forEach((function(r){(function(t,e){return O(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,r)||(O(t,r)&&n.isMergeableObject(e[r])?o[r]=function(t,e){if(!e.customMerge)return $
var n=e.customMerge(t)
return"function"==typeof n?n:$}(r,n)(t[r],e[r],n):o[r]=b(e[r],n))})),o}(t,e,n):b(e,n)}$.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array")
return t.reduce((function(t,n){return $(t,n,e)}),{})}
var E=$
function k(t){return t instanceof HTMLElement}function j(t){return"function"==typeof t}function S(t){return"string"==typeof t}function T(t){return void 0===t}var _=function(){function t(){d(this,t)}return m(t,[{key:"on",value:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
return T(this.bindings)&&(this.bindings={}),T(this.bindings[t])&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:o}),this}},{key:"once",value:function(t,e,n){return this.on(t,e,n,!0)}},{key:"off",value:function(t,e){var n=this
return T(this.bindings)||T(this.bindings[t])||(T(e)?delete this.bindings[t]:this.bindings[t].forEach((function(o,r){o.handler===e&&n.bindings[t].splice(r,1)}))),this}},{key:"trigger",value:function(t){for(var e=this,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r]
return!T(this.bindings)&&this.bindings[t]&&this.bindings[t].forEach((function(n,r){var i=n.ctx,a=n.handler,s=n.once,c=i||e
a.apply(c,o),s&&e.bindings[t].splice(r,1)})),this}}]),t}()
function I(t){for(var e=Object.getOwnPropertyNames(t.constructor.prototype),n=0;n<e.length;n++){var o=e[n],r=t[o]
"constructor"!==o&&"function"==typeof r&&(t[o]=r.bind(t))}return t}var M="top",A="bottom",P="right",L="left",C=[M,A,P,L],D=C.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),B=[].concat(C,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]),H=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]
function R(t){return t?(t.nodeName||"").toLowerCase():null}function N(t){if("[object Window]"!==t.toString()){var e=t.ownerDocument
return e&&e.defaultView||window}return t}function W(t){return t instanceof N(t).Element||t instanceof Element}function F(t){return t instanceof N(t).HTMLElement||t instanceof HTMLElement}function q(t){return t.split("-")[0]}function V(t){return{x:t.offsetLeft,y:t.offsetTop,width:t.offsetWidth,height:t.offsetHeight}}function Y(t,e){var n=e.getRootNode&&e.getRootNode(),o=Boolean(n&&n.host)
if(t.contains(e))return!0
if(o){var r=e
do{if(r&&t.isSameNode(r))return!0
r=r.parentNode||r.host}while(r)}return!1}function X(t){return N(t).getComputedStyle(t)}function U(t){return["table","td","th"].indexOf(R(t))>=0}function z(t){return((W(t)?t.ownerDocument:t.document)||window.document).documentElement}function J(t){return"html"===R(t)?t:t.assignedSlot||t.parentNode||t.host||z(t)}function Z(t){if(!F(t)||"fixed"===X(t).position)return null
var e=t.offsetParent
if(e){var n=z(e)
if("body"===R(e)&&"static"===X(e).position&&"static"!==X(n).position)return n}return e}function K(t){for(var e=N(t),n=Z(t);n&&U(n)&&"static"===X(n).position;)n=Z(n)
return n&&"body"===R(n)&&"static"===X(n).position?e:n||function(t){for(var e=J(t);F(e)&&["html","body"].indexOf(R(e))<0;){var n=X(e)
if("none"!==n.transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange)return e
e=e.parentNode}return null}(t)||e}function G(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Q(t,e,n){return Math.max(t,Math.min(e,n))}function tt(t){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),t)}function et(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}var nt={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function ot(t){var e,n=t.popper,o=t.popperRect,r=t.placement,i=t.offsets,a=t.position,s=t.gpuAcceleration,c=t.adaptive,l=function(t){var e=t.x,n=t.y,o=window.devicePixelRatio||1
return{x:Math.round(e*o)/o||0,y:Math.round(n*o)/o||0}}(i),u=l.x,f=l.y,p=i.hasOwnProperty("x"),d=i.hasOwnProperty("y"),h=L,m=M,v=window
if(c){var g=K(n)
g===N(n)&&(g=z(n)),r===M&&(m=A,f-=g.clientHeight-o.height,f*=s?1:-1),r===L&&(h=P,u-=g.clientWidth-o.width,u*=s?1:-1)}var y,b=Object.assign({position:a},c&&nt)
return s?Object.assign(Object.assign({},b),{},((y={})[m]=d?"0":"",y[h]=p?"0":"",y.transform=(v.devicePixelRatio||1)<2?"translate("+u+"px, "+f+"px)":"translate3d("+u+"px, "+f+"px, 0)",y)):Object.assign(Object.assign({},b),{},((e={})[m]=d?f+"px":"",e[h]=p?u+"px":"",e.transform="",e))}var rt={passive:!0},it={left:"right",right:"left",bottom:"top",top:"bottom"}
function at(t){return t.replace(/left|right|bottom|top/g,(function(t){return it[t]}))}var st={start:"end",end:"start"}
function ct(t){return t.replace(/start|end/g,(function(t){return st[t]}))}function lt(t){var e=t.getBoundingClientRect()
return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function ut(t){var e=N(t)
return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ft(t){return lt(z(t)).left+ut(t).scrollLeft}function pt(t){var e=X(t),n=e.overflow,o=e.overflowX,r=e.overflowY
return/auto|scroll|overlay|hidden/.test(n+r+o)}function dt(t,e){void 0===e&&(e=[])
var n=function t(e){return["html","body","#document"].indexOf(R(e))>=0?e.ownerDocument.body:F(e)&&pt(e)?e:t(J(e))}(t),o="body"===R(n),r=N(n),i=o?[r].concat(r.visualViewport||[],pt(n)?n:[]):n,a=e.concat(i)
return o?a:a.concat(dt(J(i)))}function ht(t){return Object.assign(Object.assign({},t),{},{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function mt(t,e){return"viewport"===e?ht(function(t){var e=N(t),n=z(t),o=e.visualViewport,r=n.clientWidth,i=n.clientHeight,a=0,s=0
return o&&(r=o.width,i=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=o.offsetLeft,s=o.offsetTop)),{width:r,height:i,x:a+ft(t),y:s}}(t)):F(e)?function(t){var e=lt(t)
return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):ht(function(t){var e=z(t),n=ut(t),o=t.ownerDocument.body,r=Math.max(e.scrollWidth,e.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=Math.max(e.scrollHeight,e.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-n.scrollLeft+ft(t),s=-n.scrollTop
return"rtl"===X(o||e).direction&&(a+=Math.max(e.clientWidth,o?o.clientWidth:0)-r),{width:r,height:i,x:a,y:s}}(z(t)))}function vt(t){return t.split("-")[1]}function gt(t){var e,n=t.reference,o=t.element,r=t.placement,i=r?q(r):null,a=r?vt(r):null,s=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2
switch(i){case M:e={x:s,y:n.y-o.height}
break
case A:e={x:s,y:n.y+n.height}
break
case P:e={x:n.x+n.width,y:c}
break
case L:e={x:n.x-o.width,y:c}
break
default:e={x:n.x,y:n.y}}var l=i?G(i):null
if(null!=l){var u="y"===l?"height":"width"
switch(a){case"start":e[l]=Math.floor(e[l])-Math.floor(n[u]/2-o[u]/2)
break
case"end":e[l]=Math.floor(e[l])+Math.ceil(n[u]/2-o[u]/2)}}return e}function yt(t,e){void 0===e&&(e={})
var n=e,o=n.placement,r=void 0===o?t.placement:o,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,c=void 0===s?"viewport":s,l=n.elementContext,u=void 0===l?"popper":l,f=n.altBoundary,p=void 0!==f&&f,d=n.padding,h=void 0===d?0:d,m=tt("number"!=typeof h?h:et(h,C)),v="popper"===u?"reference":"popper",g=t.elements.reference,y=t.rects.popper,b=t.elements[p?v:u],w=function(t,e,n){var o="clippingParents"===e?function(t){var e=dt(J(t)),n=["absolute","fixed"].indexOf(X(t).position)>=0&&F(t)?K(t):t
return W(n)?e.filter((function(t){return W(t)&&Y(t,n)&&"body"!==R(t)})):[]}(t):[].concat(e),r=[].concat(o,[n]),i=r[0],a=r.reduce((function(e,n){var o=mt(t,n)
return e.top=Math.max(o.top,e.top),e.right=Math.min(o.right,e.right),e.bottom=Math.min(o.bottom,e.bottom),e.left=Math.max(o.left,e.left),e}),mt(t,i))
return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(W(b)?b:b.contextElement||z(t.elements.popper),a,c),x=lt(g),O=gt({reference:x,element:y,strategy:"absolute",placement:r}),$=ht(Object.assign(Object.assign({},y),O)),E="popper"===u?$:x,k={top:w.top-E.top+m.top,bottom:E.bottom-w.bottom+m.bottom,left:w.left-E.left+m.left,right:E.right-w.right+m.right},j=t.modifiersData.offset
if("popper"===u&&j){var S=j[r]
Object.keys(k).forEach((function(t){var e=[P,A].indexOf(t)>=0?1:-1,n=[M,A].indexOf(t)>=0?"y":"x"
k[t]+=S[n]*e}))}return k}function bt(t,e){void 0===e&&(e={})
var n=e,o=n.placement,r=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?B:c,u=vt(o),f=u?s?D:D.filter((function(t){return vt(t)===u})):C,p=f.filter((function(t){return l.indexOf(t)>=0}))
0===p.length&&(p=f)
var d=p.reduce((function(e,n){return e[n]=yt(t,{placement:n,boundary:r,rootBoundary:i,padding:a})[q(n)],e}),{})
return Object.keys(d).sort((function(t,e){return d[t]-d[e]}))}function wt(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function xt(t){return[M,P,A,L].some((function(e){return t[e]>=0}))}function Ot(t,e,n){void 0===n&&(n=!1)
var o,r=z(e),i=lt(t),a=F(e),s={scrollLeft:0,scrollTop:0},c={x:0,y:0}
return(a||!a&&!n)&&(("body"!==R(e)||pt(r))&&(s=(o=e)!==N(o)&&F(o)?function(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}(o):ut(o)),F(e)?((c=lt(e)).x+=e.clientLeft,c.y+=e.clientTop):r&&(c.x=ft(r))),{x:i.left+s.scrollLeft-c.x,y:i.top+s.scrollTop-c.y,width:i.width,height:i.height}}var $t={placement:"bottom",modifiers:[],strategy:"absolute"}
function Et(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}var kt,jt=function(t){void 0===t&&(t={})
var e=t,n=e.defaultModifiers,o=void 0===n?[]:n,r=e.defaultOptions,i=void 0===r?$t:r
return function(t,e,n){void 0===n&&(n=i)
var r,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},$t),i),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},c=[],l=!1,u={state:s,setOptions:function(n){f(),s.options=Object.assign(Object.assign(Object.assign({},i),s.options),n),s.scrollParents={reference:W(t)?dt(t):t.contextElement?dt(t.contextElement):[],popper:dt(e)}
var r,a,l=function(t){var e=function(t){var e=new Map,n=new Set,o=[]
return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||function t(r){n.add(r.name),[].concat(r.requires||[],r.requiresIfExists||[]).forEach((function(o){if(!n.has(o)){var r=e.get(o)
r&&t(r)}})),o.push(r)}(t)})),o}(t)
return H.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}((r=[].concat(o,s.options.modifiers),a=r.reduce((function(t,e){var n=t[e.name]
return t[e.name]=n?Object.assign(Object.assign(Object.assign({},n),e),{},{options:Object.assign(Object.assign({},n.options),e.options),data:Object.assign(Object.assign({},n.data),e.data)}):e,t}),{}),Object.keys(a).map((function(t){return a[t]}))))
return s.orderedModifiers=l.filter((function(t){return t.enabled})),s.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,o=void 0===n?{}:n,r=t.effect
if("function"==typeof r){var i=r({state:s,name:e,instance:u,options:o})
c.push(i||function(){})}})),u.update()},forceUpdate:function(){if(!l){var t=s.elements,e=t.reference,n=t.popper
if(Et(e,n)){s.rects={reference:Ot(e,K(n),"fixed"===s.options.strategy),popper:V(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(t){return s.modifiersData[t.name]=Object.assign({},t.data)}))
for(var o=0;o<s.orderedModifiers.length;o++)if(!0!==s.reset){var r=s.orderedModifiers[o],i=r.fn,a=r.options,c=void 0===a?{}:a,f=r.name
"function"==typeof i&&(s=i({state:s,options:c,name:f,instance:u})||s)}else s.reset=!1,o=-1}}},update:(r=function(){return new Promise((function(t){u.forceUpdate(),t(s)}))},function(){return a||(a=new Promise((function(t){Promise.resolve().then((function(){a=void 0,t(r())}))}))),a}),destroy:function(){f(),l=!0}}
if(!Et(t,e))return u
function f(){c.forEach((function(t){return t()})),c=[]}return u.setOptions(n).then((function(t){!l&&n.onFirstUpdate&&n.onFirstUpdate(t)})),u}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,o=t.options,r=o.scroll,i=void 0===r||r,a=o.resize,s=void 0===a||a,c=N(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper)
return i&&l.forEach((function(t){t.addEventListener("scroll",n.update,rt)})),s&&c.addEventListener("resize",n.update,rt),function(){i&&l.forEach((function(t){t.removeEventListener("scroll",n.update,rt)})),s&&c.removeEventListener("resize",n.update,rt)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name
e.modifiersData[n]=gt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,a=void 0===i||i,s={placement:q(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r}
null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign(Object.assign({},e.styles.popper),ot(Object.assign(Object.assign({},s),{},{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign(Object.assign({},e.styles.arrow),ot(Object.assign(Object.assign({},s),{},{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1})))),e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{},{"data-popper-placement":e.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state
Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},o=e.attributes[t]||{},r=e.elements[t]
F(r)&&R(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(t){var e=o[t]
!1===e?r.removeAttribute(t):r.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(e.elements.popper.style,n.popper),e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var o=e.elements[t],r=e.attributes[t]||{},i=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{})
F(o)&&R(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(t){o.removeAttribute(t)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,o=t.name,r=n.offset,i=void 0===r?[0,0]:r,a=B.reduce((function(t,n){return t[n]=function(t,e,n){var o=q(t),r=[L,M].indexOf(o)>=0?-1:1,i="function"==typeof n?n(Object.assign(Object.assign({},e),{},{placement:t})):n,a=i[0],s=i[1]
return a=a||0,s=(s||0)*r,[L,P].indexOf(o)>=0?{x:s,y:a}:{x:a,y:s}}(n,e.rects,i),t}),{}),s=a[e.placement],c=s.x,l=s.y
null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[o]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name
if(!e.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,l=n.padding,u=n.boundary,f=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=e.options.placement,g=q(v),y=c||(g!==v&&h?function(t){if("auto"===q(t))return[]
var e=at(t)
return[ct(t),e,ct(e)]}(v):[at(v)]),b=[v].concat(y).reduce((function(t,n){return t.concat("auto"===q(n)?bt(e,{placement:n,boundary:u,rootBoundary:f,padding:l,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),w=e.rects.reference,x=e.rects.popper,O=new Map,$=!0,E=b[0],k=0;k<b.length;k++){var j=b[k],S=q(j),T="start"===vt(j),_=[M,A].indexOf(S)>=0,I=_?"width":"height",C=yt(e,{placement:j,boundary:u,rootBoundary:f,altBoundary:p,padding:l}),D=_?T?P:L:T?A:M
w[I]>x[I]&&(D=at(D))
var B=at(D),H=[]
if(i&&H.push(C[S]<=0),s&&H.push(C[D]<=0,C[B]<=0),H.every((function(t){return t}))){E=j,$=!1
break}O.set(j,H)}if($)for(var R=function(t){var e=b.find((function(e){var n=O.get(e)
if(n)return n.slice(0,t).every((function(t){return t}))}))
if(e)return E=e,"break"},N=h?3:1;N>0&&"break"!==R(N);N--);e.placement!==E&&(e.modifiersData[o]._skip=!0,e.placement=E,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name,r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,f=n.padding,p=n.tether,d=void 0===p||p,h=n.tetherOffset,m=void 0===h?0:h,v=yt(e,{boundary:c,rootBoundary:l,padding:f,altBoundary:u}),g=q(e.placement),y=vt(e.placement),b=!y,w=G(g),x="x"===w?"y":"x",O=e.modifiersData.popperOffsets,$=e.rects.reference,E=e.rects.popper,k="function"==typeof m?m(Object.assign(Object.assign({},e.rects),{},{placement:e.placement})):m,j={x:0,y:0}
if(O){if(i){var S="y"===w?M:L,T="y"===w?A:P,_="y"===w?"height":"width",I=O[w],C=O[w]+v[S],D=O[w]-v[T],B=d?-E[_]/2:0,H="start"===y?$[_]:E[_],R="start"===y?-E[_]:-$[_],N=e.elements.arrow,W=d&&N?V(N):{width:0,height:0},F=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Y=F[S],X=F[T],U=Q(0,$[_],W[_]),z=b?$[_]/2-B-U-Y-k:H-U-Y-k,J=b?-$[_]/2+B+U+X+k:R+U+X+k,Z=e.elements.arrow&&K(e.elements.arrow),tt=Z?"y"===w?Z.clientTop||0:Z.clientLeft||0:0,et=e.modifiersData.offset?e.modifiersData.offset[e.placement][w]:0,nt=O[w]+z-et-tt,ot=O[w]+J-et,rt=Q(d?Math.min(C,nt):C,I,d?Math.max(D,ot):D)
O[w]=rt,j[w]=rt-I}if(s){var it="x"===w?M:L,at="x"===w?A:P,st=O[x],ct=Q(st+v[it],st,st-v[at])
O[x]=ct,j[x]=ct-st}e.modifiersData[o]=j}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,o=t.name,r=n.elements.arrow,i=n.modifiersData.popperOffsets,a=q(n.placement),s=G(a),c=[L,P].indexOf(a)>=0?"height":"width"
if(r&&i){var l=n.modifiersData[o+"#persistent"].padding,u=V(r),f="y"===s?M:L,p="y"===s?A:P,d=n.rects.reference[c]+n.rects.reference[s]-i[s]-n.rects.popper[c],h=i[s]-n.rects.reference[s],m=K(r),v=m?"y"===s?m.clientHeight||0:m.clientWidth||0:0,g=d/2-h/2,y=l[f],b=v-u[c]-l[p],w=v/2-u[c]/2+g,x=Q(y,w,b),O=s
n.modifiersData[o]=((e={})[O]=x,e.centerOffset=x-w,e)}},effect:function(t){var e=t.state,n=t.options,o=t.name,r=n.element,i=void 0===r?"[data-popper-arrow]":r,a=n.padding,s=void 0===a?0:a
null!=i&&("string"!=typeof i||(i=e.elements.popper.querySelector(i)))&&Y(e.elements.popper,i)&&(e.elements.arrow=i,e.modifiersData[o+"#persistent"]={padding:tt("number"!=typeof s?s:et(s,C))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,o=e.rects.reference,r=e.rects.popper,i=e.modifiersData.preventOverflow,a=yt(e,{elementContext:"reference"}),s=yt(e,{altBoundary:!0}),c=wt(a,o),l=wt(s,r,i),u=xt(c),f=xt(l)
e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:f},e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{},{"data-popper-reference-hidden":u,"data-popper-escaped":f})}}]})
function St(){return(St=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function Tt(t){return S(t)&&""!==t?"-"!==t.charAt(t.length-1)?"".concat(t,"-"):t:""}function _t(t){var e=t.options.attachTo||{},n=Object.assign({},e)
if(S(e.element)){try{n.element=document.querySelector(e.element)}catch(t){}n.element||console.error("The element for this Shepherd step was not found ".concat(e.element))}return n}function It(t){t.tooltip&&t.tooltip.destroy()
var e=_t(t),n=e.element,o=function(t,e){var n={modifiers:[{name:"preventOverflow",options:{altAxis:!0}},{name:"focusAfterRender",enabled:!0,phase:"afterWrite",fn:function(){setTimeout((function(){e.el&&e.el.focus()}),300)}}],strategy:"absolute"}
e.isCentered()?n=function(t){var e=[{name:"applyStyles",fn:function(t){var e=t.state
Object.keys(e.elements).forEach((function(t){if("popper"===t){var n=e.attributes[t]||{},o=e.elements[t]
Object.assign(o.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}),Object.keys(n).forEach((function(t){var e=n[t]
!1===e?o.removeAttribute(t):o.setAttribute(t,!0===e?"":e)}))}}))}},{name:"computeStyles",options:{adaptive:!1}}],n={placement:"top",strategy:"fixed",modifiers:[{name:"focusAfterRender",enabled:!0,phase:"afterWrite",fn:function(){setTimeout((function(){t.el&&t.el.focus()}),300)}}]}
return St({},n,{modifiers:Array.from(new Set([].concat(u(n.modifiers),u(e))))})}(e):n.placement=t.on
var o=e.tour&&e.tour.options&&e.tour.options.defaultStepOptions
return o&&(n=At(o,n)),At(e.options,n)}(e,t)
return t.isCentered()&&(n=document.body,t.shepherdElementComponent.getElement().classList.add("shepherd-centered")),t.tooltip=jt(n,t.el,o),t.target=e.element,o}function Mt(){var t=Date.now()
return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=(t+16*Math.random())%16|0
return t=Math.floor(t/16),("x"==e?n:3&n|8).toString(16)}))}function At(t,e){if(t.popperOptions){var n=Object.assign({},e,t.popperOptions)
if(t.popperOptions.modifiers&&t.popperOptions.modifiers.length>0){var o=t.popperOptions.modifiers.map((function(t){return t.name})),r=e.modifiers.filter((function(t){return!o.includes(t.name)}))
n.modifiers=Array.from(new Set([].concat(u(r),u(t.popperOptions.modifiers))))}return n}return e}function Pt(){}function Lt(t,e){for(var n in e)t[n]=e[n]
return t}function Ct(t){return t()}function Dt(){return Object.create(null)}function Bt(t){t.forEach(Ct)}function Ht(t){return"function"==typeof t}function Rt(t,e){return t!=t?e==e:t!==e||t&&"object"===v(t)||"function"==typeof t}function Nt(t,e){t.appendChild(e)}function Wt(t,e,n){t.insertBefore(e,n||null)}function Ft(t){t.parentNode.removeChild(t)}function qt(t){return document.createElement(t)}function Vt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Yt(t){return document.createTextNode(t)}function Xt(){return Yt(" ")}function Ut(t,e,n,o){return t.addEventListener(e,n,o),function(){return t.removeEventListener(e,n,o)}}function zt(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Jt(t,e){var n=Object.getOwnPropertyDescriptors(t.__proto__)
for(var o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:zt(t,o,e[o])}function Zt(t){return Array.from(t.childNodes)}function Kt(t,e,n){t.classList[n?"add":"remove"](e)}function Gt(t){kt=t}function Qt(){if(!kt)throw new Error("Function called outside component initialization")
return kt}function te(t){Qt().$$.after_update.push(t)}var ee=[],ne=[],oe=[],re=[],ie=Promise.resolve(),ae=!1
function se(t){oe.push(t)}var ce=!1,le=new Set
function ue(){if(!ce){ce=!0
do{for(var t=0;t<ee.length;t+=1){var e=ee[t]
Gt(e),fe(e.$$)}for(Gt(null),ee.length=0;ne.length;)ne.pop()()
for(var n=0;n<oe.length;n+=1){var o=oe[n]
le.has(o)||(le.add(o),o())}oe.length=0}while(ee.length)
for(;re.length;)re.pop()()
ae=!1,ce=!1,le.clear()}}function fe(t){if(null!==t.fragment){t.update(),Bt(t.before_update)
var e=t.dirty
t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(se)}}var pe,de=new Set
function he(){pe={r:0,c:[],p:pe}}function me(){pe.r||Bt(pe.c),pe=pe.p}function ve(t,e){t&&t.i&&(de.delete(t),t.i(e))}function ge(t,e,n,o){if(t&&t.o){if(de.has(t))return
de.add(t),pe.c.push((function(){de.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function ye(t){t&&t.c()}function be(t,e,n){var o=t.$$,r=o.fragment,i=o.on_mount,a=o.on_destroy,s=o.after_update
r&&r.m(e,n),se((function(){var e=i.map(Ct).filter(Ht)
a?a.push.apply(a,u(e)):Bt(e),t.$$.on_mount=[]})),s.forEach(se)}function we(t,e){var n=t.$$
null!==n.fragment&&(Bt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xe(t,e){-1===t.$$.dirty[0]&&(ee.push(t),ae||(ae=!0,ie.then(ue)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Oe(t,e,n,o,r,i){var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],s=kt
Gt(t)
var c=e.props||{},l=t.$$={fragment:null,ctx:null,props:i,update:Pt,not_equal:r,bound:Dt(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:Dt(),dirty:a,skip_bound:!1},u=!1
if(l.ctx=n?n(t,c,(function(e,n){var o=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n
return l.ctx&&r(l.ctx[e],l.ctx[e]=o)&&(!l.skip_bound&&l.bound[e]&&l.bound[e](o),u&&xe(t,e)),n})):[],l.update(),u=!0,Bt(l.before_update),l.fragment=!!o&&o(l.ctx),e.target){if(e.hydrate){var f=Zt(e.target)
l.fragment&&l.fragment.l(f),f.forEach(Ft)}else l.fragment&&l.fragment.c()
e.intro&&ve(t.$$.fragment),be(t,e.target,e.anchor),ue()}Gt(s)}var $e=function(){function t(){d(this,t)}return m(t,[{key:"$destroy",value:function(){we(this,1),this.$destroy=Pt}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[])
return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e
this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}]),t}()
function Ee(t){var e,n,o,r,i
return{c:function(){zt(e=qt("button"),"aria-label",n=t[3]?t[3]:null),zt(e,"class",o="".concat(t[1]||""," shepherd-button ").concat(t[4]?"shepherd-button-secondary":"")),e.disabled=t[2],zt(e,"tabindex","0")},m:function(n,o){Wt(n,e,o),e.innerHTML=t[5],r||(i=Ut(e,"click",(function(){Ht(t[0])&&t[0].apply(this,arguments)})),r=!0)},p:function(r,i){var a=l(i,1)[0]
t=r,32&a&&(e.innerHTML=t[5]),8&a&&n!==(n=t[3]?t[3]:null)&&zt(e,"aria-label",n),18&a&&o!==(o="".concat(t[1]||""," shepherd-button ").concat(t[4]?"shepherd-button-secondary":""))&&zt(e,"class",o),4&a&&(e.disabled=t[2])},i:Pt,o:Pt,d:function(t){t&&Ft(e),r=!1,i()}}}function ke(t,e,n){var o,r,i,a,s,c,l=e.config,u=e.step
return t.$$set=function(t){"config"in t&&n(6,l=t.config),"step"in t&&n(7,u=t.step)},t.$$.update=function(){192&t.$$.dirty&&(n(0,o=l.action?l.action.bind(u.tour):null),n(1,r=l.classes),n(2,i=!!l.disabled&&function(t){return j(t)?t.call(u):t}(l.disabled)),n(3,a=l.label),n(4,s=l.secondary),n(5,c=l.text))},[o,r,i,a,s,c,l,u]}var je=function(t){o(n,t)
var e=i(n)
function n(t){var o
return d(this,n),Oe(s(o=e.call(this)),t,ke,Ee,Rt,{config:6,step:7}),o}return n}($e)
function Se(t,e,n){var o=t.slice()
return o[2]=e[n],o}function Te(t){for(var e,n,o=t[1],r=[],i=0;i<o.length;i+=1)r[i]=_e(Se(t,o,i))
var a=function(t){return ge(r[t],1,1,(function(){r[t]=null}))}
return{c:function(){for(var t=0;t<r.length;t+=1)r[t].c()
e=Yt("")},m:function(t,o){for(var i=0;i<r.length;i+=1)r[i].m(t,o)
Wt(t,e,o),n=!0},p:function(t,n){if(3&n){var i
for(o=t[1],i=0;i<o.length;i+=1){var s=Se(t,o,i)
r[i]?(r[i].p(s,n),ve(r[i],1)):(r[i]=_e(s),r[i].c(),ve(r[i],1),r[i].m(e.parentNode,e))}for(he(),i=o.length;i<r.length;i+=1)a(i)
me()}},i:function(t){if(!n){for(var e=0;e<o.length;e+=1)ve(r[e])
n=!0}},o:function(t){r=r.filter(Boolean)
for(var e=0;e<r.length;e+=1)ge(r[e])
n=!1},d:function(t){!function(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t),t&&Ft(e)}}}function _e(t){var e,n
return e=new je({props:{config:t[2],step:t[0]}}),{c:function(){ye(e.$$.fragment)},m:function(t,o){be(e,t,o),n=!0},p:function(t,n){var o={}
2&n&&(o.config=t[2]),1&n&&(o.step=t[0]),e.$set(o)},i:function(t){n||(ve(e.$$.fragment,t),n=!0)},o:function(t){ge(e.$$.fragment,t),n=!1},d:function(t){we(e,t)}}}function Ie(t){var e,n,o=t[1]&&Te(t)
return{c:function(){e=qt("footer"),o&&o.c(),zt(e,"class","shepherd-footer")},m:function(t,r){Wt(t,e,r),o&&o.m(e,null),n=!0},p:function(t,n){var r=l(n,1)[0]
t[1]?o?(o.p(t,r),2&r&&ve(o,1)):((o=Te(t)).c(),ve(o,1),o.m(e,null)):o&&(he(),ge(o,1,1,(function(){o=null})),me())},i:function(t){n||(ve(o),n=!0)},o:function(t){ge(o),n=!1},d:function(t){t&&Ft(e),o&&o.d()}}}function Me(t,e,n){var o,r=e.step
return t.$$set=function(t){"step"in t&&n(0,r=t.step)},t.$$.update=function(){1&t.$$.dirty&&n(1,o=r.options.buttons)},[r,o]}var Ae=function(t){o(n,t)
var e=i(n)
function n(t){var o
return d(this,n),Oe(s(o=e.call(this)),t,Me,Ie,Rt,{step:0}),o}return n}($e)
function Pe(t){var e,n,o,r,i
return{c:function(){e=qt("button"),(n=qt("span")).textContent="×",zt(n,"aria-hidden","true"),zt(e,"aria-label",o=t[0].label?t[0].label:"Close Tour"),zt(e,"class","shepherd-cancel-icon"),zt(e,"type","button")},m:function(o,a){Wt(o,e,a),Nt(e,n),r||(i=Ut(e,"click",t[1]),r=!0)},p:function(t,n){1&l(n,1)[0]&&o!==(o=t[0].label?t[0].label:"Close Tour")&&zt(e,"aria-label",o)},i:Pt,o:Pt,d:function(t){t&&Ft(e),r=!1,i()}}}function Le(t,e,n){var o=e.cancelIcon,r=e.step
return t.$$set=function(t){"cancelIcon"in t&&n(0,o=t.cancelIcon),"step"in t&&n(2,r=t.step)},[o,function(t){t.preventDefault(),r.cancel()},r]}var Ce=function(t){o(n,t)
var e=i(n)
function n(t){var o
return d(this,n),Oe(s(o=e.call(this)),t,Le,Pe,Rt,{cancelIcon:0,step:2}),o}return n}($e)
function De(t){var e
return{c:function(){zt(e=qt("h3"),"id",t[1]),zt(e,"class","shepherd-title")},m:function(n,o){Wt(n,e,o),t[3](e)},p:function(t,n){2&l(n,1)[0]&&zt(e,"id",t[1])},i:Pt,o:Pt,d:function(n){n&&Ft(e),t[3](null)}}}function Be(t,e,n){var o=e.labelId,r=e.element,i=e.title
return te((function(){j(i)&&n(2,i=i()),n(0,r.innerHTML=i,r)})),t.$$set=function(t){"labelId"in t&&n(1,o=t.labelId),"element"in t&&n(0,r=t.element),"title"in t&&n(2,i=t.title)},[r,o,i,function(t){ne[t?"unshift":"push"]((function(){n(0,r=t)}))}]}var He=function(t){o(n,t)
var e=i(n)
function n(t){var o
return d(this,n),Oe(s(o=e.call(this)),t,Be,De,Rt,{labelId:1,element:0,title:2}),o}return n}($e)
function Re(t){var e,n
return e=new He({props:{labelId:t[0],title:t[2]}}),{c:function(){ye(e.$$.fragment)},m:function(t,o){be(e,t,o),n=!0},p:function(t,n){var o={}
1&n&&(o.labelId=t[0]),4&n&&(o.title=t[2]),e.$set(o)},i:function(t){n||(ve(e.$$.fragment,t),n=!0)},o:function(t){ge(e.$$.fragment,t),n=!1},d:function(t){we(e,t)}}}function Ne(t){var e,n
return e=new Ce({props:{cancelIcon:t[3],step:t[1]}}),{c:function(){ye(e.$$.fragment)},m:function(t,o){be(e,t,o),n=!0},p:function(t,n){var o={}
8&n&&(o.cancelIcon=t[3]),2&n&&(o.step=t[1]),e.$set(o)},i:function(t){n||(ve(e.$$.fragment,t),n=!0)},o:function(t){ge(e.$$.fragment,t),n=!1},d:function(t){we(e,t)}}}function We(t){var e,n,o,r=t[2]&&Re(t),i=t[3]&&t[3].enabled&&Ne(t)
return{c:function(){e=qt("header"),r&&r.c(),n=Xt(),i&&i.c(),zt(e,"class","shepherd-header")},m:function(t,a){Wt(t,e,a),r&&r.m(e,null),Nt(e,n),i&&i.m(e,null),o=!0},p:function(t,o){var a=l(o,1)[0]
t[2]?r?(r.p(t,a),4&a&&ve(r,1)):((r=Re(t)).c(),ve(r,1),r.m(e,n)):r&&(he(),ge(r,1,1,(function(){r=null})),me()),t[3]&&t[3].enabled?i?(i.p(t,a),8&a&&ve(i,1)):((i=Ne(t)).c(),ve(i,1),i.m(e,null)):i&&(he(),ge(i,1,1,(function(){i=null})),me())},i:function(t){o||(ve(r),ve(i),o=!0)},o:function(t){ge(r),ge(i),o=!1},d:function(t){t&&Ft(e),r&&r.d(),i&&i.d()}}}function Fe(t,e,n){var o,r,i=e.labelId,a=e.step
return t.$$set=function(t){"labelId"in t&&n(0,i=t.labelId),"step"in t&&n(1,a=t.step)},t.$$.update=function(){2&t.$$.dirty&&(n(2,o=a.options.title),n(3,r=a.options.cancelIcon))},[i,a,o,r]}var qe=function(t){o(n,t)
var e=i(n)
function n(t){var o
return d(this,n),Oe(s(o=e.call(this)),t,Fe,We,Rt,{labelId:0,step:1}),o}return n}($e)
function Ve(t){var e
return{c:function(){zt(e=qt("div"),"class","shepherd-text"),zt(e,"id",t[1])},m:function(n,o){Wt(n,e,o),t[3](e)},p:function(t,n){2&l(n,1)[0]&&zt(e,"id",t[1])},i:Pt,o:Pt,d:function(n){n&&Ft(e),t[3](null)}}}function Ye(t,e,n){var o=e.descriptionId,r=e.element,i=e.step
return te((function(){var t=i.options.text
j(t)&&(t=t.call(i)),k(t)?r.appendChild(t):n(0,r.innerHTML=t,r)})),t.$$set=function(t){"descriptionId"in t&&n(1,o=t.descriptionId),"element"in t&&n(0,r=t.element),"step"in t&&n(2,i=t.step)},[r,o,i,function(t){ne[t?"unshift":"push"]((function(){n(0,r=t)}))}]}var Xe=function(t){o(n,t)
var e=i(n)
function n(t){var o
return d(this,n),Oe(s(o=e.call(this)),t,Ye,Ve,Rt,{descriptionId:1,element:0,step:2}),o}return n}($e)
function Ue(t){var e,n
return e=new qe({props:{labelId:t[1],step:t[2]}}),{c:function(){ye(e.$$.fragment)},m:function(t,o){be(e,t,o),n=!0},p:function(t,n){var o={}
2&n&&(o.labelId=t[1]),4&n&&(o.step=t[2]),e.$set(o)},i:function(t){n||(ve(e.$$.fragment,t),n=!0)},o:function(t){ge(e.$$.fragment,t),n=!1},d:function(t){we(e,t)}}}function ze(t){var e,n
return e=new Xe({props:{descriptionId:t[0],step:t[2]}}),{c:function(){ye(e.$$.fragment)},m:function(t,o){be(e,t,o),n=!0},p:function(t,n){var o={}
1&n&&(o.descriptionId=t[0]),4&n&&(o.step=t[2]),e.$set(o)},i:function(t){n||(ve(e.$$.fragment,t),n=!0)},o:function(t){ge(e.$$.fragment,t),n=!1},d:function(t){we(e,t)}}}function Je(t){var e,n
return e=new Ae({props:{step:t[2]}}),{c:function(){ye(e.$$.fragment)},m:function(t,o){be(e,t,o),n=!0},p:function(t,n){var o={}
4&n&&(o.step=t[2]),e.$set(o)},i:function(t){n||(ve(e.$$.fragment,t),n=!0)},o:function(t){ge(e.$$.fragment,t),n=!1},d:function(t){we(e,t)}}}function Ze(t){var e,n,o,r,i=!T(t[2].options.title)||t[2].options.cancelIcon&&t[2].options.cancelIcon.enabled,a=!T(t[2].options.text),s=Array.isArray(t[2].options.buttons)&&t[2].options.buttons.length,c=i&&Ue(t),u=a&&ze(t),f=s&&Je(t)
return{c:function(){e=qt("div"),c&&c.c(),n=Xt(),u&&u.c(),o=Xt(),f&&f.c(),zt(e,"class","shepherd-content")},m:function(t,i){Wt(t,e,i),c&&c.m(e,null),Nt(e,n),u&&u.m(e,null),Nt(e,o),f&&f.m(e,null),r=!0},p:function(t,r){var p=l(r,1)[0]
4&p&&(i=!T(t[2].options.title)||t[2].options.cancelIcon&&t[2].options.cancelIcon.enabled),i?c?(c.p(t,p),4&p&&ve(c,1)):((c=Ue(t)).c(),ve(c,1),c.m(e,n)):c&&(he(),ge(c,1,1,(function(){c=null})),me()),4&p&&(a=!T(t[2].options.text)),a?u?(u.p(t,p),4&p&&ve(u,1)):((u=ze(t)).c(),ve(u,1),u.m(e,o)):u&&(he(),ge(u,1,1,(function(){u=null})),me()),4&p&&(s=Array.isArray(t[2].options.buttons)&&t[2].options.buttons.length),s?f?(f.p(t,p),4&p&&ve(f,1)):((f=Je(t)).c(),ve(f,1),f.m(e,null)):f&&(he(),ge(f,1,1,(function(){f=null})),me())},i:function(t){r||(ve(c),ve(u),ve(f),r=!0)},o:function(t){ge(c),ge(u),ge(f),r=!1},d:function(t){t&&Ft(e),c&&c.d(),u&&u.d(),f&&f.d()}}}function Ke(t,e,n){var o=e.descriptionId,r=e.labelId,i=e.step
return t.$$set=function(t){"descriptionId"in t&&n(0,o=t.descriptionId),"labelId"in t&&n(1,r=t.labelId),"step"in t&&n(2,i=t.step)},[o,r,i]}var Ge=function(t){o(n,t)
var e=i(n)
function n(t){var o
return d(this,n),Oe(s(o=e.call(this)),t,Ke,Ze,Rt,{descriptionId:0,labelId:1,step:2}),o}return n}($e)
function Qe(t){var e
return{c:function(){zt(e=qt("div"),"class","shepherd-arrow"),zt(e,"data-popper-arrow","")},m:function(t,n){Wt(t,e,n)},d:function(t){t&&Ft(e)}}}function tn(t){var e,n,o,r,i,a,s,c,u=t[4].options.arrow&&t[4].options.attachTo&&t[4].options.attachTo.element&&t[4].options.attachTo.on&&Qe()
o=new Ge({props:{descriptionId:t[2],labelId:t[3],step:t[4]}})
for(var f=[{"aria-describedby":r=T(t[4].options.text)?null:t[2]},{"aria-labelledby":i=t[4].options.title?t[3]:null},t[1],{role:"dialog"},{tabindex:"0"}],p={},d=0;d<f.length;d+=1)p=Lt(p,f[d])
return{c:function(){e=qt("div"),u&&u.c(),n=Xt(),ye(o.$$.fragment),Jt(e,p),Kt(e,"shepherd-has-cancel-icon",t[5]),Kt(e,"shepherd-has-title",t[6]),Kt(e,"shepherd-element",!0)},m:function(r,i){Wt(r,e,i),u&&u.m(e,null),Nt(e,n),be(o,e,null),t[13](e),a=!0,s||(c=Ut(e,"keydown",t[7]),s=!0)},p:function(t,s){var c=l(s,1)[0]
t[4].options.arrow&&t[4].options.attachTo&&t[4].options.attachTo.element&&t[4].options.attachTo.on?u||((u=Qe()).c(),u.m(e,n)):u&&(u.d(1),u=null)
var d={}
4&c&&(d.descriptionId=t[2]),8&c&&(d.labelId=t[3]),16&c&&(d.step=t[4]),o.$set(d),Jt(e,p=function(t,e){for(var n={},o={},r={$$scope:1},i=t.length;i--;){var a=t[i],s=e[i]
if(s){for(var c in a)c in s||(o[c]=1)
for(var l in s)r[l]||(n[l]=s[l],r[l]=1)
t[i]=s}else for(var u in a)r[u]=1}for(var f in o)f in n||(n[f]=void 0)
return n}(f,[(!a||20&c&&r!==(r=T(t[4].options.text)?null:t[2]))&&{"aria-describedby":r},(!a||24&c&&i!==(i=t[4].options.title?t[3]:null))&&{"aria-labelledby":i},2&c&&t[1],{role:"dialog"},{tabindex:"0"}])),Kt(e,"shepherd-has-cancel-icon",t[5]),Kt(e,"shepherd-has-title",t[6]),Kt(e,"shepherd-element",!0)},i:function(t){a||(ve(o.$$.fragment,t),a=!0)},o:function(t){ge(o.$$.fragment,t),a=!1},d:function(n){n&&Ft(e),u&&u.d(),we(o),t[13](null),s=!1,c()}}}function en(t){return t.split(" ").filter((function(t){return!!t.length}))}function nn(t,e,n){var o,r,i,a,s=e.classPrefix,c=e.element,l=e.descriptionId,f=e.firstFocusableElement,p=e.focusableElements,d=e.labelId,h=e.lastFocusableElement,m=e.step,v=e.dataStepId
return a=function(){var t,e,o
n(1,(t={},e="data-".concat(s,"shepherd-step-id"),o=m.id,e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,v=t)),n(9,p=c.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]')),n(8,f=p[0]),n(10,h=p[p.length-1])},Qt().$$.on_mount.push(a),te((function(){i!==m.options.classes&&(function(t){if(S(t)){var e,n=en(t)
n.length&&(e=c.classList).remove.apply(e,u(n))}}(i),function(t){if(S(t)){var e,n=en(t)
n.length&&(e=c.classList).add.apply(e,u(n))}}(i=m.options.classes))})),t.$$set=function(t){"classPrefix"in t&&n(11,s=t.classPrefix),"element"in t&&n(0,c=t.element),"descriptionId"in t&&n(2,l=t.descriptionId),"firstFocusableElement"in t&&n(8,f=t.firstFocusableElement),"focusableElements"in t&&n(9,p=t.focusableElements),"labelId"in t&&n(3,d=t.labelId),"lastFocusableElement"in t&&n(10,h=t.lastFocusableElement),"step"in t&&n(4,m=t.step),"dataStepId"in t&&n(1,v=t.dataStepId)},t.$$.update=function(){16&t.$$.dirty&&(n(5,o=m.options&&m.options.cancelIcon&&m.options.cancelIcon.enabled),n(6,r=m.options&&m.options.title))},[c,v,l,d,m,o,r,function(t){var e=m.tour
switch(t.keyCode){case 9:if(0===p.length){t.preventDefault()
break}t.shiftKey?(document.activeElement===f||document.activeElement.classList.contains("shepherd-element"))&&(t.preventDefault(),h.focus()):document.activeElement===h&&(t.preventDefault(),f.focus())
break
case 27:e.options.exitOnEsc&&m.cancel()
break
case 37:e.options.keyboardNavigation&&e.back()
break
case 39:e.options.keyboardNavigation&&e.next()}},f,p,h,s,function(){return c},function(t){ne[t?"unshift":"push"]((function(){n(0,c=t)}))}]}var on=function(t){o(n,t)
var e=i(n)
function n(t){var o
return d(this,n),Oe(s(o=e.call(this)),t,nn,tn,Rt,{classPrefix:11,element:0,descriptionId:2,firstFocusableElement:8,focusableElements:9,labelId:3,lastFocusableElement:10,step:4,dataStepId:1,getElement:12}),o}return m(n,[{key:"getElement",get:function(){return this.$$.ctx[12]}}]),n}($e),rn=function(t,e){return function(t,e){t.exports={polyfill:function(){var t=window,e=document
if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var n,o=t.HTMLElement||t.Element,r={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:o.prototype.scroll||s,scrollIntoView:o.prototype.scrollIntoView},i=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,a=(n=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0)
t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?h.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):r.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==v(arguments[0])?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?r.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==v(arguments[0])?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,e=arguments[0].top
h.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted")
r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!==v(arguments[0])?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var n=p(this),o=n.getBoundingClientRect(),i=this.getBoundingClientRect()
n!==e.body?(h.call(this,n,n.scrollLeft+i.left-o.left,n.scrollTop+i.top-o.top),"fixed"!==t.getComputedStyle(n).position&&t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):t.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(t,e){this.scrollLeft=t,this.scrollTop=e}function c(t){if(null===t||"object"!==v(t)||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0
if("object"===v(t)&&"smooth"===t.behavior)return!1
throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function l(t,e){return"Y"===e?t.clientHeight+a<t.scrollHeight:"X"===e?t.clientWidth+a<t.scrollWidth:void 0}function u(e,n){var o=t.getComputedStyle(e,null)["overflow"+n]
return"auto"===o||"scroll"===o}function f(t){var e=l(t,"Y")&&u(t,"Y"),n=l(t,"X")&&u(t,"X")
return e||n}function p(t){for(;t!==e.body&&!1===f(t);)t=t.parentNode||t.host
return t}function d(e){var n,o,r,a,s=(i()-e.startTime)/468
a=s=s>1?1:s,n=.5*(1-Math.cos(Math.PI*a)),o=e.startX+(e.x-e.startX)*n,r=e.startY+(e.y-e.startY)*n,e.method.call(e.scrollable,o,r),o===e.x&&r===e.y||t.requestAnimationFrame(d.bind(t,e))}function h(n,o,a){var c,l,u,f,p=i()
n===e.body?(c=t,l=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,f=r.scroll):(c=n,l=n.scrollLeft,u=n.scrollTop,f=s),d({scrollable:c,method:f,startTime:p,startX:l,startY:u,x:o,y:a})}}}}(e={exports:{}}),e.exports}()
rn.polyfill,rn.polyfill()
var an=function(t){o(n,t)
var e=i(n)
function n(t){var o,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return d(this,n),(o=e.call(this,t,r)).tour=t,o.classPrefix=o.tour.options?Tt(o.tour.options.classPrefix):"",o.styles=t.styles,I(s(o)),o._setOptions(r),a(o,s(o))}return m(n,[{key:"cancel",value:function(){this.tour.cancel(),this.trigger("cancel")}},{key:"complete",value:function(){this.tour.complete(),this.trigger("complete")}},{key:"destroy",value:function(){this.tooltip&&(this.tooltip.destroy(),this.tooltip=null),k(this.el)&&this.el.parentNode&&(this.el.parentNode.removeChild(this.el),this.el=null),this._updateStepTargetOnHide(),this.trigger("destroy")}},{key:"getTour",value:function(){return this.tour}},{key:"hide",value:function(){this.tour.modal.hide(),this.trigger("before-hide"),this.el&&(this.el.hidden=!0),this._updateStepTargetOnHide(),this.trigger("hide")}},{key:"isCentered",value:function(){var t=_t(this)
return!t.element||!t.on}},{key:"isOpen",value:function(){return Boolean(this.el&&!this.el.hidden)}},{key:"show",value:function(){var t=this
if(j(this.options.beforeShowPromise)){var e=this.options.beforeShowPromise()
if(!T(e))return e.then((function(){return t._show()}))}this._show()}},{key:"updateStepOptions",value:function(t){Object.assign(this.options,t),this.shepherdElementComponent&&this.shepherdElementComponent.$set({step:this})}},{key:"getElement",value:function(){return this.el}},{key:"getTarget",value:function(){return this.target}},{key:"_createTooltipContent",value:function(){var t="".concat(this.id,"-description"),e="".concat(this.id,"-label")
return this.shepherdElementComponent=new on({target:this.tour.options.stepsContainer||document.body,props:{classPrefix:this.classPrefix,descriptionId:t,labelId:e,step:this,styles:this.styles}}),this.shepherdElementComponent.getElement()}},{key:"_scrollTo",value:function(t){var e=_t(this).element
j(this.options.scrollToHandler)?this.options.scrollToHandler(e):e instanceof Element&&"function"==typeof e.scrollIntoView&&e.scrollIntoView(t)}},{key:"_getClassOptions",value:function(t){var e=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions,n=t.classes?t.classes:"",o=e&&e.classes?e.classes:"",r=[].concat(u(n.split(" ")),u(o.split(" "))),i=new Set(r)
return Array.from(i).join(" ").trim()}},{key:"_setOptions",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions
n=E({},n||{}),this.options=Object.assign({arrow:!0},n,e)
var o=this.options.when
this.options.classes=this._getClassOptions(e),this.destroy(),this.id=this.options.id||"step-".concat(Mt()),o&&Object.keys(o).forEach((function(e){t.on(e,o[e],t)}))}},{key:"_setupElements",value:function(){T(this.el)||this.destroy(),this.el=this._createTooltipContent(),this.options.advanceOn&&function(t){var e=t.options.advanceOn||{},n=e.event,o=e.selector
if(!n)return console.error("advanceOn was defined, but no event name was passed.")
var r,i=function(t,e){return function(n){if(e.isOpen()){var o=e.el&&n.currentTarget===e.el;(!T(t)&&n.currentTarget.matches(t)||o)&&e.tour.next()}}}(o,t)
try{r=document.querySelector(o)}catch(t){}if(!T(o)&&!r)return console.error("No element was found for the selector supplied to advanceOn: ".concat(o))
r?(r.addEventListener(n,i),t.on("destroy",(function(){return r.removeEventListener(n,i)}))):(document.body.addEventListener(n,i,!0),t.on("destroy",(function(){return document.body.removeEventListener(n,i,!0)})))}(this),It(this)}},{key:"_show",value:function(){var t=this
this.trigger("before-show"),this._setupElements(),this.tour.modal||this.tour._setupModal(),this.tour.modal.setupForStep(this),this._styleTargetElementForStep(this),this.el.hidden=!1,this.options.scrollTo&&setTimeout((function(){t._scrollTo(t.options.scrollTo)})),this.el.hidden=!1
var e=this.shepherdElementComponent.getElement(),n=this.target||document.body
n.classList.add("".concat(this.classPrefix,"shepherd-enabled")),n.classList.add("".concat(this.classPrefix,"shepherd-target")),e.classList.add("shepherd-enabled"),this.trigger("show")}},{key:"_styleTargetElementForStep",value:function(t){var e=t.target
e&&(t.options.highlightClass&&e.classList.add(t.options.highlightClass),!1===t.options.canClickTarget&&e.classList.add("shepherd-target-click-disabled"))}},{key:"_updateStepTargetOnHide",value:function(){var t=this.target||document.body
this.options.highlightClass&&t.classList.remove(this.options.highlightClass),t.classList.remove("".concat(this.classPrefix,"shepherd-enabled"),"".concat(this.classPrefix,"shepherd-target"))}}]),n}(_)
function sn(t){var e,n,o,r,i
return{c:function(){e=Vt("svg"),zt(n=Vt("path"),"d",t[2]),zt(e,"class",o="".concat(t[1]?"shepherd-modal-is-visible":""," shepherd-modal-overlay-container"))},m:function(o,a){Wt(o,e,a),Nt(e,n),t[11](e),r||(i=Ut(e,"touchmove",t[3]),r=!0)},p:function(t,r){var i=l(r,1)[0]
4&i&&zt(n,"d",t[2]),2&i&&o!==(o="".concat(t[1]?"shepherd-modal-is-visible":""," shepherd-modal-overlay-container"))&&zt(e,"class",o)},i:Pt,o:Pt,d:function(n){n&&Ft(e),t[11](null),r=!1,i()}}}function cn(t,e){var n=t.getBoundingClientRect(),o=n.y||n.top,r=n.bottom||o+n.height
if(e){var i=e.getBoundingClientRect(),a=i.y||i.top,s=i.bottom||a+i.height
o=Math.max(o,a),r=Math.min(r,s)}return{y:o,height:Math.max(r-o,0)}}function ln(t,e,n){var o,r=e.element,i=e.openingProperties,a=(Mt(),!1),s=void 0
function c(){n(4,i={width:0,height:0,x:0,y:0,r:0})}function l(){n(1,a=!1),d()}function u(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
if(t.getBoundingClientRect){var a=cn(t,e),s=a.y,c=a.height,l=t.getBoundingClientRect(),u=l.x,f=l.width,p=l.left
n(4,i={width:f+2*o,height:c+2*o,x:(u||p)-o,y:s-o,r:r})}}function f(){n(1,a=!0)}c()
var p=function(t){t.preventDefault()}
function d(){s&&(cancelAnimationFrame(s),s=void 0),window.removeEventListener("touchmove",p,{passive:!1})}return t.$$set=function(t){"element"in t&&n(0,r=t.element),"openingProperties"in t&&n(4,i=t.openingProperties)},t.$$.update=function(){var e,r,a,s,c,l,u,f,p,d,h,m
16&t.$$.dirty&&n(2,(r=(e=i).width,a=e.height,c=void 0===(s=e.x)?0:s,u=void 0===(l=e.y)?0:l,p=void 0===(f=e.r)?0:f,h=(d=window).innerWidth,m=d.innerHeight,o="M".concat(h,",").concat(m,"H0V0H").concat(h,"V").concat(m,"ZM").concat(c+p,",").concat(u,"a").concat(p,",").concat(p,",0,0,0-").concat(p,",").concat(p,"V").concat(a+u-p,"a").concat(p,",").concat(p,",0,0,0,").concat(p,",").concat(p,"H").concat(r+c-p,"a").concat(p,",").concat(p,",0,0,0,").concat(p,"-").concat(p,"V").concat(u+p,"a").concat(p,",").concat(p,",0,0,0-").concat(p,"-").concat(p,"Z")))},[r,a,o,function(t){t.stopPropagation()},i,function(){return r},c,l,u,function(t){d(),t.tour.options.useModalOverlay?(function(t){var e=t.options,n=e.modalOverlayOpeningPadding,o=e.modalOverlayOpeningRadius
if(t.target){var r=function t(e){if(!e)return null
var n=e instanceof HTMLElement&&window.getComputedStyle(e).overflowY
return"hidden"!==n&&"visible"!==n&&e.scrollHeight>=e.clientHeight?e:t(e.parentElement)}(t.target)
!function e(){s=void 0,u(t.target,r,n,o),s=requestAnimationFrame(e)}(),window.addEventListener("touchmove",p,{passive:!1})}else c()}(t),f()):l()},f,function(t){ne[t?"unshift":"push"]((function(){n(0,r=t)}))}]}var un=function(t){o(n,t)
var e=i(n)
function n(t){var o
return d(this,n),Oe(s(o=e.call(this)),t,ln,sn,Rt,{element:0,openingProperties:4,getElement:5,closeModalOpening:6,hide:7,positionModalOpening:8,setupForStep:9,show:10}),o}return m(n,[{key:"getElement",get:function(){return this.$$.ctx[5]}},{key:"closeModalOpening",get:function(){return this.$$.ctx[6]}},{key:"hide",get:function(){return this.$$.ctx[7]}},{key:"positionModalOpening",get:function(){return this.$$.ctx[8]}},{key:"setupForStep",get:function(){return this.$$.ctx[9]}},{key:"show",get:function(){return this.$$.ctx[10]}}]),n}($e),fn=new _,pn=function(t){o(n,t)
var e=i(n)
function n(){var t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
d(this,n),I(s(t=e.call(this,o)))
var r={exitOnEsc:!0,keyboardNavigation:!0}
t.options=Object.assign({},r,o),t.classPrefix=Tt(t.options.classPrefix),t.steps=[],t.addSteps(t.options.steps)
var i=["active","cancel","complete","inactive","show","start"]
return i.map((function(e){var n
n=e,t.on(n,(function(e){(e=e||{}).tour=s(t),fn.trigger(n,e)}))})),t._setTourID(),a(t,s(t))}return m(n,[{key:"addStep",value:function(t,e){var n=t
return n instanceof an?n.tour=this:n=new an(this,n),T(e)?this.steps.push(n):this.steps.splice(e,0,n),n}},{key:"addSteps",value:function(t){var e=this
return Array.isArray(t)&&t.forEach((function(t){e.addStep(t)})),this}},{key:"back",value:function(){var t=this.steps.indexOf(this.currentStep)
this.show(t-1,!1)}},{key:"cancel",value:function(){if(this.options.confirmCancel){var t=this.options.confirmCancelMessage||"Are you sure you want to stop the tour?"
window.confirm(t)&&this._done("cancel")}else this._done("cancel")}},{key:"complete",value:function(){this._done("complete")}},{key:"getById",value:function(t){return this.steps.find((function(e){return e.id===t}))}},{key:"getCurrentStep",value:function(){return this.currentStep}},{key:"hide",value:function(){var t=this.getCurrentStep()
if(t)return t.hide()}},{key:"isActive",value:function(){return fn.activeTour===this}},{key:"next",value:function(){var t=this.steps.indexOf(this.currentStep)
t===this.steps.length-1?this.complete():this.show(t+1,!0)}},{key:"removeStep",value:function(t){var e=this,n=this.getCurrentStep()
this.steps.some((function(n,o){if(n.id===t)return n.isOpen()&&n.hide(),n.destroy(),e.steps.splice(o,1),!0})),n&&n.id===t&&(this.currentStep=void 0,this.steps.length?this.show(0):this.cancel())}},{key:"show",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=S(t)?this.getById(t):this.steps[t]
if(n){this._updateStateBeforeShow()
var o=j(n.options.showOn)&&!n.options.showOn()
o?this._skipStep(n,e):(this.trigger("show",{step:n,previous:this.currentStep}),this.currentStep=n,n.show())}}},{key:"start",value:function(){this.trigger("start"),this.focusedElBeforeOpen=document.activeElement,this.currentStep=null,this._setupModal(),this._setupActiveTour(),this.next()}},{key:"_done",value:function(t){var e=this.steps.indexOf(this.currentStep)
if(Array.isArray(this.steps)&&this.steps.forEach((function(t){return t.destroy()})),this&&this.steps.forEach((function(t){t.options&&!1===t.options.canClickTarget&&t.options.attachTo&&t.target instanceof HTMLElement&&t.target.classList.remove("shepherd-target-click-disabled")})),this.trigger(t,{index:e}),fn.activeTour=null,this.trigger("inactive",{tour:this}),this.modal&&this.modal.hide(),("cancel"===t||"complete"===t)&&this.modal){var n=document.querySelector(".shepherd-modal-overlay-container")
n&&n.remove()}k(this.focusedElBeforeOpen)&&this.focusedElBeforeOpen.focus()}},{key:"_setupActiveTour",value:function(){this.trigger("active",{tour:this}),fn.activeTour=this}},{key:"_setupModal",value:function(){this.modal=new un({target:this.options.modalContainer||document.body,props:{classPrefix:this.classPrefix,styles:this.styles}})}},{key:"_skipStep",value:function(t,e){var n=this.steps.indexOf(t),o=e?n+1:n-1
this.show(o,e)}},{key:"_updateStateBeforeShow",value:function(){this.currentStep&&this.currentStep.hide(),this.isActive()||this._setupActiveTour()}},{key:"_setTourID",value:function(){var t=this.options.tourName||"tour"
this.id="".concat(t,"--").concat(Mt())}}]),n}(_)
Object.assign(fn,{Tour:pn,Step:an}),e.default=fn}}])
