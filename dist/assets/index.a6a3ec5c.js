var d=(o,s,e)=>new Promise((a,r)=>{var n=t=>{try{u(e.next(t))}catch(p){r(p)}},i=t=>{try{u(e.throw(t))}catch(p){r(p)}},u=t=>t.done?a(t.value):Promise.resolve(t.value).then(n,i);u((e=e.apply(o,s)).next())});import{a as B}from"./index.1ee53ddf.js";import{B as F,u as h}from"./useForm.20870347.js";import{a as w,b as C,r as m,o as E,y as g,z as c,e as f,f as l,X as _}from"./index.1ff435d0.js";import"./index.e9f51cc7.js";import"./index.e73fd180.js";import"./useSize.4d86c5c4.js";import"./eagerComputed.a2433372.js";import"./useWindowSizeFn.9fa0c48c.js";import"./useContentViewHeight.db1e5062.js";import"./ArrowLeftOutlined.13705a76.js";import"./lodash.80b4ff01.js";import"./index.b0be4776.js";import"./index.1ac2a4c5.js";import"./index.cc56fae8.js";import"./index.5bb26338.js";import"./index.828f3621.js";import"./index.43a48777.js";import"./index.70c59e1c.js";import"./index.3d37b98d.js";import"./index.6519c13a.js";import"./index.d39549e1.js";import"./FullscreenOutlined.39ab55f8.js";import"./AdobeAn.1fb9fcee.js";import"./useRefs.68f76189.js";import"./download.1d6e15dd.js";import"./index.e0574d72.js";import"./index.da799475.js";const P=[{field:"passwordOld",label:"\u5F53\u524D\u5BC6\u7801",component:"InputPassword",required:!0},{field:"passwordNew",label:"\u65B0\u5BC6\u7801",component:"StrengthMeter",componentProps:{placeholder:"\u65B0\u5BC6\u7801"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"}]},{field:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",component:"InputPassword",dynamicRules:({values:o})=>[{required:!0,validator:(s,e)=>e?e!==o.passwordNew?Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!"):Promise.resolve():Promise.reject("\u4E0D\u80FD\u4E3A\u7A7A")}]}],b=C({name:"ChangePassword",components:{BasicForm:F,PageWrapper:B},setup(){const[o,{validate:s,resetFields:e}]=h({size:"large",labelWidth:100,showActionButtonGroup:!1,schemas:P});function a(){return d(this,null,function*(){try{const r=yield s(),{passwordOld:n,passwordNew:i}=r}catch(r){}})}return{register:o,resetFields:e,handleSubmit:a}}}),A={class:"py-8 bg-white flex flex-col justify-center items-center"},y={class:"flex justify-center"},v=_(" \u91CD\u7F6E "),D=_(" \u786E\u8BA4 ");function k(o,s,e,a,r,n){const i=m("BasicForm"),u=m("a-button"),t=m("PageWrapper");return E(),g(t,{title:"\u4FEE\u6539\u5F53\u524D\u7528\u6237\u5BC6\u7801",content:"\u4FEE\u6539\u6210\u529F\u540E\u4F1A\u81EA\u52A8\u9000\u51FA\u5F53\u524D\u767B\u5F55\uFF01"},{default:c(()=>[f("div",A,[l(i,{onRegister:o.register},null,8,["onRegister"]),f("div",y,[l(u,{onClick:o.resetFields},{default:c(()=>[v]),_:1},8,["onClick"]),l(u,{class:"!ml-4",type:"primary",onClick:o.handleSubmit},{default:c(()=>[D]),_:1},8,["onClick"])])])]),_:1})}var ue=w(b,[["render",k]]);export{ue as default};