import{a9 as v,ab as k,k as f,j as y,D as p,g as a,d as i,t as g,c as _,w as l,o as n,q as h}from"./vendor-hiTJ0WGS.js";import{E,H as b}from"./index-i4NGkmu1.js";import{_ as H}from"./auth-PHcfMWy2.js";import{_ as $}from"./error500-_AxHaNHn.js";import{_ as M}from"./error404-x1KIdLGz.js";import"./chunk-brace-VHCFl5c9.js";import"./chunk-f-ui-one-GbLvu2QU.js";import"./chunk-mockjs-AWbv7-oC.js";const P="/fei-admin/static/svg/file-max-jKh7Vtq2.svg",T={name:"ErrorPage",setup(){const o={403:"抱歉，您无权访问此页面！",404:"抱歉，你访问的页面不存在！",500:"抱歉，服务器出错了！"},e=k(),r=f(""),t=f(""),u=y(()=>E.includes(e.path.slice(1)));function d(){const s=e.path.slice(1),m=e.query.status,c=e.query.message;u.value?(r.value=s.toUpperCase(),t.value=c||o[s]):s==="error"?(r.value=m||s,t.value=c):(r.value="404",t.value="抱歉，你访问的页面不存在！")}return d(),{status:r,errorMessage:t,isErrorPage:u,HOME_PATH:b}}},q={class:"system-error-page"},x={class:"fei-result"},C={class:"fei-result-icon fei-result-image"},N={key:0,src:H,alt:"403"},R={key:1,src:$,alt:"500"},V={key:2,src:P,alt:"error"},A={key:3,src:M,alt:"404"},B={class:"fei-result-title"},O={class:"fei-result-subtitle"},j={class:"fei-result-extra"};function w(o,e,r,t,u,d){const s=p("f-button"),m=p("router-link"),c=p("f-space");return n(),a("div",q,[i("div",x,[i("div",C,[o.$route.path==="/403"?(n(),a("img",N)):o.$route.path==="/500"?(n(),a("img",R)):o.$route.path==="/error"?(n(),a("img",V)):(n(),a("img",A))]),i("div",B,g(t.status),1),i("div",O,g(t.errorMessage),1),i("div",j,[_(c,null,{default:l(()=>[_(s,{background:"",onClick:e[0]||(e[0]=D=>o.$router.back())},{default:l(()=>[h("返回上级")]),_:1}),_(m,{to:{path:t.HOME_PATH}},{default:l(()=>[_(s,{type:"primary"},{default:l(()=>[h("返回首页")]),_:1})]),_:1},8,["to"])]),_:1})])])])}const J=v(T,[["render",w]]);export{J as default};