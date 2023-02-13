<template>
  <nav class="navbar navbar-expand-lg bg-dark py-3">
    <div class="container">
      <RouterLink class="navbar-brand text-primary fs-4" to="/"
        >WineWorld</RouterLink
      >
      <RouterLink
        class="navbar-toggler text-primary"
        to="/member"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <iconify-icon icon="ic:outline-menu"></iconify-icon>
      </RouterLink>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-lg-auto mb-2 mb-lg-0 align-items-center">
          <li class="nav-item">
            <RouterLink
              class="nav-link active text-primary"
              aria-current="page"
              to="/product"
              >商品列表</RouterLink
            >
          </li>
          <li class="nav-item me-5">
            <RouterLink class="nav-link text-primary" to="/faq"
              >常見問題</RouterLink
            >
          </li>
          <li v-if="!isLogged">
            <RouterLink
              class="btn btn-primary text-white text-primary"
              to="/login"
              >登入/註冊</RouterLink
            >
          </li>
          <li v-if="isLogged">
            <RouterLink class="nav-link text-primary" to="/cart">
              <div class="position-relative">
                <iconify-icon
                  icon="material-symbols:shopping-cart"
                  width="36"
                  height="36"
                >
                </iconify-icon>
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"
                  >{{ totalCart }}</span
                >
              </div>
            </RouterLink>
          </li>
          <li v-if="isLogged" class="nav-item dropdown">
            <a
              class="nav-link text-primary dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="d-lg-none">會員專區</span>
              <iconify-icon
                class="d-none d-lg-inline-block"
                icon="ic:baseline-account-box"
                width="36"
                height="36"
              ></iconify-icon>
            </a>
            <ul class="dropdown-menu bg-dark end-0">
              <li>
                <RouterLink
                  class="dropdown-item text-white"
                  to="/member/profile"
                  >個人資料</RouterLink
                >
              </li>
              <li>
                <RouterLink class="dropdown-item text-white" to="/member/orders"
                  >訂單查詢</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  class="dropdown-item text-white"
                  to="/member/favorites"
                  >我的收藏</RouterLink
                >
              </li>
              <li>
                <a
                  class="dropdown-item text-warning"
                  href="#"
                  @click.prevent="logout"
                  >登出</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import cartStore from "../stores/cartStore.js";
import authStore from "../stores/authStore.js";
import { mapState, mapActions } from "pinia";

export default {
  name: "NavBar",
  watch: {
    isLogged() {
      console.log(this.isLogged);
    },
  },
  computed: {
    ...mapState(cartStore, ["totalCart"]),
    ...mapState(authStore, ["isLogged"]),
  },
  methods: {
    ...mapActions(authStore, ["logout"]),
  },
  mounted() {
    console.log(this.isLogged);
  },
};
</script>

<style>
.navbar-brand {
  font-family: Elephant;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.navbar-nav .dropdown-menu[data-bs-popper] {
  top: 90%;
  left: auto;
  border-radius: 0;
}

.navbar-nav .dropdown-item:hover {
  background-color: #600a19;
}

.navbar-nav .dropdown-toggle::after {
  display: none;
}
</style>
