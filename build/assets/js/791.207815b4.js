"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[791,2002],{30791:(t,i,e)=>{e.r(i),e.d(i,{dyte_participants_stage_list:()=>p});var a=e(65733),s=e(96633),n=e(20336),r=e(51285);e(21237),e(24555),e(60804);const p=class{constructor(t){(0,a.r)(this,t),this.updateParticipants=()=>{this.getParticipants(this.search)},this.shouldShowStageList=()=>{var t,i,e;"LIVESTREAM"===(null===(t=this.meeting)||void 0===t?void 0:t.meta.viewType)?this.showStageList="ON_STAGE"===(null===(e=null===(i=this.meeting)||void 0===i?void 0:i.stage)||void 0===e?void 0:e.status):this.showStageList=!0},this.meeting=void 0,this.config=r.d,this.size=void 0,this.iconPack=s.d,this.view="sidebar",this.t=(0,n.u)(),this.search="",this.participants=[],this.showStageList=!1}connectedCallback(){this.meetingChanged(this.meeting),this.searchChanged(this.search)}disconnectedCallback(){var t,i;const{participants:e,self:a}=this.meeting;null!=this.meeting&&(this.participantJoinedListener&&this.meeting.participants.joined.removeListener("participantJoined",this.participantJoinedListener),this.participantLeftListener&&this.meeting.participants.joined.removeListener("participantLeft",this.participantLeftListener),e.joined.removeListener("peerStartedPresenting",this.updateParticipants),e.joined.removeListener("peerStoppedPresenting",this.updateParticipants),a.removeListener("stageJoined",this.updateParticipants),a.removeListener("stageLeft",this.updateParticipants),a.removeListener("removedFromStage",this.updateParticipants),null===(i=null===(t=this.meeting)||void 0===t?void 0:t.stage)||void 0===i||i.removeListener("stageStatusUpdate",this.shouldShowStageList))}meetingChanged(t){var i;null!=t&&(this.participantJoinedListener=t=>{if("WEBINAR"===this.meeting.meta.viewType&&"ON_STAGE"!==t.webinarStageStatus)return;const i=this.search.toLowerCase();t.name.toLowerCase().includes(i)&&t.id.toLowerCase().includes(i)&&(this.participants=[...this.participants.filter((i=>i.id!==t.id)),t])},this.participantLeftListener=t=>{this.participants=this.participants.filter((i=>i.id!==t.id))},t.participants.joined.addListener("participantJoined",this.participantJoinedListener),t.participants.joined.addListener("participantLeft",this.participantLeftListener),t.participants.joined.addListener("peerStartedPresenting",this.updateParticipants),t.participants.joined.addListener("peerStoppedPresenting",this.updateParticipants),t.self.addListener("stageJoined",this.updateParticipants),t.self.addListener("stageLeft",this.updateParticipants),t.self.addListener("removedFromStage",this.updateParticipants),this.shouldShowStageList(),null===(i=null==t?void 0:t.stage)||void 0===i||i.on("stageStatusUpdate",this.shouldShowStageList))}searchChanged(t){this.getParticipants(t)}getParticipants(t){let i=[this.meeting.self,...this.meeting.participants.joined.toArray()];"WEBINAR"===this.meeting.meta.viewType&&(i=i.filter((t=>"ON_STAGE"===t.webinarStageStatus))),this.participants=""===t?i:i.filter((i=>{var e;return(null!==(e=i.name)&&void 0!==e?e:i.id).toLowerCase().includes(t.toLowerCase())}))}render(){if(this.showStageList)return(0,a.h)(a.H,null,(0,a.h)("div",{class:"participants-container"},(0,a.h)("div",{class:"heading-count",part:"heading-count"},this.t("participants")," (",this.participants.length,")"),(0,a.h)("ul",{class:"participants",part:"participants"},this.participants.map((t=>(0,a.h)("dyte-participant",{role:"listitem",key:t.id,meeting:this.meeting,participant:t,view:this.view,t:this.t,iconPack:this.iconPack}))),0===this.participants.length&&(0,a.h)("div",{class:"empty-message",part:"empty-message"},this.search.length>0?this.t("search.could_not_find"):this.t("search.empty")))))}static get watchers(){return{meeting:["meetingChanged"],search:["searchChanged"]}}};p.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;width:100%;flex-direction:column;font-size:14px}.participants-container{margin-bottom:var(--dyte-space-4, 16px);width:100%}h3,.heading-count{margin:var(--dyte-space-0, 0px);display:flex;align-items:center;justify-content:center;padding:var(--dyte-space-0, 0px);font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}.heading-count{font-size:14px}.participants{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.empty-message{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);text-align:center;font-size:12px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}dyte-participant{width:100%}"}}]);