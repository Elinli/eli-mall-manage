var D=Object.defineProperty,T=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var g=(r,e,t)=>e in r?D(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))j.call(e,t)&&g(r,t,e[t]);if(y)for(var t of y(e))A.call(e,t)&&g(r,t,e[t]);return r},i=(r,e)=>T(r,V(e));import{D as B,d as v,b as I,af as K,Q as q,o as c,c as m,Z as C,Y as u,a as s,F as z,a9 as F,ag as M,_ as $,$ as k,a0 as n,a1 as O,t as Q,C as R,a8 as Y,ah as Z,a3 as l,ae as _}from"./index.cd748a77.js";import{_ as G}from"./_plugin-vue_export-helper.cdc0426e.js";import{i as H}from"./icon.ae13d1e6.js";import{u as x,_ as E,E as J}from"./index.49a11a91.js";const P=Symbol("breadcrumbKey"),L=B({separator:{type:String,default:"/"},separatorIcon:{type:H,default:""}}),U={name:"ElBreadcrumb"},W=v(i(d({},U),{props:L,setup(r){const e=r,t=x("breadcrumb"),o=I();return K(P,e),q(()=>{const a=o.value.querySelectorAll(`.${t.e("item")}`);a.length&&a[a.length-1].setAttribute("aria-current","page")}),(a,b)=>(c(),m("div",{ref_key:"breadcrumb",ref:o,class:u(s(t).b()),"aria-label":"Breadcrumb",role:"navigation"},[C(a.$slots,"default")],2))}}));var X=E(W,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);const ee=B({to:{type:z([String,Object]),default:""},replace:{type:Boolean,default:!1}}),te={name:"ElBreadcrumbItem"},re=v(i(d({},te),{props:ee,setup(r){const e=r,t=R(),o=F(P,void 0),a=x("breadcrumb"),{separator:b,separatorIcon:f}=M(o),p=t.appContext.config.globalProperties.$router,w=I(),N=()=>{!e.to||!p||(e.replace?p.replace(e.to):p.push(e.to))};return(h,de)=>(c(),m("span",{class:u(s(a).e("item"))},[$("span",{ref_key:"link",ref:w,class:u([s(a).e("inner"),s(a).is("link",!!h.to)]),role:"link",onClick:N},[C(h.$slots,"default")],2),s(f)?(c(),k(s(J),{key:0,class:u(s(a).e("separator"))},{default:n(()=>[(c(),k(O(s(f))))]),_:1},8,["class"])):(c(),m("span",{key:1,class:u(s(a).e("separator")),role:"presentation"},Q(s(b)),3))],2))}}));var S=E(re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const ae=Y(X,{BreadcrumbItem:S}),se=Z(S);const oe={},ne={class:"bread-crumbs"},ce=_("homepage"),le=$("a",{href:"/"},"promotion management",-1),ue=_("promotion list"),me=_("promotion detail");function pe(r,e){const t=se,o=ae;return c(),m("div",ne,[l(o,{separator:"/"},{default:n(()=>[l(t,{to:{path:"/"}},{default:n(()=>[ce]),_:1}),l(t,null,{default:n(()=>[le]),_:1}),l(t,null,{default:n(()=>[ue]),_:1}),l(t,null,{default:n(()=>[me]),_:1})]),_:1})])}const ye=G(oe,[["render",pe]]);export{ye as default};