import{H as p}from"./index-74535a49.js";import{_ as f}from"./auth-dda19cf3.js";import{a9 as m,k as i,D as n,g as v,d as t,t as c,c as s,w as o,o as g,q as l}from"./vendor-d80b6e14.js";import"./chunk-f-ui-one-b8a8a2af.js";import"./chunk-brace-bde7130a.js";import"./chunk-mockjs-2decca2f.js";const k={name:"Error500",setup(){const r=i(403),e=i("抱歉，您无权访问此页面！");return{status:r,errorMessage:e,HOME_PATH:p}}},h={class:"system-error-page"},x={class:"fei-result"},y=t("div",{class:"fei-result-icon fei-result-image"},[t("img",{src:f,alt:"403"})],-1),b={class:"fei-result-title"},H={class:"fei-result-subtitle"},E={class:"fei-result-extra"};function M(r,e,B,a,C,N){const _=n("f-button"),d=n("router-link"),u=n("f-space");return g(),v("div",h,[t("div",x,[y,t("div",b,c(a.status),1),t("div",H,c(a.errorMessage),1),t("div",E,[s(u,null,{default:o(()=>[s(_,{background:"",onClick:e[0]||(e[0]=T=>r.$router.back())},{default:o(()=>[l("返回上级")]),_:1}),s(d,{to:{path:a.HOME_PATH}},{default:o(()=>[s(_,{type:"primary"},{default:o(()=>[l("返回首页")]),_:1})]),_:1},8,["to"])]),_:1})])])])}const P=m(k,[["render",M]]);export{P as default};