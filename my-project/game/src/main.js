import Vue from 'vue'
import App from './App.vue'
import router from './router'  //vue-router
import store from './store'   //vuex

import VueLazyload from 'vue-lazyload' //图片懒加载
Vue.use(VueLazyload);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
