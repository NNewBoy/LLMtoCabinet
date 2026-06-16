(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const de={},Vs=[],jn=()=>{},Mf=()=>!1,ra=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),oa=n=>n.startsWith("onUpdate:"),Ce=Object.assign,Pc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Lp=Object.prototype.hasOwnProperty,oe=(n,t)=>Lp.call(n,t),Ft=Array.isArray,Gs=n=>Vr(n)==="[object Map]",aa=n=>Vr(n)==="[object Set]",mu=n=>Vr(n)==="[object Date]",Xt=n=>typeof n=="function",Se=n=>typeof n=="string",yn=n=>typeof n=="symbol",ue=n=>n!==null&&typeof n=="object",Ef=n=>(ue(n)||Xt(n))&&Xt(n.then)&&Xt(n.catch),bf=Object.prototype.toString,Vr=n=>bf.call(n),Ip=n=>Vr(n).slice(8,-1),Tf=n=>Vr(n)==="[object Object]",la=n=>Se(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Sr=Rc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ca=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},Up=/-\w/g,Dn=ca(n=>n.replace(Up,t=>t.slice(1).toUpperCase())),Np=/\B([A-Z])/g,zi=ca(n=>n.replace(Np,"-$1").toLowerCase()),Af=ca(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ra=ca(n=>n?`on${Af(n)}`:""),Wn=(n,t)=>!Object.is(n,t),Lo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},wf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},ua=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Fp=n=>{const t=Se(n)?Number(n):NaN;return isNaN(t)?n:t};let _u;const ha=()=>_u||(_u=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fa(n){if(Ft(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Se(i)?Hp(i):fa(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Se(n)||ue(n))return n}const Op=/;(?![^(]*\))/g,Bp=/:([^]+)/,zp=/\/\*[^]*?\*\//g;function Hp(n){const t={};return n.replace(zp,"").split(Op).forEach(e=>{if(e){const i=e.split(Bp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function we(n){let t="";if(Se(n))t=n;else if(Ft(n))for(let e=0;e<n.length;e++){const i=we(n[e]);i&&(t+=i+" ")}else if(ue(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const kp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vp=Rc(kp);function Cf(n){return!!n||n===""}function Gp(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Gr(n[i],t[i]);return e}function Gr(n,t){if(n===t)return!0;let e=mu(n),i=mu(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=yn(n),i=yn(t),e||i)return n===t;if(e=Ft(n),i=Ft(t),e||i)return e&&i?Gp(n,t):!1;if(e=ue(n),i=ue(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Gr(n[o],t[o]))return!1}}return String(n)===String(t)}function Wp(n,t){return n.findIndex(e=>Gr(e,t))}const Rf=n=>!!(n&&n.__v_isRef===!0),Zt=n=>Se(n)?n:n==null?"":Ft(n)||ue(n)&&(n.toString===bf||!Xt(n.toString))?Rf(n)?Zt(n.value):JSON.stringify(n,Pf,2):String(n),Pf=(n,t)=>Rf(t)?Pf(n,t.value):Gs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Pa(i,r)+" =>"]=s,e),{})}:aa(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Pa(e))}:yn(t)?Pa(t):ue(t)&&!Ft(t)&&!Tf(t)?String(t):t,Pa=(n,t="")=>{var e;return yn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pe;class Df{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Pe&&(Pe.active?(this.parent=Pe,this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Pe;try{return Pe=this,t()}finally{Pe=e}}}on(){++this._on===1&&(this.prevScope=Pe,Pe=this)}off(){if(this._on>0&&--this._on===0){if(Pe===this)Pe=this.prevScope;else{let t=Pe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Lf(n){return new Df(n)}function If(){return Pe}function Xp(n,t=!1){Pe&&Pe.cleanups.push(n)}let me;const Da=new WeakSet;class Uf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pe&&(Pe.active?Pe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Da.has(this)&&(Da.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ff(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gu(this),Of(this);const t=me,e=Ln;me=this,Ln=!0;try{return this.fn()}finally{Bf(this),me=t,Ln=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ic(t);this.deps=this.depsTail=void 0,gu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Da.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){El(this)&&this.run()}get dirty(){return El(this)}}let Nf=0,yr,Mr;function Ff(n,t=!1){if(n.flags|=8,t){n.next=Mr,Mr=n;return}n.next=yr,yr=n}function Dc(){Nf++}function Lc(){if(--Nf>0)return;if(Mr){let t=Mr;for(Mr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;yr;){let t=yr;for(yr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Of(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Bf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Ic(i),$p(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function El(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(zf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function zf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Pr)||(n.globalVersion=Pr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!El(n))))return;n.flags|=2;const t=n.dep,e=me,i=Ln;me=n,Ln=!0;try{Of(n);const s=n.fn(n._value);(t.version===0||Wn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{me=e,Ln=i,Bf(n),n.flags&=-3}}function Ic(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Ic(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function $p(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Ln=!0;const Hf=[];function pi(){Hf.push(Ln),Ln=!1}function mi(){const n=Hf.pop();Ln=n===void 0?!0:n}function gu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=me;me=void 0;try{t()}finally{me=e}}}let Pr=0;class Yp{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Uc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!me||!Ln||me===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==me)e=this.activeLink=new Yp(me,this),me.deps?(e.prevDep=me.depsTail,me.depsTail.nextDep=e,me.depsTail=e):me.deps=me.depsTail=e,kf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=me.depsTail,e.nextDep=void 0,me.depsTail.nextDep=e,me.depsTail=e,me.deps===e&&(me.deps=i)}return e}trigger(t){this.version++,Pr++,this.notify(t)}notify(t){Dc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Lc()}}}function kf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)kf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Vo=new WeakMap,as=Symbol(""),bl=Symbol(""),Dr=Symbol("");function Ve(n,t,e){if(Ln&&me){let i=Vo.get(n);i||Vo.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Uc),s.map=i,s.key=e),s.track()}}function ai(n,t,e,i,s,r){const o=Vo.get(n);if(!o){Pr++;return}const a=l=>{l&&l.trigger()};if(Dc(),t==="clear")o.forEach(a);else{const l=Ft(n),c=l&&la(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Dr||!yn(f)&&f>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Dr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(as)),Gs(n)&&a(o.get(bl)));break;case"delete":l||(a(o.get(as)),Gs(n)&&a(o.get(bl)));break;case"set":Gs(n)&&a(o.get(as));break}}Lc()}function jp(n,t){const e=Vo.get(n);return e&&e.get(t)}function Ms(n){const t=te(n);return t===n?t:(Ve(t,"iterate",Dr),cn(n)?t:t.map(Nn))}function da(n){return Ve(n=te(n),"iterate",Dr),n}function Vn(n,t){return _i(n)?Ks(hi(n)?Nn(t):t):Nn(t)}const qp={__proto__:null,[Symbol.iterator](){return La(this,Symbol.iterator,n=>Vn(this,n))},concat(...n){return Ms(this).concat(...n.map(t=>Ft(t)?Ms(t):t))},entries(){return La(this,"entries",n=>(n[1]=Vn(this,n[1]),n))},every(n,t){return Zn(this,"every",n,t,void 0,arguments)},filter(n,t){return Zn(this,"filter",n,t,e=>e.map(i=>Vn(this,i)),arguments)},find(n,t){return Zn(this,"find",n,t,e=>Vn(this,e),arguments)},findIndex(n,t){return Zn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Zn(this,"findLast",n,t,e=>Vn(this,e),arguments)},findLastIndex(n,t){return Zn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Zn(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ia(this,"includes",n)},indexOf(...n){return Ia(this,"indexOf",n)},join(n){return Ms(this).join(n)},lastIndexOf(...n){return Ia(this,"lastIndexOf",n)},map(n,t){return Zn(this,"map",n,t,void 0,arguments)},pop(){return ar(this,"pop")},push(...n){return ar(this,"push",n)},reduce(n,...t){return vu(this,"reduce",n,t)},reduceRight(n,...t){return vu(this,"reduceRight",n,t)},shift(){return ar(this,"shift")},some(n,t){return Zn(this,"some",n,t,void 0,arguments)},splice(...n){return ar(this,"splice",n)},toReversed(){return Ms(this).toReversed()},toSorted(n){return Ms(this).toSorted(n)},toSpliced(...n){return Ms(this).toSpliced(...n)},unshift(...n){return ar(this,"unshift",n)},values(){return La(this,"values",n=>Vn(this,n))}};function La(n,t,e){const i=da(n),s=i[t]();return i!==n&&!cn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Kp=Array.prototype;function Zn(n,t,e,i,s,r){const o=da(n),a=o!==n&&!cn(n),l=o[t];if(l!==Kp[t]){const h=l.apply(n,r);return a?Nn(h):h}let c=e;o!==n&&(a?c=function(h,f){return e.call(this,Vn(n,h),f,n)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function vu(n,t,e,i){const s=da(n),r=s!==n&&!cn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=Vn(n,c)),e.call(this,c,Vn(n,u),h,n)}):e.length>3&&(o=function(c,u,h){return e.call(this,c,u,h,n)}));const l=s[t](o,...i);return a?Vn(n,l):l}function Ia(n,t,e){const i=te(n);Ve(i,"iterate",Dr);const s=i[t](...e);return(s===-1||s===!1)&&ma(e[0])?(e[0]=te(e[0]),i[t](...e)):s}function ar(n,t,e=[]){pi(),Dc();const i=te(n)[t].apply(n,e);return Lc(),mi(),i}const Zp=Rc("__proto__,__v_isRef,__isVue"),Vf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(yn));function Jp(n){yn(n)||(n=String(n));const t=te(this);return Ve(t,"has",n),t.hasOwnProperty(n)}class Gf{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?lm:Yf:r?$f:Xf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Ft(t);if(!s){let l;if(o&&(l=qp[e]))return l;if(e==="hasOwnProperty")return Jp}const a=Reflect.get(t,e,Ee(t)?t:i);if((yn(e)?Vf.has(e):Zp(e))||(s||Ve(t,"get",e),r))return a;if(Ee(a)){const l=o&&la(e)?a:a.value;return s&&ue(l)?Al(l):l}return ue(a)?s?Al(a):pa(a):a}}class Wf extends Gf{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Ft(t)&&la(e);if(!this._isShallow){const c=_i(r);if(!cn(i)&&!_i(i)&&(r=te(r),i=te(i)),!o&&Ee(r)&&!Ee(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:oe(t,e),l=Reflect.set(t,e,i,Ee(t)?t:s);return t===te(s)&&(a?Wn(i,r)&&ai(t,"set",e,i):ai(t,"add",e,i)),l}deleteProperty(t,e){const i=oe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&ai(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!yn(e)||!Vf.has(e))&&Ve(t,"has",e),i}ownKeys(t){return Ve(t,"iterate",Ft(t)?"length":as),Reflect.ownKeys(t)}}class Qp extends Gf{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const tm=new Wf,em=new Qp,nm=new Wf(!0);const Tl=n=>n,Kr=n=>Reflect.getPrototypeOf(n);function im(n,t,e){return function(...i){const s=this.__v_raw,r=te(s),o=Gs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Tl:t?Ks:Nn;return!t&&Ve(r,"iterate",l?bl:as),Ce(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function Zr(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function sm(n,t){const e={get(s){const r=this.__v_raw,o=te(r),a=te(s);n||(Wn(s,a)&&Ve(o,"get",s),Ve(o,"get",a));const{has:l}=Kr(o),c=t?Tl:n?Ks:Nn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ve(te(s),"iterate",as),s.size},has(s){const r=this.__v_raw,o=te(r),a=te(s);return n||(Wn(s,a)&&Ve(o,"has",s),Ve(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=te(a),c=t?Tl:n?Ks:Nn;return!n&&Ve(l,"iterate",as),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Ce(e,n?{add:Zr("add"),set:Zr("set"),delete:Zr("delete"),clear:Zr("clear")}:{add(s){const r=te(this),o=Kr(r),a=te(s),l=!t&&!cn(s)&&!_i(s)?a:s;return o.has.call(r,l)||Wn(s,l)&&o.has.call(r,s)||Wn(a,l)&&o.has.call(r,a)||(r.add(l),ai(r,"add",l,l)),this},set(s,r){!t&&!cn(r)&&!_i(r)&&(r=te(r));const o=te(this),{has:a,get:l}=Kr(o);let c=a.call(o,s);c||(s=te(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Wn(r,u)&&ai(o,"set",s,r):ai(o,"add",s,r),this},delete(s){const r=te(this),{has:o,get:a}=Kr(r);let l=o.call(r,s);l||(s=te(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ai(r,"delete",s,void 0),c},clear(){const s=te(this),r=s.size!==0,o=s.clear();return r&&ai(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=im(s,n,t)}),e}function Nc(n,t){const e=sm(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(oe(e,s)&&s in i?e:i,s,r)}const rm={get:Nc(!1,!1)},om={get:Nc(!1,!0)},am={get:Nc(!0,!1)};const Xf=new WeakMap,$f=new WeakMap,Yf=new WeakMap,lm=new WeakMap;function cm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pa(n){return _i(n)?n:Fc(n,!1,tm,rm,Xf)}function um(n){return Fc(n,!1,nm,om,$f)}function Al(n){return Fc(n,!0,em,am,Yf)}function Fc(n,t,e,i,s){if(!ue(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=cm(Ip(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function hi(n){return _i(n)?hi(n.__v_raw):!!(n&&n.__v_isReactive)}function _i(n){return!!(n&&n.__v_isReadonly)}function cn(n){return!!(n&&n.__v_isShallow)}function ma(n){return n?!!n.__v_raw:!1}function te(n){const t=n&&n.__v_raw;return t?te(t):n}function Oc(n){return!oe(n,"__v_skip")&&Object.isExtensible(n)&&wf(n,"__v_skip",!0),n}const Nn=n=>ue(n)?pa(n):n,Ks=n=>ue(n)?Al(n):n;function Ee(n){return n?n.__v_isRef===!0:!1}function ie(n){return hm(n,!1)}function hm(n,t){return Ee(n)?n:new fm(n,t)}class fm{constructor(t,e){this.dep=new Uc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:te(t),this._value=e?t:Nn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||cn(t)||_i(t);t=i?t:te(t),Wn(t,e)&&(this._rawValue=t,this._value=i?t:Nn(t),this.dep.trigger())}}function be(n){return Ee(n)?n.value:n}const dm={get:(n,t,e)=>t==="__v_raw"?n:be(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Ee(s)&&!Ee(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function jf(n){return hi(n)?n:new Proxy(n,dm)}function pm(n){const t=Ft(n)?new Array(n.length):{};for(const e in n)t[e]=_m(n,e);return t}class mm{constructor(t,e,i){this._object=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=yn(e)?e:String(e),this._raw=te(t);let s=!0,r=t;if(!Ft(t)||yn(this._key)||!la(this._key))do s=!ma(r)||cn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=be(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Ee(this._raw[this._key])){const e=this._object[this._key];if(Ee(e)){e.value=t;return}}this._object[this._key]=t}get dep(){return jp(this._raw,this._key)}}function _m(n,t,e){return new mm(n,t,e)}class gm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Uc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&me!==this)return Ff(this,!0),!0}get value(){const t=this.dep.track();return zf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function vm(n,t,e=!1){let i,s;return Xt(n)?i=n:(i=n.get,s=n.set),new gm(i,s,e)}const Jr={},Go=new WeakMap;let Qi;function xm(n,t=!1,e=Qi){if(e){let i=Go.get(e);i||Go.set(e,i=[]),i.push(n)}}function Sm(n,t,e=de){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=x=>s?x:cn(x)||s===!1||s===0?li(x,1):li(x);let u,h,f,p,g=!1,v=!1;if(Ee(n)?(h=()=>n.value,g=cn(n)):hi(n)?(h=()=>c(n),g=!0):Ft(n)?(v=!0,g=n.some(x=>hi(x)||cn(x)),h=()=>n.map(x=>{if(Ee(x))return x.value;if(hi(x))return c(x);if(Xt(x))return l?l(x,2):x()})):Xt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){pi();try{f()}finally{mi()}}const x=Qi;Qi=u;try{return l?l(n,3,[p]):n(p)}finally{Qi=x}}:h=jn,t&&s){const x=h,P=s===!0?1/0:s;h=()=>li(x(),P)}const m=If(),d=()=>{u.stop(),m&&m.active&&Pc(m.effects,u)};if(r&&t){const x=t;t=(...P)=>{const U=x(...P);return d(),U}}let E=v?new Array(n.length).fill(Jr):Jr;const M=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const P=u.run();if(x||s||g||(v?P.some((U,L)=>Wn(U,E[L])):Wn(P,E))){f&&f();const U=Qi;Qi=u;try{const L=[P,E===Jr?void 0:v&&E[0]===Jr?[]:E,p];E=P,l?l(t,3,L):t(...L)}finally{Qi=U}}}else u.run()};return a&&a(M),u=new Uf(h),u.scheduler=o?()=>o(M,!1):M,p=x=>xm(x,!1,u),f=u.onStop=()=>{const x=Go.get(u);if(x){if(l)l(x,4);else for(const P of x)P();Go.delete(u)}},t?i?M(!0):E=u.run():o?o(M.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function li(n,t=1/0,e){if(t<=0||!ue(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Ee(n))li(n.value,t,e);else if(Ft(n))for(let i=0;i<n.length;i++)li(n[i],t,e);else if(aa(n)||Gs(n))n.forEach(i=>{li(i,t,e)});else if(Tf(n)){for(const i in n)li(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&li(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wr(n,t,e,i){try{return i?n(...i):n()}catch(s){_a(s,t,e)}}function Mn(n,t,e,i){if(Xt(n)){const s=Wr(n,t,e,i);return s&&Ef(s)&&s.catch(r=>{_a(r,t,e)}),s}if(Ft(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Mn(n[r],t,e,i));return s}}function _a(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||de;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){pi(),Wr(r,null,10,[n,l,c]),mi();return}}ym(n,e,s,i,o)}function ym(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Ye=[];let Hn=-1;const Ws=[];let Di=null,Bs=0;const qf=Promise.resolve();let Wo=null;function ga(n){const t=Wo||qf;return n?t.then(this?n.bind(this):n):t}function Mm(n){let t=Hn+1,e=Ye.length;for(;t<e;){const i=t+e>>>1,s=Ye[i],r=Lr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Bc(n){if(!(n.flags&1)){const t=Lr(n),e=Ye[Ye.length-1];!e||!(n.flags&2)&&t>=Lr(e)?Ye.push(n):Ye.splice(Mm(t),0,n),n.flags|=1,Kf()}}function Kf(){Wo||(Wo=qf.then(Jf))}function Em(n){Ft(n)?Ws.push(...n):Di&&n.id===-1?Di.splice(Bs+1,0,n):n.flags&1||(Ws.push(n),n.flags|=1),Kf()}function xu(n,t,e=Hn+1){for(;e<Ye.length;e++){const i=Ye[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ye.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Zf(n){if(Ws.length){const t=[...new Set(Ws)].sort((e,i)=>Lr(e)-Lr(i));if(Ws.length=0,Di){Di.push(...t);return}for(Di=t,Bs=0;Bs<Di.length;Bs++){const e=Di[Bs];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Di=null,Bs=0}}const Lr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Jf(n){try{for(Hn=0;Hn<Ye.length;Hn++){const t=Ye[Hn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Wr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Hn<Ye.length;Hn++){const t=Ye[Hn];t&&(t.flags&=-2)}Hn=-1,Ye.length=0,Zf(),Wo=null,(Ye.length||Ws.length)&&Jf()}}let Sn=null,Qf=null;function Xo(n){const t=Sn;return Sn=n,Qf=n&&n.type.__scopeId||null,t}function td(n,t=Sn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Pu(-1);const r=Xo(t);let o;try{o=n(...s)}finally{Xo(r),i._d&&Pu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function pn(n,t){if(Sn===null)return n;const e=Ma(Sn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=de]=t[s];r&&(Xt(r)&&(r={mounted:r,updated:r}),r.deep&&li(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Wi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(pi(),Mn(l,e,8,[n.el,a,n,t]),mi())}}function bm(n,t){if(je){let e=je.provides;const i=je.parent&&je.parent.provides;i===e&&(e=je.provides=Object.create(i)),e[n]=t}}function Er(n,t,e=!1){const i=Vc();if(i||ls){let s=ls?ls._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Xt(t)?t.call(i&&i.proxy):t}}function Tm(){return!!(Vc()||ls)}const Am=Symbol.for("v-scx"),wm=()=>Er(Am);function en(n,t,e){return ed(n,t,e)}function ed(n,t,e=de){const{immediate:i,deep:s,flush:r,once:o}=e,a=Ce({},e),l=t&&i||!t&&r!=="post";let c;if(Nr){if(r==="sync"){const p=wm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=jn,p.resume=jn,p.pause=jn,p}}const u=je;a.call=(p,g,v)=>Mn(p,u,g,v);let h=!1;r==="post"?a.scheduler=p=>{Qe(p,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():Bc(p)}),a.augmentJob=p=>{t&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Sm(n,t,a);return Nr&&(c?c.push(f):l&&f()),f}function Cm(n,t,e){const i=this.proxy,s=Se(n)?n.includes(".")?nd(i,n):()=>i[n]:n.bind(i,i);let r;Xt(t)?r=t:(r=t.handler,e=t);const o=Xr(this),a=ed(s,r.bind(i),e);return o(),a}function nd(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Rm=Symbol("_vte"),Pm=n=>n.__isTeleport,kn=Symbol("_leaveCb"),lr=Symbol("_enterCb");function Dm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _s(()=>{n.isMounted=!0}),ld(()=>{n.isUnmounting=!0}),n}const fn=[Function,Array],Lm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:fn,onEnter:fn,onAfterEnter:fn,onEnterCancelled:fn,onBeforeLeave:fn,onLeave:fn,onAfterLeave:fn,onLeaveCancelled:fn,onBeforeAppear:fn,onAppear:fn,onAfterAppear:fn,onAppearCancelled:fn};function Im(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function wl(n,t,e,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:m,onAppear:d,onAfterAppear:E,onAppearCancelled:M}=t,x=String(n.key),P=Im(e,n),U=(b,T)=>{b&&Mn(b,i,9,T)},L=(b,T)=>{const I=T[1];U(b,T),Ft(b)?b.every(O=>O.length<=1)&&I():b.length<=1&&I()},N={mode:o,persisted:a,beforeEnter(b){let T=l;if(!e.isMounted)if(r)T=m||l;else return;b[kn]&&b[kn](!0);const I=P[x];I&&zs(n,I)&&I.el[kn]&&I.el[kn](),U(T,[b])},enter(b){if(P[x]===n)return;let T=c,I=u,O=h;if(!e.isMounted)if(r)T=d||c,I=E||u,O=M||h;else return;let V=!1;b[lr]=ot=>{V||(V=!0,ot?U(O,[b]):U(I,[b]),N.delayedLeave&&N.delayedLeave(),b[lr]=void 0)};const it=b[lr].bind(null,!1);T?L(T,[b,it]):it()},leave(b,T){const I=String(n.key);if(b[lr]&&b[lr](!0),e.isUnmounting)return T();U(f,[b]);let O=!1;b[kn]=it=>{O||(O=!0,T(),it?U(v,[b]):U(g,[b]),b[kn]=void 0,P[I]===n&&delete P[I])};const V=b[kn].bind(null,!1);P[I]=n,p?L(p,[b,V]):V()},clone(b){return wl(b,t,e,i)}};return N}function Ir(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Ir(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function id(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:r);o.type===ge?(o.patchFlag&128&&s++,i=i.concat(id(o.children,t,a))):(t||o.type!==gi)&&i.push(a!=null?us(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Hi(n,t){return Xt(n)?Ce({name:n.name},t,{setup:n}):n}function sd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Su(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const $o=new WeakMap;function br(n,t,e,i,s=!1){if(Ft(n)){n.forEach((v,m)=>br(v,t&&(Ft(t)?t[m]:t),e,i,s));return}if(Tr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&br(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Ma(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===de?a.refs={}:a.refs,h=a.setupState,f=te(h),p=h===de?Mf:v=>Su(u,v)?!1:oe(f,v),g=(v,m)=>!(m&&Su(u,m));if(c!=null&&c!==l){if(yu(t),Se(c))u[c]=null,p(c)&&(h[c]=null);else if(Ee(c)){const v=t;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(Xt(l))Wr(l,a,12,[o,u]);else{const v=Se(l),m=Ee(l);if(v||m){const d=()=>{if(n.f){const E=v?p(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Ft(E)&&Pc(E,r);else if(Ft(E))E.includes(r)||E.push(r);else if(v)u[l]=[r],p(l)&&(h[l]=u[l]);else{const M=[r];g(l,n.k)&&(l.value=M),n.k&&(u[n.k]=M)}}else v?(u[l]=o,p(l)&&(h[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const E=()=>{d(),$o.delete(n)};E.id=-1,$o.set(n,E),Qe(E,e)}else yu(n),d()}}}function yu(n){const t=$o.get(n);t&&(t.flags|=8,$o.delete(n))}ha().requestIdleCallback;ha().cancelIdleCallback;const Tr=n=>!!n.type.__asyncLoader,rd=n=>n.type.__isKeepAlive;function Um(n,t){od(n,"a",t)}function Nm(n,t){od(n,"da",t)}function od(n,t,e=je){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(va(t,i,e),e){let s=e.parent;for(;s&&s.parent;)rd(s.parent.vnode)&&Fm(i,t,e,s),s=s.parent}}function Fm(n,t,e,i){const s=va(t,n,i,!0);xa(()=>{Pc(i[t],s)},e)}function va(n,t,e=je,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{pi();const a=Xr(e),l=Mn(t,e,n,o);return a(),mi(),l});return i?s.unshift(r):s.push(r),r}}const Si=n=>(t,e=je)=>{(!Nr||n==="sp")&&va(n,(...i)=>t(...i),e)},Om=Si("bm"),_s=Si("m"),Bm=Si("bu"),ad=Si("u"),ld=Si("bum"),xa=Si("um"),zm=Si("sp"),Hm=Si("rtg"),km=Si("rtc");function Vm(n,t=je){va("ec",n,t)}const Gm=Symbol.for("v-ndc");function gn(n,t,e,i){let s;const r=e,o=Ft(n);if(o||Se(n)){const a=o&&hi(n);let l=!1,c=!1;a&&(l=!cn(n),c=_i(n),n=da(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=t(l?c?Ks(Nn(n[u])):Nn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(ue(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Cl=n=>n?Dd(n)?Ma(n):Cl(n.parent):null,Ar=Ce(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Cl(n.parent),$root:n=>Cl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ud(n),$forceUpdate:n=>n.f||(n.f=()=>{Bc(n.update)}),$nextTick:n=>n.n||(n.n=ga.bind(n.proxy)),$watch:n=>Cm.bind(n)}),Ua=(n,t)=>n!==de&&!n.__isScriptSetup&&oe(n,t),Wm={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ua(i,t))return o[t]=1,i[t];if(s!==de&&oe(s,t))return o[t]=2,s[t];if(oe(r,t))return o[t]=3,r[t];if(e!==de&&oe(e,t))return o[t]=4,e[t];Rl&&(o[t]=0)}}const c=Ar[t];let u,h;if(c)return t==="$attrs"&&Ve(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==de&&oe(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,oe(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Ua(s,t)?(s[t]=e,!0):i!==de&&oe(i,t)?(i[t]=e,!0):oe(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==de&&a[0]!=="$"&&oe(n,a)||Ua(t,a)||oe(r,a)||oe(i,a)||oe(Ar,a)||oe(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:oe(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Mu(n){return Ft(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Rl=!0;function Xm(n){const t=ud(n),e=n.proxy,i=n.ctx;Rl=!1,t.beforeCreate&&Eu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:d,beforeUnmount:E,destroyed:M,unmounted:x,render:P,renderTracked:U,renderTriggered:L,errorCaptured:N,serverPrefetch:b,expose:T,inheritAttrs:I,components:O,directives:V,filters:it}=t;if(c&&$m(c,i,null),o)for(const tt in o){const G=o[tt];Xt(G)&&(i[tt]=G.bind(e))}if(s){const tt=s.call(e,e);ue(tt)&&(n.data=pa(tt))}if(Rl=!0,r)for(const tt in r){const G=r[tt],vt=Xt(G)?G.bind(e,e):Xt(G.get)?G.get.bind(e,e):jn,_t=!Xt(G)&&Xt(G.set)?G.set.bind(e):jn,Ct=hs({get:vt,set:_t});Object.defineProperty(i,tt,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:Ut=>Ct.value=Ut})}if(a)for(const tt in a)cd(a[tt],i,e,tt);if(l){const tt=Xt(l)?l.call(e):l;Reflect.ownKeys(tt).forEach(G=>{bm(G,tt[G])})}u&&Eu(u,n,"c");function j(tt,G){Ft(G)?G.forEach(vt=>tt(vt.bind(e))):G&&tt(G.bind(e))}if(j(Om,h),j(_s,f),j(Bm,p),j(ad,g),j(Um,v),j(Nm,m),j(Vm,N),j(km,U),j(Hm,L),j(ld,E),j(xa,x),j(zm,b),Ft(T))if(T.length){const tt=n.exposed||(n.exposed={});T.forEach(G=>{Object.defineProperty(tt,G,{get:()=>e[G],set:vt=>e[G]=vt,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===jn&&(n.render=P),I!=null&&(n.inheritAttrs=I),O&&(n.components=O),V&&(n.directives=V),b&&sd(n)}function $m(n,t,e=jn){Ft(n)&&(n=Pl(n));for(const i in n){const s=n[i];let r;ue(s)?"default"in s?r=Er(s.from||i,s.default,!0):r=Er(s.from||i):r=Er(s),Ee(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Eu(n,t,e){Mn(Ft(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function cd(n,t,e,i){let s=i.includes(".")?nd(e,i):()=>e[i];if(Se(n)){const r=t[n];Xt(r)&&en(s,r)}else if(Xt(n))en(s,n.bind(e));else if(ue(n))if(Ft(n))n.forEach(r=>cd(r,t,e,i));else{const r=Xt(n.handler)?n.handler.bind(e):t[n.handler];Xt(r)&&en(s,r,n)}}function ud(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Yo(l,c,o,!0)),Yo(l,t,o)),ue(t)&&r.set(t,l),l}function Yo(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Yo(n,r,e,!0),s&&s.forEach(o=>Yo(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Ym[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Ym={data:bu,props:Tu,emits:Tu,methods:_r,computed:_r,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:_r,directives:_r,watch:qm,provide:bu,inject:jm};function bu(n,t){return t?n?function(){return Ce(Xt(n)?n.call(this,this):n,Xt(t)?t.call(this,this):t)}:t:n}function jm(n,t){return _r(Pl(n),Pl(t))}function Pl(n){if(Ft(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Xe(n,t){return n?[...new Set([].concat(n,t))]:t}function _r(n,t){return n?Ce(Object.create(null),n,t):t}function Tu(n,t){return n?Ft(n)&&Ft(t)?[...new Set([...n,...t])]:Ce(Object.create(null),Mu(n),Mu(t??{})):t}function qm(n,t){if(!n)return t;if(!t)return n;const e=Ce(Object.create(null),n);for(const i in t)e[i]=Xe(n[i],t[i]);return e}function hd(){return{app:null,config:{isNativeTag:Mf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Km=0;function Zm(n,t){return function(i,s=null){Xt(i)||(i=Ce({},i)),s!=null&&!ue(s)&&(s=null);const r=hd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Km++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:R_,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Xt(u.install)?(o.add(u),u.install(c,...h)):Xt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const p=c._ceVNode||_e(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,Ma(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Mn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=ls;ls=c;try{return u()}finally{ls=h}}};return c}}let ls=null;const Jm=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Dn(t)}Modifiers`]||n[`${zi(t)}Modifiers`];function Qm(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||de;let s=e;const r=t.startsWith("update:"),o=r&&Jm(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Se(u)?u.trim():u)),o.number&&(s=e.map(ua)));let a,l=i[a=Ra(t)]||i[a=Ra(Dn(t))];!l&&r&&(l=i[a=Ra(zi(t))]),l&&Mn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Mn(c,n,6,s)}}const t_=new WeakMap;function fd(n,t,e=!1){const i=e?t_:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Xt(n)){const l=c=>{const u=fd(c,t,!0);u&&(a=!0,Ce(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ue(n)&&i.set(n,null),null):(Ft(r)?r.forEach(l=>o[l]=null):Ce(o,r),ue(n)&&i.set(n,o),o)}function Sa(n,t){return!n||!ra(t)?!1:(t=t.slice(2).replace(/Once$/,""),oe(n,t[0].toLowerCase()+t.slice(1))||oe(n,zi(t))||oe(n,t))}function Au(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:p,ctx:g,inheritAttrs:v}=n,m=Xo(n);let d,E;try{if(e.shapeFlag&4){const x=s||i,P=x;d=Gn(c.call(P,x,u,h,p,f,g)),E=a}else{const x=t;d=Gn(x.length>1?x(h,{attrs:a,slots:o,emit:l}):x(h,null)),E=t.props?a:e_(a)}}catch(x){wr.length=0,_a(x,n,1),d=_e(gi)}let M=d;if(E&&v!==!1){const x=Object.keys(E),{shapeFlag:P}=M;x.length&&P&7&&(r&&x.some(oa)&&(E=n_(E,r)),M=us(M,E,!1,!0))}return e.dirs&&(M=us(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(e.dirs):e.dirs),e.transition&&Ir(M,e.transition),d=M,Xo(m),d}const e_=n=>{let t;for(const e in n)(e==="class"||e==="style"||ra(e))&&((t||(t={}))[e]=n[e]);return t},n_=(n,t)=>{const e={};for(const i in n)(!oa(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function i_(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?wu(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(dd(o,i,f)&&!Sa(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?wu(i,o,c):!0:!!o;return!1}function wu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(dd(t,n,r)&&!Sa(e,r))return!0}return!1}function dd(n,t,e){const i=n[e],s=t[e];return e==="style"&&ue(i)&&ue(s)?!Gr(i,s):i!==s}function s_({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const pd={},md=()=>Object.create(pd),_d=n=>Object.getPrototypeOf(n)===pd;function r_(n,t,e,i=!1){const s={},r=md();n.propsDefaults=Object.create(null),gd(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:um(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function o_(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=te(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Sa(n.emitsOptions,f))continue;const p=t[f];if(l)if(oe(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const g=Dn(f);s[g]=Dl(l,a,g,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{gd(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!oe(t,h)&&((u=zi(h))===h||!oe(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=Dl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!oe(t,h))&&(delete r[h],c=!0)}c&&ai(n.attrs,"set","")}function gd(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Sr(l))continue;const c=t[l];let u;s&&oe(s,u=Dn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Sa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=te(e),c=a||de;for(let u=0;u<r.length;u++){const h=r[u];e[h]=Dl(s,l,h,c[h],n,!oe(c,h))}}return o}function Dl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=oe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Xr(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===zi(e))&&(i=!0))}return i}const a_=new WeakMap;function vd(n,t,e=!1){const i=e?a_:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Xt(n)){const u=h=>{l=!0;const[f,p]=vd(h,t,!0);Ce(o,f),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ue(n)&&i.set(n,Vs),Vs;if(Ft(r))for(let u=0;u<r.length;u++){const h=Dn(r[u]);Cu(h)&&(o[h]=de)}else if(r)for(const u in r){const h=Dn(u);if(Cu(h)){const f=r[u],p=o[h]=Ft(f)||Xt(f)?{type:f}:Ce({},f),g=p.type;let v=!1,m=!0;if(Ft(g))for(let d=0;d<g.length;++d){const E=g[d],M=Xt(E)&&E.name;if(M==="Boolean"){v=!0;break}else M==="String"&&(m=!1)}else v=Xt(g)&&g.name==="Boolean";p[0]=v,p[1]=m,(v||oe(p,"default"))&&a.push(h)}}const c=[o,a];return ue(n)&&i.set(n,c),c}function Cu(n){return n[0]!=="$"&&!Sr(n)}const zc=n=>n==="_"||n==="_ctx"||n==="$stable",Hc=n=>Ft(n)?n.map(Gn):[Gn(n)],l_=(n,t,e)=>{if(t._n)return t;const i=td((...s)=>Hc(t(...s)),e);return i._c=!1,i},xd=(n,t,e)=>{const i=n._ctx;for(const s in n){if(zc(s))continue;const r=n[s];if(Xt(r))t[s]=l_(s,r,i);else if(r!=null){const o=Hc(r);t[s]=()=>o}}},Sd=(n,t)=>{const e=Hc(t);n.slots.default=()=>e},yd=(n,t,e)=>{for(const i in t)(e||!zc(i))&&(n[i]=t[i])},c_=(n,t,e)=>{const i=n.slots=md();if(n.vnode.shapeFlag&32){const s=t._;s?(yd(i,t,e),e&&wf(i,"_",s,!0)):xd(t,i)}else t&&Sd(n,t)},u_=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=de;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:yd(s,t,e):(r=!t.$stable,xd(t,s)),o=t}else t&&(Sd(n,t),o={default:1});if(r)for(const a in s)!zc(a)&&o[a]==null&&delete s[a]},Qe=m_;function h_(n){return f_(n)}function f_(n,t){const e=ha();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=jn,insertStaticContent:g}=n,v=(w,C,y,st=null,$=null,q=null,K=void 0,ct=null,J=!!C.dynamicChildren)=>{if(w===C)return;w&&!zs(w,C)&&(st=R(w),Ut(w,$,q,!0),w=null),C.patchFlag===-2&&(J=!1,C.dynamicChildren=null);const{type:S,ref:_,shapeFlag:D}=C;switch(S){case ya:m(w,C,y,st);break;case gi:d(w,C,y,st);break;case Io:w==null&&E(C,y,st,K);break;case ge:O(w,C,y,st,$,q,K,ct,J);break;default:D&1?P(w,C,y,st,$,q,K,ct,J):D&6?V(w,C,y,st,$,q,K,ct,J):(D&64||D&128)&&S.process(w,C,y,st,$,q,K,ct,J,et)}_!=null&&$?br(_,w&&w.ref,q,C||w,!C):_==null&&w&&w.ref!=null&&br(w.ref,null,q,w,!0)},m=(w,C,y,st)=>{if(w==null)i(C.el=a(C.children),y,st);else{const $=C.el=w.el;C.children!==w.children&&c($,C.children)}},d=(w,C,y,st)=>{w==null?i(C.el=l(C.children||""),y,st):C.el=w.el},E=(w,C,y,st)=>{[w.el,w.anchor]=g(w.children,C,y,st,w.el,w.anchor)},M=({el:w,anchor:C},y,st)=>{let $;for(;w&&w!==C;)$=f(w),i(w,y,st),w=$;i(C,y,st)},x=({el:w,anchor:C})=>{let y;for(;w&&w!==C;)y=f(w),s(w),w=y;s(C)},P=(w,C,y,st,$,q,K,ct,J)=>{if(C.type==="svg"?K="svg":C.type==="math"&&(K="mathml"),w==null)U(C,y,st,$,q,K,ct,J);else{const S=w.el&&w.el._isVueCE?w.el:null;try{S&&S._beginPatch(),b(w,C,$,q,K,ct,J)}finally{S&&S._endPatch()}}},U=(w,C,y,st,$,q,K,ct)=>{let J,S;const{props:_,shapeFlag:D,transition:k,dirs:W}=w;if(J=w.el=o(w.type,q,_&&_.is,_),D&8?u(J,w.children):D&16&&N(w.children,J,null,st,$,Na(w,q),K,ct),W&&Wi(w,null,st,"created"),L(J,w,w.scopeId,K,st),_){for(const pt in _)pt!=="value"&&!Sr(pt)&&r(J,pt,null,_[pt],q,st);"value"in _&&r(J,"value",null,_.value,q),(S=_.onVnodeBeforeMount)&&Fn(S,st,w)}W&&Wi(w,null,st,"beforeMount");const Y=d_($,k);Y&&k.beforeEnter(J),i(J,C,y),((S=_&&_.onVnodeMounted)||Y||W)&&Qe(()=>{try{S&&Fn(S,st,w),Y&&k.enter(J),W&&Wi(w,null,st,"mounted")}finally{}},$)},L=(w,C,y,st,$)=>{if(y&&p(w,y),st)for(let q=0;q<st.length;q++)p(w,st[q]);if($){let q=$.subTree;if(C===q||Td(q.type)&&(q.ssContent===C||q.ssFallback===C)){const K=$.vnode;L(w,K,K.scopeId,K.slotScopeIds,$.parent)}}},N=(w,C,y,st,$,q,K,ct,J=0)=>{for(let S=J;S<w.length;S++){const _=w[S]=ct?ri(w[S]):Gn(w[S]);v(null,_,C,y,st,$,q,K,ct)}},b=(w,C,y,st,$,q,K)=>{const ct=C.el=w.el;let{patchFlag:J,dynamicChildren:S,dirs:_}=C;J|=w.patchFlag&16;const D=w.props||de,k=C.props||de;let W;if(y&&Xi(y,!1),(W=k.onVnodeBeforeUpdate)&&Fn(W,y,C,w),_&&Wi(C,w,y,"beforeUpdate"),y&&Xi(y,!0),(D.innerHTML&&k.innerHTML==null||D.textContent&&k.textContent==null)&&u(ct,""),S?T(w.dynamicChildren,S,ct,y,st,Na(C,$),q):K||G(w,C,ct,null,y,st,Na(C,$),q,!1),J>0){if(J&16)I(ct,D,k,y,$);else if(J&2&&D.class!==k.class&&r(ct,"class",null,k.class,$),J&4&&r(ct,"style",D.style,k.style,$),J&8){const Y=C.dynamicProps;for(let pt=0;pt<Y.length;pt++){const ht=Y[pt],mt=D[ht],Dt=k[ht];(Dt!==mt||ht==="value")&&r(ct,ht,mt,Dt,$,y)}}J&1&&w.children!==C.children&&u(ct,C.children)}else!K&&S==null&&I(ct,D,k,y,$);((W=k.onVnodeUpdated)||_)&&Qe(()=>{W&&Fn(W,y,C,w),_&&Wi(C,w,y,"updated")},st)},T=(w,C,y,st,$,q,K)=>{for(let ct=0;ct<C.length;ct++){const J=w[ct],S=C[ct],_=J.el&&(J.type===ge||!zs(J,S)||J.shapeFlag&198)?h(J.el):y;v(J,S,_,null,st,$,q,K,!0)}},I=(w,C,y,st,$)=>{if(C!==y){if(C!==de)for(const q in C)!Sr(q)&&!(q in y)&&r(w,q,C[q],null,$,st);for(const q in y){if(Sr(q))continue;const K=y[q],ct=C[q];K!==ct&&q!=="value"&&r(w,q,ct,K,$,st)}"value"in y&&r(w,"value",C.value,y.value,$)}},O=(w,C,y,st,$,q,K,ct,J)=>{const S=C.el=w?w.el:a(""),_=C.anchor=w?w.anchor:a("");let{patchFlag:D,dynamicChildren:k,slotScopeIds:W}=C;W&&(ct=ct?ct.concat(W):W),w==null?(i(S,y,st),i(_,y,st),N(C.children||[],y,_,$,q,K,ct,J)):D>0&&D&64&&k&&w.dynamicChildren&&w.dynamicChildren.length===k.length?(T(w.dynamicChildren,k,y,$,q,K,ct),(C.key!=null||$&&C===$.subTree)&&Md(w,C,!0)):G(w,C,y,_,$,q,K,ct,J)},V=(w,C,y,st,$,q,K,ct,J)=>{C.slotScopeIds=ct,w==null?C.shapeFlag&512?$.ctx.activate(C,y,st,K,J):it(C,y,st,$,q,K,J):ot(w,C,J)},it=(w,C,y,st,$,q,K)=>{const ct=w.component=E_(w,st,$);if(rd(w)&&(ct.ctx.renderer=et),b_(ct,!1,K),ct.asyncDep){if($&&$.registerDep(ct,j,K),!w.el){const J=ct.subTree=_e(gi);d(null,J,C,y),w.placeholder=J.el}}else j(ct,w,C,y,$,q,K)},ot=(w,C,y)=>{const st=C.component=w.component;if(i_(w,C,y))if(st.asyncDep&&!st.asyncResolved){tt(st,C,y);return}else st.next=C,st.update();else C.el=w.el,st.vnode=C},j=(w,C,y,st,$,q,K)=>{const ct=()=>{if(w.isMounted){let{next:D,bu:k,u:W,parent:Y,vnode:pt}=w;{const yt=Ed(w);if(yt){D&&(D.el=pt.el,tt(w,D,K)),yt.asyncDep.then(()=>{Qe(()=>{w.isUnmounted||S()},$)});return}}let ht=D,mt;Xi(w,!1),D?(D.el=pt.el,tt(w,D,K)):D=pt,k&&Lo(k),(mt=D.props&&D.props.onVnodeBeforeUpdate)&&Fn(mt,Y,D,pt),Xi(w,!0);const Dt=Au(w),ft=w.subTree;w.subTree=Dt,v(ft,Dt,h(ft.el),R(ft),w,$,q),D.el=Dt.el,ht===null&&s_(w,Dt.el),W&&Qe(W,$),(mt=D.props&&D.props.onVnodeUpdated)&&Qe(()=>Fn(mt,Y,D,pt),$)}else{let D;const{el:k,props:W}=C,{bm:Y,m:pt,parent:ht,root:mt,type:Dt}=w,ft=Tr(C);Xi(w,!1),Y&&Lo(Y),!ft&&(D=W&&W.onVnodeBeforeMount)&&Fn(D,ht,C),Xi(w,!0);{mt.ce&&mt.ce._hasShadowRoot()&&mt.ce._injectChildStyle(Dt,w.parent?w.parent.type:void 0);const yt=w.subTree=Au(w);v(null,yt,y,st,w,$,q),C.el=yt.el}if(pt&&Qe(pt,$),!ft&&(D=W&&W.onVnodeMounted)){const yt=C;Qe(()=>Fn(D,ht,yt),$)}(C.shapeFlag&256||ht&&Tr(ht.vnode)&&ht.vnode.shapeFlag&256)&&w.a&&Qe(w.a,$),w.isMounted=!0,C=y=st=null}};w.scope.on();const J=w.effect=new Uf(ct);w.scope.off();const S=w.update=J.run.bind(J),_=w.job=J.runIfDirty.bind(J);_.i=w,_.id=w.uid,J.scheduler=()=>Bc(_),Xi(w,!0),S()},tt=(w,C,y)=>{C.component=w;const st=w.vnode.props;w.vnode=C,w.next=null,o_(w,C.props,st,y),u_(w,C.children,y),pi(),xu(w),mi()},G=(w,C,y,st,$,q,K,ct,J=!1)=>{const S=w&&w.children,_=w?w.shapeFlag:0,D=C.children,{patchFlag:k,shapeFlag:W}=C;if(k>0){if(k&128){_t(S,D,y,st,$,q,K,ct,J);return}else if(k&256){vt(S,D,y,st,$,q,K,ct,J);return}}W&8?(_&16&&wt(S,$,q),D!==S&&u(y,D)):_&16?W&16?_t(S,D,y,st,$,q,K,ct,J):wt(S,$,q,!0):(_&8&&u(y,""),W&16&&N(D,y,st,$,q,K,ct,J))},vt=(w,C,y,st,$,q,K,ct,J)=>{w=w||Vs,C=C||Vs;const S=w.length,_=C.length,D=Math.min(S,_);let k;for(k=0;k<D;k++){const W=C[k]=J?ri(C[k]):Gn(C[k]);v(w[k],W,y,null,$,q,K,ct,J)}S>_?wt(w,$,q,!0,!1,D):N(C,y,st,$,q,K,ct,J,D)},_t=(w,C,y,st,$,q,K,ct,J)=>{let S=0;const _=C.length;let D=w.length-1,k=_-1;for(;S<=D&&S<=k;){const W=w[S],Y=C[S]=J?ri(C[S]):Gn(C[S]);if(zs(W,Y))v(W,Y,y,null,$,q,K,ct,J);else break;S++}for(;S<=D&&S<=k;){const W=w[D],Y=C[k]=J?ri(C[k]):Gn(C[k]);if(zs(W,Y))v(W,Y,y,null,$,q,K,ct,J);else break;D--,k--}if(S>D){if(S<=k){const W=k+1,Y=W<_?C[W].el:st;for(;S<=k;)v(null,C[S]=J?ri(C[S]):Gn(C[S]),y,Y,$,q,K,ct,J),S++}}else if(S>k)for(;S<=D;)Ut(w[S],$,q,!0),S++;else{const W=S,Y=S,pt=new Map;for(S=Y;S<=k;S++){const St=C[S]=J?ri(C[S]):Gn(C[S]);St.key!=null&&pt.set(St.key,S)}let ht,mt=0;const Dt=k-Y+1;let ft=!1,yt=0;const Lt=new Array(Dt);for(S=0;S<Dt;S++)Lt[S]=0;for(S=W;S<=D;S++){const St=w[S];if(mt>=Dt){Ut(St,$,q,!0);continue}let Vt;if(St.key!=null)Vt=pt.get(St.key);else for(ht=Y;ht<=k;ht++)if(Lt[ht-Y]===0&&zs(St,C[ht])){Vt=ht;break}Vt===void 0?Ut(St,$,q,!0):(Lt[Vt-Y]=S+1,Vt>=yt?yt=Vt:ft=!0,v(St,C[Vt],y,null,$,q,K,ct,J),mt++)}const Ot=ft?p_(Lt):Vs;for(ht=Ot.length-1,S=Dt-1;S>=0;S--){const St=Y+S,Vt=C[St],Wt=C[St+1],ae=St+1<_?Wt.el||bd(Wt):st;Lt[S]===0?v(null,Vt,y,ae,$,q,K,ct,J):ft&&(ht<0||S!==Ot[ht]?Ct(Vt,y,ae,2):ht--)}}},Ct=(w,C,y,st,$=null)=>{const{el:q,type:K,transition:ct,children:J,shapeFlag:S}=w;if(S&6){Ct(w.component.subTree,C,y,st);return}if(S&128){w.suspense.move(C,y,st);return}if(S&64){K.move(w,C,y,et);return}if(K===ge){i(q,C,y);for(let D=0;D<J.length;D++)Ct(J[D],C,y,st);i(w.anchor,C,y);return}if(K===Io){M(w,C,y);return}if(st!==2&&S&1&&ct)if(st===0)ct.persisted&&!q[kn]?i(q,C,y):(ct.beforeEnter(q),i(q,C,y),Qe(()=>ct.enter(q),$));else{const{leave:D,delayLeave:k,afterLeave:W}=ct,Y=()=>{w.ctx.isUnmounted?s(q):i(q,C,y)},pt=()=>{const ht=q._isLeaving||!!q[kn];q._isLeaving&&q[kn](!0),ct.persisted&&!ht?Y():D(q,()=>{Y(),W&&W()})};k?k(q,Y,pt):pt()}else i(q,C,y)},Ut=(w,C,y,st=!1,$=!1)=>{const{type:q,props:K,ref:ct,children:J,dynamicChildren:S,shapeFlag:_,patchFlag:D,dirs:k,cacheIndex:W,memo:Y}=w;if(D===-2&&($=!1),ct!=null&&(pi(),br(ct,null,y,w,!0),mi()),W!=null&&(C.renderCache[W]=void 0),_&256){C.ctx.deactivate(w);return}const pt=_&1&&k,ht=!Tr(w);let mt;if(ht&&(mt=K&&K.onVnodeBeforeUnmount)&&Fn(mt,C,w),_&6)gt(w.component,y,st);else{if(_&128){w.suspense.unmount(y,st);return}pt&&Wi(w,null,C,"beforeUnmount"),_&64?w.type.remove(w,C,y,et,st):S&&!S.hasOnce&&(q!==ge||D>0&&D&64)?wt(S,C,y,!1,!0):(q===ge&&D&384||!$&&_&16)&&wt(J,C,y),st&&Jt(w)}const Dt=Y!=null&&W==null;(ht&&(mt=K&&K.onVnodeUnmounted)||pt||Dt)&&Qe(()=>{mt&&Fn(mt,C,w),pt&&Wi(w,null,C,"unmounted"),Dt&&(w.el=null)},y)},Jt=w=>{const{type:C,el:y,anchor:st,transition:$}=w;if(C===ge){at(y,st);return}if(C===Io){x(w);return}const q=()=>{s(y),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:K,delayLeave:ct}=$,J=()=>K(y,q);ct?ct(w.el,q,J):J()}else q()},at=(w,C)=>{let y;for(;w!==C;)y=f(w),s(w),w=y;s(C)},gt=(w,C,y)=>{const{bum:st,scope:$,job:q,subTree:K,um:ct,m:J,a:S}=w;Ru(J),Ru(S),st&&Lo(st),$.stop(),q&&(q.flags|=8,Ut(K,w,C,y)),ct&&Qe(ct,C),Qe(()=>{w.isUnmounted=!0},C)},wt=(w,C,y,st=!1,$=!1,q=0)=>{for(let K=q;K<w.length;K++)Ut(w[K],C,y,st,$)},R=w=>{if(w.shapeFlag&6)return R(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const C=f(w.anchor||w.el),y=C&&C[Rm];return y?f(y):C};let X=!1;const lt=(w,C,y)=>{let st;w==null?C._vnode&&(Ut(C._vnode,null,null,!0),st=C._vnode.component):v(C._vnode||null,w,C,null,null,null,y),C._vnode=w,X||(X=!0,xu(st),Zf(),X=!1)},et={p:v,um:Ut,m:Ct,r:Jt,mt:it,mc:N,pc:G,pbc:T,n:R,o:n};return{render:lt,hydrate:void 0,createApp:Zm(lt)}}function Na({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Xi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function d_(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Md(n,t,e=!1){const i=n.children,s=t.children;if(Ft(i)&&Ft(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ri(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Md(o,a)),a.type===ya&&(a.patchFlag===-1&&(a=s[r]=ri(a)),a.el=o.el),a.type===gi&&!a.el&&(a.el=o.el)}}function p_(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Ed(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ed(t)}function Ru(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function bd(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?bd(t.subTree):null}const Td=n=>n.__isSuspense;function m_(n,t){t&&t.pendingBranch?Ft(n)?t.effects.push(...n):t.effects.push(n):Em(n)}const ge=Symbol.for("v-fgt"),ya=Symbol.for("v-txt"),gi=Symbol.for("v-cmt"),Io=Symbol.for("v-stc"),wr=[];let an=null;function Bt(n=!1){wr.push(an=n?null:[])}function __(){wr.pop(),an=wr[wr.length-1]||null}let Ur=1;function Pu(n,t=!1){Ur+=n,n<0&&an&&t&&(an.hasOnce=!0)}function Ad(n){return n.dynamicChildren=Ur>0?an||Vs:null,__(),Ur>0&&an&&an.push(n),n}function zt(n,t,e,i,s,r){return Ad(rt(n,t,e,i,s,r,!0))}function g_(n,t,e,i,s){return Ad(_e(n,t,e,i,s,!0))}function wd(n){return n?n.__v_isVNode===!0:!1}function zs(n,t){return n.type===t.type&&n.key===t.key}const Cd=({key:n})=>n??null,Uo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Se(n)||Ee(n)||Xt(n)?{i:Sn,r:n,k:t,f:!!e}:n:null);function rt(n,t=null,e=null,i=0,s=null,r=n===ge?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Cd(t),ref:t&&Uo(t),scopeId:Qf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Sn};return a?(kc(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Se(e)?8:16),Ur>0&&!o&&an&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&an.push(l),l}const _e=v_;function v_(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Gm)&&(n=gi),wd(n)){const a=us(n,t,!0);return e&&kc(a,e),Ur>0&&!r&&an&&(a.shapeFlag&6?an[an.indexOf(n)]=a:an.push(a)),a.patchFlag=-2,a}if(C_(n)&&(n=n.__vccOpts),t){t=x_(t);let{class:a,style:l}=t;a&&!Se(a)&&(t.class=we(a)),ue(l)&&(ma(l)&&!Ft(l)&&(l=Ce({},l)),t.style=fa(l))}const o=Se(n)?1:Td(n)?128:Pm(n)?64:ue(n)?4:Xt(n)?2:0;return rt(n,t,e,i,s,o,r,!0)}function x_(n){return n?ma(n)||_d(n)?Ce({},n):n:null}function us(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?S_(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Cd(c),ref:t&&t.ref?e&&r?Ft(r)?r.concat(Uo(t)):[r,Uo(t)]:Uo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==ge?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&us(n.ssContent),ssFallback:n.ssFallback&&us(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ir(u,l.clone(u)),u}function Rd(n=" ",t=0){return _e(ya,null,n,t)}function Pd(n,t){const e=_e(Io,null,n);return e.staticCount=t,e}function Ni(n="",t=!1){return t?(Bt(),g_(gi,null,n)):_e(gi,null,n)}function Gn(n){return n==null||typeof n=="boolean"?_e(gi):Ft(n)?_e(ge,null,n.slice()):wd(n)?ri(n):_e(ya,null,String(n))}function ri(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:us(n)}function kc(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ft(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),kc(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!_d(t)?t._ctx=Sn:s===3&&Sn&&(Sn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Xt(t)?(t={default:t,_ctx:Sn},e=32):(t=String(t),i&64?(e=16,t=[Rd(t)]):e=8);n.children=t,n.shapeFlag|=e}function S_(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=we([t.class,i.class]));else if(s==="style")t.style=fa([t.style,i.style]);else if(ra(s)){const r=t[s],o=i[s];o&&r!==o&&!(Ft(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!oa(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Fn(n,t,e,i=null){Mn(n,t,7,[e,i])}const y_=hd();let M_=0;function E_(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||y_,r={uid:M_++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Df(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vd(i,s),emitsOptions:fd(i,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:i.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Qm.bind(null,r),n.ce&&n.ce(r),r}let je=null;const Vc=()=>je||Sn;let jo,Ll;{const n=ha(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};jo=t("__VUE_INSTANCE_SETTERS__",e=>je=e),Ll=t("__VUE_SSR_SETTERS__",e=>Nr=e)}const Xr=n=>{const t=je;return jo(n),n.scope.on(),()=>{n.scope.off(),jo(t)}},Du=()=>{je&&je.scope.off(),jo(null)};function Dd(n){return n.vnode.shapeFlag&4}let Nr=!1;function b_(n,t=!1,e=!1){t&&Ll(t);const{props:i,children:s}=n.vnode,r=Dd(n);r_(n,i,r,t),c_(n,s,e||t);const o=r?T_(n,t):void 0;return t&&Ll(!1),o}function T_(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Wm);const{setup:i}=e;if(i){pi();const s=n.setupContext=i.length>1?w_(n):null,r=Xr(n),o=Wr(i,n,0,[n.props,s]),a=Ef(o);if(mi(),r(),(a||n.sp)&&!Tr(n)&&sd(n),a){if(o.then(Du,Du),t)return o.then(l=>{Lu(n,l)}).catch(l=>{_a(l,n,0)});n.asyncDep=o}else Lu(n,o)}else Ld(n)}function Lu(n,t,e){Xt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ue(t)&&(n.setupState=jf(t)),Ld(n)}function Ld(n,t,e){const i=n.type;n.render||(n.render=i.render||jn);{const s=Xr(n);pi();try{Xm(n)}finally{mi(),s()}}}const A_={get(n,t){return Ve(n,"get",""),n[t]}};function w_(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,A_),slots:n.slots,emit:n.emit,expose:t}}function Ma(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(jf(Oc(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Ar)return Ar[e](n)},has(t,e){return e in t||e in Ar}})):n.proxy}function C_(n){return Xt(n)&&"__vccOpts"in n}const hs=(n,t)=>vm(n,t,Nr),R_="3.5.38";/**
* @vue/runtime-dom v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Il;const Iu=typeof window<"u"&&window.trustedTypes;if(Iu)try{Il=Iu.createPolicy("vue",{createHTML:n=>n})}catch{}const Id=Il?n=>Il.createHTML(n):n=>n,P_="http://www.w3.org/2000/svg",D_="http://www.w3.org/1998/Math/MathML",si=typeof document<"u"?document:null,Uu=si&&si.createElement("template"),L_={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?si.createElementNS(P_,n):t==="mathml"?si.createElementNS(D_,n):e?si.createElement(n,{is:e}):si.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>si.createTextNode(n),createComment:n=>si.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>si.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Uu.innerHTML=Id(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Uu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},yi="transition",cr="animation",Zs=Symbol("_vtc"),Ud={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},I_=Ce({},Lm,Ud),$i=(n,t=[])=>{Ft(n)?n.forEach(e=>e(...t)):n&&n(...t)},Nu=n=>n?Ft(n)?n.some(t=>t.length>1):n.length>1:!1;function U_(n){const t={};for(const O in n)O in Ud||(t[O]=n[O]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${e}-leave-from`,leaveActiveClass:f=`${e}-leave-active`,leaveToClass:p=`${e}-leave-to`}=n,g=N_(s),v=g&&g[0],m=g&&g[1],{onBeforeEnter:d,onEnter:E,onEnterCancelled:M,onLeave:x,onLeaveCancelled:P,onBeforeAppear:U=d,onAppear:L=E,onAppearCancelled:N=M}=t,b=(O,V,it,ot)=>{O._enterCancelled=ot,Ri(O,V?u:a),Ri(O,V?c:o),it&&it()},T=(O,V)=>{O._isLeaving=!1,Ri(O,h),Ri(O,p),Ri(O,f),V&&V()},I=O=>(V,it)=>{const ot=O?L:E,j=()=>b(V,O,it);$i(ot,[V,j]),Fu(()=>{Ri(V,O?l:r),zn(V,O?u:a),Nu(ot)||Ou(V,i,v,j)})};return Ce(t,{onBeforeEnter(O){$i(d,[O]),zn(O,r),zn(O,o)},onBeforeAppear(O){$i(U,[O]),zn(O,l),zn(O,c)},onEnter:I(!1),onAppear:I(!0),onLeave(O,V){O._isLeaving=!0;const it=()=>T(O,V);zn(O,h),O._enterCancelled?(zn(O,f),Ul(O)):(Ul(O),zn(O,f)),Fu(()=>{O._isLeaving&&(Ri(O,h),zn(O,p),Nu(x)||Ou(O,i,m,it))}),$i(x,[O,it])},onEnterCancelled(O){b(O,!1,void 0,!0),$i(M,[O])},onAppearCancelled(O){b(O,!0,void 0,!0),$i(N,[O])},onLeaveCancelled(O){T(O),$i(P,[O])}})}function N_(n){if(n==null)return null;if(ue(n))return[Fa(n.enter),Fa(n.leave)];{const t=Fa(n);return[t,t]}}function Fa(n){return Fp(n)}function zn(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[Zs]||(n[Zs]=new Set)).add(t)}function Ri(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[Zs];e&&(e.delete(t),e.size||(n[Zs]=void 0))}function Fu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let F_=0;function Ou(n,t,e,i){const s=n._endId=++F_,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:o,timeout:a,propCount:l}=Nd(n,t);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=p=>{p.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function Nd(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),s=i(`${yi}Delay`),r=i(`${yi}Duration`),o=Bu(s,r),a=i(`${cr}Delay`),l=i(`${cr}Duration`),c=Bu(a,l);let u=null,h=0,f=0;t===yi?o>0&&(u=yi,h=o,f=r.length):t===cr?c>0&&(u=cr,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?yi:cr:null,f=u?u===yi?r.length:l.length:0);const p=u===yi&&/\b(?:transform|all)(?:,|$)/.test(i(`${yi}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:p}}function Bu(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>zu(e)+zu(n[i])))}function zu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Ul(n){return(n?n.ownerDocument:document).body.offsetHeight}function O_(n,t,e){const i=n[Zs];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const qo=Symbol("_vod"),Gc=Symbol("_vsh"),Mi={name:"show",beforeMount(n,{value:t},{transition:e}){n[qo]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):ur(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),ur(n,!0),i.enter(n)):i.leave(n,()=>{ur(n,!1)}):ur(n,t))},beforeUnmount(n,{value:t}){ur(n,t)}};function ur(n,t){n.style.display=t?n[qo]:"none",n[Gc]=!t}const B_=Symbol(""),z_=/(?:^|;)\s*display\s*:/;function H_(n,t,e){const i=n.style,s=Se(e);let r=!1;if(e&&!s){if(t)if(Se(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&gr(i,a,"")}else for(const o in t)e[o]==null&&gr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?V_(n,o,!Se(t)&&t?t[o]:void 0,a)||gr(i,o,a):gr(i,o,"")}}else if(s){if(t!==e){const o=i[B_];o&&(e+=";"+o),i.cssText=e,r=z_.test(e)}}else t&&n.removeAttribute("style");qo in n&&(n[qo]=r?i.display:"",n[Gc]&&(i.display="none"))}const Hu=/\s*!important$/;function gr(n,t,e){if(Ft(e))e.forEach(i=>gr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=k_(n,t);Hu.test(e)?n.setProperty(zi(i),e.replace(Hu,""),"important"):n[i]=e}}const ku=["Webkit","Moz","ms"],Oa={};function k_(n,t){const e=Oa[t];if(e)return e;let i=Dn(t);if(i!=="filter"&&i in n)return Oa[t]=i;i=Af(i);for(let s=0;s<ku.length;s++){const r=ku[s]+i;if(r in n)return Oa[t]=r}return t}function V_(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Se(i)&&e===i}const Vu="http://www.w3.org/1999/xlink";function Gu(n,t,e,i,s,r=Vp(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Vu,t.slice(6,t.length)):n.setAttributeNS(Vu,t,e):e==null||r&&!Cf(e)?n.removeAttribute(t):n.setAttribute(t,r?"":yn(e)?String(e):e)}function Wu(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Id(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Cf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function es(n,t,e,i){n.addEventListener(t,e,i)}function G_(n,t,e,i){n.removeEventListener(t,e,i)}const Xu=Symbol("_vei");function W_(n,t,e,i,s=null){const r=n[Xu]||(n[Xu]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=X_(t);if(i){const c=r[t]=j_(i,s);es(n,a,c,l)}else o&&(G_(n,a,o,l),r[t]=void 0)}}const $u=/(?:Once|Passive|Capture)$/;function X_(n){let t;if($u.test(n)){t={};let i;for(;i=n.match($u);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):zi(n.slice(2)),t]}let Ba=0;const $_=Promise.resolve(),Y_=()=>Ba||($_.then(()=>Ba=0),Ba=Date.now());function j_(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Ft(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Mn(c,t,5,a)}}else Mn(s,t,5,[i])};return e.value=n,e.attached=Y_(),e}const Yu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,q_=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?O_(n,i,o):t==="style"?H_(n,e,i):ra(t)?oa(t)||W_(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):K_(n,t,i,o))?(Wu(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Gu(n,t,i,o,r,t!=="value")):n._isVueCE&&(Z_(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Se(i)))?Wu(n,Dn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Gu(n,t,i,o))};function K_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Yu(t)&&Xt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Yu(t)&&Se(e)?!1:t in n}function Z_(n,t){const e=n._def.props;if(!e)return!1;const i=Dn(t);return Array.isArray(e)?e.some(s=>Dn(s)===i):Object.keys(e).some(s=>Dn(s)===i)}const Fd=new WeakMap,Od=new WeakMap,Ko=Symbol("_moveCb"),ju=Symbol("_enterCb"),J_=n=>(delete n.props.mode,n),Q_=J_({name:"TransitionGroup",props:Ce({},I_,{tag:String,moveClass:String}),setup(n,{slots:t}){const e=Vc(),i=Dm();let s,r;return ad(()=>{if(!s.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!sg(s[0].el,e.vnode.el,o)){s=[];return}s.forEach(eg),s.forEach(ng);const a=s.filter(ig);Ul(e.vnode.el),a.forEach(l=>{const c=l.el,u=c.style;zn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c[Ko]=f=>{f&&f.target!==c||(!f||f.propertyName.endsWith("transform"))&&(c.removeEventListener("transitionend",h),c[Ko]=null,Ri(c,o))};c.addEventListener("transitionend",h)}),s=[]}),()=>{const o=te(n),a=U_(o);let l=o.tag||ge;if(s=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&!u.el[Gc]&&(s.push(u),Ir(u,wl(u,a,i,e)),Fd.set(u,Bd(u.el)))}r=t.default?id(t.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Ir(u,wl(u,a,i,e))}return _e(l,null,r)}}}),tg=Q_;function eg(n){const t=n.el;t[Ko]&&t[Ko](),t[ju]&&t[ju]()}function ng(n){Od.set(n,Bd(n.el))}function ig(n){const t=Fd.get(n),e=Od.get(n),i=t.left-e.left,s=t.top-e.top;if(i||s){const r=n.el,o=r.style,a=r.getBoundingClientRect();let l=1,c=1;return r.offsetWidth&&(l=a.width/r.offsetWidth),r.offsetHeight&&(c=a.height/r.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(c)||c===0)&&(c=1),Math.abs(l-1)<.01&&(l=1),Math.abs(c-1)<.01&&(c=1),o.transform=o.webkitTransform=`translate(${i/l}px,${s/c}px)`,o.transitionDuration="0s",n}}function Bd(n){const t=n.getBoundingClientRect();return{left:t.left,top:t.top}}function sg(n,t,e){const i=n.cloneNode(),s=n[Zs];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),e.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(i);const{hasTransform:o}=Nd(i);return r.removeChild(i),o}const Zo=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Ft(t)?e=>Lo(t,e):t};function rg(n){n.target.composing=!0}function qu(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Xs=Symbol("_assign");function Ku(n,t,e){return t&&(n=n.trim()),e&&(n=ua(n)),n}const Nl={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n[Xs]=Zo(s);const r=i||s.props&&s.props.type==="number";es(n,t?"change":"input",o=>{o.target.composing||n[Xs](Ku(n.value,e,r))}),(e||r)&&es(n,"change",()=>{n.value=Ku(n.value,e,r)}),t||(es(n,"compositionstart",rg),es(n,"compositionend",qu),es(n,"change",qu))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Xs]=Zo(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?ua(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},og={deep:!0,created(n,{value:t,modifiers:{number:e}},i){const s=aa(t);es(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>e?ua(Jo(o)):Jo(o));n[Xs](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,ga(()=>{n._assigning=!1})}),n[Xs]=Zo(i)},mounted(n,{value:t}){Zu(n,t)},beforeUpdate(n,t,e){n[Xs]=Zo(e)},updated(n,{value:t}){n._assigning||Zu(n,t)}};function Zu(n,t){const e=n.multiple,i=Ft(t);if(!(e&&!i&&!aa(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Jo(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=Wp(t,a)>-1}else o.selected=t.has(a);else if(Gr(Jo(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Jo(n){return"_value"in n?n._value:n.value}const ag=["ctrl","shift","alt","meta"],lg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>ag.some(e=>n[`${e}Key`]&&!t.includes(e))},Fl=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((s,...r)=>{for(let o=0;o<t.length;o++){const a=lg[t[o]];if(a&&a(s,t))return}return n(s,...r)}))},cg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},za=(n,t)=>{const e=n._withKeys||(n._withKeys={}),i=t.join(".");return e[i]||(e[i]=(s=>{if(!("key"in s))return;const r=zi(s.key);if(t.some(o=>o===r||cg[o]===r))return n(s)}))},ug=Ce({patchProp:q_},L_);let Ju;function hg(){return Ju||(Ju=h_(ug))}const fg=((...n)=>{const t=hg().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=pg(i);if(!s)return;const r=t._component;!Xt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,dg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function dg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function pg(n){return Se(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let zd;const Ea=n=>zd=n,Hd=Symbol();function Ol(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Cr;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Cr||(Cr={}));function mg(){const n=Lf(!0),t=n.run(()=>ie({}));let e=[],i=[];const s=Oc({install(r){Ea(s),s._a=r,r.provide(Hd,s),r.config.globalProperties.$pinia=s,i.forEach(o=>e.push(o)),i=[]},use(r){return this._a?e.push(r):i.push(r),this},_p:e,_a:null,_e:n,_s:new Map,state:t});return s}const kd=()=>{};function Qu(n,t,e,i=kd){n.push(t);const s=()=>{const r=n.indexOf(t);r>-1&&(n.splice(r,1),i())};return!e&&If()&&Xp(s),s}function Es(n,...t){n.slice().forEach(e=>{e(...t)})}const _g=n=>n(),th=Symbol(),Ha=Symbol();function Bl(n,t){n instanceof Map&&t instanceof Map?t.forEach((e,i)=>n.set(i,e)):n instanceof Set&&t instanceof Set&&t.forEach(n.add,n);for(const e in t){if(!t.hasOwnProperty(e))continue;const i=t[e],s=n[e];Ol(s)&&Ol(i)&&n.hasOwnProperty(e)&&!Ee(i)&&!hi(i)?n[e]=Bl(s,i):n[e]=i}return n}const gg=Symbol();function vg(n){return!Ol(n)||!n.hasOwnProperty(gg)}const{assign:Pi}=Object;function xg(n){return!!(Ee(n)&&n.effect)}function Sg(n,t,e,i){const{state:s,actions:r,getters:o}=t,a=e.state.value[n];let l;function c(){a||(e.state.value[n]=s?s():{});const u=pm(e.state.value[n]);return Pi(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=Oc(hs(()=>{Ea(e);const p=e._s.get(n);return o[f].call(p,p)})),h),{}))}return l=Vd(n,c,t,e,i,!0),l}function Vd(n,t,e={},i,s,r){let o;const a=Pi({actions:{}},e),l={deep:!0};let c,u,h=[],f=[],p;const g=i.state.value[n];!r&&!g&&(i.state.value[n]={});let v;function m(N){let b;c=u=!1,typeof N=="function"?(N(i.state.value[n]),b={type:Cr.patchFunction,storeId:n,events:p}):(Bl(i.state.value[n],N),b={type:Cr.patchObject,payload:N,storeId:n,events:p});const T=v=Symbol();ga().then(()=>{v===T&&(c=!0)}),u=!0,Es(h,b,i.state.value[n])}const d=r?function(){const{state:b}=e,T=b?b():{};this.$patch(I=>{Pi(I,T)})}:kd;function E(){o.stop(),h=[],f=[],i._s.delete(n)}const M=(N,b="")=>{if(th in N)return N[Ha]=b,N;const T=function(){Ea(i);const I=Array.from(arguments),O=[],V=[];function it(tt){O.push(tt)}function ot(tt){V.push(tt)}Es(f,{args:I,name:T[Ha],store:P,after:it,onError:ot});let j;try{j=N.apply(this&&this.$id===n?this:P,I)}catch(tt){throw Es(V,tt),tt}return j instanceof Promise?j.then(tt=>(Es(O,tt),tt)).catch(tt=>(Es(V,tt),Promise.reject(tt))):(Es(O,j),j)};return T[th]=!0,T[Ha]=b,T},x={_p:i,$id:n,$onAction:Qu.bind(null,f),$patch:m,$reset:d,$subscribe(N,b={}){const T=Qu(h,N,b.detached,()=>I()),I=o.run(()=>en(()=>i.state.value[n],O=>{(b.flush==="sync"?u:c)&&N({storeId:n,type:Cr.direct,events:p},O)},Pi({},l,b)));return T},$dispose:E},P=pa(x);i._s.set(n,P);const L=(i._a&&i._a.runWithContext||_g)(()=>i._e.run(()=>(o=Lf()).run(()=>t({action:M}))));for(const N in L){const b=L[N];if(Ee(b)&&!xg(b)||hi(b))r||(g&&vg(b)&&(Ee(b)?b.value=g[N]:Bl(b,g[N])),i.state.value[n][N]=b);else if(typeof b=="function"){const T=M(b,N);L[N]=T,a.actions[N]=b}}return Pi(P,L),Pi(te(P),L),Object.defineProperty(P,"$state",{get:()=>i.state.value[n],set:N=>{m(b=>{Pi(b,N)})}}),i._p.forEach(N=>{Pi(P,o.run(()=>N({store:P,app:i._a,pinia:i,options:a})))}),g&&r&&e.hydrate&&e.hydrate(P.$state,g),c=!0,u=!0,P}/*! #__NO_SIDE_EFFECTS__ */function Wc(n,t,e){let i,s;const r=typeof t=="function";typeof n=="string"?(i=n,s=r?e:t):(s=n,i=n.id);function o(a,l){const c=Tm();return a=a||(c?Er(Hd,null):null),a&&Ea(a),a=zd,a._s.has(i)||(r?Vd(i,t,s,a):Sg(i,s,a)),a._s.get(i)}return o.$id=i,o}const Gd="/llmtocabinet",yg="/ws";function vn(n){return`${Gd}${n}`}function Mg(n){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${Gd}${yg}/${n}`}let zl=null;function Eg(n){zl=n}function Qr(n,t="info"){zl&&zl(n,t)}const gs=Wc("cabinet",()=>{const n=ie(null),t=ie(null),e=ie(new Set),i=ie(!1),s=ie(localStorage.getItem("lastProjectId")||"default"),r=hs(()=>!n.value||!t.value?null:a(n.value,t.value)),o=hs(()=>n.value?n.value.components.map(E=>({id:E.id,name:E.name,type:E.type})):[]);function a(E,M){for(const x of E.components){const P=l(x,M);if(P)return P}return null}function l(E,M){if(E.id===M)return E;for(const x of E.children){const P=l(x,M);if(P)return P}return null}function c(E){if(!n.value)return[];const M=[];for(const x of n.value.components)if(u(x,E,M))return M;return[]}function u(E,M,x){if(E.id===M)return!0;for(const P of E.children)if(u(P,M,x))return x.push(E.id),!0;return!1}function h(E){n.value=E}function f(E){t.value=E,E&&c(E).forEach(x=>e.value.add(x))}function p(E){e.value.has(E)?e.value.delete(E):e.value.add(E)}function g(E){return e.value.has(E)}function v(E){s.value=E}async function m(){try{const M=await(await fetch(vn(`/api/projects/${s.value}/undo`),{method:"POST"})).json();Qr(M.message||(M.success?"已撤销":"没有可撤销的操作"),M.success?"success":"warning"),M.success&&M.cabinet&&(n.value=M.cabinet)}catch(E){console.error("撤销失败:",E),Qr("撤销失败","error")}}async function d(){try{const M=await(await fetch(vn(`/api/projects/${s.value}/redo`),{method:"POST"})).json();Qr(M.message||(M.success?"已重做":"没有可重做的操作"),M.success?"success":"warning"),M.success&&M.cabinet&&(n.value=M.cabinet)}catch(E){console.error("重做失败:",E),Qr("重做失败","error")}}return{cabinet:n,selectedComponentId:t,selectedComponent:r,componentList:o,expandedIds:e,isLoading:i,currentProjectId:s,setCabinet:h,selectComponent:f,findParentIds:c,toggleExpand:p,isExpanded:g,setProjectId:v,undo:m,redo:d}});function bg(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"xxxx-xxxx-xxxx".replace(/x/g,()=>Math.floor(Math.random()*16).toString(16))}const Qo=Wc("chat",()=>{const n=ie([]),t=ie(!1),e=ie("");function i(l,c){n.value.push({id:bg(),role:l,content:c,timestamp:Date.now()})}function s(){t.value=!0,e.value=""}function r(l){e.value+=l}function o(){e.value&&i("assistant",e.value),t.value=!1,e.value=""}function a(){n.value=[],e.value="",t.value=!1}return{messages:n,isStreaming:t,currentStreamContent:e,addMessage:i,startStream:s,appendStreamContent:r,finishStream:o,clearMessages:a}});let Hl=null;function Tg(n){Hl=n}function oi(n,t="info"){Hl&&Hl(n,t)}const ir=Wc("websocket",()=>{const n=ie(!1),t=ie(0),e=ie(localStorage.getItem("lastProjectId")||"default"),i=ie(0);let s=null,r=0;function o(p){e.value=p,localStorage.setItem("lastProjectId",p),r++;const g=r;s&&(s.onclose=null,s.close(),s=null);const v=Mg(p);s=new WebSocket(v),s.onopen=()=>{g===r&&(n.value=!0,t.value=0,console.log(`WebSocket 已连接: ${p}`),oi("已连接到服务器","success"))},s.onmessage=m=>{if(g!==r)return;const d=JSON.parse(m.data);a(d)},s.onclose=()=>{g===r&&(n.value=!1,console.log(`WebSocket 已断开: ${p}`),oi("连接已断开，正在尝试重连...","warning"),t.value<5?(t.value++,setTimeout(()=>{g===r&&o(p)},2e3*t.value)):oi("重连失败，请刷新页面","error"))},s.onerror=m=>{console.error("WebSocket 错误:",m),oi("连接出现错误","error")}}function a(p){const g=gs(),v=Qo();switch(p.type){case"cabinet_update":p.cabinet&&g.setCabinet(p.cabinet);break;case"agent_thinking":p.content&&v.appendStreamContent(p.content);break;case"agent_response":p.content&&(v.finishStream(),v.addMessage("assistant",p.content));break;case"stream_end":v.finishStream();break;case"error":const m=p.message||"未知错误";v.addMessage("system",`错误: ${m}`),v.finishStream(),oi(m,"error");break}}function l(p){if(!s||s.readyState!==WebSocket.OPEN){oi("未连接到服务器，请稍后重试","warning");return}const g=Qo();g.addMessage("user",p),g.startStream(),s.send(JSON.stringify({type:"chat_message",text:p}))}function c(){!s||s.readyState!==WebSocket.OPEN||s.send(JSON.stringify({type:"request_sync"}))}function u(p){!s||s.readyState!==WebSocket.OPEN||s.send(JSON.stringify({type:"select_component",component_id:p}))}function h(){i.value++}function f(){r++,s&&(s.onclose=null,s.close(),s=null),n.value=!1,t.value=0}return{isConnected:n,reconnectAttempts:t,currentProjectId:e,schemeListVersion:i,connect:o,sendChatMessage:l,requestSync:c,selectComponent:u,refreshSchemeList:h,disconnect:f}}),Ag={class:"header-bar"},wg={class:"header-left"},Cg={class:"project-name"},Rg={class:"header-center"},Pg=["disabled"],Dg=["disabled"],Lg={class:"header-right"},Ig={class:"status-text"},Ug=Hi({__name:"HeaderBar",setup(n,{expose:t}){const e=ir(),i=gs(),s=hs(()=>{var f;return((f=i.cabinet)==null?void 0:f.name)||"标准柜"}),r=ie(!1),o=ie(!1);async function a(){if(!e.currentProjectId){r.value=!1,o.value=!1;return}try{const f=await fetch(vn(`/api/projects/${e.currentProjectId}/history`));if(f.ok){const p=await f.json();r.value=p.can_undo,o.value=p.can_redo}}catch{r.value=!1,o.value=!1}}function l(f){(f.ctrlKey||f.metaKey)&&(f.key==="z"&&!f.shiftKey?(f.preventDefault(),c()):(f.key==="y"||f.key==="z"&&f.shiftKey)&&(f.preventDefault(),u()))}_s(()=>{a(),window.addEventListener("keydown",l)}),xa(()=>{window.removeEventListener("keydown",l)}),en(()=>e.currentProjectId,()=>{a()}),en(()=>i.cabinet,()=>{a()},{deep:!0});function c(){i.undo()}function u(){i.redo()}async function h(){try{(await fetch(vn(`/api/projects/${e.currentProjectId}`),{method:"PUT"})).ok?(oi("保存成功","success"),e.refreshSchemeList()):oi("保存失败","error")}catch(f){console.error("保存方案失败:",f),oi("保存失败","error")}}return t({fetchHistoryStatus:a}),(f,p)=>(Bt(),zt("header",Ag,[rt("div",wg,[p[0]||(p[0]=rt("div",{class:"logo-wrapper"},[rt("h1",{class:"logo"},"Cabinet3D")],-1)),rt("span",Cg,Zt(s.value),1)]),rt("div",Rg,[rt("button",{class:"btn",onClick:c,disabled:!be(e).isConnected||!r.value,title:"撤销"},[...p[1]||(p[1]=[rt("span",{class:"btn-icon"},"↩",-1),rt("span",{class:"btn-label"},"撤销",-1)])],8,Pg),rt("button",{class:"btn",onClick:u,disabled:!be(e).isConnected||!o.value,title:"重做"},[...p[2]||(p[2]=[rt("span",{class:"btn-icon"},"↪",-1),rt("span",{class:"btn-label"},"重做",-1)])],8,Dg),rt("button",{class:"btn btn-save",onClick:h},[...p[3]||(p[3]=[rt("span",{class:"btn-icon"},"💾",-1),rt("span",{class:"btn-label"},"保存",-1)])])]),rt("div",Lg,[rt("span",{class:we(["status",{connected:be(e).isConnected}])},[p[4]||(p[4]=rt("span",{class:"status-dot"},null,-1)),rt("span",Ig,Zt(be(e).isConnected?"已连接":"未连接"),1)],2)])]))}}),vs=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},eh=vs(Ug,[["__scopeId","data-v-d3392a6f"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xc="175",$s={ROTATE:0,DOLLY:1,PAN:2},Hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ng=0,nh=1,Fg=2,Wd=1,Og=2,ii=3,Bi=0,nn=1,Xn=2,Fi=0,Ys=1,ih=2,sh=3,rh=4,Bg=5,ns=100,zg=101,Hg=102,kg=103,Vg=104,Gg=200,Wg=201,Xg=202,$g=203,kl=204,Vl=205,Yg=206,jg=207,qg=208,Kg=209,Zg=210,Jg=211,Qg=212,tv=213,ev=214,Gl=0,Wl=1,Xl=2,Js=3,$l=4,Yl=5,jl=6,ql=7,Xd=0,nv=1,iv=2,Oi=0,sv=1,rv=2,ov=3,av=4,lv=5,cv=6,uv=7,$d=300,Qs=301,tr=302,Kl=303,Zl=304,ba=306,Fr=1e3,rs=1001,Jl=1002,In=1003,hv=1004,to=1005,Yn=1006,ka=1007,os=1008,vi=1009,Yd=1010,jd=1011,Or=1012,$c=1013,fs=1014,ci=1015,$r=1016,Yc=1017,jc=1018,Br=1020,qd=35902,Kd=1021,Zd=1022,Pn=1023,Jd=1024,Qd=1025,zr=1026,Hr=1027,tp=1028,qc=1029,ep=1030,Kc=1031,Zc=1033,No=33776,Fo=33777,Oo=33778,Bo=33779,Ql=35840,tc=35841,ec=35842,nc=35843,ic=36196,sc=37492,rc=37496,oc=37808,ac=37809,lc=37810,cc=37811,uc=37812,hc=37813,fc=37814,dc=37815,pc=37816,mc=37817,_c=37818,gc=37819,vc=37820,xc=37821,zo=36492,Sc=36494,yc=36495,np=36283,Mc=36284,Ec=36285,bc=36286,fv=3200,dv=3201,ip=0,pv=1,Ii="",mn="srgb",er="srgb-linear",ta="linear",he="srgb",bs=7680,oh=519,mv=512,_v=513,gv=514,sp=515,vv=516,xv=517,Sv=518,yv=519,Tc=35044,ah="300 es",ui=2e3,ea=2001;class xs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lh=1234567;const js=Math.PI/180,kr=180/Math.PI;function fi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function qt(n,t,e){return Math.max(t,Math.min(e,n))}function Jc(n,t){return(n%t+t)%t}function Mv(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Ev(n,t,e){return n!==t?(e-n)/(t-n):0}function Rr(n,t,e){return(1-e)*n+e*t}function bv(n,t,e,i){return Rr(n,t,1-Math.exp(-e*i))}function Tv(n,t=1){return t-Math.abs(Jc(n,t*2)-t)}function Av(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function wv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Cv(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Rv(n,t){return n+Math.random()*(t-n)}function Pv(n){return n*(.5-Math.random())}function Dv(n){n!==void 0&&(lh=n);let t=lh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lv(n){return n*js}function Iv(n){return n*kr}function Uv(n){return(n&n-1)===0&&n!==0}function Nv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Fv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ov(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),f=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ce(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const is={DEG2RAD:js,RAD2DEG:kr,generateUUID:fi,clamp:qt,euclideanModulo:Jc,mapLinear:Mv,inverseLerp:Ev,lerp:Rr,damp:bv,pingpong:Tv,smoothstep:Av,smootherstep:wv,randInt:Cv,randFloat:Rv,randFloatSpread:Pv,seededRandom:Dv,degToRad:Lv,radToDeg:Iv,isPowerOfTwo:Uv,ceilPowerOfTwo:Nv,floorPowerOfTwo:Fv,setQuaternionFromProperEuler:Ov,normalize:ce,denormalize:Rn};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,i,s,r,o,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],v=s[0],m=s[3],d=s[6],E=s[1],M=s[4],x=s[7],P=s[2],U=s[5],L=s[8];return r[0]=o*v+a*E+l*P,r[3]=o*m+a*M+l*U,r[6]=o*d+a*x+l*L,r[1]=c*v+u*E+h*P,r[4]=c*m+u*M+h*U,r[7]=c*d+u*x+h*L,r[2]=f*v+p*E+g*P,r[5]=f*m+p*M+g*U,r[8]=f*d+p*x+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=e*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*c-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Va.makeScale(t,e)),this}rotate(t){return this.premultiply(Va.makeRotation(-t)),this}translate(t,e){return this.premultiply(Va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new Yt;function rp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bv(){const n=na("canvas");return n.style.display="block",n}const ch={};function Ho(n){n in ch||(ch[n]=!0,console.warn(n))}function zv(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Hv(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kv(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const uh=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hh=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vv(){const n={enabled:!0,workingColorSpace:er,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?ta:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[er]:{primaries:t,whitePoint:i,transfer:ta,toXYZ:uh,fromXYZ:hh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:t,whitePoint:i,transfer:he,toXYZ:uh,fromXYZ:hh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),n}const ne=Vv();function di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ts;class Gv{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ts===void 0&&(Ts=na("canvas")),Ts.width=t.width,Ts.height=t.height;const s=Ts.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ts}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=na("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(di(e[i]/255)*255):e[i]=di(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wv=0;class Qc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ga(s[o].image)):r.push(Ga(s[o]))}else r=Ga(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ga(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Gv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xv=0;class qe extends xs{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=rs,s=rs,r=Yn,o=os,a=Pn,l=vi,c=qe.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=fi(),this.name="",this.source=new Qc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$d)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fr:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case Jl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fr:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case Jl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=$d;qe.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,x=(p+1)/2,P=(d+1)/2,U=(u+f)/4,L=(h+v)/4,N=(g+m)/4;return M>x&&M>P?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=U/i,r=L/i):x>P?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=U/s,r=N/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=L/r,s=N/r),this.set(i,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-v)/E,this.z=(f-u)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $v extends xs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new qe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Qc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends $v{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class op extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yv extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ps{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==f||c!==p||u!==g){let m=1-a;const d=l*f+c*p+u*g+h*v,E=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const P=Math.sqrt(M),U=Math.atan2(P,d*E);m=Math.sin(m*U)/P,a=Math.sin(a*U)/P}const x=a*E;if(l=l*m+f*x,c=c*m+p*x,u=u*m+g*x,h=h*m+v*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-a*p,t[e+2]=c*g+u*p+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,i=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wa.copy(this).projectOnVector(t),this.sub(Wa)}reflect(t){return this.sub(Wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new B,fh=new ps;class ki{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),eo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),eo.copy(i.boundingBox)),eo.applyMatrix4(t.matrixWorld),this.union(eo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),no.subVectors(this.max,hr),As.subVectors(t.a,hr),ws.subVectors(t.b,hr),Cs.subVectors(t.c,hr),Ei.subVectors(ws,As),bi.subVectors(Cs,ws),Yi.subVectors(As,Cs);let e=[0,-Ei.z,Ei.y,0,-bi.z,bi.y,0,-Yi.z,Yi.y,Ei.z,0,-Ei.x,bi.z,0,-bi.x,Yi.z,0,-Yi.x,-Ei.y,Ei.x,0,-bi.y,bi.x,0,-Yi.y,Yi.x,0];return!Xa(e,As,ws,Cs,no)||(e=[1,0,0,0,1,0,0,0,1],!Xa(e,As,ws,Cs,no))?!1:(io.crossVectors(Ei,bi),e=[io.x,io.y,io.z],Xa(e,As,ws,Cs,no))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Jn=[new B,new B,new B,new B,new B,new B,new B,new B],An=new B,eo=new ki,As=new B,ws=new B,Cs=new B,Ei=new B,bi=new B,Yi=new B,hr=new B,no=new B,io=new B,ji=new B;function Xa(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ji.fromArray(n,r);const a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=t.dot(ji),c=e.dot(ji),u=i.dot(ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const jv=new ki,fr=new B,$a=new B;class sr{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):jv.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);const e=fr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(fr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add($a)),this.expandByPoint(fr.copy(t.center).sub($a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new B,Ya=new B,so=new B,Ti=new B,ja=new B,ro=new B,qa=new B;class Ta{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ya.copy(t).add(e).multiplyScalar(.5),so.copy(e).sub(t).normalize(),Ti.copy(this.origin).sub(Ya);const r=t.distanceTo(e)*.5,o=-this.direction.dot(so),a=Ti.dot(this.direction),l=-Ti.dot(so),c=Ti.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ya).addScaledVector(so,f),p}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const i=Qn.dot(this.direction),s=Qn.dot(Qn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,i,s,r){ja.subVectors(e,t),ro.subVectors(i,t),qa.crossVectors(ja,ro);let o=this.direction.dot(qa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,t);const l=a*this.direction.dot(ro.crossVectors(Ti,ro));if(l<0)return null;const c=a*this.direction.dot(ja.cross(Ti));if(c<0||l+c>o)return null;const u=-a*Ti.dot(qa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,i,s,r,o,a,l,c,u,h,f,p,g,v,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,p,g,v,m)}set(t,e,i,s,r,o,a,l,c,u,h,f,p,g,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),o=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,p=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,v=c*h;e[0]=f+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,v=c*h;e[0]=f-v*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+v,e[1]=l*h,e[5]=v*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=v-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-v*h}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+v,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qv,t,Kv)}lookAt(t,e,i){const s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Ai.crossVectors(i,rn),Ai.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Ai.crossVectors(i,rn)),Ai.normalize(),oo.crossVectors(rn,Ai),s[0]=Ai.x,s[4]=oo.x,s[8]=rn.x,s[1]=Ai.y,s[5]=oo.y,s[9]=rn.y,s[2]=Ai.z,s[6]=oo.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],E=i[3],M=i[7],x=i[11],P=i[15],U=s[0],L=s[4],N=s[8],b=s[12],T=s[1],I=s[5],O=s[9],V=s[13],it=s[2],ot=s[6],j=s[10],tt=s[14],G=s[3],vt=s[7],_t=s[11],Ct=s[15];return r[0]=o*U+a*T+l*it+c*G,r[4]=o*L+a*I+l*ot+c*vt,r[8]=o*N+a*O+l*j+c*_t,r[12]=o*b+a*V+l*tt+c*Ct,r[1]=u*U+h*T+f*it+p*G,r[5]=u*L+h*I+f*ot+p*vt,r[9]=u*N+h*O+f*j+p*_t,r[13]=u*b+h*V+f*tt+p*Ct,r[2]=g*U+v*T+m*it+d*G,r[6]=g*L+v*I+m*ot+d*vt,r[10]=g*N+v*O+m*j+d*_t,r[14]=g*b+v*V+m*tt+d*Ct,r[3]=E*U+M*T+x*it+P*G,r[7]=E*L+M*I+x*ot+P*vt,r[11]=E*N+M*O+x*j+P*_t,r[15]=E*b+M*V+x*tt+P*Ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],v=t[7],m=t[11],d=t[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*p-i*l*p)+v*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+e*c*h-e*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],v=t[13],m=t[14],d=t[15],E=h*m*c-v*f*c+v*l*p-a*m*p-h*l*d+a*f*d,M=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,x=u*v*c-g*h*c+g*a*p-o*v*p-u*a*d+o*h*d,P=g*h*l-u*v*l-g*a*f+o*v*f+u*a*m-o*h*m,U=e*E+i*M+s*x+r*P;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/U;return t[0]=E*L,t[1]=(v*f*r-h*m*r-v*s*p+i*m*p+h*s*d-i*f*d)*L,t[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*d+i*l*d)*L,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*p-i*l*p)*L,t[4]=M*L,t[5]=(u*m*r-g*f*r+g*s*p-e*m*p-u*s*d+e*f*d)*L,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*d-e*l*d)*L,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*p+e*l*p)*L,t[8]=x*L,t[9]=(g*h*r-u*v*r-g*i*p+e*v*p+u*i*d-e*h*d)*L,t[10]=(o*v*r-g*a*r+g*i*c-e*v*c-o*i*d+e*a*d)*L,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*p-e*a*p)*L,t[12]=P*L,t[13]=(u*v*s-g*h*s+g*i*f-e*v*f-u*i*m+e*h*m)*L,t[14]=(g*a*s-o*v*s-g*i*l+e*v*l+o*i*m-e*a*m)*L,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*L,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,v=o*u,m=o*h,d=a*h,E=l*c,M=l*u,x=l*h,P=i.x,U=i.y,L=i.z;return s[0]=(1-(v+d))*P,s[1]=(p+x)*P,s[2]=(g-M)*P,s[3]=0,s[4]=(p-x)*U,s[5]=(1-(f+d))*U,s[6]=(m+E)*U,s[7]=0,s[8]=(g+M)*L,s[9]=(m-E)*L,s[10]=(1-(f+v))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Rs.set(s[0],s[1],s[2]).length();const o=Rs.set(s[4],s[5],s[6]).length(),a=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],wn.copy(this);const c=1/r,u=1/o,h=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,e.setFromRotationMatrix(wn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=ui){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let p,g;if(a===ui)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ea)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ui){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,p=(i+s)*u;let g,v;if(a===ui)g=(o+r)*h,v=-2*h;else if(a===ea)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Rs=new B,wn=new ve,qv=new B(0,0,0),Kv=new B(1,1,1),Ai=new B,oo=new B,rn=new B,dh=new ve,ph=new ps;class qn{constructor(t=0,e=0,i=0,s=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return dh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ph.setFromEuler(this),this.setFromQuaternion(ph,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class tu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zv=0;const mh=new B,Ps=new ps,ti=new ve,ao=new B,dr=new B,Jv=new B,Qv=new ps,_h=new B(1,0,0),gh=new B(0,1,0),vh=new B(0,0,1),xh={type:"added"},t0={type:"removed"},Ds={type:"childadded",child:null},Ka={type:"childremoved",child:null};class Be extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new B,e=new qn,i=new ps,s=new B(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Yt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(_h,t)}rotateY(t){return this.rotateOnAxis(gh,t)}rotateZ(t){return this.rotateOnAxis(vh,t)}translateOnAxis(t,e){return mh.copy(t).applyQuaternion(this.quaternion),this.position.add(mh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_h,t)}translateY(t){return this.translateOnAxis(gh,t)}translateZ(t){return this.translateOnAxis(vh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ao.copy(t):ao.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(dr,ao,this.up):ti.lookAt(ao,dr,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(ti),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xh),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(t0),Ka.child=t,this.dispatchEvent(Ka),Ka.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xh),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,Jv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Qv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Be.DEFAULT_UP=new B(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new B,ei=new B,Za=new B,ni=new B,Ls=new B,Is=new B,Sh=new B,Ja=new B,Qa=new B,tl=new B,el=new pe,nl=new pe,il=new pe;class xn{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Cn.subVectors(t,e),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Cn.subVectors(s,e),ei.subVectors(i,e),Za.subVectors(t,e);const o=Cn.dot(Cn),a=Cn.dot(ei),l=Cn.dot(Za),c=ei.dot(ei),u=ei.dot(Za),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return el.setScalar(0),nl.setScalar(0),il.setScalar(0),el.fromBufferAttribute(t,e),nl.fromBufferAttribute(t,i),il.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(el,r.x),o.addScaledVector(nl,r.y),o.addScaledVector(il,r.z),o}static isFrontFacing(t,e,i,s){return Cn.subVectors(i,e),ei.subVectors(t,e),Cn.cross(ei).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Cn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return xn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ls.subVectors(s,i),Is.subVectors(r,i),Ja.subVectors(t,i);const l=Ls.dot(Ja),c=Is.dot(Ja);if(l<=0&&c<=0)return e.copy(i);Qa.subVectors(t,s);const u=Ls.dot(Qa),h=Is.dot(Qa);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ls,o);tl.subVectors(t,r);const p=Ls.dot(tl),g=Is.dot(tl);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Is,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Sh.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Sh,a);const d=1/(m+v+f);return o=v*d,a=f*d,e.copy(i).addScaledVector(Ls,o).addScaledVector(Is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},lo={h:0,s:0,l:0};function sl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=Jc(t,1),e=qt(e,0,1),i=qt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=sl(o,r,t+1/3),this.g=sl(o,r,t),this.b=sl(o,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=mn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const i=ap[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=qs(t.r),this.g=qs(t.g),this.b=qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return ne.fromWorkingColorSpace(ke.copy(this),t),Math.round(qt(ke.r*255,0,255))*65536+Math.round(qt(ke.g*255,0,255))*256+Math.round(qt(ke.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(ke.copy(this),e);const i=ke.r,s=ke.g,r=ke.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=mn){ne.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,i=ke.g,s=ke.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(lo);const i=Rr(wi.h,lo.h,e),s=Rr(wi.s,lo.s,e),r=Rr(wi.l,lo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Kt;Kt.NAMES=ap;let e0=0;class Ss extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Ys,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Vl,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kl&&(i.blendSrc=this.blendSrc),this.blendDst!==Vl&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class eu extends Ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new B,co=new kt;let n0=0;class Un{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Tc,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)co.fromBufferAttribute(this,e),co.applyMatrix3(t),this.setXY(e,co.x,co.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tc&&(t.usage=this.usage),t}}class lp extends Un{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class cp extends Un{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ke extends Un{constructor(t,e,i){super(new Float32Array(t),e,i)}}let i0=0;const dn=new ve,rl=new Be,Us=new B,on=new ki,pr=new ki,Ie=new B;class En extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rp(t)?cp:lp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,i){return dn.makeTranslation(t,e,i),this.applyMatrix4(dn),this}scale(t,e,i){return dn.makeScale(t,e,i),this.applyMatrix4(dn),this}lookAt(t){return rl.lookAt(t),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ke(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(on.min,pr.min),on.expandByPoint(Ie),Ie.addVectors(on.max,pr.max),on.expandByPoint(Ie)):(on.expandByPoint(pr.min),on.expandByPoint(pr.max))}on.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ie));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ie.fromBufferAttribute(a,c),l&&(Us.fromBufferAttribute(t,c),Ie.add(Us)),s=Math.max(s,i.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new B,l[N]=new B;const c=new B,u=new B,h=new B,f=new kt,p=new kt,g=new kt,v=new B,m=new B;function d(N,b,T){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,T),f.fromBufferAttribute(r,N),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,T),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[N].add(v),a[b].add(v),a[T].add(v),l[N].add(m),l[b].add(m),l[T].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let N=0,b=E.length;N<b;++N){const T=E[N],I=T.start,O=T.count;for(let V=I,it=I+O;V<it;V+=3)d(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const M=new B,x=new B,P=new B,U=new B;function L(N){P.fromBufferAttribute(s,N),U.copy(P);const b=a[N];M.copy(b),M.sub(P.multiplyScalar(P.dot(b))).normalize(),x.crossVectors(U,b);const I=x.dot(l[N])<0?-1:1;o.setXYZW(N,M.x,M.y,M.z,I)}for(let N=0,b=E.length;N<b;++N){const T=E[N],I=T.start,O=T.count;for(let V=I,it=I+O;V<it;V+=3)L(t.getX(V+0)),L(t.getX(V+1)),L(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Un(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new En,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yh=new ve,qi=new Ta,uo=new sr,Mh=new B,ho=new B,fo=new B,po=new B,ol=new B,mo=new B,Eh=new B,_o=new B;class ln extends Be{constructor(t=new En,e=new eu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ol.fromBufferAttribute(h,t),o?mo.addScaledVector(ol,u):mo.addScaledVector(ol.sub(e),u))}e.add(mo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(uo.containsPoint(qi.origin)===!1&&(qi.intersectSphere(uo,Mh)===null||qi.origin.distanceToSquared(Mh)>(t.far-t.near)**2))&&(yh.copy(r).invert(),qi.copy(t.ray).applyMatrix4(yh),!(i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=E,P=M;x<P;x+=3){const U=a.getX(x),L=a.getX(x+1),N=a.getX(x+2);s=go(this,d,t,i,c,u,h,U,L,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const E=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=go(this,o,t,i,c,u,h,E,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=E,P=M;x<P;x+=3){const U=x,L=x+1,N=x+2;s=go(this,d,t,i,c,u,h,U,L,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const E=m,M=m+1,x=m+2;s=go(this,o,t,i,c,u,h,E,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function s0(n,t,e,i,s,r,o,a){let l;if(t.side===nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Bi,a),l===null)return null;_o.copy(a),_o.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(_o);return c<e.near||c>e.far?null:{distance:c,point:_o.clone(),object:n}}function go(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ho),n.getVertexPosition(l,fo),n.getVertexPosition(c,po);const u=s0(n,t,e,i,ho,fo,po,Eh);if(u){const h=new B;xn.getBarycoord(Eh,ho,fo,po,h),s&&(u.uv=xn.getInterpolatedAttribute(s,a,l,c,h,new kt)),r&&(u.uv1=xn.getInterpolatedAttribute(r,a,l,c,h,new kt)),o&&(u.normal=xn.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new B,materialIndex:0};xn.getNormal(ho,fo,po,f.normal),u.face=f,u.barycoord=h}return u}class ms extends En{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(h,2));function g(v,m,d,E,M,x,P,U,L,N,b){const T=x/L,I=P/N,O=x/2,V=P/2,it=U/2,ot=L+1,j=N+1;let tt=0,G=0;const vt=new B;for(let _t=0;_t<j;_t++){const Ct=_t*I-V;for(let Ut=0;Ut<ot;Ut++){const Jt=Ut*T-O;vt[v]=Jt*E,vt[m]=Ct*M,vt[d]=it,c.push(vt.x,vt.y,vt.z),vt[v]=0,vt[m]=0,vt[d]=U>0?1:-1,u.push(vt.x,vt.y,vt.z),h.push(Ut/L),h.push(1-_t/N),tt+=1}}for(let _t=0;_t<N;_t++)for(let Ct=0;Ct<L;Ct++){const Ut=f+Ct+ot*_t,Jt=f+Ct+ot*(_t+1),at=f+(Ct+1)+ot*(_t+1),gt=f+(Ct+1)+ot*_t;l.push(Ut,Jt,gt),l.push(Jt,at,gt),G+=6}a.addGroup(p,G,b),p+=G,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function nr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function $e(n){const t={};for(let e=0;e<n.length;e++){const i=nr(n[e]);for(const s in i)t[s]=i[s]}return t}function r0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function up(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const nu={clone:nr,merge:$e};var o0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o0,this.fragmentShader=a0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=r0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class hp extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new B,bh=new kt,Th=new kt;class _n extends hp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,bh,Th),e.subVectors(Th,bh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(js*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ns=-90,Fs=1;class l0 extends Be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(Ns,Fs,t,e);s.layers=this.layers,this.add(s);const r=new _n(Ns,Fs,t,e);r.layers=this.layers,this.add(r);const o=new _n(Ns,Fs,t,e);o.layers=this.layers,this.add(o);const a=new _n(Ns,Fs,t,e);a.layers=this.layers,this.add(a);const l=new _n(Ns,Fs,t,e);l.layers=this.layers,this.add(l);const c=new _n(Ns,Fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ui)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class fp extends qe{constructor(t=[],e=Qs,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class c0 extends ds{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new fp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ms(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Fi});r.uniforms.tEquirect.value=e;const o=new ln(s,r),a=e.minFilter;return e.minFilter===os&&(e.minFilter=Yn),new l0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class vr extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u0={type:"move"};class al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new vr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class h0 extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class f0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Tc,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new B;class Ui{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Rn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Un(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ui(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ll=new B,d0=new B,p0=new Yt;class Li{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ll.subVectors(i,e).cross(d0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ll),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||p0.getNormalMatrix(t),s=this.coplanarPoint(ll).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new sr,vo=new B;class iu{constructor(t=new Li,e=new Li,i=new Li,s=new Li,r=new Li,o=new Li){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ui){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],E=s[13],M=s[14],x=s[15];if(i[0].setComponents(l-r,f-c,m-p,x-d).normalize(),i[1].setComponents(l+r,f+c,m+p,x+d).normalize(),i[2].setComponents(l+o,f+u,m+g,x+E).normalize(),i[3].setComponents(l-o,f-u,m-g,x-E).normalize(),i[4].setComponents(l-a,f-h,m-v,x-M).normalize(),e===ui)i[5].setComponents(l+a,f+h,m+v,x+M).normalize();else if(e===ea)i[5].setComponents(a,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(vo.x=s.normal.x>0?t.max.x:t.min.x,vo.y=s.normal.y>0?t.max.y:t.min.y,vo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class su extends Ss{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ia=new B,sa=new B,Ah=new ve,mr=new Ta,xo=new sr,cl=new B,wh=new B;class m0 extends Be{constructor(t=new En,e=new su){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ia.fromBufferAttribute(e,s-1),sa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ia.distanceTo(sa);t.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,t.ray.intersectsSphere(xo)===!1)return;Ah.copy(s).invert(),mr.copy(t.ray).applyMatrix4(Ah);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=u.getX(v),E=u.getX(v+1),M=So(this,t,mr,l,d,E,v);M&&e.push(M)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),d=So(this,t,mr,l,v,m,g-1);d&&e.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=So(this,t,mr,l,v,v+1,v);d&&e.push(d)}if(this.isLineLoop){const v=So(this,t,mr,l,g-1,p,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function So(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(ia.fromBufferAttribute(a,s),sa.fromBufferAttribute(a,r),e.distanceSqToSegment(ia,sa,cl,wh)>i)return;cl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(cl);if(!(c<t.near||c>t.far))return{distance:c,point:wh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Ch=new B,Rh=new B;class dp extends m0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ch.fromBufferAttribute(e,s),Rh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ch.distanceTo(Rh);t.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _0 extends qe{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pp extends qe{constructor(t,e,i=fs,s,r,o,a=In,l=In,c,u=zr){if(u!==zr&&u!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yo=new B,Mo=new B,ul=new B,Eo=new xn;class Ph extends En{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(js*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:d}=Eo;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),Eo.getNormal(ul),h[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let E=0;E<3;E++){const M=(E+1)%3,x=h[E],P=h[M],U=Eo[u[E]],L=Eo[u[M]],N=`${x}_${P}`,b=`${P}_${x}`;b in f&&f[b]?(ul.dot(f[b].normal)<=r&&(p.push(U.x,U.y,U.z),p.push(L.x,L.y,L.z)),f[b]=null):N in f||(f[N]={index0:c[E],index1:c[M],normal:ul.clone()})}}for(const g in f)if(f[g]){const{index0:v,index1:m}=f[g];yo.fromBufferAttribute(a,v),Mo.fromBufferAttribute(a,m),p.push(yo.x,yo.y,yo.z),p.push(Mo.x,Mo.y,Mo.z)}this.setAttribute("position",new Ke(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Yr extends En{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const E=d*f-o;for(let M=0;M<c;M++){const x=M*h-r;g.push(x,-E,0),v.push(0,0,1),m.push(M/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const M=E+c*d,x=E+c*(d+1),P=E+1+c*(d+1),U=E+1+c*d;p.push(M,x,U),p.push(x,P,U)}this.setIndex(p),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(v,3)),this.setAttribute("uv",new Ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.width,t.height,t.widthSegments,t.heightSegments)}}class g0 extends En{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,s=new B,r=new B;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],f=h.start,p=h.count;for(let g=f,v=f+p;g<v;g+=3)for(let m=0;m<3;m++){const d=a.getX(g+m),E=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,d),r.fromBufferAttribute(o,E),Dh(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Dh(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ke(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Dh(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}class v0 extends Ss{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Kt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class x0 extends Ss{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ip,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class S0 extends x0{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new kt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class y0 extends Ss{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class M0 extends Ss{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class mp extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const hl=new ve,Lh=new B,Ih=new B;class E0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new iu,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Lh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lh),Ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ih),e.updateMatrixWorld(),hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _p extends hp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class b0 extends E0{constructor(){super(new _p(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fl extends mp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new b0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class T0 extends mp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class A0 extends En{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class w0 extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Ac extends f0{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const Uh=new ve;class C0{constructor(t,e,i=0,s=1/0){this.ray=new Ta(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new tu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Uh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uh),this}intersectObject(t,e=!0,i=[]){return wc(t,this,i,e),i.sort(Nh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)wc(t[s],this,i,e);return i.sort(Nh),i}}function Nh(n,t){return n.distance-t.distance}function wc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)wc(r[o],t,e,!0)}}class Fh{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Oh=new B,bo=new B;class R0{constructor(t=new B,e=new B){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Oh.subVectors(t,this.start),bo.subVectors(this.end,this.start);const i=bo.dot(bo);let r=bo.dot(Oh)/i;return e&&(r=qt(r,0,1)),r}closestPointToPoint(t,e,i){const s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class P0 extends dp{constructor(t=10,e=10,i=4473924,s=8947848){i=new Kt(i),s=new Kt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,p=0,g=-a;f<=e;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=f===r?i:s;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const u=new En;u.setAttribute("position",new Ke(l,3)),u.setAttribute("color",new Ke(c,3));const h=new su({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class D0 extends xs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Bh(n,t,e,i){const s=L0(i);switch(e){case Kd:return n*t;case Jd:return n*t;case Qd:return n*t*2;case tp:return n*t/s.components*s.byteLength;case qc:return n*t/s.components*s.byteLength;case ep:return n*t*2/s.components*s.byteLength;case Kc:return n*t*2/s.components*s.byteLength;case Zd:return n*t*3/s.components*s.byteLength;case Pn:return n*t*4/s.components*s.byteLength;case Zc:return n*t*4/s.components*s.byteLength;case No:case Fo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Oo:case Bo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tc:case nc:return Math.max(n,16)*Math.max(t,8)/4;case Ql:case ec:return Math.max(n,8)*Math.max(t,8)/2;case ic:case sc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case rc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case oc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ac:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case lc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case cc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case uc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case hc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case dc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case pc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case mc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case _c:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case gc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case vc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case xc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case zo:case Sc:case yc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case np:case Mc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ec:case bc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function L0(n){switch(n){case vi:case Yd:return{byteLength:1,components:1};case Or:case jd:case $r:return{byteLength:2,components:1};case Yc:case jc:return{byteLength:2,components:4};case fs:case $c:case ci:return{byteLength:4,components:1};case qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function I0(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var U0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,F0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,k0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,G0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Y0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,j0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ix=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ax=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",hx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,px=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ax=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ix=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ox=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$x=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_S=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ES=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,US=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,HS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$S=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,JS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ty=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ey=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ny=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ry=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ay=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ly=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:U0,alphahash_pars_fragment:N0,alphamap_fragment:F0,alphamap_pars_fragment:O0,alphatest_fragment:B0,alphatest_pars_fragment:z0,aomap_fragment:H0,aomap_pars_fragment:k0,batching_pars_vertex:V0,batching_vertex:G0,begin_vertex:W0,beginnormal_vertex:X0,bsdfs:$0,iridescence_fragment:Y0,bumpmap_pars_fragment:j0,clipping_planes_fragment:q0,clipping_planes_pars_fragment:K0,clipping_planes_pars_vertex:Z0,clipping_planes_vertex:J0,color_fragment:Q0,color_pars_fragment:tx,color_pars_vertex:ex,color_vertex:nx,common:ix,cube_uv_reflection_fragment:sx,defaultnormal_vertex:rx,displacementmap_pars_vertex:ox,displacementmap_vertex:ax,emissivemap_fragment:lx,emissivemap_pars_fragment:cx,colorspace_fragment:ux,colorspace_pars_fragment:hx,envmap_fragment:fx,envmap_common_pars_fragment:dx,envmap_pars_fragment:px,envmap_pars_vertex:mx,envmap_physical_pars_fragment:Ax,envmap_vertex:_x,fog_vertex:gx,fog_pars_vertex:vx,fog_fragment:xx,fog_pars_fragment:Sx,gradientmap_pars_fragment:yx,lightmap_pars_fragment:Mx,lights_lambert_fragment:Ex,lights_lambert_pars_fragment:bx,lights_pars_begin:Tx,lights_toon_fragment:wx,lights_toon_pars_fragment:Cx,lights_phong_fragment:Rx,lights_phong_pars_fragment:Px,lights_physical_fragment:Dx,lights_physical_pars_fragment:Lx,lights_fragment_begin:Ix,lights_fragment_maps:Ux,lights_fragment_end:Nx,logdepthbuf_fragment:Fx,logdepthbuf_pars_fragment:Ox,logdepthbuf_pars_vertex:Bx,logdepthbuf_vertex:zx,map_fragment:Hx,map_pars_fragment:kx,map_particle_fragment:Vx,map_particle_pars_fragment:Gx,metalnessmap_fragment:Wx,metalnessmap_pars_fragment:Xx,morphinstance_vertex:$x,morphcolor_vertex:Yx,morphnormal_vertex:jx,morphtarget_pars_vertex:qx,morphtarget_vertex:Kx,normal_fragment_begin:Zx,normal_fragment_maps:Jx,normal_pars_fragment:Qx,normal_pars_vertex:tS,normal_vertex:eS,normalmap_pars_fragment:nS,clearcoat_normal_fragment_begin:iS,clearcoat_normal_fragment_maps:sS,clearcoat_pars_fragment:rS,iridescence_pars_fragment:oS,opaque_fragment:aS,packing:lS,premultiplied_alpha_fragment:cS,project_vertex:uS,dithering_fragment:hS,dithering_pars_fragment:fS,roughnessmap_fragment:dS,roughnessmap_pars_fragment:pS,shadowmap_pars_fragment:mS,shadowmap_pars_vertex:_S,shadowmap_vertex:gS,shadowmask_pars_fragment:vS,skinbase_vertex:xS,skinning_pars_vertex:SS,skinning_vertex:yS,skinnormal_vertex:MS,specularmap_fragment:ES,specularmap_pars_fragment:bS,tonemapping_fragment:TS,tonemapping_pars_fragment:AS,transmission_fragment:wS,transmission_pars_fragment:CS,uv_pars_fragment:RS,uv_pars_vertex:PS,uv_vertex:DS,worldpos_vertex:LS,background_vert:IS,background_frag:US,backgroundCube_vert:NS,backgroundCube_frag:FS,cube_vert:OS,cube_frag:BS,depth_vert:zS,depth_frag:HS,distanceRGBA_vert:kS,distanceRGBA_frag:VS,equirect_vert:GS,equirect_frag:WS,linedashed_vert:XS,linedashed_frag:$S,meshbasic_vert:YS,meshbasic_frag:jS,meshlambert_vert:qS,meshlambert_frag:KS,meshmatcap_vert:ZS,meshmatcap_frag:JS,meshnormal_vert:QS,meshnormal_frag:ty,meshphong_vert:ey,meshphong_frag:ny,meshphysical_vert:iy,meshphysical_frag:sy,meshtoon_vert:ry,meshtoon_frag:oy,points_vert:ay,points_frag:ly,shadow_vert:cy,shadow_frag:uy,sprite_vert:hy,sprite_frag:fy},xt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},tn={basic:{uniforms:$e([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:$e([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:$e([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:$e([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:$e([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:$e([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:$e([xt.points,xt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:$e([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:$e([xt.common,xt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:$e([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:$e([xt.sprite,xt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:$e([xt.common,xt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:$e([xt.lights,xt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};tn.physical={uniforms:$e([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const To={r:0,b:0,g:0},Zi=new qn,dy=new ve;function py(n,t,e,i,s,r,o){const a=new Kt(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function v(M){let x=!1;const P=g(M);P===null?d(a,l):P&&P.isColor&&(d(P,1),x=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,x){const P=g(x);P&&(P.isCubeTexture||P.mapping===ba)?(u===void 0&&(u=new ln(new ms(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:nr(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,L,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Zi.copy(x.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dy.makeRotationFromEuler(Zi)),u.material.toneMapped=ne.getTransfer(P.colorSpace)!==he,(h!==P||f!==P.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=P,f=P.version,p=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new ln(new Yr(2,2),new xi({name:"BackgroundMaterial",uniforms:nr(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ne.getTransfer(P.colorSpace)!==he,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||f!==P.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=P,f=P.version,p=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,x){M.getRGB(To,up(n)),i.buffers.color.setClear(To.r,To.g,To.b,x,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(a,l)},render:v,addToRenderList:m,dispose:E}}function my(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(T,I,O,V,it){let ot=!1;const j=h(V,O,I);r!==j&&(r=j,c(r.object)),ot=p(T,V,O,it),ot&&g(T,V,O,it),it!==null&&t.update(it,n.ELEMENT_ARRAY_BUFFER),(ot||o)&&(o=!1,x(T,I,O,V),it!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function h(T,I,O){const V=O.wireframe===!0;let it=i[T.id];it===void 0&&(it={},i[T.id]=it);let ot=it[I.id];ot===void 0&&(ot={},it[I.id]=ot);let j=ot[V];return j===void 0&&(j=f(l()),ot[V]=j),j}function f(T){const I=[],O=[],V=[];for(let it=0;it<e;it++)I[it]=0,O[it]=0,V[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:V,object:T,attributes:{},index:null}}function p(T,I,O,V){const it=r.attributes,ot=I.attributes;let j=0;const tt=O.getAttributes();for(const G in tt)if(tt[G].location>=0){const _t=it[G];let Ct=ot[G];if(Ct===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(Ct=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(Ct=T.instanceColor)),_t===void 0||_t.attribute!==Ct||Ct&&_t.data!==Ct.data)return!0;j++}return r.attributesNum!==j||r.index!==V}function g(T,I,O,V){const it={},ot=I.attributes;let j=0;const tt=O.getAttributes();for(const G in tt)if(tt[G].location>=0){let _t=ot[G];_t===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(_t=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(_t=T.instanceColor));const Ct={};Ct.attribute=_t,_t&&_t.data&&(Ct.data=_t.data),it[G]=Ct,j++}r.attributes=it,r.attributesNum=j,r.index=V}function v(){const T=r.newAttributes;for(let I=0,O=T.length;I<O;I++)T[I]=0}function m(T){d(T,0)}function d(T,I){const O=r.newAttributes,V=r.enabledAttributes,it=r.attributeDivisors;O[T]=1,V[T]===0&&(n.enableVertexAttribArray(T),V[T]=1),it[T]!==I&&(n.vertexAttribDivisor(T,I),it[T]=I)}function E(){const T=r.newAttributes,I=r.enabledAttributes;for(let O=0,V=I.length;O<V;O++)I[O]!==T[O]&&(n.disableVertexAttribArray(O),I[O]=0)}function M(T,I,O,V,it,ot,j){j===!0?n.vertexAttribIPointer(T,I,O,it,ot):n.vertexAttribPointer(T,I,O,V,it,ot)}function x(T,I,O,V){v();const it=V.attributes,ot=O.getAttributes(),j=I.defaultAttributeValues;for(const tt in ot){const G=ot[tt];if(G.location>=0){let vt=it[tt];if(vt===void 0&&(tt==="instanceMatrix"&&T.instanceMatrix&&(vt=T.instanceMatrix),tt==="instanceColor"&&T.instanceColor&&(vt=T.instanceColor)),vt!==void 0){const _t=vt.normalized,Ct=vt.itemSize,Ut=t.get(vt);if(Ut===void 0)continue;const Jt=Ut.buffer,at=Ut.type,gt=Ut.bytesPerElement,wt=at===n.INT||at===n.UNSIGNED_INT||vt.gpuType===$c;if(vt.isInterleavedBufferAttribute){const R=vt.data,X=R.stride,lt=vt.offset;if(R.isInstancedInterleavedBuffer){for(let et=0;et<G.locationSize;et++)d(G.location+et,R.meshPerAttribute);T.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let et=0;et<G.locationSize;et++)m(G.location+et);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let et=0;et<G.locationSize;et++)M(G.location+et,Ct/G.locationSize,at,_t,X*gt,(lt+Ct/G.locationSize*et)*gt,wt)}else{if(vt.isInstancedBufferAttribute){for(let R=0;R<G.locationSize;R++)d(G.location+R,vt.meshPerAttribute);T.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let R=0;R<G.locationSize;R++)m(G.location+R);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let R=0;R<G.locationSize;R++)M(G.location+R,Ct/G.locationSize,at,_t,Ct*gt,Ct/G.locationSize*R*gt,wt)}}else if(j!==void 0){const _t=j[tt];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(G.location,_t);break;case 3:n.vertexAttrib3fv(G.location,_t);break;case 4:n.vertexAttrib4fv(G.location,_t);break;default:n.vertexAttrib1fv(G.location,_t)}}}}E()}function P(){N();for(const T in i){const I=i[T];for(const O in I){const V=I[O];for(const it in V)u(V[it].object),delete V[it];delete I[O]}delete i[T]}}function U(T){if(i[T.id]===void 0)return;const I=i[T.id];for(const O in I){const V=I[O];for(const it in V)u(V[it].object),delete V[it];delete I[O]}delete i[T.id]}function L(T){for(const I in i){const O=i[I];if(O[T.id]===void 0)continue;const V=O[T.id];for(const it in V)u(V[it].object),delete V[it];delete O[T.id]}}function N(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:U,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function _y(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gy(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Pn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const N=L===$r&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==vi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ci&&!N)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,U=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:P,maxSamples:U}}function vy(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Li,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const E=r?0:i,M=E*4;let x=d.clippingState||null;l.value=x,x=u(g,f,M,p);for(let P=0;P!==M;++P)x[P]=e[P];d.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,x=p;M!==v;++M,x+=4)o.copy(h[M]).applyMatrix4(E,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function xy(n){let t=new WeakMap;function e(o,a){return a===Kl?o.mapping=Qs:a===Zl&&(o.mapping=tr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Kl||a===Zl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new c0(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const ks=4,zh=[.125,.215,.35,.446,.526,.582],ss=20,dl=new _p,Hh=new Kt;let pl=null,ml=0,_l=0,gl=!1;const ts=(1+Math.sqrt(5))/2,Os=1/ts,kh=[new B(-ts,Os,0),new B(ts,Os,0),new B(-Os,0,ts),new B(Os,0,ts),new B(0,ts,-Os),new B(0,ts,Os),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Sy=new B;class Vh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=Sy}=r;pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pl,ml,_l),this._renderer.xr.enabled=gl,t.scissorTest=!1,Ao(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qs||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:$r,format:Pn,colorSpace:er,depthBuffer:!1},s=Gh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yy(r)),this._blurMaterial=My(r,t,e)}return s}_compileMaterial(t){const e=new ln(this._lodPlanes[0],t);this._renderer.compile(e,dl)}_sceneToCubeUV(t,e,i,s,r){const l=new _n(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Hh),h.toneMapping=Oi,h.autoClear=!1;const g=new eu({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),v=new ln(new ms,g);let m=!1;const d=t.background;d?d.isColor&&(g.color.copy(d),t.background=null,m=!0):(g.color.copy(Hh),m=!0);for(let E=0;E<6;E++){const M=E%3;M===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):M===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const x=this._cubeSize;Ao(s,M*x,E>2?x:0,x,x),h.setRenderTarget(s),m&&h.render(v,l),h.render(t,l)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Qs||t.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ln(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ao(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,dl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=kh[(s-r-1)%kh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ln(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ss-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):ss;m>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);const d=[];let E=0;for(let L=0;L<ss;++L){const N=L/v,b=Math.exp(-N*N/2);d.push(b),L===0?E+=b:L<m&&(E+=2*b)}for(let L=0;L<d.length;L++)d[L]=d[L]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;const x=this._sizeLods[s],P=3*x*(s>M-ks?s-M+ks:0),U=4*(this._cubeSize-x);Ao(e,P,U,3*x,2*x),l.setRenderTarget(e),l.render(h,dl)}}function yy(n){const t=[],e=[],i=[];let s=n;const r=n-ks+1+zh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ks?l=zh[o-n+ks-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,E=new Float32Array(v*g*p),M=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let U=0;U<p;U++){const L=U%3*2/3-1,N=U>2?0:-1,b=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];E.set(b,v*g*U),M.set(f,m*g*U);const T=[U,U,U,U,U,U];x.set(T,d*g*U)}const P=new En;P.setAttribute("position",new Un(E,v)),P.setAttribute("uv",new Un(M,m)),P.setAttribute("faceIndex",new Un(x,d)),t.push(P),s>ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Gh(n,t,e){const i=new ds(n,t,e);return i.texture.mapping=ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ao(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function My(n,t,e){const i=new Float32Array(ss),s=new B(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Wh(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Xh(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ey(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Kl||l===Zl,u=l===Qs||l===tr;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Vh(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Vh(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function by(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ho("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ty(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)t.update(f[p],n.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const E=p.array;v=p.version;for(let M=0,x=E.length;M<x;M+=3){const P=E[M+0],U=E[M+1],L=E[M+2];f.push(P,U,U,L,L,P)}}else if(g!==void 0){const E=g.array;v=g.version;for(let M=0,x=E.length/3-1;M<x;M+=3){const P=M+0,U=M+1,L=M+2;f.push(P,U,U,L,L,P)}}else return;const m=new(rp(f)?cp:lp)(f,1);m.version=v;const d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ay(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),e.update(p,i,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function h(f,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,v,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*v[E];e.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function wy(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Cy(n,t,e){const i=new WeakMap,s=new pe;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let T=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var p=T;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let P=a.attributes.position.count*x,U=1;P>t.maxTextureSize&&(U=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const L=new Float32Array(P*U*4*h),N=new op(L,P,U,h);N.type=ci,N.needsUpdate=!0;const b=x*4;for(let I=0;I<h;I++){const O=d[I],V=E[I],it=M[I],ot=P*U*4*I;for(let j=0;j<O.count;j++){const tt=j*b;g===!0&&(s.fromBufferAttribute(O,j),L[ot+tt+0]=s.x,L[ot+tt+1]=s.y,L[ot+tt+2]=s.z,L[ot+tt+3]=0),v===!0&&(s.fromBufferAttribute(V,j),L[ot+tt+4]=s.x,L[ot+tt+5]=s.y,L[ot+tt+6]=s.z,L[ot+tt+7]=0),m===!0&&(s.fromBufferAttribute(it,j),L[ot+tt+8]=s.x,L[ot+tt+9]=s.y,L[ot+tt+10]=s.z,L[ot+tt+11]=it.itemSize===4?s.w:1)}}f={count:h,texture:N,size:new kt(P,U)},i.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Ry(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const vp=new qe,$h=new pp(1,1),xp=new op,Sp=new Yv,yp=new fp,Yh=[],jh=[],qh=new Float32Array(16),Kh=new Float32Array(9),Zh=new Float32Array(4);function rr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Yh[s];if(r===void 0&&(r=new Float32Array(s),Yh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function De(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Le(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Aa(n,t){let e=jh[t];e===void 0&&(e=new Int32Array(t),jh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Py(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Dy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2fv(this.addr,t),Le(e,t)}}function Ly(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;n.uniform3fv(this.addr,t),Le(e,t)}}function Iy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4fv(this.addr,t),Le(e,t)}}function Uy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;Zh.set(i),n.uniformMatrix2fv(this.addr,!1,Zh),Le(e,i)}}function Ny(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;Kh.set(i),n.uniformMatrix3fv(this.addr,!1,Kh),Le(e,i)}}function Fy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;qh.set(i),n.uniformMatrix4fv(this.addr,!1,qh),Le(e,i)}}function Oy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function By(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2iv(this.addr,t),Le(e,t)}}function zy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3iv(this.addr,t),Le(e,t)}}function Hy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4iv(this.addr,t),Le(e,t)}}function ky(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Vy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2uiv(this.addr,t),Le(e,t)}}function Gy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3uiv(this.addr,t),Le(e,t)}}function Wy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4uiv(this.addr,t),Le(e,t)}}function Xy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?($h.compareFunction=sp,r=$h):r=vp,e.setTexture2D(t||r,s)}function $y(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Sp,s)}function Yy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||yp,s)}function jy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||xp,s)}function qy(n){switch(n){case 5126:return Py;case 35664:return Dy;case 35665:return Ly;case 35666:return Iy;case 35674:return Uy;case 35675:return Ny;case 35676:return Fy;case 5124:case 35670:return Oy;case 35667:case 35671:return By;case 35668:case 35672:return zy;case 35669:case 35673:return Hy;case 5125:return ky;case 36294:return Vy;case 36295:return Gy;case 36296:return Wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Xy;case 35679:case 36299:case 36307:return $y;case 35680:case 36300:case 36308:case 36293:return Yy;case 36289:case 36303:case 36311:case 36292:return jy}}function Ky(n,t){n.uniform1fv(this.addr,t)}function Zy(n,t){const e=rr(t,this.size,2);n.uniform2fv(this.addr,e)}function Jy(n,t){const e=rr(t,this.size,3);n.uniform3fv(this.addr,e)}function Qy(n,t){const e=rr(t,this.size,4);n.uniform4fv(this.addr,e)}function tM(n,t){const e=rr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function eM(n,t){const e=rr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function nM(n,t){const e=rr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function iM(n,t){n.uniform1iv(this.addr,t)}function sM(n,t){n.uniform2iv(this.addr,t)}function rM(n,t){n.uniform3iv(this.addr,t)}function oM(n,t){n.uniform4iv(this.addr,t)}function aM(n,t){n.uniform1uiv(this.addr,t)}function lM(n,t){n.uniform2uiv(this.addr,t)}function cM(n,t){n.uniform3uiv(this.addr,t)}function uM(n,t){n.uniform4uiv(this.addr,t)}function hM(n,t,e){const i=this.cache,s=t.length,r=Aa(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||vp,r[o])}function fM(n,t,e){const i=this.cache,s=t.length,r=Aa(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Sp,r[o])}function dM(n,t,e){const i=this.cache,s=t.length,r=Aa(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||yp,r[o])}function pM(n,t,e){const i=this.cache,s=t.length,r=Aa(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||xp,r[o])}function mM(n){switch(n){case 5126:return Ky;case 35664:return Zy;case 35665:return Jy;case 35666:return Qy;case 35674:return tM;case 35675:return eM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return sM;case 35668:case 35672:return rM;case 35669:case 35673:return oM;case 5125:return aM;case 36294:return lM;case 36295:return cM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return hM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return dM;case 36289:case 36303:case 36311:case 36292:return pM}}class _M{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=qy(e.type)}}class gM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mM(e.type)}}class vM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const vl=/(\w+)(\])?(\[|\.)?/g;function Jh(n,t){n.seq.push(t),n.map[t.id]=t}function xM(n,t,e){const i=n.name,s=i.length;for(vl.lastIndex=0;;){const r=vl.exec(i),o=vl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Jh(e,c===void 0?new _M(a,n,t):new gM(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new vM(a),Jh(e,h)),e=h}}}class ko{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);xM(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Qh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const SM=37297;let yM=0;function MM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const tf=new Yt;function EM(n){ne._getMatrix(tf,ne.workingColorSpace,n);const t=`mat3( ${tf.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(n)){case ta:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ef(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+MM(n.getShaderSource(t),o)}else return s}function bM(n,t){const e=EM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function TM(n,t){let e;switch(t){case sv:e="Linear";break;case rv:e="Reinhard";break;case ov:e="Cineon";break;case av:e="ACESFilmic";break;case cv:e="AgX";break;case uv:e="Neutral";break;case lv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wo=new B;function AM(){ne.getLuminanceCoefficients(wo);const n=wo.x.toFixed(4),t=wo.y.toFixed(4),e=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function CM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function RM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function xr(n){return n!==""}function nf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const PM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(n){return n.replace(PM,LM)}const DM=new Map;function LM(n,t){let e=jt[t];if(e===void 0){const i=DM.get(t);if(i!==void 0)e=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Cc(e)}const IM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rf(n){return n.replace(IM,UM)}function UM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function of(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function NM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Og?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function FM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qs:case tr:t="ENVMAP_TYPE_CUBE";break;case ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function OM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case tr:t="ENVMAP_MODE_REFRACTION";break}return t}function BM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xd:t="ENVMAP_BLENDING_MULTIPLY";break;case nv:t="ENVMAP_BLENDING_MIX";break;case iv:t="ENVMAP_BLENDING_ADD";break}return t}function zM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function HM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=NM(e),c=FM(e),u=OM(e),h=BM(e),f=zM(e),p=wM(e),g=CM(r),v=s.createProgram();let m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),d.length>0&&(d+=`
`)):(m=[of(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),d=[of(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?jt.tonemapping_pars_fragment:"",e.toneMapping!==Oi?TM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,bM("linearToOutputTexel",e.outputColorSpace),AM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),o=Cc(o),o=nf(o,e),o=sf(o,e),a=Cc(a),a=nf(a,e),a=sf(a,e),o=rf(o),a=rf(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=E+m+o,x=E+d+a,P=Qh(s,s.VERTEX_SHADER,M),U=Qh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,P),s.attachShader(v,U),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(I){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(v).trim(),V=s.getShaderInfoLog(P).trim(),it=s.getShaderInfoLog(U).trim();let ot=!0,j=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ot=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,P,U);else{const tt=ef(s,P,"vertex"),G=ef(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+tt+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(V===""||it==="")&&(j=!1);j&&(I.diagnostics={runnable:ot,programLog:O,vertexShader:{log:V,prefix:m},fragmentShader:{log:it,prefix:d}})}s.deleteShader(P),s.deleteShader(U),N=new ko(s,v),b=RM(s,v)}let N;this.getUniforms=function(){return N===void 0&&L(this),N};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,SM)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yM++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=U,this}let kM=0;class VM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new GM(t),e.set(t,i)),i}}class GM{constructor(t){this.id=kM++,this.code=t,this.usedTimes=0}}function WM(n,t,e,i,s,r,o){const a=new tu,l=new VM,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,T,I,O,V){const it=O.fog,ot=V.geometry,j=b.isMeshStandardMaterial?O.environment:null,tt=(b.isMeshStandardMaterial?e:t).get(b.envMap||j),G=tt&&tt.mapping===ba?tt.image.height:null,vt=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const _t=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ct=_t!==void 0?_t.length:0;let Ut=0;ot.morphAttributes.position!==void 0&&(Ut=1),ot.morphAttributes.normal!==void 0&&(Ut=2),ot.morphAttributes.color!==void 0&&(Ut=3);let Jt,at,gt,wt;if(vt){const le=tn[vt];Jt=le.vertexShader,at=le.fragmentShader}else Jt=b.vertexShader,at=b.fragmentShader,l.update(b),gt=l.getVertexShaderID(b),wt=l.getFragmentShaderID(b);const R=n.getRenderTarget(),X=n.state.buffers.depth.getReversed(),lt=V.isInstancedMesh===!0,et=V.isBatchedMesh===!0,Tt=!!b.map,w=!!b.matcap,C=!!tt,y=!!b.aoMap,st=!!b.lightMap,$=!!b.bumpMap,q=!!b.normalMap,K=!!b.displacementMap,ct=!!b.emissiveMap,J=!!b.metalnessMap,S=!!b.roughnessMap,_=b.anisotropy>0,D=b.clearcoat>0,k=b.dispersion>0,W=b.iridescence>0,Y=b.sheen>0,pt=b.transmission>0,ht=_&&!!b.anisotropyMap,mt=D&&!!b.clearcoatMap,Dt=D&&!!b.clearcoatNormalMap,ft=D&&!!b.clearcoatRoughnessMap,yt=W&&!!b.iridescenceMap,Lt=W&&!!b.iridescenceThicknessMap,Ot=Y&&!!b.sheenColorMap,St=Y&&!!b.sheenRoughnessMap,Vt=!!b.specularMap,Wt=!!b.specularColorMap,ae=!!b.specularIntensityMap,F=pt&&!!b.transmissionMap,Et=pt&&!!b.thicknessMap,nt=!!b.gradientMap,ut=!!b.alphaMap,At=b.alphaTest>0,bt=!!b.alphaHash,$t=!!b.extensions;let ye=Oi;b.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ye=n.toneMapping);const ze={shaderID:vt,shaderType:b.type,shaderName:b.name,vertexShader:Jt,fragmentShader:at,defines:b.defines,customVertexShaderID:gt,customFragmentShaderID:wt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:et,batchingColor:et&&V._colorsTexture!==null,instancing:lt,instancingColor:lt&&V.instanceColor!==null,instancingMorph:lt&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:R===null?n.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:er,alphaToCoverage:!!b.alphaToCoverage,map:Tt,matcap:w,envMap:C,envMapMode:C&&tt.mapping,envMapCubeUVHeight:G,aoMap:y,lightMap:st,bumpMap:$,normalMap:q,displacementMap:f&&K,emissiveMap:ct,normalMapObjectSpace:q&&b.normalMapType===pv,normalMapTangentSpace:q&&b.normalMapType===ip,metalnessMap:J,roughnessMap:S,anisotropy:_,anisotropyMap:ht,clearcoat:D,clearcoatMap:mt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:ft,dispersion:k,iridescence:W,iridescenceMap:yt,iridescenceThicknessMap:Lt,sheen:Y,sheenColorMap:Ot,sheenRoughnessMap:St,specularMap:Vt,specularColorMap:Wt,specularIntensityMap:ae,transmission:pt,transmissionMap:F,thicknessMap:Et,gradientMap:nt,opaque:b.transparent===!1&&b.blending===Ys&&b.alphaToCoverage===!1,alphaMap:ut,alphaTest:At,alphaHash:bt,combine:b.combine,mapUv:Tt&&v(b.map.channel),aoMapUv:y&&v(b.aoMap.channel),lightMapUv:st&&v(b.lightMap.channel),bumpMapUv:$&&v(b.bumpMap.channel),normalMapUv:q&&v(b.normalMap.channel),displacementMapUv:K&&v(b.displacementMap.channel),emissiveMapUv:ct&&v(b.emissiveMap.channel),metalnessMapUv:J&&v(b.metalnessMap.channel),roughnessMapUv:S&&v(b.roughnessMap.channel),anisotropyMapUv:ht&&v(b.anisotropyMap.channel),clearcoatMapUv:mt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:St&&v(b.sheenRoughnessMap.channel),specularMapUv:Vt&&v(b.specularMap.channel),specularColorMapUv:Wt&&v(b.specularColorMap.channel),specularIntensityMapUv:ae&&v(b.specularIntensityMap.channel),transmissionMapUv:F&&v(b.transmissionMap.channel),thicknessMapUv:Et&&v(b.thicknessMap.channel),alphaMapUv:ut&&v(b.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(q||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ot.attributes.uv&&(Tt||ut),fog:!!it,useFog:b.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:X,skinning:V.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Ut,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ye,decodeVideoTexture:Tt&&b.map.isVideoTexture===!0&&ne.getTransfer(b.map.colorSpace)===he,decodeVideoTextureEmissive:ct&&b.emissiveMap.isVideoTexture===!0&&ne.getTransfer(b.emissiveMap.colorSpace)===he,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xn,flipSided:b.side===nn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:$t&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&b.extensions.multiDraw===!0||et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function d(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)T.push(I),T.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(E(T,b),M(T,b),T.push(n.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function E(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function M(b,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const T=g[b.type];let I;if(T){const O=tn[T];I=nu.clone(O.uniforms)}else I=b.uniforms;return I}function P(b,T){let I;for(let O=0,V=u.length;O<V;O++){const it=u[O];if(it.cacheKey===T){I=it,++I.usedTimes;break}}return I===void 0&&(I=new HM(n,T,b,r),u.push(I)),I}function U(b){if(--b.usedTimes===0){const T=u.indexOf(b);u[T]=u[u.length-1],u.pop(),b.destroy()}}function L(b){l.remove(b)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:P,releaseProgram:U,releaseShaderCache:L,programs:u,dispose:N}}function XM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function $M(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function af(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function lf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,p,g,v,m){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),t++,d}function a(h,f,p,g,v,m){const d=o(h,f,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(h,f,p,g,v,m){const d=o(h,f,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||$M),i.length>1&&i.sort(f||af),s.length>1&&s.sort(f||af)}function u(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function YM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new lf,n.set(i,[o])):s>=r.length?(o=new lf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function jM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Kt};break;case"SpotLight":e={position:new B,direction:new B,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[t.id]=e,e}}}function qM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let KM=0;function ZM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function JM(n){const t=new jM,e=qM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,r=new ve,o=new ve;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,E=0,M=0,x=0,P=0,U=0,L=0;c.sort(ZM);for(let b=0,T=c.length;b<T;b++){const I=c[b],O=I.color,V=I.intensity,it=I.distance,ot=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=O.r*V,h+=O.g*V,f+=O.b*V;else if(I.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(I.sh.coefficients[j],V);L++}else if(I.isDirectionalLight){const j=t.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const tt=I.shadow,G=e.get(I);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=ot,i.directionalShadowMatrix[p]=I.shadow.matrix,E++}i.directional[p]=j,p++}else if(I.isSpotLight){const j=t.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(O).multiplyScalar(V),j.distance=it,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,i.spot[v]=j;const tt=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,tt.updateMatrices(I),I.castShadow&&U++),i.spotLightMatrix[v]=tt.matrix,I.castShadow){const G=e.get(I);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=ot,x++}v++}else if(I.isRectAreaLight){const j=t.get(I);j.color.copy(O).multiplyScalar(V),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=j,m++}else if(I.isPointLight){const j=t.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),j.distance=I.distance,j.decay=I.decay,I.castShadow){const tt=I.shadow,G=e.get(I);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,G.shadowCameraNear=tt.camera.near,G.shadowCameraFar=tt.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=ot,i.pointShadowMatrix[g]=I.shadow.matrix,M++}i.point[g]=j,g++}else if(I.isHemisphereLight){const j=t.get(I);j.skyColor.copy(I.color).multiplyScalar(V),j.groundColor.copy(I.groundColor).multiplyScalar(V),i.hemi[d]=j,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==m||N.hemiLength!==d||N.numDirectionalShadows!==E||N.numPointShadows!==M||N.numSpotShadows!==x||N.numSpotMaps!==P||N.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+P-U,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=L,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=m,N.hemiLength=d,N.numDirectionalShadows=E,N.numPointShadows=M,N.numSpotShadows=x,N.numSpotMaps=P,N.numLightProbes=L,i.version=KM++)}function l(c,u){let h=0,f=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const M=c[d];if(M.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(M.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function cf(n){const t=new JM(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function QM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new cf(n),t.set(s,[a])):r>=o.length?(a=new cf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const tE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nE(n,t,e){let i=new iu;const s=new kt,r=new kt,o=new pe,a=new y0({depthPacking:dv}),l=new M0,c={},u=e.maxTextureSize,h={[Bi]:nn,[nn]:Bi,[Xn]:Xn},f=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:tE,fragmentShader:eE}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new En;g.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ln(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wd;let d=this.type;this.render=function(U,L,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||U.length===0)return;const b=n.getRenderTarget(),T=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Fi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const V=d!==ii&&this.type===ii,it=d===ii&&this.type!==ii;for(let ot=0,j=U.length;ot<j;ot++){const tt=U[ot],G=tt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const vt=G.getFrameExtents();if(s.multiply(vt),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/vt.x),s.x=r.x*vt.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/vt.y),s.y=r.y*vt.y,G.mapSize.y=r.y)),G.map===null||V===!0||it===!0){const Ct=this.type!==ii?{minFilter:In,magFilter:In}:{};G.map!==null&&G.map.dispose(),G.map=new ds(s.x,s.y,Ct),G.map.texture.name=tt.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const _t=G.getViewportCount();for(let Ct=0;Ct<_t;Ct++){const Ut=G.getViewport(Ct);o.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),O.viewport(o),G.updateMatrices(tt,Ct),i=G.getFrustum(),x(L,N,G.camera,tt,this.type)}G.isPointLightShadow!==!0&&this.type===ii&&E(G,N),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,T,I)};function E(U,L){const N=t.update(v);f.defines.VSM_SAMPLES!==U.blurSamples&&(f.defines.VSM_SAMPLES=U.blurSamples,p.defines.VSM_SAMPLES=U.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new ds(s.x,s.y)),f.uniforms.shadow_pass.value=U.map.texture,f.uniforms.resolution.value=U.mapSize,f.uniforms.radius.value=U.radius,n.setRenderTarget(U.mapPass),n.clear(),n.renderBufferDirect(L,null,N,f,v,null),p.uniforms.shadow_pass.value=U.mapPass.texture,p.uniforms.resolution.value=U.mapSize,p.uniforms.radius.value=U.radius,n.setRenderTarget(U.map),n.clear(),n.renderBufferDirect(L,null,N,p,v,null)}function M(U,L,N,b){let T=null;const I=N.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(I!==void 0)T=I;else if(T=N.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const O=T.uuid,V=L.uuid;let it=c[O];it===void 0&&(it={},c[O]=it);let ot=it[V];ot===void 0&&(ot=T.clone(),it[V]=ot,L.addEventListener("dispose",P)),T=ot}if(T.visible=L.visible,T.wireframe=L.wireframe,b===ii?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:h[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,N.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const O=n.properties.get(T);O.light=N}return T}function x(U,L,N,b,T){if(U.visible===!1)return;if(U.layers.test(L.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&T===ii)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,U.matrixWorld);const V=t.update(U),it=U.material;if(Array.isArray(it)){const ot=V.groups;for(let j=0,tt=ot.length;j<tt;j++){const G=ot[j],vt=it[G.materialIndex];if(vt&&vt.visible){const _t=M(U,vt,b,T);U.onBeforeShadow(n,U,L,N,V,_t,G),n.renderBufferDirect(N,null,V,_t,U,G),U.onAfterShadow(n,U,L,N,V,_t,G)}}}else if(it.visible){const ot=M(U,it,b,T);U.onBeforeShadow(n,U,L,N,V,ot,null),n.renderBufferDirect(N,null,V,ot,U,null),U.onAfterShadow(n,U,L,N,V,ot,null)}}const O=U.children;for(let V=0,it=O.length;V<it;V++)x(O[V],L,N,b,T)}function P(U){U.target.removeEventListener("dispose",P);for(const N in c){const b=c[N],T=U.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}const iE={[Gl]:Wl,[Xl]:jl,[$l]:ql,[Js]:Yl,[Wl]:Gl,[jl]:Xl,[ql]:$l,[Yl]:Js};function sE(n,t){function e(){let F=!1;const Et=new pe;let nt=null;const ut=new pe(0,0,0,0);return{setMask:function(At){nt!==At&&!F&&(n.colorMask(At,At,At,At),nt=At)},setLocked:function(At){F=At},setClear:function(At,bt,$t,ye,ze){ze===!0&&(At*=ye,bt*=ye,$t*=ye),Et.set(At,bt,$t,ye),ut.equals(Et)===!1&&(n.clearColor(At,bt,$t,ye),ut.copy(Et))},reset:function(){F=!1,nt=null,ut.set(-1,0,0,0)}}}function i(){let F=!1,Et=!1,nt=null,ut=null,At=null;return{setReversed:function(bt){if(Et!==bt){const $t=t.get("EXT_clip_control");bt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Et=bt;const ye=At;At=null,this.setClear(ye)}},getReversed:function(){return Et},setTest:function(bt){bt?R(n.DEPTH_TEST):X(n.DEPTH_TEST)},setMask:function(bt){nt!==bt&&!F&&(n.depthMask(bt),nt=bt)},setFunc:function(bt){if(Et&&(bt=iE[bt]),ut!==bt){switch(bt){case Gl:n.depthFunc(n.NEVER);break;case Wl:n.depthFunc(n.ALWAYS);break;case Xl:n.depthFunc(n.LESS);break;case Js:n.depthFunc(n.LEQUAL);break;case $l:n.depthFunc(n.EQUAL);break;case Yl:n.depthFunc(n.GEQUAL);break;case jl:n.depthFunc(n.GREATER);break;case ql:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ut=bt}},setLocked:function(bt){F=bt},setClear:function(bt){At!==bt&&(Et&&(bt=1-bt),n.clearDepth(bt),At=bt)},reset:function(){F=!1,nt=null,ut=null,At=null,Et=!1}}}function s(){let F=!1,Et=null,nt=null,ut=null,At=null,bt=null,$t=null,ye=null,ze=null;return{setTest:function(le){F||(le?R(n.STENCIL_TEST):X(n.STENCIL_TEST))},setMask:function(le){Et!==le&&!F&&(n.stencilMask(le),Et=le)},setFunc:function(le,bn,Kn){(nt!==le||ut!==bn||At!==Kn)&&(n.stencilFunc(le,bn,Kn),nt=le,ut=bn,At=Kn)},setOp:function(le,bn,Kn){(bt!==le||$t!==bn||ye!==Kn)&&(n.stencilOp(le,bn,Kn),bt=le,$t=bn,ye=Kn)},setLocked:function(le){F=le},setClear:function(le){ze!==le&&(n.clearStencil(le),ze=le)},reset:function(){F=!1,Et=null,nt=null,ut=null,At=null,bt=null,$t=null,ye=null,ze=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,E=null,M=null,x=null,P=null,U=null,L=new Kt(0,0,0),N=0,b=!1,T=null,I=null,O=null,V=null,it=null;const ot=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,tt=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(G)[1]),j=tt>=1):G.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),j=tt>=2);let vt=null,_t={};const Ct=n.getParameter(n.SCISSOR_BOX),Ut=n.getParameter(n.VIEWPORT),Jt=new pe().fromArray(Ct),at=new pe().fromArray(Ut);function gt(F,Et,nt,ut){const At=new Uint8Array(4),bt=n.createTexture();n.bindTexture(F,bt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $t=0;$t<nt;$t++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Et,0,n.RGBA,1,1,ut,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(Et+$t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return bt}const wt={};wt[n.TEXTURE_2D]=gt(n.TEXTURE_2D,n.TEXTURE_2D,1),wt[n.TEXTURE_CUBE_MAP]=gt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[n.TEXTURE_2D_ARRAY]=gt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),wt[n.TEXTURE_3D]=gt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),R(n.DEPTH_TEST),o.setFunc(Js),$(!1),q(nh),R(n.CULL_FACE),y(Fi);function R(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function X(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function lt(F,Et){return h[F]!==Et?(n.bindFramebuffer(F,Et),h[F]=Et,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Et),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Et),!0):!1}function et(F,Et){let nt=p,ut=!1;if(F){nt=f.get(Et),nt===void 0&&(nt=[],f.set(Et,nt));const At=F.textures;if(nt.length!==At.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let bt=0,$t=At.length;bt<$t;bt++)nt[bt]=n.COLOR_ATTACHMENT0+bt;nt.length=At.length,ut=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,ut=!0);ut&&n.drawBuffers(nt)}function Tt(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const w={[ns]:n.FUNC_ADD,[zg]:n.FUNC_SUBTRACT,[Hg]:n.FUNC_REVERSE_SUBTRACT};w[kg]=n.MIN,w[Vg]=n.MAX;const C={[Gg]:n.ZERO,[Wg]:n.ONE,[Xg]:n.SRC_COLOR,[kl]:n.SRC_ALPHA,[Zg]:n.SRC_ALPHA_SATURATE,[qg]:n.DST_COLOR,[Yg]:n.DST_ALPHA,[$g]:n.ONE_MINUS_SRC_COLOR,[Vl]:n.ONE_MINUS_SRC_ALPHA,[Kg]:n.ONE_MINUS_DST_COLOR,[jg]:n.ONE_MINUS_DST_ALPHA,[Jg]:n.CONSTANT_COLOR,[Qg]:n.ONE_MINUS_CONSTANT_COLOR,[tv]:n.CONSTANT_ALPHA,[ev]:n.ONE_MINUS_CONSTANT_ALPHA};function y(F,Et,nt,ut,At,bt,$t,ye,ze,le){if(F===Fi){v===!0&&(X(n.BLEND),v=!1);return}if(v===!1&&(R(n.BLEND),v=!0),F!==Bg){if(F!==m||le!==b){if((d!==ns||x!==ns)&&(n.blendEquation(n.FUNC_ADD),d=ns,x=ns),le)switch(F){case Ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ih:n.blendFunc(n.ONE,n.ONE);break;case sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ih:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,M=null,P=null,U=null,L.set(0,0,0),N=0,m=F,b=le}return}At=At||Et,bt=bt||nt,$t=$t||ut,(Et!==d||At!==x)&&(n.blendEquationSeparate(w[Et],w[At]),d=Et,x=At),(nt!==E||ut!==M||bt!==P||$t!==U)&&(n.blendFuncSeparate(C[nt],C[ut],C[bt],C[$t]),E=nt,M=ut,P=bt,U=$t),(ye.equals(L)===!1||ze!==N)&&(n.blendColor(ye.r,ye.g,ye.b,ze),L.copy(ye),N=ze),m=F,b=!1}function st(F,Et){F.side===Xn?X(n.CULL_FACE):R(n.CULL_FACE);let nt=F.side===nn;Et&&(nt=!nt),$(nt),F.blending===Ys&&F.transparent===!1?y(Fi):y(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const ut=F.stencilWrite;a.setTest(ut),ut&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ct(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?R(n.SAMPLE_ALPHA_TO_COVERAGE):X(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(F){T!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),T=F)}function q(F){F!==Ng?(R(n.CULL_FACE),F!==I&&(F===nh?n.cullFace(n.BACK):F===Fg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):X(n.CULL_FACE),I=F}function K(F){F!==O&&(j&&n.lineWidth(F),O=F)}function ct(F,Et,nt){F?(R(n.POLYGON_OFFSET_FILL),(V!==Et||it!==nt)&&(n.polygonOffset(Et,nt),V=Et,it=nt)):X(n.POLYGON_OFFSET_FILL)}function J(F){F?R(n.SCISSOR_TEST):X(n.SCISSOR_TEST)}function S(F){F===void 0&&(F=n.TEXTURE0+ot-1),vt!==F&&(n.activeTexture(F),vt=F)}function _(F,Et,nt){nt===void 0&&(vt===null?nt=n.TEXTURE0+ot-1:nt=vt);let ut=_t[nt];ut===void 0&&(ut={type:void 0,texture:void 0},_t[nt]=ut),(ut.type!==F||ut.texture!==Et)&&(vt!==nt&&(n.activeTexture(nt),vt=nt),n.bindTexture(F,Et||wt[F]),ut.type=F,ut.texture=Et)}function D(){const F=_t[vt];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function k(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ot(F){Jt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Jt.copy(F))}function St(F){at.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),at.copy(F))}function Vt(F,Et){let nt=c.get(Et);nt===void 0&&(nt=new WeakMap,c.set(Et,nt));let ut=nt.get(F);ut===void 0&&(ut=n.getUniformBlockIndex(Et,F.name),nt.set(F,ut))}function Wt(F,Et){const ut=c.get(Et).get(F);l.get(Et)!==ut&&(n.uniformBlockBinding(Et,ut,F.__bindingPointIndex),l.set(Et,ut))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},vt=null,_t={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,E=null,M=null,x=null,P=null,U=null,L=new Kt(0,0,0),N=0,b=!1,T=null,I=null,O=null,V=null,it=null,Jt.set(0,0,n.canvas.width,n.canvas.height),at.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:R,disable:X,bindFramebuffer:lt,drawBuffers:et,useProgram:Tt,setBlending:y,setMaterial:st,setFlipSided:$,setCullFace:q,setLineWidth:K,setPolygonOffset:ct,setScissorTest:J,activeTexture:S,bindTexture:_,unbindTexture:D,compressedTexImage2D:k,compressedTexImage3D:W,texImage2D:yt,texImage3D:Lt,updateUBOMapping:Vt,uniformBlockBinding:Wt,texStorage2D:Dt,texStorage3D:ft,texSubImage2D:Y,texSubImage3D:pt,compressedTexSubImage2D:ht,compressedTexSubImage3D:mt,scissor:Ot,viewport:St,reset:ae}}function rE(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return p?new OffscreenCanvas(S,_):na("canvas")}function v(S,_,D){let k=1;const W=J(S);if((W.width>D||W.height>D)&&(k=D/Math.max(W.width,W.height)),k<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const Y=Math.floor(k*W.width),pt=Math.floor(k*W.height);h===void 0&&(h=g(Y,pt));const ht=_?g(Y,pt):h;return ht.width=Y,ht.height=pt,ht.getContext("2d").drawImage(S,0,0,Y,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+Y+"x"+pt+")."),ht}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),S;return S}function m(S){return S.generateMipmaps}function d(S){n.generateMipmap(S)}function E(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(S,_,D,k,W=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Y=_;if(_===n.RED&&(D===n.FLOAT&&(Y=n.R32F),D===n.HALF_FLOAT&&(Y=n.R16F),D===n.UNSIGNED_BYTE&&(Y=n.R8)),_===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.R8UI),D===n.UNSIGNED_SHORT&&(Y=n.R16UI),D===n.UNSIGNED_INT&&(Y=n.R32UI),D===n.BYTE&&(Y=n.R8I),D===n.SHORT&&(Y=n.R16I),D===n.INT&&(Y=n.R32I)),_===n.RG&&(D===n.FLOAT&&(Y=n.RG32F),D===n.HALF_FLOAT&&(Y=n.RG16F),D===n.UNSIGNED_BYTE&&(Y=n.RG8)),_===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RG8UI),D===n.UNSIGNED_SHORT&&(Y=n.RG16UI),D===n.UNSIGNED_INT&&(Y=n.RG32UI),D===n.BYTE&&(Y=n.RG8I),D===n.SHORT&&(Y=n.RG16I),D===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),D===n.UNSIGNED_INT&&(Y=n.RGB32UI),D===n.BYTE&&(Y=n.RGB8I),D===n.SHORT&&(Y=n.RGB16I),D===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),D===n.UNSIGNED_INT&&(Y=n.RGBA32UI),D===n.BYTE&&(Y=n.RGBA8I),D===n.SHORT&&(Y=n.RGBA16I),D===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),_===n.RGBA){const pt=W?ta:ne.getTransfer(k);D===n.FLOAT&&(Y=n.RGBA32F),D===n.HALF_FLOAT&&(Y=n.RGBA16F),D===n.UNSIGNED_BYTE&&(Y=pt===he?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(S,_){let D;return S?_===null||_===fs||_===Br?D=n.DEPTH24_STENCIL8:_===ci?D=n.DEPTH32F_STENCIL8:_===Or&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===fs||_===Br?D=n.DEPTH_COMPONENT24:_===ci?D=n.DEPTH_COMPONENT32F:_===Or&&(D=n.DEPTH_COMPONENT16),D}function P(S,_){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==In&&S.minFilter!==Yn?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function U(S){const _=S.target;_.removeEventListener("dispose",U),N(_),_.isVideoTexture&&u.delete(_)}function L(S){const _=S.target;_.removeEventListener("dispose",L),T(_)}function N(S){const _=i.get(S);if(_.__webglInit===void 0)return;const D=S.source,k=f.get(D);if(k){const W=k[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&b(S),Object.keys(k).length===0&&f.delete(D)}i.remove(S)}function b(S){const _=i.get(S);n.deleteTexture(_.__webglTexture);const D=S.source,k=f.get(D);delete k[_.__cacheKey],o.memory.textures--}function T(S){const _=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let W=0;W<_.__webglFramebuffer[k].length;W++)n.deleteFramebuffer(_.__webglFramebuffer[k][W]);else n.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)n.deleteFramebuffer(_.__webglFramebuffer[k]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=S.textures;for(let k=0,W=D.length;k<W;k++){const Y=i.get(D[k]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(D[k])}i.remove(S)}let I=0;function O(){I=0}function V(){const S=I;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),I+=1,S}function it(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function ot(S,_){const D=i.get(S);if(S.isVideoTexture&&K(S),S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){const k=S.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(D,S,_);return}}e.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+_)}function j(S,_){const D=i.get(S);if(S.version>0&&D.__version!==S.version){at(D,S,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+_)}function tt(S,_){const D=i.get(S);if(S.version>0&&D.__version!==S.version){at(D,S,_);return}e.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+_)}function G(S,_){const D=i.get(S);if(S.version>0&&D.__version!==S.version){gt(D,S,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+_)}const vt={[Fr]:n.REPEAT,[rs]:n.CLAMP_TO_EDGE,[Jl]:n.MIRRORED_REPEAT},_t={[In]:n.NEAREST,[hv]:n.NEAREST_MIPMAP_NEAREST,[to]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[ka]:n.LINEAR_MIPMAP_NEAREST,[os]:n.LINEAR_MIPMAP_LINEAR},Ct={[mv]:n.NEVER,[yv]:n.ALWAYS,[_v]:n.LESS,[sp]:n.LEQUAL,[gv]:n.EQUAL,[Sv]:n.GEQUAL,[vv]:n.GREATER,[xv]:n.NOTEQUAL};function Ut(S,_){if(_.type===ci&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Yn||_.magFilter===ka||_.magFilter===to||_.magFilter===os||_.minFilter===Yn||_.minFilter===ka||_.minFilter===to||_.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,vt[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,vt[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,vt[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,_t[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,_t[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Ct[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===In||_.minFilter!==to&&_.minFilter!==os||_.type===ci&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Jt(S,_){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",U));const k=_.source;let W=f.get(k);W===void 0&&(W={},f.set(k,W));const Y=it(_);if(Y!==S.__cacheKey){W[Y]===void 0&&(W[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),W[Y].usedTimes++;const pt=W[S.__cacheKey];pt!==void 0&&(W[S.__cacheKey].usedTimes--,pt.usedTimes===0&&b(_)),S.__cacheKey=Y,S.__webglTexture=W[Y].texture}return D}function at(S,_,D){let k=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=n.TEXTURE_3D);const W=Jt(S,_),Y=_.source;e.bindTexture(k,S.__webglTexture,n.TEXTURE0+D);const pt=i.get(Y);if(Y.version!==pt.__version||W===!0){e.activeTexture(n.TEXTURE0+D);const ht=ne.getPrimaries(ne.workingColorSpace),mt=_.colorSpace===Ii?null:ne.getPrimaries(_.colorSpace),Dt=_.colorSpace===Ii||ht===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let ft=v(_.image,!1,s.maxTextureSize);ft=ct(_,ft);const yt=r.convert(_.format,_.colorSpace),Lt=r.convert(_.type);let Ot=M(_.internalFormat,yt,Lt,_.colorSpace,_.isVideoTexture);Ut(k,_);let St;const Vt=_.mipmaps,Wt=_.isVideoTexture!==!0,ae=pt.__version===void 0||W===!0,F=Y.dataReady,Et=P(_,ft);if(_.isDepthTexture)Ot=x(_.format===Hr,_.type),ae&&(Wt?e.texStorage2D(n.TEXTURE_2D,1,Ot,ft.width,ft.height):e.texImage2D(n.TEXTURE_2D,0,Ot,ft.width,ft.height,0,yt,Lt,null));else if(_.isDataTexture)if(Vt.length>0){Wt&&ae&&e.texStorage2D(n.TEXTURE_2D,Et,Ot,Vt[0].width,Vt[0].height);for(let nt=0,ut=Vt.length;nt<ut;nt++)St=Vt[nt],Wt?F&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,St.width,St.height,yt,Lt,St.data):e.texImage2D(n.TEXTURE_2D,nt,Ot,St.width,St.height,0,yt,Lt,St.data);_.generateMipmaps=!1}else Wt?(ae&&e.texStorage2D(n.TEXTURE_2D,Et,Ot,ft.width,ft.height),F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft.width,ft.height,yt,Lt,ft.data)):e.texImage2D(n.TEXTURE_2D,0,Ot,ft.width,ft.height,0,yt,Lt,ft.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Wt&&ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Ot,Vt[0].width,Vt[0].height,ft.depth);for(let nt=0,ut=Vt.length;nt<ut;nt++)if(St=Vt[nt],_.format!==Pn)if(yt!==null)if(Wt){if(F)if(_.layerUpdates.size>0){const At=Bh(St.width,St.height,_.format,_.type);for(const bt of _.layerUpdates){const $t=St.data.subarray(bt*At/St.data.BYTES_PER_ELEMENT,(bt+1)*At/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,bt,St.width,St.height,1,yt,$t)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,St.width,St.height,ft.depth,yt,St.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,Ot,St.width,St.height,ft.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,St.width,St.height,ft.depth,yt,Lt,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,Ot,St.width,St.height,ft.depth,0,yt,Lt,St.data)}else{Wt&&ae&&e.texStorage2D(n.TEXTURE_2D,Et,Ot,Vt[0].width,Vt[0].height);for(let nt=0,ut=Vt.length;nt<ut;nt++)St=Vt[nt],_.format!==Pn?yt!==null?Wt?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,St.width,St.height,yt,St.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,Ot,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?F&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,St.width,St.height,yt,Lt,St.data):e.texImage2D(n.TEXTURE_2D,nt,Ot,St.width,St.height,0,yt,Lt,St.data)}else if(_.isDataArrayTexture)if(Wt){if(ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Ot,ft.width,ft.height,ft.depth),F)if(_.layerUpdates.size>0){const nt=Bh(ft.width,ft.height,_.format,_.type);for(const ut of _.layerUpdates){const At=ft.data.subarray(ut*nt/ft.data.BYTES_PER_ELEMENT,(ut+1)*nt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ut,ft.width,ft.height,1,yt,Lt,At)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,yt,Lt,ft.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,ft.width,ft.height,ft.depth,0,yt,Lt,ft.data);else if(_.isData3DTexture)Wt?(ae&&e.texStorage3D(n.TEXTURE_3D,Et,Ot,ft.width,ft.height,ft.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,yt,Lt,ft.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,ft.width,ft.height,ft.depth,0,yt,Lt,ft.data);else if(_.isFramebufferTexture){if(ae)if(Wt)e.texStorage2D(n.TEXTURE_2D,Et,Ot,ft.width,ft.height);else{let nt=ft.width,ut=ft.height;for(let At=0;At<Et;At++)e.texImage2D(n.TEXTURE_2D,At,Ot,nt,ut,0,yt,Lt,null),nt>>=1,ut>>=1}}else if(Vt.length>0){if(Wt&&ae){const nt=J(Vt[0]);e.texStorage2D(n.TEXTURE_2D,Et,Ot,nt.width,nt.height)}for(let nt=0,ut=Vt.length;nt<ut;nt++)St=Vt[nt],Wt?F&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,yt,Lt,St):e.texImage2D(n.TEXTURE_2D,nt,Ot,yt,Lt,St);_.generateMipmaps=!1}else if(Wt){if(ae){const nt=J(ft);e.texStorage2D(n.TEXTURE_2D,Et,Ot,nt.width,nt.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt,Lt,ft)}else e.texImage2D(n.TEXTURE_2D,0,Ot,yt,Lt,ft);m(_)&&d(k),pt.__version=Y.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function gt(S,_,D){if(_.image.length!==6)return;const k=Jt(S,_),W=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+D);const Y=i.get(W);if(W.version!==Y.__version||k===!0){e.activeTexture(n.TEXTURE0+D);const pt=ne.getPrimaries(ne.workingColorSpace),ht=_.colorSpace===Ii?null:ne.getPrimaries(_.colorSpace),mt=_.colorSpace===Ii||pt===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Dt=_.isCompressedTexture||_.image[0].isCompressedTexture,ft=_.image[0]&&_.image[0].isDataTexture,yt=[];for(let ut=0;ut<6;ut++)!Dt&&!ft?yt[ut]=v(_.image[ut],!0,s.maxCubemapSize):yt[ut]=ft?_.image[ut].image:_.image[ut],yt[ut]=ct(_,yt[ut]);const Lt=yt[0],Ot=r.convert(_.format,_.colorSpace),St=r.convert(_.type),Vt=M(_.internalFormat,Ot,St,_.colorSpace),Wt=_.isVideoTexture!==!0,ae=Y.__version===void 0||k===!0,F=W.dataReady;let Et=P(_,Lt);Ut(n.TEXTURE_CUBE_MAP,_);let nt;if(Dt){Wt&&ae&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,Vt,Lt.width,Lt.height);for(let ut=0;ut<6;ut++){nt=yt[ut].mipmaps;for(let At=0;At<nt.length;At++){const bt=nt[At];_.format!==Pn?Ot!==null?Wt?F&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At,0,0,bt.width,bt.height,Ot,bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At,Vt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At,0,0,bt.width,bt.height,Ot,St,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At,Vt,bt.width,bt.height,0,Ot,St,bt.data)}}}else{if(nt=_.mipmaps,Wt&&ae){nt.length>0&&Et++;const ut=J(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,Vt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(ft){Wt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,yt[ut].width,yt[ut].height,Ot,St,yt[ut].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Vt,yt[ut].width,yt[ut].height,0,Ot,St,yt[ut].data);for(let At=0;At<nt.length;At++){const $t=nt[At].image[ut].image;Wt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At+1,0,0,$t.width,$t.height,Ot,St,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At+1,Vt,$t.width,$t.height,0,Ot,St,$t.data)}}else{Wt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Ot,St,yt[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Vt,Ot,St,yt[ut]);for(let At=0;At<nt.length;At++){const bt=nt[At];Wt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At+1,0,0,Ot,St,bt.image[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At+1,Vt,Ot,St,bt.image[ut])}}}m(_)&&d(n.TEXTURE_CUBE_MAP),Y.__version=W.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function wt(S,_,D,k,W,Y){const pt=r.convert(D.format,D.colorSpace),ht=r.convert(D.type),mt=M(D.internalFormat,pt,ht,D.colorSpace),Dt=i.get(_),ft=i.get(D);if(ft.__renderTarget=_,!Dt.__hasExternalTextures){const yt=Math.max(1,_.width>>Y),Lt=Math.max(1,_.height>>Y);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?e.texImage3D(W,Y,mt,yt,Lt,_.depth,0,pt,ht,null):e.texImage2D(W,Y,mt,yt,Lt,0,pt,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),q(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,W,ft.__webglTexture,0,$(_)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,W,ft.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function R(S,_,D){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){const k=_.depthTexture,W=k&&k.isDepthTexture?k.type:null,Y=x(_.stencilBuffer,W),pt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=$(_);q(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,Y,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,S)}else{const k=_.textures;for(let W=0;W<k.length;W++){const Y=k[W],pt=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),mt=M(Y.internalFormat,pt,ht,Y.colorSpace),Dt=$(_);D&&q(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,mt,_.width,_.height):q(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Dt,mt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,mt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function X(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(_.depthTexture);k.__renderTarget=_,(!k.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ot(_.depthTexture,0);const W=k.__webglTexture,Y=$(_);if(_.depthTexture.format===zr)q(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(_.depthTexture.format===Hr)q(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function lt(S){const _=i.get(S),D=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const k=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){const W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",W)};k.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=k}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");X(_.__webglFramebuffer,S)}else if(D){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=n.createRenderbuffer(),R(_.__webglDepthbuffer[k],S,!1);else{const W=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),R(_.__webglDepthbuffer,S,!1);else{const k=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,W)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function et(S,_,D){const k=i.get(S);_!==void 0&&wt(k.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&lt(S)}function Tt(S){const _=S.texture,D=i.get(S),k=i.get(_);S.addEventListener("dispose",L);const W=S.textures,Y=S.isWebGLCubeRenderTarget===!0,pt=W.length>1;if(pt||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=_.version,o.memory.textures++),Y){D.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[ht]=[];for(let mt=0;mt<_.mipmaps.length;mt++)D.__webglFramebuffer[ht][mt]=n.createFramebuffer()}else D.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let ht=0;ht<_.mipmaps.length;ht++)D.__webglFramebuffer[ht]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(pt)for(let ht=0,mt=W.length;ht<mt;ht++){const Dt=i.get(W[ht]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&q(S)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ht=0;ht<W.length;ht++){const mt=W[ht];D.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ht]);const Dt=r.convert(mt.format,mt.colorSpace),ft=r.convert(mt.type),yt=M(mt.internalFormat,Dt,ft,mt.colorSpace,S.isXRRenderTarget===!0),Lt=$(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,yt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,D.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),R(D.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Ut(n.TEXTURE_CUBE_MAP,_);for(let ht=0;ht<6;ht++)if(_.mipmaps&&_.mipmaps.length>0)for(let mt=0;mt<_.mipmaps.length;mt++)wt(D.__webglFramebuffer[ht][mt],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,mt);else wt(D.__webglFramebuffer[ht],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(_)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let ht=0,mt=W.length;ht<mt;ht++){const Dt=W[ht],ft=i.get(Dt);e.bindTexture(n.TEXTURE_2D,ft.__webglTexture),Ut(n.TEXTURE_2D,Dt),wt(D.__webglFramebuffer,S,Dt,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),m(Dt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ht=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,k.__webglTexture),Ut(ht,_),_.mipmaps&&_.mipmaps.length>0)for(let mt=0;mt<_.mipmaps.length;mt++)wt(D.__webglFramebuffer[mt],S,_,n.COLOR_ATTACHMENT0,ht,mt);else wt(D.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,ht,0);m(_)&&d(ht),e.unbindTexture()}S.depthBuffer&&lt(S)}function w(S){const _=S.textures;for(let D=0,k=_.length;D<k;D++){const W=_[D];if(m(W)){const Y=E(S),pt=i.get(W).__webglTexture;e.bindTexture(Y,pt),d(Y),e.unbindTexture()}}}const C=[],y=[];function st(S){if(S.samples>0){if(q(S)===!1){const _=S.textures,D=S.width,k=S.height;let W=n.COLOR_BUFFER_BIT;const Y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=i.get(S),ht=_.length>1;if(ht)for(let mt=0;mt<_.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let mt=0;mt<_.length;mt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pt.__webglColorRenderbuffer[mt]);const Dt=i.get(_[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Dt,0)}n.blitFramebuffer(0,0,D,k,0,0,D,k,W,n.NEAREST),l===!0&&(C.length=0,y.length=0,C.push(n.COLOR_ATTACHMENT0+mt),S.depthBuffer&&S.resolveDepthBuffer===!1&&(C.push(Y),y.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let mt=0;mt<_.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,pt.__webglColorRenderbuffer[mt]);const Dt=i.get(_[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,Dt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function $(S){return Math.min(s.maxSamples,S.samples)}function q(S){const _=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function K(S){const _=o.render.frame;u.get(S)!==_&&(u.set(S,_),S.update())}function ct(S,_){const D=S.colorSpace,k=S.format,W=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||D!==er&&D!==Ii&&(ne.getTransfer(D)===he?(k!==Pn||W!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}function J(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=O,this.setTexture2D=ot,this.setTexture2DArray=j,this.setTexture3D=tt,this.setTextureCube=G,this.rebindTextures=et,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=q}function oE(n,t){function e(i,s=Ii){let r;const o=ne.getTransfer(s);if(i===vi)return n.UNSIGNED_BYTE;if(i===Yc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yd)return n.BYTE;if(i===jd)return n.SHORT;if(i===Or)return n.UNSIGNED_SHORT;if(i===$c)return n.INT;if(i===fs)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===$r)return n.HALF_FLOAT;if(i===Kd)return n.ALPHA;if(i===Zd)return n.RGB;if(i===Pn)return n.RGBA;if(i===Jd)return n.LUMINANCE;if(i===Qd)return n.LUMINANCE_ALPHA;if(i===zr)return n.DEPTH_COMPONENT;if(i===Hr)return n.DEPTH_STENCIL;if(i===tp)return n.RED;if(i===qc)return n.RED_INTEGER;if(i===ep)return n.RG;if(i===Kc)return n.RG_INTEGER;if(i===Zc)return n.RGBA_INTEGER;if(i===No||i===Fo||i===Oo||i===Bo)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ql||i===tc||i===ec||i===nc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ic||i===sc||i===rc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ic||i===sc)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===rc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===oc||i===ac||i===lc||i===cc||i===uc||i===hc||i===fc||i===dc||i===pc||i===mc||i===_c||i===gc||i===vc||i===xc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===oc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ac)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_c)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zo||i===Sc||i===yc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===zo)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===np||i===Mc||i===Ec||i===bc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===zo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const aE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new xi({vertexShader:aE,fragmentShader:lE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ln(new Yr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uE extends xs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const v=new cE,m=e.getContextAttributes();let d=null,E=null;const M=[],x=[],P=new kt;let U=null;const L=new _n;L.viewport=new pe;const N=new _n;N.viewport=new pe;const b=[L,N],T=new w0;let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let gt=M[at];return gt===void 0&&(gt=new al,M[at]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(at){let gt=M[at];return gt===void 0&&(gt=new al,M[at]=gt),gt.getGripSpace()},this.getHand=function(at){let gt=M[at];return gt===void 0&&(gt=new al,M[at]=gt),gt.getHandSpace()};function V(at){const gt=x.indexOf(at.inputSource);if(gt===-1)return;const wt=M[gt];wt!==void 0&&(wt.update(at.inputSource,at.frame,c||o),wt.dispatchEvent({type:at.type,data:at.inputSource}))}function it(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",it),s.removeEventListener("inputsourceschange",ot);for(let at=0;at<M.length;at++){const gt=x[at];gt!==null&&(x[at]=null,M[at].disconnect(gt))}I=null,O=null,v.reset(),t.setRenderTarget(d),p=null,f=null,h=null,s=null,E=null,Jt.stop(),i.isPresenting=!1,t.setPixelRatio(U),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){r=at,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){a=at,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(at){c=at},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",it),s.addEventListener("inputsourceschange",ot),m.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,R=null,X=null;m.depth&&(X=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=m.stencil?Hr:zr,R=m.stencil?Br:fs);const lt={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(lt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new ds(f.textureWidth,f.textureHeight,{format:Pn,type:vi,depthTexture:new pp(f.textureWidth,f.textureHeight,R,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const wt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new ds(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Jt.setContext(s),Jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ot(at){for(let gt=0;gt<at.removed.length;gt++){const wt=at.removed[gt],R=x.indexOf(wt);R>=0&&(x[R]=null,M[R].disconnect(wt))}for(let gt=0;gt<at.added.length;gt++){const wt=at.added[gt];let R=x.indexOf(wt);if(R===-1){for(let lt=0;lt<M.length;lt++)if(lt>=x.length){x.push(wt),R=lt;break}else if(x[lt]===null){x[lt]=wt,R=lt;break}if(R===-1)break}const X=M[R];X&&X.connect(wt)}}const j=new B,tt=new B;function G(at,gt,wt){j.setFromMatrixPosition(gt.matrixWorld),tt.setFromMatrixPosition(wt.matrixWorld);const R=j.distanceTo(tt),X=gt.projectionMatrix.elements,lt=wt.projectionMatrix.elements,et=X[14]/(X[10]-1),Tt=X[14]/(X[10]+1),w=(X[9]+1)/X[5],C=(X[9]-1)/X[5],y=(X[8]-1)/X[0],st=(lt[8]+1)/lt[0],$=et*y,q=et*st,K=R/(-y+st),ct=K*-y;if(gt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(ct),at.translateZ(K),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),X[10]===-1)at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const J=et+K,S=Tt+K,_=$-ct,D=q+(R-ct),k=w*Tt/S*J,W=C*Tt/S*J;at.projectionMatrix.makePerspective(_,D,k,W,J,S),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function vt(at,gt){gt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(gt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let gt=at.near,wt=at.far;v.texture!==null&&(v.depthNear>0&&(gt=v.depthNear),v.depthFar>0&&(wt=v.depthFar)),T.near=N.near=L.near=gt,T.far=N.far=L.far=wt,(I!==T.near||O!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,O=T.far),L.layers.mask=at.layers.mask|2,N.layers.mask=at.layers.mask|4,T.layers.mask=L.layers.mask|N.layers.mask;const R=at.parent,X=T.cameras;vt(T,R);for(let lt=0;lt<X.length;lt++)vt(X[lt],R);X.length===2?G(T,L,N):T.projectionMatrix.copy(L.projectionMatrix),_t(at,T,R)};function _t(at,gt,wt){wt===null?at.matrix.copy(gt.matrixWorld):(at.matrix.copy(wt.matrixWorld),at.matrix.invert(),at.matrix.multiply(gt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=kr*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(at){l=at,f!==null&&(f.fixedFoveation=at),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=at)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(T)};let Ct=null;function Ut(at,gt){if(u=gt.getViewerPose(c||o),g=gt,u!==null){const wt=u.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let R=!1;wt.length!==T.cameras.length&&(T.cameras.length=0,R=!0);for(let et=0;et<wt.length;et++){const Tt=wt[et];let w=null;if(p!==null)w=p.getViewport(Tt);else{const y=h.getViewSubImage(f,Tt);w=y.viewport,et===0&&(t.setRenderTargetTextures(E,y.colorTexture,y.depthStencilTexture),t.setRenderTarget(E))}let C=b[et];C===void 0&&(C=new _n,C.layers.enable(et),C.viewport=new pe,b[et]=C),C.matrix.fromArray(Tt.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Tt.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(w.x,w.y,w.width,w.height),et===0&&(T.matrix.copy(C.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),R===!0&&T.cameras.push(C)}const X=s.enabledFeatures;if(X&&X.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const et=h.getDepthInformation(wt[0]);et&&et.isValid&&et.texture&&v.init(t,et,s.renderState)}}for(let wt=0;wt<M.length;wt++){const R=x[wt],X=M[wt];R!==null&&X!==void 0&&X.update(R,gt,c||o)}Ct&&Ct(at,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),g=null}const Jt=new gp;Jt.setAnimationLoop(Ut),this.setAnimationLoop=function(at){Ct=at},this.dispose=function(){}}}const Ji=new qn,hE=new ve;function fE(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,up(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,M,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===nn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===nn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=t.get(d),M=E.envMap,x=E.envMapRotation;M&&(m.envMap.value=M,Ji.copy(x),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),m.envMapRotation.value.setFromMatrix4(hE.makeRotationFromEuler(Ji)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=M*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===nn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function dE(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const x=M.program;i.uniformBlockBinding(E,x)}function c(E,M){let x=s[E.id];x===void 0&&(g(E),x=u(E),s[E.id]=x,E.addEventListener("dispose",m));const P=M.program;i.updateUBOMapping(E,P);const U=t.render.frame;r[E.id]!==U&&(f(E),r[E.id]=U)}function u(E){const M=h();E.__bindingPointIndex=M;const x=n.createBuffer(),P=E.__size,U=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,P,U),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const M=s[E.id],x=E.uniforms,P=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let U=0,L=x.length;U<L;U++){const N=Array.isArray(x[U])?x[U]:[x[U]];for(let b=0,T=N.length;b<T;b++){const I=N[b];if(p(I,U,b,P)===!0){const O=I.__offset,V=Array.isArray(I.value)?I.value:[I.value];let it=0;for(let ot=0;ot<V.length;ot++){const j=V[ot],tt=v(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,O+it,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,it),it+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,M,x,P){const U=E.value,L=M+"_"+x;if(P[L]===void 0)return typeof U=="number"||typeof U=="boolean"?P[L]=U:P[L]=U.clone(),!0;{const N=P[L];if(typeof U=="number"||typeof U=="boolean"){if(N!==U)return P[L]=U,!0}else if(N.equals(U)===!1)return N.copy(U),!0}return!1}function g(E){const M=E.uniforms;let x=0;const P=16;for(let L=0,N=M.length;L<N;L++){const b=Array.isArray(M[L])?M[L]:[M[L]];for(let T=0,I=b.length;T<I;T++){const O=b[T],V=Array.isArray(O.value)?O.value:[O.value];for(let it=0,ot=V.length;it<ot;it++){const j=V[it],tt=v(j),G=x%P,vt=G%tt.boundary,_t=G+vt;x+=vt,_t!==0&&P-_t<tt.storage&&(x+=P-_t),O.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=tt.storage}}}const U=x%P;return U>0&&(x+=P-U),E.__size=x,E.__cache={},this}function v(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class pE{constructor(t={}){const{canvas:e=Bv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const E=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let P=!1;this._outputColorSpace=mn;let U=0,L=0,N=null,b=-1,T=null;const I=new pe,O=new pe;let V=null;const it=new Kt(0);let ot=0,j=e.width,tt=e.height,G=1,vt=null,_t=null;const Ct=new pe(0,0,j,tt),Ut=new pe(0,0,j,tt);let Jt=!1;const at=new iu;let gt=!1,wt=!1;const R=new ve,X=new ve,lt=new B,et=new pe,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function C(){return N===null?G:1}let y=i;function st(A,z){return e.getContext(A,z)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xc}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",bt,!1),y===null){const z="webgl2";if(y=st(z,A),y===null)throw st(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let $,q,K,ct,J,S,_,D,k,W,Y,pt,ht,mt,Dt,ft,yt,Lt,Ot,St,Vt,Wt,ae,F;function Et(){$=new by(y),$.init(),Wt=new oE(y,$),q=new gy(y,$,t,Wt),K=new sE(y,$),q.reverseDepthBuffer&&f&&K.buffers.depth.setReversed(!0),ct=new wy(y),J=new XM,S=new rE(y,$,K,J,q,Wt,ct),_=new xy(x),D=new Ey(x),k=new I0(y),ae=new my(y,k),W=new Ty(y,k,ct,ae),Y=new Ry(y,W,k,ct),Ot=new Cy(y,q,S),ft=new vy(J),pt=new WM(x,_,D,$,q,ae,ft),ht=new fE(x,J),mt=new YM,Dt=new QM($),Lt=new py(x,_,D,K,Y,p,l),yt=new nE(x,Y,q),F=new dE(y,ct,q,K),St=new _y(y,$,ct),Vt=new Ay(y,$,ct),ct.programs=pt.programs,x.capabilities=q,x.extensions=$,x.properties=J,x.renderLists=mt,x.shadowMap=yt,x.state=K,x.info=ct}Et();const nt=new uE(x,y);this.xr=nt,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const A=$.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=$.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(j,tt,!1))},this.getSize=function(A){return A.set(j,tt)},this.setSize=function(A,z,Z=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,tt=z,e.width=Math.floor(A*G),e.height=Math.floor(z*G),Z===!0&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(j*G,tt*G).floor()},this.setDrawingBufferSize=function(A,z,Z){j=A,tt=z,G=Z,e.width=Math.floor(A*Z),e.height=Math.floor(z*Z),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(Ct)},this.setViewport=function(A,z,Z,Q){A.isVector4?Ct.set(A.x,A.y,A.z,A.w):Ct.set(A,z,Z,Q),K.viewport(I.copy(Ct).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(Ut)},this.setScissor=function(A,z,Z,Q){A.isVector4?Ut.set(A.x,A.y,A.z,A.w):Ut.set(A,z,Z,Q),K.scissor(O.copy(Ut).multiplyScalar(G).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(A){K.setScissorTest(Jt=A)},this.setOpaqueSort=function(A){vt=A},this.setTransparentSort=function(A){_t=A},this.getClearColor=function(A){return A.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,Z=!0){let Q=0;if(A){let H=!1;if(N!==null){const dt=N.texture.format;H=dt===Zc||dt===Kc||dt===qc}if(H){const dt=N.texture.type,Mt=dt===vi||dt===fs||dt===Or||dt===Br||dt===Yc||dt===jc,Rt=Lt.getClearColor(),Pt=Lt.getClearAlpha(),Gt=Rt.r,Ht=Rt.g,It=Rt.b;Mt?(g[0]=Gt,g[1]=Ht,g[2]=It,g[3]=Pt,y.clearBufferuiv(y.COLOR,0,g)):(v[0]=Gt,v[1]=Ht,v[2]=It,v[3]=Pt,y.clearBufferiv(y.COLOR,0,v))}else Q|=y.COLOR_BUFFER_BIT}z&&(Q|=y.DEPTH_BUFFER_BIT),Z&&(Q|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),Lt.dispose(),mt.dispose(),Dt.dispose(),J.dispose(),_.dispose(),D.dispose(),Y.dispose(),ae.dispose(),F.dispose(),pt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",lu),nt.removeEventListener("sessionend",cu),Vi.stop()};function ut(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const A=ct.autoReset,z=yt.enabled,Z=yt.autoUpdate,Q=yt.needsUpdate,H=yt.type;Et(),ct.autoReset=A,yt.enabled=z,yt.autoUpdate=Z,yt.needsUpdate=Q,yt.type=H}function bt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $t(A){const z=A.target;z.removeEventListener("dispose",$t),ye(z)}function ye(A){ze(A),J.remove(A)}function ze(A){const z=J.get(A).programs;z!==void 0&&(z.forEach(function(Z){pt.releaseProgram(Z)}),A.isShaderMaterial&&pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Z,Q,H,dt){z===null&&(z=Tt);const Mt=H.isMesh&&H.matrixWorld.determinant()<0,Rt=Ap(A,z,Z,Q,H);K.setMaterial(Q,Mt);let Pt=Z.index,Gt=1;if(Q.wireframe===!0){if(Pt=W.getWireframeAttribute(Z),Pt===void 0)return;Gt=2}const Ht=Z.drawRange,It=Z.attributes.position;let Qt=Ht.start*Gt,se=(Ht.start+Ht.count)*Gt;dt!==null&&(Qt=Math.max(Qt,dt.start*Gt),se=Math.min(se,(dt.start+dt.count)*Gt)),Pt!==null?(Qt=Math.max(Qt,0),se=Math.min(se,Pt.count)):It!=null&&(Qt=Math.max(Qt,0),se=Math.min(se,It.count));const Te=se-Qt;if(Te<0||Te===1/0)return;ae.setup(H,Q,Rt,Z,Pt);let Me,ee=St;if(Pt!==null&&(Me=k.get(Pt),ee=Vt,ee.setIndex(Me)),H.isMesh)Q.wireframe===!0?(K.setLineWidth(Q.wireframeLinewidth*C()),ee.setMode(y.LINES)):ee.setMode(y.TRIANGLES);else if(H.isLine){let Nt=Q.linewidth;Nt===void 0&&(Nt=1),K.setLineWidth(Nt*C()),H.isLineSegments?ee.setMode(y.LINES):H.isLineLoop?ee.setMode(y.LINE_LOOP):ee.setMode(y.LINE_STRIP)}else H.isPoints?ee.setMode(y.POINTS):H.isSprite&&ee.setMode(y.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ho("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ee.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if($.get("WEBGL_multi_draw"))ee.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Nt=H._multiDrawStarts,Ue=H._multiDrawCounts,re=H._multiDrawCount,Tn=Pt?k.get(Pt).bytesPerElement:1,ys=J.get(Q).currentProgram.getUniforms();for(let sn=0;sn<re;sn++)ys.setValue(y,"_gl_DrawID",sn),ee.render(Nt[sn]/Tn,Ue[sn])}else if(H.isInstancedMesh)ee.renderInstances(Qt,Te,H.count);else if(Z.isInstancedBufferGeometry){const Nt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ue=Math.min(Z.instanceCount,Nt);ee.renderInstances(Qt,Te,Ue)}else ee.render(Qt,Te)};function le(A,z,Z){A.transparent===!0&&A.side===Xn&&A.forceSinglePass===!1?(A.side=nn,A.needsUpdate=!0,qr(A,z,Z),A.side=Bi,A.needsUpdate=!0,qr(A,z,Z),A.side=Xn):qr(A,z,Z)}this.compile=function(A,z,Z=null){Z===null&&(Z=A),d=Dt.get(Z),d.init(z),M.push(d),Z.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),A!==Z&&A.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights();const Q=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const dt=H.material;if(dt)if(Array.isArray(dt))for(let Mt=0;Mt<dt.length;Mt++){const Rt=dt[Mt];le(Rt,Z,H),Q.add(Rt)}else le(dt,Z,H),Q.add(dt)}),d=M.pop(),Q},this.compileAsync=function(A,z,Z=null){const Q=this.compile(A,z,Z);return new Promise(H=>{function dt(){if(Q.forEach(function(Mt){J.get(Mt).currentProgram.isReady()&&Q.delete(Mt)}),Q.size===0){H(A);return}setTimeout(dt,10)}$.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let bn=null;function Kn(A){bn&&bn(A)}function lu(){Vi.stop()}function cu(){Vi.start()}const Vi=new gp;Vi.setAnimationLoop(Kn),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(A){bn=A,nt.setAnimationLoop(A),A===null?Vi.stop():Vi.start()},nt.addEventListener("sessionstart",lu),nt.addEventListener("sessionend",cu),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(z),z=nt.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,z,N),d=Dt.get(A,M.length),d.init(z),M.push(d),X.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),at.setFromProjectionMatrix(X),wt=this.localClippingEnabled,gt=ft.init(this.clippingPlanes,wt),m=mt.get(A,E.length),m.init(),E.push(m),nt.enabled===!0&&nt.isPresenting===!0){const dt=x.xr.getDepthSensingMesh();dt!==null&&wa(dt,z,-1/0,x.sortObjects)}wa(A,z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(vt,_t),w=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,w&&Lt.addToRenderList(m,A),this.info.render.frame++,gt===!0&&ft.beginShadows();const Z=d.state.shadowsArray;yt.render(Z,A,z),gt===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,H=m.transmissive;if(d.setupLights(),z.isArrayCamera){const dt=z.cameras;if(H.length>0)for(let Mt=0,Rt=dt.length;Mt<Rt;Mt++){const Pt=dt[Mt];hu(Q,H,A,Pt)}w&&Lt.render(A);for(let Mt=0,Rt=dt.length;Mt<Rt;Mt++){const Pt=dt[Mt];uu(m,A,Pt,Pt.viewport)}}else H.length>0&&hu(Q,H,A,z),w&&Lt.render(A),uu(m,A,z);N!==null&&L===0&&(S.updateMultisampleRenderTarget(N),S.updateRenderTargetMipmap(N)),A.isScene===!0&&A.onAfterRender(x,A,z),ae.resetDefaultState(),b=-1,T=null,M.pop(),M.length>0?(d=M[M.length-1],gt===!0&&ft.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function wa(A,z,Z,Q){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||at.intersectsSprite(A)){Q&&et.setFromMatrixPosition(A.matrixWorld).applyMatrix4(X);const Mt=Y.update(A),Rt=A.material;Rt.visible&&m.push(A,Mt,Rt,Z,et.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||at.intersectsObject(A))){const Mt=Y.update(A),Rt=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),et.copy(A.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),et.copy(Mt.boundingSphere.center)),et.applyMatrix4(A.matrixWorld).applyMatrix4(X)),Array.isArray(Rt)){const Pt=Mt.groups;for(let Gt=0,Ht=Pt.length;Gt<Ht;Gt++){const It=Pt[Gt],Qt=Rt[It.materialIndex];Qt&&Qt.visible&&m.push(A,Mt,Qt,Z,et.z,It)}}else Rt.visible&&m.push(A,Mt,Rt,Z,et.z,null)}}const dt=A.children;for(let Mt=0,Rt=dt.length;Mt<Rt;Mt++)wa(dt[Mt],z,Z,Q)}function uu(A,z,Z,Q){const H=A.opaque,dt=A.transmissive,Mt=A.transparent;d.setupLightsView(Z),gt===!0&&ft.setGlobalState(x.clippingPlanes,Z),Q&&K.viewport(I.copy(Q)),H.length>0&&jr(H,z,Z),dt.length>0&&jr(dt,z,Z),Mt.length>0&&jr(Mt,z,Z),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function hu(A,z,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Q.id]===void 0&&(d.state.transmissionRenderTarget[Q.id]=new ds(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?$r:vi,minFilter:os,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const dt=d.state.transmissionRenderTarget[Q.id],Mt=Q.viewport||I;dt.setSize(Mt.z*x.transmissionResolutionScale,Mt.w*x.transmissionResolutionScale);const Rt=x.getRenderTarget();x.setRenderTarget(dt),x.getClearColor(it),ot=x.getClearAlpha(),ot<1&&x.setClearColor(16777215,.5),x.clear(),w&&Lt.render(Z);const Pt=x.toneMapping;x.toneMapping=Oi;const Gt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),d.setupLightsView(Q),gt===!0&&ft.setGlobalState(x.clippingPlanes,Q),jr(A,Z,Q),S.updateMultisampleRenderTarget(dt),S.updateRenderTargetMipmap(dt),$.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let It=0,Qt=z.length;It<Qt;It++){const se=z[It],Te=se.object,Me=se.geometry,ee=se.material,Nt=se.group;if(ee.side===Xn&&Te.layers.test(Q.layers)){const Ue=ee.side;ee.side=nn,ee.needsUpdate=!0,fu(Te,Z,Q,Me,ee,Nt),ee.side=Ue,ee.needsUpdate=!0,Ht=!0}}Ht===!0&&(S.updateMultisampleRenderTarget(dt),S.updateRenderTargetMipmap(dt))}x.setRenderTarget(Rt),x.setClearColor(it,ot),Gt!==void 0&&(Q.viewport=Gt),x.toneMapping=Pt}function jr(A,z,Z){const Q=z.isScene===!0?z.overrideMaterial:null;for(let H=0,dt=A.length;H<dt;H++){const Mt=A[H],Rt=Mt.object,Pt=Mt.geometry,Gt=Mt.group;let Ht=Mt.material;Ht.allowOverride===!0&&Q!==null&&(Ht=Q),Rt.layers.test(Z.layers)&&fu(Rt,z,Z,Pt,Ht,Gt)}}function fu(A,z,Z,Q,H,dt){A.onBeforeRender(x,z,Z,Q,H,dt),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(x,z,Z,Q,A,dt),H.transparent===!0&&H.side===Xn&&H.forceSinglePass===!1?(H.side=nn,H.needsUpdate=!0,x.renderBufferDirect(Z,z,Q,H,A,dt),H.side=Bi,H.needsUpdate=!0,x.renderBufferDirect(Z,z,Q,H,A,dt),H.side=Xn):x.renderBufferDirect(Z,z,Q,H,A,dt),A.onAfterRender(x,z,Z,Q,H,dt)}function qr(A,z,Z){z.isScene!==!0&&(z=Tt);const Q=J.get(A),H=d.state.lights,dt=d.state.shadowsArray,Mt=H.state.version,Rt=pt.getParameters(A,H.state,dt,z,Z),Pt=pt.getProgramCacheKey(Rt);let Gt=Q.programs;Q.environment=A.isMeshStandardMaterial?z.environment:null,Q.fog=z.fog,Q.envMap=(A.isMeshStandardMaterial?D:_).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Gt===void 0&&(A.addEventListener("dispose",$t),Gt=new Map,Q.programs=Gt);let Ht=Gt.get(Pt);if(Ht!==void 0){if(Q.currentProgram===Ht&&Q.lightsStateVersion===Mt)return pu(A,Rt),Ht}else Rt.uniforms=pt.getUniforms(A),A.onBeforeCompile(Rt,x),Ht=pt.acquireProgram(Rt,Pt),Gt.set(Pt,Ht),Q.uniforms=Rt.uniforms;const It=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(It.clippingPlanes=ft.uniform),pu(A,Rt),Q.needsLights=Cp(A),Q.lightsStateVersion=Mt,Q.needsLights&&(It.ambientLightColor.value=H.state.ambient,It.lightProbe.value=H.state.probe,It.directionalLights.value=H.state.directional,It.directionalLightShadows.value=H.state.directionalShadow,It.spotLights.value=H.state.spot,It.spotLightShadows.value=H.state.spotShadow,It.rectAreaLights.value=H.state.rectArea,It.ltc_1.value=H.state.rectAreaLTC1,It.ltc_2.value=H.state.rectAreaLTC2,It.pointLights.value=H.state.point,It.pointLightShadows.value=H.state.pointShadow,It.hemisphereLights.value=H.state.hemi,It.directionalShadowMap.value=H.state.directionalShadowMap,It.directionalShadowMatrix.value=H.state.directionalShadowMatrix,It.spotShadowMap.value=H.state.spotShadowMap,It.spotLightMatrix.value=H.state.spotLightMatrix,It.spotLightMap.value=H.state.spotLightMap,It.pointShadowMap.value=H.state.pointShadowMap,It.pointShadowMatrix.value=H.state.pointShadowMatrix),Q.currentProgram=Ht,Q.uniformsList=null,Ht}function du(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=ko.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function pu(A,z){const Z=J.get(A);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function Ap(A,z,Z,Q,H){z.isScene!==!0&&(z=Tt),S.resetTextureUnits();const dt=z.fog,Mt=Q.isMeshStandardMaterial?z.environment:null,Rt=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:er,Pt=(Q.isMeshStandardMaterial?D:_).get(Q.envMap||Mt),Gt=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ht=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),It=!!Z.morphAttributes.position,Qt=!!Z.morphAttributes.normal,se=!!Z.morphAttributes.color;let Te=Oi;Q.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Te=x.toneMapping);const Me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ee=Me!==void 0?Me.length:0,Nt=J.get(Q),Ue=d.state.lights;if(gt===!0&&(wt===!0||A!==T)){const Ge=A===T&&Q.id===b;ft.setState(Q,A,Ge)}let re=!1;Q.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Ue.state.version||Nt.outputColorSpace!==Rt||H.isBatchedMesh&&Nt.batching===!1||!H.isBatchedMesh&&Nt.batching===!0||H.isBatchedMesh&&Nt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Nt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Nt.instancing===!1||!H.isInstancedMesh&&Nt.instancing===!0||H.isSkinnedMesh&&Nt.skinning===!1||!H.isSkinnedMesh&&Nt.skinning===!0||H.isInstancedMesh&&Nt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Nt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Nt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Nt.instancingMorph===!1&&H.morphTexture!==null||Nt.envMap!==Pt||Q.fog===!0&&Nt.fog!==dt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ft.numPlanes||Nt.numIntersection!==ft.numIntersection)||Nt.vertexAlphas!==Gt||Nt.vertexTangents!==Ht||Nt.morphTargets!==It||Nt.morphNormals!==Qt||Nt.morphColors!==se||Nt.toneMapping!==Te||Nt.morphTargetsCount!==ee)&&(re=!0):(re=!0,Nt.__version=Q.version);let Tn=Nt.currentProgram;re===!0&&(Tn=qr(Q,z,H));let ys=!1,sn=!1,or=!1;const xe=Tn.getUniforms(),un=Nt.uniforms;if(K.useProgram(Tn.program)&&(ys=!0,sn=!0,or=!0),Q.id!==b&&(b=Q.id,sn=!0),ys||T!==A){K.buffers.depth.getReversed()?(R.copy(A.projectionMatrix),Hv(R),kv(R),xe.setValue(y,"projectionMatrix",R)):xe.setValue(y,"projectionMatrix",A.projectionMatrix),xe.setValue(y,"viewMatrix",A.matrixWorldInverse);const Ze=xe.map.cameraPosition;Ze!==void 0&&Ze.setValue(y,lt.setFromMatrixPosition(A.matrixWorld)),q.logarithmicDepthBuffer&&xe.setValue(y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&xe.setValue(y,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,sn=!0,or=!0)}if(H.isSkinnedMesh){xe.setOptional(y,H,"bindMatrix"),xe.setOptional(y,H,"bindMatrixInverse");const Ge=H.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),xe.setValue(y,"boneTexture",Ge.boneTexture,S))}H.isBatchedMesh&&(xe.setOptional(y,H,"batchingTexture"),xe.setValue(y,"batchingTexture",H._matricesTexture,S),xe.setOptional(y,H,"batchingIdTexture"),xe.setValue(y,"batchingIdTexture",H._indirectTexture,S),xe.setOptional(y,H,"batchingColorTexture"),H._colorsTexture!==null&&xe.setValue(y,"batchingColorTexture",H._colorsTexture,S));const hn=Z.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Ot.update(H,Z,Tn),(sn||Nt.receiveShadow!==H.receiveShadow)&&(Nt.receiveShadow=H.receiveShadow,xe.setValue(y,"receiveShadow",H.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(un.envMap.value=Pt,un.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&z.environment!==null&&(un.envMapIntensity.value=z.environmentIntensity),sn&&(xe.setValue(y,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&wp(un,or),dt&&Q.fog===!0&&ht.refreshFogUniforms(un,dt),ht.refreshMaterialUniforms(un,Q,G,tt,d.state.transmissionRenderTarget[A.id]),ko.upload(y,du(Nt),un,S)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ko.upload(y,du(Nt),un,S),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&xe.setValue(y,"center",H.center),xe.setValue(y,"modelViewMatrix",H.modelViewMatrix),xe.setValue(y,"normalMatrix",H.normalMatrix),xe.setValue(y,"modelMatrix",H.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Ge=Q.uniformsGroups;for(let Ze=0,Ca=Ge.length;Ze<Ca;Ze++){const Gi=Ge[Ze];F.update(Gi,Tn),F.bind(Gi,Tn)}}return Tn}function wp(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Cp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,z,Z){const Q=J.get(A);Q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),J.get(A.texture).__webglTexture=z,J.get(A.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:Z,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const Z=J.get(A);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0};const Rp=y.createFramebuffer();this.setRenderTarget=function(A,z=0,Z=0){N=A,U=z,L=Z;let Q=!0,H=null,dt=!1,Mt=!1;if(A){const Pt=J.get(A);if(Pt.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(y.FRAMEBUFFER,null),Q=!1;else if(Pt.__webglFramebuffer===void 0)S.setupRenderTarget(A);else if(Pt.__hasExternalTextures)S.rebindTextures(A,J.get(A.texture).__webglTexture,J.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const It=A.depthTexture;if(Pt.__boundDepthTexture!==It){if(It!==null&&J.has(It)&&(A.width!==It.image.width||A.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(A)}}const Gt=A.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Mt=!0);const Ht=J.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ht[z])?H=Ht[z][Z]:H=Ht[z],dt=!0):A.samples>0&&S.useMultisampledRTT(A)===!1?H=J.get(A).__webglMultisampledFramebuffer:Array.isArray(Ht)?H=Ht[Z]:H=Ht,I.copy(A.viewport),O.copy(A.scissor),V=A.scissorTest}else I.copy(Ct).multiplyScalar(G).floor(),O.copy(Ut).multiplyScalar(G).floor(),V=Jt;if(Z!==0&&(H=Rp),K.bindFramebuffer(y.FRAMEBUFFER,H)&&Q&&K.drawBuffers(A,H),K.viewport(I),K.scissor(O),K.setScissorTest(V),dt){const Pt=J.get(A.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pt.__webglTexture,Z)}else if(Mt){const Pt=J.get(A.texture),Gt=z;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Pt.__webglTexture,Z,Gt)}else if(A!==null&&Z!==0){const Pt=J.get(A.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Pt.__webglTexture,Z)}b=-1},this.readRenderTargetPixels=function(A,z,Z,Q,H,dt,Mt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Mt!==void 0&&(Rt=Rt[Mt]),Rt){K.bindFramebuffer(y.FRAMEBUFFER,Rt);try{const Pt=A.texture,Gt=Pt.format,Ht=Pt.type;if(!q.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Q&&Z>=0&&Z<=A.height-H&&y.readPixels(z,Z,Q,H,Wt.convert(Gt),Wt.convert(Ht),dt)}finally{const Pt=N!==null?J.get(N).__webglFramebuffer:null;K.bindFramebuffer(y.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(A,z,Z,Q,H,dt,Mt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Mt!==void 0&&(Rt=Rt[Mt]),Rt)if(z>=0&&z<=A.width-Q&&Z>=0&&Z<=A.height-H){K.bindFramebuffer(y.FRAMEBUFFER,Rt);const Pt=A.texture,Gt=Pt.format,Ht=Pt.type;if(!q.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const It=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,It),y.bufferData(y.PIXEL_PACK_BUFFER,dt.byteLength,y.STREAM_READ),y.readPixels(z,Z,Q,H,Wt.convert(Gt),Wt.convert(Ht),0);const Qt=N!==null?J.get(N).__webglFramebuffer:null;K.bindFramebuffer(y.FRAMEBUFFER,Qt);const se=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await zv(y,se,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,It),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,dt),y.deleteBuffer(It),y.deleteSync(se),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,Z=0){const Q=Math.pow(2,-Z),H=Math.floor(A.image.width*Q),dt=Math.floor(A.image.height*Q),Mt=z!==null?z.x:0,Rt=z!==null?z.y:0;S.setTexture2D(A,0),y.copyTexSubImage2D(y.TEXTURE_2D,Z,0,0,Mt,Rt,H,dt),K.unbindTexture()};const Pp=y.createFramebuffer(),Dp=y.createFramebuffer();this.copyTextureToTexture=function(A,z,Z=null,Q=null,H=0,dt=null){dt===null&&(H!==0?(Ho("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),dt=H,H=0):dt=0);let Mt,Rt,Pt,Gt,Ht,It,Qt,se,Te;const Me=A.isCompressedTexture?A.mipmaps[dt]:A.image;if(Z!==null)Mt=Z.max.x-Z.min.x,Rt=Z.max.y-Z.min.y,Pt=Z.isBox3?Z.max.z-Z.min.z:1,Gt=Z.min.x,Ht=Z.min.y,It=Z.isBox3?Z.min.z:0;else{const hn=Math.pow(2,-H);Mt=Math.floor(Me.width*hn),Rt=Math.floor(Me.height*hn),A.isDataArrayTexture?Pt=Me.depth:A.isData3DTexture?Pt=Math.floor(Me.depth*hn):Pt=1,Gt=0,Ht=0,It=0}Q!==null?(Qt=Q.x,se=Q.y,Te=Q.z):(Qt=0,se=0,Te=0);const ee=Wt.convert(z.format),Nt=Wt.convert(z.type);let Ue;z.isData3DTexture?(S.setTexture3D(z,0),Ue=y.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(S.setTexture2DArray(z,0),Ue=y.TEXTURE_2D_ARRAY):(S.setTexture2D(z,0),Ue=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,z.unpackAlignment);const re=y.getParameter(y.UNPACK_ROW_LENGTH),Tn=y.getParameter(y.UNPACK_IMAGE_HEIGHT),ys=y.getParameter(y.UNPACK_SKIP_PIXELS),sn=y.getParameter(y.UNPACK_SKIP_ROWS),or=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,Me.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Me.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Gt),y.pixelStorei(y.UNPACK_SKIP_ROWS,Ht),y.pixelStorei(y.UNPACK_SKIP_IMAGES,It);const xe=A.isDataArrayTexture||A.isData3DTexture,un=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const hn=J.get(A),Ge=J.get(z),Ze=J.get(hn.__renderTarget),Ca=J.get(Ge.__renderTarget);K.bindFramebuffer(y.READ_FRAMEBUFFER,Ze.__webglFramebuffer),K.bindFramebuffer(y.DRAW_FRAMEBUFFER,Ca.__webglFramebuffer);for(let Gi=0;Gi<Pt;Gi++)xe&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,J.get(A).__webglTexture,H,It+Gi),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,J.get(z).__webglTexture,dt,Te+Gi)),y.blitFramebuffer(Gt,Ht,Mt,Rt,Qt,se,Mt,Rt,y.DEPTH_BUFFER_BIT,y.NEAREST);K.bindFramebuffer(y.READ_FRAMEBUFFER,null),K.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||J.has(A)){const hn=J.get(A),Ge=J.get(z);K.bindFramebuffer(y.READ_FRAMEBUFFER,Pp),K.bindFramebuffer(y.DRAW_FRAMEBUFFER,Dp);for(let Ze=0;Ze<Pt;Ze++)xe?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,hn.__webglTexture,H,It+Ze):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,hn.__webglTexture,H),un?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Ge.__webglTexture,dt,Te+Ze):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Ge.__webglTexture,dt),H!==0?y.blitFramebuffer(Gt,Ht,Mt,Rt,Qt,se,Mt,Rt,y.COLOR_BUFFER_BIT,y.NEAREST):un?y.copyTexSubImage3D(Ue,dt,Qt,se,Te+Ze,Gt,Ht,Mt,Rt):y.copyTexSubImage2D(Ue,dt,Qt,se,Gt,Ht,Mt,Rt);K.bindFramebuffer(y.READ_FRAMEBUFFER,null),K.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else un?A.isDataTexture||A.isData3DTexture?y.texSubImage3D(Ue,dt,Qt,se,Te,Mt,Rt,Pt,ee,Nt,Me.data):z.isCompressedArrayTexture?y.compressedTexSubImage3D(Ue,dt,Qt,se,Te,Mt,Rt,Pt,ee,Me.data):y.texSubImage3D(Ue,dt,Qt,se,Te,Mt,Rt,Pt,ee,Nt,Me):A.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,dt,Qt,se,Mt,Rt,ee,Nt,Me.data):A.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,dt,Qt,se,Me.width,Me.height,ee,Me.data):y.texSubImage2D(y.TEXTURE_2D,dt,Qt,se,Mt,Rt,ee,Nt,Me);y.pixelStorei(y.UNPACK_ROW_LENGTH,re),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Tn),y.pixelStorei(y.UNPACK_SKIP_PIXELS,ys),y.pixelStorei(y.UNPACK_SKIP_ROWS,sn),y.pixelStorei(y.UNPACK_SKIP_IMAGES,or),dt===0&&z.generateMipmaps&&y.generateMipmap(Ue),K.unbindTexture()},this.copyTextureToTexture3D=function(A,z,Z=null,Q=null,H=0){return Ho('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,z,Z,Q,H)},this.initRenderTarget=function(A){J.get(A).__webglFramebuffer===void 0&&S.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?S.setTextureCube(A,0):A.isData3DTexture?S.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?S.setTexture2DArray(A,0):S.setTexture2D(A,0),K.unbindTexture()},this.resetState=function(){U=0,L=0,N=null,K.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}const uf={type:"change"},ou={type:"start"},Mp={type:"end"},Co=new Ta,hf=new Li,mE=Math.cos(70*is.DEG2RAD),Re=new B,Je=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xl=1e-6;class _E extends D0{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$s.ROTATE,MIDDLE:$s.DOLLY,RIGHT:$s.PAN},this.touches={ONE:Hs.ROTATE,TWO:Hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new ps,this._lastTargetPosition=new B,this._quat=new ps().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fh,this._sphericalDelta=new Fh,this._scale=1,this._panOffset=new B,this._rotateStart=new kt,this._rotateEnd=new kt,this._rotateDelta=new kt,this._panStart=new kt,this._panEnd=new kt,this._panDelta=new kt,this._dollyStart=new kt,this._dollyEnd=new kt,this._dollyDelta=new kt,this._dollyDirection=new B,this._mouse=new kt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vE.bind(this),this._onPointerDown=gE.bind(this),this._onPointerUp=xE.bind(this),this._onContextMenu=AE.bind(this),this._onMouseWheel=ME.bind(this),this._onKeyDown=EE.bind(this),this._onTouchStart=bE.bind(this),this._onTouchMove=TE.bind(this),this._onMouseDown=SE.bind(this),this._onMouseMove=yE.bind(this),this._interceptControlDown=wE.bind(this),this._interceptControlUp=CE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uf),this.update(),this.state=fe.NONE}update(t=null){const e=this.object.position;Re.copy(e).sub(this.target),Re.applyQuaternion(this._quat),this._spherical.setFromVector3(Re),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Je:i>Math.PI&&(i-=Je),s<-Math.PI?s+=Je:s>Math.PI&&(s-=Je),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Re.setFromSpherical(this._spherical),Re.applyQuaternion(this._quatInverse),e.copy(this.target).add(Re),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Re.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Re.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Co.origin.copy(this.object.position),Co.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Co.direction))<mE?this.object.lookAt(this.target):(hf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Co.intersectPlane(hf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>xl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xl||this._lastTargetPosition.distanceToSquared(this.target)>xl?(this.dispatchEvent(uf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Je/60*this.autoRotateSpeed*t:Je/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Re.setFromMatrixColumn(e,0),Re.multiplyScalar(-t),this._panOffset.add(Re)}_panUp(t,e){this.screenSpacePanning===!0?Re.setFromMatrixColumn(e,1):(Re.setFromMatrixColumn(e,0),Re.crossVectors(this.object.up,Re)),Re.multiplyScalar(t),this._panOffset.add(Re)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Re.copy(s).sub(this.target);let r=Re.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new kt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function gE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function vE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function xE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mp),this.state=fe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function SE(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case $s.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=fe.DOLLY;break;case $s.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=fe.ROTATE}break;case $s.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(ou)}function yE(n){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ME(n){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(n.preventDefault(),this.dispatchEvent(ou),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Mp))}function EE(n){this.enabled!==!1&&this._handleKeyDown(n)}function bE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=fe.TOUCH_ROTATE;break;case Hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case Hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=fe.TOUCH_DOLLY_PAN;break;case Hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(ou)}function TE(n){switch(this._trackPointer(n),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=fe.NONE}}function AE(n){this.enabled!==!1&&n.preventDefault()}function wE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function CE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ff=new ki,Ro=new B;class Ep extends A0{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Ke(t,3)),this.setAttribute("uv",new Ke(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const i=new Ac(e,6,1);return this.setAttribute("instanceStart",new Ui(i,3,0)),this.setAttribute("instanceEnd",new Ui(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const i=new Ac(e,6,1);return this.setAttribute("instanceColorStart",new Ui(i,3,0)),this.setAttribute("instanceColorEnd",new Ui(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new g0(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),ff.setFromBufferAttribute(e),this.boundingBox.union(ff))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ro.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ro)),Ro.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ro));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}xt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new kt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};tn.line={uniforms:nu.merge([xt.common,xt.fog,xt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class au extends xi{constructor(t){super({type:"LineMaterial",uniforms:nu.clone(tn.line.uniforms),vertexShader:tn.line.vertexShader,fragmentShader:tn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Sl=new pe,df=new B,pf=new B,Ne=new pe,Fe=new pe,On=new pe,yl=new B,Ml=new ve,Oe=new R0,mf=new B,Po=new ki,Do=new sr,Bn=new pe;let $n,cs;function _f(n,t,e){return Bn.set(0,0,-t,1).applyMatrix4(n.projectionMatrix),Bn.multiplyScalar(1/Bn.w),Bn.x=cs/e.width,Bn.y=cs/e.height,Bn.applyMatrix4(n.projectionMatrixInverse),Bn.multiplyScalar(1/Bn.w),Math.abs(Math.max(Bn.x,Bn.y))}function RE(n,t){const e=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){Oe.start.fromBufferAttribute(s,a),Oe.end.fromBufferAttribute(r,a),Oe.applyMatrix4(e);const c=new B,u=new B;$n.distanceSqToSegment(Oe.start,Oe.end,u,c),u.distanceTo(c)<cs*.5&&t.push({point:u,pointOnLine:c,distance:$n.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function PE(n,t,e){const i=t.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-t.near;$n.at(1,On),On.w=1,On.applyMatrix4(t.matrixWorldInverse),On.applyMatrix4(i),On.multiplyScalar(1/On.w),On.x*=r.x/2,On.y*=r.y/2,On.z=0,yl.copy(On),Ml.multiplyMatrices(t.matrixWorldInverse,o);for(let f=0,p=u;f<p;f++){if(Ne.fromBufferAttribute(l,f),Fe.fromBufferAttribute(c,f),Ne.w=1,Fe.w=1,Ne.applyMatrix4(Ml),Fe.applyMatrix4(Ml),Ne.z>h&&Fe.z>h)continue;if(Ne.z>h){const M=Ne.z-Fe.z,x=(Ne.z-h)/M;Ne.lerp(Fe,x)}else if(Fe.z>h){const M=Fe.z-Ne.z,x=(Fe.z-h)/M;Fe.lerp(Ne,x)}Ne.applyMatrix4(i),Fe.applyMatrix4(i),Ne.multiplyScalar(1/Ne.w),Fe.multiplyScalar(1/Fe.w),Ne.x*=r.x/2,Ne.y*=r.y/2,Fe.x*=r.x/2,Fe.y*=r.y/2,Oe.start.copy(Ne),Oe.start.z=0,Oe.end.copy(Fe),Oe.end.z=0;const v=Oe.closestPointToPointParameter(yl,!0);Oe.at(v,mf);const m=is.lerp(Ne.z,Fe.z,v),d=m>=-1&&m<=1,E=yl.distanceTo(mf)<cs*.5;if(d&&E){Oe.start.fromBufferAttribute(l,f),Oe.end.fromBufferAttribute(c,f),Oe.start.applyMatrix4(o),Oe.end.applyMatrix4(o);const M=new B,x=new B;$n.distanceSqToSegment(Oe.start,Oe.end,x,M),e.push({point:x,pointOnLine:M,distance:$n.origin.distanceTo(x),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}class DE extends ln{constructor(t=new Ep,e=new au({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,l=e.count;o<l;o++,a+=2)df.fromBufferAttribute(e,o),pf.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+df.distanceTo(pf);const r=new Ac(s,2,1);return t.setAttribute("instanceDistanceStart",new Ui(r,1,0)),t.setAttribute("instanceDistanceEnd",new Ui(r,1,1)),this}raycast(t,e){const i=this.material.worldUnits,s=t.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;$n=t.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;cs=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Do.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=cs*.5;else{const h=Math.max(s.near,Do.distanceToPoint($n.origin));c=_f(s,h,l.resolution)}if(Do.radius+=c,$n.intersectsSphere(Do)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Po.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=cs*.5;else{const h=Math.max(s.near,Po.distanceToPoint($n.origin));u=_f(s,h,l.resolution)}Po.expandByScalar(u),$n.intersectsBox(Po)!==!1&&(i?RE(this,e):PE(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Sl),this.material.uniforms.resolution.value.set(Sl.z,Sl.w))}}class bp extends Ep{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setPositions(i),this}setColors(t){const e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setColors(i),this}setFromPoints(t){const e=t.length-1,i=new Float32Array(6*e);for(let s=0;s<e;s++)i[6*s]=t[s].x,i[6*s+1]=t[s].y,i[6*s+2]=t[s].z||0,i[6*s+3]=t[s+1].x,i[6*s+4]=t[s+1].y,i[6*s+5]=t[s+1].z||0;return super.setPositions(i),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class LE extends DE{constructor(t=new bp,e=new au({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}const IE={class:"viewport"},UE={key:0,class:"loading-overlay"},NE={class:"toolbar"},FE=Hi({__name:"Viewport3D",setup(n,{expose:t}){const e=gs(),i=ie(null);let s,r,o,a,l,c=new Map,u=new Map,h=new Map,f=new Map,p=0;const g=ie(!1),v=ie(!1),m=ie(!1);let d,E,M=null,x=null;function P(R){const X=R.replace("#",""),lt=parseInt(X,16);return isNaN(lt)?13808780:lt}function U(){if(!i.value)return;s=new h0,s.background=new Kt(988970);const R=i.value.clientWidth/i.value.clientHeight;r=new _n(45,R,1,1e4),r.position.set(-1200,2400,-2800),r.lookAt(0,1e3,0),o=new pE({canvas:i.value,antialias:!0}),o.setSize(i.value.clientWidth,i.value.clientHeight),o.setPixelRatio(window.devicePixelRatio),o.shadowMap.enabled=!0;const X=new T0(16777215,.5);s.add(X);const lt=new fl(16777215,.9);lt.position.set(-1500,4e3,-1500),lt.target.position.set(0,0,0),s.add(lt.target),lt.castShadow=!0,lt.shadow.mapSize.width=2048,lt.shadow.mapSize.height=2048,lt.shadow.camera.near=100,lt.shadow.camera.far=8e3,lt.shadow.camera.left=-1500,lt.shadow.camera.right=1500,lt.shadow.camera.top=1500,lt.shadow.camera.bottom=-1500,lt.shadow.bias=-.001,lt.shadow.normalBias=.02,s.add(lt);const et=new fl(16777215,.4);et.position.set(-2e3,2500,-1e3),s.add(et);const Tt=new fl(16777215,.3);Tt.position.set(0,2e3,-2500),s.add(Tt);const w=new Yr(4e3,4e3),C=new v0({opacity:.3}),y=new ln(w,C);y.rotation.x=-Math.PI/2,y.position.y=-1,y.receiveShadow=!0,s.add(y);const st=new P0(2e3,20,4473958,3355477);st.position.y=0,s.add(st),a=new _E(r,o.domElement),a.enableDamping=!0,a.dampingFactor=.1,a.target.set(0,1e3,0),a.update(),d=new C0,E=new kt,x=new au({color:4886745,linewidth:2,depthTest:!1,depthWrite:!1,resolution:new kt(i.value.clientWidth,i.value.clientHeight)}),i.value.addEventListener("click",L),window.addEventListener("resize",T)}function L(R){if(!i.value)return;const X=i.value.getBoundingClientRect();E.x=(R.clientX-X.left)/X.width*2-1,E.y=-((R.clientY-X.top)/X.height)*2+1,d.setFromCamera(E,r);const lt=Array.from(c.values()),et=d.intersectObjects(lt);if(et.length>0){const Tt=et[0].object,w=Tt.userData.componentId;w&&(N(Tt),e.selectComponent(w))}else b(),e.selectComponent(null)}function N(R){b();const X=new Ph(R.geometry),lt=[],et=X.attributes.position;for(let C=0;C<et.count;C++)lt.push(et.getX(C),et.getY(C),et.getZ(C));const Tt=new bp;Tt.setPositions(lt);const w=new LE(Tt,x);w.name="selectionOutline",w.computeLineDistances(),w.renderOrder=999,R.add(w),M=R}function b(){if(M){const R=M.getObjectByName("selectionOutline");R&&(M.remove(R),R.geometry.dispose()),M=null}}function T(){if(!i.value)return;const R=i.value.clientWidth,X=i.value.clientHeight;r.aspect=R/X,r.updateProjectionMatrix(),o.setSize(R,X)}function I(R){_t.forEach(Tt=>{Tt.pivotGroup&&s.remove(Tt.pivotGroup)}),_t.clear(),ot=[],c.forEach(Tt=>s.remove(Tt)),c.clear(),u.clear(),h.clear(),f.clear(),M=null;const X=R.position.x-R.length/2,lt=R.position.y,et=R.position.z-R.width/2;for(const Tt of R.components)it(Tt,X,lt,et);g.value=!1,v.value=!1,m.value=!1}function O(){const R=document.createElement("canvas");R.width=256,R.height=256;const X=R.getContext("2d");X.fillStyle="#8080ff",X.fillRect(0,0,256,256);for(let et=0;et<60;et++){const Tt=Math.random()*256,w=1+Math.random()*3,C=(Math.random()-.5)*20;X.strokeStyle=`rgba(${128+C}, ${128+C}, 255, 0.3)`,X.lineWidth=w,X.beginPath(),X.moveTo(0,Tt);for(let y=0;y<256;y+=10)X.lineTo(y,Tt+Math.sin(y*.05)*5+Math.random()*2);X.stroke()}const lt=new _0(R);return lt.wrapS=Fr,lt.wrapT=Fr,lt.repeat.set(2,2),lt}const V=O();function it(R,X,lt,et,Tt=0,w=0,C=0,y){if(R.type==="double_door"){const W=Tt+R.position.x,Y=w+R.position.y,pt=C+R.position.z,ht=new ms(R.length,R.height,R.width||1),mt=new eu({visible:!1}),Dt=new ln(ht,mt);Dt.position.set(X+W+R.length/2,lt+Y+R.height/2,et+pt+(R.width||1)/2),Dt.userData={componentId:R.id,componentName:R.name,componentType:R.type},s.add(Dt),c.set(R.id,Dt),R.children.forEach((ft,yt)=>{it(ft,X,lt,et,W,Y,pt,yt===0?"left":"right")});return}const st=new ms(R.length,R.height,R.width),$=P(R.color),q=new S0({color:$,roughness:.6,metalness:.02,clearcoat:.1,clearcoatRoughness:.4,normalMap:V,normalScale:new kt(.3,.3),transparent:!1,opacity:1,side:Xn}),K=new ln(st,q);K.castShadow=!0,K.receiveShadow=!0;const ct=new Ph(st),J=new su({color:0,opacity:.12,transparent:!0}),S=new dp(ct,J);K.add(S);const _=Tt+R.position.x,D=w+R.position.y,k=C+R.position.z;K.position.set(X+_+R.length/2,lt+D+R.height/2,et+k+R.width/2),K.rotation.set(is.degToRad(R.rotation.x),is.degToRad(R.rotation.y),is.degToRad(R.rotation.z)),K.userData={componentId:R.id,componentName:R.name,componentType:R.type,doorSide:y},K.visible=R.is_visible,s.add(K),c.set(R.id,K),u.set(R.id,K.position.clone()),h.set(R.id,q.clone()),f.set(R.id,K.rotation.clone());for(const W of R.children)it(W,X,lt,et,_,D,k)}let ot=[];function j(R,X,lt,et,Tt=.6){const w=X==="position"?R.position[lt]:R.rotation[lt];ot.push({target:R,prop:X,axis:lt,from:w,to:et,progress:0,duration:Tt})}function tt(R){ot=ot.filter(X=>{X.progress=Math.min(X.progress+R/X.duration,1);const lt=X.progress<.5?4*X.progress*X.progress*X.progress:1-Math.pow(-2*X.progress+2,3)/2,et=X.from+(X.to-X.from)*lt;return X.prop==="position"?X.target.position[X.axis]=et:X.target.rotation[X.axis]=et,X.progress<1})}function G(){if(g.value)c.forEach((R,X)=>{const lt=u.get(X);lt&&(j(R,"position","x",lt.x),j(R,"position","y",lt.y),j(R,"position","z",lt.z))}),g.value=!1;else{const R=new B(0,1e3,0);c.forEach(X=>{const et=X.position.clone().sub(R).normalize().multiplyScalar(300);j(X,"position","x",X.position.x+et.x),j(X,"position","y",X.position.y+et.y),j(X,"position","z",X.position.z+et.z)}),g.value=!0}}function vt(){v.value?(c.forEach((R,X)=>{const lt=h.get(X);lt&&(R.material=lt.clone())}),v.value=!1):(c.forEach(R=>{const X=R.material;X.transparent=!0,X.opacity=.3,X.needsUpdate=!0}),v.value=!0)}let _t=new Map;function Ct(R){return R==="single_door"}function Ut(R,X){for(const lt of R){if(lt.id===X)return lt;if(lt.children){const et=Ut(lt.children,X);if(et)return et}}return null}function Jt(R){const X=[],lt=e.cabinet;if(!lt)return X;const et=Ut(lt.components,R);if(et&&et.children)for(const Tt of et.children)c.has(Tt.id)&&X.push(Tt.id);return X}function at(){m.value?(c.forEach((R,X)=>{const lt=R.userData.componentType;if(Ct(lt)||lt==="drawer"){const et=_t.get(X);if(!et)return;if(Ct(lt)&&et.pivotGroup)j(et.pivotGroup,"rotation","y",0,.6),setTimeout(()=>{const Tt=et.pivotGroup;if(et.childMeshIds)for(const w of et.childMeshIds){const C=c.get(w),y=_t.get(w);C&&y&&(Tt.remove(C),y.parent.add(C),C.position.set(y.posX,y.posY,y.posZ),C.rotation.set(0,y.rotY,0))}Tt.remove(R),et.parent.add(R),R.position.set(et.posX,et.posY,et.posZ),R.rotation.y=et.rotY,s.remove(Tt)},650);else if(lt==="drawer"&&(j(R,"position","z",et.posZ),et.childMeshIds))for(const Tt of et.childMeshIds){const w=c.get(Tt),C=_t.get(Tt);w&&C&&j(w,"position","z",C.posZ)}}}),m.value=!1,setTimeout(()=>_t.clear(),700)):(c.forEach(R=>{const X=R.userData.componentType,lt=R.userData.componentId;if(Ct(X)){const et=Jt(lt),Tt=R.userData.doorSide,w=new B;R.getWorldPosition(w),R.rotation.y,_t.set(lt,{parent:R.parent,posX:R.position.x,posY:R.position.y,posZ:R.position.z,rotY:R.rotation.y,worldPosX:w.x,worldPosY:w.y,worldPosZ:w.z,childMeshIds:et});const C=R.geometry;C.computeBoundingBox();const y=C.boundingBox,st=(y.max.x-y.min.x)/2;let $,q;Tt==="right"?($=R.position.x+st,q=-is.degToRad(120)):($=R.position.x-st,q=is.degToRad(120));const K=w.x+($-R.position.x),ct=new vr;ct.position.set(K,w.y,w.z),s.add(ct),s.remove(R),ct.add(R),R.position.x=Tt==="right"?-st:st,R.position.y=0,R.position.z=0,R.rotation.y=0;for(const J of et){const S=c.get(J);if(S){const _=new B;S.getWorldPosition(_),_t.set(J,{parent:S.parent,posX:S.position.x,posY:S.position.y,posZ:S.position.z,rotY:S.rotation.y,worldPosX:_.x,worldPosY:_.y,worldPosZ:_.z}),s.remove(S),ct.add(S),S.position.x=_.x-K,S.position.y=0,S.position.z=_.z-w.z}}_t.get(lt).pivotGroup=ct,j(ct,"rotation","y",q)}else if(X==="drawer"){const et=R.geometry;et.computeBoundingBox();const Tt=et.boundingBox,C=(Tt.max.z-Tt.min.z)*2/3,y=Jt(lt);_t.set(lt,{parent:R.parent,posX:R.position.x,posY:R.position.y,posZ:R.position.z,rotY:R.rotation.y,childMeshIds:y}),j(R,"position","z",R.position.z-C);for(const st of y){const $=c.get(st);$&&(_t.set(st,{parent:$.parent,posX:$.position.x,posY:$.position.y,posZ:$.position.z,rotY:$.rotation.y}),j($,"position","z",$.position.z-C))}}}),m.value=!0)}function gt(){m.value&&(c.forEach((R,X)=>{const lt=R.userData.componentType;if(Ct(lt)||lt==="drawer"){const et=_t.get(X);if(!et)return;if(Ct(lt)&&et.pivotGroup){const Tt=et.pivotGroup;if(et.childMeshIds)for(const w of et.childMeshIds){const C=c.get(w),y=_t.get(w);C&&y&&(Tt.remove(C),y.parent.add(C),C.position.set(y.posX,y.posY,y.posZ),C.rotation.set(0,y.rotY,0))}Tt.remove(R),et.parent.add(R),R.position.set(et.posX,et.posY,et.posZ),R.rotation.y=et.rotY,s.remove(Tt)}else if(lt==="drawer"&&(R.position.z=et.posZ,et.childMeshIds))for(const Tt of et.childMeshIds){const w=c.get(Tt),C=_t.get(Tt);w&&C&&(w.position.z=C.posZ)}}}),_t.clear()),c.forEach((R,X)=>{const lt=u.get(X),et=f.get(X);lt&&R.position.copy(lt),et&&R.rotation.copy(et)}),c.forEach((R,X)=>{const lt=h.get(X);lt&&(R.material=lt.clone())}),b(),e.selectComponent(null),g.value=!1,v.value=!1,m.value=!1}function wt(R=0){l=requestAnimationFrame(wt);const X=p?(R-p)/1e3:0;p=R,tt(X),a.update(),o.render(s,r)}return en(()=>e.cabinet,R=>{R&&s&&I(R)},{deep:!0}),en(()=>e.selectedComponentId,R=>{if(R){const X=c.get(R);X&&X!==M&&N(X)}else b()}),_s(()=>{U(),wt()}),xa(()=>{var R;cancelAnimationFrame(l),window.removeEventListener("resize",T),(R=i.value)==null||R.removeEventListener("click",L),o==null||o.dispose()}),t({toggleExplode:G,toggleTransparent:vt,toggleDoors:at,resetAll:gt}),(R,X)=>(Bt(),zt("div",IE,[rt("canvas",{ref_key:"canvasRef",ref:i,class:"canvas"},null,512),be(e).cabinet?Ni("",!0):(Bt(),zt("div",UE,[...X[0]||(X[0]=[rt("p",null,"等待加载柜子模型...",-1)])])),rt("div",NE,[rt("button",{class:we(["tool-btn",{active:g.value}]),onClick:G,title:"爆炸图"},"爆炸图",2),rt("button",{class:we(["tool-btn",{active:v.value}]),onClick:vt,title:"透视图"},"透视图",2),rt("button",{class:we(["tool-btn",{active:m.value}]),onClick:at,title:"门板/抽屉打开"},"开门",2),rt("button",{class:"tool-btn",onClick:gt,title:"复原"},"复原")]),X[1]||(X[1]=rt("div",{class:"hint"},[rt("span",null,"点击组件可选中查看属性")],-1))]))}}),gf=vs(FE,[["__scopeId","data-v-16118389"]]),OE={class:"chat-panel"},BE={key:0,class:"empty-hint"},zE={class:"role-label"},HE={class:"content"},kE={key:1,class:"message assistant"},VE={class:"content streaming"},GE={class:"chat-input"},WE=["placeholder","disabled"],XE=["disabled"],$E=Hi({__name:"ChatPanel",setup(n){const t=Qo(),e=ir(),i=ie(""),s=ie(null);async function r(){const l=i.value.trim();!l||!e.isConnected||t.isStreaming||(i.value="",e.sendChatMessage(l),await a())}function o(l){l.key==="Enter"&&!l.shiftKey&&(l.preventDefault(),r())}async function a(){await ga(),s.value&&(s.value.scrollTop=s.value.scrollHeight)}return en(()=>t.messages.length,()=>{a()}),en(()=>t.currentStreamContent,()=>{a()}),(l,c)=>(Bt(),zt("div",OE,[rt("div",{class:"messages",ref_key:"messagesContainer",ref:s},[be(t).messages.length===0&&!be(t).isStreaming?(Bt(),zt("div",BE,[...c[1]||(c[1]=[Pd('<div class="empty-icon" data-v-d0d29d11>💬</div><p class="empty-title" data-v-d0d29d11>输入自然语言指令来编辑柜子</p><div class="examples" data-v-d0d29d11><p class="example" data-v-d0d29d11>&quot;在中间加一块隔板&quot;</p><p class="example" data-v-d0d29d11>&quot;把左侧板加高10cm&quot;</p><p class="example" data-v-d0d29d11>&quot;换成橡木材料&quot;</p></div>',3)])])):Ni("",!0),(Bt(!0),zt(ge,null,gn(be(t).messages,u=>(Bt(),zt("div",{key:u.id,class:we(["message",u.role])},[rt("div",zE,Zt(u.role==="user"?"你":u.role==="assistant"?"AI":"系统"),1),rt("div",HE,Zt(u.content),1)],2))),128)),be(t).isStreaming?(Bt(),zt("div",kE,[c[3]||(c[3]=rt("div",{class:"role-label"},"AI",-1)),rt("div",VE,[c[2]||(c[2]=rt("span",{class:"typing-indicator"},null,-1)),Rd(" "+Zt(be(t).currentStreamContent||"思考中..."),1)])])):Ni("",!0)],512),rt("div",GE,[pn(rt("textarea",{"onUpdate:modelValue":c[0]||(c[0]=u=>i.value=u),onKeydown:o,placeholder:be(t).isStreaming?"等待回复完成...":"输入编辑指令...",rows:"2",disabled:!be(e).isConnected||be(t).isStreaming},null,40,WE),[[Nl,i.value]]),rt("button",{onClick:r,disabled:!i.value.trim()||!be(e).isConnected||be(t).isStreaming,class:"send-btn"},[...c[4]||(c[4]=[rt("span",{class:"send-icon"},"↑",-1)])],8,XE)])]))}}),vf=vs($E,[["__scopeId","data-v-d0d29d11"]]),YE={class:"component-panel"},jE={class:"tree-section"},qE={class:"tree-content"},KE={key:0,class:"empty"},ZE={key:1,class:"tree"},JE=["onClick"],QE={class:"item-content"},tb=["onClick"],eb={key:1,class:"expand-placeholder"},nb={class:"component-name"},ib={class:"component-type"},sb={key:2,class:"children-count"},rb={key:0,class:"children"},ob=["onClick"],ab={class:"item-content"},lb=["onClick"],cb={key:1,class:"expand-placeholder"},ub={class:"component-name"},hb={class:"component-type"},fb={key:0,class:"children"},db=["onClick"],pb={class:"item-content"},mb={class:"component-name"},_b={class:"component-type"},gb={class:"detail-section"},vb={class:"detail-content"},xb={key:0,class:"properties"},Sb={class:"prop-row"},yb={class:"prop-value"},Mb={class:"prop-row"},Eb={class:"prop-value"},bb={class:"prop-row"},Tb={class:"prop-value"},Ab={class:"prop-row"},wb={class:"prop-value"},Cb={class:"prop-row"},Rb=["value"],Pb=["value"],Db={class:"prop-row color-row"},Lb={class:"color-picker"},Ib=["title","onClick"],Ub={key:1,class:"empty-hint"},Nb=Hi({__name:"ComponentPanel",setup(n){const t=gs(),e=ir(),i=[{name:"原木色",value:"#D2B48C"},{name:"白色",value:"#FFFFFF"},{name:"深胡桃",value:"#5C3A21"},{name:"浅橡木",value:"#C4A882"},{name:"灰色",value:"#B0B0B0"},{name:"黑色",value:"#333333"},{name:"蓝色",value:"#4A90D9"},{name:"绿色",value:"#4ECCA3"},{name:"红色",value:"#E94560"}],s=[{name:"多层板",value:"plywood"},{name:"中密度板",value:"mdf"},{name:"刨花板",value:"particleboard"},{name:"橡木",value:"oak"},{name:"胡桃木",value:"walnut"}],r=hs(()=>{var m;return((m=t.cabinet)==null?void 0:m.components)||[]}),o=hs(()=>t.selectedComponent);function a(m){t.selectComponent(m===t.selectedComponentId?null:m)}function l(m,d){d.stopPropagation(),t.toggleExpand(m)}function c(m){return t.isExpanded(m)}function u(m){return m.children&&m.children.length>0}function h(m){var d;return((d=m.children)==null?void 0:d.length)||0}function f(m){return{side_panel:"侧板",back_panel:"背板",top_panel:"顶板",bottom_panel:"底板",shelf:"隔板",single_door:"单开门",double_door:"双开门",drawer:"抽屉",divider:"分隔",handle:"拉手",custom:"自定义"}[m]||m}async function p(m,d){const E=e.currentProjectId;if(E)try{const M=await fetch(vn(`/api/projects/${E}/components/${m}`),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({component_id:m,properties:d})});if(M.ok){const x=await M.json();x.cabinet&&t.setCabinet(x.cabinet)}}catch(M){console.error("修改组件属性失败:",M)}}async function g(m){o.value&&await p(o.value.id,{color:m})}async function v(m){o.value&&await p(o.value.id,{material:m})}return(m,d)=>(Bt(),zt("div",YE,[rt("div",jE,[d[2]||(d[2]=rt("div",{class:"section-title"},"组件树",-1)),rt("div",qE,[r.value.length===0?(Bt(),zt("div",KE,"暂无组件")):(Bt(),zt("div",ZE,[(Bt(!0),zt(ge,null,gn(r.value,E=>(Bt(),zt("div",{key:E.id,class:we(["tree-item",{selected:be(t).selectedComponentId===E.id}]),onClick:M=>a(E.id)},[rt("div",QE,[u(E)?(Bt(),zt("button",{key:0,class:we(["expand-btn",{expanded:c(E.id)}]),onClick:M=>l(E.id,M)}," ▶ ",10,tb)):(Bt(),zt("span",eb)),rt("span",nb,Zt(E.name),1),rt("span",ib,Zt(f(E.type)),1),u(E)?(Bt(),zt("span",sb,Zt(h(E)),1)):Ni("",!0)]),c(E.id)&&u(E)?(Bt(),zt("div",rb,[(Bt(!0),zt(ge,null,gn(E.children,M=>(Bt(),zt("div",{key:M.id,class:we(["tree-item child",{selected:be(t).selectedComponentId===M.id}]),onClick:Fl(x=>a(M.id),["stop"])},[rt("div",ab,[u(M)?(Bt(),zt("button",{key:0,class:we(["expand-btn",{expanded:c(M.id)}]),onClick:x=>l(M.id,x)}," ▶ ",10,lb)):(Bt(),zt("span",cb)),rt("span",ub,Zt(M.name),1),rt("span",hb,Zt(f(M.type)),1)]),c(M.id)&&u(M)?(Bt(),zt("div",fb,[(Bt(!0),zt(ge,null,gn(M.children,x=>(Bt(),zt("div",{key:x.id,class:we(["tree-item grandchild",{selected:be(t).selectedComponentId===x.id}]),onClick:Fl(P=>a(x.id),["stop"])},[rt("div",pb,[d[1]||(d[1]=rt("span",{class:"expand-placeholder"},null,-1)),rt("span",mb,Zt(x.name),1),rt("span",_b,Zt(f(x.type)),1)])],10,db))),128))])):Ni("",!0)],10,ob))),128))])):Ni("",!0)],10,JE))),128))]))])]),rt("div",gb,[d[9]||(d[9]=rt("div",{class:"section-title"},"属性",-1)),rt("div",vb,[o.value?(Bt(),zt("div",xb,[rt("div",Sb,[d[3]||(d[3]=rt("span",{class:"prop-label"},"名称",-1)),rt("span",yb,Zt(o.value.name),1)]),rt("div",Mb,[d[4]||(d[4]=rt("span",{class:"prop-label"},"类型",-1)),rt("span",Eb,Zt(f(o.value.type)),1)]),rt("div",bb,[d[5]||(d[5]=rt("span",{class:"prop-label"},"尺寸",-1)),rt("span",Tb,Zt(o.value.length)+" × "+Zt(o.value.height)+" × "+Zt(o.value.width)+" mm ",1)]),rt("div",Ab,[d[6]||(d[6]=rt("span",{class:"prop-label"},"位置",-1)),rt("span",wb," X:"+Zt(o.value.position.x)+" Y:"+Zt(o.value.position.y)+" Z:"+Zt(o.value.position.z),1)]),rt("div",Cb,[d[7]||(d[7]=rt("span",{class:"prop-label"},"材料",-1)),rt("select",{class:"prop-select",value:o.value.material,onChange:d[0]||(d[0]=E=>v(E.target.value))},[(Bt(),zt(ge,null,gn(s,E=>rt("option",{key:E.value,value:E.value},Zt(E.name),9,Pb)),64))],40,Rb)]),rt("div",Db,[d[8]||(d[8]=rt("span",{class:"prop-label"},"颜色",-1)),rt("div",Lb,[(Bt(),zt(ge,null,gn(i,E=>rt("div",{key:E.value,class:we(["color-option",{active:o.value.color===E.value}]),style:fa({background:E.value}),title:E.name,onClick:M=>g(E.value)},null,14,Ib)),64))])])])):(Bt(),zt("div",Ub," 点击组件查看属性 "))])])]))}}),xf=vs(Nb,[["__scopeId","data-v-442a80aa"]]),Fb={class:"history-panel"},Ob={class:"snapshot-list"},Bb={key:0,class:"empty"},zb=["onClick"],Hb={class:"snap-info"},kb={class:"snap-index"},Vb={class:"snap-desc"},Gb={class:"snap-time"},Wb=Hi({__name:"HistoryPanel",setup(n){const t=gs(),e=ir(),i=ie([]),s=ie(-1);async function r(){const l=e.currentProjectId;if(l)try{const u=await(await fetch(vn(`/api/projects/${l}/snapshots`))).json();i.value=u.snapshots||[],s.value=u.current_index??-1}catch(c){console.error("加载快照列表失败:",c)}}async function o(l){const c=e.currentProjectId;if(c)try{const h=await(await fetch(vn(`/api/projects/${c}/snapshots/${l}/restore`),{method:"POST"})).json();h.success&&h.cabinet&&(t.setCabinet(h.cabinet),s.value=l)}catch(u){console.error("恢复快照失败:",u)}}function a(l){return new Date(l*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}return _s(()=>{r()}),en(()=>e.currentProjectId,()=>{r()}),en(()=>t.cabinet,()=>{r()},{deep:!0}),(l,c)=>(Bt(),zt("div",Fb,[rt("div",Ob,[i.value.length===0?(Bt(),zt("div",Bb,"暂无历史记录")):Ni("",!0),(Bt(!0),zt(ge,null,gn([...i.value].reverse(),u=>(Bt(),zt("div",{key:u.index,class:we(["snapshot-item",{current:u.index===s.value}]),onClick:h=>o(u.index)},[rt("div",Hb,[rt("span",kb,"v"+Zt(u.index+1),1),rt("span",Vb,Zt(u.description),1)]),rt("span",Gb,Zt(a(u.timestamp)),1)],10,zb))),128))])]))}}),Sf=vs(Wb,[["__scopeId","data-v-ab1140c6"]]),Xb={class:"scheme-panel"},$b={class:"action-bar"},Yb={class:"input-group"},jb={class:"action-row"},qb={class:"template-group"},Kb=["value"],Zb={class:"scheme-list"},Jb={key:0,class:"empty"},Qb=["onClick"],tT={class:"scheme-info"},eT=["onKeydown","onBlur"],nT={key:1,class:"scheme-name"},iT={class:"scheme-actions"},sT={class:"scheme-time"},rT=["onClick"],oT=["onClick"],aT=Hi({__name:"SchemePanel",setup(n){const t=gs(),e=ir(),i=Qo(),s=ie([]),r=ie(""),o=ie("cabinet"),a=ie(null),l=ie(""),c=[{value:"cabinet",label:"标准柜"},{value:"kitchen",label:"厨柜"},{value:"wardrobe",label:"衣柜"},{value:"bookshelf",label:"书架"}];async function u(){try{const E=await fetch(vn("/api/projects"));s.value=await E.json()}catch(E){console.error("加载方案列表失败:",E)}}en(()=>e.schemeListVersion,()=>{u()});async function h(E){try{const x=await(await fetch(vn(`/api/projects/${E}`))).json();x.cabinet&&(t.setCabinet(x.cabinet),i.clearMessages(),e.disconnect(),e.connect(E))}catch(M){console.error("切换方案失败:",M)}}async function f(){const E=r.value.trim()||"新方案",M=o.value;r.value="";try{const P=await(await fetch(vn(`/api/projects?name=${encodeURIComponent(E)}&template=${encodeURIComponent(M)}`),{method:"POST"})).json();P.id&&(await u(),await h(P.id))}catch(x){console.error("创建方案失败:",x)}}async function p(E,M){M.stopPropagation();try{await fetch(vn(`/api/projects/${E}`),{method:"DELETE"}),await u()}catch(x){console.error("删除方案失败:",x)}}function g(E,M){M.stopPropagation(),a.value=E.id,l.value=E.name}async function v(E){const M=l.value.trim();if(!M){m();return}try{await fetch(vn(`/api/projects/${E}?name=${encodeURIComponent(M)}`),{method:"PUT"}),await u()}catch(x){console.error("重命名失败:",x)}m()}function m(){a.value=null,l.value=""}function d(E){return new Date(E).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}return _s(()=>{u()}),(E,M)=>(Bt(),zt("div",Xb,[rt("div",$b,[rt("div",Yb,[M[4]||(M[4]=rt("svg",{class:"input-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[rt("path",{d:"M12 5v14M5 12h14"})],-1)),pn(rt("input",{"onUpdate:modelValue":M[0]||(M[0]=x=>r.value=x),class:"name-input",placeholder:"新方案名称...",onKeydown:za(f,["enter"])},null,544),[[Nl,r.value]])]),rt("div",jb,[rt("div",qb,[M[5]||(M[5]=Pd('<svg class="template-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-52eab328><rect x="3" y="3" width="7" height="7" data-v-52eab328></rect><rect x="14" y="3" width="7" height="7" data-v-52eab328></rect><rect x="3" y="14" width="7" height="7" data-v-52eab328></rect><rect x="14" y="14" width="7" height="7" data-v-52eab328></rect></svg>',1)),pn(rt("select",{"onUpdate:modelValue":M[1]||(M[1]=x=>o.value=x),class:"template-select"},[(Bt(),zt(ge,null,gn(c,x=>rt("option",{key:x.value,value:x.value},Zt(x.label),9,Kb)),64))],512),[[og,o.value]])]),rt("button",{class:"action-btn create",onClick:f},[...M[6]||(M[6]=[rt("svg",{class:"btn-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[rt("path",{d:"M12 5v14M5 12h14"})],-1),rt("span",null,"新建",-1)])])])]),rt("div",Zb,[s.value.length===0?(Bt(),zt("div",Jb,"暂无方案")):Ni("",!0),(Bt(!0),zt(ge,null,gn(s.value,x=>(Bt(),zt("div",{key:x.id,class:we(["scheme-item",{current:x.id===be(e).currentProjectId}]),onClick:P=>h(x.id)},[rt("div",tT,[a.value===x.id?pn((Bt(),zt("input",{key:0,"onUpdate:modelValue":M[2]||(M[2]=P=>l.value=P),class:"rename-input",onClick:M[3]||(M[3]=Fl(()=>{},["stop"])),onKeydown:[za(P=>v(x.id),["enter"]),za(m,["escape"])],onBlur:P=>v(x.id),autofocus:""},null,40,eT)),[[Nl,l.value]]):(Bt(),zt("span",nT,Zt(x.name),1))]),rt("div",iT,[rt("span",sT,Zt(d(x.updated_at)),1),rt("button",{class:"action-icon-btn",onClick:P=>g(x,P),title:"重命名"},"✎",8,rT),rt("button",{class:"delete-btn",onClick:P=>p(x.id,P),title:"删除"},"×",8,oT)])],10,Qb))),128))])]))}}),yf=vs(aT,[["__scopeId","data-v-52eab328"]]),lT={class:"toast-container"},cT=["onClick"],uT={class:"toast-icon"},hT={class:"toast-message"},fT=Hi({__name:"ToastNotification",setup(n,{expose:t}){const e=ie([]);let i=0;function s(a,l="info",c=3e3){const u=i++,h={id:u,message:a,type:l,duration:c};e.value.push(h),c>0&&setTimeout(()=>{r(u)},c)}function r(a){const l=e.value.findIndex(c=>c.id===a);l>-1&&e.value.splice(l,1)}function o(a){switch(a){case"success":return"✓";case"error":return"✕";case"warning":return"⚠";case"info":return"ℹ"}}return t({addToast:s}),(a,l)=>(Bt(),zt("div",lT,[_e(tg,{name:"toast"},{default:td(()=>[(Bt(!0),zt(ge,null,gn(e.value,c=>(Bt(),zt("div",{key:c.id,class:we(["toast",c.type]),onClick:u=>r(c.id)},[rt("span",uT,Zt(o(c.type)),1),rt("span",hT,Zt(c.message),1)],10,cT))),128))]),_:1})]))}}),dT=vs(fT,[["__scopeId","data-v-f3832dd5"]]),pT={class:"main-content"},mT={class:"viewport-wrapper"},_T={class:"tool-panel"},gT={class:"tool-tabs"},vT=["onClick"],xT={class:"tab-icon"},ST={class:"tab-label"},yT={class:"tool-content"},MT={class:"tab-panel"},ET={class:"tab-panel"},bT={class:"tab-panel"},TT={class:"tab-panel"},AT={class:"mobile-viewport"},wT={class:"mobile-tabs"},CT=["onClick"],RT={class:"tab-icon"},PT={class:"tab-label"},DT={class:"mobile-tool-panel"},LT={class:"tab-panel"},IT={class:"tab-panel"},UT={class:"tab-panel"},NT={class:"tab-panel"},FT=Hi({__name:"App",setup(n){const t=ir(),e=gs(),i=ie("chat"),s=ie(null),r=ie(!1);function o(){r.value=window.innerWidth<768}_s(()=>{const l=(u,h)=>{var f;(f=s.value)==null||f.addToast(u,h)};Tg(l),Eg(l);const c=localStorage.getItem("lastProjectId")||"default";t.connect(c),o(),window.addEventListener("resize",o)}),en(()=>e.selectedComponentId,l=>{l&&(i.value="component")});const a=[{key:"chat",icon:"💬",label:"对话"},{key:"component",icon:"🧩",label:"组件"},{key:"history",icon:"📋",label:"历史"},{key:"scheme",icon:"📁",label:"方案"}];return(l,c)=>(Bt(),zt("div",{class:we(["app-container",{"is-mobile":r.value}])},[r.value?(Bt(),zt(ge,{key:1},[rt("div",AT,[_e(gf)]),_e(eh,{class:"mobile-header"}),rt("div",wT,[(Bt(),zt(ge,null,gn(a,u=>rt("button",{key:u.key,class:we(["mobile-tab-btn",{active:i.value===u.key}]),onClick:h=>i.value=u.key},[rt("span",RT,Zt(u.icon),1),rt("span",PT,Zt(u.label),1)],10,CT)),64))]),rt("div",DT,[pn(rt("div",LT,[_e(vf)],512),[[Mi,i.value==="chat"]]),pn(rt("div",IT,[_e(xf)],512),[[Mi,i.value==="component"]]),pn(rt("div",UT,[_e(Sf)],512),[[Mi,i.value==="history"]]),pn(rt("div",NT,[_e(yf)],512),[[Mi,i.value==="scheme"]])])],64)):(Bt(),zt(ge,{key:0},[_e(eh),rt("div",pT,[rt("div",mT,[_e(gf)]),rt("div",_T,[rt("div",gT,[(Bt(),zt(ge,null,gn(a,u=>rt("button",{key:u.key,class:we(["tab-btn",{active:i.value===u.key}]),onClick:h=>i.value=u.key},[rt("span",xT,Zt(u.icon),1),rt("span",ST,Zt(u.label),1)],10,vT)),64))]),rt("div",yT,[pn(rt("div",MT,[_e(vf)],512),[[Mi,i.value==="chat"]]),pn(rt("div",ET,[_e(xf)],512),[[Mi,i.value==="component"]]),pn(rt("div",bT,[_e(Sf)],512),[[Mi,i.value==="history"]]),pn(rt("div",TT,[_e(yf)],512),[[Mi,i.value==="scheme"]])])])])],64)),_e(dT,{ref_key:"toastRef",ref:s},null,512)],2))}}),Tp=fg(FT);Tp.use(mg());Tp.mount("#app");
