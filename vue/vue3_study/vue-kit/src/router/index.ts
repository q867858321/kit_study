import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/total",
    name: "total",
    component: () => import("../views/Total.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
