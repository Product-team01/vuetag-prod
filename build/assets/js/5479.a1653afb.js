"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[5479,2691],{35479:(t,e,a)=>{a.r(e),a.d(e,{dyte_broadcast_message_modal:()=>d});var o=a(65733),s=a(96633),r=a(46503),i=a(20336);const d=class{constructor(t){(0,o.r)(this,t),this.stateUpdate=(0,o.c)(this,"dyteStateUpdate",7),this.meeting=void 0,this.states=void 0,this.iconPack=s.d,this.t=(0,i.u)(),this.messagePayload={to:"Everyone",message:""},this.successMessage=!1}close(){var t;null===(t=this.stateUpdate)||void 0===t||t.emit({activeBroadcastMessageModal:!1}),r.s.activeBroadcastMessageModal=!1}sendMessage(){this.successMessage=!0,setTimeout((()=>{this.close()}),2e3)}render(){return(0,o.h)(o.H,null,(0,o.h)("div",{class:"content-col"},(0,o.h)("h2",null,"Broadcast message to"),(0,o.h)("select",{onChange:t=>{this.messagePayload=Object.assign(Object.assign({},this.messagePayload),{to:t.target.value})}},(0,o.h)("option",null,"Everyone"),(0,o.h)("option",null,"List of rooms")),(0,o.h)("textarea",{placeholder:"Type message here...",onInput:t=>{this.messagePayload=Object.assign(Object.assign({},this.messagePayload),{message:t.target.value})}}),this.successMessage?(0,o.h)("p",null,"Message sent to ",this.messagePayload.to,(0,o.h)("dyte-icon",{icon:this.iconPack.checkmark,iconPack:this.iconPack,t:this.t})):(0,o.h)("div",{class:"content-row"},(0,o.h)("dyte-button",{onClick:()=>this.close(),variant:"secondary",iconPack:this.iconPack,t:this.t},"Cancel"),"\u2002",(0,o.h)("dyte-button",{variant:"primary",onClick:()=>this.sendMessage(),iconPack:this.iconPack,t:this.t},"Send"))))}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:flex;flex-direction:column;overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px);padding:var(--dyte-space-4, 16px);width:100%;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));width:400px;max-width:80%}.content-col{display:flex;width:100%;flex-direction:column}h2{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-2, 8px)}.content-row{display:flex;width:100%;flex-direction:row}.content-row dyte-button{margin-top:var(--dyte-space-4, 16px);width:100%}textarea{margin-top:var(--dyte-space-3, 12px);resize:none;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;font-family:var(--dyte-font-family, sans-serif);outline:2px solid transparent;outline-offset:2px;height:var(--dyte-space-16, 64px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px);color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}textarea::-moz-placeholder{color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}textarea::placeholder{color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}select{border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;padding-top:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-3, 12px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);outline:2px solid transparent;outline-offset:2px;border-right-width:var(--dyte-border-width-md, 2px);border-style:solid;border-color:transparent;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}p{margin:var(--dyte-space-0, 0px);margin-top:var(--dyte-space-2, 8px);width:100%;text-align:center;font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));display:flex;flex-direction:row;align-items:center;justify-content:center}p dyte-icon{margin-left:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px)}"}}]);