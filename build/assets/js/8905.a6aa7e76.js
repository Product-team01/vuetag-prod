"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[8905,1196],{61196:(e,t,o)=>{o.r(t),o.d(t,{dyte_more_toggle:()=>n});var r=o(65733),a=o(96633),i=o(20336),s=o(46503);const n=class{constructor(e){(0,r.r)(this,e),this.stateUpdate=(0,r.c)(this,"dyteStateUpdate",7),this.handleKeyDown=({key:e})=>{"Escape"===e&&this.states.activeMoreMenu&&(this.stateUpdate.emit({activeMoreMenu:!1}),s.s.activeMoreMenu=!s.s.activeMoreMenu)},this.handleOnClick=e=>{e.composedPath().includes(this.host)||(this.stateUpdate.emit({activeMoreMenu:!1}),s.s.activeMoreMenu=!s.s.activeMoreMenu)},this.toggleMoreMenu=()=>{this.stateUpdate.emit({activeMoreMenu:!s.s.activeMoreMenu}),s.s.activeMoreMenu=!s.s.activeMoreMenu},this.states=void 0,this.size=void 0,this.iconPack=a.d,this.t=(0,i.u)()}connectedCallback(){window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("click",this.handleOnClick)}disconnectedCallback(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("click",this.handleOnClick)}render(){const e=this.t("more");return(0,r.h)(r.H,{title:e},this.states.activeMoreMenu&&(0,r.h)("div",{class:"more-menu"},(0,r.h)("slot",{name:"more-elements"})),(0,r.h)("dyte-controlbar-button",{size:this.size,iconPack:this.iconPack,t:this.t,onClick:()=>this.toggleMoreMenu(),icon:this.iconPack.horizontal_dots,label:e,part:"controlbar-button"}),(0,r.h)("slot",{name:"expanded"}))}get host(){return(0,r.g)(this)}};n.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:flex;flex-direction:column;overflow:visible}.more-menu{position:absolute;top:calc(var(--dyte-space-2, 8px) * -1);z-index:50;margin-bottom:var(--dyte-space-3, 12px);box-sizing:border-box;max-height:60vh;width:var(--dyte-space-64, 256px);overflow:auto;border-radius:var(--dyte-border-radius-md, 8px);border-width:var(--dyte-border-width-sm, 1px);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));outline:2px solid transparent;outline-offset:2px;transform:translateY(-100%)}:host([size='md']) .more-menu,:host([size='sm']) .more-menu{transform:translate(-175px, -100%);position:absolute;top:calc(var(--dyte-space-2, 8px) * -1);z-index:50;margin-bottom:var(--dyte-space-3, 12px);box-sizing:border-box;max-height:72vh;overflow:auto;border-radius:var(--dyte-border-radius-md, 8px);border-width:var(--dyte-border-width-sm, 1px);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));padding:var(--dyte-space-0, 0px)}:host([size='sm']) .more-menu{transform:translate(-200px, -100%)}.more-menu::-webkit-scrollbar{height:var(--dyte-space-0, 0px);width:var(--dyte-space-1\\.5, 6px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}.more-menu::-webkit-scrollbar-thumb{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}"}}]);