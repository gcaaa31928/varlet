import{S as c}from"./index.1182c591.js";import{a as _,f as d}from"./components.2c2bbd54.js";import{T as u,a as f}from"./provide.eebdfba9.js";import{_ as b}from"./elevation.61c5e873.js";import{q as l,r as p,b as v,d as T,o as I,k as S,w as B,B as C,f as E,m as w}from"./vendor.7d218dee.js";function x(){const{parentProvider:e,bindParent:s}=_(u),{index:t}=d(f);if(!e||!s||!t)throw Error("<var-tab-item/> must in <var-tabs-items/>");return{index:t,tabsItems:e,bindTabsItems:s}}const P={name:{type:[String,Number]}};const j=l({name:"VarTabItem",components:{[c.name]:c},props:P,setup(e){const s=p(!1),t=p(!1),n=v(()=>e.name),{index:r,bindTabsItems:o}=x();return o({index:r,name:n,setCurrent:m=>{!t.value&&m&&(t.value=!0),s.value=m}}),{current:s,initSlot:t}}});function A(e,s,t,n,r,o){const i=T("var-swipe-item");return I(),S(i,{class:w(["var-tab-item",[!e.current&&"var-tab-item--inactive"]])},{default:B(()=>[e.initSlot?C(e.$slots,"default",{key:0}):E("v-if",!0)]),_:3},8,["class"])}var a=b(j,[["render",A]]);a.install=function(e){e.component(a.name,a)};export{a as T};
