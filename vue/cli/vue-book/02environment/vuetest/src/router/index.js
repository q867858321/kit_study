import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShuangXiangShuJu from '@/components/ShuangXiangShuJu'
import Fangfa from '@/components/Fangfa'
import Shuangxiang from '@/components/Shuangxiang'
import Fauther from '@/components/Fauther'
import Resource from '@/components/Resource'
import Axios from '@/components/Axios'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '*', redirect: '/aa' },
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
    },
    {
      path: '/cc',
      name: 'Shuangxiang',
      component: Shuangxiang
    },
    {
      path: '/f',
      name: 'Fauther',
      component: Fauther
    },
    {
      path: '/r',
      name: 'Resource',
      component: Resource
    },
    {
      path: '/a',
      name: 'Axios',
      component: Axios
    }
  ]
})
