import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const HelloWorld = () => import("@/components/HelloWorld");
// import Father from '@/components/Father'
const Father = () => import("@/components/Father");
// import Cate from '@/components/Cate'
const Cate = () => import("@/components/Cate");
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'hello'
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      // children: [
      //   { path: "cate", name: 'cate', component: Cate }
      // ]
    },
    {
      path: '/father',
      name: 'Father',
      component: Father,
      // component: resolve => require(['@/components/Father'], resolve),
    },
  ]
})
