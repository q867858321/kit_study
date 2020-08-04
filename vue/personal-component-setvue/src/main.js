import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Vuetify from 'vuetify'

import './components/index.js'

Vue.use(Vuetify)
new Vue({
  render: h => h(App),
}).$mount('#app')
