import{d as B,h as z}from"./elements.ffeb1db0.js";import{t as C}from"./shared.29c174bb.js";import{_ as H}from"./elevation.61c5e873.js";import{q as N,r as o,b as u,y as I,P as j,Q as P,x as R,H as V,o as q,c as A,a as D,B as O,n as M,m as Q}from"./vendor.7d218dee.js";const U={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},cssMode:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},onScroll:{type:Function}};const G=N({name:"VarSticky",props:U,setup(e){const d=o(null),l=o(null),n=o(!1),r=o("0px"),f=o("0px"),m=o("auto"),b=o("auto"),h=o("auto"),y=o("auto"),k=u(()=>!e.disabled&&e.cssMode),$=u(()=>!e.disabled&&n.value),i=u(()=>B(e.offsetTop));let t=window;const s=()=>{const{onScroll:a,cssMode:F,disabled:W}=e;if(W)return;let p=0;if(t!==window){const{top:T}=t.getBoundingClientRect();p=T}const g=l.value,c=d.value,{top:E,left:L}=c.getBoundingClientRect(),S=E-p;S<=i.value?(F||(m.value=`${c.offsetWidth}px`,b.value=`${c.offsetHeight}px`,r.value=`${p+i.value}px`,f.value=`${L}px`,h.value=`${g.offsetWidth}px`,y.value=`${g.offsetHeight}px`,n.value=!0),a==null||a(i.value,!0)):(n.value=!1,a==null||a(S,!1))},x=()=>{t=z(d.value),t!==window&&t.addEventListener("scroll",s),window.addEventListener("scroll",s),s()},w=()=>{t!==window&&t.removeEventListener("scroll",s),window.removeEventListener("scroll",s)};return I(()=>e.disabled,s),j(x),P(w),R(x),V(w),{stickyEl:d,wrapperEl:l,isFixed:n,offsetTop:i,fixedTop:r,fixedLeft:f,fixedWidth:m,fixedHeight:b,fixedWrapperWidth:h,fixedWrapperHeight:y,enableCSSMode:k,enableFixedMode:$,toNumber:C}}});function J(e,d,l,n,r,f){return q(),A("div",{class:Q(["var-sticky",[e.enableCSSMode?"var-sticky--css-mode":null]]),ref:"stickyEl",style:M({zIndex:e.toNumber(e.zIndex),top:e.enableCSSMode?`${e.offsetTop}px`:void 0,width:e.enableFixedMode?e.fixedWidth:void 0,height:e.enableFixedMode?e.fixedHeight:void 0})},[D("div",{class:"var-sticky__wrapper",ref:"wrapperEl",style:M({zIndex:e.toNumber(e.zIndex),position:e.enableFixedMode?"fixed":void 0,width:e.enableFixedMode?e.fixedWrapperWidth:void 0,height:e.enableFixedMode?e.fixedWrapperHeight:void 0,left:e.enableFixedMode?e.fixedLeft:void 0,top:e.enableFixedMode?e.fixedTop:void 0})},[O(e.$slots,"default")],4)],6)}var v=H(G,[["render",J]]);v.install=function(e){e.component(v.name,v)};export{v as S,U as p};
