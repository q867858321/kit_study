import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShuangXiangShuJu from '@/components/ShuangXiangShuJu'
import Fangfa from '@/components/Fangfa'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aa',
      name: 'ShuangXiangShuJu',
      component: ShuangXiangShuJu
    },
    {
      path: '/ab',
      name: 'Fangfa',
      component: Fangfa
    }
  ]
})
