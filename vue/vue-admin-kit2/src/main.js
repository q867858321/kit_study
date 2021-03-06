import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import './permission' // permission control
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import {
  mockXHR
} from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}


//给vue绑定全局属性、方法(不可修改)
import base from './utils/base.js';
Vue.prototype.$base = base;


// set ElementUI lang to EN
Vue.use(ElementUI, {
  locale
})

Vue.config.productionTip = false


import "@/libs/KitUI/index.js";// 利用混入方式导入自定义UI库

import "@/libs2/KitUI/index.js";// 利用导入组件的方式导入自定义UI库

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
