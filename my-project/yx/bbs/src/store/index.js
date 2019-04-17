import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '../api/user'
import { getRand } from "../utils/random";
import { routes, ansycRoutes } from '../router/router'
import router from '../router/index'
Vue.use(Vuex);
//截取URL地址区分是否带项目路径
let href = location.href;
let localHref = href.substring(0, href.indexOf('/bbs'));
let apiUrl = '';
apiUrl = process.env.Base_URL == '' ? localHref : process.env.Base_URL;//判断是否分离部署
const state = {
  appId: '7166912116544627',
  aesKey: 'wKIFyACLEUvHnSIT',
  ivKey: '1yTSp6TP47uP12RK',
  appKey: 'vDnwyGf4Ej8eCcqLkhjaHSmav2TAXGVa',
  baseUrl: apiUrl,
  upLoadUrl: '/api/admin/upload/o_upload',
  resourceUpLoad: '/api/admin/resource/upload',
  templateUpLoad: '/api/admin/template/upload',
  importTpl: '/api/admin/template/importTpl',
  sessionKey: '',//sessionkey
  authorState: false,//登录状态
  userInfo: {},
  siteId: 1,
  routers: routes,//管理员免权限
  addRouters: [],
  perms: false,//权限
  sort: [{
    value: '0',
    label: '排序'
  }, {
    value: '1',
    label: '今日活跃度降序'
  }, {
    value: '2',
    label: '今日活跃度升序'
  }, {
    value: '3',
    label: '本周活跃度降序'
  }, {
    value: '4',
    label: '本周活跃度升序'
  }, {
    value: '5',
    label: '本月活跃度降序'
  },
  {
    value: '6',
    label: '本月活跃度升序'
  }, {
    value: '7',
    label: '今年活跃度降序'
  }, {
    value: '8',
    label: '今年活跃度升序'
  }, {
    value: '9',
    label: '积分降序'
  }, {
    value: '10',
    label: '积分升序'
  }, {
    value: '11',
    label: '威望降序'
  }, {
    value: '12',
    label: '威望升序'
  }],
  lastLoginDay: [{
    value: '0',
    label: '所有'
  }, {
    value: '3',
    label: '三天'
  }, {
    value: '7',
    label: '一周'
  }, {
    value: '30',
    label: '一个月'
  }, {
    value: '90',
    label: '三个月'
  }
  ]
};

/**
 *
 * @param tmpRoutes 异步路由表
 * @param perms 数据库权限拉取
 */
function getansycRoutes(tmpRoutes, perms) {
  const result = tmpRoutes.filter(route => {
    if (perms.indexOf(route.meta.role) != -1) {
      if (route.children != undefined) {
        route.children = getansycRoutes(route.children, perms);
      }
      return true;
    }
    return false;
  });
  return result;
}

const mutations = {
  SET_ROUTERS: (state, asRouters) => {
    state.routers = routes.concat(asRouters);
    state.addRouters = asRouters;
    state.perms = true
  },
  CLEAR_ROUTERS: (state) => {
    localStorage.clear();
    state.perms = false;
    state.routers = routes,//管理员免权限
      state.addRouters = []
    window.location.reload();
  }
};

const actions = {
  setRouters({ commit }) { //触发权限路由

    return new Promise(resolve => {
      let sessionKey = localStorage.getItem('sessionKey');
      let params = { sessionKey: sessionKey, nonce_str: getRand() };
      // user.getPerms(params).then(res => {
      //   let perms = res.data.perms;//权限
      let perms = '*';//权限
      let asRouters;
      if (perms == '*') {
        asRouters = ansycRoutes;
      } else {
        asRouters = getansycRoutes(ansycRoutes, perms);//递归过滤
      }
      commit('SET_ROUTERS', asRouters);
      resolve();
    })
    // })
  },
  clearRouters({ commit }) {
    return new Promise(resolve => {
      commit('CLEAR_ROUTERS');
      resolve();
    });
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});


