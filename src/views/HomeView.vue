<template>
  <div class="container">
    <h1>這裡是首頁(･∀･)</h1>
  </div>
</template>

<script>
import cartStore from "../stores/cartStore.js";
import authStore from "../stores/authStore.js";
import { mapActions } from "pinia";

export default {
  name: "HomeView",
  methods: {
    ...mapActions(cartStore, ["getCart"]),
    ...mapActions(authStore, ["checkAuth"]),
  },
  mounted() {
    this.getCart();
    this.checkAuth();
  },
};
</script>
