(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _d(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Tt={},io=[],dn=()=>{},Lg=()=>!1,Ec=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Tc=t=>t.startsWith("onUpdate:"),Ht=Object.assign,vd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},B0=Object.prototype.hasOwnProperty,dt=(t,e)=>B0.call(t,e),Ge=Array.isArray,so=t=>Ia(t)==="[object Map]",wc=t=>Ia(t)==="[object Set]",Sh=t=>Ia(t)==="[object Date]",Ye=t=>typeof t=="function",ht=t=>typeof t=="string",zn=t=>typeof t=="symbol",ct=t=>t!==null&&typeof t=="object",Ug=t=>(ct(t)||Ye(t))&&Ye(t.then)&&Ye(t.catch),Ng=Object.prototype.toString,Ia=t=>Ng.call(t),k0=t=>Ia(t).slice(8,-1),Og=t=>Ia(t)==="[object Object]",Ac=t=>ht(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ea=_d(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cc=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},z0=/-\w/g,bn=Cc(t=>t.replace(z0,e=>e.slice(1).toUpperCase())),H0=/\B([A-Z])/g,Ps=Cc(t=>t.replace(H0,"-$1").toLowerCase()),Rc=Cc(t=>t.charAt(0).toUpperCase()+t.slice(1)),eu=Cc(t=>t?`on${Rc(t)}`:""),Si=(t,e)=>!Object.is(t,e),Vl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Fg=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Pc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},V0=t=>{const e=ht(t)?Number(t):NaN;return isNaN(e)?t:e};let Mh;const Dc=()=>Mh||(Mh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hn(t){if(Ge(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=ht(i)?X0(i):Hn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(ht(t)||ct(t))return t}const G0=/;(?![^(]*\))/g,W0=/:([^]+)/,$0=/\/\*[^]*?\*\//g;function X0(t){const e={};return t.replace($0,"").split(G0).forEach(n=>{if(n){const i=n.split(W0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function De(t){let e="";if(ht(t))e=t;else if(Ge(t))for(let n=0;n<t.length;n++){const i=De(t[n]);i&&(e+=i+" ")}else if(ct(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const j0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Y0=_d(j0);function Bg(t){return!!t||t===""}function q0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=La(t[i],e[i]);return n}function La(t,e){if(t===e)return!0;let n=Sh(t),i=Sh(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=zn(t),i=zn(e),n||i)return t===e;if(n=Ge(t),i=Ge(e),n||i)return n&&i?q0(t,e):!1;if(n=ct(t),i=ct(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!La(t[o],e[o]))return!1}}return String(t)===String(e)}function K0(t,e){return t.findIndex(n=>La(n,e))}const kg=t=>!!(t&&t.__v_isRef===!0),Xe=t=>ht(t)?t:t==null?"":Ge(t)||ct(t)&&(t.toString===Ng||!Ye(t.toString))?kg(t)?Xe(t.value):JSON.stringify(t,zg,2):String(t),zg=(t,e)=>kg(e)?zg(t,e.value):so(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[tu(i,r)+" =>"]=s,n),{})}:wc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>tu(n))}:zn(e)?tu(e):ct(e)&&!Ge(e)&&!Og(e)?String(e):e,tu=(t,e="")=>{var n;return zn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gt;class Hg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Gt&&(Gt.active?(this.parent=Gt,this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Gt;try{return Gt=this,e()}finally{Gt=n}}}on(){++this._on===1&&(this.prevScope=Gt,Gt=this)}off(){if(this._on>0&&--this._on===0){if(Gt===this)Gt=this.prevScope;else{let e=Gt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Vg(t){return new Hg(t)}function yd(){return Gt}function Gg(t,e=!1){Gt&&Gt.cleanups.push(t)}let At;const nu=new WeakSet;class Wg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Gt&&(Gt.active?Gt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,nu.has(this)&&(nu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Eh(this),jg(this);const e=At,n=ui;At=this,ui=!0;try{return this.fn()}finally{Yg(this),At=e,ui=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Sd(e);this.deps=this.depsTail=void 0,Eh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?nu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){af(this)&&this.run()}get dirty(){return af(this)}}let $g=0,ta,na;function Xg(t,e=!1){if(t.flags|=8,e){t.next=na,na=t;return}t.next=ta,ta=t}function xd(){$g++}function bd(){if(--$g>0)return;if(na){let e=na;for(na=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ta;){let e=ta;for(ta=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function jg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Yg(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Sd(i),Z0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function af(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(qg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function qg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===da)||(t.globalVersion=da,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!af(t))))return;t.flags|=2;const e=t.dep,n=At,i=ui;At=t,ui=!0;try{jg(t);const s=t.fn(t._value);(e.version===0||Si(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{At=n,ui=i,Yg(t),t.flags&=-3}}function Sd(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Sd(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Z0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ui=!0;const Kg=[];function Ji(){Kg.push(ui),ui=!1}function Qi(){const t=Kg.pop();ui=t===void 0?!0:t}function Eh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=At;At=void 0;try{e()}finally{At=n}}}let da=0;class J0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Md{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!At||!ui||At===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==At)n=this.activeLink=new J0(At,this),At.deps?(n.prevDep=At.depsTail,At.depsTail.nextDep=n,At.depsTail=n):At.deps=At.depsTail=n,Zg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=At.depsTail,n.nextDep=void 0,At.depsTail.nextDep=n,At.depsTail=n,At.deps===n&&(At.deps=i)}return n}trigger(e){this.version++,da++,this.notify(e)}notify(e){xd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{bd()}}}function Zg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Zg(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const tc=new WeakMap,ar=Symbol(""),lf=Symbol(""),ha=Symbol("");function cn(t,e,n){if(ui&&At){let i=tc.get(t);i||tc.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Md),s.map=i,s.key=n),s.track()}}function Vi(t,e,n,i,s,r){const o=tc.get(t);if(!o){da++;return}const a=l=>{l&&l.trigger()};if(xd(),e==="clear")o.forEach(a);else{const l=Ge(t),c=l&&Ac(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===ha||!zn(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(ha)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ar)),so(t)&&a(o.get(lf)));break;case"delete":l||(a(o.get(ar)),so(t)&&a(o.get(lf)));break;case"set":so(t)&&a(o.get(ar));break}}bd()}function Q0(t,e){const n=tc.get(t);return n&&n.get(e)}function Rr(t){const e=ft(t);return e===t?e:(cn(e,"iterate",ha),Bn(t)?e:e.map(hi))}function Ic(t){return cn(t=ft(t),"iterate",ha),t}function xi(t,e){return es(t)?po(Yi(t)?hi(e):e):hi(e)}const ey={__proto__:null,[Symbol.iterator](){return iu(this,Symbol.iterator,t=>xi(this,t))},concat(...t){return Rr(this).concat(...t.map(e=>Ge(e)?Rr(e):e))},entries(){return iu(this,"entries",t=>(t[1]=xi(this,t[1]),t))},every(t,e){return Di(this,"every",t,e,void 0,arguments)},filter(t,e){return Di(this,"filter",t,e,n=>n.map(i=>xi(this,i)),arguments)},find(t,e){return Di(this,"find",t,e,n=>xi(this,n),arguments)},findIndex(t,e){return Di(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Di(this,"findLast",t,e,n=>xi(this,n),arguments)},findLastIndex(t,e){return Di(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Di(this,"forEach",t,e,void 0,arguments)},includes(...t){return su(this,"includes",t)},indexOf(...t){return su(this,"indexOf",t)},join(t){return Rr(this).join(t)},lastIndexOf(...t){return su(this,"lastIndexOf",t)},map(t,e){return Di(this,"map",t,e,void 0,arguments)},pop(){return No(this,"pop")},push(...t){return No(this,"push",t)},reduce(t,...e){return Th(this,"reduce",t,e)},reduceRight(t,...e){return Th(this,"reduceRight",t,e)},shift(){return No(this,"shift")},some(t,e){return Di(this,"some",t,e,void 0,arguments)},splice(...t){return No(this,"splice",t)},toReversed(){return Rr(this).toReversed()},toSorted(t){return Rr(this).toSorted(t)},toSpliced(...t){return Rr(this).toSpliced(...t)},unshift(...t){return No(this,"unshift",t)},values(){return iu(this,"values",t=>xi(this,t))}};function iu(t,e,n){const i=Ic(t),s=i[e]();return i!==t&&!Bn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const ty=Array.prototype;function Di(t,e,n,i,s,r){const o=Ic(t),a=o!==t&&!Bn(t),l=o[e];if(l!==ty[e]){const f=l.apply(t,r);return a?hi(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,xi(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Th(t,e,n,i){const s=Ic(t),r=s!==t&&!Bn(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=xi(t,c)),n.call(this,c,xi(t,u),f,t)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,t)}));const l=s[e](o,...i);return a?xi(t,l):l}function su(t,e,n){const i=ft(t);cn(i,"iterate",ha);const s=i[e](...n);return(s===-1||s===!1)&&Lc(n[0])?(n[0]=ft(n[0]),i[e](...n)):s}function No(t,e,n=[]){Ji(),xd();const i=ft(t)[e].apply(t,n);return bd(),Qi(),i}const ny=_d("__proto__,__v_isRef,__isVue"),Jg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(zn));function iy(t){zn(t)||(t=String(t));const e=ft(this);return cn(e,"has",t),e.hasOwnProperty(t)}class Qg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?hy:i_:r?n_:t_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ge(e);if(!s){let l;if(o&&(l=ey[n]))return l;if(n==="hasOwnProperty")return iy}const a=Reflect.get(e,n,Lt(e)?e:i);if((zn(n)?Jg.has(n):ny(n))||(s||cn(e,"get",n),r))return a;if(Lt(a)){const l=o&&Ac(n)?a:a.value;return s&&ct(l)?nc(l):l}return ct(a)?s?nc(a):Sr(a):a}}class e_ extends Qg{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=Ge(e)&&Ac(n);if(!this._isShallow){const c=es(r);if(!Bn(i)&&!es(i)&&(r=ft(r),i=ft(i)),!o&&Lt(r)&&!Lt(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:dt(e,n),l=Reflect.set(e,n,i,Lt(e)?e:s);return e===ft(s)&&(a?Si(i,r)&&Vi(e,"set",n,i):Vi(e,"add",n,i)),l}deleteProperty(e,n){const i=dt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Vi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!zn(n)||!Jg.has(n))&&cn(e,"has",n),i}ownKeys(e){return cn(e,"iterate",Ge(e)?"length":ar),Reflect.ownKeys(e)}}class sy extends Qg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ry=new e_,oy=new sy,ay=new e_(!0);const cf=t=>t,Ka=t=>Reflect.getPrototypeOf(t);function ly(t,e,n){return function(...i){const s=this.__v_raw,r=ft(s),o=so(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?cf:e?po:hi;return!e&&cn(r,"iterate",l?lf:ar),Ht(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function Za(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function cy(t,e){const n={get(s){const r=this.__v_raw,o=ft(r),a=ft(s);t||(Si(s,a)&&cn(o,"get",s),cn(o,"get",a));const{has:l}=Ka(o),c=e?cf:t?po:hi;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&cn(ft(s),"iterate",ar),s.size},has(s){const r=this.__v_raw,o=ft(r),a=ft(s);return t||(Si(s,a)&&cn(o,"has",s),cn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ft(a),c=e?cf:t?po:hi;return!t&&cn(l,"iterate",ar),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Ht(n,t?{add:Za("add"),set:Za("set"),delete:Za("delete"),clear:Za("clear")}:{add(s){const r=ft(this),o=Ka(r),a=ft(s),l=!e&&!Bn(s)&&!es(s)?a:s;return o.has.call(r,l)||Si(s,l)&&o.has.call(r,s)||Si(a,l)&&o.has.call(r,a)||(r.add(l),Vi(r,"add",l,l)),this},set(s,r){!e&&!Bn(r)&&!es(r)&&(r=ft(r));const o=ft(this),{has:a,get:l}=Ka(o);let c=a.call(o,s);c||(s=ft(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Si(r,u)&&Vi(o,"set",s,r):Vi(o,"add",s,r),this},delete(s){const r=ft(this),{has:o,get:a}=Ka(r);let l=o.call(r,s);l||(s=ft(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Vi(r,"delete",s,void 0),c},clear(){const s=ft(this),r=s.size!==0,o=s.clear();return r&&Vi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ly(s,t,e)}),n}function Ed(t,e){const n=cy(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(dt(n,s)&&s in i?n:i,s,r)}const uy={get:Ed(!1,!1)},fy={get:Ed(!1,!0)},dy={get:Ed(!0,!1)};const t_=new WeakMap,n_=new WeakMap,i_=new WeakMap,hy=new WeakMap;function py(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sr(t){return es(t)?t:Td(t,!1,ry,uy,t_)}function my(t){return Td(t,!1,ay,fy,n_)}function nc(t){return Td(t,!0,oy,dy,i_)}function Td(t,e,n,i,s){if(!ct(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const r=s.get(t);if(r)return r;const o=py(k0(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Yi(t){return es(t)?Yi(t.__v_raw):!!(t&&t.__v_isReactive)}function es(t){return!!(t&&t.__v_isReadonly)}function Bn(t){return!!(t&&t.__v_isShallow)}function Lc(t){return t?!!t.__v_raw:!1}function ft(t){const e=t&&t.__v_raw;return e?ft(e):t}function wd(t){return!dt(t,"__v_skip")&&Object.isExtensible(t)&&Fg(t,"__v_skip",!0),t}const hi=t=>ct(t)?Sr(t):t,po=t=>ct(t)?nc(t):t;function Lt(t){return t?t.__v_isRef===!0:!1}function _e(t){return s_(t,!1)}function lr(t){return s_(t,!0)}function s_(t,e){return Lt(t)?t:new gy(t,e)}class gy{constructor(e,n){this.dep=new Md,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ft(e),this._value=n?e:hi(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Bn(e)||es(e);e=i?e:ft(e),Si(e,n)&&(this._rawValue=e,this._value=i?e:hi(e),this.dep.trigger())}}function L(t){return Lt(t)?t.value:t}const _y={get:(t,e,n)=>e==="__v_raw"?t:L(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Lt(s)&&!Lt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function r_(t){return Yi(t)?t:new Proxy(t,_y)}function vy(t){const e=Ge(t)?new Array(t.length):{};for(const n in t)e[n]=o_(t,n);return e}class yy{constructor(e,n,i){this._object=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=zn(n)?n:String(n),this._raw=ft(e);let s=!0,r=e;if(!Ge(e)||zn(this._key)||!Ac(this._key))do s=!Lc(r)||Bn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=L(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Lt(this._raw[this._key])){const n=this._object[this._key];if(Lt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Q0(this._raw,this._key)}}class xy{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function $i(t,e,n){return Lt(t)?t:Ye(t)?new xy(t):ct(t)&&arguments.length>1?o_(t,e,n):_e(t)}function o_(t,e,n){return new yy(t,e,n)}class by{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Md(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=da-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&At!==this)return Xg(this,!0),!0}get value(){const e=this.dep.track();return qg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Sy(t,e,n=!1){let i,s;return Ye(t)?i=t:(i=t.get,s=t.set),new by(i,s,n)}const Ja={},ic=new WeakMap;let Ys;function My(t,e=!1,n=Ys){if(n){let i=ic.get(n);i||ic.set(n,i=[]),i.push(t)}}function Ey(t,e,n=Tt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=v=>s?v:Bn(v)||s===!1||s===0?Gi(v,1):Gi(v);let u,f,d,p,g=!1,m=!1;if(Lt(t)?(f=()=>t.value,g=Bn(t)):Yi(t)?(f=()=>c(t),g=!0):Ge(t)?(m=!0,g=t.some(v=>Yi(v)||Bn(v)),f=()=>t.map(v=>{if(Lt(v))return v.value;if(Yi(v))return c(v);if(Ye(v))return l?l(v,2):v()})):Ye(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Ji();try{d()}finally{Qi()}}const v=Ys;Ys=u;try{return l?l(t,3,[p]):t(p)}finally{Ys=v}}:f=dn,e&&s){const v=f,P=s===!0?1/0:s;f=()=>Gi(v(),P)}const _=yd(),h=()=>{u.stop(),_&&_.active&&vd(_.effects,u)};if(r&&e){const v=e;e=(...P)=>{const D=v(...P);return h(),D}}let b=m?new Array(t.length).fill(Ja):Ja;const x=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const P=u.run();if(v||s||g||(m?P.some((D,A)=>Si(D,b[A])):Si(P,b))){d&&d();const D=Ys;Ys=u;try{const A=[P,b===Ja?void 0:m&&b[0]===Ja?[]:b,p];b=P,l?l(e,3,A):e(...A)}finally{Ys=D}}}else u.run()};return a&&a(x),u=new Wg(f),u.scheduler=o?()=>o(x,!1):x,p=v=>My(v,!1,u),d=u.onStop=()=>{const v=ic.get(u);if(v){if(l)l(v,4);else for(const P of v)P();ic.delete(u)}},e?i?x(!0):b=u.run():o?o(x.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Gi(t,e=1/0,n){if(e<=0||!ct(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Lt(t))Gi(t.value,e,n);else if(Ge(t))for(let i=0;i<t.length;i++)Gi(t[i],e,n);else if(wc(t)||so(t))t.forEach(i=>{Gi(i,e,n)});else if(Og(t)){for(const i in t)Gi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Gi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ua(t,e,n,i){try{return i?t(...i):t()}catch(s){Uc(s,e,n)}}function Jn(t,e,n,i){if(Ye(t)){const s=Ua(t,e,n,i);return s&&Ug(s)&&s.catch(r=>{Uc(r,e,n)}),s}if(Ge(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Jn(t[r],e,n,i));return s}}function Uc(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Tt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){Ji(),Ua(r,null,10,[t,l,c]),Qi();return}}Ty(t,n,s,i,o)}function Ty(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const xn=[];let vi=-1;const ro=[];let Ss=null,Kr=0;const a_=Promise.resolve();let sc=null;function qt(t){const e=sc||a_;return t?e.then(this?t.bind(this):t):e}function wy(t){let e=vi+1,n=xn.length;for(;e<n;){const i=e+n>>>1,s=xn[i],r=pa(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Ad(t){if(!(t.flags&1)){const e=pa(t),n=xn[xn.length-1];!n||!(t.flags&2)&&e>=pa(n)?xn.push(t):xn.splice(wy(e),0,t),t.flags|=1,l_()}}function l_(){sc||(sc=a_.then(u_))}function Ay(t){Ge(t)?ro.push(...t):Ss&&t.id===-1?Ss.splice(Kr+1,0,t):t.flags&1||(ro.push(t),t.flags|=1),l_()}function wh(t,e,n=vi+1){for(;n<xn.length;n++){const i=xn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;xn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function c_(t){if(ro.length){const e=[...new Set(ro)].sort((n,i)=>pa(n)-pa(i));if(ro.length=0,Ss){Ss.push(...e);return}for(Ss=e,Kr=0;Kr<Ss.length;Kr++){const n=Ss[Kr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ss=null,Kr=0}}const pa=t=>t.id==null?t.flags&2?-1:1/0:t.id;function u_(t){try{for(vi=0;vi<xn.length;vi++){const e=xn[vi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ua(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;vi<xn.length;vi++){const e=xn[vi];e&&(e.flags&=-2)}vi=-1,xn.length=0,c_(),sc=null,(xn.length||ro.length)&&u_()}}let nn=null,f_=null;function rc(t){const e=nn;return nn=t,f_=t&&t.type.__scopeId||null,e}function It(t,e=nn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&lc(-1);const r=rc(e);let o;try{o=t(...s)}finally{rc(r),i._d&&lc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Dt(t,e){if(nn===null)return t;const n=Bc(nn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Tt]=e[s];r&&(Ye(r)&&(r={mounted:r,updated:r}),r.deep&&Gi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Fs(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ji(),Jn(l,n,8,[t.el,a,t,e]),Qi())}}function ts(t,e){if(un){let n=un.provides;const i=un.parent&&un.parent.provides;i===n&&(n=un.provides=Object.create(i)),n[t]=e}}function Rt(t,e,n=!1){const i=Kt();if(i||cr){let s=cr?cr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ye(e)?e.call(i&&i.proxy):e}}function Cy(){return!!(Kt()||cr)}const Ry=Symbol.for("v-scx"),Py=()=>Rt(Ry);function Dy(t,e){return Cd(t,null,e)}function We(t,e,n){return Cd(t,e,n)}function Cd(t,e,n=Tt){const{immediate:i,deep:s,flush:r,once:o}=n,a=Ht({},n),l=e&&i||!e&&r!=="post";let c;if(va){if(r==="sync"){const p=Py();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=dn,p.resume=dn,p.pause=dn,p}}const u=un;a.call=(p,g,m)=>Jn(p,u,g,m);let f=!1;r==="post"?a.scheduler=p=>{yn(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():Ad(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Ey(t,e,a);return va&&(c?c.push(d):l&&d()),d}function Iy(t,e,n){const i=this.proxy,s=ht(t)?t.includes(".")?d_(i,t):()=>i[t]:t.bind(i,i);let r;Ye(e)?r=e:(r=e.handler,n=e);const o=Oa(this),a=Cd(s,r.bind(i),n);return o(),a}function d_(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const _s=new WeakMap,h_=Symbol("_vte"),p_=t=>t.__isTeleport,Ks=t=>t&&(t.disabled||t.disabled===""),Ly=t=>t&&(t.defer||t.defer===""),Ah=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Ch=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,uf=(t,e)=>{const n=t&&t.to;return ht(n)?e?e(n):null:n},Uy={name:"Teleport",__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:p,querySelector:g,createText:m,createComment:_,parentNode:h}}=c,b=Ks(e.props);let{dynamicChildren:x}=e;const v=(A,T,y)=>{A.shapeFlag&16&&u(A.children,T,y,s,r,o,a,l)},P=(A=e)=>{const T=Ks(A.props),y=A.target=uf(A.props,g),M=ff(y,A,m,p);y&&(o!=="svg"&&Ah(y)?o="svg":o!=="mathml"&&Ch(y)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(y),T||(v(A,y,M),Ko(A,!1)))},D=A=>{const T=()=>{if(_s.get(A)===T){if(_s.delete(A),Ks(A.props)){const y=h(A.el)||n;v(A,y,A.anchor),Ko(A,!0)}P(A)}};_s.set(A,T),yn(T,r)};if(t==null){const A=e.el=m(""),T=e.anchor=m("");if(p(A,n,i),p(T,n,i),Ly(e.props)||r&&r.pendingBranch){D(e);return}b&&(v(e,n,T),Ko(e,!0)),P()}else{e.el=t.el;const A=e.anchor=t.anchor,T=_s.get(t);if(T){T.flags|=8,_s.delete(t),D(e);return}e.targetStart=t.targetStart;const y=e.target=t.target,M=e.targetAnchor=t.targetAnchor,U=Ks(t.props),k=U?n:y,H=U?A:M;if(o==="svg"||Ah(y)?o="svg":(o==="mathml"||Ch(y))&&(o="mathml"),x?(d(t.dynamicChildren,x,k,s,r,o,a),Id(t,e,!0)):l||f(t,e,k,H,s,r,o,a,!1),b)U?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Qa(e,n,A,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const J=e.target=uf(e.props,g);J&&Qa(e,J,null,c,0)}else U&&Qa(e,y,M,c,1);Ko(e,b)}},remove(t,e,n,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:d}=t,p=r||!Ks(d),g=_s.get(t);if(g&&(g.flags|=8,_s.delete(t)),f&&(s(c),s(u)),r&&s(l),!g&&o&16)for(let m=0;m<a.length;m++){const _=a[m];i(_,e,n,p,!!_.dynamicChildren)}},move:Qa,hydrate:Ny};function Qa(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=r===2;if(f&&i(o,e,n),!_s.has(t)&&(!f||Ks(u))&&l&16)for(let d=0;d<c.length;d++)s(c[d],e,n,2);f&&i(a,e,n)}function Ny(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){function d(_,h){let b=h;for(;b;){if(b&&b.nodeType===8){if(b.data==="teleport start anchor")e.targetStart=b;else if(b.data==="teleport anchor"){e.targetAnchor=b,_._lpa=e.targetAnchor&&o(e.targetAnchor);break}}b=o(b)}}function p(_,h){h.anchor=f(o(_),h,a(_),n,i,s,r)}const g=e.target=uf(e.props,l),m=Ks(e.props);if(g){const _=g._lpa||g.firstChild;e.shapeFlag&16&&(m?(p(t,e),d(g,_),e.targetAnchor||ff(g,e,u,c,a(t)===g?t:null)):(e.anchor=o(t),d(g,_),e.targetAnchor||ff(g,e,u,c),f(_&&o(_),e,g,n,i,s,r))),Ko(e,m)}else m&&e.shapeFlag&16&&(p(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const m_=Uy;function Ko(t,e){const n=t.ctx;if(n&&n.ut){let i,s;for(e?(i=t.el,s=t.anchor):(i=t.targetStart,s=t.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function ff(t,e,n,i,s=null){const r=e.targetStart=n(""),o=e.targetAnchor=n("");return r[h_]=o,t&&(i(r,t,s),i(o,t,s)),o}const Yn=Symbol("_leaveCb"),Oo=Symbol("_enterCb");function g_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ft(()=>{t.isMounted=!0}),Pi(()=>{t.isUnmounting=!0}),t}const $n=[Function,Array],__={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$n,onEnter:$n,onAfterEnter:$n,onEnterCancelled:$n,onBeforeLeave:$n,onLeave:$n,onAfterLeave:$n,onLeaveCancelled:$n,onBeforeAppear:$n,onAppear:$n,onAfterAppear:$n,onAppearCancelled:$n},v_=t=>{const e=t.subTree;return e.component?v_(e.component):e},Oy={name:"BaseTransition",props:__,setup(t,{slots:e}){const n=Kt(),i=g_();return()=>{const s=e.default&&Rd(e.default(),!0),r=s&&s.length?y_(s):n.subTree?tt():void 0;if(!r)return;const o=ft(t),{mode:a}=o;if(i.isLeaving)return ru(r);const l=Rh(r);if(!l)return ru(r);let c=ma(l,o,i,n,f=>c=f);l.type!==tn&&pr(l,c);let u=n.subTree&&Rh(n.subTree);if(u&&u.type!==tn&&!Zs(u,l)&&v_(n).type!==tn){let f=ma(u,o,i,n);if(pr(u,f),a==="out-in"&&l.type!==tn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},ru(r);a==="in-out"&&l.type!==tn?f.delayLeave=(d,p,g)=>{const m=x_(i,u);m[String(u.key)]=u,d[Yn]=()=>{p(),d[Yn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function y_(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==tn){e=n;break}}return e}const Fy=Oy;function x_(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function ma(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:_,onAppear:h,onAfterAppear:b,onAppearCancelled:x}=e,v=String(t.key),P=x_(n,t),D=(y,M)=>{y&&Jn(y,i,9,M)},A=(y,M)=>{const U=M[1];D(y,M),Ge(y)?y.every(k=>k.length<=1)&&U():y.length<=1&&U()},T={mode:o,persisted:a,beforeEnter(y){let M=l;if(!n.isMounted)if(r)M=_||l;else return;y[Yn]&&y[Yn](!0);const U=P[v];U&&Zs(t,U)&&U.el[Yn]&&U.el[Yn](),D(M,[y])},enter(y){if(P[v]===t)return;let M=c,U=u,k=f;if(!n.isMounted)if(r)M=h||c,U=b||u,k=x||f;else return;let H=!1;y[Oo]=se=>{H||(H=!0,se?D(k,[y]):D(U,[y]),T.delayedLeave&&T.delayedLeave(),y[Oo]=void 0)};const J=y[Oo].bind(null,!1);M?A(M,[y,J]):J()},leave(y,M){const U=String(t.key);if(y[Oo]&&y[Oo](!0),n.isUnmounting)return M();D(d,[y]);let k=!1;y[Yn]=J=>{k||(k=!0,M(),J?D(m,[y]):D(g,[y]),y[Yn]=void 0,P[U]===t&&delete P[U])};const H=y[Yn].bind(null,!1);P[U]=t,p?A(p,[y,H]):H()},clone(y){const M=ma(y,e,n,i,s);return s&&s(M),M}};return T}function ru(t){if(Nc(t))return t=ns(t),t.children=null,t}function Rh(t){if(!Nc(t))return p_(t.type)&&t.children?y_(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ye(n.default))return n.default()}}function pr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,pr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Rd(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===rt?(o.patchFlag&128&&s++,i=i.concat(Rd(o.children,e,a))):(e||o.type!==tn)&&i.push(a!=null?ns(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Ze(t,e){return Ye(t)?Ht({name:t.name},e,{setup:t}):t}function b_(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ph(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const oc=new WeakMap;function ia(t,e,n,i,s=!1){if(Ge(t)){t.forEach((m,_)=>ia(m,e&&(Ge(e)?e[_]:e),n,i,s));return}if(oo(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ia(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Bc(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Tt?a.refs={}:a.refs,f=a.setupState,d=ft(f),p=f===Tt?Lg:m=>Ph(u,m)?!1:dt(d,m),g=(m,_)=>!(_&&Ph(u,_));if(c!=null&&c!==l){if(Dh(e),ht(c))u[c]=null,p(c)&&(f[c]=null);else if(Lt(c)){const m=e;g(c,m.k)&&(c.value=null),m.k&&(u[m.k]=null)}}if(Ye(l))Ua(l,a,12,[o,u]);else{const m=ht(l),_=Lt(l);if(m||_){const h=()=>{if(t.f){const b=m?p(l)?f[l]:u[l]:g()||!t.k?l.value:u[t.k];if(s)Ge(b)&&vd(b,r);else if(Ge(b))b.includes(r)||b.push(r);else if(m)u[l]=[r],p(l)&&(f[l]=u[l]);else{const x=[r];g(l,t.k)&&(l.value=x),t.k&&(u[t.k]=x)}}else m?(u[l]=o,p(l)&&(f[l]=o)):_&&(g(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const b=()=>{h(),oc.delete(t)};b.id=-1,oc.set(t,b),yn(b,n)}else Dh(t),h()}}}function Dh(t){const e=oc.get(t);e&&(e.flags|=8,oc.delete(t))}Dc().requestIdleCallback;Dc().cancelIdleCallback;const oo=t=>!!t.type.__asyncLoader,Nc=t=>t.type.__isKeepAlive;function By(t,e){M_(t,"a",e)}function S_(t,e){M_(t,"da",e)}function M_(t,e,n=un){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Oc(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Nc(s.parent.vnode)&&ky(i,e,n,s),s=s.parent}}function ky(t,e,n,i){const s=Oc(e,t,i,!0);Na(()=>{vd(i[e],s)},n)}function Oc(t,e,n=un,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ji();const a=Oa(n),l=Jn(e,n,t,o);return a(),Qi(),l});return i?s.unshift(r):s.push(r),r}}const os=t=>(e,n=un)=>{(!va||t==="sp")&&Oc(t,(...i)=>e(...i),n)},E_=os("bm"),Ft=os("m"),zy=os("bu"),T_=os("u"),Pi=os("bum"),Na=os("um"),Hy=os("sp"),Vy=os("rtg"),Gy=os("rtc");function Wy(t,e=un){Oc("ec",t,e)}const $y="components",w_=Symbol.for("v-ndc");function nr(t){return ht(t)?Xy($y,t,!1)||t:t||w_}function Xy(t,e,n=!0,i=!1){const s=nn||un;if(s){const r=s.type;{const a=Rx(r,!1);if(a&&(a===e||a===bn(e)||a===Rc(bn(e))))return r}const o=Ih(s[t]||r[t],e)||Ih(s.appContext[t],e);return!o&&i?r:o}}function Ih(t,e){return t&&(t[e]||t[bn(e)]||t[Rc(bn(e))])}function zt(t,e,n,i){let s;const r=n,o=Ge(t);if(o||ht(t)){const a=o&&Yi(t);let l=!1,c=!1;a&&(l=!Bn(t),c=es(t),t=Ic(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?c?po(hi(t[u])):hi(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(ct(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}function sn(t,e,n={},i,s){if(nn.ce||nn.parent&&oo(nn.parent)&&nn.parent.ce){const c=Object.keys(n).length>0;return e!=="default"&&(n.name=e),ae(),Et(rt,null,[Ke("slot",n,i&&i())],c?-2:64)}let r=t[e];r&&r._c&&(r._d=!1),ae();const o=r&&A_(r(n)),a=n.key||o&&o.key,l=Et(rt,{key:(a&&!zn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function A_(t){return t.some(e=>_a(e)?!(e.type===tn||e.type===rt&&!A_(e.children)):!0)?t:null}const df=t=>t?Y_(t)?Bc(t):df(t.parent):null,sa=Ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>df(t.parent),$root:t=>df(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>D_(t),$forceUpdate:t=>t.f||(t.f=()=>{Ad(t.update)}),$nextTick:t=>t.n||(t.n=qt.bind(t.proxy)),$watch:t=>Iy.bind(t)}),ou=(t,e)=>t!==Tt&&!t.__isScriptSetup&&dt(t,e),jy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(ou(i,e))return o[e]=1,i[e];if(s!==Tt&&dt(s,e))return o[e]=2,s[e];if(dt(r,e))return o[e]=3,r[e];if(n!==Tt&&dt(n,e))return o[e]=4,n[e];hf&&(o[e]=0)}}const c=sa[e];let u,f;if(c)return e==="$attrs"&&cn(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Tt&&dt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,dt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return ou(s,e)?(s[e]=n,!0):i!==Tt&&dt(i,e)?(i[e]=n,!0):dt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==Tt&&a[0]!=="$"&&dt(t,a)||ou(e,a)||dt(r,a)||dt(i,a)||dt(sa,a)||dt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:dt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function C_(){return R_().slots}function Yy(){return R_().attrs}function R_(t){const e=Kt();return e.setupContext||(e.setupContext=K_(e))}function Lh(t){return Ge(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let hf=!0;function qy(t){const e=D_(t),n=t.proxy,i=t.ctx;hf=!1,e.beforeCreate&&Uh(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:m,deactivated:_,beforeDestroy:h,beforeUnmount:b,destroyed:x,unmounted:v,render:P,renderTracked:D,renderTriggered:A,errorCaptured:T,serverPrefetch:y,expose:M,inheritAttrs:U,components:k,directives:H,filters:J}=e;if(c&&Ky(c,i,null),o)for(const W in o){const j=o[W];Ye(j)&&(i[W]=j.bind(n))}if(s){const W=s.call(n,n);ct(W)&&(t.data=Sr(W))}if(hf=!0,r)for(const W in r){const j=r[W],ve=Ye(j)?j.bind(n,n):Ye(j.get)?j.get.bind(n,n):dn,we=!Ye(j)&&Ye(j.set)?j.set.bind(n):dn,Ie=Me({get:ve,set:we});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>Ie.value,set:Oe=>Ie.value=Oe})}if(a)for(const W in a)P_(a[W],i,n,W);if(l){const W=Ye(l)?l.call(n):l;Reflect.ownKeys(W).forEach(j=>{ts(j,W[j])})}u&&Uh(u,t,"c");function q(W,j){Ge(j)?j.forEach(ve=>W(ve.bind(n))):j&&W(j.bind(n))}if(q(E_,f),q(Ft,d),q(zy,p),q(T_,g),q(By,m),q(S_,_),q(Wy,T),q(Gy,D),q(Vy,A),q(Pi,b),q(Na,v),q(Hy,y),Ge(M))if(M.length){const W=t.exposed||(t.exposed={});M.forEach(j=>{Object.defineProperty(W,j,{get:()=>n[j],set:ve=>n[j]=ve,enumerable:!0})})}else t.exposed||(t.exposed={});P&&t.render===dn&&(t.render=P),U!=null&&(t.inheritAttrs=U),k&&(t.components=k),H&&(t.directives=H),y&&b_(t)}function Ky(t,e,n=dn){Ge(t)&&(t=pf(t));for(const i in t){const s=t[i];let r;ct(s)?"default"in s?r=Rt(s.from||i,s.default,!0):r=Rt(s.from||i):r=Rt(s),Lt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Uh(t,e,n){Jn(Ge(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function P_(t,e,n,i){let s=i.includes(".")?d_(n,i):()=>n[i];if(ht(t)){const r=e[t];Ye(r)&&We(s,r)}else if(Ye(t))We(s,t.bind(n));else if(ct(t))if(Ge(t))t.forEach(r=>P_(r,e,n,i));else{const r=Ye(t.handler)?t.handler.bind(n):e[t.handler];Ye(r)&&We(s,r,t)}}function D_(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>ac(l,c,o,!0)),ac(l,e,o)),ct(e)&&r.set(e,l),l}function ac(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&ac(t,r,n,!0),s&&s.forEach(o=>ac(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Zy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Zy={data:Nh,props:Oh,emits:Oh,methods:Zo,computed:Zo,beforeCreate:_n,created:_n,beforeMount:_n,mounted:_n,beforeUpdate:_n,updated:_n,beforeDestroy:_n,beforeUnmount:_n,destroyed:_n,unmounted:_n,activated:_n,deactivated:_n,errorCaptured:_n,serverPrefetch:_n,components:Zo,directives:Zo,watch:Qy,provide:Nh,inject:Jy};function Nh(t,e){return e?t?function(){return Ht(Ye(t)?t.call(this,this):t,Ye(e)?e.call(this,this):e)}:e:t}function Jy(t,e){return Zo(pf(t),pf(e))}function pf(t){if(Ge(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _n(t,e){return t?[...new Set([].concat(t,e))]:e}function Zo(t,e){return t?Ht(Object.create(null),t,e):e}function Oh(t,e){return t?Ge(t)&&Ge(e)?[...new Set([...t,...e])]:Ht(Object.create(null),Lh(t),Lh(e??{})):e}function Qy(t,e){if(!t)return e;if(!e)return t;const n=Ht(Object.create(null),t);for(const i in e)n[i]=_n(t[i],e[i]);return n}function I_(){return{app:null,config:{isNativeTag:Lg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ex=0;function tx(t,e){return function(i,s=null){Ye(i)||(i=Ht({},i)),s!=null&&!ct(s)&&(s=null);const r=I_(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:ex++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Ix,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ye(u.install)?(o.add(u),u.install(c,...f)):Ye(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||Ke(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Bc(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Jn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=cr;cr=c;try{return u()}finally{cr=f}}};return c}}let cr=null;const nx=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${bn(e)}Modifiers`]||t[`${Ps(e)}Modifiers`];function ix(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Tt;let s=n;const r=e.startsWith("update:"),o=r&&nx(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>ht(u)?u.trim():u)),o.number&&(s=n.map(Pc)));let a,l=i[a=eu(e)]||i[a=eu(bn(e))];!l&&r&&(l=i[a=eu(Ps(e))]),l&&Jn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Jn(c,t,6,s)}}const sx=new WeakMap;function L_(t,e,n=!1){const i=n?sx:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Ye(t)){const l=c=>{const u=L_(c,e,!0);u&&(a=!0,Ht(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ct(t)&&i.set(t,null),null):(Ge(r)?r.forEach(l=>o[l]=null):Ht(o,r),ct(t)&&i.set(t,o),o)}function Fc(t,e){return!t||!Ec(e)?!1:(e=e.slice(2).replace(/Once$/,""),dt(t,e[0].toLowerCase()+e.slice(1))||dt(t,Ps(e))||dt(t,e))}function Fh(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:g,inheritAttrs:m}=t,_=rc(t);let h,b;try{if(n.shapeFlag&4){const v=s||i,P=v;h=bi(c.call(P,v,u,f,p,d,g)),b=a}else{const v=e;h=bi(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),b=e.props?a:rx(a)}}catch(v){ra.length=0,Uc(v,t,1),h=Ke(tn)}let x=h;if(b&&m!==!1){const v=Object.keys(b),{shapeFlag:P}=x;v.length&&P&7&&(r&&v.some(Tc)&&(b=ox(b,r)),x=ns(x,b,!1,!0))}return n.dirs&&(x=ns(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&pr(x,n.transition),h=x,rc(_),h}const rx=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ec(n))&&((e||(e={}))[n]=t[n]);return e},ox=(t,e)=>{const n={};for(const i in t)(!Tc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function ax(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Bh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(U_(o,i,d)&&!Fc(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Bh(i,o,c):!0:!!o;return!1}function Bh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(U_(e,t,r)&&!Fc(n,r))return!0}return!1}function U_(t,e,n){const i=t[n],s=e[n];return n==="style"&&ct(i)&&ct(s)?!La(i,s):i!==s}function lx({vnode:t,parent:e,suspense:n},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=i,t=s),s===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const N_={},O_=()=>Object.create(N_),F_=t=>Object.getPrototypeOf(t)===N_;function cx(t,e,n,i=!1){const s={},r=O_();t.propsDefaults=Object.create(null),B_(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:my(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function ux(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ft(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Fc(t.emitsOptions,d))continue;const p=e[d];if(l)if(dt(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=bn(d);s[g]=mf(l,a,g,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{B_(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!dt(e,f)&&((u=Ps(f))===f||!dt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=mf(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!dt(e,f))&&(delete r[f],c=!0)}c&&Vi(t.attrs,"set","")}function B_(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ea(l))continue;const c=e[l];let u;s&&dt(s,u=bn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Fc(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ft(n),c=a||Tt;for(let u=0;u<r.length;u++){const f=r[u];n[f]=mf(s,l,f,c[f],t,!dt(c,f))}}return o}function mf(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=dt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ye(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=Oa(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ps(n))&&(i=!0))}return i}const fx=new WeakMap;function k_(t,e,n=!1){const i=n?fx:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!Ye(t)){const u=f=>{l=!0;const[d,p]=k_(f,e,!0);Ht(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ct(t)&&i.set(t,io),io;if(Ge(r))for(let u=0;u<r.length;u++){const f=bn(r[u]);kh(f)&&(o[f]=Tt)}else if(r)for(const u in r){const f=bn(u);if(kh(f)){const d=r[u],p=o[f]=Ge(d)||Ye(d)?{type:d}:Ht({},d),g=p.type;let m=!1,_=!0;if(Ge(g))for(let h=0;h<g.length;++h){const b=g[h],x=Ye(b)&&b.name;if(x==="Boolean"){m=!0;break}else x==="String"&&(_=!1)}else m=Ye(g)&&g.name==="Boolean";p[0]=m,p[1]=_,(m||dt(p,"default"))&&a.push(f)}}const c=[o,a];return ct(t)&&i.set(t,c),c}function kh(t){return t[0]!=="$"&&!ea(t)}const Pd=t=>t==="_"||t==="_ctx"||t==="$stable",Dd=t=>Ge(t)?t.map(bi):[bi(t)],dx=(t,e,n)=>{if(e._n)return e;const i=It((...s)=>Dd(e(...s)),n);return i._c=!1,i},z_=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Pd(s))continue;const r=t[s];if(Ye(r))e[s]=dx(s,r,i);else if(r!=null){const o=Dd(r);e[s]=()=>o}}},H_=(t,e)=>{const n=Dd(e);t.slots.default=()=>n},V_=(t,e,n)=>{for(const i in e)(n||!Pd(i))&&(t[i]=e[i])},hx=(t,e,n)=>{const i=t.slots=O_();if(t.vnode.shapeFlag&32){const s=e._;s?(V_(i,e,n),n&&Fg(i,"_",s,!0)):z_(e,i)}else e&&H_(t,e)},px=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Tt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:V_(s,e,n):(r=!e.$stable,z_(e,s)),o=e}else e&&(H_(t,e),o={default:1});if(r)for(const a in s)!Pd(a)&&o[a]==null&&delete s[a]},yn=yx;function mx(t){return gx(t)}function gx(t,e){const n=Dc();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=dn,insertStaticContent:g}=t,m=(I,B,C,he=null,ie=null,ne=null,le=void 0,fe=null,ee=!!B.dynamicChildren)=>{if(I===B)return;I&&!Zs(I,B)&&(he=Te(I),Oe(I,ie,ne,!0),I=null),B.patchFlag===-2&&(ee=!1,B.dynamicChildren=null);const{type:w,ref:S,shapeFlag:z}=B;switch(w){case Ao:_(I,B,C,he);break;case tn:h(I,B,C,he);break;case Gl:I==null&&b(B,C,he,le);break;case rt:k(I,B,C,he,ie,ne,le,fe,ee);break;default:z&1?P(I,B,C,he,ie,ne,le,fe,ee):z&6?H(I,B,C,he,ie,ne,le,fe,ee):(z&64||z&128)&&w.process(I,B,C,he,ie,ne,le,fe,ee,ye)}S!=null&&ie?ia(S,I&&I.ref,ne,B||I,!B):S==null&&I&&I.ref!=null&&ia(I.ref,null,ne,I,!0)},_=(I,B,C,he)=>{if(I==null)i(B.el=a(B.children),C,he);else{const ie=B.el=I.el;B.children!==I.children&&c(ie,B.children)}},h=(I,B,C,he)=>{I==null?i(B.el=l(B.children||""),C,he):B.el=I.el},b=(I,B,C,he)=>{[I.el,I.anchor]=g(I.children,B,C,he,I.el,I.anchor)},x=({el:I,anchor:B},C,he)=>{let ie;for(;I&&I!==B;)ie=d(I),i(I,C,he),I=ie;i(B,C,he)},v=({el:I,anchor:B})=>{let C;for(;I&&I!==B;)C=d(I),s(I),I=C;s(B)},P=(I,B,C,he,ie,ne,le,fe,ee)=>{if(B.type==="svg"?le="svg":B.type==="math"&&(le="mathml"),I==null)D(B,C,he,ie,ne,le,fe,ee);else{const w=I.el&&I.el._isVueCE?I.el:null;try{w&&w._beginPatch(),y(I,B,ie,ne,le,fe,ee)}finally{w&&w._endPatch()}}},D=(I,B,C,he,ie,ne,le,fe)=>{let ee,w;const{props:S,shapeFlag:z,transition:Z,dirs:O}=I;if(ee=I.el=o(I.type,ne,S&&S.is,S),z&8?u(ee,I.children):z&16&&T(I.children,ee,null,he,ie,au(I,ne),le,fe),O&&Fs(I,null,he,"created"),A(ee,I,I.scopeId,le,he),S){for(const F in S)F!=="value"&&!ea(F)&&r(ee,F,null,S[F],ne,he);"value"in S&&r(ee,"value",null,S.value,ne),(w=S.onVnodeBeforeMount)&&pi(w,he,I)}O&&Fs(I,null,he,"beforeMount");const E=_x(ie,Z);E&&Z.beforeEnter(ee),i(ee,B,C),((w=S&&S.onVnodeMounted)||E||O)&&yn(()=>{try{w&&pi(w,he,I),E&&Z.enter(ee),O&&Fs(I,null,he,"mounted")}finally{}},ie)},A=(I,B,C,he,ie)=>{if(C&&p(I,C),he)for(let ne=0;ne<he.length;ne++)p(I,he[ne]);if(ie){let ne=ie.subTree;if(B===ne||$_(ne.type)&&(ne.ssContent===B||ne.ssFallback===B)){const le=ie.vnode;A(I,le,le.scopeId,le.slotScopeIds,ie.parent)}}},T=(I,B,C,he,ie,ne,le,fe,ee=0)=>{for(let w=ee;w<I.length;w++){const S=I[w]=fe?Hi(I[w]):bi(I[w]);m(null,S,B,C,he,ie,ne,le,fe)}},y=(I,B,C,he,ie,ne,le)=>{const fe=B.el=I.el;let{patchFlag:ee,dynamicChildren:w,dirs:S}=B;ee|=I.patchFlag&16;const z=I.props||Tt,Z=B.props||Tt;let O;if(C&&Bs(C,!1),(O=Z.onVnodeBeforeUpdate)&&pi(O,C,B,I),S&&Fs(B,I,C,"beforeUpdate"),C&&Bs(C,!0),(z.innerHTML&&Z.innerHTML==null||z.textContent&&Z.textContent==null)&&u(fe,""),w?M(I.dynamicChildren,w,fe,C,he,au(B,ie),ne):le||j(I,B,fe,null,C,he,au(B,ie),ne,!1),ee>0){if(ee&16)U(fe,z,Z,C,ie);else if(ee&2&&z.class!==Z.class&&r(fe,"class",null,Z.class,ie),ee&4&&r(fe,"style",z.style,Z.style,ie),ee&8){const E=B.dynamicProps;for(let F=0;F<E.length;F++){const V=E[F],G=z[V],pe=Z[V];(pe!==G||V==="value")&&r(fe,V,G,pe,ie,C)}}ee&1&&I.children!==B.children&&u(fe,B.children)}else!le&&w==null&&U(fe,z,Z,C,ie);((O=Z.onVnodeUpdated)||S)&&yn(()=>{O&&pi(O,C,B,I),S&&Fs(B,I,C,"updated")},he)},M=(I,B,C,he,ie,ne,le)=>{for(let fe=0;fe<B.length;fe++){const ee=I[fe],w=B[fe],S=ee.el&&(ee.type===rt||!Zs(ee,w)||ee.shapeFlag&198)?f(ee.el):C;m(ee,w,S,null,he,ie,ne,le,!0)}},U=(I,B,C,he,ie)=>{if(B!==C){if(B!==Tt)for(const ne in B)!ea(ne)&&!(ne in C)&&r(I,ne,B[ne],null,ie,he);for(const ne in C){if(ea(ne))continue;const le=C[ne],fe=B[ne];le!==fe&&ne!=="value"&&r(I,ne,fe,le,ie,he)}"value"in C&&r(I,"value",B.value,C.value,ie)}},k=(I,B,C,he,ie,ne,le,fe,ee)=>{const w=B.el=I?I.el:a(""),S=B.anchor=I?I.anchor:a("");let{patchFlag:z,dynamicChildren:Z,slotScopeIds:O}=B;O&&(fe=fe?fe.concat(O):O),I==null?(i(w,C,he),i(S,C,he),T(B.children||[],C,S,ie,ne,le,fe,ee)):z>0&&z&64&&Z&&I.dynamicChildren&&I.dynamicChildren.length===Z.length?(M(I.dynamicChildren,Z,C,ie,ne,le,fe),(B.key!=null||ie&&B===ie.subTree)&&Id(I,B,!0)):j(I,B,C,S,ie,ne,le,fe,ee)},H=(I,B,C,he,ie,ne,le,fe,ee)=>{B.slotScopeIds=fe,I==null?B.shapeFlag&512?ie.ctx.activate(B,C,he,le,ee):J(B,C,he,ie,ne,le,ee):se(I,B,ee)},J=(I,B,C,he,ie,ne,le)=>{const fe=I.component=Tx(I,he,ie);if(Nc(I)&&(fe.ctx.renderer=ye),wx(fe,!1,le),fe.asyncDep){if(ie&&ie.registerDep(fe,q,le),!I.el){const ee=fe.subTree=Ke(tn);h(null,ee,B,C),I.placeholder=ee.el}}else q(fe,I,B,C,ie,ne,le)},se=(I,B,C)=>{const he=B.component=I.component;if(ax(I,B,C))if(he.asyncDep&&!he.asyncResolved){W(he,B,C);return}else he.next=B,he.update();else B.el=I.el,he.vnode=B},q=(I,B,C,he,ie,ne,le)=>{const fe=()=>{if(I.isMounted){let{next:z,bu:Z,u:O,parent:E,vnode:F}=I;{const ce=G_(I);if(ce){z&&(z.el=F.el,W(I,z,le)),ce.asyncDep.then(()=>{yn(()=>{I.isUnmounted||w()},ie)});return}}let V=z,G;Bs(I,!1),z?(z.el=F.el,W(I,z,le)):z=F,Z&&Vl(Z),(G=z.props&&z.props.onVnodeBeforeUpdate)&&pi(G,E,z,F),Bs(I,!0);const pe=Fh(I),Q=I.subTree;I.subTree=pe,m(Q,pe,f(Q.el),Te(Q),I,ie,ne),z.el=pe.el,V===null&&lx(I,pe.el),O&&yn(O,ie),(G=z.props&&z.props.onVnodeUpdated)&&yn(()=>pi(G,E,z,F),ie)}else{let z;const{el:Z,props:O}=B,{bm:E,m:F,parent:V,root:G,type:pe}=I,Q=oo(B);Bs(I,!1),E&&Vl(E),!Q&&(z=O&&O.onVnodeBeforeMount)&&pi(z,V,B),Bs(I,!0);{G.ce&&G.ce._hasShadowRoot()&&G.ce._injectChildStyle(pe,I.parent?I.parent.type:void 0);const ce=I.subTree=Fh(I);m(null,ce,C,he,I,ie,ne),B.el=ce.el}if(F&&yn(F,ie),!Q&&(z=O&&O.onVnodeMounted)){const ce=B;yn(()=>pi(z,V,ce),ie)}(B.shapeFlag&256||V&&oo(V.vnode)&&V.vnode.shapeFlag&256)&&I.a&&yn(I.a,ie),I.isMounted=!0,B=C=he=null}};I.scope.on();const ee=I.effect=new Wg(fe);I.scope.off();const w=I.update=ee.run.bind(ee),S=I.job=ee.runIfDirty.bind(ee);S.i=I,S.id=I.uid,ee.scheduler=()=>Ad(S),Bs(I,!0),w()},W=(I,B,C)=>{B.component=I;const he=I.vnode.props;I.vnode=B,I.next=null,ux(I,B.props,he,C),px(I,B.children,C),Ji(),wh(I),Qi()},j=(I,B,C,he,ie,ne,le,fe,ee=!1)=>{const w=I&&I.children,S=I?I.shapeFlag:0,z=B.children,{patchFlag:Z,shapeFlag:O}=B;if(Z>0){if(Z&128){we(w,z,C,he,ie,ne,le,fe,ee);return}else if(Z&256){ve(w,z,C,he,ie,ne,le,fe,ee);return}}O&8?(S&16&&Re(w,ie,ne),z!==w&&u(C,z)):S&16?O&16?we(w,z,C,he,ie,ne,le,fe,ee):Re(w,ie,ne,!0):(S&8&&u(C,""),O&16&&T(z,C,he,ie,ne,le,fe,ee))},ve=(I,B,C,he,ie,ne,le,fe,ee)=>{I=I||io,B=B||io;const w=I.length,S=B.length,z=Math.min(w,S);let Z;for(Z=0;Z<z;Z++){const O=B[Z]=ee?Hi(B[Z]):bi(B[Z]);m(I[Z],O,C,null,ie,ne,le,fe,ee)}w>S?Re(I,ie,ne,!0,!1,z):T(B,C,he,ie,ne,le,fe,ee,z)},we=(I,B,C,he,ie,ne,le,fe,ee)=>{let w=0;const S=B.length;let z=I.length-1,Z=S-1;for(;w<=z&&w<=Z;){const O=I[w],E=B[w]=ee?Hi(B[w]):bi(B[w]);if(Zs(O,E))m(O,E,C,null,ie,ne,le,fe,ee);else break;w++}for(;w<=z&&w<=Z;){const O=I[z],E=B[Z]=ee?Hi(B[Z]):bi(B[Z]);if(Zs(O,E))m(O,E,C,null,ie,ne,le,fe,ee);else break;z--,Z--}if(w>z){if(w<=Z){const O=Z+1,E=O<S?B[O].el:he;for(;w<=Z;)m(null,B[w]=ee?Hi(B[w]):bi(B[w]),C,E,ie,ne,le,fe,ee),w++}}else if(w>Z)for(;w<=z;)Oe(I[w],ie,ne,!0),w++;else{const O=w,E=w,F=new Map;for(w=E;w<=Z;w++){const be=B[w]=ee?Hi(B[w]):bi(B[w]);be.key!=null&&F.set(be.key,w)}let V,G=0;const pe=Z-E+1;let Q=!1,ce=0;const xe=new Array(pe);for(w=0;w<pe;w++)xe[w]=0;for(w=O;w<=z;w++){const be=I[w];if(G>=pe){Oe(be,ie,ne,!0);continue}let Be;if(be.key!=null)Be=F.get(be.key);else for(V=E;V<=Z;V++)if(xe[V-E]===0&&Zs(be,B[V])){Be=V;break}Be===void 0?Oe(be,ie,ne,!0):(xe[Be-E]=w+1,Be>=ce?ce=Be:Q=!0,m(be,B[Be],C,null,ie,ne,le,fe,ee),G++)}const Ne=Q?vx(xe):io;for(V=Ne.length-1,w=pe-1;w>=0;w--){const be=E+w,Be=B[be],ke=B[be+1],st=be+1<S?ke.el||W_(ke):he;xe[w]===0?m(null,Be,C,st,ie,ne,le,fe,ee):Q&&(V<0||w!==Ne[V]?Ie(Be,C,st,2):V--)}}},Ie=(I,B,C,he,ie=null)=>{const{el:ne,type:le,transition:fe,children:ee,shapeFlag:w}=I;if(w&6){Ie(I.component.subTree,B,C,he);return}if(w&128){I.suspense.move(B,C,he);return}if(w&64){le.move(I,B,C,ye);return}if(le===rt){i(ne,B,C);for(let z=0;z<ee.length;z++)Ie(ee[z],B,C,he);i(I.anchor,B,C);return}if(le===Gl){x(I,B,C);return}if(he!==2&&w&1&&fe)if(he===0)fe.persisted&&!ne[Yn]?i(ne,B,C):(fe.beforeEnter(ne),i(ne,B,C),yn(()=>fe.enter(ne),ie));else{const{leave:z,delayLeave:Z,afterLeave:O}=fe,E=()=>{I.ctx.isUnmounted?s(ne):i(ne,B,C)},F=()=>{const V=ne._isLeaving||!!ne[Yn];ne._isLeaving&&ne[Yn](!0),fe.persisted&&!V?E():z(ne,()=>{E(),O&&O()})};Z?Z(ne,E,F):F()}else i(ne,B,C)},Oe=(I,B,C,he=!1,ie=!1)=>{const{type:ne,props:le,ref:fe,children:ee,dynamicChildren:w,shapeFlag:S,patchFlag:z,dirs:Z,cacheIndex:O,memo:E}=I;if(z===-2&&(ie=!1),fe!=null&&(Ji(),ia(fe,null,C,I,!0),Qi()),O!=null&&(B.renderCache[O]=void 0),S&256){B.ctx.deactivate(I);return}const F=S&1&&Z,V=!oo(I);let G;if(V&&(G=le&&le.onVnodeBeforeUnmount)&&pi(G,B,I),S&6)ge(I.component,C,he);else{if(S&128){I.suspense.unmount(C,he);return}F&&Fs(I,null,B,"beforeUnmount"),S&64?I.type.remove(I,B,C,ye,he):w&&!w.hasOnce&&(ne!==rt||z>0&&z&64)?Re(w,B,C,!1,!0):(ne===rt&&z&384||!ie&&S&16)&&Re(ee,B,C),he&&Qe(I)}const pe=E!=null&&O==null;(V&&(G=le&&le.onVnodeUnmounted)||F||pe)&&yn(()=>{G&&pi(G,B,I),F&&Fs(I,null,B,"unmounted"),pe&&(I.el=null)},C)},Qe=I=>{const{type:B,el:C,anchor:he,transition:ie}=I;if(B===rt){ue(C,he);return}if(B===Gl){v(I);return}const ne=()=>{s(C),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(I.shapeFlag&1&&ie&&!ie.persisted){const{leave:le,delayLeave:fe}=ie,ee=()=>le(C,ne);fe?fe(I.el,ne,ee):ee()}else ne()},ue=(I,B)=>{let C;for(;I!==B;)C=d(I),s(I),I=C;s(B)},ge=(I,B,C)=>{const{bum:he,scope:ie,job:ne,subTree:le,um:fe,m:ee,a:w}=I;zh(ee),zh(w),he&&Vl(he),ie.stop(),ne&&(ne.flags|=8,Oe(le,I,B,C)),fe&&yn(fe,B),yn(()=>{I.isUnmounted=!0},B)},Re=(I,B,C,he=!1,ie=!1,ne=0)=>{for(let le=ne;le<I.length;le++)Oe(I[le],B,C,he,ie)},Te=I=>{if(I.shapeFlag&6)return Te(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const B=d(I.anchor||I.el),C=B&&B[h_];return C?d(C):B};let Ue=!1;const nt=(I,B,C)=>{let he;I==null?B._vnode&&(Oe(B._vnode,null,null,!0),he=B._vnode.component):m(B._vnode||null,I,B,null,null,null,C),B._vnode=I,Ue||(Ue=!0,wh(he),c_(),Ue=!1)},ye={p:m,um:Oe,m:Ie,r:Qe,mt:J,mc:T,pc:j,pbc:M,n:Te,o:t};return{render:nt,hydrate:void 0,createApp:tx(nt)}}function au({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Bs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function _x(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Id(t,e,n=!1){const i=t.children,s=e.children;if(Ge(i)&&Ge(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Hi(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Id(o,a)),a.type===Ao&&(a.patchFlag===-1&&(a=s[r]=Hi(a)),a.el=o.el),a.type===tn&&!a.el&&(a.el=o.el)}}function vx(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function G_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:G_(e)}function zh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function W_(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?W_(e.subTree):null}const $_=t=>t.__isSuspense;function yx(t,e){e&&e.pendingBranch?Ge(t)?e.effects.push(...t):e.effects.push(t):Ay(t)}const rt=Symbol.for("v-fgt"),Ao=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),Gl=Symbol.for("v-stc"),ra=[];let Fn=null;function ae(t=!1){ra.push(Fn=t?null:[])}function xx(){ra.pop(),Fn=ra[ra.length-1]||null}let ga=1;function lc(t,e=!1){ga+=t,t<0&&Fn&&e&&(Fn.hasOnce=!0)}function X_(t){return t.dynamicChildren=ga>0?Fn||io:null,xx(),ga>0&&Fn&&Fn.push(t),t}function me(t,e,n,i,s,r){return X_(N(t,e,n,i,s,r,!0))}function Et(t,e,n,i,s){return X_(Ke(t,e,n,i,s,!0))}function _a(t){return t?t.__v_isVNode===!0:!1}function Zs(t,e){return t.type===e.type&&t.key===e.key}const j_=({key:t})=>t??null,Wl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ht(t)||Lt(t)||Ye(t)?{i:nn,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,i=0,s=null,r=t===rt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&j_(e),ref:e&&Wl(e),scopeId:f_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:nn};return a?(Ld(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ht(n)?8:16),ga>0&&!o&&Fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Fn.push(l),l}const Ke=bx;function bx(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===w_)&&(t=tn),_a(t)){const a=ns(t,e,!0);return n&&Ld(a,n),ga>0&&!r&&Fn&&(a.shapeFlag&6?Fn[Fn.indexOf(t)]=a:Fn.push(a)),a.patchFlag=-2,a}if(Px(t)&&(t=t.__vccOpts),e){e=Sx(e);let{class:a,style:l}=e;a&&!ht(a)&&(e.class=De(a)),ct(l)&&(Lc(l)&&!Ge(l)&&(l=Ht({},l)),e.style=Hn(l))}const o=ht(t)?1:$_(t)?128:p_(t)?64:ct(t)?4:Ye(t)?2:0;return N(t,e,n,i,s,o,r,!0)}function Sx(t){return t?Lc(t)||F_(t)?Ht({},t):t:null}function ns(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?qi(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&j_(c),ref:e&&e.ref?n&&r?Ge(r)?r.concat(Wl(e)):[r,Wl(e)]:Wl(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==rt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ns(t.ssContent),ssFallback:t.ssFallback&&ns(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&pr(u,l.clone(u)),u}function ir(t=" ",e=0){return Ke(Ao,null,t,e)}function gf(t,e){const n=Ke(Gl,null,t);return n.staticCount=e,n}function tt(t="",e=!1){return e?(ae(),Et(tn,null,t)):Ke(tn,null,t)}function bi(t){return t==null||typeof t=="boolean"?Ke(tn):Ge(t)?Ke(rt,null,t.slice()):_a(t)?Hi(t):Ke(Ao,null,String(t))}function Hi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ns(t)}function Ld(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ge(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Ld(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!F_(e)?e._ctx=nn:s===3&&nn&&(nn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:nn},n=32):(e=String(e),i&64?(n=16,e=[ir(e)]):n=8);t.children=e,t.shapeFlag|=n}function qi(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=De([e.class,i.class]));else if(s==="style")e.style=Hn([e.style,i.style]);else if(Ec(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ge(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Tc(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function pi(t,e,n,i=null){Jn(t,e,7,[n,i])}const Mx=I_();let Ex=0;function Tx(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Mx,r={uid:Ex++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Hg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:k_(i,s),emitsOptions:L_(i,s),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:i.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ix.bind(null,r),t.ce&&t.ce(r),r}let un=null;const Kt=()=>un||nn;let cc,_f;{const t=Dc(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};cc=e("__VUE_INSTANCE_SETTERS__",n=>un=n),_f=e("__VUE_SSR_SETTERS__",n=>va=n)}const Oa=t=>{const e=un;return cc(t),t.scope.on(),()=>{t.scope.off(),cc(e)}},Hh=()=>{un&&un.scope.off(),cc(null)};function Y_(t){return t.vnode.shapeFlag&4}let va=!1;function wx(t,e=!1,n=!1){e&&_f(e);const{props:i,children:s}=t.vnode,r=Y_(t);cx(t,i,r,e),hx(t,s,n||e);const o=r?Ax(t,e):void 0;return e&&_f(!1),o}function Ax(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,jy);const{setup:i}=n;if(i){Ji();const s=t.setupContext=i.length>1?K_(t):null,r=Oa(t),o=Ua(i,t,0,[t.props,s]),a=Ug(o);if(Qi(),r(),(a||t.sp)&&!oo(t)&&b_(t),a){if(o.then(Hh,Hh),e)return o.then(l=>{Vh(t,l)}).catch(l=>{Uc(l,t,0)});t.asyncDep=o}else Vh(t,o)}else q_(t)}function Vh(t,e,n){Ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ct(e)&&(t.setupState=r_(e)),q_(t)}function q_(t,e,n){const i=t.type;t.render||(t.render=i.render||dn);{const s=Oa(t);Ji();try{qy(t)}finally{Qi(),s()}}}const Cx={get(t,e){return cn(t,"get",""),t[e]}};function K_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Cx),slots:t.slots,emit:t.emit,expose:e}}function Bc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(r_(wd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in sa)return sa[n](t)},has(e,n){return n in e||n in sa}})):t.proxy}function Rx(t,e=!0){return Ye(t)?t.displayName||t.name:t.name||e&&t.__name}function Px(t){return Ye(t)&&"__vccOpts"in t}const Me=(t,e)=>Sy(t,e,va);function Dx(t,e,n){try{lc(-1);const i=arguments.length;return i===2?ct(e)&&!Ge(e)?_a(e)?Ke(t,null,[e]):Ke(t,e):Ke(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&_a(n)&&(n=[n]),Ke(t,e,n))}finally{lc(1)}}const Ix="3.5.38",Lx=dn;/**
* @vue/runtime-dom v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vf;const Gh=typeof window<"u"&&window.trustedTypes;if(Gh)try{vf=Gh.createPolicy("vue",{createHTML:t=>t})}catch{}const Z_=vf?t=>vf.createHTML(t):t=>t,Ux="http://www.w3.org/2000/svg",Nx="http://www.w3.org/1998/Math/MathML",ki=typeof document<"u"?document:null,Wh=ki&&ki.createElement("template"),Ox={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?ki.createElementNS(Ux,t):e==="mathml"?ki.createElementNS(Nx,t):n?ki.createElement(t,{is:n}):ki.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>ki.createTextNode(t),createComment:t=>ki.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ki.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Wh.innerHTML=Z_(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Wh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},cs="transition",Fo="animation",mo=Symbol("_vtc"),J_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Q_=Ht({},__,J_),Fx=t=>(t.displayName="Transition",t.props=Q_,t),Bx=Fx((t,{slots:e})=>Dx(Fy,ev(t),e)),ks=(t,e=[])=>{Ge(t)?t.forEach(n=>n(...e)):t&&t(...e)},$h=t=>t?Ge(t)?t.some(e=>e.length>1):t.length>1:!1;function ev(t){const e={};for(const k in t)k in J_||(e[k]=t[k]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=kx(s),m=g&&g[0],_=g&&g[1],{onBeforeEnter:h,onEnter:b,onEnterCancelled:x,onLeave:v,onLeaveCancelled:P,onBeforeAppear:D=h,onAppear:A=b,onAppearCancelled:T=x}=e,y=(k,H,J,se)=>{k._enterCancelled=se,vs(k,H?u:a),vs(k,H?c:o),J&&J()},M=(k,H)=>{k._isLeaving=!1,vs(k,f),vs(k,p),vs(k,d),H&&H()},U=k=>(H,J)=>{const se=k?A:b,q=()=>y(H,k,J);ks(se,[H,q]),Xh(()=>{vs(H,k?l:r),_i(H,k?u:a),$h(se)||jh(H,i,m,q)})};return Ht(e,{onBeforeEnter(k){ks(h,[k]),_i(k,r),_i(k,o)},onBeforeAppear(k){ks(D,[k]),_i(k,l),_i(k,c)},onEnter:U(!1),onAppear:U(!0),onLeave(k,H){k._isLeaving=!0;const J=()=>M(k,H);_i(k,f),k._enterCancelled?(_i(k,d),yf(k)):(yf(k),_i(k,d)),Xh(()=>{k._isLeaving&&(vs(k,f),_i(k,p),$h(v)||jh(k,i,_,J))}),ks(v,[k,J])},onEnterCancelled(k){y(k,!1,void 0,!0),ks(x,[k])},onAppearCancelled(k){y(k,!0,void 0,!0),ks(T,[k])},onLeaveCancelled(k){M(k),ks(P,[k])}})}function kx(t){if(t==null)return null;if(ct(t))return[lu(t.enter),lu(t.leave)];{const e=lu(t);return[e,e]}}function lu(t){return V0(t)}function _i(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[mo]||(t[mo]=new Set)).add(e)}function vs(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[mo];n&&(n.delete(e),n.size||(t[mo]=void 0))}function Xh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let zx=0;function jh(t,e,n,i){const s=t._endId=++zx,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=tv(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),r()},d=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function tv(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),s=i(`${cs}Delay`),r=i(`${cs}Duration`),o=Yh(s,r),a=i(`${Fo}Delay`),l=i(`${Fo}Duration`),c=Yh(a,l);let u=null,f=0,d=0;e===cs?o>0&&(u=cs,f=o,d=r.length):e===Fo?c>0&&(u=Fo,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?cs:Fo:null,d=u?u===cs?r.length:l.length:0);const p=u===cs&&/\b(?:transform|all)(?:,|$)/.test(i(`${cs}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function Yh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>qh(n)+qh(t[i])))}function qh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function yf(t){return(t?t.ownerDocument:document).body.offsetHeight}function Hx(t,e,n){const i=t[mo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const uc=Symbol("_vod"),Ud=Symbol("_vsh"),jn={name:"show",beforeMount(t,{value:e},{transition:n}){t[uc]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Bo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Bo(t,!0),i.enter(t)):i.leave(t,()=>{Bo(t,!1)}):Bo(t,e))},beforeUnmount(t,{value:e}){Bo(t,e)}};function Bo(t,e){t.style.display=e?t[uc]:"none",t[Ud]=!e}const Vx=Symbol(""),Gx=/(?:^|;)\s*display\s*:/;function Wx(t,e,n){const i=t.style,s=ht(n);let r=!1;if(n&&!s){if(e)if(ht(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Jo(i,a,"")}else for(const o in e)n[o]==null&&Jo(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?Xx(t,o,!ht(e)&&e?e[o]:void 0,a)||Jo(i,o,a):Jo(i,o,"")}}else if(s){if(e!==n){const o=i[Vx];o&&(n+=";"+o),i.cssText=n,r=Gx.test(n)}}else e&&t.removeAttribute("style");uc in t&&(t[uc]=r?i.display:"",t[Ud]&&(i.display="none"))}const Kh=/\s*!important$/;function Jo(t,e,n){if(Ge(n))n.forEach(i=>Jo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=$x(t,e);Kh.test(n)?t.setProperty(Ps(i),n.replace(Kh,""),"important"):t[i]=n}}const Zh=["Webkit","Moz","ms"],cu={};function $x(t,e){const n=cu[e];if(n)return n;let i=bn(e);if(i!=="filter"&&i in t)return cu[e]=i;i=Rc(i);for(let s=0;s<Zh.length;s++){const r=Zh[s]+i;if(r in t)return cu[e]=r}return e}function Xx(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&ht(i)&&n===i}const Jh="http://www.w3.org/1999/xlink";function Qh(t,e,n,i,s,r=Y0(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Jh,e.slice(6,e.length)):t.setAttributeNS(Jh,e,n):n==null||r&&!Bg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":zn(n)?String(n):n)}function ep(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Z_(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Bg(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Js(t,e,n,i){t.addEventListener(e,n,i)}function jx(t,e,n,i){t.removeEventListener(e,n,i)}const tp=Symbol("_vei");function Yx(t,e,n,i,s=null){const r=t[tp]||(t[tp]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=qx(e);if(i){const c=r[e]=Jx(i,s);Js(t,a,c,l)}else o&&(jx(t,a,o,l),r[e]=void 0)}}const np=/(?:Once|Passive|Capture)$/;function qx(t){let e;if(np.test(t)){e={};let i;for(;i=t.match(np);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ps(t.slice(2)),e]}let uu=0;const Kx=Promise.resolve(),Zx=()=>uu||(Kx.then(()=>uu=0),uu=Date.now());function Jx(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const s=n.value;if(Ge(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Jn(c,e,5,a)}}else Jn(s,e,5,[i])};return n.value=t,n.attached=Zx(),n}const ip=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Qx=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?Hx(t,i,o):e==="style"?Wx(t,n,i):Ec(e)?Tc(e)||Yx(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):eb(t,e,i,o))?(ep(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Qh(t,e,i,o,r,e!=="value")):t._isVueCE&&(tb(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!ht(i)))?ep(t,bn(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Qh(t,e,i,o))};function eb(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&ip(e)&&Ye(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ip(e)&&ht(n)?!1:e in t}function tb(t,e){const n=t._def.props;if(!n)return!1;const i=bn(e);return Array.isArray(n)?n.some(s=>bn(s)===i):Object.keys(n).some(s=>bn(s)===i)}const nv=new WeakMap,iv=new WeakMap,fc=Symbol("_moveCb"),sp=Symbol("_enterCb"),nb=t=>(delete t.props.mode,t),ib=nb({name:"TransitionGroup",props:Ht({},Q_,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Kt(),i=g_();let s,r;return T_(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!lb(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(rb),s.forEach(ob);const a=s.filter(ab);yf(n.vnode.el),a.forEach(l=>{const c=l.el,u=c.style;_i(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[fc]=d=>{d&&d.target!==c||(!d||d.propertyName.endsWith("transform"))&&(c.removeEventListener("transitionend",f),c[fc]=null,vs(c,o))};c.addEventListener("transitionend",f)}),s=[]}),()=>{const o=ft(t),a=ev(o);let l=o.tag||rt;if(s=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&!u.el[Ud]&&(s.push(u),pr(u,ma(u,a,i,n)),nv.set(u,sv(u.el)))}r=e.default?Rd(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&pr(u,ma(u,a,i,n))}return Ke(l,null,r)}}}),sb=ib;function rb(t){const e=t.el;e[fc]&&e[fc](),e[sp]&&e[sp]()}function ob(t){iv.set(t,sv(t.el))}function ab(t){const e=nv.get(t),n=iv.get(t),i=e.left-n.left,s=e.top-n.top;if(i||s){const r=t.el,o=r.style,a=r.getBoundingClientRect();let l=1,c=1;return r.offsetWidth&&(l=a.width/r.offsetWidth),r.offsetHeight&&(c=a.height/r.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(c)||c===0)&&(c=1),Math.abs(l-1)<.01&&(l=1),Math.abs(c-1)<.01&&(c=1),o.transform=o.webkitTransform=`translate(${i/l}px,${s/c}px)`,o.transitionDuration="0s",t}}function sv(t){const e=t.getBoundingClientRect();return{left:e.left,top:e.top}}function lb(t,e,n){const i=t.cloneNode(),s=t[mo];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:o}=tv(i);return r.removeChild(i),o}const dc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ge(e)?n=>Vl(e,n):e};function cb(t){t.target.composing=!0}function rp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ao=Symbol("_assign");function op(t,e,n){return e&&(t=t.trim()),n&&(t=Pc(t)),t}const hc={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[ao]=dc(s);const r=i||s.props&&s.props.type==="number";Js(t,e?"change":"input",o=>{o.target.composing||t[ao](op(t.value,n,r))}),(n||r)&&Js(t,"change",()=>{t.value=op(t.value,n,r)}),e||(Js(t,"compositionstart",cb),Js(t,"compositionend",rp),Js(t,"change",rp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[ao]=dc(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Pc(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l)}},Zr={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=wc(e);Js(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Pc(pc(o)):pc(o));t[ao](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,qt(()=>{t._assigning=!1})}),t[ao]=dc(i)},mounted(t,{value:e}){ap(t,e)},beforeUpdate(t,e,n){t[ao]=dc(n)},updated(t,{value:e}){t._assigning||ap(t,e)}};function ap(t,e){const n=t.multiple,i=Ge(e);if(!(n&&!i&&!wc(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=pc(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=K0(e,a)>-1}else o.selected=e.has(a);else if(La(pc(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function pc(t){return"_value"in t?t._value:t.value}const ub=["ctrl","shift","alt","meta"],fb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ub.some(n=>t[`${n}Key`]&&!e.includes(n))},ya=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=fb[e[o]];if(a&&a(s,e))return}return t(s,...r)}))},db={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},oa=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=(s=>{if(!("key"in s))return;const r=Ps(s.key);if(e.some(o=>o===r||db[o]===r))return t(s)}))},hb=Ht({patchProp:Qx},Ox);let lp;function pb(){return lp||(lp=mx(hb))}const mb=((...t)=>{const e=pb().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=_b(i);if(!s)return;const r=e._component;!Ye(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,gb(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function gb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _b(t){return ht(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let rv;const kc=t=>rv=t,ov=Symbol();function xf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var aa;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(aa||(aa={}));function vb(){const t=Vg(!0),e=t.run(()=>_e({}));let n=[],i=[];const s=wd({install(r){kc(s),s._a=r,r.provide(ov,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const av=()=>{};function cp(t,e,n,i=av){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&yd()&&Gg(s),s}function Pr(t,...e){t.slice().forEach(n=>{n(...e)})}const yb=t=>t(),up=Symbol(),fu=Symbol();function bf(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];xf(s)&&xf(i)&&t.hasOwnProperty(n)&&!Lt(i)&&!Yi(i)?t[n]=bf(s,i):t[n]=i}return t}const xb=Symbol();function bb(t){return!xf(t)||!t.hasOwnProperty(xb)}const{assign:ys}=Object;function Sb(t){return!!(Lt(t)&&t.effect)}function Mb(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=vy(n.state.value[t]);return ys(u,r,Object.keys(o||{}).reduce((f,d)=>(f[d]=wd(Me(()=>{kc(n);const p=n._s.get(t);return o[d].call(p,p)})),f),{}))}return l=lv(t,c,e,n,i,!0),l}function lv(t,e,n={},i,s,r){let o;const a=ys({actions:{}},n),l={deep:!0};let c,u,f=[],d=[],p;const g=i.state.value[t];!r&&!g&&(i.state.value[t]={});let m;function _(T){let y;c=u=!1,typeof T=="function"?(T(i.state.value[t]),y={type:aa.patchFunction,storeId:t,events:p}):(bf(i.state.value[t],T),y={type:aa.patchObject,payload:T,storeId:t,events:p});const M=m=Symbol();qt().then(()=>{m===M&&(c=!0)}),u=!0,Pr(f,y,i.state.value[t])}const h=r?function(){const{state:y}=n,M=y?y():{};this.$patch(U=>{ys(U,M)})}:av;function b(){o.stop(),f=[],d=[],i._s.delete(t)}const x=(T,y="")=>{if(up in T)return T[fu]=y,T;const M=function(){kc(i);const U=Array.from(arguments),k=[],H=[];function J(W){k.push(W)}function se(W){H.push(W)}Pr(d,{args:U,name:M[fu],store:P,after:J,onError:se});let q;try{q=T.apply(this&&this.$id===t?this:P,U)}catch(W){throw Pr(H,W),W}return q instanceof Promise?q.then(W=>(Pr(k,W),W)).catch(W=>(Pr(H,W),Promise.reject(W))):(Pr(k,q),q)};return M[up]=!0,M[fu]=y,M},v={_p:i,$id:t,$onAction:cp.bind(null,d),$patch:_,$reset:h,$subscribe(T,y={}){const M=cp(f,T,y.detached,()=>U()),U=o.run(()=>We(()=>i.state.value[t],k=>{(y.flush==="sync"?u:c)&&T({storeId:t,type:aa.direct,events:p},k)},ys({},l,y)));return M},$dispose:b},P=Sr(v);i._s.set(t,P);const A=(i._a&&i._a.runWithContext||yb)(()=>i._e.run(()=>(o=Vg()).run(()=>e({action:x}))));for(const T in A){const y=A[T];if(Lt(y)&&!Sb(y)||Yi(y))r||(g&&bb(y)&&(Lt(y)?y.value=g[T]:bf(y,g[T])),i.state.value[t][T]=y);else if(typeof y=="function"){const M=x(y,T);A[T]=M,a.actions[T]=y}}return ys(P,A),ys(ft(P),A),Object.defineProperty(P,"$state",{get:()=>i.state.value[t],set:T=>{_(y=>{ys(y,T)})}}),i._p.forEach(T=>{ys(P,o.run(()=>T({store:P,app:i._a,pinia:i,options:a})))}),g&&r&&n.hydrate&&n.hydrate(P.$state,g),c=!0,u=!0,P}/*! #__NO_SIDE_EFFECTS__ */function Nd(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,l){const c=Cy();return a=a||(c?Rt(ov,null):null),a&&kc(a),a=rv,a._s.has(i)||(r?lv(i,e,s,a):Mb(i,s,a)),a._s.get(i)}return o.$id=i,o}const cv="/llmtocabinet",Eb="/ws";function fn(t){return`${cv}${t}`}function Tb(t){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${cv}${Eb}/${t}`}let Sf=null;function wb(t){Sf=t}function el(t,e="info"){Sf&&Sf(t,e)}const Ds=Nd("cabinet",()=>{const t=_e(null),e=_e(null),n=_e(0),i=_e(new Set),s=_e(!1),r=_e(localStorage.getItem("lastProjectId")||"default"),o=Me(()=>!t.value||!e.value?null:l(t.value,e.value)),a=Me(()=>t.value?t.value.components.map(x=>({id:x.id,name:x.name,type:x.type})):[]);function l(x,v){for(const P of x.components){const D=c(P,v);if(D)return D}return null}function c(x,v){if(x.id===v)return x;for(const P of x.children){const D=c(P,v);if(D)return D}return null}function u(x){if(!t.value)return[];const v=[];for(const P of t.value.components)if(f(P,x,v))return v;return[]}function f(x,v,P){if(x.id===v)return!0;for(const D of x.children)if(f(D,v,P))return P.push(x.id),!0;return!1}function d(x){t.value=x}function p(x){e.value=x,x&&(n.value++,u(x).forEach(P=>i.value.add(P)))}function g(x){i.value.has(x)?i.value.delete(x):i.value.add(x)}function m(x){return i.value.has(x)}function _(x){r.value=x}async function h(){try{const v=await(await fetch(fn(`/api/projects/${r.value}/undo`),{method:"POST"})).json();el(v.message||(v.success?"已撤销":"没有可撤销的操作"),v.success?"success":"warning"),v.success&&v.cabinet&&(t.value=v.cabinet)}catch(x){console.error("撤销失败:",x),el("撤销失败","error")}}async function b(){try{const v=await(await fetch(fn(`/api/projects/${r.value}/redo`),{method:"POST"})).json();el(v.message||(v.success?"已重做":"没有可重做的操作"),v.success?"success":"warning"),v.success&&v.cabinet&&(t.value=v.cabinet)}catch(x){console.error("重做失败:",x),el("重做失败","error")}}return{cabinet:t,selectedComponentId:e,componentClickSignal:n,selectedComponent:o,componentList:a,expandedIds:i,isLoading:s,currentProjectId:r,setCabinet:d,selectComponent:p,findParentIds:u,toggleExpand:g,isExpanded:m,setProjectId:_,undo:h,redo:b}});function fp(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"xxxx-xxxx-xxxx".replace(/x/g,()=>Math.floor(Math.random()*16).toString(16))}const Qr=Nd("chat",()=>{const t=_e([]),e=_e(!1),n=_e(""),i=_e([]);function s(g,m){t.value.push({id:fp(),role:g,content:m,timestamp:Date.now()})}function r(){e.value=!0,n.value="",i.value=[]}function o(g){n.value+=g}function a(g){i.value.push(g)}function l(){n.value&&s("assistant",n.value),e.value=!1,n.value="",i.value=[]}function c(){t.value.push({id:fp(),role:"assistant",content:n.value||"对话已停止",timestamp:Date.now(),stopped:!0,thinkingSteps:[...i.value]}),e.value=!1,n.value="",i.value=[]}function u(g){e.value=!0,n.value="",i.value=[...g]}function f(g){const m=t.value.find(_=>_.id===g);m&&(m.continued=!0)}function d(){for(let g=t.value.length-1;g>=0;g--){const m=t.value[g];if(m.role==="assistant"&&m.stopped&&!m.continued){m.continued=!0;break}}}function p(){t.value=[],n.value="",e.value=!1,i.value=[]}return{messages:t,isStreaming:e,currentStreamContent:n,thinkingSteps:i,addMessage:s,startStream:r,appendStreamContent:o,addThinkingStep:a,finishStream:l,stopStream:c,continueStream:u,markContinued:f,disableUncontinuedStoppedMessage:d,clearMessages:p}});let Mf=null;function Ab(t){Mf=t}function yi(t,e="info"){Mf&&Mf(t,e)}const Co=Nd("websocket",()=>{const t=_e(!1),e=_e(0),n=_e(localStorage.getItem("lastProjectId")||"default"),i=_e(0);let s=null,r=0;function o(m){n.value=m,localStorage.setItem("lastProjectId",m),r++;const _=r;s&&(s.onclose=null,s.close(),s=null);const h=Tb(m);s=new WebSocket(h),s.onopen=()=>{_===r&&(t.value=!0,e.value=0,console.log(`WebSocket 已连接: ${m}`),yi("已连接到服务器","success"))},s.onmessage=b=>{if(_!==r)return;const x=JSON.parse(b.data);a(x)},s.onclose=()=>{_===r&&(t.value=!1,console.log(`WebSocket 已断开: ${m}`),yi("连接已断开，正在尝试重连...","warning"),e.value<5?(e.value++,setTimeout(()=>{_===r&&o(m)},2e3*e.value)):yi("重连失败，请刷新页面","error"))},s.onerror=b=>{console.error("WebSocket 错误:",b),yi("连接出现错误","error")}}function a(m){const _=Ds(),h=Qr();switch(m.type){case"cabinet_update":m.cabinet&&_.setCabinet(m.cabinet);break;case"agent_thinking":m.content&&h.appendStreamContent(m.content);break;case"agent_status":m.content&&h.addThinkingStep(m.content);break;case"agent_stopped":h.stopStream();break;case"agent_response":m.content&&(h.finishStream(),h.addMessage("assistant",m.content));break;case"stream_end":h.finishStream();break;case"error":const b=m.message||"未知错误";h.addMessage("system",`错误: ${b}`),h.finishStream(),yi(b,"error");break}}function l(m){if(!s||s.readyState!==WebSocket.OPEN){yi("未连接到服务器，请稍后重试","warning");return}const _=Qr();_.disableUncontinuedStoppedMessage(),_.addMessage("user",m),_.startStream(),s.send(JSON.stringify({type:"chat_message",text:m}))}function c(m,_){if(!s||s.readyState!==WebSocket.OPEN){yi("未连接到服务器，请稍后重试","warning");return}const h=Qr();h.continueStream(m),h.markContinued(_),s.send(JSON.stringify({type:"continue_message"}))}async function u(m=!0){const _=Qr();if(!_.isStreaming)return;const h=n.value;try{await fetch(fn(`/api/projects/${h}/stop`),{method:"POST"})}catch(b){console.error("停止旧对话失败:",b)}m&&_.isStreaming&&_.stopStream()}function f(){!s||s.readyState!==WebSocket.OPEN||s.send(JSON.stringify({type:"request_sync"}))}function d(m){!s||s.readyState!==WebSocket.OPEN||s.send(JSON.stringify({type:"select_component",component_id:m}))}function p(){i.value++}function g(){r++,s&&(s.onclose=null,s.close(),s=null),t.value=!1,e.value=0}return{isConnected:t,reconnectAttempts:e,currentProjectId:n,schemeListVersion:i,connect:o,sendChatMessage:l,continueConversation:c,stopCurrentConversation:u,requestSync:f,selectComponent:d,refreshSchemeList:p,disconnect:g}}),zi=(t,e,{checkForDefaultPrevented:n=!0}={})=>s=>{const r=t==null?void 0:t(s);if(n===!1||!r)return e==null?void 0:e(s)};var dp;const kn=typeof window<"u",Cb=t=>typeof t=="string",uv=()=>{},Rb=kn&&((dp=window==null?void 0:window.navigator)==null?void 0:dp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function fv(t){return typeof t=="function"?t():L(t)}function Pb(t){return t}function Od(t){return yd()?(Gg(t),!0):!1}function Db(t,e=!0){Kt()?Ft(t):e?t():qt(t)}function Ts(t){var e;const n=fv(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Fd=kn?window:void 0;function $l(...t){let e,n,i,s;if(Cb(t[0])||Array.isArray(t[0])?([n,i,s]=t,e=Fd):[e,n,i,s]=t,!e)return uv;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const r=[],o=()=>{r.forEach(u=>u()),r.length=0},a=(u,f,d,p)=>(u.addEventListener(f,d,p),()=>u.removeEventListener(f,d,p)),l=We(()=>[Ts(e),fv(s)],([u,f])=>{o(),u&&r.push(...n.flatMap(d=>i.map(p=>a(u,d,p,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return Od(c),c}let hp=!1;function Ib(t,e,n={}){const{window:i=Fd,ignore:s=[],capture:r=!0,detectIframe:o=!1}=n;if(!i)return;Rb&&!hp&&(hp=!0,Array.from(i.document.body.children).forEach(d=>d.addEventListener("click",uv)));let a=!0;const l=d=>s.some(p=>{if(typeof p=="string")return Array.from(i.document.querySelectorAll(p)).some(g=>g===d.target||d.composedPath().includes(g));{const g=Ts(p);return g&&(d.target===g||d.composedPath().includes(g))}}),u=[$l(i,"click",d=>{const p=Ts(t);if(!(!p||p===d.target||d.composedPath().includes(p))){if(d.detail===0&&(a=!l(d)),!a){a=!0;return}e(d)}},{passive:!0,capture:r}),$l(i,"pointerdown",d=>{const p=Ts(t);p&&(a=!d.composedPath().includes(p)&&!l(d))},{passive:!0}),o&&$l(i,"blur",d=>{var p;const g=Ts(t);((p=i.document.activeElement)==null?void 0:p.tagName)==="IFRAME"&&!(g!=null&&g.contains(i.document.activeElement))&&e(d)})].filter(Boolean);return()=>u.forEach(d=>d())}function Lb(t,e=!1){const n=_e(),i=()=>n.value=!!t();return i(),Db(i,e),n}const pp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},mp="__vueuse_ssr_handlers__";pp[mp]=pp[mp]||{};var gp=Object.getOwnPropertySymbols,Ub=Object.prototype.hasOwnProperty,Nb=Object.prototype.propertyIsEnumerable,Ob=(t,e)=>{var n={};for(var i in t)Ub.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&gp)for(var i of gp(t))e.indexOf(i)<0&&Nb.call(t,i)&&(n[i]=t[i]);return n};function Fb(t,e,n={}){const i=n,{window:s=Fd}=i,r=Ob(i,["window"]);let o;const a=Lb(()=>s&&"ResizeObserver"in s),l=()=>{o&&(o.disconnect(),o=void 0)},c=We(()=>Ts(t),f=>{l(),a.value&&s&&f&&(o=new ResizeObserver(e),o.observe(f,r))},{immediate:!0,flush:"post"}),u=()=>{l(),c()};return Od(u),{isSupported:a,stop:u}}var _p;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(_p||(_p={}));var Bb=Object.defineProperty,vp=Object.getOwnPropertySymbols,kb=Object.prototype.hasOwnProperty,zb=Object.prototype.propertyIsEnumerable,yp=(t,e,n)=>e in t?Bb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Hb=(t,e)=>{for(var n in e||(e={}))kb.call(e,n)&&yp(t,n,e[n]);if(vp)for(var n of vp(e))zb.call(e,n)&&yp(t,n,e[n]);return t};const Vb={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Hb({linear:Pb},Vb);const Gb=()=>kn&&/firefox/i.test(window.navigator.userAgent),Bd=t=>{let e,n;return t.type==="touchend"?(n=t.changedTouches[0].clientY,e=t.changedTouches[0].clientX):t.type.startsWith("touch")?(n=t.touches[0].clientY,e=t.touches[0].clientX):(n=t.clientY,e=t.clientX),{clientX:e,clientY:n}};var Wb=typeof global=="object"&&global&&global.Object===Object&&global,$b=typeof self=="object"&&self&&self.Object===Object&&self,zc=Wb||$b||Function("return this")(),go=zc.Symbol,dv=Object.prototype,Xb=dv.hasOwnProperty,jb=dv.toString,ko=go?go.toStringTag:void 0;function Yb(t){var e=Xb.call(t,ko),n=t[ko];try{t[ko]=void 0;var i=!0}catch{}var s=jb.call(t);return i&&(e?t[ko]=n:delete t[ko]),s}var qb=Object.prototype,Kb=qb.toString;function Zb(t){return Kb.call(t)}var Jb="[object Null]",Qb="[object Undefined]",xp=go?go.toStringTag:void 0;function hv(t){return t==null?t===void 0?Qb:Jb:xp&&xp in Object(t)?Yb(t):Zb(t)}function eS(t){return t!=null&&typeof t=="object"}var tS="[object Symbol]";function Hc(t){return typeof t=="symbol"||eS(t)&&hv(t)==tS}function nS(t,e){for(var n=-1,i=t==null?0:t.length,s=Array(i);++n<i;)s[n]=e(t[n],n,t);return s}var kd=Array.isArray,bp=go?go.prototype:void 0,Sp=bp?bp.toString:void 0;function pv(t){if(typeof t=="string")return t;if(kd(t))return nS(t,pv)+"";if(Hc(t))return Sp?Sp.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}var iS=/\s/;function sS(t){for(var e=t.length;e--&&iS.test(t.charAt(e)););return e}var rS=/^\s+/;function oS(t){return t&&t.slice(0,sS(t)+1).replace(rS,"")}function xa(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Mp=NaN,aS=/^[-+]0x[0-9a-f]+$/i,lS=/^0b[01]+$/i,cS=/^0o[0-7]+$/i,uS=parseInt;function Ep(t){if(typeof t=="number")return t;if(Hc(t))return Mp;if(xa(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=xa(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=oS(t);var n=lS.test(t);return n||cS.test(t)?uS(t.slice(2),n?2:8):aS.test(t)?Mp:+t}var fS="[object AsyncFunction]",dS="[object Function]",hS="[object GeneratorFunction]",pS="[object Proxy]";function mS(t){if(!xa(t))return!1;var e=hv(t);return e==dS||e==hS||e==fS||e==pS}var du=zc["__core-js_shared__"],Tp=(function(){var t=/[^.]+$/.exec(du&&du.keys&&du.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""})();function gS(t){return!!Tp&&Tp in t}var _S=Function.prototype,vS=_S.toString;function yS(t){if(t!=null){try{return vS.call(t)}catch{}try{return t+""}catch{}}return""}var xS=/[\\^$.*+?()[\]{}|]/g,bS=/^\[object .+?Constructor\]$/,SS=Function.prototype,MS=Object.prototype,ES=SS.toString,TS=MS.hasOwnProperty,wS=RegExp("^"+ES.call(TS).replace(xS,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function AS(t){if(!xa(t)||gS(t))return!1;var e=mS(t)?wS:bS;return e.test(yS(t))}function CS(t,e){return t==null?void 0:t[e]}function zd(t,e){var n=CS(t,e);return AS(n)?n:void 0}var wp=(function(){try{var t=zd(Object,"defineProperty");return t({},"",{}),t}catch{}})();function RS(t,e,n){e=="__proto__"&&wp?wp(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function PS(t,e){return t===e||t!==t&&e!==e}var DS=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,IS=/^\w*$/;function LS(t,e){if(kd(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||Hc(t)?!0:IS.test(t)||!DS.test(t)||e!=null&&t in Object(e)}var ba=zd(Object,"create");function US(){this.__data__=ba?ba(null):{},this.size=0}function NS(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var OS="__lodash_hash_undefined__",FS=Object.prototype,BS=FS.hasOwnProperty;function kS(t){var e=this.__data__;if(ba){var n=e[t];return n===OS?void 0:n}return BS.call(e,t)?e[t]:void 0}var zS=Object.prototype,HS=zS.hasOwnProperty;function VS(t){var e=this.__data__;return ba?e[t]!==void 0:HS.call(e,t)}var GS="__lodash_hash_undefined__";function WS(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ba&&e===void 0?GS:e,this}function mr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}mr.prototype.clear=US;mr.prototype.delete=NS;mr.prototype.get=kS;mr.prototype.has=VS;mr.prototype.set=WS;function $S(){this.__data__=[],this.size=0}function Vc(t,e){for(var n=t.length;n--;)if(PS(t[n][0],e))return n;return-1}var XS=Array.prototype,jS=XS.splice;function YS(t){var e=this.__data__,n=Vc(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():jS.call(e,n,1),--this.size,!0}function qS(t){var e=this.__data__,n=Vc(e,t);return n<0?void 0:e[n][1]}function KS(t){return Vc(this.__data__,t)>-1}function ZS(t,e){var n=this.__data__,i=Vc(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}function Ro(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Ro.prototype.clear=$S;Ro.prototype.delete=YS;Ro.prototype.get=qS;Ro.prototype.has=KS;Ro.prototype.set=ZS;var JS=zd(zc,"Map");function QS(){this.size=0,this.__data__={hash:new mr,map:new(JS||Ro),string:new mr}}function eM(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Gc(t,e){var n=t.__data__;return eM(e)?n[typeof e=="string"?"string":"hash"]:n.map}function tM(t){var e=Gc(this,t).delete(t);return this.size-=e?1:0,e}function nM(t){return Gc(this,t).get(t)}function iM(t){return Gc(this,t).has(t)}function sM(t,e){var n=Gc(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}function Mr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Mr.prototype.clear=QS;Mr.prototype.delete=tM;Mr.prototype.get=nM;Mr.prototype.has=iM;Mr.prototype.set=sM;var rM="Expected a function";function Hd(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(rM);var n=function(){var i=arguments,s=e?e.apply(this,i):i[0],r=n.cache;if(r.has(s))return r.get(s);var o=t.apply(this,i);return n.cache=r.set(s,o)||r,o};return n.cache=new(Hd.Cache||Mr),n}Hd.Cache=Mr;var oM=500;function aM(t){var e=Hd(t,function(i){return n.size===oM&&n.clear(),i}),n=e.cache;return e}var lM=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,cM=/\\(\\)?/g,uM=aM(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(lM,function(n,i,s,r){e.push(s?r.replace(cM,"$1"):i||n)}),e});function fM(t){return t==null?"":pv(t)}function dM(t,e){return kd(t)?t:LS(t,e)?[t]:uM(fM(t))}function hM(t){if(typeof t=="string"||Hc(t))return t;var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function pM(t,e){e=dM(e,t);for(var n=0,i=e.length;t!=null&&n<i;)t=t[hM(e[n++])];return n&&n==i?t:void 0}function mM(t,e,n){var i=t==null?void 0:pM(t,e);return i===void 0?n:i}var hu=function(){return zc.Date.now()},gM="Expected a function",_M=Math.max,vM=Math.min;function yM(t,e,n){var i,s,r,o,a,l,c=0,u=!1,f=!1,d=!0;if(typeof t!="function")throw new TypeError(gM);e=Ep(e)||0,xa(n)&&(u=!0,f="maxWait"in n,r=f?_M(Ep(n.maxWait)||0,e):r,d="trailing"in n?!!n.trailing:d);function p(D){var A=i,T=s;return i=s=void 0,c=D,o=t.apply(T,A),o}function g(D){return c=D,a=setTimeout(h,e),u?p(D):o}function m(D){var A=D-l,T=D-c,y=e-A;return f?vM(y,r-T):y}function _(D){var A=D-l,T=D-c;return l===void 0||A>=e||A<0||f&&T>=r}function h(){var D=hu();if(_(D))return b(D);a=setTimeout(h,m(D))}function b(D){return a=void 0,d&&i?p(D):(i=s=void 0,o)}function x(){a!==void 0&&clearTimeout(a),c=0,i=l=s=a=void 0}function v(){return a===void 0?o:b(hu())}function P(){var D=hu(),A=_(D);if(i=arguments,s=this,l=D,A){if(a===void 0)return g(l);if(f)return clearTimeout(a),a=setTimeout(h,e),p(l)}return a===void 0&&(a=setTimeout(h,e)),o}return P.cancel=x,P.flush=v,P}function mc(t){for(var e=-1,n=t==null?0:t.length,i={};++e<n;){var s=t[e];RS(i,s[0],s[1])}return i}function ur(t){return t==null}function xM(t){return t===void 0}const bM=t=>t===void 0,mv=t=>typeof t=="boolean",gr=t=>typeof t=="number",Sa=t=>typeof Element>"u"?!1:t instanceof Element,SM=t=>ht(t)?!Number.isNaN(Number(t)):!1;function Ef(t,e="px"){if(!t)return"";if(gr(t)||SM(t))return`${t}${e}`;if(ht(t))return t}/*! Element Plus Icons Vue v2.3.2 */var MM=Ze({name:"ArrowDown",__name:"arrow-down",setup(t){return(e,n)=>(ae(),me("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[N("path",{fill:"currentColor",d:"M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"})]))}}),EM=MM,TM=Ze({name:"CircleCheck",__name:"circle-check",setup(t){return(e,n)=>(ae(),me("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[N("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"}),N("path",{fill:"currentColor",d:"M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752z"})]))}}),wM=TM,AM=Ze({name:"CircleClose",__name:"circle-close",setup(t){return(e,n)=>(ae(),me("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[N("path",{fill:"currentColor",d:"m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"}),N("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"})]))}}),gv=AM,CM=Ze({name:"Close",__name:"close",setup(t){return(e,n)=>(ae(),me("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[N("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"})]))}}),RM=CM,PM=Ze({name:"Hide",__name:"hide",setup(t){return(e,n)=>(ae(),me("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[N("path",{fill:"currentColor",d:"M876.8 156.8c0-9.6-3.2-16-9.6-22.4s-12.8-9.6-22.4-9.6-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176S0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4 12.8 9.6 22.4 9.6 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4m-646.4 528Q115.2 579.2 76.8 512q43.2-72 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4m140.8-96Q352 555.2 352 512c0-44.8 16-83.2 48-112s67.2-48 112-48c28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6q-43.2 72-153.6 172.8c-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176S1024 528 1024 512s-48.001-73.6-134.401-176"}),N("path",{fill:"currentColor",d:"M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112s-67.2 48-112 48"})]))}}),DM=PM,IM=Ze({name:"Loading",__name:"loading",setup(t){return(e,n)=>(ae(),me("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[N("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248m452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248M828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0"})]))}}),_v=IM,LM=Ze({name:"View",__name:"view",setup(t){return(e,n)=>(ae(),me("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[N("path",{fill:"currentColor",d:"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288m0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.19 160.19 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"})]))}}),UM=LM;const vv="__epPropKey",yt=t=>t,NM=t=>ct(t)&&!!t[vv],Wc=(t,e)=>{if(!ct(t)||NM(t))return t;const{values:n,required:i,default:s,type:r,validator:o}=t,l={type:r,required:!!i,validator:n||o?c=>{let u=!1,f=[];if(n&&(f=Array.from(n),dt(t,"default")&&f.push(s),u||(u=f.includes(c))),o&&(u||(u=o(c))),!u&&f.length>0){const d=[...new Set(f)].map(p=>JSON.stringify(p)).join(", ");Lx(`Invalid prop: validation failed${e?` for prop "${e}"`:""}. Expected one of [${d}], got value ${JSON.stringify(c)}.`)}return u}:void 0,[vv]:!0};return dt(t,"default")&&(l.default=s),l},Dn=t=>mc(Object.entries(t).map(([e,n])=>[e,Wc(n,e)])),gc=yt([String,Object,Function]),OM={validating:_v,success:wM,error:gv},Po=(t,e)=>{if(t.install=n=>{for(const i of[t,...Object.values(e??{})])n.component(i.name,i)},e)for(const[n,i]of Object.entries(e))t[n]=i;return t},FM=t=>(t.install=dn,t),fr={tab:"Tab",enter:"Enter",space:"Space",esc:"Escape"},_o="update:modelValue",BM="change",kM=["","default","small","large"],zM=t=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(t),HM=t=>t,VM=["class","style"],GM=/^on[A-Z]/,WM=(t={})=>{const{excludeListeners:e=!1,excludeKeys:n}=t,i=Me(()=>((n==null?void 0:n.value)||[]).concat(VM)),s=Kt();return Me(s?()=>{var r;return mc(Object.entries((r=s.proxy)==null?void 0:r.$attrs).filter(([o])=>!i.value.includes(o)&&!(e&&GM.test(o))))}:()=>({}))},$M=({from:t,replacement:e,scope:n,version:i,ref:s,type:r="API"},o)=>{We(()=>L(o),a=>{},{immediate:!0})};var XM={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const jM=t=>(e,n)=>YM(e,n,L(t)),YM=(t,e,n)=>mM(n,t,t).replace(/\{(\w+)\}/g,(i,s)=>{var r;return`${(r=e==null?void 0:e[s])!=null?r:`{${s}}`}`}),qM=t=>({lang:Me(()=>L(t).name),locale:Lt(t)?t:_e(t),t:jM(t)}),KM=Symbol("localeContextKey"),ZM=t=>{const e=Rt(KM,_e());return qM(Me(()=>e.value||XM))},pu="el",JM="is-",zs=(t,e,n,i,s)=>{let r=`${t}-${e}`;return n&&(r+=`-${n}`),i&&(r+=`__${i}`),s&&(r+=`--${s}`),r},QM=Symbol("namespaceContextKey"),Vd=t=>{const e=Kt()?Rt(QM,_e(pu)):_e(pu);return Me(()=>L(e)||pu)},hn=(t,e)=>{const n=Vd();return{namespace:n,b:(m="")=>zs(n.value,t,m,"",""),e:m=>m?zs(n.value,t,"",m,""):"",m:m=>m?zs(n.value,t,"","",m):"",be:(m,_)=>m&&_?zs(n.value,t,m,_,""):"",em:(m,_)=>m&&_?zs(n.value,t,"",m,_):"",bm:(m,_)=>m&&_?zs(n.value,t,m,"",_):"",bem:(m,_,h)=>m&&_&&h?zs(n.value,t,m,_,h):"",is:(m,..._)=>{const h=_.length>=1?_[0]:!0;return m&&h?`${JM}${m}`:""},cssVar:m=>{const _={};for(const h in m)m[h]&&(_[`--${n.value}-${h}`]=m[h]);return _},cssVarName:m=>`--${n.value}-${m}`,cssVarBlock:m=>{const _={};for(const h in m)m[h]&&(_[`--${n.value}-${t}-${h}`]=m[h]);return _},cssVarBlockName:m=>`--${n.value}-${t}-${m}`}},eE=Wc({type:yt(Boolean),default:null}),tE=Wc({type:yt(Function)}),nE=t=>{const e=`update:${t}`,n=`onUpdate:${t}`,i=[e],s={[t]:eE,[n]:tE};return{useModelToggle:({indicator:o,toggleReason:a,shouldHideWhenRouteChanges:l,shouldProceed:c,onShow:u,onHide:f})=>{const d=Kt(),{emit:p}=d,g=d.props,m=Me(()=>Ye(g[n])),_=Me(()=>g[t]===null),h=A=>{o.value!==!0&&(o.value=!0,a&&(a.value=A),Ye(u)&&u(A))},b=A=>{o.value!==!1&&(o.value=!1,a&&(a.value=A),Ye(f)&&f(A))},x=A=>{if(g.disabled===!0||Ye(c)&&!c())return;const T=m.value&&kn;T&&p(e,!0),(_.value||!T)&&h(A)},v=A=>{if(g.disabled===!0||!kn)return;const T=m.value&&kn;T&&p(e,!1),(_.value||!T)&&b(A)},P=A=>{mv(A)&&(g.disabled&&A?m.value&&p(e,!1):o.value!==A&&(A?h():b()))},D=()=>{o.value?v():x()};return We(()=>g[t],P),l&&d.appContext.config.globalProperties.$route!==void 0&&We(()=>({...d.proxy.$route}),()=>{l.value&&o.value&&v()}),Ft(()=>{P(g[t])}),{hide:v,show:x,toggle:D,hasUpdateHandler:m}},useModelToggleProps:s,useModelToggleEmits:i}},yv=t=>{const e=Kt();return Me(()=>{var n,i;return(i=(n=e==null?void 0:e.proxy)==null?void 0:n.$props)==null?void 0:i[t]})};var Cn="top",Qn="bottom",ei="right",Rn="left",Gd="auto",Fa=[Cn,Qn,ei,Rn],vo="start",Ma="end",iE="clippingParents",xv="viewport",zo="popper",sE="reference",Ap=Fa.reduce(function(t,e){return t.concat([e+"-"+vo,e+"-"+Ma])},[]),Wd=[].concat(Fa,[Gd]).reduce(function(t,e){return t.concat([e,e+"-"+vo,e+"-"+Ma])},[]),rE="beforeRead",oE="read",aE="afterRead",lE="beforeMain",cE="main",uE="afterMain",fE="beforeWrite",dE="write",hE="afterWrite",pE=[rE,oE,aE,lE,cE,uE,fE,dE,hE];function Ci(t){return t?(t.nodeName||"").toLowerCase():null}function Vn(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function _r(t){var e=Vn(t).Element;return t instanceof e||t instanceof Element}function Zn(t){var e=Vn(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function $d(t){if(typeof ShadowRoot>"u")return!1;var e=Vn(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function mE(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var i=e.styles[n]||{},s=e.attributes[n]||{},r=e.elements[n];!Zn(r)||!Ci(r)||(Object.assign(r.style,i),Object.keys(s).forEach(function(o){var a=s[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function gE(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(i){var s=e.elements[i],r=e.attributes[i]||{},o=Object.keys(e.styles.hasOwnProperty(i)?e.styles[i]:n[i]),a=o.reduce(function(l,c){return l[c]="",l},{});!Zn(s)||!Ci(s)||(Object.assign(s.style,a),Object.keys(r).forEach(function(l){s.removeAttribute(l)}))})}}var bv={name:"applyStyles",enabled:!0,phase:"write",fn:mE,effect:gE,requires:["computeStyles"]};function Ai(t){return t.split("-")[0]}var dr=Math.max,_c=Math.min,yo=Math.round;function Tf(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Sv(){return!/^((?!chrome|android).)*safari/i.test(Tf())}function xo(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var i=t.getBoundingClientRect(),s=1,r=1;e&&Zn(t)&&(s=t.offsetWidth>0&&yo(i.width)/t.offsetWidth||1,r=t.offsetHeight>0&&yo(i.height)/t.offsetHeight||1);var o=_r(t)?Vn(t):window,a=o.visualViewport,l=!Sv()&&n,c=(i.left+(l&&a?a.offsetLeft:0))/s,u=(i.top+(l&&a?a.offsetTop:0))/r,f=i.width/s,d=i.height/r;return{width:f,height:d,top:u,right:c+f,bottom:u+d,left:c,x:c,y:u}}function Xd(t){var e=xo(t),n=t.offsetWidth,i=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:i}}function Mv(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&$d(n)){var i=e;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function is(t){return Vn(t).getComputedStyle(t)}function _E(t){return["table","td","th"].indexOf(Ci(t))>=0}function Is(t){return((_r(t)?t.ownerDocument:t.document)||window.document).documentElement}function $c(t){return Ci(t)==="html"?t:t.assignedSlot||t.parentNode||($d(t)?t.host:null)||Is(t)}function Cp(t){return!Zn(t)||is(t).position==="fixed"?null:t.offsetParent}function vE(t){var e=/firefox/i.test(Tf()),n=/Trident/i.test(Tf());if(n&&Zn(t)){var i=is(t);if(i.position==="fixed")return null}var s=$c(t);for($d(s)&&(s=s.host);Zn(s)&&["html","body"].indexOf(Ci(s))<0;){var r=is(s);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return s;s=s.parentNode}return null}function Ba(t){for(var e=Vn(t),n=Cp(t);n&&_E(n)&&is(n).position==="static";)n=Cp(n);return n&&(Ci(n)==="html"||Ci(n)==="body"&&is(n).position==="static")?e:n||vE(t)||e}function jd(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function la(t,e,n){return dr(t,_c(e,n))}function yE(t,e,n){var i=la(t,e,n);return i>n?n:i}function Ev(){return{top:0,right:0,bottom:0,left:0}}function Tv(t){return Object.assign({},Ev(),t)}function wv(t,e){return e.reduce(function(n,i){return n[i]=t,n},{})}var xE=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,Tv(typeof t!="number"?t:wv(t,Fa))};function bE(t){var e,n=t.state,i=t.name,s=t.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=Ai(n.placement),l=jd(a),c=[Rn,ei].indexOf(a)>=0,u=c?"height":"width";if(!(!r||!o)){var f=xE(s.padding,n),d=Xd(r),p=l==="y"?Cn:Rn,g=l==="y"?Qn:ei,m=n.rects.reference[u]+n.rects.reference[l]-o[l]-n.rects.popper[u],_=o[l]-n.rects.reference[l],h=Ba(r),b=h?l==="y"?h.clientHeight||0:h.clientWidth||0:0,x=m/2-_/2,v=f[p],P=b-d[u]-f[g],D=b/2-d[u]/2+x,A=la(v,D,P),T=l;n.modifiersData[i]=(e={},e[T]=A,e.centerOffset=A-D,e)}}function SE(t){var e=t.state,n=t.options,i=n.element,s=i===void 0?"[data-popper-arrow]":i;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||Mv(e.elements.popper,s)&&(e.elements.arrow=s))}var ME={name:"arrow",enabled:!0,phase:"main",fn:bE,effect:SE,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function bo(t){return t.split("-")[1]}var EE={top:"auto",right:"auto",bottom:"auto",left:"auto"};function TE(t,e){var n=t.x,i=t.y,s=e.devicePixelRatio||1;return{x:yo(n*s)/s||0,y:yo(i*s)/s||0}}function Rp(t){var e,n=t.popper,i=t.popperRect,s=t.placement,r=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,f=t.isFixed,d=o.x,p=d===void 0?0:d,g=o.y,m=g===void 0?0:g,_=typeof u=="function"?u({x:p,y:m}):{x:p,y:m};p=_.x,m=_.y;var h=o.hasOwnProperty("x"),b=o.hasOwnProperty("y"),x=Rn,v=Cn,P=window;if(c){var D=Ba(n),A="clientHeight",T="clientWidth";if(D===Vn(n)&&(D=Is(n),is(D).position!=="static"&&a==="absolute"&&(A="scrollHeight",T="scrollWidth")),D=D,s===Cn||(s===Rn||s===ei)&&r===Ma){v=Qn;var y=f&&D===P&&P.visualViewport?P.visualViewport.height:D[A];m-=y-i.height,m*=l?1:-1}if(s===Rn||(s===Cn||s===Qn)&&r===Ma){x=ei;var M=f&&D===P&&P.visualViewport?P.visualViewport.width:D[T];p-=M-i.width,p*=l?1:-1}}var U=Object.assign({position:a},c&&EE),k=u===!0?TE({x:p,y:m},Vn(n)):{x:p,y:m};if(p=k.x,m=k.y,l){var H;return Object.assign({},U,(H={},H[v]=b?"0":"",H[x]=h?"0":"",H.transform=(P.devicePixelRatio||1)<=1?"translate("+p+"px, "+m+"px)":"translate3d("+p+"px, "+m+"px, 0)",H))}return Object.assign({},U,(e={},e[v]=b?m+"px":"",e[x]=h?p+"px":"",e.transform="",e))}function wE(t){var e=t.state,n=t.options,i=n.gpuAcceleration,s=i===void 0?!0:i,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:Ai(e.placement),variation:bo(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Rp(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Rp(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Av={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:wE,data:{}},tl={passive:!0};function AE(t){var e=t.state,n=t.instance,i=t.options,s=i.scroll,r=s===void 0?!0:s,o=i.resize,a=o===void 0?!0:o,l=Vn(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&c.forEach(function(u){u.addEventListener("scroll",n.update,tl)}),a&&l.addEventListener("resize",n.update,tl),function(){r&&c.forEach(function(u){u.removeEventListener("scroll",n.update,tl)}),a&&l.removeEventListener("resize",n.update,tl)}}var Cv={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:AE,data:{}},CE={left:"right",right:"left",bottom:"top",top:"bottom"};function Xl(t){return t.replace(/left|right|bottom|top/g,function(e){return CE[e]})}var RE={start:"end",end:"start"};function Pp(t){return t.replace(/start|end/g,function(e){return RE[e]})}function Yd(t){var e=Vn(t),n=e.pageXOffset,i=e.pageYOffset;return{scrollLeft:n,scrollTop:i}}function qd(t){return xo(Is(t)).left+Yd(t).scrollLeft}function PE(t,e){var n=Vn(t),i=Is(t),s=n.visualViewport,r=i.clientWidth,o=i.clientHeight,a=0,l=0;if(s){r=s.width,o=s.height;var c=Sv();(c||!c&&e==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:r,height:o,x:a+qd(t),y:l}}function DE(t){var e,n=Is(t),i=Yd(t),s=(e=t.ownerDocument)==null?void 0:e.body,r=dr(n.scrollWidth,n.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=dr(n.scrollHeight,n.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-i.scrollLeft+qd(t),l=-i.scrollTop;return is(s||n).direction==="rtl"&&(a+=dr(n.clientWidth,s?s.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function Kd(t){var e=is(t),n=e.overflow,i=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+s+i)}function Rv(t){return["html","body","#document"].indexOf(Ci(t))>=0?t.ownerDocument.body:Zn(t)&&Kd(t)?t:Rv($c(t))}function ca(t,e){var n;e===void 0&&(e=[]);var i=Rv(t),s=i===((n=t.ownerDocument)==null?void 0:n.body),r=Vn(i),o=s?[r].concat(r.visualViewport||[],Kd(i)?i:[]):i,a=e.concat(o);return s?a:a.concat(ca($c(o)))}function wf(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function IE(t,e){var n=xo(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function Dp(t,e,n){return e===xv?wf(PE(t,n)):_r(e)?IE(e,n):wf(DE(Is(t)))}function LE(t){var e=ca($c(t)),n=["absolute","fixed"].indexOf(is(t).position)>=0,i=n&&Zn(t)?Ba(t):t;return _r(i)?e.filter(function(s){return _r(s)&&Mv(s,i)&&Ci(s)!=="body"}):[]}function UE(t,e,n,i){var s=e==="clippingParents"?LE(t):[].concat(e),r=[].concat(s,[n]),o=r[0],a=r.reduce(function(l,c){var u=Dp(t,c,i);return l.top=dr(u.top,l.top),l.right=_c(u.right,l.right),l.bottom=_c(u.bottom,l.bottom),l.left=dr(u.left,l.left),l},Dp(t,o,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Pv(t){var e=t.reference,n=t.element,i=t.placement,s=i?Ai(i):null,r=i?bo(i):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(s){case Cn:l={x:o,y:e.y-n.height};break;case Qn:l={x:o,y:e.y+e.height};break;case ei:l={x:e.x+e.width,y:a};break;case Rn:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var c=s?jd(s):null;if(c!=null){var u=c==="y"?"height":"width";switch(r){case vo:l[c]=l[c]-(e[u]/2-n[u]/2);break;case Ma:l[c]=l[c]+(e[u]/2-n[u]/2);break}}return l}function Ea(t,e){e===void 0&&(e={});var n=e,i=n.placement,s=i===void 0?t.placement:i,r=n.strategy,o=r===void 0?t.strategy:r,a=n.boundary,l=a===void 0?iE:a,c=n.rootBoundary,u=c===void 0?xv:c,f=n.elementContext,d=f===void 0?zo:f,p=n.altBoundary,g=p===void 0?!1:p,m=n.padding,_=m===void 0?0:m,h=Tv(typeof _!="number"?_:wv(_,Fa)),b=d===zo?sE:zo,x=t.rects.popper,v=t.elements[g?b:d],P=UE(_r(v)?v:v.contextElement||Is(t.elements.popper),l,u,o),D=xo(t.elements.reference),A=Pv({reference:D,element:x,placement:s}),T=wf(Object.assign({},x,A)),y=d===zo?T:D,M={top:P.top-y.top+h.top,bottom:y.bottom-P.bottom+h.bottom,left:P.left-y.left+h.left,right:y.right-P.right+h.right},U=t.modifiersData.offset;if(d===zo&&U){var k=U[s];Object.keys(M).forEach(function(H){var J=[ei,Qn].indexOf(H)>=0?1:-1,se=[Cn,Qn].indexOf(H)>=0?"y":"x";M[H]+=k[se]*J})}return M}function NE(t,e){e===void 0&&(e={});var n=e,i=n.placement,s=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?Wd:l,u=bo(i),f=u?a?Ap:Ap.filter(function(g){return bo(g)===u}):Fa,d=f.filter(function(g){return c.indexOf(g)>=0});d.length===0&&(d=f);var p=d.reduce(function(g,m){return g[m]=Ea(t,{placement:m,boundary:s,rootBoundary:r,padding:o})[Ai(m)],g},{});return Object.keys(p).sort(function(g,m){return p[g]-p[m]})}function OE(t){if(Ai(t)===Gd)return[];var e=Xl(t);return[Pp(t),e,Pp(e)]}function FE(t){var e=t.state,n=t.options,i=t.name;if(!e.modifiersData[i]._skip){for(var s=n.mainAxis,r=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,c=n.padding,u=n.boundary,f=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,g=p===void 0?!0:p,m=n.allowedAutoPlacements,_=e.options.placement,h=Ai(_),b=h===_,x=l||(b||!g?[Xl(_)]:OE(_)),v=[_].concat(x).reduce(function(ue,ge){return ue.concat(Ai(ge)===Gd?NE(e,{placement:ge,boundary:u,rootBoundary:f,padding:c,flipVariations:g,allowedAutoPlacements:m}):ge)},[]),P=e.rects.reference,D=e.rects.popper,A=new Map,T=!0,y=v[0],M=0;M<v.length;M++){var U=v[M],k=Ai(U),H=bo(U)===vo,J=[Cn,Qn].indexOf(k)>=0,se=J?"width":"height",q=Ea(e,{placement:U,boundary:u,rootBoundary:f,altBoundary:d,padding:c}),W=J?H?ei:Rn:H?Qn:Cn;P[se]>D[se]&&(W=Xl(W));var j=Xl(W),ve=[];if(r&&ve.push(q[k]<=0),a&&ve.push(q[W]<=0,q[j]<=0),ve.every(function(ue){return ue})){y=U,T=!1;break}A.set(U,ve)}if(T)for(var we=g?3:1,Ie=function(ue){var ge=v.find(function(Re){var Te=A.get(Re);if(Te)return Te.slice(0,ue).every(function(Ue){return Ue})});if(ge)return y=ge,"break"},Oe=we;Oe>0;Oe--){var Qe=Ie(Oe);if(Qe==="break")break}e.placement!==y&&(e.modifiersData[i]._skip=!0,e.placement=y,e.reset=!0)}}var BE={name:"flip",enabled:!0,phase:"main",fn:FE,requiresIfExists:["offset"],data:{_skip:!1}};function Ip(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Lp(t){return[Cn,ei,Qn,Rn].some(function(e){return t[e]>=0})}function kE(t){var e=t.state,n=t.name,i=e.rects.reference,s=e.rects.popper,r=e.modifiersData.preventOverflow,o=Ea(e,{elementContext:"reference"}),a=Ea(e,{altBoundary:!0}),l=Ip(o,i),c=Ip(a,s,r),u=Lp(l),f=Lp(c);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}var zE={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:kE};function HE(t,e,n){var i=Ai(t),s=[Rn,Cn].indexOf(i)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*s,[Rn,ei].indexOf(i)>=0?{x:a,y:o}:{x:o,y:a}}function VE(t){var e=t.state,n=t.options,i=t.name,s=n.offset,r=s===void 0?[0,0]:s,o=Wd.reduce(function(u,f){return u[f]=HE(f,e.rects,r),u},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[i]=o}var GE={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:VE};function WE(t){var e=t.state,n=t.name;e.modifiersData[n]=Pv({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}var Dv={name:"popperOffsets",enabled:!0,phase:"read",fn:WE,data:{}};function $E(t){return t==="x"?"y":"x"}function XE(t){var e=t.state,n=t.options,i=t.name,s=n.mainAxis,r=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,f=n.padding,d=n.tether,p=d===void 0?!0:d,g=n.tetherOffset,m=g===void 0?0:g,_=Ea(e,{boundary:l,rootBoundary:c,padding:f,altBoundary:u}),h=Ai(e.placement),b=bo(e.placement),x=!b,v=jd(h),P=$E(v),D=e.modifiersData.popperOffsets,A=e.rects.reference,T=e.rects.popper,y=typeof m=="function"?m(Object.assign({},e.rects,{placement:e.placement})):m,M=typeof y=="number"?{mainAxis:y,altAxis:y}:Object.assign({mainAxis:0,altAxis:0},y),U=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(D){if(r){var H,J=v==="y"?Cn:Rn,se=v==="y"?Qn:ei,q=v==="y"?"height":"width",W=D[v],j=W+_[J],ve=W-_[se],we=p?-T[q]/2:0,Ie=b===vo?A[q]:T[q],Oe=b===vo?-T[q]:-A[q],Qe=e.elements.arrow,ue=p&&Qe?Xd(Qe):{width:0,height:0},ge=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Ev(),Re=ge[J],Te=ge[se],Ue=la(0,A[q],ue[q]),nt=x?A[q]/2-we-Ue-Re-M.mainAxis:Ie-Ue-Re-M.mainAxis,ye=x?-A[q]/2+we+Ue+Te+M.mainAxis:Oe+Ue+Te+M.mainAxis,He=e.elements.arrow&&Ba(e.elements.arrow),I=He?v==="y"?He.clientTop||0:He.clientLeft||0:0,B=(H=U==null?void 0:U[v])!=null?H:0,C=W+nt-B-I,he=W+ye-B,ie=la(p?_c(j,C):j,W,p?dr(ve,he):ve);D[v]=ie,k[v]=ie-W}if(a){var ne,le=v==="x"?Cn:Rn,fe=v==="x"?Qn:ei,ee=D[P],w=P==="y"?"height":"width",S=ee+_[le],z=ee-_[fe],Z=[Cn,Rn].indexOf(h)!==-1,O=(ne=U==null?void 0:U[P])!=null?ne:0,E=Z?S:ee-A[w]-T[w]-O+M.altAxis,F=Z?ee+A[w]+T[w]-O-M.altAxis:z,V=p&&Z?yE(E,ee,F):la(p?E:S,ee,p?F:z);D[P]=V,k[P]=V-ee}e.modifiersData[i]=k}}var jE={name:"preventOverflow",enabled:!0,phase:"main",fn:XE,requiresIfExists:["offset"]};function YE(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function qE(t){return t===Vn(t)||!Zn(t)?Yd(t):YE(t)}function KE(t){var e=t.getBoundingClientRect(),n=yo(e.width)/t.offsetWidth||1,i=yo(e.height)/t.offsetHeight||1;return n!==1||i!==1}function ZE(t,e,n){n===void 0&&(n=!1);var i=Zn(e),s=Zn(e)&&KE(e),r=Is(e),o=xo(t,s,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!n)&&((Ci(e)!=="body"||Kd(r))&&(a=qE(e)),Zn(e)?(l=xo(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):r&&(l.x=qd(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function JE(t){var e=new Map,n=new Set,i=[];t.forEach(function(r){e.set(r.name,r)});function s(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&s(l)}}),i.push(r)}return t.forEach(function(r){n.has(r.name)||s(r)}),i}function QE(t){var e=JE(t);return pE.reduce(function(n,i){return n.concat(e.filter(function(s){return s.phase===i}))},[])}function e1(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function t1(t){var e=t.reduce(function(n,i){var s=n[i.name];return n[i.name]=s?Object.assign({},s,i,{options:Object.assign({},s.options,i.options),data:Object.assign({},s.data,i.data)}):i,n},{});return Object.keys(e).map(function(n){return e[n]})}var Up={placement:"bottom",modifiers:[],strategy:"absolute"};function Np(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function Zd(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,i=n===void 0?[]:n,s=e.defaultOptions,r=s===void 0?Up:s;return function(o,a,l){l===void 0&&(l=r);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Up,r),modifiersData:{},elements:{reference:o,popper:a},attributes:{},styles:{}},u=[],f=!1,d={state:c,setOptions:function(m){var _=typeof m=="function"?m(c.options):m;g(),c.options=Object.assign({},r,c.options,_),c.scrollParents={reference:_r(o)?ca(o):o.contextElement?ca(o.contextElement):[],popper:ca(a)};var h=QE(t1([].concat(i,c.options.modifiers)));return c.orderedModifiers=h.filter(function(b){return b.enabled}),p(),d.update()},forceUpdate:function(){if(!f){var m=c.elements,_=m.reference,h=m.popper;if(Np(_,h)){c.rects={reference:ZE(_,Ba(h),c.options.strategy==="fixed"),popper:Xd(h)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(T){return c.modifiersData[T.name]=Object.assign({},T.data)});for(var b=0;b<c.orderedModifiers.length;b++){if(c.reset===!0){c.reset=!1,b=-1;continue}var x=c.orderedModifiers[b],v=x.fn,P=x.options,D=P===void 0?{}:P,A=x.name;typeof v=="function"&&(c=v({state:c,options:D,name:A,instance:d})||c)}}}},update:e1(function(){return new Promise(function(m){d.forceUpdate(),m(c)})}),destroy:function(){g(),f=!0}};if(!Np(o,a))return d;d.setOptions(l).then(function(m){!f&&l.onFirstUpdate&&l.onFirstUpdate(m)});function p(){c.orderedModifiers.forEach(function(m){var _=m.name,h=m.options,b=h===void 0?{}:h,x=m.effect;if(typeof x=="function"){var v=x({state:c,name:_,instance:d,options:b}),P=function(){};u.push(v||P)}})}function g(){u.forEach(function(m){return m()}),u=[]}return d}}Zd();var n1=[Cv,Dv,Av,bv];Zd({defaultModifiers:n1});var i1=[Cv,Dv,Av,bv,GE,BE,jE,ME,zE],s1=Zd({defaultModifiers:i1});const r1=(t,e,n={})=>{const i={name:"updateState",enabled:!0,phase:"write",fn:({state:l})=>{const c=o1(l);Object.assign(o.value,c)},requires:["computeStyles"]},s=Me(()=>{const{onFirstUpdate:l,placement:c,strategy:u,modifiers:f}=L(n);return{onFirstUpdate:l,placement:c||"bottom",strategy:u||"absolute",modifiers:[...f||[],i,{name:"applyStyles",enabled:!1}]}}),r=lr(),o=_e({styles:{popper:{position:L(s).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=()=>{r.value&&(r.value.destroy(),r.value=void 0)};return We(s,l=>{const c=L(r);c&&c.setOptions(l)},{deep:!0}),We([t,e],([l,c])=>{a(),!(!l||!c)&&(r.value=s1(l,c,L(s)))}),Pi(()=>{a()}),{state:Me(()=>{var l;return{...((l=L(r))==null?void 0:l.state)||{}}}),styles:Me(()=>L(o).styles),attributes:Me(()=>L(o).attributes),update:()=>{var l;return(l=L(r))==null?void 0:l.update()},forceUpdate:()=>{var l;return(l=L(r))==null?void 0:l.forceUpdate()},instanceRef:Me(()=>L(r))}};function o1(t){const e=Object.keys(t.elements),n=mc(e.map(s=>[s,t.styles[s]||{}])),i=mc(e.map(s=>[s,t.attributes[s]]));return{styles:n,attributes:i}}function Op(){let t;const e=(i,s)=>{n(),t=window.setTimeout(i,s)},n=()=>window.clearTimeout(t);return Od(()=>n()),{registerTimeout:e,cancelTimeout:n}}const Fp={prefix:Math.floor(Math.random()*1e4),current:0},a1=Symbol("elIdInjection"),Iv=()=>Kt()?Rt(a1,Fp):Fp,Lv=t=>{const e=Iv(),n=Vd();return Me(()=>L(t)||`${n.value}-id-${e.prefix}-${e.current++}`)};let Jr=[];const Bp=t=>{const e=t;e.key===fr.esc&&Jr.forEach(n=>n(e))},l1=t=>{Ft(()=>{Jr.length===0&&document.addEventListener("keydown",Bp),kn&&Jr.push(t)}),Pi(()=>{Jr=Jr.filter(e=>e!==t),Jr.length===0&&kn&&document.removeEventListener("keydown",Bp)})};let kp;const Uv=()=>{const t=Vd(),e=Iv(),n=Me(()=>`${t.value}-popper-container-${e.prefix}`),i=Me(()=>`#${n.value}`);return{id:n,selector:i}},c1=t=>{const e=document.createElement("div");return e.id=t,document.body.appendChild(e),e},u1=()=>{const{id:t,selector:e}=Uv();return E_(()=>{kn&&!kp&&!document.body.querySelector(e.value)&&(kp=c1(t.value))}),{id:t,selector:e}},f1=Dn({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),d1=({showAfter:t,hideAfter:e,autoClose:n,open:i,close:s})=>{const{registerTimeout:r}=Op(),{registerTimeout:o,cancelTimeout:a}=Op();return{onOpen:u=>{r(()=>{i(u);const f=L(n);gr(f)&&f>0&&o(()=>{s(u)},f)},L(t))},onClose:u=>{a(),r(()=>{s(u)},L(e))}}},Nv=Symbol("elForwardRef"),h1=t=>{ts(Nv,{setForwardRef:n=>{t.value=n}})},p1=t=>({mounted(e){t(e)},updated(e){t(e)},unmounted(){t(null)}}),zp=_e(0),m1=2e3,g1=Symbol("zIndexContextKey"),_1=t=>{const e=Kt()?Rt(g1,void 0):void 0,n=Me(()=>{const r=L(e);return gr(r)?r:m1}),i=Me(()=>n.value+zp.value);return{initialZIndex:n,currentZIndex:i,nextZIndex:()=>(zp.value++,i.value)}};function v1(t){const e=_e();function n(){if(t.value==null)return;const{selectionStart:s,selectionEnd:r,value:o}=t.value;if(s==null||r==null)return;const a=o.slice(0,Math.max(0,s)),l=o.slice(Math.max(0,r));e.value={selectionStart:s,selectionEnd:r,value:o,beforeTxt:a,afterTxt:l}}function i(){if(t.value==null||e.value==null)return;const{value:s}=t.value,{beforeTxt:r,afterTxt:o,selectionStart:a}=e.value;if(r==null||o==null||a==null)return;let l=s.length;if(s.endsWith(o))l=s.length-o.length;else if(s.startsWith(r))l=r.length;else{const c=r[a-1],u=s.indexOf(c,a-1);u!==-1&&(l=u+1)}t.value.setSelectionRange(l,l)}return[n,i]}const Jd=Wc({type:String,values:kM,required:!1}),y1=Symbol("size"),x1=()=>{const t=Rt(y1,{});return Me(()=>L(t.size)||"")};function Ov(t,{afterFocus:e,beforeBlur:n,afterBlur:i}={}){const s=Kt(),{emit:r}=s,o=lr(),a=_e(!1),l=f=>{a.value||(a.value=!0,r("focus",f),e==null||e())},c=f=>{var d;Ye(n)&&n(f)||f.relatedTarget&&((d=o.value)!=null&&d.contains(f.relatedTarget))||(a.value=!1,r("blur",f),i==null||i())},u=()=>{var f;(f=t.value)==null||f.focus()};return We(o,f=>{f&&f.setAttribute("tabindex","-1")}),$l(o,"click",u),{wrapperRef:o,isFocused:a,handleFocus:l,handleBlur:c}}const b1=Symbol(),Hp=_e();function S1(t,e=void 0){const n=Kt()?Rt(b1,Hp):Hp;return Me(()=>{var i,s;return(s=(i=n.value)==null?void 0:i[t])!=null?s:e})}var on=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n};const M1=Dn({size:{type:yt([Number,String])},color:{type:String}}),E1=Ze({name:"ElIcon",inheritAttrs:!1}),T1=Ze({...E1,props:M1,setup(t){const e=t,n=hn("icon"),i=Me(()=>{const{size:s,color:r}=e;return!s&&!r?{}:{fontSize:bM(s)?void 0:Ef(s),"--color":r}});return(s,r)=>(ae(),me("i",qi({class:L(n).b(),style:L(i)},s.$attrs),[sn(s.$slots,"default")],16))}});var w1=on(T1,[["__file","icon.vue"]]);const Wi=Po(w1),Qd=Symbol("formContextKey"),vc=Symbol("formItemContextKey"),eh=(t,e={})=>{const n=_e(void 0),i=e.prop?n:yv("size"),s=e.global?n:x1(),r=e.form?{size:void 0}:Rt(Qd,void 0),o=e.formItem?{size:void 0}:Rt(vc,void 0);return Me(()=>i.value||L(t)||(o==null?void 0:o.size)||(r==null?void 0:r.size)||s.value||"")},Xc=t=>{const e=yv("disabled"),n=Rt(Qd,void 0);return Me(()=>e.value||L(t)||(n==null?void 0:n.disabled)||!1)},th=()=>{const t=Rt(Qd,void 0),e=Rt(vc,void 0);return{form:t,formItem:e}},Fv=(t,{formItemContext:e,disableIdGeneration:n,disableIdManagement:i})=>{n||(n=_e(!1)),i||(i=_e(!1));const s=_e();let r;const o=Me(()=>{var a;return!!(!t.label&&e&&e.inputIds&&((a=e.inputIds)==null?void 0:a.length)<=1)});return Ft(()=>{r=We([$i(t,"id"),n],([a,l])=>{const c=a??(l?void 0:Lv().value);c!==s.value&&(e!=null&&e.removeInputId&&(s.value&&e.removeInputId(s.value),!(i!=null&&i.value)&&!l&&c&&e.addInputId(c)),s.value=c)},{immediate:!0})}),Na(()=>{r&&r(),e!=null&&e.removeInputId&&s.value&&e.removeInputId(s.value)}),{isLabeledByFormItem:o,inputId:s}};let ii;const A1=`
  height:0 !important;
  visibility:hidden !important;
  ${Gb()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,C1=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function R1(t){const e=window.getComputedStyle(t),n=e.getPropertyValue("box-sizing"),i=Number.parseFloat(e.getPropertyValue("padding-bottom"))+Number.parseFloat(e.getPropertyValue("padding-top")),s=Number.parseFloat(e.getPropertyValue("border-bottom-width"))+Number.parseFloat(e.getPropertyValue("border-top-width"));return{contextStyle:C1.map(o=>`${o}:${e.getPropertyValue(o)}`).join(";"),paddingSize:i,borderSize:s,boxSizing:n}}function Vp(t,e=1,n){var i;ii||(ii=document.createElement("textarea"),document.body.appendChild(ii));const{paddingSize:s,borderSize:r,boxSizing:o,contextStyle:a}=R1(t);ii.setAttribute("style",`${a};${A1}`),ii.value=t.value||t.placeholder||"";let l=ii.scrollHeight;const c={};o==="border-box"?l=l+r:o==="content-box"&&(l=l-s),ii.value="";const u=ii.scrollHeight-s;if(gr(e)){let f=u*e;o==="border-box"&&(f=f+s+r),l=Math.max(f,l),c.minHeight=`${f}px`}if(gr(n)){let f=u*n;o==="border-box"&&(f=f+s+r),l=Math.min(f,l)}return c.height=`${l}px`,(i=ii.parentNode)==null||i.removeChild(ii),ii=void 0,c}const P1=Dn({id:{type:String,default:void 0},size:Jd,disabled:Boolean,modelValue:{type:yt([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:yt([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:gc},prefixIcon:{type:gc},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:yt([Object,Array,String]),default:()=>HM({})},autofocus:{type:Boolean,default:!1}}),D1={[_o]:t=>ht(t),input:t=>ht(t),change:t=>ht(t),focus:t=>t instanceof FocusEvent,blur:t=>t instanceof FocusEvent,clear:()=>!0,mouseleave:t=>t instanceof MouseEvent,mouseenter:t=>t instanceof MouseEvent,keydown:t=>t instanceof Event,compositionstart:t=>t instanceof CompositionEvent,compositionupdate:t=>t instanceof CompositionEvent,compositionend:t=>t instanceof CompositionEvent},I1=["role"],L1=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],U1=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],N1=Ze({name:"ElInput",inheritAttrs:!1}),O1=Ze({...N1,props:P1,emits:D1,setup(t,{expose:e,emit:n}){const i=t,s=Yy(),r=C_(),o=Me(()=>{const O={};return i.containerRole==="combobox"&&(O["aria-haspopup"]=s["aria-haspopup"],O["aria-owns"]=s["aria-owns"],O["aria-expanded"]=s["aria-expanded"]),O}),a=Me(()=>[i.type==="textarea"?_.b():m.b(),m.m(p.value),m.is("disabled",g.value),m.is("exceed",ue.value),{[m.b("group")]:r.prepend||r.append,[m.bm("group","append")]:r.append,[m.bm("group","prepend")]:r.prepend,[m.m("prefix")]:r.prefix||i.prefixIcon,[m.m("suffix")]:r.suffix||i.suffixIcon||i.clearable||i.showPassword,[m.bm("suffix","password-clear")]:we.value&&Ie.value},s.class]),l=Me(()=>[m.e("wrapper"),m.is("focus",M.value)]),c=WM({excludeKeys:Me(()=>Object.keys(o.value))}),{form:u,formItem:f}=th(),{inputId:d}=Fv(i,{formItemContext:f}),p=eh(),g=Xc(),m=hn("input"),_=hn("textarea"),h=lr(),b=lr(),x=_e(!1),v=_e(!1),P=_e(!1),D=_e(),A=lr(i.inputStyle),T=Me(()=>h.value||b.value),{wrapperRef:y,isFocused:M,handleFocus:U,handleBlur:k}=Ov(T,{afterBlur(){var O;i.validateEvent&&((O=f==null?void 0:f.validate)==null||O.call(f,"blur").catch(E=>void 0))}}),H=Me(()=>{var O;return(O=u==null?void 0:u.statusIcon)!=null?O:!1}),J=Me(()=>(f==null?void 0:f.validateState)||""),se=Me(()=>J.value&&OM[J.value]),q=Me(()=>P.value?UM:DM),W=Me(()=>[s.style]),j=Me(()=>[i.inputStyle,A.value,{resize:i.resize}]),ve=Me(()=>ur(i.modelValue)?"":String(i.modelValue)),we=Me(()=>i.clearable&&!g.value&&!i.readonly&&!!ve.value&&(M.value||x.value)),Ie=Me(()=>i.showPassword&&!g.value&&!i.readonly&&!!ve.value&&(!!ve.value||M.value)),Oe=Me(()=>i.showWordLimit&&!!i.maxlength&&(i.type==="text"||i.type==="textarea")&&!g.value&&!i.readonly&&!i.showPassword),Qe=Me(()=>ve.value.length),ue=Me(()=>!!Oe.value&&Qe.value>Number(i.maxlength)),ge=Me(()=>!!r.suffix||!!i.suffixIcon||we.value||i.showPassword||Oe.value||!!J.value&&H.value),[Re,Te]=v1(h);Fb(b,O=>{if(ye(),!Oe.value||i.resize!=="both")return;const E=O[0],{width:F}=E.contentRect;D.value={right:`calc(100% - ${F+15+6}px)`}});const Ue=()=>{const{type:O,autosize:E}=i;if(!(!kn||O!=="textarea"||!b.value))if(E){const F=ct(E)?E.minRows:void 0,V=ct(E)?E.maxRows:void 0,G=Vp(b.value,F,V);A.value={overflowY:"hidden",...G},qt(()=>{b.value.offsetHeight,A.value=G})}else A.value={minHeight:Vp(b.value).minHeight}},ye=(O=>{let E=!1;return()=>{var F;if(E||!i.autosize)return;((F=b.value)==null?void 0:F.offsetParent)===null||(O(),E=!0)}})(Ue),He=()=>{const O=T.value,E=i.formatter?i.formatter(ve.value):ve.value;!O||O.value===E||(O.value=E)},I=async O=>{Re();let{value:E}=O.target;if(i.formatter&&(E=i.parser?i.parser(E):E),!v.value){if(E===ve.value){He();return}n(_o,E),n("input",E),await qt(),He(),Te()}},B=O=>{n("change",O.target.value)},C=O=>{n("compositionstart",O),v.value=!0},he=O=>{var E;n("compositionupdate",O);const F=(E=O.target)==null?void 0:E.value,V=F[F.length-1]||"";v.value=!zM(V)},ie=O=>{n("compositionend",O),v.value&&(v.value=!1,I(O))},ne=()=>{P.value=!P.value,le()},le=async()=>{var O;await qt(),(O=T.value)==null||O.focus()},fe=()=>{var O;return(O=T.value)==null?void 0:O.blur()},ee=O=>{x.value=!1,n("mouseleave",O)},w=O=>{x.value=!0,n("mouseenter",O)},S=O=>{n("keydown",O)},z=()=>{var O;(O=T.value)==null||O.select()},Z=()=>{n(_o,""),n("change",""),n("clear"),n("input","")};return We(()=>i.modelValue,()=>{var O;qt(()=>Ue()),i.validateEvent&&((O=f==null?void 0:f.validate)==null||O.call(f,"change").catch(E=>void 0))}),We(ve,()=>He()),We(()=>i.type,async()=>{await qt(),He(),Ue()}),Ft(()=>{!i.formatter&&i.parser,He(),qt(Ue)}),e({input:h,textarea:b,ref:T,textareaStyle:j,autosize:$i(i,"autosize"),focus:le,blur:fe,select:z,clear:Z,resizeTextarea:Ue}),(O,E)=>Dt((ae(),me("div",qi(L(o),{class:L(a),style:L(W),role:O.containerRole,onMouseenter:w,onMouseleave:ee}),[tt(" input "),O.type!=="textarea"?(ae(),me(rt,{key:0},[tt(" prepend slot "),O.$slots.prepend?(ae(),me("div",{key:0,class:De(L(m).be("group","prepend"))},[sn(O.$slots,"prepend")],2)):tt("v-if",!0),N("div",{ref_key:"wrapperRef",ref:y,class:De(L(l))},[tt(" prefix slot "),O.$slots.prefix||O.prefixIcon?(ae(),me("span",{key:0,class:De(L(m).e("prefix"))},[N("span",{class:De(L(m).e("prefix-inner"))},[sn(O.$slots,"prefix"),O.prefixIcon?(ae(),Et(L(Wi),{key:0,class:De(L(m).e("icon"))},{default:It(()=>[(ae(),Et(nr(O.prefixIcon)))]),_:1},8,["class"])):tt("v-if",!0)],2)],2)):tt("v-if",!0),N("input",qi({id:L(d),ref_key:"input",ref:h,class:L(m).e("inner")},L(c),{minlength:O.minlength,maxlength:O.maxlength,type:O.showPassword?P.value?"text":"password":O.type,disabled:L(g),readonly:O.readonly,autocomplete:O.autocomplete,tabindex:O.tabindex,"aria-label":O.label,placeholder:O.placeholder,style:O.inputStyle,form:O.form,autofocus:O.autofocus,onCompositionstart:C,onCompositionupdate:he,onCompositionend:ie,onInput:I,onFocus:E[0]||(E[0]=(...F)=>L(U)&&L(U)(...F)),onBlur:E[1]||(E[1]=(...F)=>L(k)&&L(k)(...F)),onChange:B,onKeydown:S}),null,16,L1),tt(" suffix slot "),L(ge)?(ae(),me("span",{key:1,class:De(L(m).e("suffix"))},[N("span",{class:De(L(m).e("suffix-inner"))},[!L(we)||!L(Ie)||!L(Oe)?(ae(),me(rt,{key:0},[sn(O.$slots,"suffix"),O.suffixIcon?(ae(),Et(L(Wi),{key:0,class:De(L(m).e("icon"))},{default:It(()=>[(ae(),Et(nr(O.suffixIcon)))]),_:1},8,["class"])):tt("v-if",!0)],64)):tt("v-if",!0),L(we)?(ae(),Et(L(Wi),{key:1,class:De([L(m).e("icon"),L(m).e("clear")]),onMousedown:ya(L(dn),["prevent"]),onClick:Z},{default:It(()=>[Ke(L(gv))]),_:1},8,["class","onMousedown"])):tt("v-if",!0),L(Ie)?(ae(),Et(L(Wi),{key:2,class:De([L(m).e("icon"),L(m).e("password")]),onClick:ne},{default:It(()=>[(ae(),Et(nr(L(q))))]),_:1},8,["class"])):tt("v-if",!0),L(Oe)?(ae(),me("span",{key:3,class:De(L(m).e("count"))},[N("span",{class:De(L(m).e("count-inner"))},Xe(L(Qe))+" / "+Xe(O.maxlength),3)],2)):tt("v-if",!0),L(J)&&L(se)&&L(H)?(ae(),Et(L(Wi),{key:4,class:De([L(m).e("icon"),L(m).e("validateIcon"),L(m).is("loading",L(J)==="validating")])},{default:It(()=>[(ae(),Et(nr(L(se))))]),_:1},8,["class"])):tt("v-if",!0)],2)],2)):tt("v-if",!0)],2),tt(" append slot "),O.$slots.append?(ae(),me("div",{key:1,class:De(L(m).be("group","append"))},[sn(O.$slots,"append")],2)):tt("v-if",!0)],64)):(ae(),me(rt,{key:1},[tt(" textarea "),N("textarea",qi({id:L(d),ref_key:"textarea",ref:b,class:L(_).e("inner")},L(c),{tabindex:O.tabindex,disabled:L(g),readonly:O.readonly,autocomplete:O.autocomplete,style:L(j),"aria-label":O.label,placeholder:O.placeholder,form:O.form,autofocus:O.autofocus,onCompositionstart:C,onCompositionupdate:he,onCompositionend:ie,onInput:I,onFocus:E[2]||(E[2]=(...F)=>L(U)&&L(U)(...F)),onBlur:E[3]||(E[3]=(...F)=>L(k)&&L(k)(...F)),onChange:B,onKeydown:S}),null,16,U1),L(Oe)?(ae(),me("span",{key:0,style:Hn(D.value),class:De(L(m).e("count"))},Xe(L(Qe))+" / "+Xe(O.maxlength),7)):tt("v-if",!0)],64))],16,I1)),[[jn,O.type!=="hidden"]])}});var F1=on(O1,[["__file","input.vue"]]);const B1=Po(F1),nh=Symbol("popper"),Bv=Symbol("popperContent"),k1=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],kv=Dn({role:{type:String,values:k1,default:"tooltip"}}),z1=Ze({name:"ElPopper",inheritAttrs:!1}),H1=Ze({...z1,props:kv,setup(t,{expose:e}){const n=t,i=_e(),s=_e(),r=_e(),o=_e(),a=Me(()=>n.role),l={triggerRef:i,popperInstanceRef:s,contentRef:r,referenceRef:o,role:a};return e(l),ts(nh,l),(c,u)=>sn(c.$slots,"default")}});var V1=on(H1,[["__file","popper.vue"]]);const zv=Dn({arrowOffset:{type:Number,default:5}}),G1=Ze({name:"ElPopperArrow",inheritAttrs:!1}),W1=Ze({...G1,props:zv,setup(t,{expose:e}){const n=t,i=hn("popper"),{arrowOffset:s,arrowRef:r,arrowStyle:o}=Rt(Bv,void 0);return We(()=>n.arrowOffset,a=>{s.value=a}),Pi(()=>{r.value=void 0}),e({arrowRef:r}),(a,l)=>(ae(),me("span",{ref_key:"arrowRef",ref:r,class:De(L(i).e("arrow")),style:Hn(L(o)),"data-popper-arrow":""},null,6))}});var $1=on(W1,[["__file","arrow.vue"]]);const X1="ElOnlyChild",j1=Ze({name:X1,setup(t,{slots:e,attrs:n}){var i;const s=Rt(Nv),r=p1((i=s==null?void 0:s.setForwardRef)!=null?i:dn);return()=>{var o;const a=(o=e.default)==null?void 0:o.call(e,n);if(!a||a.length>1)return null;const l=Hv(a);return l?Dt(ns(l,n),[[r]]):null}}});function Hv(t){if(!t)return null;const e=t;for(const n of e){if(ct(n))switch(n.type){case tn:continue;case Ao:case"svg":return Gp(n);case rt:return Hv(n.children);default:return n}return Gp(n)}return null}function Gp(t){const e=hn("only-child");return Ke("span",{class:e.e("content")},[t])}const Vv=Dn({virtualRef:{type:yt(Object)},virtualTriggering:Boolean,onMouseenter:{type:yt(Function)},onMouseleave:{type:yt(Function)},onClick:{type:yt(Function)},onKeydown:{type:yt(Function)},onFocus:{type:yt(Function)},onBlur:{type:yt(Function)},onContextmenu:{type:yt(Function)},id:String,open:Boolean}),Y1=Ze({name:"ElPopperTrigger",inheritAttrs:!1}),q1=Ze({...Y1,props:Vv,setup(t,{expose:e}){const n=t,{role:i,triggerRef:s}=Rt(nh,void 0);h1(s);const r=Me(()=>a.value?n.id:void 0),o=Me(()=>{if(i&&i.value==="tooltip")return n.open&&n.id?n.id:void 0}),a=Me(()=>{if(i&&i.value!=="tooltip")return i.value}),l=Me(()=>a.value?`${n.open}`:void 0);let c;return Ft(()=>{We(()=>n.virtualRef,u=>{u&&(s.value=Ts(u))},{immediate:!0}),We(s,(u,f)=>{c==null||c(),c=void 0,Sa(u)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach(d=>{var p;const g=n[d];g&&(u.addEventListener(d.slice(2).toLowerCase(),g),(p=f==null?void 0:f.removeEventListener)==null||p.call(f,d.slice(2).toLowerCase(),g))}),c=We([r,o,a,l],d=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((p,g)=>{ur(d[g])?u.removeAttribute(p):u.setAttribute(p,d[g])})},{immediate:!0})),Sa(f)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(d=>f.removeAttribute(d))},{immediate:!0})}),Pi(()=>{c==null||c(),c=void 0}),e({triggerRef:s}),(u,f)=>u.virtualTriggering?tt("v-if",!0):(ae(),Et(L(j1),qi({key:0},u.$attrs,{"aria-controls":L(r),"aria-describedby":L(o),"aria-expanded":L(l),"aria-haspopup":L(a)}),{default:It(()=>[sn(u.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var K1=on(q1,[["__file","trigger.vue"]]);const mu="focus-trap.focus-after-trapped",gu="focus-trap.focus-after-released",Z1="focus-trap.focusout-prevented",Wp={cancelable:!0,bubbles:!1},J1={cancelable:!0,bubbles:!1},$p="focusAfterTrapped",Xp="focusAfterReleased",Q1=Symbol("elFocusTrap"),ih=_e(),jc=_e(0),sh=_e(0);let nl=0;const Gv=t=>{const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const s=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||s?NodeFilter.FILTER_SKIP:i.tabIndex>=0||i===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e},jp=(t,e)=>{for(const n of t)if(!eT(n,e))return n},eT=(t,e)=>{if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(e&&t===e)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1},tT=t=>{const e=Gv(t),n=jp(e,t),i=jp(e.reverse(),t);return[n,i]},nT=t=>t instanceof HTMLInputElement&&"select"in t,xs=(t,e)=>{if(t&&t.focus){const n=document.activeElement;t.focus({preventScroll:!0}),sh.value=window.performance.now(),t!==n&&nT(t)&&e&&t.select()}};function Yp(t,e){const n=[...t],i=t.indexOf(e);return i!==-1&&n.splice(i,1),n}const iT=()=>{let t=[];return{push:i=>{const s=t[0];s&&i!==s&&s.pause(),t=Yp(t,i),t.unshift(i)},remove:i=>{var s,r;t=Yp(t,i),(r=(s=t[0])==null?void 0:s.resume)==null||r.call(s)}}},sT=(t,e=!1)=>{const n=document.activeElement;for(const i of t)if(xs(i,e),document.activeElement!==n)return},qp=iT(),rT=()=>jc.value>sh.value,il=()=>{ih.value="pointer",jc.value=window.performance.now()},Kp=()=>{ih.value="keyboard",jc.value=window.performance.now()},oT=()=>(Ft(()=>{nl===0&&(document.addEventListener("mousedown",il),document.addEventListener("touchstart",il),document.addEventListener("keydown",Kp)),nl++}),Pi(()=>{nl--,nl<=0&&(document.removeEventListener("mousedown",il),document.removeEventListener("touchstart",il),document.removeEventListener("keydown",Kp))}),{focusReason:ih,lastUserFocusTimestamp:jc,lastAutomatedFocusTimestamp:sh}),sl=t=>new CustomEvent(Z1,{...J1,detail:t}),aT=Ze({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[$p,Xp,"focusin","focusout","focusout-prevented","release-requested"],setup(t,{emit:e}){const n=_e();let i,s;const{focusReason:r}=oT();l1(g=>{t.trapped&&!o.paused&&e("release-requested",g)});const o={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},a=g=>{if(!t.loop&&!t.trapped||o.paused)return;const{key:m,altKey:_,ctrlKey:h,metaKey:b,currentTarget:x,shiftKey:v}=g,{loop:P}=t,D=m===fr.tab&&!_&&!h&&!b,A=document.activeElement;if(D&&A){const T=x,[y,M]=tT(T);if(y&&M){if(!v&&A===M){const k=sl({focusReason:r.value});e("focusout-prevented",k),k.defaultPrevented||(g.preventDefault(),P&&xs(y,!0))}else if(v&&[y,T].includes(A)){const k=sl({focusReason:r.value});e("focusout-prevented",k),k.defaultPrevented||(g.preventDefault(),P&&xs(M,!0))}}else if(A===T){const k=sl({focusReason:r.value});e("focusout-prevented",k),k.defaultPrevented||g.preventDefault()}}};ts(Q1,{focusTrapRef:n,onKeydown:a}),We(()=>t.focusTrapEl,g=>{g&&(n.value=g)},{immediate:!0}),We([n],([g],[m])=>{g&&(g.addEventListener("keydown",a),g.addEventListener("focusin",u),g.addEventListener("focusout",f)),m&&(m.removeEventListener("keydown",a),m.removeEventListener("focusin",u),m.removeEventListener("focusout",f))});const l=g=>{e($p,g)},c=g=>e(Xp,g),u=g=>{const m=L(n);if(!m)return;const _=g.target,h=g.relatedTarget,b=_&&m.contains(_);t.trapped||h&&m.contains(h)||(i=h),b&&e("focusin",g),!o.paused&&t.trapped&&(b?s=_:xs(s,!0))},f=g=>{const m=L(n);if(!(o.paused||!m))if(t.trapped){const _=g.relatedTarget;!ur(_)&&!m.contains(_)&&setTimeout(()=>{if(!o.paused&&t.trapped){const h=sl({focusReason:r.value});e("focusout-prevented",h),h.defaultPrevented||xs(s,!0)}},0)}else{const _=g.target;_&&m.contains(_)||e("focusout",g)}};async function d(){await qt();const g=L(n);if(g){qp.push(o);const m=g.contains(document.activeElement)?i:document.activeElement;if(i=m,!g.contains(m)){const h=new Event(mu,Wp);g.addEventListener(mu,l),g.dispatchEvent(h),h.defaultPrevented||qt(()=>{let b=t.focusStartEl;ht(b)||(xs(b),document.activeElement!==b&&(b="first")),b==="first"&&sT(Gv(g),!0),(document.activeElement===m||b==="container")&&xs(g)})}}}function p(){const g=L(n);if(g){g.removeEventListener(mu,l);const m=new CustomEvent(gu,{...Wp,detail:{focusReason:r.value}});g.addEventListener(gu,c),g.dispatchEvent(m),!m.defaultPrevented&&(r.value=="keyboard"||!rT()||g.contains(document.activeElement))&&xs(i??document.body),g.removeEventListener(gu,c),qp.remove(o)}}return Ft(()=>{t.trapped&&d(),We(()=>t.trapped,g=>{g?d():p()})}),Pi(()=>{t.trapped&&p()}),{onKeydown:a}}});function lT(t,e,n,i,s,r){return sn(t.$slots,"default",{handleKeydown:t.onKeydown})}var cT=on(aT,[["render",lT],["__file","focus-trap.vue"]]);const uT=["fixed","absolute"],fT=Dn({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:yt(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:Wd,default:"bottom"},popperOptions:{type:yt(Object),default:()=>({})},strategy:{type:String,values:uT,default:"absolute"}}),Wv=Dn({...fT,id:String,style:{type:yt([String,Array,Object])},className:{type:yt([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:yt([String,Array,Object])},popperStyle:{type:yt([String,Array,Object])},referenceEl:{type:yt(Object)},triggerTargetEl:{type:yt(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},ariaLabel:{type:String,default:void 0},virtualTriggering:Boolean,zIndex:Number}),dT={mouseenter:t=>t instanceof MouseEvent,mouseleave:t=>t instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},hT=(t,e=[])=>{const{placement:n,strategy:i,popperOptions:s}=t,r={placement:n,strategy:i,...s,modifiers:[...mT(t),...e]};return gT(r,s==null?void 0:s.modifiers),r},pT=t=>{if(kn)return Ts(t)};function mT(t){const{offset:e,gpuAcceleration:n,fallbackPlacements:i}=t;return[{name:"offset",options:{offset:[0,e??12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:i}},{name:"computeStyles",options:{gpuAcceleration:n}}]}function gT(t,e){e&&(t.modifiers=[...t.modifiers,...e??[]])}const _T=0,vT=t=>{const{popperInstanceRef:e,contentRef:n,triggerRef:i,role:s}=Rt(nh,void 0),r=_e(),o=_e(),a=Me(()=>({name:"eventListeners",enabled:!!t.visible})),l=Me(()=>{var h;const b=L(r),x=(h=L(o))!=null?h:_T;return{name:"arrow",enabled:!xM(b),options:{element:b,padding:x}}}),c=Me(()=>({onFirstUpdate:()=>{g()},...hT(t,[L(l),L(a)])})),u=Me(()=>pT(t.referenceEl)||L(i)),{attributes:f,state:d,styles:p,update:g,forceUpdate:m,instanceRef:_}=r1(u,n,c);return We(_,h=>e.value=h),Ft(()=>{We(()=>{var h;return(h=L(u))==null?void 0:h.getBoundingClientRect()},()=>{g()})}),{attributes:f,arrowRef:r,contentRef:n,instanceRef:_,state:d,styles:p,role:s,forceUpdate:m,update:g}},yT=(t,{attributes:e,styles:n,role:i})=>{const{nextZIndex:s}=_1(),r=hn("popper"),o=Me(()=>L(e).popper),a=_e(gr(t.zIndex)?t.zIndex:s()),l=Me(()=>[r.b(),r.is("pure",t.pure),r.is(t.effect),t.popperClass]),c=Me(()=>[{zIndex:L(a)},L(n).popper,t.popperStyle||{}]),u=Me(()=>i.value==="dialog"?"false":void 0),f=Me(()=>L(n).arrow||{});return{ariaModal:u,arrowStyle:f,contentAttrs:o,contentClass:l,contentStyle:c,contentZIndex:a,updateZIndex:()=>{a.value=gr(t.zIndex)?t.zIndex:s()}}},xT=(t,e)=>{const n=_e(!1),i=_e();return{focusStartRef:i,trapped:n,onFocusAfterReleased:c=>{var u;((u=c.detail)==null?void 0:u.focusReason)!=="pointer"&&(i.value="first",e("blur"))},onFocusAfterTrapped:()=>{e("focus")},onFocusInTrap:c=>{t.visible&&!n.value&&(c.target&&(i.value=c.target),n.value=!0)},onFocusoutPrevented:c=>{t.trapping||(c.detail.focusReason==="pointer"&&c.preventDefault(),n.value=!1)},onReleaseRequested:()=>{n.value=!1,e("close")}}},bT=Ze({name:"ElPopperContent"}),ST=Ze({...bT,props:Wv,emits:dT,setup(t,{expose:e,emit:n}){const i=t,{focusStartRef:s,trapped:r,onFocusAfterReleased:o,onFocusAfterTrapped:a,onFocusInTrap:l,onFocusoutPrevented:c,onReleaseRequested:u}=xT(i,n),{attributes:f,arrowRef:d,contentRef:p,styles:g,instanceRef:m,role:_,update:h}=vT(i),{ariaModal:b,arrowStyle:x,contentAttrs:v,contentClass:P,contentStyle:D,updateZIndex:A}=yT(i,{styles:g,attributes:f,role:_}),T=Rt(vc,void 0);ts(Bv,{arrowStyle:x,arrowRef:d,arrowOffset:_e()}),T&&(T.addInputId||T.removeInputId)&&ts(vc,{...T,addInputId:dn,removeInputId:dn});let M;const U=(H=!0)=>{h(),H&&A()},k=()=>{U(!1),i.visible&&i.focusOnShow?r.value=!0:i.visible===!1&&(r.value=!1)};return Ft(()=>{We(()=>i.triggerTargetEl,(H,J)=>{M==null||M(),M=void 0;const se=L(H||p.value),q=L(J||p.value);Sa(se)&&(M=We([_,()=>i.ariaLabel,b,()=>i.id],W=>{["role","aria-label","aria-modal","id"].forEach((j,ve)=>{ur(W[ve])?se.removeAttribute(j):se.setAttribute(j,W[ve])})},{immediate:!0})),q!==se&&Sa(q)&&["role","aria-label","aria-modal","id"].forEach(W=>{q.removeAttribute(W)})},{immediate:!0}),We(()=>i.visible,k,{immediate:!0})}),Pi(()=>{M==null||M(),M=void 0}),e({popperContentRef:p,popperInstanceRef:m,updatePopper:U,contentStyle:D}),(H,J)=>(ae(),me("div",qi({ref_key:"contentRef",ref:p},L(v),{style:L(D),class:L(P),tabindex:"-1",onMouseenter:J[0]||(J[0]=se=>H.$emit("mouseenter",se)),onMouseleave:J[1]||(J[1]=se=>H.$emit("mouseleave",se))}),[Ke(L(cT),{trapped:L(r),"trap-on-focus-in":!0,"focus-trap-el":L(p),"focus-start-el":L(s),onFocusAfterTrapped:L(a),onFocusAfterReleased:L(o),onFocusin:L(l),onFocusoutPrevented:L(c),onReleaseRequested:L(u)},{default:It(()=>[sn(H.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16))}});var MT=on(ST,[["__file","content.vue"]]);const ET=Po(V1),rh=Symbol("elTooltip"),$v=Dn({...f1,...Wv,appendTo:{type:yt([String,Object])},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:yt(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean}),Xv=Dn({...Vv,disabled:Boolean,trigger:{type:yt([String,Array]),default:"hover"},triggerKeys:{type:yt(Array),default:()=>[fr.enter,fr.space]}}),{useModelToggleProps:TT,useModelToggleEmits:wT,useModelToggle:AT}=nE("visible"),CT=Dn({...kv,...TT,...$v,...Xv,...zv,showArrow:{type:Boolean,default:!0}}),RT=[...wT,"before-show","before-hide","show","hide","open","close"],PT=(t,e)=>Ge(t)?t.includes(e):t===e,Dr=(t,e,n)=>i=>{PT(L(t),e)&&n(i)},DT=Ze({name:"ElTooltipTrigger"}),IT=Ze({...DT,props:Xv,setup(t,{expose:e}){const n=t,i=hn("tooltip"),{controlled:s,id:r,open:o,onOpen:a,onClose:l,onToggle:c}=Rt(rh,void 0),u=_e(null),f=()=>{if(L(s)||n.disabled)return!0},d=$i(n,"trigger"),p=zi(f,Dr(d,"hover",a)),g=zi(f,Dr(d,"hover",l)),m=zi(f,Dr(d,"click",v=>{v.button===0&&c(v)})),_=zi(f,Dr(d,"focus",a)),h=zi(f,Dr(d,"focus",l)),b=zi(f,Dr(d,"contextmenu",v=>{v.preventDefault(),c(v)})),x=zi(f,v=>{const{code:P}=v;n.triggerKeys.includes(P)&&(v.preventDefault(),c(v))});return e({triggerRef:u}),(v,P)=>(ae(),Et(L(K1),{id:L(r),"virtual-ref":v.virtualRef,open:L(o),"virtual-triggering":v.virtualTriggering,class:De(L(i).e("trigger")),onBlur:L(h),onClick:L(m),onContextmenu:L(b),onFocus:L(_),onMouseenter:L(p),onMouseleave:L(g),onKeydown:L(x)},{default:It(()=>[sn(v.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var LT=on(IT,[["__file","trigger.vue"]]);const UT=Ze({name:"ElTooltipContent",inheritAttrs:!1}),NT=Ze({...UT,props:$v,setup(t,{expose:e}){const n=t,{selector:i}=Uv(),s=hn("tooltip"),r=_e(null),o=_e(!1),{controlled:a,id:l,open:c,trigger:u,onClose:f,onOpen:d,onShow:p,onHide:g,onBeforeShow:m,onBeforeHide:_}=Rt(rh,void 0),h=Me(()=>n.transition||`${s.namespace.value}-fade-in-linear`),b=Me(()=>n.persistent);Pi(()=>{o.value=!0});const x=Me(()=>L(b)?!0:L(c)),v=Me(()=>n.disabled?!1:L(c)),P=Me(()=>n.appendTo||i.value),D=Me(()=>{var W;return(W=n.style)!=null?W:{}}),A=Me(()=>!L(c)),T=()=>{g()},y=()=>{if(L(a))return!0},M=zi(y,()=>{n.enterable&&L(u)==="hover"&&d()}),U=zi(y,()=>{L(u)==="hover"&&f()}),k=()=>{var W,j;(j=(W=r.value)==null?void 0:W.updatePopper)==null||j.call(W),m==null||m()},H=()=>{_==null||_()},J=()=>{p(),q=Ib(Me(()=>{var W;return(W=r.value)==null?void 0:W.popperContentRef}),()=>{if(L(a))return;L(u)!=="hover"&&f()})},se=()=>{n.virtualTriggering||f()};let q;return We(()=>L(c),W=>{W||q==null||q()},{flush:"post"}),We(()=>n.content,()=>{var W,j;(j=(W=r.value)==null?void 0:W.updatePopper)==null||j.call(W)}),e({contentRef:r}),(W,j)=>(ae(),Et(m_,{disabled:!W.teleported,to:L(P)},[Ke(Bx,{name:L(h),onAfterLeave:T,onBeforeEnter:k,onAfterEnter:J,onBeforeLeave:H},{default:It(()=>[L(x)?Dt((ae(),Et(L(MT),qi({key:0,id:L(l),ref_key:"contentRef",ref:r},W.$attrs,{"aria-label":W.ariaLabel,"aria-hidden":L(A),"boundaries-padding":W.boundariesPadding,"fallback-placements":W.fallbackPlacements,"gpu-acceleration":W.gpuAcceleration,offset:W.offset,placement:W.placement,"popper-options":W.popperOptions,strategy:W.strategy,effect:W.effect,enterable:W.enterable,pure:W.pure,"popper-class":W.popperClass,"popper-style":[W.popperStyle,L(D)],"reference-el":W.referenceEl,"trigger-target-el":W.triggerTargetEl,visible:L(v),"z-index":W.zIndex,onMouseenter:L(M),onMouseleave:L(U),onBlur:se,onClose:L(f)}),{default:It(()=>[o.value?tt("v-if",!0):sn(W.$slots,"default",{key:0})]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[jn,L(v)]]):tt("v-if",!0)]),_:3},8,["name"])],8,["disabled","to"]))}});var OT=on(NT,[["__file","content.vue"]]);const FT=["innerHTML"],BT={key:1},kT=Ze({name:"ElTooltip"}),zT=Ze({...kT,props:CT,emits:RT,setup(t,{expose:e,emit:n}){const i=t;u1();const s=Lv(),r=_e(),o=_e(),a=()=>{var h;const b=L(r);b&&((h=b.popperInstanceRef)==null||h.update())},l=_e(!1),c=_e(),{show:u,hide:f,hasUpdateHandler:d}=AT({indicator:l,toggleReason:c}),{onOpen:p,onClose:g}=d1({showAfter:$i(i,"showAfter"),hideAfter:$i(i,"hideAfter"),autoClose:$i(i,"autoClose"),open:u,close:f}),m=Me(()=>mv(i.visible)&&!d.value);ts(rh,{controlled:m,id:s,open:nc(l),trigger:$i(i,"trigger"),onOpen:h=>{p(h)},onClose:h=>{g(h)},onToggle:h=>{L(l)?g(h):p(h)},onShow:()=>{n("show",c.value)},onHide:()=>{n("hide",c.value)},onBeforeShow:()=>{n("before-show",c.value)},onBeforeHide:()=>{n("before-hide",c.value)},updatePopper:a}),We(()=>i.disabled,h=>{h&&l.value&&(l.value=!1)});const _=h=>{var b,x;const v=(x=(b=o.value)==null?void 0:b.contentRef)==null?void 0:x.popperContentRef,P=(h==null?void 0:h.relatedTarget)||document.activeElement;return v&&v.contains(P)};return S_(()=>l.value&&f()),e({popperRef:r,contentRef:o,isFocusInsideContent:_,updatePopper:a,onOpen:p,onClose:g,hide:f}),(h,b)=>(ae(),Et(L(ET),{ref_key:"popperRef",ref:r,role:h.role},{default:It(()=>[Ke(LT,{disabled:h.disabled,trigger:h.trigger,"trigger-keys":h.triggerKeys,"virtual-ref":h.virtualRef,"virtual-triggering":h.virtualTriggering},{default:It(()=>[h.$slots.default?sn(h.$slots,"default",{key:0}):tt("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),Ke(OT,{ref_key:"contentRef",ref:o,"aria-label":h.ariaLabel,"boundaries-padding":h.boundariesPadding,content:h.content,disabled:h.disabled,effect:h.effect,enterable:h.enterable,"fallback-placements":h.fallbackPlacements,"hide-after":h.hideAfter,"gpu-acceleration":h.gpuAcceleration,offset:h.offset,persistent:h.persistent,"popper-class":h.popperClass,"popper-style":h.popperStyle,placement:h.placement,"popper-options":h.popperOptions,pure:h.pure,"raw-content":h.rawContent,"reference-el":h.referenceEl,"trigger-target-el":h.triggerTargetEl,"show-after":h.showAfter,strategy:h.strategy,teleported:h.teleported,transition:h.transition,"virtual-triggering":h.virtualTriggering,"z-index":h.zIndex,"append-to":h.appendTo},{default:It(()=>[sn(h.$slots,"content",{},()=>[h.rawContent?(ae(),me("span",{key:0,innerHTML:h.content},null,8,FT)):(ae(),me("span",BT,Xe(h.content),1))]),h.showArrow?(ae(),Et(L($1),{key:0,"arrow-offset":h.arrowOffset},null,8,["arrow-offset"])):tt("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}});var HT=on(zT,[["__file","tooltip.vue"]]);const VT=Po(HT),jv=Symbol("buttonGroupContextKey"),GT=(t,e)=>{$M({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},Me(()=>t.type==="text"));const n=Rt(jv,void 0),i=S1("button"),{form:s}=th(),r=eh(Me(()=>n==null?void 0:n.size)),o=Xc(),a=_e(),l=C_(),c=Me(()=>t.type||(n==null?void 0:n.type)||""),u=Me(()=>{var g,m,_;return(_=(m=t.autoInsertSpace)!=null?m:(g=i.value)==null?void 0:g.autoInsertSpace)!=null?_:!1}),f=Me(()=>t.tag==="button"?{ariaDisabled:o.value||t.loading,disabled:o.value||t.loading,autofocus:t.autofocus,type:t.nativeType}:{}),d=Me(()=>{var g;const m=(g=l.default)==null?void 0:g.call(l);if(u.value&&(m==null?void 0:m.length)===1){const _=m[0];if((_==null?void 0:_.type)===Ao){const h=_.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(h.trim())}}return!1});return{_disabled:o,_size:r,_type:c,_ref:a,_props:f,shouldAddSpace:d,handleClick:g=>{t.nativeType==="reset"&&(s==null||s.resetFields()),e("click",g)}}},WT=["default","primary","success","warning","info","danger","text",""],$T=["button","submit","reset"],Af=Dn({size:Jd,disabled:Boolean,type:{type:String,values:WT,default:""},icon:{type:gc},nativeType:{type:String,values:$T,default:"button"},loading:Boolean,loadingIcon:{type:gc,default:()=>_v},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:yt([String,Object]),default:"button"}}),XT={click:t=>t instanceof MouseEvent};function rn(t,e){jT(t)&&(t="100%");var n=YT(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function rl(t){return Math.min(1,Math.max(0,t))}function jT(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function YT(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Yv(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function ol(t){return t<=1?"".concat(Number(t)*100,"%"):t}function sr(t){return t.length===1?"0"+t:String(t)}function qT(t,e,n){return{r:rn(t,255)*255,g:rn(e,255)*255,b:rn(n,255)*255}}function Zp(t,e,n){t=rn(t,255),e=rn(e,255),n=rn(n,255);var i=Math.max(t,e,n),s=Math.min(t,e,n),r=0,o=0,a=(i+s)/2;if(i===s)o=0,r=0;else{var l=i-s;switch(o=a>.5?l/(2-i-s):l/(i+s),i){case t:r=(e-n)/l+(e<n?6:0);break;case e:r=(n-t)/l+2;break;case n:r=(t-e)/l+4;break}r/=6}return{h:r,s:o,l:a}}function _u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*(6*n):n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function KT(t,e,n){var i,s,r;if(t=rn(t,360),e=rn(e,100),n=rn(n,100),e===0)s=n,r=n,i=n;else{var o=n<.5?n*(1+e):n+e-n*e,a=2*n-o;i=_u(a,o,t+1/3),s=_u(a,o,t),r=_u(a,o,t-1/3)}return{r:i*255,g:s*255,b:r*255}}function Jp(t,e,n){t=rn(t,255),e=rn(e,255),n=rn(n,255);var i=Math.max(t,e,n),s=Math.min(t,e,n),r=0,o=i,a=i-s,l=i===0?0:a/i;if(i===s)r=0;else{switch(i){case t:r=(e-n)/a+(e<n?6:0);break;case e:r=(n-t)/a+2;break;case n:r=(t-e)/a+4;break}r/=6}return{h:r,s:l,v:o}}function ZT(t,e,n){t=rn(t,360)*6,e=rn(e,100),n=rn(n,100);var i=Math.floor(t),s=t-i,r=n*(1-e),o=n*(1-s*e),a=n*(1-(1-s)*e),l=i%6,c=[n,o,r,r,a,n][l],u=[a,n,n,o,r,r][l],f=[r,r,a,n,n,o][l];return{r:c*255,g:u*255,b:f*255}}function Qp(t,e,n,i){var s=[sr(Math.round(t).toString(16)),sr(Math.round(e).toString(16)),sr(Math.round(n).toString(16))];return i&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function JT(t,e,n,i,s){var r=[sr(Math.round(t).toString(16)),sr(Math.round(e).toString(16)),sr(Math.round(n).toString(16)),sr(QT(i))];return s&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))&&r[3].startsWith(r[3].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}function QT(t){return Math.round(parseFloat(t)*255).toString(16)}function em(t){return Nn(t)/255}function Nn(t){return parseInt(t,16)}function ew(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var Cf={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function tw(t){var e={r:0,g:0,b:0},n=1,i=null,s=null,r=null,o=!1,a=!1;return typeof t=="string"&&(t=sw(t)),typeof t=="object"&&(Ii(t.r)&&Ii(t.g)&&Ii(t.b)?(e=qT(t.r,t.g,t.b),o=!0,a=String(t.r).substr(-1)==="%"?"prgb":"rgb"):Ii(t.h)&&Ii(t.s)&&Ii(t.v)?(i=ol(t.s),s=ol(t.v),e=ZT(t.h,i,s),o=!0,a="hsv"):Ii(t.h)&&Ii(t.s)&&Ii(t.l)&&(i=ol(t.s),r=ol(t.l),e=KT(t.h,i,r),o=!0,a="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(n=t.a)),n=Yv(n),{ok:o,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:n}}var nw="[-\\+]?\\d+%?",iw="[-\\+]?\\d*\\.\\d+%?",ws="(?:".concat(iw,")|(?:").concat(nw,")"),vu="[\\s|\\(]+(".concat(ws,")[,|\\s]+(").concat(ws,")[,|\\s]+(").concat(ws,")\\s*\\)?"),yu="[\\s|\\(]+(".concat(ws,")[,|\\s]+(").concat(ws,")[,|\\s]+(").concat(ws,")[,|\\s]+(").concat(ws,")\\s*\\)?"),ai={CSS_UNIT:new RegExp(ws),rgb:new RegExp("rgb"+vu),rgba:new RegExp("rgba"+yu),hsl:new RegExp("hsl"+vu),hsla:new RegExp("hsla"+yu),hsv:new RegExp("hsv"+vu),hsva:new RegExp("hsva"+yu),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function sw(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;var e=!1;if(Cf[t])t=Cf[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=ai.rgb.exec(t);return n?{r:n[1],g:n[2],b:n[3]}:(n=ai.rgba.exec(t),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=ai.hsl.exec(t),n?{h:n[1],s:n[2],l:n[3]}:(n=ai.hsla.exec(t),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=ai.hsv.exec(t),n?{h:n[1],s:n[2],v:n[3]}:(n=ai.hsva.exec(t),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=ai.hex8.exec(t),n?{r:Nn(n[1]),g:Nn(n[2]),b:Nn(n[3]),a:em(n[4]),format:e?"name":"hex8"}:(n=ai.hex6.exec(t),n?{r:Nn(n[1]),g:Nn(n[2]),b:Nn(n[3]),format:e?"name":"hex"}:(n=ai.hex4.exec(t),n?{r:Nn(n[1]+n[1]),g:Nn(n[2]+n[2]),b:Nn(n[3]+n[3]),a:em(n[4]+n[4]),format:e?"name":"hex8"}:(n=ai.hex3.exec(t),n?{r:Nn(n[1]+n[1]),g:Nn(n[2]+n[2]),b:Nn(n[3]+n[3]),format:e?"name":"hex"}:!1)))))))))}function Ii(t){return!!ai.CSS_UNIT.exec(String(t))}var rw=(function(){function t(e,n){e===void 0&&(e=""),n===void 0&&(n={});var i;if(e instanceof t)return e;typeof e=="number"&&(e=ew(e)),this.originalInput=e;var s=tw(e);this.originalInput=e,this.r=s.r,this.g=s.g,this.b=s.b,this.a=s.a,this.roundA=Math.round(100*this.a)/100,this.format=(i=n.format)!==null&&i!==void 0?i:s.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=s.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},t.prototype.getLuminance=function(){var e=this.toRgb(),n,i,s,r=e.r/255,o=e.g/255,a=e.b/255;return r<=.03928?n=r/12.92:n=Math.pow((r+.055)/1.055,2.4),o<=.03928?i=o/12.92:i=Math.pow((o+.055)/1.055,2.4),a<=.03928?s=a/12.92:s=Math.pow((a+.055)/1.055,2.4),.2126*n+.7152*i+.0722*s},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(e){return this.a=Yv(e),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){var e=this.toHsl().s;return e===0},t.prototype.toHsv=function(){var e=Jp(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},t.prototype.toHsvString=function(){var e=Jp(this.r,this.g,this.b),n=Math.round(e.h*360),i=Math.round(e.s*100),s=Math.round(e.v*100);return this.a===1?"hsv(".concat(n,", ").concat(i,"%, ").concat(s,"%)"):"hsva(".concat(n,", ").concat(i,"%, ").concat(s,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var e=Zp(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},t.prototype.toHslString=function(){var e=Zp(this.r,this.g,this.b),n=Math.round(e.h*360),i=Math.round(e.s*100),s=Math.round(e.l*100);return this.a===1?"hsl(".concat(n,", ").concat(i,"%, ").concat(s,"%)"):"hsla(".concat(n,", ").concat(i,"%, ").concat(s,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(e){return e===void 0&&(e=!1),Qp(this.r,this.g,this.b,e)},t.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},t.prototype.toHex8=function(e){return e===void 0&&(e=!1),JT(this.r,this.g,this.b,this.a,e)},t.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},t.prototype.toHexShortString=function(e){return e===void 0&&(e=!1),this.a===1?this.toHexString(e):this.toHex8String(e)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var e=Math.round(this.r),n=Math.round(this.g),i=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(n,", ").concat(i,")"):"rgba(".concat(e,", ").concat(n,", ").concat(i,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var e=function(n){return"".concat(Math.round(rn(n,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var e=function(n){return Math.round(rn(n,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+Qp(this.r,this.g,this.b,!1),n=0,i=Object.entries(Cf);n<i.length;n++){var s=i[n],r=s[0],o=s[1];if(e===o)return r}return!1},t.prototype.toString=function(e){var n=!!e;e=e??this.format;var i=!1,s=this.a<1&&this.a>=0,r=!n&&s&&(e.startsWith("hex")||e==="name");return r?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.l+=e/100,n.l=rl(n.l),new t(n)},t.prototype.brighten=function(e){e===void 0&&(e=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(e/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(e/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(e/100)))),new t(n)},t.prototype.darken=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.l-=e/100,n.l=rl(n.l),new t(n)},t.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},t.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},t.prototype.desaturate=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.s-=e/100,n.s=rl(n.s),new t(n)},t.prototype.saturate=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.s+=e/100,n.s=rl(n.s),new t(n)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var n=this.toHsl(),i=(n.h+e)%360;return n.h=i<0?360+i:i,new t(n)},t.prototype.mix=function(e,n){n===void 0&&(n=50);var i=this.toRgb(),s=new t(e).toRgb(),r=n/100,o={r:(s.r-i.r)*r+i.r,g:(s.g-i.g)*r+i.g,b:(s.b-i.b)*r+i.b,a:(s.a-i.a)*r+i.a};return new t(o)},t.prototype.analogous=function(e,n){e===void 0&&(e=6),n===void 0&&(n=30);var i=this.toHsl(),s=360/n,r=[this];for(i.h=(i.h-(s*e>>1)+720)%360;--e;)i.h=(i.h+s)%360,r.push(new t(i));return r},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var n=this.toHsv(),i=n.h,s=n.s,r=n.v,o=[],a=1/e;e--;)o.push(new t({h:i,s,v:r})),r=(r+a)%1;return o},t.prototype.splitcomplement=function(){var e=this.toHsl(),n=e.h;return[this,new t({h:(n+72)%360,s:e.s,l:e.l}),new t({h:(n+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var n=this.toRgb(),i=new t(e).toRgb(),s=n.a+i.a*(1-n.a);return new t({r:(n.r*n.a+i.r*i.a*(1-n.a))/s,g:(n.g*n.a+i.g*i.a*(1-n.a))/s,b:(n.b*n.a+i.b*i.a*(1-n.a))/s,a:s})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var n=this.toHsl(),i=n.h,s=[this],r=360/e,o=1;o<e;o++)s.push(new t({h:(i+o*r)%360,s:n.s,l:n.l}));return s},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t})();function us(t,e=20){return t.mix("#141414",e).toString()}function ow(t){const e=Xc(),n=hn("button");return Me(()=>{let i={};const s=t.color;if(s){const r=new rw(s),o=t.dark?r.tint(20).toString():us(r,20);if(t.plain)i=n.cssVarBlock({"bg-color":t.dark?us(r,90):r.tint(90).toString(),"text-color":s,"border-color":t.dark?us(r,50):r.tint(50).toString(),"hover-text-color":`var(${n.cssVarName("color-white")})`,"hover-bg-color":s,"hover-border-color":s,"active-bg-color":o,"active-text-color":`var(${n.cssVarName("color-white")})`,"active-border-color":o}),e.value&&(i[n.cssVarBlockName("disabled-bg-color")]=t.dark?us(r,90):r.tint(90).toString(),i[n.cssVarBlockName("disabled-text-color")]=t.dark?us(r,50):r.tint(50).toString(),i[n.cssVarBlockName("disabled-border-color")]=t.dark?us(r,80):r.tint(80).toString());else{const a=t.dark?us(r,30):r.tint(30).toString(),l=r.isDark()?`var(${n.cssVarName("color-white")})`:`var(${n.cssVarName("color-black")})`;if(i=n.cssVarBlock({"bg-color":s,"text-color":l,"border-color":s,"hover-bg-color":a,"hover-text-color":l,"hover-border-color":a,"active-bg-color":o,"active-border-color":o}),e.value){const c=t.dark?us(r,50):r.tint(50).toString();i[n.cssVarBlockName("disabled-bg-color")]=c,i[n.cssVarBlockName("disabled-text-color")]=t.dark?"rgba(255, 255, 255, 0.5)":`var(${n.cssVarName("color-white")})`,i[n.cssVarBlockName("disabled-border-color")]=c}}}return i})}const aw=Ze({name:"ElButton"}),lw=Ze({...aw,props:Af,emits:XT,setup(t,{expose:e,emit:n}){const i=t,s=ow(i),r=hn("button"),{_ref:o,_size:a,_type:l,_disabled:c,_props:u,shouldAddSpace:f,handleClick:d}=GT(i,n);return e({ref:o,size:a,type:l,disabled:c,shouldAddSpace:f}),(p,g)=>(ae(),Et(nr(p.tag),qi({ref_key:"_ref",ref:o},L(u),{class:[L(r).b(),L(r).m(L(l)),L(r).m(L(a)),L(r).is("disabled",L(c)),L(r).is("loading",p.loading),L(r).is("plain",p.plain),L(r).is("round",p.round),L(r).is("circle",p.circle),L(r).is("text",p.text),L(r).is("link",p.link),L(r).is("has-bg",p.bg)],style:L(s),onClick:L(d)}),{default:It(()=>[p.loading?(ae(),me(rt,{key:0},[p.$slots.loading?sn(p.$slots,"loading",{key:0}):(ae(),Et(L(Wi),{key:1,class:De(L(r).is("loading"))},{default:It(()=>[(ae(),Et(nr(p.loadingIcon)))]),_:1},8,["class"]))],64)):p.icon||p.$slots.icon?(ae(),Et(L(Wi),{key:1},{default:It(()=>[p.icon?(ae(),Et(nr(p.icon),{key:0})):sn(p.$slots,"icon",{key:1})]),_:3})):tt("v-if",!0),p.$slots.default?(ae(),me("span",{key:2,class:De({[L(r).em("text","expand")]:L(f)})},[sn(p.$slots,"default")],2)):tt("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var cw=on(lw,[["__file","button.vue"]]);const uw={size:Af.size,type:Af.type},fw=Ze({name:"ElButtonGroup"}),dw=Ze({...fw,props:uw,setup(t){const e=t;ts(jv,Sr({size:$i(e,"size"),type:$i(e,"type")}));const n=hn("button");return(i,s)=>(ae(),me("div",{class:De(`${L(n).b("group")}`)},[sn(i.$slots,"default")],2))}});var qv=on(dw,[["__file","button-group.vue"]]);const tm=Po(cw,{ButtonGroup:qv});FM(qv);const bs=new Map;let nm;kn&&(document.addEventListener("mousedown",t=>nm=t),document.addEventListener("mouseup",t=>{for(const e of bs.values())for(const{documentHandler:n}of e)n(t,nm)}));function im(t,e){let n=[];return Array.isArray(e.arg)?n=e.arg:Sa(e.arg)&&n.push(e.arg),function(i,s){const r=e.instance.popperRef,o=i.target,a=s==null?void 0:s.target,l=!e||!e.instance,c=!o||!a,u=t.contains(o)||t.contains(a),f=t===o,d=n.length&&n.some(g=>g==null?void 0:g.contains(o))||n.length&&n.includes(a),p=r&&(r.contains(o)||r.contains(a));l||c||u||f||d||p||e.value(i,s)}}const hw={beforeMount(t,e){bs.has(t)||bs.set(t,[]),bs.get(t).push({documentHandler:im(t,e),bindingFn:e.value})},updated(t,e){bs.has(t)||bs.set(t,[]);const n=bs.get(t),i=n.findIndex(r=>r.bindingFn===e.oldValue),s={documentHandler:im(t,e),bindingFn:e.value};i>=0?n.splice(i,1,s):n.push(s)},unmounted(t){bs.delete(t)}},pw=Dn({color:{type:yt(Object),required:!0},vertical:{type:Boolean,default:!1}});let xu=!1;function Ta(t,e){if(!kn)return;const n=function(r){var o;(o=e.drag)==null||o.call(e,r)},i=function(r){var o;document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",i),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",i),document.onselectstart=null,document.ondragstart=null,xu=!1,(o=e.end)==null||o.call(e,r)},s=function(r){var o;xu||(r.preventDefault(),document.onselectstart=()=>!1,document.ondragstart=()=>!1,document.addEventListener("mousemove",n),document.addEventListener("mouseup",i),document.addEventListener("touchmove",n),document.addEventListener("touchend",i),xu=!0,(o=e.start)==null||o.call(e,r))};t.addEventListener("mousedown",s),t.addEventListener("touchstart",s)}const mw=t=>{const e=Kt(),n=lr(),i=lr();function s(o){o.target!==n.value&&r(o)}function r(o){if(!i.value||!n.value)return;const l=e.vnode.el.getBoundingClientRect(),{clientX:c,clientY:u}=Bd(o);if(t.vertical){let f=u-l.top;f=Math.max(n.value.offsetHeight/2,f),f=Math.min(f,l.height-n.value.offsetHeight/2),t.color.set("alpha",Math.round((f-n.value.offsetHeight/2)/(l.height-n.value.offsetHeight)*100))}else{let f=c-l.left;f=Math.max(n.value.offsetWidth/2,f),f=Math.min(f,l.width-n.value.offsetWidth/2),t.color.set("alpha",Math.round((f-n.value.offsetWidth/2)/(l.width-n.value.offsetWidth)*100))}}return{thumb:n,bar:i,handleDrag:r,handleClick:s}},gw=(t,{bar:e,thumb:n,handleDrag:i})=>{const s=Kt(),r=hn("color-alpha-slider"),o=_e(0),a=_e(0),l=_e();function c(){if(!n.value||t.vertical)return 0;const b=s.vnode.el,x=t.color.get("alpha");return b?Math.round(x*(b.offsetWidth-n.value.offsetWidth/2)/100):0}function u(){if(!n.value)return 0;const b=s.vnode.el;if(!t.vertical)return 0;const x=t.color.get("alpha");return b?Math.round(x*(b.offsetHeight-n.value.offsetHeight/2)/100):0}function f(){if(t.color&&t.color.value){const{r:b,g:x,b:v}=t.color.toRgb();return`linear-gradient(to right, rgba(${b}, ${x}, ${v}, 0) 0%, rgba(${b}, ${x}, ${v}, 1) 100%)`}return""}function d(){o.value=c(),a.value=u(),l.value=f()}Ft(()=>{if(!e.value||!n.value)return;const b={drag:x=>{i(x)},end:x=>{i(x)}};Ta(e.value,b),Ta(n.value,b),d()}),We(()=>t.color.get("alpha"),()=>d()),We(()=>t.color.value,()=>d());const p=Me(()=>[r.b(),r.is("vertical",t.vertical)]),g=Me(()=>r.e("bar")),m=Me(()=>r.e("thumb")),_=Me(()=>({background:l.value})),h=Me(()=>({left:Ef(o.value),top:Ef(a.value)}));return{rootKls:p,barKls:g,barStyle:_,thumbKls:m,thumbStyle:h,update:d}},_w="ElColorAlphaSlider",vw=Ze({name:_w}),yw=Ze({...vw,props:pw,setup(t,{expose:e}){const n=t,{bar:i,thumb:s,handleDrag:r,handleClick:o}=mw(n),{rootKls:a,barKls:l,barStyle:c,thumbKls:u,thumbStyle:f,update:d}=gw(n,{bar:i,thumb:s,handleDrag:r});return e({update:d,bar:i,thumb:s}),(p,g)=>(ae(),me("div",{class:De(L(a))},[N("div",{ref_key:"bar",ref:i,class:De(L(l)),style:Hn(L(c)),onClick:g[0]||(g[0]=(...m)=>L(o)&&L(o)(...m))},null,6),N("div",{ref_key:"thumb",ref:s,class:De(L(u)),style:Hn(L(f))},null,6)],2))}});var xw=on(yw,[["__file","alpha-slider.vue"]]);const bw=Ze({name:"ElColorHueSlider",props:{color:{type:Object,required:!0},vertical:Boolean},setup(t){const e=hn("color-hue-slider"),n=Kt(),i=_e(),s=_e(),r=_e(0),o=_e(0),a=Me(()=>t.color.get("hue"));We(()=>a.value,()=>{d()});function l(p){p.target!==i.value&&c(p)}function c(p){if(!s.value||!i.value)return;const m=n.vnode.el.getBoundingClientRect(),{clientX:_,clientY:h}=Bd(p);let b;if(t.vertical){let x=h-m.top;x=Math.min(x,m.height-i.value.offsetHeight/2),x=Math.max(i.value.offsetHeight/2,x),b=Math.round((x-i.value.offsetHeight/2)/(m.height-i.value.offsetHeight)*360)}else{let x=_-m.left;x=Math.min(x,m.width-i.value.offsetWidth/2),x=Math.max(i.value.offsetWidth/2,x),b=Math.round((x-i.value.offsetWidth/2)/(m.width-i.value.offsetWidth)*360)}t.color.set("hue",b)}function u(){if(!i.value)return 0;const p=n.vnode.el;if(t.vertical)return 0;const g=t.color.get("hue");return p?Math.round(g*(p.offsetWidth-i.value.offsetWidth/2)/360):0}function f(){if(!i.value)return 0;const p=n.vnode.el;if(!t.vertical)return 0;const g=t.color.get("hue");return p?Math.round(g*(p.offsetHeight-i.value.offsetHeight/2)/360):0}function d(){r.value=u(),o.value=f()}return Ft(()=>{if(!s.value||!i.value)return;const p={drag:g=>{c(g)},end:g=>{c(g)}};Ta(s.value,p),Ta(i.value,p),d()}),{bar:s,thumb:i,thumbLeft:r,thumbTop:o,hueValue:a,handleClick:l,update:d,ns:e}}});function Sw(t,e,n,i,s,r){return ae(),me("div",{class:De([t.ns.b(),t.ns.is("vertical",t.vertical)])},[N("div",{ref:"bar",class:De(t.ns.e("bar")),onClick:e[0]||(e[0]=(...o)=>t.handleClick&&t.handleClick(...o))},null,2),N("div",{ref:"thumb",class:De(t.ns.e("thumb")),style:Hn({left:t.thumbLeft+"px",top:t.thumbTop+"px"})},null,6)],2)}var Mw=on(bw,[["render",Sw],["__file","hue-slider.vue"]]);const Ew=Dn({modelValue:String,id:String,showAlpha:Boolean,colorFormat:String,disabled:Boolean,size:Jd,popperClass:{type:String,default:""},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},predefine:{type:yt(Array)},validateEvent:{type:Boolean,default:!0}}),Tw={[_o]:t=>ht(t)||ur(t),[BM]:t=>ht(t)||ur(t),activeChange:t=>ht(t)||ur(t),focus:t=>t instanceof FocusEvent,blur:t=>t instanceof FocusEvent},Kv=Symbol("colorPickerContextKey"),sm=function(t,e,n){return[t,e*n/((t=(2-e)*n)<1?t:2-t)||0,t/2]},ww=function(t){return typeof t=="string"&&t.includes(".")&&Number.parseFloat(t)===1},Aw=function(t){return typeof t=="string"&&t.includes("%")},lo=function(t,e){ww(t)&&(t="100%");const n=Aw(t);return t=Math.min(e,Math.max(0,Number.parseFloat(`${t}`))),n&&(t=Number.parseInt(`${t*e}`,10)/100),Math.abs(t-e)<1e-6?1:t%e/Number.parseFloat(e)},rm={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},jl=t=>{t=Math.min(Math.round(t),255);const e=Math.floor(t/16),n=t%16;return`${rm[e]||e}${rm[n]||n}`},om=function({r:t,g:e,b:n}){return Number.isNaN(+t)||Number.isNaN(+e)||Number.isNaN(+n)?"":`#${jl(t)}${jl(e)}${jl(n)}`},bu={A:10,B:11,C:12,D:13,E:14,F:15},Hs=function(t){return t.length===2?(bu[t[0].toUpperCase()]||+t[0])*16+(bu[t[1].toUpperCase()]||+t[1]):bu[t[1].toUpperCase()]||+t[1]},Cw=function(t,e,n){e=e/100,n=n/100;let i=e;const s=Math.max(n,.01);n*=2,e*=n<=1?n:2-n,i*=s<=1?s:2-s;const r=(n+e)/2,o=n===0?2*i/(s+i):2*e/(n+e);return{h:t,s:o*100,v:r*100}},am=(t,e,n)=>{t=lo(t,255),e=lo(e,255),n=lo(n,255);const i=Math.max(t,e,n),s=Math.min(t,e,n);let r;const o=i,a=i-s,l=i===0?0:a/i;if(i===s)r=0;else{switch(i){case t:{r=(e-n)/a+(e<n?6:0);break}case e:{r=(n-t)/a+2;break}case n:{r=(t-e)/a+4;break}}r/=6}return{h:r*360,s:l*100,v:o*100}},Ho=function(t,e,n){t=lo(t,360)*6,e=lo(e,100),n=lo(n,100);const i=Math.floor(t),s=t-i,r=n*(1-e),o=n*(1-s*e),a=n*(1-(1-s)*e),l=i%6,c=[n,o,r,r,a,n][l],u=[a,n,n,o,r,r][l],f=[r,r,a,n,n,o][l];return{r:Math.round(c*255),g:Math.round(u*255),b:Math.round(f*255)}};let ua=class{constructor(e={}){this._hue=0,this._saturation=100,this._value=100,this._alpha=100,this.enableAlpha=!1,this.format="hex",this.value="";for(const n in e)dt(e,n)&&(this[n]=e[n]);e.value?this.fromString(e.value):this.doOnChange()}set(e,n){if(arguments.length===1&&typeof e=="object"){for(const i in e)dt(e,i)&&this.set(i,e[i]);return}this[`_${e}`]=n,this.doOnChange()}get(e){return e==="alpha"?Math.floor(this[`_${e}`]):this[`_${e}`]}toRgb(){return Ho(this._hue,this._saturation,this._value)}fromString(e){if(!e){this._hue=0,this._saturation=100,this._value=100,this.doOnChange();return}const n=(i,s,r)=>{this._hue=Math.max(0,Math.min(360,i)),this._saturation=Math.max(0,Math.min(100,s)),this._value=Math.max(0,Math.min(100,r)),this.doOnChange()};if(e.includes("hsl")){const i=e.replace(/hsla|hsl|\(|\)/gm,"").split(/\s|,/g).filter(s=>s!=="").map((s,r)=>r>2?Number.parseFloat(s):Number.parseInt(s,10));if(i.length===4?this._alpha=Number.parseFloat(i[3])*100:i.length===3&&(this._alpha=100),i.length>=3){const{h:s,s:r,v:o}=Cw(i[0],i[1],i[2]);n(s,r,o)}}else if(e.includes("hsv")){const i=e.replace(/hsva|hsv|\(|\)/gm,"").split(/\s|,/g).filter(s=>s!=="").map((s,r)=>r>2?Number.parseFloat(s):Number.parseInt(s,10));i.length===4?this._alpha=Number.parseFloat(i[3])*100:i.length===3&&(this._alpha=100),i.length>=3&&n(i[0],i[1],i[2])}else if(e.includes("rgb")){const i=e.replace(/rgba|rgb|\(|\)/gm,"").split(/\s|,/g).filter(s=>s!=="").map((s,r)=>r>2?Number.parseFloat(s):Number.parseInt(s,10));if(i.length===4?this._alpha=Number.parseFloat(i[3])*100:i.length===3&&(this._alpha=100),i.length>=3){const{h:s,s:r,v:o}=am(i[0],i[1],i[2]);n(s,r,o)}}else if(e.includes("#")){const i=e.replace("#","").trim();if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(i))return;let s,r,o;i.length===3?(s=Hs(i[0]+i[0]),r=Hs(i[1]+i[1]),o=Hs(i[2]+i[2])):(i.length===6||i.length===8)&&(s=Hs(i.slice(0,2)),r=Hs(i.slice(2,4)),o=Hs(i.slice(4,6))),i.length===8?this._alpha=Hs(i.slice(6))/255*100:(i.length===3||i.length===6)&&(this._alpha=100);const{h:a,s:l,v:c}=am(s,r,o);n(a,l,c)}}compare(e){return Math.abs(e._hue-this._hue)<2&&Math.abs(e._saturation-this._saturation)<1&&Math.abs(e._value-this._value)<1&&Math.abs(e._alpha-this._alpha)<1}doOnChange(){const{_hue:e,_saturation:n,_value:i,_alpha:s,format:r}=this;if(this.enableAlpha)switch(r){case"hsl":{const o=sm(e,n/100,i/100);this.value=`hsla(${e}, ${Math.round(o[1]*100)}%, ${Math.round(o[2]*100)}%, ${this.get("alpha")/100})`;break}case"hsv":{this.value=`hsva(${e}, ${Math.round(n)}%, ${Math.round(i)}%, ${this.get("alpha")/100})`;break}case"hex":{this.value=`${om(Ho(e,n,i))}${jl(s*255/100)}`;break}default:{const{r:o,g:a,b:l}=Ho(e,n,i);this.value=`rgba(${o}, ${a}, ${l}, ${this.get("alpha")/100})`}}else switch(r){case"hsl":{const o=sm(e,n/100,i/100);this.value=`hsl(${e}, ${Math.round(o[1]*100)}%, ${Math.round(o[2]*100)}%)`;break}case"hsv":{this.value=`hsv(${e}, ${Math.round(n)}%, ${Math.round(i)}%)`;break}case"rgb":{const{r:o,g:a,b:l}=Ho(e,n,i);this.value=`rgb(${o}, ${a}, ${l})`;break}default:this.value=om(Ho(e,n,i))}}};const Rw=Ze({props:{colors:{type:Array,required:!0},color:{type:Object,required:!0}},setup(t){const e=hn("color-predefine"),{currentColor:n}=Rt(Kv),i=_e(r(t.colors,t.color));We(()=>n.value,o=>{const a=new ua;a.fromString(o),i.value.forEach(l=>{l.selected=a.compare(l)})}),Dy(()=>{i.value=r(t.colors,t.color)});function s(o){t.color.fromString(t.colors[o])}function r(o,a){return o.map(l=>{const c=new ua;return c.enableAlpha=!0,c.format="rgba",c.fromString(l),c.selected=c.value===a.value,c})}return{rgbaColors:i,handleSelect:s,ns:e}}}),Pw=["onClick"];function Dw(t,e,n,i,s,r){return ae(),me("div",{class:De(t.ns.b())},[N("div",{class:De(t.ns.e("colors"))},[(ae(!0),me(rt,null,zt(t.rgbaColors,(o,a)=>(ae(),me("div",{key:t.colors[a],class:De([t.ns.e("color-selector"),t.ns.is("alpha",o._alpha<100),{selected:o.selected}]),onClick:l=>t.handleSelect(a)},[N("div",{style:Hn({backgroundColor:o.value})},null,4)],10,Pw))),128))],2)],2)}var Iw=on(Rw,[["render",Dw],["__file","predefine.vue"]]);const Lw=Ze({name:"ElSlPanel",props:{color:{type:Object,required:!0}},setup(t){const e=hn("color-svpanel"),n=Kt(),i=_e(0),s=_e(0),r=_e("hsl(0, 100%, 50%)"),o=Me(()=>{const c=t.color.get("hue"),u=t.color.get("value");return{hue:c,value:u}});function a(){const c=t.color.get("saturation"),u=t.color.get("value"),f=n.vnode.el,{clientWidth:d,clientHeight:p}=f;s.value=c*d/100,i.value=(100-u)*p/100,r.value=`hsl(${t.color.get("hue")}, 100%, 50%)`}function l(c){const f=n.vnode.el.getBoundingClientRect(),{clientX:d,clientY:p}=Bd(c);let g=d-f.left,m=p-f.top;g=Math.max(0,g),g=Math.min(g,f.width),m=Math.max(0,m),m=Math.min(m,f.height),s.value=g,i.value=m,t.color.set({saturation:g/f.width*100,value:100-m/f.height*100})}return We(()=>o.value,()=>{a()}),Ft(()=>{Ta(n.vnode.el,{drag:c=>{l(c)},end:c=>{l(c)}}),a()}),{cursorTop:i,cursorLeft:s,background:r,colorValue:o,handleDrag:l,update:a,ns:e}}}),Uw=N("div",null,null,-1),Nw=[Uw];function Ow(t,e,n,i,s,r){return ae(),me("div",{class:De(t.ns.b()),style:Hn({backgroundColor:t.background})},[N("div",{class:De(t.ns.e("white"))},null,2),N("div",{class:De(t.ns.e("black"))},null,2),N("div",{class:De(t.ns.e("cursor")),style:Hn({top:t.cursorTop+"px",left:t.cursorLeft+"px"})},Nw,6)],6)}var Fw=on(Lw,[["render",Ow],["__file","sv-panel.vue"]]);const Bw=["onKeydown"],kw=["id","aria-label","aria-labelledby","aria-description","aria-disabled","tabindex"],zw=Ze({name:"ElColorPicker"}),Hw=Ze({...zw,props:Ew,emits:Tw,setup(t,{expose:e,emit:n}){const i=t,{t:s}=ZM(),r=hn("color"),{formItem:o}=th(),a=eh(),l=Xc(),{inputId:c,isLabeledByFormItem:u}=Fv(i,{formItemContext:o}),f=_e(),d=_e(),p=_e(),g=_e(),m=_e(),_=_e(),{isFocused:h,handleFocus:b,handleBlur:x}=Ov(m,{beforeBlur(ye){var He;return(He=g.value)==null?void 0:He.isFocusInsideContent(ye)},afterBlur(){q(!1),we()}}),v=ye=>{if(l.value)return nt();b(ye)};let P=!0;const D=Sr(new ua({enableAlpha:i.showAlpha,format:i.colorFormat||"",value:i.modelValue})),A=_e(!1),T=_e(!1),y=_e(""),M=Me(()=>!i.modelValue&&!T.value?"transparent":se(D,i.showAlpha)),U=Me(()=>!i.modelValue&&!T.value?"":D.value),k=Me(()=>u.value?void 0:i.label||s("el.colorpicker.defaultLabel")),H=Me(()=>u.value?o==null?void 0:o.labelId:void 0),J=Me(()=>[r.b("picker"),r.is("disabled",l.value),r.bm("picker",a.value),r.is("focused",h.value)]);function se(ye,He){if(!(ye instanceof ua))throw new TypeError("color should be instance of _color Class");const{r:I,g:B,b:C}=ye.toRgb();return He?`rgba(${I}, ${B}, ${C}, ${ye.get("alpha")/100})`:`rgb(${I}, ${B}, ${C})`}function q(ye){A.value=ye}const W=yM(q,100,{leading:!0});function j(){l.value||q(!0)}function ve(){W(!1),we()}function we(){qt(()=>{i.modelValue?D.fromString(i.modelValue):(D.value="",qt(()=>{T.value=!1}))})}function Ie(){l.value||W(!A.value)}function Oe(){D.fromString(y.value)}function Qe(){const ye=D.value;n(_o,ye),n("change",ye),i.validateEvent&&(o==null||o.validate("change").catch(He=>void 0)),W(!1),qt(()=>{const He=new ua({enableAlpha:i.showAlpha,format:i.colorFormat||"",value:i.modelValue});D.compare(He)||we()})}function ue(){W(!1),n(_o,null),n("change",null),i.modelValue!==null&&i.validateEvent&&(o==null||o.validate("change").catch(ye=>void 0)),we()}function ge(ye){if(A.value&&(ve(),h.value)){const He=new FocusEvent("focus",ye);x(He)}}function Re(ye){ye.preventDefault(),ye.stopPropagation(),q(!1),we()}function Te(ye){switch(ye.code){case fr.enter:case fr.space:ye.preventDefault(),ye.stopPropagation(),j(),_.value.focus();break;case fr.esc:Re(ye);break}}function Ue(){m.value.focus()}function nt(){m.value.blur()}return Ft(()=>{i.modelValue&&(y.value=U.value)}),We(()=>i.modelValue,ye=>{ye?ye&&ye!==D.value&&(P=!1,D.fromString(ye)):T.value=!1}),We(()=>U.value,ye=>{y.value=ye,P&&n("activeChange",ye),P=!0}),We(()=>D.value,()=>{!i.modelValue&&!T.value&&(T.value=!0)}),We(()=>A.value,()=>{qt(()=>{var ye,He,I;(ye=f.value)==null||ye.update(),(He=d.value)==null||He.update(),(I=p.value)==null||I.update()})}),ts(Kv,{currentColor:U}),e({color:D,show:j,hide:ve,focus:Ue,blur:nt}),(ye,He)=>(ae(),Et(L(VT),{ref_key:"popper",ref:g,visible:A.value,"show-arrow":!1,"fallback-placements":["bottom","top","right","left"],offset:0,"gpu-acceleration":!1,"popper-class":[L(r).be("picker","panel"),L(r).b("dropdown"),ye.popperClass],"stop-popper-mouse-event":!1,effect:"light",trigger:"click",transition:`${L(r).namespace.value}-zoom-in-top`,persistent:"",onHide:He[2]||(He[2]=I=>q(!1))},{content:It(()=>[Dt((ae(),me("div",{onKeydown:oa(Re,["esc"])},[N("div",{class:De(L(r).be("dropdown","main-wrapper"))},[Ke(Mw,{ref_key:"hue",ref:f,class:"hue-slider",color:L(D),vertical:""},null,8,["color"]),Ke(Fw,{ref_key:"sv",ref:d,color:L(D)},null,8,["color"])],2),ye.showAlpha?(ae(),Et(xw,{key:0,ref_key:"alpha",ref:p,color:L(D)},null,8,["color"])):tt("v-if",!0),ye.predefine?(ae(),Et(Iw,{key:1,ref:"predefine",color:L(D),colors:ye.predefine},null,8,["color","colors"])):tt("v-if",!0),N("div",{class:De(L(r).be("dropdown","btns"))},[N("span",{class:De(L(r).be("dropdown","value"))},[Ke(L(B1),{ref_key:"inputRef",ref:_,modelValue:y.value,"onUpdate:modelValue":He[0]||(He[0]=I=>y.value=I),"validate-event":!1,size:"small",onKeyup:oa(Oe,["enter"]),onBlur:Oe},null,8,["modelValue","onKeyup"])],2),Ke(L(tm),{class:De(L(r).be("dropdown","link-btn")),text:"",size:"small",onClick:ue},{default:It(()=>[ir(Xe(L(s)("el.colorpicker.clear")),1)]),_:1},8,["class"]),Ke(L(tm),{plain:"",size:"small",class:De(L(r).be("dropdown","btn")),onClick:Qe},{default:It(()=>[ir(Xe(L(s)("el.colorpicker.confirm")),1)]),_:1},8,["class"])],2)],40,Bw)),[[L(hw),ge]])]),default:It(()=>[N("div",{id:L(c),ref_key:"triggerRef",ref:m,class:De(L(J)),role:"button","aria-label":L(k),"aria-labelledby":L(H),"aria-description":L(s)("el.colorpicker.description",{color:ye.modelValue||""}),"aria-disabled":L(l),tabindex:L(l)?-1:ye.tabindex,onKeydown:Te,onFocus:v,onBlur:He[1]||(He[1]=(...I)=>L(x)&&L(x)(...I))},[L(l)?(ae(),me("div",{key:0,class:De(L(r).be("picker","mask"))},null,2)):tt("v-if",!0),N("div",{class:De(L(r).be("picker","trigger")),onClick:Ie},[N("span",{class:De([L(r).be("picker","color"),L(r).is("alpha",ye.showAlpha)])},[N("span",{class:De(L(r).be("picker","color-inner")),style:Hn({backgroundColor:L(M)})},[Dt(Ke(L(Wi),{class:De([L(r).be("picker","icon"),L(r).is("icon-arrow-down")])},{default:It(()=>[Ke(L(EM))]),_:1},8,["class"]),[[jn,ye.modelValue||T.value]]),Dt(Ke(L(Wi),{class:De([L(r).be("picker","empty"),L(r).is("icon-close")])},{default:It(()=>[Ke(L(RM))]),_:1},8,["class"]),[[jn,!ye.modelValue&&!T.value]])],6)],2)],2)],42,kw)]),_:1},8,["visible","popper-class","transition"]))}});var Vw=on(Hw,[["__file","color-picker.vue"]]);const lm=Po(Vw),Gw={class:"modal-container"},Ww={class:"modal-body"},$w={class:"form-group"},Xw={class:"toggle-group"},jw={class:"form-group"},Yw={class:"screenshot-area"},qw={key:0,class:"screenshot-preview"},Kw=["src"],Zw={key:1,class:"screenshot-placeholder"},Jw={class:"angle-buttons"},Qw={class:"form-group"},eA=["value"],tA={class:"form-group"},nA=["value"],iA={class:"form-group"},sA=["value"],rA={key:0,class:"form-group"},oA=["value"],aA={class:"form-group"},lA=["value"],cA={class:"form-group"},uA={key:1,class:"form-group"},fA={class:"form-group"},dA={class:"form-group"},hA={class:"size-info"},pA={class:"size-item"},mA={class:"size-value"},gA={class:"size-item"},_A={class:"size-value"},vA={class:"size-item"},yA={class:"size-value"},xA=Ze({__name:"RenderModal",props:{visible:{type:Boolean}},emits:["close"],setup(t,{emit:e}){const n=t,i=e,s=Ds(),r=_e("single"),o=_e([]),a=_e([]),l=_e([]),c=_e([]),u=_e([]),f=Sr({imageAngle:"front",style:"",lighting:"",viewAngle:"",roomType:"",material:"",color:"#8B7355",bgColor:"#FFFFFF",description:""}),d=Me(()=>{var A;return((A=s.cabinet)==null?void 0:A.length)||800}),p=Me(()=>{var A;return((A=s.cabinet)==null?void 0:A.height)||2e3}),g=Me(()=>{var A;return((A=s.cabinet)==null?void 0:A.width)||600}),m=_e(""),_=_e(!1);async function h(){var A;try{const T=await fetch(fn("/renderApi/params/presets"));if(T.ok){const y=((A=await T.json())==null?void 0:A.data)||{};o.value=y.styles||[],a.value=y.lighting||[],l.value=y.view_angles||[],c.value=y.room_types||[],u.value=y.materials||[],o.value.length&&(f.style=o.value[0].value),a.value.length&&(f.lighting=a.value[0].value),l.value.length&&(f.viewAngle=l.value[0].value),c.value.length&&(f.roomType=c.value[0].value),u.value.length&&(f.material=u.value[0].value)}}catch(T){console.error("加载渲染预设失败:",T)}}let b=!1;function x(A){f.imageAngle=A,_.value=!0,b?window.dispatchEvent(new CustomEvent("enter-render-mode",{detail:{angle:A}})):(window.dispatchEvent(new CustomEvent("enter-render-mode",{detail:{angle:A}})),b=!0),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const T=document.querySelector("canvas");if(!T){_.value=!1;return}try{m.value=T.toDataURL("image/png")}catch(y){console.error("截图失败:",y)}_.value=!1})})}async function v(){if(!m.value)return"";try{const A=await fetch(fn("/api/render/upload-image"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image:m.value})});if(A.ok)return(await A.json()).url||""}catch(A){console.error("上传截图失败:",A)}return""}async function P(){let A="";m.value&&(A=await v());const T=new URLSearchParams;A&&T.set("image_url",A),f.style&&T.set("style",f.style),f.lighting&&T.set("lighting",f.lighting),f.viewAngle&&T.set("view_angle",f.viewAngle),r.value==="scene"&&f.roomType&&T.set("room_type",f.roomType),f.material&&T.set("material",f.material),f.color&&T.set("color",f.color),r.value==="single"&&f.bgColor&&T.set("bg_color",f.bgColor),f.description&&T.set("description",f.description),T.set("width",String(Math.round(d.value))),T.set("height",String(Math.round(p.value))),T.set("depth",String(Math.round(g.value)));const y=r.value==="single"?"/render/single":"/render/scene",M=`${window.location.origin}${y}?${T.toString()}`;window.open(M,"_blank")}We(()=>n.visible,A=>{A&&(b=!1,h(),x("front"))});function D(){b&&(window.dispatchEvent(new CustomEvent("exit-render-mode")),b=!1),i("close")}return(A,T)=>(ae(),Et(m_,{to:"body"},[t.visible?(ae(),me("div",{key:0,class:"modal-overlay",onClick:ya(D,["self"])},[N("div",Gw,[N("div",{class:"modal-header"},[T[13]||(T[13]=N("h2",{class:"modal-title"},"渲染设置",-1)),N("button",{class:"modal-close",onClick:D},"×")]),N("div",Ww,[N("div",$w,[T[14]||(T[14]=N("label",{class:"form-label"},"渲染类型",-1)),N("div",Xw,[N("button",{class:De(["toggle-btn",{active:r.value==="single"}]),onClick:T[0]||(T[0]=y=>r.value="single")},"单品渲染",2),N("button",{class:De(["toggle-btn",{active:r.value==="scene"}]),onClick:T[1]||(T[1]=y=>r.value="scene")},"场景渲染",2)])]),N("div",jw,[T[15]||(T[15]=N("label",{class:"form-label"},"3D 视图截图",-1)),N("div",Yw,[m.value?(ae(),me("div",qw,[N("img",{src:m.value,alt:"截图预览"},null,8,Kw)])):(ae(),me("div",Zw,Xe(_.value?"截图中...":"暂无截图"),1)),N("div",Jw,[N("button",{class:De(["angle-btn",{active:f.imageAngle==="front"}]),onClick:T[2]||(T[2]=y=>x("front"))},"正面",2),N("button",{class:De(["angle-btn",{active:f.imageAngle==="top"}]),onClick:T[3]||(T[3]=y=>x("top"))},"顶视",2),N("button",{class:De(["angle-btn",{active:f.imageAngle==="side_45"}]),onClick:T[4]||(T[4]=y=>x("side_45"))},"侧面45°",2)])])]),N("div",Qw,[T[16]||(T[16]=N("label",{class:"form-label"},"渲染风格",-1)),Dt(N("select",{"onUpdate:modelValue":T[5]||(T[5]=y=>f.style=y),class:"form-select"},[(ae(!0),me(rt,null,zt(o.value,y=>(ae(),me("option",{key:y.value,value:y.value},Xe(y.label),9,eA))),128))],512),[[Zr,f.style]])]),N("div",tA,[T[17]||(T[17]=N("label",{class:"form-label"},"光照条件",-1)),Dt(N("select",{"onUpdate:modelValue":T[6]||(T[6]=y=>f.lighting=y),class:"form-select"},[(ae(!0),me(rt,null,zt(a.value,y=>(ae(),me("option",{key:y.value,value:y.value},Xe(y.label),9,nA))),128))],512),[[Zr,f.lighting]])]),N("div",iA,[T[18]||(T[18]=N("label",{class:"form-label"},"视角",-1)),Dt(N("select",{"onUpdate:modelValue":T[7]||(T[7]=y=>f.viewAngle=y),class:"form-select"},[(ae(!0),me(rt,null,zt(l.value,y=>(ae(),me("option",{key:y.value,value:y.value},Xe(y.label),9,sA))),128))],512),[[Zr,f.viewAngle]])]),r.value==="scene"?(ae(),me("div",rA,[T[19]||(T[19]=N("label",{class:"form-label"},"户型",-1)),Dt(N("select",{"onUpdate:modelValue":T[8]||(T[8]=y=>f.roomType=y),class:"form-select"},[(ae(!0),me(rt,null,zt(c.value,y=>(ae(),me("option",{key:y.value,value:y.value},Xe(y.label),9,oA))),128))],512),[[Zr,f.roomType]])])):tt("",!0),N("div",aA,[T[20]||(T[20]=N("label",{class:"form-label"},"柜体材质",-1)),Dt(N("select",{"onUpdate:modelValue":T[9]||(T[9]=y=>f.material=y),class:"form-select"},[(ae(!0),me(rt,null,zt(u.value,y=>(ae(),me("option",{key:y.value,value:y.value},Xe(y.label),9,lA))),128))],512),[[Zr,f.material]])]),N("div",cA,[T[21]||(T[21]=N("label",{class:"form-label"},"颜色",-1)),Ke(L(lm),{modelValue:f.color,"onUpdate:modelValue":T[10]||(T[10]=y=>f.color=y),"show-alpha":""},null,8,["modelValue"])]),r.value==="single"?(ae(),me("div",uA,[T[22]||(T[22]=N("label",{class:"form-label"},"背景颜色",-1)),Ke(L(lm),{modelValue:f.bgColor,"onUpdate:modelValue":T[11]||(T[11]=y=>f.bgColor=y),"show-alpha":""},null,8,["modelValue"])])):tt("",!0),N("div",fA,[T[23]||(T[23]=N("label",{class:"form-label"},"额外描述",-1)),Dt(N("textarea",{"onUpdate:modelValue":T[12]||(T[12]=y=>f.description=y),class:"form-textarea",rows:"2",placeholder:"输入渲染的额外描述..."},null,512),[[hc,f.description]])]),N("div",dA,[T[27]||(T[27]=N("label",{class:"form-label"},"柜子尺寸 (mm)",-1)),N("div",hA,[N("div",pA,[T[24]||(T[24]=N("span",{class:"size-label"},"宽",-1)),N("span",mA,Xe(Math.round(d.value)),1)]),N("div",gA,[T[25]||(T[25]=N("span",{class:"size-label"},"高",-1)),N("span",_A,Xe(Math.round(p.value)),1)]),N("div",vA,[T[26]||(T[26]=N("span",{class:"size-label"},"深",-1)),N("span",yA,Xe(Math.round(g.value)),1)])])])]),N("div",{class:"modal-footer"},[N("button",{class:"btn-cancel",onClick:D},"取消"),N("button",{class:"btn-submit",onClick:P},"提交渲染")])])])):tt("",!0)]))}}),Ls=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},bA=Ls(xA,[["__scopeId","data-v-dad6369d"]]),SA={class:"header-bar"},MA={class:"header-left"},EA={class:"project-name"},TA={class:"header-center"},wA=["disabled"],AA=["disabled"],CA={class:"header-right"},RA={class:"status-text"},PA=Ze({__name:"HeaderBar",setup(t,{expose:e}){const n=Co(),i=Ds(),s=Me(()=>{var p;return((p=i.cabinet)==null?void 0:p.name)||"标准柜"}),r=_e(!1),o=_e(!1),a=_e(!1);async function l(){if(!n.currentProjectId){r.value=!1,o.value=!1;return}try{const p=await fetch(fn(`/api/projects/${n.currentProjectId}/history`));if(p.ok){const g=await p.json();r.value=g.can_undo,o.value=g.can_redo}}catch{r.value=!1,o.value=!1}}function c(p){(p.ctrlKey||p.metaKey)&&(p.key==="z"&&!p.shiftKey?(p.preventDefault(),u()):(p.key==="y"||p.key==="z"&&p.shiftKey)&&(p.preventDefault(),f()))}Ft(()=>{l(),window.addEventListener("keydown",c)}),Na(()=>{window.removeEventListener("keydown",c)}),We(()=>n.currentProjectId,()=>{l()}),We(()=>i.cabinet,()=>{l()},{deep:!0});function u(){i.undo()}function f(){i.redo()}async function d(){try{(await fetch(fn(`/api/projects/${n.currentProjectId}`),{method:"PUT"})).ok?(yi("保存成功","success"),n.refreshSchemeList()):yi("保存失败","error")}catch(p){console.error("保存方案失败:",p),yi("保存失败","error")}}return e({fetchHistoryStatus:l}),(p,g)=>(ae(),me(rt,null,[N("header",SA,[N("div",MA,[g[2]||(g[2]=N("div",{class:"logo-wrapper"},[N("h1",{class:"logo"},"Cabinet3D")],-1)),N("span",EA,Xe(s.value),1)]),N("div",TA,[N("button",{class:"btn",onClick:u,disabled:!L(n).isConnected||!r.value,title:"撤销"},[...g[3]||(g[3]=[N("span",{class:"btn-icon"},"↩",-1),N("span",{class:"btn-label"},"撤销",-1)])],8,wA),N("button",{class:"btn",onClick:f,disabled:!L(n).isConnected||!o.value,title:"重做"},[...g[4]||(g[4]=[N("span",{class:"btn-icon"},"↪",-1),N("span",{class:"btn-label"},"重做",-1)])],8,AA),N("button",{class:"btn btn-save",onClick:d},[...g[5]||(g[5]=[N("span",{class:"btn-icon"},"💾",-1),N("span",{class:"btn-label"},"保存",-1)])]),N("button",{class:"btn btn-render",onClick:g[0]||(g[0]=m=>a.value=!0)},[...g[6]||(g[6]=[N("span",{class:"btn-icon"},"🖼",-1),N("span",{class:"btn-label"},"渲染",-1)])])]),N("div",CA,[N("span",{class:De(["status",{connected:L(n).isConnected}])},[g[7]||(g[7]=N("span",{class:"status-dot"},null,-1)),N("span",RA,Xe(L(n).isConnected?"已连接":"未连接"),1)],2)])]),Ke(bA,{visible:a.value,onClose:g[1]||(g[1]=m=>a.value=!1)},null,8,["visible"])],64))}}),cm=Ls(PA,[["__scopeId","data-v-e67c8ef0"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oh="175",co={ROTATE:0,DOLLY:1,PAN:2},eo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},DA=0,um=1,IA=2,Zv=1,LA=2,Bi=3,Rs=0,Pn=1,Mi=2,As=0,uo=1,fm=2,dm=3,hm=4,UA=5,Qs=100,NA=101,OA=102,FA=103,BA=104,kA=200,zA=201,HA=202,VA=203,Rf=204,Pf=205,GA=206,WA=207,$A=208,XA=209,jA=210,YA=211,qA=212,KA=213,ZA=214,Df=0,If=1,Lf=2,So=3,Uf=4,Nf=5,Of=6,Ff=7,Jv=0,JA=1,QA=2,Cs=0,eC=1,tC=2,nC=3,iC=4,sC=5,rC=6,oC=7,Qv=300,Mo=301,Eo=302,Bf=303,kf=304,Yc=306,wa=1e3,rr=1001,zf=1002,fi=1003,aC=1004,al=1005,Ti=1006,Su=1007,or=1008,ss=1009,e0=1010,t0=1011,Aa=1012,ah=1013,vr=1014,Xi=1015,ka=1016,lh=1017,ch=1018,Ca=1020,n0=35902,i0=1021,s0=1022,ci=1023,r0=1024,o0=1025,Ra=1026,Pa=1027,a0=1028,uh=1029,l0=1030,fh=1031,dh=1033,Yl=33776,ql=33777,Kl=33778,Zl=33779,Hf=35840,Vf=35841,Gf=35842,Wf=35843,$f=36196,Xf=37492,jf=37496,Yf=37808,qf=37809,Kf=37810,Zf=37811,Jf=37812,Qf=37813,ed=37814,td=37815,nd=37816,id=37817,sd=37818,rd=37819,od=37820,ad=37821,Jl=36492,ld=36494,cd=36495,c0=36283,ud=36284,fd=36285,dd=36286,lC=3200,cC=3201,u0=0,uC=1,Es="",qn="srgb",To="srgb-linear",yc="linear",St="srgb",Ir=7680,pm=519,fC=512,dC=513,hC=514,f0=515,pC=516,mC=517,gC=518,_C=519,hd=35044,mm="300 es",ji=2e3,xc=2001;class Er{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gm=1234567;const fo=Math.PI/180,Da=180/Math.PI;function Ki(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[t&255]+an[t>>8&255]+an[t>>16&255]+an[t>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function lt(t,e,n){return Math.max(e,Math.min(n,t))}function hh(t,e){return(t%e+e)%e}function vC(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function yC(t,e,n){return t!==e?(n-t)/(e-t):0}function fa(t,e,n){return(1-n)*t+n*e}function xC(t,e,n,i){return fa(t,e,1-Math.exp(-n*i))}function bC(t,e=1){return e-Math.abs(hh(t,e*2)-e)}function SC(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function MC(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function EC(t,e){return t+Math.floor(Math.random()*(e-t+1))}function TC(t,e){return t+Math.random()*(e-t)}function wC(t){return t*(.5-Math.random())}function AC(t){t!==void 0&&(gm=t);let e=gm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function CC(t){return t*fo}function RC(t){return t*Da}function PC(t){return(t&t-1)===0&&t!==0}function DC(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function IC(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function LC(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":t.set(a*u,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function li(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function bt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const er={DEG2RAD:fo,RAD2DEG:Da,generateUUID:Ki,clamp:lt,euclideanModulo:hh,mapLinear:vC,inverseLerp:yC,lerp:fa,damp:xC,pingpong:bC,smoothstep:SC,smootherstep:MC,randInt:EC,randFloat:TC,randFloatSpread:wC,seededRandom:AC,degToRad:CC,radToDeg:RC,isPowerOfTwo:PC,ceilPowerOfTwo:DC,floorPowerOfTwo:IC,setQuaternionFromProperEuler:LC,normalize:bt,denormalize:li};class Ve{constructor(e=0,n=0){Ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,i,s,r,o,a,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],m=s[0],_=s[3],h=s[6],b=s[1],x=s[4],v=s[7],P=s[2],D=s[5],A=s[8];return r[0]=o*m+a*b+l*P,r[3]=o*_+a*x+l*D,r[6]=o*h+a*v+l*A,r[1]=c*m+u*b+f*P,r[4]=c*_+u*x+f*D,r[7]=c*h+u*v+f*A,r[2]=d*m+p*b+g*P,r[5]=d*_+p*x+g*D,r[8]=d*h+p*v+g*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=n*f+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(s*c-u*i)*m,e[2]=(a*i-s*o)*m,e[3]=d*m,e[4]=(u*n-s*l)*m,e[5]=(s*r-a*n)*m,e[6]=p*m,e[7]=(i*l-c*n)*m,e[8]=(o*n-i*r)*m,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Mu.makeScale(e,n)),this}rotate(e){return this.premultiply(Mu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mu=new ot;function d0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function bc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function UC(){const t=bc("canvas");return t.style.display="block",t}const _m={};function Ql(t){t in _m||(_m[t]=!0,console.warn(t))}function NC(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function OC(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function FC(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vm=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ym=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BC(){const t={enabled:!0,workingColorSpace:To,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(s.r=ho(s.r),s.g=ho(s.g),s.b=ho(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Es?yc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[To]:{primaries:e,whitePoint:i,transfer:yc,toXYZ:vm,fromXYZ:ym,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:i,transfer:St,toXYZ:vm,fromXYZ:ym,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),t}const gt=BC();function Zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ho(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Lr;class kC{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Lr===void 0&&(Lr=bc("canvas")),Lr.width=e.width,Lr.height=e.height;const s=Lr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Lr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zi(n[i]/255)*255):n[i]=Zi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zC=0;class ph{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zC++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Eu(s[o].image)):r.push(Eu(s[o]))}else r=Eu(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Eu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?kC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let HC=0;class Sn extends Er{constructor(e=Sn.DEFAULT_IMAGE,n=Sn.DEFAULT_MAPPING,i=rr,s=rr,r=Ti,o=or,a=ci,l=ss,c=Sn.DEFAULT_ANISOTROPY,u=Es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HC++}),this.uuid=Ki(),this.name="",this.source=new ph(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wa:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case zf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wa:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case zf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Qv;Sn.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,n=0,i=0,s=1){wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],m=l[2],_=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-m)<.01&&Math.abs(g-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+m)<.1&&Math.abs(g+_)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,v=(p+1)/2,P=(h+1)/2,D=(u+d)/4,A=(f+m)/4,T=(g+_)/4;return x>v&&x>P?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=D/i,r=A/i):v>P?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=D/s,r=T/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=A/r,s=T/r),this.set(i,s,r,n),this}let b=Math.sqrt((_-g)*(_-g)+(f-m)*(f-m)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(_-g)/b,this.y=(f-m)/b,this.z=(d-u)/b,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this.z=lt(this.z,e.z,n.z),this.w=lt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this.z=lt(this.z,e,n),this.w=lt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VC extends Er{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n);const s={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new ph(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends VC{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class h0 extends Sn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=fi,this.minFilter=fi,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class GC extends Sn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=fi,this.minFilter=fi,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],m=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=m;return}if(f!==m||l!==d||c!==p||u!==g){let _=1-a;const h=l*d+c*p+u*g+f*m,b=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const P=Math.sqrt(x),D=Math.atan2(P,h*b);_=Math.sin(_*D)/P,a=Math.sin(a*D)/P}const v=a*b;if(l=l*_+d*v,c=c*_+p*v,u=u*_+g*v,f=f*_+m*v,_===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[n]=a*g+u*f+l*p-c*d,e[n+1]=l*g+u*d+c*f-a*p,e[n+2]=c*g+u*p+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this.z=lt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this.z=lt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tu.copy(this).projectOnVector(e),this.sub(Tu)}reflect(e){return this.sub(Tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tu=new X,xm=new xr;class Us{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ll.copy(i.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),cl.subVectors(this.max,Vo),Ur.subVectors(e.a,Vo),Nr.subVectors(e.b,Vo),Or.subVectors(e.c,Vo),fs.subVectors(Nr,Ur),ds.subVectors(Or,Nr),Vs.subVectors(Ur,Or);let n=[0,-fs.z,fs.y,0,-ds.z,ds.y,0,-Vs.z,Vs.y,fs.z,0,-fs.x,ds.z,0,-ds.x,Vs.z,0,-Vs.x,-fs.y,fs.x,0,-ds.y,ds.x,0,-Vs.y,Vs.x,0];return!wu(n,Ur,Nr,Or,cl)||(n=[1,0,0,0,1,0,0,0,1],!wu(n,Ur,Nr,Or,cl))?!1:(ul.crossVectors(fs,ds),n=[ul.x,ul.y,ul.z],wu(n,Ur,Nr,Or,cl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new X,new X,new X,new X,new X,new X,new X,new X],si=new X,ll=new Us,Ur=new X,Nr=new X,Or=new X,fs=new X,ds=new X,Vs=new X,Vo=new X,cl=new X,ul=new X,Gs=new X;function wu(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Gs.fromArray(t,r);const a=s.x*Math.abs(Gs.x)+s.y*Math.abs(Gs.y)+s.z*Math.abs(Gs.z),l=e.dot(Gs),c=n.dot(Gs),u=i.dot(Gs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const WC=new Us,Go=new X,Au=new X;class Do{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):WC.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const n=Go.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Go,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Au)),this.expandByPoint(Go.copy(e.center).sub(Au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new X,Cu=new X,fl=new X,hs=new X,Ru=new X,dl=new X,Pu=new X;class qc{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,n),Ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Cu.copy(e).add(n).multiplyScalar(.5),fl.copy(n).sub(e).normalize(),hs.copy(this.origin).sub(Cu);const r=e.distanceTo(n)*.5,o=-this.direction.dot(fl),a=hs.dot(this.direction),l=-hs.dot(fl),c=hs.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const m=1/u;f*=m,d*=m,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Cu).addScaledVector(fl,d),p}intersectSphere(e,n){Ui.subVectors(e.center,this.origin);const i=Ui.dot(this.direction),s=Ui.dot(Ui)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,n,i,s,r){Ru.subVectors(n,e),dl.subVectors(i,e),Pu.crossVectors(Ru,dl);let o=this.direction.dot(Pu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hs.subVectors(this.origin,e);const l=a*this.direction.dot(dl.crossVectors(hs,dl));if(l<0)return null;const c=a*this.direction.dot(Ru.cross(hs));if(c<0||l+c>o)return null;const u=-a*hs.dot(Pu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,s,r,o,a,l,c,u,f,d,p,g,m,_){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,d,p,g,m,_)}set(e,n,i,s,r,o,a,l,c,u,f,d,p,g,m,_){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=m,h[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/Fr.setFromMatrixColumn(e,0).length(),r=1/Fr.setFromMatrixColumn(e,1).length(),o=1/Fr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,m=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-m*c,n[9]=-a*l,n[2]=m-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,m=c*f;n[0]=d+m*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=m+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,m=c*f;n[0]=d-m*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=m-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,m=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+m,n[1]=l*f,n[5]=m*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,m=a*c;n[0]=l*u,n[4]=m-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=d-m*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,m=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+m,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=m*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($C,e,XC)}lookAt(e,n,i){const s=this.elements;return Ln.subVectors(e,n),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),ps.crossVectors(i,Ln),ps.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),ps.crossVectors(i,Ln)),ps.normalize(),hl.crossVectors(Ln,ps),s[0]=ps.x,s[4]=hl.x,s[8]=Ln.x,s[1]=ps.y,s[5]=hl.y,s[9]=Ln.y,s[2]=ps.z,s[6]=hl.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],m=i[6],_=i[10],h=i[14],b=i[3],x=i[7],v=i[11],P=i[15],D=s[0],A=s[4],T=s[8],y=s[12],M=s[1],U=s[5],k=s[9],H=s[13],J=s[2],se=s[6],q=s[10],W=s[14],j=s[3],ve=s[7],we=s[11],Ie=s[15];return r[0]=o*D+a*M+l*J+c*j,r[4]=o*A+a*U+l*se+c*ve,r[8]=o*T+a*k+l*q+c*we,r[12]=o*y+a*H+l*W+c*Ie,r[1]=u*D+f*M+d*J+p*j,r[5]=u*A+f*U+d*se+p*ve,r[9]=u*T+f*k+d*q+p*we,r[13]=u*y+f*H+d*W+p*Ie,r[2]=g*D+m*M+_*J+h*j,r[6]=g*A+m*U+_*se+h*ve,r[10]=g*T+m*k+_*q+h*we,r[14]=g*y+m*H+_*W+h*Ie,r[3]=b*D+x*M+v*J+P*j,r[7]=b*A+x*U+v*se+P*ve,r[11]=b*T+x*k+v*q+P*we,r[15]=b*y+x*H+v*W+P*Ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],m=e[7],_=e[11],h=e[15];return g*(+r*l*f-s*c*f-r*a*d+i*c*d+s*a*p-i*l*p)+m*(+n*l*p-n*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+_*(+n*c*f-n*a*p-r*o*f+i*o*p+r*a*u-i*c*u)+h*(-s*a*u-n*l*f+n*a*d+s*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],m=e[13],_=e[14],h=e[15],b=f*_*c-m*d*c+m*l*p-a*_*p-f*l*h+a*d*h,x=g*d*c-u*_*c-g*l*p+o*_*p+u*l*h-o*d*h,v=u*m*c-g*f*c+g*a*p-o*m*p-u*a*h+o*f*h,P=g*f*l-u*m*l-g*a*d+o*m*d+u*a*_-o*f*_,D=n*b+i*x+s*v+r*P;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/D;return e[0]=b*A,e[1]=(m*d*r-f*_*r-m*s*p+i*_*p+f*s*h-i*d*h)*A,e[2]=(a*_*r-m*l*r+m*s*c-i*_*c-a*s*h+i*l*h)*A,e[3]=(f*l*r-a*d*r-f*s*c+i*d*c+a*s*p-i*l*p)*A,e[4]=x*A,e[5]=(u*_*r-g*d*r+g*s*p-n*_*p-u*s*h+n*d*h)*A,e[6]=(g*l*r-o*_*r-g*s*c+n*_*c+o*s*h-n*l*h)*A,e[7]=(o*d*r-u*l*r+u*s*c-n*d*c-o*s*p+n*l*p)*A,e[8]=v*A,e[9]=(g*f*r-u*m*r-g*i*p+n*m*p+u*i*h-n*f*h)*A,e[10]=(o*m*r-g*a*r+g*i*c-n*m*c-o*i*h+n*a*h)*A,e[11]=(u*a*r-o*f*r-u*i*c+n*f*c+o*i*p-n*a*p)*A,e[12]=P*A,e[13]=(u*m*s-g*f*s+g*i*d-n*m*d-u*i*_+n*f*_)*A,e[14]=(g*a*s-o*m*s-g*i*l+n*m*l+o*i*_-n*a*_)*A,e[15]=(o*f*s-u*a*s+u*i*l-n*f*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,d=r*c,p=r*u,g=r*f,m=o*u,_=o*f,h=a*f,b=l*c,x=l*u,v=l*f,P=i.x,D=i.y,A=i.z;return s[0]=(1-(m+h))*P,s[1]=(p+v)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(p-v)*D,s[5]=(1-(d+h))*D,s[6]=(_+b)*D,s[7]=0,s[8]=(g+x)*A,s[9]=(_-b)*A,s[10]=(1-(d+m))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=Fr.set(s[0],s[1],s[2]).length();const o=Fr.set(s[4],s[5],s[6]).length(),a=Fr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ri.copy(this);const c=1/r,u=1/o,f=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=f,ri.elements[9]*=f,ri.elements[10]*=f,n.setFromRotationMatrix(ri),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=ji){const l=this.elements,c=2*r/(n-e),u=2*r/(i-s),f=(n+e)/(n-e),d=(i+s)/(i-s);let p,g;if(a===ji)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===xc)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=ji){const l=this.elements,c=1/(n-e),u=1/(i-s),f=1/(o-r),d=(n+e)*c,p=(i+s)*u;let g,m;if(a===ji)g=(o+r)*f,m=-2*f;else if(a===xc)g=r*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=m,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Fr=new X,ri=new Ct,$C=new X(0,0,0),XC=new X(1,1,1),ps=new X,hl=new X,Ln=new X,bm=new Ct,Sm=new xr;class Ri{constructor(e=0,n=0,i=0,s=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return bm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sm.setFromEuler(this),this.setFromQuaternion(Sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class mh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jC=0;const Mm=new X,Br=new xr,Ni=new Ct,pl=new X,Wo=new X,YC=new X,qC=new xr,Em=new X(1,0,0),Tm=new X(0,1,0),wm=new X(0,0,1),Am={type:"added"},KC={type:"removed"},kr={type:"childadded",child:null},Du={type:"childremoved",child:null};class Wt extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jC++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new X,n=new Ri,i=new xr,s=new X(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new ot}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(Em,e)}rotateY(e){return this.rotateOnAxis(Tm,e)}rotateZ(e){return this.rotateOnAxis(wm,e)}translateOnAxis(e,n){return Mm.copy(e).applyQuaternion(this.quaternion),this.position.add(Mm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Em,e)}translateY(e){return this.translateOnAxis(Tm,e)}translateZ(e){return this.translateOnAxis(wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?pl.copy(e):pl.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Wo,pl,this.up):Ni.lookAt(pl,Wo,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),Br.setFromRotationMatrix(Ni),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Am),kr.child=e,this.dispatchEvent(kr),kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(KC),Du.child=e,this.dispatchEvent(Du),Du.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Am),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,YC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,qC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Wt.DEFAULT_UP=new X(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new X,Oi=new X,Iu=new X,Fi=new X,zr=new X,Hr=new X,Cm=new X,Lu=new X,Uu=new X,Nu=new X,Ou=new wt,Fu=new wt,Bu=new wt;class On{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),oi.subVectors(e,n),s.cross(oi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){oi.subVectors(s,n),Oi.subVectors(i,n),Iu.subVectors(e,n);const o=oi.dot(oi),a=oi.dot(Oi),l=oi.dot(Iu),c=Oi.dot(Oi),u=Oi.dot(Iu),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Ou.setScalar(0),Fu.setScalar(0),Bu.setScalar(0),Ou.fromBufferAttribute(e,n),Fu.fromBufferAttribute(e,i),Bu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ou,r.x),o.addScaledVector(Fu,r.y),o.addScaledVector(Bu,r.z),o}static isFrontFacing(e,n,i,s){return oi.subVectors(i,n),Oi.subVectors(e,n),oi.cross(Oi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),oi.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return On.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;zr.subVectors(s,i),Hr.subVectors(r,i),Lu.subVectors(e,i);const l=zr.dot(Lu),c=Hr.dot(Lu);if(l<=0&&c<=0)return n.copy(i);Uu.subVectors(e,s);const u=zr.dot(Uu),f=Hr.dot(Uu);if(u>=0&&f<=u)return n.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(zr,o);Nu.subVectors(e,r);const p=zr.dot(Nu),g=Hr.dot(Nu);if(g>=0&&p<=g)return n.copy(r);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Hr,a);const _=u*g-p*f;if(_<=0&&f-u>=0&&p-g>=0)return Cm.subVectors(r,s),a=(f-u)/(f-u+(p-g)),n.copy(s).addScaledVector(Cm,a);const h=1/(_+m+d);return o=m*h,a=d*h,n.copy(i).addScaledVector(zr,o).addScaledVector(Hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const p0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},ml={h:0,s:0,l:0};function ku(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=gt.workingColorSpace){if(e=hh(e,1),n=lt(n,0,1),i=lt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=ku(o,r,e+1/3),this.g=ku(o,r,e),this.b=ku(o,r,e-1/3)}return gt.toWorkingColorSpace(this,s),this}setStyle(e,n=qn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const i=p0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return gt.fromWorkingColorSpace(ln.copy(this),e),Math.round(lt(ln.r*255,0,255))*65536+Math.round(lt(ln.g*255,0,255))*256+Math.round(lt(ln.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.fromWorkingColorSpace(ln.copy(this),n);const i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=gt.workingColorSpace){return gt.fromWorkingColorSpace(ln.copy(this),n),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=qn){gt.fromWorkingColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,s=ln.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+n,ms.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ms),e.getHSL(ml);const i=fa(ms.h,ml.h,n),s=fa(ms.s,ml.s,n),r=fa(ms.l,ml.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new it;it.NAMES=p0;let ZC=0;class Ns extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZC++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=uo,this.side=Rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rf,this.blendDst=Pf,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(i.blending=this.blending),this.side!==Rs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rf&&(i.blendSrc=this.blendSrc),this.blendDst!==Pf&&(i.blendDst=this.blendDst),this.blendEquation!==Qs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kc extends Ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Jv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new X,gl=new Ve;let JC=0;class di{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:JC++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=hd,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)gl.fromBufferAttribute(this,n),gl.applyMatrix3(e),this.setXY(n,gl.x,gl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=li(n,this.array)),n}setX(e,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=li(n,this.array)),n}setY(e,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=li(n,this.array)),n}setZ(e,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=li(n,this.array)),n}setW(e,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hd&&(e.usage=this.usage),e}}class m0 extends di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class g0 extends di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $t extends di{constructor(e,n,i){super(new Float32Array(e),n,i)}}let QC=0;const Xn=new Ct,zu=new Wt,Vr=new X,Un=new Us,$o=new Us,Yt=new X;class Mn extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QC++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(d0(e)?g0:m0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ot().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,i){return Xn.makeTranslation(e,n,i),this.applyMatrix4(Xn),this}scale(e,n,i){return Xn.makeScale(e,n,i),this.applyMatrix4(Xn),this}lookAt(e){return zu.lookAt(e),zu.updateMatrix(),this.applyMatrix4(zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Us);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Do);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];$o.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Un.min,$o.min),Un.expandByPoint(Yt),Yt.addVectors(Un.max,$o.max),Un.expandByPoint(Yt)):(Un.expandByPoint($o.min),Un.expandByPoint($o.max))}Un.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(Vr.fromBufferAttribute(e,c),Yt.add(Vr)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<i.count;T++)a[T]=new X,l[T]=new X;const c=new X,u=new X,f=new X,d=new Ve,p=new Ve,g=new Ve,m=new X,_=new X;function h(T,y,M){c.fromBufferAttribute(i,T),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,M),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(m.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(U),_.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(U),a[T].add(m),a[y].add(m),a[M].add(m),l[T].add(_),l[y].add(_),l[M].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let T=0,y=b.length;T<y;++T){const M=b[T],U=M.start,k=M.count;for(let H=U,J=U+k;H<J;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const x=new X,v=new X,P=new X,D=new X;function A(T){P.fromBufferAttribute(s,T),D.copy(P);const y=a[T];x.copy(y),x.sub(P.multiplyScalar(P.dot(y))).normalize(),v.crossVectors(D,y);const U=v.dot(l[T])<0?-1:1;o.setXYZW(T,x.x,x.y,x.z,U)}for(let T=0,y=b.length;T<y;++T){const M=b[T],U=M.start,k=M.count;for(let H=U,J=U+k;H<J;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new X,r=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),m=e.getX(d+1),_=e.getX(d+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,m),o.fromBufferAttribute(n,_),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Yt.fromBufferAttribute(e,n),Yt.normalize(),e.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,_=l.length;m<_;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new di(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rm=new Ct,Ws=new qc,_l=new Do,Pm=new X,vl=new X,yl=new X,xl=new X,Hu=new X,bl=new X,Dm=new X,Sl=new X;class An extends Wt{constructor(e=new Mn,n=new Kc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){bl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Hu.fromBufferAttribute(f,e),o?bl.addScaledVector(Hu,u):bl.addScaledVector(Hu.sub(n),u))}n.add(bl)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_l.copy(i.boundingSphere),_l.applyMatrix4(r),Ws.copy(e.ray).recast(e.near),!(_l.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(_l,Pm)===null||Ws.origin.distanceToSquared(Pm)>(e.far-e.near)**2))&&(Rm.copy(r).invert(),Ws.copy(e.ray).applyMatrix4(Rm),!(i.boundingBox!==null&&Ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ws)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,m=d.length;g<m;g++){const _=d[g],h=o[_.materialIndex],b=Math.max(_.start,p.start),x=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let v=b,P=x;v<P;v+=3){const D=a.getX(v),A=a.getX(v+1),T=a.getX(v+2);s=Ml(this,h,e,i,c,u,f,D,A,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,n.push(s))}}else{const g=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let _=g,h=m;_<h;_+=3){const b=a.getX(_),x=a.getX(_+1),v=a.getX(_+2);s=Ml(this,o,e,i,c,u,f,b,x,v),s&&(s.faceIndex=Math.floor(_/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,m=d.length;g<m;g++){const _=d[g],h=o[_.materialIndex],b=Math.max(_.start,p.start),x=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let v=b,P=x;v<P;v+=3){const D=v,A=v+1,T=v+2;s=Ml(this,h,e,i,c,u,f,D,A,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,n.push(s))}}else{const g=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let _=g,h=m;_<h;_+=3){const b=_,x=_+1,v=_+2;s=Ml(this,o,e,i,c,u,f,b,x,v),s&&(s.faceIndex=Math.floor(_/3),n.push(s))}}}}function eR(t,e,n,i,s,r,o,a){let l;if(e.side===Pn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Rs,a),l===null)return null;Sl.copy(a),Sl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Sl);return c<n.near||c>n.far?null:{distance:c,point:Sl.clone(),object:t}}function Ml(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,vl),t.getVertexPosition(l,yl),t.getVertexPosition(c,xl);const u=eR(t,e,n,i,vl,yl,xl,Dm);if(u){const f=new X;On.getBarycoord(Dm,vl,yl,xl,f),s&&(u.uv=On.getInterpolatedAttribute(s,a,l,c,f,new Ve)),r&&(u.uv1=On.getInterpolatedAttribute(r,a,l,c,f,new Ve)),o&&(u.normal=On.getInterpolatedAttribute(o,a,l,c,f,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new X,materialIndex:0};On.getNormal(vl,yl,xl,d.normal),u.face=d,u.barycoord=f}return u}class br extends Mn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(f,2));function g(m,_,h,b,x,v,P,D,A,T,y){const M=v/A,U=P/T,k=v/2,H=P/2,J=D/2,se=A+1,q=T+1;let W=0,j=0;const ve=new X;for(let we=0;we<q;we++){const Ie=we*U-H;for(let Oe=0;Oe<se;Oe++){const Qe=Oe*M-k;ve[m]=Qe*b,ve[_]=Ie*x,ve[h]=J,c.push(ve.x,ve.y,ve.z),ve[m]=0,ve[_]=0,ve[h]=D>0?1:-1,u.push(ve.x,ve.y,ve.z),f.push(Oe/A),f.push(1-we/T),W+=1}}for(let we=0;we<T;we++)for(let Ie=0;Ie<A;Ie++){const Oe=d+Ie+se*we,Qe=d+Ie+se*(we+1),ue=d+(Ie+1)+se*(we+1),ge=d+(Ie+1)+se*we;l.push(Oe,Qe,ge),l.push(Qe,ue,ge),j+=6}a.addGroup(p,j,y),p+=j,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function vn(t){const e={};for(let n=0;n<t.length;n++){const i=wo(t[n]);for(const s in i)e[s]=i[s]}return e}function tR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function _0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const gh={clone:wo,merge:vn};var nR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rs extends Ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nR,this.fragmentShader=iR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=tR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class v0 extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=ji}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gs=new X,Im=new Ve,Lm=new Ve;class Kn extends v0{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Da*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,n){return this.getViewBounds(e,Im,Lm),n.subVectors(Lm,Im)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fo*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Gr=-90,Wr=1;class sR extends Wt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kn(Gr,Wr,e,n);s.layers=this.layers,this.add(s);const r=new Kn(Gr,Wr,e,n);r.layers=this.layers,this.add(r);const o=new Kn(Gr,Wr,e,n);o.layers=this.layers,this.add(o);const a=new Kn(Gr,Wr,e,n);a.layers=this.layers,this.add(a);const l=new Kn(Gr,Wr,e,n);l.layers=this.layers,this.add(l);const c=new Kn(Gr,Wr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===ji)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class y0 extends Sn{constructor(e=[],n=Mo,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rR extends yr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new y0(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ti}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new br(5,5,5),r=new rs({name:"CubemapFromEquirect",uniforms:wo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:As});r.uniforms.tEquirect.value=n;const o=new An(s,r),a=n.minFilter;return n.minFilter===or&&(n.minFilter=Ti),new sR(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}class to extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oR={type:"move"};class Vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new to,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new to,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new to,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const _=n.getJointPose(m,i),h=this._getHandJoint(c,m);_!==null&&(h.matrix.fromArray(_.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=_.radius),h.visible=_!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oR)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new to;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class aR extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class x0{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=hd,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=n.array[i+s];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new X;class wi{constructor(e,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix4(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyNormalMatrix(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.transformDirection(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=bt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=li(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=li(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=li(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=li(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=bt(n,this.array),i=bt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new di(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class b0 extends Ns{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let $r;const Xo=new X,Xr=new X,jr=new X,Yr=new Ve,jo=new Ve,S0=new Ct,El=new X,Yo=new X,Tl=new X,Um=new Ve,Gu=new Ve,Nm=new Ve;class lR extends Wt{constructor(e=new b0){if(super(),this.isSprite=!0,this.type="Sprite",$r===void 0){$r=new Mn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new x0(n,5);$r.setIndex([0,1,2,0,2,3]),$r.setAttribute("position",new wi(i,3,0,!1)),$r.setAttribute("uv",new wi(i,2,3,!1))}this.geometry=$r,this.material=e,this.center=new Ve(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xr.setFromMatrixScale(this.matrixWorld),S0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),jr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xr.multiplyScalar(-jr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;wl(El.set(-.5,-.5,0),jr,o,Xr,s,r),wl(Yo.set(.5,-.5,0),jr,o,Xr,s,r),wl(Tl.set(.5,.5,0),jr,o,Xr,s,r),Um.set(0,0),Gu.set(1,0),Nm.set(1,1);let a=e.ray.intersectTriangle(El,Yo,Tl,!1,Xo);if(a===null&&(wl(Yo.set(-.5,.5,0),jr,o,Xr,s,r),Gu.set(0,1),a=e.ray.intersectTriangle(El,Tl,Yo,!1,Xo),a===null))return;const l=e.ray.origin.distanceTo(Xo);l<e.near||l>e.far||n.push({distance:l,point:Xo.clone(),uv:On.getInterpolation(Xo,El,Yo,Tl,Um,Gu,Nm,new Ve),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function wl(t,e,n,i,s,r){Yr.subVectors(t,n).addScalar(.5).multiply(i),s!==void 0?(jo.x=r*Yr.x-s*Yr.y,jo.y=s*Yr.x+r*Yr.y):jo.copy(Yr),t.copy(e),t.x+=jo.x,t.y+=jo.y,t.applyMatrix4(S0)}const Wu=new X,cR=new X,uR=new ot;class Ms{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Wu.subVectors(i,n).cross(cR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Wu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||uR.getNormalMatrix(e),s=this.coplanarPoint(Wu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $s=new Do,Al=new X;class _h{constructor(e=new Ms,n=new Ms,i=new Ms,s=new Ms,r=new Ms,o=new Ms){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ji){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],p=s[8],g=s[9],m=s[10],_=s[11],h=s[12],b=s[13],x=s[14],v=s[15];if(i[0].setComponents(l-r,d-c,_-p,v-h).normalize(),i[1].setComponents(l+r,d+c,_+p,v+h).normalize(),i[2].setComponents(l+o,d+u,_+g,v+b).normalize(),i[3].setComponents(l-o,d-u,_-g,v-b).normalize(),i[4].setComponents(l-a,d-f,_-m,v-x).normalize(),n===ji)i[5].setComponents(l+a,d+f,_+m,v+x).normalize();else if(n===xc)i[5].setComponents(a,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(e){return $s.center.set(0,0,0),$s.radius=.7071067811865476,$s.applyMatrix4(e.matrixWorld),this.intersectsSphere($s)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Al.x=s.normal.x>0?e.max.x:e.min.x,Al.y=s.normal.y>0?e.max.y:e.min.y,Al.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zc extends Ns{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sc=new X,Mc=new X,Om=new Ct,qo=new qc,Cl=new Do,$u=new X,Fm=new X;class M0 extends Wt{constructor(e=new Mn,n=new Zc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Sc.fromBufferAttribute(n,s-1),Mc.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Sc.distanceTo(Mc);e.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cl.copy(i.boundingSphere),Cl.applyMatrix4(s),Cl.radius+=r,e.ray.intersectsSphere(Cl)===!1)return;Om.copy(s).invert(),qo.copy(e.ray).applyMatrix4(Om);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let m=p,_=g-1;m<_;m+=c){const h=u.getX(m),b=u.getX(m+1),x=Rl(this,e,qo,l,h,b,m);x&&n.push(x)}if(this.isLineLoop){const m=u.getX(g-1),_=u.getX(p),h=Rl(this,e,qo,l,m,_,g-1);h&&n.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let m=p,_=g-1;m<_;m+=c){const h=Rl(this,e,qo,l,m,m+1,m);h&&n.push(h)}if(this.isLineLoop){const m=Rl(this,e,qo,l,g-1,p,g-1);m&&n.push(m)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Rl(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(Sc.fromBufferAttribute(a,s),Mc.fromBufferAttribute(a,r),n.distanceSqToSegment(Sc,Mc,$u,Fm)>i)return;$u.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo($u);if(!(c<e.near||c>e.far))return{distance:c,point:Fm.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const Bm=new X,km=new X;class E0 extends M0{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)Bm.fromBufferAttribute(n,s),km.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Bm.distanceTo(km);e.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zm extends Sn{constructor(e,n,i,s,r,o,a,l,c){super(e,n,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class T0 extends Sn{constructor(e,n,i=vr,s,r,o,a=fi,l=fi,c,u=Ra){if(u!==Ra&&u!==Pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ph(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class vh extends Mn{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],p=[];let g=0;const m=[],_=i/2;let h=0;b(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new $t(f,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(p,2));function b(){const v=new X,P=new X;let D=0;const A=(n-e)/i;for(let T=0;T<=r;T++){const y=[],M=T/r,U=M*(n-e)+e;for(let k=0;k<=s;k++){const H=k/s,J=H*l+a,se=Math.sin(J),q=Math.cos(J);P.x=U*se,P.y=-M*i+_,P.z=U*q,f.push(P.x,P.y,P.z),v.set(se,A,q).normalize(),d.push(v.x,v.y,v.z),p.push(H,1-M),y.push(g++)}m.push(y)}for(let T=0;T<s;T++)for(let y=0;y<r;y++){const M=m[y][T],U=m[y+1][T],k=m[y+1][T+1],H=m[y][T+1];(e>0||y!==0)&&(u.push(M,U,H),D+=3),(n>0||y!==r-1)&&(u.push(U,k,H),D+=3)}c.addGroup(h,D,0),h+=D}function x(v){const P=g,D=new Ve,A=new X;let T=0;const y=v===!0?e:n,M=v===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,_*M,0),d.push(0,M,0),p.push(.5,.5),g++;const U=g;for(let k=0;k<=s;k++){const J=k/s*l+a,se=Math.cos(J),q=Math.sin(J);A.x=y*q,A.y=_*M,A.z=y*se,f.push(A.x,A.y,A.z),d.push(0,M,0),D.x=se*.5+.5,D.y=q*.5*M+.5,p.push(D.x,D.y),g++}for(let k=0;k<s;k++){const H=P+k,J=U+k;v===!0?u.push(J,J+1,H):u.push(J+1,J,H),T+=3}c.addGroup(h,T,v===!0?1:2),h+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Pl=new X,Dl=new X,Xu=new X,Il=new On;class Hm extends Mn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const s=Math.pow(10,4),r=Math.cos(fo*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:m,b:_,c:h}=Il;if(m.fromBufferAttribute(a,c[0]),_.fromBufferAttribute(a,c[1]),h.fromBufferAttribute(a,c[2]),Il.getNormal(Xu),f[0]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[1]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,f[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let b=0;b<3;b++){const x=(b+1)%3,v=f[b],P=f[x],D=Il[u[b]],A=Il[u[x]],T=`${v}_${P}`,y=`${P}_${v}`;y in d&&d[y]?(Xu.dot(d[y].normal)<=r&&(p.push(D.x,D.y,D.z),p.push(A.x,A.y,A.z)),d[y]=null):T in d||(d[T]={index0:c[b],index1:c[x],normal:Xu.clone()})}}for(const g in d)if(d[g]){const{index0:m,index1:_}=d[g];Pl.fromBufferAttribute(a,m),Dl.fromBufferAttribute(a,_),p.push(Pl.x,Pl.y,Pl.z),p.push(Dl.x,Dl.y,Dl.z)}this.setAttribute("position",new $t(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class za extends Mn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=n/l,p=[],g=[],m=[],_=[];for(let h=0;h<u;h++){const b=h*d-o;for(let x=0;x<c;x++){const v=x*f-r;g.push(v,-b,0),m.push(0,0,1),_.push(x/a),_.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<a;b++){const x=b+c*h,v=b+c*(h+1),P=b+1+c*(h+1),D=b+1+c*h;p.push(x,v,D),p.push(v,P,D)}this.setIndex(p),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(m,3)),this.setAttribute("uv",new $t(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.width,e.height,e.widthSegments,e.heightSegments)}}class fR extends Mn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,s=new X,r=new X;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],d=f.start,p=f.count;for(let g=d,m=d+p;g<m;g+=3)for(let _=0;_<3;_++){const h=a.getX(g+_),b=a.getX(g+(_+1)%3);s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,b),Vm(s,r,i)===!0&&(n.push(s.x,s.y,s.z),n.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,f=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,f),Vm(s,r,i)===!0&&(n.push(s.x,s.y,s.z),n.push(r.x,r.y,r.z))}}this.setAttribute("position",new $t(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Vm(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(s)===!0?!1:(n.add(i),n.add(s),!0)}class dR extends Ns{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new it(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class hR extends Ns{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=u0,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pR extends hR{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class mR extends Ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gR extends Ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class w0 extends Wt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const ju=new Ct,Gm=new X,Wm=new X;class _R{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _h,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Gm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gm),Wm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Wm),n.updateMatrixWorld(),ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ju),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class A0 extends v0{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class vR extends _R{constructor(){super(new A0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yu extends w0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new vR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yR extends w0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class xR extends Mn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class bR extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class pd extends x0{constructor(e,n,i=1){super(e,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const n=super.clone(e);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(e){const n=super.toJSON(e);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}const $m=new Ct;class SR{constructor(e,n,i=0,s=1/0){this.ray=new qc(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new mh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return $m.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($m),this}intersectObject(e,n=!0,i=[]){return md(e,this,i,n),i.sort(Xm),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)md(e[s],this,i,n);return i.sort(Xm),i}}function Xm(t,e){return t.distance-e.distance}function md(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){const r=t.children;for(let o=0,a=r.length;o<a;o++)md(r[o],e,n,!0)}}class jm{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=lt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(lt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ym=new X,Ll=new X;class MR{constructor(e=new X,n=new X){this.start=e,this.end=n}set(e,n){return this.start.copy(e),this.end.copy(n),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){Ym.subVectors(e,this.start),Ll.subVectors(this.end,this.start);const i=Ll.dot(Ll);let r=Ll.dot(Ym)/i;return n&&(r=lt(r,0,1)),r}closestPointToPoint(e,n,i){const s=this.closestPointToPointParameter(e,n);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class ER extends E0{constructor(e=10,n=10,i=4473924,s=8947848){i=new it(i),s=new it(s);const r=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,p=0,g=-a;d<=n;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const m=d===r?i:s;m.toArray(c,p),p+=3,m.toArray(c,p),p+=3,m.toArray(c,p),p+=3,m.toArray(c,p),p+=3}const u=new Mn;u.setAttribute("position",new $t(l,3)),u.setAttribute("color",new $t(c,3));const f=new Zc({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const qm=new X;let Ul,qu;class TR extends Wt{constructor(e=new X(0,0,1),n=new X(0,0,0),i=1,s=16776960,r=i*.2,o=r*.2){super(),this.type="ArrowHelper",Ul===void 0&&(Ul=new Mn,Ul.setAttribute("position",new $t([0,0,0,0,1,0],3)),qu=new vh(0,.5,1,5,1),qu.translate(0,-.5,0)),this.position.copy(n),this.line=new M0(Ul,new Zc({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new An(qu,new Kc({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{qm.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(qm,n)}}setLength(e,n=e*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class wR extends Er{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Km(t,e,n,i){const s=AR(i);switch(n){case i0:return t*e;case r0:return t*e;case o0:return t*e*2;case a0:return t*e/s.components*s.byteLength;case uh:return t*e/s.components*s.byteLength;case l0:return t*e*2/s.components*s.byteLength;case fh:return t*e*2/s.components*s.byteLength;case s0:return t*e*3/s.components*s.byteLength;case ci:return t*e*4/s.components*s.byteLength;case dh:return t*e*4/s.components*s.byteLength;case Yl:case ql:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Kl:case Zl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vf:case Wf:return Math.max(t,16)*Math.max(e,8)/4;case Hf:case Gf:return Math.max(t,8)*Math.max(e,8)/2;case $f:case Xf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Kf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Qf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ed:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case td:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case nd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case id:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case sd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case rd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case od:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ad:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Jl:case ld:case cd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case c0:case ud:return Math.ceil(t/4)*Math.ceil(e/4)*8;case fd:case dd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function AR(t){switch(t){case ss:case e0:return{byteLength:1,components:1};case Aa:case t0:case ka:return{byteLength:2,components:1};case lh:case ch:return{byteLength:2,components:4};case vr:case ah:case Xi:return{byteLength:4,components:1};case n0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function C0(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function CR(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],m=f[p];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++d,f[d]=m)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const m=f[p];t.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var RR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PR=`#ifdef USE_ALPHAHASH
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
#endif`,DR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NR=`#ifdef USE_AOMAP
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
#endif`,OR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FR=`#ifdef USE_BATCHING
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
#endif`,BR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,VR=`#ifdef USE_IRIDESCENCE
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
#endif`,GR=`#ifdef USE_BUMPMAP
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
#endif`,WR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$R=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,JR=`#define PI 3.141592653589793
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
} // validated`,QR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e2=`vec3 transformedNormal = objectNormal;
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
#endif`,t2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r2="gl_FragColor = linearToOutputTexel( gl_FragColor );",o2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a2=`#ifdef USE_ENVMAP
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
#endif`,l2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,c2=`#ifdef USE_ENVMAP
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
#endif`,u2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f2=`#ifdef USE_ENVMAP
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
#endif`,d2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g2=`#ifdef USE_GRADIENTMAP
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
}`,_2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x2=`uniform bool receiveShadow;
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
#endif`,b2=`#ifdef USE_ENVMAP
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
#endif`,S2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w2=`PhysicalMaterial material;
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
#endif`,A2=`struct PhysicalMaterial {
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
}`,C2=`
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
#endif`,R2=`#if defined( RE_IndirectDiffuse )
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
#endif`,P2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,B2=`#if defined( USE_POINTS_UV )
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
#endif`,k2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W2=`#ifdef USE_MORPHTARGETS
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
#endif`,$2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,j2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Y2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z2=`#ifdef USE_NORMALMAP
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
#endif`,J2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hP=`float getShadowMask() {
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
}`,pP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mP=`#ifdef USE_SKINNING
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
#endif`,gP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_P=`#ifdef USE_SKINNING
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
#endif`,vP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,SP=`#ifdef USE_TRANSMISSION
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
#endif`,MP=`#ifdef USE_TRANSMISSION
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
#endif`,EP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RP=`uniform sampler2D t2D;
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
}`,PP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DP=`#ifdef ENVMAP_TYPE_CUBE
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
}`,IP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UP=`#include <common>
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
}`,NP=`#if DEPTH_PACKING == 3200
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
}`,OP=`#define DISTANCE
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
}`,FP=`#define DISTANCE
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
}`,BP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zP=`uniform float scale;
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
}`,HP=`uniform vec3 diffuse;
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
}`,VP=`#include <common>
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
}`,GP=`uniform vec3 diffuse;
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
}`,WP=`#define LAMBERT
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
}`,$P=`#define LAMBERT
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
}`,XP=`#define MATCAP
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
}`,jP=`#define MATCAP
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
}`,YP=`#define NORMAL
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
}`,qP=`#define NORMAL
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
}`,KP=`#define PHONG
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
}`,ZP=`#define PHONG
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
}`,JP=`#define STANDARD
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
}`,QP=`#define STANDARD
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
}`,eD=`#define TOON
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
}`,tD=`#define TOON
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
}`,nD=`uniform float size;
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
}`,iD=`uniform vec3 diffuse;
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
}`,sD=`#include <common>
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
}`,rD=`uniform vec3 color;
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
}`,oD=`uniform float rotation;
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
}`,aD=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:RR,alphahash_pars_fragment:PR,alphamap_fragment:DR,alphamap_pars_fragment:IR,alphatest_fragment:LR,alphatest_pars_fragment:UR,aomap_fragment:NR,aomap_pars_fragment:OR,batching_pars_vertex:FR,batching_vertex:BR,begin_vertex:kR,beginnormal_vertex:zR,bsdfs:HR,iridescence_fragment:VR,bumpmap_pars_fragment:GR,clipping_planes_fragment:WR,clipping_planes_pars_fragment:$R,clipping_planes_pars_vertex:XR,clipping_planes_vertex:jR,color_fragment:YR,color_pars_fragment:qR,color_pars_vertex:KR,color_vertex:ZR,common:JR,cube_uv_reflection_fragment:QR,defaultnormal_vertex:e2,displacementmap_pars_vertex:t2,displacementmap_vertex:n2,emissivemap_fragment:i2,emissivemap_pars_fragment:s2,colorspace_fragment:r2,colorspace_pars_fragment:o2,envmap_fragment:a2,envmap_common_pars_fragment:l2,envmap_pars_fragment:c2,envmap_pars_vertex:u2,envmap_physical_pars_fragment:b2,envmap_vertex:f2,fog_vertex:d2,fog_pars_vertex:h2,fog_fragment:p2,fog_pars_fragment:m2,gradientmap_pars_fragment:g2,lightmap_pars_fragment:_2,lights_lambert_fragment:v2,lights_lambert_pars_fragment:y2,lights_pars_begin:x2,lights_toon_fragment:S2,lights_toon_pars_fragment:M2,lights_phong_fragment:E2,lights_phong_pars_fragment:T2,lights_physical_fragment:w2,lights_physical_pars_fragment:A2,lights_fragment_begin:C2,lights_fragment_maps:R2,lights_fragment_end:P2,logdepthbuf_fragment:D2,logdepthbuf_pars_fragment:I2,logdepthbuf_pars_vertex:L2,logdepthbuf_vertex:U2,map_fragment:N2,map_pars_fragment:O2,map_particle_fragment:F2,map_particle_pars_fragment:B2,metalnessmap_fragment:k2,metalnessmap_pars_fragment:z2,morphinstance_vertex:H2,morphcolor_vertex:V2,morphnormal_vertex:G2,morphtarget_pars_vertex:W2,morphtarget_vertex:$2,normal_fragment_begin:X2,normal_fragment_maps:j2,normal_pars_fragment:Y2,normal_pars_vertex:q2,normal_vertex:K2,normalmap_pars_fragment:Z2,clearcoat_normal_fragment_begin:J2,clearcoat_normal_fragment_maps:Q2,clearcoat_pars_fragment:eP,iridescence_pars_fragment:tP,opaque_fragment:nP,packing:iP,premultiplied_alpha_fragment:sP,project_vertex:rP,dithering_fragment:oP,dithering_pars_fragment:aP,roughnessmap_fragment:lP,roughnessmap_pars_fragment:cP,shadowmap_pars_fragment:uP,shadowmap_pars_vertex:fP,shadowmap_vertex:dP,shadowmask_pars_fragment:hP,skinbase_vertex:pP,skinning_pars_vertex:mP,skinning_vertex:gP,skinnormal_vertex:_P,specularmap_fragment:vP,specularmap_pars_fragment:yP,tonemapping_fragment:xP,tonemapping_pars_fragment:bP,transmission_fragment:SP,transmission_pars_fragment:MP,uv_pars_fragment:EP,uv_pars_vertex:TP,uv_vertex:wP,worldpos_vertex:AP,background_vert:CP,background_frag:RP,backgroundCube_vert:PP,backgroundCube_frag:DP,cube_vert:IP,cube_frag:LP,depth_vert:UP,depth_frag:NP,distanceRGBA_vert:OP,distanceRGBA_frag:FP,equirect_vert:BP,equirect_frag:kP,linedashed_vert:zP,linedashed_frag:HP,meshbasic_vert:VP,meshbasic_frag:GP,meshlambert_vert:WP,meshlambert_frag:$P,meshmatcap_vert:XP,meshmatcap_frag:jP,meshnormal_vert:YP,meshnormal_frag:qP,meshphong_vert:KP,meshphong_frag:ZP,meshphysical_vert:JP,meshphysical_frag:QP,meshtoon_vert:eD,meshtoon_frag:tD,points_vert:nD,points_frag:iD,shadow_vert:sD,shadow_frag:rD,sprite_vert:oD,sprite_frag:aD},Ce={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},wn={basic:{uniforms:vn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:vn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new it(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:vn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:vn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:vn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new it(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:vn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:vn([Ce.points,Ce.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:vn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:vn([Ce.common,Ce.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:vn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:vn([Ce.sprite,Ce.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:vn([Ce.common,Ce.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:vn([Ce.lights,Ce.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};wn.physical={uniforms:vn([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Nl={r:0,b:0,g:0},Xs=new Ri,lD=new Ct;function cD(t,e,n,i,s,r,o){const a=new it(0);let l=r===!0?0:1,c,u,f=null,d=0,p=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?n:e).get(v)),v}function m(x){let v=!1;const P=g(x);P===null?h(a,l):P&&P.isColor&&(h(P,1),v=!0);const D=t.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(x,v){const P=g(v);P&&(P.isCubeTexture||P.mapping===Yc)?(u===void 0&&(u=new An(new br(1,1,1),new rs({name:"BackgroundCubeMaterial",uniforms:wo(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Xs.copy(v.backgroundRotation),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lD.makeRotationFromEuler(Xs)),u.material.toneMapped=gt.getTransfer(P.colorSpace)!==St,(f!==P||d!==P.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=P,d=P.version,p=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new An(new za(2,2),new rs({name:"BackgroundMaterial",uniforms:wo(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=gt.getTransfer(P.colorSpace)!==St,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||d!==P.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=P,d=P.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function h(x,v){x.getRGB(Nl,_0(t)),i.buffers.color.setClear(Nl.r,Nl.g,Nl.b,v,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(a,l)},render:m,addToRenderList:_,dispose:b}}function uD(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(M,U,k,H,J){let se=!1;const q=f(H,k,U);r!==q&&(r=q,c(r.object)),se=p(M,H,k,J),se&&g(M,H,k,J),J!==null&&e.update(J,t.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,v(M,U,k,H),J!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function f(M,U,k){const H=k.wireframe===!0;let J=i[M.id];J===void 0&&(J={},i[M.id]=J);let se=J[U.id];se===void 0&&(se={},J[U.id]=se);let q=se[H];return q===void 0&&(q=d(l()),se[H]=q),q}function d(M){const U=[],k=[],H=[];for(let J=0;J<n;J++)U[J]=0,k[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,U,k,H){const J=r.attributes,se=U.attributes;let q=0;const W=k.getAttributes();for(const j in W)if(W[j].location>=0){const we=J[j];let Ie=se[j];if(Ie===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(Ie=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(Ie=M.instanceColor)),we===void 0||we.attribute!==Ie||Ie&&we.data!==Ie.data)return!0;q++}return r.attributesNum!==q||r.index!==H}function g(M,U,k,H){const J={},se=U.attributes;let q=0;const W=k.getAttributes();for(const j in W)if(W[j].location>=0){let we=se[j];we===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(we=M.instanceColor));const Ie={};Ie.attribute=we,we&&we.data&&(Ie.data=we.data),J[j]=Ie,q++}r.attributes=J,r.attributesNum=q,r.index=H}function m(){const M=r.newAttributes;for(let U=0,k=M.length;U<k;U++)M[U]=0}function _(M){h(M,0)}function h(M,U){const k=r.newAttributes,H=r.enabledAttributes,J=r.attributeDivisors;k[M]=1,H[M]===0&&(t.enableVertexAttribArray(M),H[M]=1),J[M]!==U&&(t.vertexAttribDivisor(M,U),J[M]=U)}function b(){const M=r.newAttributes,U=r.enabledAttributes;for(let k=0,H=U.length;k<H;k++)U[k]!==M[k]&&(t.disableVertexAttribArray(k),U[k]=0)}function x(M,U,k,H,J,se,q){q===!0?t.vertexAttribIPointer(M,U,k,J,se):t.vertexAttribPointer(M,U,k,H,J,se)}function v(M,U,k,H){m();const J=H.attributes,se=k.getAttributes(),q=U.defaultAttributeValues;for(const W in se){const j=se[W];if(j.location>=0){let ve=J[W];if(ve===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),ve!==void 0){const we=ve.normalized,Ie=ve.itemSize,Oe=e.get(ve);if(Oe===void 0)continue;const Qe=Oe.buffer,ue=Oe.type,ge=Oe.bytesPerElement,Re=ue===t.INT||ue===t.UNSIGNED_INT||ve.gpuType===ah;if(ve.isInterleavedBufferAttribute){const Te=ve.data,Ue=Te.stride,nt=ve.offset;if(Te.isInstancedInterleavedBuffer){for(let ye=0;ye<j.locationSize;ye++)h(j.location+ye,Te.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let ye=0;ye<j.locationSize;ye++)_(j.location+ye);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let ye=0;ye<j.locationSize;ye++)x(j.location+ye,Ie/j.locationSize,ue,we,Ue*ge,(nt+Ie/j.locationSize*ye)*ge,Re)}else{if(ve.isInstancedBufferAttribute){for(let Te=0;Te<j.locationSize;Te++)h(j.location+Te,ve.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Te=0;Te<j.locationSize;Te++)_(j.location+Te);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let Te=0;Te<j.locationSize;Te++)x(j.location+Te,Ie/j.locationSize,ue,we,Ie*ge,Ie/j.locationSize*Te*ge,Re)}}else if(q!==void 0){const we=q[W];if(we!==void 0)switch(we.length){case 2:t.vertexAttrib2fv(j.location,we);break;case 3:t.vertexAttrib3fv(j.location,we);break;case 4:t.vertexAttrib4fv(j.location,we);break;default:t.vertexAttrib1fv(j.location,we)}}}}b()}function P(){T();for(const M in i){const U=i[M];for(const k in U){const H=U[k];for(const J in H)u(H[J].object),delete H[J];delete U[k]}delete i[M]}}function D(M){if(i[M.id]===void 0)return;const U=i[M.id];for(const k in U){const H=U[k];for(const J in H)u(H[J].object),delete H[J];delete U[k]}delete i[M.id]}function A(M){for(const U in i){const k=i[U];if(k[M.id]===void 0)continue;const H=k[M.id];for(const J in H)u(H[J].object),delete H[J];delete k[M.id]}}function T(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfProgram:A,initAttributes:m,enableAttribute:_,disableUnusedAttributes:b}}function fD(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let m=0;m<f;m++)g+=u[m]*d[m];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dD(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==ci&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const T=A===ka&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ss&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Xi&&!T)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,D=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:_,maxAttributes:h,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:P,maxSamples:D}}function hD(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Ms,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,m=f.clipIntersection,_=f.clipShadows,h=t.get(f);if(!s||g===null||g.length===0||r&&!_)r?u(null):c();else{const b=r?0:i,x=b*4;let v=h.clippingState||null;l.value=v,v=u(g,d,x,p);for(let P=0;P!==x;++P)v[P]=n[P];h.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const m=f!==null?f.length:0;let _=null;if(m!==0){if(_=l.value,g!==!0||_===null){const h=p+m*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(_===null||_.length<h)&&(_=new Float32Array(h));for(let x=0,v=p;x!==m;++x,v+=4)o.copy(f[x]).applyMatrix4(b,a),o.normal.toArray(_,v),_[v+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,_}}function pD(t){let e=new WeakMap;function n(o,a){return a===Bf?o.mapping=Mo:a===kf&&(o.mapping=Eo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bf||a===kf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new rR(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const no=4,Zm=[.125,.215,.35,.446,.526,.582],tr=20,Ku=new A0,Jm=new it;let Zu=null,Ju=0,Qu=0,ef=!1;const qs=(1+Math.sqrt(5))/2,qr=1/qs,Qm=[new X(-qs,qr,0),new X(qs,qr,0),new X(-qr,0,qs),new X(qr,0,qs),new X(0,qs,-qr),new X(0,qs,qr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],mD=new X;class eg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=mD}=r;Zu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ig(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zu,Ju,Qu),this._renderer.xr.enabled=ef,e.scissorTest=!1,Ol(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Mo||e.mapping===Eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:ka,format:ci,colorSpace:To,depthBuffer:!1},s=tg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tg(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gD(r)),this._blurMaterial=_D(r,e,n)}return s}_compileMaterial(e){const n=new An(this._lodPlanes[0],e);this._renderer.compile(n,Ku)}_sceneToCubeUV(e,n,i,s,r){const l=new Kn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Jm),f.toneMapping=Cs,f.autoClear=!1;const g=new Kc({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),m=new An(new br,g);let _=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,_=!0):(g.color.copy(Jm),_=!0);for(let b=0;b<6;b++){const x=b%3;x===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):x===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const v=this._cubeSize;Ol(s,x*v,b>2?v:0,v,v),f.setRenderTarget(s),_&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Mo||e.mapping===Eo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ig()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ng());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ol(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ku)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qm[(s-r-1)%Qm.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new An(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*tr-1),m=r/g,_=isFinite(r)?1+Math.floor(u*m):tr;_>tr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${tr}`);const h=[];let b=0;for(let A=0;A<tr;++A){const T=A/m,y=Math.exp(-T*T/2);h.push(y),A===0?b+=y:A<_&&(b+=2*y)}for(let A=0;A<h.length;A++)h[A]=h[A]/b;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const v=this._sizeLods[s],P=3*v*(s>x-no?s-x+no:0),D=4*(this._cubeSize-v);Ol(n,P,D,3*v,2*v),l.setRenderTarget(n),l.render(f,Ku)}}function gD(t){const e=[],n=[],i=[];let s=t;const r=t-no+1+Zm.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-no?l=Zm[o-t+no-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,m=3,_=2,h=1,b=new Float32Array(m*g*p),x=new Float32Array(_*g*p),v=new Float32Array(h*g*p);for(let D=0;D<p;D++){const A=D%3*2/3-1,T=D>2?0:-1,y=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];b.set(y,m*g*D),x.set(d,_*g*D);const M=[D,D,D,D,D,D];v.set(M,h*g*D)}const P=new Mn;P.setAttribute("position",new di(b,m)),P.setAttribute("uv",new di(x,_)),P.setAttribute("faceIndex",new di(v,h)),e.push(P),s>no&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function tg(t,e,n){const i=new yr(t,e,n);return i.texture.mapping=Yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ol(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function _D(t,e,n){const i=new Float32Array(tr),s=new X(0,1,0);return new rs({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yh(),fragmentShader:`

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
		`,blending:As,depthTest:!1,depthWrite:!1})}function ng(){return new rs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

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
		`,blending:As,depthTest:!1,depthWrite:!1})}function ig(){return new rs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:As,depthTest:!1,depthWrite:!1})}function yh(){return`

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
	`}function vD(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bf||l===kf,u=l===Mo||l===Eo;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new eg(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(n===null&&(n=new eg(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function yD(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Ql("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function xD(t,e,n,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,g=f.attributes.position;let m=0;if(p!==null){const b=p.array;m=p.version;for(let x=0,v=b.length;x<v;x+=3){const P=b[x+0],D=b[x+1],A=b[x+2];d.push(P,D,D,A,A,P)}}else if(g!==void 0){const b=g.array;m=g.version;for(let x=0,v=b.length/3-1;x<v;x+=3){const P=x+0,D=x+1,A=x+2;d.push(P,D,D,A,A,P)}}else return;const _=new(d0(d)?g0:m0)(d,1);_.version=m;const h=r.get(f);h&&e.remove(h),r.set(f,_)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function bD(t,e,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,r,d*o),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,r,d*o,g),n.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let _=0;for(let h=0;h<g;h++)_+=p[h];n.update(_,i,1)}function f(d,p,g,m){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],m[h]);else{_.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,m,0,g);let h=0;for(let b=0;b<g;b++)h+=p[b]*m[b];n.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function SD(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function MD(t,e,n){const i=new WeakMap,s=new wt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),m===!0&&(v=2),_===!0&&(v=3);let P=a.attributes.position.count*v,D=1;P>e.maxTextureSize&&(D=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*D*4*f),T=new h0(A,P,D,f);T.type=Xi,T.needsUpdate=!0;const y=v*4;for(let U=0;U<f;U++){const k=h[U],H=b[U],J=x[U],se=P*D*4*U;for(let q=0;q<k.count;q++){const W=q*y;g===!0&&(s.fromBufferAttribute(k,q),A[se+W+0]=s.x,A[se+W+1]=s.y,A[se+W+2]=s.z,A[se+W+3]=0),m===!0&&(s.fromBufferAttribute(H,q),A[se+W+4]=s.x,A[se+W+5]=s.y,A[se+W+6]=s.z,A[se+W+7]=0),_===!0&&(s.fromBufferAttribute(J,q),A[se+W+8]=s.x,A[se+W+9]=s.y,A[se+W+10]=s.z,A[se+W+11]=J.itemSize===4?s.w:1)}}d={count:f,texture:T,size:new Ve(P,D)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let _=0;_<c.length;_++)g+=c[_];const m=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function ED(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const R0=new Sn,sg=new T0(1,1),P0=new h0,D0=new GC,I0=new y0,rg=[],og=[],ag=new Float32Array(16),lg=new Float32Array(9),cg=new Float32Array(4);function Io(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=rg[s];if(r===void 0&&(r=new Float32Array(s),rg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Jc(t,e){let n=og[e];n===void 0&&(n=new Int32Array(e),og[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function TD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function wD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),jt(n,e)}}function AD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),jt(n,e)}}function CD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),jt(n,e)}}function RD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(n,e)}else{if(Xt(n,i))return;cg.set(i),t.uniformMatrix2fv(this.addr,!1,cg),jt(n,i)}}function PD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(n,e)}else{if(Xt(n,i))return;lg.set(i),t.uniformMatrix3fv(this.addr,!1,lg),jt(n,i)}}function DD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(n,e)}else{if(Xt(n,i))return;ag.set(i),t.uniformMatrix4fv(this.addr,!1,ag),jt(n,i)}}function ID(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function LD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),jt(n,e)}}function UD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),jt(n,e)}}function ND(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),jt(n,e)}}function OD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function FD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),jt(n,e)}}function BD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),jt(n,e)}}function kD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),jt(n,e)}}function zD(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(sg.compareFunction=f0,r=sg):r=R0,n.setTexture2D(e||r,s)}function HD(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||D0,s)}function VD(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||I0,s)}function GD(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||P0,s)}function WD(t){switch(t){case 5126:return TD;case 35664:return wD;case 35665:return AD;case 35666:return CD;case 35674:return RD;case 35675:return PD;case 35676:return DD;case 5124:case 35670:return ID;case 35667:case 35671:return LD;case 35668:case 35672:return UD;case 35669:case 35673:return ND;case 5125:return OD;case 36294:return FD;case 36295:return BD;case 36296:return kD;case 35678:case 36198:case 36298:case 36306:case 35682:return zD;case 35679:case 36299:case 36307:return HD;case 35680:case 36300:case 36308:case 36293:return VD;case 36289:case 36303:case 36311:case 36292:return GD}}function $D(t,e){t.uniform1fv(this.addr,e)}function XD(t,e){const n=Io(e,this.size,2);t.uniform2fv(this.addr,n)}function jD(t,e){const n=Io(e,this.size,3);t.uniform3fv(this.addr,n)}function YD(t,e){const n=Io(e,this.size,4);t.uniform4fv(this.addr,n)}function qD(t,e){const n=Io(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function KD(t,e){const n=Io(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ZD(t,e){const n=Io(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function JD(t,e){t.uniform1iv(this.addr,e)}function QD(t,e){t.uniform2iv(this.addr,e)}function eI(t,e){t.uniform3iv(this.addr,e)}function tI(t,e){t.uniform4iv(this.addr,e)}function nI(t,e){t.uniform1uiv(this.addr,e)}function iI(t,e){t.uniform2uiv(this.addr,e)}function sI(t,e){t.uniform3uiv(this.addr,e)}function rI(t,e){t.uniform4uiv(this.addr,e)}function oI(t,e,n){const i=this.cache,s=e.length,r=Jc(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||R0,r[o])}function aI(t,e,n){const i=this.cache,s=e.length,r=Jc(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||D0,r[o])}function lI(t,e,n){const i=this.cache,s=e.length,r=Jc(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||I0,r[o])}function cI(t,e,n){const i=this.cache,s=e.length,r=Jc(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||P0,r[o])}function uI(t){switch(t){case 5126:return $D;case 35664:return XD;case 35665:return jD;case 35666:return YD;case 35674:return qD;case 35675:return KD;case 35676:return ZD;case 5124:case 35670:return JD;case 35667:case 35671:return QD;case 35668:case 35672:return eI;case 35669:case 35673:return tI;case 5125:return nI;case 36294:return iI;case 36295:return sI;case 36296:return rI;case 35678:case 36198:case 36298:case 36306:case 35682:return oI;case 35679:case 36299:case 36307:return aI;case 35680:case 36300:case 36308:case 36293:return lI;case 36289:case 36303:case 36311:case 36292:return cI}}class fI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=WD(n.type)}}class dI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uI(n.type)}}class hI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const tf=/(\w+)(\])?(\[|\.)?/g;function ug(t,e){t.seq.push(e),t.map[e.id]=e}function pI(t,e,n){const i=t.name,s=i.length;for(tf.lastIndex=0;;){const r=tf.exec(i),o=tf.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ug(n,c===void 0?new fI(a,t,e):new dI(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new hI(a),ug(n,f)),n=f}}}class ec{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);pI(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function fg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const mI=37297;let gI=0;function _I(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const dg=new ot;function vI(t){gt._getMatrix(dg,gt.workingColorSpace,t);const e=`mat3( ${dg.elements.map(n=>n.toFixed(4))} )`;switch(gt.getTransfer(t)){case yc:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function hg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+_I(t.getShaderSource(e),o)}else return s}function yI(t,e){const n=vI(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function xI(t,e){let n;switch(e){case eC:n="Linear";break;case tC:n="Reinhard";break;case nC:n="Cineon";break;case iC:n="ACESFilmic";break;case rC:n="AgX";break;case oC:n="Neutral";break;case sC:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fl=new X;function bI(){gt.getLuminanceCoefficients(Fl);const t=Fl.x.toFixed(4),e=Fl.y.toFixed(4),n=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function MI(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function EI(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Qo(t){return t!==""}function pg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TI=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(t){return t.replace(TI,AI)}const wI=new Map;function AI(t,e){let n=at[e];if(n===void 0){const i=wI.get(e);if(i!==void 0)n=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gd(n)}const CI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gg(t){return t.replace(CI,RI)}function RI(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _g(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PI(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===LA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function DI(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Mo:case Eo:e="ENVMAP_TYPE_CUBE";break;case Yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function II(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Eo:e="ENVMAP_MODE_REFRACTION";break}return e}function LI(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Jv:e="ENVMAP_BLENDING_MULTIPLY";break;case JA:e="ENVMAP_BLENDING_MIX";break;case QA:e="ENVMAP_BLENDING_ADD";break}return e}function UI(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function NI(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=PI(n),c=DI(n),u=II(n),f=LI(n),d=UI(n),p=SI(n),g=MI(r),m=s.createProgram();let _,h,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Qo).join(`
`),_.length>0&&(_+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Qo).join(`
`),h.length>0&&(h+=`
`)):(_=[_g(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),h=[_g(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Cs?"#define TONE_MAPPING":"",n.toneMapping!==Cs?at.tonemapping_pars_fragment:"",n.toneMapping!==Cs?xI("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,yI("linearToOutputTexel",n.outputColorSpace),bI(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qo).join(`
`)),o=gd(o),o=pg(o,n),o=mg(o,n),a=gd(a),a=pg(a,n),a=mg(a,n),o=gg(o),a=gg(a),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,h=["#define varying in",n.glslVersion===mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=b+_+o,v=b+h+a,P=fg(s,s.VERTEX_SHADER,x),D=fg(s,s.FRAGMENT_SHADER,v);s.attachShader(m,P),s.attachShader(m,D),n.index0AttributeName!==void 0?s.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function A(U){if(t.debug.checkShaderErrors){const k=s.getProgramInfoLog(m).trim(),H=s.getShaderInfoLog(P).trim(),J=s.getShaderInfoLog(D).trim();let se=!0,q=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(se=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,m,P,D);else{const W=hg(s,P,"vertex"),j=hg(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+W+`
`+j)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||J==="")&&(q=!1);q&&(U.diagnostics={runnable:se,programLog:k,vertexShader:{log:H,prefix:_},fragmentShader:{log:J,prefix:h}})}s.deleteShader(P),s.deleteShader(D),T=new ec(s,m),y=EI(s,m)}let T;this.getUniforms=function(){return T===void 0&&A(this),T};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(m,mI)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gI++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=P,this.fragmentShader=D,this}let OI=0;class FI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new BI(e),n.set(e,i)),i}}class BI{constructor(e){this.id=OI++,this.code=e,this.usedTimes=0}}function kI(t,e,n,i,s,r,o){const a=new mh,l=new FI,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,M,U,k,H){const J=k.fog,se=H.geometry,q=y.isMeshStandardMaterial?k.environment:null,W=(y.isMeshStandardMaterial?n:e).get(y.envMap||q),j=W&&W.mapping===Yc?W.image.height:null,ve=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const we=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ie=we!==void 0?we.length:0;let Oe=0;se.morphAttributes.position!==void 0&&(Oe=1),se.morphAttributes.normal!==void 0&&(Oe=2),se.morphAttributes.color!==void 0&&(Oe=3);let Qe,ue,ge,Re;if(ve){const ut=wn[ve];Qe=ut.vertexShader,ue=ut.fragmentShader}else Qe=y.vertexShader,ue=y.fragmentShader,l.update(y),ge=l.getVertexShaderID(y),Re=l.getFragmentShaderID(y);const Te=t.getRenderTarget(),Ue=t.state.buffers.depth.getReversed(),nt=H.isInstancedMesh===!0,ye=H.isBatchedMesh===!0,He=!!y.map,I=!!y.matcap,B=!!W,C=!!y.aoMap,he=!!y.lightMap,ie=!!y.bumpMap,ne=!!y.normalMap,le=!!y.displacementMap,fe=!!y.emissiveMap,ee=!!y.metalnessMap,w=!!y.roughnessMap,S=y.anisotropy>0,z=y.clearcoat>0,Z=y.dispersion>0,O=y.iridescence>0,E=y.sheen>0,F=y.transmission>0,V=S&&!!y.anisotropyMap,G=z&&!!y.clearcoatMap,pe=z&&!!y.clearcoatNormalMap,Q=z&&!!y.clearcoatRoughnessMap,ce=O&&!!y.iridescenceMap,xe=O&&!!y.iridescenceThicknessMap,Ne=E&&!!y.sheenColorMap,be=E&&!!y.sheenRoughnessMap,Be=!!y.specularMap,ke=!!y.specularColorMap,st=!!y.specularIntensityMap,$=F&&!!y.transmissionMap,Se=F&&!!y.thicknessMap,te=!!y.gradientMap,de=!!y.alphaMap,Pe=y.alphaTest>0,Ae=!!y.alphaHash,qe=!!y.extensions;let xt=Cs;y.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(xt=t.toneMapping);const Ut={shaderID:ve,shaderType:y.type,shaderName:y.name,vertexShader:Qe,fragmentShader:ue,defines:y.defines,customVertexShaderID:ge,customFragmentShaderID:Re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:ye,batchingColor:ye&&H._colorsTexture!==null,instancing:nt,instancingColor:nt&&H.instanceColor!==null,instancingMorph:nt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Te===null?t.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:To,alphaToCoverage:!!y.alphaToCoverage,map:He,matcap:I,envMap:B,envMapMode:B&&W.mapping,envMapCubeUVHeight:j,aoMap:C,lightMap:he,bumpMap:ie,normalMap:ne,displacementMap:d&&le,emissiveMap:fe,normalMapObjectSpace:ne&&y.normalMapType===uC,normalMapTangentSpace:ne&&y.normalMapType===u0,metalnessMap:ee,roughnessMap:w,anisotropy:S,anisotropyMap:V,clearcoat:z,clearcoatMap:G,clearcoatNormalMap:pe,clearcoatRoughnessMap:Q,dispersion:Z,iridescence:O,iridescenceMap:ce,iridescenceThicknessMap:xe,sheen:E,sheenColorMap:Ne,sheenRoughnessMap:be,specularMap:Be,specularColorMap:ke,specularIntensityMap:st,transmission:F,transmissionMap:$,thicknessMap:Se,gradientMap:te,opaque:y.transparent===!1&&y.blending===uo&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:Pe,alphaHash:Ae,combine:y.combine,mapUv:He&&m(y.map.channel),aoMapUv:C&&m(y.aoMap.channel),lightMapUv:he&&m(y.lightMap.channel),bumpMapUv:ie&&m(y.bumpMap.channel),normalMapUv:ne&&m(y.normalMap.channel),displacementMapUv:le&&m(y.displacementMap.channel),emissiveMapUv:fe&&m(y.emissiveMap.channel),metalnessMapUv:ee&&m(y.metalnessMap.channel),roughnessMapUv:w&&m(y.roughnessMap.channel),anisotropyMapUv:V&&m(y.anisotropyMap.channel),clearcoatMapUv:G&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(y.sheenRoughnessMap.channel),specularMapUv:Be&&m(y.specularMap.channel),specularColorMapUv:ke&&m(y.specularColorMap.channel),specularIntensityMapUv:st&&m(y.specularIntensityMap.channel),transmissionMapUv:$&&m(y.transmissionMap.channel),thicknessMapUv:Se&&m(y.thicknessMap.channel),alphaMapUv:de&&m(y.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(ne||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!se.attributes.uv&&(He||de),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ue,skinning:H.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:xt,decodeVideoTexture:He&&y.map.isVideoTexture===!0&&gt.getTransfer(y.map.colorSpace)===St,decodeVideoTextureEmissive:fe&&y.emissiveMap.isVideoTexture===!0&&gt.getTransfer(y.emissiveMap.colorSpace)===St,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mi,flipSided:y.side===Pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:qe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&y.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function h(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)M.push(U),M.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(b(M,y),x(M,y),M.push(t.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function b(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function x(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const M=g[y.type];let U;if(M){const k=wn[M];U=gh.clone(k.uniforms)}else U=y.uniforms;return U}function P(y,M){let U;for(let k=0,H=u.length;k<H;k++){const J=u[k];if(J.cacheKey===M){U=J,++U.usedTimes;break}}return U===void 0&&(U=new NI(t,M,y,r),u.push(U)),U}function D(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function T(){l.dispose()}return{getParameters:_,getProgramCacheKey:h,getUniforms:v,acquireProgram:P,releaseProgram:D,releaseShaderCache:A,programs:u,dispose:T}}function zI(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function HI(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function vg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function yg(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f,d,p,g,m,_){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:m,group:_},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=m,h.group=_),e++,h}function a(f,d,p,g,m,_){const h=o(f,d,p,g,m,_);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):n.push(h)}function l(f,d,p,g,m,_){const h=o(f,d,p,g,m,_);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||HI),i.length>1&&i.sort(d||vg),s.length>1&&s.sort(d||vg)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function VI(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new yg,t.set(i,[o])):s>=r.length?(o=new yg,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function GI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new it};break;case"SpotLight":n={position:new X,direction:new X,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function WI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let $I=0;function XI(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function jI(t){const e=new GI,n=WI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const s=new X,r=new Ct,o=new Ct;function a(c){let u=0,f=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,m=0,_=0,h=0,b=0,x=0,v=0,P=0,D=0,A=0;c.sort(XI);for(let y=0,M=c.length;y<M;y++){const U=c[y],k=U.color,H=U.intensity,J=U.distance,se=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=k.r*H,f+=k.g*H,d+=k.b*H;else if(U.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(U.sh.coefficients[q],H);A++}else if(U.isDirectionalLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const W=U.shadow,j=n.get(U);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=se,i.directionalShadowMatrix[p]=U.shadow.matrix,b++}i.directional[p]=q,p++}else if(U.isSpotLight){const q=e.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(k).multiplyScalar(H),q.distance=J,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,i.spot[m]=q;const W=U.shadow;if(U.map&&(i.spotLightMap[P]=U.map,P++,W.updateMatrices(U),U.castShadow&&D++),i.spotLightMatrix[m]=W.matrix,U.castShadow){const j=n.get(U);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,i.spotShadow[m]=j,i.spotShadowMap[m]=se,v++}m++}else if(U.isRectAreaLight){const q=e.get(U);q.color.copy(k).multiplyScalar(H),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),i.rectArea[_]=q,_++}else if(U.isPointLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),q.distance=U.distance,q.decay=U.decay,U.castShadow){const W=U.shadow,j=n.get(U);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=se,i.pointShadowMatrix[g]=U.shadow.matrix,x++}i.point[g]=q,g++}else if(U.isHemisphereLight){const q=e.get(U);q.skyColor.copy(U.color).multiplyScalar(H),q.groundColor.copy(U.groundColor).multiplyScalar(H),i.hemi[h]=q,h++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const T=i.hash;(T.directionalLength!==p||T.pointLength!==g||T.spotLength!==m||T.rectAreaLength!==_||T.hemiLength!==h||T.numDirectionalShadows!==b||T.numPointShadows!==x||T.numSpotShadows!==v||T.numSpotMaps!==P||T.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=m,i.rectArea.length=_,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+P-D,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=A,T.directionalLength=p,T.pointLength=g,T.spotLength=m,T.rectAreaLength=_,T.hemiLength=h,T.numDirectionalShadows=b,T.numPointShadows=x,T.numSpotShadows=v,T.numSpotMaps=P,T.numLightProbes=A,i.version=$I++)}function l(c,u){let f=0,d=0,p=0,g=0,m=0;const _=u.matrixWorldInverse;for(let h=0,b=c.length;h<b;h++){const x=c[h];if(x.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),f++}else if(x.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),p++}else if(x.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),o.identity(),r.copy(x.matrixWorld),r.premultiply(_),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),d++}else if(x.isHemisphereLight){const v=i.hemi[m];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(_),m++}}}return{setup:a,setupView:l,state:i}}function xg(t){const e=new jI(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function YI(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new xg(t),e.set(s,[a])):r>=o.length?(a=new xg(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const qI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KI=`uniform sampler2D shadow_pass;
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
}`;function ZI(t,e,n){let i=new _h;const s=new Ve,r=new Ve,o=new wt,a=new mR({depthPacking:cC}),l=new gR,c={},u=n.maxTextureSize,f={[Rs]:Pn,[Pn]:Rs,[Mi]:Mi},d=new rs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:qI,fragmentShader:KI}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Mn;g.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new An(g,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zv;let h=this.type;this.render=function(D,A,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;const y=t.getRenderTarget(),M=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),k=t.state;k.setBlending(As),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=h!==Bi&&this.type===Bi,J=h===Bi&&this.type!==Bi;for(let se=0,q=D.length;se<q;se++){const W=D[se],j=W.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const ve=j.getFrameExtents();if(s.multiply(ve),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ve.x),s.x=r.x*ve.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ve.y),s.y=r.y*ve.y,j.mapSize.y=r.y)),j.map===null||H===!0||J===!0){const Ie=this.type!==Bi?{minFilter:fi,magFilter:fi}:{};j.map!==null&&j.map.dispose(),j.map=new yr(s.x,s.y,Ie),j.map.texture.name=W.name+".shadowMap",j.camera.updateProjectionMatrix()}t.setRenderTarget(j.map),t.clear();const we=j.getViewportCount();for(let Ie=0;Ie<we;Ie++){const Oe=j.getViewport(Ie);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),k.viewport(o),j.updateMatrices(W,Ie),i=j.getFrustum(),v(A,T,j.camera,W,this.type)}j.isPointLightShadow!==!0&&this.type===Bi&&b(j,T),j.needsUpdate=!1}h=this.type,_.needsUpdate=!1,t.setRenderTarget(y,M,U)};function b(D,A){const T=e.update(m);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new yr(s.x,s.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,t.setRenderTarget(D.mapPass),t.clear(),t.renderBufferDirect(A,null,T,d,m,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,t.setRenderTarget(D.map),t.clear(),t.renderBufferDirect(A,null,T,p,m,null)}function x(D,A,T,y){let M=null;const U=T.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(U!==void 0)M=U;else if(M=T.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=M.uuid,H=A.uuid;let J=c[k];J===void 0&&(J={},c[k]=J);let se=J[H];se===void 0&&(se=M.clone(),J[H]=se,A.addEventListener("dispose",P)),M=se}if(M.visible=A.visible,M.wireframe=A.wireframe,y===Bi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=t.properties.get(M);k.light=T}return M}function v(D,A,T,y,M){if(D.visible===!1)return;if(D.layers.test(A.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===Bi)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,D.matrixWorld);const H=e.update(D),J=D.material;if(Array.isArray(J)){const se=H.groups;for(let q=0,W=se.length;q<W;q++){const j=se[q],ve=J[j.materialIndex];if(ve&&ve.visible){const we=x(D,ve,y,M);D.onBeforeShadow(t,D,A,T,H,we,j),t.renderBufferDirect(T,null,H,we,D,j),D.onAfterShadow(t,D,A,T,H,we,j)}}}else if(J.visible){const se=x(D,J,y,M);D.onBeforeShadow(t,D,A,T,H,se,null),t.renderBufferDirect(T,null,H,se,D,null),D.onAfterShadow(t,D,A,T,H,se,null)}}const k=D.children;for(let H=0,J=k.length;H<J;H++)v(k[H],A,T,y,M)}function P(D){D.target.removeEventListener("dispose",P);for(const T in c){const y=c[T],M=D.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const JI={[Df]:If,[Lf]:Of,[Uf]:Ff,[So]:Nf,[If]:Df,[Of]:Lf,[Ff]:Uf,[Nf]:So};function QI(t,e){function n(){let $=!1;const Se=new wt;let te=null;const de=new wt(0,0,0,0);return{setMask:function(Pe){te!==Pe&&!$&&(t.colorMask(Pe,Pe,Pe,Pe),te=Pe)},setLocked:function(Pe){$=Pe},setClear:function(Pe,Ae,qe,xt,Ut){Ut===!0&&(Pe*=xt,Ae*=xt,qe*=xt),Se.set(Pe,Ae,qe,xt),de.equals(Se)===!1&&(t.clearColor(Pe,Ae,qe,xt),de.copy(Se))},reset:function(){$=!1,te=null,de.set(-1,0,0,0)}}}function i(){let $=!1,Se=!1,te=null,de=null,Pe=null;return{setReversed:function(Ae){if(Se!==Ae){const qe=e.get("EXT_clip_control");Ae?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Se=Ae;const xt=Pe;Pe=null,this.setClear(xt)}},getReversed:function(){return Se},setTest:function(Ae){Ae?Te(t.DEPTH_TEST):Ue(t.DEPTH_TEST)},setMask:function(Ae){te!==Ae&&!$&&(t.depthMask(Ae),te=Ae)},setFunc:function(Ae){if(Se&&(Ae=JI[Ae]),de!==Ae){switch(Ae){case Df:t.depthFunc(t.NEVER);break;case If:t.depthFunc(t.ALWAYS);break;case Lf:t.depthFunc(t.LESS);break;case So:t.depthFunc(t.LEQUAL);break;case Uf:t.depthFunc(t.EQUAL);break;case Nf:t.depthFunc(t.GEQUAL);break;case Of:t.depthFunc(t.GREATER);break;case Ff:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=Ae}},setLocked:function(Ae){$=Ae},setClear:function(Ae){Pe!==Ae&&(Se&&(Ae=1-Ae),t.clearDepth(Ae),Pe=Ae)},reset:function(){$=!1,te=null,de=null,Pe=null,Se=!1}}}function s(){let $=!1,Se=null,te=null,de=null,Pe=null,Ae=null,qe=null,xt=null,Ut=null;return{setTest:function(ut){$||(ut?Te(t.STENCIL_TEST):Ue(t.STENCIL_TEST))},setMask:function(ut){Se!==ut&&!$&&(t.stencilMask(ut),Se=ut)},setFunc:function(ut,Ot,pn){(te!==ut||de!==Ot||Pe!==pn)&&(t.stencilFunc(ut,Ot,pn),te=ut,de=Ot,Pe=pn)},setOp:function(ut,Ot,pn){(Ae!==ut||qe!==Ot||xt!==pn)&&(t.stencilOp(ut,Ot,pn),Ae=ut,qe=Ot,xt=pn)},setLocked:function(ut){$=ut},setClear:function(ut){Ut!==ut&&(t.clearStencil(ut),Ut=ut)},reset:function(){$=!1,Se=null,te=null,de=null,Pe=null,Ae=null,qe=null,xt=null,Ut=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,m=!1,_=null,h=null,b=null,x=null,v=null,P=null,D=null,A=new it(0,0,0),T=0,y=!1,M=null,U=null,k=null,H=null,J=null;const se=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,W=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=W>=2);let ve=null,we={};const Ie=t.getParameter(t.SCISSOR_BOX),Oe=t.getParameter(t.VIEWPORT),Qe=new wt().fromArray(Ie),ue=new wt().fromArray(Oe);function ge($,Se,te,de){const Pe=new Uint8Array(4),Ae=t.createTexture();t.bindTexture($,Ae),t.texParameteri($,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri($,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<te;qe++)$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?t.texImage3D(Se,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,Pe):t.texImage2D(Se+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Pe);return Ae}const Re={};Re[t.TEXTURE_2D]=ge(t.TEXTURE_2D,t.TEXTURE_2D,1),Re[t.TEXTURE_CUBE_MAP]=ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[t.TEXTURE_2D_ARRAY]=ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Re[t.TEXTURE_3D]=ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Te(t.DEPTH_TEST),o.setFunc(So),ie(!1),ne(um),Te(t.CULL_FACE),C(As);function Te($){u[$]!==!0&&(t.enable($),u[$]=!0)}function Ue($){u[$]!==!1&&(t.disable($),u[$]=!1)}function nt($,Se){return f[$]!==Se?(t.bindFramebuffer($,Se),f[$]=Se,$===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Se),$===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Se),!0):!1}function ye($,Se){let te=p,de=!1;if($){te=d.get(Se),te===void 0&&(te=[],d.set(Se,te));const Pe=$.textures;if(te.length!==Pe.length||te[0]!==t.COLOR_ATTACHMENT0){for(let Ae=0,qe=Pe.length;Ae<qe;Ae++)te[Ae]=t.COLOR_ATTACHMENT0+Ae;te.length=Pe.length,de=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,de=!0);de&&t.drawBuffers(te)}function He($){return g!==$?(t.useProgram($),g=$,!0):!1}const I={[Qs]:t.FUNC_ADD,[NA]:t.FUNC_SUBTRACT,[OA]:t.FUNC_REVERSE_SUBTRACT};I[FA]=t.MIN,I[BA]=t.MAX;const B={[kA]:t.ZERO,[zA]:t.ONE,[HA]:t.SRC_COLOR,[Rf]:t.SRC_ALPHA,[jA]:t.SRC_ALPHA_SATURATE,[$A]:t.DST_COLOR,[GA]:t.DST_ALPHA,[VA]:t.ONE_MINUS_SRC_COLOR,[Pf]:t.ONE_MINUS_SRC_ALPHA,[XA]:t.ONE_MINUS_DST_COLOR,[WA]:t.ONE_MINUS_DST_ALPHA,[YA]:t.CONSTANT_COLOR,[qA]:t.ONE_MINUS_CONSTANT_COLOR,[KA]:t.CONSTANT_ALPHA,[ZA]:t.ONE_MINUS_CONSTANT_ALPHA};function C($,Se,te,de,Pe,Ae,qe,xt,Ut,ut){if($===As){m===!0&&(Ue(t.BLEND),m=!1);return}if(m===!1&&(Te(t.BLEND),m=!0),$!==UA){if($!==_||ut!==y){if((h!==Qs||v!==Qs)&&(t.blendEquation(t.FUNC_ADD),h=Qs,v=Qs),ut)switch($){case uo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fm:t.blendFunc(t.ONE,t.ONE);break;case dm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case uo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case dm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}b=null,x=null,P=null,D=null,A.set(0,0,0),T=0,_=$,y=ut}return}Pe=Pe||Se,Ae=Ae||te,qe=qe||de,(Se!==h||Pe!==v)&&(t.blendEquationSeparate(I[Se],I[Pe]),h=Se,v=Pe),(te!==b||de!==x||Ae!==P||qe!==D)&&(t.blendFuncSeparate(B[te],B[de],B[Ae],B[qe]),b=te,x=de,P=Ae,D=qe),(xt.equals(A)===!1||Ut!==T)&&(t.blendColor(xt.r,xt.g,xt.b,Ut),A.copy(xt),T=Ut),_=$,y=!1}function he($,Se){$.side===Mi?Ue(t.CULL_FACE):Te(t.CULL_FACE);let te=$.side===Pn;Se&&(te=!te),ie(te),$.blending===uo&&$.transparent===!1?C(As):C($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),r.setMask($.colorWrite);const de=$.stencilWrite;a.setTest(de),de&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),fe($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?Te(t.SAMPLE_ALPHA_TO_COVERAGE):Ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function ie($){M!==$&&($?t.frontFace(t.CW):t.frontFace(t.CCW),M=$)}function ne($){$!==DA?(Te(t.CULL_FACE),$!==U&&($===um?t.cullFace(t.BACK):$===IA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ue(t.CULL_FACE),U=$}function le($){$!==k&&(q&&t.lineWidth($),k=$)}function fe($,Se,te){$?(Te(t.POLYGON_OFFSET_FILL),(H!==Se||J!==te)&&(t.polygonOffset(Se,te),H=Se,J=te)):Ue(t.POLYGON_OFFSET_FILL)}function ee($){$?Te(t.SCISSOR_TEST):Ue(t.SCISSOR_TEST)}function w($){$===void 0&&($=t.TEXTURE0+se-1),ve!==$&&(t.activeTexture($),ve=$)}function S($,Se,te){te===void 0&&(ve===null?te=t.TEXTURE0+se-1:te=ve);let de=we[te];de===void 0&&(de={type:void 0,texture:void 0},we[te]=de),(de.type!==$||de.texture!==Se)&&(ve!==te&&(t.activeTexture(te),ve=te),t.bindTexture($,Se||Re[$]),de.type=$,de.texture=Se)}function z(){const $=we[ve];$!==void 0&&$.type!==void 0&&(t.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function Z(){try{t.compressedTexImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function O(){try{t.compressedTexImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function E(){try{t.texSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function F(){try{t.texSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function V(){try{t.compressedTexSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function G(){try{t.compressedTexSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function pe(){try{t.texStorage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Q(){try{t.texStorage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ce(){try{t.texImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function xe(){try{t.texImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ne($){Qe.equals($)===!1&&(t.scissor($.x,$.y,$.z,$.w),Qe.copy($))}function be($){ue.equals($)===!1&&(t.viewport($.x,$.y,$.z,$.w),ue.copy($))}function Be($,Se){let te=c.get(Se);te===void 0&&(te=new WeakMap,c.set(Se,te));let de=te.get($);de===void 0&&(de=t.getUniformBlockIndex(Se,$.name),te.set($,de))}function ke($,Se){const de=c.get(Se).get($);l.get(Se)!==de&&(t.uniformBlockBinding(Se,de,$.__bindingPointIndex),l.set(Se,de))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ve=null,we={},f={},d=new WeakMap,p=[],g=null,m=!1,_=null,h=null,b=null,x=null,v=null,P=null,D=null,A=new it(0,0,0),T=0,y=!1,M=null,U=null,k=null,H=null,J=null,Qe.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Te,disable:Ue,bindFramebuffer:nt,drawBuffers:ye,useProgram:He,setBlending:C,setMaterial:he,setFlipSided:ie,setCullFace:ne,setLineWidth:le,setPolygonOffset:fe,setScissorTest:ee,activeTexture:w,bindTexture:S,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:O,texImage2D:ce,texImage3D:xe,updateUBOMapping:Be,uniformBlockBinding:ke,texStorage2D:pe,texStorage3D:Q,texSubImage2D:E,texSubImage3D:F,compressedTexSubImage2D:V,compressedTexSubImage3D:G,scissor:Ne,viewport:be,reset:st}}function eL(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return p?new OffscreenCanvas(w,S):bc("canvas")}function m(w,S,z){let Z=1;const O=ee(w);if((O.width>z||O.height>z)&&(Z=z/Math.max(O.width,O.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const E=Math.floor(Z*O.width),F=Math.floor(Z*O.height);f===void 0&&(f=g(E,F));const V=S?g(E,F):f;return V.width=E,V.height=F,V.getContext("2d").drawImage(w,0,0,E,F),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+E+"x"+F+")."),V}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),w;return w}function _(w){return w.generateMipmaps}function h(w){t.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(w,S,z,Z,O=!1){if(w!==null){if(t[w]!==void 0)return t[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let E=S;if(S===t.RED&&(z===t.FLOAT&&(E=t.R32F),z===t.HALF_FLOAT&&(E=t.R16F),z===t.UNSIGNED_BYTE&&(E=t.R8)),S===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(E=t.R8UI),z===t.UNSIGNED_SHORT&&(E=t.R16UI),z===t.UNSIGNED_INT&&(E=t.R32UI),z===t.BYTE&&(E=t.R8I),z===t.SHORT&&(E=t.R16I),z===t.INT&&(E=t.R32I)),S===t.RG&&(z===t.FLOAT&&(E=t.RG32F),z===t.HALF_FLOAT&&(E=t.RG16F),z===t.UNSIGNED_BYTE&&(E=t.RG8)),S===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(E=t.RG8UI),z===t.UNSIGNED_SHORT&&(E=t.RG16UI),z===t.UNSIGNED_INT&&(E=t.RG32UI),z===t.BYTE&&(E=t.RG8I),z===t.SHORT&&(E=t.RG16I),z===t.INT&&(E=t.RG32I)),S===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(E=t.RGB8UI),z===t.UNSIGNED_SHORT&&(E=t.RGB16UI),z===t.UNSIGNED_INT&&(E=t.RGB32UI),z===t.BYTE&&(E=t.RGB8I),z===t.SHORT&&(E=t.RGB16I),z===t.INT&&(E=t.RGB32I)),S===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(E=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(E=t.RGBA16UI),z===t.UNSIGNED_INT&&(E=t.RGBA32UI),z===t.BYTE&&(E=t.RGBA8I),z===t.SHORT&&(E=t.RGBA16I),z===t.INT&&(E=t.RGBA32I)),S===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(E=t.RGB9_E5),S===t.RGBA){const F=O?yc:gt.getTransfer(Z);z===t.FLOAT&&(E=t.RGBA32F),z===t.HALF_FLOAT&&(E=t.RGBA16F),z===t.UNSIGNED_BYTE&&(E=F===St?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(E=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(E=t.RGB5_A1)}return(E===t.R16F||E===t.R32F||E===t.RG16F||E===t.RG32F||E===t.RGBA16F||E===t.RGBA32F)&&e.get("EXT_color_buffer_float"),E}function v(w,S){let z;return w?S===null||S===vr||S===Ca?z=t.DEPTH24_STENCIL8:S===Xi?z=t.DEPTH32F_STENCIL8:S===Aa&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vr||S===Ca?z=t.DEPTH_COMPONENT24:S===Xi?z=t.DEPTH_COMPONENT32F:S===Aa&&(z=t.DEPTH_COMPONENT16),z}function P(w,S){return _(w)===!0||w.isFramebufferTexture&&w.minFilter!==fi&&w.minFilter!==Ti?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function D(w){const S=w.target;S.removeEventListener("dispose",D),T(S),S.isVideoTexture&&u.delete(S)}function A(w){const S=w.target;S.removeEventListener("dispose",A),M(S)}function T(w){const S=i.get(w);if(S.__webglInit===void 0)return;const z=w.source,Z=d.get(z);if(Z){const O=Z[S.__cacheKey];O.usedTimes--,O.usedTimes===0&&y(w),Object.keys(Z).length===0&&d.delete(z)}i.remove(w)}function y(w){const S=i.get(w);t.deleteTexture(S.__webglTexture);const z=w.source,Z=d.get(z);delete Z[S.__cacheKey],o.memory.textures--}function M(w){const S=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let O=0;O<S.__webglFramebuffer[Z].length;O++)t.deleteFramebuffer(S.__webglFramebuffer[Z][O]);else t.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)t.deleteFramebuffer(S.__webglFramebuffer[Z]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=w.textures;for(let Z=0,O=z.length;Z<O;Z++){const E=i.get(z[Z]);E.__webglTexture&&(t.deleteTexture(E.__webglTexture),o.memory.textures--),i.remove(z[Z])}i.remove(w)}let U=0;function k(){U=0}function H(){const w=U;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),U+=1,w}function J(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function se(w,S){const z=i.get(w);if(w.isVideoTexture&&le(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(z,w,S);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+S)}function q(w,S){const z=i.get(w);if(w.version>0&&z.__version!==w.version){ue(z,w,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+S)}function W(w,S){const z=i.get(w);if(w.version>0&&z.__version!==w.version){ue(z,w,S);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+S)}function j(w,S){const z=i.get(w);if(w.version>0&&z.__version!==w.version){ge(z,w,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+S)}const ve={[wa]:t.REPEAT,[rr]:t.CLAMP_TO_EDGE,[zf]:t.MIRRORED_REPEAT},we={[fi]:t.NEAREST,[aC]:t.NEAREST_MIPMAP_NEAREST,[al]:t.NEAREST_MIPMAP_LINEAR,[Ti]:t.LINEAR,[Su]:t.LINEAR_MIPMAP_NEAREST,[or]:t.LINEAR_MIPMAP_LINEAR},Ie={[fC]:t.NEVER,[_C]:t.ALWAYS,[dC]:t.LESS,[f0]:t.LEQUAL,[hC]:t.EQUAL,[gC]:t.GEQUAL,[pC]:t.GREATER,[mC]:t.NOTEQUAL};function Oe(w,S){if(S.type===Xi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ti||S.magFilter===Su||S.magFilter===al||S.magFilter===or||S.minFilter===Ti||S.minFilter===Su||S.minFilter===al||S.minFilter===or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,ve[S.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,ve[S.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,ve[S.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,we[S.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,we[S.minFilter]),S.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,Ie[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===fi||S.minFilter!==al&&S.minFilter!==or||S.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Qe(w,S){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",D));const Z=S.source;let O=d.get(Z);O===void 0&&(O={},d.set(Z,O));const E=J(S);if(E!==w.__cacheKey){O[E]===void 0&&(O[E]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),O[E].usedTimes++;const F=O[w.__cacheKey];F!==void 0&&(O[w.__cacheKey].usedTimes--,F.usedTimes===0&&y(S)),w.__cacheKey=E,w.__webglTexture=O[E].texture}return z}function ue(w,S,z){let Z=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=t.TEXTURE_3D);const O=Qe(w,S),E=S.source;n.bindTexture(Z,w.__webglTexture,t.TEXTURE0+z);const F=i.get(E);if(E.version!==F.__version||O===!0){n.activeTexture(t.TEXTURE0+z);const V=gt.getPrimaries(gt.workingColorSpace),G=S.colorSpace===Es?null:gt.getPrimaries(S.colorSpace),pe=S.colorSpace===Es||V===G?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Q=m(S.image,!1,s.maxTextureSize);Q=fe(S,Q);const ce=r.convert(S.format,S.colorSpace),xe=r.convert(S.type);let Ne=x(S.internalFormat,ce,xe,S.colorSpace,S.isVideoTexture);Oe(Z,S);let be;const Be=S.mipmaps,ke=S.isVideoTexture!==!0,st=F.__version===void 0||O===!0,$=E.dataReady,Se=P(S,Q);if(S.isDepthTexture)Ne=v(S.format===Pa,S.type),st&&(ke?n.texStorage2D(t.TEXTURE_2D,1,Ne,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,Ne,Q.width,Q.height,0,ce,xe,null));else if(S.isDataTexture)if(Be.length>0){ke&&st&&n.texStorage2D(t.TEXTURE_2D,Se,Ne,Be[0].width,Be[0].height);for(let te=0,de=Be.length;te<de;te++)be=Be[te],ke?$&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,be.width,be.height,ce,xe,be.data):n.texImage2D(t.TEXTURE_2D,te,Ne,be.width,be.height,0,ce,xe,be.data);S.generateMipmaps=!1}else ke?(st&&n.texStorage2D(t.TEXTURE_2D,Se,Ne,Q.width,Q.height),$&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Q.width,Q.height,ce,xe,Q.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,Q.width,Q.height,0,ce,xe,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ke&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Ne,Be[0].width,Be[0].height,Q.depth);for(let te=0,de=Be.length;te<de;te++)if(be=Be[te],S.format!==ci)if(ce!==null)if(ke){if($)if(S.layerUpdates.size>0){const Pe=Km(be.width,be.height,S.format,S.type);for(const Ae of S.layerUpdates){const qe=be.data.subarray(Ae*Pe/be.data.BYTES_PER_ELEMENT,(Ae+1)*Pe/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,Ae,be.width,be.height,1,ce,qe)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,be.width,be.height,Q.depth,ce,be.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,Ne,be.width,be.height,Q.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?$&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,be.width,be.height,Q.depth,ce,xe,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,Ne,be.width,be.height,Q.depth,0,ce,xe,be.data)}else{ke&&st&&n.texStorage2D(t.TEXTURE_2D,Se,Ne,Be[0].width,Be[0].height);for(let te=0,de=Be.length;te<de;te++)be=Be[te],S.format!==ci?ce!==null?ke?$&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,be.width,be.height,ce,be.data):n.compressedTexImage2D(t.TEXTURE_2D,te,Ne,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?$&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,be.width,be.height,ce,xe,be.data):n.texImage2D(t.TEXTURE_2D,te,Ne,be.width,be.height,0,ce,xe,be.data)}else if(S.isDataArrayTexture)if(ke){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Ne,Q.width,Q.height,Q.depth),$)if(S.layerUpdates.size>0){const te=Km(Q.width,Q.height,S.format,S.type);for(const de of S.layerUpdates){const Pe=Q.data.subarray(de*te/Q.data.BYTES_PER_ELEMENT,(de+1)*te/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,Q.width,Q.height,1,ce,xe,Pe)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ce,xe,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,Q.width,Q.height,Q.depth,0,ce,xe,Q.data);else if(S.isData3DTexture)ke?(st&&n.texStorage3D(t.TEXTURE_3D,Se,Ne,Q.width,Q.height,Q.depth),$&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ce,xe,Q.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,Q.width,Q.height,Q.depth,0,ce,xe,Q.data);else if(S.isFramebufferTexture){if(st)if(ke)n.texStorage2D(t.TEXTURE_2D,Se,Ne,Q.width,Q.height);else{let te=Q.width,de=Q.height;for(let Pe=0;Pe<Se;Pe++)n.texImage2D(t.TEXTURE_2D,Pe,Ne,te,de,0,ce,xe,null),te>>=1,de>>=1}}else if(Be.length>0){if(ke&&st){const te=ee(Be[0]);n.texStorage2D(t.TEXTURE_2D,Se,Ne,te.width,te.height)}for(let te=0,de=Be.length;te<de;te++)be=Be[te],ke?$&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ce,xe,be):n.texImage2D(t.TEXTURE_2D,te,Ne,ce,xe,be);S.generateMipmaps=!1}else if(ke){if(st){const te=ee(Q);n.texStorage2D(t.TEXTURE_2D,Se,Ne,te.width,te.height)}$&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,xe,Q)}else n.texImage2D(t.TEXTURE_2D,0,Ne,ce,xe,Q);_(S)&&h(Z),F.__version=E.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ge(w,S,z){if(S.image.length!==6)return;const Z=Qe(w,S),O=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+z);const E=i.get(O);if(O.version!==E.__version||Z===!0){n.activeTexture(t.TEXTURE0+z);const F=gt.getPrimaries(gt.workingColorSpace),V=S.colorSpace===Es?null:gt.getPrimaries(S.colorSpace),G=S.colorSpace===Es||F===V?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);const pe=S.isCompressedTexture||S.image[0].isCompressedTexture,Q=S.image[0]&&S.image[0].isDataTexture,ce=[];for(let de=0;de<6;de++)!pe&&!Q?ce[de]=m(S.image[de],!0,s.maxCubemapSize):ce[de]=Q?S.image[de].image:S.image[de],ce[de]=fe(S,ce[de]);const xe=ce[0],Ne=r.convert(S.format,S.colorSpace),be=r.convert(S.type),Be=x(S.internalFormat,Ne,be,S.colorSpace),ke=S.isVideoTexture!==!0,st=E.__version===void 0||Z===!0,$=O.dataReady;let Se=P(S,xe);Oe(t.TEXTURE_CUBE_MAP,S);let te;if(pe){ke&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,Be,xe.width,xe.height);for(let de=0;de<6;de++){te=ce[de].mipmaps;for(let Pe=0;Pe<te.length;Pe++){const Ae=te[Pe];S.format!==ci?Ne!==null?ke?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,Ae.width,Ae.height,Ne,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,Be,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,Ae.width,Ae.height,Ne,be,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,Be,Ae.width,Ae.height,0,Ne,be,Ae.data)}}}else{if(te=S.mipmaps,ke&&st){te.length>0&&Se++;const de=ee(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,Be,de.width,de.height)}for(let de=0;de<6;de++)if(Q){ke?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ce[de].width,ce[de].height,Ne,be,ce[de].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Be,ce[de].width,ce[de].height,0,Ne,be,ce[de].data);for(let Pe=0;Pe<te.length;Pe++){const qe=te[Pe].image[de].image;ke?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,qe.width,qe.height,Ne,be,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,Be,qe.width,qe.height,0,Ne,be,qe.data)}}else{ke?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ne,be,ce[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Be,Ne,be,ce[de]);for(let Pe=0;Pe<te.length;Pe++){const Ae=te[Pe];ke?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,Ne,be,Ae.image[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,Be,Ne,be,Ae.image[de])}}}_(S)&&h(t.TEXTURE_CUBE_MAP),E.__version=O.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Re(w,S,z,Z,O,E){const F=r.convert(z.format,z.colorSpace),V=r.convert(z.type),G=x(z.internalFormat,F,V,z.colorSpace),pe=i.get(S),Q=i.get(z);if(Q.__renderTarget=S,!pe.__hasExternalTextures){const ce=Math.max(1,S.width>>E),xe=Math.max(1,S.height>>E);O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?n.texImage3D(O,E,G,ce,xe,S.depth,0,F,V,null):n.texImage2D(O,E,G,ce,xe,0,F,V,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),ne(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,O,Q.__webglTexture,0,ie(S)):(O===t.TEXTURE_2D||O>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,O,Q.__webglTexture,E),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(w,S,z){if(t.bindRenderbuffer(t.RENDERBUFFER,w),S.depthBuffer){const Z=S.depthTexture,O=Z&&Z.isDepthTexture?Z.type:null,E=v(S.stencilBuffer,O),F=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=ie(S);ne(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,V,E,S.width,S.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,V,E,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,E,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,F,t.RENDERBUFFER,w)}else{const Z=S.textures;for(let O=0;O<Z.length;O++){const E=Z[O],F=r.convert(E.format,E.colorSpace),V=r.convert(E.type),G=x(E.internalFormat,F,V,E.colorSpace),pe=ie(S);z&&ne(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,G,S.width,S.height):ne(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,G,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,G,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ue(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),se(S.depthTexture,0);const O=Z.__webglTexture,E=ie(S);if(S.depthTexture.format===Ra)ne(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,O,0,E):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,O,0);else if(S.depthTexture.format===Pa)ne(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,O,0,E):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function nt(w){const S=i.get(w),z=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const O=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",O)};Z.addEventListener("dispose",O),S.__depthDisposeCallback=O}S.__boundDepthTexture=Z}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ue(S.__webglFramebuffer,w)}else if(z){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=t.createRenderbuffer(),Te(S.__webglDepthbuffer[Z],w,!1);else{const O=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,E=S.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,E),t.framebufferRenderbuffer(t.FRAMEBUFFER,O,t.RENDERBUFFER,E)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Te(S.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,O=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,O),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,O)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ye(w,S,z){const Z=i.get(w);S!==void 0&&Re(Z.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&nt(w)}function He(w){const S=w.texture,z=i.get(w),Z=i.get(S);w.addEventListener("dispose",A);const O=w.textures,E=w.isWebGLCubeRenderTarget===!0,F=O.length>1;if(F||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=S.version,o.memory.textures++),E){z.__webglFramebuffer=[];for(let V=0;V<6;V++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[V]=[];for(let G=0;G<S.mipmaps.length;G++)z.__webglFramebuffer[V][G]=t.createFramebuffer()}else z.__webglFramebuffer[V]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let V=0;V<S.mipmaps.length;V++)z.__webglFramebuffer[V]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(F)for(let V=0,G=O.length;V<G;V++){const pe=i.get(O[V]);pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture(),o.memory.textures++)}if(w.samples>0&&ne(w)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let V=0;V<O.length;V++){const G=O[V];z.__webglColorRenderbuffer[V]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[V]);const pe=r.convert(G.format,G.colorSpace),Q=r.convert(G.type),ce=x(G.internalFormat,pe,Q,G.colorSpace,w.isXRRenderTarget===!0),xe=ie(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,ce,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+V,t.RENDERBUFFER,z.__webglColorRenderbuffer[V])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Te(z.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(E){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,S);for(let V=0;V<6;V++)if(S.mipmaps&&S.mipmaps.length>0)for(let G=0;G<S.mipmaps.length;G++)Re(z.__webglFramebuffer[V][G],w,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+V,G);else Re(z.__webglFramebuffer[V],w,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);_(S)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(F){for(let V=0,G=O.length;V<G;V++){const pe=O[V],Q=i.get(pe);n.bindTexture(t.TEXTURE_2D,Q.__webglTexture),Oe(t.TEXTURE_2D,pe),Re(z.__webglFramebuffer,w,pe,t.COLOR_ATTACHMENT0+V,t.TEXTURE_2D,0),_(pe)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let V=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(V=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(V,Z.__webglTexture),Oe(V,S),S.mipmaps&&S.mipmaps.length>0)for(let G=0;G<S.mipmaps.length;G++)Re(z.__webglFramebuffer[G],w,S,t.COLOR_ATTACHMENT0,V,G);else Re(z.__webglFramebuffer,w,S,t.COLOR_ATTACHMENT0,V,0);_(S)&&h(V),n.unbindTexture()}w.depthBuffer&&nt(w)}function I(w){const S=w.textures;for(let z=0,Z=S.length;z<Z;z++){const O=S[z];if(_(O)){const E=b(w),F=i.get(O).__webglTexture;n.bindTexture(E,F),h(E),n.unbindTexture()}}}const B=[],C=[];function he(w){if(w.samples>0){if(ne(w)===!1){const S=w.textures,z=w.width,Z=w.height;let O=t.COLOR_BUFFER_BIT;const E=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,F=i.get(w),V=S.length>1;if(V)for(let G=0;G<S.length;G++)n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,F.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,F.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,F.__webglFramebuffer);for(let G=0;G<S.length;G++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(O|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(O|=t.STENCIL_BUFFER_BIT)),V){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,F.__webglColorRenderbuffer[G]);const pe=i.get(S[G]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,pe,0)}t.blitFramebuffer(0,0,z,Z,0,0,z,Z,O,t.NEAREST),l===!0&&(B.length=0,C.length=0,B.push(t.COLOR_ATTACHMENT0+G),w.depthBuffer&&w.resolveDepthBuffer===!1&&(B.push(E),C.push(E),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,C)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,B))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),V)for(let G=0;G<S.length;G++){n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.RENDERBUFFER,F.__webglColorRenderbuffer[G]);const pe=i.get(S[G]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,F.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.TEXTURE_2D,pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,F.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function ie(w){return Math.min(s.maxSamples,w.samples)}function ne(w){const S=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function le(w){const S=o.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function fe(w,S){const z=w.colorSpace,Z=w.format,O=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==To&&z!==Es&&(gt.getTransfer(z)===St?(Z!==ci||O!==ss)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function ee(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=se,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=ye,this.setupRenderTarget=He,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=ne}function tL(t,e){function n(i,s=Es){let r;const o=gt.getTransfer(s);if(i===ss)return t.UNSIGNED_BYTE;if(i===lh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ch)return t.UNSIGNED_SHORT_5_5_5_1;if(i===n0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===e0)return t.BYTE;if(i===t0)return t.SHORT;if(i===Aa)return t.UNSIGNED_SHORT;if(i===ah)return t.INT;if(i===vr)return t.UNSIGNED_INT;if(i===Xi)return t.FLOAT;if(i===ka)return t.HALF_FLOAT;if(i===i0)return t.ALPHA;if(i===s0)return t.RGB;if(i===ci)return t.RGBA;if(i===r0)return t.LUMINANCE;if(i===o0)return t.LUMINANCE_ALPHA;if(i===Ra)return t.DEPTH_COMPONENT;if(i===Pa)return t.DEPTH_STENCIL;if(i===a0)return t.RED;if(i===uh)return t.RED_INTEGER;if(i===l0)return t.RG;if(i===fh)return t.RG_INTEGER;if(i===dh)return t.RGBA_INTEGER;if(i===Yl||i===ql||i===Kl||i===Zl)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Yl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Yl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ql)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hf||i===Vf||i===Gf||i===Wf)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Hf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$f||i===Xf||i===jf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===$f||i===Xf)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===jf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yf||i===qf||i===Kf||i===Zf||i===Jf||i===Qf||i===ed||i===td||i===nd||i===id||i===sd||i===rd||i===od||i===ad)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ed)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===td)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nd)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===id)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sd)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rd)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===od)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ad)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jl||i===ld||i===cd)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Jl)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ld)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===c0||i===ud||i===fd||i===dd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Jl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ud)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ca?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const nL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iL=`
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

}`;class sL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const s=new Sn,r=e.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new rs({vertexShader:nL,fragmentShader:iL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new An(new za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rL extends Er{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const m=new sL,_=n.getContextAttributes();let h=null,b=null;const x=[],v=[],P=new Ve;let D=null;const A=new Kn;A.viewport=new wt;const T=new Kn;T.viewport=new wt;const y=[A,T],M=new bR;let U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let ge=x[ue];return ge===void 0&&(ge=new Vu,x[ue]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ue){let ge=x[ue];return ge===void 0&&(ge=new Vu,x[ue]=ge),ge.getGripSpace()},this.getHand=function(ue){let ge=x[ue];return ge===void 0&&(ge=new Vu,x[ue]=ge),ge.getHandSpace()};function H(ue){const ge=v.indexOf(ue.inputSource);if(ge===-1)return;const Re=x[ge];Re!==void 0&&(Re.update(ue.inputSource,ue.frame,c||o),Re.dispatchEvent({type:ue.type,data:ue.inputSource}))}function J(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",se);for(let ue=0;ue<x.length;ue++){const ge=v[ue];ge!==null&&(v[ue]=null,x[ue].disconnect(ge))}U=null,k=null,m.reset(),e.setRenderTarget(h),p=null,d=null,f=null,s=null,b=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){r=ue,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){a=ue,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ue){c=ue},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ue){if(s=ue,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",J),s.addEventListener("inputsourceschange",se),_.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Te=null,Ue=null;_.depth&&(Ue=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Re=_.stencil?Pa:Ra,Te=_.stencil?Ca:vr);const nt={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:r};f=new XRWebGLBinding(s,n),d=f.createProjectionLayer(nt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new yr(d.textureWidth,d.textureHeight,{format:ci,type:ss,depthTexture:new T0(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Re={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,Re),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new yr(p.framebufferWidth,p.framebufferHeight,{format:ci,type:ss,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(ue){for(let ge=0;ge<ue.removed.length;ge++){const Re=ue.removed[ge],Te=v.indexOf(Re);Te>=0&&(v[Te]=null,x[Te].disconnect(Re))}for(let ge=0;ge<ue.added.length;ge++){const Re=ue.added[ge];let Te=v.indexOf(Re);if(Te===-1){for(let nt=0;nt<x.length;nt++)if(nt>=v.length){v.push(Re),Te=nt;break}else if(v[nt]===null){v[nt]=Re,Te=nt;break}if(Te===-1)break}const Ue=x[Te];Ue&&Ue.connect(Re)}}const q=new X,W=new X;function j(ue,ge,Re){q.setFromMatrixPosition(ge.matrixWorld),W.setFromMatrixPosition(Re.matrixWorld);const Te=q.distanceTo(W),Ue=ge.projectionMatrix.elements,nt=Re.projectionMatrix.elements,ye=Ue[14]/(Ue[10]-1),He=Ue[14]/(Ue[10]+1),I=(Ue[9]+1)/Ue[5],B=(Ue[9]-1)/Ue[5],C=(Ue[8]-1)/Ue[0],he=(nt[8]+1)/nt[0],ie=ye*C,ne=ye*he,le=Te/(-C+he),fe=le*-C;if(ge.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(fe),ue.translateZ(le),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),Ue[10]===-1)ue.projectionMatrix.copy(ge.projectionMatrix),ue.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const ee=ye+le,w=He+le,S=ie-fe,z=ne+(Te-fe),Z=I*He/w*ee,O=B*He/w*ee;ue.projectionMatrix.makePerspective(S,z,Z,O,ee,w),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function ve(ue,ge){ge===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(ge.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(s===null)return;let ge=ue.near,Re=ue.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(Re=m.depthFar)),M.near=T.near=A.near=ge,M.far=T.far=A.far=Re,(U!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,k=M.far),A.layers.mask=ue.layers.mask|2,T.layers.mask=ue.layers.mask|4,M.layers.mask=A.layers.mask|T.layers.mask;const Te=ue.parent,Ue=M.cameras;ve(M,Te);for(let nt=0;nt<Ue.length;nt++)ve(Ue[nt],Te);Ue.length===2?j(M,A,T):M.projectionMatrix.copy(A.projectionMatrix),we(ue,M,Te)};function we(ue,ge,Re){Re===null?ue.matrix.copy(ge.matrixWorld):(ue.matrix.copy(Re.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(ge.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(ge.projectionMatrix),ue.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=Da*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ue){l=ue,d!==null&&(d.fixedFoveation=ue),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ue)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(M)};let Ie=null;function Oe(ue,ge){if(u=ge.getViewerPose(c||o),g=ge,u!==null){const Re=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Te=!1;Re.length!==M.cameras.length&&(M.cameras.length=0,Te=!0);for(let ye=0;ye<Re.length;ye++){const He=Re[ye];let I=null;if(p!==null)I=p.getViewport(He);else{const C=f.getViewSubImage(d,He);I=C.viewport,ye===0&&(e.setRenderTargetTextures(b,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(b))}let B=y[ye];B===void 0&&(B=new Kn,B.layers.enable(ye),B.viewport=new wt,y[ye]=B),B.matrix.fromArray(He.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(He.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(I.x,I.y,I.width,I.height),ye===0&&(M.matrix.copy(B.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Te===!0&&M.cameras.push(B)}const Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const ye=f.getDepthInformation(Re[0]);ye&&ye.isValid&&ye.texture&&m.init(e,ye,s.renderState)}}for(let Re=0;Re<x.length;Re++){const Te=v[Re],Ue=x[Re];Te!==null&&Ue!==void 0&&Ue.update(Te,ge,c||o)}Ie&&Ie(ue,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),g=null}const Qe=new C0;Qe.setAnimationLoop(Oe),this.setAnimationLoop=function(ue){Ie=ue},this.dispose=function(){}}}const js=new Ri,oL=new Ct;function aL(t,e){function n(_,h){_.matrixAutoUpdate===!0&&_.updateMatrix(),h.value.copy(_.matrix)}function i(_,h){h.color.getRGB(_.fogColor.value,_0(t)),h.isFog?(_.fogNear.value=h.near,_.fogFar.value=h.far):h.isFogExp2&&(_.fogDensity.value=h.density)}function s(_,h,b,x,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(_,h):h.isMeshToonMaterial?(r(_,h),f(_,h)):h.isMeshPhongMaterial?(r(_,h),u(_,h)):h.isMeshStandardMaterial?(r(_,h),d(_,h),h.isMeshPhysicalMaterial&&p(_,h,v)):h.isMeshMatcapMaterial?(r(_,h),g(_,h)):h.isMeshDepthMaterial?r(_,h):h.isMeshDistanceMaterial?(r(_,h),m(_,h)):h.isMeshNormalMaterial?r(_,h):h.isLineBasicMaterial?(o(_,h),h.isLineDashedMaterial&&a(_,h)):h.isPointsMaterial?l(_,h,b,x):h.isSpriteMaterial?c(_,h):h.isShadowMaterial?(_.color.value.copy(h.color),_.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(_,h){_.opacity.value=h.opacity,h.color&&_.diffuse.value.copy(h.color),h.emissive&&_.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(_.map.value=h.map,n(h.map,_.mapTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,n(h.alphaMap,_.alphaMapTransform)),h.bumpMap&&(_.bumpMap.value=h.bumpMap,n(h.bumpMap,_.bumpMapTransform),_.bumpScale.value=h.bumpScale,h.side===Pn&&(_.bumpScale.value*=-1)),h.normalMap&&(_.normalMap.value=h.normalMap,n(h.normalMap,_.normalMapTransform),_.normalScale.value.copy(h.normalScale),h.side===Pn&&_.normalScale.value.negate()),h.displacementMap&&(_.displacementMap.value=h.displacementMap,n(h.displacementMap,_.displacementMapTransform),_.displacementScale.value=h.displacementScale,_.displacementBias.value=h.displacementBias),h.emissiveMap&&(_.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,_.emissiveMapTransform)),h.specularMap&&(_.specularMap.value=h.specularMap,n(h.specularMap,_.specularMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest);const b=e.get(h),x=b.envMap,v=b.envMapRotation;x&&(_.envMap.value=x,js.copy(v),js.x*=-1,js.y*=-1,js.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),_.envMapRotation.value.setFromMatrix4(oL.makeRotationFromEuler(js)),_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=h.reflectivity,_.ior.value=h.ior,_.refractionRatio.value=h.refractionRatio),h.lightMap&&(_.lightMap.value=h.lightMap,_.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,_.lightMapTransform)),h.aoMap&&(_.aoMap.value=h.aoMap,_.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,_.aoMapTransform))}function o(_,h){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,h.map&&(_.map.value=h.map,n(h.map,_.mapTransform))}function a(_,h){_.dashSize.value=h.dashSize,_.totalSize.value=h.dashSize+h.gapSize,_.scale.value=h.scale}function l(_,h,b,x){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,_.size.value=h.size*b,_.scale.value=x*.5,h.map&&(_.map.value=h.map,n(h.map,_.uvTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,n(h.alphaMap,_.alphaMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest)}function c(_,h){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,_.rotation.value=h.rotation,h.map&&(_.map.value=h.map,n(h.map,_.mapTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,n(h.alphaMap,_.alphaMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest)}function u(_,h){_.specular.value.copy(h.specular),_.shininess.value=Math.max(h.shininess,1e-4)}function f(_,h){h.gradientMap&&(_.gradientMap.value=h.gradientMap)}function d(_,h){_.metalness.value=h.metalness,h.metalnessMap&&(_.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,_.metalnessMapTransform)),_.roughness.value=h.roughness,h.roughnessMap&&(_.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,_.roughnessMapTransform)),h.envMap&&(_.envMapIntensity.value=h.envMapIntensity)}function p(_,h,b){_.ior.value=h.ior,h.sheen>0&&(_.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),_.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(_.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,_.sheenColorMapTransform)),h.sheenRoughnessMap&&(_.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,_.sheenRoughnessMapTransform))),h.clearcoat>0&&(_.clearcoat.value=h.clearcoat,_.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(_.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,_.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(_.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Pn&&_.clearcoatNormalScale.value.negate())),h.dispersion>0&&(_.dispersion.value=h.dispersion),h.iridescence>0&&(_.iridescence.value=h.iridescence,_.iridescenceIOR.value=h.iridescenceIOR,_.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(_.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,_.iridescenceMapTransform)),h.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),h.transmission>0&&(_.transmission.value=h.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(_.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,_.transmissionMapTransform)),_.thickness.value=h.thickness,h.thicknessMap&&(_.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=h.attenuationDistance,_.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(_.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(_.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=h.specularIntensity,_.specularColor.value.copy(h.specularColor),h.specularColorMap&&(_.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,_.specularColorMapTransform)),h.specularIntensityMap&&(_.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,h){h.matcap&&(_.matcap.value=h.matcap)}function m(_,h){const b=e.get(h).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function lL(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const v=x.program;i.uniformBlockBinding(b,v)}function c(b,x){let v=s[b.id];v===void 0&&(g(b),v=u(b),s[b.id]=v,b.addEventListener("dispose",_));const P=x.program;i.updateUBOMapping(b,P);const D=e.render.frame;r[b.id]!==D&&(d(b),r[b.id]=D)}function u(b){const x=f();b.__bindingPointIndex=x;const v=t.createBuffer(),P=b.__size,D=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,P,D),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,v),v}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=s[b.id],v=b.uniforms,P=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let D=0,A=v.length;D<A;D++){const T=Array.isArray(v[D])?v[D]:[v[D]];for(let y=0,M=T.length;y<M;y++){const U=T[y];if(p(U,D,y,P)===!0){const k=U.__offset,H=Array.isArray(U.value)?U.value:[U.value];let J=0;for(let se=0;se<H.length;se++){const q=H[se],W=m(q);typeof q=="number"||typeof q=="boolean"?(U.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,k+J,U.__data)):q.isMatrix3?(U.__data[0]=q.elements[0],U.__data[1]=q.elements[1],U.__data[2]=q.elements[2],U.__data[3]=0,U.__data[4]=q.elements[3],U.__data[5]=q.elements[4],U.__data[6]=q.elements[5],U.__data[7]=0,U.__data[8]=q.elements[6],U.__data[9]=q.elements[7],U.__data[10]=q.elements[8],U.__data[11]=0):(q.toArray(U.__data,J),J+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(b,x,v,P){const D=b.value,A=x+"_"+v;if(P[A]===void 0)return typeof D=="number"||typeof D=="boolean"?P[A]=D:P[A]=D.clone(),!0;{const T=P[A];if(typeof D=="number"||typeof D=="boolean"){if(T!==D)return P[A]=D,!0}else if(T.equals(D)===!1)return T.copy(D),!0}return!1}function g(b){const x=b.uniforms;let v=0;const P=16;for(let A=0,T=x.length;A<T;A++){const y=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,U=y.length;M<U;M++){const k=y[M],H=Array.isArray(k.value)?k.value:[k.value];for(let J=0,se=H.length;J<se;J++){const q=H[J],W=m(q),j=v%P,ve=j%W.boundary,we=j+ve;v+=ve,we!==0&&P-we<W.storage&&(v+=P-we),k.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=W.storage}}}const D=v%P;return D>0&&(v+=P-D),b.__size=v,b.__cache={},this}function m(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function _(b){const x=b.target;x.removeEventListener("dispose",_);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),t.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function h(){for(const b in s)t.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class cL{constructor(e={}){const{canvas:n=UC(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),m=new Int32Array(4);let _=null,h=null;const b=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let P=!1;this._outputColorSpace=qn;let D=0,A=0,T=null,y=-1,M=null;const U=new wt,k=new wt;let H=null;const J=new it(0);let se=0,q=n.width,W=n.height,j=1,ve=null,we=null;const Ie=new wt(0,0,q,W),Oe=new wt(0,0,q,W);let Qe=!1;const ue=new _h;let ge=!1,Re=!1;const Te=new Ct,Ue=new Ct,nt=new X,ye=new wt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let I=!1;function B(){return T===null?j:1}let C=i;function he(R,Y){return n.getContext(R,Y)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${oh}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",Ae,!1),C===null){const Y="webgl2";if(C=he(Y,R),C===null)throw he(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ie,ne,le,fe,ee,w,S,z,Z,O,E,F,V,G,pe,Q,ce,xe,Ne,be,Be,ke,st,$;function Se(){ie=new yD(C),ie.init(),ke=new tL(C,ie),ne=new dD(C,ie,e,ke),le=new QI(C,ie),ne.reverseDepthBuffer&&d&&le.buffers.depth.setReversed(!0),fe=new SD(C),ee=new zI,w=new eL(C,ie,le,ee,ne,ke,fe),S=new pD(v),z=new vD(v),Z=new CR(C),st=new uD(C,Z),O=new xD(C,Z,fe,st),E=new ED(C,O,Z,fe),Ne=new MD(C,ne,w),Q=new hD(ee),F=new kI(v,S,z,ie,ne,st,Q),V=new aL(v,ee),G=new VI,pe=new YI(ie),xe=new cD(v,S,z,le,E,p,l),ce=new ZI(v,E,ne),$=new lL(C,fe,ne,le),be=new fD(C,ie,fe),Be=new bD(C,ie,fe),fe.programs=F.programs,v.capabilities=ne,v.extensions=ie,v.properties=ee,v.renderLists=G,v.shadowMap=ce,v.state=le,v.info=fe}Se();const te=new rL(v,C);this.xr=te,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const R=ie.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ie.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(q,W,!1))},this.getSize=function(R){return R.set(q,W)},this.setSize=function(R,Y,re=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,W=Y,n.width=Math.floor(R*j),n.height=Math.floor(Y*j),re===!0&&(n.style.width=R+"px",n.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(q*j,W*j).floor()},this.setDrawingBufferSize=function(R,Y,re){q=R,W=Y,j=re,n.width=Math.floor(R*re),n.height=Math.floor(Y*re),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(Ie)},this.setViewport=function(R,Y,re,oe){R.isVector4?Ie.set(R.x,R.y,R.z,R.w):Ie.set(R,Y,re,oe),le.viewport(U.copy(Ie).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(Oe)},this.setScissor=function(R,Y,re,oe){R.isVector4?Oe.set(R.x,R.y,R.z,R.w):Oe.set(R,Y,re,oe),le.scissor(k.copy(Oe).multiplyScalar(j).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(R){le.setScissorTest(Qe=R)},this.setOpaqueSort=function(R){ve=R},this.setTransparentSort=function(R){we=R},this.getClearColor=function(R){return R.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,re=!0){let oe=0;if(R){let K=!1;if(T!==null){const Ee=T.texture.format;K=Ee===dh||Ee===fh||Ee===uh}if(K){const Ee=T.texture.type,Le=Ee===ss||Ee===vr||Ee===Aa||Ee===Ca||Ee===lh||Ee===ch,Fe=xe.getClearColor(),ze=xe.getClearAlpha(),et=Fe.r,Je=Fe.g,$e=Fe.b;Le?(g[0]=et,g[1]=Je,g[2]=$e,g[3]=ze,C.clearBufferuiv(C.COLOR,0,g)):(m[0]=et,m[1]=Je,m[2]=$e,m[3]=ze,C.clearBufferiv(C.COLOR,0,m))}else oe|=C.COLOR_BUFFER_BIT}Y&&(oe|=C.DEPTH_BUFFER_BIT),re&&(oe|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",Ae,!1),xe.dispose(),G.dispose(),pe.dispose(),ee.dispose(),S.dispose(),z.dispose(),E.dispose(),st.dispose(),$.dispose(),F.dispose(),te.dispose(),te.removeEventListener("sessionstart",as),te.removeEventListener("sessionend",Tr),ti.stop()};function de(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=fe.autoReset,Y=ce.enabled,re=ce.autoUpdate,oe=ce.needsUpdate,K=ce.type;Se(),fe.autoReset=R,ce.enabled=Y,ce.autoUpdate=re,ce.needsUpdate=oe,ce.type=K}function Ae(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function qe(R){const Y=R.target;Y.removeEventListener("dispose",qe),xt(Y)}function xt(R){Ut(R),ee.remove(R)}function Ut(R){const Y=ee.get(R).programs;Y!==void 0&&(Y.forEach(function(re){F.releaseProgram(re)}),R.isShaderMaterial&&F.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,re,oe,K,Ee){Y===null&&(Y=He);const Le=K.isMesh&&K.matrixWorld.determinant()<0,Fe=$a(R,Y,re,oe,K);le.setMaterial(oe,Le);let ze=re.index,et=1;if(oe.wireframe===!0){if(ze=O.getWireframeAttribute(re),ze===void 0)return;et=2}const Je=re.drawRange,$e=re.attributes.position;let pt=Je.start*et,_t=(Je.start+Je.count)*et;Ee!==null&&(pt=Math.max(pt,Ee.start*et),_t=Math.min(_t,(Ee.start+Ee.count)*et)),ze!==null?(pt=Math.max(pt,0),_t=Math.min(_t,ze.count)):$e!=null&&(pt=Math.max(pt,0),_t=Math.min(_t,$e.count));const Bt=_t-pt;if(Bt<0||Bt===1/0)return;st.setup(K,oe,Fe,re,ze);let Nt,mt=be;if(ze!==null&&(Nt=Z.get(ze),mt=Be,mt.setIndex(Nt)),K.isMesh)oe.wireframe===!0?(le.setLineWidth(oe.wireframeLinewidth*B()),mt.setMode(C.LINES)):mt.setMode(C.TRIANGLES);else if(K.isLine){let je=oe.linewidth;je===void 0&&(je=1),le.setLineWidth(je*B()),K.isLineSegments?mt.setMode(C.LINES):K.isLineLoop?mt.setMode(C.LINE_LOOP):mt.setMode(C.LINE_STRIP)}else K.isPoints?mt.setMode(C.POINTS):K.isSprite&&mt.setMode(C.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Ql("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))mt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const je=K._multiDrawStarts,Zt=K._multiDrawCounts,vt=K._multiDrawCount,ni=ze?Z.get(ze).bytesPerElement:1,Cr=ee.get(oe).currentProgram.getUniforms();for(let In=0;In<vt;In++)Cr.setValue(C,"_gl_DrawID",In),mt.render(je[In]/ni,Zt[In])}else if(K.isInstancedMesh)mt.renderInstances(pt,Bt,K.count);else if(re.isInstancedBufferGeometry){const je=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Zt=Math.min(re.instanceCount,je);mt.renderInstances(pt,Bt,Zt)}else mt.render(pt,Bt)};function ut(R,Y,re){R.transparent===!0&&R.side===Mi&&R.forceSinglePass===!1?(R.side=Pn,R.needsUpdate=!0,ls(R,Y,re),R.side=Rs,R.needsUpdate=!0,ls(R,Y,re),R.side=Mi):ls(R,Y,re)}this.compile=function(R,Y,re=null){re===null&&(re=R),h=pe.get(re),h.init(Y),x.push(h),re.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(h.pushLight(K),K.castShadow&&h.pushShadow(K))}),R!==re&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(h.pushLight(K),K.castShadow&&h.pushShadow(K))}),h.setupLights();const oe=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ee=K.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){const Fe=Ee[Le];ut(Fe,re,K),oe.add(Fe)}else ut(Ee,re,K),oe.add(Ee)}),h=x.pop(),oe},this.compileAsync=function(R,Y,re=null){const oe=this.compile(R,Y,re);return new Promise(K=>{function Ee(){if(oe.forEach(function(Le){ee.get(Le).currentProgram.isReady()&&oe.delete(Le)}),oe.size===0){K(R);return}setTimeout(Ee,10)}ie.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Ot=null;function pn(R){Ot&&Ot(R)}function as(){ti.stop()}function Tr(){ti.start()}const ti=new C0;ti.setAnimationLoop(pn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(R){Ot=R,te.setAnimationLoop(R),R===null?ti.stop():ti.start()},te.addEventListener("sessionstart",as),te.addEventListener("sessionend",Tr),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(Y),Y=te.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,Y,T),h=pe.get(R,x.length),h.init(Y),x.push(h),Ue.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ue.setFromProjectionMatrix(Ue),Re=this.localClippingEnabled,ge=Q.init(this.clippingPlanes,Re),_=G.get(R,b.length),_.init(),b.push(_),te.enabled===!0&&te.isPresenting===!0){const Ee=v.xr.getDepthSensingMesh();Ee!==null&&Lo(Ee,Y,-1/0,v.sortObjects)}Lo(R,Y,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(ve,we),I=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,I&&xe.addToRenderList(_,R),this.info.render.frame++,ge===!0&&Q.beginShadows();const re=h.state.shadowsArray;ce.render(re,R,Y),ge===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=_.opaque,K=_.transmissive;if(h.setupLights(),Y.isArrayCamera){const Ee=Y.cameras;if(K.length>0)for(let Le=0,Fe=Ee.length;Le<Fe;Le++){const ze=Ee[Le];Va(oe,K,R,ze)}I&&xe.render(R);for(let Le=0,Fe=Ee.length;Le<Fe;Le++){const ze=Ee[Le];Ha(_,R,ze,ze.viewport)}}else K.length>0&&Va(oe,K,R,Y),I&&xe.render(R),Ha(_,R,Y);T!==null&&A===0&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(v,R,Y),st.resetDefaultState(),y=-1,M=null,x.pop(),x.length>0?(h=x[x.length-1],ge===!0&&Q.setGlobalState(v.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?_=b[b.length-1]:_=null};function Lo(R,Y,re,oe){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ue.intersectsSprite(R)){oe&&ye.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ue);const Le=E.update(R),Fe=R.material;Fe.visible&&_.push(R,Le,Fe,re,ye.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ue.intersectsObject(R))){const Le=E.update(R),Fe=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ye.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ye.copy(Le.boundingSphere.center)),ye.applyMatrix4(R.matrixWorld).applyMatrix4(Ue)),Array.isArray(Fe)){const ze=Le.groups;for(let et=0,Je=ze.length;et<Je;et++){const $e=ze[et],pt=Fe[$e.materialIndex];pt&&pt.visible&&_.push(R,Le,pt,re,ye.z,$e)}}else Fe.visible&&_.push(R,Le,Fe,re,ye.z,null)}}const Ee=R.children;for(let Le=0,Fe=Ee.length;Le<Fe;Le++)Lo(Ee[Le],Y,re,oe)}function Ha(R,Y,re,oe){const K=R.opaque,Ee=R.transmissive,Le=R.transparent;h.setupLightsView(re),ge===!0&&Q.setGlobalState(v.clippingPlanes,re),oe&&le.viewport(U.copy(oe)),K.length>0&&wr(K,Y,re),Ee.length>0&&wr(Ee,Y,re),Le.length>0&&wr(Le,Y,re),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Va(R,Y,re,oe){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[oe.id]===void 0&&(h.state.transmissionRenderTarget[oe.id]=new yr(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?ka:ss,minFilter:or,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const Ee=h.state.transmissionRenderTarget[oe.id],Le=oe.viewport||U;Ee.setSize(Le.z*v.transmissionResolutionScale,Le.w*v.transmissionResolutionScale);const Fe=v.getRenderTarget();v.setRenderTarget(Ee),v.getClearColor(J),se=v.getClearAlpha(),se<1&&v.setClearColor(16777215,.5),v.clear(),I&&xe.render(re);const ze=v.toneMapping;v.toneMapping=Cs;const et=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),h.setupLightsView(oe),ge===!0&&Q.setGlobalState(v.clippingPlanes,oe),wr(R,re,oe),w.updateMultisampleRenderTarget(Ee),w.updateRenderTargetMipmap(Ee),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let $e=0,pt=Y.length;$e<pt;$e++){const _t=Y[$e],Bt=_t.object,Nt=_t.geometry,mt=_t.material,je=_t.group;if(mt.side===Mi&&Bt.layers.test(oe.layers)){const Zt=mt.side;mt.side=Pn,mt.needsUpdate=!0,Ar(Bt,re,oe,Nt,mt,je),mt.side=Zt,mt.needsUpdate=!0,Je=!0}}Je===!0&&(w.updateMultisampleRenderTarget(Ee),w.updateRenderTargetMipmap(Ee))}v.setRenderTarget(Fe),v.setClearColor(J,se),et!==void 0&&(oe.viewport=et),v.toneMapping=ze}function wr(R,Y,re){const oe=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,Ee=R.length;K<Ee;K++){const Le=R[K],Fe=Le.object,ze=Le.geometry,et=Le.group;let Je=Le.material;Je.allowOverride===!0&&oe!==null&&(Je=oe),Fe.layers.test(re.layers)&&Ar(Fe,Y,re,ze,Je,et)}}function Ar(R,Y,re,oe,K,Ee){R.onBeforeRender(v,Y,re,oe,K,Ee),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(v,Y,re,oe,R,Ee),K.transparent===!0&&K.side===Mi&&K.forceSinglePass===!1?(K.side=Pn,K.needsUpdate=!0,v.renderBufferDirect(re,Y,oe,K,R,Ee),K.side=Rs,K.needsUpdate=!0,v.renderBufferDirect(re,Y,oe,K,R,Ee),K.side=Mi):v.renderBufferDirect(re,Y,oe,K,R,Ee),R.onAfterRender(v,Y,re,oe,K,Ee)}function ls(R,Y,re){Y.isScene!==!0&&(Y=He);const oe=ee.get(R),K=h.state.lights,Ee=h.state.shadowsArray,Le=K.state.version,Fe=F.getParameters(R,K.state,Ee,Y,re),ze=F.getProgramCacheKey(Fe);let et=oe.programs;oe.environment=R.isMeshStandardMaterial?Y.environment:null,oe.fog=Y.fog,oe.envMap=(R.isMeshStandardMaterial?z:S).get(R.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",qe),et=new Map,oe.programs=et);let Je=et.get(ze);if(Je!==void 0){if(oe.currentProgram===Je&&oe.lightsStateVersion===Le)return Wa(R,Fe),Je}else Fe.uniforms=F.getUniforms(R),R.onBeforeCompile(Fe,v),Je=F.acquireProgram(Fe,ze),et.set(ze,Je),oe.uniforms=Fe.uniforms;const $e=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($e.clippingPlanes=Q.uniform),Wa(R,Fe),oe.needsLights=ja(R),oe.lightsStateVersion=Le,oe.needsLights&&($e.ambientLightColor.value=K.state.ambient,$e.lightProbe.value=K.state.probe,$e.directionalLights.value=K.state.directional,$e.directionalLightShadows.value=K.state.directionalShadow,$e.spotLights.value=K.state.spot,$e.spotLightShadows.value=K.state.spotShadow,$e.rectAreaLights.value=K.state.rectArea,$e.ltc_1.value=K.state.rectAreaLTC1,$e.ltc_2.value=K.state.rectAreaLTC2,$e.pointLights.value=K.state.point,$e.pointLightShadows.value=K.state.pointShadow,$e.hemisphereLights.value=K.state.hemi,$e.directionalShadowMap.value=K.state.directionalShadowMap,$e.directionalShadowMatrix.value=K.state.directionalShadowMatrix,$e.spotShadowMap.value=K.state.spotShadowMap,$e.spotLightMatrix.value=K.state.spotLightMatrix,$e.spotLightMap.value=K.state.spotLightMap,$e.pointShadowMap.value=K.state.pointShadowMap,$e.pointShadowMatrix.value=K.state.pointShadowMatrix),oe.currentProgram=Je,oe.uniformsList=null,Je}function Ga(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=ec.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Wa(R,Y){const re=ee.get(R);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.batchingColor=Y.batchingColor,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.instancingMorph=Y.instancingMorph,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function $a(R,Y,re,oe,K){Y.isScene!==!0&&(Y=He),w.resetTextureUnits();const Ee=Y.fog,Le=oe.isMeshStandardMaterial?Y.environment:null,Fe=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:To,ze=(oe.isMeshStandardMaterial?z:S).get(oe.envMap||Le),et=oe.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Je=!!re.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),$e=!!re.morphAttributes.position,pt=!!re.morphAttributes.normal,_t=!!re.morphAttributes.color;let Bt=Cs;oe.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Bt=v.toneMapping);const Nt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,mt=Nt!==void 0?Nt.length:0,je=ee.get(oe),Zt=h.state.lights;if(ge===!0&&(Re===!0||R!==M)){const mn=R===M&&oe.id===y;Q.setState(oe,R,mn)}let vt=!1;oe.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Zt.state.version||je.outputColorSpace!==Fe||K.isBatchedMesh&&je.batching===!1||!K.isBatchedMesh&&je.batching===!0||K.isBatchedMesh&&je.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&je.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&je.instancing===!1||!K.isInstancedMesh&&je.instancing===!0||K.isSkinnedMesh&&je.skinning===!1||!K.isSkinnedMesh&&je.skinning===!0||K.isInstancedMesh&&je.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&je.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&je.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&je.instancingMorph===!1&&K.morphTexture!==null||je.envMap!==ze||oe.fog===!0&&je.fog!==Ee||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Q.numPlanes||je.numIntersection!==Q.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==Je||je.morphTargets!==$e||je.morphNormals!==pt||je.morphColors!==_t||je.toneMapping!==Bt||je.morphTargetsCount!==mt)&&(vt=!0):(vt=!0,je.__version=oe.version);let ni=je.currentProgram;vt===!0&&(ni=ls(oe,Y,K));let Cr=!1,In=!1,Uo=!1;const Pt=ni.getUniforms(),Gn=je.uniforms;if(le.useProgram(ni.program)&&(Cr=!0,In=!0,Uo=!0),oe.id!==y&&(y=oe.id,In=!0),Cr||M!==R){le.buffers.depth.getReversed()?(Te.copy(R.projectionMatrix),OC(Te),FC(Te),Pt.setValue(C,"projectionMatrix",Te)):Pt.setValue(C,"projectionMatrix",R.projectionMatrix),Pt.setValue(C,"viewMatrix",R.matrixWorldInverse);const En=Pt.map.cameraPosition;En!==void 0&&En.setValue(C,nt.setFromMatrixPosition(R.matrixWorld)),ne.logarithmicDepthBuffer&&Pt.setValue(C,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Pt.setValue(C,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,In=!0,Uo=!0)}if(K.isSkinnedMesh){Pt.setOptional(C,K,"bindMatrix"),Pt.setOptional(C,K,"bindMatrixInverse");const mn=K.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Pt.setValue(C,"boneTexture",mn.boneTexture,w))}K.isBatchedMesh&&(Pt.setOptional(C,K,"batchingTexture"),Pt.setValue(C,"batchingTexture",K._matricesTexture,w),Pt.setOptional(C,K,"batchingIdTexture"),Pt.setValue(C,"batchingIdTexture",K._indirectTexture,w),Pt.setOptional(C,K,"batchingColorTexture"),K._colorsTexture!==null&&Pt.setValue(C,"batchingColorTexture",K._colorsTexture,w));const Wn=re.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&Ne.update(K,re,ni),(In||je.receiveShadow!==K.receiveShadow)&&(je.receiveShadow=K.receiveShadow,Pt.setValue(C,"receiveShadow",K.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Gn.envMap.value=ze,Gn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Y.environment!==null&&(Gn.envMapIntensity.value=Y.environmentIntensity),In&&(Pt.setValue(C,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&Xa(Gn,Uo),Ee&&oe.fog===!0&&V.refreshFogUniforms(Gn,Ee),V.refreshMaterialUniforms(Gn,oe,j,W,h.state.transmissionRenderTarget[R.id]),ec.upload(C,Ga(je),Gn,w)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(ec.upload(C,Ga(je),Gn,w),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Pt.setValue(C,"center",K.center),Pt.setValue(C,"modelViewMatrix",K.modelViewMatrix),Pt.setValue(C,"normalMatrix",K.normalMatrix),Pt.setValue(C,"modelMatrix",K.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const mn=oe.uniformsGroups;for(let En=0,Qc=mn.length;En<Qc;En++){const Os=mn[En];$.update(Os,ni),$.bind(Os,ni)}}return ni}function Xa(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function ja(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,Y,re){const oe=ee.get(R);oe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ee.get(R.texture).__webglTexture=Y,ee.get(R.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:re,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const re=ee.get(R);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0};const Ya=C.createFramebuffer();this.setRenderTarget=function(R,Y=0,re=0){T=R,D=Y,A=re;let oe=!0,K=null,Ee=!1,Le=!1;if(R){const ze=ee.get(R);if(ze.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(C.FRAMEBUFFER,null),oe=!1;else if(ze.__webglFramebuffer===void 0)w.setupRenderTarget(R);else if(ze.__hasExternalTextures)w.rebindTextures(R,ee.get(R.texture).__webglTexture,ee.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $e=R.depthTexture;if(ze.__boundDepthTexture!==$e){if($e!==null&&ee.has($e)&&(R.width!==$e.image.width||R.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Le=!0);const Je=ee.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[Y])?K=Je[Y][re]:K=Je[Y],Ee=!0):R.samples>0&&w.useMultisampledRTT(R)===!1?K=ee.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?K=Je[re]:K=Je,U.copy(R.viewport),k.copy(R.scissor),H=R.scissorTest}else U.copy(Ie).multiplyScalar(j).floor(),k.copy(Oe).multiplyScalar(j).floor(),H=Qe;if(re!==0&&(K=Ya),le.bindFramebuffer(C.FRAMEBUFFER,K)&&oe&&le.drawBuffers(R,K),le.viewport(U),le.scissor(k),le.setScissorTest(H),Ee){const ze=ee.get(R.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ze.__webglTexture,re)}else if(Le){const ze=ee.get(R.texture),et=Y;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,ze.__webglTexture,re,et)}else if(R!==null&&re!==0){const ze=ee.get(R.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ze.__webglTexture,re)}y=-1},this.readRenderTargetPixels=function(R,Y,re,oe,K,Ee,Le){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){le.bindFramebuffer(C.FRAMEBUFFER,Fe);try{const ze=R.texture,et=ze.format,Je=ze.type;if(!ne.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-oe&&re>=0&&re<=R.height-K&&C.readPixels(Y,re,oe,K,ke.convert(et),ke.convert(Je),Ee)}finally{const ze=T!==null?ee.get(T).__webglFramebuffer:null;le.bindFramebuffer(C.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(R,Y,re,oe,K,Ee,Le){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe)if(Y>=0&&Y<=R.width-oe&&re>=0&&re<=R.height-K){le.bindFramebuffer(C.FRAMEBUFFER,Fe);const ze=R.texture,et=ze.format,Je=ze.type;if(!ne.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.bufferData(C.PIXEL_PACK_BUFFER,Ee.byteLength,C.STREAM_READ),C.readPixels(Y,re,oe,K,ke.convert(et),ke.convert(Je),0);const pt=T!==null?ee.get(T).__webglFramebuffer:null;le.bindFramebuffer(C.FRAMEBUFFER,pt);const _t=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await NC(C,_t,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Ee),C.deleteBuffer($e),C.deleteSync(_t),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,re=0){const oe=Math.pow(2,-re),K=Math.floor(R.image.width*oe),Ee=Math.floor(R.image.height*oe),Le=Y!==null?Y.x:0,Fe=Y!==null?Y.y:0;w.setTexture2D(R,0),C.copyTexSubImage2D(C.TEXTURE_2D,re,0,0,Le,Fe,K,Ee),le.unbindTexture()};const qa=C.createFramebuffer(),F0=C.createFramebuffer();this.copyTextureToTexture=function(R,Y,re=null,oe=null,K=0,Ee=null){Ee===null&&(K!==0?(Ql("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=K,K=0):Ee=0);let Le,Fe,ze,et,Je,$e,pt,_t,Bt;const Nt=R.isCompressedTexture?R.mipmaps[Ee]:R.image;if(re!==null)Le=re.max.x-re.min.x,Fe=re.max.y-re.min.y,ze=re.isBox3?re.max.z-re.min.z:1,et=re.min.x,Je=re.min.y,$e=re.isBox3?re.min.z:0;else{const Wn=Math.pow(2,-K);Le=Math.floor(Nt.width*Wn),Fe=Math.floor(Nt.height*Wn),R.isDataArrayTexture?ze=Nt.depth:R.isData3DTexture?ze=Math.floor(Nt.depth*Wn):ze=1,et=0,Je=0,$e=0}oe!==null?(pt=oe.x,_t=oe.y,Bt=oe.z):(pt=0,_t=0,Bt=0);const mt=ke.convert(Y.format),je=ke.convert(Y.type);let Zt;Y.isData3DTexture?(w.setTexture3D(Y,0),Zt=C.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(w.setTexture2DArray(Y,0),Zt=C.TEXTURE_2D_ARRAY):(w.setTexture2D(Y,0),Zt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,Y.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,Y.unpackAlignment);const vt=C.getParameter(C.UNPACK_ROW_LENGTH),ni=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Cr=C.getParameter(C.UNPACK_SKIP_PIXELS),In=C.getParameter(C.UNPACK_SKIP_ROWS),Uo=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Nt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Nt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,et),C.pixelStorei(C.UNPACK_SKIP_ROWS,Je),C.pixelStorei(C.UNPACK_SKIP_IMAGES,$e);const Pt=R.isDataArrayTexture||R.isData3DTexture,Gn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Wn=ee.get(R),mn=ee.get(Y),En=ee.get(Wn.__renderTarget),Qc=ee.get(mn.__renderTarget);le.bindFramebuffer(C.READ_FRAMEBUFFER,En.__webglFramebuffer),le.bindFramebuffer(C.DRAW_FRAMEBUFFER,Qc.__webglFramebuffer);for(let Os=0;Os<ze;Os++)Pt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ee.get(R).__webglTexture,K,$e+Os),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ee.get(Y).__webglTexture,Ee,Bt+Os)),C.blitFramebuffer(et,Je,Le,Fe,pt,_t,Le,Fe,C.DEPTH_BUFFER_BIT,C.NEAREST);le.bindFramebuffer(C.READ_FRAMEBUFFER,null),le.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||ee.has(R)){const Wn=ee.get(R),mn=ee.get(Y);le.bindFramebuffer(C.READ_FRAMEBUFFER,qa),le.bindFramebuffer(C.DRAW_FRAMEBUFFER,F0);for(let En=0;En<ze;En++)Pt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Wn.__webglTexture,K,$e+En):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Wn.__webglTexture,K),Gn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,mn.__webglTexture,Ee,Bt+En):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,mn.__webglTexture,Ee),K!==0?C.blitFramebuffer(et,Je,Le,Fe,pt,_t,Le,Fe,C.COLOR_BUFFER_BIT,C.NEAREST):Gn?C.copyTexSubImage3D(Zt,Ee,pt,_t,Bt+En,et,Je,Le,Fe):C.copyTexSubImage2D(Zt,Ee,pt,_t,et,Je,Le,Fe);le.bindFramebuffer(C.READ_FRAMEBUFFER,null),le.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Gn?R.isDataTexture||R.isData3DTexture?C.texSubImage3D(Zt,Ee,pt,_t,Bt,Le,Fe,ze,mt,je,Nt.data):Y.isCompressedArrayTexture?C.compressedTexSubImage3D(Zt,Ee,pt,_t,Bt,Le,Fe,ze,mt,Nt.data):C.texSubImage3D(Zt,Ee,pt,_t,Bt,Le,Fe,ze,mt,je,Nt):R.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Ee,pt,_t,Le,Fe,mt,je,Nt.data):R.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Ee,pt,_t,Nt.width,Nt.height,mt,Nt.data):C.texSubImage2D(C.TEXTURE_2D,Ee,pt,_t,Le,Fe,mt,je,Nt);C.pixelStorei(C.UNPACK_ROW_LENGTH,vt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ni),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Cr),C.pixelStorei(C.UNPACK_SKIP_ROWS,In),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Uo),Ee===0&&Y.generateMipmaps&&C.generateMipmap(Zt),le.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,re=null,oe=null,K=0){return Ql('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,re,oe,K)},this.initRenderTarget=function(R){ee.get(R).__webglFramebuffer===void 0&&w.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),le.unbindTexture()},this.resetState=function(){D=0,A=0,T=null,le.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),n.unpackColorSpace=gt._getUnpackColorSpace()}}const bg={type:"change"},xh={type:"start"},L0={type:"end"},Bl=new qc,Sg=new Ms,uL=Math.cos(70*er.DEG2RAD),Vt=new X,Tn=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nf=1e-6;class fL extends wR{constructor(e,n=null){super(e,n),this.state=Mt.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:co.ROTATE,MIDDLE:co.DOLLY,RIGHT:co.PAN},this.touches={ONE:eo.ROTATE,TWO:eo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new xr,this._lastTargetPosition=new X,this._quat=new xr().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new jm,this._sphericalDelta=new jm,this._scale=1,this._panOffset=new X,this._rotateStart=new Ve,this._rotateEnd=new Ve,this._rotateDelta=new Ve,this._panStart=new Ve,this._panEnd=new Ve,this._panDelta=new Ve,this._dollyStart=new Ve,this._dollyEnd=new Ve,this._dollyDelta=new Ve,this._dollyDirection=new X,this._mouse=new Ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hL.bind(this),this._onPointerDown=dL.bind(this),this._onPointerUp=pL.bind(this),this._onContextMenu=bL.bind(this),this._onMouseWheel=_L.bind(this),this._onKeyDown=vL.bind(this),this._onTouchStart=yL.bind(this),this._onTouchMove=xL.bind(this),this._onMouseDown=mL.bind(this),this._onMouseMove=gL.bind(this),this._interceptControlDown=SL.bind(this),this._interceptControlUp=ML.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bg),this.update(),this.state=Mt.NONE}update(e=null){const n=this.object.position;Vt.copy(n).sub(this.target),Vt.applyQuaternion(this._quat),this._spherical.setFromVector3(Vt),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Tn:i>Math.PI&&(i-=Tn),s<-Math.PI?s+=Tn:s>Math.PI&&(s-=Tn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Vt.setFromSpherical(this._spherical),Vt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Vt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new X(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new X(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Bl.origin.copy(this.object.position),Bl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bl.direction))<uL?this.object.lookAt(this.target):(Sg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bl.intersectPlane(Sg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>nf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nf||this._lastTargetPosition.distanceToSquared(this.target)>nf?(this.dispatchEvent(bg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Tn/60*this.autoRotateSpeed*e:Tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Vt.setFromMatrixColumn(n,0),Vt.multiplyScalar(-e),this._panOffset.add(Vt)}_panUp(e,n){this.screenSpacePanning===!0?Vt.setFromMatrixColumn(n,1):(Vt.setFromMatrixColumn(n,0),Vt.crossVectors(this.object.up,Vt)),Vt.multiplyScalar(e),this._panOffset.add(Vt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Vt.copy(s).sub(this.target);let r=Vt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ve,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function dL(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function hL(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function pL(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(L0),this.state=Mt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function mL(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case co.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Mt.DOLLY;break;case co.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Mt.ROTATE}break;case co.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(xh)}function gL(t){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function _L(t){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(t.preventDefault(),this.dispatchEvent(xh),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(L0))}function vL(t){this.enabled!==!1&&this._handleKeyDown(t)}function yL(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case eo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Mt.TOUCH_ROTATE;break;case eo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case eo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Mt.TOUCH_DOLLY_PAN;break;case eo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(xh)}function xL(t){switch(this._trackPointer(t),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Mt.NONE}}function bL(t){this.enabled!==!1&&t.preventDefault()}function SL(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ML(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Mg=new Us,kl=new X;class U0 extends xR{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new $t(e,3)),this.setAttribute("uv",new $t(n,2))}applyMatrix4(e){const n=this.attributes.instanceStart,i=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(e),i.applyMatrix4(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new pd(n,6,1);return this.setAttribute("instanceStart",new wi(i,3,0)),this.setAttribute("instanceEnd",new wi(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new pd(n,6,1);return this.setAttribute("instanceColorStart",new wi(i,3,0)),this.setAttribute("instanceColorEnd",new wi(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new fR(e.geometry)),this}fromLineSegments(e){const n=e.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Us);const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;e!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Mg.setFromBufferAttribute(n),this.boundingBox.union(Mg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Do),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(e!==void 0&&n!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)kl.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(kl)),kl.fromBufferAttribute(n,r),s=Math.max(s,i.distanceToSquared(kl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Ce.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ve(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};wn.line={uniforms:gh.merge([Ce.common,Ce.fog,Ce.line]),vertexShader:`
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
		`};class bh extends rs{constructor(e){super({type:"LineMaterial",uniforms:gh.clone(wn.line.uniforms),vertexShader:wn.line.vertexShader,fragmentShader:wn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const sf=new wt,Eg=new X,Tg=new X,Jt=new wt,Qt=new wt,mi=new wt,rf=new X,of=new Ct,en=new MR,wg=new X,zl=new Us,Hl=new Do,gi=new wt;let Ei,hr;function Ag(t,e,n){return gi.set(0,0,-e,1).applyMatrix4(t.projectionMatrix),gi.multiplyScalar(1/gi.w),gi.x=hr/n.width,gi.y=hr/n.height,gi.applyMatrix4(t.projectionMatrixInverse),gi.multiplyScalar(1/gi.w),Math.abs(Math.max(gi.x,gi.y))}function EL(t,e){const n=t.matrixWorld,i=t.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){en.start.fromBufferAttribute(s,a),en.end.fromBufferAttribute(r,a),en.applyMatrix4(n);const c=new X,u=new X;Ei.distanceSqToSegment(en.start,en.end,u,c),u.distanceTo(c)<hr*.5&&e.push({point:u,pointOnLine:c,distance:Ei.origin.distanceTo(u),object:t,face:null,faceIndex:a,uv:null,uv1:null})}}function TL(t,e,n){const i=e.projectionMatrix,r=t.material.resolution,o=t.matrixWorld,a=t.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),f=-e.near;Ei.at(1,mi),mi.w=1,mi.applyMatrix4(e.matrixWorldInverse),mi.applyMatrix4(i),mi.multiplyScalar(1/mi.w),mi.x*=r.x/2,mi.y*=r.y/2,mi.z=0,rf.copy(mi),of.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,p=u;d<p;d++){if(Jt.fromBufferAttribute(l,d),Qt.fromBufferAttribute(c,d),Jt.w=1,Qt.w=1,Jt.applyMatrix4(of),Qt.applyMatrix4(of),Jt.z>f&&Qt.z>f)continue;if(Jt.z>f){const x=Jt.z-Qt.z,v=(Jt.z-f)/x;Jt.lerp(Qt,v)}else if(Qt.z>f){const x=Qt.z-Jt.z,v=(Qt.z-f)/x;Qt.lerp(Jt,v)}Jt.applyMatrix4(i),Qt.applyMatrix4(i),Jt.multiplyScalar(1/Jt.w),Qt.multiplyScalar(1/Qt.w),Jt.x*=r.x/2,Jt.y*=r.y/2,Qt.x*=r.x/2,Qt.y*=r.y/2,en.start.copy(Jt),en.start.z=0,en.end.copy(Qt),en.end.z=0;const m=en.closestPointToPointParameter(rf,!0);en.at(m,wg);const _=er.lerp(Jt.z,Qt.z,m),h=_>=-1&&_<=1,b=rf.distanceTo(wg)<hr*.5;if(h&&b){en.start.fromBufferAttribute(l,d),en.end.fromBufferAttribute(c,d),en.start.applyMatrix4(o),en.end.applyMatrix4(o);const x=new X,v=new X;Ei.distanceSqToSegment(en.start,en.end,v,x),n.push({point:v,pointOnLine:x,distance:Ei.origin.distanceTo(v),object:t,face:null,faceIndex:d,uv:null,uv1:null})}}}class wL extends An{constructor(e=new U0,n=new bh({color:Math.random()*16777215})){super(e,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,n=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*n.count);for(let o=0,a=0,l=n.count;o<l;o++,a+=2)Eg.fromBufferAttribute(n,o),Tg.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Eg.distanceTo(Tg);const r=new pd(s,2,1);return e.setAttribute("instanceDistanceStart",new wi(r,1,0)),e.setAttribute("instanceDistanceEnd",new wi(r,1,1)),this}raycast(e,n){const i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Ei=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;hr=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Hl.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=hr*.5;else{const f=Math.max(s.near,Hl.distanceToPoint(Ei.origin));c=Ag(s,f,l.resolution)}if(Hl.radius+=c,Ei.intersectsSphere(Hl)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),zl.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=hr*.5;else{const f=Math.max(s.near,zl.distanceToPoint(Ei.origin));u=Ag(s,f,l.resolution)}zl.expandByScalar(u),Ei.intersectsBox(zl)!==!1&&(i?EL(this,n):TL(this,s,n))}onBeforeRender(e){const n=this.material.uniforms;n&&n.resolution&&(e.getViewport(sf),this.material.uniforms.resolution.value.set(sf.z,sf.w))}}class N0 extends U0{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const n=e.length-3,i=new Float32Array(2*n);for(let s=0;s<n;s+=3)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];return super.setPositions(i),this}setColors(e){const n=e.length-3,i=new Float32Array(2*n);for(let s=0;s<n;s+=3)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];return super.setColors(i),this}setFromPoints(e){const n=e.length-1,i=new Float32Array(6*n);for(let s=0;s<n;s++)i[6*s]=e[s].x,i[6*s+1]=e[s].y,i[6*s+2]=e[s].z||0,i[6*s+3]=e[s+1].x,i[6*s+4]=e[s+1].y,i[6*s+5]=e[s+1].z||0;return super.setPositions(i),this}fromLine(e){const n=e.geometry;return this.setPositions(n.attributes.position.array),this}}class AL extends wL{constructor(e=new N0,n=new bh({color:Math.random()*16777215})){super(e,n),this.isLine2=!0,this.type="Line2"}}const CL={class:"viewport"},RL={key:0,class:"loading-overlay"},PL={class:"toolbar"},DL=Ze({__name:"Viewport3D",setup(t,{expose:e}){const n=Ds(),i=_e(null);let s,r,o,a,l,c=new Map,u=new Map,f=new Map,d=new Map,p=0;const g=_e(!1),m=_e(!1),_=_e(!1),h=_e(!1),b=_e(!0),x=_e(!0);let v=null,P=null,D=null,A=null,T,y,M=null,U=null;function k(E){const F=E.replace("#",""),V=parseInt(F,16);return isNaN(V)?13808780:V}function H(E,F){const V=document.createElement("canvas");V.width=128,V.height=128;const G=V.getContext("2d");G.clearRect(0,0,V.width,V.height),G.font="bold 72px Arial",G.textAlign="center",G.textBaseline="middle",G.lineWidth=8,G.strokeStyle="rgba(15, 23, 42, 0.9)",G.strokeText(E,64,64),G.fillStyle=F,G.fillText(E,64,64);const pe=new zm(V),Q=new b0({map:pe,transparent:!0,depthTest:!1}),ce=new lR(Q);return ce.scale.set(120,120,1),ce.renderOrder=1e3,ce}function J(E){const F=new to,V=E*.08,G=E*.04,pe=(ke,st)=>{const $=new TR(ke,new X(0,0,0),E,st,V,G);return $.traverse(Se=>{const te=Se;if(te.material){const de=te.material;de.depthTest=!1,de.depthWrite=!1,de.transparent=!0}}),$.renderOrder=999,$},Q=pe(new X(1,0,0),16724787),ce=pe(new X(0,1,0),3394662),xe=pe(new X(0,0,1),3377407),Ne=H("x","#ff3333");Ne.position.set(E+100,0,0);const be=H("y","#33cc66");be.position.set(0,E+100,0);const Be=H("z","#3388ff");return Be.position.set(0,0,E+100),F.add(Q,ce,xe,Ne,be,Be),F}function se(){if(!i.value)return;s=new aR,s.background=new it(988970);const E=i.value.clientWidth/i.value.clientHeight;r=new Kn(50,E,1,1e4),r.position.set(2500,2500,2500),r.lookAt(0,0,0),o=new cL({canvas:i.value,antialias:!0,preserveDrawingBuffer:!0}),o.setSize(i.value.clientWidth,i.value.clientHeight),o.setPixelRatio(window.devicePixelRatio),o.shadowMap.enabled=!0;const F=new yR(16777215,.5);s.add(F),A=new Yu(16777215,.9),A.position.set(2500,4e3,2500),A.target.position.set(0,0,0),s.add(A.target),A.castShadow=!0,A.shadow.mapSize.width=2048,A.shadow.mapSize.height=2048,A.shadow.camera.near=100,A.shadow.camera.far=8e3,A.shadow.camera.left=-1500,A.shadow.camera.right=1500,A.shadow.camera.top=1500,A.shadow.camera.bottom=-1500,A.shadow.bias=-.001,A.shadow.normalBias=.02,s.add(A);const V=new Yu(16777215,.4);V.position.set(-2500,2500,-2500),s.add(V);const G=new Yu(16777215,.3);G.position.set(-2e3,2e3,2e3),s.add(G);const pe=new za(4e3,4e3),Q=new dR({opacity:.3});P=new An(pe,Q),P.rotation.x=-Math.PI/2,P.position.y=-1,P.receiveShadow=!0,s.add(P),v=new ER(2e3,20,4473958,3355477),v.position.y=0,s.add(v),D=J(1e3),D.visible=!1,s.add(D),a=new fL(r,o.domElement),a.enableDamping=!0,a.dampingFactor=.1,a.target.set(0,1e3,0),a.update(),T=new SR,y=new Ve,U=new bh({color:4886745,linewidth:2,depthTest:!1,depthWrite:!1,resolution:new Ve(i.value.clientWidth,i.value.clientHeight)}),i.value.addEventListener("click",q),window.addEventListener("resize",ve)}function q(E){if(!i.value)return;const F=i.value.getBoundingClientRect();y.x=(E.clientX-F.left)/F.width*2-1,y.y=-((E.clientY-F.top)/F.height)*2+1,T.setFromCamera(y,r);const V=Array.from(c.values()).filter(pe=>pe.visible),G=T.intersectObjects(V);if(G.length>0){const pe=G[0].object,Q=pe.userData.componentId;Q&&(W(pe),n.selectComponent(Q))}else j(),n.selectComponent(null)}function W(E){j();const F=new Hm(E.geometry),V=[],G=F.attributes.position;for(let ce=0;ce<G.count;ce++)V.push(G.getX(ce),G.getY(ce),G.getZ(ce));const pe=new N0;pe.setPositions(V);const Q=new AL(pe,U);Q.name="selectionOutline",Q.computeLineDistances(),Q.renderOrder=999,E.add(Q),M=E}function j(){if(M){const E=M.getObjectByName("selectionOutline");E&&(M.remove(E),E.geometry.dispose()),M=null}}function ve(){if(!i.value)return;const E=i.value.clientWidth,F=i.value.clientHeight;r.aspect=E/F,r.updateProjectionMatrix(),o.setSize(E,F)}function we(E){I.forEach(Be=>{Be.pivotGroup&&s.remove(Be.pivotGroup)}),I.clear(),ue=[],c.forEach(Be=>s.remove(Be)),c.clear(),u.clear(),f.clear(),d.clear(),M=null;const F=E.position.x-E.length/2,V=E.position.y,G=E.position.z-E.width/2;for(const Be of E.components)Qe(Be,F,V,G);g.value=!1,m.value=!1,_.value=!1;const pe=0,Q=E.height/2,ce=0,xe=E.length*1,Ne=E.height*1.2,be=E.width*5;r.position.set(xe,Ne,be),a.target.set(pe,Q,ce),a.update()}function Ie(){const E=document.createElement("canvas");E.width=256,E.height=256;const F=E.getContext("2d");F.fillStyle="#8080ff",F.fillRect(0,0,256,256);for(let G=0;G<60;G++){const pe=Math.random()*256,Q=1+Math.random()*3,ce=(Math.random()-.5)*20;F.strokeStyle=`rgba(${128+ce}, ${128+ce}, 255, 0.3)`,F.lineWidth=Q,F.beginPath(),F.moveTo(0,pe);for(let xe=0;xe<256;xe+=10)F.lineTo(xe,pe+Math.sin(xe*.05)*5+Math.random()*2);F.stroke()}const V=new zm(E);return V.wrapS=wa,V.wrapT=wa,V.repeat.set(2,2),V}const Oe=Ie();function Qe(E,F,V,G,pe=0,Q=0,ce=0,xe){if(E.type==="double_door"){const Ae=pe+E.position.x,qe=Q+E.position.y,xt=ce+E.position.z,Ut=new br(E.length,E.height,E.width||1),ut=new Kc({visible:!1}),Ot=new An(Ut,ut);Ot.visible=!1,Ot.position.set(F+Ae+E.length/2,V+qe+E.height/2,G+xt+(E.width||1)/2),Ot.userData={componentId:E.id,componentName:E.name,componentType:E.type},s.add(Ot),c.set(E.id,Ot),E.children.forEach((pn,as)=>{Qe(pn,F,V,G,Ae,qe,xt,as===0?"left":"right")});return}const Ne=new br(E.length,E.height,E.width),be=k(E.color),Be=new pR({color:be,roughness:.6,metalness:.02,clearcoat:.1,clearcoatRoughness:.4,normalMap:Oe,normalScale:new Ve(.3,.3),transparent:!1,opacity:1,side:Mi}),ke=new An(Ne,Be);ke.castShadow=x.value,ke.receiveShadow=x.value;const st=new Hm(Ne),$=new Zc({color:0,opacity:.12,transparent:!0}),Se=new E0(st,$);ke.add(Se);const te=pe+E.position.x,de=Q+E.position.y,Pe=ce+E.position.z;ke.position.set(F+te+E.length/2,V+de+E.height/2,G+Pe+E.width/2),ke.rotation.set(er.degToRad(E.rotation.x),er.degToRad(E.rotation.y),er.degToRad(E.rotation.z)),ke.userData={componentId:E.id,componentName:E.name,componentType:E.type,doorSide:xe},ke.visible=E.is_visible,s.add(ke),c.set(E.id,ke),u.set(E.id,ke.position.clone()),f.set(E.id,Be.clone()),d.set(E.id,ke.rotation.clone());for(const Ae of E.children)Qe(Ae,F,V,G,te,de,Pe)}let ue=[];function ge(E,F,V,G,pe=.6){const Q=F==="position"?E.position[V]:E.rotation[V];ue.push({target:E,prop:F,axis:V,from:Q,to:G,progress:0,duration:pe})}function Re(E){ue=ue.filter(F=>{F.progress=Math.min(F.progress+E/F.duration,1);const V=F.progress<.5?4*F.progress*F.progress*F.progress:1-Math.pow(-2*F.progress+2,3)/2,G=F.from+(F.to-F.from)*V;return F.prop==="position"?F.target.position[F.axis]=G:F.target.rotation[F.axis]=G,F.progress<1})}function Te(){if(g.value)c.forEach((E,F)=>{const V=u.get(F);V&&(ge(E,"position","x",V.x),ge(E,"position","y",V.y),ge(E,"position","z",V.z))}),g.value=!1;else{const E=new X(0,1e3,0);c.forEach(F=>{const G=F.position.clone().sub(E).normalize().multiplyScalar(300);ge(F,"position","x",F.position.x+G.x),ge(F,"position","y",F.position.y+G.y),ge(F,"position","z",F.position.z+G.z)}),g.value=!0}}function Ue(){m.value?(c.forEach((E,F)=>{const V=f.get(F);V&&(E.material=V.clone())}),m.value=!1):(c.forEach(E=>{const F=E.material;F.transparent=!0,F.opacity=.3,F.needsUpdate=!0}),m.value=!0)}function nt(){h.value=!h.value,D&&(D.visible=h.value)}function ye(){b.value=!b.value,v&&(v.visible=b.value)}function He(){x.value=!x.value;const E=x.value;A&&(A.castShadow=E),P&&(P.visible=E),c.forEach(F=>{F.castShadow=E,F.receiveShadow=E})}let I=new Map;function B(E){return E==="door"}function C(E,F){for(const V of E){if(V.id===F)return V;if(V.children){const G=C(V.children,F);if(G)return G}}return null}function he(E){const F=[],V=n.cabinet;if(!V)return F;const G=C(V.components,E);if(G&&G.children)for(const pe of G.children)c.has(pe.id)&&F.push(pe.id);return F}function ie(){_.value?(c.forEach((E,F)=>{const V=E.userData.componentType;if(B(V)||V==="drawer"){const G=I.get(F);if(!G)return;if(B(V)&&G.pivotGroup)ge(G.pivotGroup,"rotation","y",0,.6),setTimeout(()=>{const pe=G.pivotGroup;if(G.childMeshIds)for(const Q of G.childMeshIds){const ce=c.get(Q),xe=I.get(Q);ce&&xe&&(pe.remove(ce),xe.parent.add(ce),ce.position.set(xe.posX,xe.posY,xe.posZ),ce.rotation.set(0,xe.rotY,0))}pe.remove(E),G.parent.add(E),E.position.set(G.posX,G.posY,G.posZ),E.rotation.y=G.rotY,s.remove(pe)},650);else if(V==="drawer"&&(ge(E,"position","z",G.posZ),G.childMeshIds))for(const pe of G.childMeshIds){const Q=c.get(pe),ce=I.get(pe);Q&&ce&&ge(Q,"position","z",ce.posZ)}}}),_.value=!1,setTimeout(()=>I.clear(),700)):(c.forEach(E=>{const F=E.userData.componentType,V=E.userData.componentId;if(B(F)){const G=he(V),pe=E.userData.doorSide,Q=new X;E.getWorldPosition(Q),E.rotation.y,I.set(V,{parent:E.parent,posX:E.position.x,posY:E.position.y,posZ:E.position.z,rotY:E.rotation.y,worldPosX:Q.x,worldPosY:Q.y,worldPosZ:Q.z,childMeshIds:G});const ce=E.geometry;ce.computeBoundingBox();const xe=ce.boundingBox,Ne=(xe.max.x-xe.min.x)/2;let be,Be;pe==="right"?(be=E.position.x+Ne,Be=er.degToRad(120)):(be=E.position.x-Ne,Be=-er.degToRad(120));const ke=Q.x+(be-E.position.x),st=new to;st.position.set(ke,Q.y,Q.z),s.add(st),s.remove(E),st.add(E),E.position.x=pe==="right"?-Ne:Ne,E.position.y=0,E.position.z=0,E.rotation.y=0;for(const $ of G){const Se=c.get($);if(Se){const te=new X;Se.getWorldPosition(te),I.set($,{parent:Se.parent,posX:Se.position.x,posY:Se.position.y,posZ:Se.position.z,rotY:Se.rotation.y,worldPosX:te.x,worldPosY:te.y,worldPosZ:te.z}),s.remove(Se),st.add(Se),Se.position.x=te.x-ke,Se.position.y=0,Se.position.z=te.z-Q.z}}I.get(V).pivotGroup=st,ge(st,"rotation","y",Be)}else if(F==="drawer"){const G=E.geometry;G.computeBoundingBox();const pe=G.boundingBox,ce=(pe.max.z-pe.min.z)*2/3,xe=he(V);I.set(V,{parent:E.parent,posX:E.position.x,posY:E.position.y,posZ:E.position.z,rotY:E.rotation.y,childMeshIds:xe}),ge(E,"position","z",E.position.z+ce);for(const Ne of xe){const be=c.get(Ne);be&&(I.set(Ne,{parent:be.parent,posX:be.position.x,posY:be.position.y,posZ:be.position.z,rotY:be.rotation.y}),ge(be,"position","z",be.position.z+ce))}}}),_.value=!0)}function ne(){_.value&&(c.forEach((E,F)=>{const V=E.userData.componentType;if(B(V)||V==="drawer"){const G=I.get(F);if(!G)return;if(B(V)&&G.pivotGroup){const pe=G.pivotGroup;if(G.childMeshIds)for(const Q of G.childMeshIds){const ce=c.get(Q),xe=I.get(Q);ce&&xe&&(pe.remove(ce),xe.parent.add(ce),ce.position.set(xe.posX,xe.posY,xe.posZ),ce.rotation.set(0,xe.rotY,0))}pe.remove(E),G.parent.add(E),E.position.set(G.posX,G.posY,G.posZ),E.rotation.y=G.rotY,s.remove(pe)}else if(V==="drawer"&&(E.position.z=G.posZ,G.childMeshIds))for(const pe of G.childMeshIds){const Q=c.get(pe),ce=I.get(pe);Q&&ce&&(Q.position.z=ce.posZ)}}}),I.clear()),c.forEach((E,F)=>{const V=u.get(F),G=d.get(F);V&&E.position.copy(V),G&&E.rotation.copy(G)}),c.forEach((E,F)=>{const V=f.get(F);V&&(E.material=V.clone())}),j(),n.selectComponent(null),g.value=!1,m.value=!1,_.value=!1}function le(E=0){l=requestAnimationFrame(le);const F=p?(E-p)/1e3:0;p=E,Re(F),a.update(),o.render(s,r)}We(()=>n.cabinet,E=>{E&&s&&we(E)},{deep:!0}),We(()=>n.selectedComponentId,E=>{if(E){const F=c.get(E);F&&F!==M&&W(F)}else j()}),Ft(()=>{se(),le()}),Na(()=>{var E;cancelAnimationFrame(l),window.removeEventListener("resize",ve),window.removeEventListener("enter-render-mode",Z),window.removeEventListener("exit-render-mode",O),(E=i.value)==null||E.removeEventListener("click",q),o==null||o.dispose()});let fe=null;function ee(){!r||!a||(fe={background:s.background instanceof it?s.background.clone():null,isExploded:g.value,isTransparent:m.value,doorsOpen:_.value,isAxesVisible:h.value,isGridVisible:b.value,isShadowVisible:x.value,cameraPosition:r.position.clone(),cameraTarget:a.target.clone()},_.value&&(c.forEach((E,F)=>{const V=E.userData.componentType,G=I.get(F);if(G){if(B(V)&&G.pivotGroup){const pe=G.pivotGroup;if(G.childMeshIds)for(const Q of G.childMeshIds){const ce=c.get(Q),xe=I.get(Q);ce&&xe&&(pe.remove(ce),xe.parent.add(ce),ce.position.set(xe.posX,xe.posY,xe.posZ),ce.rotation.set(0,xe.rotY,0))}pe.remove(E),G.parent.add(E),E.position.set(G.posX,G.posY,G.posZ),E.rotation.y=G.rotY,s.remove(pe)}else if(V==="drawer"&&(E.position.z=G.posZ,G.childMeshIds))for(const pe of G.childMeshIds){const Q=c.get(pe),ce=I.get(pe);Q&&ce&&(Q.position.z=ce.posZ)}}}),I.clear(),_.value=!1),(g.value||m.value)&&(c.forEach((E,F)=>{const V=u.get(F),G=d.get(F),pe=f.get(F);V&&E.position.copy(V),G&&E.rotation.copy(G),pe&&m.value&&(E.material=pe.clone())}),g.value=!1,m.value=!1),h.value&&D&&(D.visible=!1,h.value=!1),b.value&&v&&(v.visible=!1,b.value=!1),x.value&&(A&&(A.castShadow=!1),P&&(P.visible=!1),c.forEach(E=>{E.castShadow=!1,E.receiveShadow=!1}),x.value=!1),s.background=new it(16777215))}function w(){if(fe){if(s.background=fe.background||new it(988970),fe.isShadowVisible&&(A&&(A.castShadow=!0),P&&(P.visible=!0),c.forEach(E=>{E.castShadow=!0,E.receiveShadow=!0}),x.value=!0),fe.isGridVisible&&v&&(v.visible=!0,b.value=!0),fe.isAxesVisible&&D&&(D.visible=!0,h.value=!0),fe.isTransparent&&(c.forEach(E=>{const F=E.material;F.transparent=!0,F.opacity=.3,F.needsUpdate=!0}),m.value=!0),fe.isExploded){const E=new X(0,1e3,0);c.forEach(F=>{const G=F.position.clone().sub(E).normalize().multiplyScalar(300);F.position.add(G)}),g.value=!0}fe.doorsOpen&&ie(),r.position.copy(fe.cameraPosition),a.target.copy(fe.cameraTarget),a.update(),fe=null}}function S(E){if(!r||!a)return;const F=n.cabinet,V=0,G=F?F.height/2:1e3,pe=0,Q=F?F.length:800,ce=F?F.height:2e3,xe=F?F.width:600,Ne=r.aspect,be=r.fov*(Math.PI/180),Be=1.5,ke=be/2,st=Math.atan(Math.tan(ke)*Ne);function $(Se,te,de){const Pe=-de,Ae=0,qe=Se,xt=Math.sqrt(Pe*Pe+Ae*Ae+qe*qe),Ut=Pe/xt,ut=Ae/xt,Ot=qe/xt,pn=ut*de-Ot*te,as=Ot*Se-Ut*de,Tr=Ut*te-ut*Se,ti=Math.sqrt(pn*pn+as*as+Tr*Tr),Lo=pn/ti,Ha=as/ti,Va=Tr/ti,wr=[[0,0,-xe/2],[Q,0,-xe/2],[0,ce,-xe/2],[Q,ce,-xe/2],[0,0,xe/2],[Q,0,xe/2],[0,ce,xe/2],[Q,ce,xe/2]];let Ar=0,ls=0;for(const[$a,Xa,ja]of wr){const Ya=Math.abs($a*Ut+Xa*ut+ja*Ot),qa=Math.abs($a*Lo+Xa*Ha+ja*Va);Ya>Ar&&(Ar=Ya),qa>ls&&(ls=qa)}const Ga=Ar/Math.tan(st),Wa=ls/Math.tan(ke);return Math.max(Ga,Wa)*Be}switch(E){case"front":{const Se=$(0,0,-1)+xe/2;r.position.set(V,G,pe+Se);break}case"top":{const de=$(0,-.7,-.3);r.position.set(V,G+de*.7,pe+de*.3);break}case"side_45":{const te=$(-1,-1,-1)/Math.sqrt(3);r.position.set(V+te,G+te,pe+te);break}}a.target.set(V,G,pe),r.up.set(0,1,0),a.update()}let z=!1;function Z(E){const F=E.detail,V=(F==null?void 0:F.angle)||"front";z||(ee(),z=!0),S(V)}function O(){z&&(w(),z=!1)}return window.addEventListener("enter-render-mode",Z),window.addEventListener("exit-render-mode",O),e({toggleExplode:Te,toggleTransparent:Ue,toggleDoors:ie,toggleAxes:nt,toggleGrid:ye,toggleShadow:He,resetAll:ne,setCameraAngle:S,enterRenderMode:ee,exitRenderMode:w}),(E,F)=>(ae(),me("div",CL,[N("canvas",{ref_key:"canvasRef",ref:i,class:"canvas"},null,512),L(n).cabinet?tt("",!0):(ae(),me("div",RL,[...F[0]||(F[0]=[N("p",null,"等待加载柜子模型...",-1)])])),N("div",PL,[N("button",{class:De(["tool-btn",{active:g.value}]),onClick:Te,title:"爆炸图"},"爆炸图",2),N("button",{class:De(["tool-btn",{active:m.value}]),onClick:Ue,title:"透视图"},"透视图",2),N("button",{class:De(["tool-btn",{active:_.value}]),onClick:ie,title:"门板/抽屉打开"},"开门",2),N("button",{class:De(["tool-btn",{active:h.value}]),onClick:nt,title:"显示/隐藏坐标系"},"坐标系",2),N("button",{class:De(["tool-btn",{active:b.value}]),onClick:ye,title:"显示/隐藏地面网格"},"网格",2),N("button",{class:De(["tool-btn",{active:x.value}]),onClick:He,title:"显示/隐藏阴影"},"阴影",2),N("button",{class:"tool-btn",onClick:ne,title:"复原"},"复原")]),F[1]||(F[1]=N("div",{class:"hint"},[N("span",null,"点击组件可选中查看属性")],-1))]))}}),Cg=Ls(DL,[["__scopeId","data-v-b37a0df0"]]),IL={class:"chat-panel"},LL={key:0,class:"empty-state"},UL={class:"examples"},NL=["onClick"],OL={class:"message-header"},FL={key:0,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},BL={key:1,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},kL={key:2,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},zL={class:"role-label"},HL={class:"content"},VL={key:0,class:"stopped-actions"},GL=["onClick"],WL={key:1,class:"message assistant streaming-msg"},$L={class:"content streaming"},XL={key:0,class:"thinking-steps"},jL={key:0,class:"step-spinner"},YL={key:1,class:"step-done",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},qL={class:"step-text"},KL={key:1,class:"stream-text"},ZL={key:2,class:"stream-text"},JL={class:"chat-input"},QL=["placeholder","disabled"],e3=["disabled"],t3=Ze({__name:"ChatPanel",setup(t){const e=Qr(),n=Co(),i=_e(""),s=_e(null),r=["中间加两块层板形成高度3:2:1的三层空间，上层加一个双开门，下层加一个抽屉","在中间加一块层板","底板延伸出10cm","背板换成棕色"];async function o(){const f=i.value.trim();!f||!n.isConnected||e.isStreaming||(i.value="",n.sendChatMessage(f),await c())}async function a(){const f=n.currentProjectId;try{await fetch(fn(`/api/projects/${f}/stop`),{method:"POST"})}catch(d){console.error("停止对话请求失败:",d)}}function l(f){f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),o())}async function c(){await qt(),s.value&&(s.value.scrollTop=s.value.scrollHeight)}function u(f){i.value=f}return We(()=>e.messages.length,()=>{c()}),We(()=>e.currentStreamContent,()=>{c()}),We(()=>e.thinkingSteps.length,()=>{c()}),(f,d)=>(ae(),me("div",IL,[N("div",{class:"messages",ref_key:"messagesContainer",ref:s,role:"log","aria-live":"polite"},[L(e).messages.length===0&&!L(e).isStreaming?(ae(),me("div",LL,[d[2]||(d[2]=N("div",{class:"empty-icon-wrapper"},[N("svg",{class:"empty-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},[N("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})])],-1)),d[3]||(d[3]=N("p",{class:"empty-title"},"输入自然语言指令来编辑柜子",-1)),N("div",UL,[(ae(),me(rt,null,zt(r,p=>N("button",{key:p,class:"example",onClick:g=>u(p)},[d[1]||(d[1]=N("svg",{class:"example-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[N("polyline",{points:"9 18 15 12 9 6"})],-1)),N("span",null,Xe(p),1)],8,NL)),64))])])):tt("",!0),(ae(!0),me(rt,null,zt(L(e).messages,p=>(ae(),me("div",{key:p.id,class:De(["message",p.role])},[N("div",OL,[N("div",{class:De(["role-avatar",p.role])},[p.role==="user"?(ae(),me("svg",FL,[...d[4]||(d[4]=[N("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},null,-1),N("circle",{cx:"12",cy:"7",r:"4"},null,-1)])])):p.role==="assistant"?(ae(),me("svg",BL,[...d[5]||(d[5]=[gf('<rect x="3" y="11" width="18" height="10" rx="2" data-v-6f418fae></rect><circle cx="12" cy="5" r="2" data-v-6f418fae></circle><path d="M12 7v4" data-v-6f418fae></path><line x1="8" y1="16" x2="8" y2="16" data-v-6f418fae></line><line x1="16" y1="16" x2="16" y2="16" data-v-6f418fae></line>',5)])])):(ae(),me("svg",kL,[...d[6]||(d[6]=[N("circle",{cx:"12",cy:"12",r:"10"},null,-1),N("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),N("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])]))],2),N("span",zL,Xe(p.role==="user"?"你":p.role==="assistant"?"AI":"系统"),1)]),N("div",HL,Xe(p.content),1),p.stopped?(ae(),me("div",VL,[d[8]||(d[8]=N("span",{class:"stopped-badge"},[N("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[N("rect",{x:"6",y:"6",width:"12",height:"12",rx:"2"})]),ir(" 已停止 ")],-1)),!L(e).isStreaming&&!p.continued?(ae(),me("button",{key:0,onClick:g=>L(n).continueConversation(p.thinkingSteps||[],p.id),class:"continue-btn"},[...d[7]||(d[7]=[N("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[N("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),ir(" 继续执行 ",-1)])],8,GL)):tt("",!0)])):tt("",!0)],2))),128)),L(e).isStreaming?(ae(),me("div",WL,[d[12]||(d[12]=gf('<div class="message-header" data-v-6f418fae><div class="role-avatar assistant" data-v-6f418fae><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6f418fae><rect x="3" y="11" width="18" height="10" rx="2" data-v-6f418fae></rect><circle cx="12" cy="5" r="2" data-v-6f418fae></circle><path d="M12 7v4" data-v-6f418fae></path><line x1="8" y1="16" x2="8" y2="16" data-v-6f418fae></line><line x1="16" y1="16" x2="16" y2="16" data-v-6f418fae></line></svg></div><span class="role-label" data-v-6f418fae>AI</span></div>',1)),N("div",$L,[L(e).thinkingSteps.length>0?(ae(),me("div",XL,[(ae(!0),me(rt,null,zt(L(e).thinkingSteps,(p,g)=>(ae(),me("div",{key:g,class:De(["thinking-step",{"step-active":g===L(e).thinkingSteps.length-1&&!L(e).currentStreamContent}])},[g===L(e).thinkingSteps.length-1&&!L(e).currentStreamContent?(ae(),me("span",jL)):(ae(),me("svg",YL,[...d[9]||(d[9]=[N("polyline",{points:"20 6 9 17 4 12"},null,-1)])])),N("span",qL,Xe(p),1)],2))),128))])):tt("",!0),L(e).currentStreamContent?(ae(),me("div",KL,[d[10]||(d[10]=N("span",{class:"typing-indicator"},null,-1)),ir(" "+Xe(L(e).currentStreamContent),1)])):L(e).thinkingSteps.length===0?(ae(),me("div",ZL,[...d[11]||(d[11]=[N("span",{class:"typing-indicator"},null,-1),ir(" 思考中... ",-1)])])):tt("",!0)])])):tt("",!0)],512),N("div",JL,[Dt(N("textarea",{"onUpdate:modelValue":d[0]||(d[0]=p=>i.value=p),onKeydown:l,placeholder:L(e).isStreaming?"等待回复完成...":"输入编辑指令...",rows:"2",disabled:!L(n).isConnected||L(e).isStreaming,"aria-label":"编辑指令输入"},null,40,QL),[[hc,i.value]]),L(e).isStreaming?(ae(),me("button",{key:0,onClick:a,class:"send-btn stop-btn",title:"停止对话","aria-label":"停止对话"},[...d[13]||(d[13]=[N("svg",{viewBox:"0 0 24 24",fill:"currentColor"},[N("rect",{x:"6",y:"6",width:"12",height:"12",rx:"2"})],-1)])])):(ae(),me("button",{key:1,onClick:o,disabled:!i.value.trim()||!L(n).isConnected,class:"send-btn",title:"发送","aria-label":"发送消息"},[...d[14]||(d[14]=[N("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[N("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),N("polyline",{points:"5 12 12 5 19 12"})],-1)])],8,e3))])]))}}),Rg=Ls(t3,[["__scopeId","data-v-6f418fae"]]),n3={class:"component-panel"},i3={class:"tree-section"},s3={key:0,class:"empty"},r3={key:1,class:"tree"},o3=["onClick"],a3={class:"item-content"},l3=["onClick"],c3={key:1,class:"expand-placeholder"},u3={class:"component-name"},f3={class:"component-type"},d3={key:2,class:"children-count"},h3={key:0,class:"children"},p3=["onClick"],m3={class:"item-content"},g3=["onClick"],_3={key:1,class:"expand-placeholder"},v3={class:"component-name"},y3={class:"component-type"},x3={key:0,class:"children"},b3=["onClick"],S3={class:"item-content"},M3={class:"component-name"},E3={class:"component-type"},T3={class:"detail-section"},w3={class:"detail-content"},A3={key:0,class:"properties"},C3={class:"prop-row"},R3={class:"prop-value"},P3={class:"prop-row"},D3={class:"prop-value"},I3={class:"prop-row"},L3={class:"prop-value"},U3={class:"prop-row"},N3={class:"prop-value"},O3={class:"prop-row"},F3=["value"],B3=["value"],k3={class:"prop-row color-row"},z3={class:"color-picker"},H3=["title","onClick"],V3={key:1,class:"empty-hint"},G3=Ze({__name:"ComponentPanel",setup(t){const e=Ds(),n=Co(),i=[{name:"原木色",value:"#D2B48C"},{name:"白色",value:"#FFFFFF"},{name:"深胡桃",value:"#5C3A21"},{name:"浅橡木",value:"#C4A882"},{name:"灰色",value:"#B0B0B0"},{name:"黑色",value:"#333333"},{name:"蓝色",value:"#4A90D9"},{name:"绿色",value:"#4ECCA3"},{name:"红色",value:"#E94560"}],s=[{name:"多层板",value:"plywood"},{name:"中密度板",value:"mdf"},{name:"刨花板",value:"particleboard"},{name:"橡木",value:"oak"},{name:"胡桃木",value:"walnut"}],r=Me(()=>{var h;return((h=e.cabinet)==null?void 0:h.components)||[]}),o=Me(()=>e.selectedComponent);function a(h){e.selectComponent(h===e.selectedComponentId?null:h)}function l(h,b){b.stopPropagation(),e.toggleExpand(h)}function c(h){return e.isExpanded(h)}function u(h){return h.children&&h.children.length>0}function f(h){var b;return((b=h.children)==null?void 0:b.length)||0}function d(h){return{side_panel:"侧板",back_panel:"背板",top_panel:"顶板",bottom_panel:"底板",shelf:"隔板",door:"单开门",double_door:"双开门",drawer:"抽屉",divider:"分隔",handle:"拉手",custom:"自定义"}[h]||h}async function p(h,b){const x=n.currentProjectId;if(x)try{const v=await fetch(fn(`/api/projects/${x}/components/${h}`),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({component_id:h,properties:b})});if(v.ok){const P=await v.json();P.cabinet&&e.setCabinet(P.cabinet)}}catch(v){console.error("修改组件属性失败:",v)}}async function g(h){o.value&&await p(o.value.id,{color:h})}async function m(h){o.value&&await p(o.value.id,{material:h})}const _=_e(null);return We(()=>e.selectedComponentId,async h=>{var x;if(!h)return;await qt();const b=(x=_.value)==null?void 0:x.querySelector(".tree-item.selected");b&&b.scrollIntoView({behavior:"smooth",block:"nearest"})}),(h,b)=>(ae(),me("div",n3,[N("div",i3,[b[2]||(b[2]=N("div",{class:"section-title"},"组件树",-1)),N("div",{class:"tree-content",ref_key:"treeContentRef",ref:_},[r.value.length===0?(ae(),me("div",s3,"暂无组件")):(ae(),me("div",r3,[(ae(!0),me(rt,null,zt(r.value,x=>(ae(),me("div",{key:x.id,class:De(["tree-item",{selected:L(e).selectedComponentId===x.id}]),onClick:v=>a(x.id)},[N("div",a3,[u(x)?(ae(),me("button",{key:0,class:De(["expand-btn",{expanded:c(x.id)}]),onClick:v=>l(x.id,v)}," ▶ ",10,l3)):(ae(),me("span",c3)),N("span",u3,Xe(x.name),1),N("span",f3,Xe(d(x.type)),1),u(x)?(ae(),me("span",d3,Xe(f(x)),1)):tt("",!0)]),c(x.id)&&u(x)?(ae(),me("div",h3,[(ae(!0),me(rt,null,zt(x.children,v=>(ae(),me("div",{key:v.id,class:De(["tree-item child",{selected:L(e).selectedComponentId===v.id}]),onClick:ya(P=>a(v.id),["stop"])},[N("div",m3,[u(v)?(ae(),me("button",{key:0,class:De(["expand-btn",{expanded:c(v.id)}]),onClick:P=>l(v.id,P)}," ▶ ",10,g3)):(ae(),me("span",_3)),N("span",v3,Xe(v.name),1),N("span",y3,Xe(d(v.type)),1)]),c(v.id)&&u(v)?(ae(),me("div",x3,[(ae(!0),me(rt,null,zt(v.children,P=>(ae(),me("div",{key:P.id,class:De(["tree-item grandchild",{selected:L(e).selectedComponentId===P.id}]),onClick:ya(D=>a(P.id),["stop"])},[N("div",S3,[b[1]||(b[1]=N("span",{class:"expand-placeholder"},null,-1)),N("span",M3,Xe(P.name),1),N("span",E3,Xe(d(P.type)),1)])],10,b3))),128))])):tt("",!0)],10,p3))),128))])):tt("",!0)],10,o3))),128))]))],512)]),N("div",T3,[b[9]||(b[9]=N("div",{class:"section-title"},"属性",-1)),N("div",w3,[o.value?(ae(),me("div",A3,[N("div",C3,[b[3]||(b[3]=N("span",{class:"prop-label"},"名称",-1)),N("span",R3,Xe(o.value.name),1)]),N("div",P3,[b[4]||(b[4]=N("span",{class:"prop-label"},"类型",-1)),N("span",D3,Xe(d(o.value.type)),1)]),N("div",I3,[b[5]||(b[5]=N("span",{class:"prop-label"},"尺寸",-1)),N("span",L3,Xe(o.value.length)+" × "+Xe(o.value.height)+" × "+Xe(o.value.width)+" mm ",1)]),N("div",U3,[b[6]||(b[6]=N("span",{class:"prop-label"},"位置",-1)),N("span",N3," X:"+Xe(o.value.position.x)+" Y:"+Xe(o.value.position.y)+" Z:"+Xe(o.value.position.z),1)]),N("div",O3,[b[7]||(b[7]=N("span",{class:"prop-label"},"材料",-1)),N("select",{class:"prop-select",value:o.value.material,onChange:b[0]||(b[0]=x=>m(x.target.value))},[(ae(),me(rt,null,zt(s,x=>N("option",{key:x.value,value:x.value},Xe(x.name),9,B3)),64))],40,F3)]),N("div",k3,[b[8]||(b[8]=N("span",{class:"prop-label"},"颜色",-1)),N("div",z3,[(ae(),me(rt,null,zt(i,x=>N("div",{key:x.value,class:De(["color-option",{active:o.value.color===x.value}]),style:Hn({background:x.value}),title:x.name,onClick:v=>g(x.value)},null,14,H3)),64))])])])):(ae(),me("div",V3," 点击组件查看属性 "))])])]))}}),Pg=Ls(G3,[["__scopeId","data-v-2471d08c"]]),W3={class:"history-panel"},$3={class:"snapshot-list"},X3={key:0,class:"empty"},j3=["onClick"],Y3={class:"snap-info"},q3={class:"snap-index"},K3={class:"snap-desc"},Z3={class:"snap-time"},J3=Ze({__name:"HistoryPanel",setup(t){const e=Ds(),n=Co(),i=_e([]),s=_e(-1);async function r(){const l=n.currentProjectId;if(l)try{const u=await(await fetch(fn(`/api/projects/${l}/snapshots`))).json();i.value=u.snapshots||[],s.value=u.current_index??-1}catch(c){console.error("加载快照列表失败:",c)}}async function o(l){const c=n.currentProjectId;if(c)try{const f=await(await fetch(fn(`/api/projects/${c}/snapshots/${l}/restore`),{method:"POST"})).json();f.success&&f.cabinet&&(e.setCabinet(f.cabinet),s.value=l)}catch(u){console.error("恢复快照失败:",u)}}function a(l){return new Date(l*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}return Ft(()=>{r()}),We(()=>n.currentProjectId,()=>{r()}),We(()=>e.cabinet,()=>{r()},{deep:!0}),(l,c)=>(ae(),me("div",W3,[N("div",$3,[i.value.length===0?(ae(),me("div",X3,"暂无历史记录")):tt("",!0),(ae(!0),me(rt,null,zt([...i.value].reverse(),u=>(ae(),me("div",{key:u.index,class:De(["snapshot-item",{current:u.index===s.value}]),onClick:f=>o(u.index)},[N("div",Y3,[N("span",q3,"v"+Xe(u.index+1),1),N("span",K3,Xe(u.description),1)]),N("span",Z3,Xe(a(u.timestamp)),1)],10,j3))),128))])]))}}),Dg=Ls(J3,[["__scopeId","data-v-ab1140c6"]]),Q3={class:"scheme-panel"},eU={class:"action-bar"},tU={class:"input-group"},nU={class:"action-row"},iU={class:"template-group"},sU=["value"],rU={class:"scheme-list"},oU={key:0,class:"empty"},aU=["onClick"],lU={class:"scheme-info"},cU=["onKeydown","onBlur"],uU={key:1,class:"scheme-name"},fU={class:"scheme-actions"},dU={class:"scheme-time"},hU=["onClick"],pU=["onClick"],mU=Ze({__name:"SchemePanel",setup(t){const e=Ds(),n=Co(),i=Qr(),s=_e([]),r=_e(""),o=_e("cabinet"),a=_e(null),l=_e(""),c=[{value:"cabinet",label:"标准柜"},{value:"kitchen",label:"厨柜"},{value:"wardrobe",label:"衣柜"},{value:"bookshelf",label:"书架"}];async function u(){try{const b=await fetch(fn("/api/projects"));s.value=await b.json()}catch(b){console.error("加载方案列表失败:",b)}}We(()=>n.schemeListVersion,()=>{u()});async function f(b){if(b!==n.currentProjectId)try{n.stopCurrentConversation(!1),i.clearMessages(),n.disconnect();const v=await(await fetch(fn(`/api/projects/${b}`))).json();v.cabinet&&(e.setCabinet(v.cabinet),n.connect(b))}catch(x){console.error("切换方案失败:",x)}}async function d(){const b=r.value.trim()||"新方案",x=o.value;r.value="";try{const P=await(await fetch(fn(`/api/projects?name=${encodeURIComponent(b)}&template=${encodeURIComponent(x)}`),{method:"POST"})).json();P.id&&(await u(),await f(P.id))}catch(v){console.error("创建方案失败:",v)}}async function p(b,x){x.stopPropagation();try{await fetch(fn(`/api/projects/${b}`),{method:"DELETE"}),await u()}catch(v){console.error("删除方案失败:",v)}}function g(b,x){x.stopPropagation(),a.value=b.id,l.value=b.name}async function m(b){const x=l.value.trim();if(!x){_();return}try{await fetch(fn(`/api/projects/${b}?name=${encodeURIComponent(x)}`),{method:"PUT"}),await u()}catch(v){console.error("重命名失败:",v)}_()}function _(){a.value=null,l.value=""}function h(b){return new Date(b).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}return Ft(()=>{u()}),(b,x)=>(ae(),me("div",Q3,[N("div",eU,[N("div",tU,[x[4]||(x[4]=N("svg",{class:"input-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[N("path",{d:"M12 5v14M5 12h14"})],-1)),Dt(N("input",{"onUpdate:modelValue":x[0]||(x[0]=v=>r.value=v),class:"name-input",placeholder:"新方案名称...",onKeydown:oa(d,["enter"])},null,544),[[hc,r.value]])]),N("div",nU,[N("div",iU,[x[5]||(x[5]=gf('<svg class="template-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-97b9bf2d><rect x="3" y="3" width="7" height="7" data-v-97b9bf2d></rect><rect x="14" y="3" width="7" height="7" data-v-97b9bf2d></rect><rect x="3" y="14" width="7" height="7" data-v-97b9bf2d></rect><rect x="14" y="14" width="7" height="7" data-v-97b9bf2d></rect></svg>',1)),Dt(N("select",{"onUpdate:modelValue":x[1]||(x[1]=v=>o.value=v),class:"template-select"},[(ae(),me(rt,null,zt(c,v=>N("option",{key:v.value,value:v.value},Xe(v.label),9,sU)),64))],512),[[Zr,o.value]])]),N("button",{class:"action-btn create",onClick:d},[...x[6]||(x[6]=[N("svg",{class:"btn-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[N("path",{d:"M12 5v14M5 12h14"})],-1),N("span",null,"新建",-1)])])])]),N("div",rU,[s.value.length===0?(ae(),me("div",oU,"暂无方案")):tt("",!0),(ae(!0),me(rt,null,zt(s.value,v=>(ae(),me("div",{key:v.id,class:De(["scheme-item",{current:v.id===L(n).currentProjectId}]),onClick:P=>f(v.id)},[N("div",lU,[a.value===v.id?Dt((ae(),me("input",{key:0,"onUpdate:modelValue":x[2]||(x[2]=P=>l.value=P),class:"rename-input",onClick:x[3]||(x[3]=ya(()=>{},["stop"])),onKeydown:[oa(P=>m(v.id),["enter"]),oa(_,["escape"])],onBlur:P=>m(v.id),autofocus:""},null,40,cU)),[[hc,l.value]]):(ae(),me("span",uU,Xe(v.name),1))]),N("div",fU,[N("span",dU,Xe(h(v.updated_at)),1),N("button",{class:"action-icon-btn",onClick:P=>g(v,P),title:"重命名"},"✎",8,hU),N("button",{class:"delete-btn",onClick:P=>p(v.id,P),title:"删除"},"×",8,pU)])],10,aU))),128))])]))}}),Ig=Ls(mU,[["__scopeId","data-v-97b9bf2d"]]),gU={class:"toast-container"},_U=["onClick"],vU={class:"toast-icon"},yU={class:"toast-message"},xU=Ze({__name:"ToastNotification",setup(t,{expose:e}){const n=_e([]);let i=0;function s(a,l="info",c=3e3){const u=i++,f={id:u,message:a,type:l,duration:c};n.value.push(f),c>0&&setTimeout(()=>{r(u)},c)}function r(a){const l=n.value.findIndex(c=>c.id===a);l>-1&&n.value.splice(l,1)}function o(a){switch(a){case"success":return"✓";case"error":return"✕";case"warning":return"⚠";case"info":return"ℹ"}}return e({addToast:s}),(a,l)=>(ae(),me("div",gU,[Ke(sb,{name:"toast"},{default:It(()=>[(ae(!0),me(rt,null,zt(n.value,c=>(ae(),me("div",{key:c.id,class:De(["toast",c.type]),onClick:u=>r(c.id)},[N("span",vU,Xe(o(c.type)),1),N("span",yU,Xe(c.message),1)],10,_U))),128))]),_:1})]))}}),bU=Ls(xU,[["__scopeId","data-v-f3832dd5"]]),SU={class:"main-content"},MU={class:"viewport-wrapper"},EU={class:"tool-panel"},TU={class:"tool-tabs"},wU=["onClick"],AU={class:"tab-icon"},CU={class:"tab-label"},RU={class:"tool-content"},PU={class:"tab-panel"},DU={class:"tab-panel"},IU={class:"tab-panel"},LU={class:"tab-panel"},UU={class:"mobile-viewport"},NU={class:"mobile-tabs"},OU=["onClick"],FU={class:"tab-icon"},BU={class:"tab-label"},kU={class:"mobile-tool-panel"},zU={class:"tab-panel"},HU={class:"tab-panel"},VU={class:"tab-panel"},GU={class:"tab-panel"},WU=Ze({__name:"App",setup(t){const e=Co(),n=Ds(),i=_e("chat"),s=_e(null),r=_e(!1);function o(){r.value=window.innerWidth<768}Ft(()=>{const l=(u,f)=>{var d;(d=s.value)==null||d.addToast(u,f)};Ab(l),wb(l);const c=localStorage.getItem("lastProjectId")||"default";e.connect(c),o(),window.addEventListener("resize",o)}),We(()=>n.componentClickSignal,()=>{n.selectedComponentId&&(i.value="component")});const a=[{key:"chat",icon:"💬",label:"对话"},{key:"component",icon:"🧩",label:"组件"},{key:"history",icon:"📋",label:"历史"},{key:"scheme",icon:"📁",label:"方案"}];return(l,c)=>(ae(),me("div",{class:De(["app-container",{"is-mobile":r.value}])},[r.value?(ae(),me(rt,{key:1},[N("div",UU,[Ke(Cg)]),Ke(cm,{class:"mobile-header"}),N("div",NU,[(ae(),me(rt,null,zt(a,u=>N("button",{key:u.key,class:De(["mobile-tab-btn",{active:i.value===u.key}]),onClick:f=>i.value=u.key},[N("span",FU,Xe(u.icon),1),N("span",BU,Xe(u.label),1)],10,OU)),64))]),N("div",kU,[Dt(N("div",zU,[Ke(Rg)],512),[[jn,i.value==="chat"]]),Dt(N("div",HU,[Ke(Pg)],512),[[jn,i.value==="component"]]),Dt(N("div",VU,[Ke(Dg)],512),[[jn,i.value==="history"]]),Dt(N("div",GU,[Ke(Ig)],512),[[jn,i.value==="scheme"]])])],64)):(ae(),me(rt,{key:0},[Ke(cm),N("div",SU,[N("div",MU,[Ke(Cg)]),N("div",EU,[N("div",TU,[(ae(),me(rt,null,zt(a,u=>N("button",{key:u.key,class:De(["tab-btn",{active:i.value===u.key}]),onClick:f=>i.value=u.key},[N("span",AU,Xe(u.icon),1),N("span",CU,Xe(u.label),1)],10,wU)),64))]),N("div",RU,[Dt(N("div",PU,[Ke(Rg)],512),[[jn,i.value==="chat"]]),Dt(N("div",DU,[Ke(Pg)],512),[[jn,i.value==="component"]]),Dt(N("div",IU,[Ke(Dg)],512),[[jn,i.value==="history"]]),Dt(N("div",LU,[Ke(Ig)],512),[[jn,i.value==="scheme"]])])])])],64)),Ke(bU,{ref_key:"toastRef",ref:s},null,512)],2))}}),O0=mb(WU);O0.use(vb());O0.mount("#app");
