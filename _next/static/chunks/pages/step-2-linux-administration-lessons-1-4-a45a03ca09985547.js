(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[786],{1705:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/step-2-linux-administration-lessons-1-4",function(){return t(8949)}])},1551:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);i=!0);}catch(s){l=!0,a=s}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},l=t(1003),s=t(880),c=t(9246);var u={};function f(e,r,t,n){if(e&&l.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=s.useRouter(),o=i.default.useMemo((function(){var r=a(l.resolveHref(n,e.href,!0),2),t=r[0],o=r[1];return{href:t,as:e.as?l.resolveHref(n,e.as):o||t}}),[n,e.href,e.as]),d=o.href,m=o.as,b=e.children,p=e.replace,h=e.shallow,v=e.scroll,y=e.locale;"string"===typeof b&&(b=i.default.createElement("a",null,b));var _=(r=i.default.Children.only(b))&&"object"===typeof r&&r.ref,g=a(c.useIntersection({rootMargin:"200px"}),2),x=g[0],k=g[1],w=i.default.useCallback((function(e){x(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,x]);i.default.useEffect((function(){var e=k&&t&&l.isLocalURL(d),r="undefined"!==typeof y?y:n&&n.locale,a=u[d+"%"+m+(r?"%"+r:"")];e&&!a&&f(n,d,m,{locale:r})}),[m,d,k,y,t,n]);var O={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,o,i,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),r[a?"replace":"push"](t,n,{shallow:o,locale:s,scroll:i}))}(e,n,d,m,p,h,v,y)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,m,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var P="undefined"!==typeof y?y:n&&n.locale,j=n&&n.isLocaleDomain&&l.getDomainLocale(m,P,n&&n.locales,n&&n.domainLocales);O.href=j||l.addBasePath(l.addLocale(m,P,n&&n.defaultLocale))}return i.default.cloneElement(r,O)};r.default=d},9246:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);i=!0);}catch(s){l=!0,a=s}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!l,u=o.useRef(),f=a(o.useState(!1),2),d=f[0],m=f[1],b=a(o.useState(r?r.current:null),2),p=b[0],h=b[1],v=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=s.get(n):(r=s.get(t),c.push(t));if(r)return r;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=a.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return s.set(t,r={id:t,observer:o,elements:a}),r}(t),a=n.id,o=n.observer,i=n.elements;return i.set(e,r),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),s.delete(a);var r=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));r>-1&&c.splice(r,1)}}}(e,(function(e){return e&&m(e)}),{root:p,rootMargin:t}))}),[n,p,t,d]);return o.useEffect((function(){if(!l&&!d){var e=i.requestIdleCallback((function(){return m(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){r&&h(r.current)}),[r]),[v,d]};var o=t(7294),i=t(4686),l="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},8949:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return ie}});var n=t(5893),a=t(7294),o=t(1664),i=t(9192),l=t(2043),s=(t(8834),t(9772)),c=t.n(s),u=t(3733),f=t.n(u);function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){d(e,r,t[r])}))}return e}function b(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=function(e){var r=e.className,t=e.style,a=e.title,o=b(e,["className","style","title"]);return(0,n.jsxs)("svg",m({xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 48 48",height:"1em",width:"1em",style:m({fill:"currentcolor"},t||{}),className:(0,i.AK)("plasmic-default__svg",r)},o,{children:[a&&(0,n.jsx)("title",{children:a}),(0,n.jsx)("path",{d:"M20.455 7a1.5 1.5 0 00-1.016.44l-14 14a1.5 1.5 0 000 2.12l14 14A1.5 1.5 0 0022 36.5v-7.645c2.188-.115 5.577-.115 9.04 1.024 4.1 1.349 7.802 3.98 8.99 9.916A1.5 1.5 0 0043 39.5c0-.109-.032-.187-.033-.295h.004c-.002-.007-.007-.012-.008-.02-.103-9.814-4.543-15.758-9.537-18.992-4.4-2.848-8.769-3.611-11.426-3.908V8.5A1.5 1.5 0 0020.455 7zM19 12.121v5.426a1.5 1.5 0 001.389 1.496c2.004.148 7.032.836 11.406 3.668 2.66 1.722 4.998 4.331 6.517 8.045a17.279 17.279 0 00-6.335-3.727c-4.767-1.567-9.534-1.333-11.618-1.138A1.5 1.5 0 0019 27.385v5.494L8.621 22.5 19 12.121z"})]}))};function h(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function v(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return h(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=new Array,_=new Array("arrowBack");var g={root:["root"]};var x=Object.assign(function(e){var r=function(r){var t=(0,i.xf)(r,{name:e,descendantNames:v(g[e]),internalArgPropNames:_,internalVariantPropNames:y});return function(e){e.variants;var r=e.args,t=e.overrides,n=e.forNode;return e.args,(0,i.eh)("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":n,className:(0,i.AK)(c().all,c().root_reset,c().plasmic_default_styles,c().plasmic_mixins,c().plasmic_tokens,f().root)},i.nR({defaultContents:(0,i.eh)(p,{className:(0,i.AK)(c().all,f().svg__n0RuK),role:"img"}),value:r.arrowBack,className:(0,i.AK)(f().slotTargetArrowBack)}))}({variants:t.variants,args:t.args,overrides:t.overrides,forNode:e})};return r.displayName="root"===e?"PlasmicBackLink":"PlasmicBackLink.".concat(e),r}("root"),{internalVariantProps:y,internalArgProps:_});function k(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function w(e,r){return(0,n.jsx)(x,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){k(e,r,t[r])}))}return e}({root:{ref:r}},e))}var O=a.forwardRef(w),P=t(4412),j=t.n(P);function A(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function C(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){A(e,r,t[r])}))}return e}function L(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var I=function(e){var r=e.className,t=e.style,a=e.title,o=L(e,["className","style","title"]);return(0,n.jsxs)("svg",C({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",height:"1em",width:"1em",style:C({stroke:"currentcolor"},t||{}),className:(0,i.AK)("plasmic-default__svg",r)},o,{children:[a&&(0,n.jsx)("title",{children:a}),(0,n.jsx)("path",{d:"M17.25 19.25H6.75a2 2 0 01-2-2V6.75a2 2 0 012-2h10.5a2 2 0 012 2v10.5a2 2 0 01-2 2z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))};function N(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function K(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){N(e,r,t[r])}))}return e}function B(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var S=function(e){var r=e.className,t=e.style,a=e.title,o=B(e,["className","style","title"]);return(0,n.jsxs)("svg",K({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",height:"1em",width:"1em",style:K({fill:"currentcolor"},t||{}),className:(0,i.AK)("plasmic-default__svg",r)},o,{children:[a&&(0,n.jsx)("title",{children:a}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.75 4A2.75 2.75 0 004 6.75v10.5A2.75 2.75 0 006.75 20h10.5A2.75 2.75 0 0020 17.25V6.75A2.75 2.75 0 0017.25 4H6.75zm9.045 6.265a.75.75 0 00-1.09-1.03l-3.72 3.939L9.28 11.47a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.075-.015l4.25-4.5z",fill:"currentColor"})]}))};function E(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function D(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){E(e,r,t[r])}))}return e}function M(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var z=function(e){var r=e.className,t=e.style,a=e.title,o=M(e,["className","style","title"]);return(0,n.jsxs)("svg",D({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",height:"1em",width:"1em",style:D({stroke:"currentcolor"},t||{}),className:(0,i.AK)("plasmic-default__svg",r)},o,{children:[a&&(0,n.jsx)("title",{children:a}),(0,n.jsx)("path",{d:"M17.25 19.25H6.75a2 2 0 01-2-2V6.75a2 2 0 012-2h10.5a2 2 0 012 2v10.5a2 2 0 01-2 2zm-3-7.25h-4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))};function V(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function W(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function H(e){return function(e){if(Array.isArray(e))return V(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return V(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return V(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var T=new Array("noLabel","isDisabled","isChecked","isIndeterminate"),R=new Array("children","name","value","aria-label","aria-labelledby");var U={root:["root","freeBox","svg","labelContainer"],freeBox:["freeBox","svg"],svg:["svg"],labelContainer:["labelContainer"]};function q(e){var r=function(r){var t=(0,i.xf)(r,{name:e,descendantNames:H(U[e]),internalArgPropNames:R,internalVariantPropNames:T});return function(e){var r,t,n,a,o,l=e.variants,s=e.args,u=e.overrides,f=e.forNode;return e.args,(0,i.eh)(i.Kq,{as:"div","data-plasmic-name":"root","data-plasmic-override":u.root,"data-plasmic-root":!0,"data-plasmic-for-node":f,hasGap:!0,className:(0,i.AK)(c().all,c().root_reset,c().plasmic_default_styles,c().plasmic_mixins,c().plasmic_tokens,j().root,(r={},W(r,j().rootisChecked,(0,i.zK)(l,"isChecked","isChecked")),W(r,j().rootisDisabled,(0,i.zK)(l,"isDisabled","isDisabled")),W(r,j().rootisIndeterminate,(0,i.zK)(l,"isIndeterminate","isIndeterminate")),W(r,j().rootnoLabel,(0,i.zK)(l,"noLabel","noLabel")),r))},(0,i.eh)("div",{"data-plasmic-name":"freeBox","data-plasmic-override":u.freeBox,className:(0,i.AK)(c().all,j().freeBox,(t={},W(t,j().freeBoxisChecked,(0,i.zK)(l,"isChecked","isChecked")),W(t,j().freeBoxisDisabled,(0,i.zK)(l,"isDisabled","isDisabled")),W(t,j().freeBoxisIndeterminate,(0,i.zK)(l,"isIndeterminate","isIndeterminate")),W(t,j().freeBoxnoLabel,(0,i.zK)(l,"noLabel","noLabel")),t))},((0,i.zK)(l,"isIndeterminate","isIndeterminate")||(0,i.zK)(l,"isChecked","isChecked"),(0,i.eh)(i.HM,{"data-plasmic-name":"svg","data-plasmic-override":u.svg,PlasmicIconType:(0,i.zK)(l,"isIndeterminate","isIndeterminate")?z:(0,i.zK)(l,"isChecked","isChecked")?S:I,className:(0,i.AK)(c().all,j().svg,(n={},W(n,j().svgisChecked,(0,i.zK)(l,"isChecked","isChecked")),W(n,j().svgisDisabled,(0,i.zK)(l,"isDisabled","isDisabled")),W(n,j().svgisIndeterminate,(0,i.zK)(l,"isIndeterminate","isIndeterminate")),W(n,j().svgnoLabel,(0,i.zK)(l,"noLabel","noLabel")),n)),role:"img"}))),(0,i.zK)(l,"noLabel","noLabel")?null:(0,i.eh)("div",{"data-plasmic-name":"labelContainer","data-plasmic-override":u.labelContainer,className:(0,i.AK)(c().all,j().labelContainer,(a={},W(a,j().labelContainerisDisabled,(0,i.zK)(l,"isDisabled","isDisabled")),W(a,j().labelContainernoLabel,(0,i.zK)(l,"noLabel","noLabel")),a))},i.nR({defaultContents:"Enter some text",value:s.children,className:(0,i.AK)(j().slotTargetChildren,(o={},W(o,j().slotTargetChildrenisChecked,(0,i.zK)(l,"isChecked","isChecked")),W(o,j().slotTargetChildrenisDisabled,(0,i.zK)(l,"isDisabled","isDisabled")),W(o,j().slotTargetChildrenisIndeterminate,(0,i.zK)(l,"isIndeterminate","isIndeterminate")),W(o,j().slotTargetChildrennoLabel,(0,i.zK)(l,"noLabel","noLabel")),o))})))}({variants:t.variants,args:t.args,overrides:t.overrides,forNode:e})};return r.displayName="root"===e?"PlasmicCheckbox":"PlasmicCheckbox.".concat(e),r}var F=Object.assign(q("root"),{freeBox:q("freeBox"),svg:q("svg"),labelContainer:q("labelContainer"),internalVariantProps:T,internalArgProps:R,useBehavior:function(e,r){return"children"in e||(e=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){W(e,r,t[r])}))}return e}({},e,{children:"Enter some text"})),i.O(F,e,{isCheckedVariant:{group:"isChecked",variant:"isChecked"},isIndeterminateVariant:{group:"isIndeterminate",variant:"isIndeterminate"},isDisabledVariant:{group:"isDisabled",variant:"isDisabled"},noLabelVariant:{group:"noLabel",variant:"noLabel"},labelSlot:"children",root:"root"},r)}});function J(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Z(e,r){var t=F.useBehavior(e,r),a=t.plasmicProps;t.state;return(0,n.jsx)(F,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){J(e,r,t[r])}))}return e}({},a))}var G=a.forwardRef(Z),$=Object.assign(G,{__plumeType:"checkbox"}),Y=t(8932),Q=t.n(Y);function X(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function ee(e){return function(e){if(Array.isArray(e))return X(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return X(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return X(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var re=new Array,te=new Array;var ne={root:["root","sectionHero","header","link","backLink","h1","sectionBody","unitVideoPlayer","img","checkbox","text"],sectionHero:["sectionHero","header","link","backLink","h1"],header:["header"],link:["link","backLink"],backLink:["backLink"],h1:["h1"],sectionBody:["sectionBody","unitVideoPlayer","img","checkbox","text"],unitVideoPlayer:["unitVideoPlayer","img"],img:["img"],checkbox:["checkbox","text"],text:["text"]};function ae(e){var r=function(r){var t=(0,i.xf)(r,{name:e,descendantNames:ee(ne[e]),internalArgPropNames:te,internalVariantPropNames:re});return function(e){e.variants,e.args;var r=e.overrides,t=e.forNode;return e.args,(0,i.eh)(a.Fragment,null,(0,i.eh)("style",null,"\n        body {\n          margin: 0;\n        }\n      "),(0,i.eh)("div",{className:c().plasmic_page_wrapper},(0,i.eh)("div",{"data-plasmic-name":"root","data-plasmic-override":r.root,"data-plasmic-root":!0,"data-plasmic-for-node":t,className:(0,i.AK)(c().all,c().root_reset,c().plasmic_default_styles,c().plasmic_mixins,c().plasmic_tokens,Q().root)},(0,i.eh)("div",{"data-plasmic-name":"sectionHero","data-plasmic-override":r.sectionHero,className:(0,i.AK)(c().all,Q().sectionHero)},(0,i.eh)(l.Z,{"data-plasmic-name":"header","data-plasmic-override":r.header,className:(0,i.AK)("__wab_instance",Q().header),headerSolid:!0}),(0,i.eh)("div",{className:(0,i.AK)(c().all,Q().freeBox__qf57N)},(0,i.eh)("div",{className:(0,i.AK)(c().all,Q().freeBox__u8V2Z)},(0,i.eh)(i.L,{"data-plasmic-name":"link","data-plasmic-override":r.link,className:(0,i.AK)(c().all,c().a,Q().link),component:o.default,href:"/step-2-linux-administration-lessons-1-2",platform:"nextjs"},(0,i.eh)(O,{"data-plasmic-name":"backLink","data-plasmic-override":r.backLink,className:(0,i.AK)("__wab_instance",Q().backLink)})),(0,i.eh)("h1",{"data-plasmic-name":"h1","data-plasmic-override":r.h1,className:(0,i.AK)(c().all,c().h1,c().__wab_text,Q().h1)},"What is Linux 2")))),(0,i.eh)("div",{"data-plasmic-name":"sectionBody","data-plasmic-override":r.sectionBody,className:(0,i.AK)(c().all,Q().sectionBody)},(0,i.eh)("div",{className:(0,i.AK)(c().all,Q().freeBox__xJcHc)},(0,i.eh)("div",{"data-plasmic-name":"unitVideoPlayer","data-plasmic-override":r.unitVideoPlayer,className:(0,i.AK)(c().all,Q().unitVideoPlayer)},(0,i.eh)("div",{className:(0,i.AK)(c().all,Q().freeBox__j292)},(0,i.eh)(i.Vv,{"data-plasmic-name":"img","data-plasmic-override":r.img,alt:"",className:(0,i.AK)(Q().img),displayHeight:"auto",displayMaxHeight:"none",displayMaxWidth:"100%",displayMinHeight:"0",displayMinWidth:"0",displayWidth:"96px",loading:"lazy",src:{src:"/plasmic/aker_academy/images/icons8CircledPlay144Svg.svg",fullWidth:150,fullHeight:150,aspectRatio:1}}))),(0,i.eh)("div",{className:(0,i.AK)(c().all,Q().freeBox__v8A8N)},(0,i.eh)($,{"data-plasmic-name":"checkbox","data-plasmic-override":r.checkbox,className:(0,i.AK)("__wab_instance",Q().checkbox)},(0,i.eh)("div",{"data-plasmic-name":"text","data-plasmic-override":r.text,className:(0,i.AK)(c().all,c().__wab_text,Q().text)},"I have completed this unit"))))))))}({variants:t.variants,args:t.args,overrides:t.overrides,forNode:e})};return r.displayName="root"===e?"PlasmicWhatIsLinux":"PlasmicWhatIsLinux.".concat(e),r}var oe=Object.assign(ae("root"),{sectionHero:ae("sectionHero"),header:ae("header"),link:ae("link"),backLink:ae("backLink"),h1:ae("h1"),sectionBody:ae("sectionBody"),unitVideoPlayer:ae("unitVideoPlayer"),img:ae("img"),checkbox:ae("checkbox"),text:ae("text"),internalVariantProps:re,internalArgProps:te});var ie=function(){return(0,n.jsx)(oe,{})}},3733:function(e){e.exports={root:"PlasmicBackLink_root__Ny8o_",slotTargetArrowBack:"PlasmicBackLink_slotTargetArrowBack__Fe_YF",svg__n0RuK:"PlasmicBackLink_svg__n0RuK__F4k0k"}},4412:function(e){e.exports={root:"PlasmicCheckbox_root__pnzu_",freeBox:"PlasmicCheckbox_freeBox___HGEh",svg:"PlasmicCheckbox_svg__nckwJ",svgisChecked:"PlasmicCheckbox_svgisChecked__mqMli",svgisIndeterminate:"PlasmicCheckbox_svgisIndeterminate__VrHpp",rootisDisabled:"PlasmicCheckbox_rootisDisabled__PTCet",svgisDisabled:"PlasmicCheckbox_svgisDisabled__ScB6d",rootisChecked:"PlasmicCheckbox_rootisChecked__dOWGZ",rootisIndeterminate:"PlasmicCheckbox_rootisIndeterminate__0oVj5",labelContainer:"PlasmicCheckbox_labelContainer__bJkg_",slotTargetChildren:"PlasmicCheckbox_slotTargetChildren__llOMu",__wab_text:"PlasmicCheckbox___wab_text__l5ceK","__wab_slot-string-wrapper":"PlasmicCheckbox___wab_slot-string-wrapper__sf2kM",__wab_slot:"PlasmicCheckbox___wab_slot__UM3MM"}},8932:function(e){e.exports={root:"PlasmicWhatIsLinux_root__8pARA",sectionHero:"PlasmicWhatIsLinux_sectionHero__lo12H",header:"PlasmicWhatIsLinux_header__upaGq",freeBox__qf57N:"PlasmicWhatIsLinux_freeBox__qf57N__7AGQ9",freeBox__u8V2Z:"PlasmicWhatIsLinux_freeBox__u8V2Z__FPZUO",link:"PlasmicWhatIsLinux_link__fxHRo",backLink:"PlasmicWhatIsLinux_backLink__UFn0C",svg__rJueT:"PlasmicWhatIsLinux_svg__rJueT__bQrar",h1:"PlasmicWhatIsLinux_h1__8AyVW",sectionBody:"PlasmicWhatIsLinux_sectionBody__n13TF",freeBox__xJcHc:"PlasmicWhatIsLinux_freeBox__xJcHc__YS_yP",unitVideoPlayer:"PlasmicWhatIsLinux_unitVideoPlayer__l6kgb",freeBox__j292:"PlasmicWhatIsLinux_freeBox__j292__hgZ4R",img:"PlasmicWhatIsLinux_img__62c1v","__wab_img-spacer":"PlasmicWhatIsLinux___wab_img-spacer__3dYmK",freeBox__v8A8N:"PlasmicWhatIsLinux_freeBox__v8A8N__vsLL_",checkbox:"PlasmicWhatIsLinux_checkbox__14_2c",text:"PlasmicWhatIsLinux_text__tm0E2"}},8834:function(){},1664:function(e,r,t){e.exports=t(1551)}},function(e){e.O(0,[664,774,888,179],(function(){return r=1705,e(e.s=r);var r}));var r=e.O();_N_E=r}]);