webpackJsonp([0x67ef26645b2a,60335399758886],{148:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Legitblock"}}},layoutContext:{}}},359:function(e,t,r){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(6),s=(o(i),r(362)),l=o(s),u=r(148),c=o(u);t.default=function(e){return n.createElement(l.default,a({},e,c.default))},e.exports=t.default}).call(t,r(38))},145:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.noWarn,n=void 0!==r&&r,o=t.createElement,a=void 0===o||o,i=function(t){function r(){var e,t,o,a;N(this,r);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return t=o=q(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(s))),o.warned=n,o.state={theme:{}},o.setTheme=function(e){return o.setState({theme:e})},a=t,q(o,a)}return W(r,t),G(r,[{key:"componentWillMount",value:function(){!this.context[I];var e=this.props.theme;this.context[I]?this.setTheme(e?e:this.context[I].getState()):this.setTheme(e||{})}},{key:"componentWillReceiveProps",value:function(e){this.props.theme!==e.theme&&this.setTheme(e.theme)}},{key:"componentDidMount",value:function(){this.context[I]&&!this.props.theme&&(this.subscriptionId=this.context[I].subscribe(this.setTheme))}},{key:"componentWillUnmount",value:function(){this.subscriptionId&&this.context[I].unsubscribe(this.subscriptionId)}},{key:"render",value:function(){return a?F.createElement(e,z({},this.props,this.state)):e.call(this,z({},this.props,this.state),this.context)}}]),r}(F.Component);i.propTypes={theme:U.object};var s=L({},I,U.object),l=null;return Object.defineProperty(i,"contextTypes",{enumerable:!0,configurable:!0,set:function(e){l=e},get:function(){return l?z({},s,l):s}}),i}function a(e){var t=V.call(e);return"[object Function]"===t||"function"==typeof e&&"[object RegExp]"!==t||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)}function i(e){return Z(e)===!0&&"[object Object]"===Object.prototype.toString.call(e)}function s(e){function t(){return s}function r(e){s=e;for(var t=Object.keys(a),r=0,n=t.length;r<n;r++)a[t[r]]&&a[t[r]](e)}function n(e){if("function"!=typeof e)throw new Error("listener must be a function.");var t=i;return a[t]=e,i+=1,t}function o(e){a[e]=void 0}var a={},i=1,s=e;return{getState:t,setState:r,subscribe:n,unsubscribe:o}}function l(e){var t=[],r=[];return e.toString().split(" ").forEach(function(e){if(0===e.indexOf("css-")){var n=u(e);r.push(n)}else t.push(e)}),{glamorlessClassName:t,glamorStyles:r}}function u(e){return L({},"data-"+e,"")}function c(e){var t=e.styles,r=e.props,n=e.cssOverrides,o=e.cssProp,a=e.context,i=e.displayName,s=p([].concat(Q(t),[r.className,n,o]),r,a),l=s.mappedArgs,u=s.nonGlamorClassNames,c=!1,f=c?{label:i}:null,d=Y.css.apply(void 0,[f].concat(Q(l))).toString(),h=u.join(" ").trim();return(d+" "+h).trim()}function p(e,t,r){for(var n=void 0,o=[],a=[],i=0;i<e.length;i++)if(n=e[i],"function"==typeof n){var s=n(t,r);if("string"==typeof s){var u=l(s),c=u.glamorStyles,f=u.glamorlessClassName;o.push.apply(o,Q(c)),a.push.apply(a,Q(f))}else o.push(s)}else if("string"==typeof n){var d=l(n),h=d.glamorStyles,m=d.glamorlessClassName;o.push.apply(o,Q(h)),a.push.apply(a,Q(m))}else if(Array.isArray(n)){var g=p(n,t,r);o.push.apply(o,Q(g.mappedArgs)),a.push.apply(a,Q(g.nonGlamorClassNames))}else o.push(n);return{mappedArgs:o,nonGlamorClassNames:a}}function f(e){function t(n){function a(e){return t(n,z({},s,e))}function i(){function i(e,t,r){if(!p)return!0;var n=!0;return r&&(p(r.props,e,r.context,t)||(n=!1)),n}for(var s=arguments.length,f=Array(s),m=0;m<s;m++)f[m]=arguments[m];var y=o(function(t,r){t=d(y.propsToApply,{},t,r);var n=i(t,r,this.previous);p&&(this.previous={props:t,context:r});var o=e(t,y),a=o.toForward,s=o.cssOverrides,l=o.cssProp;return this.className=n?c({styles:y.styles,props:t,cssOverrides:s,cssProp:l,context:r,displayName:y.displayName}):this.className,F.createElement(y.comp,z({ref:"innerRef"in a?void 0:t.innerRef},a,{className:this.className}))},{noWarn:!0,createElement:!1});return y.propTypes={className:U.oneOfType([U.string,U.object]),cssOverrides:U.object,innerRef:U.func,glam:U.object},Object.assign(y,r({comp:n,styles:f,rootEl:l,filterProps:h,forwardProps:g,displayName:u,propsToApply:v}),{isGlamorousComponent:!0,propsAreCssOverrides:b,withComponent:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=y.forwardProps,o=y.filterProps,a=J(y,["forwardProps","filterProps"]);return t(z({},a,{comp:e}),z({forwardProps:n,filterProps:o},r))()},withProps:function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return t(y,{withProps:r})()},withConfig:a}),y}var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=s.rootEl,u=s.displayName,p=s.shouldClassNameUpdate,f=s.filterProps,h=void 0===f?[]:f,m=s.forwardProps,g=void 0===m?[]:m,y=s.propsAreCssOverrides,b=void 0===y?n.propsAreCssOverrides:y,v=s.withProps;return Object.assign(i,{withConfig:a}),i}function r(e){var t=e.comp,r=e.styles,n=e.rootEl,o=e.filterProps,a=e.forwardProps,i=e.displayName,s=e.propsToApply,l=t.comp?t.comp:t,u=t.propsToApply?[].concat(Q(t.propsToApply),Q(h(s))):h(s);return{styles:m(t.styles,r),comp:l,rootEl:n||l,forwardProps:m(t.forwardProps,a),filterProps:m(t.filterProps,o),displayName:i||"glamorous("+g(t)+")",propsToApply:u}}return t}function d(e,t,r,n){return e.forEach(function(e){return"function"==typeof e?Object.assign(t,e(Object.assign({},t,r),n)):Array.isArray(e)?Object.assign(t,d(e,t,r,n)):Object.assign(t,e)}),Object.assign(t,r)}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(e)?e:[e]}function m(e,t){return e?e.concat(t):t}function g(e){return"string"==typeof e?e:e.displayName||e.name||"unknown"}function y(e,t){var r=t&&t.cache?t.cache:$,n=t&&t.serializer?t.serializer:O,o=t&&t.strategy?t.strategy:w;return o(e,{cache:r,serializer:n})}function b(e){return null==e||"function"!=typeof e&&"object"!=typeof e}function v(e,t,r,n){var o=b(n)?n:r(n);if(!t.has(o)){var a=e.call(this,n);return t.set(o,a),a}return t.get(o)}function C(e,t,r){var n=Array.prototype.slice.call(arguments,3),o=r(n);if(!t.has(o)){var a=e.apply(this,n);return t.set(o,a),a}return t.get(o)}function A(e,t,r,n,o){return r.bind(t,e,n,o)}function w(e,t){var r=1===e.length?v:C;return A(e,this,r,t.cache.create(),t.serializer)}function k(e,t){var r=C;return A(e,this,r,t.cache.create(),t.serializer)}function x(e,t){var r=v;return A(e,this,r,t.cache.create(),t.serializer)}function O(){return JSON.stringify(arguments)}function D(){this.cache=Object.create(null)}function T(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function S(e,t){return t={exports:{}},e(t,t.exports),t.exports}function E(e,t){var r=t.propsAreCssOverrides,n=t.rootEl,o=t.filterProps,a=t.forwardProps,i=e.css,s=e.innerRef,l=(e.theme,e.className,e.glam,J(e,["css","innerRef","theme","className","glam"]));void 0!==s&&a.indexOf("innerRef")!==-1&&(l.innerRef=s);var u={toForward:{},cssProp:i,cssOverrides:{}};return r||"string"==typeof n||0!==o.length?Object.keys(l).reduce(function(e,t){return o.indexOf(t)!==-1?e:(a.indexOf(t)!==-1||Tt(n,t)?e.toForward[t]=l[t]:r&&(e.cssOverrides[t]=l[t]),e)},u):(u.toForward=l,u)}function P(e){return e.slice(0,1).toUpperCase()+e.slice(1)}var F=n(r(6)),Y=r(75),B=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","element","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rbc","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"],j=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","animation","audio","canvas","circle","clipPath","color-profile","cursor","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","handler","hatch","hatchpath","hkern","iframe","image","line","linearGradient","listener","marker","mask","mesh","meshgradient","meshpatch","meshrow","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","prefetch","radialGradient","rect","script","set","solidColor","solidcolor","stop","style","svg","switch","symbol","tbreak","text","textArea","textPath","title","tref","tspan","unknown","use","video","view","vkern"],M=B.concat(j).filter(function(e,t,r){return r.indexOf(e)===t}),I="__glamorous__",R=!1,U=void 0;if(R){if(F.PropTypes||(U=function(){return U},["array","bool","func","number","object","string","symbol","any","arrayOf","element","instanceOf","node","objectOf","oneOf","oneOfType","shape","exact"].forEach(function(e){U[e]=U})),!F.Children){var H={map:function(e,t,r){return null==e?null:(e=H.toArray(e),r&&r!==e&&(t=t.bind(r)),e.map(t))},forEach:function(e,t,r){return null==e?null:(e=H.toArray(e),r&&r!==e&&(t=t.bind(r)),void e.forEach(t))},count:function(e){return e&&e.length||0},only:function(e){if(e=H.toArray(e),1!==e.length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){return null==e?[]:[].concat(e)}};F.Children=H}}else if(parseFloat(F.version.slice(0,4))>=15.5)try{U=r(11)}catch(e){}U=U||F.PropTypes;var N=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},G=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),L=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},J=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},q=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Q=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},K=a,V=Object.prototype.toString,Z=function(e){return null!=e&&"object"==typeof e&&Array.isArray(e)===!1},X=function(e){var t,r;return i(e)!==!1&&(t=e.constructor,"function"==typeof t&&(r=t.prototype,i(r)!==!1&&r.hasOwnProperty("isPrototypeOf")!==!1))},_=function(e){function t(){var e,r,n,o;N(this,t);for(var a=arguments.length,i=Array(a),l=0;l<a;l++)i[l]=arguments[l];return r=n=q(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.broadcast=s(n.props.theme),n.setOuterTheme=function(e){n.outerTheme=e},o=r,q(n,o)}return W(t,e),G(t,[{key:"getTheme",value:function(e){var t=e||this.props.theme;if(K(t)){var r=t(this.outerTheme);if(!X(r))throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");return r}return z({},this.outerTheme,t)}},{key:"getChildContext",value:function(){return L({},I,this.broadcast)}},{key:"componentDidMount",value:function(){this.context[I]&&(this.subscriptionId=this.context[I].subscribe(this.setOuterTheme))}},{key:"componentWillMount",value:function(){this.context[I]&&(this.setOuterTheme(this.context[I].getState()),this.broadcast.setState(this.getTheme()))}},{key:"componentWillReceiveProps",value:function(e){this.props.theme!==e.theme&&this.broadcast.setState(this.getTheme(e.theme))}},{key:"componentWillUnmount",value:function(){this.subscriptionId&&this.context[I].unsubscribe(this.subscriptionId)}},{key:"render",value:function(){return this.props.children?F.Children.only(this.props.children):null}}]),t}(F.Component);_.childContextTypes=L({},I,U.object.isRequired),_.contextTypes=L({},I,U.object),_.propTypes={theme:U.oneOfType([U.object,U.func]).isRequired,children:U.node},D.prototype.has=function(e){return e in this.cache},D.prototype.get=function(e){return this.cache[e]},D.prototype.set=function(e,t){this.cache[e]=t};var $={create:function(){return new D}},ee=y,te={variadic:k,monadic:x};ee.strategies=te;var re=["coords","download","href","name","rel","shape","target","type"],ne=["title"],oe=["alt","height","name","width"],ae=["alt","coords","download","href","rel","shape","target","type"],ie=["controls","loop","muted","preload","src"],se=["href","target"],le=["size"],ue=["dir"],ce=["cite"],pe=["disabled","form","name","type","value"],fe=["height","width"],de=["span","width"],he=["span","width"],me=["value"],ge=["cite"],ye=["open"],be=["title"],ve=["open"],Ce=["height","src","type","width"],Ae=["disabled","form","name"],we=["size"],ke=["accept","action","method","name","target"],xe=["name","scrolling","src"],Oe=["cols","rows"],De=["profile"],Te=["size","width"],Se=["manifest"],Ee=["height","name","sandbox","scrolling","src","width"],Pe=["alt","height","name","sizes","src","width"],Fe=["accept","alt","autoCapitalize","autoCorrect","autoSave","checked","defaultChecked","defaultValue","disabled","form","height","list","max","min","multiple","name","onChange","pattern","placeholder","required","results","size","src","step","title","type","value","width"],Ye=["cite"],Be=["challenge","disabled","form","name"],je=["form"],Me=["type","value"],Ie=["color","href","integrity","media","nonce","rel","scope","sizes","target","title","type"],Re=["name"],Ue=["content","name"],He=["high","low","max","min","optimum","value"],Ne=["data","form","height","name","type","width"],Ge=["reversed","start","type"],Le=["disabled","label"],ze=["disabled","label","selected","value"],We=["form","name"],Je=["name","type","value"],qe=["width"],Qe=["max","value"],Ke=["cite"],Ve=["async","defer","integrity","nonce","src","type"],Ze=["defaultValue","disabled","form","multiple","name","onChange","required","size","value"],Xe=["name"],_e=["media","sizes","src","type"],$e=["media","nonce","title","type"],et=["summary","width"],tt=["headers","height","scope","width"],rt=["autoCapitalize","autoCorrect","cols","defaultValue","disabled","form","name","onChange","placeholder","required","rows","value","wrap"],nt=["headers","height","scope","width"],ot=["default","kind","label","src"],at=["type"],it=["controls","height","loop","muted","poster","preload","src","width"],st=["accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baseProfile","baselineShift","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","color","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","height","horizAdvX","horizOriginX","ideographic","imageRendering","in","in2","intercept","k","k1","k2","k3","k4","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","points","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","scale","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","vHanging","vIdeographic","vMathematical","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","viewBox","viewTarget","visibility","width","widths","wordSpacing","writingMode","x","x1","x2","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlSpace","xmlns","xmlnsXlink","y","y1","y2","yChannelSelector","z","zoomAndPan"],lt={html:["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],svg:["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"]},ut={a:re,abbr:ne,applet:oe,area:ae,audio:ie,base:se,basefont:le,bdo:ue,blockquote:ce,button:pe,canvas:fe,col:de,colgroup:he,data:me,del:ge,details:ye,dfn:be,dialog:ve,embed:Ce,fieldset:Ae,font:we,form:ke,frame:xe,frameset:Oe,head:De,hr:Te,html:Se,iframe:Ee,img:Pe,input:Fe,ins:Ye,keygen:Be,label:je,li:Me,link:Ie,map:Re,meta:Ue,meter:He,object:Ne,ol:Ge,optgroup:Le,option:ze,output:We,param:Je,pre:qe,progress:Qe,q:Ke,script:Ve,select:Ze,slot:Xe,source:_e,style:$e,table:et,td:tt,textarea:rt,th:nt,track:ot,ul:at,video:it,svg:st,elements:lt,"*":["about","acceptCharset","accessKey","allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","capture","cellPadding","cellSpacing","charSet","classID","className","colSpan","contentEditable","contextMenu","crossOrigin","dangerouslySetInnerHTML","datatype","dateTime","dir","draggable","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hidden","hrefLang","htmlFor","httpEquiv","icon","id","inlist","inputMode","is","itemID","itemProp","itemRef","itemScope","itemType","keyParams","keyType","lang","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","prefix","property","radioGroup","readOnly","resource","role","rowSpan","scoped","seamless","security","spellCheck","srcDoc","srcLang","srcSet","style","suppressContentEditableWarning","tabIndex","title","typeof","unselectable","useMap","vocab","wmode"]},ct=Object.freeze({a:re,abbr:ne,applet:oe,area:ae,audio:ie,base:se,basefont:le,bdo:ue,blockquote:ce,button:pe,canvas:fe,col:de,colgroup:he,data:me,del:ge,details:ye,dfn:be,dialog:ve,embed:Ce,fieldset:Ae,font:we,form:ke,frame:xe,frameset:Oe,head:De,hr:Te,html:Se,iframe:Ee,img:Pe,input:Fe,ins:Ye,keygen:Be,label:je,li:Me,link:Ie,map:Re,meta:Ue,meter:He,object:Ne,ol:Ge,optgroup:Le,option:ze,output:We,param:Je,pre:qe,progress:Qe,q:Ke,script:Ve,select:Ze,slot:Xe,source:_e,style:$e,table:et,td:tt,textarea:rt,th:nt,track:ot,ul:at,video:it,svg:st,elements:lt,default:ut}),pt=ct&&ut||ct,ft=S(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=pt,e.exports=pt}),dt=T(ft),ht=["children","dangerouslySetInnerHTML","key","ref","autoFocus","defaultValue","valueLink","defaultChecked","checkedLink","innerHTML","suppressContentEditableWarning","onFocusIn","onFocusOut","className","onCopy","onCut","onPaste","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onInvalid","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onScroll","onWheel","onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting","onLoad","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd","onCopyCapture","onCutCapture","onPasteCapture","onCompositionEndCapture","onCompositionStartCapture","onCompositionUpdateCapture","onKeyDownCapture","onKeyPressCapture","onKeyUpCapture","onFocusCapture","onBlurCapture","onChangeCapture","onInputCapture","onSubmitCapture","onClickCapture","onContextMenuCapture","onDoubleClickCapture","onDragCapture","onDragEndCapture","onDragEnterCapture","onDragExitCapture","onDragLeaveCapture","onDragOverCapture","onDragStartCapture","onDropCapture","onMouseDownCapture","onMouseEnterCapture","onMouseLeaveCapture","onMouseMoveCapture","onMouseOutCapture","onMouseOverCapture","onMouseUpCapture","onSelectCapture","onTouchCancelCapture","onTouchEndCapture","onTouchMoveCapture","onTouchStartCapture","onScrollCapture","onWheelCapture","onAbortCapture","onCanPlayCapture","onCanPlayThroughCapture","onDurationChangeCapture","onEmptiedCapture","onEncryptedCapture","onEndedCapture","onErrorCapture","onLoadedDataCapture","onLoadedMetadataCapture","onLoadStartCapture","onPauseCapture","onPlayCapture","onPlayingCapture","onProgressCapture","onRateChangeCapture","onSeekedCapture","onSeekingCapture","onStalledCapture","onSuspendCapture","onTimeUpdateCapture","onVolumeChangeCapture","onWaitingCapture","onLoadCapture","onAnimationStartCapture","onAnimationEndCapture","onAnimationIterationCapture","onTransitionEndCapture"];R&&ht.push("autocomplete","autofocus","class","for","onDblClick","onSearch","slot","srcset");var mt=dt["*"],gt=dt.elements.svg,yt=dt.elements.html,bt=["color","height","width"],vt=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",Ct=vt+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",At=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+Ct+"]*$")),wt=function(e){return"svg"===e||yt.indexOf(e)===-1&&gt.indexOf(e)!==-1},kt=function(e,t){var r=void 0;return r=wt(t)?dt.svg:dt[t]||[],mt.indexOf(e)!==-1||r.indexOf(e)!==-1},xt=function(e){return bt.indexOf(e)!==-1},Ot=function(e){return ht.indexOf(e)!==-1},Dt=function(e,t){return"string"!=typeof e||(kt(t,e)||Ot(t)||At(t.toLowerCase()))&&(!xt(t)||wt(e))},Tt=ee(Dt),St=f(E);Object.assign(St,M.reduce(function(e,t){return e[t]=St(t),e},{})),Object.assign(St,M.reduce(function(e,t){var r=P(t);return e[r]=St[t](),e[r].displayName="glamorous."+r,e[r].propsAreCssOverrides=!0,e},{})),St.default=St;var Et=Object.freeze({default:St,ThemeProvider:_,withTheme:o}),Pt=St;Object.assign(Pt,Object.keys(Et).reduce(function(e,t){return"default"!==t&&(e[t]=Et[t]),e},{})),e.exports=Pt},362:function(e,t,r){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=r(6),a=(n(o),r(145)),i=n(a),s=r(75),l=r(316),u=n(l),c=r(600),p=n(c),f=r(103);r(502);var d=(0,s.css)({float:"right"});t.default=function(t){var r=t.children,n=t.data;return e.createElement(i.default.Div,null,e.createElement("div",{className:"headtastic"},e.createElement("div",{className:"portal"},e.createElement(u.default,{to:"/"},e.createElement(i.default.H3,{marginBottom:(0,f.rhythm)(0),display:"inline-block"},n.site.siteMetadata.title)),e.createElement(u.default,{className:d,to:"/about/"},"About"))),e.createElement("div",{className:"legitLogo"},e.createElement("img",{src:p.default,height:"242",alt:"Legitblock",className:"Thor-center"})),e.createElement("div",{className:"portal"},r()))};t.query="** extracted graphql fragment **"}).call(t,r(38))},600:function(e,t){e.exports="data:image/png;base64,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";
},502:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-9f977d3cc1d78825e1b6.js.map