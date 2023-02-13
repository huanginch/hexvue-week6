<template>
  <div class="card bg-dark mb-3" style="width: 18rem">
    <img
      :src="targetProduct.imageUrl"
      class="card-img-top rounded-0"
      :alt="targetProduct.title"
    />
    <div class="card-body rounded-0 px-0">
      <h5 class="card-title text-white">{{ targetProduct.title }}</h5>
      <p class="card-text text-primary">$NT{{ targetProduct.price }}</p>
      <router-link
        :to="{ path: `product/${targetProduct.id}` }"
        class="stretched-link"
      ></router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["targetProduct"],
};
</script>

<style lang="scss">
.card {
  border-radius: 0%;
  &:hover {
    box-shadow: 3px 3px 5px 0 rgba(255, 255, 255, 0.2);
  }
}

img {
  height: 200px;
  object-fit: cover;
}
</style>
