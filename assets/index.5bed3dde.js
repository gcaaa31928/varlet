var se=Object.defineProperty;var D=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var j=(e,s,n)=>s in e?se(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,I=(e,s)=>{for(var n in s||(s={}))ie.call(s,n)&&j(e,n,s[n]);if(D)for(var n of D(s))re.call(s,n)&&j(e,n,s[n]);return e};import{p as le,S as A}from"./index.07c5cb2d.js";import{S as B}from"./index.1182c591.js";import{I as F}from"./index.07409e77.js";import{p as ce,P as V}from"./index.83963d1d.js";import{p as E,m as ue}from"./components.2c2bbd54.js";import{t as M,f as me,c as de,d as pe}from"./shared.29c174bb.js";import{_ as he}from"./elevation.61c5e873.js";import{q as ve,r as v,b as ge,y as fe,d as k,o as S,k as Y,w as _,h as we,c as P,j as Te,a as U,n as Ce,F as ye,B as L,A as Se,t as q,f as H,p as ke,z as _e}from"./vendor.7d218dee.js";const be=I(I({show:{type:Boolean,default:!1},images:{type:Array,default:()=>[]},current:{type:String},zoom:{type:[String,Number],default:2},closeable:{type:Boolean,default:!1},"onUpdate:show":{type:Function}},E(le,["loop","indicator","onChange"])),E(ce,["lockScroll","teleport","onOpen","onClose","onOpened","onClosed","onRouteChange"]));const W=12,Z=200,G=200,Ie=ve({name:"VarImagePreview",components:{[A.name]:A,[B.name]:B,[V.name]:V,[F.name]:F},inheritAttrs:!1,props:be,setup(e){const s=v(!1),n=ge(()=>{const{images:o,current:t}=e,a=o.findIndex(l=>l===t);return a>=0?a:0}),u=v(1),r=v(0),f=v(0),w=v(void 0),T=v(void 0),C=v(!0);let d=null,i=null,c=null;const X=(o,t)=>{const{clientX:a,clientY:l}=o,{clientX:m,clientY:p}=t;return Math.abs(Math.sqrt((m-a)**2+(p-l)**2))},O=(o,t)=>({clientX:o.clientX,clientY:o.clientY,timestamp:Date.now(),target:t}),J=()=>{u.value=M(e.zoom),C.value=!1,i=null,window.setTimeout(()=>{w.value="linear",T.value="0s"},G)},R=()=>{u.value=1,r.value=0,f.value=0,C.value=!0,i=null,w.value=void 0,T.value=void 0},K=o=>i?X(i,o)<=W&&o.timestamp-i.timestamp<=Z&&i.target===o.target:!1,Q=o=>!d||!i?!1:X(d,i)<=W&&(o===d.target||o.parentNode===d.target),x=o=>{c=window.setTimeout(()=>{Q(o.target)&&N(),d=null},Z)},ee=o=>{c&&window.clearTimeout(c);const{touches:t}=o,a=O(t[0],o.currentTarget);if(d=a,K(a)){u.value>1?R():J();return}i=a},$=o=>{const{offsetWidth:t,offsetHeight:a}=o,{naturalWidth:l,naturalHeight:m}=o.querySelector(".var-image-preview__image");return{width:t,height:a,imageRadio:m/l,rootRadio:a/t,zoom:M(e.zoom)}},oe=o=>{const{zoom:t,imageRadio:a,rootRadio:l,width:m,height:p}=$(o);if(!a)return 0;const y=a>l?p/a:m;return Math.max(0,(t*y-m)/2)/t},ne=o=>{const{zoom:t,imageRadio:a,rootRadio:l,width:m,height:p}=$(o);if(!a)return 0;const y=a>l?p:m*a;return Math.max(0,(t*y-p)/2)/t},z=(o,t,a)=>o+t>=a?a:o+t<=-a?-a:o+t,te=o=>{if(!i)return;const t=o.currentTarget,{touches:a}=o,l=O(a[0],t);if(u.value>1){const m=l.clientX-i.clientX,p=l.clientY-i.clientY,y=oe(t),ae=ne(t);r.value=z(r.value,m,y),f.value=z(f.value,p,ae)}i=l},N=()=>{var o;if(u.value>1){R(),setTimeout(()=>{var t;return(t=e["onUpdate:show"])==null?void 0:t.call(e,!1)},G);return}(o=e["onUpdate:show"])==null||o.call(e,!1)};return fe(()=>e.show,o=>{s.value=o},{immediate:!0}),{initialIndex:n,popupShow:s,scale:u,translateX:r,translateY:f,canSwipe:C,transitionTimingFunction:w,transitionDuration:T,handleTouchstart:ee,handleTouchmove:te,handleTouchend:x,close:N}}}),Ye=["src","alt"],Xe={key:0,class:"var-image-preview__indicators"};function Oe(e,s,n,u,r,f){const w=k("var-swipe-item"),T=k("var-swipe"),C=k("var-icon"),d=k("var-popup");return S(),Y(d,{class:"var-image-preview__popup","var-image-preview-cover":"",transition:"var-fade",show:e.popupShow,overlay:!1,"close-on-click-overlay":!1,"lock-scroll":e.lockScroll,teleport:e.teleport,onOpen:e.onOpen,onClose:e.onClose,onClosed:e.onClosed,onOpened:e.onOpened,onRouteChange:e.onRouteChange},{default:_(()=>[we(T,Se({class:"var-image-preview__swipe","var-image-preview-cover":"",touchable:e.canSwipe,indicator:e.indicator&&e.images.length>1,"initial-index":e.initialIndex,loop:e.loop,onChange:e.onChange},e.$attrs),{default:_(()=>[(S(!0),P(ye,null,Te(e.images,i=>(S(),Y(w,{class:"var-image-preview__swipe-item","var-image-preview-cover":"",key:i},{default:_(()=>[U("div",{class:"var-image-preview__zoom-container",style:Ce({transform:`scale(${e.scale}) translate(${e.translateX}px, ${e.translateY}px)`,transitionTimingFunction:e.transitionTimingFunction,transitionDuration:e.transitionDuration}),onTouchstart:s[0]||(s[0]=(...c)=>e.handleTouchstart&&e.handleTouchstart(...c)),onTouchmove:s[1]||(s[1]=(...c)=>e.handleTouchmove&&e.handleTouchmove(...c)),onTouchend:s[2]||(s[2]=(...c)=>e.handleTouchend&&e.handleTouchend(...c))},[U("img",{class:"var-image-preview__image",src:i,alt:i},null,8,Ye)],36)]),_:2},1024))),128))]),indicator:_(({index:i,length:c})=>[L(e.$slots,"indicator",{index:i,length:c},()=>[e.indicator&&e.images.length>1?(S(),P("div",Xe,q(i+1)+" / "+q(c),1)):H("v-if",!0)])]),_:3},16,["touchable","indicator","initial-index","loop","onChange"]),L(e.$slots,"close-icon",{},()=>[e.closeable?(S(),Y(C,{key:0,class:"var-image-preview__close-icon",name:"close-circle","var-image-preview-cover":"",onClick:e.close},null,8,["onClick"])):H("v-if",!0)])]),_:3},8,["show","lock-scroll","teleport","onOpen","onClose","onClosed","onOpened","onRouteChange"])}var g=he(Ie,[["render",Oe]]);let h;function b(e){if(!me)return;b.close();const s=de(e)?{images:[e]}:pe(e)?{images:e}:e,n=ke(s);n.teleport="body",h=n;const{unmountInstance:u}=ue(g,n,{onClose:()=>{var r;return(r=n.onClose)==null?void 0:r.call(n)},onClosed:()=>{var r;(r=n.onClosed)==null||r.call(n),u(),h===n&&(h=null)},onRouteChange:()=>{u(),h===n&&(h=null)},"onUpdate:show":r=>{n.show=r}});n.show=!0}b.close=()=>{if(h!=null){const e=h;h=null,_e().then(()=>{e.show=!1})}};g.install=function(e){e.component(g.name,g)};b.install=function(e){e.component(g.name,g)};b.Component=g;export{b as I};
