<template>
  <div class="container">
    <h1>This is favorite page</h1>
  </div>
</template>

<script>
import authStore from "../../stores/authStore.js";
import { mapState } from "pinia";

export default {
  name: "FavoritesView",
  computed: {
    ...mapState(authStore, ["isLogged"]),
  },
  mounted() {
    if (!this.isLogged) {
      alert("請先登入");
      this.$router.push("/login");
    }
  },
};
</script>
