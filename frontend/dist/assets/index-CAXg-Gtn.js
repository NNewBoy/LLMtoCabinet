(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vd(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Tt={},lo=[],fn=()=>{},Ng=()=>!1,Sc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Mc=t=>t.startsWith("onUpdate:"),Ht=Object.assign,yd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},k0=Object.prototype.hasOwnProperty,dt=(t,e)=>k0.call(t,e),Ge=Array.isArray,co=t=>Fa(t)==="[object Map]",Ec=t=>Fa(t)==="[object Set]",Mh=t=>Fa(t)==="[object Date]",Ye=t=>typeof t=="function",ht=t=>typeof t=="string",zn=t=>typeof t=="symbol",ct=t=>t!==null&&typeof t=="object",Og=t=>(ct(t)||Ye(t))&&Ye(t.then)&&Ye(t.catch),Fg=Object.prototype.toString,Fa=t=>Fg.call(t),z0=t=>Fa(t).slice(8,-1),Bg=t=>Fa(t)==="[object Object]",Tc=t=>ht(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ra=vd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wc=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},H0=/-\w/g,xn=wc(t=>t.replace(H0,e=>e.slice(1).toUpperCase())),V0=/\B([A-Z])/g,Is=wc(t=>t.replace(V0,"-$1").toLowerCase()),Ac=wc(t=>t.charAt(0).toUpperCase()+t.slice(1)),tu=wc(t=>t?`on${Ac(t)}`:""),Ti=(t,e)=>!Object.is(t,e),zl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},kg=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Cc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},G0=t=>{const e=ht(t)?Number(t):NaN;return isNaN(e)?t:e};let Eh;const Rc=()=>Eh||(Eh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hn(t){if(Ge(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=ht(i)?j0(i):Hn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(ht(t)||ct(t))return t}const W0=/;(?![^(]*\))/g,$0=/:([^]+)/,X0=/\/\*[^]*?\*\//g;function j0(t){const e={};return t.replace(X0,"").split(W0).forEach(n=>{if(n){const i=n.split($0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function De(t){let e="";if(ht(t))e=t;else if(Ge(t))for(let n=0;n<t.length;n++){const i=De(t[n]);i&&(e+=i+" ")}else if(ct(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Y0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",q0=vd(Y0);function zg(t){return!!t||t===""}function K0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Ba(t[i],e[i]);return n}function Ba(t,e){if(t===e)return!0;let n=Mh(t),i=Mh(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=zn(t),i=zn(e),n||i)return t===e;if(n=Ge(t),i=Ge(e),n||i)return n&&i?K0(t,e):!1;if(n=ct(t),i=ct(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ba(t[o],e[o]))return!1}}return String(t)===String(e)}function Z0(t,e){return t.findIndex(n=>Ba(n,e))}const Hg=t=>!!(t&&t.__v_isRef===!0),Xe=t=>ht(t)?t:t==null?"":Ge(t)||ct(t)&&(t.toString===Fg||!Ye(t.toString))?Hg(t)?Xe(t.value):JSON.stringify(t,Vg,2):String(t),Vg=(t,e)=>Hg(e)?Vg(t,e.value):co(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[nu(i,r)+" =>"]=s,n),{})}:Ec(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>nu(n))}:zn(e)?nu(e):ct(e)&&!Ge(e)&&!Bg(e)?String(e):e,nu=(t,e="")=>{var n;return zn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gt;class Gg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Gt&&(Gt.active?(this.parent=Gt,this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Gt;try{return Gt=this,e()}finally{Gt=n}}}on(){++this._on===1&&(this.prevScope=Gt,Gt=this)}off(){if(this._on>0&&--this._on===0){if(Gt===this)Gt=this.prevScope;else{let e=Gt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Wg(t){return new Gg(t)}function xd(){return Gt}function $g(t,e=!1){Gt&&Gt.cleanups.push(t)}let At;const iu=new WeakSet;class Xg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Gt&&(Gt.active?Gt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,iu.has(this)&&(iu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Th(this),qg(this);const e=At,n=di;At=this,di=!0;try{return this.fn()}finally{Kg(this),At=e,di=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Md(e);this.deps=this.depsTail=void 0,Th(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?iu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){lf(this)&&this.run()}get dirty(){return lf(this)}}let jg=0,oa,aa;function Yg(t,e=!1){if(t.flags|=8,e){t.next=aa,aa=t;return}t.next=oa,oa=t}function bd(){jg++}function Sd(){if(--jg>0)return;if(aa){let e=aa;for(aa=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;oa;){let e=oa;for(oa=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function qg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Kg(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Md(i),J0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function lf(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Zg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Zg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===_a)||(t.globalVersion=_a,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!lf(t))))return;t.flags|=2;const e=t.dep,n=At,i=di;At=t,di=!0;try{qg(t);const s=t.fn(t._value);(e.version===0||Ti(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{At=n,di=i,Kg(t),t.flags&=-3}}function Md(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Md(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function J0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let di=!0;const Jg=[];function ts(){Jg.push(di),di=!1}function ns(){const t=Jg.pop();di=t===void 0?!0:t}function Th(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=At;At=void 0;try{e()}finally{At=n}}}let _a=0;class Q0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ed{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!At||!di||At===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==At)n=this.activeLink=new Q0(At,this),At.deps?(n.prevDep=At.depsTail,At.depsTail.nextDep=n,At.depsTail=n):At.deps=At.depsTail=n,Qg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=At.depsTail,n.nextDep=void 0,At.depsTail.nextDep=n,At.depsTail=n,At.deps===n&&(At.deps=i)}return n}trigger(e){this.version++,_a++,this.notify(e)}notify(e){bd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Sd()}}}function Qg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Qg(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ql=new WeakMap,ur=Symbol(""),cf=Symbol(""),va=Symbol("");function cn(t,e,n){if(di&&At){let i=Ql.get(t);i||Ql.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Ed),s.map=i,s.key=n),s.track()}}function $i(t,e,n,i,s,r){const o=Ql.get(t);if(!o){_a++;return}const a=l=>{l&&l.trigger()};if(bd(),e==="clear")o.forEach(a);else{const l=Ge(t),c=l&&Tc(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===va||!zn(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(va)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ur)),co(t)&&a(o.get(cf)));break;case"delete":l||(a(o.get(ur)),co(t)&&a(o.get(cf)));break;case"set":co(t)&&a(o.get(ur));break}}Sd()}function ey(t,e){const n=Ql.get(t);return n&&n.get(e)}function Ur(t){const e=ft(t);return e===t?e:(cn(e,"iterate",va),Bn(t)?e:e.map(mi))}function Pc(t){return cn(t=ft(t),"iterate",va),t}function Mi(t,e){return is(t)?yo(Zi(t)?mi(e):e):mi(e)}const ty={__proto__:null,[Symbol.iterator](){return su(this,Symbol.iterator,t=>Mi(this,t))},concat(...t){return Ur(this).concat(...t.map(e=>Ge(e)?Ur(e):e))},entries(){return su(this,"entries",t=>(t[1]=Mi(this,t[1]),t))},every(t,e){return Ui(this,"every",t,e,void 0,arguments)},filter(t,e){return Ui(this,"filter",t,e,n=>n.map(i=>Mi(this,i)),arguments)},find(t,e){return Ui(this,"find",t,e,n=>Mi(this,n),arguments)},findIndex(t,e){return Ui(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ui(this,"findLast",t,e,n=>Mi(this,n),arguments)},findLastIndex(t,e){return Ui(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ui(this,"forEach",t,e,void 0,arguments)},includes(...t){return ru(this,"includes",t)},indexOf(...t){return ru(this,"indexOf",t)},join(t){return Ur(this).join(t)},lastIndexOf(...t){return ru(this,"lastIndexOf",t)},map(t,e){return Ui(this,"map",t,e,void 0,arguments)},pop(){return zo(this,"pop")},push(...t){return zo(this,"push",t)},reduce(t,...e){return wh(this,"reduce",t,e)},reduceRight(t,...e){return wh(this,"reduceRight",t,e)},shift(){return zo(this,"shift")},some(t,e){return Ui(this,"some",t,e,void 0,arguments)},splice(...t){return zo(this,"splice",t)},toReversed(){return Ur(this).toReversed()},toSorted(t){return Ur(this).toSorted(t)},toSpliced(...t){return Ur(this).toSpliced(...t)},unshift(...t){return zo(this,"unshift",t)},values(){return su(this,"values",t=>Mi(this,t))}};function su(t,e,n){const i=Pc(t),s=i[e]();return i!==t&&!Bn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const ny=Array.prototype;function Ui(t,e,n,i,s,r){const o=Pc(t),a=o!==t&&!Bn(t),l=o[e];if(l!==ny[e]){const f=l.apply(t,r);return a?mi(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Mi(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function wh(t,e,n,i){const s=Pc(t),r=s!==t&&!Bn(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Mi(t,c)),n.call(this,c,Mi(t,u),f,t)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,t)}));const l=s[e](o,...i);return a?Mi(t,l):l}function ru(t,e,n){const i=ft(t);cn(i,"iterate",va);const s=i[e](...n);return(s===-1||s===!1)&&Dc(n[0])?(n[0]=ft(n[0]),i[e](...n)):s}function zo(t,e,n=[]){ts(),bd();const i=ft(t)[e].apply(t,n);return Sd(),ns(),i}const iy=vd("__proto__,__v_isRef,__isVue"),e_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(zn));function sy(t){zn(t)||(t=String(t));const e=ft(this);return cn(e,"has",t),e.hasOwnProperty(t)}class t_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?py:r_:r?s_:i_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ge(e);if(!s){let l;if(o&&(l=ty[n]))return l;if(n==="hasOwnProperty")return sy}const a=Reflect.get(e,n,Lt(e)?e:i);if((zn(n)?e_.has(n):iy(n))||(s||cn(e,"get",n),r))return a;if(Lt(a)){const l=o&&Tc(n)?a:a.value;return s&&ct(l)?ec(l):l}return ct(a)?s?ec(a):Tr(a):a}}class n_ extends t_{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=Ge(e)&&Tc(n);if(!this._isShallow){const c=is(r);if(!Bn(i)&&!is(i)&&(r=ft(r),i=ft(i)),!o&&Lt(r)&&!Lt(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:dt(e,n),l=Reflect.set(e,n,i,Lt(e)?e:s);return e===ft(s)&&(a?Ti(i,r)&&$i(e,"set",n,i):$i(e,"add",n,i)),l}deleteProperty(e,n){const i=dt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&$i(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!zn(n)||!e_.has(n))&&cn(e,"has",n),i}ownKeys(e){return cn(e,"iterate",Ge(e)?"length":ur),Reflect.ownKeys(e)}}class ry extends t_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const oy=new n_,ay=new ry,ly=new n_(!0);const uf=t=>t,Ya=t=>Reflect.getPrototypeOf(t);function cy(t,e,n){return function(...i){const s=this.__v_raw,r=ft(s),o=co(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?uf:e?yo:mi;return!e&&cn(r,"iterate",l?cf:ur),Ht(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function qa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function uy(t,e){const n={get(s){const r=this.__v_raw,o=ft(r),a=ft(s);t||(Ti(s,a)&&cn(o,"get",s),cn(o,"get",a));const{has:l}=Ya(o),c=e?uf:t?yo:mi;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&cn(ft(s),"iterate",ur),s.size},has(s){const r=this.__v_raw,o=ft(r),a=ft(s);return t||(Ti(s,a)&&cn(o,"has",s),cn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ft(a),c=e?uf:t?yo:mi;return!t&&cn(l,"iterate",ur),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Ht(n,t?{add:qa("add"),set:qa("set"),delete:qa("delete"),clear:qa("clear")}:{add(s){const r=ft(this),o=Ya(r),a=ft(s),l=!e&&!Bn(s)&&!is(s)?a:s;return o.has.call(r,l)||Ti(s,l)&&o.has.call(r,s)||Ti(a,l)&&o.has.call(r,a)||(r.add(l),$i(r,"add",l,l)),this},set(s,r){!e&&!Bn(r)&&!is(r)&&(r=ft(r));const o=ft(this),{has:a,get:l}=Ya(o);let c=a.call(o,s);c||(s=ft(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Ti(r,u)&&$i(o,"set",s,r):$i(o,"add",s,r),this},delete(s){const r=ft(this),{has:o,get:a}=Ya(r);let l=o.call(r,s);l||(s=ft(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&$i(r,"delete",s,void 0),c},clear(){const s=ft(this),r=s.size!==0,o=s.clear();return r&&$i(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=cy(s,t,e)}),n}function Td(t,e){const n=uy(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(dt(n,s)&&s in i?n:i,s,r)}const fy={get:Td(!1,!1)},dy={get:Td(!1,!0)},hy={get:Td(!0,!1)};const i_=new WeakMap,s_=new WeakMap,r_=new WeakMap,py=new WeakMap;function my(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tr(t){return is(t)?t:wd(t,!1,oy,fy,i_)}function gy(t){return wd(t,!1,ly,dy,s_)}function ec(t){return wd(t,!0,ay,hy,r_)}function wd(t,e,n,i,s){if(!ct(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const r=s.get(t);if(r)return r;const o=my(z0(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Zi(t){return is(t)?Zi(t.__v_raw):!!(t&&t.__v_isReactive)}function is(t){return!!(t&&t.__v_isReadonly)}function Bn(t){return!!(t&&t.__v_isShallow)}function Dc(t){return t?!!t.__v_raw:!1}function ft(t){const e=t&&t.__v_raw;return e?ft(e):t}function Ad(t){return!dt(t,"__v_skip")&&Object.isExtensible(t)&&kg(t,"__v_skip",!0),t}const mi=t=>ct(t)?Tr(t):t,yo=t=>ct(t)?ec(t):t;function Lt(t){return t?t.__v_isRef===!0:!1}function ve(t){return o_(t,!1)}function fr(t){return o_(t,!0)}function o_(t,e){return Lt(t)?t:new _y(t,e)}class _y{constructor(e,n){this.dep=new Ed,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ft(e),this._value=n?e:mi(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Bn(e)||is(e);e=i?e:ft(e),Ti(e,n)&&(this._rawValue=e,this._value=i?e:mi(e),this.dep.trigger())}}function O(t){return Lt(t)?t.value:t}const vy={get:(t,e,n)=>e==="__v_raw"?t:O(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Lt(s)&&!Lt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function a_(t){return Zi(t)?t:new Proxy(t,vy)}function yy(t){const e=Ge(t)?new Array(t.length):{};for(const n in t)e[n]=l_(t,n);return e}class xy{constructor(e,n,i){this._object=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=zn(n)?n:String(n),this._raw=ft(e);let s=!0,r=e;if(!Ge(e)||zn(this._key)||!Tc(this._key))do s=!Dc(r)||Bn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=O(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Lt(this._raw[this._key])){const n=this._object[this._key];if(Lt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return ey(this._raw,this._key)}}class by{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Yi(t,e,n){return Lt(t)?t:Ye(t)?new by(t):ct(t)&&arguments.length>1?l_(t,e,n):ve(t)}function l_(t,e,n){return new xy(t,e,n)}class Sy{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ed(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_a-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&At!==this)return Yg(this,!0),!0}get value(){const e=this.dep.track();return Zg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function My(t,e,n=!1){let i,s;return Ye(t)?i=t:(i=t.get,s=t.set),new Sy(i,s,n)}const Ka={},tc=new WeakMap;let Zs;function Ey(t,e=!1,n=Zs){if(n){let i=tc.get(n);i||tc.set(n,i=[]),i.push(t)}}function Ty(t,e,n=Tt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=v=>s?v:Bn(v)||s===!1||s===0?Xi(v,1):Xi(v);let u,f,d,p,m=!1,g=!1;if(Lt(t)?(f=()=>t.value,m=Bn(t)):Zi(t)?(f=()=>c(t),m=!0):Ge(t)?(g=!0,m=t.some(v=>Zi(v)||Bn(v)),f=()=>t.map(v=>{if(Lt(v))return v.value;if(Zi(v))return c(v);if(Ye(v))return l?l(v,2):v()})):Ye(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){ts();try{d()}finally{ns()}}const v=Zs;Zs=u;try{return l?l(t,3,[p]):t(p)}finally{Zs=v}}:f=fn,e&&s){const v=f,P=s===!0?1/0:s;f=()=>Xi(v(),P)}const _=xd(),h=()=>{u.stop(),_&&_.active&&yd(_.effects,u)};if(r&&e){const v=e;e=(...P)=>{const D=v(...P);return h(),D}}let x=g?new Array(t.length).fill(Ka):Ka;const y=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const P=u.run();if(v||s||m||(g?P.some((D,A)=>Ti(D,x[A])):Ti(P,x))){d&&d();const D=Zs;Zs=u;try{const A=[P,x===Ka?void 0:g&&x[0]===Ka?[]:x,p];x=P,l?l(e,3,A):e(...A)}finally{Zs=D}}}else u.run()};return a&&a(y),u=new Xg(f),u.scheduler=o?()=>o(y,!1):y,p=v=>Ey(v,!1,u),d=u.onStop=()=>{const v=tc.get(u);if(v){if(l)l(v,4);else for(const P of v)P();tc.delete(u)}},e?i?y(!0):x=u.run():o?o(y.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Xi(t,e=1/0,n){if(e<=0||!ct(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Lt(t))Xi(t.value,e,n);else if(Ge(t))for(let i=0;i<t.length;i++)Xi(t[i],e,n);else if(Ec(t)||co(t))t.forEach(i=>{Xi(i,e,n)});else if(Bg(t)){for(const i in t)Xi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Xi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ka(t,e,n,i){try{return i?t(...i):t()}catch(s){Ic(s,e,n)}}function Jn(t,e,n,i){if(Ye(t)){const s=ka(t,e,n,i);return s&&Og(s)&&s.catch(r=>{Ic(r,e,n)}),s}if(Ge(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Jn(t[r],e,n,i));return s}}function Ic(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Tt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){ts(),ka(r,null,10,[t,l,c]),ns();return}}wy(t,n,s,i,o)}function wy(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const yn=[];let bi=-1;const uo=[];let Es=null,to=0;const c_=Promise.resolve();let nc=null;function qt(t){const e=nc||c_;return t?e.then(this?t.bind(this):t):e}function Ay(t){let e=bi+1,n=yn.length;for(;e<n;){const i=e+n>>>1,s=yn[i],r=ya(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Cd(t){if(!(t.flags&1)){const e=ya(t),n=yn[yn.length-1];!n||!(t.flags&2)&&e>=ya(n)?yn.push(t):yn.splice(Ay(e),0,t),t.flags|=1,u_()}}function u_(){nc||(nc=c_.then(d_))}function Cy(t){Ge(t)?uo.push(...t):Es&&t.id===-1?Es.splice(to+1,0,t):t.flags&1||(uo.push(t),t.flags|=1),u_()}function Ah(t,e,n=bi+1){for(;n<yn.length;n++){const i=yn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;yn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function f_(t){if(uo.length){const e=[...new Set(uo)].sort((n,i)=>ya(n)-ya(i));if(uo.length=0,Es){Es.push(...e);return}for(Es=e,to=0;to<Es.length;to++){const n=Es[to];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Es=null,to=0}}const ya=t=>t.id==null?t.flags&2?-1:1/0:t.id;function d_(t){try{for(bi=0;bi<yn.length;bi++){const e=yn[bi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ka(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;bi<yn.length;bi++){const e=yn[bi];e&&(e.flags&=-2)}bi=-1,yn.length=0,f_(),nc=null,(yn.length||uo.length)&&d_()}}let nn=null,h_=null;function ic(t){const e=nn;return nn=t,h_=t&&t.type.__scopeId||null,e}function It(t,e=nn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&oc(-1);const r=ic(e);let o;try{o=t(...s)}finally{ic(r),i._d&&oc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Dt(t,e){if(nn===null)return t;const n=Oc(nn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Tt]=e[s];r&&(Ye(r)&&(r={mounted:r,updated:r}),r.deep&&Xi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function zs(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ts(),Jn(l,n,8,[t.el,a,t,e]),ns())}}function ss(t,e){if(un){let n=un.provides;const i=un.parent&&un.parent.provides;i===n&&(n=un.provides=Object.create(i)),n[t]=e}}function Rt(t,e,n=!1){const i=Kt();if(i||dr){let s=dr?dr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ye(e)?e.call(i&&i.proxy):e}}function Ry(){return!!(Kt()||dr)}const Py=Symbol.for("v-scx"),Dy=()=>Rt(Py);function Iy(t,e){return Rd(t,null,e)}function We(t,e,n){return Rd(t,e,n)}function Rd(t,e,n=Tt){const{immediate:i,deep:s,flush:r,once:o}=n,a=Ht({},n),l=e&&i||!e&&r!=="post";let c;if(Ma){if(r==="sync"){const p=Dy();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=fn,p.resume=fn,p.pause=fn,p}}const u=un;a.call=(p,m,g)=>Jn(p,u,m,g);let f=!1;r==="post"?a.scheduler=p=>{vn(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,m)=>{m?p():Cd(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Ty(t,e,a);return Ma&&(c?c.push(d):l&&d()),d}function Ly(t,e,n){const i=this.proxy,s=ht(t)?t.includes(".")?p_(i,t):()=>i[t]:t.bind(i,i);let r;Ye(e)?r=e:(r=e.handler,n=e);const o=Ha(this),a=Rd(s,r.bind(i),n);return o(),a}function p_(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const ys=new WeakMap,m_=Symbol("_vte"),g_=t=>t.__isTeleport,Qs=t=>t&&(t.disabled||t.disabled===""),Uy=t=>t&&(t.defer||t.defer===""),Ch=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Rh=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,ff=(t,e)=>{const n=t&&t.to;return ht(n)?e?e(n):null:n},Ny={name:"Teleport",__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:p,querySelector:m,createText:g,createComment:_,parentNode:h}}=c,x=Qs(e.props);let{dynamicChildren:y}=e;const v=(A,L,b)=>{A.shapeFlag&16&&u(A.children,L,b,s,r,o,a,l)},P=(A=e)=>{const L=Qs(A.props),b=A.target=ff(A.props,m),S=df(b,A,g,p);b&&(o!=="svg"&&Ch(b)?o="svg":o!=="mathml"&&Rh(b)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(b),L||(v(A,b,S),ta(A,!1)))},D=A=>{const L=()=>{if(ys.get(A)===L){if(ys.delete(A),Qs(A.props)){const b=h(A.el)||n;v(A,b,A.anchor),ta(A,!0)}P(A)}};ys.set(A,L),vn(L,r)};if(t==null){const A=e.el=g(""),L=e.anchor=g("");if(p(A,n,i),p(L,n,i),Uy(e.props)||r&&r.pendingBranch){D(e);return}x&&(v(e,n,L),ta(e,!0)),P()}else{e.el=t.el;const A=e.anchor=t.anchor,L=ys.get(t);if(L){L.flags|=8,ys.delete(t),D(e);return}e.targetStart=t.targetStart;const b=e.target=t.target,S=e.targetAnchor=t.targetAnchor,I=Qs(t.props),C=I?n:b,N=I?A:S;if(o==="svg"||Ch(b)?o="svg":(o==="mathml"||Rh(b))&&(o="mathml"),y?(d(t.dynamicChildren,y,C,s,r,o,a),Ld(t,e,!0)):l||f(t,e,C,N,s,r,o,a,!1),x)I?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Za(e,n,A,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const K=e.target=ff(e.props,m);K&&Za(e,K,null,c,0)}else I&&Za(e,b,S,c,1);ta(e,x)}},remove(t,e,n,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:d}=t,p=r||!Qs(d),m=ys.get(t);if(m&&(m.flags|=8,ys.delete(t)),f&&(s(c),s(u)),r&&s(l),!m&&o&16)for(let g=0;g<a.length;g++){const _=a[g];i(_,e,n,p,!!_.dynamicChildren)}},move:Za,hydrate:Oy};function Za(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=r===2;if(f&&i(o,e,n),!ys.has(t)&&(!f||Qs(u))&&l&16)for(let d=0;d<c.length;d++)s(c[d],e,n,2);f&&i(a,e,n)}function Oy(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){function d(_,h){let x=h;for(;x;){if(x&&x.nodeType===8){if(x.data==="teleport start anchor")e.targetStart=x;else if(x.data==="teleport anchor"){e.targetAnchor=x,_._lpa=e.targetAnchor&&o(e.targetAnchor);break}}x=o(x)}}function p(_,h){h.anchor=f(o(_),h,a(_),n,i,s,r)}const m=e.target=ff(e.props,l),g=Qs(e.props);if(m){const _=m._lpa||m.firstChild;e.shapeFlag&16&&(g?(p(t,e),d(m,_),e.targetAnchor||df(m,e,u,c,a(t)===m?t:null)):(e.anchor=o(t),d(m,_),e.targetAnchor||df(m,e,u,c),f(_&&o(_),e,m,n,i,s,r))),ta(e,g)}else g&&e.shapeFlag&16&&(p(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const __=Ny;function ta(t,e){const n=t.ctx;if(n&&n.ut){let i,s;for(e?(i=t.el,s=t.anchor):(i=t.targetStart,s=t.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function df(t,e,n,i,s=null){const r=e.targetStart=n(""),o=e.targetAnchor=n("");return r[m_]=o,t&&(i(r,t,s),i(o,t,s)),o}const Yn=Symbol("_leaveCb"),Ho=Symbol("_enterCb");function v_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ft(()=>{t.isMounted=!0}),Li(()=>{t.isUnmounting=!0}),t}const $n=[Function,Array],y_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$n,onEnter:$n,onAfterEnter:$n,onEnterCancelled:$n,onBeforeLeave:$n,onLeave:$n,onAfterLeave:$n,onLeaveCancelled:$n,onBeforeAppear:$n,onAppear:$n,onAfterAppear:$n,onAppearCancelled:$n},x_=t=>{const e=t.subTree;return e.component?x_(e.component):e},Fy={name:"BaseTransition",props:y_,setup(t,{slots:e}){const n=Kt(),i=v_();return()=>{const s=e.default&&Pd(e.default(),!0),r=s&&s.length?b_(s):n.subTree?nt():void 0;if(!r)return;const o=ft(t),{mode:a}=o;if(i.isLeaving)return ou(r);const l=Ph(r);if(!l)return ou(r);let c=xa(l,o,i,n,f=>c=f);l.type!==tn&&_r(l,c);let u=n.subTree&&Ph(n.subTree);if(u&&u.type!==tn&&!er(u,l)&&x_(n).type!==tn){let f=xa(u,o,i,n);if(_r(u,f),a==="out-in"&&l.type!==tn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},ou(r);a==="in-out"&&l.type!==tn?f.delayLeave=(d,p,m)=>{const g=S_(i,u);g[String(u.key)]=u,d[Yn]=()=>{p(),d[Yn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{m(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function b_(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==tn){e=n;break}}return e}const By=Fy;function S_(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function xa(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:_,onAppear:h,onAfterAppear:x,onAppearCancelled:y}=e,v=String(t.key),P=S_(n,t),D=(b,S)=>{b&&Jn(b,i,9,S)},A=(b,S)=>{const I=S[1];D(b,S),Ge(b)?b.every(C=>C.length<=1)&&I():b.length<=1&&I()},L={mode:o,persisted:a,beforeEnter(b){let S=l;if(!n.isMounted)if(r)S=_||l;else return;b[Yn]&&b[Yn](!0);const I=P[v];I&&er(t,I)&&I.el[Yn]&&I.el[Yn](),D(S,[b])},enter(b){if(P[v]===t)return;let S=c,I=u,C=f;if(!n.isMounted)if(r)S=h||c,I=x||u,C=y||f;else return;let N=!1;b[Ho]=Q=>{N||(N=!0,Q?D(C,[b]):D(I,[b]),L.delayedLeave&&L.delayedLeave(),b[Ho]=void 0)};const K=b[Ho].bind(null,!1);S?A(S,[b,K]):K()},leave(b,S){const I=String(t.key);if(b[Ho]&&b[Ho](!0),n.isUnmounting)return S();D(d,[b]);let C=!1;b[Yn]=K=>{C||(C=!0,S(),K?D(g,[b]):D(m,[b]),b[Yn]=void 0,P[I]===t&&delete P[I])};const N=b[Yn].bind(null,!1);P[I]=t,p?A(p,[b,N]):N()},clone(b){const S=xa(b,e,n,i,s);return s&&s(S),S}};return L}function ou(t){if(Lc(t))return t=rs(t),t.children=null,t}function Ph(t){if(!Lc(t))return g_(t.type)&&t.children?b_(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ye(n.default))return n.default()}}function _r(t,e){t.shapeFlag&6&&t.component?(t.transition=e,_r(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Pd(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===rt?(o.patchFlag&128&&s++,i=i.concat(Pd(o.children,e,a))):(e||o.type!==tn)&&i.push(a!=null?rs(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Ze(t,e){return Ye(t)?Ht({name:t.name},e,{setup:t}):t}function M_(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Dh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const sc=new WeakMap;function la(t,e,n,i,s=!1){if(Ge(t)){t.forEach((g,_)=>la(g,e&&(Ge(e)?e[_]:e),n,i,s));return}if(fo(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&la(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Oc(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Tt?a.refs={}:a.refs,f=a.setupState,d=ft(f),p=f===Tt?Ng:g=>Dh(u,g)?!1:dt(d,g),m=(g,_)=>!(_&&Dh(u,_));if(c!=null&&c!==l){if(Ih(e),ht(c))u[c]=null,p(c)&&(f[c]=null);else if(Lt(c)){const g=e;m(c,g.k)&&(c.value=null),g.k&&(u[g.k]=null)}}if(Ye(l))ka(l,a,12,[o,u]);else{const g=ht(l),_=Lt(l);if(g||_){const h=()=>{if(t.f){const x=g?p(l)?f[l]:u[l]:m()||!t.k?l.value:u[t.k];if(s)Ge(x)&&yd(x,r);else if(Ge(x))x.includes(r)||x.push(r);else if(g)u[l]=[r],p(l)&&(f[l]=u[l]);else{const y=[r];m(l,t.k)&&(l.value=y),t.k&&(u[t.k]=y)}}else g?(u[l]=o,p(l)&&(f[l]=o)):_&&(m(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const x=()=>{h(),sc.delete(t)};x.id=-1,sc.set(t,x),vn(x,n)}else Ih(t),h()}}}function Ih(t){const e=sc.get(t);e&&(e.flags|=8,sc.delete(t))}Rc().requestIdleCallback;Rc().cancelIdleCallback;const fo=t=>!!t.type.__asyncLoader,Lc=t=>t.type.__isKeepAlive;function ky(t,e){T_(t,"a",e)}function E_(t,e){T_(t,"da",e)}function T_(t,e,n=un){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Uc(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Lc(s.parent.vnode)&&zy(i,e,n,s),s=s.parent}}function zy(t,e,n,i){const s=Uc(e,t,i,!0);za(()=>{yd(i[e],s)},n)}function Uc(t,e,n=un,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{ts();const a=Ha(n),l=Jn(e,n,t,o);return a(),ns(),l});return i?s.unshift(r):s.push(r),r}}const cs=t=>(e,n=un)=>{(!Ma||t==="sp")&&Uc(t,(...i)=>e(...i),n)},w_=cs("bm"),Ft=cs("m"),Hy=cs("bu"),A_=cs("u"),Li=cs("bum"),za=cs("um"),Vy=cs("sp"),Gy=cs("rtg"),Wy=cs("rtc");function $y(t,e=un){Uc("ec",t,e)}const Xy="components",C_=Symbol.for("v-ndc");function rr(t){return ht(t)?jy(Xy,t,!1)||t:t||C_}function jy(t,e,n=!0,i=!1){const s=nn||un;if(s){const r=s.type;{const a=Px(r,!1);if(a&&(a===e||a===xn(e)||a===Ac(xn(e))))return r}const o=Lh(s[t]||r[t],e)||Lh(s.appContext[t],e);return!o&&i?r:o}}function Lh(t,e){return t&&(t[e]||t[xn(e)]||t[Ac(xn(e))])}function zt(t,e,n,i){let s;const r=n,o=Ge(t);if(o||ht(t)){const a=o&&Zi(t);let l=!1,c=!1;a&&(l=!Bn(t),c=is(t),t=Pc(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?c?yo(mi(t[u])):mi(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(ct(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}function sn(t,e,n={},i,s){if(nn.ce||nn.parent&&fo(nn.parent)&&nn.parent.ce){const c=Object.keys(n).length>0;return e!=="default"&&(n.name=e),ae(),Et(rt,null,[Ke("slot",n,i&&i())],c?-2:64)}let r=t[e];r&&r._c&&(r._d=!1),ae();const o=r&&R_(r(n)),a=n.key||o&&o.key,l=Et(rt,{key:(a&&!zn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function R_(t){return t.some(e=>Sa(e)?!(e.type===tn||e.type===rt&&!R_(e.children)):!0)?t:null}const hf=t=>t?K_(t)?Oc(t):hf(t.parent):null,ca=Ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hf(t.parent),$root:t=>hf(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>L_(t),$forceUpdate:t=>t.f||(t.f=()=>{Cd(t.update)}),$nextTick:t=>t.n||(t.n=qt.bind(t.proxy)),$watch:t=>Ly.bind(t)}),au=(t,e)=>t!==Tt&&!t.__isScriptSetup&&dt(t,e),Yy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(au(i,e))return o[e]=1,i[e];if(s!==Tt&&dt(s,e))return o[e]=2,s[e];if(dt(r,e))return o[e]=3,r[e];if(n!==Tt&&dt(n,e))return o[e]=4,n[e];pf&&(o[e]=0)}}const c=ca[e];let u,f;if(c)return e==="$attrs"&&cn(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Tt&&dt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,dt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return au(s,e)?(s[e]=n,!0):i!==Tt&&dt(i,e)?(i[e]=n,!0):dt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==Tt&&a[0]!=="$"&&dt(t,a)||au(e,a)||dt(r,a)||dt(i,a)||dt(ca,a)||dt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:dt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function P_(){return D_().slots}function qy(){return D_().attrs}function D_(t){const e=Kt();return e.setupContext||(e.setupContext=J_(e))}function Uh(t){return Ge(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let pf=!0;function Ky(t){const e=L_(t),n=t.proxy,i=t.ctx;pf=!1,e.beforeCreate&&Nh(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:m,activated:g,deactivated:_,beforeDestroy:h,beforeUnmount:x,destroyed:y,unmounted:v,render:P,renderTracked:D,renderTriggered:A,errorCaptured:L,serverPrefetch:b,expose:S,inheritAttrs:I,components:C,directives:N,filters:K}=e;if(c&&Zy(c,i,null),o)for(const V in o){const Y=o[V];Ye(Y)&&(i[V]=Y.bind(n))}if(s){const V=s.call(n,n);ct(V)&&(t.data=Tr(V))}if(pf=!0,r)for(const V in r){const Y=r[V],me=Ye(Y)?Y.bind(n,n):Ye(Y.get)?Y.get.bind(n,n):fn,we=!Ye(Y)&&Ye(Y.set)?Y.set.bind(n):fn,Le=Se({get:me,set:we});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>Le.value,set:Fe=>Le.value=Fe})}if(a)for(const V in a)I_(a[V],i,n,V);if(l){const V=Ye(l)?l.call(n):l;Reflect.ownKeys(V).forEach(Y=>{ss(Y,V[Y])})}u&&Nh(u,t,"c");function j(V,Y){Ge(Y)?Y.forEach(me=>V(me.bind(n))):Y&&V(Y.bind(n))}if(j(w_,f),j(Ft,d),j(Hy,p),j(A_,m),j(ky,g),j(E_,_),j($y,L),j(Wy,D),j(Gy,A),j(Li,x),j(za,v),j(Vy,b),Ge(S))if(S.length){const V=t.exposed||(t.exposed={});S.forEach(Y=>{Object.defineProperty(V,Y,{get:()=>n[Y],set:me=>n[Y]=me,enumerable:!0})})}else t.exposed||(t.exposed={});P&&t.render===fn&&(t.render=P),I!=null&&(t.inheritAttrs=I),C&&(t.components=C),N&&(t.directives=N),b&&M_(t)}function Zy(t,e,n=fn){Ge(t)&&(t=mf(t));for(const i in t){const s=t[i];let r;ct(s)?"default"in s?r=Rt(s.from||i,s.default,!0):r=Rt(s.from||i):r=Rt(s),Lt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Nh(t,e,n){Jn(Ge(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function I_(t,e,n,i){let s=i.includes(".")?p_(n,i):()=>n[i];if(ht(t)){const r=e[t];Ye(r)&&We(s,r)}else if(Ye(t))We(s,t.bind(n));else if(ct(t))if(Ge(t))t.forEach(r=>I_(r,e,n,i));else{const r=Ye(t.handler)?t.handler.bind(n):e[t.handler];Ye(r)&&We(s,r,t)}}function L_(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>rc(l,c,o,!0)),rc(l,e,o)),ct(e)&&r.set(e,l),l}function rc(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&rc(t,r,n,!0),s&&s.forEach(o=>rc(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Jy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Jy={data:Oh,props:Fh,emits:Fh,methods:na,computed:na,beforeCreate:gn,created:gn,beforeMount:gn,mounted:gn,beforeUpdate:gn,updated:gn,beforeDestroy:gn,beforeUnmount:gn,destroyed:gn,unmounted:gn,activated:gn,deactivated:gn,errorCaptured:gn,serverPrefetch:gn,components:na,directives:na,watch:ex,provide:Oh,inject:Qy};function Oh(t,e){return e?t?function(){return Ht(Ye(t)?t.call(this,this):t,Ye(e)?e.call(this,this):e)}:e:t}function Qy(t,e){return na(mf(t),mf(e))}function mf(t){if(Ge(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gn(t,e){return t?[...new Set([].concat(t,e))]:e}function na(t,e){return t?Ht(Object.create(null),t,e):e}function Fh(t,e){return t?Ge(t)&&Ge(e)?[...new Set([...t,...e])]:Ht(Object.create(null),Uh(t),Uh(e??{})):e}function ex(t,e){if(!t)return e;if(!e)return t;const n=Ht(Object.create(null),t);for(const i in e)n[i]=gn(t[i],e[i]);return n}function U_(){return{app:null,config:{isNativeTag:Ng,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tx=0;function nx(t,e){return function(i,s=null){Ye(i)||(i=Ht({},i)),s!=null&&!ct(s)&&(s=null);const r=U_(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:tx++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Lx,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ye(u.install)?(o.add(u),u.install(c,...f)):Ye(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||Ke(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Oc(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Jn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=dr;dr=c;try{return u()}finally{dr=f}}};return c}}let dr=null;const ix=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${xn(e)}Modifiers`]||t[`${Is(e)}Modifiers`];function sx(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Tt;let s=n;const r=e.startsWith("update:"),o=r&&ix(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>ht(u)?u.trim():u)),o.number&&(s=n.map(Cc)));let a,l=i[a=tu(e)]||i[a=tu(xn(e))];!l&&r&&(l=i[a=tu(Is(e))]),l&&Jn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Jn(c,t,6,s)}}const rx=new WeakMap;function N_(t,e,n=!1){const i=n?rx:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Ye(t)){const l=c=>{const u=N_(c,e,!0);u&&(a=!0,Ht(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ct(t)&&i.set(t,null),null):(Ge(r)?r.forEach(l=>o[l]=null):Ht(o,r),ct(t)&&i.set(t,o),o)}function Nc(t,e){return!t||!Sc(e)?!1:(e=e.slice(2).replace(/Once$/,""),dt(t,e[0].toLowerCase()+e.slice(1))||dt(t,Is(e))||dt(t,e))}function Bh(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:m,inheritAttrs:g}=t,_=ic(t);let h,x;try{if(n.shapeFlag&4){const v=s||i,P=v;h=Ei(c.call(P,v,u,f,p,d,m)),x=a}else{const v=e;h=Ei(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),x=e.props?a:ox(a)}}catch(v){ua.length=0,Ic(v,t,1),h=Ke(tn)}let y=h;if(x&&g!==!1){const v=Object.keys(x),{shapeFlag:P}=y;v.length&&P&7&&(r&&v.some(Mc)&&(x=ax(x,r)),y=rs(y,x,!1,!0))}return n.dirs&&(y=rs(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&_r(y,n.transition),h=y,ic(_),h}const ox=t=>{let e;for(const n in t)(n==="class"||n==="style"||Sc(n))&&((e||(e={}))[n]=t[n]);return e},ax=(t,e)=>{const n={};for(const i in t)(!Mc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function lx(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?kh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(O_(o,i,d)&&!Nc(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?kh(i,o,c):!0:!!o;return!1}function kh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(O_(e,t,r)&&!Nc(n,r))return!0}return!1}function O_(t,e,n){const i=t[n],s=e[n];return n==="style"&&ct(i)&&ct(s)?!Ba(i,s):i!==s}function cx({vnode:t,parent:e,suspense:n},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=i,t=s),s===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const F_={},B_=()=>Object.create(F_),k_=t=>Object.getPrototypeOf(t)===F_;function ux(t,e,n,i=!1){const s={},r=B_();t.propsDefaults=Object.create(null),z_(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:gy(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function fx(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ft(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Nc(t.emitsOptions,d))continue;const p=e[d];if(l)if(dt(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const m=xn(d);s[m]=gf(l,a,m,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{z_(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!dt(e,f)&&((u=Is(f))===f||!dt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=gf(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!dt(e,f))&&(delete r[f],c=!0)}c&&$i(t.attrs,"set","")}function z_(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ra(l))continue;const c=e[l];let u;s&&dt(s,u=xn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Nc(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ft(n),c=a||Tt;for(let u=0;u<r.length;u++){const f=r[u];n[f]=gf(s,l,f,c[f],t,!dt(c,f))}}return o}function gf(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=dt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ye(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=Ha(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Is(n))&&(i=!0))}return i}const dx=new WeakMap;function H_(t,e,n=!1){const i=n?dx:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!Ye(t)){const u=f=>{l=!0;const[d,p]=H_(f,e,!0);Ht(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ct(t)&&i.set(t,lo),lo;if(Ge(r))for(let u=0;u<r.length;u++){const f=xn(r[u]);zh(f)&&(o[f]=Tt)}else if(r)for(const u in r){const f=xn(u);if(zh(f)){const d=r[u],p=o[f]=Ge(d)||Ye(d)?{type:d}:Ht({},d),m=p.type;let g=!1,_=!0;if(Ge(m))for(let h=0;h<m.length;++h){const x=m[h],y=Ye(x)&&x.name;if(y==="Boolean"){g=!0;break}else y==="String"&&(_=!1)}else g=Ye(m)&&m.name==="Boolean";p[0]=g,p[1]=_,(g||dt(p,"default"))&&a.push(f)}}const c=[o,a];return ct(t)&&i.set(t,c),c}function zh(t){return t[0]!=="$"&&!ra(t)}const Dd=t=>t==="_"||t==="_ctx"||t==="$stable",Id=t=>Ge(t)?t.map(Ei):[Ei(t)],hx=(t,e,n)=>{if(e._n)return e;const i=It((...s)=>Id(e(...s)),n);return i._c=!1,i},V_=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Dd(s))continue;const r=t[s];if(Ye(r))e[s]=hx(s,r,i);else if(r!=null){const o=Id(r);e[s]=()=>o}}},G_=(t,e)=>{const n=Id(e);t.slots.default=()=>n},W_=(t,e,n)=>{for(const i in e)(n||!Dd(i))&&(t[i]=e[i])},px=(t,e,n)=>{const i=t.slots=B_();if(t.vnode.shapeFlag&32){const s=e._;s?(W_(i,e,n),n&&kg(i,"_",s,!0)):V_(e,i)}else e&&G_(t,e)},mx=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Tt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:W_(s,e,n):(r=!e.$stable,V_(e,s)),o=e}else e&&(G_(t,e),o={default:1});if(r)for(const a in s)!Dd(a)&&o[a]==null&&delete s[a]},vn=xx;function gx(t){return _x(t)}function _x(t,e){const n=Rc();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=fn,insertStaticContent:m}=t,g=(U,z,w,he=null,re=null,se=null,le=void 0,fe=null,te=!!z.dynamicChildren)=>{if(U===z)return;U&&!er(U,z)&&(he=Te(U),Fe(U,re,se,!0),U=null),z.patchFlag===-2&&(te=!1,z.dynamicChildren=null);const{type:T,ref:M,shapeFlag:H}=z;switch(T){case Io:_(U,z,w,he);break;case tn:h(U,z,w,he);break;case Hl:U==null&&x(z,w,he,le);break;case rt:C(U,z,w,he,re,se,le,fe,te);break;default:H&1?P(U,z,w,he,re,se,le,fe,te):H&6?N(U,z,w,he,re,se,le,fe,te):(H&64||H&128)&&T.process(U,z,w,he,re,se,le,fe,te,ye)}M!=null&&re?la(M,U&&U.ref,se,z||U,!z):M==null&&U&&U.ref!=null&&la(U.ref,null,se,U,!0)},_=(U,z,w,he)=>{if(U==null)i(z.el=a(z.children),w,he);else{const re=z.el=U.el;z.children!==U.children&&c(re,z.children)}},h=(U,z,w,he)=>{U==null?i(z.el=l(z.children||""),w,he):z.el=U.el},x=(U,z,w,he)=>{[U.el,U.anchor]=m(U.children,z,w,he,U.el,U.anchor)},y=({el:U,anchor:z},w,he)=>{let re;for(;U&&U!==z;)re=d(U),i(U,w,he),U=re;i(z,w,he)},v=({el:U,anchor:z})=>{let w;for(;U&&U!==z;)w=d(U),s(U),U=w;s(z)},P=(U,z,w,he,re,se,le,fe,te)=>{if(z.type==="svg"?le="svg":z.type==="math"&&(le="mathml"),U==null)D(z,w,he,re,se,le,fe,te);else{const T=U.el&&U.el._isVueCE?U.el:null;try{T&&T._beginPatch(),b(U,z,re,se,le,fe,te)}finally{T&&T._endPatch()}}},D=(U,z,w,he,re,se,le,fe)=>{let te,T;const{props:M,shapeFlag:H,transition:J,dirs:B}=U;if(te=U.el=o(U.type,se,M&&M.is,M),H&8?u(te,U.children):H&16&&L(U.children,te,null,he,re,lu(U,se),le,fe),B&&zs(U,null,he,"created"),A(te,U,U.scopeId,le,he),M){for(const k in M)k!=="value"&&!ra(k)&&r(te,k,null,M[k],se,he);"value"in M&&r(te,"value",null,M.value,se),(T=M.onVnodeBeforeMount)&&_i(T,he,U)}B&&zs(U,null,he,"beforeMount");const E=vx(re,J);E&&J.beforeEnter(te),i(te,z,w),((T=M&&M.onVnodeMounted)||E||B)&&vn(()=>{try{T&&_i(T,he,U),E&&J.enter(te),B&&zs(U,null,he,"mounted")}finally{}},re)},A=(U,z,w,he,re)=>{if(w&&p(U,w),he)for(let se=0;se<he.length;se++)p(U,he[se]);if(re){let se=re.subTree;if(z===se||j_(se.type)&&(se.ssContent===z||se.ssFallback===z)){const le=re.vnode;A(U,le,le.scopeId,le.slotScopeIds,re.parent)}}},L=(U,z,w,he,re,se,le,fe,te=0)=>{for(let T=te;T<U.length;T++){const M=U[T]=fe?Wi(U[T]):Ei(U[T]);g(null,M,z,w,he,re,se,le,fe)}},b=(U,z,w,he,re,se,le)=>{const fe=z.el=U.el;let{patchFlag:te,dynamicChildren:T,dirs:M}=z;te|=U.patchFlag&16;const H=U.props||Tt,J=z.props||Tt;let B;if(w&&Hs(w,!1),(B=J.onVnodeBeforeUpdate)&&_i(B,w,z,U),M&&zs(z,U,w,"beforeUpdate"),w&&Hs(w,!0),(H.innerHTML&&J.innerHTML==null||H.textContent&&J.textContent==null)&&u(fe,""),T?S(U.dynamicChildren,T,fe,w,he,lu(z,re),se):le||Y(U,z,fe,null,w,he,lu(z,re),se,!1),te>0){if(te&16)I(fe,H,J,w,re);else if(te&2&&H.class!==J.class&&r(fe,"class",null,J.class,re),te&4&&r(fe,"style",H.style,J.style,re),te&8){const E=z.dynamicProps;for(let k=0;k<E.length;k++){const G=E[k],W=H[G],pe=J[G];(pe!==W||G==="value")&&r(fe,G,W,pe,re,w)}}te&1&&U.children!==z.children&&u(fe,z.children)}else!le&&T==null&&I(fe,H,J,w,re);((B=J.onVnodeUpdated)||M)&&vn(()=>{B&&_i(B,w,z,U),M&&zs(z,U,w,"updated")},he)},S=(U,z,w,he,re,se,le)=>{for(let fe=0;fe<z.length;fe++){const te=U[fe],T=z[fe],M=te.el&&(te.type===rt||!er(te,T)||te.shapeFlag&198)?f(te.el):w;g(te,T,M,null,he,re,se,le,!0)}},I=(U,z,w,he,re)=>{if(z!==w){if(z!==Tt)for(const se in z)!ra(se)&&!(se in w)&&r(U,se,z[se],null,re,he);for(const se in w){if(ra(se))continue;const le=w[se],fe=z[se];le!==fe&&se!=="value"&&r(U,se,fe,le,re,he)}"value"in w&&r(U,"value",z.value,w.value,re)}},C=(U,z,w,he,re,se,le,fe,te)=>{const T=z.el=U?U.el:a(""),M=z.anchor=U?U.anchor:a("");let{patchFlag:H,dynamicChildren:J,slotScopeIds:B}=z;B&&(fe=fe?fe.concat(B):B),U==null?(i(T,w,he),i(M,w,he),L(z.children||[],w,M,re,se,le,fe,te)):H>0&&H&64&&J&&U.dynamicChildren&&U.dynamicChildren.length===J.length?(S(U.dynamicChildren,J,w,re,se,le,fe),(z.key!=null||re&&z===re.subTree)&&Ld(U,z,!0)):Y(U,z,w,M,re,se,le,fe,te)},N=(U,z,w,he,re,se,le,fe,te)=>{z.slotScopeIds=fe,U==null?z.shapeFlag&512?re.ctx.activate(z,w,he,le,te):K(z,w,he,re,se,le,te):Q(U,z,te)},K=(U,z,w,he,re,se,le)=>{const fe=U.component=wx(U,he,re);if(Lc(U)&&(fe.ctx.renderer=ye),Ax(fe,!1,le),fe.asyncDep){if(re&&re.registerDep(fe,j,le),!U.el){const te=fe.subTree=Ke(tn);h(null,te,z,w),U.placeholder=te.el}}else j(fe,U,z,w,re,se,le)},Q=(U,z,w)=>{const he=z.component=U.component;if(lx(U,z,w))if(he.asyncDep&&!he.asyncResolved){V(he,z,w);return}else he.next=z,he.update();else z.el=U.el,he.vnode=z},j=(U,z,w,he,re,se,le)=>{const fe=()=>{if(U.isMounted){let{next:H,bu:J,u:B,parent:E,vnode:k}=U;{const ue=$_(U);if(ue){H&&(H.el=k.el,V(U,H,le)),ue.asyncDep.then(()=>{vn(()=>{U.isUnmounted||T()},re)});return}}let G=H,W;Hs(U,!1),H?(H.el=k.el,V(U,H,le)):H=k,J&&zl(J),(W=H.props&&H.props.onVnodeBeforeUpdate)&&_i(W,E,H,k),Hs(U,!0);const pe=Bh(U),ee=U.subTree;U.subTree=pe,g(ee,pe,f(ee.el),Te(ee),U,re,se),H.el=pe.el,G===null&&cx(U,pe.el),B&&vn(B,re),(W=H.props&&H.props.onVnodeUpdated)&&vn(()=>_i(W,E,H,k),re)}else{let H;const{el:J,props:B}=z,{bm:E,m:k,parent:G,root:W,type:pe}=U,ee=fo(z);Hs(U,!1),E&&zl(E),!ee&&(H=B&&B.onVnodeBeforeMount)&&_i(H,G,z),Hs(U,!0);{W.ce&&W.ce._hasShadowRoot()&&W.ce._injectChildStyle(pe,U.parent?U.parent.type:void 0);const ue=U.subTree=Bh(U);g(null,ue,w,he,U,re,se),z.el=ue.el}if(k&&vn(k,re),!ee&&(H=B&&B.onVnodeMounted)){const ue=z;vn(()=>_i(H,G,ue),re)}(z.shapeFlag&256||G&&fo(G.vnode)&&G.vnode.shapeFlag&256)&&U.a&&vn(U.a,re),U.isMounted=!0,z=w=he=null}};U.scope.on();const te=U.effect=new Xg(fe);U.scope.off();const T=U.update=te.run.bind(te),M=U.job=te.runIfDirty.bind(te);M.i=U,M.id=U.uid,te.scheduler=()=>Cd(M),Hs(U,!0),T()},V=(U,z,w)=>{z.component=U;const he=U.vnode.props;U.vnode=z,U.next=null,fx(U,z.props,he,w),mx(U,z.children,w),ts(),Ah(U),ns()},Y=(U,z,w,he,re,se,le,fe,te=!1)=>{const T=U&&U.children,M=U?U.shapeFlag:0,H=z.children,{patchFlag:J,shapeFlag:B}=z;if(J>0){if(J&128){we(T,H,w,he,re,se,le,fe,te);return}else if(J&256){me(T,H,w,he,re,se,le,fe,te);return}}B&8?(M&16&&Re(T,re,se),H!==T&&u(w,H)):M&16?B&16?we(T,H,w,he,re,se,le,fe,te):Re(T,re,se,!0):(M&8&&u(w,""),B&16&&L(H,w,he,re,se,le,fe,te))},me=(U,z,w,he,re,se,le,fe,te)=>{U=U||lo,z=z||lo;const T=U.length,M=z.length,H=Math.min(T,M);let J;for(J=0;J<H;J++){const B=z[J]=te?Wi(z[J]):Ei(z[J]);g(U[J],B,w,null,re,se,le,fe,te)}T>M?Re(U,re,se,!0,!1,H):L(z,w,he,re,se,le,fe,te,H)},we=(U,z,w,he,re,se,le,fe,te)=>{let T=0;const M=z.length;let H=U.length-1,J=M-1;for(;T<=H&&T<=J;){const B=U[T],E=z[T]=te?Wi(z[T]):Ei(z[T]);if(er(B,E))g(B,E,w,null,re,se,le,fe,te);else break;T++}for(;T<=H&&T<=J;){const B=U[H],E=z[J]=te?Wi(z[J]):Ei(z[J]);if(er(B,E))g(B,E,w,null,re,se,le,fe,te);else break;H--,J--}if(T>H){if(T<=J){const B=J+1,E=B<M?z[B].el:he;for(;T<=J;)g(null,z[T]=te?Wi(z[T]):Ei(z[T]),w,E,re,se,le,fe,te),T++}}else if(T>J)for(;T<=H;)Fe(U[T],re,se,!0),T++;else{const B=T,E=T,k=new Map;for(T=E;T<=J;T++){const xe=z[T]=te?Wi(z[T]):Ei(z[T]);xe.key!=null&&k.set(xe.key,T)}let G,W=0;const pe=J-E+1;let ee=!1,ue=0;const Me=new Array(pe);for(T=0;T<pe;T++)Me[T]=0;for(T=B;T<=H;T++){const xe=U[T];if(W>=pe){Fe(xe,re,se,!0);continue}let ke;if(xe.key!=null)ke=k.get(xe.key);else for(G=E;G<=J;G++)if(Me[G-E]===0&&er(xe,z[G])){ke=G;break}ke===void 0?Fe(xe,re,se,!0):(Me[ke-E]=T+1,ke>=ue?ue=ke:ee=!0,g(xe,z[ke],w,null,re,se,le,fe,te),W++)}const Ne=ee?yx(Me):lo;for(G=Ne.length-1,T=pe-1;T>=0;T--){const xe=E+T,ke=z[xe],ze=z[xe+1],tt=xe+1<M?ze.el||X_(ze):he;Me[T]===0?g(null,ke,w,tt,re,se,le,fe,te):ee&&(G<0||T!==Ne[G]?Le(ke,w,tt,2):G--)}}},Le=(U,z,w,he,re=null)=>{const{el:se,type:le,transition:fe,children:te,shapeFlag:T}=U;if(T&6){Le(U.component.subTree,z,w,he);return}if(T&128){U.suspense.move(z,w,he);return}if(T&64){le.move(U,z,w,ye);return}if(le===rt){i(se,z,w);for(let H=0;H<te.length;H++)Le(te[H],z,w,he);i(U.anchor,z,w);return}if(le===Hl){y(U,z,w);return}if(he!==2&&T&1&&fe)if(he===0)fe.persisted&&!se[Yn]?i(se,z,w):(fe.beforeEnter(se),i(se,z,w),vn(()=>fe.enter(se),re));else{const{leave:H,delayLeave:J,afterLeave:B}=fe,E=()=>{U.ctx.isUnmounted?s(se):i(se,z,w)},k=()=>{const G=se._isLeaving||!!se[Yn];se._isLeaving&&se[Yn](!0),fe.persisted&&!G?E():H(se,()=>{E(),B&&B()})};J?J(se,E,k):k()}else i(se,z,w)},Fe=(U,z,w,he=!1,re=!1)=>{const{type:se,props:le,ref:fe,children:te,dynamicChildren:T,shapeFlag:M,patchFlag:H,dirs:J,cacheIndex:B,memo:E}=U;if(H===-2&&(re=!1),fe!=null&&(ts(),la(fe,null,w,U,!0),ns()),B!=null&&(z.renderCache[B]=void 0),M&256){z.ctx.deactivate(U);return}const k=M&1&&J,G=!fo(U);let W;if(G&&(W=le&&le.onVnodeBeforeUnmount)&&_i(W,z,U),M&6)_e(U.component,w,he);else{if(M&128){U.suspense.unmount(w,he);return}k&&zs(U,null,z,"beforeUnmount"),M&64?U.type.remove(U,z,w,ye,he):T&&!T.hasOnce&&(se!==rt||H>0&&H&64)?Re(T,z,w,!1,!0):(se===rt&&H&384||!re&&M&16)&&Re(te,z,w),he&&Qe(U)}const pe=E!=null&&B==null;(G&&(W=le&&le.onVnodeUnmounted)||k||pe)&&vn(()=>{W&&_i(W,z,U),k&&zs(U,null,z,"unmounted"),pe&&(U.el=null)},w)},Qe=U=>{const{type:z,el:w,anchor:he,transition:re}=U;if(z===rt){ce(w,he);return}if(z===Hl){v(U);return}const se=()=>{s(w),re&&!re.persisted&&re.afterLeave&&re.afterLeave()};if(U.shapeFlag&1&&re&&!re.persisted){const{leave:le,delayLeave:fe}=re,te=()=>le(w,se);fe?fe(U.el,se,te):te()}else se()},ce=(U,z)=>{let w;for(;U!==z;)w=d(U),s(U),U=w;s(z)},_e=(U,z,w)=>{const{bum:he,scope:re,job:se,subTree:le,um:fe,m:te,a:T}=U;Hh(te),Hh(T),he&&zl(he),re.stop(),se&&(se.flags|=8,Fe(le,U,z,w)),fe&&vn(fe,z),vn(()=>{U.isUnmounted=!0},z)},Re=(U,z,w,he=!1,re=!1,se=0)=>{for(let le=se;le<U.length;le++)Fe(U[le],z,w,he,re)},Te=U=>{if(U.shapeFlag&6)return Te(U.component.subTree);if(U.shapeFlag&128)return U.suspense.next();const z=d(U.anchor||U.el),w=z&&z[m_];return w?d(w):z};let Ue=!1;const it=(U,z,w)=>{let he;U==null?z._vnode&&(Fe(z._vnode,null,null,!0),he=z._vnode.component):g(z._vnode||null,U,z,null,null,null,w),z._vnode=U,Ue||(Ue=!0,Ah(he),f_(),Ue=!1)},ye={p:g,um:Fe,m:Le,r:Qe,mt:K,mc:L,pc:Y,pbc:S,n:Te,o:t};return{render:it,hydrate:void 0,createApp:nx(it)}}function lu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Hs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function vx(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ld(t,e,n=!1){const i=t.children,s=e.children;if(Ge(i)&&Ge(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Wi(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Ld(o,a)),a.type===Io&&(a.patchFlag===-1&&(a=s[r]=Wi(a)),a.el=o.el),a.type===tn&&!a.el&&(a.el=o.el)}}function yx(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function $_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$_(e)}function Hh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function X_(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?X_(e.subTree):null}const j_=t=>t.__isSuspense;function xx(t,e){e&&e.pendingBranch?Ge(t)?e.effects.push(...t):e.effects.push(t):Cy(t)}const rt=Symbol.for("v-fgt"),Io=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),Hl=Symbol.for("v-stc"),ua=[];let Fn=null;function ae(t=!1){ua.push(Fn=t?null:[])}function bx(){ua.pop(),Fn=ua[ua.length-1]||null}let ba=1;function oc(t,e=!1){ba+=t,t<0&&Fn&&e&&(Fn.hasOnce=!0)}function Y_(t){return t.dynamicChildren=ba>0?Fn||lo:null,bx(),ba>0&&Fn&&Fn.push(t),t}function ge(t,e,n,i,s,r){return Y_(F(t,e,n,i,s,r,!0))}function Et(t,e,n,i,s){return Y_(Ke(t,e,n,i,s,!0))}function Sa(t){return t?t.__v_isVNode===!0:!1}function er(t,e){return t.type===e.type&&t.key===e.key}const q_=({key:t})=>t??null,Vl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ht(t)||Lt(t)||Ye(t)?{i:nn,r:t,k:e,f:!!n}:t:null);function F(t,e=null,n=null,i=0,s=null,r=t===rt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&q_(e),ref:e&&Vl(e),scopeId:h_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:nn};return a?(Ud(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ht(n)?8:16),ba>0&&!o&&Fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Fn.push(l),l}const Ke=Sx;function Sx(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===C_)&&(t=tn),Sa(t)){const a=rs(t,e,!0);return n&&Ud(a,n),ba>0&&!r&&Fn&&(a.shapeFlag&6?Fn[Fn.indexOf(t)]=a:Fn.push(a)),a.patchFlag=-2,a}if(Dx(t)&&(t=t.__vccOpts),e){e=Mx(e);let{class:a,style:l}=e;a&&!ht(a)&&(e.class=De(a)),ct(l)&&(Dc(l)&&!Ge(l)&&(l=Ht({},l)),e.style=Hn(l))}const o=ht(t)?1:j_(t)?128:g_(t)?64:ct(t)?4:Ye(t)?2:0;return F(t,e,n,i,s,o,r,!0)}function Mx(t){return t?Dc(t)||k_(t)?Ht({},t):t:null}function rs(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Ji(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&q_(c),ref:e&&e.ref?n&&r?Ge(r)?r.concat(Vl(e)):[r,Vl(e)]:Vl(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==rt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rs(t.ssContent),ssFallback:t.ssFallback&&rs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&_r(u,l.clone(u)),u}function or(t=" ",e=0){return Ke(Io,null,t,e)}function _f(t,e){const n=Ke(Hl,null,t);return n.staticCount=e,n}function nt(t="",e=!1){return e?(ae(),Et(tn,null,t)):Ke(tn,null,t)}function Ei(t){return t==null||typeof t=="boolean"?Ke(tn):Ge(t)?Ke(rt,null,t.slice()):Sa(t)?Wi(t):Ke(Io,null,String(t))}function Wi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:rs(t)}function Ud(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ge(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Ud(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!k_(e)?e._ctx=nn:s===3&&nn&&(nn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:nn},n=32):(e=String(e),i&64?(n=16,e=[or(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ji(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=De([e.class,i.class]));else if(s==="style")e.style=Hn([e.style,i.style]);else if(Sc(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ge(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Mc(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function _i(t,e,n,i=null){Jn(t,e,7,[n,i])}const Ex=U_();let Tx=0;function wx(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Ex,r={uid:Tx++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:H_(i,s),emitsOptions:N_(i,s),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:i.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=sx.bind(null,r),t.ce&&t.ce(r),r}let un=null;const Kt=()=>un||nn;let ac,vf;{const t=Rc(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ac=e("__VUE_INSTANCE_SETTERS__",n=>un=n),vf=e("__VUE_SSR_SETTERS__",n=>Ma=n)}const Ha=t=>{const e=un;return ac(t),t.scope.on(),()=>{t.scope.off(),ac(e)}},Vh=()=>{un&&un.scope.off(),ac(null)};function K_(t){return t.vnode.shapeFlag&4}let Ma=!1;function Ax(t,e=!1,n=!1){e&&vf(e);const{props:i,children:s}=t.vnode,r=K_(t);ux(t,i,r,e),px(t,s,n||e);const o=r?Cx(t,e):void 0;return e&&vf(!1),o}function Cx(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Yy);const{setup:i}=n;if(i){ts();const s=t.setupContext=i.length>1?J_(t):null,r=Ha(t),o=ka(i,t,0,[t.props,s]),a=Og(o);if(ns(),r(),(a||t.sp)&&!fo(t)&&M_(t),a){if(o.then(Vh,Vh),e)return o.then(l=>{Gh(t,l)}).catch(l=>{Ic(l,t,0)});t.asyncDep=o}else Gh(t,o)}else Z_(t)}function Gh(t,e,n){Ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ct(e)&&(t.setupState=a_(e)),Z_(t)}function Z_(t,e,n){const i=t.type;t.render||(t.render=i.render||fn);{const s=Ha(t);ts();try{Ky(t)}finally{ns(),s()}}}const Rx={get(t,e){return cn(t,"get",""),t[e]}};function J_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Rx),slots:t.slots,emit:t.emit,expose:e}}function Oc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(a_(Ad(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ca)return ca[n](t)},has(e,n){return n in e||n in ca}})):t.proxy}function Px(t,e=!0){return Ye(t)?t.displayName||t.name:t.name||e&&t.__name}function Dx(t){return Ye(t)&&"__vccOpts"in t}const Se=(t,e)=>My(t,e,Ma);function Ix(t,e,n){try{oc(-1);const i=arguments.length;return i===2?ct(e)&&!Ge(e)?Sa(e)?Ke(t,null,[e]):Ke(t,e):Ke(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Sa(n)&&(n=[n]),Ke(t,e,n))}finally{oc(1)}}const Lx="3.5.38",Ux=fn;/**
* @vue/runtime-dom v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yf;const Wh=typeof window<"u"&&window.trustedTypes;if(Wh)try{yf=Wh.createPolicy("vue",{createHTML:t=>t})}catch{}const Q_=yf?t=>yf.createHTML(t):t=>t,Nx="http://www.w3.org/2000/svg",Ox="http://www.w3.org/1998/Math/MathML",Vi=typeof document<"u"?document:null,$h=Vi&&Vi.createElement("template"),Fx={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Vi.createElementNS(Nx,t):e==="mathml"?Vi.createElementNS(Ox,t):n?Vi.createElement(t,{is:n}):Vi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Vi.createTextNode(t),createComment:t=>Vi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{$h.innerHTML=Q_(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=$h.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},fs="transition",Vo="animation",xo=Symbol("_vtc"),ev={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},tv=Ht({},y_,ev),Bx=t=>(t.displayName="Transition",t.props=tv,t),kx=Bx((t,{slots:e})=>Ix(By,nv(t),e)),Vs=(t,e=[])=>{Ge(t)?t.forEach(n=>n(...e)):t&&t(...e)},Xh=t=>t?Ge(t)?t.some(e=>e.length>1):t.length>1:!1;function nv(t){const e={};for(const C in t)C in ev||(e[C]=t[C]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=zx(s),g=m&&m[0],_=m&&m[1],{onBeforeEnter:h,onEnter:x,onEnterCancelled:y,onLeave:v,onLeaveCancelled:P,onBeforeAppear:D=h,onAppear:A=x,onAppearCancelled:L=y}=e,b=(C,N,K,Q)=>{C._enterCancelled=Q,xs(C,N?u:a),xs(C,N?c:o),K&&K()},S=(C,N)=>{C._isLeaving=!1,xs(C,f),xs(C,p),xs(C,d),N&&N()},I=C=>(N,K)=>{const Q=C?A:x,j=()=>b(N,C,K);Vs(Q,[N,j]),jh(()=>{xs(N,C?l:r),xi(N,C?u:a),Xh(Q)||Yh(N,i,g,j)})};return Ht(e,{onBeforeEnter(C){Vs(h,[C]),xi(C,r),xi(C,o)},onBeforeAppear(C){Vs(D,[C]),xi(C,l),xi(C,c)},onEnter:I(!1),onAppear:I(!0),onLeave(C,N){C._isLeaving=!0;const K=()=>S(C,N);xi(C,f),C._enterCancelled?(xi(C,d),xf(C)):(xf(C),xi(C,d)),jh(()=>{C._isLeaving&&(xs(C,f),xi(C,p),Xh(v)||Yh(C,i,_,K))}),Vs(v,[C,K])},onEnterCancelled(C){b(C,!1,void 0,!0),Vs(y,[C])},onAppearCancelled(C){b(C,!0,void 0,!0),Vs(L,[C])},onLeaveCancelled(C){S(C),Vs(P,[C])}})}function zx(t){if(t==null)return null;if(ct(t))return[cu(t.enter),cu(t.leave)];{const e=cu(t);return[e,e]}}function cu(t){return G0(t)}function xi(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[xo]||(t[xo]=new Set)).add(e)}function xs(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[xo];n&&(n.delete(e),n.size||(t[xo]=void 0))}function jh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Hx=0;function Yh(t,e,n,i){const s=t._endId=++Hx,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=iv(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),r()},d=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function iv(t,e){const n=window.getComputedStyle(t),i=m=>(n[m]||"").split(", "),s=i(`${fs}Delay`),r=i(`${fs}Duration`),o=qh(s,r),a=i(`${Vo}Delay`),l=i(`${Vo}Duration`),c=qh(a,l);let u=null,f=0,d=0;e===fs?o>0&&(u=fs,f=o,d=r.length):e===Vo?c>0&&(u=Vo,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?fs:Vo:null,d=u?u===fs?r.length:l.length:0);const p=u===fs&&/\b(?:transform|all)(?:,|$)/.test(i(`${fs}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function qh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Kh(n)+Kh(t[i])))}function Kh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function xf(t){return(t?t.ownerDocument:document).body.offsetHeight}function Vx(t,e,n){const i=t[xo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const lc=Symbol("_vod"),Nd=Symbol("_vsh"),jn={name:"show",beforeMount(t,{value:e},{transition:n}){t[lc]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Go(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Go(t,!0),i.enter(t)):i.leave(t,()=>{Go(t,!1)}):Go(t,e))},beforeUnmount(t,{value:e}){Go(t,e)}};function Go(t,e){t.style.display=e?t[lc]:"none",t[Nd]=!e}const Gx=Symbol(""),Wx=/(?:^|;)\s*display\s*:/;function $x(t,e,n){const i=t.style,s=ht(n);let r=!1;if(n&&!s){if(e)if(ht(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ia(i,a,"")}else for(const o in e)n[o]==null&&ia(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?jx(t,o,!ht(e)&&e?e[o]:void 0,a)||ia(i,o,a):ia(i,o,"")}}else if(s){if(e!==n){const o=i[Gx];o&&(n+=";"+o),i.cssText=n,r=Wx.test(n)}}else e&&t.removeAttribute("style");lc in t&&(t[lc]=r?i.display:"",t[Nd]&&(i.display="none"))}const Zh=/\s*!important$/;function ia(t,e,n){if(Ge(n))n.forEach(i=>ia(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Xx(t,e);Zh.test(n)?t.setProperty(Is(i),n.replace(Zh,""),"important"):t[i]=n}}const Jh=["Webkit","Moz","ms"],uu={};function Xx(t,e){const n=uu[e];if(n)return n;let i=xn(e);if(i!=="filter"&&i in t)return uu[e]=i;i=Ac(i);for(let s=0;s<Jh.length;s++){const r=Jh[s]+i;if(r in t)return uu[e]=r}return e}function jx(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&ht(i)&&n===i}const Qh="http://www.w3.org/1999/xlink";function ep(t,e,n,i,s,r=q0(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Qh,e.slice(6,e.length)):t.setAttributeNS(Qh,e,n):n==null||r&&!zg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":zn(n)?String(n):n)}function tp(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Q_(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=zg(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function tr(t,e,n,i){t.addEventListener(e,n,i)}function Yx(t,e,n,i){t.removeEventListener(e,n,i)}const np=Symbol("_vei");function qx(t,e,n,i,s=null){const r=t[np]||(t[np]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Kx(e);if(i){const c=r[e]=Qx(i,s);tr(t,a,c,l)}else o&&(Yx(t,a,o,l),r[e]=void 0)}}const ip=/(?:Once|Passive|Capture)$/;function Kx(t){let e;if(ip.test(t)){e={};let i;for(;i=t.match(ip);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Is(t.slice(2)),e]}let fu=0;const Zx=Promise.resolve(),Jx=()=>fu||(Zx.then(()=>fu=0),fu=Date.now());function Qx(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const s=n.value;if(Ge(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Jn(c,e,5,a)}}else Jn(s,e,5,[i])};return n.value=t,n.attached=Jx(),n}const sp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,eb=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?Vx(t,i,o):e==="style"?$x(t,n,i):Sc(e)?Mc(e)||qx(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):tb(t,e,i,o))?(tp(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ep(t,e,i,o,r,e!=="value")):t._isVueCE&&(nb(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!ht(i)))?tp(t,xn(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),ep(t,e,i,o))};function tb(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&sp(e)&&Ye(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return sp(e)&&ht(n)?!1:e in t}function nb(t,e){const n=t._def.props;if(!n)return!1;const i=xn(e);return Array.isArray(n)?n.some(s=>xn(s)===i):Object.keys(n).some(s=>xn(s)===i)}const sv=new WeakMap,rv=new WeakMap,cc=Symbol("_moveCb"),rp=Symbol("_enterCb"),ib=t=>(delete t.props.mode,t),sb=ib({name:"TransitionGroup",props:Ht({},tv,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Kt(),i=v_();let s,r;return A_(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!cb(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(ob),s.forEach(ab);const a=s.filter(lb);xf(n.vnode.el),a.forEach(l=>{const c=l.el,u=c.style;xi(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[cc]=d=>{d&&d.target!==c||(!d||d.propertyName.endsWith("transform"))&&(c.removeEventListener("transitionend",f),c[cc]=null,xs(c,o))};c.addEventListener("transitionend",f)}),s=[]}),()=>{const o=ft(t),a=nv(o);let l=o.tag||rt;if(s=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&!u.el[Nd]&&(s.push(u),_r(u,xa(u,a,i,n)),sv.set(u,ov(u.el)))}r=e.default?Pd(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&_r(u,xa(u,a,i,n))}return Ke(l,null,r)}}}),rb=sb;function ob(t){const e=t.el;e[cc]&&e[cc](),e[rp]&&e[rp]()}function ab(t){rv.set(t,ov(t.el))}function lb(t){const e=sv.get(t),n=rv.get(t),i=e.left-n.left,s=e.top-n.top;if(i||s){const r=t.el,o=r.style,a=r.getBoundingClientRect();let l=1,c=1;return r.offsetWidth&&(l=a.width/r.offsetWidth),r.offsetHeight&&(c=a.height/r.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(c)||c===0)&&(c=1),Math.abs(l-1)<.01&&(l=1),Math.abs(c-1)<.01&&(c=1),o.transform=o.webkitTransform=`translate(${i/l}px,${s/c}px)`,o.transitionDuration="0s",t}}function ov(t){const e=t.getBoundingClientRect();return{left:e.left,top:e.top}}function cb(t,e,n){const i=t.cloneNode(),s=t[xo];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:o}=iv(i);return r.removeChild(i),o}const uc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ge(e)?n=>zl(e,n):e};function ub(t){t.target.composing=!0}function op(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ho=Symbol("_assign");function ap(t,e,n){return e&&(t=t.trim()),n&&(t=Cc(t)),t}const fc={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[ho]=uc(s);const r=i||s.props&&s.props.type==="number";tr(t,e?"change":"input",o=>{o.target.composing||t[ho](ap(t.value,n,r))}),(n||r)&&tr(t,"change",()=>{t.value=ap(t.value,n,r)}),e||(tr(t,"compositionstart",ub),tr(t,"compositionend",op),tr(t,"change",op))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[ho]=uc(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Cc(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l)}},no={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Ec(e);tr(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Cc(dc(o)):dc(o));t[ho](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,qt(()=>{t._assigning=!1})}),t[ho]=uc(i)},mounted(t,{value:e}){lp(t,e)},beforeUpdate(t,e,n){t[ho]=uc(n)},updated(t,{value:e}){t._assigning||lp(t,e)}};function lp(t,e){const n=t.multiple,i=Ge(e);if(!(n&&!i&&!Ec(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=dc(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Z0(e,a)>-1}else o.selected=e.has(a);else if(Ba(dc(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function dc(t){return"_value"in t?t._value:t.value}const fb=["ctrl","shift","alt","meta"],db={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>fb.some(n=>t[`${n}Key`]&&!e.includes(n))},Ea=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=db[e[o]];if(a&&a(s,e))return}return t(s,...r)}))},hb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},fa=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=(s=>{if(!("key"in s))return;const r=Is(s.key);if(e.some(o=>o===r||hb[o]===r))return t(s)}))},pb=Ht({patchProp:eb},Fx);let cp;function mb(){return cp||(cp=gx(pb))}const gb=((...t)=>{const e=mb().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=vb(i);if(!s)return;const r=e._component;!Ye(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,_b(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function _b(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function vb(t){return ht(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let av;const Fc=t=>av=t,lv=Symbol();function bf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var da;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(da||(da={}));function yb(){const t=Wg(!0),e=t.run(()=>ve({}));let n=[],i=[];const s=Ad({install(r){Fc(s),s._a=r,r.provide(lv,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const cv=()=>{};function up(t,e,n,i=cv){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&xd()&&$g(s),s}function Nr(t,...e){t.slice().forEach(n=>{n(...e)})}const xb=t=>t(),fp=Symbol(),du=Symbol();function Sf(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];bf(s)&&bf(i)&&t.hasOwnProperty(n)&&!Lt(i)&&!Zi(i)?t[n]=Sf(s,i):t[n]=i}return t}const bb=Symbol();function Sb(t){return!bf(t)||!t.hasOwnProperty(bb)}const{assign:bs}=Object;function Mb(t){return!!(Lt(t)&&t.effect)}function Eb(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=yy(n.state.value[t]);return bs(u,r,Object.keys(o||{}).reduce((f,d)=>(f[d]=Ad(Se(()=>{Fc(n);const p=n._s.get(t);return o[d].call(p,p)})),f),{}))}return l=uv(t,c,e,n,i,!0),l}function uv(t,e,n={},i,s,r){let o;const a=bs({actions:{}},n),l={deep:!0};let c,u,f=[],d=[],p;const m=i.state.value[t];!r&&!m&&(i.state.value[t]={});let g;function _(L){let b;c=u=!1,typeof L=="function"?(L(i.state.value[t]),b={type:da.patchFunction,storeId:t,events:p}):(Sf(i.state.value[t],L),b={type:da.patchObject,payload:L,storeId:t,events:p});const S=g=Symbol();qt().then(()=>{g===S&&(c=!0)}),u=!0,Nr(f,b,i.state.value[t])}const h=r?function(){const{state:b}=n,S=b?b():{};this.$patch(I=>{bs(I,S)})}:cv;function x(){o.stop(),f=[],d=[],i._s.delete(t)}const y=(L,b="")=>{if(fp in L)return L[du]=b,L;const S=function(){Fc(i);const I=Array.from(arguments),C=[],N=[];function K(V){C.push(V)}function Q(V){N.push(V)}Nr(d,{args:I,name:S[du],store:P,after:K,onError:Q});let j;try{j=L.apply(this&&this.$id===t?this:P,I)}catch(V){throw Nr(N,V),V}return j instanceof Promise?j.then(V=>(Nr(C,V),V)).catch(V=>(Nr(N,V),Promise.reject(V))):(Nr(C,j),j)};return S[fp]=!0,S[du]=b,S},v={_p:i,$id:t,$onAction:up.bind(null,d),$patch:_,$reset:h,$subscribe(L,b={}){const S=up(f,L,b.detached,()=>I()),I=o.run(()=>We(()=>i.state.value[t],C=>{(b.flush==="sync"?u:c)&&L({storeId:t,type:da.direct,events:p},C)},bs({},l,b)));return S},$dispose:x},P=Tr(v);i._s.set(t,P);const A=(i._a&&i._a.runWithContext||xb)(()=>i._e.run(()=>(o=Wg()).run(()=>e({action:y}))));for(const L in A){const b=A[L];if(Lt(b)&&!Mb(b)||Zi(b))r||(m&&Sb(b)&&(Lt(b)?b.value=m[L]:Sf(b,m[L])),i.state.value[t][L]=b);else if(typeof b=="function"){const S=y(b,L);A[L]=S,a.actions[L]=b}}return bs(P,A),bs(ft(P),A),Object.defineProperty(P,"$state",{get:()=>i.state.value[t],set:L=>{_(b=>{bs(b,L)})}}),i._p.forEach(L=>{bs(P,o.run(()=>L({store:P,app:i._a,pinia:i,options:a})))}),m&&r&&n.hydrate&&n.hydrate(P.$state,m),c=!0,u=!0,P}/*! #__NO_SIDE_EFFECTS__ */function Od(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,l){const c=Ry();return a=a||(c?Rt(lv,null):null),a&&Fc(a),a=av,a._s.has(i)||(r?uv(i,e,s,a):Eb(i,s,a)),a._s.get(i)}return o.$id=i,o}const fv="/llmtocabinet",Tb="/ws";function wn(t){return`${fv}${t}`}function wb(t){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${fv}${Tb}/${t}`}function dp(t){return`${t}`}let Mf=null;function Ab(t){Mf=t}function Ja(t,e="info"){Mf&&Mf(t,e)}const Ls=Od("cabinet",()=>{const t=ve(null),e=ve(null),n=ve(0),i=ve(new Set),s=ve(!1),r=ve(localStorage.getItem("lastProjectId")||"default"),o=Se(()=>!t.value||!e.value?null:l(t.value,e.value)),a=Se(()=>t.value?t.value.components.map(y=>({id:y.id,name:y.name,type:y.type})):[]);function l(y,v){for(const P of y.components){const D=c(P,v);if(D)return D}return null}function c(y,v){if(y.id===v)return y;for(const P of y.children){const D=c(P,v);if(D)return D}return null}function u(y){if(!t.value)return[];const v=[];for(const P of t.value.components)if(f(P,y,v))return v;return[]}function f(y,v,P){if(y.id===v)return!0;for(const D of y.children)if(f(D,v,P))return P.push(y.id),!0;return!1}function d(y){t.value=y}function p(y){e.value=y,y&&(n.value++,u(y).forEach(P=>i.value.add(P)))}function m(y){i.value.has(y)?i.value.delete(y):i.value.add(y)}function g(y){return i.value.has(y)}function _(y){r.value=y}async function h(){try{const v=await(await fetch(wn(`/api/projects/${r.value}/undo`),{method:"POST"})).json();Ja(v.message||(v.success?"已撤销":"没有可撤销的操作"),v.success?"success":"warning"),v.success&&v.cabinet&&(t.value=v.cabinet)}catch(y){console.error("撤销失败:",y),Ja("撤销失败","error")}}async function x(){try{const v=await(await fetch(wn(`/api/projects/${r.value}/redo`),{method:"POST"})).json();Ja(v.message||(v.success?"已重做":"没有可重做的操作"),v.success?"success":"warning"),v.success&&v.cabinet&&(t.value=v.cabinet)}catch(y){console.error("重做失败:",y),Ja("重做失败","error")}}return{cabinet:t,selectedComponentId:e,componentClickSignal:n,selectedComponent:o,componentList:a,expandedIds:i,isLoading:s,currentProjectId:r,setCabinet:d,selectComponent:p,findParentIds:u,toggleExpand:m,isExpanded:g,setProjectId:_,undo:h,redo:x}});function hp(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"xxxx-xxxx-xxxx".replace(/x/g,()=>Math.floor(Math.random()*16).toString(16))}const so=Od("chat",()=>{const t=ve([]),e=ve(!1),n=ve(""),i=ve([]);function s(m,g){t.value.push({id:hp(),role:m,content:g,timestamp:Date.now()})}function r(){e.value=!0,n.value="",i.value=[]}function o(m){n.value+=m}function a(m){i.value.push(m)}function l(){n.value&&s("assistant",n.value),e.value=!1,n.value="",i.value=[]}function c(){t.value.push({id:hp(),role:"assistant",content:n.value||"对话已停止",timestamp:Date.now(),stopped:!0,thinkingSteps:[...i.value]}),e.value=!1,n.value="",i.value=[]}function u(m){e.value=!0,n.value="",i.value=[...m]}function f(m){const g=t.value.find(_=>_.id===m);g&&(g.continued=!0)}function d(){for(let m=t.value.length-1;m>=0;m--){const g=t.value[m];if(g.role==="assistant"&&g.stopped&&!g.continued){g.continued=!0;break}}}function p(){t.value=[],n.value="",e.value=!1,i.value=[]}return{messages:t,isStreaming:e,currentStreamContent:n,thinkingSteps:i,addMessage:s,startStream:r,appendStreamContent:o,addThinkingStep:a,finishStream:l,stopStream:c,continueStream:u,markContinued:f,disableUncontinuedStoppedMessage:d,clearMessages:p}});let Ef=null;function Cb(t){Ef=t}function Si(t,e="info"){Ef&&Ef(t,e)}const Lo=Od("websocket",()=>{const t=ve(!1),e=ve(0),n=ve(localStorage.getItem("lastProjectId")||"default"),i=ve(0);let s=null,r=0;function o(g){n.value=g,localStorage.setItem("lastProjectId",g),r++;const _=r;s&&(s.onclose=null,s.close(),s=null);const h=wb(g);s=new WebSocket(h),s.onopen=()=>{_===r&&(t.value=!0,e.value=0,console.log(`WebSocket 已连接: ${g}`),Si("已连接到服务器","success"))},s.onmessage=x=>{if(_!==r)return;const y=JSON.parse(x.data);a(y)},s.onclose=()=>{_===r&&(t.value=!1,console.log(`WebSocket 已断开: ${g}`),Si("连接已断开，正在尝试重连...","warning"),e.value<5?(e.value++,setTimeout(()=>{_===r&&o(g)},2e3*e.value)):Si("重连失败，请刷新页面","error"))},s.onerror=x=>{console.error("WebSocket 错误:",x),Si("连接出现错误","error")}}function a(g){const _=Ls(),h=so();switch(g.type){case"cabinet_update":g.cabinet&&_.setCabinet(g.cabinet);break;case"agent_thinking":g.content&&h.appendStreamContent(g.content);break;case"agent_status":g.content&&h.addThinkingStep(g.content);break;case"agent_stopped":h.stopStream();break;case"agent_response":g.content&&(h.finishStream(),h.addMessage("assistant",g.content));break;case"stream_end":h.finishStream();break;case"error":const x=g.message||"未知错误";h.addMessage("system",`错误: ${x}`),h.finishStream(),Si(x,"error");break}}function l(g){if(!s||s.readyState!==WebSocket.OPEN){Si("未连接到服务器，请稍后重试","warning");return}const _=so();_.disableUncontinuedStoppedMessage(),_.addMessage("user",g),_.startStream(),s.send(JSON.stringify({type:"chat_message",text:g}))}function c(g,_){if(!s||s.readyState!==WebSocket.OPEN){Si("未连接到服务器，请稍后重试","warning");return}const h=so();h.continueStream(g),h.markContinued(_),s.send(JSON.stringify({type:"continue_message"}))}async function u(g=!0){const _=so();if(!_.isStreaming)return;const h=n.value;try{await fetch(wn(`/api/projects/${h}/stop`),{method:"POST"})}catch(x){console.error("停止旧对话失败:",x)}g&&_.isStreaming&&_.stopStream()}function f(){!s||s.readyState!==WebSocket.OPEN||s.send(JSON.stringify({type:"request_sync"}))}function d(g){!s||s.readyState!==WebSocket.OPEN||s.send(JSON.stringify({type:"select_component",component_id:g}))}function p(){i.value++}function m(){r++,s&&(s.onclose=null,s.close(),s=null),t.value=!1,e.value=0}return{isConnected:t,reconnectAttempts:e,currentProjectId:n,schemeListVersion:i,connect:o,sendChatMessage:l,continueConversation:c,stopCurrentConversation:u,requestSync:f,selectComponent:d,refreshSchemeList:p,disconnect:m}}),Gi=(t,e,{checkForDefaultPrevented:n=!0}={})=>s=>{const r=t==null?void 0:t(s);if(n===!1||!r)return e==null?void 0:e(s)};var pp;const kn=typeof window<"u",Rb=t=>typeof t=="string",dv=()=>{},Pb=kn&&((pp=window==null?void 0:window.navigator)==null?void 0:pp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function hv(t){return typeof t=="function"?t():O(t)}function Db(t){return t}function Fd(t){return xd()?($g(t),!0):!1}function Ib(t,e=!0){Kt()?Ft(t):e?t():qt(t)}function As(t){var e;const n=hv(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Bd=kn?window:void 0;function Gl(...t){let e,n,i,s;if(Rb(t[0])||Array.isArray(t[0])?([n,i,s]=t,e=Bd):[e,n,i,s]=t,!e)return dv;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const r=[],o=()=>{r.forEach(u=>u()),r.length=0},a=(u,f,d,p)=>(u.addEventListener(f,d,p),()=>u.removeEventListener(f,d,p)),l=We(()=>[As(e),hv(s)],([u,f])=>{o(),u&&r.push(...n.flatMap(d=>i.map(p=>a(u,d,p,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return Fd(c),c}let mp=!1;function Lb(t,e,n={}){const{window:i=Bd,ignore:s=[],capture:r=!0,detectIframe:o=!1}=n;if(!i)return;Pb&&!mp&&(mp=!0,Array.from(i.document.body.children).forEach(d=>d.addEventListener("click",dv)));let a=!0;const l=d=>s.some(p=>{if(typeof p=="string")return Array.from(i.document.querySelectorAll(p)).some(m=>m===d.target||d.composedPath().includes(m));{const m=As(p);return m&&(d.target===m||d.composedPath().includes(m))}}),u=[Gl(i,"click",d=>{const p=As(t);if(!(!p||p===d.target||d.composedPath().includes(p))){if(d.detail===0&&(a=!l(d)),!a){a=!0;return}e(d)}},{passive:!0,capture:r}),Gl(i,"pointerdown",d=>{const p=As(t);p&&(a=!d.composedPath().includes(p)&&!l(d))},{passive:!0}),o&&Gl(i,"blur",d=>{var p;const m=As(t);((p=i.document.activeElement)==null?void 0:p.tagName)==="IFRAME"&&!(m!=null&&m.contains(i.document.activeElement))&&e(d)})].filter(Boolean);return()=>u.forEach(d=>d())}function Ub(t,e=!1){const n=ve(),i=()=>n.value=!!t();return i(),Ib(i,e),n}const gp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_p="__vueuse_ssr_handlers__";gp[_p]=gp[_p]||{};var vp=Object.getOwnPropertySymbols,Nb=Object.prototype.hasOwnProperty,Ob=Object.prototype.propertyIsEnumerable,Fb=(t,e)=>{var n={};for(var i in t)Nb.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&vp)for(var i of vp(t))e.indexOf(i)<0&&Ob.call(t,i)&&(n[i]=t[i]);return n};function Bb(t,e,n={}){const i=n,{window:s=Bd}=i,r=Fb(i,["window"]);let o;const a=Ub(()=>s&&"ResizeObserver"in s),l=()=>{o&&(o.disconnect(),o=void 0)},c=We(()=>As(t),f=>{l(),a.value&&s&&f&&(o=new ResizeObserver(e),o.observe(f,r))},{immediate:!0,flush:"post"}),u=()=>{l(),c()};return Fd(u),{isSupported:a,stop:u}}var yp;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(yp||(yp={}));var kb=Object.defineProperty,xp=Object.getOwnPropertySymbols,zb=Object.prototype.hasOwnProperty,Hb=Object.prototype.propertyIsEnumerable,bp=(t,e,n)=>e in t?kb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Vb=(t,e)=>{for(var n in e||(e={}))zb.call(e,n)&&bp(t,n,e[n]);if(xp)for(var n of xp(e))Hb.call(e,n)&&bp(t,n,e[n]);return t};const Gb={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Vb({linear:Db},Gb);const Wb=()=>kn&&/firefox/i.test(window.navigator.userAgent),kd=t=>{let e,n;return t.type==="touchend"?(n=t.changedTouches[0].clientY,e=t.changedTouches[0].clientX):t.type.startsWith("touch")?(n=t.touches[0].clientY,e=t.touches[0].clientX):(n=t.clientY,e=t.clientX),{clientX:e,clientY:n}};var $b=typeof global=="object"&&global&&global.Object===Object&&global,Xb=typeof self=="object"&&self&&self.Object===Object&&self,Bc=$b||Xb||Function("return this")(),bo=Bc.Symbol,pv=Object.prototype,jb=pv.hasOwnProperty,Yb=pv.toString,Wo=bo?bo.toStringTag:void 0;function qb(t){var e=jb.call(t,Wo),n=t[Wo];try{t[Wo]=void 0;var i=!0}catch{}var s=Yb.call(t);return i&&(e?t[Wo]=n:delete t[Wo]),s}var Kb=Object.prototype,Zb=Kb.toString;function Jb(t){return Zb.call(t)}var Qb="[object Null]",eS="[object Undefined]",Sp=bo?bo.toStringTag:void 0;function mv(t){return t==null?t===void 0?eS:Qb:Sp&&Sp in Object(t)?qb(t):Jb(t)}function tS(t){return t!=null&&typeof t=="object"}var nS="[object Symbol]";function kc(t){return typeof t=="symbol"||tS(t)&&mv(t)==nS}function iS(t,e){for(var n=-1,i=t==null?0:t.length,s=Array(i);++n<i;)s[n]=e(t[n],n,t);return s}var zd=Array.isArray,Mp=bo?bo.prototype:void 0,Ep=Mp?Mp.toString:void 0;function gv(t){if(typeof t=="string")return t;if(zd(t))return iS(t,gv)+"";if(kc(t))return Ep?Ep.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}var sS=/\s/;function rS(t){for(var e=t.length;e--&&sS.test(t.charAt(e)););return e}var oS=/^\s+/;function aS(t){return t&&t.slice(0,rS(t)+1).replace(oS,"")}function Ta(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Tp=NaN,lS=/^[-+]0x[0-9a-f]+$/i,cS=/^0b[01]+$/i,uS=/^0o[0-7]+$/i,fS=parseInt;function wp(t){if(typeof t=="number")return t;if(kc(t))return Tp;if(Ta(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Ta(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=aS(t);var n=cS.test(t);return n||uS.test(t)?fS(t.slice(2),n?2:8):lS.test(t)?Tp:+t}var dS="[object AsyncFunction]",hS="[object Function]",pS="[object GeneratorFunction]",mS="[object Proxy]";function gS(t){if(!Ta(t))return!1;var e=mv(t);return e==hS||e==pS||e==dS||e==mS}var hu=Bc["__core-js_shared__"],Ap=(function(){var t=/[^.]+$/.exec(hu&&hu.keys&&hu.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""})();function _S(t){return!!Ap&&Ap in t}var vS=Function.prototype,yS=vS.toString;function xS(t){if(t!=null){try{return yS.call(t)}catch{}try{return t+""}catch{}}return""}var bS=/[\\^$.*+?()[\]{}|]/g,SS=/^\[object .+?Constructor\]$/,MS=Function.prototype,ES=Object.prototype,TS=MS.toString,wS=ES.hasOwnProperty,AS=RegExp("^"+TS.call(wS).replace(bS,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function CS(t){if(!Ta(t)||_S(t))return!1;var e=gS(t)?AS:SS;return e.test(xS(t))}function RS(t,e){return t==null?void 0:t[e]}function Hd(t,e){var n=RS(t,e);return CS(n)?n:void 0}var Cp=(function(){try{var t=Hd(Object,"defineProperty");return t({},"",{}),t}catch{}})();function PS(t,e,n){e=="__proto__"&&Cp?Cp(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function DS(t,e){return t===e||t!==t&&e!==e}var IS=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,LS=/^\w*$/;function US(t,e){if(zd(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||kc(t)?!0:LS.test(t)||!IS.test(t)||e!=null&&t in Object(e)}var wa=Hd(Object,"create");function NS(){this.__data__=wa?wa(null):{},this.size=0}function OS(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var FS="__lodash_hash_undefined__",BS=Object.prototype,kS=BS.hasOwnProperty;function zS(t){var e=this.__data__;if(wa){var n=e[t];return n===FS?void 0:n}return kS.call(e,t)?e[t]:void 0}var HS=Object.prototype,VS=HS.hasOwnProperty;function GS(t){var e=this.__data__;return wa?e[t]!==void 0:VS.call(e,t)}var WS="__lodash_hash_undefined__";function $S(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=wa&&e===void 0?WS:e,this}function vr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}vr.prototype.clear=NS;vr.prototype.delete=OS;vr.prototype.get=zS;vr.prototype.has=GS;vr.prototype.set=$S;function XS(){this.__data__=[],this.size=0}function zc(t,e){for(var n=t.length;n--;)if(DS(t[n][0],e))return n;return-1}var jS=Array.prototype,YS=jS.splice;function qS(t){var e=this.__data__,n=zc(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():YS.call(e,n,1),--this.size,!0}function KS(t){var e=this.__data__,n=zc(e,t);return n<0?void 0:e[n][1]}function ZS(t){return zc(this.__data__,t)>-1}function JS(t,e){var n=this.__data__,i=zc(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}function Uo(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Uo.prototype.clear=XS;Uo.prototype.delete=qS;Uo.prototype.get=KS;Uo.prototype.has=ZS;Uo.prototype.set=JS;var QS=Hd(Bc,"Map");function eM(){this.size=0,this.__data__={hash:new vr,map:new(QS||Uo),string:new vr}}function tM(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Hc(t,e){var n=t.__data__;return tM(e)?n[typeof e=="string"?"string":"hash"]:n.map}function nM(t){var e=Hc(this,t).delete(t);return this.size-=e?1:0,e}function iM(t){return Hc(this,t).get(t)}function sM(t){return Hc(this,t).has(t)}function rM(t,e){var n=Hc(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}function wr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}wr.prototype.clear=eM;wr.prototype.delete=nM;wr.prototype.get=iM;wr.prototype.has=sM;wr.prototype.set=rM;var oM="Expected a function";function Vd(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(oM);var n=function(){var i=arguments,s=e?e.apply(this,i):i[0],r=n.cache;if(r.has(s))return r.get(s);var o=t.apply(this,i);return n.cache=r.set(s,o)||r,o};return n.cache=new(Vd.Cache||wr),n}Vd.Cache=wr;var aM=500;function lM(t){var e=Vd(t,function(i){return n.size===aM&&n.clear(),i}),n=e.cache;return e}var cM=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,uM=/\\(\\)?/g,fM=lM(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(cM,function(n,i,s,r){e.push(s?r.replace(uM,"$1"):i||n)}),e});function dM(t){return t==null?"":gv(t)}function hM(t,e){return zd(t)?t:US(t,e)?[t]:fM(dM(t))}function pM(t){if(typeof t=="string"||kc(t))return t;var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function mM(t,e){e=hM(e,t);for(var n=0,i=e.length;t!=null&&n<i;)t=t[pM(e[n++])];return n&&n==i?t:void 0}function gM(t,e,n){var i=t==null?void 0:mM(t,e);return i===void 0?n:i}var pu=function(){return Bc.Date.now()},_M="Expected a function",vM=Math.max,yM=Math.min;function xM(t,e,n){var i,s,r,o,a,l,c=0,u=!1,f=!1,d=!0;if(typeof t!="function")throw new TypeError(_M);e=wp(e)||0,Ta(n)&&(u=!0,f="maxWait"in n,r=f?vM(wp(n.maxWait)||0,e):r,d="trailing"in n?!!n.trailing:d);function p(D){var A=i,L=s;return i=s=void 0,c=D,o=t.apply(L,A),o}function m(D){return c=D,a=setTimeout(h,e),u?p(D):o}function g(D){var A=D-l,L=D-c,b=e-A;return f?yM(b,r-L):b}function _(D){var A=D-l,L=D-c;return l===void 0||A>=e||A<0||f&&L>=r}function h(){var D=pu();if(_(D))return x(D);a=setTimeout(h,g(D))}function x(D){return a=void 0,d&&i?p(D):(i=s=void 0,o)}function y(){a!==void 0&&clearTimeout(a),c=0,i=l=s=a=void 0}function v(){return a===void 0?o:x(pu())}function P(){var D=pu(),A=_(D);if(i=arguments,s=this,l=D,A){if(a===void 0)return m(l);if(f)return clearTimeout(a),a=setTimeout(h,e),p(l)}return a===void 0&&(a=setTimeout(h,e)),o}return P.cancel=y,P.flush=v,P}function hc(t){for(var e=-1,n=t==null?0:t.length,i={};++e<n;){var s=t[e];PS(i,s[0],s[1])}return i}function hr(t){return t==null}function bM(t){return t===void 0}const SM=t=>t===void 0,_v=t=>typeof t=="boolean",yr=t=>typeof t=="number",Aa=t=>typeof Element>"u"?!1:t instanceof Element,MM=t=>ht(t)?!Number.isNaN(Number(t)):!1;function Tf(t,e="px"){if(!t)return"";if(yr(t)||MM(t))return`${t}${e}`;if(ht(t))return t}/*! Element Plus Icons Vue v2.3.2 */var EM=Ze({name:"ArrowDown",__name:"arrow-down",setup(t){return(e,n)=>(ae(),ge("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[F("path",{fill:"currentColor",d:"M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"})]))}}),TM=EM,wM=Ze({name:"CircleCheck",__name:"circle-check",setup(t){return(e,n)=>(ae(),ge("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[F("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"}),F("path",{fill:"currentColor",d:"M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752z"})]))}}),AM=wM,CM=Ze({name:"CircleClose",__name:"circle-close",setup(t){return(e,n)=>(ae(),ge("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[F("path",{fill:"currentColor",d:"m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"}),F("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"})]))}}),vv=CM,RM=Ze({name:"Close",__name:"close",setup(t){return(e,n)=>(ae(),ge("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[F("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"})]))}}),PM=RM,DM=Ze({name:"Hide",__name:"hide",setup(t){return(e,n)=>(ae(),ge("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[F("path",{fill:"currentColor",d:"M876.8 156.8c0-9.6-3.2-16-9.6-22.4s-12.8-9.6-22.4-9.6-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176S0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4 12.8 9.6 22.4 9.6 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4m-646.4 528Q115.2 579.2 76.8 512q43.2-72 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4m140.8-96Q352 555.2 352 512c0-44.8 16-83.2 48-112s67.2-48 112-48c28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6q-43.2 72-153.6 172.8c-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176S1024 528 1024 512s-48.001-73.6-134.401-176"}),F("path",{fill:"currentColor",d:"M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112s-67.2 48-112 48"})]))}}),IM=DM,LM=Ze({name:"Loading",__name:"loading",setup(t){return(e,n)=>(ae(),ge("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[F("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248m452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248M828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0"})]))}}),yv=LM,UM=Ze({name:"View",__name:"view",setup(t){return(e,n)=>(ae(),ge("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[F("path",{fill:"currentColor",d:"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288m0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.19 160.19 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"})]))}}),NM=UM;const xv="__epPropKey",yt=t=>t,OM=t=>ct(t)&&!!t[xv],Vc=(t,e)=>{if(!ct(t)||OM(t))return t;const{values:n,required:i,default:s,type:r,validator:o}=t,l={type:r,required:!!i,validator:n||o?c=>{let u=!1,f=[];if(n&&(f=Array.from(n),dt(t,"default")&&f.push(s),u||(u=f.includes(c))),o&&(u||(u=o(c))),!u&&f.length>0){const d=[...new Set(f)].map(p=>JSON.stringify(p)).join(", ");Ux(`Invalid prop: validation failed${e?` for prop "${e}"`:""}. Expected one of [${d}], got value ${JSON.stringify(c)}.`)}return u}:void 0,[xv]:!0};return dt(t,"default")&&(l.default=s),l},Dn=t=>hc(Object.entries(t).map(([e,n])=>[e,Vc(n,e)])),pc=yt([String,Object,Function]),FM={validating:yv,success:AM,error:vv},No=(t,e)=>{if(t.install=n=>{for(const i of[t,...Object.values(e??{})])n.component(i.name,i)},e)for(const[n,i]of Object.entries(e))t[n]=i;return t},BM=t=>(t.install=fn,t),pr={tab:"Tab",enter:"Enter",space:"Space",esc:"Escape"},So="update:modelValue",kM="change",zM=["","default","small","large"],HM=t=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(t),VM=t=>t,GM=["class","style"],WM=/^on[A-Z]/,$M=(t={})=>{const{excludeListeners:e=!1,excludeKeys:n}=t,i=Se(()=>((n==null?void 0:n.value)||[]).concat(GM)),s=Kt();return Se(s?()=>{var r;return hc(Object.entries((r=s.proxy)==null?void 0:r.$attrs).filter(([o])=>!i.value.includes(o)&&!(e&&WM.test(o))))}:()=>({}))},XM=({from:t,replacement:e,scope:n,version:i,ref:s,type:r="API"},o)=>{We(()=>O(o),a=>{},{immediate:!0})};var jM={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const YM=t=>(e,n)=>qM(e,n,O(t)),qM=(t,e,n)=>gM(n,t,t).replace(/\{(\w+)\}/g,(i,s)=>{var r;return`${(r=e==null?void 0:e[s])!=null?r:`{${s}}`}`}),KM=t=>({lang:Se(()=>O(t).name),locale:Lt(t)?t:ve(t),t:YM(t)}),ZM=Symbol("localeContextKey"),JM=t=>{const e=Rt(ZM,ve());return KM(Se(()=>e.value||jM))},mu="el",QM="is-",Gs=(t,e,n,i,s)=>{let r=`${t}-${e}`;return n&&(r+=`-${n}`),i&&(r+=`__${i}`),s&&(r+=`--${s}`),r},eE=Symbol("namespaceContextKey"),Gd=t=>{const e=Kt()?Rt(eE,ve(mu)):ve(mu);return Se(()=>O(e)||mu)},dn=(t,e)=>{const n=Gd();return{namespace:n,b:(g="")=>Gs(n.value,t,g,"",""),e:g=>g?Gs(n.value,t,"",g,""):"",m:g=>g?Gs(n.value,t,"","",g):"",be:(g,_)=>g&&_?Gs(n.value,t,g,_,""):"",em:(g,_)=>g&&_?Gs(n.value,t,"",g,_):"",bm:(g,_)=>g&&_?Gs(n.value,t,g,"",_):"",bem:(g,_,h)=>g&&_&&h?Gs(n.value,t,g,_,h):"",is:(g,..._)=>{const h=_.length>=1?_[0]:!0;return g&&h?`${QM}${g}`:""},cssVar:g=>{const _={};for(const h in g)g[h]&&(_[`--${n.value}-${h}`]=g[h]);return _},cssVarName:g=>`--${n.value}-${g}`,cssVarBlock:g=>{const _={};for(const h in g)g[h]&&(_[`--${n.value}-${t}-${h}`]=g[h]);return _},cssVarBlockName:g=>`--${n.value}-${t}-${g}`}},tE=Vc({type:yt(Boolean),default:null}),nE=Vc({type:yt(Function)}),iE=t=>{const e=`update:${t}`,n=`onUpdate:${t}`,i=[e],s={[t]:tE,[n]:nE};return{useModelToggle:({indicator:o,toggleReason:a,shouldHideWhenRouteChanges:l,shouldProceed:c,onShow:u,onHide:f})=>{const d=Kt(),{emit:p}=d,m=d.props,g=Se(()=>Ye(m[n])),_=Se(()=>m[t]===null),h=A=>{o.value!==!0&&(o.value=!0,a&&(a.value=A),Ye(u)&&u(A))},x=A=>{o.value!==!1&&(o.value=!1,a&&(a.value=A),Ye(f)&&f(A))},y=A=>{if(m.disabled===!0||Ye(c)&&!c())return;const L=g.value&&kn;L&&p(e,!0),(_.value||!L)&&h(A)},v=A=>{if(m.disabled===!0||!kn)return;const L=g.value&&kn;L&&p(e,!1),(_.value||!L)&&x(A)},P=A=>{_v(A)&&(m.disabled&&A?g.value&&p(e,!1):o.value!==A&&(A?h():x()))},D=()=>{o.value?v():y()};return We(()=>m[t],P),l&&d.appContext.config.globalProperties.$route!==void 0&&We(()=>({...d.proxy.$route}),()=>{l.value&&o.value&&v()}),Ft(()=>{P(m[t])}),{hide:v,show:y,toggle:D,hasUpdateHandler:g}},useModelToggleProps:s,useModelToggleEmits:i}},bv=t=>{const e=Kt();return Se(()=>{var n,i;return(i=(n=e==null?void 0:e.proxy)==null?void 0:n.$props)==null?void 0:i[t]})};var Cn="top",Qn="bottom",ei="right",Rn="left",Wd="auto",Va=[Cn,Qn,ei,Rn],Mo="start",Ca="end",sE="clippingParents",Sv="viewport",$o="popper",rE="reference",Rp=Va.reduce(function(t,e){return t.concat([e+"-"+Mo,e+"-"+Ca])},[]),$d=[].concat(Va,[Wd]).reduce(function(t,e){return t.concat([e,e+"-"+Mo,e+"-"+Ca])},[]),oE="beforeRead",aE="read",lE="afterRead",cE="beforeMain",uE="main",fE="afterMain",dE="beforeWrite",hE="write",pE="afterWrite",mE=[oE,aE,lE,cE,uE,fE,dE,hE,pE];function Di(t){return t?(t.nodeName||"").toLowerCase():null}function Vn(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function xr(t){var e=Vn(t).Element;return t instanceof e||t instanceof Element}function Zn(t){var e=Vn(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Xd(t){if(typeof ShadowRoot>"u")return!1;var e=Vn(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function gE(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var i=e.styles[n]||{},s=e.attributes[n]||{},r=e.elements[n];!Zn(r)||!Di(r)||(Object.assign(r.style,i),Object.keys(s).forEach(function(o){var a=s[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function _E(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(i){var s=e.elements[i],r=e.attributes[i]||{},o=Object.keys(e.styles.hasOwnProperty(i)?e.styles[i]:n[i]),a=o.reduce(function(l,c){return l[c]="",l},{});!Zn(s)||!Di(s)||(Object.assign(s.style,a),Object.keys(r).forEach(function(l){s.removeAttribute(l)}))})}}var Mv={name:"applyStyles",enabled:!0,phase:"write",fn:gE,effect:_E,requires:["computeStyles"]};function Pi(t){return t.split("-")[0]}var mr=Math.max,mc=Math.min,Eo=Math.round;function wf(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Ev(){return!/^((?!chrome|android).)*safari/i.test(wf())}function To(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var i=t.getBoundingClientRect(),s=1,r=1;e&&Zn(t)&&(s=t.offsetWidth>0&&Eo(i.width)/t.offsetWidth||1,r=t.offsetHeight>0&&Eo(i.height)/t.offsetHeight||1);var o=xr(t)?Vn(t):window,a=o.visualViewport,l=!Ev()&&n,c=(i.left+(l&&a?a.offsetLeft:0))/s,u=(i.top+(l&&a?a.offsetTop:0))/r,f=i.width/s,d=i.height/r;return{width:f,height:d,top:u,right:c+f,bottom:u+d,left:c,x:c,y:u}}function jd(t){var e=To(t),n=t.offsetWidth,i=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:i}}function Tv(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Xd(n)){var i=e;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function os(t){return Vn(t).getComputedStyle(t)}function vE(t){return["table","td","th"].indexOf(Di(t))>=0}function Us(t){return((xr(t)?t.ownerDocument:t.document)||window.document).documentElement}function Gc(t){return Di(t)==="html"?t:t.assignedSlot||t.parentNode||(Xd(t)?t.host:null)||Us(t)}function Pp(t){return!Zn(t)||os(t).position==="fixed"?null:t.offsetParent}function yE(t){var e=/firefox/i.test(wf()),n=/Trident/i.test(wf());if(n&&Zn(t)){var i=os(t);if(i.position==="fixed")return null}var s=Gc(t);for(Xd(s)&&(s=s.host);Zn(s)&&["html","body"].indexOf(Di(s))<0;){var r=os(s);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return s;s=s.parentNode}return null}function Ga(t){for(var e=Vn(t),n=Pp(t);n&&vE(n)&&os(n).position==="static";)n=Pp(n);return n&&(Di(n)==="html"||Di(n)==="body"&&os(n).position==="static")?e:n||yE(t)||e}function Yd(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ha(t,e,n){return mr(t,mc(e,n))}function xE(t,e,n){var i=ha(t,e,n);return i>n?n:i}function wv(){return{top:0,right:0,bottom:0,left:0}}function Av(t){return Object.assign({},wv(),t)}function Cv(t,e){return e.reduce(function(n,i){return n[i]=t,n},{})}var bE=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,Av(typeof t!="number"?t:Cv(t,Va))};function SE(t){var e,n=t.state,i=t.name,s=t.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=Pi(n.placement),l=Yd(a),c=[Rn,ei].indexOf(a)>=0,u=c?"height":"width";if(!(!r||!o)){var f=bE(s.padding,n),d=jd(r),p=l==="y"?Cn:Rn,m=l==="y"?Qn:ei,g=n.rects.reference[u]+n.rects.reference[l]-o[l]-n.rects.popper[u],_=o[l]-n.rects.reference[l],h=Ga(r),x=h?l==="y"?h.clientHeight||0:h.clientWidth||0:0,y=g/2-_/2,v=f[p],P=x-d[u]-f[m],D=x/2-d[u]/2+y,A=ha(v,D,P),L=l;n.modifiersData[i]=(e={},e[L]=A,e.centerOffset=A-D,e)}}function ME(t){var e=t.state,n=t.options,i=n.element,s=i===void 0?"[data-popper-arrow]":i;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||Tv(e.elements.popper,s)&&(e.elements.arrow=s))}var EE={name:"arrow",enabled:!0,phase:"main",fn:SE,effect:ME,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function wo(t){return t.split("-")[1]}var TE={top:"auto",right:"auto",bottom:"auto",left:"auto"};function wE(t,e){var n=t.x,i=t.y,s=e.devicePixelRatio||1;return{x:Eo(n*s)/s||0,y:Eo(i*s)/s||0}}function Dp(t){var e,n=t.popper,i=t.popperRect,s=t.placement,r=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,f=t.isFixed,d=o.x,p=d===void 0?0:d,m=o.y,g=m===void 0?0:m,_=typeof u=="function"?u({x:p,y:g}):{x:p,y:g};p=_.x,g=_.y;var h=o.hasOwnProperty("x"),x=o.hasOwnProperty("y"),y=Rn,v=Cn,P=window;if(c){var D=Ga(n),A="clientHeight",L="clientWidth";if(D===Vn(n)&&(D=Us(n),os(D).position!=="static"&&a==="absolute"&&(A="scrollHeight",L="scrollWidth")),D=D,s===Cn||(s===Rn||s===ei)&&r===Ca){v=Qn;var b=f&&D===P&&P.visualViewport?P.visualViewport.height:D[A];g-=b-i.height,g*=l?1:-1}if(s===Rn||(s===Cn||s===Qn)&&r===Ca){y=ei;var S=f&&D===P&&P.visualViewport?P.visualViewport.width:D[L];p-=S-i.width,p*=l?1:-1}}var I=Object.assign({position:a},c&&TE),C=u===!0?wE({x:p,y:g},Vn(n)):{x:p,y:g};if(p=C.x,g=C.y,l){var N;return Object.assign({},I,(N={},N[v]=x?"0":"",N[y]=h?"0":"",N.transform=(P.devicePixelRatio||1)<=1?"translate("+p+"px, "+g+"px)":"translate3d("+p+"px, "+g+"px, 0)",N))}return Object.assign({},I,(e={},e[v]=x?g+"px":"",e[y]=h?p+"px":"",e.transform="",e))}function AE(t){var e=t.state,n=t.options,i=n.gpuAcceleration,s=i===void 0?!0:i,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:Pi(e.placement),variation:wo(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Dp(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Dp(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Rv={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:AE,data:{}},Qa={passive:!0};function CE(t){var e=t.state,n=t.instance,i=t.options,s=i.scroll,r=s===void 0?!0:s,o=i.resize,a=o===void 0?!0:o,l=Vn(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&c.forEach(function(u){u.addEventListener("scroll",n.update,Qa)}),a&&l.addEventListener("resize",n.update,Qa),function(){r&&c.forEach(function(u){u.removeEventListener("scroll",n.update,Qa)}),a&&l.removeEventListener("resize",n.update,Qa)}}var Pv={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:CE,data:{}},RE={left:"right",right:"left",bottom:"top",top:"bottom"};function Wl(t){return t.replace(/left|right|bottom|top/g,function(e){return RE[e]})}var PE={start:"end",end:"start"};function Ip(t){return t.replace(/start|end/g,function(e){return PE[e]})}function qd(t){var e=Vn(t),n=e.pageXOffset,i=e.pageYOffset;return{scrollLeft:n,scrollTop:i}}function Kd(t){return To(Us(t)).left+qd(t).scrollLeft}function DE(t,e){var n=Vn(t),i=Us(t),s=n.visualViewport,r=i.clientWidth,o=i.clientHeight,a=0,l=0;if(s){r=s.width,o=s.height;var c=Ev();(c||!c&&e==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:r,height:o,x:a+Kd(t),y:l}}function IE(t){var e,n=Us(t),i=qd(t),s=(e=t.ownerDocument)==null?void 0:e.body,r=mr(n.scrollWidth,n.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=mr(n.scrollHeight,n.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-i.scrollLeft+Kd(t),l=-i.scrollTop;return os(s||n).direction==="rtl"&&(a+=mr(n.clientWidth,s?s.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function Zd(t){var e=os(t),n=e.overflow,i=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+s+i)}function Dv(t){return["html","body","#document"].indexOf(Di(t))>=0?t.ownerDocument.body:Zn(t)&&Zd(t)?t:Dv(Gc(t))}function pa(t,e){var n;e===void 0&&(e=[]);var i=Dv(t),s=i===((n=t.ownerDocument)==null?void 0:n.body),r=Vn(i),o=s?[r].concat(r.visualViewport||[],Zd(i)?i:[]):i,a=e.concat(o);return s?a:a.concat(pa(Gc(o)))}function Af(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function LE(t,e){var n=To(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function Lp(t,e,n){return e===Sv?Af(DE(t,n)):xr(e)?LE(e,n):Af(IE(Us(t)))}function UE(t){var e=pa(Gc(t)),n=["absolute","fixed"].indexOf(os(t).position)>=0,i=n&&Zn(t)?Ga(t):t;return xr(i)?e.filter(function(s){return xr(s)&&Tv(s,i)&&Di(s)!=="body"}):[]}function NE(t,e,n,i){var s=e==="clippingParents"?UE(t):[].concat(e),r=[].concat(s,[n]),o=r[0],a=r.reduce(function(l,c){var u=Lp(t,c,i);return l.top=mr(u.top,l.top),l.right=mc(u.right,l.right),l.bottom=mc(u.bottom,l.bottom),l.left=mr(u.left,l.left),l},Lp(t,o,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Iv(t){var e=t.reference,n=t.element,i=t.placement,s=i?Pi(i):null,r=i?wo(i):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(s){case Cn:l={x:o,y:e.y-n.height};break;case Qn:l={x:o,y:e.y+e.height};break;case ei:l={x:e.x+e.width,y:a};break;case Rn:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var c=s?Yd(s):null;if(c!=null){var u=c==="y"?"height":"width";switch(r){case Mo:l[c]=l[c]-(e[u]/2-n[u]/2);break;case Ca:l[c]=l[c]+(e[u]/2-n[u]/2);break}}return l}function Ra(t,e){e===void 0&&(e={});var n=e,i=n.placement,s=i===void 0?t.placement:i,r=n.strategy,o=r===void 0?t.strategy:r,a=n.boundary,l=a===void 0?sE:a,c=n.rootBoundary,u=c===void 0?Sv:c,f=n.elementContext,d=f===void 0?$o:f,p=n.altBoundary,m=p===void 0?!1:p,g=n.padding,_=g===void 0?0:g,h=Av(typeof _!="number"?_:Cv(_,Va)),x=d===$o?rE:$o,y=t.rects.popper,v=t.elements[m?x:d],P=NE(xr(v)?v:v.contextElement||Us(t.elements.popper),l,u,o),D=To(t.elements.reference),A=Iv({reference:D,element:y,placement:s}),L=Af(Object.assign({},y,A)),b=d===$o?L:D,S={top:P.top-b.top+h.top,bottom:b.bottom-P.bottom+h.bottom,left:P.left-b.left+h.left,right:b.right-P.right+h.right},I=t.modifiersData.offset;if(d===$o&&I){var C=I[s];Object.keys(S).forEach(function(N){var K=[ei,Qn].indexOf(N)>=0?1:-1,Q=[Cn,Qn].indexOf(N)>=0?"y":"x";S[N]+=C[Q]*K})}return S}function OE(t,e){e===void 0&&(e={});var n=e,i=n.placement,s=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?$d:l,u=wo(i),f=u?a?Rp:Rp.filter(function(m){return wo(m)===u}):Va,d=f.filter(function(m){return c.indexOf(m)>=0});d.length===0&&(d=f);var p=d.reduce(function(m,g){return m[g]=Ra(t,{placement:g,boundary:s,rootBoundary:r,padding:o})[Pi(g)],m},{});return Object.keys(p).sort(function(m,g){return p[m]-p[g]})}function FE(t){if(Pi(t)===Wd)return[];var e=Wl(t);return[Ip(t),e,Ip(e)]}function BE(t){var e=t.state,n=t.options,i=t.name;if(!e.modifiersData[i]._skip){for(var s=n.mainAxis,r=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,c=n.padding,u=n.boundary,f=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,m=p===void 0?!0:p,g=n.allowedAutoPlacements,_=e.options.placement,h=Pi(_),x=h===_,y=l||(x||!m?[Wl(_)]:FE(_)),v=[_].concat(y).reduce(function(ce,_e){return ce.concat(Pi(_e)===Wd?OE(e,{placement:_e,boundary:u,rootBoundary:f,padding:c,flipVariations:m,allowedAutoPlacements:g}):_e)},[]),P=e.rects.reference,D=e.rects.popper,A=new Map,L=!0,b=v[0],S=0;S<v.length;S++){var I=v[S],C=Pi(I),N=wo(I)===Mo,K=[Cn,Qn].indexOf(C)>=0,Q=K?"width":"height",j=Ra(e,{placement:I,boundary:u,rootBoundary:f,altBoundary:d,padding:c}),V=K?N?ei:Rn:N?Qn:Cn;P[Q]>D[Q]&&(V=Wl(V));var Y=Wl(V),me=[];if(r&&me.push(j[C]<=0),a&&me.push(j[V]<=0,j[Y]<=0),me.every(function(ce){return ce})){b=I,L=!1;break}A.set(I,me)}if(L)for(var we=m?3:1,Le=function(ce){var _e=v.find(function(Re){var Te=A.get(Re);if(Te)return Te.slice(0,ce).every(function(Ue){return Ue})});if(_e)return b=_e,"break"},Fe=we;Fe>0;Fe--){var Qe=Le(Fe);if(Qe==="break")break}e.placement!==b&&(e.modifiersData[i]._skip=!0,e.placement=b,e.reset=!0)}}var kE={name:"flip",enabled:!0,phase:"main",fn:BE,requiresIfExists:["offset"],data:{_skip:!1}};function Up(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Np(t){return[Cn,ei,Qn,Rn].some(function(e){return t[e]>=0})}function zE(t){var e=t.state,n=t.name,i=e.rects.reference,s=e.rects.popper,r=e.modifiersData.preventOverflow,o=Ra(e,{elementContext:"reference"}),a=Ra(e,{altBoundary:!0}),l=Up(o,i),c=Up(a,s,r),u=Np(l),f=Np(c);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}var HE={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:zE};function VE(t,e,n){var i=Pi(t),s=[Rn,Cn].indexOf(i)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*s,[Rn,ei].indexOf(i)>=0?{x:a,y:o}:{x:o,y:a}}function GE(t){var e=t.state,n=t.options,i=t.name,s=n.offset,r=s===void 0?[0,0]:s,o=$d.reduce(function(u,f){return u[f]=VE(f,e.rects,r),u},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[i]=o}var WE={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:GE};function $E(t){var e=t.state,n=t.name;e.modifiersData[n]=Iv({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}var Lv={name:"popperOffsets",enabled:!0,phase:"read",fn:$E,data:{}};function XE(t){return t==="x"?"y":"x"}function jE(t){var e=t.state,n=t.options,i=t.name,s=n.mainAxis,r=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,f=n.padding,d=n.tether,p=d===void 0?!0:d,m=n.tetherOffset,g=m===void 0?0:m,_=Ra(e,{boundary:l,rootBoundary:c,padding:f,altBoundary:u}),h=Pi(e.placement),x=wo(e.placement),y=!x,v=Yd(h),P=XE(v),D=e.modifiersData.popperOffsets,A=e.rects.reference,L=e.rects.popper,b=typeof g=="function"?g(Object.assign({},e.rects,{placement:e.placement})):g,S=typeof b=="number"?{mainAxis:b,altAxis:b}:Object.assign({mainAxis:0,altAxis:0},b),I=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,C={x:0,y:0};if(D){if(r){var N,K=v==="y"?Cn:Rn,Q=v==="y"?Qn:ei,j=v==="y"?"height":"width",V=D[v],Y=V+_[K],me=V-_[Q],we=p?-L[j]/2:0,Le=x===Mo?A[j]:L[j],Fe=x===Mo?-L[j]:-A[j],Qe=e.elements.arrow,ce=p&&Qe?jd(Qe):{width:0,height:0},_e=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:wv(),Re=_e[K],Te=_e[Q],Ue=ha(0,A[j],ce[j]),it=y?A[j]/2-we-Ue-Re-S.mainAxis:Le-Ue-Re-S.mainAxis,ye=y?-A[j]/2+we+Ue+Te+S.mainAxis:Fe+Ue+Te+S.mainAxis,He=e.elements.arrow&&Ga(e.elements.arrow),U=He?v==="y"?He.clientTop||0:He.clientLeft||0:0,z=(N=I==null?void 0:I[v])!=null?N:0,w=V+it-z-U,he=V+ye-z,re=ha(p?mc(Y,w):Y,V,p?mr(me,he):me);D[v]=re,C[v]=re-V}if(a){var se,le=v==="x"?Cn:Rn,fe=v==="x"?Qn:ei,te=D[P],T=P==="y"?"height":"width",M=te+_[le],H=te-_[fe],J=[Cn,Rn].indexOf(h)!==-1,B=(se=I==null?void 0:I[P])!=null?se:0,E=J?M:te-A[T]-L[T]-B+S.altAxis,k=J?te+A[T]+L[T]-B-S.altAxis:H,G=p&&J?xE(E,te,k):ha(p?E:M,te,p?k:H);D[P]=G,C[P]=G-te}e.modifiersData[i]=C}}var YE={name:"preventOverflow",enabled:!0,phase:"main",fn:jE,requiresIfExists:["offset"]};function qE(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function KE(t){return t===Vn(t)||!Zn(t)?qd(t):qE(t)}function ZE(t){var e=t.getBoundingClientRect(),n=Eo(e.width)/t.offsetWidth||1,i=Eo(e.height)/t.offsetHeight||1;return n!==1||i!==1}function JE(t,e,n){n===void 0&&(n=!1);var i=Zn(e),s=Zn(e)&&ZE(e),r=Us(e),o=To(t,s,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!n)&&((Di(e)!=="body"||Zd(r))&&(a=KE(e)),Zn(e)?(l=To(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):r&&(l.x=Kd(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function QE(t){var e=new Map,n=new Set,i=[];t.forEach(function(r){e.set(r.name,r)});function s(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&s(l)}}),i.push(r)}return t.forEach(function(r){n.has(r.name)||s(r)}),i}function e1(t){var e=QE(t);return mE.reduce(function(n,i){return n.concat(e.filter(function(s){return s.phase===i}))},[])}function t1(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function n1(t){var e=t.reduce(function(n,i){var s=n[i.name];return n[i.name]=s?Object.assign({},s,i,{options:Object.assign({},s.options,i.options),data:Object.assign({},s.data,i.data)}):i,n},{});return Object.keys(e).map(function(n){return e[n]})}var Op={placement:"bottom",modifiers:[],strategy:"absolute"};function Fp(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function Jd(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,i=n===void 0?[]:n,s=e.defaultOptions,r=s===void 0?Op:s;return function(o,a,l){l===void 0&&(l=r);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Op,r),modifiersData:{},elements:{reference:o,popper:a},attributes:{},styles:{}},u=[],f=!1,d={state:c,setOptions:function(g){var _=typeof g=="function"?g(c.options):g;m(),c.options=Object.assign({},r,c.options,_),c.scrollParents={reference:xr(o)?pa(o):o.contextElement?pa(o.contextElement):[],popper:pa(a)};var h=e1(n1([].concat(i,c.options.modifiers)));return c.orderedModifiers=h.filter(function(x){return x.enabled}),p(),d.update()},forceUpdate:function(){if(!f){var g=c.elements,_=g.reference,h=g.popper;if(Fp(_,h)){c.rects={reference:JE(_,Ga(h),c.options.strategy==="fixed"),popper:jd(h)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(L){return c.modifiersData[L.name]=Object.assign({},L.data)});for(var x=0;x<c.orderedModifiers.length;x++){if(c.reset===!0){c.reset=!1,x=-1;continue}var y=c.orderedModifiers[x],v=y.fn,P=y.options,D=P===void 0?{}:P,A=y.name;typeof v=="function"&&(c=v({state:c,options:D,name:A,instance:d})||c)}}}},update:t1(function(){return new Promise(function(g){d.forceUpdate(),g(c)})}),destroy:function(){m(),f=!0}};if(!Fp(o,a))return d;d.setOptions(l).then(function(g){!f&&l.onFirstUpdate&&l.onFirstUpdate(g)});function p(){c.orderedModifiers.forEach(function(g){var _=g.name,h=g.options,x=h===void 0?{}:h,y=g.effect;if(typeof y=="function"){var v=y({state:c,name:_,instance:d,options:x}),P=function(){};u.push(v||P)}})}function m(){u.forEach(function(g){return g()}),u=[]}return d}}Jd();var i1=[Pv,Lv,Rv,Mv];Jd({defaultModifiers:i1});var s1=[Pv,Lv,Rv,Mv,WE,kE,YE,EE,HE],r1=Jd({defaultModifiers:s1});const o1=(t,e,n={})=>{const i={name:"updateState",enabled:!0,phase:"write",fn:({state:l})=>{const c=a1(l);Object.assign(o.value,c)},requires:["computeStyles"]},s=Se(()=>{const{onFirstUpdate:l,placement:c,strategy:u,modifiers:f}=O(n);return{onFirstUpdate:l,placement:c||"bottom",strategy:u||"absolute",modifiers:[...f||[],i,{name:"applyStyles",enabled:!1}]}}),r=fr(),o=ve({styles:{popper:{position:O(s).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=()=>{r.value&&(r.value.destroy(),r.value=void 0)};return We(s,l=>{const c=O(r);c&&c.setOptions(l)},{deep:!0}),We([t,e],([l,c])=>{a(),!(!l||!c)&&(r.value=r1(l,c,O(s)))}),Li(()=>{a()}),{state:Se(()=>{var l;return{...((l=O(r))==null?void 0:l.state)||{}}}),styles:Se(()=>O(o).styles),attributes:Se(()=>O(o).attributes),update:()=>{var l;return(l=O(r))==null?void 0:l.update()},forceUpdate:()=>{var l;return(l=O(r))==null?void 0:l.forceUpdate()},instanceRef:Se(()=>O(r))}};function a1(t){const e=Object.keys(t.elements),n=hc(e.map(s=>[s,t.styles[s]||{}])),i=hc(e.map(s=>[s,t.attributes[s]]));return{styles:n,attributes:i}}function Bp(){let t;const e=(i,s)=>{n(),t=window.setTimeout(i,s)},n=()=>window.clearTimeout(t);return Fd(()=>n()),{registerTimeout:e,cancelTimeout:n}}const kp={prefix:Math.floor(Math.random()*1e4),current:0},l1=Symbol("elIdInjection"),Uv=()=>Kt()?Rt(l1,kp):kp,Nv=t=>{const e=Uv(),n=Gd();return Se(()=>O(t)||`${n.value}-id-${e.prefix}-${e.current++}`)};let io=[];const zp=t=>{const e=t;e.key===pr.esc&&io.forEach(n=>n(e))},c1=t=>{Ft(()=>{io.length===0&&document.addEventListener("keydown",zp),kn&&io.push(t)}),Li(()=>{io=io.filter(e=>e!==t),io.length===0&&kn&&document.removeEventListener("keydown",zp)})};let Hp;const Ov=()=>{const t=Gd(),e=Uv(),n=Se(()=>`${t.value}-popper-container-${e.prefix}`),i=Se(()=>`#${n.value}`);return{id:n,selector:i}},u1=t=>{const e=document.createElement("div");return e.id=t,document.body.appendChild(e),e},f1=()=>{const{id:t,selector:e}=Ov();return w_(()=>{kn&&!Hp&&!document.body.querySelector(e.value)&&(Hp=u1(t.value))}),{id:t,selector:e}},d1=Dn({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),h1=({showAfter:t,hideAfter:e,autoClose:n,open:i,close:s})=>{const{registerTimeout:r}=Bp(),{registerTimeout:o,cancelTimeout:a}=Bp();return{onOpen:u=>{r(()=>{i(u);const f=O(n);yr(f)&&f>0&&o(()=>{s(u)},f)},O(t))},onClose:u=>{a(),r(()=>{s(u)},O(e))}}},Fv=Symbol("elForwardRef"),p1=t=>{ss(Fv,{setForwardRef:n=>{t.value=n}})},m1=t=>({mounted(e){t(e)},updated(e){t(e)},unmounted(){t(null)}}),Vp=ve(0),g1=2e3,_1=Symbol("zIndexContextKey"),v1=t=>{const e=Kt()?Rt(_1,void 0):void 0,n=Se(()=>{const r=O(e);return yr(r)?r:g1}),i=Se(()=>n.value+Vp.value);return{initialZIndex:n,currentZIndex:i,nextZIndex:()=>(Vp.value++,i.value)}};function y1(t){const e=ve();function n(){if(t.value==null)return;const{selectionStart:s,selectionEnd:r,value:o}=t.value;if(s==null||r==null)return;const a=o.slice(0,Math.max(0,s)),l=o.slice(Math.max(0,r));e.value={selectionStart:s,selectionEnd:r,value:o,beforeTxt:a,afterTxt:l}}function i(){if(t.value==null||e.value==null)return;const{value:s}=t.value,{beforeTxt:r,afterTxt:o,selectionStart:a}=e.value;if(r==null||o==null||a==null)return;let l=s.length;if(s.endsWith(o))l=s.length-o.length;else if(s.startsWith(r))l=r.length;else{const c=r[a-1],u=s.indexOf(c,a-1);u!==-1&&(l=u+1)}t.value.setSelectionRange(l,l)}return[n,i]}const Qd=Vc({type:String,values:zM,required:!1}),x1=Symbol("size"),b1=()=>{const t=Rt(x1,{});return Se(()=>O(t.size)||"")};function Bv(t,{afterFocus:e,beforeBlur:n,afterBlur:i}={}){const s=Kt(),{emit:r}=s,o=fr(),a=ve(!1),l=f=>{a.value||(a.value=!0,r("focus",f),e==null||e())},c=f=>{var d;Ye(n)&&n(f)||f.relatedTarget&&((d=o.value)!=null&&d.contains(f.relatedTarget))||(a.value=!1,r("blur",f),i==null||i())},u=()=>{var f;(f=t.value)==null||f.focus()};return We(o,f=>{f&&f.setAttribute("tabindex","-1")}),Gl(o,"click",u),{wrapperRef:o,isFocused:a,handleFocus:l,handleBlur:c}}const S1=Symbol(),Gp=ve();function M1(t,e=void 0){const n=Kt()?Rt(S1,Gp):Gp;return Se(()=>{var i,s;return(s=(i=n.value)==null?void 0:i[t])!=null?s:e})}var on=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n};const E1=Dn({size:{type:yt([Number,String])},color:{type:String}}),T1=Ze({name:"ElIcon",inheritAttrs:!1}),w1=Ze({...T1,props:E1,setup(t){const e=t,n=dn("icon"),i=Se(()=>{const{size:s,color:r}=e;return!s&&!r?{}:{fontSize:SM(s)?void 0:Tf(s),"--color":r}});return(s,r)=>(ae(),ge("i",Ji({class:O(n).b(),style:O(i)},s.$attrs),[sn(s.$slots,"default")],16))}});var A1=on(w1,[["__file","icon.vue"]]);const ji=No(A1),eh=Symbol("formContextKey"),gc=Symbol("formItemContextKey"),th=(t,e={})=>{const n=ve(void 0),i=e.prop?n:bv("size"),s=e.global?n:b1(),r=e.form?{size:void 0}:Rt(eh,void 0),o=e.formItem?{size:void 0}:Rt(gc,void 0);return Se(()=>i.value||O(t)||(o==null?void 0:o.size)||(r==null?void 0:r.size)||s.value||"")},Wc=t=>{const e=bv("disabled"),n=Rt(eh,void 0);return Se(()=>e.value||O(t)||(n==null?void 0:n.disabled)||!1)},nh=()=>{const t=Rt(eh,void 0),e=Rt(gc,void 0);return{form:t,formItem:e}},kv=(t,{formItemContext:e,disableIdGeneration:n,disableIdManagement:i})=>{n||(n=ve(!1)),i||(i=ve(!1));const s=ve();let r;const o=Se(()=>{var a;return!!(!t.label&&e&&e.inputIds&&((a=e.inputIds)==null?void 0:a.length)<=1)});return Ft(()=>{r=We([Yi(t,"id"),n],([a,l])=>{const c=a??(l?void 0:Nv().value);c!==s.value&&(e!=null&&e.removeInputId&&(s.value&&e.removeInputId(s.value),!(i!=null&&i.value)&&!l&&c&&e.addInputId(c)),s.value=c)},{immediate:!0})}),za(()=>{r&&r(),e!=null&&e.removeInputId&&s.value&&e.removeInputId(s.value)}),{isLabeledByFormItem:o,inputId:s}};let ri;const C1=`
  height:0 !important;
  visibility:hidden !important;
  ${Wb()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,R1=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function P1(t){const e=window.getComputedStyle(t),n=e.getPropertyValue("box-sizing"),i=Number.parseFloat(e.getPropertyValue("padding-bottom"))+Number.parseFloat(e.getPropertyValue("padding-top")),s=Number.parseFloat(e.getPropertyValue("border-bottom-width"))+Number.parseFloat(e.getPropertyValue("border-top-width"));return{contextStyle:R1.map(o=>`${o}:${e.getPropertyValue(o)}`).join(";"),paddingSize:i,borderSize:s,boxSizing:n}}function Wp(t,e=1,n){var i;ri||(ri=document.createElement("textarea"),document.body.appendChild(ri));const{paddingSize:s,borderSize:r,boxSizing:o,contextStyle:a}=P1(t);ri.setAttribute("style",`${a};${C1}`),ri.value=t.value||t.placeholder||"";let l=ri.scrollHeight;const c={};o==="border-box"?l=l+r:o==="content-box"&&(l=l-s),ri.value="";const u=ri.scrollHeight-s;if(yr(e)){let f=u*e;o==="border-box"&&(f=f+s+r),l=Math.max(f,l),c.minHeight=`${f}px`}if(yr(n)){let f=u*n;o==="border-box"&&(f=f+s+r),l=Math.min(f,l)}return c.height=`${l}px`,(i=ri.parentNode)==null||i.removeChild(ri),ri=void 0,c}const D1=Dn({id:{type:String,default:void 0},size:Qd,disabled:Boolean,modelValue:{type:yt([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:yt([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:pc},prefixIcon:{type:pc},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:yt([Object,Array,String]),default:()=>VM({})},autofocus:{type:Boolean,default:!1}}),I1={[So]:t=>ht(t),input:t=>ht(t),change:t=>ht(t),focus:t=>t instanceof FocusEvent,blur:t=>t instanceof FocusEvent,clear:()=>!0,mouseleave:t=>t instanceof MouseEvent,mouseenter:t=>t instanceof MouseEvent,keydown:t=>t instanceof Event,compositionstart:t=>t instanceof CompositionEvent,compositionupdate:t=>t instanceof CompositionEvent,compositionend:t=>t instanceof CompositionEvent},L1=["role"],U1=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],N1=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],O1=Ze({name:"ElInput",inheritAttrs:!1}),F1=Ze({...O1,props:D1,emits:I1,setup(t,{expose:e,emit:n}){const i=t,s=qy(),r=P_(),o=Se(()=>{const B={};return i.containerRole==="combobox"&&(B["aria-haspopup"]=s["aria-haspopup"],B["aria-owns"]=s["aria-owns"],B["aria-expanded"]=s["aria-expanded"]),B}),a=Se(()=>[i.type==="textarea"?_.b():g.b(),g.m(p.value),g.is("disabled",m.value),g.is("exceed",ce.value),{[g.b("group")]:r.prepend||r.append,[g.bm("group","append")]:r.append,[g.bm("group","prepend")]:r.prepend,[g.m("prefix")]:r.prefix||i.prefixIcon,[g.m("suffix")]:r.suffix||i.suffixIcon||i.clearable||i.showPassword,[g.bm("suffix","password-clear")]:we.value&&Le.value},s.class]),l=Se(()=>[g.e("wrapper"),g.is("focus",S.value)]),c=$M({excludeKeys:Se(()=>Object.keys(o.value))}),{form:u,formItem:f}=nh(),{inputId:d}=kv(i,{formItemContext:f}),p=th(),m=Wc(),g=dn("input"),_=dn("textarea"),h=fr(),x=fr(),y=ve(!1),v=ve(!1),P=ve(!1),D=ve(),A=fr(i.inputStyle),L=Se(()=>h.value||x.value),{wrapperRef:b,isFocused:S,handleFocus:I,handleBlur:C}=Bv(L,{afterBlur(){var B;i.validateEvent&&((B=f==null?void 0:f.validate)==null||B.call(f,"blur").catch(E=>void 0))}}),N=Se(()=>{var B;return(B=u==null?void 0:u.statusIcon)!=null?B:!1}),K=Se(()=>(f==null?void 0:f.validateState)||""),Q=Se(()=>K.value&&FM[K.value]),j=Se(()=>P.value?NM:IM),V=Se(()=>[s.style]),Y=Se(()=>[i.inputStyle,A.value,{resize:i.resize}]),me=Se(()=>hr(i.modelValue)?"":String(i.modelValue)),we=Se(()=>i.clearable&&!m.value&&!i.readonly&&!!me.value&&(S.value||y.value)),Le=Se(()=>i.showPassword&&!m.value&&!i.readonly&&!!me.value&&(!!me.value||S.value)),Fe=Se(()=>i.showWordLimit&&!!i.maxlength&&(i.type==="text"||i.type==="textarea")&&!m.value&&!i.readonly&&!i.showPassword),Qe=Se(()=>me.value.length),ce=Se(()=>!!Fe.value&&Qe.value>Number(i.maxlength)),_e=Se(()=>!!r.suffix||!!i.suffixIcon||we.value||i.showPassword||Fe.value||!!K.value&&N.value),[Re,Te]=y1(h);Bb(x,B=>{if(ye(),!Fe.value||i.resize!=="both")return;const E=B[0],{width:k}=E.contentRect;D.value={right:`calc(100% - ${k+15+6}px)`}});const Ue=()=>{const{type:B,autosize:E}=i;if(!(!kn||B!=="textarea"||!x.value))if(E){const k=ct(E)?E.minRows:void 0,G=ct(E)?E.maxRows:void 0,W=Wp(x.value,k,G);A.value={overflowY:"hidden",...W},qt(()=>{x.value.offsetHeight,A.value=W})}else A.value={minHeight:Wp(x.value).minHeight}},ye=(B=>{let E=!1;return()=>{var k;if(E||!i.autosize)return;((k=x.value)==null?void 0:k.offsetParent)===null||(B(),E=!0)}})(Ue),He=()=>{const B=L.value,E=i.formatter?i.formatter(me.value):me.value;!B||B.value===E||(B.value=E)},U=async B=>{Re();let{value:E}=B.target;if(i.formatter&&(E=i.parser?i.parser(E):E),!v.value){if(E===me.value){He();return}n(So,E),n("input",E),await qt(),He(),Te()}},z=B=>{n("change",B.target.value)},w=B=>{n("compositionstart",B),v.value=!0},he=B=>{var E;n("compositionupdate",B);const k=(E=B.target)==null?void 0:E.value,G=k[k.length-1]||"";v.value=!HM(G)},re=B=>{n("compositionend",B),v.value&&(v.value=!1,U(B))},se=()=>{P.value=!P.value,le()},le=async()=>{var B;await qt(),(B=L.value)==null||B.focus()},fe=()=>{var B;return(B=L.value)==null?void 0:B.blur()},te=B=>{y.value=!1,n("mouseleave",B)},T=B=>{y.value=!0,n("mouseenter",B)},M=B=>{n("keydown",B)},H=()=>{var B;(B=L.value)==null||B.select()},J=()=>{n(So,""),n("change",""),n("clear"),n("input","")};return We(()=>i.modelValue,()=>{var B;qt(()=>Ue()),i.validateEvent&&((B=f==null?void 0:f.validate)==null||B.call(f,"change").catch(E=>void 0))}),We(me,()=>He()),We(()=>i.type,async()=>{await qt(),He(),Ue()}),Ft(()=>{!i.formatter&&i.parser,He(),qt(Ue)}),e({input:h,textarea:x,ref:L,textareaStyle:Y,autosize:Yi(i,"autosize"),focus:le,blur:fe,select:H,clear:J,resizeTextarea:Ue}),(B,E)=>Dt((ae(),ge("div",Ji(O(o),{class:O(a),style:O(V),role:B.containerRole,onMouseenter:T,onMouseleave:te}),[nt(" input "),B.type!=="textarea"?(ae(),ge(rt,{key:0},[nt(" prepend slot "),B.$slots.prepend?(ae(),ge("div",{key:0,class:De(O(g).be("group","prepend"))},[sn(B.$slots,"prepend")],2)):nt("v-if",!0),F("div",{ref_key:"wrapperRef",ref:b,class:De(O(l))},[nt(" prefix slot "),B.$slots.prefix||B.prefixIcon?(ae(),ge("span",{key:0,class:De(O(g).e("prefix"))},[F("span",{class:De(O(g).e("prefix-inner"))},[sn(B.$slots,"prefix"),B.prefixIcon?(ae(),Et(O(ji),{key:0,class:De(O(g).e("icon"))},{default:It(()=>[(ae(),Et(rr(B.prefixIcon)))]),_:1},8,["class"])):nt("v-if",!0)],2)],2)):nt("v-if",!0),F("input",Ji({id:O(d),ref_key:"input",ref:h,class:O(g).e("inner")},O(c),{minlength:B.minlength,maxlength:B.maxlength,type:B.showPassword?P.value?"text":"password":B.type,disabled:O(m),readonly:B.readonly,autocomplete:B.autocomplete,tabindex:B.tabindex,"aria-label":B.label,placeholder:B.placeholder,style:B.inputStyle,form:B.form,autofocus:B.autofocus,onCompositionstart:w,onCompositionupdate:he,onCompositionend:re,onInput:U,onFocus:E[0]||(E[0]=(...k)=>O(I)&&O(I)(...k)),onBlur:E[1]||(E[1]=(...k)=>O(C)&&O(C)(...k)),onChange:z,onKeydown:M}),null,16,U1),nt(" suffix slot "),O(_e)?(ae(),ge("span",{key:1,class:De(O(g).e("suffix"))},[F("span",{class:De(O(g).e("suffix-inner"))},[!O(we)||!O(Le)||!O(Fe)?(ae(),ge(rt,{key:0},[sn(B.$slots,"suffix"),B.suffixIcon?(ae(),Et(O(ji),{key:0,class:De(O(g).e("icon"))},{default:It(()=>[(ae(),Et(rr(B.suffixIcon)))]),_:1},8,["class"])):nt("v-if",!0)],64)):nt("v-if",!0),O(we)?(ae(),Et(O(ji),{key:1,class:De([O(g).e("icon"),O(g).e("clear")]),onMousedown:Ea(O(fn),["prevent"]),onClick:J},{default:It(()=>[Ke(O(vv))]),_:1},8,["class","onMousedown"])):nt("v-if",!0),O(Le)?(ae(),Et(O(ji),{key:2,class:De([O(g).e("icon"),O(g).e("password")]),onClick:se},{default:It(()=>[(ae(),Et(rr(O(j))))]),_:1},8,["class"])):nt("v-if",!0),O(Fe)?(ae(),ge("span",{key:3,class:De(O(g).e("count"))},[F("span",{class:De(O(g).e("count-inner"))},Xe(O(Qe))+" / "+Xe(B.maxlength),3)],2)):nt("v-if",!0),O(K)&&O(Q)&&O(N)?(ae(),Et(O(ji),{key:4,class:De([O(g).e("icon"),O(g).e("validateIcon"),O(g).is("loading",O(K)==="validating")])},{default:It(()=>[(ae(),Et(rr(O(Q))))]),_:1},8,["class"])):nt("v-if",!0)],2)],2)):nt("v-if",!0)],2),nt(" append slot "),B.$slots.append?(ae(),ge("div",{key:1,class:De(O(g).be("group","append"))},[sn(B.$slots,"append")],2)):nt("v-if",!0)],64)):(ae(),ge(rt,{key:1},[nt(" textarea "),F("textarea",Ji({id:O(d),ref_key:"textarea",ref:x,class:O(_).e("inner")},O(c),{tabindex:B.tabindex,disabled:O(m),readonly:B.readonly,autocomplete:B.autocomplete,style:O(Y),"aria-label":B.label,placeholder:B.placeholder,form:B.form,autofocus:B.autofocus,onCompositionstart:w,onCompositionupdate:he,onCompositionend:re,onInput:U,onFocus:E[2]||(E[2]=(...k)=>O(I)&&O(I)(...k)),onBlur:E[3]||(E[3]=(...k)=>O(C)&&O(C)(...k)),onChange:z,onKeydown:M}),null,16,N1),O(Fe)?(ae(),ge("span",{key:0,style:Hn(D.value),class:De(O(g).e("count"))},Xe(O(Qe))+" / "+Xe(B.maxlength),7)):nt("v-if",!0)],64))],16,L1)),[[jn,B.type!=="hidden"]])}});var B1=on(F1,[["__file","input.vue"]]);const k1=No(B1),ih=Symbol("popper"),zv=Symbol("popperContent"),z1=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],Hv=Dn({role:{type:String,values:z1,default:"tooltip"}}),H1=Ze({name:"ElPopper",inheritAttrs:!1}),V1=Ze({...H1,props:Hv,setup(t,{expose:e}){const n=t,i=ve(),s=ve(),r=ve(),o=ve(),a=Se(()=>n.role),l={triggerRef:i,popperInstanceRef:s,contentRef:r,referenceRef:o,role:a};return e(l),ss(ih,l),(c,u)=>sn(c.$slots,"default")}});var G1=on(V1,[["__file","popper.vue"]]);const Vv=Dn({arrowOffset:{type:Number,default:5}}),W1=Ze({name:"ElPopperArrow",inheritAttrs:!1}),$1=Ze({...W1,props:Vv,setup(t,{expose:e}){const n=t,i=dn("popper"),{arrowOffset:s,arrowRef:r,arrowStyle:o}=Rt(zv,void 0);return We(()=>n.arrowOffset,a=>{s.value=a}),Li(()=>{r.value=void 0}),e({arrowRef:r}),(a,l)=>(ae(),ge("span",{ref_key:"arrowRef",ref:r,class:De(O(i).e("arrow")),style:Hn(O(o)),"data-popper-arrow":""},null,6))}});var X1=on($1,[["__file","arrow.vue"]]);const j1="ElOnlyChild",Y1=Ze({name:j1,setup(t,{slots:e,attrs:n}){var i;const s=Rt(Fv),r=m1((i=s==null?void 0:s.setForwardRef)!=null?i:fn);return()=>{var o;const a=(o=e.default)==null?void 0:o.call(e,n);if(!a||a.length>1)return null;const l=Gv(a);return l?Dt(rs(l,n),[[r]]):null}}});function Gv(t){if(!t)return null;const e=t;for(const n of e){if(ct(n))switch(n.type){case tn:continue;case Io:case"svg":return $p(n);case rt:return Gv(n.children);default:return n}return $p(n)}return null}function $p(t){const e=dn("only-child");return Ke("span",{class:e.e("content")},[t])}const Wv=Dn({virtualRef:{type:yt(Object)},virtualTriggering:Boolean,onMouseenter:{type:yt(Function)},onMouseleave:{type:yt(Function)},onClick:{type:yt(Function)},onKeydown:{type:yt(Function)},onFocus:{type:yt(Function)},onBlur:{type:yt(Function)},onContextmenu:{type:yt(Function)},id:String,open:Boolean}),q1=Ze({name:"ElPopperTrigger",inheritAttrs:!1}),K1=Ze({...q1,props:Wv,setup(t,{expose:e}){const n=t,{role:i,triggerRef:s}=Rt(ih,void 0);p1(s);const r=Se(()=>a.value?n.id:void 0),o=Se(()=>{if(i&&i.value==="tooltip")return n.open&&n.id?n.id:void 0}),a=Se(()=>{if(i&&i.value!=="tooltip")return i.value}),l=Se(()=>a.value?`${n.open}`:void 0);let c;return Ft(()=>{We(()=>n.virtualRef,u=>{u&&(s.value=As(u))},{immediate:!0}),We(s,(u,f)=>{c==null||c(),c=void 0,Aa(u)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach(d=>{var p;const m=n[d];m&&(u.addEventListener(d.slice(2).toLowerCase(),m),(p=f==null?void 0:f.removeEventListener)==null||p.call(f,d.slice(2).toLowerCase(),m))}),c=We([r,o,a,l],d=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((p,m)=>{hr(d[m])?u.removeAttribute(p):u.setAttribute(p,d[m])})},{immediate:!0})),Aa(f)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(d=>f.removeAttribute(d))},{immediate:!0})}),Li(()=>{c==null||c(),c=void 0}),e({triggerRef:s}),(u,f)=>u.virtualTriggering?nt("v-if",!0):(ae(),Et(O(Y1),Ji({key:0},u.$attrs,{"aria-controls":O(r),"aria-describedby":O(o),"aria-expanded":O(l),"aria-haspopup":O(a)}),{default:It(()=>[sn(u.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var Z1=on(K1,[["__file","trigger.vue"]]);const gu="focus-trap.focus-after-trapped",_u="focus-trap.focus-after-released",J1="focus-trap.focusout-prevented",Xp={cancelable:!0,bubbles:!1},Q1={cancelable:!0,bubbles:!1},jp="focusAfterTrapped",Yp="focusAfterReleased",eT=Symbol("elFocusTrap"),sh=ve(),$c=ve(0),rh=ve(0);let el=0;const $v=t=>{const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const s=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||s?NodeFilter.FILTER_SKIP:i.tabIndex>=0||i===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e},qp=(t,e)=>{for(const n of t)if(!tT(n,e))return n},tT=(t,e)=>{if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(e&&t===e)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1},nT=t=>{const e=$v(t),n=qp(e,t),i=qp(e.reverse(),t);return[n,i]},iT=t=>t instanceof HTMLInputElement&&"select"in t,Ss=(t,e)=>{if(t&&t.focus){const n=document.activeElement;t.focus({preventScroll:!0}),rh.value=window.performance.now(),t!==n&&iT(t)&&e&&t.select()}};function Kp(t,e){const n=[...t],i=t.indexOf(e);return i!==-1&&n.splice(i,1),n}const sT=()=>{let t=[];return{push:i=>{const s=t[0];s&&i!==s&&s.pause(),t=Kp(t,i),t.unshift(i)},remove:i=>{var s,r;t=Kp(t,i),(r=(s=t[0])==null?void 0:s.resume)==null||r.call(s)}}},rT=(t,e=!1)=>{const n=document.activeElement;for(const i of t)if(Ss(i,e),document.activeElement!==n)return},Zp=sT(),oT=()=>$c.value>rh.value,tl=()=>{sh.value="pointer",$c.value=window.performance.now()},Jp=()=>{sh.value="keyboard",$c.value=window.performance.now()},aT=()=>(Ft(()=>{el===0&&(document.addEventListener("mousedown",tl),document.addEventListener("touchstart",tl),document.addEventListener("keydown",Jp)),el++}),Li(()=>{el--,el<=0&&(document.removeEventListener("mousedown",tl),document.removeEventListener("touchstart",tl),document.removeEventListener("keydown",Jp))}),{focusReason:sh,lastUserFocusTimestamp:$c,lastAutomatedFocusTimestamp:rh}),nl=t=>new CustomEvent(J1,{...Q1,detail:t}),lT=Ze({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[jp,Yp,"focusin","focusout","focusout-prevented","release-requested"],setup(t,{emit:e}){const n=ve();let i,s;const{focusReason:r}=aT();c1(m=>{t.trapped&&!o.paused&&e("release-requested",m)});const o={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},a=m=>{if(!t.loop&&!t.trapped||o.paused)return;const{key:g,altKey:_,ctrlKey:h,metaKey:x,currentTarget:y,shiftKey:v}=m,{loop:P}=t,D=g===pr.tab&&!_&&!h&&!x,A=document.activeElement;if(D&&A){const L=y,[b,S]=nT(L);if(b&&S){if(!v&&A===S){const C=nl({focusReason:r.value});e("focusout-prevented",C),C.defaultPrevented||(m.preventDefault(),P&&Ss(b,!0))}else if(v&&[b,L].includes(A)){const C=nl({focusReason:r.value});e("focusout-prevented",C),C.defaultPrevented||(m.preventDefault(),P&&Ss(S,!0))}}else if(A===L){const C=nl({focusReason:r.value});e("focusout-prevented",C),C.defaultPrevented||m.preventDefault()}}};ss(eT,{focusTrapRef:n,onKeydown:a}),We(()=>t.focusTrapEl,m=>{m&&(n.value=m)},{immediate:!0}),We([n],([m],[g])=>{m&&(m.addEventListener("keydown",a),m.addEventListener("focusin",u),m.addEventListener("focusout",f)),g&&(g.removeEventListener("keydown",a),g.removeEventListener("focusin",u),g.removeEventListener("focusout",f))});const l=m=>{e(jp,m)},c=m=>e(Yp,m),u=m=>{const g=O(n);if(!g)return;const _=m.target,h=m.relatedTarget,x=_&&g.contains(_);t.trapped||h&&g.contains(h)||(i=h),x&&e("focusin",m),!o.paused&&t.trapped&&(x?s=_:Ss(s,!0))},f=m=>{const g=O(n);if(!(o.paused||!g))if(t.trapped){const _=m.relatedTarget;!hr(_)&&!g.contains(_)&&setTimeout(()=>{if(!o.paused&&t.trapped){const h=nl({focusReason:r.value});e("focusout-prevented",h),h.defaultPrevented||Ss(s,!0)}},0)}else{const _=m.target;_&&g.contains(_)||e("focusout",m)}};async function d(){await qt();const m=O(n);if(m){Zp.push(o);const g=m.contains(document.activeElement)?i:document.activeElement;if(i=g,!m.contains(g)){const h=new Event(gu,Xp);m.addEventListener(gu,l),m.dispatchEvent(h),h.defaultPrevented||qt(()=>{let x=t.focusStartEl;ht(x)||(Ss(x),document.activeElement!==x&&(x="first")),x==="first"&&rT($v(m),!0),(document.activeElement===g||x==="container")&&Ss(m)})}}}function p(){const m=O(n);if(m){m.removeEventListener(gu,l);const g=new CustomEvent(_u,{...Xp,detail:{focusReason:r.value}});m.addEventListener(_u,c),m.dispatchEvent(g),!g.defaultPrevented&&(r.value=="keyboard"||!oT()||m.contains(document.activeElement))&&Ss(i??document.body),m.removeEventListener(_u,c),Zp.remove(o)}}return Ft(()=>{t.trapped&&d(),We(()=>t.trapped,m=>{m?d():p()})}),Li(()=>{t.trapped&&p()}),{onKeydown:a}}});function cT(t,e,n,i,s,r){return sn(t.$slots,"default",{handleKeydown:t.onKeydown})}var uT=on(lT,[["render",cT],["__file","focus-trap.vue"]]);const fT=["fixed","absolute"],dT=Dn({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:yt(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:$d,default:"bottom"},popperOptions:{type:yt(Object),default:()=>({})},strategy:{type:String,values:fT,default:"absolute"}}),Xv=Dn({...dT,id:String,style:{type:yt([String,Array,Object])},className:{type:yt([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:yt([String,Array,Object])},popperStyle:{type:yt([String,Array,Object])},referenceEl:{type:yt(Object)},triggerTargetEl:{type:yt(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},ariaLabel:{type:String,default:void 0},virtualTriggering:Boolean,zIndex:Number}),hT={mouseenter:t=>t instanceof MouseEvent,mouseleave:t=>t instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},pT=(t,e=[])=>{const{placement:n,strategy:i,popperOptions:s}=t,r={placement:n,strategy:i,...s,modifiers:[...gT(t),...e]};return _T(r,s==null?void 0:s.modifiers),r},mT=t=>{if(kn)return As(t)};function gT(t){const{offset:e,gpuAcceleration:n,fallbackPlacements:i}=t;return[{name:"offset",options:{offset:[0,e??12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:i}},{name:"computeStyles",options:{gpuAcceleration:n}}]}function _T(t,e){e&&(t.modifiers=[...t.modifiers,...e??[]])}const vT=0,yT=t=>{const{popperInstanceRef:e,contentRef:n,triggerRef:i,role:s}=Rt(ih,void 0),r=ve(),o=ve(),a=Se(()=>({name:"eventListeners",enabled:!!t.visible})),l=Se(()=>{var h;const x=O(r),y=(h=O(o))!=null?h:vT;return{name:"arrow",enabled:!bM(x),options:{element:x,padding:y}}}),c=Se(()=>({onFirstUpdate:()=>{m()},...pT(t,[O(l),O(a)])})),u=Se(()=>mT(t.referenceEl)||O(i)),{attributes:f,state:d,styles:p,update:m,forceUpdate:g,instanceRef:_}=o1(u,n,c);return We(_,h=>e.value=h),Ft(()=>{We(()=>{var h;return(h=O(u))==null?void 0:h.getBoundingClientRect()},()=>{m()})}),{attributes:f,arrowRef:r,contentRef:n,instanceRef:_,state:d,styles:p,role:s,forceUpdate:g,update:m}},xT=(t,{attributes:e,styles:n,role:i})=>{const{nextZIndex:s}=v1(),r=dn("popper"),o=Se(()=>O(e).popper),a=ve(yr(t.zIndex)?t.zIndex:s()),l=Se(()=>[r.b(),r.is("pure",t.pure),r.is(t.effect),t.popperClass]),c=Se(()=>[{zIndex:O(a)},O(n).popper,t.popperStyle||{}]),u=Se(()=>i.value==="dialog"?"false":void 0),f=Se(()=>O(n).arrow||{});return{ariaModal:u,arrowStyle:f,contentAttrs:o,contentClass:l,contentStyle:c,contentZIndex:a,updateZIndex:()=>{a.value=yr(t.zIndex)?t.zIndex:s()}}},bT=(t,e)=>{const n=ve(!1),i=ve();return{focusStartRef:i,trapped:n,onFocusAfterReleased:c=>{var u;((u=c.detail)==null?void 0:u.focusReason)!=="pointer"&&(i.value="first",e("blur"))},onFocusAfterTrapped:()=>{e("focus")},onFocusInTrap:c=>{t.visible&&!n.value&&(c.target&&(i.value=c.target),n.value=!0)},onFocusoutPrevented:c=>{t.trapping||(c.detail.focusReason==="pointer"&&c.preventDefault(),n.value=!1)},onReleaseRequested:()=>{n.value=!1,e("close")}}},ST=Ze({name:"ElPopperContent"}),MT=Ze({...ST,props:Xv,emits:hT,setup(t,{expose:e,emit:n}){const i=t,{focusStartRef:s,trapped:r,onFocusAfterReleased:o,onFocusAfterTrapped:a,onFocusInTrap:l,onFocusoutPrevented:c,onReleaseRequested:u}=bT(i,n),{attributes:f,arrowRef:d,contentRef:p,styles:m,instanceRef:g,role:_,update:h}=yT(i),{ariaModal:x,arrowStyle:y,contentAttrs:v,contentClass:P,contentStyle:D,updateZIndex:A}=xT(i,{styles:m,attributes:f,role:_}),L=Rt(gc,void 0);ss(zv,{arrowStyle:y,arrowRef:d,arrowOffset:ve()}),L&&(L.addInputId||L.removeInputId)&&ss(gc,{...L,addInputId:fn,removeInputId:fn});let S;const I=(N=!0)=>{h(),N&&A()},C=()=>{I(!1),i.visible&&i.focusOnShow?r.value=!0:i.visible===!1&&(r.value=!1)};return Ft(()=>{We(()=>i.triggerTargetEl,(N,K)=>{S==null||S(),S=void 0;const Q=O(N||p.value),j=O(K||p.value);Aa(Q)&&(S=We([_,()=>i.ariaLabel,x,()=>i.id],V=>{["role","aria-label","aria-modal","id"].forEach((Y,me)=>{hr(V[me])?Q.removeAttribute(Y):Q.setAttribute(Y,V[me])})},{immediate:!0})),j!==Q&&Aa(j)&&["role","aria-label","aria-modal","id"].forEach(V=>{j.removeAttribute(V)})},{immediate:!0}),We(()=>i.visible,C,{immediate:!0})}),Li(()=>{S==null||S(),S=void 0}),e({popperContentRef:p,popperInstanceRef:g,updatePopper:I,contentStyle:D}),(N,K)=>(ae(),ge("div",Ji({ref_key:"contentRef",ref:p},O(v),{style:O(D),class:O(P),tabindex:"-1",onMouseenter:K[0]||(K[0]=Q=>N.$emit("mouseenter",Q)),onMouseleave:K[1]||(K[1]=Q=>N.$emit("mouseleave",Q))}),[Ke(O(uT),{trapped:O(r),"trap-on-focus-in":!0,"focus-trap-el":O(p),"focus-start-el":O(s),onFocusAfterTrapped:O(a),onFocusAfterReleased:O(o),onFocusin:O(l),onFocusoutPrevented:O(c),onReleaseRequested:O(u)},{default:It(()=>[sn(N.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16))}});var ET=on(MT,[["__file","content.vue"]]);const TT=No(G1),oh=Symbol("elTooltip"),jv=Dn({...d1,...Xv,appendTo:{type:yt([String,Object])},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:yt(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean}),Yv=Dn({...Wv,disabled:Boolean,trigger:{type:yt([String,Array]),default:"hover"},triggerKeys:{type:yt(Array),default:()=>[pr.enter,pr.space]}}),{useModelToggleProps:wT,useModelToggleEmits:AT,useModelToggle:CT}=iE("visible"),RT=Dn({...Hv,...wT,...jv,...Yv,...Vv,showArrow:{type:Boolean,default:!0}}),PT=[...AT,"before-show","before-hide","show","hide","open","close"],DT=(t,e)=>Ge(t)?t.includes(e):t===e,Or=(t,e,n)=>i=>{DT(O(t),e)&&n(i)},IT=Ze({name:"ElTooltipTrigger"}),LT=Ze({...IT,props:Yv,setup(t,{expose:e}){const n=t,i=dn("tooltip"),{controlled:s,id:r,open:o,onOpen:a,onClose:l,onToggle:c}=Rt(oh,void 0),u=ve(null),f=()=>{if(O(s)||n.disabled)return!0},d=Yi(n,"trigger"),p=Gi(f,Or(d,"hover",a)),m=Gi(f,Or(d,"hover",l)),g=Gi(f,Or(d,"click",v=>{v.button===0&&c(v)})),_=Gi(f,Or(d,"focus",a)),h=Gi(f,Or(d,"focus",l)),x=Gi(f,Or(d,"contextmenu",v=>{v.preventDefault(),c(v)})),y=Gi(f,v=>{const{code:P}=v;n.triggerKeys.includes(P)&&(v.preventDefault(),c(v))});return e({triggerRef:u}),(v,P)=>(ae(),Et(O(Z1),{id:O(r),"virtual-ref":v.virtualRef,open:O(o),"virtual-triggering":v.virtualTriggering,class:De(O(i).e("trigger")),onBlur:O(h),onClick:O(g),onContextmenu:O(x),onFocus:O(_),onMouseenter:O(p),onMouseleave:O(m),onKeydown:O(y)},{default:It(()=>[sn(v.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var UT=on(LT,[["__file","trigger.vue"]]);const NT=Ze({name:"ElTooltipContent",inheritAttrs:!1}),OT=Ze({...NT,props:jv,setup(t,{expose:e}){const n=t,{selector:i}=Ov(),s=dn("tooltip"),r=ve(null),o=ve(!1),{controlled:a,id:l,open:c,trigger:u,onClose:f,onOpen:d,onShow:p,onHide:m,onBeforeShow:g,onBeforeHide:_}=Rt(oh,void 0),h=Se(()=>n.transition||`${s.namespace.value}-fade-in-linear`),x=Se(()=>n.persistent);Li(()=>{o.value=!0});const y=Se(()=>O(x)?!0:O(c)),v=Se(()=>n.disabled?!1:O(c)),P=Se(()=>n.appendTo||i.value),D=Se(()=>{var V;return(V=n.style)!=null?V:{}}),A=Se(()=>!O(c)),L=()=>{m()},b=()=>{if(O(a))return!0},S=Gi(b,()=>{n.enterable&&O(u)==="hover"&&d()}),I=Gi(b,()=>{O(u)==="hover"&&f()}),C=()=>{var V,Y;(Y=(V=r.value)==null?void 0:V.updatePopper)==null||Y.call(V),g==null||g()},N=()=>{_==null||_()},K=()=>{p(),j=Lb(Se(()=>{var V;return(V=r.value)==null?void 0:V.popperContentRef}),()=>{if(O(a))return;O(u)!=="hover"&&f()})},Q=()=>{n.virtualTriggering||f()};let j;return We(()=>O(c),V=>{V||j==null||j()},{flush:"post"}),We(()=>n.content,()=>{var V,Y;(Y=(V=r.value)==null?void 0:V.updatePopper)==null||Y.call(V)}),e({contentRef:r}),(V,Y)=>(ae(),Et(__,{disabled:!V.teleported,to:O(P)},[Ke(kx,{name:O(h),onAfterLeave:L,onBeforeEnter:C,onAfterEnter:K,onBeforeLeave:N},{default:It(()=>[O(y)?Dt((ae(),Et(O(ET),Ji({key:0,id:O(l),ref_key:"contentRef",ref:r},V.$attrs,{"aria-label":V.ariaLabel,"aria-hidden":O(A),"boundaries-padding":V.boundariesPadding,"fallback-placements":V.fallbackPlacements,"gpu-acceleration":V.gpuAcceleration,offset:V.offset,placement:V.placement,"popper-options":V.popperOptions,strategy:V.strategy,effect:V.effect,enterable:V.enterable,pure:V.pure,"popper-class":V.popperClass,"popper-style":[V.popperStyle,O(D)],"reference-el":V.referenceEl,"trigger-target-el":V.triggerTargetEl,visible:O(v),"z-index":V.zIndex,onMouseenter:O(S),onMouseleave:O(I),onBlur:Q,onClose:O(f)}),{default:It(()=>[o.value?nt("v-if",!0):sn(V.$slots,"default",{key:0})]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[jn,O(v)]]):nt("v-if",!0)]),_:3},8,["name"])],8,["disabled","to"]))}});var FT=on(OT,[["__file","content.vue"]]);const BT=["innerHTML"],kT={key:1},zT=Ze({name:"ElTooltip"}),HT=Ze({...zT,props:RT,emits:PT,setup(t,{expose:e,emit:n}){const i=t;f1();const s=Nv(),r=ve(),o=ve(),a=()=>{var h;const x=O(r);x&&((h=x.popperInstanceRef)==null||h.update())},l=ve(!1),c=ve(),{show:u,hide:f,hasUpdateHandler:d}=CT({indicator:l,toggleReason:c}),{onOpen:p,onClose:m}=h1({showAfter:Yi(i,"showAfter"),hideAfter:Yi(i,"hideAfter"),autoClose:Yi(i,"autoClose"),open:u,close:f}),g=Se(()=>_v(i.visible)&&!d.value);ss(oh,{controlled:g,id:s,open:ec(l),trigger:Yi(i,"trigger"),onOpen:h=>{p(h)},onClose:h=>{m(h)},onToggle:h=>{O(l)?m(h):p(h)},onShow:()=>{n("show",c.value)},onHide:()=>{n("hide",c.value)},onBeforeShow:()=>{n("before-show",c.value)},onBeforeHide:()=>{n("before-hide",c.value)},updatePopper:a}),We(()=>i.disabled,h=>{h&&l.value&&(l.value=!1)});const _=h=>{var x,y;const v=(y=(x=o.value)==null?void 0:x.contentRef)==null?void 0:y.popperContentRef,P=(h==null?void 0:h.relatedTarget)||document.activeElement;return v&&v.contains(P)};return E_(()=>l.value&&f()),e({popperRef:r,contentRef:o,isFocusInsideContent:_,updatePopper:a,onOpen:p,onClose:m,hide:f}),(h,x)=>(ae(),Et(O(TT),{ref_key:"popperRef",ref:r,role:h.role},{default:It(()=>[Ke(UT,{disabled:h.disabled,trigger:h.trigger,"trigger-keys":h.triggerKeys,"virtual-ref":h.virtualRef,"virtual-triggering":h.virtualTriggering},{default:It(()=>[h.$slots.default?sn(h.$slots,"default",{key:0}):nt("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),Ke(FT,{ref_key:"contentRef",ref:o,"aria-label":h.ariaLabel,"boundaries-padding":h.boundariesPadding,content:h.content,disabled:h.disabled,effect:h.effect,enterable:h.enterable,"fallback-placements":h.fallbackPlacements,"hide-after":h.hideAfter,"gpu-acceleration":h.gpuAcceleration,offset:h.offset,persistent:h.persistent,"popper-class":h.popperClass,"popper-style":h.popperStyle,placement:h.placement,"popper-options":h.popperOptions,pure:h.pure,"raw-content":h.rawContent,"reference-el":h.referenceEl,"trigger-target-el":h.triggerTargetEl,"show-after":h.showAfter,strategy:h.strategy,teleported:h.teleported,transition:h.transition,"virtual-triggering":h.virtualTriggering,"z-index":h.zIndex,"append-to":h.appendTo},{default:It(()=>[sn(h.$slots,"content",{},()=>[h.rawContent?(ae(),ge("span",{key:0,innerHTML:h.content},null,8,BT)):(ae(),ge("span",kT,Xe(h.content),1))]),h.showArrow?(ae(),Et(O(X1),{key:0,"arrow-offset":h.arrowOffset},null,8,["arrow-offset"])):nt("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}});var VT=on(HT,[["__file","tooltip.vue"]]);const GT=No(VT),qv=Symbol("buttonGroupContextKey"),WT=(t,e)=>{XM({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},Se(()=>t.type==="text"));const n=Rt(qv,void 0),i=M1("button"),{form:s}=nh(),r=th(Se(()=>n==null?void 0:n.size)),o=Wc(),a=ve(),l=P_(),c=Se(()=>t.type||(n==null?void 0:n.type)||""),u=Se(()=>{var m,g,_;return(_=(g=t.autoInsertSpace)!=null?g:(m=i.value)==null?void 0:m.autoInsertSpace)!=null?_:!1}),f=Se(()=>t.tag==="button"?{ariaDisabled:o.value||t.loading,disabled:o.value||t.loading,autofocus:t.autofocus,type:t.nativeType}:{}),d=Se(()=>{var m;const g=(m=l.default)==null?void 0:m.call(l);if(u.value&&(g==null?void 0:g.length)===1){const _=g[0];if((_==null?void 0:_.type)===Io){const h=_.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(h.trim())}}return!1});return{_disabled:o,_size:r,_type:c,_ref:a,_props:f,shouldAddSpace:d,handleClick:m=>{t.nativeType==="reset"&&(s==null||s.resetFields()),e("click",m)}}},$T=["default","primary","success","warning","info","danger","text",""],XT=["button","submit","reset"],Cf=Dn({size:Qd,disabled:Boolean,type:{type:String,values:$T,default:""},icon:{type:pc},nativeType:{type:String,values:XT,default:"button"},loading:Boolean,loadingIcon:{type:pc,default:()=>yv},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:yt([String,Object]),default:"button"}}),jT={click:t=>t instanceof MouseEvent};function rn(t,e){YT(t)&&(t="100%");var n=qT(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function il(t){return Math.min(1,Math.max(0,t))}function YT(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function qT(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Kv(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function sl(t){return t<=1?"".concat(Number(t)*100,"%"):t}function ar(t){return t.length===1?"0"+t:String(t)}function KT(t,e,n){return{r:rn(t,255)*255,g:rn(e,255)*255,b:rn(n,255)*255}}function Qp(t,e,n){t=rn(t,255),e=rn(e,255),n=rn(n,255);var i=Math.max(t,e,n),s=Math.min(t,e,n),r=0,o=0,a=(i+s)/2;if(i===s)o=0,r=0;else{var l=i-s;switch(o=a>.5?l/(2-i-s):l/(i+s),i){case t:r=(e-n)/l+(e<n?6:0);break;case e:r=(n-t)/l+2;break;case n:r=(t-e)/l+4;break}r/=6}return{h:r,s:o,l:a}}function vu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*(6*n):n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function ZT(t,e,n){var i,s,r;if(t=rn(t,360),e=rn(e,100),n=rn(n,100),e===0)s=n,r=n,i=n;else{var o=n<.5?n*(1+e):n+e-n*e,a=2*n-o;i=vu(a,o,t+1/3),s=vu(a,o,t),r=vu(a,o,t-1/3)}return{r:i*255,g:s*255,b:r*255}}function em(t,e,n){t=rn(t,255),e=rn(e,255),n=rn(n,255);var i=Math.max(t,e,n),s=Math.min(t,e,n),r=0,o=i,a=i-s,l=i===0?0:a/i;if(i===s)r=0;else{switch(i){case t:r=(e-n)/a+(e<n?6:0);break;case e:r=(n-t)/a+2;break;case n:r=(t-e)/a+4;break}r/=6}return{h:r,s:l,v:o}}function JT(t,e,n){t=rn(t,360)*6,e=rn(e,100),n=rn(n,100);var i=Math.floor(t),s=t-i,r=n*(1-e),o=n*(1-s*e),a=n*(1-(1-s)*e),l=i%6,c=[n,o,r,r,a,n][l],u=[a,n,n,o,r,r][l],f=[r,r,a,n,n,o][l];return{r:c*255,g:u*255,b:f*255}}function tm(t,e,n,i){var s=[ar(Math.round(t).toString(16)),ar(Math.round(e).toString(16)),ar(Math.round(n).toString(16))];return i&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function QT(t,e,n,i,s){var r=[ar(Math.round(t).toString(16)),ar(Math.round(e).toString(16)),ar(Math.round(n).toString(16)),ar(ew(i))];return s&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))&&r[3].startsWith(r[3].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}function ew(t){return Math.round(parseFloat(t)*255).toString(16)}function nm(t){return Nn(t)/255}function Nn(t){return parseInt(t,16)}function tw(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var Rf={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function nw(t){var e={r:0,g:0,b:0},n=1,i=null,s=null,r=null,o=!1,a=!1;return typeof t=="string"&&(t=rw(t)),typeof t=="object"&&(Ni(t.r)&&Ni(t.g)&&Ni(t.b)?(e=KT(t.r,t.g,t.b),o=!0,a=String(t.r).substr(-1)==="%"?"prgb":"rgb"):Ni(t.h)&&Ni(t.s)&&Ni(t.v)?(i=sl(t.s),s=sl(t.v),e=JT(t.h,i,s),o=!0,a="hsv"):Ni(t.h)&&Ni(t.s)&&Ni(t.l)&&(i=sl(t.s),r=sl(t.l),e=ZT(t.h,i,r),o=!0,a="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(n=t.a)),n=Kv(n),{ok:o,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:n}}var iw="[-\\+]?\\d+%?",sw="[-\\+]?\\d*\\.\\d+%?",Cs="(?:".concat(sw,")|(?:").concat(iw,")"),yu="[\\s|\\(]+(".concat(Cs,")[,|\\s]+(").concat(Cs,")[,|\\s]+(").concat(Cs,")\\s*\\)?"),xu="[\\s|\\(]+(".concat(Cs,")[,|\\s]+(").concat(Cs,")[,|\\s]+(").concat(Cs,")[,|\\s]+(").concat(Cs,")\\s*\\)?"),ci={CSS_UNIT:new RegExp(Cs),rgb:new RegExp("rgb"+yu),rgba:new RegExp("rgba"+xu),hsl:new RegExp("hsl"+yu),hsla:new RegExp("hsla"+xu),hsv:new RegExp("hsv"+yu),hsva:new RegExp("hsva"+xu),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function rw(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;var e=!1;if(Rf[t])t=Rf[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=ci.rgb.exec(t);return n?{r:n[1],g:n[2],b:n[3]}:(n=ci.rgba.exec(t),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=ci.hsl.exec(t),n?{h:n[1],s:n[2],l:n[3]}:(n=ci.hsla.exec(t),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=ci.hsv.exec(t),n?{h:n[1],s:n[2],v:n[3]}:(n=ci.hsva.exec(t),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=ci.hex8.exec(t),n?{r:Nn(n[1]),g:Nn(n[2]),b:Nn(n[3]),a:nm(n[4]),format:e?"name":"hex8"}:(n=ci.hex6.exec(t),n?{r:Nn(n[1]),g:Nn(n[2]),b:Nn(n[3]),format:e?"name":"hex"}:(n=ci.hex4.exec(t),n?{r:Nn(n[1]+n[1]),g:Nn(n[2]+n[2]),b:Nn(n[3]+n[3]),a:nm(n[4]+n[4]),format:e?"name":"hex8"}:(n=ci.hex3.exec(t),n?{r:Nn(n[1]+n[1]),g:Nn(n[2]+n[2]),b:Nn(n[3]+n[3]),format:e?"name":"hex"}:!1)))))))))}function Ni(t){return!!ci.CSS_UNIT.exec(String(t))}var ow=(function(){function t(e,n){e===void 0&&(e=""),n===void 0&&(n={});var i;if(e instanceof t)return e;typeof e=="number"&&(e=tw(e)),this.originalInput=e;var s=nw(e);this.originalInput=e,this.r=s.r,this.g=s.g,this.b=s.b,this.a=s.a,this.roundA=Math.round(100*this.a)/100,this.format=(i=n.format)!==null&&i!==void 0?i:s.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=s.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},t.prototype.getLuminance=function(){var e=this.toRgb(),n,i,s,r=e.r/255,o=e.g/255,a=e.b/255;return r<=.03928?n=r/12.92:n=Math.pow((r+.055)/1.055,2.4),o<=.03928?i=o/12.92:i=Math.pow((o+.055)/1.055,2.4),a<=.03928?s=a/12.92:s=Math.pow((a+.055)/1.055,2.4),.2126*n+.7152*i+.0722*s},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(e){return this.a=Kv(e),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){var e=this.toHsl().s;return e===0},t.prototype.toHsv=function(){var e=em(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},t.prototype.toHsvString=function(){var e=em(this.r,this.g,this.b),n=Math.round(e.h*360),i=Math.round(e.s*100),s=Math.round(e.v*100);return this.a===1?"hsv(".concat(n,", ").concat(i,"%, ").concat(s,"%)"):"hsva(".concat(n,", ").concat(i,"%, ").concat(s,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var e=Qp(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},t.prototype.toHslString=function(){var e=Qp(this.r,this.g,this.b),n=Math.round(e.h*360),i=Math.round(e.s*100),s=Math.round(e.l*100);return this.a===1?"hsl(".concat(n,", ").concat(i,"%, ").concat(s,"%)"):"hsla(".concat(n,", ").concat(i,"%, ").concat(s,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(e){return e===void 0&&(e=!1),tm(this.r,this.g,this.b,e)},t.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},t.prototype.toHex8=function(e){return e===void 0&&(e=!1),QT(this.r,this.g,this.b,this.a,e)},t.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},t.prototype.toHexShortString=function(e){return e===void 0&&(e=!1),this.a===1?this.toHexString(e):this.toHex8String(e)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var e=Math.round(this.r),n=Math.round(this.g),i=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(n,", ").concat(i,")"):"rgba(".concat(e,", ").concat(n,", ").concat(i,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var e=function(n){return"".concat(Math.round(rn(n,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var e=function(n){return Math.round(rn(n,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+tm(this.r,this.g,this.b,!1),n=0,i=Object.entries(Rf);n<i.length;n++){var s=i[n],r=s[0],o=s[1];if(e===o)return r}return!1},t.prototype.toString=function(e){var n=!!e;e=e??this.format;var i=!1,s=this.a<1&&this.a>=0,r=!n&&s&&(e.startsWith("hex")||e==="name");return r?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.l+=e/100,n.l=il(n.l),new t(n)},t.prototype.brighten=function(e){e===void 0&&(e=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(e/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(e/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(e/100)))),new t(n)},t.prototype.darken=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.l-=e/100,n.l=il(n.l),new t(n)},t.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},t.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},t.prototype.desaturate=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.s-=e/100,n.s=il(n.s),new t(n)},t.prototype.saturate=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.s+=e/100,n.s=il(n.s),new t(n)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var n=this.toHsl(),i=(n.h+e)%360;return n.h=i<0?360+i:i,new t(n)},t.prototype.mix=function(e,n){n===void 0&&(n=50);var i=this.toRgb(),s=new t(e).toRgb(),r=n/100,o={r:(s.r-i.r)*r+i.r,g:(s.g-i.g)*r+i.g,b:(s.b-i.b)*r+i.b,a:(s.a-i.a)*r+i.a};return new t(o)},t.prototype.analogous=function(e,n){e===void 0&&(e=6),n===void 0&&(n=30);var i=this.toHsl(),s=360/n,r=[this];for(i.h=(i.h-(s*e>>1)+720)%360;--e;)i.h=(i.h+s)%360,r.push(new t(i));return r},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var n=this.toHsv(),i=n.h,s=n.s,r=n.v,o=[],a=1/e;e--;)o.push(new t({h:i,s,v:r})),r=(r+a)%1;return o},t.prototype.splitcomplement=function(){var e=this.toHsl(),n=e.h;return[this,new t({h:(n+72)%360,s:e.s,l:e.l}),new t({h:(n+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var n=this.toRgb(),i=new t(e).toRgb(),s=n.a+i.a*(1-n.a);return new t({r:(n.r*n.a+i.r*i.a*(1-n.a))/s,g:(n.g*n.a+i.g*i.a*(1-n.a))/s,b:(n.b*n.a+i.b*i.a*(1-n.a))/s,a:s})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var n=this.toHsl(),i=n.h,s=[this],r=360/e,o=1;o<e;o++)s.push(new t({h:(i+o*r)%360,s:n.s,l:n.l}));return s},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t})();function ds(t,e=20){return t.mix("#141414",e).toString()}function aw(t){const e=Wc(),n=dn("button");return Se(()=>{let i={};const s=t.color;if(s){const r=new ow(s),o=t.dark?r.tint(20).toString():ds(r,20);if(t.plain)i=n.cssVarBlock({"bg-color":t.dark?ds(r,90):r.tint(90).toString(),"text-color":s,"border-color":t.dark?ds(r,50):r.tint(50).toString(),"hover-text-color":`var(${n.cssVarName("color-white")})`,"hover-bg-color":s,"hover-border-color":s,"active-bg-color":o,"active-text-color":`var(${n.cssVarName("color-white")})`,"active-border-color":o}),e.value&&(i[n.cssVarBlockName("disabled-bg-color")]=t.dark?ds(r,90):r.tint(90).toString(),i[n.cssVarBlockName("disabled-text-color")]=t.dark?ds(r,50):r.tint(50).toString(),i[n.cssVarBlockName("disabled-border-color")]=t.dark?ds(r,80):r.tint(80).toString());else{const a=t.dark?ds(r,30):r.tint(30).toString(),l=r.isDark()?`var(${n.cssVarName("color-white")})`:`var(${n.cssVarName("color-black")})`;if(i=n.cssVarBlock({"bg-color":s,"text-color":l,"border-color":s,"hover-bg-color":a,"hover-text-color":l,"hover-border-color":a,"active-bg-color":o,"active-border-color":o}),e.value){const c=t.dark?ds(r,50):r.tint(50).toString();i[n.cssVarBlockName("disabled-bg-color")]=c,i[n.cssVarBlockName("disabled-text-color")]=t.dark?"rgba(255, 255, 255, 0.5)":`var(${n.cssVarName("color-white")})`,i[n.cssVarBlockName("disabled-border-color")]=c}}}return i})}const lw=Ze({name:"ElButton"}),cw=Ze({...lw,props:Cf,emits:jT,setup(t,{expose:e,emit:n}){const i=t,s=aw(i),r=dn("button"),{_ref:o,_size:a,_type:l,_disabled:c,_props:u,shouldAddSpace:f,handleClick:d}=WT(i,n);return e({ref:o,size:a,type:l,disabled:c,shouldAddSpace:f}),(p,m)=>(ae(),Et(rr(p.tag),Ji({ref_key:"_ref",ref:o},O(u),{class:[O(r).b(),O(r).m(O(l)),O(r).m(O(a)),O(r).is("disabled",O(c)),O(r).is("loading",p.loading),O(r).is("plain",p.plain),O(r).is("round",p.round),O(r).is("circle",p.circle),O(r).is("text",p.text),O(r).is("link",p.link),O(r).is("has-bg",p.bg)],style:O(s),onClick:O(d)}),{default:It(()=>[p.loading?(ae(),ge(rt,{key:0},[p.$slots.loading?sn(p.$slots,"loading",{key:0}):(ae(),Et(O(ji),{key:1,class:De(O(r).is("loading"))},{default:It(()=>[(ae(),Et(rr(p.loadingIcon)))]),_:1},8,["class"]))],64)):p.icon||p.$slots.icon?(ae(),Et(O(ji),{key:1},{default:It(()=>[p.icon?(ae(),Et(rr(p.icon),{key:0})):sn(p.$slots,"icon",{key:1})]),_:3})):nt("v-if",!0),p.$slots.default?(ae(),ge("span",{key:2,class:De({[O(r).em("text","expand")]:O(f)})},[sn(p.$slots,"default")],2)):nt("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var uw=on(cw,[["__file","button.vue"]]);const fw={size:Cf.size,type:Cf.type},dw=Ze({name:"ElButtonGroup"}),hw=Ze({...dw,props:fw,setup(t){const e=t;ss(qv,Tr({size:Yi(e,"size"),type:Yi(e,"type")}));const n=dn("button");return(i,s)=>(ae(),ge("div",{class:De(`${O(n).b("group")}`)},[sn(i.$slots,"default")],2))}});var Zv=on(hw,[["__file","button-group.vue"]]);const im=No(uw,{ButtonGroup:Zv});BM(Zv);const Ms=new Map;let sm;kn&&(document.addEventListener("mousedown",t=>sm=t),document.addEventListener("mouseup",t=>{for(const e of Ms.values())for(const{documentHandler:n}of e)n(t,sm)}));function rm(t,e){let n=[];return Array.isArray(e.arg)?n=e.arg:Aa(e.arg)&&n.push(e.arg),function(i,s){const r=e.instance.popperRef,o=i.target,a=s==null?void 0:s.target,l=!e||!e.instance,c=!o||!a,u=t.contains(o)||t.contains(a),f=t===o,d=n.length&&n.some(m=>m==null?void 0:m.contains(o))||n.length&&n.includes(a),p=r&&(r.contains(o)||r.contains(a));l||c||u||f||d||p||e.value(i,s)}}const pw={beforeMount(t,e){Ms.has(t)||Ms.set(t,[]),Ms.get(t).push({documentHandler:rm(t,e),bindingFn:e.value})},updated(t,e){Ms.has(t)||Ms.set(t,[]);const n=Ms.get(t),i=n.findIndex(r=>r.bindingFn===e.oldValue),s={documentHandler:rm(t,e),bindingFn:e.value};i>=0?n.splice(i,1,s):n.push(s)},unmounted(t){Ms.delete(t)}},mw=Dn({color:{type:yt(Object),required:!0},vertical:{type:Boolean,default:!1}});let bu=!1;function Pa(t,e){if(!kn)return;const n=function(r){var o;(o=e.drag)==null||o.call(e,r)},i=function(r){var o;document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",i),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",i),document.onselectstart=null,document.ondragstart=null,bu=!1,(o=e.end)==null||o.call(e,r)},s=function(r){var o;bu||(r.preventDefault(),document.onselectstart=()=>!1,document.ondragstart=()=>!1,document.addEventListener("mousemove",n),document.addEventListener("mouseup",i),document.addEventListener("touchmove",n),document.addEventListener("touchend",i),bu=!0,(o=e.start)==null||o.call(e,r))};t.addEventListener("mousedown",s),t.addEventListener("touchstart",s)}const gw=t=>{const e=Kt(),n=fr(),i=fr();function s(o){o.target!==n.value&&r(o)}function r(o){if(!i.value||!n.value)return;const l=e.vnode.el.getBoundingClientRect(),{clientX:c,clientY:u}=kd(o);if(t.vertical){let f=u-l.top;f=Math.max(n.value.offsetHeight/2,f),f=Math.min(f,l.height-n.value.offsetHeight/2),t.color.set("alpha",Math.round((f-n.value.offsetHeight/2)/(l.height-n.value.offsetHeight)*100))}else{let f=c-l.left;f=Math.max(n.value.offsetWidth/2,f),f=Math.min(f,l.width-n.value.offsetWidth/2),t.color.set("alpha",Math.round((f-n.value.offsetWidth/2)/(l.width-n.value.offsetWidth)*100))}}return{thumb:n,bar:i,handleDrag:r,handleClick:s}},_w=(t,{bar:e,thumb:n,handleDrag:i})=>{const s=Kt(),r=dn("color-alpha-slider"),o=ve(0),a=ve(0),l=ve();function c(){if(!n.value||t.vertical)return 0;const x=s.vnode.el,y=t.color.get("alpha");return x?Math.round(y*(x.offsetWidth-n.value.offsetWidth/2)/100):0}function u(){if(!n.value)return 0;const x=s.vnode.el;if(!t.vertical)return 0;const y=t.color.get("alpha");return x?Math.round(y*(x.offsetHeight-n.value.offsetHeight/2)/100):0}function f(){if(t.color&&t.color.value){const{r:x,g:y,b:v}=t.color.toRgb();return`linear-gradient(to right, rgba(${x}, ${y}, ${v}, 0) 0%, rgba(${x}, ${y}, ${v}, 1) 100%)`}return""}function d(){o.value=c(),a.value=u(),l.value=f()}Ft(()=>{if(!e.value||!n.value)return;const x={drag:y=>{i(y)},end:y=>{i(y)}};Pa(e.value,x),Pa(n.value,x),d()}),We(()=>t.color.get("alpha"),()=>d()),We(()=>t.color.value,()=>d());const p=Se(()=>[r.b(),r.is("vertical",t.vertical)]),m=Se(()=>r.e("bar")),g=Se(()=>r.e("thumb")),_=Se(()=>({background:l.value})),h=Se(()=>({left:Tf(o.value),top:Tf(a.value)}));return{rootKls:p,barKls:m,barStyle:_,thumbKls:g,thumbStyle:h,update:d}},vw="ElColorAlphaSlider",yw=Ze({name:vw}),xw=Ze({...yw,props:mw,setup(t,{expose:e}){const n=t,{bar:i,thumb:s,handleDrag:r,handleClick:o}=gw(n),{rootKls:a,barKls:l,barStyle:c,thumbKls:u,thumbStyle:f,update:d}=_w(n,{bar:i,thumb:s,handleDrag:r});return e({update:d,bar:i,thumb:s}),(p,m)=>(ae(),ge("div",{class:De(O(a))},[F("div",{ref_key:"bar",ref:i,class:De(O(l)),style:Hn(O(c)),onClick:m[0]||(m[0]=(...g)=>O(o)&&O(o)(...g))},null,6),F("div",{ref_key:"thumb",ref:s,class:De(O(u)),style:Hn(O(f))},null,6)],2))}});var bw=on(xw,[["__file","alpha-slider.vue"]]);const Sw=Ze({name:"ElColorHueSlider",props:{color:{type:Object,required:!0},vertical:Boolean},setup(t){const e=dn("color-hue-slider"),n=Kt(),i=ve(),s=ve(),r=ve(0),o=ve(0),a=Se(()=>t.color.get("hue"));We(()=>a.value,()=>{d()});function l(p){p.target!==i.value&&c(p)}function c(p){if(!s.value||!i.value)return;const g=n.vnode.el.getBoundingClientRect(),{clientX:_,clientY:h}=kd(p);let x;if(t.vertical){let y=h-g.top;y=Math.min(y,g.height-i.value.offsetHeight/2),y=Math.max(i.value.offsetHeight/2,y),x=Math.round((y-i.value.offsetHeight/2)/(g.height-i.value.offsetHeight)*360)}else{let y=_-g.left;y=Math.min(y,g.width-i.value.offsetWidth/2),y=Math.max(i.value.offsetWidth/2,y),x=Math.round((y-i.value.offsetWidth/2)/(g.width-i.value.offsetWidth)*360)}t.color.set("hue",x)}function u(){if(!i.value)return 0;const p=n.vnode.el;if(t.vertical)return 0;const m=t.color.get("hue");return p?Math.round(m*(p.offsetWidth-i.value.offsetWidth/2)/360):0}function f(){if(!i.value)return 0;const p=n.vnode.el;if(!t.vertical)return 0;const m=t.color.get("hue");return p?Math.round(m*(p.offsetHeight-i.value.offsetHeight/2)/360):0}function d(){r.value=u(),o.value=f()}return Ft(()=>{if(!s.value||!i.value)return;const p={drag:m=>{c(m)},end:m=>{c(m)}};Pa(s.value,p),Pa(i.value,p),d()}),{bar:s,thumb:i,thumbLeft:r,thumbTop:o,hueValue:a,handleClick:l,update:d,ns:e}}});function Mw(t,e,n,i,s,r){return ae(),ge("div",{class:De([t.ns.b(),t.ns.is("vertical",t.vertical)])},[F("div",{ref:"bar",class:De(t.ns.e("bar")),onClick:e[0]||(e[0]=(...o)=>t.handleClick&&t.handleClick(...o))},null,2),F("div",{ref:"thumb",class:De(t.ns.e("thumb")),style:Hn({left:t.thumbLeft+"px",top:t.thumbTop+"px"})},null,6)],2)}var Ew=on(Sw,[["render",Mw],["__file","hue-slider.vue"]]);const Tw=Dn({modelValue:String,id:String,showAlpha:Boolean,colorFormat:String,disabled:Boolean,size:Qd,popperClass:{type:String,default:""},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},predefine:{type:yt(Array)},validateEvent:{type:Boolean,default:!0}}),ww={[So]:t=>ht(t)||hr(t),[kM]:t=>ht(t)||hr(t),activeChange:t=>ht(t)||hr(t),focus:t=>t instanceof FocusEvent,blur:t=>t instanceof FocusEvent},Jv=Symbol("colorPickerContextKey"),om=function(t,e,n){return[t,e*n/((t=(2-e)*n)<1?t:2-t)||0,t/2]},Aw=function(t){return typeof t=="string"&&t.includes(".")&&Number.parseFloat(t)===1},Cw=function(t){return typeof t=="string"&&t.includes("%")},po=function(t,e){Aw(t)&&(t="100%");const n=Cw(t);return t=Math.min(e,Math.max(0,Number.parseFloat(`${t}`))),n&&(t=Number.parseInt(`${t*e}`,10)/100),Math.abs(t-e)<1e-6?1:t%e/Number.parseFloat(e)},am={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},$l=t=>{t=Math.min(Math.round(t),255);const e=Math.floor(t/16),n=t%16;return`${am[e]||e}${am[n]||n}`},lm=function({r:t,g:e,b:n}){return Number.isNaN(+t)||Number.isNaN(+e)||Number.isNaN(+n)?"":`#${$l(t)}${$l(e)}${$l(n)}`},Su={A:10,B:11,C:12,D:13,E:14,F:15},Ws=function(t){return t.length===2?(Su[t[0].toUpperCase()]||+t[0])*16+(Su[t[1].toUpperCase()]||+t[1]):Su[t[1].toUpperCase()]||+t[1]},Rw=function(t,e,n){e=e/100,n=n/100;let i=e;const s=Math.max(n,.01);n*=2,e*=n<=1?n:2-n,i*=s<=1?s:2-s;const r=(n+e)/2,o=n===0?2*i/(s+i):2*e/(n+e);return{h:t,s:o*100,v:r*100}},cm=(t,e,n)=>{t=po(t,255),e=po(e,255),n=po(n,255);const i=Math.max(t,e,n),s=Math.min(t,e,n);let r;const o=i,a=i-s,l=i===0?0:a/i;if(i===s)r=0;else{switch(i){case t:{r=(e-n)/a+(e<n?6:0);break}case e:{r=(n-t)/a+2;break}case n:{r=(t-e)/a+4;break}}r/=6}return{h:r*360,s:l*100,v:o*100}},Xo=function(t,e,n){t=po(t,360)*6,e=po(e,100),n=po(n,100);const i=Math.floor(t),s=t-i,r=n*(1-e),o=n*(1-s*e),a=n*(1-(1-s)*e),l=i%6,c=[n,o,r,r,a,n][l],u=[a,n,n,o,r,r][l],f=[r,r,a,n,n,o][l];return{r:Math.round(c*255),g:Math.round(u*255),b:Math.round(f*255)}};let ma=class{constructor(e={}){this._hue=0,this._saturation=100,this._value=100,this._alpha=100,this.enableAlpha=!1,this.format="hex",this.value="";for(const n in e)dt(e,n)&&(this[n]=e[n]);e.value?this.fromString(e.value):this.doOnChange()}set(e,n){if(arguments.length===1&&typeof e=="object"){for(const i in e)dt(e,i)&&this.set(i,e[i]);return}this[`_${e}`]=n,this.doOnChange()}get(e){return e==="alpha"?Math.floor(this[`_${e}`]):this[`_${e}`]}toRgb(){return Xo(this._hue,this._saturation,this._value)}fromString(e){if(!e){this._hue=0,this._saturation=100,this._value=100,this.doOnChange();return}const n=(i,s,r)=>{this._hue=Math.max(0,Math.min(360,i)),this._saturation=Math.max(0,Math.min(100,s)),this._value=Math.max(0,Math.min(100,r)),this.doOnChange()};if(e.includes("hsl")){const i=e.replace(/hsla|hsl|\(|\)/gm,"").split(/\s|,/g).filter(s=>s!=="").map((s,r)=>r>2?Number.parseFloat(s):Number.parseInt(s,10));if(i.length===4?this._alpha=Number.parseFloat(i[3])*100:i.length===3&&(this._alpha=100),i.length>=3){const{h:s,s:r,v:o}=Rw(i[0],i[1],i[2]);n(s,r,o)}}else if(e.includes("hsv")){const i=e.replace(/hsva|hsv|\(|\)/gm,"").split(/\s|,/g).filter(s=>s!=="").map((s,r)=>r>2?Number.parseFloat(s):Number.parseInt(s,10));i.length===4?this._alpha=Number.parseFloat(i[3])*100:i.length===3&&(this._alpha=100),i.length>=3&&n(i[0],i[1],i[2])}else if(e.includes("rgb")){const i=e.replace(/rgba|rgb|\(|\)/gm,"").split(/\s|,/g).filter(s=>s!=="").map((s,r)=>r>2?Number.parseFloat(s):Number.parseInt(s,10));if(i.length===4?this._alpha=Number.parseFloat(i[3])*100:i.length===3&&(this._alpha=100),i.length>=3){const{h:s,s:r,v:o}=cm(i[0],i[1],i[2]);n(s,r,o)}}else if(e.includes("#")){const i=e.replace("#","").trim();if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(i))return;let s,r,o;i.length===3?(s=Ws(i[0]+i[0]),r=Ws(i[1]+i[1]),o=Ws(i[2]+i[2])):(i.length===6||i.length===8)&&(s=Ws(i.slice(0,2)),r=Ws(i.slice(2,4)),o=Ws(i.slice(4,6))),i.length===8?this._alpha=Ws(i.slice(6))/255*100:(i.length===3||i.length===6)&&(this._alpha=100);const{h:a,s:l,v:c}=cm(s,r,o);n(a,l,c)}}compare(e){return Math.abs(e._hue-this._hue)<2&&Math.abs(e._saturation-this._saturation)<1&&Math.abs(e._value-this._value)<1&&Math.abs(e._alpha-this._alpha)<1}doOnChange(){const{_hue:e,_saturation:n,_value:i,_alpha:s,format:r}=this;if(this.enableAlpha)switch(r){case"hsl":{const o=om(e,n/100,i/100);this.value=`hsla(${e}, ${Math.round(o[1]*100)}%, ${Math.round(o[2]*100)}%, ${this.get("alpha")/100})`;break}case"hsv":{this.value=`hsva(${e}, ${Math.round(n)}%, ${Math.round(i)}%, ${this.get("alpha")/100})`;break}case"hex":{this.value=`${lm(Xo(e,n,i))}${$l(s*255/100)}`;break}default:{const{r:o,g:a,b:l}=Xo(e,n,i);this.value=`rgba(${o}, ${a}, ${l}, ${this.get("alpha")/100})`}}else switch(r){case"hsl":{const o=om(e,n/100,i/100);this.value=`hsl(${e}, ${Math.round(o[1]*100)}%, ${Math.round(o[2]*100)}%)`;break}case"hsv":{this.value=`hsv(${e}, ${Math.round(n)}%, ${Math.round(i)}%)`;break}case"rgb":{const{r:o,g:a,b:l}=Xo(e,n,i);this.value=`rgb(${o}, ${a}, ${l})`;break}default:this.value=lm(Xo(e,n,i))}}};const Pw=Ze({props:{colors:{type:Array,required:!0},color:{type:Object,required:!0}},setup(t){const e=dn("color-predefine"),{currentColor:n}=Rt(Jv),i=ve(r(t.colors,t.color));We(()=>n.value,o=>{const a=new ma;a.fromString(o),i.value.forEach(l=>{l.selected=a.compare(l)})}),Iy(()=>{i.value=r(t.colors,t.color)});function s(o){t.color.fromString(t.colors[o])}function r(o,a){return o.map(l=>{const c=new ma;return c.enableAlpha=!0,c.format="rgba",c.fromString(l),c.selected=c.value===a.value,c})}return{rgbaColors:i,handleSelect:s,ns:e}}}),Dw=["onClick"];function Iw(t,e,n,i,s,r){return ae(),ge("div",{class:De(t.ns.b())},[F("div",{class:De(t.ns.e("colors"))},[(ae(!0),ge(rt,null,zt(t.rgbaColors,(o,a)=>(ae(),ge("div",{key:t.colors[a],class:De([t.ns.e("color-selector"),t.ns.is("alpha",o._alpha<100),{selected:o.selected}]),onClick:l=>t.handleSelect(a)},[F("div",{style:Hn({backgroundColor:o.value})},null,4)],10,Dw))),128))],2)],2)}var Lw=on(Pw,[["render",Iw],["__file","predefine.vue"]]);const Uw=Ze({name:"ElSlPanel",props:{color:{type:Object,required:!0}},setup(t){const e=dn("color-svpanel"),n=Kt(),i=ve(0),s=ve(0),r=ve("hsl(0, 100%, 50%)"),o=Se(()=>{const c=t.color.get("hue"),u=t.color.get("value");return{hue:c,value:u}});function a(){const c=t.color.get("saturation"),u=t.color.get("value"),f=n.vnode.el,{clientWidth:d,clientHeight:p}=f;s.value=c*d/100,i.value=(100-u)*p/100,r.value=`hsl(${t.color.get("hue")}, 100%, 50%)`}function l(c){const f=n.vnode.el.getBoundingClientRect(),{clientX:d,clientY:p}=kd(c);let m=d-f.left,g=p-f.top;m=Math.max(0,m),m=Math.min(m,f.width),g=Math.max(0,g),g=Math.min(g,f.height),s.value=m,i.value=g,t.color.set({saturation:m/f.width*100,value:100-g/f.height*100})}return We(()=>o.value,()=>{a()}),Ft(()=>{Pa(n.vnode.el,{drag:c=>{l(c)},end:c=>{l(c)}}),a()}),{cursorTop:i,cursorLeft:s,background:r,colorValue:o,handleDrag:l,update:a,ns:e}}}),Nw=F("div",null,null,-1),Ow=[Nw];function Fw(t,e,n,i,s,r){return ae(),ge("div",{class:De(t.ns.b()),style:Hn({backgroundColor:t.background})},[F("div",{class:De(t.ns.e("white"))},null,2),F("div",{class:De(t.ns.e("black"))},null,2),F("div",{class:De(t.ns.e("cursor")),style:Hn({top:t.cursorTop+"px",left:t.cursorLeft+"px"})},Ow,6)],6)}var Bw=on(Uw,[["render",Fw],["__file","sv-panel.vue"]]);const kw=["onKeydown"],zw=["id","aria-label","aria-labelledby","aria-description","aria-disabled","tabindex"],Hw=Ze({name:"ElColorPicker"}),Vw=Ze({...Hw,props:Tw,emits:ww,setup(t,{expose:e,emit:n}){const i=t,{t:s}=JM(),r=dn("color"),{formItem:o}=nh(),a=th(),l=Wc(),{inputId:c,isLabeledByFormItem:u}=kv(i,{formItemContext:o}),f=ve(),d=ve(),p=ve(),m=ve(),g=ve(),_=ve(),{isFocused:h,handleFocus:x,handleBlur:y}=Bv(g,{beforeBlur(ye){var He;return(He=m.value)==null?void 0:He.isFocusInsideContent(ye)},afterBlur(){j(!1),we()}}),v=ye=>{if(l.value)return it();x(ye)};let P=!0;const D=Tr(new ma({enableAlpha:i.showAlpha,format:i.colorFormat||"",value:i.modelValue})),A=ve(!1),L=ve(!1),b=ve(""),S=Se(()=>!i.modelValue&&!L.value?"transparent":Q(D,i.showAlpha)),I=Se(()=>!i.modelValue&&!L.value?"":D.value),C=Se(()=>u.value?void 0:i.label||s("el.colorpicker.defaultLabel")),N=Se(()=>u.value?o==null?void 0:o.labelId:void 0),K=Se(()=>[r.b("picker"),r.is("disabled",l.value),r.bm("picker",a.value),r.is("focused",h.value)]);function Q(ye,He){if(!(ye instanceof ma))throw new TypeError("color should be instance of _color Class");const{r:U,g:z,b:w}=ye.toRgb();return He?`rgba(${U}, ${z}, ${w}, ${ye.get("alpha")/100})`:`rgb(${U}, ${z}, ${w})`}function j(ye){A.value=ye}const V=xM(j,100,{leading:!0});function Y(){l.value||j(!0)}function me(){V(!1),we()}function we(){qt(()=>{i.modelValue?D.fromString(i.modelValue):(D.value="",qt(()=>{L.value=!1}))})}function Le(){l.value||V(!A.value)}function Fe(){D.fromString(b.value)}function Qe(){const ye=D.value;n(So,ye),n("change",ye),i.validateEvent&&(o==null||o.validate("change").catch(He=>void 0)),V(!1),qt(()=>{const He=new ma({enableAlpha:i.showAlpha,format:i.colorFormat||"",value:i.modelValue});D.compare(He)||we()})}function ce(){V(!1),n(So,null),n("change",null),i.modelValue!==null&&i.validateEvent&&(o==null||o.validate("change").catch(ye=>void 0)),we()}function _e(ye){if(A.value&&(me(),h.value)){const He=new FocusEvent("focus",ye);y(He)}}function Re(ye){ye.preventDefault(),ye.stopPropagation(),j(!1),we()}function Te(ye){switch(ye.code){case pr.enter:case pr.space:ye.preventDefault(),ye.stopPropagation(),Y(),_.value.focus();break;case pr.esc:Re(ye);break}}function Ue(){g.value.focus()}function it(){g.value.blur()}return Ft(()=>{i.modelValue&&(b.value=I.value)}),We(()=>i.modelValue,ye=>{ye?ye&&ye!==D.value&&(P=!1,D.fromString(ye)):L.value=!1}),We(()=>I.value,ye=>{b.value=ye,P&&n("activeChange",ye),P=!0}),We(()=>D.value,()=>{!i.modelValue&&!L.value&&(L.value=!0)}),We(()=>A.value,()=>{qt(()=>{var ye,He,U;(ye=f.value)==null||ye.update(),(He=d.value)==null||He.update(),(U=p.value)==null||U.update()})}),ss(Jv,{currentColor:I}),e({color:D,show:Y,hide:me,focus:Ue,blur:it}),(ye,He)=>(ae(),Et(O(GT),{ref_key:"popper",ref:m,visible:A.value,"show-arrow":!1,"fallback-placements":["bottom","top","right","left"],offset:0,"gpu-acceleration":!1,"popper-class":[O(r).be("picker","panel"),O(r).b("dropdown"),ye.popperClass],"stop-popper-mouse-event":!1,effect:"light",trigger:"click",transition:`${O(r).namespace.value}-zoom-in-top`,persistent:"",onHide:He[2]||(He[2]=U=>j(!1))},{content:It(()=>[Dt((ae(),ge("div",{onKeydown:fa(Re,["esc"])},[F("div",{class:De(O(r).be("dropdown","main-wrapper"))},[Ke(Ew,{ref_key:"hue",ref:f,class:"hue-slider",color:O(D),vertical:""},null,8,["color"]),Ke(Bw,{ref_key:"sv",ref:d,color:O(D)},null,8,["color"])],2),ye.showAlpha?(ae(),Et(bw,{key:0,ref_key:"alpha",ref:p,color:O(D)},null,8,["color"])):nt("v-if",!0),ye.predefine?(ae(),Et(Lw,{key:1,ref:"predefine",color:O(D),colors:ye.predefine},null,8,["color","colors"])):nt("v-if",!0),F("div",{class:De(O(r).be("dropdown","btns"))},[F("span",{class:De(O(r).be("dropdown","value"))},[Ke(O(k1),{ref_key:"inputRef",ref:_,modelValue:b.value,"onUpdate:modelValue":He[0]||(He[0]=U=>b.value=U),"validate-event":!1,size:"small",onKeyup:fa(Fe,["enter"]),onBlur:Fe},null,8,["modelValue","onKeyup"])],2),Ke(O(im),{class:De(O(r).be("dropdown","link-btn")),text:"",size:"small",onClick:ce},{default:It(()=>[or(Xe(O(s)("el.colorpicker.clear")),1)]),_:1},8,["class"]),Ke(O(im),{plain:"",size:"small",class:De(O(r).be("dropdown","btn")),onClick:Qe},{default:It(()=>[or(Xe(O(s)("el.colorpicker.confirm")),1)]),_:1},8,["class"])],2)],40,kw)),[[O(pw),_e]])]),default:It(()=>[F("div",{id:O(c),ref_key:"triggerRef",ref:g,class:De(O(K)),role:"button","aria-label":O(C),"aria-labelledby":O(N),"aria-description":O(s)("el.colorpicker.description",{color:ye.modelValue||""}),"aria-disabled":O(l),tabindex:O(l)?-1:ye.tabindex,onKeydown:Te,onFocus:v,onBlur:He[1]||(He[1]=(...U)=>O(y)&&O(y)(...U))},[O(l)?(ae(),ge("div",{key:0,class:De(O(r).be("picker","mask"))},null,2)):nt("v-if",!0),F("div",{class:De(O(r).be("picker","trigger")),onClick:Le},[F("span",{class:De([O(r).be("picker","color"),O(r).is("alpha",ye.showAlpha)])},[F("span",{class:De(O(r).be("picker","color-inner")),style:Hn({backgroundColor:O(S)})},[Dt(Ke(O(ji),{class:De([O(r).be("picker","icon"),O(r).is("icon-arrow-down")])},{default:It(()=>[Ke(O(TM))]),_:1},8,["class"]),[[jn,ye.modelValue||L.value]]),Dt(Ke(O(ji),{class:De([O(r).be("picker","empty"),O(r).is("icon-close")])},{default:It(()=>[Ke(O(PM))]),_:1},8,["class"]),[[jn,!ye.modelValue&&!L.value]])],6)],2)],2)],42,zw)]),_:1},8,["visible","popper-class","transition"]))}});var Gw=on(Vw,[["__file","color-picker.vue"]]);const um=No(Gw),Ww={class:"modal-container"},$w={class:"modal-body"},Xw={class:"form-group"},jw={class:"toggle-group"},Yw={class:"form-group"},qw={class:"screenshot-area"},Kw={key:0,class:"screenshot-preview"},Zw=["src"],Jw={key:1,class:"screenshot-placeholder"},Qw={class:"angle-buttons"},eA={class:"form-group"},tA=["value"],nA={class:"form-group"},iA=["value"],sA={class:"form-group"},rA=["value"],oA={key:0,class:"form-group"},aA=["value"],lA={class:"form-group"},cA=["value"],uA={class:"form-group"},fA={key:1,class:"form-group"},dA={class:"form-group"},hA={class:"form-group"},pA={class:"size-info"},mA={class:"size-item"},gA={class:"size-value"},_A={class:"size-item"},vA={class:"size-value"},yA={class:"size-item"},xA={class:"size-value"},bA=Ze({__name:"RenderModal",props:{visible:{type:Boolean}},emits:["close"],setup(t,{emit:e}){const n=t,i=e,s=Ls(),r=ve("single"),o=ve([]),a=ve([]),l=ve([]),c=ve([]),u=ve([]),f=Tr({imageAngle:"front",style:"",lighting:"",viewAngle:"",roomType:"",material:"",color:"#8B7355",bgColor:"#FFFFFF",description:""}),d=Se(()=>{var I;return((I=s.cabinet)==null?void 0:I.length)||800}),p=Se(()=>{var I;return((I=s.cabinet)==null?void 0:I.height)||2e3}),m=Se(()=>{var I;return((I=s.cabinet)==null?void 0:I.width)||600});function g(I){var N;const C=[];for(const K of I)C.push(K),(N=K.children)!=null&&N.length&&C.push(...g(K.children));return C}function _(I){if(!I.length)return"";const C={};for(const N of I)C[N]=(C[N]||0)+1;return Object.entries(C).sort((N,K)=>K[1]-N[1])[0][0]}function h(){var Q;const I=(Q=s.cabinet)==null?void 0:Q.components;if(!(I!=null&&I.length))return;const C=g(I),N=_(C.map(j=>j.color).filter(Boolean)),K=_(C.map(j=>j.material).filter(Boolean));N&&(f.color=N),K&&(f.material=K)}const x=ve(""),y=ve(!1);async function v(){var I;try{const C=await fetch(dp("/render_api/params/presets"));if(C.ok){const N=((I=await C.json())==null?void 0:I.data)||{};o.value=N.styles||[],a.value=N.lighting||[],l.value=N.view_angles||[],c.value=N.room_types||[],u.value=N.materials||[],o.value.length&&(f.style=o.value[0].value),a.value.length&&(f.lighting=a.value[0].value),l.value.length&&(f.viewAngle=l.value[0].value),c.value.length&&(f.roomType=c.value[0].value),u.value.length&&(f.material=u.value[0].value)}}catch(C){console.error("加载渲染预设失败:",C)}}let P=!1;function D(I){f.imageAngle=I,y.value=!0,P?window.dispatchEvent(new CustomEvent("enter-render-mode",{detail:{angle:I}})):(window.dispatchEvent(new CustomEvent("enter-render-mode",{detail:{angle:I}})),P=!0),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const C=document.querySelector("canvas");if(!C){y.value=!1;return}try{x.value=C.toDataURL("image/png")}catch(N){console.error("截图失败:",N)}y.value=!1})})}function A(I,C){var Y;const[N,K]=I.split(","),Q=((Y=N.match(/:(.*?);/))==null?void 0:Y[1])||"image/png",j=atob(K),V=new Uint8Array(j.length);for(let me=0;me<j.length;me++)V[me]=j.charCodeAt(me);return new File([V],C,{type:Q})}async function L(){var I;if(!x.value)return"";try{const C=A(x.value,"screenshot.png"),N=new FormData;N.append("file",C),N.append("cabinet_w",String(Math.round(d.value))),N.append("cabinet_h",String(Math.round(p.value))),N.append("cabinet_d",String(Math.round(m.value))),N.append("material",f.material),N.append("color",f.color);const K=await fetch(dp("/render_api/images/upload"),{method:"POST",body:N});if(K.ok)return((I=(await K.json()).data)==null?void 0:I.image_id)||""}catch(C){console.error("上传截图失败:",C)}return""}async function b(){let I="";x.value&&(I=await L());const C=new URLSearchParams;I&&C.set("image_id",I),f.style&&C.set("style",f.style),f.lighting&&C.set("lighting",f.lighting),f.viewAngle&&C.set("view_angle",f.viewAngle),r.value==="scene"&&f.roomType&&C.set("room_type",f.roomType),f.material&&C.set("material",f.material),f.color&&C.set("color",f.color),r.value==="single"&&f.bgColor&&C.set("bg_color",f.bgColor),f.description&&C.set("description",f.description),C.set("width",String(Math.round(d.value))),C.set("height",String(Math.round(p.value))),C.set("depth",String(Math.round(m.value)));const N=r.value==="single"?"/llmimagerender/render/single":"/llmimagerender/render/scene",Q=`${window.location.origin}${N}?${C.toString()}`;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?window.location.href=Q:window.open(Q,"_blank")}We(()=>n.visible,I=>{I&&(P=!1,v().then(()=>{h()}),D("front"))});function S(){P&&(window.dispatchEvent(new CustomEvent("exit-render-mode")),P=!1),i("close")}return(I,C)=>(ae(),Et(__,{to:"body"},[t.visible?(ae(),ge("div",{key:0,class:"modal-overlay",onClick:Ea(S,["self"])},[F("div",Ww,[F("div",{class:"modal-header"},[C[13]||(C[13]=F("h2",{class:"modal-title"},"渲染设置",-1)),F("button",{class:"modal-close",onClick:S},"×")]),F("div",$w,[F("div",Xw,[C[14]||(C[14]=F("label",{class:"form-label"},"渲染类型",-1)),F("div",jw,[F("button",{class:De(["toggle-btn",{active:r.value==="single"}]),onClick:C[0]||(C[0]=N=>r.value="single")},"单品渲染",2),F("button",{class:De(["toggle-btn",{active:r.value==="scene"}]),onClick:C[1]||(C[1]=N=>r.value="scene")},"场景渲染",2)])]),F("div",Yw,[C[15]||(C[15]=F("label",{class:"form-label"},"3D 视图截图",-1)),F("div",qw,[x.value?(ae(),ge("div",Kw,[F("img",{src:x.value,alt:"截图预览"},null,8,Zw)])):(ae(),ge("div",Jw,Xe(y.value?"截图中...":"暂无截图"),1)),F("div",Qw,[F("button",{class:De(["angle-btn",{active:f.imageAngle==="front"}]),onClick:C[2]||(C[2]=N=>D("front"))},"正面",2),F("button",{class:De(["angle-btn",{active:f.imageAngle==="top"}]),onClick:C[3]||(C[3]=N=>D("top"))},"顶视",2),F("button",{class:De(["angle-btn",{active:f.imageAngle==="side_45"}]),onClick:C[4]||(C[4]=N=>D("side_45"))},"侧面45°",2)])])]),F("div",eA,[C[16]||(C[16]=F("label",{class:"form-label"},"渲染风格",-1)),Dt(F("select",{"onUpdate:modelValue":C[5]||(C[5]=N=>f.style=N),class:"form-select"},[(ae(!0),ge(rt,null,zt(o.value,N=>(ae(),ge("option",{key:N.value,value:N.value},Xe(N.label),9,tA))),128))],512),[[no,f.style]])]),F("div",nA,[C[17]||(C[17]=F("label",{class:"form-label"},"光照条件",-1)),Dt(F("select",{"onUpdate:modelValue":C[6]||(C[6]=N=>f.lighting=N),class:"form-select"},[(ae(!0),ge(rt,null,zt(a.value,N=>(ae(),ge("option",{key:N.value,value:N.value},Xe(N.label),9,iA))),128))],512),[[no,f.lighting]])]),F("div",sA,[C[18]||(C[18]=F("label",{class:"form-label"},"视角",-1)),Dt(F("select",{"onUpdate:modelValue":C[7]||(C[7]=N=>f.viewAngle=N),class:"form-select"},[(ae(!0),ge(rt,null,zt(l.value,N=>(ae(),ge("option",{key:N.value,value:N.value},Xe(N.label),9,rA))),128))],512),[[no,f.viewAngle]])]),r.value==="scene"?(ae(),ge("div",oA,[C[19]||(C[19]=F("label",{class:"form-label"},"户型",-1)),Dt(F("select",{"onUpdate:modelValue":C[8]||(C[8]=N=>f.roomType=N),class:"form-select"},[(ae(!0),ge(rt,null,zt(c.value,N=>(ae(),ge("option",{key:N.value,value:N.value},Xe(N.label),9,aA))),128))],512),[[no,f.roomType]])])):nt("",!0),F("div",lA,[C[20]||(C[20]=F("label",{class:"form-label"},"柜体材质",-1)),Dt(F("select",{"onUpdate:modelValue":C[9]||(C[9]=N=>f.material=N),class:"form-select"},[(ae(!0),ge(rt,null,zt(u.value,N=>(ae(),ge("option",{key:N.value,value:N.value},Xe(N.label),9,cA))),128))],512),[[no,f.material]])]),F("div",uA,[C[21]||(C[21]=F("label",{class:"form-label"},"颜色",-1)),Ke(O(um),{modelValue:f.color,"onUpdate:modelValue":C[10]||(C[10]=N=>f.color=N)},null,8,["modelValue"])]),r.value==="single"?(ae(),ge("div",fA,[C[22]||(C[22]=F("label",{class:"form-label"},"背景颜色",-1)),Ke(O(um),{modelValue:f.bgColor,"onUpdate:modelValue":C[11]||(C[11]=N=>f.bgColor=N)},null,8,["modelValue"])])):nt("",!0),F("div",dA,[C[23]||(C[23]=F("label",{class:"form-label"},"额外描述",-1)),Dt(F("textarea",{"onUpdate:modelValue":C[12]||(C[12]=N=>f.description=N),class:"form-textarea",rows:"2",placeholder:"输入渲染的额外描述..."},null,512),[[fc,f.description]])]),F("div",hA,[C[27]||(C[27]=F("label",{class:"form-label"},"柜子尺寸 (mm)",-1)),F("div",pA,[F("div",mA,[C[24]||(C[24]=F("span",{class:"size-label"},"宽",-1)),F("span",gA,Xe(Math.round(d.value)),1)]),F("div",_A,[C[25]||(C[25]=F("span",{class:"size-label"},"高",-1)),F("span",vA,Xe(Math.round(p.value)),1)]),F("div",yA,[C[26]||(C[26]=F("span",{class:"size-label"},"深",-1)),F("span",xA,Xe(Math.round(m.value)),1)])])])]),F("div",{class:"modal-footer"},[F("button",{class:"btn-cancel",onClick:S},"取消"),F("button",{class:"btn-submit",onClick:b},"提交渲染")])])])):nt("",!0)]))}}),Ns=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},SA=Ns(bA,[["__scopeId","data-v-c59cd928"]]),MA={class:"header-bar"},EA={class:"header-left"},TA={class:"project-name"},wA={class:"header-center"},AA=["disabled"],CA=["disabled"],RA={class:"header-right"},PA={class:"status-text"},DA=Ze({__name:"HeaderBar",setup(t,{expose:e}){const n=Lo(),i=Ls(),s=Se(()=>{var p;return((p=i.cabinet)==null?void 0:p.name)||"标准柜"}),r=ve(!1),o=ve(!1),a=ve(!1);async function l(){if(!n.currentProjectId){r.value=!1,o.value=!1;return}try{const p=await fetch(wn(`/api/projects/${n.currentProjectId}/history`));if(p.ok){const m=await p.json();r.value=m.can_undo,o.value=m.can_redo}}catch{r.value=!1,o.value=!1}}function c(p){(p.ctrlKey||p.metaKey)&&(p.key==="z"&&!p.shiftKey?(p.preventDefault(),u()):(p.key==="y"||p.key==="z"&&p.shiftKey)&&(p.preventDefault(),f()))}Ft(()=>{l(),window.addEventListener("keydown",c)}),za(()=>{window.removeEventListener("keydown",c)}),We(()=>n.currentProjectId,()=>{l()}),We(()=>i.cabinet,()=>{l()},{deep:!0});function u(){i.undo()}function f(){i.redo()}async function d(){try{(await fetch(wn(`/api/projects/${n.currentProjectId}`),{method:"PUT"})).ok?(Si("保存成功","success"),n.refreshSchemeList()):Si("保存失败","error")}catch(p){console.error("保存方案失败:",p),Si("保存失败","error")}}return e({fetchHistoryStatus:l}),(p,m)=>(ae(),ge(rt,null,[F("header",MA,[F("div",EA,[m[2]||(m[2]=F("div",{class:"logo-wrapper"},[F("h1",{class:"logo"},"Cabinet3D")],-1)),F("span",TA,Xe(s.value),1)]),F("div",wA,[F("button",{class:"btn",onClick:u,disabled:!O(n).isConnected||!r.value,title:"撤销"},[...m[3]||(m[3]=[F("span",{class:"btn-icon"},"↩",-1),F("span",{class:"btn-label"},"撤销",-1)])],8,AA),F("button",{class:"btn",onClick:f,disabled:!O(n).isConnected||!o.value,title:"重做"},[...m[4]||(m[4]=[F("span",{class:"btn-icon"},"↪",-1),F("span",{class:"btn-label"},"重做",-1)])],8,CA),F("button",{class:"btn btn-save",onClick:d},[...m[5]||(m[5]=[F("span",{class:"btn-icon"},"💾",-1),F("span",{class:"btn-label"},"保存",-1)])]),F("button",{class:"btn btn-render",onClick:m[0]||(m[0]=g=>a.value=!0)},[...m[6]||(m[6]=[F("span",{class:"btn-icon"},"🖼",-1),F("span",{class:"btn-label"},"渲染",-1)])])]),F("div",RA,[F("span",{class:De(["status",{connected:O(n).isConnected}])},[m[7]||(m[7]=F("span",{class:"status-dot"},null,-1)),F("span",PA,Xe(O(n).isConnected?"已连接":"未连接"),1)],2)])]),Ke(SA,{visible:a.value,onClose:m[1]||(m[1]=g=>a.value=!1)},null,8,["visible"])],64))}}),fm=Ns(DA,[["__scopeId","data-v-e67c8ef0"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ah="175",mo={ROTATE:0,DOLLY:1,PAN:2},ro={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},IA=0,dm=1,LA=2,Qv=1,UA=2,Hi=3,Ds=0,Pn=1,wi=2,Rs=0,go=1,hm=2,pm=3,mm=4,NA=5,nr=100,OA=101,FA=102,BA=103,kA=104,zA=200,HA=201,VA=202,GA=203,Pf=204,Df=205,WA=206,$A=207,XA=208,jA=209,YA=210,qA=211,KA=212,ZA=213,JA=214,If=0,Lf=1,Uf=2,Ao=3,Nf=4,Of=5,Ff=6,Bf=7,e0=0,QA=1,eC=2,Ps=0,tC=1,nC=2,iC=3,sC=4,rC=5,oC=6,aC=7,t0=300,Co=301,Ro=302,kf=303,zf=304,Xc=306,Da=1e3,lr=1001,Hf=1002,hi=1003,lC=1004,rl=1005,Ci=1006,Mu=1007,cr=1008,as=1009,n0=1010,i0=1011,Ia=1012,lh=1013,br=1014,qi=1015,Wa=1016,ch=1017,uh=1018,La=1020,s0=35902,r0=1021,o0=1022,fi=1023,a0=1024,l0=1025,Ua=1026,Na=1027,c0=1028,fh=1029,u0=1030,dh=1031,hh=1033,Xl=33776,jl=33777,Yl=33778,ql=33779,Vf=35840,Gf=35841,Wf=35842,$f=35843,Xf=36196,jf=37492,Yf=37496,qf=37808,Kf=37809,Zf=37810,Jf=37811,Qf=37812,ed=37813,td=37814,nd=37815,id=37816,sd=37817,rd=37818,od=37819,ad=37820,ld=37821,Kl=36492,cd=36494,ud=36495,f0=36283,fd=36284,dd=36285,hd=36286,cC=3200,uC=3201,d0=0,fC=1,ws="",qn="srgb",Po="srgb-linear",_c="linear",St="srgb",Fr=7680,gm=519,dC=512,hC=513,pC=514,h0=515,mC=516,gC=517,_C=518,vC=519,pd=35044,_m="300 es",Ki=2e3,vc=2001;class Ar{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vm=1234567;const _o=Math.PI/180,Oa=180/Math.PI;function Qi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[t&255]+an[t>>8&255]+an[t>>16&255]+an[t>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function lt(t,e,n){return Math.max(e,Math.min(n,t))}function ph(t,e){return(t%e+e)%e}function yC(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function xC(t,e,n){return t!==e?(n-t)/(e-t):0}function ga(t,e,n){return(1-n)*t+n*e}function bC(t,e,n,i){return ga(t,e,1-Math.exp(-n*i))}function SC(t,e=1){return e-Math.abs(ph(t,e*2)-e)}function MC(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function EC(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function TC(t,e){return t+Math.floor(Math.random()*(e-t+1))}function wC(t,e){return t+Math.random()*(e-t)}function AC(t){return t*(.5-Math.random())}function CC(t){t!==void 0&&(vm=t);let e=vm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function RC(t){return t*_o}function PC(t){return t*Oa}function DC(t){return(t&t-1)===0&&t!==0}function IC(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function LC(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function UC(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":t.set(a*u,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*m,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*m,a*c);break;case"ZYZ":t.set(l*m,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ui(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function bt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ir={DEG2RAD:_o,RAD2DEG:Oa,generateUUID:Qi,clamp:lt,euclideanModulo:ph,mapLinear:yC,inverseLerp:xC,lerp:ga,damp:bC,pingpong:SC,smoothstep:MC,smootherstep:EC,randInt:TC,randFloat:wC,randFloatSpread:AC,seededRandom:CC,degToRad:RC,radToDeg:PC,isPowerOfTwo:DC,ceilPowerOfTwo:IC,floorPowerOfTwo:LC,setQuaternionFromProperEuler:UC,normalize:bt,denormalize:ui};class Ve{constructor(e=0,n=0){Ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,i,s,r,o,a,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],m=i[8],g=s[0],_=s[3],h=s[6],x=s[1],y=s[4],v=s[7],P=s[2],D=s[5],A=s[8];return r[0]=o*g+a*x+l*P,r[3]=o*_+a*y+l*D,r[6]=o*h+a*v+l*A,r[1]=c*g+u*x+f*P,r[4]=c*_+u*y+f*D,r[7]=c*h+u*v+f*A,r[2]=d*g+p*x+m*P,r[5]=d*_+p*y+m*D,r[8]=d*h+p*v+m*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,p=c*r-o*l,m=n*f+i*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=f*g,e[1]=(s*c-u*i)*g,e[2]=(a*i-s*o)*g,e[3]=d*g,e[4]=(u*n-s*l)*g,e[5]=(s*r-a*n)*g,e[6]=p*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*r)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Eu.makeScale(e,n)),this}rotate(e){return this.premultiply(Eu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Eu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Eu=new ot;function p0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function NC(){const t=yc("canvas");return t.style.display="block",t}const ym={};function Zl(t){t in ym||(ym[t]=!0,console.warn(t))}function OC(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function FC(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function BC(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xm=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bm=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kC(){const t={enabled:!0,workingColorSpace:Po,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(s.r=vo(s.r),s.g=vo(s.g),s.b=vo(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ws?_c:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Po]:{primaries:e,whitePoint:i,transfer:_c,toXYZ:xm,fromXYZ:bm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:i,transfer:St,toXYZ:xm,fromXYZ:bm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),t}const gt=kC();function es(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function vo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Br;class zC{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Br===void 0&&(Br=yc("canvas")),Br.width=e.width,Br.height=e.height;const s=Br.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Br}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=es(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(es(n[i]/255)*255):n[i]=es(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HC=0;class mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HC++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Tu(s[o].image)):r.push(Tu(s[o]))}else r=Tu(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Tu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VC=0;class bn extends Ar{constructor(e=bn.DEFAULT_IMAGE,n=bn.DEFAULT_MAPPING,i=lr,s=lr,r=Ci,o=cr,a=fi,l=as,c=bn.DEFAULT_ANISOTROPY,u=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VC++}),this.uuid=Qi(),this.name="",this.source=new mh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Da:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Da:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=t0;bn.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,n=0,i=0,s=1){wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],m=l[9],g=l[2],_=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(m-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(m+_)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,v=(p+1)/2,P=(h+1)/2,D=(u+d)/4,A=(f+g)/4,L=(m+_)/4;return y>v&&y>P?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=D/i,r=A/i):v>P?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=D/s,r=L/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=A/r,s=L/r),this.set(i,s,r,n),this}let x=Math.sqrt((_-m)*(_-m)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(_-m)/x,this.y=(f-g)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this.z=lt(this.z,e.z,n.z),this.w=lt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this.z=lt(this.z,e,n),this.w=lt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GC extends Ar{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n);const s={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new bn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new mh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends GC{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class m0 extends bn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=hi,this.minFilter=hi,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WC extends bn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=hi,this.minFilter=hi,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[o+0],p=r[o+1],m=r[o+2],g=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=m,e[n+3]=g;return}if(f!==g||l!==d||c!==p||u!==m){let _=1-a;const h=l*d+c*p+u*m+f*g,x=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const P=Math.sqrt(y),D=Math.atan2(P,h*x);_=Math.sin(_*D)/P,a=Math.sin(a*D)/P}const v=a*x;if(l=l*_+d*v,c=c*_+p*v,u=u*_+m*v,f=f*_+g*v,_===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],p=r[o+2],m=r[o+3];return e[n]=a*m+u*f+l*p-c*d,e[n+1]=l*m+u*d+c*f-a*p,e[n+2]=c*m+u*p+a*d-l*f,e[n+3]=u*m-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),p=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*p*m,this._y=c*p*f-d*u*m,this._z=c*u*m+d*p*f,this._w=c*u*f-d*p*m;break;case"YXZ":this._x=d*u*f+c*p*m,this._y=c*p*f-d*u*m,this._z=c*u*m-d*p*f,this._w=c*u*f+d*p*m;break;case"ZXY":this._x=d*u*f-c*p*m,this._y=c*p*f+d*u*m,this._z=c*u*m+d*p*f,this._w=c*u*f-d*p*m;break;case"ZYX":this._x=d*u*f-c*p*m,this._y=c*p*f+d*u*m,this._z=c*u*m-d*p*f,this._w=c*u*f+d*p*m;break;case"YZX":this._x=d*u*f+c*p*m,this._y=c*p*f+d*u*m,this._z=c*u*m-d*p*f,this._w=c*u*f-d*p*m;break;case"XZY":this._x=d*u*f-c*p*m,this._y=c*p*f-d*u*m,this._z=c*u*m+d*p*f,this._w=c*u*f+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this.z=lt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this.z=lt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wu.copy(this).projectOnVector(e),this.sub(wu)}reflect(e){return this.sub(wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wu=new X,Sm=new Mr;class Os{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ol.copy(i.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),al.subVectors(this.max,jo),kr.subVectors(e.a,jo),zr.subVectors(e.b,jo),Hr.subVectors(e.c,jo),hs.subVectors(zr,kr),ps.subVectors(Hr,zr),$s.subVectors(kr,Hr);let n=[0,-hs.z,hs.y,0,-ps.z,ps.y,0,-$s.z,$s.y,hs.z,0,-hs.x,ps.z,0,-ps.x,$s.z,0,-$s.x,-hs.y,hs.x,0,-ps.y,ps.x,0,-$s.y,$s.x,0];return!Au(n,kr,zr,Hr,al)||(n=[1,0,0,0,1,0,0,0,1],!Au(n,kr,zr,Hr,al))?!1:(ll.crossVectors(hs,ps),n=[ll.x,ll.y,ll.z],Au(n,kr,zr,Hr,al))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new X,new X,new X,new X,new X,new X,new X,new X],oi=new X,ol=new Os,kr=new X,zr=new X,Hr=new X,hs=new X,ps=new X,$s=new X,jo=new X,al=new X,ll=new X,Xs=new X;function Au(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Xs.fromArray(t,r);const a=s.x*Math.abs(Xs.x)+s.y*Math.abs(Xs.y)+s.z*Math.abs(Xs.z),l=e.dot(Xs),c=n.dot(Xs),u=i.dot(Xs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $C=new Os,Yo=new X,Cu=new X;class Oo{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):$C.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const n=Yo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Yo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(Cu)),this.expandByPoint(Yo.copy(e.center).sub(Cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new X,Ru=new X,cl=new X,ms=new X,Pu=new X,ul=new X,Du=new X;class jc{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,n),Fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Ru.copy(e).add(n).multiplyScalar(.5),cl.copy(n).sub(e).normalize(),ms.copy(this.origin).sub(Ru);const r=e.distanceTo(n)*.5,o=-this.direction.dot(cl),a=ms.dot(this.direction),l=-ms.dot(cl),c=ms.lengthSq(),u=Math.abs(1-o*o);let f,d,p,m;if(u>0)if(f=o*l-a,d=o*a-l,m=r*u,f>=0)if(d>=-m)if(d<=m){const g=1/u;f*=g,d*=g,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-m?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=m?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ru).addScaledVector(cl,d),p}intersectSphere(e,n){Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),s=Fi.dot(Fi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,n,i,s,r){Pu.subVectors(n,e),ul.subVectors(i,e),Du.crossVectors(Pu,ul);let o=this.direction.dot(Du),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ms.subVectors(this.origin,e);const l=a*this.direction.dot(ul.crossVectors(ms,ul));if(l<0)return null;const c=a*this.direction.dot(Pu.cross(ms));if(c<0||l+c>o)return null;const u=-a*ms.dot(Du);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,s,r,o,a,l,c,u,f,d,p,m,g,_){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,d,p,m,g,_)}set(e,n,i,s,r,o,a,l,c,u,f,d,p,m,g,_){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=m,h[11]=g,h[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/Vr.setFromMatrixColumn(e,0).length(),r=1/Vr.setFromMatrixColumn(e,1).length(),o=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*f,m=a*u,g=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+m*c,n[5]=d-g*c,n[9]=-a*l,n[2]=g-d*c,n[6]=m+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,m=c*u,g=c*f;n[0]=d+g*a,n[4]=m*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-m,n[6]=g+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,m=c*u,g=c*f;n[0]=d-g*a,n[4]=-o*f,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*u,n[9]=g-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,m=a*u,g=a*f;n[0]=l*u,n[4]=m*c-p,n[8]=d*c+g,n[1]=l*f,n[5]=g*c+d,n[9]=p*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,m=a*l,g=a*c;n[0]=l*u,n[4]=g-d*f,n[8]=m*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+m,n[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,p=o*c,m=a*l,g=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+g,n[5]=o*u,n[9]=p*f-m,n[2]=m*f-p,n[6]=a*u,n[10]=g*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XC,e,jC)}lookAt(e,n,i){const s=this.elements;return Ln.subVectors(e,n),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),gs.crossVectors(i,Ln),gs.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),gs.crossVectors(i,Ln)),gs.normalize(),fl.crossVectors(Ln,gs),s[0]=gs.x,s[4]=fl.x,s[8]=Ln.x,s[1]=gs.y,s[5]=fl.y,s[9]=Ln.y,s[2]=gs.z,s[6]=fl.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],m=i[2],g=i[6],_=i[10],h=i[14],x=i[3],y=i[7],v=i[11],P=i[15],D=s[0],A=s[4],L=s[8],b=s[12],S=s[1],I=s[5],C=s[9],N=s[13],K=s[2],Q=s[6],j=s[10],V=s[14],Y=s[3],me=s[7],we=s[11],Le=s[15];return r[0]=o*D+a*S+l*K+c*Y,r[4]=o*A+a*I+l*Q+c*me,r[8]=o*L+a*C+l*j+c*we,r[12]=o*b+a*N+l*V+c*Le,r[1]=u*D+f*S+d*K+p*Y,r[5]=u*A+f*I+d*Q+p*me,r[9]=u*L+f*C+d*j+p*we,r[13]=u*b+f*N+d*V+p*Le,r[2]=m*D+g*S+_*K+h*Y,r[6]=m*A+g*I+_*Q+h*me,r[10]=m*L+g*C+_*j+h*we,r[14]=m*b+g*N+_*V+h*Le,r[3]=x*D+y*S+v*K+P*Y,r[7]=x*A+y*I+v*Q+P*me,r[11]=x*L+y*C+v*j+P*we,r[15]=x*b+y*N+v*V+P*Le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],m=e[3],g=e[7],_=e[11],h=e[15];return m*(+r*l*f-s*c*f-r*a*d+i*c*d+s*a*p-i*l*p)+g*(+n*l*p-n*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+_*(+n*c*f-n*a*p-r*o*f+i*o*p+r*a*u-i*c*u)+h*(-s*a*u-n*l*f+n*a*d+s*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],m=e[12],g=e[13],_=e[14],h=e[15],x=f*_*c-g*d*c+g*l*p-a*_*p-f*l*h+a*d*h,y=m*d*c-u*_*c-m*l*p+o*_*p+u*l*h-o*d*h,v=u*g*c-m*f*c+m*a*p-o*g*p-u*a*h+o*f*h,P=m*f*l-u*g*l-m*a*d+o*g*d+u*a*_-o*f*_,D=n*x+i*y+s*v+r*P;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/D;return e[0]=x*A,e[1]=(g*d*r-f*_*r-g*s*p+i*_*p+f*s*h-i*d*h)*A,e[2]=(a*_*r-g*l*r+g*s*c-i*_*c-a*s*h+i*l*h)*A,e[3]=(f*l*r-a*d*r-f*s*c+i*d*c+a*s*p-i*l*p)*A,e[4]=y*A,e[5]=(u*_*r-m*d*r+m*s*p-n*_*p-u*s*h+n*d*h)*A,e[6]=(m*l*r-o*_*r-m*s*c+n*_*c+o*s*h-n*l*h)*A,e[7]=(o*d*r-u*l*r+u*s*c-n*d*c-o*s*p+n*l*p)*A,e[8]=v*A,e[9]=(m*f*r-u*g*r-m*i*p+n*g*p+u*i*h-n*f*h)*A,e[10]=(o*g*r-m*a*r+m*i*c-n*g*c-o*i*h+n*a*h)*A,e[11]=(u*a*r-o*f*r-u*i*c+n*f*c+o*i*p-n*a*p)*A,e[12]=P*A,e[13]=(u*g*s-m*f*s+m*i*d-n*g*d-u*i*_+n*f*_)*A,e[14]=(m*a*s-o*g*s-m*i*l+n*g*l+o*i*_-n*a*_)*A,e[15]=(o*f*s-u*a*s+u*i*l-n*f*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,d=r*c,p=r*u,m=r*f,g=o*u,_=o*f,h=a*f,x=l*c,y=l*u,v=l*f,P=i.x,D=i.y,A=i.z;return s[0]=(1-(g+h))*P,s[1]=(p+v)*P,s[2]=(m-y)*P,s[3]=0,s[4]=(p-v)*D,s[5]=(1-(d+h))*D,s[6]=(_+x)*D,s[7]=0,s[8]=(m+y)*A,s[9]=(_-x)*A,s[10]=(1-(d+g))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=Vr.set(s[0],s[1],s[2]).length();const o=Vr.set(s[4],s[5],s[6]).length(),a=Vr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ai.copy(this);const c=1/r,u=1/o,f=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=f,ai.elements[9]*=f,ai.elements[10]*=f,n.setFromRotationMatrix(ai),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=Ki){const l=this.elements,c=2*r/(n-e),u=2*r/(i-s),f=(n+e)/(n-e),d=(i+s)/(i-s);let p,m;if(a===Ki)p=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===vc)p=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Ki){const l=this.elements,c=1/(n-e),u=1/(i-s),f=1/(o-r),d=(n+e)*c,p=(i+s)*u;let m,g;if(a===Ki)m=(o+r)*f,g=-2*f;else if(a===vc)m=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Vr=new X,ai=new Ct,XC=new X(0,0,0),jC=new X(1,1,1),gs=new X,fl=new X,Ln=new X,Mm=new Ct,Em=new Mr;class Ii{constructor(e=0,n=0,i=0,s=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Em.setFromEuler(this),this.setFromQuaternion(Em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class gh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YC=0;const Tm=new X,Gr=new Mr,Bi=new Ct,dl=new X,qo=new X,qC=new X,KC=new Mr,wm=new X(1,0,0),Am=new X(0,1,0),Cm=new X(0,0,1),Rm={type:"added"},ZC={type:"removed"},Wr={type:"childadded",child:null},Iu={type:"childremoved",child:null};class Wt extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YC++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new X,n=new Ii,i=new Mr,s=new X(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new ot}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(wm,e)}rotateY(e){return this.rotateOnAxis(Am,e)}rotateZ(e){return this.rotateOnAxis(Cm,e)}translateOnAxis(e,n){return Tm.copy(e).applyQuaternion(this.quaternion),this.position.add(Tm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wm,e)}translateY(e){return this.translateOnAxis(Am,e)}translateZ(e){return this.translateOnAxis(Cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?dl.copy(e):dl.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(qo,dl,this.up):Bi.lookAt(dl,qo,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),Gr.setFromRotationMatrix(Bi),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rm),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ZC),Iu.child=e,this.dispatchEvent(Iu),Iu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rm),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,qC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,KC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Wt.DEFAULT_UP=new X(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new X,ki=new X,Lu=new X,zi=new X,$r=new X,Xr=new X,Pm=new X,Uu=new X,Nu=new X,Ou=new X,Fu=new wt,Bu=new wt,ku=new wt;class On{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),li.subVectors(e,n),s.cross(li);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){li.subVectors(s,n),ki.subVectors(i,n),Lu.subVectors(e,n);const o=li.dot(li),a=li.dot(ki),l=li.dot(Lu),c=ki.dot(ki),u=ki.dot(Lu),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,m=(o*u-a*l)*d;return r.set(1-p-m,m,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zi.x),l.addScaledVector(o,zi.y),l.addScaledVector(a,zi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Fu.setScalar(0),Bu.setScalar(0),ku.setScalar(0),Fu.fromBufferAttribute(e,n),Bu.fromBufferAttribute(e,i),ku.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Fu,r.x),o.addScaledVector(Bu,r.y),o.addScaledVector(ku,r.z),o}static isFrontFacing(e,n,i,s){return li.subVectors(i,n),ki.subVectors(e,n),li.cross(ki).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),li.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return On.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;$r.subVectors(s,i),Xr.subVectors(r,i),Uu.subVectors(e,i);const l=$r.dot(Uu),c=Xr.dot(Uu);if(l<=0&&c<=0)return n.copy(i);Nu.subVectors(e,s);const u=$r.dot(Nu),f=Xr.dot(Nu);if(u>=0&&f<=u)return n.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector($r,o);Ou.subVectors(e,r);const p=$r.dot(Ou),m=Xr.dot(Ou);if(m>=0&&p<=m)return n.copy(r);const g=p*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(Xr,a);const _=u*m-p*f;if(_<=0&&f-u>=0&&p-m>=0)return Pm.subVectors(r,s),a=(f-u)/(f-u+(p-m)),n.copy(s).addScaledVector(Pm,a);const h=1/(_+g+d);return o=g*h,a=d*h,n.copy(i).addScaledVector($r,o).addScaledVector(Xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const g0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},hl={h:0,s:0,l:0};function zu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=gt.workingColorSpace){if(e=ph(e,1),n=lt(n,0,1),i=lt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=zu(o,r,e+1/3),this.g=zu(o,r,e),this.b=zu(o,r,e-1/3)}return gt.toWorkingColorSpace(this,s),this}setStyle(e,n=qn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const i=g0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return gt.fromWorkingColorSpace(ln.copy(this),e),Math.round(lt(ln.r*255,0,255))*65536+Math.round(lt(ln.g*255,0,255))*256+Math.round(lt(ln.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.fromWorkingColorSpace(ln.copy(this),n);const i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=gt.workingColorSpace){return gt.fromWorkingColorSpace(ln.copy(this),n),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=qn){gt.fromWorkingColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,s=ln.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(_s),this.setHSL(_s.h+e,_s.s+n,_s.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(_s),e.getHSL(hl);const i=ga(_s.h,hl.h,n),s=ga(_s.s,hl.s,n),r=ga(_s.l,hl.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new st;st.NAMES=g0;let JC=0;class Fs extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JC++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=go,this.side=Ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pf,this.blendDst=Df,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(i.blending=this.blending),this.side!==Ds&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pf&&(i.blendSrc=this.blendSrc),this.blendDst!==Df&&(i.blendDst=this.blendDst),this.blendEquation!==nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yc extends Fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=e0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new X,pl=new Ve;let QC=0;class pi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QC++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=pd,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)pl.fromBufferAttribute(this,n),pl.applyMatrix3(e),this.setXY(n,pl.x,pl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ui(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ui(n,this.array)),n}setX(e,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ui(n,this.array)),n}setY(e,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ui(n,this.array)),n}setZ(e,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ui(n,this.array)),n}setW(e,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pd&&(e.usage=this.usage),e}}class _0 extends pi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class v0 extends pi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $t extends pi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let eR=0;const Xn=new Ct,Hu=new Wt,jr=new X,Un=new Os,Ko=new Os,Yt=new X;class Sn extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eR++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p0(e)?v0:_0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ot().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,i){return Xn.makeTranslation(e,n,i),this.applyMatrix4(Xn),this}scale(e,n,i){return Xn.makeScale(e,n,i),this.applyMatrix4(Xn),this}lookAt(e){return Hu.lookAt(e),Hu.updateMatrix(),this.applyMatrix4(Hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Ko.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Un.min,Ko.min),Un.expandByPoint(Yt),Yt.addVectors(Un.max,Ko.max),Un.expandByPoint(Yt)):(Un.expandByPoint(Ko.min),Un.expandByPoint(Ko.max))}Un.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(jr.fromBufferAttribute(e,c),Yt.add(jr)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new X,l[L]=new X;const c=new X,u=new X,f=new X,d=new Ve,p=new Ve,m=new Ve,g=new X,_=new X;function h(L,b,S){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,S),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,S),u.sub(c),f.sub(c),p.sub(d),m.sub(d);const I=1/(p.x*m.y-m.x*p.y);isFinite(I)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(I),_.copy(f).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(I),a[L].add(g),a[b].add(g),a[S].add(g),l[L].add(_),l[b].add(_),l[S].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,b=x.length;L<b;++L){const S=x[L],I=S.start,C=S.count;for(let N=I,K=I+C;N<K;N+=3)h(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const y=new X,v=new X,P=new X,D=new X;function A(L){P.fromBufferAttribute(s,L),D.copy(P);const b=a[L];y.copy(b),y.sub(P.multiplyScalar(P.dot(b))).normalize(),v.crossVectors(D,b);const I=v.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,I)}for(let L=0,b=x.length;L<b;++L){const S=x[L],I=S.start,C=S.count;for(let N=I,K=I+C;N<K;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new X,r=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),g=e.getX(d+1),_=e.getX(d+2);s.fromBufferAttribute(n,m),r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,_),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Yt.fromBufferAttribute(e,n),Yt.normalize(),e.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,m=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let h=0;h<u;h++)d[m++]=c[p++]}return new pi(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Sn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dm=new Ct,js=new jc,ml=new Oo,Im=new X,gl=new X,_l=new X,vl=new X,Vu=new X,yl=new X,Lm=new X,xl=new X;class An extends Wt{constructor(e=new Sn,n=new Yc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){yl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Vu.fromBufferAttribute(f,e),o?yl.addScaledVector(Vu,u):yl.addScaledVector(Vu.sub(n),u))}n.add(yl)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(r),js.copy(e.ray).recast(e.near),!(ml.containsPoint(js.origin)===!1&&(js.intersectSphere(ml,Im)===null||js.origin.distanceToSquared(Im)>(e.far-e.near)**2))&&(Dm.copy(r).invert(),js.copy(e.ray).applyMatrix4(Dm),!(i.boundingBox!==null&&js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,js)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){const _=d[m],h=o[_.materialIndex],x=Math.max(_.start,p.start),y=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let v=x,P=y;v<P;v+=3){const D=a.getX(v),A=a.getX(v+1),L=a.getX(v+2);s=bl(this,h,e,i,c,u,f,D,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,n.push(s))}}else{const m=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let _=m,h=g;_<h;_+=3){const x=a.getX(_),y=a.getX(_+1),v=a.getX(_+2);s=bl(this,o,e,i,c,u,f,x,y,v),s&&(s.faceIndex=Math.floor(_/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){const _=d[m],h=o[_.materialIndex],x=Math.max(_.start,p.start),y=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let v=x,P=y;v<P;v+=3){const D=v,A=v+1,L=v+2;s=bl(this,h,e,i,c,u,f,D,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,n.push(s))}}else{const m=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let _=m,h=g;_<h;_+=3){const x=_,y=_+1,v=_+2;s=bl(this,o,e,i,c,u,f,x,y,v),s&&(s.faceIndex=Math.floor(_/3),n.push(s))}}}}function tR(t,e,n,i,s,r,o,a){let l;if(e.side===Pn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ds,a),l===null)return null;xl.copy(a),xl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(xl);return c<n.near||c>n.far?null:{distance:c,point:xl.clone(),object:t}}function bl(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,gl),t.getVertexPosition(l,_l),t.getVertexPosition(c,vl);const u=tR(t,e,n,i,gl,_l,vl,Lm);if(u){const f=new X;On.getBarycoord(Lm,gl,_l,vl,f),s&&(u.uv=On.getInterpolatedAttribute(s,a,l,c,f,new Ve)),r&&(u.uv1=On.getInterpolatedAttribute(r,a,l,c,f,new Ve)),o&&(u.normal=On.getInterpolatedAttribute(o,a,l,c,f,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new X,materialIndex:0};On.getNormal(gl,_l,vl,d.normal),u.face=d,u.barycoord=f}return u}class Er extends Sn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;m("z","y","x",-1,-1,i,n,e,o,r,0),m("z","y","x",1,-1,i,n,-e,o,r,1),m("x","z","y",1,1,e,i,n,s,o,2),m("x","z","y",1,-1,e,i,-n,s,o,3),m("x","y","z",1,-1,e,n,i,s,r,4),m("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(f,2));function m(g,_,h,x,y,v,P,D,A,L,b){const S=v/A,I=P/L,C=v/2,N=P/2,K=D/2,Q=A+1,j=L+1;let V=0,Y=0;const me=new X;for(let we=0;we<j;we++){const Le=we*I-N;for(let Fe=0;Fe<Q;Fe++){const Qe=Fe*S-C;me[g]=Qe*x,me[_]=Le*y,me[h]=K,c.push(me.x,me.y,me.z),me[g]=0,me[_]=0,me[h]=D>0?1:-1,u.push(me.x,me.y,me.z),f.push(Fe/A),f.push(1-we/L),V+=1}}for(let we=0;we<L;we++)for(let Le=0;Le<A;Le++){const Fe=d+Le+Q*we,Qe=d+Le+Q*(we+1),ce=d+(Le+1)+Q*(we+1),_e=d+(Le+1)+Q*we;l.push(Fe,Qe,_e),l.push(Qe,ce,_e),Y+=6}a.addGroup(p,Y,b),p+=Y,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Do(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function _n(t){const e={};for(let n=0;n<t.length;n++){const i=Do(t[n]);for(const s in i)e[s]=i[s]}return e}function nR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function y0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const _h={clone:Do,merge:_n};var iR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ls extends Fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iR,this.fragmentShader=sR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=nR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class x0 extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vs=new X,Um=new Ve,Nm=new Ve;class Kn extends x0{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Oa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,n){return this.getViewBounds(e,Um,Nm),n.subVectors(Nm,Um)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_o*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,qr=1;class rR extends Wt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kn(Yr,qr,e,n);s.layers=this.layers,this.add(s);const r=new Kn(Yr,qr,e,n);r.layers=this.layers,this.add(r);const o=new Kn(Yr,qr,e,n);o.layers=this.layers,this.add(o);const a=new Kn(Yr,qr,e,n);a.layers=this.layers,this.add(a);const l=new Kn(Yr,qr,e,n);l.layers=this.layers,this.add(l);const c=new Kn(Yr,qr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class b0 extends bn{constructor(e=[],n=Co,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oR extends Sr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new b0(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ci}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Er(5,5,5),r=new ls({name:"CubemapFromEquirect",uniforms:Do(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:Rs});r.uniforms.tEquirect.value=n;const o=new An(s,r),a=n.minFilter;return n.minFilter===cr&&(n.minFilter=Ci),new rR(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}class oo extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aR={type:"move"};class Gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const _=n.getJointPose(g,i),h=this._getHandJoint(c,g);_!==null&&(h.matrix.fromArray(_.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=_.radius),h.visible=_!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aR)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new oo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class lR extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class S0{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=pd,this.updateRanges=[],this.version=0,this.uuid=Qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=n.array[i+s];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mn=new X;class Ri{constructor(e,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix4(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.applyNormalMatrix(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.transformDirection(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ui(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=bt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ui(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ui(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ui(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ui(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=bt(n,this.array),i=bt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new pi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ri(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class M0 extends Fs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Kr;const Zo=new X,Zr=new X,Jr=new X,Qr=new Ve,Jo=new Ve,E0=new Ct,Sl=new X,Qo=new X,Ml=new X,Om=new Ve,Wu=new Ve,Fm=new Ve;class cR extends Wt{constructor(e=new M0){if(super(),this.isSprite=!0,this.type="Sprite",Kr===void 0){Kr=new Sn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new S0(n,5);Kr.setIndex([0,1,2,0,2,3]),Kr.setAttribute("position",new Ri(i,3,0,!1)),Kr.setAttribute("uv",new Ri(i,2,3,!1))}this.geometry=Kr,this.material=e,this.center=new Ve(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zr.setFromMatrixScale(this.matrixWorld),E0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Jr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zr.multiplyScalar(-Jr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;El(Sl.set(-.5,-.5,0),Jr,o,Zr,s,r),El(Qo.set(.5,-.5,0),Jr,o,Zr,s,r),El(Ml.set(.5,.5,0),Jr,o,Zr,s,r),Om.set(0,0),Wu.set(1,0),Fm.set(1,1);let a=e.ray.intersectTriangle(Sl,Qo,Ml,!1,Zo);if(a===null&&(El(Qo.set(-.5,.5,0),Jr,o,Zr,s,r),Wu.set(0,1),a=e.ray.intersectTriangle(Sl,Ml,Qo,!1,Zo),a===null))return;const l=e.ray.origin.distanceTo(Zo);l<e.near||l>e.far||n.push({distance:l,point:Zo.clone(),uv:On.getInterpolation(Zo,Sl,Qo,Ml,Om,Wu,Fm,new Ve),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function El(t,e,n,i,s,r){Qr.subVectors(t,n).addScalar(.5).multiply(i),s!==void 0?(Jo.x=r*Qr.x-s*Qr.y,Jo.y=s*Qr.x+r*Qr.y):Jo.copy(Qr),t.copy(e),t.x+=Jo.x,t.y+=Jo.y,t.applyMatrix4(E0)}const $u=new X,uR=new X,fR=new ot;class Ts{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=$u.subVectors(i,n).cross(uR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta($u),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||fR.getNormalMatrix(e),s=this.coplanarPoint($u).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ys=new Oo,Tl=new X;class vh{constructor(e=new Ts,n=new Ts,i=new Ts,s=new Ts,r=new Ts,o=new Ts){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ki){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],p=s[8],m=s[9],g=s[10],_=s[11],h=s[12],x=s[13],y=s[14],v=s[15];if(i[0].setComponents(l-r,d-c,_-p,v-h).normalize(),i[1].setComponents(l+r,d+c,_+p,v+h).normalize(),i[2].setComponents(l+o,d+u,_+m,v+x).normalize(),i[3].setComponents(l-o,d-u,_-m,v-x).normalize(),i[4].setComponents(l-a,d-f,_-g,v-y).normalize(),n===Ki)i[5].setComponents(l+a,d+f,_+g,v+y).normalize();else if(n===vc)i[5].setComponents(a,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){return Ys.center.set(0,0,0),Ys.radius=.7071067811865476,Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Tl.x=s.normal.x>0?e.max.x:e.min.x,Tl.y=s.normal.y>0?e.max.y:e.min.y,Tl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qc extends Fs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xc=new X,bc=new X,Bm=new Ct,ea=new jc,wl=new Oo,Xu=new X,km=new X;class T0 extends Wt{constructor(e=new Sn,n=new qc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)xc.fromBufferAttribute(n,s-1),bc.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=xc.distanceTo(bc);e.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(s),wl.radius+=r,e.ray.intersectsSphere(wl)===!1)return;Bm.copy(s).invert(),ea.copy(e.ray).applyMatrix4(Bm);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=p,_=m-1;g<_;g+=c){const h=u.getX(g),x=u.getX(g+1),y=Al(this,e,ea,l,h,x,g);y&&n.push(y)}if(this.isLineLoop){const g=u.getX(m-1),_=u.getX(p),h=Al(this,e,ea,l,g,_,m-1);h&&n.push(h)}}else{const p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=p,_=m-1;g<_;g+=c){const h=Al(this,e,ea,l,g,g+1,g);h&&n.push(h)}if(this.isLineLoop){const g=Al(this,e,ea,l,m-1,p,m-1);g&&n.push(g)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Al(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(xc.fromBufferAttribute(a,s),bc.fromBufferAttribute(a,r),n.distanceSqToSegment(xc,bc,Xu,km)>i)return;Xu.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Xu);if(!(c<e.near||c>e.far))return{distance:c,point:km.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const zm=new X,Hm=new X;class w0 extends T0{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)zm.fromBufferAttribute(n,s),Hm.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+zm.distanceTo(Hm);e.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vm extends bn{constructor(e,n,i,s,r,o,a,l,c){super(e,n,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class A0 extends bn{constructor(e,n,i=br,s,r,o,a=hi,l=hi,c,u=Ua){if(u!==Ua&&u!==Na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class yh extends Sn{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],p=[];let m=0;const g=[],_=i/2;let h=0;x(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new $t(f,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(p,2));function x(){const v=new X,P=new X;let D=0;const A=(n-e)/i;for(let L=0;L<=r;L++){const b=[],S=L/r,I=S*(n-e)+e;for(let C=0;C<=s;C++){const N=C/s,K=N*l+a,Q=Math.sin(K),j=Math.cos(K);P.x=I*Q,P.y=-S*i+_,P.z=I*j,f.push(P.x,P.y,P.z),v.set(Q,A,j).normalize(),d.push(v.x,v.y,v.z),p.push(N,1-S),b.push(m++)}g.push(b)}for(let L=0;L<s;L++)for(let b=0;b<r;b++){const S=g[b][L],I=g[b+1][L],C=g[b+1][L+1],N=g[b][L+1];(e>0||b!==0)&&(u.push(S,I,N),D+=3),(n>0||b!==r-1)&&(u.push(I,C,N),D+=3)}c.addGroup(h,D,0),h+=D}function y(v){const P=m,D=new Ve,A=new X;let L=0;const b=v===!0?e:n,S=v===!0?1:-1;for(let C=1;C<=s;C++)f.push(0,_*S,0),d.push(0,S,0),p.push(.5,.5),m++;const I=m;for(let C=0;C<=s;C++){const K=C/s*l+a,Q=Math.cos(K),j=Math.sin(K);A.x=b*j,A.y=_*S,A.z=b*Q,f.push(A.x,A.y,A.z),d.push(0,S,0),D.x=Q*.5+.5,D.y=j*.5*S+.5,p.push(D.x,D.y),m++}for(let C=0;C<s;C++){const N=P+C,K=I+C;v===!0?u.push(K,K+1,N):u.push(K+1,K,N),L+=3}c.addGroup(h,L,v===!0?1:2),h+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Cl=new X,Rl=new X,ju=new X,Pl=new On;class Gm extends Sn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const s=Math.pow(10,4),r=Math.cos(_o*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:g,b:_,c:h}=Pl;if(g.fromBufferAttribute(a,c[0]),_.fromBufferAttribute(a,c[1]),h.fromBufferAttribute(a,c[2]),Pl.getNormal(ju),f[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,f[1]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,f[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const y=(x+1)%3,v=f[x],P=f[y],D=Pl[u[x]],A=Pl[u[y]],L=`${v}_${P}`,b=`${P}_${v}`;b in d&&d[b]?(ju.dot(d[b].normal)<=r&&(p.push(D.x,D.y,D.z),p.push(A.x,A.y,A.z)),d[b]=null):L in d||(d[L]={index0:c[x],index1:c[y],normal:ju.clone()})}}for(const m in d)if(d[m]){const{index0:g,index1:_}=d[m];Cl.fromBufferAttribute(a,g),Rl.fromBufferAttribute(a,_),p.push(Cl.x,Cl.y,Cl.z),p.push(Rl.x,Rl.y,Rl.z)}this.setAttribute("position",new $t(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class $a extends Sn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=n/l,p=[],m=[],g=[],_=[];for(let h=0;h<u;h++){const x=h*d-o;for(let y=0;y<c;y++){const v=y*f-r;m.push(v,-x,0),g.push(0,0,1),_.push(y/a),_.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const y=x+c*h,v=x+c*(h+1),P=x+1+c*(h+1),D=x+1+c*h;p.push(y,v,D),p.push(v,P,D)}this.setIndex(p),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(g,3)),this.setAttribute("uv",new $t(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.widthSegments,e.heightSegments)}}class dR extends Sn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,s=new X,r=new X;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],d=f.start,p=f.count;for(let m=d,g=d+p;m<g;m+=3)for(let _=0;_<3;_++){const h=a.getX(m+_),x=a.getX(m+(_+1)%3);s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,x),Wm(s,r,i)===!0&&(n.push(s.x,s.y,s.z),n.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,f=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,f),Wm(s,r,i)===!0&&(n.push(s.x,s.y,s.z),n.push(r.x,r.y,r.z))}}this.setAttribute("position",new $t(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Wm(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(s)===!0?!1:(n.add(i),n.add(s),!0)}class hR extends Fs{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new st(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class pR extends Fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=d0,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mR extends pR{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new st(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new st(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new st(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class gR extends Fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _R extends Fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class C0 extends Wt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Yu=new Ct,$m=new X,Xm=new X;class vR{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vh,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;$m.setFromMatrixPosition(e.matrixWorld),n.position.copy($m),Xm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Xm),n.updateMatrixWorld(),Yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class R0 extends x0{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class yR extends vR{constructor(){super(new R0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qu extends C0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new yR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xR extends C0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class bR extends Sn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class SR extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class md extends S0{constructor(e,n,i=1){super(e,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const n=super.clone(e);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(e){const n=super.toJSON(e);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}const jm=new Ct;class MR{constructor(e,n,i=0,s=1/0){this.ray=new jc(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new gh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return jm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jm),this}intersectObject(e,n=!0,i=[]){return gd(e,this,i,n),i.sort(Ym),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)gd(e[s],this,i,n);return i.sort(Ym),i}}function Ym(t,e){return t.distance-e.distance}function gd(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){const r=t.children;for(let o=0,a=r.length;o<a;o++)gd(r[o],e,n,!0)}}class qm{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=lt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(lt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Km=new X,Dl=new X;class ER{constructor(e=new X,n=new X){this.start=e,this.end=n}set(e,n){return this.start.copy(e),this.end.copy(n),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){Km.subVectors(e,this.start),Dl.subVectors(this.end,this.start);const i=Dl.dot(Dl);let r=Dl.dot(Km)/i;return n&&(r=lt(r,0,1)),r}closestPointToPoint(e,n,i){const s=this.closestPointToPointParameter(e,n);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class TR extends w0{constructor(e=10,n=10,i=4473924,s=8947848){i=new st(i),s=new st(s);const r=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,p=0,m=-a;d<=n;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const g=d===r?i:s;g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3}const u=new Sn;u.setAttribute("position",new $t(l,3)),u.setAttribute("color",new $t(c,3));const f=new qc({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Zm=new X;let Il,Ku;class wR extends Wt{constructor(e=new X(0,0,1),n=new X(0,0,0),i=1,s=16776960,r=i*.2,o=r*.2){super(),this.type="ArrowHelper",Il===void 0&&(Il=new Sn,Il.setAttribute("position",new $t([0,0,0,0,1,0],3)),Ku=new yh(0,.5,1,5,1),Ku.translate(0,-.5,0)),this.position.copy(n),this.line=new T0(Il,new qc({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new An(Ku,new Yc({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Zm.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(Zm,n)}}setLength(e,n=e*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class AR extends Ar{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Jm(t,e,n,i){const s=CR(i);switch(n){case r0:return t*e;case a0:return t*e;case l0:return t*e*2;case c0:return t*e/s.components*s.byteLength;case fh:return t*e/s.components*s.byteLength;case u0:return t*e*2/s.components*s.byteLength;case dh:return t*e*2/s.components*s.byteLength;case o0:return t*e*3/s.components*s.byteLength;case fi:return t*e*4/s.components*s.byteLength;case hh:return t*e*4/s.components*s.byteLength;case Xl:case jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yl:case ql:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gf:case $f:return Math.max(t,16)*Math.max(e,8)/4;case Vf:case Wf:return Math.max(t,8)*Math.max(e,8)/2;case Xf:case jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Zf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ed:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case td:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case nd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case id:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case sd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case rd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case od:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ad:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ld:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Kl:case cd:case ud:return Math.ceil(t/4)*Math.ceil(e/4)*16;case f0:case fd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case dd:case hd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function CR(t){switch(t){case as:case n0:return{byteLength:1,components:1};case Ia:case i0:case Wa:return{byteLength:2,components:1};case ch:case uh:return{byteLength:2,components:4};case br:case lh:case qi:return{byteLength:4,components:1};case s0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function P0(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function RR(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<f.length;p++){const m=f[d],g=f[p];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,f[d]=g)}f.length=d+1;for(let p=0,m=f.length;p<m;p++){const g=f[p];t.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var PR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DR=`#ifdef USE_ALPHAHASH
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
#endif`,IR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OR=`#ifdef USE_AOMAP
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
#endif`,FR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BR=`#ifdef USE_BATCHING
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
#endif`,kR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GR=`#ifdef USE_IRIDESCENCE
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
#endif`,WR=`#ifdef USE_BUMPMAP
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
#endif`,$R=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,QR=`#define PI 3.141592653589793
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
} // validated`,e2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,t2=`vec3 transformedNormal = objectNormal;
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
#endif`,n2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o2="gl_FragColor = linearToOutputTexel( gl_FragColor );",a2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l2=`#ifdef USE_ENVMAP
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
#endif`,c2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u2=`#ifdef USE_ENVMAP
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
#endif`,f2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d2=`#ifdef USE_ENVMAP
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
#endif`,h2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_2=`#ifdef USE_GRADIENTMAP
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
}`,v2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b2=`uniform bool receiveShadow;
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
#endif`,S2=`#ifdef USE_ENVMAP
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
#endif`,M2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A2=`PhysicalMaterial material;
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
#endif`,C2=`struct PhysicalMaterial {
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
}`,R2=`
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
#endif`,P2=`#if defined( RE_IndirectDiffuse )
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
#endif`,D2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k2=`#if defined( USE_POINTS_UV )
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
#endif`,z2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$2=`#ifdef USE_MORPHTARGETS
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
#endif`,X2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,q2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J2=`#ifdef USE_NORMALMAP
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
#endif`,Q2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pP=`float getShadowMask() {
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
}`,mP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gP=`#ifdef USE_SKINNING
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
#endif`,_P=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vP=`#ifdef USE_SKINNING
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
#endif`,yP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,MP=`#ifdef USE_TRANSMISSION
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
#endif`,EP=`#ifdef USE_TRANSMISSION
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
#endif`,TP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PP=`uniform sampler2D t2D;
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
}`,DP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IP=`#ifdef ENVMAP_TYPE_CUBE
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
}`,LP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NP=`#include <common>
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
}`,OP=`#if DEPTH_PACKING == 3200
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
}`,FP=`#define DISTANCE
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
}`,BP=`#define DISTANCE
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
}`,kP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HP=`uniform float scale;
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
}`,VP=`uniform vec3 diffuse;
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
}`,GP=`#include <common>
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
}`,WP=`uniform vec3 diffuse;
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
}`,$P=`#define LAMBERT
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
}`,XP=`#define LAMBERT
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
}`,jP=`#define MATCAP
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
}`,YP=`#define MATCAP
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
}`,qP=`#define NORMAL
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
}`,KP=`#define NORMAL
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
}`,ZP=`#define PHONG
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
}`,JP=`#define PHONG
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
}`,QP=`#define STANDARD
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
}`,eD=`#define STANDARD
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
}`,tD=`#define TOON
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
}`,nD=`#define TOON
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
}`,iD=`uniform float size;
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
}`,sD=`uniform vec3 diffuse;
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
}`,rD=`#include <common>
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
}`,oD=`uniform vec3 color;
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
}`,aD=`uniform float rotation;
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
}`,lD=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:PR,alphahash_pars_fragment:DR,alphamap_fragment:IR,alphamap_pars_fragment:LR,alphatest_fragment:UR,alphatest_pars_fragment:NR,aomap_fragment:OR,aomap_pars_fragment:FR,batching_pars_vertex:BR,batching_vertex:kR,begin_vertex:zR,beginnormal_vertex:HR,bsdfs:VR,iridescence_fragment:GR,bumpmap_pars_fragment:WR,clipping_planes_fragment:$R,clipping_planes_pars_fragment:XR,clipping_planes_pars_vertex:jR,clipping_planes_vertex:YR,color_fragment:qR,color_pars_fragment:KR,color_pars_vertex:ZR,color_vertex:JR,common:QR,cube_uv_reflection_fragment:e2,defaultnormal_vertex:t2,displacementmap_pars_vertex:n2,displacementmap_vertex:i2,emissivemap_fragment:s2,emissivemap_pars_fragment:r2,colorspace_fragment:o2,colorspace_pars_fragment:a2,envmap_fragment:l2,envmap_common_pars_fragment:c2,envmap_pars_fragment:u2,envmap_pars_vertex:f2,envmap_physical_pars_fragment:S2,envmap_vertex:d2,fog_vertex:h2,fog_pars_vertex:p2,fog_fragment:m2,fog_pars_fragment:g2,gradientmap_pars_fragment:_2,lightmap_pars_fragment:v2,lights_lambert_fragment:y2,lights_lambert_pars_fragment:x2,lights_pars_begin:b2,lights_toon_fragment:M2,lights_toon_pars_fragment:E2,lights_phong_fragment:T2,lights_phong_pars_fragment:w2,lights_physical_fragment:A2,lights_physical_pars_fragment:C2,lights_fragment_begin:R2,lights_fragment_maps:P2,lights_fragment_end:D2,logdepthbuf_fragment:I2,logdepthbuf_pars_fragment:L2,logdepthbuf_pars_vertex:U2,logdepthbuf_vertex:N2,map_fragment:O2,map_pars_fragment:F2,map_particle_fragment:B2,map_particle_pars_fragment:k2,metalnessmap_fragment:z2,metalnessmap_pars_fragment:H2,morphinstance_vertex:V2,morphcolor_vertex:G2,morphnormal_vertex:W2,morphtarget_pars_vertex:$2,morphtarget_vertex:X2,normal_fragment_begin:j2,normal_fragment_maps:Y2,normal_pars_fragment:q2,normal_pars_vertex:K2,normal_vertex:Z2,normalmap_pars_fragment:J2,clearcoat_normal_fragment_begin:Q2,clearcoat_normal_fragment_maps:eP,clearcoat_pars_fragment:tP,iridescence_pars_fragment:nP,opaque_fragment:iP,packing:sP,premultiplied_alpha_fragment:rP,project_vertex:oP,dithering_fragment:aP,dithering_pars_fragment:lP,roughnessmap_fragment:cP,roughnessmap_pars_fragment:uP,shadowmap_pars_fragment:fP,shadowmap_pars_vertex:dP,shadowmap_vertex:hP,shadowmask_pars_fragment:pP,skinbase_vertex:mP,skinning_pars_vertex:gP,skinning_vertex:_P,skinnormal_vertex:vP,specularmap_fragment:yP,specularmap_pars_fragment:xP,tonemapping_fragment:bP,tonemapping_pars_fragment:SP,transmission_fragment:MP,transmission_pars_fragment:EP,uv_pars_fragment:TP,uv_pars_vertex:wP,uv_vertex:AP,worldpos_vertex:CP,background_vert:RP,background_frag:PP,backgroundCube_vert:DP,backgroundCube_frag:IP,cube_vert:LP,cube_frag:UP,depth_vert:NP,depth_frag:OP,distanceRGBA_vert:FP,distanceRGBA_frag:BP,equirect_vert:kP,equirect_frag:zP,linedashed_vert:HP,linedashed_frag:VP,meshbasic_vert:GP,meshbasic_frag:WP,meshlambert_vert:$P,meshlambert_frag:XP,meshmatcap_vert:jP,meshmatcap_frag:YP,meshnormal_vert:qP,meshnormal_frag:KP,meshphong_vert:ZP,meshphong_frag:JP,meshphysical_vert:QP,meshphysical_frag:eD,meshtoon_vert:tD,meshtoon_frag:nD,points_vert:iD,points_frag:sD,shadow_vert:rD,shadow_frag:oD,sprite_vert:aD,sprite_frag:lD},Ce={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Tn={basic:{uniforms:_n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:_n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:_n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:_n([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:_n([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:_n([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:_n([Ce.points,Ce.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:_n([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:_n([Ce.common,Ce.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:_n([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:_n([Ce.sprite,Ce.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:_n([Ce.common,Ce.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:_n([Ce.lights,Ce.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Tn.physical={uniforms:_n([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Ll={r:0,b:0,g:0},qs=new Ii,cD=new Ct;function uD(t,e,n,i,s,r,o){const a=new st(0);let l=r===!0?0:1,c,u,f=null,d=0,p=null;function m(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?n:e).get(v)),v}function g(y){let v=!1;const P=m(y);P===null?h(a,l):P&&P.isColor&&(h(P,1),v=!0);const D=t.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(y,v){const P=m(v);P&&(P.isCubeTexture||P.mapping===Xc)?(u===void 0&&(u=new An(new Er(1,1,1),new ls({name:"BackgroundCubeMaterial",uniforms:Do(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),qs.copy(v.backgroundRotation),qs.x*=-1,qs.y*=-1,qs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cD.makeRotationFromEuler(qs)),u.material.toneMapped=gt.getTransfer(P.colorSpace)!==St,(f!==P||d!==P.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=P,d=P.version,p=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new An(new $a(2,2),new ls({name:"BackgroundMaterial",uniforms:Do(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=gt.getTransfer(P.colorSpace)!==St,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||d!==P.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=P,d=P.version,p=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,v){y.getRGB(Ll,y0(t)),i.buffers.color.setClear(Ll.r,Ll.g,Ll.b,v,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(a,l)},render:g,addToRenderList:_,dispose:x}}function fD(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(S,I,C,N,K){let Q=!1;const j=f(N,C,I);r!==j&&(r=j,c(r.object)),Q=p(S,N,C,K),Q&&m(S,N,C,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,v(S,I,C,N),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function f(S,I,C){const N=C.wireframe===!0;let K=i[S.id];K===void 0&&(K={},i[S.id]=K);let Q=K[I.id];Q===void 0&&(Q={},K[I.id]=Q);let j=Q[N];return j===void 0&&(j=d(l()),Q[N]=j),j}function d(S){const I=[],C=[],N=[];for(let K=0;K<n;K++)I[K]=0,C[K]=0,N[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:C,attributeDivisors:N,object:S,attributes:{},index:null}}function p(S,I,C,N){const K=r.attributes,Q=I.attributes;let j=0;const V=C.getAttributes();for(const Y in V)if(V[Y].location>=0){const we=K[Y];let Le=Q[Y];if(Le===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(Le=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(Le=S.instanceColor)),we===void 0||we.attribute!==Le||Le&&we.data!==Le.data)return!0;j++}return r.attributesNum!==j||r.index!==N}function m(S,I,C,N){const K={},Q=I.attributes;let j=0;const V=C.getAttributes();for(const Y in V)if(V[Y].location>=0){let we=Q[Y];we===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(we=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(we=S.instanceColor));const Le={};Le.attribute=we,we&&we.data&&(Le.data=we.data),K[Y]=Le,j++}r.attributes=K,r.attributesNum=j,r.index=N}function g(){const S=r.newAttributes;for(let I=0,C=S.length;I<C;I++)S[I]=0}function _(S){h(S,0)}function h(S,I){const C=r.newAttributes,N=r.enabledAttributes,K=r.attributeDivisors;C[S]=1,N[S]===0&&(t.enableVertexAttribArray(S),N[S]=1),K[S]!==I&&(t.vertexAttribDivisor(S,I),K[S]=I)}function x(){const S=r.newAttributes,I=r.enabledAttributes;for(let C=0,N=I.length;C<N;C++)I[C]!==S[C]&&(t.disableVertexAttribArray(C),I[C]=0)}function y(S,I,C,N,K,Q,j){j===!0?t.vertexAttribIPointer(S,I,C,K,Q):t.vertexAttribPointer(S,I,C,N,K,Q)}function v(S,I,C,N){g();const K=N.attributes,Q=C.getAttributes(),j=I.defaultAttributeValues;for(const V in Q){const Y=Q[V];if(Y.location>=0){let me=K[V];if(me===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(me=S.instanceColor)),me!==void 0){const we=me.normalized,Le=me.itemSize,Fe=e.get(me);if(Fe===void 0)continue;const Qe=Fe.buffer,ce=Fe.type,_e=Fe.bytesPerElement,Re=ce===t.INT||ce===t.UNSIGNED_INT||me.gpuType===lh;if(me.isInterleavedBufferAttribute){const Te=me.data,Ue=Te.stride,it=me.offset;if(Te.isInstancedInterleavedBuffer){for(let ye=0;ye<Y.locationSize;ye++)h(Y.location+ye,Te.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let ye=0;ye<Y.locationSize;ye++)_(Y.location+ye);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let ye=0;ye<Y.locationSize;ye++)y(Y.location+ye,Le/Y.locationSize,ce,we,Ue*_e,(it+Le/Y.locationSize*ye)*_e,Re)}else{if(me.isInstancedBufferAttribute){for(let Te=0;Te<Y.locationSize;Te++)h(Y.location+Te,me.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Te=0;Te<Y.locationSize;Te++)_(Y.location+Te);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let Te=0;Te<Y.locationSize;Te++)y(Y.location+Te,Le/Y.locationSize,ce,we,Le*_e,Le/Y.locationSize*Te*_e,Re)}}else if(j!==void 0){const we=j[V];if(we!==void 0)switch(we.length){case 2:t.vertexAttrib2fv(Y.location,we);break;case 3:t.vertexAttrib3fv(Y.location,we);break;case 4:t.vertexAttrib4fv(Y.location,we);break;default:t.vertexAttrib1fv(Y.location,we)}}}}x()}function P(){L();for(const S in i){const I=i[S];for(const C in I){const N=I[C];for(const K in N)u(N[K].object),delete N[K];delete I[C]}delete i[S]}}function D(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const C in I){const N=I[C];for(const K in N)u(N[K].object),delete N[K];delete I[C]}delete i[S.id]}function A(S){for(const I in i){const C=i[I];if(C[S.id]===void 0)continue;const N=C[S.id];for(const K in N)u(N[K].object),delete N[K];delete C[S.id]}}function L(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:_,disableUnusedAttributes:x}}function dD(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let m=0;m<f;m++)p+=u[m];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],u[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g]*d[g];n.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hD(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==fi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===Wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==as&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==qi&&!L)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,D=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:h,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:P,maxSamples:D}}function pD(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Ts,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const m=f.clippingPlanes,g=f.clipIntersection,_=f.clipShadows,h=t.get(f);if(!s||m===null||m.length===0||r&&!_)r?u(null):c();else{const x=r?0:i,y=x*4;let v=h.clippingState||null;l.value=v,v=u(m,d,y,p);for(let P=0;P!==y;++P)v[P]=n[P];h.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,m){const g=f!==null?f.length:0;let _=null;if(g!==0){if(_=l.value,m!==!0||_===null){const h=p+g*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(_===null||_.length<h)&&(_=new Float32Array(h));for(let y=0,v=p;y!==g;++y,v+=4)o.copy(f[y]).applyMatrix4(x,a),o.normal.toArray(_,v),_[v+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function mD(t){let e=new WeakMap;function n(o,a){return a===kf?o.mapping=Co:a===zf&&(o.mapping=Ro),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kf||a===zf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new oR(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ao=4,Qm=[.125,.215,.35,.446,.526,.582],sr=20,Zu=new R0,eg=new st;let Ju=null,Qu=0,ef=0,tf=!1;const Js=(1+Math.sqrt(5))/2,eo=1/Js,tg=[new X(-Js,eo,0),new X(Js,eo,0),new X(-eo,0,Js),new X(eo,0,Js),new X(0,Js,-eo),new X(0,Js,eo),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],gD=new X;class ng{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=gD}=r;Ju=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju,Qu,ef),this._renderer.xr.enabled=tf,e.scissorTest=!1,Ul(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Co||e.mapping===Ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Wa,format:fi,colorSpace:Po,depthBuffer:!1},s=ig(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ig(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_D(r)),this._blurMaterial=vD(r,e,n)}return s}_compileMaterial(e){const n=new An(this._lodPlanes[0],e);this._renderer.compile(n,Zu)}_sceneToCubeUV(e,n,i,s,r){const l=new Kn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(eg),f.toneMapping=Ps,f.autoClear=!1;const m=new Yc({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),g=new An(new Er,m);let _=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,_=!0):(m.color.copy(eg),_=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[x]));const v=this._cubeSize;Ul(s,y*v,x>2?v:0,v,v),f.setRenderTarget(s),_&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Co||e.mapping===Ro;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sg());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ul(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Zu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=tg[(s-r-1)%tg.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new An(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*sr-1),g=r/m,_=isFinite(r)?1+Math.floor(u*g):sr;_>sr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${sr}`);const h=[];let x=0;for(let A=0;A<sr;++A){const L=A/g,b=Math.exp(-L*L/2);h.push(b),A===0?x+=b:A<_&&(x+=2*b)}for(let A=0;A<h.length;A++)h[A]=h[A]/x;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-i;const v=this._sizeLods[s],P=3*v*(s>y-ao?s-y+ao:0),D=4*(this._cubeSize-v);Ul(n,P,D,3*v,2*v),l.setRenderTarget(n),l.render(f,Zu)}}function _D(t){const e=[],n=[],i=[];let s=t;const r=t-ao+1+Qm.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-ao?l=Qm[o-t+ao-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,m=6,g=3,_=2,h=1,x=new Float32Array(g*m*p),y=new Float32Array(_*m*p),v=new Float32Array(h*m*p);for(let D=0;D<p;D++){const A=D%3*2/3-1,L=D>2?0:-1,b=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];x.set(b,g*m*D),y.set(d,_*m*D);const S=[D,D,D,D,D,D];v.set(S,h*m*D)}const P=new Sn;P.setAttribute("position",new pi(x,g)),P.setAttribute("uv",new pi(y,_)),P.setAttribute("faceIndex",new pi(v,h)),e.push(P),s>ao&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ig(t,e,n){const i=new Sr(t,e,n);return i.texture.mapping=Xc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ul(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function vD(t,e,n){const i=new Float32Array(sr),s=new X(0,1,0);return new ls({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xh(),fragmentShader:`

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
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function sg(){return new ls({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xh(),fragmentShader:`

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
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function rg(){return new ls({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function xh(){return`

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
	`}function yD(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kf||l===zf,u=l===Co||l===Ro;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new ng(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(n===null&&(n=new ng(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function xD(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Zl("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function bD(t,e,n,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,m=f.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let y=0,v=x.length;y<v;y+=3){const P=x[y+0],D=x[y+1],A=x[y+2];d.push(P,D,D,A,A,P)}}else if(m!==void 0){const x=m.array;g=m.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const P=y+0,D=y+1,A=y+2;d.push(P,D,D,A,A,P)}}else return;const _=new(p0(d)?v0:_0)(d,1);_.version=g;const h=r.get(f);h&&e.remove(h),r.set(f,_)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function SD(t,e,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,r,d*o),n.update(p,i,1)}function c(d,p,m){m!==0&&(t.drawElementsInstanced(i,p,r,d*o,m),n.update(p,i,m))}function u(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,m);let _=0;for(let h=0;h<m;h++)_+=p[h];n.update(_,i,1)}function f(d,p,m,g){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],g[h]);else{_.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,g,0,m);let h=0;for(let x=0;x<m;x++)h+=p[x]*g[x];n.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function MD(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function ED(t,e,n){const i=new WeakMap,s=new wt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let P=a.attributes.position.count*v,D=1;P>e.maxTextureSize&&(D=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*D*4*f),L=new m0(A,P,D,f);L.type=qi,L.needsUpdate=!0;const b=v*4;for(let I=0;I<f;I++){const C=h[I],N=x[I],K=y[I],Q=P*D*4*I;for(let j=0;j<C.count;j++){const V=j*b;m===!0&&(s.fromBufferAttribute(C,j),A[Q+V+0]=s.x,A[Q+V+1]=s.y,A[Q+V+2]=s.z,A[Q+V+3]=0),g===!0&&(s.fromBufferAttribute(N,j),A[Q+V+4]=s.x,A[Q+V+5]=s.y,A[Q+V+6]=s.z,A[Q+V+7]=0),_===!0&&(s.fromBufferAttribute(K,j),A[Q+V+8]=s.x,A[Q+V+9]=s.y,A[Q+V+10]=s.z,A[Q+V+11]=K.itemSize===4?s.w:1)}}d={count:f,texture:L,size:new Ve(P,D)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function TD(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const D0=new bn,og=new A0(1,1),I0=new m0,L0=new WC,U0=new b0,ag=[],lg=[],cg=new Float32Array(16),ug=new Float32Array(9),fg=new Float32Array(4);function Fo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=ag[s];if(r===void 0&&(r=new Float32Array(s),ag[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Kc(t,e){let n=lg[e];n===void 0&&(n=new Int32Array(e),lg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function wD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function AD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),jt(n,e)}}function CD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),jt(n,e)}}function RD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),jt(n,e)}}function PD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(n,e)}else{if(Xt(n,i))return;fg.set(i),t.uniformMatrix2fv(this.addr,!1,fg),jt(n,i)}}function DD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(n,e)}else{if(Xt(n,i))return;ug.set(i),t.uniformMatrix3fv(this.addr,!1,ug),jt(n,i)}}function ID(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(n,e)}else{if(Xt(n,i))return;cg.set(i),t.uniformMatrix4fv(this.addr,!1,cg),jt(n,i)}}function LD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function UD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),jt(n,e)}}function ND(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),jt(n,e)}}function OD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),jt(n,e)}}function FD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function BD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),jt(n,e)}}function kD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),jt(n,e)}}function zD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),jt(n,e)}}function HD(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(og.compareFunction=h0,r=og):r=D0,n.setTexture2D(e||r,s)}function VD(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||L0,s)}function GD(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||U0,s)}function WD(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||I0,s)}function $D(t){switch(t){case 5126:return wD;case 35664:return AD;case 35665:return CD;case 35666:return RD;case 35674:return PD;case 35675:return DD;case 35676:return ID;case 5124:case 35670:return LD;case 35667:case 35671:return UD;case 35668:case 35672:return ND;case 35669:case 35673:return OD;case 5125:return FD;case 36294:return BD;case 36295:return kD;case 36296:return zD;case 35678:case 36198:case 36298:case 36306:case 35682:return HD;case 35679:case 36299:case 36307:return VD;case 35680:case 36300:case 36308:case 36293:return GD;case 36289:case 36303:case 36311:case 36292:return WD}}function XD(t,e){t.uniform1fv(this.addr,e)}function jD(t,e){const n=Fo(e,this.size,2);t.uniform2fv(this.addr,n)}function YD(t,e){const n=Fo(e,this.size,3);t.uniform3fv(this.addr,n)}function qD(t,e){const n=Fo(e,this.size,4);t.uniform4fv(this.addr,n)}function KD(t,e){const n=Fo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ZD(t,e){const n=Fo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function JD(t,e){const n=Fo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function QD(t,e){t.uniform1iv(this.addr,e)}function eI(t,e){t.uniform2iv(this.addr,e)}function tI(t,e){t.uniform3iv(this.addr,e)}function nI(t,e){t.uniform4iv(this.addr,e)}function iI(t,e){t.uniform1uiv(this.addr,e)}function sI(t,e){t.uniform2uiv(this.addr,e)}function rI(t,e){t.uniform3uiv(this.addr,e)}function oI(t,e){t.uniform4uiv(this.addr,e)}function aI(t,e,n){const i=this.cache,s=e.length,r=Kc(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||D0,r[o])}function lI(t,e,n){const i=this.cache,s=e.length,r=Kc(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||L0,r[o])}function cI(t,e,n){const i=this.cache,s=e.length,r=Kc(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||U0,r[o])}function uI(t,e,n){const i=this.cache,s=e.length,r=Kc(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||I0,r[o])}function fI(t){switch(t){case 5126:return XD;case 35664:return jD;case 35665:return YD;case 35666:return qD;case 35674:return KD;case 35675:return ZD;case 35676:return JD;case 5124:case 35670:return QD;case 35667:case 35671:return eI;case 35668:case 35672:return tI;case 35669:case 35673:return nI;case 5125:return iI;case 36294:return sI;case 36295:return rI;case 36296:return oI;case 35678:case 36198:case 36298:case 36306:case 35682:return aI;case 35679:case 36299:case 36307:return lI;case 35680:case 36300:case 36308:case 36293:return cI;case 36289:case 36303:case 36311:case 36292:return uI}}class dI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$D(n.type)}}class hI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fI(n.type)}}class pI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const nf=/(\w+)(\])?(\[|\.)?/g;function dg(t,e){t.seq.push(e),t.map[e.id]=e}function mI(t,e,n){const i=t.name,s=i.length;for(nf.lastIndex=0;;){const r=nf.exec(i),o=nf.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){dg(n,c===void 0?new dI(a,t,e):new hI(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new pI(a),dg(n,f)),n=f}}}class Jl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);mI(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function hg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const gI=37297;let _I=0;function vI(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const pg=new ot;function yI(t){gt._getMatrix(pg,gt.workingColorSpace,t);const e=`mat3( ${pg.elements.map(n=>n.toFixed(4))} )`;switch(gt.getTransfer(t)){case _c:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function mg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+vI(t.getShaderSource(e),o)}else return s}function xI(t,e){const n=yI(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function bI(t,e){let n;switch(e){case tC:n="Linear";break;case nC:n="Reinhard";break;case iC:n="Cineon";break;case sC:n="ACESFilmic";break;case oC:n="AgX";break;case aC:n="Neutral";break;case rC:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Nl=new X;function SI(){gt.getLuminanceCoefficients(Nl);const t=Nl.x.toFixed(4),e=Nl.y.toFixed(4),n=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function EI(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function TI(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function sa(t){return t!==""}function gg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _g(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wI=/^[ \t]*#include +<([\w\d./]+)>/gm;function _d(t){return t.replace(wI,CI)}const AI=new Map;function CI(t,e){let n=at[e];if(n===void 0){const i=AI.get(e);if(i!==void 0)n=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _d(n)}const RI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vg(t){return t.replace(RI,PI)}function PI(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function DI(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Qv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===UA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function II(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Co:case Ro:e="ENVMAP_TYPE_CUBE";break;case Xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LI(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ro:e="ENVMAP_MODE_REFRACTION";break}return e}function UI(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case e0:e="ENVMAP_BLENDING_MULTIPLY";break;case QA:e="ENVMAP_BLENDING_MIX";break;case eC:e="ENVMAP_BLENDING_ADD";break}return e}function NI(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function OI(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=DI(n),c=II(n),u=LI(n),f=UI(n),d=NI(n),p=MI(n),m=EI(r),g=s.createProgram();let _,h,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(sa).join(`
`),_.length>0&&(_+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(sa).join(`
`),h.length>0&&(h+=`
`)):(_=[yg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),h=[yg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ps?"#define TONE_MAPPING":"",n.toneMapping!==Ps?at.tonemapping_pars_fragment:"",n.toneMapping!==Ps?bI("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,xI("linearToOutputTexel",n.outputColorSpace),SI(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(sa).join(`
`)),o=_d(o),o=gg(o,n),o=_g(o,n),a=_d(a),a=gg(a,n),a=_g(a,n),o=vg(o),a=vg(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,h=["#define varying in",n.glslVersion===_m?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=x+_+o,v=x+h+a,P=hg(s,s.VERTEX_SHADER,y),D=hg(s,s.FRAGMENT_SHADER,v);s.attachShader(g,P),s.attachShader(g,D),n.index0AttributeName!==void 0?s.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(I){if(t.debug.checkShaderErrors){const C=s.getProgramInfoLog(g).trim(),N=s.getShaderInfoLog(P).trim(),K=s.getShaderInfoLog(D).trim();let Q=!0,j=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,g,P,D);else{const V=mg(s,P,"vertex"),Y=mg(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+C+`
`+V+`
`+Y)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(N===""||K==="")&&(j=!1);j&&(I.diagnostics={runnable:Q,programLog:C,vertexShader:{log:N,prefix:_},fragmentShader:{log:K,prefix:h}})}s.deleteShader(P),s.deleteShader(D),L=new Jl(s,g),b=TI(s,g)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(g,gI)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_I++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=D,this}let FI=0;class BI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new kI(e),n.set(e,i)),i}}class kI{constructor(e){this.id=FI++,this.code=e,this.usedTimes=0}}function zI(t,e,n,i,s,r,o){const a=new gh,l=new BI,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function _(b,S,I,C,N){const K=C.fog,Q=N.geometry,j=b.isMeshStandardMaterial?C.environment:null,V=(b.isMeshStandardMaterial?n:e).get(b.envMap||j),Y=V&&V.mapping===Xc?V.image.height:null,me=m[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const we=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Le=we!==void 0?we.length:0;let Fe=0;Q.morphAttributes.position!==void 0&&(Fe=1),Q.morphAttributes.normal!==void 0&&(Fe=2),Q.morphAttributes.color!==void 0&&(Fe=3);let Qe,ce,_e,Re;if(me){const ut=Tn[me];Qe=ut.vertexShader,ce=ut.fragmentShader}else Qe=b.vertexShader,ce=b.fragmentShader,l.update(b),_e=l.getVertexShaderID(b),Re=l.getFragmentShaderID(b);const Te=t.getRenderTarget(),Ue=t.state.buffers.depth.getReversed(),it=N.isInstancedMesh===!0,ye=N.isBatchedMesh===!0,He=!!b.map,U=!!b.matcap,z=!!V,w=!!b.aoMap,he=!!b.lightMap,re=!!b.bumpMap,se=!!b.normalMap,le=!!b.displacementMap,fe=!!b.emissiveMap,te=!!b.metalnessMap,T=!!b.roughnessMap,M=b.anisotropy>0,H=b.clearcoat>0,J=b.dispersion>0,B=b.iridescence>0,E=b.sheen>0,k=b.transmission>0,G=M&&!!b.anisotropyMap,W=H&&!!b.clearcoatMap,pe=H&&!!b.clearcoatNormalMap,ee=H&&!!b.clearcoatRoughnessMap,ue=B&&!!b.iridescenceMap,Me=B&&!!b.iridescenceThicknessMap,Ne=E&&!!b.sheenColorMap,xe=E&&!!b.sheenRoughnessMap,ke=!!b.specularMap,ze=!!b.specularColorMap,tt=!!b.specularIntensityMap,$=k&&!!b.transmissionMap,be=k&&!!b.thicknessMap,ne=!!b.gradientMap,de=!!b.alphaMap,Pe=b.alphaTest>0,Ae=!!b.alphaHash,qe=!!b.extensions;let xt=Ps;b.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(xt=t.toneMapping);const Ut={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:Qe,fragmentShader:ce,defines:b.defines,customVertexShaderID:_e,customFragmentShaderID:Re,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:ye,batchingColor:ye&&N._colorsTexture!==null,instancing:it,instancingColor:it&&N.instanceColor!==null,instancingMorph:it&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Te===null?t.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Po,alphaToCoverage:!!b.alphaToCoverage,map:He,matcap:U,envMap:z,envMapMode:z&&V.mapping,envMapCubeUVHeight:Y,aoMap:w,lightMap:he,bumpMap:re,normalMap:se,displacementMap:d&&le,emissiveMap:fe,normalMapObjectSpace:se&&b.normalMapType===fC,normalMapTangentSpace:se&&b.normalMapType===d0,metalnessMap:te,roughnessMap:T,anisotropy:M,anisotropyMap:G,clearcoat:H,clearcoatMap:W,clearcoatNormalMap:pe,clearcoatRoughnessMap:ee,dispersion:J,iridescence:B,iridescenceMap:ue,iridescenceThicknessMap:Me,sheen:E,sheenColorMap:Ne,sheenRoughnessMap:xe,specularMap:ke,specularColorMap:ze,specularIntensityMap:tt,transmission:k,transmissionMap:$,thicknessMap:be,gradientMap:ne,opaque:b.transparent===!1&&b.blending===go&&b.alphaToCoverage===!1,alphaMap:de,alphaTest:Pe,alphaHash:Ae,combine:b.combine,mapUv:He&&g(b.map.channel),aoMapUv:w&&g(b.aoMap.channel),lightMapUv:he&&g(b.lightMap.channel),bumpMapUv:re&&g(b.bumpMap.channel),normalMapUv:se&&g(b.normalMap.channel),displacementMapUv:le&&g(b.displacementMap.channel),emissiveMapUv:fe&&g(b.emissiveMap.channel),metalnessMapUv:te&&g(b.metalnessMap.channel),roughnessMapUv:T&&g(b.roughnessMap.channel),anisotropyMapUv:G&&g(b.anisotropyMap.channel),clearcoatMapUv:W&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(b.sheenRoughnessMap.channel),specularMapUv:ke&&g(b.specularMap.channel),specularColorMapUv:ze&&g(b.specularColorMap.channel),specularIntensityMapUv:tt&&g(b.specularIntensityMap.channel),transmissionMapUv:$&&g(b.transmissionMap.channel),thicknessMapUv:be&&g(b.thicknessMap.channel),alphaMapUv:de&&g(b.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(se||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Q.attributes.uv&&(He||de),fog:!!K,useFog:b.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ue,skinning:N.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:xt,decodeVideoTexture:He&&b.map.isVideoTexture===!0&&gt.getTransfer(b.map.colorSpace)===St,decodeVideoTextureEmissive:fe&&b.emissiveMap.isVideoTexture===!0&&gt.getTransfer(b.emissiveMap.colorSpace)===St,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===wi,flipSided:b.side===Pn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&b.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function h(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)S.push(I),S.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(x(S,b),y(S,b),S.push(t.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function x(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function y(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const S=m[b.type];let I;if(S){const C=Tn[S];I=_h.clone(C.uniforms)}else I=b.uniforms;return I}function P(b,S){let I;for(let C=0,N=u.length;C<N;C++){const K=u[C];if(K.cacheKey===S){I=K,++I.usedTimes;break}}return I===void 0&&(I=new OI(t,S,b,r),u.push(I)),I}function D(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function L(){l.dispose()}return{getParameters:_,getProgramCacheKey:h,getUniforms:v,acquireProgram:P,releaseProgram:D,releaseShaderCache:A,programs:u,dispose:L}}function HI(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function VI(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function xg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function bg(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f,d,p,m,g,_){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:m,renderOrder:f.renderOrder,z:g,group:_},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=m,h.renderOrder=f.renderOrder,h.z=g,h.group=_),e++,h}function a(f,d,p,m,g,_){const h=o(f,d,p,m,g,_);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):n.push(h)}function l(f,d,p,m,g,_){const h=o(f,d,p,m,g,_);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||VI),i.length>1&&i.sort(d||xg),s.length>1&&s.sort(d||xg)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function GI(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new bg,t.set(i,[o])):s>=r.length?(o=new bg,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function WI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new st};break;case"SpotLight":n={position:new X,direction:new X,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function $I(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let XI=0;function jI(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function YI(t){const e=new WI,n=$I(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const s=new X,r=new Ct,o=new Ct;function a(c){let u=0,f=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,m=0,g=0,_=0,h=0,x=0,y=0,v=0,P=0,D=0,A=0;c.sort(jI);for(let b=0,S=c.length;b<S;b++){const I=c[b],C=I.color,N=I.intensity,K=I.distance,Q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=C.r*N,f+=C.g*N,d+=C.b*N;else if(I.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(I.sh.coefficients[j],N);A++}else if(I.isDirectionalLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const V=I.shadow,Y=n.get(I);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=I.shadow.matrix,x++}i.directional[p]=j,p++}else if(I.isSpotLight){const j=e.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(C).multiplyScalar(N),j.distance=K,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,i.spot[g]=j;const V=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,V.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[g]=V.matrix,I.castShadow){const Y=n.get(I);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,i.spotShadow[g]=Y,i.spotShadowMap[g]=Q,v++}g++}else if(I.isRectAreaLight){const j=e.get(I);j.color.copy(C).multiplyScalar(N),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),i.rectArea[_]=j,_++}else if(I.isPointLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),j.distance=I.distance,j.decay=I.decay,I.castShadow){const V=I.shadow,Y=n.get(I);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,Y.shadowCameraNear=V.camera.near,Y.shadowCameraFar=V.camera.far,i.pointShadow[m]=Y,i.pointShadowMap[m]=Q,i.pointShadowMatrix[m]=I.shadow.matrix,y++}i.point[m]=j,m++}else if(I.isHemisphereLight){const j=e.get(I);j.skyColor.copy(I.color).multiplyScalar(N),j.groundColor.copy(I.groundColor).multiplyScalar(N),i.hemi[h]=j,h++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==p||L.pointLength!==m||L.spotLength!==g||L.rectAreaLength!==_||L.hemiLength!==h||L.numDirectionalShadows!==x||L.numPointShadows!==y||L.numSpotShadows!==v||L.numSpotMaps!==P||L.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=_,i.point.length=m,i.hemi.length=h,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+P-D,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=A,L.directionalLength=p,L.pointLength=m,L.spotLength=g,L.rectAreaLength=_,L.hemiLength=h,L.numDirectionalShadows=x,L.numPointShadows=y,L.numSpotShadows=v,L.numSpotMaps=P,L.numLightProbes=A,i.version=XI++)}function l(c,u){let f=0,d=0,p=0,m=0,g=0;const _=u.matrixWorldInverse;for(let h=0,x=c.length;h<x;h++){const y=c[h];if(y.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),f++}else if(y.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),p++}else if(y.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(_),o.identity(),r.copy(y.matrixWorld),r.premultiply(_),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(_),d++}else if(y.isHemisphereLight){const v=i.hemi[g];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:i}}function Sg(t){const e=new YI(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function qI(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Sg(t),e.set(s,[a])):r>=o.length?(a=new Sg(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const KI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZI=`uniform sampler2D shadow_pass;
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
}`;function JI(t,e,n){let i=new vh;const s=new Ve,r=new Ve,o=new wt,a=new gR({depthPacking:uC}),l=new _R,c={},u=n.maxTextureSize,f={[Ds]:Pn,[Pn]:Ds,[wi]:wi},d=new ls({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:KI,fragmentShader:ZI}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new Sn;m.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new An(m,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qv;let h=this.type;this.render=function(D,A,L){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;const b=t.getRenderTarget(),S=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),C=t.state;C.setBlending(Rs),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const N=h!==Hi&&this.type===Hi,K=h===Hi&&this.type!==Hi;for(let Q=0,j=D.length;Q<j;Q++){const V=D[Q],Y=V.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const me=Y.getFrameExtents();if(s.multiply(me),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,Y.mapSize.y=r.y)),Y.map===null||N===!0||K===!0){const Le=this.type!==Hi?{minFilter:hi,magFilter:hi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Sr(s.x,s.y,Le),Y.map.texture.name=V.name+".shadowMap",Y.camera.updateProjectionMatrix()}t.setRenderTarget(Y.map),t.clear();const we=Y.getViewportCount();for(let Le=0;Le<we;Le++){const Fe=Y.getViewport(Le);o.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),C.viewport(o),Y.updateMatrices(V,Le),i=Y.getFrustum(),v(A,L,Y.camera,V,this.type)}Y.isPointLightShadow!==!0&&this.type===Hi&&x(Y,L),Y.needsUpdate=!1}h=this.type,_.needsUpdate=!1,t.setRenderTarget(b,S,I)};function x(D,A){const L=e.update(g);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Sr(s.x,s.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,t.setRenderTarget(D.mapPass),t.clear(),t.renderBufferDirect(A,null,L,d,g,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,t.setRenderTarget(D.map),t.clear(),t.renderBufferDirect(A,null,L,p,g,null)}function y(D,A,L,b){let S=null;const I=L.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(I!==void 0)S=I;else if(S=L.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const C=S.uuid,N=A.uuid;let K=c[C];K===void 0&&(K={},c[C]=K);let Q=K[N];Q===void 0&&(Q=S.clone(),K[N]=Q,A.addEventListener("dispose",P)),S=Q}if(S.visible=A.visible,S.wireframe=A.wireframe,b===Hi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const C=t.properties.get(S);C.light=L}return S}function v(D,A,L,b,S){if(D.visible===!1)return;if(D.layers.test(A.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&S===Hi)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,D.matrixWorld);const N=e.update(D),K=D.material;if(Array.isArray(K)){const Q=N.groups;for(let j=0,V=Q.length;j<V;j++){const Y=Q[j],me=K[Y.materialIndex];if(me&&me.visible){const we=y(D,me,b,S);D.onBeforeShadow(t,D,A,L,N,we,Y),t.renderBufferDirect(L,null,N,we,D,Y),D.onAfterShadow(t,D,A,L,N,we,Y)}}}else if(K.visible){const Q=y(D,K,b,S);D.onBeforeShadow(t,D,A,L,N,Q,null),t.renderBufferDirect(L,null,N,Q,D,null),D.onAfterShadow(t,D,A,L,N,Q,null)}}const C=D.children;for(let N=0,K=C.length;N<K;N++)v(C[N],A,L,b,S)}function P(D){D.target.removeEventListener("dispose",P);for(const L in c){const b=c[L],S=D.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const QI={[If]:Lf,[Uf]:Ff,[Nf]:Bf,[Ao]:Of,[Lf]:If,[Ff]:Uf,[Bf]:Nf,[Of]:Ao};function eL(t,e){function n(){let $=!1;const be=new wt;let ne=null;const de=new wt(0,0,0,0);return{setMask:function(Pe){ne!==Pe&&!$&&(t.colorMask(Pe,Pe,Pe,Pe),ne=Pe)},setLocked:function(Pe){$=Pe},setClear:function(Pe,Ae,qe,xt,Ut){Ut===!0&&(Pe*=xt,Ae*=xt,qe*=xt),be.set(Pe,Ae,qe,xt),de.equals(be)===!1&&(t.clearColor(Pe,Ae,qe,xt),de.copy(be))},reset:function(){$=!1,ne=null,de.set(-1,0,0,0)}}}function i(){let $=!1,be=!1,ne=null,de=null,Pe=null;return{setReversed:function(Ae){if(be!==Ae){const qe=e.get("EXT_clip_control");Ae?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),be=Ae;const xt=Pe;Pe=null,this.setClear(xt)}},getReversed:function(){return be},setTest:function(Ae){Ae?Te(t.DEPTH_TEST):Ue(t.DEPTH_TEST)},setMask:function(Ae){ne!==Ae&&!$&&(t.depthMask(Ae),ne=Ae)},setFunc:function(Ae){if(be&&(Ae=QI[Ae]),de!==Ae){switch(Ae){case If:t.depthFunc(t.NEVER);break;case Lf:t.depthFunc(t.ALWAYS);break;case Uf:t.depthFunc(t.LESS);break;case Ao:t.depthFunc(t.LEQUAL);break;case Nf:t.depthFunc(t.EQUAL);break;case Of:t.depthFunc(t.GEQUAL);break;case Ff:t.depthFunc(t.GREATER);break;case Bf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=Ae}},setLocked:function(Ae){$=Ae},setClear:function(Ae){Pe!==Ae&&(be&&(Ae=1-Ae),t.clearDepth(Ae),Pe=Ae)},reset:function(){$=!1,ne=null,de=null,Pe=null,be=!1}}}function s(){let $=!1,be=null,ne=null,de=null,Pe=null,Ae=null,qe=null,xt=null,Ut=null;return{setTest:function(ut){$||(ut?Te(t.STENCIL_TEST):Ue(t.STENCIL_TEST))},setMask:function(ut){be!==ut&&!$&&(t.stencilMask(ut),be=ut)},setFunc:function(ut,Ot,hn){(ne!==ut||de!==Ot||Pe!==hn)&&(t.stencilFunc(ut,Ot,hn),ne=ut,de=Ot,Pe=hn)},setOp:function(ut,Ot,hn){(Ae!==ut||qe!==Ot||xt!==hn)&&(t.stencilOp(ut,Ot,hn),Ae=ut,qe=Ot,xt=hn)},setLocked:function(ut){$=ut},setClear:function(ut){Ut!==ut&&(t.clearStencil(ut),Ut=ut)},reset:function(){$=!1,be=null,ne=null,de=null,Pe=null,Ae=null,qe=null,xt=null,Ut=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],m=null,g=!1,_=null,h=null,x=null,y=null,v=null,P=null,D=null,A=new st(0,0,0),L=0,b=!1,S=null,I=null,C=null,N=null,K=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,V=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Y)[1]),j=V>=1):Y.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),j=V>=2);let me=null,we={};const Le=t.getParameter(t.SCISSOR_BOX),Fe=t.getParameter(t.VIEWPORT),Qe=new wt().fromArray(Le),ce=new wt().fromArray(Fe);function _e($,be,ne,de){const Pe=new Uint8Array(4),Ae=t.createTexture();t.bindTexture($,Ae),t.texParameteri($,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri($,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<ne;qe++)$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?t.texImage3D(be,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,Pe):t.texImage2D(be+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Pe);return Ae}const Re={};Re[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),Re[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Re[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Te(t.DEPTH_TEST),o.setFunc(Ao),re(!1),se(dm),Te(t.CULL_FACE),w(Rs);function Te($){u[$]!==!0&&(t.enable($),u[$]=!0)}function Ue($){u[$]!==!1&&(t.disable($),u[$]=!1)}function it($,be){return f[$]!==be?(t.bindFramebuffer($,be),f[$]=be,$===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=be),$===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=be),!0):!1}function ye($,be){let ne=p,de=!1;if($){ne=d.get(be),ne===void 0&&(ne=[],d.set(be,ne));const Pe=$.textures;if(ne.length!==Pe.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let Ae=0,qe=Pe.length;Ae<qe;Ae++)ne[Ae]=t.COLOR_ATTACHMENT0+Ae;ne.length=Pe.length,de=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,de=!0);de&&t.drawBuffers(ne)}function He($){return m!==$?(t.useProgram($),m=$,!0):!1}const U={[nr]:t.FUNC_ADD,[OA]:t.FUNC_SUBTRACT,[FA]:t.FUNC_REVERSE_SUBTRACT};U[BA]=t.MIN,U[kA]=t.MAX;const z={[zA]:t.ZERO,[HA]:t.ONE,[VA]:t.SRC_COLOR,[Pf]:t.SRC_ALPHA,[YA]:t.SRC_ALPHA_SATURATE,[XA]:t.DST_COLOR,[WA]:t.DST_ALPHA,[GA]:t.ONE_MINUS_SRC_COLOR,[Df]:t.ONE_MINUS_SRC_ALPHA,[jA]:t.ONE_MINUS_DST_COLOR,[$A]:t.ONE_MINUS_DST_ALPHA,[qA]:t.CONSTANT_COLOR,[KA]:t.ONE_MINUS_CONSTANT_COLOR,[ZA]:t.CONSTANT_ALPHA,[JA]:t.ONE_MINUS_CONSTANT_ALPHA};function w($,be,ne,de,Pe,Ae,qe,xt,Ut,ut){if($===Rs){g===!0&&(Ue(t.BLEND),g=!1);return}if(g===!1&&(Te(t.BLEND),g=!0),$!==NA){if($!==_||ut!==b){if((h!==nr||v!==nr)&&(t.blendEquation(t.FUNC_ADD),h=nr,v=nr),ut)switch($){case go:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hm:t.blendFunc(t.ONE,t.ONE);break;case pm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case go:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case pm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}x=null,y=null,P=null,D=null,A.set(0,0,0),L=0,_=$,b=ut}return}Pe=Pe||be,Ae=Ae||ne,qe=qe||de,(be!==h||Pe!==v)&&(t.blendEquationSeparate(U[be],U[Pe]),h=be,v=Pe),(ne!==x||de!==y||Ae!==P||qe!==D)&&(t.blendFuncSeparate(z[ne],z[de],z[Ae],z[qe]),x=ne,y=de,P=Ae,D=qe),(xt.equals(A)===!1||Ut!==L)&&(t.blendColor(xt.r,xt.g,xt.b,Ut),A.copy(xt),L=Ut),_=$,b=!1}function he($,be){$.side===wi?Ue(t.CULL_FACE):Te(t.CULL_FACE);let ne=$.side===Pn;be&&(ne=!ne),re(ne),$.blending===go&&$.transparent===!1?w(Rs):w($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),r.setMask($.colorWrite);const de=$.stencilWrite;a.setTest(de),de&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),fe($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?Te(t.SAMPLE_ALPHA_TO_COVERAGE):Ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function re($){S!==$&&($?t.frontFace(t.CW):t.frontFace(t.CCW),S=$)}function se($){$!==IA?(Te(t.CULL_FACE),$!==I&&($===dm?t.cullFace(t.BACK):$===LA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ue(t.CULL_FACE),I=$}function le($){$!==C&&(j&&t.lineWidth($),C=$)}function fe($,be,ne){$?(Te(t.POLYGON_OFFSET_FILL),(N!==be||K!==ne)&&(t.polygonOffset(be,ne),N=be,K=ne)):Ue(t.POLYGON_OFFSET_FILL)}function te($){$?Te(t.SCISSOR_TEST):Ue(t.SCISSOR_TEST)}function T($){$===void 0&&($=t.TEXTURE0+Q-1),me!==$&&(t.activeTexture($),me=$)}function M($,be,ne){ne===void 0&&(me===null?ne=t.TEXTURE0+Q-1:ne=me);let de=we[ne];de===void 0&&(de={type:void 0,texture:void 0},we[ne]=de),(de.type!==$||de.texture!==be)&&(me!==ne&&(t.activeTexture(ne),me=ne),t.bindTexture($,be||Re[$]),de.type=$,de.texture=be)}function H(){const $=we[me];$!==void 0&&$.type!==void 0&&(t.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function J(){try{t.compressedTexImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function B(){try{t.compressedTexImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function E(){try{t.texSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function k(){try{t.texSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function W(){try{t.compressedTexSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function pe(){try{t.texStorage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ee(){try{t.texStorage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ue(){try{t.texImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Me(){try{t.texImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ne($){Qe.equals($)===!1&&(t.scissor($.x,$.y,$.z,$.w),Qe.copy($))}function xe($){ce.equals($)===!1&&(t.viewport($.x,$.y,$.z,$.w),ce.copy($))}function ke($,be){let ne=c.get(be);ne===void 0&&(ne=new WeakMap,c.set(be,ne));let de=ne.get($);de===void 0&&(de=t.getUniformBlockIndex(be,$.name),ne.set($,de))}function ze($,be){const de=c.get(be).get($);l.get(be)!==de&&(t.uniformBlockBinding(be,de,$.__bindingPointIndex),l.set(be,de))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},me=null,we={},f={},d=new WeakMap,p=[],m=null,g=!1,_=null,h=null,x=null,y=null,v=null,P=null,D=null,A=new st(0,0,0),L=0,b=!1,S=null,I=null,C=null,N=null,K=null,Qe.set(0,0,t.canvas.width,t.canvas.height),ce.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Te,disable:Ue,bindFramebuffer:it,drawBuffers:ye,useProgram:He,setBlending:w,setMaterial:he,setFlipSided:re,setCullFace:se,setLineWidth:le,setPolygonOffset:fe,setScissorTest:te,activeTexture:T,bindTexture:M,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:B,texImage2D:ue,texImage3D:Me,updateUBOMapping:ke,uniformBlockBinding:ze,texStorage2D:pe,texStorage3D:ee,texSubImage2D:E,texSubImage3D:k,compressedTexSubImage2D:G,compressedTexSubImage3D:W,scissor:Ne,viewport:xe,reset:tt}}function tL(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,M){return p?new OffscreenCanvas(T,M):yc("canvas")}function g(T,M,H){let J=1;const B=te(T);if((B.width>H||B.height>H)&&(J=H/Math.max(B.width,B.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const E=Math.floor(J*B.width),k=Math.floor(J*B.height);f===void 0&&(f=m(E,k));const G=M?m(E,k):f;return G.width=E,G.height=k,G.getContext("2d").drawImage(T,0,0,E,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+E+"x"+k+")."),G}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),T;return T}function _(T){return T.generateMipmaps}function h(T){t.generateMipmap(T)}function x(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(T,M,H,J,B=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let E=M;if(M===t.RED&&(H===t.FLOAT&&(E=t.R32F),H===t.HALF_FLOAT&&(E=t.R16F),H===t.UNSIGNED_BYTE&&(E=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(E=t.R8UI),H===t.UNSIGNED_SHORT&&(E=t.R16UI),H===t.UNSIGNED_INT&&(E=t.R32UI),H===t.BYTE&&(E=t.R8I),H===t.SHORT&&(E=t.R16I),H===t.INT&&(E=t.R32I)),M===t.RG&&(H===t.FLOAT&&(E=t.RG32F),H===t.HALF_FLOAT&&(E=t.RG16F),H===t.UNSIGNED_BYTE&&(E=t.RG8)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(E=t.RG8UI),H===t.UNSIGNED_SHORT&&(E=t.RG16UI),H===t.UNSIGNED_INT&&(E=t.RG32UI),H===t.BYTE&&(E=t.RG8I),H===t.SHORT&&(E=t.RG16I),H===t.INT&&(E=t.RG32I)),M===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(E=t.RGB8UI),H===t.UNSIGNED_SHORT&&(E=t.RGB16UI),H===t.UNSIGNED_INT&&(E=t.RGB32UI),H===t.BYTE&&(E=t.RGB8I),H===t.SHORT&&(E=t.RGB16I),H===t.INT&&(E=t.RGB32I)),M===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(E=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(E=t.RGBA16UI),H===t.UNSIGNED_INT&&(E=t.RGBA32UI),H===t.BYTE&&(E=t.RGBA8I),H===t.SHORT&&(E=t.RGBA16I),H===t.INT&&(E=t.RGBA32I)),M===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(E=t.RGB9_E5),M===t.RGBA){const k=B?_c:gt.getTransfer(J);H===t.FLOAT&&(E=t.RGBA32F),H===t.HALF_FLOAT&&(E=t.RGBA16F),H===t.UNSIGNED_BYTE&&(E=k===St?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(E=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(E=t.RGB5_A1)}return(E===t.R16F||E===t.R32F||E===t.RG16F||E===t.RG32F||E===t.RGBA16F||E===t.RGBA32F)&&e.get("EXT_color_buffer_float"),E}function v(T,M){let H;return T?M===null||M===br||M===La?H=t.DEPTH24_STENCIL8:M===qi?H=t.DEPTH32F_STENCIL8:M===Ia&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===br||M===La?H=t.DEPTH_COMPONENT24:M===qi?H=t.DEPTH_COMPONENT32F:M===Ia&&(H=t.DEPTH_COMPONENT16),H}function P(T,M){return _(T)===!0||T.isFramebufferTexture&&T.minFilter!==hi&&T.minFilter!==Ci?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function D(T){const M=T.target;M.removeEventListener("dispose",D),L(M),M.isVideoTexture&&u.delete(M)}function A(T){const M=T.target;M.removeEventListener("dispose",A),S(M)}function L(T){const M=i.get(T);if(M.__webglInit===void 0)return;const H=T.source,J=d.get(H);if(J){const B=J[M.__cacheKey];B.usedTimes--,B.usedTimes===0&&b(T),Object.keys(J).length===0&&d.delete(H)}i.remove(T)}function b(T){const M=i.get(T);t.deleteTexture(M.__webglTexture);const H=T.source,J=d.get(H);delete J[M.__cacheKey],o.memory.textures--}function S(T){const M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let B=0;B<M.__webglFramebuffer[J].length;B++)t.deleteFramebuffer(M.__webglFramebuffer[J][B]);else t.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)t.deleteFramebuffer(M.__webglFramebuffer[J]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=T.textures;for(let J=0,B=H.length;J<B;J++){const E=i.get(H[J]);E.__webglTexture&&(t.deleteTexture(E.__webglTexture),o.memory.textures--),i.remove(H[J])}i.remove(T)}let I=0;function C(){I=0}function N(){const T=I;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),I+=1,T}function K(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function Q(T,M){const H=i.get(T);if(T.isVideoTexture&&le(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(H,T,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function j(T,M){const H=i.get(T);if(T.version>0&&H.__version!==T.version){ce(H,T,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function V(T,M){const H=i.get(T);if(T.version>0&&H.__version!==T.version){ce(H,T,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function Y(T,M){const H=i.get(T);if(T.version>0&&H.__version!==T.version){_e(H,T,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const me={[Da]:t.REPEAT,[lr]:t.CLAMP_TO_EDGE,[Hf]:t.MIRRORED_REPEAT},we={[hi]:t.NEAREST,[lC]:t.NEAREST_MIPMAP_NEAREST,[rl]:t.NEAREST_MIPMAP_LINEAR,[Ci]:t.LINEAR,[Mu]:t.LINEAR_MIPMAP_NEAREST,[cr]:t.LINEAR_MIPMAP_LINEAR},Le={[dC]:t.NEVER,[vC]:t.ALWAYS,[hC]:t.LESS,[h0]:t.LEQUAL,[pC]:t.EQUAL,[_C]:t.GEQUAL,[mC]:t.GREATER,[gC]:t.NOTEQUAL};function Fe(T,M){if(M.type===qi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ci||M.magFilter===Mu||M.magFilter===rl||M.magFilter===cr||M.minFilter===Ci||M.minFilter===Mu||M.minFilter===rl||M.minFilter===cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,me[M.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,me[M.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,me[M.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,we[M.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,we[M.minFilter]),M.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,Le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===hi||M.minFilter!==rl&&M.minFilter!==cr||M.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Qe(T,M){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",D));const J=M.source;let B=d.get(J);B===void 0&&(B={},d.set(J,B));const E=K(M);if(E!==T.__cacheKey){B[E]===void 0&&(B[E]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),B[E].usedTimes++;const k=B[T.__cacheKey];k!==void 0&&(B[T.__cacheKey].usedTimes--,k.usedTimes===0&&b(M)),T.__cacheKey=E,T.__webglTexture=B[E].texture}return H}function ce(T,M,H){let J=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=t.TEXTURE_3D);const B=Qe(T,M),E=M.source;n.bindTexture(J,T.__webglTexture,t.TEXTURE0+H);const k=i.get(E);if(E.version!==k.__version||B===!0){n.activeTexture(t.TEXTURE0+H);const G=gt.getPrimaries(gt.workingColorSpace),W=M.colorSpace===ws?null:gt.getPrimaries(M.colorSpace),pe=M.colorSpace===ws||G===W?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let ee=g(M.image,!1,s.maxTextureSize);ee=fe(M,ee);const ue=r.convert(M.format,M.colorSpace),Me=r.convert(M.type);let Ne=y(M.internalFormat,ue,Me,M.colorSpace,M.isVideoTexture);Fe(J,M);let xe;const ke=M.mipmaps,ze=M.isVideoTexture!==!0,tt=k.__version===void 0||B===!0,$=E.dataReady,be=P(M,ee);if(M.isDepthTexture)Ne=v(M.format===Na,M.type),tt&&(ze?n.texStorage2D(t.TEXTURE_2D,1,Ne,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Ne,ee.width,ee.height,0,ue,Me,null));else if(M.isDataTexture)if(ke.length>0){ze&&tt&&n.texStorage2D(t.TEXTURE_2D,be,Ne,ke[0].width,ke[0].height);for(let ne=0,de=ke.length;ne<de;ne++)xe=ke[ne],ze?$&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,xe.width,xe.height,ue,Me,xe.data):n.texImage2D(t.TEXTURE_2D,ne,Ne,xe.width,xe.height,0,ue,Me,xe.data);M.generateMipmaps=!1}else ze?(tt&&n.texStorage2D(t.TEXTURE_2D,be,Ne,ee.width,ee.height),$&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,ue,Me,ee.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,ee.width,ee.height,0,ue,Me,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ze&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,Ne,ke[0].width,ke[0].height,ee.depth);for(let ne=0,de=ke.length;ne<de;ne++)if(xe=ke[ne],M.format!==fi)if(ue!==null)if(ze){if($)if(M.layerUpdates.size>0){const Pe=Jm(xe.width,xe.height,M.format,M.type);for(const Ae of M.layerUpdates){const qe=xe.data.subarray(Ae*Pe/xe.data.BYTES_PER_ELEMENT,(Ae+1)*Pe/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,Ae,xe.width,xe.height,1,ue,qe)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,xe.width,xe.height,ee.depth,ue,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Ne,xe.width,xe.height,ee.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?$&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,xe.width,xe.height,ee.depth,ue,Me,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,Ne,xe.width,xe.height,ee.depth,0,ue,Me,xe.data)}else{ze&&tt&&n.texStorage2D(t.TEXTURE_2D,be,Ne,ke[0].width,ke[0].height);for(let ne=0,de=ke.length;ne<de;ne++)xe=ke[ne],M.format!==fi?ue!==null?ze?$&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,xe.width,xe.height,ue,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,Ne,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?$&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,xe.width,xe.height,ue,Me,xe.data):n.texImage2D(t.TEXTURE_2D,ne,Ne,xe.width,xe.height,0,ue,Me,xe.data)}else if(M.isDataArrayTexture)if(ze){if(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,Ne,ee.width,ee.height,ee.depth),$)if(M.layerUpdates.size>0){const ne=Jm(ee.width,ee.height,M.format,M.type);for(const de of M.layerUpdates){const Pe=ee.data.subarray(de*ne/ee.data.BYTES_PER_ELEMENT,(de+1)*ne/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,ee.width,ee.height,1,ue,Me,Pe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,Me,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,ee.width,ee.height,ee.depth,0,ue,Me,ee.data);else if(M.isData3DTexture)ze?(tt&&n.texStorage3D(t.TEXTURE_3D,be,Ne,ee.width,ee.height,ee.depth),$&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,Me,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,ee.width,ee.height,ee.depth,0,ue,Me,ee.data);else if(M.isFramebufferTexture){if(tt)if(ze)n.texStorage2D(t.TEXTURE_2D,be,Ne,ee.width,ee.height);else{let ne=ee.width,de=ee.height;for(let Pe=0;Pe<be;Pe++)n.texImage2D(t.TEXTURE_2D,Pe,Ne,ne,de,0,ue,Me,null),ne>>=1,de>>=1}}else if(ke.length>0){if(ze&&tt){const ne=te(ke[0]);n.texStorage2D(t.TEXTURE_2D,be,Ne,ne.width,ne.height)}for(let ne=0,de=ke.length;ne<de;ne++)xe=ke[ne],ze?$&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ue,Me,xe):n.texImage2D(t.TEXTURE_2D,ne,Ne,ue,Me,xe);M.generateMipmaps=!1}else if(ze){if(tt){const ne=te(ee);n.texStorage2D(t.TEXTURE_2D,be,Ne,ne.width,ne.height)}$&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,Me,ee)}else n.texImage2D(t.TEXTURE_2D,0,Ne,ue,Me,ee);_(M)&&h(J),k.__version=E.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function _e(T,M,H){if(M.image.length!==6)return;const J=Qe(T,M),B=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+H);const E=i.get(B);if(B.version!==E.__version||J===!0){n.activeTexture(t.TEXTURE0+H);const k=gt.getPrimaries(gt.workingColorSpace),G=M.colorSpace===ws?null:gt.getPrimaries(M.colorSpace),W=M.colorSpace===ws||k===G?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,W);const pe=M.isCompressedTexture||M.image[0].isCompressedTexture,ee=M.image[0]&&M.image[0].isDataTexture,ue=[];for(let de=0;de<6;de++)!pe&&!ee?ue[de]=g(M.image[de],!0,s.maxCubemapSize):ue[de]=ee?M.image[de].image:M.image[de],ue[de]=fe(M,ue[de]);const Me=ue[0],Ne=r.convert(M.format,M.colorSpace),xe=r.convert(M.type),ke=y(M.internalFormat,Ne,xe,M.colorSpace),ze=M.isVideoTexture!==!0,tt=E.__version===void 0||J===!0,$=B.dataReady;let be=P(M,Me);Fe(t.TEXTURE_CUBE_MAP,M);let ne;if(pe){ze&&tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,be,ke,Me.width,Me.height);for(let de=0;de<6;de++){ne=ue[de].mipmaps;for(let Pe=0;Pe<ne.length;Pe++){const Ae=ne[Pe];M.format!==fi?Ne!==null?ze?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,Ae.width,Ae.height,Ne,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,ke,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,Ae.width,Ae.height,Ne,xe,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,ke,Ae.width,Ae.height,0,Ne,xe,Ae.data)}}}else{if(ne=M.mipmaps,ze&&tt){ne.length>0&&be++;const de=te(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,be,ke,de.width,de.height)}for(let de=0;de<6;de++)if(ee){ze?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ue[de].width,ue[de].height,Ne,xe,ue[de].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ke,ue[de].width,ue[de].height,0,Ne,xe,ue[de].data);for(let Pe=0;Pe<ne.length;Pe++){const qe=ne[Pe].image[de].image;ze?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,qe.width,qe.height,Ne,xe,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,ke,qe.width,qe.height,0,Ne,xe,qe.data)}}else{ze?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ne,xe,ue[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ke,Ne,xe,ue[de]);for(let Pe=0;Pe<ne.length;Pe++){const Ae=ne[Pe];ze?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,Ne,xe,Ae.image[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,ke,Ne,xe,Ae.image[de])}}}_(M)&&h(t.TEXTURE_CUBE_MAP),E.__version=B.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Re(T,M,H,J,B,E){const k=r.convert(H.format,H.colorSpace),G=r.convert(H.type),W=y(H.internalFormat,k,G,H.colorSpace),pe=i.get(M),ee=i.get(H);if(ee.__renderTarget=M,!pe.__hasExternalTextures){const ue=Math.max(1,M.width>>E),Me=Math.max(1,M.height>>E);B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?n.texImage3D(B,E,W,ue,Me,M.depth,0,k,G,null):n.texImage2D(B,E,W,ue,Me,0,k,G,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),se(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,B,ee.__webglTexture,0,re(M)):(B===t.TEXTURE_2D||B>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,B,ee.__webglTexture,E),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(T,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,T),M.depthBuffer){const J=M.depthTexture,B=J&&J.isDepthTexture?J.type:null,E=v(M.stencilBuffer,B),k=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=re(M);se(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,G,E,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,G,E,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,E,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,k,t.RENDERBUFFER,T)}else{const J=M.textures;for(let B=0;B<J.length;B++){const E=J[B],k=r.convert(E.format,E.colorSpace),G=r.convert(E.type),W=y(E.internalFormat,k,G,E.colorSpace),pe=re(M);H&&se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,W,M.width,M.height):se(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,W,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,W,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ue(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q(M.depthTexture,0);const B=J.__webglTexture,E=re(M);if(M.depthTexture.format===Ua)se(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,B,0,E):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,B,0);else if(M.depthTexture.format===Na)se(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,B,0,E):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function it(T){const M=i.get(T),H=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const J=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const B=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",B)};J.addEventListener("dispose",B),M.__depthDisposeCallback=B}M.__boundDepthTexture=J}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ue(M.__webglFramebuffer,T)}else if(H){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=t.createRenderbuffer(),Te(M.__webglDepthbuffer[J],T,!1);else{const B=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,E=M.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,E),t.framebufferRenderbuffer(t.FRAMEBUFFER,B,t.RENDERBUFFER,E)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Te(M.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,B=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,B),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,B)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ye(T,M,H){const J=i.get(T);M!==void 0&&Re(J.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&it(T)}function He(T){const M=T.texture,H=i.get(T),J=i.get(M);T.addEventListener("dispose",A);const B=T.textures,E=T.isWebGLCubeRenderTarget===!0,k=B.length>1;if(k||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=M.version,o.memory.textures++),E){H.__webglFramebuffer=[];for(let G=0;G<6;G++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[G]=[];for(let W=0;W<M.mipmaps.length;W++)H.__webglFramebuffer[G][W]=t.createFramebuffer()}else H.__webglFramebuffer[G]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let G=0;G<M.mipmaps.length;G++)H.__webglFramebuffer[G]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(k)for(let G=0,W=B.length;G<W;G++){const pe=i.get(B[G]);pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&se(T)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let G=0;G<B.length;G++){const W=B[G];H.__webglColorRenderbuffer[G]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[G]);const pe=r.convert(W.format,W.colorSpace),ee=r.convert(W.type),ue=y(W.internalFormat,pe,ee,W.colorSpace,T.isXRRenderTarget===!0),Me=re(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,ue,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.RENDERBUFFER,H.__webglColorRenderbuffer[G])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Te(H.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(E){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,M);for(let G=0;G<6;G++)if(M.mipmaps&&M.mipmaps.length>0)for(let W=0;W<M.mipmaps.length;W++)Re(H.__webglFramebuffer[G][W],T,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+G,W);else Re(H.__webglFramebuffer[G],T,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);_(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(k){for(let G=0,W=B.length;G<W;G++){const pe=B[G],ee=i.get(pe);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),Fe(t.TEXTURE_2D,pe),Re(H.__webglFramebuffer,T,pe,t.COLOR_ATTACHMENT0+G,t.TEXTURE_2D,0),_(pe)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let G=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(G=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(G,J.__webglTexture),Fe(G,M),M.mipmaps&&M.mipmaps.length>0)for(let W=0;W<M.mipmaps.length;W++)Re(H.__webglFramebuffer[W],T,M,t.COLOR_ATTACHMENT0,G,W);else Re(H.__webglFramebuffer,T,M,t.COLOR_ATTACHMENT0,G,0);_(M)&&h(G),n.unbindTexture()}T.depthBuffer&&it(T)}function U(T){const M=T.textures;for(let H=0,J=M.length;H<J;H++){const B=M[H];if(_(B)){const E=x(T),k=i.get(B).__webglTexture;n.bindTexture(E,k),h(E),n.unbindTexture()}}}const z=[],w=[];function he(T){if(T.samples>0){if(se(T)===!1){const M=T.textures,H=T.width,J=T.height;let B=t.COLOR_BUFFER_BIT;const E=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,k=i.get(T),G=M.length>1;if(G)for(let W=0;W<M.length;W++)n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,k.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,k.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,k.__webglFramebuffer);for(let W=0;W<M.length;W++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(B|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(B|=t.STENCIL_BUFFER_BIT)),G){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,k.__webglColorRenderbuffer[W]);const pe=i.get(M[W]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,pe,0)}t.blitFramebuffer(0,0,H,J,0,0,H,J,B,t.NEAREST),l===!0&&(z.length=0,w.length=0,z.push(t.COLOR_ATTACHMENT0+W),T.depthBuffer&&T.resolveDepthBuffer===!1&&(z.push(E),w.push(E),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,w)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,z))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),G)for(let W=0;W<M.length;W++){n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.RENDERBUFFER,k.__webglColorRenderbuffer[W]);const pe=i.get(M[W]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,k.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.TEXTURE_2D,pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,k.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function re(T){return Math.min(s.maxSamples,T.samples)}function se(T){const M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function le(T){const M=o.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function fe(T,M){const H=T.colorSpace,J=T.format,B=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==Po&&H!==ws&&(gt.getTransfer(H)===St?(J!==fi||B!==as)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function te(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=C,this.setTexture2D=Q,this.setTexture2DArray=j,this.setTexture3D=V,this.setTextureCube=Y,this.rebindTextures=ye,this.setupRenderTarget=He,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=se}function nL(t,e){function n(i,s=ws){let r;const o=gt.getTransfer(s);if(i===as)return t.UNSIGNED_BYTE;if(i===ch)return t.UNSIGNED_SHORT_4_4_4_4;if(i===uh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===s0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===n0)return t.BYTE;if(i===i0)return t.SHORT;if(i===Ia)return t.UNSIGNED_SHORT;if(i===lh)return t.INT;if(i===br)return t.UNSIGNED_INT;if(i===qi)return t.FLOAT;if(i===Wa)return t.HALF_FLOAT;if(i===r0)return t.ALPHA;if(i===o0)return t.RGB;if(i===fi)return t.RGBA;if(i===a0)return t.LUMINANCE;if(i===l0)return t.LUMINANCE_ALPHA;if(i===Ua)return t.DEPTH_COMPONENT;if(i===Na)return t.DEPTH_STENCIL;if(i===c0)return t.RED;if(i===fh)return t.RED_INTEGER;if(i===u0)return t.RG;if(i===dh)return t.RG_INTEGER;if(i===hh)return t.RGBA_INTEGER;if(i===Xl||i===jl||i===Yl||i===ql)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Xl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Xl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ql)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vf||i===Gf||i===Wf||i===$f)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Vf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$f)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xf||i===jf||i===Yf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xf||i===jf)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Yf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qf||i===Kf||i===Zf||i===Jf||i===Qf||i===ed||i===td||i===nd||i===id||i===sd||i===rd||i===od||i===ad||i===ld)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===qf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ed)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===td)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nd)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===id)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sd)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rd)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===od)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ad)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ld)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kl||i===cd||i===ud)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Kl)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ud)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===f0||i===fd||i===dd||i===hd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===La?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const iL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sL=`
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

}`;class rL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const s=new bn,r=e.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ls({vertexShader:iL,fragmentShader:sL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new An(new $a(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oL extends Ar{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,m=null;const g=new rL,_=n.getContextAttributes();let h=null,x=null;const y=[],v=[],P=new Ve;let D=null;const A=new Kn;A.viewport=new wt;const L=new Kn;L.viewport=new wt;const b=[A,L],S=new SR;let I=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let _e=y[ce];return _e===void 0&&(_e=new Gu,y[ce]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ce){let _e=y[ce];return _e===void 0&&(_e=new Gu,y[ce]=_e),_e.getGripSpace()},this.getHand=function(ce){let _e=y[ce];return _e===void 0&&(_e=new Gu,y[ce]=_e),_e.getHandSpace()};function N(ce){const _e=v.indexOf(ce.inputSource);if(_e===-1)return;const Re=y[_e];Re!==void 0&&(Re.update(ce.inputSource,ce.frame,c||o),Re.dispatchEvent({type:ce.type,data:ce.inputSource}))}function K(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",Q);for(let ce=0;ce<y.length;ce++){const _e=v[ce];_e!==null&&(v[ce]=null,y[ce].disconnect(_e))}I=null,C=null,g.reset(),e.setRenderTarget(h),p=null,d=null,f=null,s=null,x=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){r=ce,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){a=ce,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ce){c=ce},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ce){if(s=ce,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",K),s.addEventListener("inputsourceschange",Q),_.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Te=null,Ue=null;_.depth&&(Ue=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Re=_.stencil?Na:Ua,Te=_.stencil?La:br);const it={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:r};f=new XRWebGLBinding(s,n),d=f.createProjectionLayer(it),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Sr(d.textureWidth,d.textureHeight,{format:fi,type:as,depthTexture:new A0(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Re={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,Re),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Sr(p.framebufferWidth,p.framebufferHeight,{format:fi,type:as,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(ce){for(let _e=0;_e<ce.removed.length;_e++){const Re=ce.removed[_e],Te=v.indexOf(Re);Te>=0&&(v[Te]=null,y[Te].disconnect(Re))}for(let _e=0;_e<ce.added.length;_e++){const Re=ce.added[_e];let Te=v.indexOf(Re);if(Te===-1){for(let it=0;it<y.length;it++)if(it>=v.length){v.push(Re),Te=it;break}else if(v[it]===null){v[it]=Re,Te=it;break}if(Te===-1)break}const Ue=y[Te];Ue&&Ue.connect(Re)}}const j=new X,V=new X;function Y(ce,_e,Re){j.setFromMatrixPosition(_e.matrixWorld),V.setFromMatrixPosition(Re.matrixWorld);const Te=j.distanceTo(V),Ue=_e.projectionMatrix.elements,it=Re.projectionMatrix.elements,ye=Ue[14]/(Ue[10]-1),He=Ue[14]/(Ue[10]+1),U=(Ue[9]+1)/Ue[5],z=(Ue[9]-1)/Ue[5],w=(Ue[8]-1)/Ue[0],he=(it[8]+1)/it[0],re=ye*w,se=ye*he,le=Te/(-w+he),fe=le*-w;if(_e.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(fe),ce.translateZ(le),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),Ue[10]===-1)ce.projectionMatrix.copy(_e.projectionMatrix),ce.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const te=ye+le,T=He+le,M=re-fe,H=se+(Te-fe),J=U*He/T*te,B=z*He/T*te;ce.projectionMatrix.makePerspective(M,H,J,B,te,T),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function me(ce,_e){_e===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(_e.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(s===null)return;let _e=ce.near,Re=ce.far;g.texture!==null&&(g.depthNear>0&&(_e=g.depthNear),g.depthFar>0&&(Re=g.depthFar)),S.near=L.near=A.near=_e,S.far=L.far=A.far=Re,(I!==S.near||C!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,C=S.far),A.layers.mask=ce.layers.mask|2,L.layers.mask=ce.layers.mask|4,S.layers.mask=A.layers.mask|L.layers.mask;const Te=ce.parent,Ue=S.cameras;me(S,Te);for(let it=0;it<Ue.length;it++)me(Ue[it],Te);Ue.length===2?Y(S,A,L):S.projectionMatrix.copy(A.projectionMatrix),we(ce,S,Te)};function we(ce,_e,Re){Re===null?ce.matrix.copy(_e.matrixWorld):(ce.matrix.copy(Re.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(_e.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(_e.projectionMatrix),ce.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Oa*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ce){l=ce,d!==null&&(d.fixedFoveation=ce),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ce)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let Le=null;function Fe(ce,_e){if(u=_e.getViewerPose(c||o),m=_e,u!==null){const Re=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Te=!1;Re.length!==S.cameras.length&&(S.cameras.length=0,Te=!0);for(let ye=0;ye<Re.length;ye++){const He=Re[ye];let U=null;if(p!==null)U=p.getViewport(He);else{const w=f.getViewSubImage(d,He);U=w.viewport,ye===0&&(e.setRenderTargetTextures(x,w.colorTexture,w.depthStencilTexture),e.setRenderTarget(x))}let z=b[ye];z===void 0&&(z=new Kn,z.layers.enable(ye),z.viewport=new wt,b[ye]=z),z.matrix.fromArray(He.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(He.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(U.x,U.y,U.width,U.height),ye===0&&(S.matrix.copy(z.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Te===!0&&S.cameras.push(z)}const Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const ye=f.getDepthInformation(Re[0]);ye&&ye.isValid&&ye.texture&&g.init(e,ye,s.renderState)}}for(let Re=0;Re<y.length;Re++){const Te=v[Re],Ue=y[Re];Te!==null&&Ue!==void 0&&Ue.update(Te,_e,c||o)}Le&&Le(ce,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),m=null}const Qe=new P0;Qe.setAnimationLoop(Fe),this.setAnimationLoop=function(ce){Le=ce},this.dispose=function(){}}}const Ks=new Ii,aL=new Ct;function lL(t,e){function n(_,h){_.matrixAutoUpdate===!0&&_.updateMatrix(),h.value.copy(_.matrix)}function i(_,h){h.color.getRGB(_.fogColor.value,y0(t)),h.isFog?(_.fogNear.value=h.near,_.fogFar.value=h.far):h.isFogExp2&&(_.fogDensity.value=h.density)}function s(_,h,x,y,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(_,h):h.isMeshToonMaterial?(r(_,h),f(_,h)):h.isMeshPhongMaterial?(r(_,h),u(_,h)):h.isMeshStandardMaterial?(r(_,h),d(_,h),h.isMeshPhysicalMaterial&&p(_,h,v)):h.isMeshMatcapMaterial?(r(_,h),m(_,h)):h.isMeshDepthMaterial?r(_,h):h.isMeshDistanceMaterial?(r(_,h),g(_,h)):h.isMeshNormalMaterial?r(_,h):h.isLineBasicMaterial?(o(_,h),h.isLineDashedMaterial&&a(_,h)):h.isPointsMaterial?l(_,h,x,y):h.isSpriteMaterial?c(_,h):h.isShadowMaterial?(_.color.value.copy(h.color),_.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(_,h){_.opacity.value=h.opacity,h.color&&_.diffuse.value.copy(h.color),h.emissive&&_.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(_.map.value=h.map,n(h.map,_.mapTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,n(h.alphaMap,_.alphaMapTransform)),h.bumpMap&&(_.bumpMap.value=h.bumpMap,n(h.bumpMap,_.bumpMapTransform),_.bumpScale.value=h.bumpScale,h.side===Pn&&(_.bumpScale.value*=-1)),h.normalMap&&(_.normalMap.value=h.normalMap,n(h.normalMap,_.normalMapTransform),_.normalScale.value.copy(h.normalScale),h.side===Pn&&_.normalScale.value.negate()),h.displacementMap&&(_.displacementMap.value=h.displacementMap,n(h.displacementMap,_.displacementMapTransform),_.displacementScale.value=h.displacementScale,_.displacementBias.value=h.displacementBias),h.emissiveMap&&(_.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,_.emissiveMapTransform)),h.specularMap&&(_.specularMap.value=h.specularMap,n(h.specularMap,_.specularMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest);const x=e.get(h),y=x.envMap,v=x.envMapRotation;y&&(_.envMap.value=y,Ks.copy(v),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),_.envMapRotation.value.setFromMatrix4(aL.makeRotationFromEuler(Ks)),_.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=h.reflectivity,_.ior.value=h.ior,_.refractionRatio.value=h.refractionRatio),h.lightMap&&(_.lightMap.value=h.lightMap,_.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,_.lightMapTransform)),h.aoMap&&(_.aoMap.value=h.aoMap,_.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,_.aoMapTransform))}function o(_,h){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,h.map&&(_.map.value=h.map,n(h.map,_.mapTransform))}function a(_,h){_.dashSize.value=h.dashSize,_.totalSize.value=h.dashSize+h.gapSize,_.scale.value=h.scale}function l(_,h,x,y){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,_.size.value=h.size*x,_.scale.value=y*.5,h.map&&(_.map.value=h.map,n(h.map,_.uvTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,n(h.alphaMap,_.alphaMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest)}function c(_,h){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,_.rotation.value=h.rotation,h.map&&(_.map.value=h.map,n(h.map,_.mapTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,n(h.alphaMap,_.alphaMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest)}function u(_,h){_.specular.value.copy(h.specular),_.shininess.value=Math.max(h.shininess,1e-4)}function f(_,h){h.gradientMap&&(_.gradientMap.value=h.gradientMap)}function d(_,h){_.metalness.value=h.metalness,h.metalnessMap&&(_.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,_.metalnessMapTransform)),_.roughness.value=h.roughness,h.roughnessMap&&(_.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,_.roughnessMapTransform)),h.envMap&&(_.envMapIntensity.value=h.envMapIntensity)}function p(_,h,x){_.ior.value=h.ior,h.sheen>0&&(_.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),_.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(_.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,_.sheenColorMapTransform)),h.sheenRoughnessMap&&(_.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,_.sheenRoughnessMapTransform))),h.clearcoat>0&&(_.clearcoat.value=h.clearcoat,_.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(_.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,_.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(_.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Pn&&_.clearcoatNormalScale.value.negate())),h.dispersion>0&&(_.dispersion.value=h.dispersion),h.iridescence>0&&(_.iridescence.value=h.iridescence,_.iridescenceIOR.value=h.iridescenceIOR,_.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(_.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,_.iridescenceMapTransform)),h.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),h.transmission>0&&(_.transmission.value=h.transmission,_.transmissionSamplerMap.value=x.texture,_.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(_.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,_.transmissionMapTransform)),_.thickness.value=h.thickness,h.thicknessMap&&(_.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=h.attenuationDistance,_.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(_.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(_.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=h.specularIntensity,_.specularColor.value.copy(h.specularColor),h.specularColorMap&&(_.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,_.specularColorMapTransform)),h.specularIntensityMap&&(_.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,h){h.matcap&&(_.matcap.value=h.matcap)}function g(_,h){const x=e.get(h).light;_.referencePosition.value.setFromMatrixPosition(x.matrixWorld),_.nearDistance.value=x.shadow.camera.near,_.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cL(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;i.uniformBlockBinding(x,v)}function c(x,y){let v=s[x.id];v===void 0&&(m(x),v=u(x),s[x.id]=v,x.addEventListener("dispose",_));const P=y.program;i.updateUBOMapping(x,P);const D=e.render.frame;r[x.id]!==D&&(d(x),r[x.id]=D)}function u(x){const y=f();x.__bindingPointIndex=y;const v=t.createBuffer(),P=x.__size,D=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,P,D),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,v),v}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=s[x.id],v=x.uniforms,P=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let D=0,A=v.length;D<A;D++){const L=Array.isArray(v[D])?v[D]:[v[D]];for(let b=0,S=L.length;b<S;b++){const I=L[b];if(p(I,D,b,P)===!0){const C=I.__offset,N=Array.isArray(I.value)?I.value:[I.value];let K=0;for(let Q=0;Q<N.length;Q++){const j=N[Q],V=g(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,C+K,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,K),K+=V.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,C,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,y,v,P){const D=x.value,A=y+"_"+v;if(P[A]===void 0)return typeof D=="number"||typeof D=="boolean"?P[A]=D:P[A]=D.clone(),!0;{const L=P[A];if(typeof D=="number"||typeof D=="boolean"){if(L!==D)return P[A]=D,!0}else if(L.equals(D)===!1)return L.copy(D),!0}return!1}function m(x){const y=x.uniforms;let v=0;const P=16;for(let A=0,L=y.length;A<L;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,I=b.length;S<I;S++){const C=b[S],N=Array.isArray(C.value)?C.value:[C.value];for(let K=0,Q=N.length;K<Q;K++){const j=N[K],V=g(j),Y=v%P,me=Y%V.boundary,we=Y+me;v+=me,we!==0&&P-we<V.storage&&(v+=P-we),C.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=v,v+=V.storage}}}const D=v%P;return D>0&&(v+=P-D),x.__size=v,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function _(x){const y=x.target;y.removeEventListener("dispose",_);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),t.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function h(){for(const x in s)t.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class uL{constructor(e={}){const{canvas:n=NC(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,h=null;const x=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ps,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let P=!1;this._outputColorSpace=qn;let D=0,A=0,L=null,b=-1,S=null;const I=new wt,C=new wt;let N=null;const K=new st(0);let Q=0,j=n.width,V=n.height,Y=1,me=null,we=null;const Le=new wt(0,0,j,V),Fe=new wt(0,0,j,V);let Qe=!1;const ce=new vh;let _e=!1,Re=!1;const Te=new Ct,Ue=new Ct,it=new X,ye=new wt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let U=!1;function z(){return L===null?Y:1}let w=i;function he(R,q){return n.getContext(R,q)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ah}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",Ae,!1),w===null){const q="webgl2";if(w=he(q,R),w===null)throw he(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let re,se,le,fe,te,T,M,H,J,B,E,k,G,W,pe,ee,ue,Me,Ne,xe,ke,ze,tt,$;function be(){re=new xD(w),re.init(),ze=new nL(w,re),se=new hD(w,re,e,ze),le=new eL(w,re),se.reverseDepthBuffer&&d&&le.buffers.depth.setReversed(!0),fe=new MD(w),te=new HI,T=new tL(w,re,le,te,se,ze,fe),M=new mD(v),H=new yD(v),J=new RR(w),tt=new fD(w,J),B=new bD(w,J,fe,tt),E=new TD(w,B,J,fe),Ne=new ED(w,se,T),ee=new pD(te),k=new zI(v,M,H,re,se,tt,ee),G=new lL(v,te),W=new GI,pe=new qI(re),Me=new uD(v,M,H,le,E,p,l),ue=new JI(v,E,se),$=new cL(w,fe,se,le),xe=new dD(w,re,fe),ke=new SD(w,re,fe),fe.programs=k.programs,v.capabilities=se,v.extensions=re,v.properties=te,v.renderLists=W,v.shadowMap=ue,v.state=le,v.info=fe}be();const ne=new oL(v,w);this.xr=ne,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const R=re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(j,V,!1))},this.getSize=function(R){return R.set(j,V)},this.setSize=function(R,q,ie=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=R,V=q,n.width=Math.floor(R*Y),n.height=Math.floor(q*Y),ie===!0&&(n.style.width=R+"px",n.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(j*Y,V*Y).floor()},this.setDrawingBufferSize=function(R,q,ie){j=R,V=q,Y=ie,n.width=Math.floor(R*ie),n.height=Math.floor(q*ie),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(Le)},this.setViewport=function(R,q,ie,oe){R.isVector4?Le.set(R.x,R.y,R.z,R.w):Le.set(R,q,ie,oe),le.viewport(I.copy(Le).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(Fe)},this.setScissor=function(R,q,ie,oe){R.isVector4?Fe.set(R.x,R.y,R.z,R.w):Fe.set(R,q,ie,oe),le.scissor(C.copy(Fe).multiplyScalar(Y).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(R){le.setScissorTest(Qe=R)},this.setOpaqueSort=function(R){me=R},this.setTransparentSort=function(R){we=R},this.getClearColor=function(R){return R.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ie=!0){let oe=0;if(R){let Z=!1;if(L!==null){const Ee=L.texture.format;Z=Ee===hh||Ee===dh||Ee===fh}if(Z){const Ee=L.texture.type,Ie=Ee===as||Ee===br||Ee===Ia||Ee===La||Ee===ch||Ee===uh,Oe=Me.getClearColor(),Be=Me.getClearAlpha(),et=Oe.r,Je=Oe.g,$e=Oe.b;Ie?(m[0]=et,m[1]=Je,m[2]=$e,m[3]=Be,w.clearBufferuiv(w.COLOR,0,m)):(g[0]=et,g[1]=Je,g[2]=$e,g[3]=Be,w.clearBufferiv(w.COLOR,0,g))}else oe|=w.COLOR_BUFFER_BIT}q&&(oe|=w.DEPTH_BUFFER_BIT),ie&&(oe|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",Ae,!1),Me.dispose(),W.dispose(),pe.dispose(),te.dispose(),M.dispose(),H.dispose(),E.dispose(),tt.dispose(),$.dispose(),k.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",us),ne.removeEventListener("sessionend",Cr),ti.stop()};function de(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=fe.autoReset,q=ue.enabled,ie=ue.autoUpdate,oe=ue.needsUpdate,Z=ue.type;be(),fe.autoReset=R,ue.enabled=q,ue.autoUpdate=ie,ue.needsUpdate=oe,ue.type=Z}function Ae(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function qe(R){const q=R.target;q.removeEventListener("dispose",qe),xt(q)}function xt(R){Ut(R),te.remove(R)}function Ut(R){const q=te.get(R).programs;q!==void 0&&(q.forEach(function(ie){k.releaseProgram(ie)}),R.isShaderMaterial&&k.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ie,oe,Z,Ee){q===null&&(q=He);const Ie=Z.isMesh&&Z.matrixWorld.determinant()<0,Oe=gi(R,q,ie,oe,Z);le.setMaterial(oe,Ie);let Be=ie.index,et=1;if(oe.wireframe===!0){if(Be=B.getWireframeAttribute(ie),Be===void 0)return;et=2}const Je=ie.drawRange,$e=ie.attributes.position;let pt=Je.start*et,_t=(Je.start+Je.count)*et;Ee!==null&&(pt=Math.max(pt,Ee.start*et),_t=Math.min(_t,(Ee.start+Ee.count)*et)),Be!==null?(pt=Math.max(pt,0),_t=Math.min(_t,Be.count)):$e!=null&&(pt=Math.max(pt,0),_t=Math.min(_t,$e.count));const Bt=_t-pt;if(Bt<0||Bt===1/0)return;tt.setup(Z,oe,Oe,ie,Be);let Nt,mt=xe;if(Be!==null&&(Nt=J.get(Be),mt=ke,mt.setIndex(Nt)),Z.isMesh)oe.wireframe===!0?(le.setLineWidth(oe.wireframeLinewidth*z()),mt.setMode(w.LINES)):mt.setMode(w.TRIANGLES);else if(Z.isLine){let je=oe.linewidth;je===void 0&&(je=1),le.setLineWidth(je*z()),Z.isLineSegments?mt.setMode(w.LINES):Z.isLineLoop?mt.setMode(w.LINE_LOOP):mt.setMode(w.LINE_STRIP)}else Z.isPoints?mt.setMode(w.POINTS):Z.isSprite&&mt.setMode(w.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Zl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))mt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const je=Z._multiDrawStarts,Zt=Z._multiDrawCounts,vt=Z._multiDrawCount,si=Be?J.get(Be).bytesPerElement:1,Lr=te.get(oe).currentProgram.getUniforms();for(let In=0;In<vt;In++)Lr.setValue(w,"_gl_DrawID",In),mt.render(je[In]/si,Zt[In])}else if(Z.isInstancedMesh)mt.renderInstances(pt,Bt,Z.count);else if(ie.isInstancedBufferGeometry){const je=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Zt=Math.min(ie.instanceCount,je);mt.renderInstances(pt,Bt,Zt)}else mt.render(pt,Bt)};function ut(R,q,ie){R.transparent===!0&&R.side===wi&&R.forceSinglePass===!1?(R.side=Pn,R.needsUpdate=!0,Ir(R,q,ie),R.side=Ds,R.needsUpdate=!0,Ir(R,q,ie),R.side=wi):Ir(R,q,ie)}this.compile=function(R,q,ie=null){ie===null&&(ie=R),h=pe.get(ie),h.init(q),y.push(h),ie.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(h.pushLight(Z),Z.castShadow&&h.pushShadow(Z))}),R!==ie&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(h.pushLight(Z),Z.castShadow&&h.pushShadow(Z))}),h.setupLights();const oe=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ee=Z.material;if(Ee)if(Array.isArray(Ee))for(let Ie=0;Ie<Ee.length;Ie++){const Oe=Ee[Ie];ut(Oe,ie,Z),oe.add(Oe)}else ut(Ee,ie,Z),oe.add(Ee)}),h=y.pop(),oe},this.compileAsync=function(R,q,ie=null){const oe=this.compile(R,q,ie);return new Promise(Z=>{function Ee(){if(oe.forEach(function(Ie){te.get(Ie).currentProgram.isReady()&&oe.delete(Ie)}),oe.size===0){Z(R);return}setTimeout(Ee,10)}re.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Ot=null;function hn(R){Ot&&Ot(R)}function us(){ti.stop()}function Cr(){ti.start()}const ti=new P0;ti.setAnimationLoop(hn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(R){Ot=R,ne.setAnimationLoop(R),R===null?ti.stop():ti.start()},ne.addEventListener("sessionstart",us),ne.addEventListener("sessionend",Cr),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(q),q=ne.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,q,L),h=pe.get(R,y.length),h.init(q),y.push(h),Ue.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ce.setFromProjectionMatrix(Ue),Re=this.localClippingEnabled,_e=ee.init(this.clippingPlanes,Re),_=W.get(R,x.length),_.init(),x.push(_),ne.enabled===!0&&ne.isPresenting===!0){const Ee=v.xr.getDepthSensingMesh();Ee!==null&&Bs(Ee,q,-1/0,v.sortObjects)}Bs(R,q,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(me,we),U=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,U&&Me.addToRenderList(_,R),this.info.render.frame++,_e===!0&&ee.beginShadows();const ie=h.state.shadowsArray;ue.render(ie,R,q),_e===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=_.opaque,Z=_.transmissive;if(h.setupLights(),q.isArrayCamera){const Ee=q.cameras;if(Z.length>0)for(let Ie=0,Oe=Ee.length;Ie<Oe;Ie++){const Be=Ee[Ie];Pr(oe,Z,R,Be)}U&&Me.render(R);for(let Ie=0,Oe=Ee.length;Ie<Oe;Ie++){const Be=Ee[Ie];Rr(_,R,Be,Be.viewport)}}else Z.length>0&&Pr(oe,Z,R,q),U&&Me.render(R),Rr(_,R,q);L!==null&&A===0&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),R.isScene===!0&&R.onAfterRender(v,R,q),tt.resetDefaultState(),b=-1,S=null,y.pop(),y.length>0?(h=y[y.length-1],_e===!0&&ee.setGlobalState(v.clippingPlanes,h.state.camera)):h=null,x.pop(),x.length>0?_=x[x.length-1]:_=null};function Bs(R,q,ie,oe){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ce.intersectsSprite(R)){oe&&ye.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ue);const Ie=E.update(R),Oe=R.material;Oe.visible&&_.push(R,Ie,Oe,ie,ye.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ce.intersectsObject(R))){const Ie=E.update(R),Oe=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ye.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ye.copy(Ie.boundingSphere.center)),ye.applyMatrix4(R.matrixWorld).applyMatrix4(Ue)),Array.isArray(Oe)){const Be=Ie.groups;for(let et=0,Je=Be.length;et<Je;et++){const $e=Be[et],pt=Oe[$e.materialIndex];pt&&pt.visible&&_.push(R,Ie,pt,ie,ye.z,$e)}}else Oe.visible&&_.push(R,Ie,Oe,ie,ye.z,null)}}const Ee=R.children;for(let Ie=0,Oe=Ee.length;Ie<Oe;Ie++)Bs(Ee[Ie],q,ie,oe)}function Rr(R,q,ie,oe){const Z=R.opaque,Ee=R.transmissive,Ie=R.transparent;h.setupLightsView(ie),_e===!0&&ee.setGlobalState(v.clippingPlanes,ie),oe&&le.viewport(I.copy(oe)),Z.length>0&&Dr(Z,q,ie),Ee.length>0&&Dr(Ee,q,ie),Ie.length>0&&Dr(Ie,q,ie),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Pr(R,q,ie,oe){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[oe.id]===void 0&&(h.state.transmissionRenderTarget[oe.id]=new Sr(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Wa:as,minFilter:cr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const Ee=h.state.transmissionRenderTarget[oe.id],Ie=oe.viewport||I;Ee.setSize(Ie.z*v.transmissionResolutionScale,Ie.w*v.transmissionResolutionScale);const Oe=v.getRenderTarget();v.setRenderTarget(Ee),v.getClearColor(K),Q=v.getClearAlpha(),Q<1&&v.setClearColor(16777215,.5),v.clear(),U&&Me.render(ie);const Be=v.toneMapping;v.toneMapping=Ps;const et=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),h.setupLightsView(oe),_e===!0&&ee.setGlobalState(v.clippingPlanes,oe),Dr(R,ie,oe),T.updateMultisampleRenderTarget(Ee),T.updateRenderTargetMipmap(Ee),re.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let $e=0,pt=q.length;$e<pt;$e++){const _t=q[$e],Bt=_t.object,Nt=_t.geometry,mt=_t.material,je=_t.group;if(mt.side===wi&&Bt.layers.test(oe.layers)){const Zt=mt.side;mt.side=Pn,mt.needsUpdate=!0,Xa(Bt,ie,oe,Nt,mt,je),mt.side=Zt,mt.needsUpdate=!0,Je=!0}}Je===!0&&(T.updateMultisampleRenderTarget(Ee),T.updateRenderTargetMipmap(Ee))}v.setRenderTarget(Oe),v.setClearColor(K,Q),et!==void 0&&(oe.viewport=et),v.toneMapping=Be}function Dr(R,q,ie){const oe=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Ee=R.length;Z<Ee;Z++){const Ie=R[Z],Oe=Ie.object,Be=Ie.geometry,et=Ie.group;let Je=Ie.material;Je.allowOverride===!0&&oe!==null&&(Je=oe),Oe.layers.test(ie.layers)&&Xa(Oe,q,ie,Be,Je,et)}}function Xa(R,q,ie,oe,Z,Ee){R.onBeforeRender(v,q,ie,oe,Z,Ee),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(v,q,ie,oe,R,Ee),Z.transparent===!0&&Z.side===wi&&Z.forceSinglePass===!1?(Z.side=Pn,Z.needsUpdate=!0,v.renderBufferDirect(ie,q,oe,Z,R,Ee),Z.side=Ds,Z.needsUpdate=!0,v.renderBufferDirect(ie,q,oe,Z,R,Ee),Z.side=wi):v.renderBufferDirect(ie,q,oe,Z,R,Ee),R.onAfterRender(v,q,ie,oe,Z,Ee)}function Ir(R,q,ie){q.isScene!==!0&&(q=He);const oe=te.get(R),Z=h.state.lights,Ee=h.state.shadowsArray,Ie=Z.state.version,Oe=k.getParameters(R,Z.state,Ee,q,ie),Be=k.getProgramCacheKey(Oe);let et=oe.programs;oe.environment=R.isMeshStandardMaterial?q.environment:null,oe.fog=q.fog,oe.envMap=(R.isMeshStandardMaterial?H:M).get(R.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",qe),et=new Map,oe.programs=et);let Je=et.get(Be);if(Je!==void 0){if(oe.currentProgram===Je&&oe.lightsStateVersion===Ie)return ii(R,Oe),Je}else Oe.uniforms=k.getUniforms(R),R.onBeforeCompile(Oe,v),Je=k.acquireProgram(Oe,Be),et.set(Be,Je),oe.uniforms=Oe.uniforms;const $e=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($e.clippingPlanes=ee.uniform),ii(R,Oe),oe.needsLights=ja(R),oe.lightsStateVersion=Ie,oe.needsLights&&($e.ambientLightColor.value=Z.state.ambient,$e.lightProbe.value=Z.state.probe,$e.directionalLights.value=Z.state.directional,$e.directionalLightShadows.value=Z.state.directionalShadow,$e.spotLights.value=Z.state.spot,$e.spotLightShadows.value=Z.state.spotShadow,$e.rectAreaLights.value=Z.state.rectArea,$e.ltc_1.value=Z.state.rectAreaLTC1,$e.ltc_2.value=Z.state.rectAreaLTC2,$e.pointLights.value=Z.state.point,$e.pointLightShadows.value=Z.state.pointShadow,$e.hemisphereLights.value=Z.state.hemi,$e.directionalShadowMap.value=Z.state.directionalShadowMap,$e.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,$e.spotShadowMap.value=Z.state.spotShadowMap,$e.spotLightMatrix.value=Z.state.spotLightMatrix,$e.spotLightMap.value=Z.state.spotLightMap,$e.pointShadowMap.value=Z.state.pointShadowMap,$e.pointShadowMatrix.value=Z.state.pointShadowMatrix),oe.currentProgram=Je,oe.uniformsList=null,Je}function ni(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Jl.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function ii(R,q){const ie=te.get(R);ie.outputColorSpace=q.outputColorSpace,ie.batching=q.batching,ie.batchingColor=q.batchingColor,ie.instancing=q.instancing,ie.instancingColor=q.instancingColor,ie.instancingMorph=q.instancingMorph,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function gi(R,q,ie,oe,Z){q.isScene!==!0&&(q=He),T.resetTextureUnits();const Ee=q.fog,Ie=oe.isMeshStandardMaterial?q.environment:null,Oe=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Po,Be=(oe.isMeshStandardMaterial?H:M).get(oe.envMap||Ie),et=oe.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Je=!!ie.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),$e=!!ie.morphAttributes.position,pt=!!ie.morphAttributes.normal,_t=!!ie.morphAttributes.color;let Bt=Ps;oe.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Bt=v.toneMapping);const Nt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,mt=Nt!==void 0?Nt.length:0,je=te.get(oe),Zt=h.state.lights;if(_e===!0&&(Re===!0||R!==S)){const pn=R===S&&oe.id===b;ee.setState(oe,R,pn)}let vt=!1;oe.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Zt.state.version||je.outputColorSpace!==Oe||Z.isBatchedMesh&&je.batching===!1||!Z.isBatchedMesh&&je.batching===!0||Z.isBatchedMesh&&je.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&je.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&je.instancing===!1||!Z.isInstancedMesh&&je.instancing===!0||Z.isSkinnedMesh&&je.skinning===!1||!Z.isSkinnedMesh&&je.skinning===!0||Z.isInstancedMesh&&je.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&je.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&je.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&je.instancingMorph===!1&&Z.morphTexture!==null||je.envMap!==Be||oe.fog===!0&&je.fog!==Ee||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ee.numPlanes||je.numIntersection!==ee.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==Je||je.morphTargets!==$e||je.morphNormals!==pt||je.morphColors!==_t||je.toneMapping!==Bt||je.morphTargetsCount!==mt)&&(vt=!0):(vt=!0,je.__version=oe.version);let si=je.currentProgram;vt===!0&&(si=Ir(oe,q,Z));let Lr=!1,In=!1,ko=!1;const Pt=si.getUniforms(),Gn=je.uniforms;if(le.useProgram(si.program)&&(Lr=!0,In=!0,ko=!0),oe.id!==b&&(b=oe.id,In=!0),Lr||S!==R){le.buffers.depth.getReversed()?(Te.copy(R.projectionMatrix),FC(Te),BC(Te),Pt.setValue(w,"projectionMatrix",Te)):Pt.setValue(w,"projectionMatrix",R.projectionMatrix),Pt.setValue(w,"viewMatrix",R.matrixWorldInverse);const Mn=Pt.map.cameraPosition;Mn!==void 0&&Mn.setValue(w,it.setFromMatrixPosition(R.matrixWorld)),se.logarithmicDepthBuffer&&Pt.setValue(w,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Pt.setValue(w,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,In=!0,ko=!0)}if(Z.isSkinnedMesh){Pt.setOptional(w,Z,"bindMatrix"),Pt.setOptional(w,Z,"bindMatrixInverse");const pn=Z.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Pt.setValue(w,"boneTexture",pn.boneTexture,T))}Z.isBatchedMesh&&(Pt.setOptional(w,Z,"batchingTexture"),Pt.setValue(w,"batchingTexture",Z._matricesTexture,T),Pt.setOptional(w,Z,"batchingIdTexture"),Pt.setValue(w,"batchingIdTexture",Z._indirectTexture,T),Pt.setOptional(w,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Pt.setValue(w,"batchingColorTexture",Z._colorsTexture,T));const Wn=ie.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&Ne.update(Z,ie,si),(In||je.receiveShadow!==Z.receiveShadow)&&(je.receiveShadow=Z.receiveShadow,Pt.setValue(w,"receiveShadow",Z.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Gn.envMap.value=Be,Gn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&q.environment!==null&&(Gn.envMapIntensity.value=q.environmentIntensity),In&&(Pt.setValue(w,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&Zc(Gn,ko),Ee&&oe.fog===!0&&G.refreshFogUniforms(Gn,Ee),G.refreshMaterialUniforms(Gn,oe,Y,V,h.state.transmissionRenderTarget[R.id]),Jl.upload(w,ni(je),Gn,T)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Jl.upload(w,ni(je),Gn,T),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Pt.setValue(w,"center",Z.center),Pt.setValue(w,"modelViewMatrix",Z.modelViewMatrix),Pt.setValue(w,"normalMatrix",Z.normalMatrix),Pt.setValue(w,"modelMatrix",Z.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const pn=oe.uniformsGroups;for(let Mn=0,eu=pn.length;Mn<eu;Mn++){const ks=pn[Mn];$.update(ks,si),$.bind(ks,si)}}return si}function Zc(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function ja(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(R,q,ie){const oe=te.get(R);oe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),te.get(R.texture).__webglTexture=q,te.get(R.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ie,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ie=te.get(R);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0};const Jc=w.createFramebuffer();this.setRenderTarget=function(R,q=0,ie=0){L=R,D=q,A=ie;let oe=!0,Z=null,Ee=!1,Ie=!1;if(R){const Be=te.get(R);if(Be.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(w.FRAMEBUFFER,null),oe=!1;else if(Be.__webglFramebuffer===void 0)T.setupRenderTarget(R);else if(Be.__hasExternalTextures)T.rebindTextures(R,te.get(R.texture).__webglTexture,te.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $e=R.depthTexture;if(Be.__boundDepthTexture!==$e){if($e!==null&&te.has($e)&&(R.width!==$e.image.width||R.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ie=!0);const Je=te.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[q])?Z=Je[q][ie]:Z=Je[q],Ee=!0):R.samples>0&&T.useMultisampledRTT(R)===!1?Z=te.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?Z=Je[ie]:Z=Je,I.copy(R.viewport),C.copy(R.scissor),N=R.scissorTest}else I.copy(Le).multiplyScalar(Y).floor(),C.copy(Fe).multiplyScalar(Y).floor(),N=Qe;if(ie!==0&&(Z=Jc),le.bindFramebuffer(w.FRAMEBUFFER,Z)&&oe&&le.drawBuffers(R,Z),le.viewport(I),le.scissor(C),le.setScissorTest(N),Ee){const Be=te.get(R.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+q,Be.__webglTexture,ie)}else if(Ie){const Be=te.get(R.texture),et=q;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Be.__webglTexture,ie,et)}else if(R!==null&&ie!==0){const Be=te.get(R.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Be.__webglTexture,ie)}b=-1},this.readRenderTargetPixels=function(R,q,ie,oe,Z,Ee,Ie){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=te.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){le.bindFramebuffer(w.FRAMEBUFFER,Oe);try{const Be=R.texture,et=Be.format,Je=Be.type;if(!se.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-oe&&ie>=0&&ie<=R.height-Z&&w.readPixels(q,ie,oe,Z,ze.convert(et),ze.convert(Je),Ee)}finally{const Be=L!==null?te.get(L).__webglFramebuffer:null;le.bindFramebuffer(w.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(R,q,ie,oe,Z,Ee,Ie){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=te.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe)if(q>=0&&q<=R.width-oe&&ie>=0&&ie<=R.height-Z){le.bindFramebuffer(w.FRAMEBUFFER,Oe);const Be=R.texture,et=Be.format,Je=Be.type;if(!se.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,$e),w.bufferData(w.PIXEL_PACK_BUFFER,Ee.byteLength,w.STREAM_READ),w.readPixels(q,ie,oe,Z,ze.convert(et),ze.convert(Je),0);const pt=L!==null?te.get(L).__webglFramebuffer:null;le.bindFramebuffer(w.FRAMEBUFFER,pt);const _t=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await OC(w,_t,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,$e),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Ee),w.deleteBuffer($e),w.deleteSync(_t),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ie=0){const oe=Math.pow(2,-ie),Z=Math.floor(R.image.width*oe),Ee=Math.floor(R.image.height*oe),Ie=q!==null?q.x:0,Oe=q!==null?q.y:0;T.setTexture2D(R,0),w.copyTexSubImage2D(w.TEXTURE_2D,ie,0,0,Ie,Oe,Z,Ee),le.unbindTexture()};const Qc=w.createFramebuffer(),Bo=w.createFramebuffer();this.copyTextureToTexture=function(R,q,ie=null,oe=null,Z=0,Ee=null){Ee===null&&(Z!==0?(Zl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=Z,Z=0):Ee=0);let Ie,Oe,Be,et,Je,$e,pt,_t,Bt;const Nt=R.isCompressedTexture?R.mipmaps[Ee]:R.image;if(ie!==null)Ie=ie.max.x-ie.min.x,Oe=ie.max.y-ie.min.y,Be=ie.isBox3?ie.max.z-ie.min.z:1,et=ie.min.x,Je=ie.min.y,$e=ie.isBox3?ie.min.z:0;else{const Wn=Math.pow(2,-Z);Ie=Math.floor(Nt.width*Wn),Oe=Math.floor(Nt.height*Wn),R.isDataArrayTexture?Be=Nt.depth:R.isData3DTexture?Be=Math.floor(Nt.depth*Wn):Be=1,et=0,Je=0,$e=0}oe!==null?(pt=oe.x,_t=oe.y,Bt=oe.z):(pt=0,_t=0,Bt=0);const mt=ze.convert(q.format),je=ze.convert(q.type);let Zt;q.isData3DTexture?(T.setTexture3D(q,0),Zt=w.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(T.setTexture2DArray(q,0),Zt=w.TEXTURE_2D_ARRAY):(T.setTexture2D(q,0),Zt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,q.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,q.unpackAlignment);const vt=w.getParameter(w.UNPACK_ROW_LENGTH),si=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Lr=w.getParameter(w.UNPACK_SKIP_PIXELS),In=w.getParameter(w.UNPACK_SKIP_ROWS),ko=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Nt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Nt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,et),w.pixelStorei(w.UNPACK_SKIP_ROWS,Je),w.pixelStorei(w.UNPACK_SKIP_IMAGES,$e);const Pt=R.isDataArrayTexture||R.isData3DTexture,Gn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Wn=te.get(R),pn=te.get(q),Mn=te.get(Wn.__renderTarget),eu=te.get(pn.__renderTarget);le.bindFramebuffer(w.READ_FRAMEBUFFER,Mn.__webglFramebuffer),le.bindFramebuffer(w.DRAW_FRAMEBUFFER,eu.__webglFramebuffer);for(let ks=0;ks<Be;ks++)Pt&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,te.get(R).__webglTexture,Z,$e+ks),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,te.get(q).__webglTexture,Ee,Bt+ks)),w.blitFramebuffer(et,Je,Ie,Oe,pt,_t,Ie,Oe,w.DEPTH_BUFFER_BIT,w.NEAREST);le.bindFramebuffer(w.READ_FRAMEBUFFER,null),le.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||te.has(R)){const Wn=te.get(R),pn=te.get(q);le.bindFramebuffer(w.READ_FRAMEBUFFER,Qc),le.bindFramebuffer(w.DRAW_FRAMEBUFFER,Bo);for(let Mn=0;Mn<Be;Mn++)Pt?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Wn.__webglTexture,Z,$e+Mn):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Wn.__webglTexture,Z),Gn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,pn.__webglTexture,Ee,Bt+Mn):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,pn.__webglTexture,Ee),Z!==0?w.blitFramebuffer(et,Je,Ie,Oe,pt,_t,Ie,Oe,w.COLOR_BUFFER_BIT,w.NEAREST):Gn?w.copyTexSubImage3D(Zt,Ee,pt,_t,Bt+Mn,et,Je,Ie,Oe):w.copyTexSubImage2D(Zt,Ee,pt,_t,et,Je,Ie,Oe);le.bindFramebuffer(w.READ_FRAMEBUFFER,null),le.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Gn?R.isDataTexture||R.isData3DTexture?w.texSubImage3D(Zt,Ee,pt,_t,Bt,Ie,Oe,Be,mt,je,Nt.data):q.isCompressedArrayTexture?w.compressedTexSubImage3D(Zt,Ee,pt,_t,Bt,Ie,Oe,Be,mt,Nt.data):w.texSubImage3D(Zt,Ee,pt,_t,Bt,Ie,Oe,Be,mt,je,Nt):R.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Ee,pt,_t,Ie,Oe,mt,je,Nt.data):R.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Ee,pt,_t,Nt.width,Nt.height,mt,Nt.data):w.texSubImage2D(w.TEXTURE_2D,Ee,pt,_t,Ie,Oe,mt,je,Nt);w.pixelStorei(w.UNPACK_ROW_LENGTH,vt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,si),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Lr),w.pixelStorei(w.UNPACK_SKIP_ROWS,In),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ko),Ee===0&&q.generateMipmaps&&w.generateMipmap(Zt),le.unbindTexture()},this.copyTextureToTexture3D=function(R,q,ie=null,oe=null,Z=0){return Zl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,ie,oe,Z)},this.initRenderTarget=function(R){te.get(R).__webglFramebuffer===void 0&&T.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?T.setTextureCube(R,0):R.isData3DTexture?T.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?T.setTexture2DArray(R,0):T.setTexture2D(R,0),le.unbindTexture()},this.resetState=function(){D=0,A=0,L=null,le.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),n.unpackColorSpace=gt._getUnpackColorSpace()}}const Mg={type:"change"},bh={type:"start"},N0={type:"end"},Ol=new jc,Eg=new Ts,fL=Math.cos(70*ir.DEG2RAD),Vt=new X,En=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sf=1e-6;class dL extends AR{constructor(e,n=null){super(e,n),this.state=Mt.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mo.ROTATE,MIDDLE:mo.DOLLY,RIGHT:mo.PAN},this.touches={ONE:ro.ROTATE,TWO:ro.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Mr,this._lastTargetPosition=new X,this._quat=new Mr().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qm,this._sphericalDelta=new qm,this._scale=1,this._panOffset=new X,this._rotateStart=new Ve,this._rotateEnd=new Ve,this._rotateDelta=new Ve,this._panStart=new Ve,this._panEnd=new Ve,this._panDelta=new Ve,this._dollyStart=new Ve,this._dollyEnd=new Ve,this._dollyDelta=new Ve,this._dollyDirection=new X,this._mouse=new Ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pL.bind(this),this._onPointerDown=hL.bind(this),this._onPointerUp=mL.bind(this),this._onContextMenu=SL.bind(this),this._onMouseWheel=vL.bind(this),this._onKeyDown=yL.bind(this),this._onTouchStart=xL.bind(this),this._onTouchMove=bL.bind(this),this._onMouseDown=gL.bind(this),this._onMouseMove=_L.bind(this),this._interceptControlDown=ML.bind(this),this._interceptControlUp=EL.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mg),this.update(),this.state=Mt.NONE}update(e=null){const n=this.object.position;Vt.copy(n).sub(this.target),Vt.applyQuaternion(this._quat),this._spherical.setFromVector3(Vt),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=En:i>Math.PI&&(i-=En),s<-Math.PI?s+=En:s>Math.PI&&(s-=En),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Vt.setFromSpherical(this._spherical),Vt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Vt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new X(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new X(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ol.origin.copy(this.object.position),Ol.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ol.direction))<fL?this.object.lookAt(this.target):(Eg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ol.intersectPlane(Eg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>sf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sf||this._lastTargetPosition.distanceToSquared(this.target)>sf?(this.dispatchEvent(Mg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?En/60*this.autoRotateSpeed*e:En/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Vt.setFromMatrixColumn(n,0),Vt.multiplyScalar(-e),this._panOffset.add(Vt)}_panUp(e,n){this.screenSpacePanning===!0?Vt.setFromMatrixColumn(n,1):(Vt.setFromMatrixColumn(n,0),Vt.crossVectors(this.object.up,Vt)),Vt.multiplyScalar(e),this._panOffset.add(Vt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Vt.copy(s).sub(this.target);let r=Vt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(En*this._rotateDelta.x/n.clientHeight),this._rotateUp(En*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(En*this._rotateDelta.x/n.clientHeight),this._rotateUp(En*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ve,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function hL(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function pL(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function mL(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(N0),this.state=Mt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function gL(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case mo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Mt.DOLLY;break;case mo.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Mt.ROTATE}break;case mo.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(bh)}function _L(t){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function vL(t){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(t.preventDefault(),this.dispatchEvent(bh),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(N0))}function yL(t){this.enabled!==!1&&this._handleKeyDown(t)}function xL(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ro.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Mt.TOUCH_ROTATE;break;case ro.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case ro.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Mt.TOUCH_DOLLY_PAN;break;case ro.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(bh)}function bL(t){switch(this._trackPointer(t),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Mt.NONE}}function SL(t){this.enabled!==!1&&t.preventDefault()}function ML(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function EL(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Tg=new Os,Fl=new X;class O0 extends bR{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new $t(e,3)),this.setAttribute("uv",new $t(n,2))}applyMatrix4(e){const n=this.attributes.instanceStart,i=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(e),i.applyMatrix4(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new md(n,6,1);return this.setAttribute("instanceStart",new Ri(i,3,0)),this.setAttribute("instanceEnd",new Ri(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new md(n,6,1);return this.setAttribute("instanceColorStart",new Ri(i,3,0)),this.setAttribute("instanceColorEnd",new Ri(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new dR(e.geometry)),this}fromLineSegments(e){const n=e.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;e!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Tg.setFromBufferAttribute(n),this.boundingBox.union(Tg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(e!==void 0&&n!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Fl.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Fl)),Fl.fromBufferAttribute(n,r),s=Math.max(s,i.distanceToSquared(Fl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Ce.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ve(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Tn.line={uniforms:_h.merge([Ce.common,Ce.fog,Ce.line]),vertexShader:`
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
		`};class Sh extends ls{constructor(e){super({type:"LineMaterial",uniforms:_h.clone(Tn.line.uniforms),vertexShader:Tn.line.vertexShader,fragmentShader:Tn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const rf=new wt,wg=new X,Ag=new X,Jt=new wt,Qt=new wt,vi=new wt,of=new X,af=new Ct,en=new ER,Cg=new X,Bl=new Os,kl=new Oo,yi=new wt;let Ai,gr;function Rg(t,e,n){return yi.set(0,0,-e,1).applyMatrix4(t.projectionMatrix),yi.multiplyScalar(1/yi.w),yi.x=gr/n.width,yi.y=gr/n.height,yi.applyMatrix4(t.projectionMatrixInverse),yi.multiplyScalar(1/yi.w),Math.abs(Math.max(yi.x,yi.y))}function TL(t,e){const n=t.matrixWorld,i=t.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){en.start.fromBufferAttribute(s,a),en.end.fromBufferAttribute(r,a),en.applyMatrix4(n);const c=new X,u=new X;Ai.distanceSqToSegment(en.start,en.end,u,c),u.distanceTo(c)<gr*.5&&e.push({point:u,pointOnLine:c,distance:Ai.origin.distanceTo(u),object:t,face:null,faceIndex:a,uv:null,uv1:null})}}function wL(t,e,n){const i=e.projectionMatrix,r=t.material.resolution,o=t.matrixWorld,a=t.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),f=-e.near;Ai.at(1,vi),vi.w=1,vi.applyMatrix4(e.matrixWorldInverse),vi.applyMatrix4(i),vi.multiplyScalar(1/vi.w),vi.x*=r.x/2,vi.y*=r.y/2,vi.z=0,of.copy(vi),af.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,p=u;d<p;d++){if(Jt.fromBufferAttribute(l,d),Qt.fromBufferAttribute(c,d),Jt.w=1,Qt.w=1,Jt.applyMatrix4(af),Qt.applyMatrix4(af),Jt.z>f&&Qt.z>f)continue;if(Jt.z>f){const y=Jt.z-Qt.z,v=(Jt.z-f)/y;Jt.lerp(Qt,v)}else if(Qt.z>f){const y=Qt.z-Jt.z,v=(Qt.z-f)/y;Qt.lerp(Jt,v)}Jt.applyMatrix4(i),Qt.applyMatrix4(i),Jt.multiplyScalar(1/Jt.w),Qt.multiplyScalar(1/Qt.w),Jt.x*=r.x/2,Jt.y*=r.y/2,Qt.x*=r.x/2,Qt.y*=r.y/2,en.start.copy(Jt),en.start.z=0,en.end.copy(Qt),en.end.z=0;const g=en.closestPointToPointParameter(of,!0);en.at(g,Cg);const _=ir.lerp(Jt.z,Qt.z,g),h=_>=-1&&_<=1,x=of.distanceTo(Cg)<gr*.5;if(h&&x){en.start.fromBufferAttribute(l,d),en.end.fromBufferAttribute(c,d),en.start.applyMatrix4(o),en.end.applyMatrix4(o);const y=new X,v=new X;Ai.distanceSqToSegment(en.start,en.end,v,y),n.push({point:v,pointOnLine:y,distance:Ai.origin.distanceTo(v),object:t,face:null,faceIndex:d,uv:null,uv1:null})}}}class AL extends An{constructor(e=new O0,n=new Sh({color:Math.random()*16777215})){super(e,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,n=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*n.count);for(let o=0,a=0,l=n.count;o<l;o++,a+=2)wg.fromBufferAttribute(n,o),Ag.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+wg.distanceTo(Ag);const r=new md(s,2,1);return e.setAttribute("instanceDistanceStart",new Ri(r,1,0)),e.setAttribute("instanceDistanceEnd",new Ri(r,1,1)),this}raycast(e,n){const i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Ai=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;gr=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),kl.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=gr*.5;else{const f=Math.max(s.near,kl.distanceToPoint(Ai.origin));c=Rg(s,f,l.resolution)}if(kl.radius+=c,Ai.intersectsSphere(kl)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Bl.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=gr*.5;else{const f=Math.max(s.near,Bl.distanceToPoint(Ai.origin));u=Rg(s,f,l.resolution)}Bl.expandByScalar(u),Ai.intersectsBox(Bl)!==!1&&(i?TL(this,n):wL(this,s,n))}onBeforeRender(e){const n=this.material.uniforms;n&&n.resolution&&(e.getViewport(rf),this.material.uniforms.resolution.value.set(rf.z,rf.w))}}class F0 extends O0{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const n=e.length-3,i=new Float32Array(2*n);for(let s=0;s<n;s+=3)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];return super.setPositions(i),this}setColors(e){const n=e.length-3,i=new Float32Array(2*n);for(let s=0;s<n;s+=3)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];return super.setColors(i),this}setFromPoints(e){const n=e.length-1,i=new Float32Array(6*n);for(let s=0;s<n;s++)i[6*s]=e[s].x,i[6*s+1]=e[s].y,i[6*s+2]=e[s].z||0,i[6*s+3]=e[s+1].x,i[6*s+4]=e[s+1].y,i[6*s+5]=e[s+1].z||0;return super.setPositions(i),this}fromLine(e){const n=e.geometry;return this.setPositions(n.attributes.position.array),this}}class CL extends AL{constructor(e=new F0,n=new Sh({color:Math.random()*16777215})){super(e,n),this.isLine2=!0,this.type="Line2"}}const RL={class:"viewport"},PL={key:0,class:"loading-overlay"},DL={class:"toolbar"},IL=Ze({__name:"Viewport3D",setup(t,{expose:e}){const n=Ls(),i=ve(null);let s,r,o,a,l,c=new Map,u=new Map,f=new Map,d=new Map,p=0;const m=ve(!1),g=ve(!1),_=ve(!1),h=ve(!1),x=ve(!0),y=ve(!0);let v=null,P=null,D=null,A=null,L,b,S=null,I=null;function C(E){const k=E.replace("#",""),G=parseInt(k,16);return isNaN(G)?13808780:G}function N(E,k){const G=document.createElement("canvas");G.width=128,G.height=128;const W=G.getContext("2d");W.clearRect(0,0,G.width,G.height),W.font="bold 72px Arial",W.textAlign="center",W.textBaseline="middle",W.lineWidth=8,W.strokeStyle="rgba(15, 23, 42, 0.9)",W.strokeText(E,64,64),W.fillStyle=k,W.fillText(E,64,64);const pe=new Vm(G),ee=new M0({map:pe,transparent:!0,depthTest:!1}),ue=new cR(ee);return ue.scale.set(120,120,1),ue.renderOrder=1e3,ue}function K(E){const k=new oo,G=E*.08,W=E*.04,pe=(ze,tt)=>{const $=new wR(ze,new X(0,0,0),E,tt,G,W);return $.traverse(be=>{const ne=be;if(ne.material){const de=ne.material;de.depthTest=!1,de.depthWrite=!1,de.transparent=!0}}),$.renderOrder=999,$},ee=pe(new X(1,0,0),16724787),ue=pe(new X(0,1,0),3394662),Me=pe(new X(0,0,1),3377407),Ne=N("x","#ff3333");Ne.position.set(E+100,0,0);const xe=N("y","#33cc66");xe.position.set(0,E+100,0);const ke=N("z","#3388ff");return ke.position.set(0,0,E+100),k.add(ee,ue,Me,Ne,xe,ke),k}function Q(){if(!i.value)return;s=new lR,s.background=new st(988970);const E=i.value.clientWidth/i.value.clientHeight;r=new Kn(50,E,1,1e4),r.position.set(2500,2500,2500),r.lookAt(0,0,0),o=new uL({canvas:i.value,antialias:!0,preserveDrawingBuffer:!0}),o.setSize(i.value.clientWidth,i.value.clientHeight),o.setPixelRatio(window.devicePixelRatio),o.shadowMap.enabled=!0;const k=new xR(16777215,.5);s.add(k),A=new qu(16777215,.9),A.position.set(2500,4e3,2500),A.target.position.set(0,0,0),s.add(A.target),A.castShadow=!0,A.shadow.mapSize.width=2048,A.shadow.mapSize.height=2048,A.shadow.camera.near=100,A.shadow.camera.far=8e3,A.shadow.camera.left=-1500,A.shadow.camera.right=1500,A.shadow.camera.top=1500,A.shadow.camera.bottom=-1500,A.shadow.bias=-.001,A.shadow.normalBias=.02,s.add(A);const G=new qu(16777215,.4);G.position.set(-2500,2500,-2500),s.add(G);const W=new qu(16777215,.3);W.position.set(-2e3,2e3,2e3),s.add(W);const pe=new $a(4e3,4e3),ee=new hR({opacity:.3});P=new An(pe,ee),P.rotation.x=-Math.PI/2,P.position.y=-1,P.receiveShadow=!0,s.add(P),v=new TR(2e3,20,4473958,3355477),v.position.y=0,s.add(v),D=K(1e3),D.visible=!1,s.add(D),a=new dL(r,o.domElement),a.enableDamping=!0,a.dampingFactor=.1,a.target.set(0,1e3,0),a.update(),L=new MR,b=new Ve,I=new Sh({color:4886745,linewidth:2,depthTest:!1,depthWrite:!1,resolution:new Ve(i.value.clientWidth,i.value.clientHeight)}),i.value.addEventListener("click",j),window.addEventListener("resize",me)}function j(E){if(!i.value)return;const k=i.value.getBoundingClientRect();b.x=(E.clientX-k.left)/k.width*2-1,b.y=-((E.clientY-k.top)/k.height)*2+1,L.setFromCamera(b,r);const G=Array.from(c.values()).filter(pe=>pe.visible),W=L.intersectObjects(G);if(W.length>0){const pe=W[0].object,ee=pe.userData.componentId;ee&&(V(pe),n.selectComponent(ee))}else Y(),n.selectComponent(null)}function V(E){Y();const k=new Gm(E.geometry),G=[],W=k.attributes.position;for(let ue=0;ue<W.count;ue++)G.push(W.getX(ue),W.getY(ue),W.getZ(ue));const pe=new F0;pe.setPositions(G);const ee=new CL(pe,I);ee.name="selectionOutline",ee.computeLineDistances(),ee.renderOrder=999,E.add(ee),S=E}function Y(){if(S){const E=S.getObjectByName("selectionOutline");E&&(S.remove(E),E.geometry.dispose()),S=null}}function me(){if(!i.value)return;const E=i.value.clientWidth,k=i.value.clientHeight;r.aspect=E/k,r.updateProjectionMatrix(),o.setSize(E,k)}function we(E){U.forEach(ke=>{ke.pivotGroup&&s.remove(ke.pivotGroup)}),U.clear(),ce=[],c.forEach(ke=>s.remove(ke)),c.clear(),u.clear(),f.clear(),d.clear(),S=null;const k=E.position.x-E.length/2,G=E.position.y,W=E.position.z-E.width/2;for(const ke of E.components)Qe(ke,k,G,W);m.value=!1,g.value=!1,_.value=!1;const pe=0,ee=E.height/2,ue=0,Me=E.length*1,Ne=E.height*1.2,xe=E.width*5;r.position.set(Me,Ne,xe),a.target.set(pe,ee,ue),a.update()}function Le(){const E=document.createElement("canvas");E.width=256,E.height=256;const k=E.getContext("2d");k.fillStyle="#8080ff",k.fillRect(0,0,256,256);for(let W=0;W<60;W++){const pe=Math.random()*256,ee=1+Math.random()*3,ue=(Math.random()-.5)*20;k.strokeStyle=`rgba(${128+ue}, ${128+ue}, 255, 0.3)`,k.lineWidth=ee,k.beginPath(),k.moveTo(0,pe);for(let Me=0;Me<256;Me+=10)k.lineTo(Me,pe+Math.sin(Me*.05)*5+Math.random()*2);k.stroke()}const G=new Vm(E);return G.wrapS=Da,G.wrapT=Da,G.repeat.set(2,2),G}const Fe=Le();function Qe(E,k,G,W,pe=0,ee=0,ue=0,Me){if(E.type==="double_door"){const Ae=pe+E.position.x,qe=ee+E.position.y,xt=ue+E.position.z,Ut=new Er(E.length,E.height,E.width||1),ut=new Yc({visible:!1}),Ot=new An(Ut,ut);Ot.visible=!1,Ot.position.set(k+Ae+E.length/2,G+qe+E.height/2,W+xt+(E.width||1)/2),Ot.userData={componentId:E.id,componentName:E.name,componentType:E.type},s.add(Ot),c.set(E.id,Ot),E.children.forEach((hn,us)=>{Qe(hn,k,G,W,Ae,qe,xt,us===0?"left":"right")});return}const Ne=new Er(E.length,E.height,E.width),xe=C(E.color),ke=new mR({color:xe,roughness:.6,metalness:.02,clearcoat:.1,clearcoatRoughness:.4,normalMap:Fe,normalScale:new Ve(.3,.3),transparent:!1,opacity:1,side:wi}),ze=new An(Ne,ke);ze.castShadow=y.value,ze.receiveShadow=y.value;const tt=new Gm(Ne),$=new qc({color:0,opacity:.12,transparent:!0}),be=new w0(tt,$);ze.add(be);const ne=pe+E.position.x,de=ee+E.position.y,Pe=ue+E.position.z;ze.position.set(k+ne+E.length/2,G+de+E.height/2,W+Pe+E.width/2),ze.rotation.set(ir.degToRad(E.rotation.x),ir.degToRad(E.rotation.y),ir.degToRad(E.rotation.z)),ze.userData={componentId:E.id,componentName:E.name,componentType:E.type,doorSide:Me},ze.visible=E.is_visible,s.add(ze),c.set(E.id,ze),u.set(E.id,ze.position.clone()),f.set(E.id,ke.clone()),d.set(E.id,ze.rotation.clone());for(const Ae of E.children)Qe(Ae,k,G,W,ne,de,Pe)}let ce=[];function _e(E,k,G,W,pe=.6){const ee=k==="position"?E.position[G]:E.rotation[G];ce.push({target:E,prop:k,axis:G,from:ee,to:W,progress:0,duration:pe})}function Re(E){ce=ce.filter(k=>{k.progress=Math.min(k.progress+E/k.duration,1);const G=k.progress<.5?4*k.progress*k.progress*k.progress:1-Math.pow(-2*k.progress+2,3)/2,W=k.from+(k.to-k.from)*G;return k.prop==="position"?k.target.position[k.axis]=W:k.target.rotation[k.axis]=W,k.progress<1})}function Te(){if(m.value)c.forEach((E,k)=>{const G=u.get(k);G&&(_e(E,"position","x",G.x),_e(E,"position","y",G.y),_e(E,"position","z",G.z))}),m.value=!1;else{const E=new X(0,1e3,0);c.forEach(k=>{const W=k.position.clone().sub(E).normalize().multiplyScalar(300);_e(k,"position","x",k.position.x+W.x),_e(k,"position","y",k.position.y+W.y),_e(k,"position","z",k.position.z+W.z)}),m.value=!0}}function Ue(){g.value?(c.forEach((E,k)=>{const G=f.get(k);G&&(E.material=G.clone())}),g.value=!1):(c.forEach(E=>{const k=E.material;k.transparent=!0,k.opacity=.3,k.needsUpdate=!0}),g.value=!0)}function it(){h.value=!h.value,D&&(D.visible=h.value)}function ye(){x.value=!x.value,v&&(v.visible=x.value)}function He(){y.value=!y.value;const E=y.value;A&&(A.castShadow=E),P&&(P.visible=E),c.forEach(k=>{k.castShadow=E,k.receiveShadow=E})}let U=new Map;function z(E){return E==="door"}function w(E,k){for(const G of E){if(G.id===k)return G;if(G.children){const W=w(G.children,k);if(W)return W}}return null}function he(E){const k=[],G=n.cabinet;if(!G)return k;const W=w(G.components,E);if(W&&W.children)for(const pe of W.children)c.has(pe.id)&&k.push(pe.id);return k}function re(){_.value?(c.forEach((E,k)=>{const G=E.userData.componentType;if(z(G)||G==="drawer"){const W=U.get(k);if(!W)return;if(z(G)&&W.pivotGroup)_e(W.pivotGroup,"rotation","y",0,.6),setTimeout(()=>{const pe=W.pivotGroup;if(W.childMeshIds)for(const ee of W.childMeshIds){const ue=c.get(ee),Me=U.get(ee);ue&&Me&&(pe.remove(ue),Me.parent.add(ue),ue.position.set(Me.posX,Me.posY,Me.posZ),ue.rotation.set(0,Me.rotY,0))}pe.remove(E),W.parent.add(E),E.position.set(W.posX,W.posY,W.posZ),E.rotation.y=W.rotY,s.remove(pe)},650);else if(G==="drawer"&&(_e(E,"position","z",W.posZ),W.childMeshIds))for(const pe of W.childMeshIds){const ee=c.get(pe),ue=U.get(pe);ee&&ue&&_e(ee,"position","z",ue.posZ)}}}),_.value=!1,setTimeout(()=>U.clear(),700)):(c.forEach(E=>{const k=E.userData.componentType,G=E.userData.componentId;if(z(k)){const W=he(G),pe=E.userData.doorSide,ee=new X;E.getWorldPosition(ee),E.rotation.y,U.set(G,{parent:E.parent,posX:E.position.x,posY:E.position.y,posZ:E.position.z,rotY:E.rotation.y,worldPosX:ee.x,worldPosY:ee.y,worldPosZ:ee.z,childMeshIds:W});const ue=E.geometry;ue.computeBoundingBox();const Me=ue.boundingBox,Ne=(Me.max.x-Me.min.x)/2;let xe,ke;pe==="right"?(xe=E.position.x+Ne,ke=ir.degToRad(120)):(xe=E.position.x-Ne,ke=-ir.degToRad(120));const ze=ee.x+(xe-E.position.x),tt=new oo;tt.position.set(ze,ee.y,ee.z),s.add(tt),s.remove(E),tt.add(E),E.position.x=pe==="right"?-Ne:Ne,E.position.y=0,E.position.z=0,E.rotation.y=0;for(const $ of W){const be=c.get($);if(be){const ne=new X;be.getWorldPosition(ne),U.set($,{parent:be.parent,posX:be.position.x,posY:be.position.y,posZ:be.position.z,rotY:be.rotation.y,worldPosX:ne.x,worldPosY:ne.y,worldPosZ:ne.z}),s.remove(be),tt.add(be),be.position.x=ne.x-ze,be.position.y=0,be.position.z=ne.z-ee.z}}U.get(G).pivotGroup=tt,_e(tt,"rotation","y",ke)}else if(k==="drawer"){const W=E.geometry;W.computeBoundingBox();const pe=W.boundingBox,ue=(pe.max.z-pe.min.z)*2/3,Me=he(G);U.set(G,{parent:E.parent,posX:E.position.x,posY:E.position.y,posZ:E.position.z,rotY:E.rotation.y,childMeshIds:Me}),_e(E,"position","z",E.position.z+ue);for(const Ne of Me){const xe=c.get(Ne);xe&&(U.set(Ne,{parent:xe.parent,posX:xe.position.x,posY:xe.position.y,posZ:xe.position.z,rotY:xe.rotation.y}),_e(xe,"position","z",xe.position.z+ue))}}}),_.value=!0)}function se(){_.value&&(c.forEach((E,k)=>{const G=E.userData.componentType;if(z(G)||G==="drawer"){const W=U.get(k);if(!W)return;if(z(G)&&W.pivotGroup){const pe=W.pivotGroup;if(W.childMeshIds)for(const ee of W.childMeshIds){const ue=c.get(ee),Me=U.get(ee);ue&&Me&&(pe.remove(ue),Me.parent.add(ue),ue.position.set(Me.posX,Me.posY,Me.posZ),ue.rotation.set(0,Me.rotY,0))}pe.remove(E),W.parent.add(E),E.position.set(W.posX,W.posY,W.posZ),E.rotation.y=W.rotY,s.remove(pe)}else if(G==="drawer"&&(E.position.z=W.posZ,W.childMeshIds))for(const pe of W.childMeshIds){const ee=c.get(pe),ue=U.get(pe);ee&&ue&&(ee.position.z=ue.posZ)}}}),U.clear()),c.forEach((E,k)=>{const G=u.get(k),W=d.get(k);G&&E.position.copy(G),W&&E.rotation.copy(W)}),c.forEach((E,k)=>{const G=f.get(k);G&&(E.material=G.clone())}),Y(),n.selectComponent(null),m.value=!1,g.value=!1,_.value=!1}function le(E=0){l=requestAnimationFrame(le);const k=p?(E-p)/1e3:0;p=E,Re(k),a.update(),o.render(s,r)}We(()=>n.cabinet,E=>{E&&s&&we(E)},{deep:!0}),We(()=>n.selectedComponentId,E=>{if(E){const k=c.get(E);k&&k!==S&&V(k)}else Y()}),Ft(()=>{Q(),le()}),za(()=>{var E;cancelAnimationFrame(l),window.removeEventListener("resize",me),window.removeEventListener("enter-render-mode",J),window.removeEventListener("exit-render-mode",B),(E=i.value)==null||E.removeEventListener("click",j),o==null||o.dispose()});let fe=null;function te(){!r||!a||(fe={background:s.background instanceof st?s.background.clone():null,isExploded:m.value,isTransparent:g.value,doorsOpen:_.value,isAxesVisible:h.value,isGridVisible:x.value,isShadowVisible:y.value,cameraPosition:r.position.clone(),cameraTarget:a.target.clone()},_.value&&(c.forEach((E,k)=>{const G=E.userData.componentType,W=U.get(k);if(W){if(z(G)&&W.pivotGroup){const pe=W.pivotGroup;if(W.childMeshIds)for(const ee of W.childMeshIds){const ue=c.get(ee),Me=U.get(ee);ue&&Me&&(pe.remove(ue),Me.parent.add(ue),ue.position.set(Me.posX,Me.posY,Me.posZ),ue.rotation.set(0,Me.rotY,0))}pe.remove(E),W.parent.add(E),E.position.set(W.posX,W.posY,W.posZ),E.rotation.y=W.rotY,s.remove(pe)}else if(G==="drawer"&&(E.position.z=W.posZ,W.childMeshIds))for(const pe of W.childMeshIds){const ee=c.get(pe),ue=U.get(pe);ee&&ue&&(ee.position.z=ue.posZ)}}}),U.clear(),_.value=!1),(m.value||g.value)&&(c.forEach((E,k)=>{const G=u.get(k),W=d.get(k),pe=f.get(k);G&&E.position.copy(G),W&&E.rotation.copy(W),pe&&g.value&&(E.material=pe.clone())}),m.value=!1,g.value=!1),h.value&&D&&(D.visible=!1,h.value=!1),x.value&&v&&(v.visible=!1,x.value=!1),y.value&&(A&&(A.castShadow=!1),P&&(P.visible=!1),c.forEach(E=>{E.castShadow=!1,E.receiveShadow=!1}),y.value=!1),s.background=new st(16777215))}function T(){if(fe){if(s.background=fe.background||new st(988970),fe.isShadowVisible&&(A&&(A.castShadow=!0),P&&(P.visible=!0),c.forEach(E=>{E.castShadow=!0,E.receiveShadow=!0}),y.value=!0),fe.isGridVisible&&v&&(v.visible=!0,x.value=!0),fe.isAxesVisible&&D&&(D.visible=!0,h.value=!0),fe.isTransparent&&(c.forEach(E=>{const k=E.material;k.transparent=!0,k.opacity=.3,k.needsUpdate=!0}),g.value=!0),fe.isExploded){const E=new X(0,1e3,0);c.forEach(k=>{const W=k.position.clone().sub(E).normalize().multiplyScalar(300);k.position.add(W)}),m.value=!0}fe.doorsOpen&&re(),r.position.copy(fe.cameraPosition),a.target.copy(fe.cameraTarget),a.update(),fe=null}}function M(E){if(!r||!a)return;const k=n.cabinet,G=0,W=k?k.height/2:1e3,pe=0,ee=k?k.length:800,ue=k?k.height:2e3,Me=k?k.width:600,Ne=r.aspect,ke=r.fov*(Math.PI/180)/2,ze=Math.atan(Math.tan(ke)*Ne);function tt($,be,ne){const de=Math.sqrt($*$+be*be+ne*ne),Pe=$/de,Ae=be/de,qe=ne/de,xt=-qe,Ut=0,ut=Pe,Ot=Math.sqrt(xt*xt+Ut*Ut+ut*ut),hn=xt/Ot,us=Ut/Ot,Cr=ut/Ot,ti=us*qe-Cr*Ae,Bs=Cr*Pe-hn*qe,Rr=hn*Ae-us*Pe,Pr=Math.sqrt(ti*ti+Bs*Bs+Rr*Rr),Dr=ti/Pr,Xa=Bs/Pr,Ir=Rr/Pr,ni=ee/2,ii=ue/2,gi=Me/2,Zc=[[-ni,-ii,-gi],[ni,-ii,-gi],[-ni,ii,-gi],[ni,ii,-gi],[-ni,-ii,gi],[ni,-ii,gi],[-ni,ii,gi],[ni,ii,gi]],ja=.9,Jc=Math.tan(ze)*ja,Qc=Math.tan(ke)*ja;let Bo=0;for(const[R,q,ie]of Zc){const oe=R*Pe+q*Ae+ie*qe,Z=R*hn+q*us+ie*Cr,Ee=R*Dr+q*Xa+ie*Ir,Ie=Math.abs(Z)/Jc+oe,Oe=Math.abs(Ee)/Qc+oe,Be=Math.max(Ie,Oe);Be>Bo&&(Bo=Be)}return Bo}switch(E){case"front":{const $=tt(0,0,-1);r.position.set(G,W,pe+$);break}case"top":{const ne=tt(0,-1,-1)*.95/.9/Math.sqrt(2);r.position.set(G,W+ne,pe+ne);break}case"side_45":{const be=tt(-1,-1,-1)/Math.sqrt(3);r.position.set(G+be,W+be,pe+be);break}}a.target.set(G,W,pe),r.up.set(0,1,0),a.update()}let H=!1;function J(E){const k=E.detail,G=(k==null?void 0:k.angle)||"front";H||(te(),H=!0),M(G)}function B(){H&&(T(),H=!1)}return window.addEventListener("enter-render-mode",J),window.addEventListener("exit-render-mode",B),e({toggleExplode:Te,toggleTransparent:Ue,toggleDoors:re,toggleAxes:it,toggleGrid:ye,toggleShadow:He,resetAll:se,setCameraAngle:M,enterRenderMode:te,exitRenderMode:T}),(E,k)=>(ae(),ge("div",RL,[F("canvas",{ref_key:"canvasRef",ref:i,class:"canvas"},null,512),O(n).cabinet?nt("",!0):(ae(),ge("div",PL,[...k[0]||(k[0]=[F("p",null,"等待加载柜子模型...",-1)])])),F("div",DL,[F("button",{class:De(["tool-btn",{active:m.value}]),onClick:Te,title:"爆炸图"},"爆炸图",2),F("button",{class:De(["tool-btn",{active:g.value}]),onClick:Ue,title:"透视图"},"透视图",2),F("button",{class:De(["tool-btn",{active:_.value}]),onClick:re,title:"门板/抽屉打开"},"开门",2),F("button",{class:De(["tool-btn",{active:h.value}]),onClick:it,title:"显示/隐藏坐标系"},"坐标系",2),F("button",{class:De(["tool-btn",{active:x.value}]),onClick:ye,title:"显示/隐藏地面网格"},"网格",2),F("button",{class:De(["tool-btn",{active:y.value}]),onClick:He,title:"显示/隐藏阴影"},"阴影",2),F("button",{class:"tool-btn",onClick:se,title:"复原"},"复原")]),k[1]||(k[1]=F("div",{class:"hint"},[F("span",null,"点击组件可选中查看属性")],-1))]))}}),Pg=Ns(IL,[["__scopeId","data-v-31454720"]]),LL={class:"chat-panel"},UL={key:0,class:"empty-state"},NL={class:"examples"},OL=["onClick"],FL={class:"message-header"},BL={key:0,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},kL={key:1,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},zL={key:2,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},HL={class:"role-label"},VL={class:"content"},GL={key:0,class:"stopped-actions"},WL=["onClick"],$L={key:1,class:"message assistant streaming-msg"},XL={class:"content streaming"},jL={key:0,class:"thinking-steps"},YL={key:0,class:"step-spinner"},qL={key:1,class:"step-done",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},KL={class:"step-text"},ZL={key:1,class:"stream-text"},JL={key:2,class:"stream-text"},QL={class:"chat-input"},e3=["placeholder","disabled"],t3=["disabled"],n3=Ze({__name:"ChatPanel",setup(t){const e=so(),n=Lo(),i=ve(""),s=ve(null),r=["中间加两块层板形成高度3:2:1的三层空间，上层加一个双开门，下层加一个抽屉","在中间加一块层板","底板延伸出10cm","背板换成棕色"];async function o(){const f=i.value.trim();!f||!n.isConnected||e.isStreaming||(i.value="",n.sendChatMessage(f),await c())}async function a(){const f=n.currentProjectId;try{await fetch(wn(`/api/projects/${f}/stop`),{method:"POST"})}catch(d){console.error("停止对话请求失败:",d)}}function l(f){f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),o())}async function c(){await qt(),s.value&&(s.value.scrollTop=s.value.scrollHeight)}function u(f){i.value=f}return We(()=>e.messages.length,()=>{c()}),We(()=>e.currentStreamContent,()=>{c()}),We(()=>e.thinkingSteps.length,()=>{c()}),(f,d)=>(ae(),ge("div",LL,[F("div",{class:"messages",ref_key:"messagesContainer",ref:s,role:"log","aria-live":"polite"},[O(e).messages.length===0&&!O(e).isStreaming?(ae(),ge("div",UL,[d[2]||(d[2]=F("div",{class:"empty-icon-wrapper"},[F("svg",{class:"empty-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},[F("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})])],-1)),d[3]||(d[3]=F("p",{class:"empty-title"},"输入自然语言指令来编辑柜子",-1)),F("div",NL,[(ae(),ge(rt,null,zt(r,p=>F("button",{key:p,class:"example",onClick:m=>u(p)},[d[1]||(d[1]=F("svg",{class:"example-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[F("polyline",{points:"9 18 15 12 9 6"})],-1)),F("span",null,Xe(p),1)],8,OL)),64))])])):nt("",!0),(ae(!0),ge(rt,null,zt(O(e).messages,p=>(ae(),ge("div",{key:p.id,class:De(["message",p.role])},[F("div",FL,[F("div",{class:De(["role-avatar",p.role])},[p.role==="user"?(ae(),ge("svg",BL,[...d[4]||(d[4]=[F("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},null,-1),F("circle",{cx:"12",cy:"7",r:"4"},null,-1)])])):p.role==="assistant"?(ae(),ge("svg",kL,[...d[5]||(d[5]=[_f('<rect x="3" y="11" width="18" height="10" rx="2" data-v-6f418fae></rect><circle cx="12" cy="5" r="2" data-v-6f418fae></circle><path d="M12 7v4" data-v-6f418fae></path><line x1="8" y1="16" x2="8" y2="16" data-v-6f418fae></line><line x1="16" y1="16" x2="16" y2="16" data-v-6f418fae></line>',5)])])):(ae(),ge("svg",zL,[...d[6]||(d[6]=[F("circle",{cx:"12",cy:"12",r:"10"},null,-1),F("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),F("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])]))],2),F("span",HL,Xe(p.role==="user"?"你":p.role==="assistant"?"AI":"系统"),1)]),F("div",VL,Xe(p.content),1),p.stopped?(ae(),ge("div",GL,[d[8]||(d[8]=F("span",{class:"stopped-badge"},[F("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[F("rect",{x:"6",y:"6",width:"12",height:"12",rx:"2"})]),or(" 已停止 ")],-1)),!O(e).isStreaming&&!p.continued?(ae(),ge("button",{key:0,onClick:m=>O(n).continueConversation(p.thinkingSteps||[],p.id),class:"continue-btn"},[...d[7]||(d[7]=[F("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[F("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),or(" 继续执行 ",-1)])],8,WL)):nt("",!0)])):nt("",!0)],2))),128)),O(e).isStreaming?(ae(),ge("div",$L,[d[12]||(d[12]=_f('<div class="message-header" data-v-6f418fae><div class="role-avatar assistant" data-v-6f418fae><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6f418fae><rect x="3" y="11" width="18" height="10" rx="2" data-v-6f418fae></rect><circle cx="12" cy="5" r="2" data-v-6f418fae></circle><path d="M12 7v4" data-v-6f418fae></path><line x1="8" y1="16" x2="8" y2="16" data-v-6f418fae></line><line x1="16" y1="16" x2="16" y2="16" data-v-6f418fae></line></svg></div><span class="role-label" data-v-6f418fae>AI</span></div>',1)),F("div",XL,[O(e).thinkingSteps.length>0?(ae(),ge("div",jL,[(ae(!0),ge(rt,null,zt(O(e).thinkingSteps,(p,m)=>(ae(),ge("div",{key:m,class:De(["thinking-step",{"step-active":m===O(e).thinkingSteps.length-1&&!O(e).currentStreamContent}])},[m===O(e).thinkingSteps.length-1&&!O(e).currentStreamContent?(ae(),ge("span",YL)):(ae(),ge("svg",qL,[...d[9]||(d[9]=[F("polyline",{points:"20 6 9 17 4 12"},null,-1)])])),F("span",KL,Xe(p),1)],2))),128))])):nt("",!0),O(e).currentStreamContent?(ae(),ge("div",ZL,[d[10]||(d[10]=F("span",{class:"typing-indicator"},null,-1)),or(" "+Xe(O(e).currentStreamContent),1)])):O(e).thinkingSteps.length===0?(ae(),ge("div",JL,[...d[11]||(d[11]=[F("span",{class:"typing-indicator"},null,-1),or(" 思考中... ",-1)])])):nt("",!0)])])):nt("",!0)],512),F("div",QL,[Dt(F("textarea",{"onUpdate:modelValue":d[0]||(d[0]=p=>i.value=p),onKeydown:l,placeholder:O(e).isStreaming?"等待回复完成...":"输入编辑指令...",rows:"2",disabled:!O(n).isConnected||O(e).isStreaming,"aria-label":"编辑指令输入"},null,40,e3),[[fc,i.value]]),O(e).isStreaming?(ae(),ge("button",{key:0,onClick:a,class:"send-btn stop-btn",title:"停止对话","aria-label":"停止对话"},[...d[13]||(d[13]=[F("svg",{viewBox:"0 0 24 24",fill:"currentColor"},[F("rect",{x:"6",y:"6",width:"12",height:"12",rx:"2"})],-1)])])):(ae(),ge("button",{key:1,onClick:o,disabled:!i.value.trim()||!O(n).isConnected,class:"send-btn",title:"发送","aria-label":"发送消息"},[...d[14]||(d[14]=[F("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[F("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),F("polyline",{points:"5 12 12 5 19 12"})],-1)])],8,t3))])]))}}),Dg=Ns(n3,[["__scopeId","data-v-6f418fae"]]),i3={class:"component-panel"},s3={class:"tree-section"},r3={key:0,class:"empty"},o3={key:1,class:"tree"},a3=["onClick"],l3={class:"item-content"},c3=["onClick"],u3={key:1,class:"expand-placeholder"},f3={class:"component-name"},d3={class:"component-type"},h3={key:2,class:"children-count"},p3={key:0,class:"children"},m3=["onClick"],g3={class:"item-content"},_3=["onClick"],v3={key:1,class:"expand-placeholder"},y3={class:"component-name"},x3={class:"component-type"},b3={key:0,class:"children"},S3=["onClick"],M3={class:"item-content"},E3={class:"component-name"},T3={class:"component-type"},w3={class:"detail-section"},A3={class:"detail-content"},C3={key:0,class:"properties"},R3={class:"prop-row"},P3={class:"prop-value"},D3={class:"prop-row"},I3={class:"prop-value"},L3={class:"prop-row"},U3={class:"prop-value"},N3={class:"prop-row"},O3={class:"prop-value"},F3={class:"prop-row"},B3=["value"],k3=["value"],z3={class:"prop-row color-row"},H3={class:"color-picker"},V3=["title","onClick"],G3={key:1,class:"empty-hint"},W3=Ze({__name:"ComponentPanel",setup(t){const e=Ls(),n=Lo(),i=[{name:"原木色",value:"#D2B48C"},{name:"白色",value:"#FFFFFF"},{name:"深胡桃",value:"#5C3A21"},{name:"浅橡木",value:"#C4A882"},{name:"灰色",value:"#B0B0B0"},{name:"黑色",value:"#333333"},{name:"蓝色",value:"#4A90D9"},{name:"绿色",value:"#4ECCA3"},{name:"红色",value:"#E94560"}],s=[{name:"多层板",value:"plywood"},{name:"中密度板",value:"mdf"},{name:"橡木",value:"oak_wood"},{name:"胡桃木",value:"walnut_wood"},{name:"樱桃木",value:"cherry_wood"},{name:"白色烤漆",value:"white_lacquer"},{name:"金属",value:"metal"},{name:"玻璃",value:"glass"}],r=Se(()=>{var h;return((h=e.cabinet)==null?void 0:h.components)||[]}),o=Se(()=>e.selectedComponent);function a(h){e.selectComponent(h===e.selectedComponentId?null:h)}function l(h,x){x.stopPropagation(),e.toggleExpand(h)}function c(h){return e.isExpanded(h)}function u(h){return h.children&&h.children.length>0}function f(h){var x;return((x=h.children)==null?void 0:x.length)||0}function d(h){return{side_panel:"侧板",back_panel:"背板",top_panel:"顶板",bottom_panel:"底板",shelf:"隔板",door:"单开门",double_door:"双开门",drawer:"抽屉",divider:"分隔",handle:"拉手",custom:"自定义"}[h]||h}async function p(h,x){const y=n.currentProjectId;if(y)try{const v=await fetch(wn(`/api/projects/${y}/components/${h}`),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({component_id:h,properties:x})});if(v.ok){const P=await v.json();P.cabinet&&e.setCabinet(P.cabinet)}}catch(v){console.error("修改组件属性失败:",v)}}async function m(h){o.value&&await p(o.value.id,{color:h})}async function g(h){o.value&&await p(o.value.id,{material:h})}const _=ve(null);return We(()=>e.selectedComponentId,async h=>{var y;if(!h)return;await qt();const x=(y=_.value)==null?void 0:y.querySelector(".tree-item.selected");x&&x.scrollIntoView({behavior:"smooth",block:"nearest"})}),(h,x)=>(ae(),ge("div",i3,[F("div",s3,[x[2]||(x[2]=F("div",{class:"section-title"},"组件树",-1)),F("div",{class:"tree-content",ref_key:"treeContentRef",ref:_},[r.value.length===0?(ae(),ge("div",r3,"暂无组件")):(ae(),ge("div",o3,[(ae(!0),ge(rt,null,zt(r.value,y=>(ae(),ge("div",{key:y.id,class:De(["tree-item",{selected:O(e).selectedComponentId===y.id}]),onClick:v=>a(y.id)},[F("div",l3,[u(y)?(ae(),ge("button",{key:0,class:De(["expand-btn",{expanded:c(y.id)}]),onClick:v=>l(y.id,v)}," ▶ ",10,c3)):(ae(),ge("span",u3)),F("span",f3,Xe(y.name),1),F("span",d3,Xe(d(y.type)),1),u(y)?(ae(),ge("span",h3,Xe(f(y)),1)):nt("",!0)]),c(y.id)&&u(y)?(ae(),ge("div",p3,[(ae(!0),ge(rt,null,zt(y.children,v=>(ae(),ge("div",{key:v.id,class:De(["tree-item child",{selected:O(e).selectedComponentId===v.id}]),onClick:Ea(P=>a(v.id),["stop"])},[F("div",g3,[u(v)?(ae(),ge("button",{key:0,class:De(["expand-btn",{expanded:c(v.id)}]),onClick:P=>l(v.id,P)}," ▶ ",10,_3)):(ae(),ge("span",v3)),F("span",y3,Xe(v.name),1),F("span",x3,Xe(d(v.type)),1)]),c(v.id)&&u(v)?(ae(),ge("div",b3,[(ae(!0),ge(rt,null,zt(v.children,P=>(ae(),ge("div",{key:P.id,class:De(["tree-item grandchild",{selected:O(e).selectedComponentId===P.id}]),onClick:Ea(D=>a(P.id),["stop"])},[F("div",M3,[x[1]||(x[1]=F("span",{class:"expand-placeholder"},null,-1)),F("span",E3,Xe(P.name),1),F("span",T3,Xe(d(P.type)),1)])],10,S3))),128))])):nt("",!0)],10,m3))),128))])):nt("",!0)],10,a3))),128))]))],512)]),F("div",w3,[x[9]||(x[9]=F("div",{class:"section-title"},"属性",-1)),F("div",A3,[o.value?(ae(),ge("div",C3,[F("div",R3,[x[3]||(x[3]=F("span",{class:"prop-label"},"名称",-1)),F("span",P3,Xe(o.value.name),1)]),F("div",D3,[x[4]||(x[4]=F("span",{class:"prop-label"},"类型",-1)),F("span",I3,Xe(d(o.value.type)),1)]),F("div",L3,[x[5]||(x[5]=F("span",{class:"prop-label"},"尺寸",-1)),F("span",U3,Xe(o.value.length)+" × "+Xe(o.value.height)+" × "+Xe(o.value.width)+" mm ",1)]),F("div",N3,[x[6]||(x[6]=F("span",{class:"prop-label"},"位置",-1)),F("span",O3," X:"+Xe(o.value.position.x)+" Y:"+Xe(o.value.position.y)+" Z:"+Xe(o.value.position.z),1)]),F("div",F3,[x[7]||(x[7]=F("span",{class:"prop-label"},"材料",-1)),F("select",{class:"prop-select",value:o.value.material,onChange:x[0]||(x[0]=y=>g(y.target.value))},[(ae(),ge(rt,null,zt(s,y=>F("option",{key:y.value,value:y.value},Xe(y.name),9,k3)),64))],40,B3)]),F("div",z3,[x[8]||(x[8]=F("span",{class:"prop-label"},"颜色",-1)),F("div",H3,[(ae(),ge(rt,null,zt(i,y=>F("div",{key:y.value,class:De(["color-option",{active:o.value.color===y.value}]),style:Hn({background:y.value}),title:y.name,onClick:v=>m(y.value)},null,14,V3)),64))])])])):(ae(),ge("div",G3," 点击组件查看属性 "))])])]))}}),Ig=Ns(W3,[["__scopeId","data-v-f26385a8"]]),$3={class:"history-panel"},X3={class:"snapshot-list"},j3={key:0,class:"empty"},Y3=["onClick"],q3={class:"snap-info"},K3={class:"snap-index"},Z3={class:"snap-desc"},J3={class:"snap-time"},Q3=Ze({__name:"HistoryPanel",setup(t){const e=Ls(),n=Lo(),i=ve([]),s=ve(-1);async function r(){const l=n.currentProjectId;if(l)try{const u=await(await fetch(wn(`/api/projects/${l}/snapshots`))).json();i.value=u.snapshots||[],s.value=u.current_index??-1}catch(c){console.error("加载快照列表失败:",c)}}async function o(l){const c=n.currentProjectId;if(c)try{const f=await(await fetch(wn(`/api/projects/${c}/snapshots/${l}/restore`),{method:"POST"})).json();f.success&&f.cabinet&&(e.setCabinet(f.cabinet),s.value=l)}catch(u){console.error("恢复快照失败:",u)}}function a(l){return new Date(l*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}return Ft(()=>{r()}),We(()=>n.currentProjectId,()=>{r()}),We(()=>e.cabinet,()=>{r()},{deep:!0}),(l,c)=>(ae(),ge("div",$3,[F("div",X3,[i.value.length===0?(ae(),ge("div",j3,"暂无历史记录")):nt("",!0),(ae(!0),ge(rt,null,zt([...i.value].reverse(),u=>(ae(),ge("div",{key:u.index,class:De(["snapshot-item",{current:u.index===s.value}]),onClick:f=>o(u.index)},[F("div",q3,[F("span",K3,"v"+Xe(u.index+1),1),F("span",Z3,Xe(u.description),1)]),F("span",J3,Xe(a(u.timestamp)),1)],10,Y3))),128))])]))}}),Lg=Ns(Q3,[["__scopeId","data-v-ab1140c6"]]),eU={class:"scheme-panel"},tU={class:"action-bar"},nU={class:"input-group"},iU={class:"action-row"},sU={class:"template-group"},rU=["value"],oU={class:"scheme-list"},aU={key:0,class:"empty"},lU=["onClick"],cU={class:"scheme-info"},uU=["onKeydown","onBlur"],fU={key:1,class:"scheme-name"},dU={class:"scheme-actions"},hU={class:"scheme-time"},pU=["onClick"],mU=["onClick"],gU=Ze({__name:"SchemePanel",setup(t){const e=Ls(),n=Lo(),i=so(),s=ve([]),r=ve(""),o=ve("cabinet"),a=ve(null),l=ve(""),c=[{value:"cabinet",label:"标准柜"},{value:"kitchen",label:"厨柜"},{value:"wardrobe",label:"衣柜"},{value:"bookshelf",label:"书架"}];async function u(){try{const x=await fetch(wn("/api/projects"));s.value=await x.json()}catch(x){console.error("加载方案列表失败:",x)}}We(()=>n.schemeListVersion,()=>{u()});async function f(x){if(x!==n.currentProjectId)try{n.stopCurrentConversation(!1),i.clearMessages(),n.disconnect();const v=await(await fetch(wn(`/api/projects/${x}`))).json();v.cabinet&&(e.setCabinet(v.cabinet),n.connect(x))}catch(y){console.error("切换方案失败:",y)}}async function d(){const x=r.value.trim()||"新方案",y=o.value;r.value="";try{const P=await(await fetch(wn(`/api/projects?name=${encodeURIComponent(x)}&template=${encodeURIComponent(y)}`),{method:"POST"})).json();P.id&&(await u(),await f(P.id))}catch(v){console.error("创建方案失败:",v)}}async function p(x,y){y.stopPropagation();try{await fetch(wn(`/api/projects/${x}`),{method:"DELETE"}),await u()}catch(v){console.error("删除方案失败:",v)}}function m(x,y){y.stopPropagation(),a.value=x.id,l.value=x.name}async function g(x){const y=l.value.trim();if(!y){_();return}try{await fetch(wn(`/api/projects/${x}?name=${encodeURIComponent(y)}`),{method:"PUT"}),await u()}catch(v){console.error("重命名失败:",v)}_()}function _(){a.value=null,l.value=""}function h(x){return new Date(x).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}return Ft(()=>{u()}),(x,y)=>(ae(),ge("div",eU,[F("div",tU,[F("div",nU,[y[4]||(y[4]=F("svg",{class:"input-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[F("path",{d:"M12 5v14M5 12h14"})],-1)),Dt(F("input",{"onUpdate:modelValue":y[0]||(y[0]=v=>r.value=v),class:"name-input",placeholder:"新方案名称...",onKeydown:fa(d,["enter"])},null,544),[[fc,r.value]])]),F("div",iU,[F("div",sU,[y[5]||(y[5]=_f('<svg class="template-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-97b9bf2d><rect x="3" y="3" width="7" height="7" data-v-97b9bf2d></rect><rect x="14" y="3" width="7" height="7" data-v-97b9bf2d></rect><rect x="3" y="14" width="7" height="7" data-v-97b9bf2d></rect><rect x="14" y="14" width="7" height="7" data-v-97b9bf2d></rect></svg>',1)),Dt(F("select",{"onUpdate:modelValue":y[1]||(y[1]=v=>o.value=v),class:"template-select"},[(ae(),ge(rt,null,zt(c,v=>F("option",{key:v.value,value:v.value},Xe(v.label),9,rU)),64))],512),[[no,o.value]])]),F("button",{class:"action-btn create",onClick:d},[...y[6]||(y[6]=[F("svg",{class:"btn-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[F("path",{d:"M12 5v14M5 12h14"})],-1),F("span",null,"新建",-1)])])])]),F("div",oU,[s.value.length===0?(ae(),ge("div",aU,"暂无方案")):nt("",!0),(ae(!0),ge(rt,null,zt(s.value,v=>(ae(),ge("div",{key:v.id,class:De(["scheme-item",{current:v.id===O(n).currentProjectId}]),onClick:P=>f(v.id)},[F("div",cU,[a.value===v.id?Dt((ae(),ge("input",{key:0,"onUpdate:modelValue":y[2]||(y[2]=P=>l.value=P),class:"rename-input",onClick:y[3]||(y[3]=Ea(()=>{},["stop"])),onKeydown:[fa(P=>g(v.id),["enter"]),fa(_,["escape"])],onBlur:P=>g(v.id),autofocus:""},null,40,uU)),[[fc,l.value]]):(ae(),ge("span",fU,Xe(v.name),1))]),F("div",dU,[F("span",hU,Xe(h(v.updated_at)),1),F("button",{class:"action-icon-btn",onClick:P=>m(v,P),title:"重命名"},"✎",8,pU),F("button",{class:"delete-btn",onClick:P=>p(v.id,P),title:"删除"},"×",8,mU)])],10,lU))),128))])]))}}),Ug=Ns(gU,[["__scopeId","data-v-97b9bf2d"]]),_U={class:"toast-container"},vU=["onClick"],yU={class:"toast-icon"},xU={class:"toast-message"},bU=Ze({__name:"ToastNotification",setup(t,{expose:e}){const n=ve([]);let i=0;function s(a,l="info",c=3e3){const u=i++,f={id:u,message:a,type:l,duration:c};n.value.push(f),c>0&&setTimeout(()=>{r(u)},c)}function r(a){const l=n.value.findIndex(c=>c.id===a);l>-1&&n.value.splice(l,1)}function o(a){switch(a){case"success":return"✓";case"error":return"✕";case"warning":return"⚠";case"info":return"ℹ"}}return e({addToast:s}),(a,l)=>(ae(),ge("div",_U,[Ke(rb,{name:"toast"},{default:It(()=>[(ae(!0),ge(rt,null,zt(n.value,c=>(ae(),ge("div",{key:c.id,class:De(["toast",c.type]),onClick:u=>r(c.id)},[F("span",yU,Xe(o(c.type)),1),F("span",xU,Xe(c.message),1)],10,vU))),128))]),_:1})]))}}),SU=Ns(bU,[["__scopeId","data-v-5b0fc930"]]),MU={class:"main-content"},EU={class:"viewport-wrapper"},TU={class:"tool-panel"},wU={class:"tool-tabs"},AU=["onClick"],CU={class:"tab-icon"},RU={class:"tab-label"},PU={class:"tool-content"},DU={class:"tab-panel"},IU={class:"tab-panel"},LU={class:"tab-panel"},UU={class:"tab-panel"},NU={class:"mobile-viewport"},OU={class:"mobile-tabs"},FU=["onClick"],BU={class:"tab-icon"},kU={class:"tab-label"},zU={class:"mobile-tool-panel"},HU={class:"tab-panel"},VU={class:"tab-panel"},GU={class:"tab-panel"},WU={class:"tab-panel"},$U=Ze({__name:"App",setup(t){const e=Lo(),n=Ls(),i=ve("chat"),s=ve(null),r=ve(!1);function o(){r.value=window.innerWidth<768}Ft(()=>{const l=(u,f)=>{var d;(d=s.value)==null||d.addToast(u,f)};Cb(l),Ab(l);const c=localStorage.getItem("lastProjectId")||"default";e.connect(c),o(),window.addEventListener("resize",o)}),We(()=>n.componentClickSignal,()=>{n.selectedComponentId&&(i.value="component")});const a=[{key:"chat",icon:"💬",label:"对话"},{key:"component",icon:"🧩",label:"组件"},{key:"history",icon:"📋",label:"历史"},{key:"scheme",icon:"📁",label:"方案"}];return(l,c)=>(ae(),ge("div",{class:De(["app-container",{"is-mobile":r.value}])},[r.value?(ae(),ge(rt,{key:1},[F("div",NU,[Ke(Pg)]),Ke(fm,{class:"mobile-header"}),F("div",OU,[(ae(),ge(rt,null,zt(a,u=>F("button",{key:u.key,class:De(["mobile-tab-btn",{active:i.value===u.key}]),onClick:f=>i.value=u.key},[F("span",BU,Xe(u.icon),1),F("span",kU,Xe(u.label),1)],10,FU)),64))]),F("div",zU,[Dt(F("div",HU,[Ke(Dg)],512),[[jn,i.value==="chat"]]),Dt(F("div",VU,[Ke(Ig)],512),[[jn,i.value==="component"]]),Dt(F("div",GU,[Ke(Lg)],512),[[jn,i.value==="history"]]),Dt(F("div",WU,[Ke(Ug)],512),[[jn,i.value==="scheme"]])])],64)):(ae(),ge(rt,{key:0},[Ke(fm),F("div",MU,[F("div",EU,[Ke(Pg)]),F("div",TU,[F("div",wU,[(ae(),ge(rt,null,zt(a,u=>F("button",{key:u.key,class:De(["tab-btn",{active:i.value===u.key}]),onClick:f=>i.value=u.key},[F("span",CU,Xe(u.icon),1),F("span",RU,Xe(u.label),1)],10,AU)),64))]),F("div",PU,[Dt(F("div",DU,[Ke(Dg)],512),[[jn,i.value==="chat"]]),Dt(F("div",IU,[Ke(Ig)],512),[[jn,i.value==="component"]]),Dt(F("div",LU,[Ke(Lg)],512),[[jn,i.value==="history"]]),Dt(F("div",UU,[Ke(Ug)],512),[[jn,i.value==="scheme"]])])])])],64)),Ke(SU,{ref_key:"toastRef",ref:s},null,512)],2))}}),B0=gb($U);B0.use(yb());B0.mount("#app");
