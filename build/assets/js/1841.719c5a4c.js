"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[1841,5486],{5486:(e,t,n)=>{n.r(t),n.d(t,{dyte_fullscreen_toggle:()=>r});var l=n(65733),c=n(96633),s=n(20336),i=n(30099),u=n(46503);const r=class{constructor(e){(0,l.r)(this,e),this.stateUpdate=(0,l.c)(this,"dyteStateUpdate",7),this.onFullScreenchange=()=>{this.fullScreenActive=(0,i.i)()},this.toggleFullScreen=()=>{const e=document.querySelector("dyte-meeting");e&&(this.fullScreenActive?((0,i.e)(),this.fullScreenActive=!1):((0,i.r)(e),this.fullScreenActive=!0),this.stateUpdate.emit({activeMoreMenu:!1}),u.s.activeMoreMenu=!1)},this.states=void 0,this.variant="button",this.size=void 0,this.iconPack=c.d,this.t=(0,s.u)(),this.fullScreenActive=!1,this.isFullScreenSupported=!0}connectedCallback(){this.isFullScreenSupported=(0,i.a)(),this.onFullScreenchange(),window.addEventListener("webkitfullscreenchange",this.onFullScreenchange),window.addEventListener("fullscreenchange",this.onFullScreenchange)}disconnectedCallback(){window.removeEventListener("webkitfullscreenchange",this.onFullScreenchange),window.removeEventListener("fullscreenchange",this.onFullScreenchange)}render(){return this.isFullScreenSupported?(0,l.h)(l.H,{title:this.t("full_screen")},(0,l.h)("dyte-controlbar-button",{size:this.size,iconPack:this.iconPack,t:this.t,onClick:this.toggleFullScreen,icon:this.fullScreenActive?this.iconPack.full_screen_minimize:this.iconPack.full_screen_maximize,label:this.fullScreenActive?this.t("full_screen.exit"):this.t("full_screen"),variant:this.variant})):null}};r.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"},30099:(e,t,n)=>{n.d(t,{a:()=>i,e:()=>c,i:()=>s,r:()=>l});const l=e=>{null!=e&&(null!=e.requestFullscreen?e.requestFullscreen():null!=e.mozRequestFullScreen?e.mozRequestFullScreen():null!=e.webkitRequestFullscreen?e.webkitRequestFullscreen():null!=e.msRequestFullscreen&&e.msRequestFullscreen())},c=()=>{null!=document.exitFullscreen?document.exitFullscreen():null!=document.mozExitFullScreen?document.mozExitFullScreen():null!=document.webkitExitFullscreen?document.webkitExitFullscreen():null!=document.msExitFullscreen&&document.msExitFullscreen()},s=()=>null!=document.fullscreenElement||null!=document.webkitCurrentFullScreenElement,i=()=>"undefined"!=typeof document&&(document.fullscreenEnabled||document.mozFullscreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled)}}]);