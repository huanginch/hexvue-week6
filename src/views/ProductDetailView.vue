<template>
  <ProductDetail :target-product="product"></ProductDetail>
  <MyLoading v-model:active="isLoading"></MyLoading>
  <MyLoading v-model:active="isGettingProducts"></MyLoading>
</template>

<script>
import ProductDetail from "@/components/ProductDetail.vue";
import productStore from "../stores/productStore";
import cartStore from "../stores/cartStore";
import { mapState, mapActions } from "pinia";

export default {
  name: "ProductDetailView",
  data() {
    return {
      productId: "",
      url: "https://vue3-course-api.hexschool.io/v2/api/",
      path: "int-hexschool",
    };
  },
  computed: {
    ...mapState(productStore, ["product", "isGettingProducts"]),
    ...mapState(cartStore, ["isLoading"]),
  },
  methods: {
    ...mapActions(productStore, ["getProductById"]),
  },
  mounted() {
    this.productId = this.$route.params.id;
    this.getProductById(this.productId);
  },
  components: {
    ProductDetail,
  },
};
</script>
