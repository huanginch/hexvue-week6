<template>
  <teleport to="body">
    <div class="loading d-none" ref="loading">
      <div class="spinner-border text-primary">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ["active"],
  data() {
    return {
      // maxLoadingTime: 5,
    };
  },
  watch: {
    active() {
      if (this.active) {
        this.$refs.loading.classList.remove("d-none");
      } else {
        this.$refs.loading.classList.add("d-none");
      }
    },
  },
};
</script>

<style>
.loading {
  background: fixed center center no-repeat;
  background-size: contain;
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}
.loading .spinner-border {
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>
