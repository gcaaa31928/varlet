import{A as e}from"./AppType.ea57f8b8.js";import{q as a,b as t,d as o,o as n,c as d,g as r,w as l,h as i,v as s,a as p,j as u,t as c,P as g,T as m,O as f,r as h,k as v}from"./vendor.d2d73257.js";import{I as _}from"./index.0a5fd4c3.js";import{t as y}from"./shared.6d6b25a1.js";import{_ as B,w as b}from"./IconSfc.576827a5.js";import{B as k}from"./index.2e29823d.js";import{C}from"./index.f5c0e6b5.js";import{u as T,a as x,_ as w,b as S,c as j}from"./en-US.a408f614.js";import"./elements.f945da86.js";import"./index.1089a32e.js";import"./index.6aafccb6.js";import"./components.32b87c06.js";const L={type:{type:String,default:"default",validator:function(e){return["default","primary","info","success","warning","danger"].includes(e)}},hidden:{type:Boolean,default:!1},dot:{type:Boolean,default:!1},value:{type:[String,Number],default:0},maxValue:{type:[String,Number]},color:{type:String},position:{type:String,default:"right-top",validator:function(e){return["right-top","right-bottom","left-top","left-bottom"].includes(e)}},icon:{type:String}};const R=a({name:"VarBadge",components:{[_.name]:_},inheritAttrs:!1,props:L,setup(e,{slots:a}){const o=t((()=>{var t;const{type:o,position:n,dot:r,icon:l}=e;return[`var-badge--${o}`,(null==(t=a.default)?void 0:t.call(a))&&`var-badge__position var-badge--${n}`,r&&"var-badge__dot",d(),l&&"var-badge__icon"]})),n=t((()=>{const{dot:a,value:t,maxValue:o}=e;return a?"":void 0!==t&&void 0!==o&&y(t)>o?`${o}+`:t})),d=()=>{const{position:a,dot:t}=e;return t&&a.includes("right")?"var-badge__dot--right":t&&a.includes("left")?"var-badge__dot--left":void 0};return{values:n,contentClass:o}}}),I={class:"var-badge"},D={key:1};var V=B(R,[["render",function(e,a,t,h,v,_){const y=o("var-icon");return n(),d("div",I,[r(m,{name:"var-badge-fade"},{default:l((()=>[i(p("span",g(e.$attrs,{class:["var-badge__content",e.contentClass],style:{background:e.color}}),[e.icon&&!e.dot?(n(),u(y,{key:0,name:e.icon,size:"10px"},null,8,["name"])):(n(),d("span",D,c(e.values),1))],16),[[s,!e.hidden]])])),_:1}),f(e.$slots,"default")])}]]);V.install=function(e){e.component(V.name,V)};const{add:P,use:U,pack:$,packs:A,merge:N}=T(),z=e=>{j(e),U(e)};x("zh-CN",w),x("en-US",S),P("zh-CN",{themeColorBadge:"主题色徽标",dotBadge:"圆点徽标",customContentBadge:"自定义内容标签",maximum:"最大值",differentPositioningBadges:"不同定位徽标",upperRight:"右上",lowerRight:"右下",upperLeft:"左上",lowerLeft:"左下",whetherToDisplayTheBadge:"是否显示徽标",clickToChangeTheState:"点击改变状态",badge:"徽标",customBadgeColors:"自定义徽标颜色",customBadgeIcons:"自定义徽标图标"}),P("en-US",{themeColorBadge:"Theme Color Badge",dotBadge:"Dot Badge",customContentBadge:"Custom Content Badge",maximum:"Maximum",differentPositioningBadges:"Different Positioning Badges",upperRight:"The Upper Right",lowerRight:"The Lower Right",upperLeft:"The Upper Left",lowerLeft:"The Lower Left",whetherToDisplayTheBadge:"Whether To Display The Badge",clickToChangeTheState:"Click To Change The State",badge:"Badge",customBadgeColors:"Custom Badge Colors",customBadgeIcons:"Custom Badge Icons"});const q={name:"BadgeExample",components:{[V.name]:V,[k.name]:k,[C.name]:C,AppType:e},setup(){const e=h(88),a=h(188),t=h(99),o=h(!1);return b(z),{value:e,value1:a,maxValue:t,hidden:o,pack:$,handleChange:()=>{o.value=!o.value}}}},E={class:"example"};var M=B(q,[["render",function(e,a,t,i,s,p){const u=o("app-type"),g=o("var-badge"),m=o("var-chip"),f=o("var-button");return n(),d("div",E,[r(u,null,{default:l((()=>[v(c(i.pack.themeColorBadge),1)])),_:1}),r(g,{type:"primary"}),r(g,{type:"info"}),r(g,{type:"warning"}),r(g,{type:"success"}),r(g,{type:"danger"}),r(g),r(u,null,{default:l((()=>[v(c(i.pack.dotBadge),1)])),_:1}),r(g,{dot:"",type:"danger"}),r(u,null,{default:l((()=>[v(c(i.pack.customContentBadge),1)])),_:1}),r(g,{type:"danger",value:"badge"}),r(g,{type:"danger",value:"hot"}),r(g,{type:"danger",value:"66"}),r(u,null,{default:l((()=>[v(c(i.pack.maximum),1)])),_:1}),r(g,{type:"danger",value:i.value,"max-value":i.maxValue},null,8,["value","max-value"]),r(g,{type:"danger",value:i.value1,"max-value":i.maxValue},null,8,["value","max-value"]),r(u,null,{default:l((()=>[v(c(i.pack.differentPositioningBadges),1)])),_:1}),r(g,{type:"danger",position:"right-top"},{default:l((()=>[r(m,{plain:"",round:!1,color:"#009688"},{default:l((()=>[v(c(i.pack.upperRight),1)])),_:1})])),_:1}),r(g,{type:"danger",position:"right-bottom"},{default:l((()=>[r(m,{plain:"",round:!1,color:"#009688"},{default:l((()=>[v(c(i.pack.lowerRight),1)])),_:1})])),_:1}),r(g,{type:"danger",position:"left-top"},{default:l((()=>[r(m,{plain:"",round:!1,color:"#009688"},{default:l((()=>[v(c(i.pack.upperLeft),1)])),_:1})])),_:1}),r(g,{type:"danger",position:"left-bottom"},{default:l((()=>[r(m,{plain:"",round:!1,color:"#009688"},{default:l((()=>[v(c(i.pack.lowerLeft),1)])),_:1})])),_:1}),r(u,null,{default:l((()=>[v(c(i.pack.whetherToDisplayTheBadge),1)])),_:1}),r(f,{onClick:i.handleChange},{default:l((()=>[v(c(i.pack.clickToChangeTheState),1)])),_:1},8,["onClick"]),r(g,{type:"danger",position:"right-top",hidden:i.hidden},{default:l((()=>[r(m,{plain:"",round:!1,color:"#009688"},{default:l((()=>[v(c(i.pack.badge),1)])),_:1})])),_:1},8,["hidden"]),r(u,null,{default:l((()=>[v(c(i.pack.customBadgeColors),1)])),_:1}),r(g,{color:"#6200ea",position:"right-top"},{default:l((()=>[r(m,{plain:"",round:!1,color:"#009688"},{default:l((()=>[v(c(i.pack.badge),1)])),_:1})])),_:1}),r(u,null,{default:l((()=>[v(c(i.pack.customBadgeIcons),1)])),_:1}),r(g,{color:"#6200ea",position:"right-top",icon:"notebook"},{default:l((()=>[r(m,{plain:"",round:!1,color:"#009688"},{default:l((()=>[v(c(i.pack.badge),1)])),_:1})])),_:1})])}],["__scopeId","data-v-6103225f"]]);export{M as default};