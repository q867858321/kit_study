import Vue from 'vue';
import Vuex from 'vuex';
import footerStatus from './modules/footerStatus'
import collection from './modules/collection'
import name from './modules/name'
import getters from './getters'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        footerStatus,
        collection,
        name
    },
    getters
});