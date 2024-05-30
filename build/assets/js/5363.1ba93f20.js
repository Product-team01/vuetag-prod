"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[5363,7331],{77331:(e,t,i)=>{i.r(t),i.d(t,{dyte_image_viewer:()=>n});var a=i(65733),o=i(96633),s=i(20336),r=i(96396),c=i(22906);const n=class{constructor(e){(0,a.r)(this,e),this.close=(0,a.c)(this,"close",7),this.keypressListener=e=>{"Escape"===e.key&&this.close.emit()},this.handleOutsideClick=()=>this.close.emit(),this.image=void 0,this.size=void 0,this.t=(0,s.u)(),this.iconPack=o.d}connectedCallback(){document.addEventListener("keydown",this.keypressListener),document.addEventListener("click",this.handleOutsideClick)}disconnectedCallback(){document.removeEventListener("keydown",this.keypressListener),document.removeEventListener("click",this.handleOutsideClick)}render(){return(0,a.h)(a.H,{class:"scrollbar",onClick:e=>e.stopPropagation()},(0,a.h)("div",{class:"header"},(0,a.h)("div",{class:"shared-by-user"},this.t("chat.img.shared_by")," ",(0,a.h)("span",{class:"displayName"},(0,c.f)((0,c.s)(this.image.displayName)))),(0,a.h)("div",{class:"actions"},(0,a.h)("dyte-button",{kind:"icon",variant:"secondary",onClick:()=>this.close.emit(),iconPack:this.iconPack,t:this.t},(0,a.h)("dyte-icon",{icon:this.iconPack.full_screen_minimize,iconPack:this.iconPack,t:this.t})),(0,a.h)("dyte-button",{onClick:()=>(0,r.d)(this.image.link,{fallbackName:"image"}),iconPack:this.iconPack,t:this.t},(0,a.h)("dyte-icon",{icon:this.iconPack.download,slot:"start",iconPack:this.iconPack,t:this.t}),"Download"))),(0,a.h)("div",{class:"image-ctr"},(0,a.h)("img",{src:this.image.link})))}};n.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{width:1140px;max-width:100%;box-sizing:border-box;display:flex;flex-direction:column;padding:var(--dyte-space-6, 24px);padding-top:var(--dyte-space-5, 20px);overflow-y:auto;color:rgb(var(--dyte-colors-text-1000, 255 255 255));z-index:40;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}.displayName{font-weight:700}.image-ctr{margin-top:var(--dyte-space-2, 8px);box-sizing:border-box;display:flex;justify-content:center;overflow:hidden}.actions{display:flex;align-items:center;justify-content:flex-end;gap:var(--dyte-space-2, 8px)}img{box-sizing:border-box;display:block;max-height:100%;max-width:100%;-o-object-fit:contain;object-fit:contain}.header{display:flex;align-items:center;justify-content:space-between;padding-bottom:var(--dyte-space-4, 16px)}.shared-by-user{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}:host([size='sm']) .header{flex-direction:column}:host([size='sm']) .header .actions{margin-top:var(--dyte-space-4, 16px)}"},96396:(e,t,i)=>{i.d(t,{a:()=>s,d:()=>r,g:()=>o});var a=i(22906);const o=e=>e.split(/[#?]/)[0].split(".").pop().trim(),s=e=>{if(!e)return"0 B";const t=Math.floor(Math.log(e)/Math.log(1024));return`${(e/1024**t).toFixed(2)} ${["B","kB","MB","GB","TB"][t]}`},r=async(e,t)=>{e=(0,a.a)(e);let i=null==t?void 0:t.name;const o=await fetch(e);if(!o.ok)return void window.open(e,"_blank");const s=URL.createObjectURL(await o.blob()),r=document.createElement("a");r.href=s,r.download=null!=i?i:((e,t="file")=>{try{const i=new URL(e).pathname.split("/").pop();return"/"!==i?i:t}catch(i){return t}})(e,null==t?void 0:t.fallbackName),r.click()}}}]);