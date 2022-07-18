var f=(e,p,s)=>new Promise((m,a)=>{var d=o=>{try{r(s.next(o))}catch(n){a(n)}},t=o=>{try{r(s.throw(o))}catch(n){a(n)}},r=o=>o.done?m(o.value):Promise.resolve(o.value).then(d,t);r((s=s.apply(e,p)).next())});import{a as y,b as w,B as $,u as F,cs as L,O as _,r as u,o as M,y as S,z as g,e as l,n as c,Y as k,f as h,X as I,A as N}from"./index.1ff435d0.js";import{B as R,a as b}from"./index.d39549e1.js";import{B as P,u as U}from"./useForm.20870347.js";import{u as V}from"./lock.5a7a0e86.js";import{h as z}from"./header.f8c5b894.js";import"./lodash.80b4ff01.js";import"./useWindowSizeFn.9fa0c48c.js";import"./FullscreenOutlined.39ab55f8.js";import"./AdobeAn.1fb9fcee.js";import"./index.b0be4776.js";import"./index.1ac2a4c5.js";import"./useSize.4d86c5c4.js";import"./index.cc56fae8.js";import"./index.5bb26338.js";import"./index.828f3621.js";import"./index.43a48777.js";import"./index.70c59e1c.js";import"./index.3d37b98d.js";import"./index.6519c13a.js";import"./eagerComputed.a2433372.js";import"./useRefs.68f76189.js";import"./download.1d6e15dd.js";import"./index.e0574d72.js";import"./index.da799475.js";const A=w({name:"LockModal",components:{BasicModal:R,BasicForm:P},setup(){const{t:e}=$(),{prefixCls:p}=F("header-lock-modal"),s=L(),m=V(),a=_(()=>{var i;return(i=s.getUserInfo)==null?void 0:i.realName}),[d,{closeModal:t}]=b(),[r,{validateFields:o,resetFields:n}]=U({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),colProps:{span:24},component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const C=(yield o()).password;t(),m.setLockInfo({isLock:!0,pwd:C}),yield n()})}const B=_(()=>{const{avatar:i}=s.getUserInfo;return i||z});return{t:e,prefixCls:p,getRealName:a,register:d,registerForm:r,handleLock:v,avatar:B}}}),D=["src"];function q(e,p,s,m,a,d){const t=u("BasicForm"),r=u("a-button"),o=u("BasicModal");return M(),S(o,N({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:g(()=>[l("div",{class:c(`${e.prefixCls}__entry`)},[l("div",{class:c(`${e.prefixCls}__header`)},[l("img",{src:e.avatar,class:c(`${e.prefixCls}__header-img`)},null,10,D),l("p",{class:c(`${e.prefixCls}__header-name`)},k(e.getRealName),3)],2),h(t,{onRegister:e.registerForm},null,8,["onRegister"]),l("div",{class:c(`${e.prefixCls}__footer`)},[h(r,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:g(()=>[I(k(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var me=y(A,[["render",q]]);export{me as default};
