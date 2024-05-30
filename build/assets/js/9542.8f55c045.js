"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[9542,7840],{29542:(e,t,i)=>{i.r(t),i.d(t,{dyte_permissions_message:()=>r});var s=i(65733),a=i(96633),n=i(20336),o=i(46503);const r=class{constructor(e){(0,s.r)(this,e),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.continue=()=>{this.stateUpdate.emit({activePermissionsMessage:{enabled:!1}}),o.s.activePermissionsMessage={enabled:!1}},this.reload=()=>{"undefined"!=typeof window&&window.location.reload()},this.meeting=void 0,this.t=(0,n.u)(),this.iconPack=a.d,this.states=void 0,this.device=void 0}connectedCallback(){this.meetingChanged(this.meeting)}meetingChanged(e){null!=e&&(this.device=e.self.device)}getLink(e){let t;switch(e){case"audio":t="microphone";break;case"video":t="camera";break;default:t="screenshare"}let i=`Allow+${t}+access`;if(null!=this.device){const{browserName:e,isMobile:t}=this.device;i+="+"+e,t&&(i+="+mobile")}return"https://www.google.com/search?q="+i}isDeniedBySystem(){var e;const t=null===(e=this.meeting)||void 0===e?void 0:e.self.mediaPermissions;return null!=t&&!!Object.values(t).includes("SYSTEM_DENIED")}getTitle(){var e,t,i;const s=this.isDeniedBySystem(),a=null!==(i=null===(t=null===(e=this.states)||void 0===e?void 0:e.activePermissionsMessage)||void 0===t?void 0:t.kind)&&void 0!==i?i:"audio";return s?this.t(`perm_sys_denied.${a}`):this.t(`perm_denied.${a}`)}getMessage(){var e,t,i,s;const{browserName:a,osName:n}=this.meeting.self.device,o=this.isDeniedBySystem(),r=null!==(e=a.toLowerCase())&&void 0!==e?e:"others",d=null!=n?n:"others",c=null!==(s=null===(i=null===(t=this.states)||void 0===t?void 0:t.activePermissionsMessage)||void 0===i?void 0:i.kind)&&void 0!==s?s:"audio";return o?this.t(`perm_sys_denied.${c}.${d}.message`):this.t(`perm_denied.${c}.${r}.message`)}render(){var e,t,i;const a=this.isDeniedBySystem();return(0,s.h)(s.H,null,(0,s.h)("h2",null,(0,s.h)("dyte-icon",{class:"text-icon",icon:this.iconPack.warning,iconPack:this.iconPack,t:this.t}),this.getTitle()),(0,s.h)("p",null,this.getMessage()),!a&&(0,s.h)("a",{class:"need-help-link",href:this.getLink(null!==(i=null===(t=null===(e=this.states)||void 0===e?void 0:e.activePermissionsMessage)||void 0===t?void 0:t.kind)&&void 0!==i?i:"audio"),target:"_blank",rel:"noreferrer external noreferrer noopener"},(0,s.h)("dyte-icon",{class:"text-icon",icon:this.iconPack.attach,iconPack:this.iconPack,t:this.t}),this.t("cta.help")),(0,s.h)("div",{class:"actions"},(0,s.h)("dyte-button",{size:"lg",kind:"wide",variant:"secondary",onClick:this.continue,iconPack:this.iconPack,t:this.t},this.t("cta.continue")),(0,s.h)("dyte-button",{size:"lg",kind:"wide",onClick:this.reload,iconPack:this.iconPack,t:this.t},this.t("cta.reload"))),(0,s.h)("slot",null))}static get watchers(){return{meeting:["meetingChanged"]}}};r.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{box-sizing:border-box;display:block;width:560px;padding:var(--dyte-space-6, 24px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.actions{display:flex;align-items:center;gap:var(--dyte-space-2, 8px)}.text-icon{display:inline-block;vertical-align:middle}h2{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-4, 16px)}h2 .text-icon{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-4, 16px)}.need-help-link{display:inline-block;text-underline-offset:2px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-400, 53 110 253) / var(--tw-text-opacity))}.need-help-link:hover{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-600, 13 81 253) / var(--tw-text-opacity))}a dyte-icon{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}:host([size='sm']) .actions{flex-direction:column;align-items:flex-start;justify-content:center}:host([size='sm']) .action{width:100%;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px)}.actions{margin-top:var(--dyte-space-6, 24px)}.actions dyte-button{flex:1 1 0%}"}}]);