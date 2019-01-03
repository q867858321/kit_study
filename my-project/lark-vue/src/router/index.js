import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: {HelloWorld:"#b"}
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    }
  ]
})
