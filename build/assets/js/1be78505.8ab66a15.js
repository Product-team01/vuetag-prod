"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[9514,1318],{10254:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Xe});var r=n(67294),a=n(86010),o=n(80681),c=n(65319),l=n(56391),i=n(53964),s=n(27391),u=n(25682),d=n(13546),m=n(92210),b=n(6379),p=n(58010);const f="backToTopButton_sjWU",g="backToTopButtonShow_xfvO";function v(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,n]=(0,r.useState)(!1),a=(0,r.useRef)(!1),{startScroll:o,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)((({scrollY:t},r)=>{const o=null==r?void 0:r.scrollY;o&&(a.current?a.current=!1:t>=o?(c(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,p.S)((e=>{e.location.hash&&(a.current=!0,n(!1))})),{shown:t,scrollToTop:()=>o(0)}}({threshold:300});return r.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,a.Z)("clean-btn",c.k.common.backToTopButton,f,e&&g),type:"button",onClick:t})}var h=n(28890),y=n(76775),E=n(24683),O=n(86016),_=n(49572);function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){return r.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){S(e,t,n[t])}))}return e}({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const C="collapseSidebarButton_PEFL",w="collapseSidebarButtonIcon_kv0_";function I({onClick:e}){return r.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,a.Z)("button button--secondary button--outline",C),onClick:e},r.createElement(k,{className:w}))}var j=n(64738),P=n(37806);const N=Symbol("EmptyContext"),x=r.createContext(N);function Z({children:e}){const[t,n]=(0,r.useState)(null),a=(0,r.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return r.createElement(x.Provider,{value:a},e)}var T=n(52647),L=n(87275),A=n(31984),D=n(30358);function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function H({categoryLabel:e,onClick:t}){return r.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:t})}function F(e){var{item:t,onItemClick:n,activePath:o,level:l,index:s}=e,u=M(e,["item","onItemClick","activePath","level","index"]);const{items:d,label:m,collapsible:b,className:p,href:f}=t,{docs:{sidebar:{autoCollapseCategories:g}}}=(0,O.L)(),v=function(e){const t=(0,D.Z)();return(0,r.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),h=(0,i._F)(t,o),y=(0,L.Mg)(f,o),{collapsed:E,setCollapsed:_}=(0,T.u)({initialState:()=>!!b&&(!h&&t.collapsed)}),{expandedItem:S,setExpandedItem:k}=function(){const e=(0,r.useContext)(x);if(e===N)throw new P.i6("DocSidebarItemsExpandedStateProvider");return e}(),C=(e=!E)=>{k(e?null:s),_(e)};return function({isActive:e,collapsed:t,updateCollapsed:n}){const a=(0,P.D9)(e);(0,r.useEffect)((()=>{e&&!a&&t&&n(!1)}),[e,a,t,n])}({isActive:h,collapsed:E,updateCollapsed:C}),(0,r.useEffect)((()=>{b&&null!=S&&S!==s&&g&&_(!0)}),[b,S,s,_,g]),r.createElement("li",{className:(0,a.Z)(c.k.docs.docSidebarItemCategory,c.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":E},p)},r.createElement("div",{className:(0,a.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":y})},r.createElement(A.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){B(e,t,n[t])}))}return e}({className:(0,a.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!f&&b,"menu__link--active":h}),onClick:b?e=>{null==n||n(t),f?C(!1):(e.preventDefault(),C())}:()=>{null==n||n(t)},"aria-current":y?"page":void 0,"aria-expanded":b?!E:void 0,href:b?null!=v?v:"#":v},u),m),f&&b&&r.createElement(H,{categoryLabel:m,onClick:e=>{e.preventDefault(),C()}})),r.createElement(T.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:E},r.createElement(ne,{items:d,tabIndex:E?-1:0,onItemClick:n,activePath:o,level:l+1})))}var W=n(47785),V=n(40379);const R="menuExternalLink_NmtK";function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function U(e){var{item:t,onItemClick:n,activePath:o,level:l,index:s}=e,u=K(e,["item","onItemClick","activePath","level","index"]);const{href:d,label:m,className:b,autoAddBaseUrl:p}=t,f=(0,i._F)(t,o),g=(0,W.Z)(d);return r.createElement("li",{className:(0,a.Z)(c.k.docs.docSidebarItemLink,c.k.docs.docSidebarItemLinkLevel(l),"menu__list-item",b),key:m},r.createElement(A.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){z(e,t,n[t])}))}return e}({className:(0,a.Z)("menu__link",!g&&R,{"menu__link--active":f}),autoAddBaseUrl:p,"aria-current":f?"page":void 0,to:d},g&&{onClick:n?()=>n(t):void 0},u),m,!g&&r.createElement(V.Z,null)))}const Y="menuHtmlItem_M9Kj";function q({item:e,level:t,index:n}){const{value:o,defaultStyle:l,className:i}=e;return r.createElement("li",{className:(0,a.Z)(c.k.docs.docSidebarItemLink,c.k.docs.docSidebarItemLinkLevel(t),l&&[Y,"menu__list-item"],i),key:n,dangerouslySetInnerHTML:{__html:o}})}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){G(e,t,n[t])}))}return e}function $(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function J(e){var{item:t}=e,n=$(e,["item"]);switch(t.type){case"category":return r.createElement(F,X({item:t},n));case"html":return r.createElement(q,X({item:t},n));default:return r.createElement(U,X({item:t},n))}}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ee(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function te(e){var{items:t}=e,n=ee(e,["items"]);return r.createElement(Z,null,t.map(((e,t)=>r.createElement(J,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Q(e,t,n[t])}))}return e}({key:t,item:e,index:t},n)))))}const ne=(0,r.memo)(te),re="menu_SIkG",ae="menuWithAnnouncementBar_GW3s";function oe({path:e,sidebar:t,className:n}){const o=function(){const{isActive:e}=(0,j.nT)(),[t,n]=(0,r.useState)(e);return(0,b.RF)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return r.createElement("nav",{"aria-label":(0,m.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,a.Z)("menu thin-scrollbar",re,o&&ae,n)},r.createElement("ul",{className:(0,a.Z)(c.k.docs.docSidebarMenu,"menu__list")},r.createElement(ne,{items:t,activePath:e,level:1})))}const ce="sidebar_mhZE",le="sidebarWithHideableNavbar__6UL",ie="sidebarHidden__LRd",se="sidebarLogo_F_0z";var ue=n(4464),de=n(23722),me=n(63629);const be=[],pe=[];function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ge(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){fe(e,t,n[t])}))}return e}function ve(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}const he="container_lWWc",ye="sectionsMenu_eet_",Ee="multiSectionContainer_bYm7",Oe="section_olD1",_e="sectionActive_D9yk",Se="label_WInT",ke="description_C5q3",Ce="row_KvCx";function we(e){return"/"===e.slice(-1)?e.slice(0,-1):e}function Ie(){const e=(0,y.k6)(),t=function(){var e;const t=(0,me.Z)().plugin.id,n=null===(e=be.find((e=>e.docId===t)))||void 0===e?void 0:e.section;if(n){for(const e of pe)if(e.some((e=>e.section===n)))return{docId:t,currentSection:n,groups:e.map((e=>ve(ge({},e),{docs:be.filter((t=>t.section===e.section))})))};return{docId:t,currentSection:n,sections:be.filter((e=>e.section===n))}}return{docId:t}}(),{docId:n,currentSection:o,sections:c,groups:l}=t,i=(0,de.ZP)()["docusaurus-plugin-content-docs"];if(!c&&!l)return null;const s=t=>{if(t!==n){const{pathname:n,hash:r}=e.location,a=`/${t}/`+n.split("/").slice(2).join("/"),o=i[t].versions[0].docs;if(o.find((e=>e.path===a))){const t=a+(r&&r.length>0?"#"+r:"");e.push(we(t))}else{const t=o[0].path;e.push(we(t))}}};return c?r.createElement("div",{className:he},r.createElement(SectionsMenu,{defaultValue:n,values:c,onValueChange:s,triggerClassName:ye}),r.createElement(ue.Z,{docsPluginId:n,dropdownItemsBefore:[],dropdownItemsAfter:[]})):r.createElement("div",{className:(0,a.Z)("sidebar-menu",Ee)},l.map((e=>{const{name:t,docs:c,description:l,className:i}=e,u=o===e.section,d=()=>s(c[0].docId);return r.createElement("div",{className:(0,a.Z)(Oe,u&&_e),onClick:d,onKeyDown:e=>{"Space"!==e.code&&"Enter"!=e.code||d()},tabIndex:0,key:e.name},r.createElement("div",{className:(0,a.Z)(Se,i)},t),r.createElement("div",null,u?r.createElement("div",{className:Ce},r.createElement(SectionsMenu,{defaultValue:u?n:c[0].id,values:c,onValueChange:s,triggerClassName:ye}),r.createElement(ue.Z,{docsPluginId:n,dropdownItemsBefore:[],dropdownItemsAfter:[]})):r.createElement("p",{className:ke},l)))})))}function je({path:e,sidebar:t,onCollapse:n,isHidden:o}){const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:l}}}=(0,O.L)();return r.createElement("div",{className:(0,a.Z)(ce,c&&le,o&&ie)},c&&r.createElement(_.Z,{tabIndex:-1,className:se}),r.createElement(Ie,null),r.createElement(oe,{path:e,sidebar:t}),l&&r.createElement(I,{onClick:n}))}const Pe=r.memo(je);var Ne=n(36847),xe=n(57796);const Ze=({sidebar:e,path:t})=>{const n=(0,xe.e)();return r.createElement("ul",{className:(0,a.Z)(c.k.docs.docSidebarMenu,"menu__list")},r.createElement(Ie,null),r.createElement(ne,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1}))};function Te(e){return r.createElement(Ne.Zo,{component:Ze,props:e})}const Le=r.memo(Te);function Ae(e){const t=(0,E.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(Pe,e),a&&r.createElement(Le,e))}const De="expandButton_m80_",Be="expandButtonIcon_BlDH";function Me({toggleSidebar:e}){return r.createElement("div",{className:De,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},r.createElement(k,{className:Be}))}const He={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function Fe({children:e}){const t=(0,u.V)();var n;return r.createElement(r.Fragment,{key:null!==(n=null==t?void 0:t.name)&&void 0!==n?n:"noSidebar"},e)}function We({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:n}){const{pathname:o}=(0,y.TH)(),[l,i]=(0,r.useState)(!1),s=(0,r.useCallback)((()=>{l&&i(!1),!l&&(0,h.n)()&&i(!0),n((e=>!e))}),[n,l]);return r.createElement("aside",{className:(0,a.Z)(c.k.docs.docSidebarContainer,He.docSidebarContainer,t&&He.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(He.docSidebarContainer)&&t&&i(!0)}},r.createElement(Fe,null,r.createElement("div",{className:(0,a.Z)(He.sidebarViewport,l&&He.sidebarViewportHidden)},r.createElement(Ae,{sidebar:e,path:o,onCollapse:s,isHidden:l}),l&&r.createElement(Me,{toggleSidebar:s}))))}const Ve={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Re({hiddenSidebarContainer:e,children:t}){const n=(0,u.V)();return r.createElement("main",{className:(0,a.Z)(Ve.docMainContainer,(e||!n)&&Ve.docMainContainerEnhanced)},r.createElement("div",{className:(0,a.Z)("container padding-top--md padding-bottom--lg",Ve.docItemWrapper,e&&Ve.docItemWrapperEnhanced)},t))}const ze="docPage__5DB",Ke="docsWrapper_BCFX";function Ue({children:e}){const t=(0,u.V)(),[n,a]=(0,r.useState)(!1);return r.createElement(d.Z,{wrapperClassName:Ke},r.createElement(v,null),r.createElement("div",{className:ze},t&&r.createElement(We,{sidebar:t.items,hiddenSidebarContainer:n,setHiddenSidebarContainer:a}),r.createElement(Re,{hiddenSidebarContainer:n},e)))}var Ye=n(81318),qe=n(36894);function Ge(e){const{versionMetadata:t}=e;return r.createElement(r.Fragment,null,r.createElement(qe.Z,{version:t.version,tag:(0,l.os)(t.pluginId,t.version)}),r.createElement(o.d,null,t.noIndex&&r.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Xe(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return r.createElement(Ye.default,null);const{docElement:l,sidebarName:d,sidebarItems:m}=n;return r.createElement(r.Fragment,null,r.createElement(Ge,e),r.createElement(o.FG,{className:(0,a.Z)(c.k.wrapper.docsPages,c.k.page.docsDocPage,e.versionMetadata.className)},r.createElement(s.q,{version:t},r.createElement(u.b,{name:d,items:m},r.createElement(Ue,null,l)))))}},27391:(e,t,n)=>{n.d(t,{E:()=>l,q:()=>c});var r=n(67294),a=n(37806);const o=r.createContext(null);function c({children:e,version:t}){return r.createElement(o.Provider,{value:t},e)}function l(){const e=(0,r.useContext)(o);if(null===e)throw new a.i6("DocsVersionProvider");return e}},81318:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(67294),a=n(92210),o=n(80681),c=n(13546);function l(){return r.createElement(r.Fragment,null,r.createElement(o.d,{title:(0,a.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),r.createElement(c.Z,null,r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row d-flex-center"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Loading...")))))))}}}]);