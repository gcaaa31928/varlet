import{p as a,I as o}from"./index.0a5fd4c3.js";import{q as n,b as e,d as t,o as s,j as r,w as l,a as i,O as c,m as p,c as u,g as d,f,P as m,T as v}from"./vendor.d2d73257.js";import{p as y}from"./components.32b87c06.js";import{_ as h}from"./IconSfc.576827a5.js";const C={type:{type:String,default:"default",validator:function(a){return["default","primary","info","success","warning","danger"].includes(a)}},size:{type:String,default:"normal",validator:function(a){return["normal","mini","small","large"].includes(a)}},color:{type:String},textColor:{type:String},iconName:y(a,"name"),plain:{type:Boolean,default:!1},round:{type:Boolean,default:!0},block:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},onClose:{type:Function}};var g=h(n({name:"VarChip",components:{[o.name]:o},inheritAttrs:!1,props:C,setup:a=>({chipStyles:e((()=>{const{plain:o,textColor:n,color:e}=a;return o?{color:n||e,borderColor:e}:{color:n,background:e}})),contentClass:e((()=>{const{size:o,block:n,type:e,plain:t,round:s}=a;return[`var-chip--${o}`,n?"var--flex":"var--inline-flex",t?`var-chip--plain var-chip--plain-${e}`:`var-chip--${e}`,s&&"var-chip--round"]}))})}),[["render",function(a,o,n,e,y,h){const C=t("var-icon");return s(),r(v,{name:"var-fade"},{default:l((()=>[i("span",m({class:["var-chip var--box",a.contentClass],style:a.chipStyles},a.$attrs),[c(a.$slots,"left"),i("span",{class:p([`var-chip--text-${a.size}`])},[c(a.$slots,"default")],2),c(a.$slots,"right"),a.closable?(s(),u("span",{key:0,class:"var-chip--close",onClick:o[0]||(o[0]=(...o)=>a.onClose&&a.onClose(...o))},[d(C,{name:`${a.iconName?a.iconName:"close-circle"}`},null,8,["name"])])):f("v-if",!0)],16)])),_:3})}]]);g.install=function(a){a.component(g.name,g)};export{g as C};