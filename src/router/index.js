import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/product",
      name: "product",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/product/:id",
      name: "product-detail",
      component: () => import("../views/ProductDetailView.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("../views/FaqView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("../views/CheckoutView.vue"),
    },
    {
      path: "/member",
      name: "member",
      component: () => import("../views/Member/MemberView.vue"),
      children: [
        {
          path: "profile",
          name: "profile",
          component: () => import("../views/Member/ProfileView.vue"),
        },
        {
          path: "orders",
          name: "orders",
          component: () => import("../views/Member/OrdersView.vue"),
        },
        {
          path: "favorites",
          name: "favorites",
          component: () => import("../views/Member/FavoritesView.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
