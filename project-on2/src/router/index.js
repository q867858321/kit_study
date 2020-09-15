import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import Layout from '@/layout'

import p404 from "@/views/404.vue"
import login from "@/views/login/index.vue"
export const routes = [
  {
    path: '/404',
    component: p404,
    hidden: true
  },
  {
    path: "/login",
    name: "Login",
    component: login,
    hidden: true,
  },
  {
    path: "/",
    name: "首页",
    component: Layout,
  }
];

let router = new VueRouter({
  mode: 'history',
  routes
})

export default router
