<template>
  <div class="cart container">
    <h1>我的購物車</h1>
    <table class="table text-white align-middle">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">商品名稱</th>
          <th scope="col">數量</th>
          <th scope="col">商品價格</th>
          <th scope="col">小計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cartItem in carts" :key="cartItem.id">
          <th scope="row">
            <button
              type="button"
              class="btn rounded-0 text-white"
              @click="
                this.$refs.deleteModal.open();
                message = `確定要刪除 ${cartItem.product.title} 嗎?`;
                delFunc = removeCart.bind(this, cartItem.id);
              "
            >
              <iconify-icon
                icon="material-symbols:delete-outline-sharp"
                class="text-success fs-4 align-middle"
              ></iconify-icon>
            </button>
          </th>
          <td>{{ cartItem.product.title }}</td>
          <td>
            <input
              type="number"
              class="form-control w-50"
              :value="cartItem.qty"
              @change="(e) => setCartQty(cartItem.id, e)"
              min="1"
            />
          </td>
          <td>$NT {{ cartItem.product.price }}</td>
          <td>$NT {{ cartItem.final_total }}</td>
        </tr>
      </tbody>
    </table>
    <p class="text-end">總價格: $NT {{ final_total }}</p>
    <hr />
    <div class="float-end">
      <a
        class="btn btn-outline-primary me-3 rounded-0"
        @click.prevent="
          message = '確定要清空購物車嗎?';
          delFunc = removeAllCart;
          this.$refs.deleteModal.open();
        "
        :class="{ disabled: !totalCart }"
        >清空購物車</a
      >
      <router-link
        to="/checkout"
        class="btn btn-primary rounded-0"
        :class="{ disabled: !totalCart }"
        >結帳</router-link
      >
    </div>
  </div>

  <delete-confirm-modal
    ref="deleteModal"
    :message="message"
    :del-func="delFunc"
  ></delete-confirm-modal>

  <MyLoading v-model:active="isLoading"></MyLoading>
</template>

<script>
import DeleteConfirmModal from "../components/DeleteConfirmModal.vue";

import cartStore from "../stores/cartStore";
import { mapState, mapActions } from "pinia";

export default {
  name: "CartView",
  data() {
    return {
      message: "",
      delFunc: null,
    };
  },
  computed: {
    ...mapState(cartStore, ["carts", "totalCart", "final_total", "isLoading"]),
  },
  methods: {
    ...mapActions(cartStore, ["setCartQty", "removeCart", "removeAllCart"]),
  },
  components: {
    DeleteConfirmModal,
  },
};
</script>

<style>
.cart {
  margin-top: 150px;
}
</style>
