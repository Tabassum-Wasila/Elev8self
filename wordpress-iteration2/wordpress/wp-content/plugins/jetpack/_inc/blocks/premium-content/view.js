(()=>{var e={63166:(e,t,r)=>{"use strict";r.d(t,{O8:()=>n,mO:()=>i});const o=function(e,t,r){const o=new RegExp("([?&])"+t+"=.*?(&|$)","i"),n=-1!==e.indexOf("?")?"&":"?";return e.match(o)?e.replace(o,"$1"+t+"="+r+"$2"):e+n+t+"="+r},n=function(e){const t=new Date;t.setTime(t.getTime()+31536e6),document.cookie="jp-premium-content-session="+e+"; expires="+t.toGMTString()+"; path=/"},i=function(e,t){let r=o(document.location.href,"token",e);t&&Object.keys(t).forEach((e=>{r=o(r,e,t[e])})),document.location.href=r}},80425:(e,t,r)=>{"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(r.p=window.Jetpack_Block_Assets_Base_Url.url)}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"})(),(()=>{"use strict";r(80425)})(),(()=>{"use strict";var e=r(63166);document.addEventListener("DOMContentLoaded",(function(){let t="";"undefined"!=typeof window&&window.addEventListener("message",(function(r){if("https://subscribe.wordpress.com"===r.origin&&r.data){const o=JSON.parse(r.data);o&&o.result&&o.result.jwt_token&&(t=o.result.jwt_token,(0,e.O8)(t)),o&&"close"===o.action&&t&&(0,e.mO)(t)}}),!1)}))})()})();