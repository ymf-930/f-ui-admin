import{u as D,a as E,b as M,d as W,e as H,f as Q,g as J}from"./index-d1bdb27f.js";import{a9 as I,o as h,g as x,d as o,t as g,c as e,a as z,w as s,e as U,h as Y,q as p,D as l,ac as T,ad as B,N as A,F as L,k as j,z as G,p as q,ay as K,b as X,Q as Z,M as oo}from"./vendor-f4c7e6f6.js";import{a as F}from"./chunk-f-ui-one-aa51386e.js";import"./chunk-brace-c1a5251e.js";import"./chunk-mockjs-e9202629.js";const to="/fei-admin/static/jpeg/avatar04-dc5166b5.jpeg";const eo={name:"top-box",setup(){const{todolistStore:n,userStore:a,storeToRefs:v}=D(),{todoLabel:t}=v(n),{welcomeTitle:i,currentDate:m}=v(a),{weather:c,setting:_}=E();return{welcomeTitle:i,currentDate:m,todoLabel:t,weather:c,setting:_}}},S=n=>(T("data-v-c3bfc4ee"),n=n(),B(),n),no={class:"page-header"},so=S(()=>o("div",{class:"page-header-title"},"工作台",-1)),ao={class:"page-header-detail"},lo=S(()=>o("div",{class:"avatar-img"},[o("img",{src:M,class:"avatar",alt:"avatar"})],-1)),co={class:"welcome"},io={class:"welcome-title"},_o={class:"welcome-weather"},ro=["title"],uo={class:"pt-10"},mo={class:"right-box"},fo={class:"item"},po={class:"top"},ho=S(()=>o("span",{class:"ml-5"},"项目数",-1)),vo=S(()=>o("p",null,"12",-1)),go={class:"item"},bo={class:"top"},ko=S(()=>o("span",{class:"ml-5"},"代办项",-1)),wo={class:"item"},yo={class:"top"},$o=S(()=>o("span",{class:"ml-5"},"通知数量",-1)),xo=S(()=>o("p",null,"23",-1));function Co(n,a,v,t,i,m){const c=l("f-divider"),_=l("f-space"),d=l("f-tag"),f=l("iconfont");return h(),x("div",no,[so,o("div",ao,[lo,o("div",co,[o("div",io,g(t.welcomeTitle),1),o("div",_o,[o("span",null,g(t.currentDate),1),e(c,{type:"vertical"}),t.setting.showWeather?(h(),z(_,{key:0},{default:s(()=>[o("i",{class:U(`qi-icon qi-${t.weather.icon}`),title:t.weather.text},null,10,ro),o("span",null,g(t.weather.temp)+"°",1),o("span",null,g(t.weather.text),1),o("span",null,g(t.weather.windDir)+" "+g(t.weather.windScale)+"级",1)]),_:1})):Y("",!0)]),o("div",uo,[e(d,null,{default:s(()=>[p("搬砖者 👐")]),_:1}),e(d,null,{default:s(()=>[p("小有想法 😈")]),_:1}),e(d,null,{default:s(()=>[p("前端开发 ⛲")]),_:1}),e(d,null,{default:s(()=>[p("vue3 🍀")]),_:1}),e(d,null,{default:s(()=>[p("专注前端 🌟")]),_:1}),e(d,null,{default:s(()=>[p("菜鸟 🙋")]),_:1}),e(d,null,{default:s(()=>[p("懂点设计 💎")]),_:1}),e(d,null,{default:s(()=>[p("交互内容 🔖")]),_:1})])]),o("div",mo,[o("div",fo,[o("div",po,[e(f,{icon:"block",color:"primary",bg:"",round:""}),ho]),vo]),o("div",go,[o("div",bo,[e(f,{icon:"check-square",color:"warning",bg:"",round:""}),ko]),o("p",null,g(t.todoLabel),1)]),o("div",wo,[o("div",yo,[e(f,{icon:"bell",color:"success",bg:"",round:""}),$o]),xo])])])])}const Vo=I(eo,[["render",Co],["__scopeId","data-v-c3bfc4ee"]]);const So={name:"project-box"},k=n=>(T("data-v-a4bdcab0"),n=n(),B(),n),Io={flex:"main:justify cross:center",style:{"font-weight":"normal"}},To={class:"top"},Bo=k(()=>o("span",{class:"ml-5"},"我的项目",-1)),jo=k(()=>o("a",null,"更多",-1)),zo={class:"items-wrap"},Lo={class:"hover-item",href:"https://ymf930.gitee.io/f-ui-one/",target:"_blank"},Do={class:"title"},qo=k(()=>o("span",{class:"ml-15"},"FEI UI ONE",-1)),Fo=k(()=>o("div",{class:"desc"},"一个基于 vue3 的组件库",-1)),Eo=k(()=>o("div",{class:"desc",flex:"main:justify"},[o("span",null,"开源库"),o("span",null,"1.0.0")],-1)),Mo={class:"hover-item",href:"https://ymf930.gitee.io/my-introduce-web/",target:"_blank"},Uo={class:"title"},Ao=k(()=>o("span",{class:"ml-15"},"My Introduce Web",-1)),No=k(()=>o("div",{class:"desc"},"基于 vue3 的个人简绍网页",-1)),Ro=k(()=>o("div",{class:"desc",flex:"main:justify"},[o("span",null,"开源库"),o("span",null,"1.0.0")],-1)),Oo={class:"hover-item",href:"https://ymf930.gitee.io/fei-admin",target:"_blank"},Po={class:"title"},Wo=k(()=>o("span",{class:"ml-15"},"Fei Admin",-1)),Ho=k(()=>o("div",{class:"desc"},"基于 f-ui-one 的集成管理平台",-1)),Qo=k(()=>o("div",{class:"desc",flex:"main:justify"},[o("span",null,"admin"),o("span",null,"1.0.0")],-1));function Jo(n,a,v,t,i,m){const c=l("iconfont"),_=l("f-card");return h(),z(_,{bordered:!1,class:"card-panel",shadow:"never","body-style":{padding:"0"},divider:"no"},{header:s(()=>[o("div",Io,[o("div",To,[e(c,{icon:"block",color:"primary",bg:"",round:""}),Bo]),jo])]),default:s(()=>[o("div",zo,[o("a",Lo,[o("div",Do,[e(c,{icon:"appstore",color:"#25bbe3",size:36,bg:"",round:""}),qo]),Fo,Eo]),o("a",Mo,[o("div",Uo,[e(c,{icon:"codelibrary",color:"#4ab017",size:36,bg:"",round:""}),Ao]),No,Ro]),o("a",Oo,[o("div",Po,[e(c,{icon:"sketch",color:"#8e58da",size:36,bg:"",round:""}),Wo]),Ho,Qo])])]),_:1})}const Yo=I(So,[["render",Jo],["__scopeId","data-v-a4bdcab0"]]);const Go={name:"dynamic-box",data(){return{list:[{id:1,avatar:M,title:"<strong>Yang</strong> 关注了  <a>Jack</a>",time:"2022-06-01 12:35:20"},{id:2,avatar:to,title:"<strong>小李子</strong> 提出了问题 <a>组件库如何按需引入</a>",time:"2022-06-01 12:35:20"},{id:3,avatar:W,title:"<strong>PDD</strong> 发布了文章 <a>Vue页面优化</a>",time:"2022-06-01 12:35:20"},{id:4,avatar:H,title:"<strong>花仙子</strong> 发现了问题 <a>弹窗bug</a>",time:"2022-06-01 12:35:20"},{id:5,avatar:Q,title:"<strong>Sunny</strong> 实现了 <a>Modal弹窗动画设置</a>",time:"2022-06-01 12:35:20"},{id:6,avatar:J,title:"<strong>史蒂夫</strong> 回复了 <a>Rose</a> 的问题 <a>如何返回顶部</a>",time:"2022-06-01 12:35:20"}]}}},N=n=>(T("data-v-8b2a44d9"),n=n(),B(),n),Ko={flex:"main:justify cross:center",style:{"font-weight":"normal"}},Xo={class:"top"},Zo=N(()=>o("span",{class:"ml-5"},"最新动态",-1)),ot=N(()=>o("a",null,"更多",-1)),tt={class:"list-wrap"},et={class:"avatar"},nt=["src"],st={class:"content"},at=["innerHTML"],lt={class:"time"};function ct(n,a,v,t,i,m){const c=l("iconfont"),_=l("f-card");return h(),z(_,{bordered:!1,class:"card-panel",shadow:"never","body-style":{padding:"16px"}},{header:s(()=>[o("div",Ko,[o("div",Xo,[e(c,{icon:"bulb",color:"#722ed1",bg:"",round:""}),Zo]),ot])]),default:s(()=>[o("div",tt,[(h(!0),x(L,null,A(i.list,d=>(h(),x("div",{class:"list-item",key:d.id},[o("div",et,[o("img",{src:d.avatar,alt:"avatar"},null,8,nt)]),o("div",st,[o("div",{class:"title",innerHTML:d.title},null,8,at),o("p",lt,g(d.time),1)])]))),128))])]),_:1})}const it=I(Go,[["render",ct],["__scopeId","data-v-8b2a44d9"]]);const dt={name:"quick-link",setup(){const n=j(!1),{toggleSearch:a,toggleSetting:v}=E(),{linksStore:t}=D(),i=j(null),m=G({link:"",text:"",newTab:!0}),c=j({link:[{required:!0,message:"地址必填",trigger:"blur"}],text:[{required:!0,message:"名称必填",trigger:"blur"}]});function _(){n.value=!0,m.link="",m.text="",m.newTab=!0,i.value&&i.value.resetFields()}function d(){i.value.validate(f=>{f&&t.addLink(m).then(()=>{F.success("添加成功!"),n.value=!1}).catch($=>{n.value=!1,F.error($.message)})})}return{ruleFormRef:i,toggleSearch:a,toggleSetting:v,visible:n,handleAdd:_,submitForm:d,ruleValidate:c,form:m,linksStore:t}}},C=n=>(T("data-v-745da990"),n=n(),B(),n),_t={style:{"font-weight":"normal"}},rt=C(()=>o("span",{class:"ml-5"},"快捷操作",-1)),ut={class:"items-wrap"},mt=C(()=>o("span",null,"监控页",-1)),ft=C(()=>o("span",null,"主题",-1)),pt={class:"hover-item"},ht=C(()=>o("span",null,"列表",-1)),vt=C(()=>o("span",null,"搜索",-1)),gt=C(()=>o("span",null,"设置",-1)),bt={class:"hover-item"},kt=C(()=>o("span",null,"工具",-1)),wt={class:"link-wrap"},yt=["href","target"],$t={class:"link-item"},xt=C(()=>o("span",null,"开",-1)),Ct=C(()=>o("span",null,"关",-1));function Vt(n,a,v,t,i,m){const c=l("iconfont"),_=l("router-link"),d=l("f-dropdown-item"),f=l("f-dropdown-menu"),$=l("f-dropdown"),w=l("f-button"),u=l("f-card"),y=l("f-input"),b=l("f-form-item"),V=l("f-switch"),O=l("f-form"),P=l("f-modal");return h(),x(L,null,[e(u,{bordered:!1,class:"card-panel",shadow:"never","body-style":{padding:"0"},divider:"no"},{header:s(()=>[o("div",_t,[e(c,{icon:"block",color:"primary",bg:"",round:""}),rt])]),default:s(()=>[o("div",ut,[e(_,{to:"/analysis",tag:"a",class:"hover-item"},{default:s(()=>[e(c,{icon:"linechart",color:"success",size:40}),mt]),_:1}),e(_,{to:"/colorVar",tag:"a",class:"hover-item"},{default:s(()=>[e(c,{icon:"bg-colors",color:"#eb2f96",size:40}),ft]),_:1}),o("a",pt,[e(c,{icon:"table",color:"#fa541c",size:40}),ht]),o("a",{class:"hover-item",onClick:a[0]||(a[0]=q((...r)=>t.toggleSearch&&t.toggleSearch(...r),["stop"]))},[e(c,{icon:"search",color:"#722ed1",size:40}),vt]),o("a",{class:"hover-item",onClick:a[1]||(a[1]=q((...r)=>t.toggleSetting&&t.toggleSetting(...r),["stop"]))},[e(c,{icon:"setting",color:"#42cece",size:40}),gt]),o("a",bt,[e(c,{icon:"shopping",color:"#a0d911",size:40}),kt]),o("div",wt,[(h(!0),x(L,null,A(t.linksStore.links,r=>(h(),x("div",{class:"link-item",key:r.link},[e($,{trigger:"contextmenu",onCommand:t.linksStore.closeLink,placement:"bottom-start"},{dropdown:s(()=>[e(f,null,{default:s(()=>[e(d,{name:r.link,style:{color:"#ed4014"}},{default:s(()=>[p("移除")]),_:2},1032,["name"])]),_:2},1024)]),default:s(()=>[o("a",{href:r.link,target:r.newTab?"_blank":"_self"},g(r.text),9,yt)]),_:2},1032,["onCommand"])]))),128)),o("div",$t,[e(w,{type:"primary",icon:"plus",transparent:"",size:"mini",onClick:t.handleAdd},{default:s(()=>[p("添加")]),_:1},8,["onClick"])])])])]),_:1}),e(P,{modelValue:t.visible,"onUpdate:modelValue":a[6]||(a[6]=r=>t.visible=r),title:"添加一个快捷链接"},{footer:s(()=>[e(w,{onClick:a[5]||(a[5]=r=>t.visible=!1)},{default:s(()=>[p("取 消")]),_:1}),e(w,{type:"primary",onClick:t.submitForm},{default:s(()=>[p("确 定")]),_:1},8,["onClick"])]),default:s(()=>[e(O,{ref:"ruleFormRef",model:t.form,"label-width":"115px",class:"mt-16",rules:t.ruleValidate},{default:s(()=>[e(b,{prop:"link",label:"链接地址"},{default:s(()=>[e(y,{modelValue:t.form.link,"onUpdate:modelValue":a[2]||(a[2]=r=>t.form.link=r)},null,8,["modelValue"])]),_:1}),e(b,{prop:"text",label:"链接名称"},{default:s(()=>[e(y,{modelValue:t.form.text,"onUpdate:modelValue":a[3]||(a[3]=r=>t.form.text=r)},null,8,["modelValue"])]),_:1}),e(b,{prop:"text",label:"新标签页打开"},{default:s(()=>[e(V,{modelValue:t.form.newTab,"onUpdate:modelValue":a[4]||(a[4]=r=>t.form.newTab=r)},{open:s(()=>[xt]),close:s(()=>[Ct]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])],64)}const St=I(dt,[["render",Vt],["__scopeId","data-v-745da990"]]);const It={components:{draggable:K},setup(){const n=j(-1),a=j(""),{todolistStore:v,storeToRefs:t}=D(),{todolist:i,leftCount:m,todoLabel:c}=t(v);function _(){if(console.log(i),n.value>-1){n.value=-1,a.value="";return}i.value.push({text:"",done:!1}),n.value=i.value.length-1,a.value=""}function d(u){n.value=u,a.value=i.value[u].text}function f(u){const y=a.value;y===""?u>-1&&w(u):(i.value[u].text=y,n.value=-1)}function $(u){i.value[u].done=!i.value[u].done}function w(u){i.value.splice(u,1)}return{editIndex:n,editText:a,todolist:i,leftCount:m,todoLabel:c,handleAdd:_,inputBlur:f,removeOne:w,dbClickEdit:d,toggleCheck:$}}},R=n=>(T("data-v-482021ed"),n=n(),B(),n),Tt={flex:"main:justify cross:center",style:{"font-weight":"normal"}},Bt={class:"top"},jt=R(()=>o("span",{class:"ml-5"},"待办事项",-1)),zt=R(()=>o("i",{class:"f-iconfont f-icon-menu drag"},null,-1)),Lt=["onClick"],Dt={key:0},qt=["onDblclick"],Ft=["onClick"],Et={class:"footer"},Mt={class:"count"},Ut={class:"count"};function At(n,a,v,t,i,m){const c=l("iconfont"),_=l("f-icon"),d=l("f-tooltip"),f=l("f-input"),$=l("draggable"),w=l("f-card"),u=oo("focus");return h(),z(w,{bordered:!1,class:"card-panel",shadow:"never","body-style":{padding:"0"}},{header:s(()=>[o("div",Tt,[o("div",Bt,[e(c,{icon:"check-square",color:"warning",bg:"",round:""}),jt]),e(d,{content:"新增代办"},{default:s(()=>[e(_,{name:"plus-circle",type:"button",onClick:t.handleAdd},null,8,["onClick"])]),_:1})])]),default:s(()=>[e($,Z({modelValue:t.todolist,"onUpdate:modelValue":a[1]||(a[1]=y=>t.todolist=y),class:"todo-list",tag:"ul","item-key":"element"},{animation:200,ghostClass:"ghost",dragClass:"drag-item-class",forceFallback:!0,handle:".drag"}),{item:s(({element:y,index:b})=>[o("li",{class:U(["todo",[{done:y.done},{edit:t.editIndex===b}]])},[zt,o("span",{class:"toggle",onClick:V=>t.toggleCheck(b)},[e(_,{name:"check"})],8,Lt),t.editIndex===b?(h(),x("label",Dt,[X(e(f,{modelValue:t.editText,"onUpdate:modelValue":a[0]||(a[0]=V=>t.editText=V),size:"small",onEnter:V=>t.inputBlur(b),onBlur:V=>t.inputBlur(b)},null,8,["modelValue","onEnter","onBlur"]),[[u]])])):(h(),x("label",{key:1,onDblclick:V=>t.dbClickEdit(b)},g(y.text),41,qt)),o("i",{class:"destroy f-iconfont f-icon-close",onClick:V=>t.removeOne(b)},null,8,Ft)],2)]),_:1},16,["modelValue"]),o("footer",Et,[o("span",Mt,[o("strong",null,g(t.leftCount),1),p(" 项未完成 ")]),o("span",Ut,[o("strong",null,g(t.todoLabel),1)])])]),_:1})}const Nt=I(It,[["render",At],["__scopeId","data-v-482021ed"]]),Rt="/fei-admin/static/png/work-efa20ff1.png";const Ot={name:"WorkBench",components:{TodoList:Nt,QuickLink:St,DynamicBox:it,TopBox:Vo,ProjectBox:Yo}},Pt=n=>(T("data-v-4a70d6dd"),n=n(),B(),n),Wt={class:"workplace"},Ht={class:"work-center"},Qt=Pt(()=>o("div",{class:"banner"},[o("img",{src:Rt,alt:"work"})],-1));function Jt(n,a,v,t,i,m){const c=l("top-box"),_=l("project-box"),d=l("dynamic-box"),f=l("f-col"),$=l("quick-link"),w=l("todo-list"),u=l("f-row");return h(),x("div",Wt,[e(c),o("div",Ht,[e(u,{gutter:16},{default:s(()=>[e(f,{span:"14"},{default:s(()=>[e(_),e(d)]),_:1}),e(f,{span:"10"},{default:s(()=>[e($),Qt,e(w)]),_:1})]),_:1})])])}const oe=I(Ot,[["render",Jt],["__scopeId","data-v-4a70d6dd"]]);export{oe as default};