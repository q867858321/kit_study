import Vue from 'vue'

// 导入elementUI
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';

// 导入axios
import axios from 'axios'
import Qs from 'qs'
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;

// 导入懒加载图片
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  error: './static/error.png',
  loading: './static/loading.png'
})


import App from './App.vue'
import store from './store'
import router from './router'




Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
