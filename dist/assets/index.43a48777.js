import{f as S,aW as Ue,cd as Oe,ce as _e,b as be,i as E,aM as Ve,cf as Re,ap as T,ae as y,aj as M,by as qe,aK as we,_ as P,ag as $e,O as le,aP as He,Q,aJ as oe,aV as ze,ad as Ge,cg as Le,ah as We,aq as Ke,at as ve}from"./index.1ff435d0.js";var Xe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"},Je=Xe;function xe(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable}))),r.forEach(function(u){Qe(n,u,t[u])})}return n}function Qe(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var ye=function(e,t){var r=xe({},e,t.attrs);return S(Ue,xe({},r,{icon:Je}),null)};ye.displayName="UpOutlined";ye.inheritAttrs=!1;var Ye=ye;function me(){return typeof BigInt=="function"}function Y(n){var e=n.trim(),t=e.startsWith("-");t&&(e=e.slice(1)),e=e.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),e.startsWith(".")&&(e="0".concat(e));var r=e||"0",u=r.split("."),c=u[0]||"0",g=u[1]||"0";c==="0"&&g==="0"&&(t=!1);var v=t?"-":"";return{negative:t,negativeStr:v,trimStr:r,integerStr:c,decimalStr:g,fullStr:"".concat(v).concat(r)}}function he(n){var e=String(n);return!Number.isNaN(Number(e))&&e.includes("e")}function Z(n){var e=String(n);if(he(n)){var t=Number(e.slice(e.indexOf("e-")+2)),r=e.match(/\.(\d+)/);return r!=null&&r[1]&&(t+=r[1].length),t}return e.includes(".")&&Ne(e)?e.length-e.indexOf(".")-1:0}function Se(n){var e=String(n);if(he(n)){if(n>Number.MAX_SAFE_INTEGER)return String(me()?BigInt(n).toString():Number.MAX_SAFE_INTEGER);if(n<Number.MIN_SAFE_INTEGER)return String(me()?BigInt(n).toString():Number.MIN_SAFE_INTEGER);e=n.toFixed(Z(e))}return Y(e).fullStr}function Ne(n){return typeof n=="number"?!Number.isNaN(n):n?/^\s*-?\d+(\.\d+)?\s*$/.test(n)||/^\s*-?\d+\.\s*$/.test(n)||/^\s*-?\.\d+\s*$/.test(n):!1}var Ze=function(){function n(e){if(_e(this,n),this.origin="",!e&&e!==0||!String(e).trim()){this.empty=!0;return}this.origin=String(e),this.number=Number(e)}return Oe(n,[{key:"negate",value:function(){return new n(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new n(t);var r=Number(t);if(Number.isNaN(r))return this;var u=this.number+r;if(u>Number.MAX_SAFE_INTEGER)return new n(Number.MAX_SAFE_INTEGER);if(u<Number.MIN_SAFE_INTEGER)return new n(Number.MIN_SAFE_INTEGER);var c=Math.max(Z(this.number),Z(r));return new n(u.toFixed(c))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toNumber()===(t==null?void 0:t.toNumber())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":Se(this.number):this.origin}}]),n}(),et=function(){function n(e){if(_e(this,n),this.origin="",!e&&e!==0||!String(e).trim()){this.empty=!0;return}if(this.origin=String(e),e==="-"){this.nan=!0;return}var t=e;if(he(t)&&(t=Number(t)),t=typeof t=="string"?t:Se(t),Ne(t)){var r=Y(t);this.negative=r.negative;var u=r.trimStr.split(".");this.integer=BigInt(u[0]);var c=u[1]||"0";this.decimal=BigInt(c),this.decimalLen=c.length}else this.nan=!0}return Oe(n,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(t){var r="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(t,"0"));return BigInt(r)}},{key:"negate",value:function(){var t=new n(this.toString());return t.negative=!t.negative,t}},{key:"add",value:function(t){if(this.isInvalidate())return new n(t);var r=new n(t);if(r.isInvalidate())return this;var u=Math.max(this.getDecimalStr().length,r.getDecimalStr().length),c=this.alignDecimal(u),g=r.alignDecimal(u),v=(c+g).toString(),f=Y(v),b=f.negativeStr,m=f.trimStr,l="".concat(b).concat(m.padStart(u+1,"0"));return new n("".concat(l.slice(0,-u),".").concat(l.slice(-u)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toString()===(t==null?void 0:t.toString())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":Y("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),n}();function B(n){return me()?new et(n):new Ze(n)}function pe(n,e,t){if(n==="")return"";var r=Y(n),u=r.negativeStr,c=r.integerStr,g=r.decimalStr,v="".concat(e).concat(g),f="".concat(u).concat(c);if(t>=0){var b=Number(g[t]);if(b>=5){var m=B(n).add("".concat(u,"0.").concat("0".repeat(t)).concat(10-b));return pe(m.toString(),e,t)}return t===0?f:"".concat(f).concat(e).concat(g.padEnd(t,"0").slice(0,t))}return v===".0"?f:"".concat(f).concat(v)}var tt=200,nt=600,at=be({name:"StepHandler",inheritAttrs:!1,props:{prefixCls:String,upDisabled:Boolean,downDisabled:Boolean,onStep:{type:Function}},slots:["upNode","downNode"],setup:function(e,t){var r=t.slots,u=t.emit,c=E(),g=function(b,m){b.preventDefault(),u("step",m);function l(){u("step",m),c.value=setTimeout(l,tt)}c.value=setTimeout(l,nt)},v=function(){clearTimeout(c.value)};return Ve(function(){v()}),function(){if(Re())return null;var f=e.prefixCls,b=e.upDisabled,m=e.downDisabled,l="".concat(f,"-handler"),_=T(l,"".concat(l,"-up"),y({},"".concat(l,"-up-disabled"),b)),V=T(l,"".concat(l,"-down"),y({},"".concat(l,"-down-disabled"),m)),D={unselectable:"on",role:"button",onMouseup:v,onMouseleave:v},w=r.upNode,A=r.downNode;return S("div",{class:"".concat(l,"-wrap")},[S("span",M(M({},D),{},{onMousedown:function(C){g(C,!0)},"aria-label":"Increase Value","aria-disabled":b,class:_}),[(w==null?void 0:w())||S("span",{unselectable:"on",class:"".concat(f,"-handler-up-inner")},null)]),S("span",M(M({},D),{},{onMousedown:function(C){g(C,!1)},"aria-label":"Decrease Value","aria-disabled":m,class:V}),[(A==null?void 0:A())||S("span",{unselectable:"on",class:"".concat(f,"-handler-down-inner")},null)])])}}});function rt(n,e){var t=E(null);function r(){try{var c=n.value,g=c.selectionStart,v=c.selectionEnd,f=c.value,b=f.substring(0,g),m=f.substring(v);t.value={start:g,end:v,value:f,beforeTxt:b,afterTxt:m}}catch(l){}}function u(){if(n.value&&t.value&&e.value)try{var c=n.value.value,g=t.value,v=g.beforeTxt,f=g.afterTxt,b=g.start,m=c.length;if(c.endsWith(f))m=c.length-t.value.afterTxt.length;else if(c.startsWith(v))m=v.length;else{var l=v[b-1],_=c.indexOf(l,b-1);_!==-1&&(m=_+1)}n.value.setSelectionRange(m,m)}catch(V){qe(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(V.message))}}return[r,u]}var it=function(){var n=E(0),e=function(){we.cancel(n.value)};return Ve(function(){e()}),function(t){e(),n.value=we(function(){t()})}},ut=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,r=Object.getOwnPropertySymbols(n);u<r.length;u++)e.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(n,r[u])&&(t[r[u]]=n[r[u]]);return t},Ee=function(e,t){return e||t.isEmpty()?t.toString():t.toNumber()},De=function(e){var t=B(e);return t.isInvalidate()?null:t},Be=function(){return{stringMode:{type:Boolean},defaultValue:{type:[String,Number]},value:{type:[String,Number]},prefixCls:{type:String},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number],default:1},tabindex:{type:Number},controls:{type:Boolean,default:!0},readonly:{type:Boolean},disabled:{type:Boolean},autofocus:{type:Boolean},keyboard:{type:Boolean,default:!0},parser:{type:Function},formatter:{type:Function},precision:{type:Number},decimalSeparator:{type:String},onInput:{type:Function},onChange:{type:Function},onPressEnter:{type:Function},onStep:{type:Function},onBlur:{type:Function},onFocus:{type:Function}}},lt=be({name:"InnerInputNumber",inheritAttrs:!1,props:P(P({},Be()),{lazy:Boolean}),slots:["upHandler","downHandler"],setup:function(e,t){var r=t.attrs,u=t.slots,c=t.emit,g=t.expose,v=E(),f=E(!1),b=E(!1),m=E(!1),l=E(B(e.value));function _(o){e.value===void 0&&(l.value=o)}var V=function(a,s){if(!s)return e.precision>=0?e.precision:Math.max(Z(a),Z(e.step))},D=function(a){var s=String(a);if(e.parser)return e.parser(s);var i=s;return e.decimalSeparator&&(i=i.replace(e.decimalSeparator,".")),i.replace(/[^\w.-]+/g,"")},w=E(""),A=function(a,s){if(e.formatter)return e.formatter(a,{userTyping:s,input:String(w.value)});var i=typeof a=="number"?Se(a):a;if(!s){var d=V(i,s);if(Ne(i)&&(e.decimalSeparator||d>=0)){var I=e.decimalSeparator||".";i=pe(i,I,d)}}return i},z=function(){var o=e.value;return l.value.isInvalidate()&&["string","number"].includes($e(o))?Number.isNaN(o)?"":o:A(l.value.toString(),!1)}();w.value=z;function C(o,a){w.value=A(o.isInvalidate()?o.toString(!1):o.toString(!a),a)}var F=le(function(){return De(e.max)}),N=le(function(){return De(e.min)}),h=le(function(){return!F.value||!l.value||l.value.isInvalidate()?!1:F.value.lessEquals(l.value)}),j=le(function(){return!N.value||!l.value||l.value.isInvalidate()?!1:l.value.lessEquals(N.value)}),G=rt(v,f),x=He(G,2),U=x[0],ee=x[1],R=function(a){return F.value&&!a.lessEquals(F.value)?F.value:N.value&&!N.value.lessEquals(a)?N.value:null},q=function(a){return!R(a)},$=function(a,s){var i,d=a,I=q(d)||d.isEmpty();if(!d.isEmpty()&&!s&&(d=R(d)||d,I=!0),!e.readonly&&!e.disabled&&I){var O=d.toString(),k=V(O,s);return k>=0&&(d=B(pe(O,".",k))),d.equals(l.value)||(_(d),(i=e.onChange)===null||i===void 0||i.call(e,d.isEmpty()?null:Ee(e.stringMode,d)),e.value===void 0&&C(d,s)),d}return l.value},L=it(),W=function o(a){var s;if(U(),w.value=a,!m.value){var i=D(a),d=B(i);d.isNaN()||$(d,!0)}(s=e.onInput)===null||s===void 0||s.call(e,a),L(function(){var I=a;e.parser||(I=a.replace(/。/g,".")),I!==a&&o(I)})},K=function(){m.value=!0},te=function(){m.value=!1,W(v.value.value)},X=function(a){W(a.target.value)},J=function(a){var s,i;if(!(a&&h.value||!a&&j.value)){b.value=!1;var d=B(e.step);a||(d=d.negate());var I=(l.value||B(0)).add(d.toString()),O=$(I,!1);(s=e.onStep)===null||s===void 0||s.call(e,Ee(e.stringMode,O),{offset:e.step,type:a?"up":"down"}),(i=v.value)===null||i===void 0||i.focus()}},ne=function(a){var s=B(D(w.value)),i=s;s.isNaN()?i=l.value:i=$(s,a),e.value!==void 0?C(l.value,!1):i.isNaN()||C(i,!1)},se=function(a){var s,i=a.which;b.value=!0,i===oe.ENTER&&(m.value||(b.value=!1),ne(!1),(s=e.onPressEnter)===null||s===void 0||s.call(e,a)),e.keyboard!==!1&&!m.value&&[oe.UP,oe.DOWN].includes(i)&&(J(oe.UP===i),a.preventDefault())},p=function(){b.value=!1},H=function(a){ne(!1),f.value=!1,b.value=!1,c("blur",a)};return Q(function(){return e.precision},function(){l.value.isInvalidate()||C(l.value,!1)},{flush:"post"}),Q(function(){return e.value},function(){var o=B(e.value);l.value=o;var a=B(D(w.value));(!o.equals(a)||!b.value||e.formatter)&&C(o,b.value)},{flush:"post"}),Q(w,function(){e.formatter&&ee()},{flush:"post"}),Q(function(){return e.disabled},function(o){o&&(f.value=!1)}),g({focus:function(){var a;(a=v.value)===null||a===void 0||a.focus()},blur:function(){var a;(a=v.value)===null||a===void 0||a.blur()}}),function(){var o,a=P(P({},r),e),s=a.prefixCls,i=s===void 0?"rc-input-number":s,d=a.min,I=a.max,O=a.step,k=O===void 0?1:O;a.defaultValue,a.value;var ae=a.disabled,re=a.readonly;a.keyboard;var ie=a.controls,ce=ie===void 0?!0:ie,ue=a.autofocus;a.stringMode,a.parser,a.formatter,a.precision,a.decimalSeparator,a.onChange,a.onInput,a.onPressEnter,a.onStep;var Me=a.lazy,Pe=a.class,Ae=a.style,Fe=ut(a,["prefixCls","min","max","step","defaultValue","value","disabled","readonly","keyboard","controls","autofocus","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","lazy","class","style"]),ke=u.upHandler,Te=u.downHandler,Ie="".concat(i,"-input"),fe={};return Me?fe.onChange=X:fe.onInput=X,S("div",{class:T(i,Pe,(o={},y(o,"".concat(i,"-focused"),f.value),y(o,"".concat(i,"-disabled"),ae),y(o,"".concat(i,"-readonly"),re),y(o,"".concat(i,"-not-a-number"),l.value.isNaN()),y(o,"".concat(i,"-out-of-range"),!l.value.isInvalidate()&&!q(l.value)),o)),style:Ae,onKeydown:se,onKeyup:p},[ce&&S(at,{prefixCls:i,upDisabled:h.value,downDisabled:j.value,onStep:J},{upNode:ke,downNode:Te}),S("div",{class:"".concat(Ie,"-wrap")},[S("input",M(M(M({autofocus:ue,autocomplete:"off",role:"spinbutton","aria-valuemin":d,"aria-valuemax":I,"aria-valuenow":l.value.isInvalidate()?null:l.value.toString(),step:k},Fe),{},{ref:v,class:Ie,value:w.value,disabled:ae,readonly:re,onFocus:function(je){f.value=!0,c("focus",je)}},fe),{},{onBlur:H,onCompositionstart:K,onCompositionend:te}),null)])])}}});function de(n){return n!=null}var ot=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,r=Object.getOwnPropertySymbols(n);u<r.length;u++)e.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(n,r[u])&&(t[r[u]]=n[r[u]]);return t},Ce=Be(),st=function(){return P(P({},Ce),{size:{type:String},bordered:{type:Boolean,default:!0},placeholder:String,name:String,id:String,type:String,addonBefore:ve.any,addonAfter:ve.any,prefix:ve.any,"onUpdate:value":Ce.onChange,valueModifiers:Object})},ge=be({name:"AInputNumber",inheritAttrs:!1,props:st(),slots:["addonBefore","addonAfter","prefix"],setup:function(e,t){var r=t.emit,u=t.expose,c=t.attrs,g=t.slots,v=ze(),f=Ge("input-number",e),b=f.prefixCls,m=f.size,l=f.direction,_=E(e.value===void 0?e.defaultValue:e.value),V=E(!1);Q(function(){return e.value},function(){_.value=e.value});var D=E(null),w=function(){var h;(h=D.value)===null||h===void 0||h.focus()},A=function(){var h;(h=D.value)===null||h===void 0||h.blur()};u({focus:w,blur:A});var z=function(h){e.value===void 0&&(_.value=h),r("update:value",h),r("change",h),v.onFieldChange()},C=function(h){V.value=!1,r("blur",h),v.onFieldBlur()},F=function(h){V.value=!0,r("focus",h)};return function(){var N,h,j,G,x=P(P({},c),e),U=x.class,ee=x.bordered,R=x.readonly,q=x.style,$=x.addonBefore,L=$===void 0?(h=g.addonBefore)===null||h===void 0?void 0:h.call(g):$,W=x.addonAfter,K=W===void 0?(j=g.addonAfter)===null||j===void 0?void 0:j.call(g):W,te=x.prefix,X=te===void 0?(G=g.prefix)===null||G===void 0?void 0:G.call(g):te,J=x.valueModifiers,ne=J===void 0?{}:J,se=ot(x,["class","bordered","readonly","style","addonBefore","addonAfter","prefix","valueModifiers"]),p=b.value,H=m.value,o=T((N={},y(N,"".concat(p,"-lg"),H==="large"),y(N,"".concat(p,"-sm"),H==="small"),y(N,"".concat(p,"-rtl"),l.value==="rtl"),y(N,"".concat(p,"-readonly"),R),y(N,"".concat(p,"-borderless"),!ee),N),U),a=S(lt,M(M({},We(se,["size","defaultValue"])),{},{ref:D,lazy:!!ne.lazy,value:_.value,class:o,prefixCls:p,readonly:R,onChange:z,onBlur:C,onFocus:F}),{upHandler:function(){return S(Ye,{class:"".concat(p,"-handler-up-inner")},null)},downHandler:function(){return S(Le,{class:"".concat(p,"-handler-down-inner")},null)}}),s=de(L)||de(K);if(de(X)){var i,d=T("".concat(p,"-affix-wrapper"),(i={},y(i,"".concat(p,"-affix-wrapper-focused"),V.value),y(i,"".concat(p,"-affix-wrapper-disabled"),e.disabled),y(i,"".concat(p,"-affix-wrapper-sm"),m.value==="small"),y(i,"".concat(p,"-affix-wrapper-lg"),m.value==="large"),y(i,"".concat(p,"-affix-wrapper-rtl"),l.value==="rtl"),y(i,"".concat(p,"-affix-wrapper-readonly"),R),y(i,"".concat(p,"-affix-wrapper-borderless"),!ee),y(i,"".concat(U),!s&&U),i));a=S("div",{class:d,style:q,onMouseup:function(){return D.value.focus()}},[S("span",{class:"".concat(p,"-prefix")},[X]),a])}if(s){var I,O="".concat(p,"-group"),k="".concat(O,"-addon"),ae=L?S("div",{class:k},[L]):null,re=K?S("div",{class:k},[K]):null,ie=T("".concat(p,"-wrapper"),O,y({},"".concat(O,"-rtl"),l.value==="rtl")),ce=T("".concat(p,"-group-wrapper"),(I={},y(I,"".concat(p,"-group-wrapper-sm"),H==="small"),y(I,"".concat(p,"-group-wrapper-lg"),H==="large"),y(I,"".concat(p,"-group-wrapper-rtl"),l.value==="rtl"),I),U);a=S("div",{class:ce,style:q},[S("div",{class:ie},[ae,a,re])])}return Ke(a,{style:q})}}}),vt=P(ge,{install:function(e){return e.component(ge.name,ge),e}});export{vt as I};