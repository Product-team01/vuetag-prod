"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[5203,2554],{55203:(t,e,i)=>{i.r(e),i.d(e,{dyte_grid_pagination:()=>n});var a=i(65733),o=i(96633),r=i(20336);const n=class{constructor(t){(0,a.r)(this,t),this.onPageChanged=({currentPage:t,pageCount:e})=>{this.pageCount=e,this.page=t},this.toggleGridPagination=()=>{var t;const{self:e,participants:i}=this.meeting,{mobile:a,desktop:o}=null===(t=e.config)||void 0===t?void 0:t.maxVideoStreams,r="sm"===this.size?a:o;i.joined.size<r?this.showPagination=!1:this.showPagination=!0},this.onParticipantJoin=()=>{this.pageCount=this.meeting.participants.pageCount,this.toggleGridPagination()},this.onParticipantLeave=()=>{this.pageCount=this.meeting.participants.pageCount,this.toggleGridPagination()},this.prevPage=()=>{if(null==this.meeting)return;const{participants:t}=this.meeting;this.page>1?t.setPage(this.page-=1):"PAGINATED"===t.viewMode&&t.setViewMode("ACTIVE_GRID")},this.nextPage=()=>{if(null==this.meeting)return;const{participants:t}=this.meeting;this.page>0&&this.page<this.pageCount?t.setPage(this.page+=1):t.count>0&&0===this.pageCount&&t.setViewMode("PAGINATED")},this.meeting=void 0,this.states=void 0,this.size=void 0,this.variant="rounded",this.iconPack=o.d,this.t=(0,r.u)(),this.page=1,this.pageCount=0,this.activeCount=0,this.activeComputedCount=0,this.showPagination=!1}connectedCallback(){this.meetingChanged(this.meeting),this.sizeChanged()}disconnectedCallback(){if(null==this.meeting)return;const{participants:t}=this.meeting;t.removeListener("pageChanged",this.onPageChanged),t.removeListener("viewModeChanged",this.onPageChanged),t.joined.removeListener("participantJoined",this.onParticipantJoin),t.joined.removeListener("participantLeft",this.onParticipantLeave)}meetingChanged(t){if(null!=t){const{participants:e}=t;this.page=e.currentPage,this.pageCount=e.pageCount,e.addListener("viewModeChanged",this.onPageChanged),e.addListener("pageChanged",this.onPageChanged),e.joined.addListener("participantJoined",this.onParticipantJoin),e.joined.addListener("participantLeft",this.onParticipantLeave),this.activeCount=this.meeting.participants.joined.size,this.activeComputedCount=this.meeting.participants.joined.size,this.toggleGridPagination()}}sizeChanged(){this.toggleGridPagination()}render(){if(!("WEBINAR"===this.meeting.meta.viewType)&&this.showPagination)return(0,a.h)(a.H,null,(0,a.h)("dyte-button",{class:"prev",variant:"secondary",kind:"icon",disabled:0===this.pageCount,onClick:this.prevPage,"aria-label":this.t("page.prev"),iconPack:this.iconPack,t:this.t},(0,a.h)("dyte-icon",{icon:this.iconPack.chevron_left,iconPack:this.iconPack,t:this.t})),"grid"!==this.variant&&(0,a.h)("div",{class:"center"},(0,a.h)("span",{class:"page"},0===this.pageCount?(0,a.h)("dyte-tooltip",{label:this.t("layout.auto"),iconPack:this.iconPack,t:this.t},(0,a.h)("dyte-button",{kind:"icon",class:"auto",iconPack:this.iconPack,t:this.t},(0,a.h)("dyte-icon",{icon:this.iconPack.wand,iconPack:this.iconPack,t:this.t}))):this.page),0!==this.pageCount&&[(0,a.h)("span",{class:"slash"},"/"),(0,a.h)("span",{class:"pages"},this.pageCount)]),"grid"===this.variant&&this.pageCount>0&&(0,a.h)("div",{class:"dots"},[...Array(this.pageCount)].map(((t,e)=>(0,a.h)("div",{key:`dot-${e}`,class:{dot:!0,active:e+1===this.page}})))),(0,a.h)("dyte-button",{class:"next",variant:"secondary",kind:"icon",disabled:0!==this.page&&this.page===this.pageCount,onClick:this.nextPage,"aria-label":this.t("page.next"),iconPack:this.iconPack,t:this.t},(0,a.h)("dyte-icon",{icon:this.iconPack.chevron_right,tabIndex:-1,"aria-hidden":!0,iconPack:this.iconPack,t:this.t})))}static get watchers(){return{meeting:["meetingChanged"],size:["sizeChanged"]}}};n.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;font-size:16px}:host([size='sm']){margin-left:var(--dyte-space-1, 4px);margin-right:var(--dyte-space-1, 4px);font-size:12px}:host([size='sm']) .center{margin-left:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0, 0px)}:host([size='sm']) dyte-button{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px)}:host([size='sm']) dyte-button dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}dyte-button{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.center{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.center .page{color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.center .slash{margin-left:var(--dyte-space-0\\.5, 2px);margin-right:var(--dyte-space-0\\.5, 2px)}.center .pages{align-self:flex-end;font-size:12px}:host([variant='rounded']){overflow:hidden;border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}:host([variant='rounded']) dyte-button{border-radius:9999px;border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}:host([variant='rounded']) dyte-button:not([disabled]):hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}:host([variant='rounded']) dyte-button:not([disabled]):focus{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}:host([variant='grid']){margin-left:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0, 0px)}:host([variant='grid']) dyte-button{position:absolute;top:50%;height:var(--dyte-space-20, 80px);width:var(--dyte-space-20, 80px);opacity:0.2;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}:host([variant='grid']) dyte-button:hover{opacity:1}:host([variant='grid']) dyte-button{transform:translateY(-50%)}:host([variant='grid']) dyte-button.prev{left:var(--dyte-space-0, 0px);border-top-right-radius:9999px;border-bottom-right-radius:9999px}:host([variant='grid']) dyte-button.next{right:var(--dyte-space-0, 0px);border-top-left-radius:9999px;border-bottom-left-radius:9999px}:host([variant='grid']) dyte-button.auto{left:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);border-top-right-radius:9999px;border-bottom-right-radius:9999px}:host([variant='grid']) .dots{position:absolute;left:50%;bottom:var(--dyte-space-3, 12px);display:flex;align-items:center;transform:translateX(-50%)}:host([variant='grid']) .dots .dot{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-2, 8px);width:var(--dyte-space-2, 8px);cursor:pointer;border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}:host([variant='grid']) .dots .dot:last-child{margin-right:var(--dyte-space-0, 0px)}:host([variant='grid']) .dots .dot.active{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity))}:host([variant='grid'][size='sm']) dyte-button{height:var(--dyte-space-14, 56px);width:var(--dyte-space-14, 56px);opacity:0.1}"}}]);