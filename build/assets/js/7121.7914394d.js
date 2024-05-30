"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[7121,6558],{67121:(t,i,e)=>{e.r(i),e.d(i,{dyte_mixed_grid:()=>o});var s=e(65733),a=e(51285),n=e(75673),h=e(96633),d=e(20336),r=e(85371);const o=class{constructor(t){(0,s.r)(this,t),this.layout="row",this.participants=[],this.pinnedParticipants=[],this.screenShareParticipants=[],this.plugins=[],this.aspectRatio="16:9",this.gap=8,this.size=void 0,this.meeting=void 0,this.states=void 0,this.config=a.d,this.iconPack=h.d,this.t=(0,d.u)(),this.gridSize=n.d,this.activeTab=void 0,this.initialised=void 0}componentWillLoad(){this.initialised=!1,this.screenShareParticipantsChanged(this.screenShareParticipants),this.pluginsChanged(this.plugins),this.initialised=!0}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){var t;null===(t=this.meeting.spotlight)||void 0===t||t.removeListener("activeTabUpdate",this.spotlightTabUpdateListener)}meetingChanged(t){var i,e,s,a;null!=t&&(null!=(null===(i=t.spotlight)||void 0===i?void 0:i.selfActiveTab)&&this.onSpotlightTabUpdate(null===(e=t.spotlight.selfActiveTab)||void 0===e?void 0:e.type,null===(s=t.spotlight.selfActiveTab)||void 0===s?void 0:s.id),this.spotlightTabUpdateListener=t=>{this.onSpotlightTabUpdate(null==t?void 0:t.type,null==t?void 0:t.id)},null===(a=t.spotlight)||void 0===a||a.addListener("activeTabUpdate",this.spotlightTabUpdateListener))}screenShareParticipantsChanged(t=[]){(this.initialised||null==this.activeTab)&&(null==this.activeTab&&t.length>0?this.setActiveTab({type:"screenshare",participant:t[0]}):this.revalidateActiveTab())}pluginsChanged(t){if(this.initialised||null==this.activeTab)if(t.length>0){const i=t.length-1;this.setActiveTab({type:"plugin",plugin:t[i]})}else this.revalidateActiveTab()}revalidateActiveTab(){if(null!=this.activeTab)if("screenshare"===this.activeTab.type){const{participant:t}=this.activeTab;this.screenShareParticipants.some((i=>i.id===t.id))||this.reassignActiveTab()}else{const{plugin:t}=this.activeTab;this.plugins.some((i=>i.id===t.id))||this.reassignActiveTab()}}setActiveTab(t,i=!0){var e;this.activeTab=t;const s="screenshare"===t.type?t.participant.id:t.plugin.id;i&&(null===(e=this.meeting.spotlight)||void 0===e||e.setSelfActiveTab({type:t.type,id:s},0))}reassignActiveTab(){if(this.screenShareParticipants.length>0)this.setActiveTab({type:"screenshare",participant:this.screenShareParticipants[0]});else if(this.plugins.length>0){const t=this.plugins.length-1;this.setActiveTab({type:"plugin",plugin:this.plugins[t]})}}onSpotlightTabUpdate(t,i){if(null!=t&&null!=i)switch(t){case"plugin":const t=this.plugins.find((t=>t.id===i));null!=t&&this.setActiveTab({type:"plugin",plugin:t},!1);break;case"screenshare":const e=this.screenShareParticipants.find((t=>t.id===i));null!=e&&this.setActiveTab({type:"screenshare",participant:e},!1)}}getTabs(){const t=this.screenShareParticipants.map((t=>({type:"screenshare",participant:t}))),i=this.plugins.map((t=>({type:"plugin",plugin:t})));return t.concat(i)}render(){var t;const i={meeting:this.meeting,config:this.config,states:this.states,size:this.size,iconPack:this.iconPack,t:this.t};return(0,s.h)(s.H,null,(0,s.h)("main",{id:"main-view",part:"main-view"},(null===(t=this.getTabs())||void 0===t?void 0:t.length)>1&&(0,s.h)("dyte-tab-bar",Object.assign({activeTab:this.activeTab,tabs:this.getTabs(),onTabChange:t=>this.setActiveTab(t.detail)},i)),(0,s.h)("div",{id:"tabs",key:"tabs"},this.screenShareParticipants.map((t=>{var e,a;return(0,s.h)(r.R,{element:"dyte-screenshare-view",defaults:i,props:{participant:t,key:t.id,style:{display:"screenshare"===(null===(e=this.activeTab)||void 0===e?void 0:e.type)&&(null===(a=this.activeTab)||void 0===a?void 0:a.participant.id)===t.id?"flex":"none"}},childProps:{participant:t,isScreenShare:!0},deepProps:!0})})),this.plugins.map((t=>{var e,a;return(0,s.h)(r.R,{element:"dyte-plugin-main",defaults:i,props:{plugin:t,key:t.id,style:{display:"plugin"===(null===(e=this.activeTab)||void 0===e?void 0:e.type)&&(null===(a=this.activeTab)||void 0===a?void 0:a.plugin.id)===t.id?"flex":"none"}}})})))),(0,s.h)(r.R,{element:"dyte-mixed-grid",defaults:i,childProps:{part:"participants-grid",class:this.gridSize.mixed?`grid-width-${this.gridSize.mixed}`:"grid-width-lg",participants:this.participants,pinnedParticipants:this.pinnedParticipants,screenShareParticipants:this.screenShareParticipants,plugins:this.plugins,aspectRatio:this.aspectRatio,gap:this.gap,size:"sm",layout:"row"},onlyChildren:!0}))}get host(){return(0,s.g)(this)}static get watchers(){return{meeting:["meetingChanged"],screenShareParticipants:["screenShareParticipantsChanged"],plugins:["pluginsChanged"]}}};o.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block;height:100%;width:100%;display:flex}main{display:flex;flex:1 1 0%;padding-left:var(--dyte-space-4, 16px)}:host([layout='column']) main{padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}main dyte-tab-bar{margin-right:var(--dyte-space-4, 16px);box-sizing:border-box;display:flex;height:100%;width:var(--dyte-space-16, 64px);flex-direction:column}main #tabs{height:100%;flex:1 1 0%}dyte-button{z-index:10}.grid-width-sm{width:25%}.grid-width-md{width:50%}.grid-width-lg{width:66.666667%}.col{display:flex;flex-direction:column;align-items:center}.tab{display:flex;height:var(--dyte-space-16, 64px);width:var(--dyte-space-16, 64px);align-items:center;justify-content:center;margin-bottom:var(--dyte-space-2, 8px);font-size:12px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.tab.active{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity))}.tab img{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px);border-radius:var(--dyte-border-radius-sm, 4px)}:host([size='sm']){flex-direction:column}:host([size='sm']) .grid-width-lg,:host([size='sm']) .grid-width-md{height:50%;width:100%;max-width:100%}:host([size='sm']) .grid-width-sm{height:33.333333%;width:100%;max-width:100%}:host([size='sm']) main{display:flex;flex:1 1 0%;flex-direction:column;padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}:host([size='sm']) dyte-tab-bar{height:var(--dyte-space-12, 48px);width:100%;flex-direction:row}:host([size='sm']) #tabs{flex:1 1 0%}:host([size='sm']) .tab{margin:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-2, 8px)}:host([layout='column']){flex-direction:column}:host([layout='column']) main{display:flex;flex:1 1 0%}:host([layout='column']) .grid-width-lg,:host([layout='column']) .grid-width-md{height:50%;max-width:100%;width:100%}:host([layout='column']) .grid-width-sm{height:33.333333%;max-width:100%;width:100%}@media (orientation: portrait){:host{flex-direction:column}:host .grid-width-lg{height:50%;width:100%;max-width:100%}:host .grid-width-md{height:33.333333%;width:100%;max-width:100%}:host .grid-width-sm{height:25%;width:100%;max-width:100%}:host main{flex:1 1 0%;flex-direction:column;padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}:host([size='md']) main{flex:1 1 0%;flex-direction:column;padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}:host dyte-tab-bar{height:var(--dyte-space-16, 64px);width:100%;flex-direction:row}:host #tabs{flex:1 1 0%}:host .tab{margin:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-2, 8px)}}"},75673:(t,i,e)=>{function s(t,i){const e=Math.pow(10,i);return Math.floor(t*e)/e}function a({dimensions:t,count:i,aspectRatio:e,gap:a}){const{width:h,height:d,rows:r,cols:o}=function({count:t,dimensions:i,aspectRatio:e,gap:a}){let{width:h,height:d}=i;if(0===h||0===d)return{width:0,height:0,rows:1,cols:1};h-=2*a,d-=2*a;const r=a,o=t,l=n(e);let c=0,p=0,g=1,u=1;const v=[];for(let s=1;s<=o;s++)v.push((h-r*(s-1))/s),v.push((d-r*(s-1))/(s*l));v.sort(((t,i)=>i-t));for(const n of v)if(c=s(n,4),p=s(c*l,4),g=Math.floor((h+r)/(c+r)),u=Math.floor((d+r)/(p+r)),g*u>=o){u=Math.ceil(o/g);break}return{width:c,height:p,rows:u,cols:g}}({dimensions:t,count:i,aspectRatio:e,gap:a}),l=function({parentDimensions:t,dimensions:i,rows:e,cols:s,count:a,gap:n}){const{width:h,height:d}=t,{width:r,height:o}=i,l=(d-(o*e+(e-1)*n))/2;let c=(h-(r*s+(s-1)*n))/2;const p=o+n,g=r+n;let u=0,v=0;const m=a%s;function b(t){const i=a-t;i===m&&(c=(h-(r*i+(i-1)*n))/2);const e=l+v*p,d=c+u*g;return u++,(t+1)%s==0&&(v++,u=0),{top:e,left:d}}return b}({parentDimensions:t,dimensions:{width:h,height:d},rows:r,cols:o,count:i,gap:a});return{width:h,height:d,getPosition:l}}e.d(i,{d:()=>h,u:()=>a});const n=t=>{const[i,e]=t.split(":");return Number.parseInt(e)/Number.parseInt(i)},h={spotlight:"sm",mixed:"sm"}}}]);