"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[4789,9319],{29319:(e,t,i)=>{i.r(t),i.d(t,{dyte_meeting:()=>f});var s=i(65733),n=i(59489),o=i(49179),a=i(20336),r=i(51285),d=i(85371),c=i(85114),h=i(46503),g=i(36677),l=i(24555),m=i(96633);i(49797),i(21237),i(19656),i(27637),i(60804);const f=class{constructor(e){(0,s.r)(this,e),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.roomJoinedListener=()=>{this.setStates({meeting:"joined"}),h.s.meeting="joined"},this.waitlistedListener=()=>{this.setStates({meeting:"waiting"}),h.s.meeting="waiting"},this.roomLeftListener=({state:e})=>{const t=this.states||h.s;if("disconnected"===(null==t?void 0:t.roomLeftState))return this.setStates({meeting:"ended",roomLeftState:e}),void(h.s.meeting="ended");this.setStates({meeting:"ended",roomLeftState:e}),h.s.meeting="ended",h.s.roomLeftState=e},this.mediaPermissionUpdateListener=({kind:e,message:t})=>{if(["audio","video"].includes(e)){if("ACCEPTED"===t)return;const i={enabled:!0,kind:e};this.setStates({activePermissionsMessage:i}),h.s.activePermissionsMessage=i}},this.joinStateAcceptedListener=()=>{this.setStates({activeJoinStage:!0}),this.stateUpdate.emit({activeJoinStage:!0}),h.s.activeJoinStage=!0},this.loadConfigFromPreset=!0,this.applyDesignSystem=!0,this.mode="fixed",this.leaveOnUnmount=!1,this.meeting=void 0,this.showSetupScreen=void 0,this.t=(0,a.u)(),this.config=r.d,this.iconPackUrl=void 0,this.size=void 0,this.gridLayout="row",this.states={meeting:"idle",prefs:{mirrorVideo:!0,muteNotificationSounds:!1}},this.middlewares={},this.newMeeting=void 0,this.iconPack=m.d}connectedCallback(){var e;this.resizeObserver=new g.i((()=>this.handleResize())),this.resizeObserver.observe(this.host),this.applyDesignSystem&&null!=(null===(e=this.config)||void 0===e?void 0:e.designTokens)&&"undefined"!=typeof document&&(0,n.p)(document.documentElement,this.config.designTokens),this.meetingChanged(this.meeting),this.iconPackUrlChanged(this.iconPackUrl),this.initializePreferences()}clearListeners(e){null!=e&&(e.self.removeListener("roomJoined",this.roomJoinedListener),e.self.removeListener("socketServiceRoomJoined",this.roomJoinedListener),e.meta.removeListener("socketReconnected",this.roomJoinedListener),e.self.removeListener("roomLeft",this.roomLeftListener),e.self.removeListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),e.self.removeListener("waitlisted",this.waitlistedListener),e.self.removeListener("joinStageRequestAccepted",this.joinStateAcceptedListener))}disconnectedCallback(){var e;this.leaveOnUnmount&&(null===(e=this.meeting)||void 0===e||e.leaveRoom()),this.resizeObserver.disconnect(),this.clearListeners(this.meeting)}meetingChanged(e){var t,i;if(null!=e){if(this.loadConfigFromPreset&&null!=e.self.config){const i=e.self.config,{config:s,data:o}=(0,n.g)(i,e);this.config===r.d&&(this.config=s),null==this.showSetupScreen&&(this.showSetupScreen=o.showSetupScreen),e.connectedMeetings.supportsConnectedMeetings&&(null===(t=h.s.activeBreakoutRoomsManager)||void 0===t?void 0:t.destinationMeetingId)&&(this.showSetupScreen=!1)}this.applyDesignSystem&&null!=(null===(i=this.config)||void 0===i?void 0:i.designTokens)&&"undefined"!=typeof document&&(0,n.p)(document.documentElement,this.config.designTokens),(0,l.a)(e)?e.self.addListener("socketServiceRoomJoined",this.roomJoinedListener):e.self.addListener("roomJoined",this.roomJoinedListener),e.self.addListener("waitlisted",this.waitlistedListener),e.self.addListener("roomLeft",this.roomLeftListener),e.self.addListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),e.self.addListener("joinStageRequestAccepted",this.joinStateAcceptedListener),e.connectedMeetings.supportsConnectedMeetings&&e.connectedMeetings.once("changingMeeting",this.handleChangingMeeting),e.self.roomJoined?(this.states=Object.assign(Object.assign({},this.states),{meeting:"joined"}),h.s.meeting="joined"):this.showSetupScreen&&null==this.newMeeting?(this.states=Object.assign(Object.assign({},this.states),{meeting:"setup"}),h.s.meeting="setup"):e.joinRoom()}}async iconPackUrlChanged(e){this.iconPack=await(0,o.g)(e)}listenState(e){e.stopPropagation(),this.setStates(e.detail)}initializePreferences(){const e=(0,c.g)();this.setStates({prefs:e}),h.s.prefs=e}handleChangingMeeting(e){h.s.activeBreakoutRoomsManager=Object.assign(Object.assign({},h.s.activeBreakoutRoomsManager),{destinationMeetingId:e})}handleResize(){this.size=(0,o.a)(this.host.clientWidth)}setStates(e){const t=Object.assign({},this.states);(0,n.m)(t,e),this.states=t}render(){var e,t,i;const n={meeting:null!==(e=this.newMeeting)&&void 0!==e?e:this.meeting,size:this.size,states:this.states||h.s,config:this.config,iconPack:this.iconPack,t:this.t,middlewares:this.middlewares},o={"dyte-grid":{layout:this.gridLayout}};return"CHAT"===(null===(i=null===(t=this.meeting)||void 0===t?void 0:t.meta)||void 0===i?void 0:i.viewType)?(0,s.h)(d.R,{element:"dyte-chat",defaults:n}):(0,s.h)(d.R,{element:"dyte-meeting",defaults:n,asHost:!0,elementProps:o})}get host(){return(0,s.g)(this)}static get watchers(){return{meeting:["meetingChanged"],iconPackUrl:["iconPackUrlChanged"]}}};f.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{box-sizing:border-box;display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));overflow:hidden;position:fixed;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);height:100%;width:100%}:host([mode='fill']){position:relative}"},49179:(e,t,i)=>{i.d(t,{a:()=>r,g:()=>n});var s=i(96633);const n=async e=>{if(null==e)return s.d;try{const t=await fetch(e);return t.ok?Object.assign({},s.d,await t.json()):s.d}catch(t){return s.d}},o=768,a=1080,r=e=>e>=a?"lg":e>=o?"md":"sm"},85114:(e,t,i)=>{i.d(t,{a:()=>a,c:()=>d,g:()=>r,s:()=>o});var s=i(60804);const n="dyte-prefs",o=(e,t)=>{const i=JSON.parse(s.g.getItem(n)||"{}");i[e]=JSON.stringify(t),s.g.setItem("dyte-prefs",JSON.stringify(i))},a=e=>JSON.parse(s.g.getItem(n)||"{}")[e],r=()=>{const e=JSON.parse(s.g.getItem(n)||"{}");return{mirrorVideo:!e["mirror-video"]||"true"===e["mirror-video"],muteNotificationSounds:!!e["mute-notification-sounds"]&&"true"===e["mute-notification-sounds"]}},d={}}}]);