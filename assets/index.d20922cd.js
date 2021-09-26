var e=Object.defineProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(o,t,n)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,l=(e,l)=>{for(var r in l||(l={}))t.call(l,r)&&a(e,r,l[r]);if(o)for(var r of o(l))n.call(l,r)&&a(e,r,l[r]);return e};import{q as r,y as s,o as p,j as i,g as d,w as c,h as u,v as y,a as v,c as f,m,n as b,f as O,T as h,O as C,P as w,Q as j}from"./vendor.d2d73257.js";import{u as x}from"./lock.7483d51c.js";import{u as I}from"./zIndex.dd4e6699.js";import{u as k,a as g}from"./components.32b87c06.js";import{_ as z}from"./IconSfc.576827a5.js";const P={show:{type:Boolean,default:!1},position:{type:String,default:"center",validator:function(e){return["top","bottom","right","left","center"].includes(e)}},transition:{type:String},overlay:{type:Boolean,default:!0},overlayClass:{type:String},overlayStyle:{type:Object},lockScroll:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},teleport:{},onOpen:{type:Function},onOpened:{type:Function},onClose:{type:Function},onClosed:{type:Function},onClickOverlay:{type:Function},onRouteChange:{type:Function},"onUpdate:show":{type:Function}};var S=z(r({name:"VarPopup",inheritAttrs:!1,props:P,setup(e){const{zIndex:o}=I((()=>e.show),3),{disabled:t}=k();return x(e,"show","lockScroll"),s((()=>e.show),(o=>{const{onOpen:t,onClose:n}=e;o?null==t||t():null==n||n()})),g((()=>{var o;return null==(o=e.onRouteChange)?void 0:o.call(e)})),{zIndex:o,disabled:t,hidePopup:()=>{var o;const{closeOnClickOverlay:t,onClickOverlay:n}=e;null==n||n(),t&&(null==(o=e["onUpdate:show"])||o.call(e,!1))}}}}),[["render",function(e,o,t,n,a,r){return p(),i(j,{to:e.teleport,disabled:!e.teleport||e.disabled},[d(h,{name:"var-fade",onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:c((()=>[u(v("div",{class:"var--box var-popup",style:b({zIndex:e.zIndex-2})},[e.overlay?(p(),f("div",{key:0,class:m(["var-popup__overlay",[e.overlayClass]]),style:b(l({zIndex:e.zIndex-1},e.overlayStyle)),onClick:o[0]||(o[0]=(...o)=>e.hidePopup&&e.hidePopup(...o))},null,6)):O("v-if",!0),d(h,{name:e.transition?e.transition:`var-pop-${e.position}`},{default:c((()=>[e.show?(p(),f("div",w({key:0,class:["var-popup__content var-elevation--3",[`var-popup--${e.position}`]],style:{zIndex:e.zIndex}},e.$attrs),[C(e.$slots,"default")],16)):O("v-if",!0)])),_:3},8,["name"])],4),[[y,e.show]])])),_:3},8,["onAfterEnter","onAfterLeave"])],8,["to","disabled"])}]]);S.install=function(e){e.component(S.name,S)};export{S as P,P as p};