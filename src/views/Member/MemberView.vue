<template>
  <div class="container">
    <h1>會員專區</h1>
  </div>
  <router-view></router-view>
</template>

<script>
import authStore from "../../stores/authStore.js";
import { mapState } from "pinia";

export default {
  name: "MemberView",
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
