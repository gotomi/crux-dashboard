const bn=1,Dn=2,Cn=16,kn=2;const yt="[",Ut="[!",wt="]",q={},In=Symbol(),Bt=!1;function ft(t){console.warn("hydration_mismatch")}var $t=Array.isArray,Wt=Array.from,Gt=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,Mn=Object.prototype,Fn=Array.prototype,Xt=Object.getPrototypeOf;const x=2,Tt=4,V=8,mt=16,N=32,nt=64,F=128,z=256,w=512,O=1024,Y=2048,k=4096,U=8192,Zt=16384,gt=32768,zt=1<<18,At=1<<19,pt=Symbol("$state");function xt(t){return t===this.v}function Jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Qt(t){return!Jt(t,this.v)}function tn(){throw new Error("effect_update_depth_exceeded")}function nn(){throw new Error("hydration_failed")}function Ln(t){throw new Error("props_invalid_value")}function Pn(){throw new Error("state_descriptors_fixed")}function qn(){throw new Error("state_prototype_fixed")}function rn(){throw new Error("state_unsafe_local_read")}function en(){throw new Error("state_unsafe_mutation")}function _t(t){return{f:0,v:t,reactions:null,equals:xt,version:0}}function jn(t){return ln(_t(t))}function Hn(t,n=!1){const r=_t(t);return n||(r.equals=Qt),y!==null&&y.l!==null&&(y.l.s??=[]).push(r),r}function ln(t){return _!==null&&_.f&x&&(g===null?cn([t]):g.push(t)),t}function Vn(t,n){return _!==null&&ot()&&_.f&x&&(g===null||!g.includes(t))&&en(),t.equals(n)||(t.v=n,t.version=Mt(),Nt(t,O),ot()&&i!==null&&i.f&w&&!(i.f&N)&&(h!==null&&h.includes(t)?(A(i,O),et(i)):R===null?vn([t]):R.push(t))),n}function Nt(t,n){var r=t.reactions;if(r!==null)for(var e=ot(),o=r.length,l=0;l<o;l++){var u=r[l],a=u.f;a&O||!e&&u===i||(A(u,n),a&(w|F)&&(a&x?Nt(u,Y):et(u)))}}function on(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var o=(t&nt)!==0,l=i,u={ctx:y,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|O,first:null,fn:n,last:null,next:null,parent:o?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var a=C;try{ht(!0),rt(u),u.f|=Zt}catch(f){throw P(u),f}finally{ht(a)}}else n!==null&&et(u);var c=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&At)===0;if(!c&&!o&&e&&(l!==null&&on(u,l),_!==null&&_.f&x)){var s=_;(s.children??=[]).push(u)}return u}function Yn(t){const n=L(V,null,!1);return A(n,w),n.teardown=t,n}function un(t){const n=L(nt,t,!0);return()=>{P(n)}}function an(t){return L(Tt,t,!1)}function sn(t){return L(V,t,!0)}function Un(t){return sn(t)}function Bn(t,n=0){return L(V|mt|n,t,!0)}function fn(t,n=!0){return L(V|N,t,!0,n)}function Rt(t){var n=t.teardown;if(n!==null){const r=_;Q(null);try{n.call(null)}finally{Q(r)}}}function P(t,n=!0){var r=!1;if((n||t.f&zt)&&t.nodes_start!==null){for(var e=t.nodes_start,o=t.nodes_end;e!==null;){var l=e===o?null:S(e);e.remove(),e=l}r=!0}Lt(t,n&&!r),H(t,0),A(t,U);var u=t.transitions;if(u!==null)for(const c of u)c.stop();Rt(t);var a=t.parent;a!==null&&a.first!==null&&Ot(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Ot(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function $n(t,n){var r=[];St(t,r,!0),_n(r,()=>{P(t),n&&n()})}function _n(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var o of t)o.out(e)}else n()}function St(t,n,r){if(!(t.f&k)){if(t.f^=k,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var o=e.next,l=(e.f&gt)!==0||(e.f&N)!==0;St(e,n,l?r:!1),e=o}}}function Wn(t){bt(t,!0)}function bt(t,n){if(t.f&k){t.f^=k,B(t)&&rt(t);for(var r=t.first;r!==null;){var e=r.next,o=(r.f&gt)!==0||(r.f&N)!==0;bt(r,o?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}function Gn(t){let n=x|O;i===null?n|=F:i.f|=At;const r={children:null,deps:null,equals:xt,f:n,fn:t,reactions:null,v:null,version:0,parent:i};if(_!==null&&_.f&x){var e=_;(e.children??=[]).push(r)}return i!==null&&(i.deriveds??=[]).push(r),r}function Dt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&x?ct(e):P(e)}}}function Ct(t){var n,r=i;tt(t.parent);try{Dt(t),n=Ft(t)}finally{tt(r)}return n}function kt(t){var n=Ct(t),r=(D||t.f&F)&&t.deps!==null?Y:w;A(t,r),t.equals(n)||(t.v=n,t.version=Mt())}function ct(t){Dt(t),H(t,0),A(t,U),t.v=t.children=t.deps=t.reactions=null}let J=!1,C=!1;function ht(t){C=t}let lt=[],j=0;let _=null;function Q(t){_=t}let i=null;function tt(t){i=t}let g=null;function cn(t){g=t}let h=null,T=0,R=null;function vn(t){R=t}let It=0,D=!1,y=null;function Mt(){return++It}function ot(){return y!==null&&y.l===null}function B(t){var n=t.f;if(n&O)return!0;if(n&Y){var r=t.deps,e=(n&F)!==0;if(r!==null){var o;if(n&z){for(o=0;o<r.length;o++)(r[o].reactions??=[]).push(t);t.f^=z}for(o=0;o<r.length;o++){var l=r[o];if(B(l)&&kt(l),e&&i!==null&&!D&&!l?.reactions?.includes(t)&&(l.reactions??=[]).push(t),l.version>t.version)return!0}}e||A(t,w)}return!1}function dn(t,n,r){throw t}function Ft(t){var n=h,r=T,e=R,o=_,l=D,u=g,a=t.f;h=null,T=0,R=null,_=a&(N|nt)?null:t,D=!C&&(a&F)!==0,g=null;try{var c=(0,t.fn)(),s=t.deps;if(h!==null){var f;if(H(t,T),s!==null&&T>0)for(s.length=T+h.length,f=0;f<h.length;f++)s[T+f]=h[f];else t.deps=s=h;if(!D)for(f=T;f<s.length;f++)(s[f].reactions??=[]).push(t)}else s!==null&&T<s.length&&(H(t,T),s.length=T);return c}finally{h=n,T=r,R=e,_=o,D=l,g=u}}function pn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var o=r.length-1;o===0?r=n.reactions=null:(r[e]=r[o],r.pop())}}r===null&&n.f&x&&(h===null||!h.includes(n))&&(A(n,Y),n.f&(F|z)||(n.f^=z),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)pn(t,r[e])}function Lt(t,n=!1){var r=t.deriveds;if(r!==null){t.deriveds=null;for(var e=0;e<r.length;e+=1)ct(r[e])}var o=t.first;for(t.first=t.last=null;o!==null;){var l=o.next;P(o,n),o=l}}function hn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&N||P(n),n=r}}function rt(t){var n=t.f;if(!(n&U)){A(t,w);var r=i,e=y;i=t,y=t.ctx;try{n&mt?hn(t):Lt(t),Rt(t);var o=Ft(t);t.teardown=typeof o=="function"?o:null,t.version=It}catch(l){dn(l)}finally{i=r,y=e}}}function En(){j>1e3&&(j=0,tn()),j++}function yn(t){var n=t.length;if(n!==0){En();var r=C;C=!0;try{for(var e=0;e<n;e++){var o=t[e];o.f&w||(o.f^=w);var l=[];Pt(o,l),wn(l)}}finally{C=r}}}function wn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(U|k))&&B(e)&&(rt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ot(e):e.fn=null))}}function Tn(){if(J=!1,j>1001)return;const t=lt;lt=[],yn(t),J||(j=0)}function et(t){J||(J=!0,queueMicrotask(Tn));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(nt|N)){if(!(r&w))return;n.f^=w}}lt.push(n)}function Pt(t,n){var r=t.first,e=[];t:for(;r!==null;){var o=r.f,l=(o&N)!==0,u=l&&(o&w)!==0;if(!u&&!(o&k))if(o&V){l?r.f^=w:B(r)&&rt(r);var a=r.first;if(a!==null){r=a;continue}}else o&Tt&&e.push(r);var c=r.next;if(c===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var s=v.next;if(s!==null){r=s;continue t}v=v.parent}}r=c}for(var f=0;f<e.length;f++)a=e[f],n.push(a),Pt(a,n)}function Kn(t){var n=t.f,r=(n&x)!==0;if(r&&n&U){var e=Ct(t);return ct(t),e}if(_!==null){g!==null&&g.includes(t)&&rn();var o=_.deps;h===null&&o!==null&&o[T]===t?T++:h===null?h=[t]:h.push(t),R!==null&&i!==null&&i.f&w&&!(i.f&N)&&R.includes(t)&&(A(i,O),et(i))}if(r){var l=t;B(l)&&kt(l)}return t.v}function Xn(t){const n=_;try{return _=null,t()}finally{_=n}}const mn=~(O|Y|w);function A(t,n){t.f=t.f&mn|n}function gn(t,n=!1,r){y={p:y,c:null,e:null,m:!1,s:t,x:null,l:null},n||(y.l={s:null,u:null,r1:[],r2:_t(!1)})}function An(t){const n=y;if(n!==null){const u=n.e;if(u!==null){var r=i,e=_;n.e=null;try{for(var o=0;o<u.length;o++){var l=u[o];tt(l.effect),Q(l.reaction),an(l.fn)}}finally{tt(r),Q(e)}}y=n.p,n.m=!0}return{}}function Zn(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=Xt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let o in e){const l=e[o].get;if(l)try{l.call(t)}catch{}}}}}var Et,qt,jt;function it(){if(Et===void 0){Et=window;var t=Element.prototype,n=Node.prototype;qt=dt(n,"firstChild").get,jt=dt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function vt(t=""){return document.createTextNode(t)}function I(t){return qt.call(t)}function S(t){return jt.call(t)}function zn(t){if(!m)return I(t);var n=I(d);return n===null&&(n=d.appendChild(vt())),M(n),n}function Jn(t,n){if(!m){var r=I(t);return r instanceof Comment&&r.data===""?S(r):r}return d}function Qn(t,n=1,r=!1){let e=m?d:t;for(;n--;)e=S(e);if(!m)return e;var o=e.nodeType;if(r&&o!==3){var l=vt();return e?.before(l),M(l),l}return M(e),e}function xn(t){t.textContent=""}let m=!1;function K(t){m=t}let d;function M(t){if(t===null)throw ft(),q;return d=t}function Ht(){return M(S(d))}function tr(t){if(m){if(S(d)!==null)throw ft(),q;d=t}}function nr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===wt){if(t===0)return n;t-=1}else(r===yt||r===Ut)&&(t+=1)}var e=S(n);n.remove(),n=e}}const Vt=new Set,at=new Set;function rr(t){for(var n=0;n<t.length;n++)Vt.add(t[n]);for(var r of at)r(t)}function X(t){var n=this,r=n.ownerDocument,e=t.type,o=t.composedPath?.()||[],l=o[0]||t.target,u=0,a=t.__root;if(a){var c=o.indexOf(a);if(c!==-1&&(n===document||n===window)){t.__root=n;return}var s=o.indexOf(n);if(s===-1)return;c<=s&&(u=c)}if(l=o[u]||t.target,l!==n){Gt(t,"currentTarget",{configurable:!0,get(){return l||r}});try{for(var f,v=[];l!==null;){var E=l.assignedSlot||l.parentNode||l.host||null;try{var p=l["__"+e];if(p!==void 0&&!l.disabled)if($t(p)){var[$,...W]=p;$.apply(l,[t,...W])}else p.call(l,t)}catch(G){f?v.push(G):f=G}if(t.cancelBubble||E===n||E===null)break;l=E}if(f){for(let G of v)queueMicrotask(()=>{throw G});throw f}}finally{t.__root=n,delete t.currentTarget}}}function Nn(t){var n=document.createElement("template");return n.innerHTML=t,n.content}function Z(t,n){var r=i;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=n)}function er(t,n){var r=(n&1)!==0,e=(n&2)!==0,o,l=!t.startsWith("<!>");return()=>{if(m)return Z(d,null),d;o===void 0&&(o=Nn(l?t:"<!>"+t),r||(o=I(o)));var u=e?document.importNode(o,!0):o.cloneNode(!0);if(r){var a=I(u),c=u.lastChild;Z(a,c)}else Z(u,u);return u}}function lr(t,n){if(m){i.nodes_end=d,Ht();return}t!==null&&t.before(n)}const Rn=["touchstart","touchmove"];function On(t){return Rn.includes(t)}function or(t,n){var r=n==null?"":typeof n=="object"?n+"":n;r!==(t.__t??=t.nodeValue)&&(t.__t=r,t.nodeValue=r==null?"":r+"")}function Sn(t,n){return Yt(t,n)}function ur(t,n){it(),n.intro=n.intro??!1;const r=n.target,e=m,o=d;try{for(var l=I(r);l&&(l.nodeType!==8||l.data!==yt);)l=S(l);if(!l)throw q;K(!0),M(l),Ht();const u=Yt(t,{...n,anchor:l});if(d===null||d.nodeType!==8||d.data!==wt)throw ft(),q;return K(!1),u}catch(u){if(u===q)return n.recover===!1&&nn(),it(),xn(r),K(!1),Sn(t,n);throw u}finally{K(e),M(o)}}const b=new Map;function Yt(t,{target:n,anchor:r,props:e={},events:o,context:l,intro:u=!0}){it();var a=new Set,c=v=>{for(var E=0;E<v.length;E++){var p=v[E];if(!a.has(p)){a.add(p);var $=On(p);n.addEventListener(p,X,{passive:$});var W=b.get(p);W===void 0?(document.addEventListener(p,X,{passive:$}),b.set(p,1)):b.set(p,W+1)}}};c(Wt(Vt)),at.add(c);var s=void 0,f=un(()=>{var v=r??n.appendChild(vt());return fn(()=>{if(l){gn({});var E=y;E.c=l}o&&(e.$$events=o),m&&Z(v,null),s=t(v,e)||{},m&&(i.nodes_end=d),l&&An()}),()=>{for(var E of a){n.removeEventListener(E,X);var p=b.get(E);--p===0?(document.removeEventListener(E,X),b.delete(E)):b.set(E,p)}at.delete(c),st.delete(s),v!==r&&v.parentNode?.removeChild(v)}});return st.set(s,f),s}let st=new WeakMap;function ir(t){const n=st.get(t);n&&n()}export{tr as $,Hn as A,Dn as B,St as C,xn as D,bn as E,_n as F,P as G,Ut as H,k as I,S as J,an as K,Xn as L,sn as M,Zn as N,Jt as O,Ln as P,kn as Q,lr as R,pt as S,er as T,In as U,rr as V,gn as W,Jn as X,Un as Y,An as Z,zn as _,Fn as a,Qn as a0,Gn as a1,or as a2,jn as a3,Nn as a4,Z as a5,Yn as a6,ir as a7,ur as a8,Sn as a9,Pn as b,Vn as c,Kn as d,i as e,qn as f,dt as g,Xt as h,$t as i,vt as j,Bn as k,m as l,M as m,Ht as n,Mn as o,I as p,Wt as q,nr as r,_t as s,K as t,d as u,wt as v,Wn as w,fn as x,$n as y,Cn as z};