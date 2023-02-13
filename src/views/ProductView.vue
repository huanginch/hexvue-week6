<template>
  <div class="container">
    <h1 class="my-5 text-danger">商品列表</h1>
    <div class="d-flex justify-content-between flex-wrap">
      <div v-for="product in products" :key="product.id">
        <ProductCard :target-product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

import productStore from "../stores/productStore.js";
import { mapState, mapActions } from "pinia";

export default {
  name: "ProductView",
  computed: {
    ...mapState(productStore, ["products"]),
  },
  methods: {
    ...mapActions(productStore, ["getProducts"]),
  },
  mounted() {
    this.getProducts();
  },
  components: {
    ProductCard,
  },
};
</script>
