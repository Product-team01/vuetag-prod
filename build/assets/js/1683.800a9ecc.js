"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[1683,8811],{91683:(e,t,i)=>{i.r(t),i.d(t,{dyte_participants_viewer_list:()=>p});var s=i(65733),a=i(51285),r=(i(21237),i(24555),i(96633)),n=i(20336);i(60804);const p=class{constructor(e){(0,s.r)(this,e),this.updateStageViewers=()=>{this.getViewers(this.search)},this.shouldShowViewers=()=>"WEBINAR"===this.meeting.meta.viewType,this.meeting=void 0,this.config=a.d,this.size=void 0,this.iconPack=r.d,this.view="sidebar",this.search="",this.t=(0,n.u)(),this.stageViewers=[]}connectedCallback(){this.meetingChanged(this.meeting),this.searchChanged(this.search)}meetingChanged(e){null!=e&&(this.participantJoinedListener=e=>{if("ON_STAGE"===e.webinarStageStatus)return;const t=this.search.toLowerCase();e.name.toLowerCase().includes(t)&&e.id.toLowerCase().includes(t)&&(this.stageViewers=[...this.stageViewers.filter((t=>t.id!==e.id)),e])},this.participantLeftListener=e=>{this.stageViewers=this.stageViewers.filter((t=>t.id!==e.id))},e.participants.joined.addListener("participantJoined",this.participantJoinedListener),e.participants.joined.addListener("participantLeft",this.participantLeftListener),e.participants.joined.addListener("peerStartedPresenting",this.updateStageViewers),e.participants.joined.addListener("peerStoppedPresenting",this.updateStageViewers),e.self.addListener("stageJoined",this.updateStageViewers),e.self.addListener("stageLeft",this.updateStageViewers),e.self.addListener("removedFromStage",this.updateStageViewers))}searchChanged(e){this.getViewers(e)}disconnectedCallback(){const{participants:e,self:t}=this.meeting;this.participantJoinedListener&&this.meeting.participants.joined.removeListener("participantJoined",this.participantJoinedListener),this.participantLeftListener&&this.meeting.participants.joined.removeListener("participantLeft",this.participantLeftListener),e.joined.removeListener("peerStartedPresenting",this.updateStageViewers),e.joined.removeListener("peerStoppedPresenting",this.updateStageViewers),t.removeListener("stageJoined",this.updateStageViewers),t.removeListener("stageLeft",this.updateStageViewers),t.removeListener("removedFromStage",this.updateStageViewers)}getViewers(e){let t=[this.meeting.self,...this.meeting.participants.joined.toArray()].filter((e=>"ON_STAGE"!==e.webinarStageStatus));this.stageViewers=""===e?t:t.filter((t=>{var i;return(null!==(i=t.name)&&void 0!==i?i:t.id).toLowerCase().includes(e.toLowerCase())}))}render(){if("sidebar"===this.view&&this.shouldShowViewers())return(0,s.h)("div",{class:"list"},(0,s.h)("div",{class:"heading-count",part:"heading-count"},this.t("viewers")," (",this.stageViewers.length,")"),(0,s.h)("ul",{class:"participants",part:"participants"},this.stageViewers.map((e=>{if("ON_STAGE"!==e.webinarStageStatus)return(0,s.h)("dyte-participant",{role:"listitem",key:e.id,meeting:this.meeting,participant:e,view:this.view,iconPack:this.iconPack,t:this.t})})),0===this.stageViewers.length&&(0,s.h)("div",{class:"empty-message",part:"empty-message"},this.search.length>0?this.t("participants.errors.empty_results"):this.t("participants.empty_list"))))}static get watchers(){return{meeting:["meetingChanged"],search:["searchChanged"]}}};p.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;width:100%;flex-direction:column;font-size:14px}.list{margin-bottom:var(--dyte-space-4, 16px);display:flex;flex-direction:column}h3,.heading-count{margin:var(--dyte-space-0, 0px);align-items:center;justify-content:center;padding:var(--dyte-space-0, 0px);font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}.heading-count{font-size:14px}.participants{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.empty-message{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);text-align:center;font-size:12px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}"}}]);