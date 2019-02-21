import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
    token: '11'
};
const mutations = {
    removeToken(state) {
        state.token = '';
    },
    addToken(state, token) {
        state.token = token;
    }
};
//this.$store.commit("addToken",'123456')
const store = new Vuex.Store({
    state,
    mutations
});
export default store;