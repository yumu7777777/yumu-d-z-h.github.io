import{a,b as m,u as p,cs as u,cT as c,c$ as d,i as l,m as _,aM as f,o as g,y as v,z as S,e as B,f as I,n as M,D as T,as as x,eb as C}from"./index.1ff435d0.js";import U from"./Login.bb10198b.js";import"./lodash.80b4ff01.js";import"./LoginForm.7f47bf9e.js";import"./index.5bb26338.js";import"./index.b0be4776.js";import"./index.1ac2a4c5.js";import"./useSize.4d86c5c4.js";import"./index.cc56fae8.js";import"./LoginFormTitle.4a803296.js";import"./GithubFilled.30264ac6.js";import"./index.da799475.js";import"./ForgetPasswordForm.527ecd35.js";import"./index.3d37b98d.js";import"./RegisterForm.df712d46.js";import"./index.e0574d72.js";import"./MobileForm.cb4f603c.js";import"./QrCodeForm.f2d68483.js";import"./download.1d6e15dd.js";const L=m({__name:"SessionTimeoutLogin",setup(k){const{prefixCls:t}=p("st-login"),e=u(),r=c(),i=d(),o=l(0),n=()=>i.getProjectConfig.permissionMode===C.BACK;return _(()=>{var s;o.value=(s=e.getUserInfo)==null?void 0:s.userId,e.getUserInfo}),f(()=>{(o.value&&o.value!==e.getUserInfo.userId||n()&&r.getLastBuildMenuTime===0)&&document.location.reload()}),(s,y)=>(g(),v(x,null,{default:S(()=>[B("div",{class:M(T(t))},[I(U,{sessionTimeout:""})],2)]),_:1}))}});var Q=a(L,[["__scopeId","data-v-07eaddea"]]);export{Q as default};