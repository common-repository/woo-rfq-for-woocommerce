(()=>{var e={856:function(e){e.exports=function(){"use strict";const{entries:e,setPrototypeOf:t,isFrozen:n,getPrototypeOf:o,getOwnPropertyDescriptor:r}=Object;let{freeze:i,seal:a,create:l}=Object,{apply:c,construct:s}="undefined"!=typeof Reflect&&Reflect;i||(i=function(e){return e}),a||(a=function(e){return e}),c||(c=function(e,t,n){return e.apply(t,n)}),s||(s=function(e,t){return new e(...t)});const u=A(Array.prototype.forEach),m=A(Array.prototype.pop),p=A(Array.prototype.push),f=A(String.prototype.toLowerCase),d=A(String.prototype.toString),h=A(String.prototype.match),g=A(String.prototype.replace),y=A(String.prototype.indexOf),_=A(String.prototype.trim),T=A(Object.prototype.hasOwnProperty),E=A(RegExp.prototype.test),w=(b=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s(b,t)});var b;function A(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return c(e,t,o)}}function N(e,o){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f;t&&t(e,null);let i=o.length;for(;i--;){let t=o[i];if("string"==typeof t){const e=r(t);e!==t&&(n(o)||(o[i]=e),t=e)}e[t]=!0}return e}function S(e){for(let t=0;t<e.length;t++)T(e,t)||(e[t]=null);return e}function R(t){const n=l(null);for(const[o,r]of e(t))T(t,o)&&(Array.isArray(r)?n[o]=S(r):r&&"object"==typeof r&&r.constructor===Object?n[o]=R(r):n[o]=r);return n}function k(e,t){for(;null!==e;){const n=r(e,t);if(n){if(n.get)return A(n.get);if("function"==typeof n.value)return A(n.value)}e=o(e)}return function(){return null}}const C=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),x=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),L=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),v=i(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),O=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),D=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),M=i(["#text"]),I=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),U=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),P=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),F=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),H=a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),z=a(/<%[\w\W]*|[\w\W]*%>/gm),B=a(/\${[\w\W]*}/gm),j=a(/^data-[\-\w.\u00B7-\uFFFF]/),q=a(/^aria-[\-\w]+$/),W=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),G=a(/^(?:\w+script|data):/i),Y=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Q=a(/^html$/i),X=a(/^[a-z][.\w]*(-[.\w]+)+$/i);var $=Object.freeze({__proto__:null,MUSTACHE_EXPR:H,ERB_EXPR:z,TMPLIT_EXPR:B,DATA_ATTR:j,ARIA_ATTR:q,IS_ALLOWED_URI:W,IS_SCRIPT_OR_DATA:G,ATTR_WHITESPACE:Y,DOCTYPE_NAME:Q,CUSTOM_ELEMENT:X});const K=1,V=3,Z=7,J=8,ee=9,te=function(){return"undefined"==typeof window?null:window};return function t(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te();const o=e=>t(e);if(o.version="3.1.6",o.removed=[],!n||!n.document||n.document.nodeType!==ee)return o.isSupported=!1,o;let{document:r}=n;const a=r,c=a.currentScript,{DocumentFragment:s,HTMLTemplateElement:b,Node:A,Element:S,NodeFilter:H,NamedNodeMap:z=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:B,DOMParser:j,trustedTypes:q}=n,G=S.prototype,Y=k(G,"cloneNode"),X=k(G,"remove"),ne=k(G,"nextSibling"),oe=k(G,"childNodes"),re=k(G,"parentNode");if("function"==typeof b){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let ie,ae="";const{implementation:le,createNodeIterator:ce,createDocumentFragment:se,getElementsByTagName:ue}=r,{importNode:me}=a;let pe={};o.isSupported="function"==typeof e&&"function"==typeof re&&le&&void 0!==le.createHTMLDocument;const{MUSTACHE_EXPR:fe,ERB_EXPR:de,TMPLIT_EXPR:he,DATA_ATTR:ge,ARIA_ATTR:ye,IS_SCRIPT_OR_DATA:_e,ATTR_WHITESPACE:Te,CUSTOM_ELEMENT:Ee}=$;let{IS_ALLOWED_URI:we}=$,be=null;const Ae=N({},[...C,...x,...L,...O,...M]);let Ne=null;const Se=N({},[...I,...U,...P,...F]);let Re=Object.seal(l(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ke=null,Ce=null,xe=!0,Le=!0,ve=!1,Oe=!0,De=!1,Me=!0,Ie=!1,Ue=!1,Pe=!1,Fe=!1,He=!1,ze=!1,Be=!0,je=!1,qe=!0,We=!1,Ge={},Ye=null;const Qe=N({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Xe=null;const $e=N({},["audio","video","img","source","image","track"]);let Ke=null;const Ve=N({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ze="http://www.w3.org/1998/Math/MathML",Je="http://www.w3.org/2000/svg",et="http://www.w3.org/1999/xhtml";let tt=et,nt=!1,ot=null;const rt=N({},[Ze,Je,et],d);let it=null;const at=["application/xhtml+xml","text/html"];let lt=null,ct=null;const st=r.createElement("form"),ut=function(e){return e instanceof RegExp||e instanceof Function},mt=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!ct||ct!==e){if(e&&"object"==typeof e||(e={}),e=R(e),it=-1===at.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,lt="application/xhtml+xml"===it?d:f,be=T(e,"ALLOWED_TAGS")?N({},e.ALLOWED_TAGS,lt):Ae,Ne=T(e,"ALLOWED_ATTR")?N({},e.ALLOWED_ATTR,lt):Se,ot=T(e,"ALLOWED_NAMESPACES")?N({},e.ALLOWED_NAMESPACES,d):rt,Ke=T(e,"ADD_URI_SAFE_ATTR")?N(R(Ve),e.ADD_URI_SAFE_ATTR,lt):Ve,Xe=T(e,"ADD_DATA_URI_TAGS")?N(R($e),e.ADD_DATA_URI_TAGS,lt):$e,Ye=T(e,"FORBID_CONTENTS")?N({},e.FORBID_CONTENTS,lt):Qe,ke=T(e,"FORBID_TAGS")?N({},e.FORBID_TAGS,lt):{},Ce=T(e,"FORBID_ATTR")?N({},e.FORBID_ATTR,lt):{},Ge=!!T(e,"USE_PROFILES")&&e.USE_PROFILES,xe=!1!==e.ALLOW_ARIA_ATTR,Le=!1!==e.ALLOW_DATA_ATTR,ve=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Oe=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,De=e.SAFE_FOR_TEMPLATES||!1,Me=!1!==e.SAFE_FOR_XML,Ie=e.WHOLE_DOCUMENT||!1,Fe=e.RETURN_DOM||!1,He=e.RETURN_DOM_FRAGMENT||!1,ze=e.RETURN_TRUSTED_TYPE||!1,Pe=e.FORCE_BODY||!1,Be=!1!==e.SANITIZE_DOM,je=e.SANITIZE_NAMED_PROPS||!1,qe=!1!==e.KEEP_CONTENT,We=e.IN_PLACE||!1,we=e.ALLOWED_URI_REGEXP||W,tt=e.NAMESPACE||et,Re=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&ut(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Re.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ut(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Re.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Re.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),De&&(Le=!1),He&&(Fe=!0),Ge&&(be=N({},M),Ne=[],!0===Ge.html&&(N(be,C),N(Ne,I)),!0===Ge.svg&&(N(be,x),N(Ne,U),N(Ne,F)),!0===Ge.svgFilters&&(N(be,L),N(Ne,U),N(Ne,F)),!0===Ge.mathMl&&(N(be,O),N(Ne,P),N(Ne,F))),e.ADD_TAGS&&(be===Ae&&(be=R(be)),N(be,e.ADD_TAGS,lt)),e.ADD_ATTR&&(Ne===Se&&(Ne=R(Ne)),N(Ne,e.ADD_ATTR,lt)),e.ADD_URI_SAFE_ATTR&&N(Ke,e.ADD_URI_SAFE_ATTR,lt),e.FORBID_CONTENTS&&(Ye===Qe&&(Ye=R(Ye)),N(Ye,e.FORBID_CONTENTS,lt)),qe&&(be["#text"]=!0),Ie&&N(be,["html","head","body"]),be.table&&(N(be,["tbody"]),delete ke.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw w('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw w('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');ie=e.TRUSTED_TYPES_POLICY,ae=ie.createHTML("")}else void 0===ie&&(ie=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const o="data-tt-policy-suffix";t&&t.hasAttribute(o)&&(n=t.getAttribute(o));const r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}}(q,c)),null!==ie&&"string"==typeof ae&&(ae=ie.createHTML(""));i&&i(e),ct=e}},pt=N({},["mi","mo","mn","ms","mtext"]),ft=N({},["foreignobject","annotation-xml"]),dt=N({},["title","style","font","a","script"]),ht=N({},[...x,...L,...v]),gt=N({},[...O,...D]),yt=function(e){p(o.removed,{element:e});try{re(e).removeChild(e)}catch(t){X(e)}},_t=function(e,t){try{p(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){p(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Ne[e])if(Fe||He)try{yt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Tt=function(e){let t=null,n=null;if(Pe)e="<remove></remove>"+e;else{const t=h(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===it&&tt===et&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const o=ie?ie.createHTML(e):e;if(tt===et)try{t=(new j).parseFromString(o,it)}catch(e){}if(!t||!t.documentElement){t=le.createDocument(tt,"template",null);try{t.documentElement.innerHTML=nt?ae:o}catch(e){}}const i=t.body||t.documentElement;return e&&n&&i.insertBefore(r.createTextNode(n),i.childNodes[0]||null),tt===et?ue.call(t,Ie?"html":"body")[0]:Ie?t.documentElement:i},Et=function(e){return ce.call(e.ownerDocument||e,e,H.SHOW_ELEMENT|H.SHOW_COMMENT|H.SHOW_TEXT|H.SHOW_PROCESSING_INSTRUCTION|H.SHOW_CDATA_SECTION,null)},wt=function(e){return e instanceof B&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof z)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},bt=function(e){return"function"==typeof A&&e instanceof A},At=function(e,t,n){pe[e]&&u(pe[e],(e=>{e.call(o,t,n,ct)}))},Nt=function(e){let t=null;if(At("beforeSanitizeElements",e,null),wt(e))return yt(e),!0;const n=lt(e.nodeName);if(At("uponSanitizeElement",e,{tagName:n,allowedTags:be}),e.hasChildNodes()&&!bt(e.firstElementChild)&&E(/<[/\w]/g,e.innerHTML)&&E(/<[/\w]/g,e.textContent))return yt(e),!0;if(e.nodeType===Z)return yt(e),!0;if(Me&&e.nodeType===J&&E(/<[/\w]/g,e.data))return yt(e),!0;if(!be[n]||ke[n]){if(!ke[n]&&Rt(n)){if(Re.tagNameCheck instanceof RegExp&&E(Re.tagNameCheck,n))return!1;if(Re.tagNameCheck instanceof Function&&Re.tagNameCheck(n))return!1}if(qe&&!Ye[n]){const t=re(e)||e.parentNode,n=oe(e)||e.childNodes;if(n&&t)for(let o=n.length-1;o>=0;--o){const r=Y(n[o],!0);r.__removalCount=(e.__removalCount||0)+1,t.insertBefore(r,ne(e))}}return yt(e),!0}return e instanceof S&&!function(e){let t=re(e);t&&t.tagName||(t={namespaceURI:tt,tagName:"template"});const n=f(e.tagName),o=f(t.tagName);return!!ot[e.namespaceURI]&&(e.namespaceURI===Je?t.namespaceURI===et?"svg"===n:t.namespaceURI===Ze?"svg"===n&&("annotation-xml"===o||pt[o]):Boolean(ht[n]):e.namespaceURI===Ze?t.namespaceURI===et?"math"===n:t.namespaceURI===Je?"math"===n&&ft[o]:Boolean(gt[n]):e.namespaceURI===et?!(t.namespaceURI===Je&&!ft[o])&&!(t.namespaceURI===Ze&&!pt[o])&&!gt[n]&&(dt[n]||!ht[n]):!("application/xhtml+xml"!==it||!ot[e.namespaceURI]))}(e)?(yt(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!E(/<\/no(script|embed|frames)/i,e.innerHTML)?(De&&e.nodeType===V&&(t=e.textContent,u([fe,de,he],(e=>{t=g(t,e," ")})),e.textContent!==t&&(p(o.removed,{element:e.cloneNode()}),e.textContent=t)),At("afterSanitizeElements",e,null),!1):(yt(e),!0)},St=function(e,t,n){if(Be&&("id"===t||"name"===t)&&(n in r||n in st))return!1;if(Le&&!Ce[t]&&E(ge,t));else if(xe&&E(ye,t));else if(!Ne[t]||Ce[t]){if(!(Rt(e)&&(Re.tagNameCheck instanceof RegExp&&E(Re.tagNameCheck,e)||Re.tagNameCheck instanceof Function&&Re.tagNameCheck(e))&&(Re.attributeNameCheck instanceof RegExp&&E(Re.attributeNameCheck,t)||Re.attributeNameCheck instanceof Function&&Re.attributeNameCheck(t))||"is"===t&&Re.allowCustomizedBuiltInElements&&(Re.tagNameCheck instanceof RegExp&&E(Re.tagNameCheck,n)||Re.tagNameCheck instanceof Function&&Re.tagNameCheck(n))))return!1}else if(Ke[t]);else if(E(we,g(n,Te,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==y(n,"data:")||!Xe[e])if(ve&&!E(_e,g(n,Te,"")));else if(n)return!1;return!0},Rt=function(e){return"annotation-xml"!==e&&h(e,Ee)},kt=function(e){At("beforeSanitizeAttributes",e,null);const{attributes:t}=e;if(!t)return;const n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ne};let r=t.length;for(;r--;){const i=t[r],{name:a,namespaceURI:l,value:c}=i,s=lt(a);let p="value"===a?c:_(c);if(n.attrName=s,n.attrValue=p,n.keepAttr=!0,n.forceKeepAttr=void 0,At("uponSanitizeAttribute",e,n),p=n.attrValue,Me&&E(/((--!?|])>)|<\/(style|title)/i,p)){_t(a,e);continue}if(n.forceKeepAttr)continue;if(_t(a,e),!n.keepAttr)continue;if(!Oe&&E(/\/>/i,p)){_t(a,e);continue}De&&u([fe,de,he],(e=>{p=g(p,e," ")}));const f=lt(e.nodeName);if(St(f,s,p)){if(!je||"id"!==s&&"name"!==s||(_t(a,e),p="user-content-"+p),ie&&"object"==typeof q&&"function"==typeof q.getAttributeType)if(l);else switch(q.getAttributeType(f,s)){case"TrustedHTML":p=ie.createHTML(p);break;case"TrustedScriptURL":p=ie.createScriptURL(p)}try{l?e.setAttributeNS(l,a,p):e.setAttribute(a,p),wt(e)?yt(e):m(o.removed)}catch(e){}}}At("afterSanitizeAttributes",e,null)},Ct=function e(t){let n=null;const o=Et(t);for(At("beforeSanitizeShadowDOM",t,null);n=o.nextNode();)At("uponSanitizeShadowNode",n,null),Nt(n)||(n.content instanceof s&&e(n.content),kt(n));At("afterSanitizeShadowDOM",t,null)};return o.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null,r=null,i=null,l=null;if(nt=!e,nt&&(e="\x3c!--\x3e"),"string"!=typeof e&&!bt(e)){if("function"!=typeof e.toString)throw w("toString is not a function");if("string"!=typeof(e=e.toString()))throw w("dirty is not a string, aborting")}if(!o.isSupported)return e;if(Ue||mt(t),o.removed=[],"string"==typeof e&&(We=!1),We){if(e.nodeName){const t=lt(e.nodeName);if(!be[t]||ke[t])throw w("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof A)n=Tt("\x3c!----\x3e"),r=n.ownerDocument.importNode(e,!0),r.nodeType===K&&"BODY"===r.nodeName||"HTML"===r.nodeName?n=r:n.appendChild(r);else{if(!Fe&&!De&&!Ie&&-1===e.indexOf("<"))return ie&&ze?ie.createHTML(e):e;if(n=Tt(e),!n)return Fe?null:ze?ae:""}n&&Pe&&yt(n.firstChild);const c=Et(We?e:n);for(;i=c.nextNode();)Nt(i)||(i.content instanceof s&&Ct(i.content),kt(i));if(We)return e;if(Fe){if(He)for(l=se.call(n.ownerDocument);n.firstChild;)l.appendChild(n.firstChild);else l=n;return(Ne.shadowroot||Ne.shadowrootmode)&&(l=me.call(a,l,!0)),l}let m=Ie?n.outerHTML:n.innerHTML;return Ie&&be["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&E(Q,n.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+m),De&&u([fe,de,he],(e=>{m=g(m,e," ")})),ie&&ze?ie.createHTML(m):m},o.setConfig=function(){mt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Ue=!0},o.clearConfig=function(){ct=null,Ue=!1},o.isValidAttribute=function(e,t,n){ct||mt({});const o=lt(e),r=lt(t);return St(o,r,n)},o.addHook=function(e,t){"function"==typeof t&&(pe[e]=pe[e]||[],p(pe[e],t))},o.removeHook=function(e){if(pe[e])return m(pe[e])},o.removeHooks=function(e){pe[e]&&(pe[e]=[])},o.removeAllHooks=function(){pe={}},o}()}()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}(()=>{"use strict";const e=window.React,t=window.wp.i18n,o=window.wc.wcBlocksRegistry,r=window.wp.htmlEntities,i=window.wc.wcSettings,a=window.wp.element;window.wp.data,n(856),window.jQuery;const l=(0,i.getSetting)("gpls-rfq_data",{}),c=(0,t.__)("Quote Request","woo-rfq-for-woocommerce"),s=(0,r.decodeEntities)(l.title)||c;let u="",m="",p="",f=!1,d="",h="no",g="",y="";jQuery.ajax({async:!1,type:"post",dataType:"json",url:"/wp-admin/admin-ajax.php",data:{action:"gplswoo_get_submit_order_label"},success:function(e){console.log(e),u=e.rfq_cart_wordings_submit_your_rfq_text,m=e.rfq_cart_wordings_proceed_to_rfq,p=e.rfq_cart_link_quote,f=e.rfq_checkout_mode,d=e.rfq_cart_bid,h=e.allow_bid,g=e.cart_url,y=e.checkout_url}}),function(){const{registerCheckoutFilters:e}=window.wc.blocksCheckout,{__}=window.wp.i18n,{registerPlugin:t}=window.wp.plugins,{ExperimentalOrderMeta:n}=window.wc.blocksCheckout;console.log(document.URL),"rfq"===f&&(0===document.URL.indexOf(g)&&e("woo-rfq-for-woocommerce",{proceedToCheckoutButtonLabel:(e,t)=>m}),0===document.URL.indexOf(y)&&e("woo-rfq-for-woocommerce",{placeOrderButtonLabel:(e,t)=>u})),"yes"===h&&jQuery(window).on("load",(function(){jQuery(d).insertAfter(".wp-block-woocommerce-checkout-payment-block"),jQuery(".wc-block-components-checkout-place-order-button").val()?(jQuery(".wc-block-components-checkout-place-order-button").removeAttr("disabled"),jQuery(".gpls_woo_rfq_plus_customer_bid_text").hide()):(jQuery(".wc-block-components-checkout-place-order-button").prop("disabled",!0),jQuery(".gpls_woo_rfq_plus_customer_bid_text").show())}))}();const _=e=>{const{eventRegistration:t,emitResponse:n}=e,{onPaymentSetup:o}=t;return(0,a.useEffect)((()=>{const e=o((async()=>{const e=jQuery("#gpls_woo_rfq_plus_customer_bid").val();return{type:n.responseTypes.SUCCESS,meta:{paymentMethodData:{_woo_rfq_customer_bid:e}}}}));return()=>{e()}}),[n.responseTypes.ERROR,n.responseTypes.SUCCESS,o]),(0,r.decodeEntities)(l.description||"")},T={name:"gpls-rfq",label:(0,e.createElement)((t=>{const{PaymentMethodLabel:n}=t.components;return(0,e.createElement)(n,{text:s})}),null),content:(0,e.createElement)(_,null),edit:(0,e.createElement)(_,null),canMakePayment:()=>!0,ariaLabel:s,supports:{features:l.supports}};(0,o.registerPaymentMethod)(T)})()})();