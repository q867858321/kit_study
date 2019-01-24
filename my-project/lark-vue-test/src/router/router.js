import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import Footer from '@/components/Footer.vue'
Vue.use(VueRouter)
console.log("VueRouter",VueRouter)
console.log("app222",Footer)
export default new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/detail',
      component:Footer
    }
  ]
})
