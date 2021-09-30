import{R as C}from"./index.20a388b7.js";import{L as F}from"./index.624f9a6e.js";import{l as L,_ as z}from"./elevation.6b325341.js";import{q as U,e as S,i as w,o as h,c as m,n as f,m as E,d as y,h as t,w as d,F as R,l as u,t as c,a as l,S as N,U as B}from"./vendor.cfbfc887.js";import{A as $}from"./AppType.058b8a71.js";import{R as k}from"./index.7969c949.js";import{u as I,a as j,_ as A,b as D,c as V,w as M}from"./en-US.fed517a7.js";import"./components.fe85d05d.js";function T(e){return["fill","contain","cover","none","scale-down"].includes(e)}const x={src:{type:String},fit:{type:String,validator:T,default:"fill"},alt:{type:String},width:{type:[String,Number]},height:{type:[String,Number]},radius:{type:[String,Number],default:0},loading:{type:String},error:{type:String},lazy:{type:Boolean,default:!1},ripple:{type:Boolean,default:!1},block:{type:Boolean,default:!0},onClick:{type:Function},onLoad:{type:Function},onError:{type:Function}};const q=U({name:"VarImage",directives:{Lazy:F,Ripple:C},props:x,setup(e){return{toSizeUnit:L,handleLoad:r=>{const p=r.currentTarget,{lazy:n,onLoad:s,onError:a}=e;n?(p._lazy.state==="success"&&(s==null||s(r)),p._lazy.state==="error"&&(a==null||a(r))):s==null||s(r)},handleError:r=>{const{lazy:p,onError:n}=e;!p&&(n==null||n(r))}}}}),G=["alt","lazy-error","lazy-loading"],H=["alt","src"];function J(e,i,_,r,p,n){const s=S("lazy"),a=S("ripple");return w((h(),m("div",{class:E(["var-image var--box",[e.block?null:"var--inline-block"]]),style:f({width:e.toSizeUnit(e.width),height:e.toSizeUnit(e.height),"border-radius":e.toSizeUnit(e.radius)})},[e.lazy?w((h(),m("img",{key:0,class:"var-image__image",alt:e.alt,"lazy-error":e.error,"lazy-loading":e.loading,style:f({objectFit:e.fit}),onLoad:i[0]||(i[0]=(...o)=>e.handleLoad&&e.handleLoad(...o)),onError:i[1]||(i[1]=(...o)=>e.handleError&&e.handleError(...o)),onClick:i[2]||(i[2]=(...o)=>e.onClick&&e.onClick(...o))},null,44,G)),[[s,e.src]]):(h(),m("img",{key:1,class:"var-image__image",alt:e.alt,style:f({objectFit:e.fit}),src:e.src,onLoad:i[3]||(i[3]=(...o)=>e.handleLoad&&e.handleLoad(...o)),onError:i[4]||(i[4]=(...o)=>e.handleError&&e.handleError(...o)),onClick:i[5]||(i[5]=(...o)=>e.onClick&&e.onClick(...o))},null,44,H))],6)),[[a,{disabled:!e.ripple}]])}var g=z(q,[["render",J]]);g.install=function(e){e.component(g.name,g)};var K={basicUsage:"\u57FA\u672C\u4F7F\u7528",fitMode:"\u586B\u5145\u6A21\u5F0F",setRadius:"\u8BBE\u7F6E\u5706\u89D2",useRipple:"\u5F00\u542F\u6C34\u6CE2",useLazyLoad:"\u5F00\u542F\u61D2\u52A0\u8F7D"},O={basicUsage:"Basic Usage",fitMode:"Fit Mode",setRadius:"Set Radius",useRipple:"Use Ripple",useLazyLoad:"Use LazyLoad"};const{add:b,use:P,pack:Q,packs:fe,merge:ye}=I(),W=e=>{V(e),P(e)};j("zh-CN",A);j("en-US",D);b("zh-CN",K);b("en-US",O);const X={name:"ImageExample",components:{[g.name]:g,[k.name]:k,AppType:$},setup(){return M(W),{pack:Q}}},v=e=>(N("data-v-eec1ec82"),e=e(),B(),e),Y={class:"fit-item"},Z=v(()=>l("div",null,"fill",-1)),ee={class:"fit-item"},te=v(()=>l("div",null,"cover",-1)),ae={class:"fit-item"},ie=v(()=>l("div",null,"contain",-1)),se={class:"fit-item"},oe=v(()=>l("div",null,"none",-1)),re={class:"fit-item"},le=v(()=>l("div",null,"scale-down",-1));function ne(e,i,_,r,p,n){const s=y("app-type"),a=y("var-image"),o=y("var-row");return h(),m(R,null,[t(s,null,{default:d(()=>[u(c(r.pack.basicUsage),1)]),_:1}),t(a,{src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),t(s,null,{default:d(()=>[u(c(r.pack.fitMode),1)]),_:1}),t(o,null,{default:d(()=>[l("div",Y,[t(a,{width:"85px",height:"85px",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),Z]),l("div",ee,[t(a,{width:"85px",height:"85px",fit:"cover",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),te]),l("div",ae,[t(a,{width:"85px",height:"85px",fit:"contain",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),ie]),l("div",se,[t(a,{width:"85px",height:"85px",fit:"none",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),oe]),l("div",re,[t(a,{width:"85px",height:"85px",fit:"scale-down",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),le])]),_:1}),t(s,null,{default:d(()=>[u(c(r.pack.setRadius),1)]),_:1}),t(o,null,{default:d(()=>[t(a,{width:"85px",height:"85px",fit:"cover",radius:10,src:"https://varlet.gitee.io/varlet-ui/cat.jpg",style:{"margin-right":"10px"}}),t(a,{width:"85px",height:"85px",fit:"cover",radius:"50%",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})]),_:1}),t(s,null,{default:d(()=>[u(c(r.pack.useRipple),1)]),_:1}),t(a,{ripple:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),t(s,null,{default:d(()=>[u(c(r.pack.useLazyLoad),1)]),_:1}),t(a,{lazy:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})],64)}var _e=z(X,[["render",ne],["__scopeId","data-v-eec1ec82"]]);export{_e as default};