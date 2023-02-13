import{c as h,v}from"./cartStore-3c38cd2e.js";import{a as b}from"./authStore-7c57d01f.js";import{m as l,a as _}from"./axios-264c7568.js";import{_ as g,r as m,o as f,c as P,a as t,t as i,a1 as k,b as c,w as D,d as w,F as x}from"./_plugin-vue_export-helper-2967bb73.js";import{p}from"./productStore-ab64f8ea.js";const C={name:"ProductDetailView",props:["targetProduct"],data(){return{qty:1}},computed:{...l(b,["isLogged"])},methods:{checkAuth(){this.isLogged?this.addToCart(this.targetProduct.id,this.qty):(alert("請先登入"),this.$router.push("/login"))},..._(h,["addToCart"])}},L={class:"productDetail container d-flex justify-content-center"},V=["src","alt"],A={class:"mb-5"},B=t("h3",null,"商品介紹",-1),I={class:"productDescription"},S=t("h3",{class:"mb-1"},"價格",-1),T={class:"fs-3 text-primary mb-5 fw-bold"},q={class:"d-flex justify-content-between mb-5"},N={class:"d-flex justify-content-between"};function U(s,e,o,y,n,a){const d=m("router-link");return f(),P("div",L,[t("img",{class:"me-5 img-fluid",src:o.targetProduct.imageUrl,alt:o.targetProduct.title},null,8,V),t("div",null,[t("h1",A,i(o.targetProduct.title),1),B,t("p",I,i(o.targetProduct.description),1),S,t("p",T," $NT "+i(o.targetProduct.price),1),t("div",q,[t("p",null,"酒精濃度: "+i(o.targetProduct.abv),1),t("p",null,"產地: "+i(o.targetProduct.country),1),t("p",null,"容量: "+i(o.targetProduct.capacity),1)]),t("div",N,[k(t("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>n.qty=r),type:"number",min:"1",class:"me-3"},null,512),[[v,n.qty]]),t("button",{type:"button",class:"btn btn-outline-primary rounded-0 me-3",onClick:e[1]||(e[1]=(...r)=>a.checkAuth&&a.checkAuth(...r))}," 加入購物車 "),c(d,{to:"/checkout",class:"btn btn-primary text-white",onClick:a.checkAuth},{default:D(()=>[w("直接購買")]),_:1},8,["onClick"])])])])}const j=g(C,[["render",U]]),G={name:"ProductDetailView",data(){return{productId:"",url:"https://vue3-course-api.hexschool.io/v2/api/",path:"int-hexschool"}},computed:{...l(p,["product","isGettingProducts"]),...l(h,["isLoading"])},methods:{..._(p,["getProductById"])},mounted(){this.productId=this.$route.params.id,this.getProductById(this.productId)},components:{ProductDetail:j}};function M(s,e,o,y,n,a){const d=m("ProductDetail"),r=m("MyLoading");return f(),P(x,null,[c(d,{"target-product":s.product},null,8,["target-product"]),c(r,{active:s.isLoading,"onUpdate:active":e[0]||(e[0]=u=>s.isLoading=u)},null,8,["active"]),c(r,{active:s.isGettingProducts,"onUpdate:active":e[1]||(e[1]=u=>s.isGettingProducts=u)},null,8,["active"])],64)}const K=g(G,[["render",M]]);export{K as default};
