import{a as s,b as p,u as d,O as m,o as l,c,e as u,Y as h,f,A as C,n as g,B as _,r as v}from"./index.7e254f9c.js";import{S as y}from"./index.bf4c8b45.js";import{b as S}from"./index.6779cee8.js";import"./index.07ead0fe.js";import"./index.97f58402.js";import"./ArrowLeftOutlined.b7597810.js";import"./index.f1cc46cb.js";import"./index.51e56528.js";import"./FullscreenOutlined.9ffc44b6.js";import"./index.61c5a634.js";import"./useWindowSizeFn.0ed8fd2f.js";import"./useContentViewHeight.6e83250d.js";import"./uniqBy.2c173d09.js";import"./_baseIteratee.cc024f5d.js";import"./get.99d90fe8.js";import"./index.b89d5db0.js";import"./useRefs.239eb74c.js";import"./RedoOutlined.8f66dd6b.js";import"./lock.98b6d6a5.js";const b=p({name:"SwitchItem",components:{Switch:y},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=d("setting-switch-item"),{t:n}=_(),o=m(()=>e.def?{checked:e.def}:{});function i(a){e.event&&S(e.event,a)}return{prefixCls:t,t:n,handleChange:i,getBindValue:o}}});function B(e,t,n,o,i,a){const r=v("Switch");return l(),c("div",{class:g(e.prefixCls)},[u("span",null,h(e.title),1),f(r,C(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}var K=s(b,[["render",B],["__scopeId","data-v-440e72fd"]]);export{K as default};