const ze=1,Je=2,Qe=16;const Ct="[",ie="[!",kt="]",z={},w=Symbol(),Nt=!1,A=2,St=4,dt=8,bt=16,P=32,$=64,st=128,x=256,ft=512,E=1024,S=2048,W=4096,V=8192,ht=16384,ae=32768,It=65536,ue=1<<19,Ft=1<<20,J=Symbol("$state");var Mt=Array.isArray,se=Array.prototype.indexOf,fe=Array.from,oe=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,_e=Object.getOwnPropertyDescriptors,ce=Object.prototype,ve=Array.prototype,Pt=Object.getPrototypeOf;function Lt(t){return t===this.v}function de(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function jt(t){return!de(t,this.v)}function he(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function pe(){throw new Error("https://svelte.dev/e/hydration_failed")}function ye(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function we(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ge(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Ee(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let me=!1;function R(t,e){var n={f:0,v:t,reactions:null,equals:Lt,rv:0,wv:0};return n}function tn(t){return Te(R(t))}function en(t,e=!1){const n=R(t);return e||(n.equals=jt),n}function Te(t){return d!==null&&!b&&(d.f&A)!==0&&(O===null?Re([t]):O.push(t)),t}function F(t,e){return d!==null&&!b&&ne()&&(d.f&(A|bt))!==0&&(O===null||!O.includes(t))&&Ee(),be(t,e)}function be(t,e){return t.equals(e)||(t.v,t.v=e,t.wv=Gt(),qt(t,S),h!==null&&(h.f&E)!==0&&(h.f&(P|$))===0&&(k===null?Oe([t]):k.push(t))),e}function qt(t,e){var n=t.reactions;if(n!==null)for(var r=n.length,l=0;l<r;l++){var i=n[l],s=i.f;(s&S)===0&&(D(i,e),(s&(E|x))!==0&&((s&A)!==0?qt(i,W):yt(i)))}}function Ht(t){var e=A|S,n=d!==null&&(d.f&A)!==0?d:null;return h===null||n!==null&&(n.f&x)!==0?e|=x:h.f|=Ft,{ctx:C,deps:null,effects:null,equals:Lt,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??h}}function nn(t){const e=Ht(t);return e.equals=jt,e}function Yt(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)q(e[n])}}function xe(t){for(var e=t.parent;e!==null;){if((e.f&A)===0)return e;e=e.parent}return null}function Ae(t){var e,n=h;K(xe(t));try{Yt(t),e=Zt(t)}finally{K(n)}return e}function Vt(t){var e=Ae(t),n=(M||(t.f&x)!==0)&&t.deps!==null?W:E;D(t,n),t.equals(e)||(t.v=e,t.wv=Gt())}function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let N=!1;function rt(t){N=t}let p;function j(t){if(t===null)throw xt(),z;return p=t}function Bt(){return j(H(p))}function rn(t){if(N){if(H(p)!==null)throw xt(),z;p=t}}function ln(){for(var t=0,e=p;;){if(e.nodeType===8){var n=e.data;if(n===kt){if(t===0)return e;t-=1}else(n===Ct||n===ie)&&(t+=1)}var r=H(e);e.remove(),e=r}}function X(t,e=null,n){if(typeof t!="object"||t===null||J in t)return t;const r=Pt(t);if(r!==ce&&r!==ve)return t;var l=new Map,i=Mt(t),s=R(0);i&&l.set("length",R(t.length));var c;return new Proxy(t,{defineProperty(f,a,_){(!("value"in _)||_.configurable===!1||_.enumerable===!1||_.writable===!1)&&ye();var o=l.get(a);return o===void 0?(o=R(_.value),l.set(a,o)):F(o,X(_.value,c)),!0},deleteProperty(f,a){var _=l.get(a);if(_===void 0)a in f&&l.set(a,R(w));else{if(i&&typeof a=="string"){var o=l.get("length"),u=Number(a);Number.isInteger(u)&&u<o.v&&F(o,u)}F(_,w),Rt(s)}return!0},get(f,a,_){if(a===J)return t;var o=l.get(a),u=a in f;if(o===void 0&&(!u||Q(f,a)?.writable)&&(o=R(X(u?f[a]:w,c)),l.set(a,o)),o!==void 0){var v=Z(o);return v===w?void 0:v}return Reflect.get(f,a,_)},getOwnPropertyDescriptor(f,a){var _=Reflect.getOwnPropertyDescriptor(f,a);if(_&&"value"in _){var o=l.get(a);o&&(_.value=Z(o))}else if(_===void 0){var u=l.get(a),v=u?.v;if(u!==void 0&&v!==w)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return _},has(f,a){if(a===J)return!0;var _=l.get(a),o=_!==void 0&&_.v!==w||Reflect.has(f,a);if(_!==void 0||h!==null&&(!o||Q(f,a)?.writable)){_===void 0&&(_=R(o?X(f[a],c):w),l.set(a,_));var u=Z(_);if(u===w)return!1}return o},set(f,a,_,o){var u=l.get(a),v=a in f;if(i&&a==="length")for(var m=_;m<u.v;m+=1){var T=l.get(m+"");T!==void 0?F(T,w):m in f&&(T=R(w),l.set(m+"",T))}u===void 0?(!v||Q(f,a)?.writable)&&(u=R(void 0),F(u,X(_,c)),l.set(a,u)):(v=u.v!==w,F(u,X(_,c)));var et=Reflect.getOwnPropertyDescriptor(f,a);if(et?.set&&et.set.call(o,_),!v){if(i&&typeof a=="string"){var nt=l.get("length"),I=Number(a);Number.isInteger(I)&&I>=nt.v&&F(nt,I+1)}Rt(s)}return!0},ownKeys(f){Z(s);var a=Reflect.ownKeys(f).filter(u=>{var v=l.get(u);return v===void 0||v.v!==w});for(var[_,o]of l)o.v!==w&&!(_ in f)&&a.push(_);return a},setPrototypeOf(){we()}})}function Rt(t,e=1){F(t,t.v+e)}var Ot,Ut,Kt,$t;function wt(){if(Ot===void 0){Ot=window,Ut=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype;Kt=Q(e,"firstChild").get,$t=Q(e,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0,Text.prototype.__t=void 0}}function ot(t=""){return document.createTextNode(t)}function B(t){return Kt.call(t)}function H(t){return $t.call(t)}function an(t,e){if(!N)return B(t);var n=B(p);if(n===null)n=p.appendChild(ot());else if(e&&n.nodeType!==3){var r=ot();return n?.before(r),j(r),r}return j(n),n}function un(t,e){if(!N){var n=B(t);return n instanceof Comment&&n.data===""?H(n):n}return p}function sn(t,e=1,n=!1){let r=N?p:t;for(var l;e--;)l=r,r=H(r);if(!N)return r;var i=r?.nodeType;if(n&&i!==3){var s=ot();return r===null?l?.after(s):r.before(s),j(s),s}return j(r),r}function Ne(t){t.textContent=""}let it=!1,gt=!1,_t=null,L=!1,at=[];let d=null,b=!1;function U(t){d=t}let h=null;function K(t){h=t}let O=null;function Re(t){O=t}let y=null,g=0,k=null;function Oe(t){k=t}let Wt=1,ct=0,M=!1;function Gt(){return++Wt}function tt(t){var e=t.f;if((e&S)!==0)return!0;if((e&W)!==0){var n=t.deps,r=(e&x)!==0;if(n!==null){var l,i,s=(e&ft)!==0,c=r&&h!==null&&!M,f=n.length;if(s||c){var a=t,_=a.parent;for(l=0;l<f;l++)i=n[l],(s||!i?.reactions?.includes(a))&&(i.reactions??=[]).push(a);s&&(a.f^=ft),c&&_!==null&&(_.f&x)===0&&(a.f^=x)}for(l=0;l<f;l++)if(i=n[l],tt(i)&&Vt(i),i.wv>t.wv)return!0}(!r||h!==null&&!M)&&D(t,E)}return!1}function De(t,e){for(var n=e;n!==null;){if((n.f&st)!==0)try{n.fn(t);return}catch{n.f^=st}n=n.parent}throw it=!1,t}function Ce(t){return(t.f&ht)===0&&(t.parent===null||(t.parent.f&st)===0)}function pt(t,e,n,r){if(it){if(n===null&&(it=!1),Ce(e))throw t;return}n!==null&&(it=!0);{De(t,e);return}}function Xt(t,e,n=!0){var r=t.reactions;if(r!==null)for(var l=0;l<r.length;l++){var i=r[l];(i.f&A)!==0?Xt(i,e,!1):e===i&&(n?D(i,S):(i.f&E)!==0&&D(i,W),yt(i))}}function Zt(t){var e=y,n=g,r=k,l=d,i=M,s=O,c=C,f=b,a=t.f;y=null,g=0,k=null,M=(a&x)!==0&&(b||!L||d===null),d=(a&(P|$))===0?t:null,O=null,Dt(t.ctx),b=!1,ct++;try{var _=(0,t.fn)(),o=t.deps;if(y!==null){var u;if(vt(t,g),o!==null&&g>0)for(o.length=g+y.length,u=0;u<y.length;u++)o[g+u]=y[u];else t.deps=o=y;if(!M)for(u=g;u<o.length;u++)(o[u].reactions??=[]).push(t)}else o!==null&&g<o.length&&(vt(t,g),o.length=g);if(ne()&&k!==null&&!b&&o!==null&&(t.f&(A|W|S))===0)for(u=0;u<k.length;u++)Xt(k[u],t);return l!==null&&ct++,_}finally{y=e,g=n,k=r,d=l,M=i,O=s,Dt(c),b=f}}function ke(t,e){let n=e.reactions;if(n!==null){var r=se.call(n,t);if(r!==-1){var l=n.length-1;l===0?n=e.reactions=null:(n[r]=n[l],n.pop())}}n===null&&(e.f&A)!==0&&(y===null||!y.includes(e))&&(D(e,W),(e.f&(x|ft))===0&&(e.f^=ft),Yt(e),vt(e,0))}function vt(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)ke(t,n[r])}function At(t){var e=t.f;if((e&ht)===0){D(t,E);var n=h,r=C,l=L;h=t,L=!0;try{(e&bt)!==0?Ve(t):Jt(t),zt(t);var i=Zt(t);t.teardown=typeof i=="function"?i:null,t.wv=Wt;var s=t.deps,c;Nt&&me&&t.f&S}catch(f){pt(f,t,n,r||t.ctx)}finally{L=l,h=n}}}function Se(){try{he()}catch(t){if(_t!==null)pt(t,_t,null);else throw t}}function Ie(){var t=L;try{var e=0;for(L=!0;at.length>0;){e++>1e3&&Se();var n=at,r=n.length;at=[];for(var l=0;l<r;l++){var i=Me(n[l]);Fe(i)}}}finally{gt=!1,L=t,_t=null}}function Fe(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var r=t[n];if((r.f&(ht|V))===0)try{tt(r)&&(At(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Qt(r):r.fn=null))}catch(l){pt(l,r,null,r.ctx)}}}function yt(t){gt||(gt=!0,queueMicrotask(Ie));for(var e=_t=t;e.parent!==null;){e=e.parent;var n=e.f;if((n&($|P))!==0){if((n&E)===0)return;e.f^=E}}at.push(e)}function Me(t){for(var e=[],n=t;n!==null;){var r=n.f,l=(r&(P|$))!==0,i=l&&(r&E)!==0;if(!i&&(r&V)===0){if((r&St)!==0)e.push(n);else if(l)n.f^=E;else{var s=d;try{d=n,tt(n)&&At(n)}catch(a){pt(a,n,null,n.ctx)}finally{d=s}}var c=n.first;if(c!==null){n=c;continue}}var f=n.parent;for(n=n.next;n===null&&f!==null;)n=f.next,f=f.parent}return e}function Z(t){var e=t.f,n=(e&A)!==0;if(d!==null&&!b){O!==null&&O.includes(t)&&ge();var r=d.deps;t.rv<ct&&(t.rv=ct,y===null&&r!==null&&r[g]===t?g++:y===null?y=[t]:(!M||!y.includes(t))&&y.push(t))}else if(n&&t.deps===null&&t.effects===null){var l=t,i=l.parent;i!==null&&(i.f&x)===0&&(l.f^=x)}return n&&(l=t,tt(l)&&Vt(l)),t.v}function fn(t){var e=b;try{return b=!0,t()}finally{b=e}}const Pe=-7169;function D(t,e){t.f=t.f&Pe|e}function on(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(J in t)Et(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&J in n&&Et(n)}}}function Et(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{Et(t[r],e)}catch{}const n=Pt(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=_e(n);for(let l in r){const i=r[l].get;if(i)try{i.call(t)}catch{}}}}}function Le(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function G(t,e,n,r=!0){var l=h,i={ctx:C,deps:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:e,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(n)try{At(i),i.f|=ae}catch(f){throw q(i),f}else e!==null&&yt(i);var s=n&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&(i.f&(Ft|st))===0;if(!s&&r&&(l!==null&&Le(i,l),d!==null&&(d.f&A)!==0)){var c=d;(c.effects??=[]).push(i)}return i}function _n(t){const e=G(dt,null,!1);return D(e,E),e.teardown=t,e}function je(t){const e=G($,t,!0);return(n={})=>new Promise(r=>{n.outro?Be(e,()=>{q(e),r(void 0)}):(q(e),r(void 0))})}function qe(t){return G(St,t,!1)}function cn(t){return G(dt,t,!0)}function vn(t,e=[],n=Ht){const r=e.map(n);return He(()=>t(...r.map(Z)))}function He(t,e=0){return G(dt|bt|e,t,!0)}function Ye(t,e=!0){return G(dt|P,t,!0,e)}function zt(t){var e=t.teardown;if(e!==null){const n=d;U(null);try{e.call(null)}finally{U(n)}}}function Jt(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var r=n.next;(n.f&$)!==0?n.parent=null:q(n,e),n=r}}function Ve(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&P)===0&&q(e),e=n}}function q(t,e=!0){var n=!1;if((e||(t.f&ue)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,l=t.nodes_end;r!==null;){var i=r===l?null:H(r);r.remove(),r=i}n=!0}Jt(t,e&&!n),vt(t,0),D(t,ht);var s=t.transitions;if(s!==null)for(const f of s)f.stop();zt(t);var c=t.parent;c!==null&&c.first!==null&&Qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Qt(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function Be(t,e){var n=[];te(t,n,!0),Ue(n,()=>{q(t),e&&e()})}function Ue(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var l of t)l.out(r)}else e()}function te(t,e,n){if((t.f&V)===0){if(t.f^=V,t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&e.push(s);for(var r=t.first;r!==null;){var l=r.next,i=(r.f&It)!==0||(r.f&P)!==0;te(r,e,i?n:!1),r=l}}}function dn(t){ee(t,!0)}function ee(t,e){if((t.f&V)!==0){t.f^=V,(t.f&E)===0&&(t.f^=E),tt(t)&&(D(t,S),yt(t));for(var n=t.first;n!==null;){var r=n.next,l=(n.f&It)!==0||(n.f&P)!==0;ee(n,l?e:!1),n=r}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}let C=null;function Dt(t){C=t}function Ke(t,e=!1,n){C={p:C,c:null,e:null,m:!1,s:t,x:null,l:null}}function $e(t){const e=C;if(e!==null){const s=e.e;if(s!==null){var n=h,r=d;e.e=null;try{for(var l=0;l<s.length;l++){var i=s[l];K(i.effect),U(i.reaction),qe(i.fn)}}finally{K(n),U(r)}}C=e.p,e.m=!0}return{}}function ne(){return!0}const We=["touchstart","touchmove"];function Ge(t){return We.includes(t)}const re=new Set,mt=new Set;function hn(t){for(var e=0;e<t.length;e++)re.add(t[e]);for(var n of mt)n(t)}function lt(t){var e=this,n=e.ownerDocument,r=t.type,l=t.composedPath?.()||[],i=l[0]||t.target,s=0,c=t.__root;if(c){var f=l.indexOf(c);if(f!==-1&&(e===document||e===window)){t.__root=e;return}var a=l.indexOf(e);if(a===-1)return;f<=a&&(s=f)}if(i=l[s]||t.target,i!==e){oe(t,"currentTarget",{configurable:!0,get(){return i||n}});var _=d,o=h;U(null),K(null);try{for(var u,v=[];i!==null;){var m=i.assignedSlot||i.parentNode||i.host||null;try{var T=i["__"+r];if(T!=null&&(!i.disabled||t.target===i))if(Mt(T)){var[et,...nt]=T;et.apply(i,[t,...nt])}else T.call(i,t)}catch(I){u?v.push(I):u=I}if(t.cancelBubble||m===e||m===null)break;i=m}if(u){for(let I of v)queueMicrotask(()=>{throw I});throw u}}finally{t.__root=e,delete t.currentTarget,U(_),K(o)}}}function Xe(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function ut(t,e){var n=h;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function pn(t,e){var n=(e&1)!==0,r=(e&2)!==0,l,i=!t.startsWith("<!>");return()=>{if(N)return ut(p,null),p;l===void 0&&(l=Xe(i?t:"<!>"+t),n||(l=B(l)));var s=r||Ut?document.importNode(l,!0):l.cloneNode(!0);if(n){var c=B(s),f=s.lastChild;ut(c,f)}else ut(s,s);return s}}function yn(t,e){if(N){h.nodes_end=p,Bt();return}t!==null&&t.before(e)}function wn(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??=t.nodeValue)&&(t.__t=n,t.nodeValue=n+"")}function Ze(t,e){return le(t,e)}function gn(t,e){wt(),e.intro=e.intro??!1;const n=e.target,r=N,l=p;try{for(var i=B(n);i&&(i.nodeType!==8||i.data!==Ct);)i=H(i);if(!i)throw z;rt(!0),j(i),Bt();const s=le(t,{...e,anchor:i});if(p===null||p.nodeType!==8||p.data!==kt)throw xt(),z;return rt(!1),s}catch(s){if(s===z)return e.recover===!1&&pe(),wt(),Ne(n),rt(!1),Ze(t,e);throw s}finally{rt(r),j(l)}}const Y=new Map;function le(t,{target:e,anchor:n,props:r={},events:l,context:i,intro:s=!0}){wt();var c=new Set,f=o=>{for(var u=0;u<o.length;u++){var v=o[u];if(!c.has(v)){c.add(v);var m=Ge(v);e.addEventListener(v,lt,{passive:m});var T=Y.get(v);T===void 0?(document.addEventListener(v,lt,{passive:m}),Y.set(v,1)):Y.set(v,T+1)}}};f(fe(re)),mt.add(f);var a=void 0,_=je(()=>{var o=n??e.appendChild(ot());return Ye(()=>{if(i){Ke({});var u=C;u.c=i}l&&(r.$$events=l),N&&ut(o,null),a=t(o,r)||{},N&&(h.nodes_end=p),i&&$e()}),()=>{for(var u of c){e.removeEventListener(u,lt);var v=Y.get(u);--v===0?(document.removeEventListener(u,lt),Y.delete(u)):Y.set(u,v)}mt.delete(f),o!==n&&o.parentNode?.removeChild(o)}});return Tt.set(a,_),a}let Tt=new WeakMap;function En(t,e){const n=Tt.get(t);return n?(Tt.delete(t),n(e)):Promise.resolve()}export{_n as $,H as A,Mt as B,qe as C,fn as D,Je as E,cn as F,on as G,ie as H,V as I,de as J,pn as K,yn as L,hn as M,un as N,vn as O,$e as P,Ke as Q,an as R,rn as S,sn as T,Ht as U,tn as V,F as W,X,wn as Y,Xe as Z,ut as _,Bt as a,gn as a0,Ze as a1,En as a2,He as b,ot as c,Z as d,nn as e,rt as f,B as g,N as h,p as i,kt as j,dn as k,Ye as l,fe as m,h as n,be as o,Be as p,en as q,ln as r,j as s,R as t,te as u,Ne as v,Ue as w,q as x,ze as y,Qe as z};
