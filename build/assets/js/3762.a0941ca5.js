"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[3762,8229],{66154:(t,e,a)=>{a.r(e),a.d(e,{dyte_join_stage:()=>c,dyte_overlay_modal:()=>l});var i=a(65733),r=a(51285),s=a(96633),o=a(20336),n=a(85371),d=a(46503);const c=class{constructor(t){(0,i.r)(this,t),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.joinStage=(0,i.c)(this,"dyteJoinStage",7),this.leaveStage=(0,i.c)(this,"dyteLeaveStage",7),this.meeting=void 0,this.config=r.d,this.states=void 0,this.size=void 0,this.iconPack=s.d,this.t=(0,o.u)(),this.dataConfig={title:this.t("stage.join_title"),label:{accept:this.t("stage.join_confirm"),reject:this.t("stage.join_cancel")},description:this.t("stage.join_summary")}}render(){var t,e,a,r;const s={meeting:this.meeting,size:this.size,states:this.states||d.s,config:this.config,iconPack:this.iconPack,t:this.t};return(0,i.h)(i.H,{class:{livestream:"LIVESTREAM"===(null===(t=this.meeting)||void 0===t?void 0:t.meta.viewType),webinar:"WEBINAR"===(null===(e=this.meeting)||void 0===e?void 0:e.meta.viewType)}},(0,i.h)("header",null,(0,i.h)("h2",null,this.dataConfig.title)),(0,i.h)(n.R,{element:"dyte-participant-setup",defaults:s,props:{participant:null===(a=this.meeting)||void 0===a?void 0:a.self,size:"md"},childProps:{participant:null===(r=this.meeting)||void 0===r?void 0:r.self,size:"md"},deepProps:!0}),(0,i.h)("div",{class:"summary"},this.dataConfig.description),(0,i.h)("div",{class:"container"},(0,i.h)("dyte-button",{variant:"secondary",onClick:()=>this.leaveStage.emit(),title:this.dataConfig.label.reject,iconPack:this.iconPack,t:this.t},this.dataConfig.label.reject),(0,i.h)("dyte-button",{onClick:()=>this.joinStage.emit(),title:this.dataConfig.label.accept,iconPack:this.iconPack,t:this.t},this.dataConfig.label.accept)))}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host::-webkit-scrollbar{width:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}:host::-webkit-scrollbar-thumb{border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}:host(.webinar){box-sizing:border-box;display:block;width:512px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding:var(--dyte-space-6, 24px);-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:auto;border-radius:var(--dyte-border-radius-md, 8px);line-height:1.25}:host(.webinar) dyte-participant-setup{display:flex;flex:1 1 0%;align-items:center;justify-content:space-around;margin-left:auto;margin-right:auto}:host(.webinar) .container dyte-button{margin:var(--dyte-space-3, 12px);flex-grow:1;padding:var(--dyte-space-1, 4px);width:50%}:host(.webinar) header{padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}:host(.webinar) .summary{padding:var(--dyte-space-4, 16px)}:host(.livestream){box-sizing:border-box;display:block;width:512px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));padding:var(--dyte-space-8, 32px);-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:auto;border-radius:var(--dyte-border-radius-md, 8px);line-height:1.25}:host(.livestream) dyte-participant-setup{display:flex;width:100%;flex:1 1 0%;align-items:center;justify-content:space-around;margin-left:auto;margin-right:auto}:host(.livestream) .container dyte-button{flex-grow:1;padding:var(--dyte-space-1, 4px);width:50%}:host(.livestream) .container dyte-button:nth-child(1){margin-right:var(--dyte-space-1\\.5, 6px)}:host(.livestream) .container dyte-button:nth-child(2){margin-left:var(--dyte-space-1\\.5, 6px)}:host(.livestream) h2{font-size:24px;font-weight:500;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}:host(.livestream) .summary{margin-top:var(--dyte-space-6, 24px);margin-bottom:var(--dyte-space-6, 24px);text-align:left;font-size:14px}.deny-access{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.container{width:100%;max-width:1080px;display:flex;flex:1 1 0%;align-items:center;justify-content:space-around}header{display:flex;align-items:center;justify-content:space-between}";const l=class{constructor(t){(0,i.r)(this,t),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.meeting=void 0,this.states=void 0,this.iconPack=s.d,this.t=(0,o.u)()}connectedCallback(){this.states.activeOverlayModal.timeout&&setTimeout((()=>{this.stateUpdate.emit({activeOverlayModal:{active:!1}}),d.s.activeOverlayModal={active:!1}}),this.states.activeOverlayModal.timeout)}componentDidLoad(){}disconnectedCallback(){}render(){return(0,i.h)(i.H,null,(0,i.h)("dyte-icon",{icon:this.states.activeOverlayModal.icon,iconPack:this.iconPack,t:this.t}),(0,i.h)("h2",null,this.states.activeOverlayModal.title),(0,i.h)("p",null,this.states.activeOverlayModal.description))}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / 0.6);position:fixed;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);z-index:50}dyte-icon{height:var(--dyte-space-20, 80px)}h2{margin:var(--dyte-space-2, 8px);font-weight:500}p{margin:var(--dyte-space-0, 0px);font-size:16px}"}}]);