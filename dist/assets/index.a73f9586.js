import{b as R,aq as X,i as C,ah as G,O as J,d$ as Y,ak as Z,cn as ee,Q as W,j as w,m as H,ar as D,ai as g,f as m,_ as A,dP as ae,am as x,an as te,at as re,db as ne,aM as $}from"./index.7e254f9c.js";import{u as oe,a as le}from"./useSize.bc1abf6b.js";import{e as ie}from"./eagerComputed.7050dab2.js";var ue=function(){return{prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:function(){return"default"}},src:String,srcset:String,icon:X.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}},se=R({name:"AAvatar",inheritAttrs:!1,props:ue(),slots:["icon"],setup:function(e,i){var r=i.slots,a=i.attrs,p=C(!0),h=C(!1),v=C(1),f=C(null),S=C(null),k=G("avatar",e),y=k.prefixCls,z=oe(),t=J(function(){return e.size==="default"?z.value:e.size}),c=Y(),u=ie(function(){if(Z(e.size)==="object"){var n=ee.find(function(s){return c.value[s]}),o=e.size[n];return o}}),O=function(o){return u.value?{width:"".concat(u.value,"px"),height:"".concat(u.value,"px"),lineHeight:"".concat(u.value,"px"),fontSize:"".concat(o?u.value/2:18,"px")}:{}},d=function(){if(!(!f.value||!S.value)){var o=f.value.offsetWidth,s=S.value.offsetWidth;if(o!==0&&s!==0){var b=e.gap,_=b===void 0?4:b;_*2<s&&(v.value=s-_*2<o?(s-_*2)/o:1)}}},T=function(){var o=e.loadError,s=o==null?void 0:o();s!==!1&&(p.value=!1)};return W(function(){return e.src},function(){w(function(){p.value=!0,v.value=1})}),W(function(){return e.gap},function(){w(function(){d()})}),H(function(){w(function(){d(),h.value=!0})}),function(){var n,o,s=e.shape,b=e.src,_=e.alt,F=e.srcset,M=e.draggable,L=e.crossOrigin,j=D(r,e,"icon"),P=y.value,U=(n={},g(n,"".concat(a.class),!!a.class),g(n,P,!0),g(n,"".concat(P,"-lg"),t.value==="large"),g(n,"".concat(P,"-sm"),t.value==="small"),g(n,"".concat(P,"-").concat(s),s),g(n,"".concat(P,"-image"),b&&p.value),g(n,"".concat(P,"-icon"),j),n),q=typeof t.value=="number"?{width:"".concat(t.value,"px"),height:"".concat(t.value,"px"),lineHeight:"".concat(t.value,"px"),fontSize:j?"".concat(t.value/2,"px"):"18px"}:{},K=(o=r.default)===null||o===void 0?void 0:o.call(r),E;if(b&&p.value)E=m("img",{draggable:M,src:b,srcset:F,onError:T,alt:_,crossorigin:L},null);else if(j)E=j;else if(h.value||v.value!==1){var N="scale(".concat(v.value,") translateX(-50%)"),Q={msTransform:N,WebkitTransform:N,transform:N},V=typeof t.value=="number"?{lineHeight:"".concat(t.value,"px")}:{};E=m(ae,{onResize:d},{default:function(){return[m("span",{class:"".concat(P,"-string"),ref:f,style:A(A({},V),Q)},[K])]}})}else E=m("span",{class:"".concat(P,"-string"),ref:f,style:{opacity:0}},[K]);return m("span",x(x({},a),{},{ref:S,class:U,style:[q,O(!!j),a.style]}),[E])}}}),B=se,ce=function(){return{prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"}}},ve=R({name:"AAvatarGroup",inheritAttrs:!1,props:ce(),setup:function(e,i){var r=i.slots,a=i.attrs,p=G("avatar-group",e),h=p.prefixCls,v=p.direction;return le(e),function(){var f,S=e.maxPopoverPlacement,k=S===void 0?"top":S,y=e.maxCount,z=e.maxStyle,t=e.maxPopoverTrigger,c=t===void 0?"hover":t,u=(f={},g(f,h.value,!0),g(f,"".concat(h.value,"-rtl"),v.value==="rtl"),g(f,"".concat(a.class),!!a.class),f),O=D(r,e),d=te(O).map(function(s,b){return re(s,{key:"avatar-key-".concat(b)})}),T=d.length;if(y&&y<T){var n=d.slice(0,y),o=d.slice(y,T);return n.push(m(ne,{key:"avatar-popover-key",content:o,trigger:c,placement:k,overlayClassName:"".concat(h.value,"-popover")},{default:function(){return[m(B,{style:z},{default:function(){return["+".concat(T-y)]}})]}})),m("div",x(x({},a),{},{class:u,style:a.style}),[n])}return m("div",x(x({},a),{},{class:u,style:a.style}),[d])}}}),I=ve;B.Group=I;B.install=function(l){return l.component(B.name,B),l.component(I.name,I),l};var fe=globalThis&&globalThis.__rest||function(l,e){var i={};for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&e.indexOf(r)<0&&(i[r]=l[r]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(l);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(l,r[a])&&(i[r[a]]=l[r[a]]);return i},de={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},pe=R({name:"TransButton",inheritAttrs:!1,props:{noStyle:{type:Boolean,default:void 0},onClick:Function,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0}},setup:function(e,i){var r=i.slots,a=i.emit,p=i.attrs,h=i.expose,v=C(),f=function(c){var u=c.keyCode;u===$.ENTER&&c.preventDefault()},S=function(c){var u=c.keyCode;u===$.ENTER&&a("click",c)},k=function(c){a("click",c)},y=function(){v.value&&v.value.focus()},z=function(){v.value&&v.value.blur()};return H(function(){e.autofocus&&y()}),h({focus:y,blur:z}),function(){var t,c=e.noStyle,u=e.disabled,O=fe(e,["noStyle","disabled"]),d={};return c||(d=A({},de)),u&&(d.pointerEvents="none"),m("div",x(x(x({role:"button",tabindex:0,ref:v},O),p),{},{onClick:k,onKeydown:f,onKeyup:S,style:A(A({},d),p.style||{})}),[(t=r.default)===null||t===void 0?void 0:t.call(r)])}}}),xe=pe;export{B as A,xe as T};