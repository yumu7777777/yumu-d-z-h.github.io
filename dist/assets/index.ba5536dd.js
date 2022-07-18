import{b as $,b1 as H,i as _,Q,_ as c,as as E,ai as b,f as g,am as D,aq as R,aY as X,ah as Y,aK as z,C as J,aP as L,m as W,ag as Z,an as ee}from"./index.7e254f9c.js";var ae=globalThis&&globalThis.__rest||function(o,e){var l={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&e.indexOf(a)<0&&(l[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(o);t<a.length;t++)e.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(o,a[t])&&(l[a[t]]=o[a[t]]);return l},ne={prefixCls:String,name:String,id:String,type:String,defaultChecked:{type:[Boolean,Number],default:void 0},checked:{type:[Boolean,Number],default:void 0},disabled:Boolean,tabindex:{type:[Number,String]},readonly:Boolean,autofocus:Boolean,value:R.any,required:Boolean},te=$({name:"Checkbox",inheritAttrs:!1,props:H(ne,{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),emits:["click","change"],setup:function(e,l){var a=l.attrs,t=l.emit,C=l.expose,p=_(e.checked===void 0?e.defaultChecked:e.checked),y=_();Q(function(){return e.checked},function(){p.value=e.checked}),C({focus:function(){var n;(n=y.value)===null||n===void 0||n.focus()},blur:function(){var n;(n=y.value)===null||n===void 0||n.blur()}});var k=_(),s=function(n){if(!e.disabled){e.checked===void 0&&(p.value=n.target.checked),n.shiftKey=k.value;var x={target:c(c({},e),{checked:n.target.checked}),stopPropagation:function(){n.stopPropagation()},preventDefault:function(){n.preventDefault()},nativeEvent:n};e.checked!==void 0&&(y.value.checked=!!e.checked),t("change",x),k.value=!1}},j=function(n){t("click",n),k.value=n.shiftKey};return function(){var r,n=e.prefixCls,x=e.name,v=e.id,K=e.type,P=e.disabled,i=e.readonly,u=e.tabindex,h=e.autofocus,O=e.value,G=e.required,S=ae(e,["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value","required"]),A=a.class,I=a.onFocus,N=a.onBlur,F=a.onKeydown,M=a.onKeypress,V=a.onKeyup,B=c(c({},S),a),d=Object.keys(B).reduce(function(m,f){return(f.substr(0,5)==="aria-"||f.substr(0,5)==="data-"||f==="role")&&(m[f]=B[f]),m},{}),q=E(n,A,(r={},b(r,"".concat(n,"-checked"),p.value),b(r,"".concat(n,"-disabled"),P),r)),T=c(c({name:x,id:v,type:K,readonly:i,disabled:P,tabindex:u,class:"".concat(n,"-input"),checked:!!p.value,autofocus:h,value:O},d),{onChange:s,onClick:j,onFocus:I,onBlur:N,onKeydown:F,onKeypress:M,onKeyup:V,required:G});return g("span",{class:q},[g("input",D({ref:y},T),null),g("span",{class:"".concat(n,"-inner")},null)])}}}),oe=function(){return{name:String,prefixCls:String,options:{type:Array,default:function(){return[]}},disabled:Boolean,id:String}},ie=function(){return c(c({},oe()),{defaultValue:{type:Array},value:{type:Array},onChange:{type:Function},"onUpdate:value":{type:Function}})},re=function(){return{prefixCls:String,defaultChecked:{type:Boolean,default:void 0},checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:R.any,name:String,id:String,indeterminate:{type:Boolean,default:void 0},type:{type:String,default:"checkbox"},autofocus:{type:Boolean,default:void 0},onChange:Function,"onUpdate:checked":Function,onClick:Function,skipGroup:{type:Boolean,default:!1}}},le=function(){return c(c({},re()),{indeterminate:{type:Boolean,default:!1}})},ue=Symbol("CheckboxGroupContext"),U=globalThis&&globalThis.__rest||function(o,e){var l={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&e.indexOf(a)<0&&(l[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(o);t<a.length;t++)e.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(o,a[t])&&(l[a[t]]=o[a[t]]);return l},de=$({name:"ACheckbox",inheritAttrs:!1,__ANT_CHECKBOX:!0,props:le(),setup:function(e,l){var a=l.emit,t=l.attrs,C=l.slots,p=l.expose,y=X(),k=Y("checkbox",e),s=k.prefixCls,j=k.direction,r=z(ue,void 0),n=Symbol("checkboxUniId");J(function(){!e.skipGroup&&r&&r.registerValue(n,e.value)}),L(function(){r&&r.cancelValue(n)}),W(function(){Z(e.checked!==void 0||r||e.value===void 0,"Checkbox","`value` is not validate prop, do you mean `checked`?")});var x=function(u){var h=u.target.checked;a("update:checked",h),a("change",u)},v=_(),K=function(){var u;(u=v.value)===null||u===void 0||u.focus()},P=function(){var u;(u=v.value)===null||u===void 0||u.blur()};return p({focus:K,blur:P}),function(){var i,u,h=ee((u=C.default)===null||u===void 0?void 0:u.call(C)),O=e.indeterminate,G=e.skipGroup,S=e.id,A=S===void 0?y.id.value:S,I=U(e,["indeterminate","skipGroup","id"]),N=t.onMouseenter,F=t.onMouseleave;t.onInput;var M=t.class,V=t.style,B=U(t,["onMouseenter","onMouseleave","onInput","class","style"]),d=c(c(c({},I),{id:A,prefixCls:s.value}),B);r&&!G?(d.onChange=function(){for(var m=arguments.length,f=new Array(m),w=0;w<m;w++)f[w]=arguments[w];a.apply(void 0,["change"].concat(f)),r.toggleOption({label:h,value:e.value})},d.name=r.name.value,d.checked=r.mergedValue.value.indexOf(e.value)!==-1,d.disabled=e.disabled||r.disabled.value,d.indeterminate=O):d.onChange=x;var q=E((i={},b(i,"".concat(s.value,"-wrapper"),!0),b(i,"".concat(s.value,"-rtl"),j.value==="rtl"),b(i,"".concat(s.value,"-wrapper-checked"),d.checked),b(i,"".concat(s.value,"-wrapper-disabled"),d.disabled),i),M),T=E(b({},"".concat(s.value,"-indeterminate"),O));return g("label",{class:q,style:V,onMouseenter:N,onMouseleave:F},[g(te,D(D({},d),{},{class:T,ref:v}),null),h.length?g("span",null,[h]):null])}}});export{ue as C,te as V,de as a,ie as c};