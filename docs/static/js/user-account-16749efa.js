import{u as P}from"./useTable-92d401ba.js";import{g as Q}from"./user.api-b78fde6e.js";import{g as A}from"./depart.api-fb4f0f07.js";import{u as W}from"./useForm-7af87cd7.js";import{a as J}from"./chunk-f-ui-one-07ca1cee.js";import{s as X}from"./index-f2e95af1.js";import{a9 as Y,k as C,z as Z,J as $,D as n,a as M,w as a,o as c,c as l,g as x,N as j,F as R,h as G,q as i,t as H,d as ee}from"./vendor-19c9365f.js";import"./chunk-brace-bde7130a.js";import"./chunk-mockjs-2decca2f.js";const le={name:"UserAccount",setup(){const E=C(null),t=C({}),w=Z({page:1,size:10,name:"",roles:"",status:"",date:"",email:""}),e=C(!1),q=C([]),_=C({}),{treeData:m,getTreeData:r}=X(A);r().then(()=>console.log(m.value));const{loading:f,list:p,total:S,getListData:d,pageChange:y,pageSizeChange:N}=P(Q,w),{formRef:U,editStatus:D,pageStatus:g,editLoading:z,openCreate:k,openEdit:b,backNormal:V,submitForm:v,resetForm:T,setBtnLoading:h,modalVisible:L}=W();$(p,s=>{q.value=s.map(O=>({...O,expand:!1}))});function B(s){s.selected&&(t.value=s)}function F(){_.value={realName:"",username:"",email:"",roles:"",depart:""},k()}function o(s){_.value={...s,depart:""},b()}function u(){_.value={},V()}function I(){J.success("删除成功！"),d()}function K(){v(()=>{h(!0);const s=g.value;setTimeout(()=>{J.success(`${s.isCreate?"新增":"修改"}成功！`),h(!1),V(),d()},1e3)})}return d(),{treeRef:E,currentTreeNode:t,handleSelect:B,getDepartTree:A,deptTree:m,expand:e,query:w,loading:f,roleMap:{admin:"管理员",user:"普通用户",op:"实施人员"},total:S,copyList:q,getListData:d,pageChange:y,pageSizeChange:N,columns:[{title:"姓名",key:"realName"},{title:"登录名",key:"username"},{title:"邮箱",key:"email"},{title:"角色",slot:"roles"},{title:"出生日期",key:"createDate"},{title:"操作",width:100,align:"center",slot:"action"}],user:_,formRef:U,editStatus:D,pageStatus:g,editLoading:z,openCreate:k,openEdit:b,backNormal:V,submitForm:v,resetForm:T,ruleValidate:{realName:[{required:!0,message:"真实名称必填",trigger:"blur"}],username:[{required:!0,message:"用户名必填",trigger:"blur"}]},modalVisible:L,handleCreate:F,handleCancel:u,handleEdit:o,handleSubmit:K,handleDelete:I}}},ae={key:0};function oe(E,t,w,e,q,_){const m=n("f-input"),r=n("f-form-item"),f=n("f-option"),p=n("f-select"),S=n("f-date-picker"),d=n("f-button"),y=n("f-form"),N=n("f-page"),U=n("base-tree"),D=n("f-icon"),g=n("f-dropdown-item"),z=n("f-dropdown-menu"),k=n("f-dropdown"),b=n("action-button"),V=n("f-divider"),v=n("f-table"),T=n("base-table"),h=n("page-cube-wrapper"),L=n("f-tree-select"),B=n("f-modal"),F=n("page-container");return c(),M(F,{"inner-scroll":""},{header:a(()=>[l(y,{"label-width":"95px","label-position":"left"},{default:a(()=>[l(r,{label:"用户名称"},{default:a(()=>[l(m,{modelValue:e.query.name,"onUpdate:modelValue":t[0]||(t[0]=o=>e.query.name=o),clearable:""},null,8,["modelValue"])]),_:1}),l(r,{label:"用户角色"},{default:a(()=>[l(p,{modelValue:e.query.roles,"onUpdate:modelValue":t[1]||(t[1]=o=>e.query.roles=o),clearable:""},{default:a(()=>[(c(!0),x(R,null,j(e.roleMap,(o,u)=>(c(),M(f,{key:u,label:o,value:u},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e.expand?(c(),x(R,{key:0},[l(r,{label:"状态"},{default:a(()=>[l(p,{modelValue:e.query.status,"onUpdate:modelValue":t[2]||(t[2]=o=>e.query.status=o),clearable:""},{default:a(()=>[l(f,{label:"启用",value:"1"}),l(f,{label:"禁用",value:"0"})]),_:1},8,["modelValue"])]),_:1}),l(r,{label:"邮箱"},{default:a(()=>[l(m,{modelValue:e.query.email,"onUpdate:modelValue":t[3]||(t[3]=o=>e.query.email=o),clearable:""},null,8,["modelValue"])]),_:1}),l(r,{label:"日期"},{default:a(()=>[l(S,{modelValue:e.query.date,"onUpdate:modelValue":t[4]||(t[4]=o=>e.query.date=o),clearable:""},null,8,["modelValue"])]),_:1})],64)):G("",!0),l(r,null,{default:a(()=>[l(d,null,{default:a(()=>[i("重置")]),_:1}),l(d,{type:"primary",loading:e.loading,onClick:e.getListData},{default:a(()=>[i("查询")]),_:1},8,["loading","onClick"]),l(d,{type:"text",icon:e.expand?"up":"down",onClick:t[5]||(t[5]=o=>e.expand=!e.expand)},{default:a(()=>[i(H(e.expand?"收起":"展开"),1)]),_:1},8,["icon"])]),_:1})]),_:1})]),footer:a(()=>[l(N,{total:e.total,current:e.query.page,"page-size":e.query.size,"show-sizer":"","show-total":"",onChange:e.pageChange,onSizeChange:e.pageSizeChange},null,8,["total","current","page-size","onChange","onSizeChange"])]),default:a(()=>[l(h,null,{left:a(()=>[l(U,{ref:"treeRef","tree-title":"部门列表","show-filter":"",fetch:e.getDepartTree,onSelectChange:e.handleSelect,width:"240px"},null,8,["fetch","onSelectChange"])]),default:a(()=>[l(T,{class:"pl-16"},{action:a(()=>[l(d,{type:"primary",icon:"plus-circle",onClick:e.handleCreate},{default:a(()=>[i("新增")]),_:1},8,["onClick"])]),actionRight:a(()=>[l(k,{style:{"margin-left":"20px"}},{dropdown:a(()=>[l(z,null,{default:a(()=>[l(g,null,{default:a(()=>[i("刷新")]),_:1}),l(g,null,{default:a(()=>[i("删除")]),_:1})]),_:1})]),default:a(()=>[l(d,null,{default:a(()=>[i(" 更多操作 "),l(D,{name:"down"})]),_:1})]),_:1})]),default:a(()=>[l(v,{columns:e.columns,data:e.copyList,loading:e.loading,border:""},{roles:a(({row:o})=>[i(H(e.roleMap[o.roles]),1)]),action:a(({row:o})=>[l(b,{type:"text",icon:"edit-square","is-icon":"",tooltip:"编辑",onClick:u=>e.handleEdit(o)},null,8,["onClick"]),l(V,{type:"vertical"}),l(b,{type:"text",icon:"delete",color:"danger","is-icon":"",tooltip:"删除",confirm:"",onClick:u=>e.handleDelete(o)},null,8,["onClick"])]),_:1},8,["columns","data","loading"])]),_:1})]),_:1}),l(B,{"model-value":e.modalVisible,title:`${e.pageStatus.isCreate?"新增":"修改"}用户`,onClosed:e.handleCancel},{footer:a(()=>[ee("div",null,[l(d,{onClick:e.handleCancel},{default:a(()=>[i("取 消")]),_:1},8,["onClick"]),l(d,{type:"primary",loading:e.editLoading,onClick:e.handleSubmit},{default:a(()=>[i("确 定")]),_:1},8,["loading","onClick"])])]),default:a(()=>[e.modalVisible?(c(),x("div",ae,[l(y,{ref:"formRef",model:e.user,rules:e.ruleValidate,"label-width":"100px","label-suffix":":"},{default:a(()=>[l(r,{label:"所属部门"},{default:a(()=>[l(L,{modelValue:e.user.depart,"onUpdate:modelValue":t[6]||(t[6]=o=>e.user.depart=o),data:e.deptTree,"title-key":"text"},null,8,["modelValue","data"])]),_:1}),l(r,{label:"姓名",prop:"realName"},{default:a(()=>[l(m,{modelValue:e.user.realName,"onUpdate:modelValue":t[7]||(t[7]=o=>e.user.realName=o),placeholder:"输入姓名",clearable:""},null,8,["modelValue"])]),_:1}),l(r,{label:"用户名",prop:"username"},{default:a(()=>[l(m,{modelValue:e.user.username,"onUpdate:modelValue":t[8]||(t[8]=o=>e.user.username=o),placeholder:"输入登录名",clearable:""},null,8,["modelValue"])]),_:1}),l(r,{label:"邮箱"},{default:a(()=>[l(m,{modelValue:e.user.email,"onUpdate:modelValue":t[9]||(t[9]=o=>e.user.email=o),placeholder:"输入邮箱",clearable:""},null,8,["modelValue"])]),_:1}),l(r,{label:"角色"},{default:a(()=>[l(p,{modelValue:e.user.roles,"onUpdate:modelValue":t[10]||(t[10]=o=>e.user.roles=o),placeholder:"选择角色",clearable:""},{default:a(()=>[(c(!0),x(R,null,j(e.roleMap,(o,u)=>(c(),M(f,{key:u,label:o,value:u},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])):G("",!0)]),_:1},8,["model-value","title","onClosed"])]),_:1})}const fe=Y(le,[["render",oe]]);export{fe as default};