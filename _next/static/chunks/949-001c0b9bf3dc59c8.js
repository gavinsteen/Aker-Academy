(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{2949:function(e,a,r){"use strict";r.d(a,{Z:function(){return b}});var t=r(5893),n=r(7294),l=r(1664),i=r(7175),o=(r(8834),r(9772)),_=r.n(o),c=r(8577),s=r.n(c);function u(e,a){(null==a||a>e.length)&&(a=e.length);for(var r=0,t=new Array(a);r<a;r++)t[r]=e[r];return t}function m(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function d(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,a){if(!e)return;if("string"===typeof e)return u(e,a);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,a)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=new Array("headerSolid"),p=new Array;var y={root:["root","link","img"],link:["link","img"],img:["img"]};function h(e){var a=function(a){var r=(0,i.xf)(a,{name:e,descendantNames:d(y[e]),internalArgPropNames:p,internalVariantPropNames:f});return function(e){var a=e.variants,r=(e.args,e.overrides),t=e.forNode;return e.args,(0,i.eh)("div",{"data-plasmic-name":"root","data-plasmic-override":r.root,"data-plasmic-root":!0,"data-plasmic-for-node":t,className:(0,i.AK)(_().all,_().root_reset,_().plasmic_default_styles,_().plasmic_mixins,_().plasmic_tokens,s().root,m({},s().rootheaderSolid,(0,i.zK)(a,"headerSolid","headerSolid")))},(0,i.eh)("div",{className:(0,i.AK)(_().all,s().freeBox__futmr)},(0,i.eh)(i.L,{"data-plasmic-name":"link","data-plasmic-override":r.link,className:(0,i.AK)(_().all,_().a,s().link),component:l.default,platform:"nextjs"},(0,i.eh)(i.Vv,{"data-plasmic-name":"img","data-plasmic-override":r.img,alt:"",className:(0,i.AK)(s().img,m({},s().imgheaderSolid,(0,i.zK)(a,"headerSolid","headerSolid"))),displayHeight:"auto",displayMaxHeight:"none",displayMaxWidth:"100%",displayMinHeight:"0",displayMinWidth:"0",displayWidth:"220px",loading:"lazy",src:(0,i.zK)(a,"headerSolid","headerSolid")?{src:"/plasmic/aker_academy/images/akerAcademyLogo400X65Pxpng.png",fullWidth:400,fullHeight:66,aspectRatio:void 0}:{src:"/plasmic/aker_academy/images/akerAcademyLogoReverse400X66Pxpng.png",fullWidth:400,fullHeight:66,aspectRatio:void 0}}),(0,i.eh)("div",{className:(0,i.AK)(_().all,s().freeBox___94LPk)}))))}({variants:r.variants,args:r.args,overrides:r.overrides,forNode:e})};return a.displayName="root"===e?"PlasmicHeader":"PlasmicHeader.".concat(e),a}var v=Object.assign(h("root"),{link:h("link"),img:h("img"),internalVariantProps:f,internalArgProps:p});function g(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function k(e,a){return(0,t.jsx)(v,function(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(a){g(e,a,r[a])}))}return e}({root:{ref:a}},e))}var b=n.forwardRef(k)},1551:function(e,a,r){"use strict";function t(e,a){(null==a||a>e.length)&&(a=e.length);for(var r=0,t=new Array(a);r<a;r++)t[r]=e[r];return t}function n(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,n,l=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(l.push(t.value),!a||l.length!==a);i=!0);}catch(_){o=!0,n=_}finally{try{i||null==r.return||r.return()}finally{if(o)throw n}}return l}}(e,a)||function(e,a){if(!e)return;if("string"===typeof e)return t(e,a);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.default=void 0;var l,i=(l=r(7294))&&l.__esModule?l:{default:l},o=r(1003),_=r(880),c=r(9246);var s={};function u(e,a,r,t){if(e&&o.isLocalURL(a)){e.prefetch(a,r,t).catch((function(e){0}));var n=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;s[a+"%"+r+(n?"%"+n:"")]=!0}}var m=function(e){var a,r=!1!==e.prefetch,t=_.useRouter(),l=i.default.useMemo((function(){var a=n(o.resolveHref(t,e.href,!0),2),r=a[0],l=a[1];return{href:r,as:e.as?o.resolveHref(t,e.as):l||r}}),[t,e.href,e.as]),m=l.href,d=l.as,f=e.children,p=e.replace,y=e.shallow,h=e.scroll,v=e.locale;"string"===typeof f&&(f=i.default.createElement("a",null,f));var g=(a=i.default.Children.only(f))&&"object"===typeof a&&a.ref,k=n(c.useIntersection({rootMargin:"200px"}),2),b=k[0],w=k[1],A=i.default.useCallback((function(e){b(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,b]);i.default.useEffect((function(){var e=w&&r&&o.isLocalURL(m),a="undefined"!==typeof v?v:t&&t.locale,n=s[m+"%"+d+(a?"%"+a:"")];e&&!n&&u(t,m,d,{locale:a})}),[d,m,w,v,r,t]);var S={ref:A,onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||function(e,a,r,t,n,l,i,_){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),a[n?"replace":"push"](r,t,{shallow:l,locale:_,scroll:i}))}(e,t,m,d,p,y,h,v)},onMouseEnter:function(e){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),o.isLocalURL(m)&&u(t,m,d,{priority:!0})}};if(e.passHref||"a"===a.type&&!("href"in a.props)){var P="undefined"!==typeof v?v:t&&t.locale,x=t&&t.isLocaleDomain&&o.getDomainLocale(d,P,t&&t.locales,t&&t.domainLocales);S.href=x||o.addBasePath(o.addLocale(d,P,t&&t.defaultLocale))}return i.default.cloneElement(a,S)};a.default=m},9246:function(e,a,r){"use strict";function t(e,a){(null==a||a>e.length)&&(a=e.length);for(var r=0,t=new Array(a);r<a;r++)t[r]=e[r];return t}function n(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,n,l=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(l.push(t.value),!a||l.length!==a);i=!0);}catch(_){o=!0,n=_}finally{try{i||null==r.return||r.return()}finally{if(o)throw n}}return l}}(e,a)||function(e,a){if(!e)return;if("string"===typeof e)return t(e,a);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(e){var a=e.rootRef,r=e.rootMargin,t=e.disabled||!o,s=l.useRef(),u=n(l.useState(!1),2),m=u[0],d=u[1],f=n(l.useState(a?a.current:null),2),p=f[0],y=f[1],h=l.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||m||e&&e.tagName&&(s.current=function(e,a,r){var t=function(e){var a,r={root:e.root||null,margin:e.rootMargin||""},t=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));t?a=_.get(t):(a=_.get(r),c.push(r));if(a)return a;var n=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var a=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;a&&r&&a(r)}))}),e);return _.set(r,a={id:r,observer:l,elements:n}),a}(r),n=t.id,l=t.observer,i=t.elements;return i.set(e,a),l.observe(e),function(){if(i.delete(e),l.unobserve(e),0===i.size){l.disconnect(),_.delete(n);var a=c.findIndex((function(e){return e.root===n.root&&e.margin===n.margin}));a>-1&&c.splice(a,1)}}}(e,(function(e){return e&&d(e)}),{root:p,rootMargin:r}))}),[t,p,r,m]);return l.useEffect((function(){if(!o&&!m){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[m]),l.useEffect((function(){a&&y(a.current)}),[a]),[h,m]};var l=r(7294),i=r(4686),o="undefined"!==typeof IntersectionObserver;var _=new Map,c=[]},8577:function(e){e.exports={root:"PlasmicHeader_root__PXthI",rootheaderSolid:"PlasmicHeader_rootheaderSolid__T1ub5",freeBox__futmr:"PlasmicHeader_freeBox__futmr__Muj8N",link:"PlasmicHeader_link__lk7Q9",img:"PlasmicHeader_img__UbWp1","__wab_img-spacer":"PlasmicHeader___wab_img-spacer__yPOww",freeBox___94LPk:"PlasmicHeader_freeBox___94LPk__MSqsA"}},9772:function(e){e.exports={plasmic_tokens:"plasmic_aker_academy_plasmic_tokens__Hh3_9",plasmic_default_styles:"plasmic_aker_academy_plasmic_default_styles__05AFn",all:"plasmic_aker_academy_all__GwR7I",img:"plasmic_aker_academy_img__4xqzd",li:"plasmic_aker_academy_li__5oBSN",span:"plasmic_aker_academy_span__lPXtp",input:"plasmic_aker_academy_input___FOYX",textarea:"plasmic_aker_academy_textarea__40CA2",button:"plasmic_aker_academy_button__x9GXF",code:"plasmic_aker_academy_code__dyNxw",pre:"plasmic_aker_academy_pre__yYPYV",p:"plasmic_aker_academy_p__zqbKb",h1:"plasmic_aker_academy_h1__Erx8O",h2:"plasmic_aker_academy_h2__hrlB0",h3:"plasmic_aker_academy_h3__8inkQ",h4:"plasmic_aker_academy_h4__Xyh6u",h5:"plasmic_aker_academy_h5__R_QJU",h6:"plasmic_aker_academy_h6__33HKG",address:"plasmic_aker_academy_address__1cLTQ",a:"plasmic_aker_academy_a__nicQQ",ol:"plasmic_aker_academy_ol__YD77f",ul:"plasmic_aker_academy_ul__tlIS5",select:"plasmic_aker_academy_select__ukxcV",plasmic_default__component_wrapper:"plasmic_aker_academy_plasmic_default__component_wrapper__6T8Xc",plasmic_default__inline:"plasmic_aker_academy_plasmic_default__inline__C7Duc",plasmic_page_wrapper:"plasmic_aker_academy_plasmic_page_wrapper__pOk1M",root_reset:"plasmic_aker_academy_root_reset__89iNe",plasmic_default__h1:"plasmic_aker_academy_plasmic_default__h1__czfrq",plasmic_default__h2:"plasmic_aker_academy_plasmic_default__h2__zRkPv",plasmic_default__a:"plasmic_aker_academy_plasmic_default__a__XuzaG",plasmic_default__h3:"plasmic_aker_academy_plasmic_default__h3__0QbyO",plasmic_default__h4:"plasmic_aker_academy_plasmic_default__h4__q_RG_",plasmic_default__code:"plasmic_aker_academy_plasmic_default__code__wMxcQ",plasmic_default__blockquote:"plasmic_aker_academy_plasmic_default__blockquote__cNiDw",blockquote:"plasmic_aker_academy_blockquote__Z6Otu",plasmic_default__pre:"plasmic_aker_academy_plasmic_default__pre__STg4_",plasmic_default__ul:"plasmic_aker_academy_plasmic_default__ul__AudHA",plasmic_default__ol:"plasmic_aker_academy_plasmic_default__ol__PWCTp",plasmic_default__h5:"plasmic_aker_academy_plasmic_default__h5__OYYph",plasmic_default__h6:"plasmic_aker_academy_plasmic_default__h6__dpXmr"}},8834:function(){},1664:function(e,a,r){e.exports=r(1551)}}]);