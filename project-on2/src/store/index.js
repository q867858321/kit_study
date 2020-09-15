import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'
import user from './modules/user'
import tagsView from './modules/tagsView'
import page from './modules/page'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    tagsView,
    page
  },
  getters
})

export default store
