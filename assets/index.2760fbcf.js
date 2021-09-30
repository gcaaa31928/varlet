import{I as J}from"./index.670ac4ea.js";import{M as K}from"./index.24997ce1.js";import{C as Q}from"./index.be31ac5c.js";import{F as R,u as me}from"./provide.02108c43.js";import{q as fe,r as k,b as F,y as E,d as M,o as d,c as f,a as c,m as i,O as _,h as $,w as U,n as S,F as ye,j as be,k as X,l as he,t as B,V as pe,f as Z,z as ge}from"./vendor.cfbfc887.js";import{_ as Ce,L as Ve,u as j,v as we}from"./elevation.6b325341.js";import{u as ke}from"./components.fe85d05d.js";import{u as Fe}from"./index.15b7e623.js";function Me(e){return["left","right","center"].includes(e)}const Se={modelValue:{default:void 0},placeholder:{type:String},multiple:{type:Boolean,default:!1},chip:{type:Boolean,default:!1},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},separator:{type:String,default:","},textAlign:{type:String,default:"left",validator:Me},validateTrigger:{type:Array,default:()=>["onChange","onClear","onClose"]},rules:{type:Array},onFocus:{type:Function},onBlur:{type:Function},onClick:{type:Function},onClear:{type:Function},onClose:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const Be=fe({name:"VarSelect",components:{[J.name]:J,[K.name]:K,[Q.name]:Q,[R.name]:R},props:Se,setup(e){const o=k(null),v=k(!1),N=F(()=>e.multiple),O=F(()=>e.focusColor),p=k(""),g=k([]),C=F(()=>o.value&&window.getComputedStyle(o.value).width||"0px"),T=F(()=>{const a=o.value&&window.getComputedStyle(o.value).paddingTop||"0px";return Ve(a)*1.5}),{bindForm:h,form:l}=me(),{length:z,options:y,bindOptions:x}=Fe(),{errorMessage:ee,validateWithTrigger:le,validate:ae,resetValidation:D}=ke(),ne=()=>{const{multiple:a,modelValue:n}=e;if(a){const s=n;g.value=s.map(P)}!a&&!j(n)&&(p.value=P(n)),!a&&j(n)&&(p.value="")},b=a=>{ge(()=>{const{validateTrigger:n,rules:s,modelValue:t}=e;le(n,a,s,t)})},V=({value:a,label:n})=>a.value!=null?a.value:n.value,P=a=>{let n=y.find(({value:s})=>s.value===a);return n||(n=y.find(({label:s})=>s.value===a)),n.label.value},se=()=>{const{hint:a,modelValue:n}=e;if(!a&&!j(n))return"var-select--placeholder-hidden";if(a&&(!j(n)||v.value))return"var-select--placeholder-hint"},te=a=>{const{disabled:n,readonly:s,onFocus:t}=e;(l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||n||s||(v.value=!0,t==null||t(a),b("onFocus"))},oe=a=>{const{disabled:n,readonly:s,onBlur:t}=e;(l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||n||s||(t==null||t(a),b("onBlur"))},re=a=>{var u;const{disabled:n,readonly:s,multiple:t,onChange:r}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||n||s)return;const m=t?y.filter(({selected:w})=>w.value).map(V):V(a);(u=e["onUpdate:modelValue"])==null||u.call(e,m),r==null||r(m),b("onChange"),!t&&(v.value=!1)},ie=()=>{var u;const{disabled:a,readonly:n,multiple:s,clearable:t,onClear:r}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||a||n||!t)return;const m=s?[]:void 0;(u=e["onUpdate:modelValue"])==null||u.call(e,m),r==null||r(m),b("onClear")},de=a=>{const{disabled:n,onClick:s}=e;(l==null?void 0:l.disabled.value)||n||(s==null||s(a),b("onClick"))},ue=a=>{var G;const{disabled:n,readonly:s,modelValue:t,onClose:r}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||n||s)return;const m=t,u=y.find(({label:A})=>A.value===a),w=m.filter(A=>{var H;return A!==((H=u.value.value)!=null?H:u.label.value)});(G=e["onUpdate:modelValue"])==null||G.call(e,w),r==null||r(w),b("onClose")},W=()=>{const{multiple:a,modelValue:n}=e;if(a){const s=n;y.forEach(t=>t.sync(s.includes(V(t))))}else y.forEach(s=>s.sync(n===V(s)));ne()},ce=()=>{v.value=!0},ve=()=>{v.value=!1},I=()=>ae(e.rules,e.modelValue),Y=()=>{var a;(a=e["onUpdate:modelValue"])==null||a.call(e,e.multiple?[]:void 0),D()};E(()=>e.multiple,()=>{const{multiple:a,modelValue:n}=e;if(a&&!we(n))throw Error("The modelValue must be an array when multiple is true")}),E(()=>e.modelValue,W,{deep:!0}),E(()=>z.value,W);const q={wrapWidth:C,multiple:N,focusColor:O,onSelect:re,reset:Y,validate:I,resetValidation:D};return x(q),h==null||h(q),{wrapEl:o,offsetY:T,isFocus:v,errorMessage:ee,formDisabled:l==null?void 0:l.disabled,label:p,labels:g,computePlaceholderState:se,handleFocus:te,handleBlur:oe,handleClear:ie,handleClick:de,handleClose:ue,reset:Y,validate:I,resetValidation:D,focus:ce,blur:ve}}}),je={key:0},Te={key:0,class:"var-select__chips"},De={key:1,class:"var-select__values"},Ae={key:1},Ee={class:"var-select__scroller"};function _e(e,o,v,N,O,p){const g=M("var-chip"),C=M("var-icon"),T=M("var-menu"),h=M("var-form-details");return d(),f("div",{class:i(["var-select var--box",[e.formDisabled||e.disabled?"var-select--disabled":null]]),onClick:o[3]||(o[3]=(...l)=>e.handleClick&&e.handleClick(...l))},[c("div",{class:i(["var-select__controller",[e.isFocus?"var-select--focus":null,e.errorMessage?"var-select--error":null,e.formDisabled||e.disabled?"var-select--disabled":null]]),style:S({color:e.errorMessage?null:e.isFocus?e.focusColor:e.blurColor})},[c("div",{class:i(["var-select__icon",[e.hint?null:"var-select--non-hint"]])},[_(e.$slots,"prepend-icon")],2),$(T,{class:"var-select__menu","var-select-cover":"","offset-y":e.offsetY,show:e.isFocus,"onUpdate:show":o[2]||(o[2]=l=>e.isFocus=l),onClose:e.handleBlur},{menu:U(()=>[c("div",Ee,[_(e.$slots,"default")])]),default:U(()=>[c("div",{class:i(["var-select__wrap",[e.hint?null:"var-select--non-hint"]]),ref:"wrapEl",onClick:o[1]||(o[1]=(...l)=>e.handleFocus&&e.handleFocus(...l))},[c("div",{class:i(["var-select__select",[e.errorMessage?"var-select--error":null,e.formDisabled||e.disabled?"var-select--disabled":null]]),style:S({textAlign:e.textAlign,color:e.textColor})},[e.multiple?(d(),f("div",je,[e.chip?(d(),f("div",Te,[(d(!0),f(ye,null,be(e.labels,l=>(d(),X(g,{class:"var-select__chip","var-select-cover":"",closable:"",type:e.errorMessage?"danger":null,key:l,onClick:o[0]||(o[0]=pe(()=>{},["stop"])),onClose:z=>e.handleClose(l)},{default:U(()=>[he(B(l),1)]),_:2},1032,["type","onClose"]))),128))])):(d(),f("div",De,B(e.labels.join(e.separator)),1))])):(d(),f("span",Ae,B(e.label),1)),$(C,{class:i(["var-select__arrow",[e.isFocus?"var-select--arrow-rotate":null]]),"var-select-cover":"",name:"menu-down",transition:300},null,8,["class"])],6),c("label",{class:i(["var-select__placeholder",[e.computePlaceholderState(),e.hint?null:"var-select--placeholder-non-hint"]])},B(e.placeholder),3)],2)]),_:3},8,["offset-y","show","onClose"]),c("div",{class:i(["var-select__icon",[e.hint?null:"var-select--non-hint"]])},[_(e.$slots,"append-icon",{},()=>[e.clearable?(d(),X(C,{key:0,class:"var-select__clear-icon",name:"close-circle",size:"14px",onClick:e.handleClear},null,8,["onClick"])):Z("v-if",!0)])],2)],6),e.line?(d(),f("div",{key:0,class:i(["var-select__line",[e.formDisabled||e.disabled?"var-select--line-disabled":null,e.errorMessage?"var-select--line-error":null]]),style:S({background:e.errorMessage?null:e.blurColor})},[c("div",{class:i(["var-select__dot",[e.isFocus?"var-select--spread":null,e.formDisabled||e.disabled?"var-select--line-disabled":null,e.errorMessage?"var-select--line-error":null]]),style:S({background:e.errorMessage?null:e.focusColor})},null,6)],6)):Z("v-if",!0),$(h,{"error-message":e.errorMessage},null,8,["error-message"])],2)}var L=Ce(Be,[["render",_e]]);L.install=function(e){e.component(L.name,L)};export{L as S};