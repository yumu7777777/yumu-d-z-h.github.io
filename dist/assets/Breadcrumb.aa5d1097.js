var T=Object.defineProperty,O=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var P=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))z.call(t,r)&&P(e,r,t[r]);if($)for(var r of $(t))L.call(t,r)&&P(e,r,t[r]);return e},B=(e,t)=>O(e,V(t));var M=(e,t,r)=>new Promise((h,f)=>{var g=l=>{try{d(r.next(l))}catch(c){f(c)}},p=l=>{try{d(r.throw(l))}catch(c){f(c)}},d=l=>l.done?h(l.value):Promise.resolve(l.value).then(g,p);d((r=r.apply(e,t)).next())});import{a as G,b as X,bR as Y,bN as j,i as q,d4 as F,u as H,dl as J,cT as K,C as Q,o as b,c as E,f as U,z as w,y as A,s as W,Y as N,X as Z,n as x,B as ee,d6 as te,dh as ne,d3 as ae,eP as re,bO as se,r as y}from"./index.7e254f9c.js";import{B as S}from"./index.c3832447.js";const oe=X({name:"LayoutBreadcrumb",components:{Icon:Y,[S.name]:S},props:{theme:j.oneOf(["dark","light"])},setup(){const e=q([]),{currentRoute:t}=F(),{prefixCls:r}=H("layout-breadcrumb"),{getShowBreadCrumbIcon:h}=J(),f=K(),{t:g}=ee();Q(()=>M(this,null,function*(){var C,I,R;if(t.value.name===te)return;const s=yield ne(),n=t.value.matched,a=n==null?void 0:n[n.length-1];let o=t.value.path;a&&((C=a==null?void 0:a.meta)==null?void 0:C.currentActiveMenu)&&(o=a.meta.currentActiveMenu);const u=ae(s,o),m=s.filter(D=>D.path===u[0]),i=p(m,u);if(!i||i.length===0)return;const _=d(i);(I=t.value.meta)!=null&&I.currentActiveMenu&&_.push(B(k({},t.value),{name:((R=t.value.meta)==null?void 0:R.title)||t.value.name})),e.value=_}));function p(s,n){const a=[];return s.forEach(o=>{var u,m;n.includes(o.path)&&a.push(B(k({},o),{name:((u=o.meta)==null?void 0:u.title)||o.name})),(m=o.children)!=null&&m.length&&a.push(...p(o.children,n))}),a}function d(s){return re(s,n=>{const{meta:a,name:o}=n;if(!a)return!!o;const{title:u,hideBreadcrumb:m,hideMenu:i}=a;return!(!u||m||i)}).filter(n=>{var a;return!((a=n.meta)!=null&&a.hideBreadcrumb)})}function l(s,n,a){a==null||a.preventDefault();const{children:o,redirect:u,meta:m}=s;if((o==null?void 0:o.length)&&!u){a==null||a.stopPropagation();return}if(!(m!=null&&m.carryParam))if(u&&se(u))f(u);else{let i="";n.length===1?i=n[0]:i=`${n.slice(1).pop()||""}`,i=/^\//.test(i)?i:`/${i}`,f(i)}}function c(s,n){return s.indexOf(n)!==s.length-1}function v(s){var n;return s.icon||((n=s.meta)==null?void 0:n.icon)}return{routes:e,t:g,prefixCls:r,getIcon:v,getShowBreadCrumbIcon:h,handleClick:l,hasRedirect:c}}}),ce={key:1};function ie(e,t,r,h,f,g){const p=y("Icon"),d=y("router-link"),l=y("a-breadcrumb");return b(),E("div",{class:x([e.prefixCls,`${e.prefixCls}--${e.theme}`])},[U(l,{routes:e.routes},{itemRender:w(({route:c,routes:v,paths:s})=>[e.getShowBreadCrumbIcon&&e.getIcon(c)?(b(),A(p,{key:0,icon:e.getIcon(c)},null,8,["icon"])):W("",!0),e.hasRedirect(v,c)?(b(),A(d,{key:2,to:"",onClick:n=>e.handleClick(c,s,n)},{default:w(()=>[Z(N(e.t(c.name||c.meta.title)),1)]),_:2},1032,["onClick"])):(b(),E("span",ce,N(e.t(c.name||c.meta.title)),1))]),_:1},8,["routes"])],2)}var de=G(oe,[["render",ie]]);export{de as default};