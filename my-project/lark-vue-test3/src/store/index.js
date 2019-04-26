import Vue from 'vue';
import Vuex from 'vuex';
import footerStatus from './modules/footerStatus'
import collection from './modules/collection'
import user from './modules/user'
import getters from './getters'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        footerStatus,
        collection,
        user
    },
    getters
});