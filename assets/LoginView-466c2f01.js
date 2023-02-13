import{a as b}from"./authStore-7c57d01f.js";import{a as f}from"./axios-264c7568.js";import{_ as V,r as t,o as v,c as g,a as o,b as a,w as d,d as c,F as L,$ as u}from"./_plugin-vue_export-helper-2967bb73.js";const h={name:"LoginView",data(){return{username:"",password:""}},methods:{...f(b,["signIn"])}},k={class:"container text-center mt-3"},y=o("h1",{class:"mb-5"},"Welcome to WineWorld",-1),F={class:"row"},x={class:"col-12 col-md-8 col-lg-6 mx-auto"},B=o("label",{for:"username",class:"mb-2"},"帳號",-1),C=o("label",{for:"pwd",class:"mb-2"},"密碼",-1),N=o("button",{type:"submit",class:"btn btn-primary mt-3 text-white"}," 登入 ",-1);function U(l,e,W,q,s,E){const r=t("VField"),m=t("error-message"),p=t("VForm"),_=t("RouterLink"),w=t("MyLoading");return v(),g(L,null,[o("div",k,[y,o("div",F,[o("div",x,[a(p,{onSubmit:e[2]||(e[2]=n=>l.signIn(s.username,s.password)),class:"mb-5"},{default:d(({errors:n})=>[B,a(r,{id:"username",name:"username",type:"email",class:u(["form-control mb-3",{"is-invalid":n.username,"is-valid":!n.username&&s.username}]),rules:"email|required",placeholder:"請輸入帳號/Email",modelValue:s.username,"onUpdate:modelValue":e[0]||(e[0]=i=>s.username=i)},null,8,["class","modelValue"]),a(m,{name:"username",class:"invalid-feedback mb-3"}),C,a(r,{id:"pwd",name:"pwd",type:"password",class:u(["form-control mb-3",{"is-invalid":n.pwd,"is-valid":!n.pwd&&s.password}]),rules:"required",placeholder:"請輸入密碼",modelValue:s.password,"onUpdate:modelValue":e[1]||(e[1]=i=>s.password=i)},null,8,["class","modelValue"]),a(m,{name:"pwd",class:"invalid-feedback"}),N]),_:1}),o("p",null,[c(" 沒有帳號? "),a(_,{to:"/register"},{default:d(()=>[c("註冊")]),_:1})])])])]),a(w,{active:l.isLoading,"onUpdate:active":e[3]||(e[3]=n=>l.isLoading=n)},null,8,["active"])],64)}const S=V(h,[["render",U]]);export{S as default};
