(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[3],{20:function(t,e,n){"use strict"
function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*! shepherd.js 7.0.2 */function r(t,e){for(var n=0;n<e.length;n++){var o=e[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function f(t,e,n){return(f=l()?Reflect.construct:function(t,e,n){var o=[null]
o.push.apply(o,e)
var r=new(Function.bind.apply(t,o))
return n&&u(r,n.prototype),r}).apply(null,arguments)}function p(t){var e="function"==typeof Map?new Map:void 0
return(p=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t
var n
if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function")
if(void 0!==e){if(e.has(t))return e.get(t)
e.set(t,o)}function o(){return f(t,arguments,c(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),u(o,t)})(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return t}function h(t){return t instanceof HTMLElement}function m(t){return"function"==typeof t}function v(t){return"string"==typeof t}function g(t){return void 0===t}n.r(e)
var b=function(){function t(){}var e=t.prototype
return e.on=function(t,e,n,o){return void 0===o&&(o=!1),g(this.bindings)&&(this.bindings={}),g(this.bindings[t])&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:o}),this},e.once=function(t,e,n){return this.on(t,e,n,!0)},e.off=function(t,e){var n=this
return g(this.bindings)||g(this.bindings[t])||(g(e)?delete this.bindings[t]:this.bindings[t].forEach((function(o,r){o.handler===e&&n.bindings[t].splice(r,1)}))),this},e.trigger=function(t){for(var e=this,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r]
return!g(this.bindings)&&this.bindings[t]&&this.bindings[t].forEach((function(n,r){var i=n.ctx,s=n.handler,a=n.once,c=i||e
s.apply(c,o),a&&e.bindings[t].splice(r,1)})),this},t}()
function y(t){for(var e=Object.getOwnPropertyNames(t.constructor.prototype),n=0;n<e.length;n++){var o=e[n],r=t[o]
"constructor"!==o&&"function"==typeof r&&(t[o]=r.bind(t))}return t}function x(t){var e=t.getBoundingClientRect()
return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function w(t){if("[object Window]"!==t.toString()){var e=t.ownerDocument
return e?e.defaultView:window}return t}function O(t){var e=w(t)
return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function $(t){return t instanceof w(t).Element}function E(t){return t instanceof w(t).HTMLElement}function S(t){return t?(t.nodeName||"").toLowerCase():null}function _(t){return($(t)?t.ownerDocument:t.document).documentElement}function T(t){return x(_(t)).left+O(t).scrollLeft}function I(t,e,n){var o
void 0===n&&(n=!1)
var r,i=x(t),s={scrollLeft:0,scrollTop:0},a={x:0,y:0}
return n||("body"!==S(e)&&(s=(r=e)!==w(r)&&E(r)?function(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}(r):O(r)),E(e)?((a=x(e)).x+=e.clientLeft,a.y+=e.clientTop):(o=_(e))&&(a.x=T(o))),{x:i.left+s.scrollLeft-a.x,y:i.top+s.scrollTop-a.y,width:i.width,height:i.height}}function j(t){return{x:t.offsetLeft,y:t.offsetTop,width:t.offsetWidth,height:t.offsetHeight}}function L(t){return"html"===S(t)?t:t.parentNode||t.host||document.ownerDocument||document.documentElement}function M(t){return w(t).getComputedStyle(t)}function k(t,e){void 0===e&&(e=[])
var n=function t(e){if(["html","body","#document"].indexOf(S(e))>=0)return e.ownerDocument.body
if(E(e)){var n=M(e),o=n.overflow,r=n.overflowX,i=n.overflowY
if(/auto|scroll|overlay|hidden/.test(o+i+r))return e}return t(L(e))}(t),o="body"===S(n),r=o?w(n):n,i=e.concat(r)
return o?i:i.concat(k(L(r)))}function P(t){return["table","td","th"].indexOf(S(t))>=0}function C(t){var e
return!E(t)||!(e=t.offsetParent)||void 0!==window.InstallTrigger&&"fixed"===M(e).position?null:e}function D(t){for(var e=w(t),n=C(t);n&&P(n);)n=C(n)
return n&&"body"===S(n)&&"static"===M(n).position?e:n||e}var A="top",B="bottom",H="right",R="left",F=[A,B,H,R],N=F.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),W=[].concat(F,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]),Y=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]
function q(t){return t.split("-")[0]}var X={placement:"bottom",modifiers:[],strategy:"absolute"}
function V(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}var U={passive:!0}
function z(t){return t.split("-")[1]}function Z(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function J(t){var e,n=t.reference,o=t.element,r=t.placement,i=r?q(r):null,s=r?z(r):null,a=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2
switch(i){case A:e={x:a,y:n.y-o.height}
break
case B:e={x:a,y:n.y+n.height}
break
case H:e={x:n.x+n.width,y:c}
break
case R:e={x:n.x-o.width,y:c}
break
default:e={x:n.x,y:n.y}}var u=i?Z(i):null
if(null!=u){var l="y"===u?"height":"width"
switch(s){case"start":e[u]=Math.floor(e[u])-Math.floor(n[l]/2-o[l]/2)
break
case"end":e[u]=Math.floor(e[u])+Math.ceil(n[l]/2-o[l]/2)}}return e}var K={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function G(t){var e,n=t.popper,o=t.popperRect,r=t.placement,i=t.offsets,s=t.position,a=t.gpuAcceleration,c=t.adaptive,u=function(t){var e=t.x,n=t.y,o=window.devicePixelRatio||1
return{x:Math.round(e*o)/o||0,y:Math.round(n*o)/o||0}}(i),l=u.x,f=u.y,p=i.hasOwnProperty("x"),d=i.hasOwnProperty("y"),h=R,m=A,v=window
if(c){var g=D(n)
g===w(n)&&(g=_(n)),r===A&&(m=B,f-=g.clientHeight-o.height,f*=a?1:-1),r===R&&(h=H,l-=g.clientWidth-o.width,l*=a?1:-1)}var b,y=Object.assign({position:s},c&&K)
return a?Object.assign({},y,((b={})[m]=d?"0":"",b[h]=p?"0":"",b.transform=(v.devicePixelRatio||1)<2?"translate("+l+"px, "+f+"px)":"translate3d("+l+"px, "+f+"px, 0)",b)):Object.assign({},y,((e={})[m]=d?f+"px":"",e[h]=p?l+"px":"",e.transform="",e))}var Q={left:"right",right:"left",bottom:"top",top:"bottom"}
function tt(t){return t.replace(/left|right|bottom|top/g,(function(t){return Q[t]}))}var et={start:"end",end:"start"}
function nt(t){return t.replace(/start|end/g,(function(t){return et[t]}))}function ot(t){return parseFloat(t)||0}function rt(t,e){var n=Boolean(e.getRootNode&&e.getRootNode().host)
if(t.contains(e))return!0
if(n){var o=e
do{if(o&&t.isSameNode(o))return!0
o=o.parentNode||o.host}while(o)}return!1}function it(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function st(t,e){return"viewport"===e?it(function(t){var e=w(t)
return{width:e.innerWidth,height:e.innerHeight,x:0,y:0}}(t)):E(e)?x(e):it(function(t){var e=w(t),n=O(t),o=I(_(t),e)
return o.height=Math.max(o.height,e.innerHeight),o.width=Math.max(o.width,e.innerWidth),o.x=-n.scrollLeft,o.y=-n.scrollTop,o}(_(t)))}function at(t,e,n){var o="clippingParents"===e?function(t){var e=k(t),n=["absolute","fixed"].indexOf(M(t).position)>=0&&E(t)?D(t):t
return $(n)?e.filter((function(t){return $(t)&&rt(t,n)})):[]}(t):[].concat(e),r=[].concat(o,[n]),i=r[0],s=r.reduce((function(e,n){var o=st(t,n),r=function(t){var e=w(t),n=function(t){var e=E(t)?M(t):{}
return{top:ot(e.borderTopWidth),right:ot(e.borderRightWidth),bottom:ot(e.borderBottomWidth),left:ot(e.borderLeftWidth)}}(t),o="html"===S(t),r=T(t),i=t.clientWidth+n.right,s=t.clientHeight+n.bottom
return o&&e.innerHeight-t.clientHeight>50&&(s=e.innerHeight-n.bottom),{top:o?0:t.clientTop,right:t.clientLeft>n.left?n.right:o?e.innerWidth-i-r:t.offsetWidth-i,bottom:o?e.innerHeight-s:t.offsetHeight-s,left:o?r:t.clientLeft}}(E(n)?n:_(t))
return e.top=Math.max(o.top+r.top,e.top),e.right=Math.min(o.right-r.right,e.right),e.bottom=Math.min(o.bottom-r.bottom,e.bottom),e.left=Math.max(o.left+r.left,e.left),e}),st(t,i))
return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ct(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},{},t)}function ut(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}function lt(t,e){void 0===e&&(e={})
var n=e,o=n.placement,r=void 0===o?t.placement:o,i=n.boundary,s=void 0===i?"clippingParents":i,a=n.rootBoundary,c=void 0===a?"viewport":a,u=n.elementContext,l=void 0===u?"popper":u,f=n.altBoundary,p=void 0!==f&&f,d=n.padding,h=void 0===d?0:d,m=ct("number"!=typeof h?h:ut(h,F)),v="popper"===l?"reference":"popper",g=t.elements.reference,b=t.rects.popper,y=t.elements[p?v:l],w=at($(y)?y:_(t.elements.popper),s,c),O=x(g),E=J({reference:O,element:b,strategy:"absolute",placement:r}),S=it(Object.assign({},b,{},E)),T="popper"===l?S:O,I={top:w.top-T.top+m.top,bottom:T.bottom-w.bottom+m.bottom,left:w.left-T.left+m.left,right:T.right-w.right+m.right},j=t.modifiersData.offset
if("popper"===l&&j){var L=j[r]
Object.keys(I).forEach((function(t){var e=[H,B].indexOf(t)>=0?1:-1,n=[A,B].indexOf(t)>=0?"y":"x"
I[t]+=L[n]*e}))}return I}function ft(t,e,n){return Math.max(t,Math.min(e,n))}function pt(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function dt(t){return[A,H,B,R].some((function(e){return t[e]>=0}))}var ht,mt=function(t){void 0===t&&(t={})
var e=t,n=e.defaultModifiers,o=void 0===n?[]:n,r=e.defaultOptions,i=void 0===r?X:r
return function(t,e,n){void 0===n&&(n=i)
var r,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},X,{},i),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},c=[],u=!1,l={state:a,setOptions:function(n){f(),a.options=Object.assign({},i,{},a.options,{},n),a.scrollParents={reference:$(t)?k(t):[],popper:k(e)}
var r,s,u=function(t){var e=function(t){var e=new Map,n=new Set,o=[]
return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||function t(r){n.add(r.name),[].concat(r.requires||[],r.requiresIfExists||[]).forEach((function(o){if(!n.has(o)){var r=e.get(o)
r&&t(r)}})),o.push(r)}(t)})),o}(t)
return Y.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}((r=[].concat(o,a.options.modifiers),s=r.reduce((function(t,e){var n=t[e.name]
return t[e.name]=n?Object.assign({},n,{},e,{options:Object.assign({},n.options,{},e.options),data:Object.assign({},n.data,{},e.data)}):e,t}),{}),Object.keys(s).map((function(t){return s[t]}))))
return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,o=void 0===n?{}:n,r=t.effect
if("function"==typeof r){var i=r({state:a,name:e,instance:l,options:o})
c.push(i||function(){})}})),l.update()},forceUpdate:function(){if(!u){var t=a.elements,e=t.reference,n=t.popper
if(V(e,n)){a.rects={reference:I(e,D(n),"fixed"===a.options.strategy),popper:j(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}))
for(var o=0;o<a.orderedModifiers.length;o++)if(!0!==a.reset){var r=a.orderedModifiers[o],i=r.fn,s=r.options,c=void 0===s?{}:s,f=r.name
"function"==typeof i&&(a=i({state:a,options:c,name:f,instance:l})||a)}else a.reset=!1,o=-1}}},update:(r=function(){return new Promise((function(t){l.forceUpdate(),t(a)}))},function(){return s||(s=new Promise((function(t){Promise.resolve().then((function(){s=void 0,t(r())}))}))),s}),destroy:function(){f(),u=!0}}
if(!V(t,e))return l
function f(){c.forEach((function(t){return t()})),c=[]}return l.setOptions(n).then((function(t){!u&&n.onFirstUpdate&&n.onFirstUpdate(t)})),l}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,o=t.options,r=o.scroll,i=void 0===r||r,s=o.resize,a=void 0===s||s,c=w(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper)
return i&&u.forEach((function(t){t.addEventListener("scroll",n.update,U)})),a&&c.addEventListener("resize",n.update,U),function(){i&&u.forEach((function(t){t.removeEventListener("scroll",n.update,U)})),a&&c.removeEventListener("resize",n.update,U)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name
e.modifiersData[n]=J({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,s=void 0===i||i,a={placement:q(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r}
e.styles.popper=Object.assign({},e.styles.popper,{},G(Object.assign({},a,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s}))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,{},G(Object.assign({},a,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state
Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},o=e.attributes[t]||{},r=e.elements[t]
E(r)&&S(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(t){var e=o[t]
!1===e?r.removeAttribute(t):r.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:"absolute",left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(e.elements.popper.style,n.popper),e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var o=e.elements[t],r=e.attributes[t]||{},i=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{})
E(o)&&S(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(t){o.removeAttribute(t)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,o=t.name,r=n.offset,i=void 0===r?[0,0]:r,s=W.reduce((function(t,n){return t[n]=function(t,e,n){var o=q(t),r=[R,A].indexOf(o)>=0?-1:1,i="function"==typeof n?n(Object.assign({},e,{placement:t})):n,s=i[0],a=i[1]
return s=s||0,a=(a||0)*r,[R,H].indexOf(o)>=0?{x:a,y:s}:{x:s,y:a}}(n,e.rects,i),t}),{}),a=s[e.placement],c=a.x,u=a.y
e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=u,e.modifiersData[o]=s}},{name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name
if(!e.modifiersData[o]._skip){for(var r=n.fallbackPlacements,i=n.padding,s=n.boundary,a=n.rootBoundary,c=n.flipVariations,u=void 0===c||c,l=e.options.placement,f=q(l),p=r||(f!==l&&u?function(t){if("auto"===q(t))return[]
var e=tt(t)
return[nt(t),e,nt(e)]}(l):[tt(l)]),d=[l].concat(p).reduce((function(t,n){return t.concat("auto"===q(n)?function(t,e){void 0===e&&(e={})
var n=e,o=n.placement,r=n.boundary,i=n.rootBoundary,s=n.padding,a=n.flipVariations,c=z(o),u=(c?a?N:N.filter((function(t){return z(t)===c})):F).reduce((function(e,n){return e[n]=lt(t,{placement:n,boundary:r,rootBoundary:i,padding:s})[q(n)],e}),{})
return Object.keys(u).sort((function(t,e){return u[t]-u[e]}))}(e,{placement:n,boundary:s,rootBoundary:a,padding:i,flipVariations:u}):n)}),[]),h=e.rects.reference,m=e.rects.popper,v=new Map,g=!0,b=d[0],y=0;y<d.length;y++){var x=d[y],w=q(x),O="start"===z(x),$=[A,B].indexOf(w)>=0,E=$?"width":"height",S=lt(e,{placement:x,boundary:s,rootBoundary:a,padding:i}),_=$?O?H:R:O?B:A
h[E]>m[E]&&(_=tt(_))
var T=tt(_),I=[S[w]<=0,S[_]<=0,S[T]<=0]
if(I.every((function(t){return t}))){b=x,g=!1
break}v.set(x,I)}if(g)for(var j=function(t){var e=d.find((function(e){var n=v.get(e)
if(n)return n.slice(0,t).every((function(t){return t}))}))
if(e)return b=e,"break"},L=u?3:1;L>0&&"break"!==j(L);L--);e.placement!==b&&(e.modifiersData[o]._skip=!0,e.placement=b,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name,r=n.mainAxis,i=void 0===r||r,s=n.altAxis,a=void 0!==s&&s,c=n.boundary,u=n.rootBoundary,l=n.padding,f=n.tether,p=void 0===f||f,d=n.tetherOffset,h=void 0===d?0:d,m=lt(e,{boundary:c,rootBoundary:u,padding:l}),v=q(e.placement),g=z(e.placement),b=!g,y=Z(v),x="x"===y?"y":"x",w=e.modifiersData.popperOffsets,O=e.rects.reference,$=e.rects.popper,E="function"==typeof h?h(Object.assign({},e.rects,{placement:e.placement})):h,S={x:0,y:0}
if(i){var _="y"===y?A:R,T="y"===y?B:H,I="y"===y?"height":"width",L=w[y],M=w[y]+m[_],k=w[y]-m[T],P=p?-$[I]/2:0,C="start"===g?O[I]:$[I],D="start"===g?-$[I]:-O[I],F=e.elements.arrow,N=p&&F?j(F):{width:0,height:0},W=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Y=W[_],X=W[T],V=ft(0,O[I],N[I]),U=b?O[I]/2-P-V-Y-E:C-V-Y-E,J=b?-O[I]/2+P+V+X+E:D+V+X+E,K=e.modifiersData.offset?e.modifiersData.offset[e.placement][y]:0,G=w[y]+U-K,Q=w[y]+J-K,tt=ft(p?Math.min(M,G):M,L,p?Math.max(k,Q):k)
w[y]=tt,S[y]=tt-L}if(a){var et="x"===y?A:R,nt="x"===y?B:H,ot=w[x],rt=ft(ot+m[et],ot,ot-m[nt])
e.modifiersData.popperOffsets[x]=rt,S[x]=rt-ot}e.modifiersData[o]=S},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,o=t.name,r=n.elements.arrow,i=n.modifiersData.popperOffsets,s=q(n.placement),a=Z(s),c=[R,H].indexOf(s)>=0?"height":"width"
if(r){var u=n.modifiersData[o+"#persistent"].padding,l=j(r),f="y"===a?A:R,p="y"===a?B:H,d=(n.rects.reference[c]+n.rects.reference[a]-i[a]-n.rects.popper[c])/2-(i[a]-n.rects.reference[a])/2,h=ft(u[f],n.rects.popper[c]/2-l[c]/2+d,n.rects.popper[c]-l[c]-u[p]),m=a
n.modifiersData[o]=((e={})[m]=h,e)}},effect:function(t){var e=t.state,n=t.options,o=t.name,r=n.element,i=void 0===r?"[data-popper-arrow]":r,s=n.padding,a=void 0===s?0:s;("string"!=typeof i||(i=e.elements.popper.querySelector(i)))&&rt(e.elements.popper,i)&&(e.elements.arrow=i,e.modifiersData[o+"#persistent"]={padding:ct("number"!=typeof a?a:ut(a,F))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,o=e.rects.reference,r=e.rects.popper,i=e.modifiersData.preventOverflow,s=lt(e,{elementContext:"reference"}),a=lt(e,{altBoundary:!0}),c=pt(s,o),u=pt(a,r,i),l=dt(c),f=dt(u)
e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":f})}}]})
function vt(t){return v(t)&&""!==t?"-"!==t.charAt(t.length-1)?t+"-":t:""}function gt(t){var e=t.options.attachTo||{},n=Object.assign({},e)
if(v(e.element)){try{n.element=document.querySelector(e.element)}catch(t){}n.element||console.error("The element for this Shepherd step was not found "+e.element)}return n}function bt(t){t.tooltip&&t.tooltip.destroy()
var e=gt(t),n=function(t,e){var n={modifiers:[{name:"preventOverflow",options:{altAxis:!0}}],strategy:"absolute",onFirstUpdate:function(){e.el.focus()}},o=document.body
if(t.element&&t.on?(n.placement=t.on||"right",o=t.element):n=function(t){var e=[{name:"applyStyles",fn:function(t){var e=t.state
Object.keys(e.elements).forEach((function(t){if("popper"===t){var n=e.attributes[t]||{},o=e.elements[t]
Object.assign(o.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}),Object.keys(n).forEach((function(t){var e=n[t]
!1===e?o.removeAttribute(t):o.setAttribute(t,!0===e?"":e)}))}}))}},{name:"computeStyles",options:{adaptive:!1}}],n=t.shepherdElementComponent.getElement(),o=function(t){return{placement:"top",strategy:"fixed",modifiers:[],onFirstUpdate:function(){t.el.focus()}}}(t)
return n.classList.add("shepherd-centered"),s({},o,{modifiers:Array.from(new Set([].concat(o.modifiers,e)))})}(e),e.options.popperOptions){if(e.options.popperOptions.modifiers&&e.options.popperOptions.modifiers.length>0){var r=e.options.popperOptions.modifiers.map((function(t){return t.name})),i=n.modifiers.filter((function(t){return!r.includes(t.name)}))
n.modifiers=[].concat(e.options.popperOptions.modifiers,i),delete e.options.popperOptions.modifiers}n=Object.assign(n,e.options.popperOptions)}return{element:e.el,popperOptions:n,target:o}}(e,t),o=n.element,r=n.popperOptions,i=n.target
t.tooltip=mt(i,o,r),t.target=e.element}function yt(){var t=Date.now()
return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=(t+16*Math.random())%16|0
return t=Math.floor(t/16),("x"==e?n:3&n|8).toString(16)}))}function xt(){}function wt(t,e){for(var n in e)t[n]=e[n]
return t}function Ot(t){return t()}function $t(){return Object.create(null)}function Et(t){t.forEach(Ot)}function St(t){return"function"==typeof t}function _t(t,e){return t!=t?e==e:t!==e||t&&"object"===o(t)||"function"==typeof t}function Tt(t,e){t.appendChild(e)}function It(t,e,n){t.insertBefore(e,n||null)}function jt(t){t.parentNode.removeChild(t)}function Lt(t){return document.createElement(t)}function Mt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function kt(t){return document.createTextNode(t)}function Pt(){return kt(" ")}function Ct(t,e,n,o){return t.addEventListener(e,n,o),function(){return t.removeEventListener(e,n,o)}}function Dt(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function At(t,e){var n=Object.getOwnPropertyDescriptors(t.__proto__)
for(var o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o||n[o]&&n[o].set?t[o]=e[o]:Dt(t,o,e[o])}function Bt(t,e,n){t.classList[n?"add":"remove"](e)}function Ht(t){ht=t}function Rt(){if(!ht)throw new Error("Function called outside component initialization")
return ht}function Ft(t){Rt().$$.after_update.push(t)}var Nt=[],Wt=[],Yt=[],qt=[],Xt=Promise.resolve(),Vt=!1
function Ut(t){Yt.push(t)}var zt=!1,Zt=new Set
function Jt(){if(!zt){zt=!0
do{for(var t=0;t<Nt.length;t+=1){var e=Nt[t]
Ht(e),Kt(e.$$)}for(Nt.length=0;Wt.length;)Wt.pop()()
for(var n=0;n<Yt.length;n+=1){var o=Yt[n]
Zt.has(o)||(Zt.add(o),o())}Yt.length=0}while(Nt.length)
for(;qt.length;)qt.pop()()
Vt=!1,zt=!1,Zt.clear()}}function Kt(t){if(null!==t.fragment){t.update(),Et(t.before_update)
var e=t.dirty
t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ut)}}var Gt,Qt=new Set
function te(){Gt={r:0,c:[],p:Gt}}function ee(){Gt.r||Et(Gt.c),Gt=Gt.p}function ne(t,e){t&&t.i&&(Qt.delete(t),t.i(e))}function oe(t,e,n,o){if(t&&t.o){if(Qt.has(t))return
Qt.add(t),Gt.c.push((function(){Qt.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function re(t){t&&t.c()}function ie(t,e,n){var o=t.$$,r=o.fragment,i=o.on_mount,s=o.on_destroy,a=o.after_update
r&&r.m(e,n),Ut((function(){var e=i.map(Ot).filter(St)
s?s.push.apply(s,e):Et(e),t.$$.on_mount=[]})),a.forEach(Ut)}function se(t,e){var n=t.$$
null!==n.fragment&&(Et(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ae(t,e){-1===t.$$.dirty[0]&&(Nt.push(t),Vt||(Vt=!0,Xt.then(Jt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ce(t,e,n,o,r,i,s){void 0===s&&(s=[-1])
var a=ht
Ht(t)
var c=e.props||{},u=t.$$={fragment:null,ctx:null,props:i,update:xt,not_equal:r,bound:$t(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:$t(),dirty:s},l=!1
u.ctx=n?n(t,c,(function(e,n){var o=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n
return u.ctx&&r(u.ctx[e],u.ctx[e]=o)&&(u.bound[e]&&u.bound[e](o),l&&ae(t,e)),n})):[],u.update(),l=!0,Et(u.before_update),u.fragment=!!o&&o(u.ctx),e.target&&(e.hydrate?u.fragment&&u.fragment.l(function(t){return Array.from(t.childNodes)}(e.target)):u.fragment&&u.fragment.c(),e.intro&&ne(t.$$.fragment),ie(t,e.target,e.anchor),Jt()),Ht(a)}"function"==typeof HTMLElement&&p(HTMLElement)
var ue=function(){function t(){}var e=t.prototype
return e.$destroy=function(){se(this,1),this.$destroy=xt},e.$on=function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[])
return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}},e.$set=function(){},t}()
function le(t){var e,n,o,r,i
return{c:function(){e=Lt("button"),n=kt(t[3]),Dt(e,"aria-label",o=t[4]?t[4]:null),Dt(e,"class",r=(t[1]||"")+" shepherd-button "+(t[2]?"shepherd-button-secondary":"")),e.disabled=t[5],Dt(e,"tabindex","0")},m:function(o,r){It(o,e,r),Tt(e,n),i=Ct(e,"click",(function(){St(t[0])&&t[0].apply(this,arguments)}))},p:function(i,s){var a=s[0]
t=i,8&a&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(n,t[3]),16&a&&o!==(o=t[4]?t[4]:null)&&Dt(e,"aria-label",o),6&a&&r!==(r=(t[1]||"")+" shepherd-button "+(t[2]?"shepherd-button-secondary":""))&&Dt(e,"class",r),32&a&&(e.disabled=t[5])},i:xt,o:xt,d:function(t){t&&jt(e),i()}}}function fe(t,e,n){var o,r,i,s,a,c,u=e.config,l=e.step
return t.$set=function(t){"config"in t&&n(6,u=t.config),"step"in t&&n(7,l=t.step)},t.$$.update=function(){192&t.$$.dirty&&(n(0,o=u.action?u.action.bind(l.tour):null),n(1,r=u.classes),n(2,i=u.secondary),n(3,s=u.text),n(4,a=u.label),n(5,c=!!u.disabled&&function(t){return m(t)?t.call(l):t}(u.disabled)))},[o,r,i,s,a,c,u,l]}var pe=function(t){function e(e){var n
return ce(d(n=t.call(this)||this),e,fe,le,_t,{config:6,step:7}),n}return a(e,t),e}(ue)
function de(t,e,n){var o=t.slice()
return o[2]=e[n],o}function he(t){for(var e,n,o=t[1],r=[],i=0;i<o.length;i+=1)r[i]=me(de(t,o,i))
var s=function(t){return oe(r[t],1,1,(function(){r[t]=null}))}
return{c:function(){for(var t=0;t<r.length;t+=1)r[t].c()
e=kt("")},m:function(t,o){for(var i=0;i<r.length;i+=1)r[i].m(t,o)
It(t,e,o),n=!0},p:function(t,n){if(3&n){var i
for(o=t[1],i=0;i<o.length;i+=1){var a=de(t,o,i)
r[i]?(r[i].p(a,n),ne(r[i],1)):(r[i]=me(a),r[i].c(),ne(r[i],1),r[i].m(e.parentNode,e))}for(te(),i=o.length;i<r.length;i+=1)s(i)
ee()}},i:function(t){if(!n){for(var e=0;e<o.length;e+=1)ne(r[e])
n=!0}},o:function(t){r=r.filter(Boolean)
for(var e=0;e<r.length;e+=1)oe(r[e])
n=!1},d:function(t){!function(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t),t&&jt(e)}}}function me(t){var e,n=new pe({props:{config:t[2],step:t[0]}})
return{c:function(){re(n.$$.fragment)},m:function(t,o){ie(n,t,o),e=!0},p:function(t,e){var o={}
2&e&&(o.config=t[2]),1&e&&(o.step=t[0]),n.$set(o)},i:function(t){e||(ne(n.$$.fragment,t),e=!0)},o:function(t){oe(n.$$.fragment,t),e=!1},d:function(t){se(n,t)}}}function ve(t){var e,n,o=t[1]&&he(t)
return{c:function(){e=Lt("footer"),o&&o.c(),Dt(e,"class","shepherd-footer")},m:function(t,r){It(t,e,r),o&&o.m(e,null),n=!0},p:function(t,n){var r=n[0]
t[1]?o?(o.p(t,r),ne(o,1)):((o=he(t)).c(),ne(o,1),o.m(e,null)):o&&(te(),oe(o,1,1,(function(){o=null})),ee())},i:function(t){n||(ne(o),n=!0)},o:function(t){oe(o),n=!1},d:function(t){t&&jt(e),o&&o.d()}}}function ge(t,e,n){var o,r=e.step
return t.$set=function(t){"step"in t&&n(0,r=t.step)},t.$$.update=function(){1&t.$$.dirty&&n(1,o=r.options.buttons)},[r,o]}var be=function(t){function e(e){var n
return ce(d(n=t.call(this)||this),e,ge,ve,_t,{step:0}),n}return a(e,t),e}(ue)
function ye(t){var e,n,o,r
return{c:function(){e=Lt("button"),(n=Lt("span")).textContent="×",Dt(n,"aria-hidden","true"),Dt(e,"aria-label",o=t[0].label?t[0].label:"Close Tour"),Dt(e,"class","shepherd-cancel-icon"),Dt(e,"type","button")},m:function(o,i){It(o,e,i),Tt(e,n),r=Ct(e,"click",t[1])},p:function(t,n){1&n[0]&&o!==(o=t[0].label?t[0].label:"Close Tour")&&Dt(e,"aria-label",o)},i:xt,o:xt,d:function(t){t&&jt(e),r()}}}function xe(t,e,n){var o=e.cancelIcon,r=e.step
return t.$set=function(t){"cancelIcon"in t&&n(0,o=t.cancelIcon),"step"in t&&n(2,r=t.step)},[o,function(t){t.preventDefault(),r.cancel()},r]}var we=function(t){function e(e){var n
return ce(d(n=t.call(this)||this),e,xe,ye,_t,{cancelIcon:0,step:2}),n}return a(e,t),e}(ue)
function Oe(t){var e
return{c:function(){Dt(e=Lt("h3"),"id",t[1]),Dt(e,"class","shepherd-title")},m:function(n,o){It(n,e,o),t[3](e)},p:function(t,n){2&n[0]&&Dt(e,"id",t[1])},i:xt,o:xt,d:function(n){n&&jt(e),t[3](null)}}}function $e(t,e,n){var o=e.labelId,r=e.element,i=e.title
return Ft((function(){m(i)&&n(2,i=i()),n(0,r.innerHTML=i,r)})),t.$set=function(t){"labelId"in t&&n(1,o=t.labelId),"element"in t&&n(0,r=t.element),"title"in t&&n(2,i=t.title)},[r,o,i,function(t){Wt[t?"unshift":"push"]((function(){n(0,r=t)}))}]}var Ee=function(t){function e(e){var n
return ce(d(n=t.call(this)||this),e,$e,Oe,_t,{labelId:1,element:0,title:2}),n}return a(e,t),e}(ue)
function Se(t){var e,n=new Ee({props:{labelId:t[0],title:t[2]}})
return{c:function(){re(n.$$.fragment)},m:function(t,o){ie(n,t,o),e=!0},p:function(t,e){var o={}
1&e&&(o.labelId=t[0]),4&e&&(o.title=t[2]),n.$set(o)},i:function(t){e||(ne(n.$$.fragment,t),e=!0)},o:function(t){oe(n.$$.fragment,t),e=!1},d:function(t){se(n,t)}}}function _e(t){var e,n=new we({props:{cancelIcon:t[3],step:t[1]}})
return{c:function(){re(n.$$.fragment)},m:function(t,o){ie(n,t,o),e=!0},p:function(t,e){var o={}
8&e&&(o.cancelIcon=t[3]),2&e&&(o.step=t[1]),n.$set(o)},i:function(t){e||(ne(n.$$.fragment,t),e=!0)},o:function(t){oe(n.$$.fragment,t),e=!1},d:function(t){se(n,t)}}}function Te(t){var e,n,o,r=t[2]&&Se(t),i=t[3]&&t[3].enabled&&_e(t)
return{c:function(){e=Lt("header"),r&&r.c(),n=Pt(),i&&i.c(),Dt(e,"class","shepherd-header")},m:function(t,s){It(t,e,s),r&&r.m(e,null),Tt(e,n),i&&i.m(e,null),o=!0},p:function(t,o){var s=o[0]
t[2]?r?(r.p(t,s),ne(r,1)):((r=Se(t)).c(),ne(r,1),r.m(e,n)):r&&(te(),oe(r,1,1,(function(){r=null})),ee()),t[3]&&t[3].enabled?i?(i.p(t,s),ne(i,1)):((i=_e(t)).c(),ne(i,1),i.m(e,null)):i&&(te(),oe(i,1,1,(function(){i=null})),ee())},i:function(t){o||(ne(r),ne(i),o=!0)},o:function(t){oe(r),oe(i),o=!1},d:function(t){t&&jt(e),r&&r.d(),i&&i.d()}}}function Ie(t,e,n){var o,r,i=e.labelId,s=e.step
return t.$set=function(t){"labelId"in t&&n(0,i=t.labelId),"step"in t&&n(1,s=t.step)},t.$$.update=function(){2&t.$$.dirty&&(n(2,o=s.options.title),n(3,r=s.options.cancelIcon))},[i,s,o,r]}var je=function(t){function e(e){var n
return ce(d(n=t.call(this)||this),e,Ie,Te,_t,{labelId:0,step:1}),n}return a(e,t),e}(ue)
function Le(t){var e
return{c:function(){Dt(e=Lt("div"),"class","shepherd-text"),Dt(e,"id",t[1])},m:function(n,o){It(n,e,o),t[3](e)},p:function(t,n){2&n[0]&&Dt(e,"id",t[1])},i:xt,o:xt,d:function(n){n&&jt(e),t[3](null)}}}function Me(t,e,n){var o=e.descriptionId,r=e.element,i=e.step
return Ft((function(){var t=i.options.text
m(t)&&(t=t.call(i)),h(t)?r.appendChild(t):n(0,r.innerHTML=t,r)})),t.$set=function(t){"descriptionId"in t&&n(1,o=t.descriptionId),"element"in t&&n(0,r=t.element),"step"in t&&n(2,i=t.step)},[r,o,i,function(t){Wt[t?"unshift":"push"]((function(){n(0,r=t)}))}]}var ke=function(t){function e(e){var n
return ce(d(n=t.call(this)||this),e,Me,Le,_t,{descriptionId:1,element:0,step:2}),n}return a(e,t),e}(ue)
function Pe(t){var e,n=new ke({props:{descriptionId:t[0],step:t[2]}})
return{c:function(){re(n.$$.fragment)},m:function(t,o){ie(n,t,o),e=!0},p:function(t,e){var o={}
1&e&&(o.descriptionId=t[0]),4&e&&(o.step=t[2]),n.$set(o)},i:function(t){e||(ne(n.$$.fragment,t),e=!0)},o:function(t){oe(n.$$.fragment,t),e=!1},d:function(t){se(n,t)}}}function Ce(t){var e,n=new be({props:{step:t[2]}})
return{c:function(){re(n.$$.fragment)},m:function(t,o){ie(n,t,o),e=!0},p:function(t,e){var o={}
4&e&&(o.step=t[2]),n.$set(o)},i:function(t){e||(ne(n.$$.fragment,t),e=!0)},o:function(t){oe(n.$$.fragment,t),e=!1},d:function(t){se(n,t)}}}function De(t){var e,n,o,r,i=!g(t[2].options.text),s=Array.isArray(t[2].options.buttons)&&t[2].options.buttons.length,a=new je({props:{labelId:t[1],step:t[2]}}),c=i&&Pe(t),u=s&&Ce(t)
return{c:function(){e=Lt("div"),re(a.$$.fragment),n=Pt(),c&&c.c(),o=Pt(),u&&u.c(),Dt(e,"class","shepherd-content")},m:function(t,i){It(t,e,i),ie(a,e,null),Tt(e,n),c&&c.m(e,null),Tt(e,o),u&&u.m(e,null),r=!0},p:function(t,n){var r=n[0],l={}
2&r&&(l.labelId=t[1]),4&r&&(l.step=t[2]),a.$set(l),4&r&&(i=!g(t[2].options.text)),i?c?(c.p(t,r),ne(c,1)):((c=Pe(t)).c(),ne(c,1),c.m(e,o)):c&&(te(),oe(c,1,1,(function(){c=null})),ee()),4&r&&(s=Array.isArray(t[2].options.buttons)&&t[2].options.buttons.length),s?u?(u.p(t,r),ne(u,1)):((u=Ce(t)).c(),ne(u,1),u.m(e,null)):u&&(te(),oe(u,1,1,(function(){u=null})),ee())},i:function(t){r||(ne(a.$$.fragment,t),ne(c),ne(u),r=!0)},o:function(t){oe(a.$$.fragment,t),oe(c),oe(u),r=!1},d:function(t){t&&jt(e),se(a),c&&c.d(),u&&u.d()}}}function Ae(t,e,n){var o=e.descriptionId,r=e.labelId,i=e.step
return t.$set=function(t){"descriptionId"in t&&n(0,o=t.descriptionId),"labelId"in t&&n(1,r=t.labelId),"step"in t&&n(2,i=t.step)},[o,r,i]}var Be=function(t){function e(e){var n
return ce(d(n=t.call(this)||this),e,Ae,De,_t,{descriptionId:0,labelId:1,step:2}),n}return a(e,t),e}(ue)
function He(t){var e
return{c:function(){Dt(e=Lt("div"),"class","shepherd-arrow"),Dt(e,"data-popper-arrow","")},m:function(t,n){It(t,e,n)},d:function(t){t&&jt(e)}}}function Re(t){for(var e,n,o,r,i=t[4].options.arrow&&t[4].options.attachTo&&t[4].options.attachTo.element&&He(),s=new Be({props:{descriptionId:t[2],labelId:t[3],step:t[4]}}),a=[{"aria-describedby":g(t[4].options.text)?null:t[2]},{"aria-labelledby":t[4].options.title?t[3]:null},t[1],{role:"dialog"},{tabindex:"0"}],c={},u=0;u<a.length;u+=1)c=wt(c,a[u])
return{c:function(){e=Lt("div"),i&&i.c(),n=Pt(),re(s.$$.fragment),At(e,c),Bt(e,"shepherd-has-cancel-icon",t[5]),Bt(e,"shepherd-has-title",t[6]),Bt(e,"shepherd-element",!0)},m:function(a,c){It(a,e,c),i&&i.m(e,null),Tt(e,n),ie(s,e,null),t[17](e),o=!0,r=Ct(e,"keydown",t[7])},p:function(t,o){var r=o[0]
t[4].options.arrow&&t[4].options.attachTo&&t[4].options.attachTo.element?i||((i=He()).c(),i.m(e,n)):i&&(i.d(1),i=null)
var c={}
4&r&&(c.descriptionId=t[2]),8&r&&(c.labelId=t[3]),16&r&&(c.step=t[4]),s.$set(c),At(e,function(t,e){for(var n={},o={},r={$$scope:1},i=t.length;i--;){var s=t[i],a=e[i]
if(a){for(var c in s)c in a||(o[c]=1)
for(var u in a)r[u]||(n[u]=a[u],r[u]=1)
t[i]=a}else for(var l in s)r[l]=1}for(var f in o)f in n||(n[f]=void 0)
return n}(a,[20&r&&{"aria-describedby":g(t[4].options.text)?null:t[2]},24&r&&{"aria-labelledby":t[4].options.title?t[3]:null},2&r&&t[1],{role:"dialog"},{tabindex:"0"}])),Bt(e,"shepherd-has-cancel-icon",t[5]),Bt(e,"shepherd-has-title",t[6]),Bt(e,"shepherd-element",!0)},i:function(t){o||(ne(s.$$.fragment,t),o=!0)},o:function(t){oe(s.$$.fragment,t),o=!1},d:function(n){n&&jt(e),i&&i.d(),se(s),t[17](null),r()}}}function Fe(t){return t.split(" ").filter((function(t){return!!t.length}))}function Ne(t,e,n){var o,r,i,s,a=e.classPrefix,c=e.element,u=e.descriptionId,l=e.firstFocusableElement,f=e.focusableElements,p=e.labelId,d=e.lastFocusableElement,h=e.step,m=e.dataStepId
function g(){b(i),y(i=h.options.classes)}function b(t){if(v(t)){var e,n=Fe(t)
n.length&&(e=c.classList).remove.apply(e,n)}}function y(t){if(v(t)){var e,n=Fe(t)
n.length&&(e=c.classList).add.apply(e,n)}}return s=function(){var t
n(1,((t={})["data-"+a+"shepherd-step-id"]=h.id,m=t)),n(9,f=c.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]')),n(8,l=f[0]),n(10,d=f[f.length-1])},Rt().$$.on_mount.push(s),Ft((function(){i!==h.options.classes&&g()})),t.$set=function(t){"classPrefix"in t&&n(11,a=t.classPrefix),"element"in t&&n(0,c=t.element),"descriptionId"in t&&n(2,u=t.descriptionId),"firstFocusableElement"in t&&n(8,l=t.firstFocusableElement),"focusableElements"in t&&n(9,f=t.focusableElements),"labelId"in t&&n(3,p=t.labelId),"lastFocusableElement"in t&&n(10,d=t.lastFocusableElement),"step"in t&&n(4,h=t.step),"dataStepId"in t&&n(1,m=t.dataStepId)},t.$$.update=function(){16&t.$$.dirty&&(n(5,o=h.options&&h.options.cancelIcon&&h.options.cancelIcon.enabled),n(6,r=h.options&&h.options.title))},[c,m,u,p,h,o,r,function(t){var e=h.tour
switch(t.keyCode){case 9:if(0===f.length){t.preventDefault()
break}t.shiftKey?document.activeElement===l&&(t.preventDefault(),d.focus()):document.activeElement===d&&(t.preventDefault(),l.focus())
break
case 27:e.options.exitOnEsc&&h.cancel()
break
case 37:e.options.keyboardNavigation&&e.back()
break
case 39:e.options.keyboardNavigation&&e.next()}},l,f,d,a,function(){return c},i,g,b,y,function(t){Wt[t?"unshift":"push"]((function(){n(0,c=t)}))}]}var We=function(t){function e(e){var n
return ce(d(n=t.call(this)||this),e,Ne,Re,_t,{classPrefix:11,element:0,descriptionId:2,firstFocusableElement:8,focusableElements:9,labelId:3,lastFocusableElement:10,step:4,dataStepId:1,getElement:12}),n}return a(e,t),i(e,[{key:"getElement",get:function(){return this.$$.ctx[12]}}]),e}(ue),Ye=function(t,e){return function(t,e){t.exports={polyfill:function(){var t=window,e=document
if(!("scrollBehavior"in e.documentElement.style&&!0!==t.__forceSmoothScrollPolyfill__)){var n,r=t.HTMLElement||t.Element,i={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:r.prototype.scroll||c,scrollIntoView:r.prototype.scrollIntoView},s=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,a=(n=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0)
t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==u(arguments[0])?h.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):i.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==o(arguments[0])?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(u(arguments[0])?i.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==o(arguments[0])?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==u(arguments[0])){var t=arguments[0].left,e=arguments[0].top
h.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted")
i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!==o(arguments[0])?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==u(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==u(arguments[0])){var n=d(this),o=n.getBoundingClientRect(),r=this.getBoundingClientRect()
n!==e.body?(h.call(this,n,n.scrollLeft+r.left-o.left,n.scrollTop+r.top-o.top),"fixed"!==t.getComputedStyle(n).position&&t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(t,e){this.scrollLeft=t,this.scrollTop=e}function u(t){if(null===t||"object"!==o(t)||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0
if("object"===o(t)&&"smooth"===t.behavior)return!1
throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function l(t,e){return"Y"===e?t.clientHeight+a<t.scrollHeight:"X"===e?t.clientWidth+a<t.scrollWidth:void 0}function f(e,n){var o=t.getComputedStyle(e,null)["overflow"+n]
return"auto"===o||"scroll"===o}function p(t){var e=l(t,"Y")&&f(t,"Y"),n=l(t,"X")&&f(t,"X")
return e||n}function d(t){for(;t!==e.body&&!1===p(t);)t=t.parentNode||t.host
return t}function h(n,o,r){var a,u,l,f,p=s()
n===e.body?(a=t,u=t.scrollX||t.pageXOffset,l=t.scrollY||t.pageYOffset,f=i.scroll):(a=n,u=n.scrollLeft,l=n.scrollTop,f=c),function e(n){var o,r,i,a,c=(s()-n.startTime)/468
a=c=c>1?1:c,o=.5*(1-Math.cos(Math.PI*a)),r=n.startX+(n.x-n.startX)*o,i=n.startY+(n.y-n.startY)*o,n.method.call(n.scrollable,r,i),r===n.x&&i===n.y||t.requestAnimationFrame(e.bind(t,n))}({scrollable:a,method:f,startTime:p,startX:u,startY:l,x:o,y:r})}}}}(e={exports:{}}),e.exports}()
Ye.polyfill,Ye.polyfill()
var qe=function(t){function e(e,n){var o
return void 0===n&&(n={}),(o=t.call(this,e,n)||this).tour=e,o.classPrefix=o.tour.options?vt(o.tour.options.classPrefix):"",o.styles=e.styles,y(d(o)),o._setOptions(n),d(o)||d(o)}a(e,t)
var n=e.prototype
return n.cancel=function(){this.tour.cancel(),this.trigger("cancel")},n.complete=function(){this.tour.complete(),this.trigger("complete")},n.destroy=function(){this.tooltip&&(this.tooltip.destroy(),this.tooltip=null),h(this.el)&&this.el.parentNode&&(this.el.parentNode.removeChild(this.el),this.el=null),this.target&&this._updateStepTargetOnHide(),this.trigger("destroy")},n.getTour=function(){return this.tour},n.hide=function(){this.tour.modal.hide(),this.trigger("before-hide"),this.el&&(this.el.hidden=!0),this.target&&this._updateStepTargetOnHide(),this.trigger("hide")},n.isOpen=function(){return Boolean(this.el&&!this.el.hidden)},n.show=function(){var t=this
if(m(this.options.beforeShowPromise)){var e=this.options.beforeShowPromise()
if(!g(e))return e.then((function(){return t._show()}))}this._show()},n.updateStepOptions=function(t){Object.assign(this.options,t),this.shepherdElementComponent&&this.shepherdElementComponent.$set({step:this})},n._createTooltipContent=function(){var t=this.id+"-description",e=this.id+"-label"
return this.shepherdElementComponent=new We({target:document.body,props:{classPrefix:this.classPrefix,descriptionId:t,labelId:e,step:this,styles:this.styles}}),this.shepherdElementComponent.getElement()},n._scrollTo=function(t){var e=gt(this).element
m(this.options.scrollToHandler)?this.options.scrollToHandler(e):h(e)&&"function"==typeof e.scrollIntoView&&e.scrollIntoView(t)},n._getClassOptions=function(t){var e=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions,n=t.classes?t.classes:"",o=e&&e.classes?e.classes:"",r=[].concat(n.split(" "),o.split(" ")),i=new Set(r)
return Array.from(i).join(" ").trim()},n._setOptions=function(t){var e=this
void 0===t&&(t={})
var n=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions
this.options=Object.assign({arrow:!0},n,t)
var o=this.options.when
this.options.classes=this._getClassOptions(t),this.destroy(),this.id=this.options.id||"step-"+yt(),o&&Object.keys(o).forEach((function(t){e.on(t,o[t],e)}))},n._setupElements=function(){g(this.el)||this.destroy(),this.el=this._createTooltipContent(),this.options.advanceOn&&function(t){var e=t.options.advanceOn||{},n=e.event,o=e.selector
if(!n)return console.error("advanceOn was defined, but no event name was passed.")
var r,i=function(t,e){return function(n){if(e.isOpen()){var o=e.el&&n.currentTarget===e.el;(!g(t)&&n.currentTarget.matches(t)||o)&&e.tour.next()}}}(o,t)
try{r=document.querySelector(o)}catch(t){}if(!g(o)&&!r)return console.error("No element was found for the selector supplied to advanceOn: "+o)
r?(r.addEventListener(n,i),t.on("destroy",(function(){return r.removeEventListener(n,i)}))):(document.body.addEventListener(n,i,!0),t.on("destroy",(function(){return document.body.removeEventListener(n,i,!0)})))}(this),bt(this)},n._show=function(){var t=this
this.trigger("before-show"),this._setupElements(),this.tour.modal.setupForStep(this),this._styleTargetElementForStep(this),this.el.hidden=!1,this.options.scrollTo&&setTimeout((function(){t._scrollTo(t.options.scrollTo)})),this.el.hidden=!1
var e=this.shepherdElementComponent.getElement();(this.target||document.body).classList.add(this.classPrefix+"shepherd-enabled",this.classPrefix+"shepherd-target"),e.classList.add("shepherd-enabled"),this.trigger("show")},n._styleTargetElementForStep=function(t){var e=t.target
e&&(t.options.highlightClass&&e.classList.add(t.options.highlightClass),!1===t.options.canClickTarget&&e.classList.add("shepherd-target-click-disabled"))},n._updateStepTargetOnHide=function(){this.options.highlightClass&&this.target.classList.remove(this.options.highlightClass),this.target.classList.remove(this.classPrefix+"shepherd-enabled",this.classPrefix+"shepherd-target")},e}(b)
function Xe(t){var e,n,o,r,i
return{c:function(){e=Mt("svg"),Dt(n=Mt("path"),"d",o="M "+t[1].x+" "+t[1].y+" H "+(t[1].width+t[1].x)+" V "+(t[1].height+t[1].y)+" H "+t[1].x+" L "+t[1].x+" 0 Z M 0 0 H "+window.innerWidth+" V "+window.innerHeight+" H 0 L 0 0 Z"),Dt(e,"class",r=(t[2]?"shepherd-modal-is-visible":"")+" shepherd-modal-overlay-container")},m:function(o,r){It(o,e,r),Tt(e,n),t[16](e),i=Ct(e,"touchmove",t[3])},p:function(t,i){var s=i[0]
2&s&&o!==(o="M "+t[1].x+" "+t[1].y+" H "+(t[1].width+t[1].x)+" V "+(t[1].height+t[1].y)+" H "+t[1].x+" L "+t[1].x+" 0 Z M 0 0 H "+window.innerWidth+" V "+window.innerHeight+" H 0 L 0 0 Z")&&Dt(n,"d",o),4&s&&r!==(r=(t[2]?"shepherd-modal-is-visible":"")+" shepherd-modal-overlay-container")&&Dt(e,"class",r)},i:xt,o:xt,d:function(n){n&&jt(e),t[16](null),i()}}}function Ve(t,e,n){var o=e.element,r=e.openingProperties,i=yt(),s=!1,a=void 0
function c(){n(1,r={height:0,x:0,y:0,width:0})}function u(){n(2,s=!1),h()}function l(t,e,o){if(void 0===o&&(o=0),t.getBoundingClientRect){var i=function(t,e){var n=t.getBoundingClientRect(),o=n.y||n.top,r=n.bottom||o+n.height
if(e){var i=e.getBoundingClientRect(),s=i.y||i.top,a=i.bottom||s+i.height
o=Math.max(o,s),r=Math.min(r,a)}return{y:o,height:Math.max(r-o,0)}}(t,e),s=i.y,a=i.height,c=t.getBoundingClientRect(),u=c.x,l=c.width,f=c.left
n(1,r={x:(u||f)-o,y:s-o,width:l+2*o,height:a+2*o})}}function f(){n(2,s=!0)}c()
var p=function(t){t.preventDefault()}
function d(){window.addEventListener("touchmove",p,{passive:!1})}function h(){a&&(cancelAnimationFrame(a),a=void 0),window.removeEventListener("touchmove",p,{passive:!1})}function m(t){var e=t.options.modalOverlayOpeningPadding
if(t.target){var n=function t(e){if(!e)return null
var n=e instanceof HTMLElement&&window.getComputedStyle(e).overflowY
return"hidden"!==n&&"visible"!==n&&e.scrollHeight>=e.clientHeight?e:t(e.parentElement)}(t.target)
!function o(){a=void 0,l(t.target,n,e),a=requestAnimationFrame(o)}(),d()}else c()}return t.$set=function(t){"element"in t&&n(0,o=t.element),"openingProperties"in t&&n(1,r=t.openingProperties)},[o,r,s,function(t){t.stopPropagation()},function(){return o},c,u,l,function(t){h(),t.tour.options.useModalOverlay?(m(t),f()):u()},f,a,i,p,d,h,m,function(t){Wt[t?"unshift":"push"]((function(){n(0,o=t)}))}]}var Ue=function(t){function e(e){var n
return ce(d(n=t.call(this)||this),e,Ve,Xe,_t,{element:0,openingProperties:1,getElement:4,closeModalOpening:5,hide:6,positionModalOpening:7,setupForStep:8,show:9}),n}return a(e,t),i(e,[{key:"getElement",get:function(){return this.$$.ctx[4]}},{key:"closeModalOpening",get:function(){return this.$$.ctx[5]}},{key:"hide",get:function(){return this.$$.ctx[6]}},{key:"positionModalOpening",get:function(){return this.$$.ctx[7]}},{key:"setupForStep",get:function(){return this.$$.ctx[8]}},{key:"show",get:function(){return this.$$.ctx[9]}}]),e}(ue),ze=new b,Ze=function(t){function e(e){var n
return void 0===e&&(e={}),y(d(n=t.call(this,e)||this)),n.options=Object.assign({},{exitOnEsc:!0,keyboardNavigation:!0},e),n.classPrefix=vt(n.options.classPrefix),n.steps=[],n.addSteps(n.options.steps),["active","cancel","complete","inactive","show","start"].map((function(t){var e
e=t,n.on(e,(function(t){(t=t||{}).tour=d(n),ze.trigger(e,t)}))})),n.modal=new Ue({target:e.modalContainer||document.body,props:{classPrefix:n.classPrefix,styles:n.styles}}),n._setTourID(),d(n)||d(n)}a(e,t)
var n=e.prototype
return n.addStep=function(t,e){var n=t
return n instanceof qe?n.tour=this:n=new qe(this,n),g(e)?this.steps.push(n):this.steps.splice(e,0,n),n},n.addSteps=function(t){var e=this
return Array.isArray(t)&&t.forEach((function(t){e.addStep(t)})),this},n.back=function(){var t=this.steps.indexOf(this.currentStep)
this.show(t-1,!1)},n.cancel=function(){if(this.options.confirmCancel){var t=this.options.confirmCancelMessage||"Are you sure you want to stop the tour?"
window.confirm(t)&&this._done("cancel")}else this._done("cancel")},n.complete=function(){this._done("complete")},n.getById=function(t){return this.steps.find((function(e){return e.id===t}))},n.getCurrentStep=function(){return this.currentStep},n.hide=function(){var t=this.getCurrentStep()
if(t)return t.hide()},n.isActive=function(){return ze.activeTour===this},n.next=function(){var t=this.steps.indexOf(this.currentStep)
t===this.steps.length-1?this.complete():this.show(t+1,!0)},n.removeStep=function(t){var e=this,n=this.getCurrentStep()
this.steps.some((function(n,o){if(n.id===t)return n.isOpen()&&n.hide(),n.destroy(),e.steps.splice(o,1),!0})),n&&n.id===t&&(this.currentStep=void 0,this.steps.length?this.show(0):this.cancel())},n.show=function(t,e){void 0===t&&(t=0),void 0===e&&(e=!0)
var n=v(t)?this.getById(t):this.steps[t]
n&&(this._updateStateBeforeShow(),m(n.options.showOn)&&!n.options.showOn()?this._skipStep(n,e):(this.trigger("show",{step:n,previous:this.currentStep}),this.currentStep=n,n.show()))},n.start=function(){this.trigger("start"),this.focusedElBeforeOpen=document.activeElement,this.currentStep=null,this._setupActiveTour(),this.next()},n._done=function(t){var e=this.steps.indexOf(this.currentStep)
Array.isArray(this.steps)&&this.steps.forEach((function(t){return t.destroy()})),this&&this.steps.forEach((function(t){t.options&&!1===t.options.canClickTarget&&t.options.attachTo&&t.target instanceof HTMLElement&&t.target.classList.remove("shepherd-target-click-disabled")})),this.trigger(t,{index:e}),ze.activeTour=null,this.trigger("inactive",{tour:this}),this.modal.hide(),h(this.focusedElBeforeOpen)&&this.focusedElBeforeOpen.focus()},n._setupActiveTour=function(){this.trigger("active",{tour:this}),ze.activeTour=this},n._skipStep=function(t,e){var n=this.steps.indexOf(t),o=e?n+1:n-1
this.show(o,e)},n._updateStateBeforeShow=function(){this.currentStep&&this.currentStep.hide(),this.isActive()||this._setupActiveTour()},n._setTourID=function(){var t=this.options.tourName||"tour"
this.id=t+"--"+yt()},e}(b)
Object.assign(ze,{Tour:Ze,Step:qe}),e.default=ze}}])
