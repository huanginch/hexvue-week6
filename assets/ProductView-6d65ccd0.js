import{_ as i,r as _,o,c as r,a as e,t as d,b as u,F as h,a0 as f}from"./_plugin-vue_export-helper-2967bb73.js";import{p as n}from"./productStore-ab64f8ea.js";import{m as P,a as x}from"./axios-264c7568.js";const $={props:["targetProduct"]},y={class:"card bg-dark mb-3",style:{width:"18rem"}},v=["src","alt"],k={class:"card-body rounded-0 px-0"},w={class:"card-title text-white"},b={class:"card-text text-primary"};function C(c,l,t,m,p,g){const s=_("router-link");return o(),r("div",y,[e("img",{src:t.targetProduct.imageUrl,class:"card-img-top rounded-0",alt:t.targetProduct.title},null,8,v),e("div",k,[e("h5",w,d(t.targetProduct.title),1),e("p",b,"$NT"+d(t.targetProduct.price),1),u(s,{to:{path:`product/${t.targetProduct.id}`},class:"stretched-link"},null,8,["to"])])])}const V=i($,[["render",C]]),B={name:"ProductView",computed:{...P(n,["products"])},methods:{...x(n,["getProducts"])},mounted(){this.getProducts()},components:{ProductCard:V}},N={class:"container"},S=e("h1",{class:"my-5 text-danger"},"商品列表",-1),F={class:"d-flex justify-content-between flex-wrap"};function j(c,l,t,m,p,g){const s=_("ProductCard");return o(),r("div",N,[S,e("div",F,[(o(!0),r(h,null,f(c.products,a=>(o(),r("div",{key:a.id},[u(s,{"target-product":a},null,8,["target-product"])]))),128))])])}const L=i(B,[["render",j]]);export{L as default};
