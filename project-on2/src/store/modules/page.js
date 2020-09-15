const state = {
    pageList: [],
    curPageIndex: -1
}
const mutations = {
    PUSH_PAGE_URL: (state, item) => {
        let index = state['pageList'].findIndex((obItem, obIndex) => {
            return JSON.stringify(obItem) == JSON.stringify(item)
        });
        if (index == -1) {
            state['pageList'].push(item);
            let len = state['pageList'].length;
            state['curPageIndex'] = len - 1;
        } else {
            state['curPageIndex'] = index;
        }

    },
    CLOSE_PAGE: (state, index) => {
        state['pageList'].splice(index, 1);
        state['curPageIndex']--;
    },
    CHANGE_PAGE_INDEX: (state, index) => {
        state['curPageIndex'] = index
    }
}
const actions = {
    pushPageUrl({ commit }, item) {
        commit('PUSH_PAGE_URL', item)
    },
    closePage({ commit }, index) {
        commit('CLOSE_PAGE', index)
    },
    changePageIndex({ commit }, index) {
        commit("CHANGE_PAGE_INDEX", index)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
