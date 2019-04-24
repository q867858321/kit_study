//footerStatus.js

const state = {
    name: "li"
};
const getters = {   //实时监听state值的变化(最新状态)

};
const mutations = {
    show(state, data) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.name = data;
    },

};

export default {
    namespaced: true, //用于在全局引用此文里的方法时标识这一个的文件名
    state,
    mutations,
}