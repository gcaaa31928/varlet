import{A as z}from"./AppType.b1df95e4.js";import{d as I,r as P}from"./elements.524bf92a.js";import{t as T,p as R}from"./shared.cba5a5a3.js";import{_ as A}from"./elevation.83e0d1f2.js";import{q,r as m,y as L,o as D,c as E,B as O,_ as W,$ as Y,l as r,t as n,d as x,a as s,h as a,w as l,F as G,V as J,W as K}from"./vendor.1cdc2555.js";import{S as Q}from"./index.be7e2a4e.js";import{B as X}from"./index.ecf1fce8.js";import{u as Z,a as N,_ as ee,b as te,c as oe,w as ae}from"./en-US.e5d54f64.js";import"./index.85e38b10.js";import"./index.e4108909.js";import"./zIndex.e22a1185.js";import"./index.639c3ac8.js";import"./components.673b276d.js";import"./lock.04ad72d0.js";import"./index.e3473c6d.js";const ne={time:{type:[String,Number],default:0},format:{type:String,default:"HH : mm : ss"},autoStart:{type:Boolean,default:!0},onEnd:{type:Function},onChange:{type:Function}};const k=1e3,F=60*k,b=60*F,M=24*b,se=q({name:"VarCountdown",props:ne,setup(e){const o=m(0),u=m(!1),t=m(""),h=m(0),C=m(0),c=m({}),d=p=>{var B;const v=Math.floor(p/M),y=Math.floor(p%M/b),w=Math.floor(p%b/F),_=Math.floor(p%F/k),V=Math.floor(p%k),j={days:v,hours:y,minutes:w,seconds:_,milliseconds:V};c.value=j,(B=e.onChange)==null||B.call(e,c.value),t.value=R(e.format,j)},f=()=>{const{time:p,onEnd:v,autoStart:y}=e,w=Date.now();o.value||(o.value=w+T(p));let _=o.value-w;if(_<0&&(_=0),C.value=_,d(_),_===0){v==null||v();return}(y||u.value)&&(h.value=P(f))},i=()=>{u.value||(u.value=!0,o.value=Date.now()+(C.value||T(e.time)),f())},$=()=>{u.value=!1},g=()=>{o.value=0,u.value=!1,I(h.value),f()};return L(()=>e.time,()=>g(),{immediate:!0}),{showTime:t,timeData:c,start:i,pause:$,reset:g}}}),ue={class:"var-countdown"};function ce(e,o,u,t,h,C){return D(),E("div",ue,[O(e.$slots,"default",W(Y(e.timeData)),()=>[r(n(e.showTime),1)])])}var S=A(se,[["render",ce]]);S.install=function(e){e.component(S.name,S)};var re={basicUsage:"\u57FA\u672C\u4F7F\u7528",customFormat:"\u81EA\u5B9A\u4E49\u683C\u5F0F",showMillisecond:"\u663E\u793A\u6BEB\u79D2",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",manualControl:"\u624B\u52A8\u63A7\u5236",format:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2",startText:"\u5F00\u59CB",pauseText:"\u6682\u505C",resetText:"\u91CD\u7F6E"},le={basicUsage:"Basic Usage",customFormat:"Custom Format",showMillisecond:"Show Millisecond",customStyle:"Custom Style",manualControl:"Manual Control",format:"DD Day, HH:mm:ss",startText:"Start",pauseText:"Pause",resetText:"Reset"};const{add:U,use:ie,pack:me,packs:He,merge:$e}=Z(),de=e=>{oe(e),ie(e)};N("zh-CN",ee);N("en-US",te);U("zh-CN",re);U("en-US",le);const fe={name:"CountdownExample",components:{VarCountdown:S,VarButton:X,AppType:z},setup(){const e=m(null),o=m(3e3),u=()=>{Q.info("end!")},t=()=>{};return ae(de),{time:o,pack:me,end:u,countdown:e,change:t}}},H=e=>(J("data-v-4f16190e"),e=e(),K(),e),pe={class:"block"},_e=H(()=>s("span",{class:"colon"},":",-1)),ve={class:"block"},he=H(()=>s("span",{class:"colon"},":",-1)),Ce={class:"block"},we={class:"btn-container"};function Se(e,o,u,t,h,C){const c=x("app-type"),d=x("var-countdown"),f=x("var-button");return D(),E(G,null,[s("div",null,[a(c,null,{default:l(()=>[r(n(t.pack.basicUsage),1)]),_:1}),a(d,{time:"108000000"})]),s("div",null,[a(c,null,{default:l(()=>[r(n(t.pack.customFormat),1)]),_:1}),a(d,{time:"108000000",format:t.pack.format},null,8,["format"])]),s("div",null,[a(c,null,{default:l(()=>[r(n(t.pack.showMillisecond),1)]),_:1}),a(d,{time:"108000000",format:"HH : mm : ss : SS"})]),s("div",null,[a(c,null,{default:l(()=>[r(n(t.pack.customStyle),1)]),_:1}),a(d,{time:"108000000"},{default:l(i=>[s("span",pe,n(i.hours),1),_e,s("span",ve,n(i.minutes),1),he,s("span",Ce,n(i.seconds),1)]),_:1})]),s("div",null,[a(c,null,{default:l(()=>[r(n(t.pack.manualControl),1)]),_:1}),a(d,{time:t.time,ref:"countdown","auto-start":!1,format:"ss : SSS",onEnd:t.end,onChange:t.change},null,8,["time","onEnd","onChange"]),s("div",we,[a(f,{type:"primary",onClick:o[0]||(o[0]=i=>e.$refs.countdown.start())},{default:l(()=>[r(n(t.pack.startText),1)]),_:1}),a(f,{onClick:o[1]||(o[1]=i=>e.$refs.countdown.pause())},{default:l(()=>[r(n(t.pack.pauseText),1)]),_:1}),a(f,{onClick:o[2]||(o[2]=i=>e.$refs.countdown.reset())},{default:l(()=>[r(n(t.pack.resetText),1)]),_:1})])])],64)}var Ve=A(fe,[["render",Se],["__scopeId","data-v-4f16190e"]]);export{Ve as default};
