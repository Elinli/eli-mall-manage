var p=(n,t,e)=>new Promise((s,o)=>{var l=r=>{try{u(e.next(r))}catch(i){o(i)}},a=r=>{try{u(e.throw(r))}catch(i){o(i)}},u=r=>r.done?s(r.value):Promise.resolve(r.value).then(l,a);u((e=e.apply(n,t)).next())});import{a$ as P,aI as T,C as Q,Q as N,P as R,a as w,b as S,O as B,d as q,o as z,$ as L,a0 as M,a3 as U,an as W}from"./index.51608b29.js";import{E as V}from"./el-button.73adfdda.js";var O;const f=typeof window!="undefined",$=n=>typeof n=="string",m=()=>{};f&&((O=window==null?void 0:window.navigator)==null?void 0:O.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function j(n){return typeof n=="function"?n():w(n)}function A(n){return n}function h(n){return P()?(T(n),!0):!1}function D(n,t=!0){Q()?N(n):t?n():R(n)}function C(n){var t;const e=j(n);return(t=e==null?void 0:e.$el)!=null?t:e}const G=f?window:void 0,H=f?window.document:void 0;f&&window.navigator;f&&window.location;function K(...n){let t,e,s,o;if($(n[0])?([e,s,o]=n,t=G):[t,e,s,o]=n,!t)return m;let l=m;const a=B(()=>C(t),r=>{l(),r&&(r.addEventListener(e,s,o),l=()=>{r.removeEventListener(e,s,o),l=m})},{immediate:!0,flush:"post"}),u=()=>{a(),l()};return h(u),u}function X(n,t=!1){const e=S(),s=()=>e.value=Boolean(n());return s(),D(s,t),e}const v=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},_="__vueuse_ssr_handlers__";v[_]=v[_]||{};v[_];const b=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function J(n,t={}){const{document:e=H,autoExit:s=!1}=t,o=n||(e==null?void 0:e.querySelector("html")),l=S(!1);let a=b[0];const u=X(()=>{if(e){for(const c of b)if(c[1]in e)return a=c,!0}else return!1;return!1}),[r,i,E,,k]=a;function d(){return p(this,null,function*(){!u.value||(e!=null&&e[E]&&(yield e[i]()),l.value=!1)})}function g(){return p(this,null,function*(){if(!u.value)return;yield d();const c=C(o);c&&(yield c[r](),l.value=!0)})}function x(){return p(this,null,function*(){l.value?yield d():yield g()})}return e&&K(e,k,()=>{l.value=!!(e!=null&&e[E])},!1),s&&h(d),{isSupported:u,isFullscreen:l,enter:g,exit:d,toggle:x}}var F;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(F||(F={}));var Y=Object.defineProperty,I=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,y=(n,t,e)=>t in n?Y(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ne=(n,t)=>{for(var e in t||(t={}))Z.call(t,e)&&y(n,e,t[e]);if(I)for(var e of I(t))ee.call(t,e)&&y(n,e,t[e]);return n};const te={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ne({linear:A},te);const oe=q({__name:"Fullscreen",setup(n){const{toggle:t,isFullscreen:e}=J();return(s,o)=>{const l=W("eli-svg-icon"),a=V;return z(),L(a,{onClick:w(t),class:"fullscreen icon-button",text:""},{default:M(()=>[U(l,{name:w(e)?"off-screen":"full-screen",width:"20px",height:"20px"},null,8,["name"])]),_:1},8,["onClick"])}}});export{oe as _};
