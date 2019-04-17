import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './router'

Vue.use(VueRouter);
import test from '../components/test'
export default new VueRouter({
  mode: 'hash',
  routes//路由文件配置
  // routes: [
  //   {
  //     path: '/test',
  //     name: 'test',
  //     component: test,
  //   }
  // ]
})
