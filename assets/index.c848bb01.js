import{S as h}from"./index.730daf6b.js";import{S as v}from"./index.1d38c8d6.js";import{A as f}from"./AppType.b1df95e4.js";import{S as w}from"./index.be7e2a4e.js";import{u as j,a as d,_ as S,b,c as x,w as A}from"./en-US.e5d54f64.js";import{_ as C}from"./elevation.83e0d1f2.js";import{d as r,o as k,c as F,h as e,w as t,F as y,V as I,W as U,l as n,t as i,a}from"./vendor.1cdc2555.js";import"./provide.90ccb8ec.js";import"./components.673b276d.js";import"./shared.cba5a5a3.js";import"./elements.524bf92a.js";import"./index.85e38b10.js";import"./index.e4108909.js";import"./zIndex.e22a1185.js";import"./index.639c3ac8.js";import"./lock.04ad72d0.js";var E={basicUsage:"\u57FA\u672C\u4F7F\u7528",forbidLoop:"\u7981\u6B62\u5FAA\u73AF\u8F6E\u64AD",autoplay:"\u5F00\u542F\u81EA\u52A8\u64AD\u653E",vertical:"\u5782\u76F4\u8F6E\u64AD",handleChange:"\u76D1\u542C\u5207\u6362",customIndicator:"\u81EA\u5B9A\u4E49\u6307\u793A\u5668"},N={basicUsage:"Basic Usage",forbidLoop:"Forbid Loop",autoplay:"Autoplay",vertical:"Vertical Swipe",handleChange:"Handle Change",customIndicator:"Custom Indicator"};const{add:_,use:V,pack:B,packs:At,merge:Ct}=j(),L=c=>{x(c),V(c)};d("zh-CN",S);d("en-US",b);_("zh-CN",E);_("en-US",N);const z={name:"SwipeExample",components:{VarSwipe:h,VarSwipeItem:v,AppType:f},setup(){return A(L),{pack:B,Snackbar:w}}},s=c=>(I("data-v-582d87c7"),c=c(),U(),c),D=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),T=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),H=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),W=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),q=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),G=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),J=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),K=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),M=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),O=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),P=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),Q=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),R=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),X=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),Y=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),Z=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),$=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),tt=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),et={class:"indicators"},at=s(()=>a("div",{class:"space"},null,-1));function st(c,lt,it,o,ct,ot){const u=r("app-type"),l=r("var-swipe-item"),p=r("var-swipe");return k(),F(y,null,[e(u,null,{default:t(()=>[n(i(o.pack.basicUsage),1)]),_:1}),e(p,{class:"swipe",ref:"swipe"},{default:t(()=>[e(l,null,{default:t(()=>[D]),_:1}),e(l,null,{default:t(()=>[T]),_:1}),e(l,null,{default:t(()=>[H]),_:1})]),_:1},512),e(u,null,{default:t(()=>[n(i(o.pack.forbidLoop),1)]),_:1}),e(p,{class:"swipe",loop:!1},{default:t(()=>[e(l,null,{default:t(()=>[W]),_:1}),e(l,null,{default:t(()=>[q]),_:1}),e(l,null,{default:t(()=>[G]),_:1})]),_:1}),e(u,null,{default:t(()=>[n(i(o.pack.autoplay),1)]),_:1}),e(p,{class:"swipe",autoplay:2e3},{default:t(()=>[e(l,null,{default:t(()=>[J]),_:1}),e(l,null,{default:t(()=>[K]),_:1}),e(l,null,{default:t(()=>[M]),_:1})]),_:1}),e(u,null,{default:t(()=>[n(i(o.pack.vertical),1)]),_:1}),e(p,{class:"swipe",vertical:""},{default:t(()=>[e(l,null,{default:t(()=>[O]),_:1}),e(l,null,{default:t(()=>[P]),_:1}),e(l,null,{default:t(()=>[Q]),_:1})]),_:1}),e(u,null,{default:t(()=>[n(i(o.pack.handleChange),1)]),_:1}),e(p,{class:"swipe",onChange:o.Snackbar},{default:t(()=>[e(l,null,{default:t(()=>[R]),_:1}),e(l,null,{default:t(()=>[X]),_:1}),e(l,null,{default:t(()=>[Y]),_:1})]),_:1},8,["onChange"]),e(u,null,{default:t(()=>[n(i(o.pack.customIndicator),1)]),_:1}),e(p,{class:"swipe"},{default:t(()=>[e(l,null,{default:t(()=>[Z]),_:1}),e(l,null,{default:t(()=>[$]),_:1}),e(l,null,{default:t(()=>[tt]),_:1})]),indicator:t(({index:m,length:g})=>[a("div",et,i(m+1)+" / "+i(g),1)]),_:1}),at],64)}var kt=C(z,[["render",st],["__scopeId","data-v-582d87c7"]]);export{kt as default};
