import{a as P,b as A,cv as C,cw as I,i as y,dd as N,r as n,o as i,y as V,z as t,f as r,e as p,c as _,q as f,Y as b,F as k,s as g,X as T}from"./index.1ff435d0.js";import{a as $}from"./index.1ee53ddf.js";import{T as v}from"./index.28f010d0.js";import"./lodash.80b4ff01.js";import"./index.e9f51cc7.js";import"./index.e73fd180.js";import"./useSize.4d86c5c4.js";import"./eagerComputed.a2433372.js";import"./useWindowSizeFn.9fa0c48c.js";import"./useContentViewHeight.db1e5062.js";import"./ArrowLeftOutlined.13705a76.js";import"./useRefs.68f76189.js";const h=A({name:"AccountDetail",components:{PageWrapper:$,ATabs:v,ATabPane:v.TabPane},setup(){var a;const e=C(),s=I(),c=y((a=e.params)==null?void 0:a.id),u=y("detail"),{setTitle:d}=N();d("\u8BE6\u60C5\uFF1A\u7528\u6237"+c.value);function m(){s("/system/account")}return{userId:c,currentKey:u,goBack:m}}}),w=T(" \u7981\u7528\u8D26\u53F7 "),D=T(" \u4FEE\u6539\u5BC6\u7801 "),W={class:"pt-4 m-4 desc-wrap"};function F(e,s,c,u,d,m){const a=n("a-button"),l=n("a-tab-pane"),B=n("a-tabs"),K=n("PageWrapper");return i(),V(K,{title:"\u7528\u6237"+e.userId+"\u7684\u8D44\u6599",content:"\u8FD9\u662F\u7528\u6237\u8D44\u6599\u8BE6\u60C5\u9875\u9762\u3002\u672C\u9875\u9762\u4EC5\u7528\u4E8E\u6F14\u793A\u76F8\u540C\u8DEF\u7531\u5728tab\u4E2D\u6253\u5F00\u591A\u4E2A\u9875\u9762\u5E76\u4E14\u663E\u793A\u4E0D\u540C\u7684\u6570\u636E",contentBackground:"",onBack:e.goBack},{extra:t(()=>[r(a,{type:"primary",danger:""},{default:t(()=>[w]),_:1}),r(a,{type:"primary"},{default:t(()=>[D]),_:1})]),footer:t(()=>[r(B,{"default-active-key":"detail",activeKey:e.currentKey,"onUpdate:activeKey":s[0]||(s[0]=o=>e.currentKey=o)},{default:t(()=>[r(l,{key:"detail",tab:"\u7528\u6237\u8D44\u6599"}),r(l,{key:"logs",tab:"\u64CD\u4F5C\u65E5\u5FD7"})]),_:1},8,["activeKey"])]),default:t(()=>[p("div",W,[e.currentKey=="detail"?(i(),_(k,{key:0},f(10,o=>p("div",{key:o},"\u8FD9\u662F\u7528\u6237"+b(e.userId)+"\u8D44\u6599Tab",1)),64)):g("",!0),e.currentKey=="logs"?(i(),_(k,{key:1},f(10,o=>p("div",{key:o},"\u8FD9\u662F\u7528\u6237"+b(e.userId)+"\u64CD\u4F5C\u65E5\u5FD7Tab",1)),64)):g("",!0)])]),_:1},8,["title","onBack"])}var J=P(h,[["render",F]]);export{J as default};