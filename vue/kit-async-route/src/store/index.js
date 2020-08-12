import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import permission from './modules/permission'
import tagsView from './modules/tagsView.js'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        permission,
        tagsView,
    },
    getters
})

export default store