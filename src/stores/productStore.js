import { defineStore } from "pinia";
import axios from "axios";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default defineStore("productStore", {
  // data, methods, computed for vue component
  // state, actions, getters for pinia store
  state: () => ({
    products: [],
    product: {},
    isGettingProducts: false,
  }),
  actions: {
    getProducts() {
      this.isGettingProducts = true;
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((response) => {
          this.isGettingProducts = false;
          this.products = response.data.products;
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    getProductById(productId) {
      this.isGettingProducts = true;
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${productId}`)
        .then((res) => {
          this.isGettingProducts = false;
          this.product = res.data.product;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
});
