import{u as m}from"./useTable-3b54fb08.js";import{a as u}from"./list.api-762b0362.js";import{a9 as f,D as t,a as h,w as r,o as e,d as c,c as n,q as g,g as i,N as x,F as v}from"./vendor-4c44c8da.js";import"./index-3d5da4df.js";import"./chunk-f-ui-one-69291d5e.js";import"./chunk-brace-bde7130a.js";import"./chunk-mockjs-2decca2f.js";const L={name:"CardList",setup(){const{getListData:a,list:s}=m(u);return a(),{list:s}}},w={class:"card-list-wrap"},y={class:"card-item"};function k(a,s,B,d,N,b){const _=t("f-button"),p=t("app-item"),l=t("page-container");return e(),h(l,{desc:"卡片类型的列表，这里仅做示例，实际开发需根据业务进行调整开发。"},{default:r(()=>[c("div",w,[c("div",y,[n(_,{icon:"plus",dashed:"",style:{height:"175px",width:"100%"}},{default:r(()=>[g("新增项目")]),_:1})]),(e(!0),i(v,null,x(d.list,o=>(e(),i("div",{key:o.id,class:"card-item"},[n(p,{styles:{width:"100%",height:"175px",margin:"0"},item:o},null,8,["item"])]))),128))])]),_:1})}const q=f(L,[["render",k],["__scopeId","data-v-a4f7df31"]]);export{q as default};