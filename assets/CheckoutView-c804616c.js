import{c as p}from"./cartStore-6d77dff7.js";import{m as V,a as g}from"./axios-264c7568.js";import{v as w}from"./runtime-dom.esm-bundler-8a65992b.js";import{_ as y,r as c,o as u,c as _,a as e,b as a,w as k,F as h,$ as m,a0 as x,t as i,a1 as L}from"./_plugin-vue_export-helper-2967bb73.js";const{VITE_APP_URL:P,VITE_APP_PATH:E}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"int-hexschool",BASE_URL:"/hexvue-week6",MODE:"production",DEV:!1,PROD:!0},T={name:"CheckoutView",data(){return{user:{name:"",email:"",tel:"",address:""},message:"",isLoading:!1}},computed:{...V(p,["carts","final_total"])},methods:{onSubmit(){this.isLoading=!0;const n={user:this.user,message:this.message};this.$http.post(`${P}/api/${E}/order`,{data:n}).then(s=>{this.getCart(),this.isLoading=!1,alert(s.data.message),this.user={name:"",email:"",tel:"",address:""},this.message="",this.$router.push("/")}).catch(s=>{alert(s.response.data.message)})},...g(p,["getCart"])}},U={class:"checkout container"},A={class:"row mb-3"},C={class:"col-6"},S=e("label",{for:"name",class:"form-label"},"訂購人姓名",-1),F={class:"col-6"},q=e("label",{for:"tel",class:"form-label"},"訂購人電話",-1),D={class:"row mb-3"},N={class:"col-6"},B=e("label",{for:"email",class:"form-label"},"訂購人Email",-1),M={class:"row mb-5"},R={class:"col-"},H=e("label",{for:"address",class:"form-label"},"地址",-1),O={class:"row"},z={class:"col-12"},j=e("h3",null,"商品內容",-1),G={class:"table text-white"},I=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"商品名稱"),e("th",{scope:"col"},"數量"),e("th",{scope:"col"},"商品價格"),e("th",{scope:"col"},"小計")])],-1),J={class:"text-end"},K={class:"row mb-3"},Q={class:"col-12 col-lg-8"},W=e("label",{for:"message",class:"mb-2"},"備註",-1),X=e("button",{class:"btn btn-primary float-end mb-2",type:"submit"}," 送出訂單 ",-1);function Y(n,s,Z,$,l,v){const d=c("VField"),r=c("error-message"),f=c("VForm"),b=c("MyLoading");return u(),_(h,null,[e("div",U,[a(f,{onSubmit:v.onSubmit},{default:k(({errors:t})=>[e("div",A,[e("div",C,[S,a(d,{id:"name",name:"name",type:"text",class:m(["form-control",{"is-invalid":t.name,"is-valid":!t.name&&l.user.name}]),rules:"required",modelValue:l.user.name,"onUpdate:modelValue":s[0]||(s[0]=o=>l.user.name=o),placeholder:"請輸入姓名"},null,8,["modelValue","class"]),a(r,{name:"name",class:"invalid-feedback"})]),e("div",F,[q,a(d,{id:"tel",name:"tel",type:"tel",class:m(["form-control",{"is-invalid":t.tel,"is-valid":!t.tel&&l.user.tel}]),rules:"min:8|numeric|required",modelValue:l.user.tel,"onUpdate:modelValue":s[1]||(s[1]=o=>l.user.tel=o),placeholder:"請輸入電話"},null,8,["modelValue","class"]),a(r,{name:"tel",class:"invalid-feedback"})])]),e("div",D,[e("div",N,[B,a(d,{id:"email",name:"email",type:"email",class:m(["form-control",{"is-invalid":t.email,"is-valid":!t.email&&l.user.email}]),rules:"email|required",modelValue:l.user.email,"onUpdate:modelValue":s[2]||(s[2]=o=>l.user.email=o),placeholder:"請輸入 Email"},null,8,["modelValue","class"]),a(r,{name:"email",class:"invalid-feedback"})])]),e("div",M,[e("div",R,[H,a(d,{id:"address",name:"address",type:"text",class:m(["form-control",{"is-invalid":t.address,"is-valid":!t.address&&l.user.address}]),rules:"required",modelValue:l.user.address,"onUpdate:modelValue":s[3]||(s[3]=o=>l.user.address=o),placeholder:"請輸入地址"},null,8,["modelValue","class"]),a(r,{name:"address",class:"invalid-feedback"})])]),e("div",O,[e("div",z,[e("div",null,[j,e("table",G,[I,e("tbody",null,[(u(!0),_(h,null,x(n.carts,o=>(u(),_("tr",{key:o.id},[e("td",null,i(o.product.title),1),e("td",null,i(o.qty),1),e("td",null,"$NT "+i(o.product.price),1),e("td",null,"$NT "+i(o.final_total),1)]))),128))])]),e("p",J,"總價格: $NT "+i(n.final_total),1)])])]),e("div",K,[e("div",Q,[W,L(e("textarea",{"onUpdate:modelValue":s[4]||(s[4]=o=>l.message=o),id:"message",name:"message",class:"form-control",rows:"3"},null,512),[[w,l.message]])])]),X]),_:1},8,["onSubmit"])]),a(b,{active:l.isLoading,"onUpdate:active":s[5]||(s[5]=t=>l.isLoading=t)},null,8,["active"])],64)}const te=y(T,[["render",Y]]);export{te as default};
