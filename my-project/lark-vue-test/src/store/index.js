import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
 
const state={
    showFooter:true,
    changableNum:0
};
const getters={
    isShow(state){
        return state.showFooter
    },
    getChangedNum(){
        return state.changableNum
    }
};
const mutations={
    show(state){
        state.showFooter=true;
    },
    hide(state){
        state.showFooter=false;
    },
    newNum(state,sum){
        state.changableNum+=sum;
    }
}
const store = new Vuex.Store({
    state,getters,mutations
});

export default store;