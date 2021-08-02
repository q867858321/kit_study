export default {
    namespaced: true,
    state: {
        slider: {
            opened: JSON.parse(sessionStorage.getItem("opened"))
        },
        token: sessionStorage.getItem("token") || "",
        menuList: null,
        tagList: [],
        permissionList: [],
        uname: sessionStorage.getItem("uname") || ""
    },
    mutations: {
        TOGGLE_SLIDER(state) {
            state.slider.opened = !state.slider.opened;
            sessionStorage.setItem(
                "opened",
                JSON.stringify(state.slider.opened)
            );
        },
        SET_TOKEN(state, token) {
            state.token = token;
            sessionStorage.setItem("token", state.token);
        },
        SET_UNAME(state, uname) {
            state.uname = uname;
            sessionStorage.setItem("uname", state.uname);
        },
        SET_MENU_LIST(state, menuList) {
            state.menuList = menuList;
        },
        ADD_TAG_LIST(state, item) {
            let index = -1;
            state.tagList.forEach((oItem, oIndex) => {
                if (item.path == oItem.path) {
                    index = oIndex;
                }
            });
            if (index == -1) {
                state.tagList.push(item);
            }
        },
        DELETE_TAG_LIST(state, path) {
            let index = -1;
            state.tagList.forEach((oItem, oIndex) => {
                if (oItem.path == path) {
                    index = oIndex;
                }
            });
            if (index > -1) {
                state.tagList.splice(index, 1);
            }
        },
        SET_PERMISSION_LIST(state, permissionList) {
            state.permissionList = permissionList;
        }
    },
    actions: {
        toggle_slider({ commit }) {
            commit("TOGGLE_SLIDER");
        },
        set_token({ commit }, token) {
            commit("SET_TOKEN", token);
        },
        set_uname({ commit }, uname) {
            commit("SET_UNAME", uname);
        },
        set_menu_list({ commit }, menuList) {
            commit("SET_MENU_LIST", menuList);
        },
        add_tag_list({ commit }, item) {
            commit("ADD_TAG_LIST", item);
        },
        delete_tag_list({ commit }, path) {
            commit("DELETE_TAG_LIST", path);
        },
        set_permission_List({ commit }, menuList) {
            let allMenus = XE.filterTree(menuList, item => item.type == 1);
            let permissionList = [];
            allMenus.forEach(item => {
                if (item.children && item.children.length > 0) {
                    item.children.forEach(menu => {
                        permissionList.push(
                            `${item.url}/${item.id}/${menu.menu}`
                        );
                    });
                }
            });
            commit("SET_PERMISSION_LIST", permissionList);
        }
    }
};
