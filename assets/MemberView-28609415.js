import{a as t}from"./authStore-1fa5b729.js";import{m as r}from"./axios-264c7568.js";import{_ as s,r as a,o as n,c,b as i,F as m,a as e}from"./_plugin-vue_export-helper-2967bb73.js";const p={name:"MemberView",computed:{...r(t,["isLogged"])},mounted(){this.isLogged||(alert("請先登入"),this.$router.push("/login"))}},_=e("div",{class:"container"},[e("h1",null,"會員專區")],-1);function u(d,l,f,h,g,$){const o=a("router-view");return n(),c(m,null,[_,i(o)],64)}const b=s(p,[["render",u]]);export{b as default};