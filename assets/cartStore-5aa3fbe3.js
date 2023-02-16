import{d as n,b as r}from"./axios-264c7568.js";const{VITE_APP_URL:o,VITE_APP_PATH:d}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"int-hexschool",BASE_URL:"/hexvue-week6/",MODE:"production",DEV:!1,PROD:!0},h=n("cartStore",{state:()=>({carts:[],final_total:0,isLoading:!1}),getters:{totalCart:({carts:t})=>t===void 0?0:t.length},actions:{getCart(){this.isLoading=!0,r.get(`${o}/api/${d}/cart`).then(t=>{this.carts=t.data.data.carts,this.final_total=t.data.data.final_total,this.isLoading=!1}).catch(t=>{alert(t.response.data.message)})},addToCart(t,a=1){this.isLoading=!0;const e={product_id:t,qty:a},i=this.carts.find(s=>s.id===t);i?(i.qty+=a,this.updateCart(i.id,e)):r.post(`${o}/api/${d}/cart`,{data:e}).then(s=>{this.isLoading=!1,alert(s.data.message),this.getCart()}).catch(s=>{alert(s.response.data.message)})},setCartQty(t,a){const e=this.carts.find(s=>s.id===t);e.qty=a.target.value*1;const i={product_id:e.product_id,qty:e.qty};this.updateCart(t,i)},updateCart(t,a={}){this.isLoading=!0,r.put(`${o}/api/${d}/cart/${t}`,{data:a}).then(e=>{this.isLoading=!1,alert(e.data.message),this.getCart()}).catch(e=>{alert(e.response.data.message)})},removeCart(t){this.isLoading=!0,r.delete(`${o}/api/${d}/cart/${t}`).then(a=>{this.isLoading=!1,alert(a.data.message),this.getCart()}).catch(a=>{alert(a.response.data.message)})},removeAllCart(){this.isLoading=!0,r.delete(`${o}${d}/carts`).then(t=>{this.isLoading=!1,alert(t.data.message),this.getCart()}).catch(t=>{alert(t.response.data.message)})}}});export{h as c};