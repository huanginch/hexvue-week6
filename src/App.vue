<script>
import Navbar from "./components/NavbarComponent.vue";

import cartStore from "./stores/cartStore.js";
import authStore from "./stores/authStore.js";
import { mapActions } from "pinia";

export default {
  name: "App",
  methods: {
    ...mapActions(cartStore, ["getCart"]),
    ...mapActions(authStore, ["checkAuth"]),
  },
  mounted() {
    this.getCart();
    this.checkAuth();
  },
  components: {
    Navbar,
  },
};
</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>
  <body></body>
  <RouterView></RouterView>
</template>
