// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css/normalize.css'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import 'element-ui/lib/theme-chalk/index.css'
import elementUIVerify from 'element-ui-verify'
import './styles/index.scss' // global css
import './assets/css/iconfont.css'
import App from './App'
import router from './router'
import store from './store'
import './icons' // icon
import './permission'

Vue.config.devtools = process.env.NODE_ENV === 'development';
Vue.use(Element, { locale });
Vue.use(elementUIVerify);
elementUIVerify.addRule('vtitle', () => [{
  validator (rule, val, callback) {
    if ((val + '').length > 10) {
      const errorMessage = '该输入项内容太多！';
      callback(Error(errorMessage))
    }else if((val + '').length <2){
      const errorMessage = '该输入项内容太少！';
      callback(Error(errorMessage))
    }else callback()
  }
}]);

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
store.dispatch("GetUserInfo");
