import { createRouter, createWebHistory } from "vue-router"
import Home from "./views/Home.vue";
import ProductDetail from "./views/ProductDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, name: "home" },
    { path: "/:productId", component: ProductDetail, name: "product-detail" },
  ],
});

export default router