"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[7255,3570],{3570:(e,t,i)=>{i.r(t),i.d(t,{dyte_viewer_count:()=>c});var n=i(65733),s=i(96633),a=i(20336),r=i(24555);const c=class{constructor(e){(0,n.r)(this,e),this.disconnectMeeting=e=>{var t;null!=e&&null!=this.countListener&&(null===(t=e.livestream)||void 0===t||t.removeListener("viewerCountUpdate",this.countListener))},this.meeting=void 0,this.iconPack=s.d,this.t=(0,a.u)(),this.viewerCount=0}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){this.disconnectMeeting(this.meeting)}meetingChanged(e,t){var i;this.disconnectMeeting(t),null!=e&&(this.countListener=()=>{var t;this.viewerCount=null===(t=e.livestream)||void 0===t?void 0:t.viewerCount},this.countListener(),null===(i=e.livestream)||void 0===i||i.addListener("viewerCountUpdate",this.countListener))}render(){return(0,r.s)(this.meeting)?(0,n.h)(n.H,{tabIndex:0,role:"log","aria-label":`${this.viewerCount} ${this.t("viewers")}`},(0,n.h)("dyte-icon",{icon:this.iconPack.viewers,tabIndex:-1,"aria-hidden":!0,part:"icon",iconPack:this.iconPack,t:this.t}),this.viewerCount," ",this.t("viewers")):null}static get watchers(){return{meeting:["meetingChanged"]}}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:inline-flex;height:var(--dyte-space-10, 40px);-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center}:host([size='sm']){margin-left:var(--dyte-space-1, 4px);margin-right:var(--dyte-space-1, 4px);font-size:12px}dyte-icon{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}:host([size='sm']) dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}"}}]);