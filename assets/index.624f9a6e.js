var w=Object.defineProperty;var y=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var g=(t,a,e)=>a in t?w(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,z=(t,a)=>{for(var e in a||(a={}))I.call(a,e)&&g(t,e,a[e]);if(y)for(var e of y(a))b.call(a,e)&&g(t,e,a[e]);return t};import{x as R,W as G,X as O,G as h,Y as W}from"./elevation.6b325341.js";const C="background-image",N="lazy-loading",B="lazy-error",_="lazy-attempt",P=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],l="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",s=[],u=[],p=W(100),n={loading:l,error:l,attempt:3,throttleWait:300,events:P};let f=h(i,n.throttleWait);function A(t,a){t._lazy.arg===C?t.style.backgroundImage=`url(${a})`:t.setAttribute("src",a)}function T(t){t._lazy.loading&&A(t,t._lazy.loading),i()}function Y(t){t._lazy.error&&A(t,t._lazy.error),t._lazy.state="error",d(t),i()}function E(t,a){A(t,a),t._lazy.state="success",d(t),i()}function D(t){var a;u.includes(t)||(u.push(t),(a=n.events)==null||a.forEach(e=>{t.addEventListener(e,f,{passive:!0})}))}function M(){u.forEach(t=>{var a;(a=n.events)==null||a.forEach(e=>{t.removeEventListener(e,f)})}),u.length=0}function S(t,a){var r,o,c;const e={loading:(r=t.getAttribute(N))!=null?r:n.loading,error:(o=t.getAttribute(B))!=null?o:n.error,attempt:t.getAttribute(_)?Number(t.getAttribute(_)):n.attempt};t._lazy=z({src:a.value,arg:a.arg,currentAttempt:0,state:"pending",attemptLock:!1},e),A(t,l),(c=n.filter)==null||c.call(n,t._lazy)}function Z(t,a){const e=new Image;e.src=a,t._lazy.preloadImage=e,e.addEventListener("load",()=>{t._lazy.attemptLock=!1,p.add(a),E(t,a)}),e.addEventListener("error",()=>{t._lazy.attemptLock=!1,t._lazy.currentAttempt>=t._lazy.attempt?Y(t):L(t)})}function L(t){if(t._lazy.attemptLock)return;t._lazy.attemptLock=!0,t._lazy.currentAttempt++;const{src:a}=t._lazy;if(p.has(a)){E(t,a),t._lazy.attemptLock=!1;return}T(t),Z(t,a)}async function m(t){await G(t)&&L(t)}function i(){s.forEach(t=>m(t))}async function x(t){!s.includes(t)&&s.push(t),O(t).forEach(D),await m(t)}function d(t){R(s,t),s.length===0&&M()}function V(t,a){const{src:e,arg:r}=t._lazy;return e!==a.value||r!==a.arg}async function v(t,a){S(t,a),await x(t)}async function X(t,a){if(!V(t,a)){s.includes(t)&&await m(t);return}await v(t,a)}function j(t={}){const{events:a,loading:e,error:r,attempt:o,throttleWait:c,filter:k}=t;n.events=a!=null?a:n.events,n.loading=e!=null?e:n.loading,n.error=r!=null?r:n.error,n.attempt=o!=null?o:n.attempt,n.throttleWait=c!=null?c:n.throttleWait,n.filter=k}const Q={mounted:v,unmounted:d,updated:X,install(t,a){j(a),f=h(i,n.throttleWait),t.directive("lazy",this)}};export{Q as L};