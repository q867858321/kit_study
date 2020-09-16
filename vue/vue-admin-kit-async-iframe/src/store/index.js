import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'
import user from './modules/user'
import page from './modules/page'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    page
  },
  getters
})

export default store
