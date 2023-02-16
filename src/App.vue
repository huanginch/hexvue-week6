<template>
  <Navbar></Navbar>
  <RouterView></RouterView>
</template>

<script>
import Navbar from "./components/NavbarComponent.vue";

export default {
  name: "IndexView",
  components: {
    Navbar,
  },
};
</script>
