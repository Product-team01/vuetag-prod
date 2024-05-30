"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[6383,8022],{56383:(t,e,i)=>{i.r(e),i.d(e,{dyte_participant_tile:()=>l});var a=i(65733),o=i(46503),n=i(96633),s=i(20336),r=i(21237),d=i(27637),p=i(51285);i(24555),i(60804);const l=class{constructor(t){(0,a.r)(this,t),this.onVideoUpdate=t=>{this.videoState=t,null!=this.participant&&(t.videoEnabled?r.s.enableSource(this.participant.id):r.s.disableSource(this.participant.id))},this.onPinned=({isPinned:t})=>{this.isPinned=t},this.isSelf=()=>{var t;return this.isPreview||this.participant.id===(null===(t=this.meeting)||void 0===t?void 0:t.self.id)},this.videoState=void 0,this.isPinned=!1,this.nameTagPosition="bottom-left",this.isPreview=!1,this.participant=void 0,this.meeting=void 0,this.states=void 0,this.config=p.d,this.variant="solid",this.size=void 0,this.iconPack=n.d,this.t=(0,s.u)()}onVideoRef(t){this.videoEl=t,this.isPreview||null==this.participant||(r.s.addSource(this.participant.id,this.videoEl,this.participant.videoEnabled),this.participant.videoEnabled&&r.s.enableSource(this.participant.id))}connectedCallback(){this.participantsChanged(this.participant)}componentDidLoad(){this.videoStateChanged(this.videoState)}disconnectedCallback(){this.playTimeout&&clearTimeout(this.playTimeout),null!=this.participant&&(this.participant.removeListener("videoUpdate",this.onVideoUpdate),this.participant.removeListener("pinned",this.onPinned),this.participant.removeListener("unpinned",this.onPinned),r.s.removeSource(this.participant.id))}participantsChanged(t){null!=t&&(this.videoState={videoEnabled:t.videoEnabled,videoTrack:t.videoTrack},this.isPinned=t.isPinned,t.addListener("videoUpdate",this.onVideoUpdate),t.addListener("pinned",this.onPinned),t.addListener("unpinned",this.onPinned))}videoStateChanged(t){var e;if(null!=t&&null!=this.videoEl)if(t.videoEnabled){(null===(e=this.meeting)||void 0===e?void 0:e.__internals__.features.hasFeature(d.F.LOG_PLAYING_FAILURES))&&(this.playTimeout&&clearTimeout(this.playTimeout),this.playTimeout=setTimeout((()=>{var t;null===(t=this.meeting)||void 0===t||t.__internals__.logger.log("dyte-participant-tile::playing_timeout")}),6e3));const i=new MediaStream;if(null==t.videoTrack)return;i.addTrack(t.videoTrack),this.videoEl.srcObject=i}else this.playTimeout&&clearTimeout(this.playTimeout),this.videoEl.srcObject=void 0}isMirrored(){var t;if(null!=this.participant&&this.isSelf()){const e=this.states||o.s,i=null===(t=null==e?void 0:e.prefs)||void 0===t?void 0:t.mirrorVideo;if("boolean"==typeof i)return i}return!1}render(){var t,e,i,o;return(0,a.h)(a.H,null,(0,a.h)("video",{ref:t=>this.onVideoRef(t),class:{visible:null===(t=this.videoState)||void 0===t?void 0:t.videoEnabled,mirror:this.isMirrored(),[null!==(o=null===(i=null===(e=this.config)||void 0===e?void 0:e.config)||void 0===i?void 0:i.videoFit)&&void 0!==o?o:"cover"]:!0},onPlaying:()=>{this.playTimeout&&clearTimeout(this.playTimeout)},onPause:t=>{var e,i;this.isSelf()&&(null===(e=this.meeting)||void 0===e?void 0:e.__internals__.features.hasFeature(d.F.PLAY_PARTICIPANT_TILE_VIDEO_ON_PAUSE))&&(this.meeting.__internals__.logger.warn(`Video player paused for ${this.participant.id} isSelf: ${this.isSelf()}`),null===(i=null==t?void 0:t.target)||void 0===i||i.play())},autoPlay:!0,playsInline:!0,muted:!0}),this.isPinned&&(0,a.h)("dyte-icon",{class:"pinned-icon",icon:this.iconPack.pin,"aria-label":this.t("pinned"),iconPack:this.iconPack,t:this.t}),(0,a.h)("slot",null))}static get watchers(){return{participant:["participantsChanged"],videoState:["videoStateChanged"]}}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:flex;align-items:center;justify-content:center;aspect-ratio:16 / 9;height:var(--dyte-space-56, 224px);overflow:hidden;border-radius:var(--dyte-border-radius-lg, 12px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-video-bg, 24 24 24) / var(--tw-bg-opacity));transition-property:var(--dyte-transition-property, all);transition-duration:150ms}@media (prefers-reduced-motion){:host{--dyte-transition-property:none}}::slotted(dyte-name-tag){position:absolute;left:var(--dyte-space-3, 12px);bottom:var(--dyte-space-3, 12px)}:host([size='sm'][variant='solid']) ::slotted(dyte-name-tag){left:var(--dyte-space-2, 8px);bottom:var(--dyte-space-2, 8px);height:var(--dyte-space-4, 16px)}::slotted(dyte-network-indicator){position:absolute;right:var(--dyte-space-3, 12px);bottom:var(--dyte-space-3, 12px)}:host([size='sm']) ::slotted(dyte-network-indicator){right:var(--dyte-space-2, 8px);bottom:var(--dyte-space-2, 8px)}video{display:none;position:absolute;height:100%;width:100%;border-radius:var(--dyte-border-radius-lg, 12px)}video.contain{-o-object-fit:contain;object-fit:contain}video.cover{-o-object-fit:cover;object-fit:cover}video.visible{display:block}video::-webkit-media-controls{display:none !important}.pinned-icon{position:absolute;left:var(--dyte-space-3, 12px);top:var(--dyte-space-3, 12px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);padding:var(--dyte-space-1, 4px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}:host([size='sm']) .pinned-icon{top:var(--dyte-space-2, 8px);left:var(--dyte-space-2, 8px)}:host([variant='gradient']) ::slotted(dyte-audio-visualizer){position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px)}:host([variant='gradient']) ::slotted(dyte-name-tag){bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);display:flex;width:100%;align-items:center;justify-content:center;text-align:center;background-color:transparent;background-image:linear-gradient(to top, var(--tw-gradient-stops));--tw-gradient-from:rgb(var(--dyte-colors-background-1000, 8 8 8));--tw-gradient-to:rgba(var(--dyte-colors-background-1000, 8 8 8) / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:transparent}video.mirror{transform:scaleX(-1)}:host([name-tag-position='bottom-right']) ::slotted(dyte-name-tag){left:auto;right:var(--dyte-space-3, 12px)}:host([name-tag-position='bottom-center']) ::slotted(dyte-name-tag){left:auto;right:auto}:host([name-tag-position='top-left']) ::slotted(dyte-name-tag){top:var(--dyte-space-3, 12px);bottom:auto}:host([name-tag-position='top-right']) ::slotted(dyte-name-tag){top:var(--dyte-space-3, 12px);right:var(--dyte-space-3, 12px);left:auto;bottom:auto}:host([name-tag-position='top-center']) ::slotted(dyte-name-tag){left:auto;right:auto;bottom:auto;top:var(--dyte-space-3, 12px)}"}}]);