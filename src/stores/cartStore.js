import { defineStore } from "pinia";
import axios from "axios";
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default defineStore("cartStore", {
  state: () => ({
    carts: [],
    final_total: 0,
    isLoading: false,
  }),
  getters: {
    totalCart: ({ carts }) => {
      // 購物車商品總數
      if (carts === undefined) {
        return 0;
      } else {
        return carts.length;
      }
    },
  },
  actions: {
    getCart() {
      // 開啟loading
      this.isLoading = true;
      axios
        .get(`${VITE_API_URL}/api/${VITE_API_PATH}/cart`)
        .then((res) => {
          // 購物車資料在res.data.data.carts裡...
          this.carts = res.data.data.carts;
          this.final_total = res.data.data.final_total;
          // 關閉loading
          this.isLoading = false;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    addToCart(productId, qty = 1) {
      // 開啟loading
      this.isLoading = true;
      const data = {
        product_id: productId,
        qty,
      };
      const currentCart = this.carts.find((item) => item.id === productId);
      // 判斷是否有重複的產品
      if (currentCart) {
        currentCart.qty += qty;
        // 有重複的產品，更新購物車
        this.updateCart(currentCart.id, data);
      } else {
        // 沒有重複的產品，新增購物車
        axios
          .post(`${VITE_API_URL}/api/${VITE_API_PATH}/cart`, { data })
          .then((res) => {
            // 關閉loading
            this.isLoading = false;
            alert(res.data.message);
            // add to cart
            this.getCart();
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      }
    },
    setCartQty(id, event) {
      // 更新本地端購物車數量
      const currentCart = this.carts.find((item) => item.id === id);
      currentCart.qty = event.target.value * 1; // 轉成數字
      const data = {
        product_id: currentCart.product_id,
        qty: currentCart.qty,
      };
      this.updateCart(id, data);
    },
    updateCart(id, data = {}) {
      // 開啟loading
      this.isLoading = true;
      // 更新購物車
      axios
        .put(`${VITE_API_URL}/api/${VITE_API_PATH}/cart/${id}`, { data })
        .then((res) => {
          // 關閉loading
          this.isLoading = false;
          alert(res.data.message);
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    removeCart(id) {
      // 開啟loading
      this.isLoading = true;
      axios
        .delete(`${VITE_API_URL}/api/${VITE_API_PATH}/cart/${id}`)
        .then((res) => {
          // 關閉loading
          this.isLoading = false;
          alert(res.data.message);
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    removeAllCart() {
      // 開啟loading
      this.isLoading = true;
      axios
        .delete(`${VITE_API_URL}${VITE_API_PATH}/carts`)
        .then((res) => {
          // 關閉loading
          this.isLoading = false;
          alert(res.data.message);
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
});
