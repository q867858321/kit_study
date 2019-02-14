// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//设置title
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle);
router.beforeEach((to,form,next)=>{
  if(to.meta.title){
    document.title=to.meta.title
  }
  next()
})

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store, //使用store
  template: '<App/>',
  render: h => h(App)
})
