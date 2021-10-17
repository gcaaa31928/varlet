import{u as ee}from"./components.c996eb06.js";import{F as te,u as le}from"./provide.84cb89b2.js";import{a as ae}from"./elements.1c3a8437.js";import{t as y,d as i,i as re}from"./shared.2d2ec151.js";import{_ as ne}from"./elevation.703f44d6.js";import{q as se,r as w,p as ue,b as F,y as H,x as oe,d as ie,o as N,c as $,a as d,n as f,F as ce,j as de,B as ve,m as L,h as me,z as he,t as be}from"./vendor.ea41cd30.js";function fe(e){return["always","normal","never"].includes(e)}const Ve={modelValue:{type:[Number,Array],default:0},step:{type:[Number,String],default:1},range:{type:Boolean,default:!1},labelVisible:{type:String,default:"normal",validator:fe},activeColor:{type:String},trackColor:{type:String},thumbColor:{type:String},labelColor:{type:String},labelTextColor:{type:String},trackHeight:{type:[String,Number]},thumbSize:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rules:{type:Array},onChange:{type:Function},onStart:{type:Function},onEnd:{type:Function},"onUpdate:modelValue":{type:Function}};var r;(function(e){e.First="1",e.Second="2"})(r||(r={}));const ge=se({name:"VarSlider",components:{VarFormDetails:te},props:Ve,setup(e){const{bindForm:V,form:v}=le(),{errorMessage:D,validateWithTrigger:p,validate:M,resetValidation:k}=ee(),s=()=>M(e.rules,e.modelValue),c=()=>({startPosition:0,currentLeft:0,active:!1,percentValue:0}),q=()=>he(()=>p(["onChange"],"onChange",e.rules,e.modelValue)),_=w(null),m=w(0),T=w(!1),n=ue({[r.First]:c(),[r.Second]:c()}),h=F(()=>m.value/100*y(e.step)),R=F(()=>{let t=[{value:e.modelValue,enumValue:r.First}];return e.range&&i(e.modelValue)&&(t=[{value:e.modelValue[0],enumValue:r.First},{value:e.modelValue[1],enumValue:r.Second}]),t}),G=t=>e.labelVisible==="always"?!0:e.labelVisible==="never"?!1:n[t].active,J=F(()=>{const{activeColor:t,range:l,modelValue:a}=e,u=l&&i(a)?Math.abs(a[0]-a[1]):a,o=l&&i(a)?Math.min(a[0],a[1]):0;return{width:`${u}%`,left:`${o}%`,background:t}}),g=F(()=>e.disabled||(v==null?void 0:v.disabled.value)),C=F(()=>e.readonly||(v==null?void 0:v.readonly.value)),j=(t,l)=>{var U;let a=[];const{step:u,range:o,modelValue:b,onChange:z}=e,I=y(u),S=Math.round(t/h.value)*I,x=n[l].percentValue;if(n[l].percentValue=S/I,o&&i(b)&&(a=l===r.First?[S,b[1]]:[b[0],S]),x!==S){const X=o?a:S;z==null||z(X),(U=e["onUpdate:modelValue"])==null||U.call(e,X),q()}},K=t=>{if(!e.range)return r.First;const l=n[r.First].percentValue*h.value,a=n[r.Second].percentValue*h.value,u=Math.abs(t-l),o=Math.abs(t-a);return u<=o?r.First:r.Second},O=(t,l)=>{var a;m.value||(m.value=_.value.offsetWidth),!(g.value||C.value)&&((a=e.onStart)==null||a.call(e),T.value=!0,n[l].startPosition=t.touches[0].clientX)},Q=(t,l)=>{if(g.value||C.value||!T.value)return;let a=t.touches[0].clientX-n[l].startPosition+n[l].currentLeft;n[l].active=!0,a<=0?a=0:a>=m.value&&(a=m.value),j(a,l)},B=t=>{const{range:l,modelValue:a,onEnd:u}=e;if(g.value||C.value)return;let o=[];n[t].currentLeft=n[t].percentValue*h.value,n[t].active=!1;const b=n[t].percentValue;l&&i(a)&&(o=t===r.First?[b,a[1]]:[a[0],b]),u==null||u(l?o:b),T.value=!1},Y=t=>{if(g.value||C.value||t.target.closest(".var-slider__thumb"))return;const l=t.clientX-ae(t.currentTarget),a=K(l);j(l,a),B(a)},W=()=>{const t=y(e.step);return isNaN(t)?(console.warn('[Varlet] Slider: type of prop "step" should be Number'),!1):t<1||t>100?(console.warn('[Varlet] Slider: "step" should be >= 0 and <= 100'),!1):parseInt(`${e.step}`,10)!==t?(console.warn('[Varlet] Slider: "step" should be an Integer'),!1):!0},A=()=>{const{range:t,modelValue:l}=e;return t&&!i(l)?(console.error('[Varlet] Slider: "modelValue" should be an Array'),!1):!t&&i(l)?(console.error('[Varlet] Slider: "modelValue" should be a Number'),!1):t&&i(l)&&l.length<2?(console.error('[Varlet] Slider: "modelValue" should have two value'),!1):!0},E=(t=e.modelValue,l=y(e.step))=>{e.range&&i(t)?(n[r.First].percentValue=t[0]/l,n[r.First].currentLeft=n[r.First].percentValue*h.value,n[r.Second].percentValue=t[1]/l,n[r.Second].currentLeft=n[r.Second].percentValue*h.value):re(t)&&(n[r.First].currentLeft=t/l*h.value)};H([()=>e.modelValue,()=>e.step],([t,l])=>{!W()||!A()||T.value||E(t,y(l))}),H(m,()=>E()),oe(()=>{!W()||!A()||(m.value=_.value.offsetWidth)});const Z={reset:()=>{var l;const t=e.range?[0,0]:0;(l=e["onUpdate:modelValue"])==null||l.call(e,t),k()},validate:s,resetValidation:k};return V==null||V(Z),{Thumbs:r,sliderEl:_,getFillStyle:J,isDisabled:g,errorMessage:D,thumbsProps:n,thumbList:R,showLabel:G,start:O,move:Q,end:B,click:Y}}}),Se={class:"var-slider"},ye={class:"var-slider__track"},Fe=["onTouchstart","onTouchmove","onTouchend","onTouchcancel"];function ke(e,V,v,D,p,M){const k=ie("var-form-details");return N(),$("div",Se,[d("div",{class:L(["var-slider-block",[e.isDisabled?"var-slider__disable":null,e.errorMessage?"var-slider__error":null]]),style:f({height:`${3*e.thumbSize}px`,margin:`0 ${e.thumbSize/2}px`}),ref:"sliderEl",onClick:V[0]||(V[0]=(...s)=>e.click&&e.click(...s))},[d("div",ye,[d("div",{class:"var-slider__track-background",style:f({background:e.trackColor,height:e.trackHeight+"px"})},null,4),d("div",{class:"var-slider__track-fill",style:f(e.getFillStyle)},null,4)]),(N(!0),$(ce,null,de(e.thumbList,s=>(N(),$("div",{class:"var-slider__thumb",key:s.enumValue,style:f({left:`${s.value}%`,zIndex:e.thumbsProps[s.enumValue].active?1:null}),onTouchstart:c=>e.start(c,s.enumValue),onTouchmove:c=>e.move(c,s.enumValue),onTouchend:c=>e.end(s.enumValue),onTouchcancel:c=>e.end(s.enumValue)},[ve(e.$slots,"button",{currentValue:s.value},()=>[d("div",{class:"var-slider__thumb-block",style:f({background:e.thumbColor,height:e.thumbSize+"px",width:e.thumbSize+"px"})},null,4),d("div",{class:L(["var-slider__thumb-ripple",[e.thumbsProps[s.enumValue].active?"var-slider__thumb-ripple-active":null]]),style:f({background:e.thumbColor,height:e.thumbSize?e.thumbsProps[s.enumValue].active?3*e.thumbSize+"px":"0px":null,width:e.thumbSize?e.thumbsProps[s.enumValue].active?3*e.thumbSize+"px":"0px":null})},null,6),d("div",{class:L(["var-slider__thumb-label",[e.showLabel(s.enumValue)?"var-slider__thumb-label-active":null]]),style:f({background:e.labelColor,color:e.labelTextColor,height:2*e.thumbSize+"px",width:2*e.thumbSize+"px"})},[d("span",null,be(s.value),1)],6)])],44,Fe))),128))],6),me(k,{"error-message":e.errorMessage,class:"var-slider__form","var-slider-cover":""},null,8,["error-message"])])}var P=ne(ge,[["render",ke]]);P.install=function(e){e.component(P.name,P)};export{P as S};