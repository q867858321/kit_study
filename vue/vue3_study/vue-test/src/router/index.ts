import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import('../views/com_watch.vue')
  },
  {
    path: '/life',
    name: 'life',
    component: () => import('../views/life.vue')
  },
  {
    path: '/hook',
    name: 'hook',
    component: () => import('../views/hook.vue')
  },
  {
    path: '/ref',
    name: 'ref',
    component: () => import('../views/ref.vue')
  },
  {

    path: '/shallow',
    name: 'shallow',
    component: () => import('../views/shallowReactive_shallowRef.vue')
  },
  {
    path: '/element_test',
    name: 'element_test',
    component: () => import('../views/element/test.vue')
  },
  {
    path: '/father',
    name: 'father',
    component: () => import('../views/father.vue')
  },
  {
    path: '/vuex1',
    name: 'vuex',
    component: () => import('../views/vuex-test/vuex1.vue')
  },
  {
    path: '/vuex2',
    name: 'vuex2',
    component: () => import('../views/vuex-test/vuex2.vue')
  },
  {
    path: '/vuex3',
    name: 'vuex3',
    component: () => import('../views/vuex-test/vuex3.vue')
  },

]
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})


export default router
