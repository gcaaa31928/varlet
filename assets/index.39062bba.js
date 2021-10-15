var Q=Object.defineProperty;var E=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var T=(e,t,n)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))W.call(t,n)&&T(e,n,t[n]);if(E)for(var n of E(t))X.call(t,n)&&T(e,n,t[n]);return e};import{q as z,r as ee,b as _,y as I,x as ne,d as g,i as te,v as ae,o as v,c as oe,a as h,m as j,B as b,k as C,f as B,n as N,l as V,t as L,h as y,w as S,A as w,T as se,L as ie,p as $,V as re,Y as le}from"./vendor.7d218dee.js";import{p as P,L as q}from"./index.4c5d9efa.js";import{B as F}from"./index.afd05102.js";import{I as U}from"./index.07409e77.js";import{u as ce}from"./zIndex.52d284ff.js";import{p as D,c as de,m as ue}from"./components.2c2bbd54.js";import{_ as G}from"./elevation.61c5e873.js";import{c as fe}from"./index.40559b3e.js";import{g as M,t as Y}from"./shared.29c174bb.js";import{u as pe}from"./lock.0e62da87.js";function me(e){return["top","center","bottom"].includes(e)}function ve(e){return O.includes(e)}const x={type:{type:String,validator:ve},position:{type:String,default:"top",validator:me},content:{type:String},contentClass:{type:String},duration:{type:Number,default:3e3},vertical:{type:Boolean,default:!1},loadingType:D(P,"type"),loadingSize:D(P,"size"),lockScroll:{type:Boolean,default:!1},show:{type:Boolean,default:!1},teleport:{type:String,default:"body"},forbidClick:{type:Boolean,default:!1},onOpen:{type:Function,default:()=>{}},onOpened:{type:Function,default:()=>{}},onClose:{type:Function,default:()=>{}},onClosed:{type:Function,default:()=>{}},"onUpdate:show":{type:Function},_update:{type:String}};const be={success:"checkbox-marked-circle",warning:"warning",info:"information",error:"error",loading:""},ye=z({name:"VarSnackbarCore",components:{[q.name]:q,[F.name]:F,[U.name]:U},props:x,setup(e){const t=ee(null),{zIndex:n}=ce(()=>e.show,1);pe(e,"show","lockScroll");const l=_(()=>{const{position:i,vertical:m,type:d}=e,R=`var-snackbar__wrapper var-snackbar__wrapper-${i} var-elevation--4`,Z=m?" var-snackbar__vertical":"",J=d&&O.includes(d)?` var-snackbar__wrapper-${d}`:"";return`${R}${Z}${J}`}),a=_(()=>e.type==="loading"||e.forbidClick),s=_(()=>e.type?be[e.type]:""),o=()=>{t.value=setTimeout(()=>{var i;e.type!=="loading"&&((i=e["onUpdate:show"])==null||i.call(e,!1))},e.duration)};return I(()=>e.show,i=>{var m,d;i?((m=e.onOpen)==null||m.call(e),o()):i===!1&&(clearTimeout(t.value),(d=e.onClose)==null||d.call(e))}),I(()=>e._update,()=>{clearTimeout(t.value),o()}),ne(()=>{var i;e.show&&((i=e.onOpen)==null||i.call(e),o())}),{zIndex:n,snackbarClass:l,iconName:s,isForbidClick:a}}}),ke={class:"var-snackbar__action"};function _e(e,t,n,l,a,s){const o=g("var-icon"),i=g("var-loading");return te((v(),oe("div",{class:"var-snackbar",style:N({pointerEvents:e.isForbidClick?"auto":"none",zIndex:e.zIndex})},[h("div",{class:j(e.snackbarClass),style:N({zIndex:e.zIndex})},[h("div",{class:j(["var-snackbar__content",[e.contentClass]])},[b(e.$slots,"default",{},()=>[V(L(e.content),1)])],2),h("div",ke,[e.iconName?(v(),C(o,{key:0,name:e.iconName},null,8,["name"])):B("v-if",!0),e.type==="loading"?(v(),C(i,{key:1,type:e.loadingType,size:e.loadingSize},null,8,["type","size"])):B("v-if",!0),b(e.$slots,"action")])],6)],4)),[[ae,e.show]])}var H=G(ye,[["render",_e]]);const ge=z({name:"VarSnackbar",components:{VarSnackbarCore:H},props:x,setup(){const{disabled:e}=de();return{disabled:e}}});function he(e,t,n,l,a,s){const o=g("var-snackbar-core");return v(),C(ie,{to:e.teleport,disabled:e.disabled},[y(se,{name:"var-snackbar-fade",onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:S(()=>[y(o,w(e.$props,{class:"var-snackbar-transition"}),{action:S(()=>[b(e.$slots,"action")]),default:S(()=>[b(e.$slots,"default",{},()=>[V(L(e.content),1)])]),_:3},16)]),_:3},8,["onAfterEnter","onAfterLeave"])],8,["to","disabled"])}var f=G(ge,[["render",he]]);function Ce(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!re(e)}const O=["loading","success","warning","info","error"];let K=0,A=!1,k,p=!1,r=$([]);const Se={type:void 0,content:"",position:"top",duration:3e3,vertical:!1,contentClass:void 0,loadingType:"circle",loadingSize:"normal",lockScroll:!1,teleport:"body",forbidClick:!1,onOpen:()=>{},onOpened:()=>{},onClose:()=>{},onClosed:()=>{}},we={name:"var-snackbar-fade",tag:"div",class:"var-transition-group"},$e={setup(){return()=>{const e=r.map(({id:t,reactiveSnackOptions:n,_update:l})=>{const a=document.querySelector(".var-transition-group");n.forbidClick||n.type==="loading"?a.classList.add("var-pointer-auto"):a.classList.remove("var-pointer-auto"),p&&(n.position="top");const s=u({position:p?"relative":"absolute"},ze(n.position));return y(H,w(n,{key:t,style:s,"data-id":t,_update:l,show:n.show,"onUpdate:show":o=>n.show=o}),null)});return y(le,w(we,{style:{zIndex:fe.zIndex},onAfterEnter:Oe,onAfterLeave:Ae}),Ce(e)?e:{default:()=>[e]})}}},c=function(e){const t=M(e)?e:{content:e},n=$(u(u({},Se),t));n.show=!0,A||(A=!0,k=ue($e).unmountInstance);const{length:l}=r,a={id:K++,reactiveSnackOptions:n};if(l===0||p)Ee(a);else{const s=`update-${K}`;Te(n,s)}return{clear(){!p&&r.length?r[0].reactiveSnackOptions.show=!1:n.show=!1}}};O.forEach(e=>{c[e]=t=>(M(t)?t.type=e:t={content:t,type:e},c(t))});c.install=function(e){e.component(f.name,f)};c.allowMultiple=function(e=!1){e!==p&&(r.forEach(t=>{t.reactiveSnackOptions.show=!1}),p=e)};c.clear=function(){r.forEach(e=>{e.reactiveSnackOptions.show=!1})};c.Component=f;function Oe(e){var l,a;const t=e.getAttribute("data-id"),n=r.find(s=>s.id===Y(t));n&&((a=(l=n.reactiveSnackOptions).onOpened)==null||a.call(l))}function Ae(e){var a,s;e.parentElement&&e.parentElement.classList.remove("var-pointer-auto");const t=e.getAttribute("data-id"),n=r.find(o=>o.id===Y(t));n&&(n.animationEnd=!0,(s=(a=n.reactiveSnackOptions).onClosed)==null||s.call(a)),r.every(o=>o.animationEnd)&&(k==null||k(),r=$([]),A=!1)}function Ee(e){r.push(e)}function Te(e,t){const[n]=r;n.reactiveSnackOptions=u(u({},n.reactiveSnackOptions),e),n._update=t}function ze(e="top"){return e==="bottom"?{[e]:"5%"}:{top:e==="top"?"5%":"45%"}}f.install=function(e){e.component(f.name,f)};var Ge=c;export{Ge as S};
