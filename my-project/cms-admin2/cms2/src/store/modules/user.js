import {setToken,getToken,removeToken} from '../../utils/auth'
import {logout} from '../../api/login'
const user = {
  state: {
    name: '',
    avatar: '',
    isSuper:false,
  },

  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ISSUPER: (state, isSuper) => {
      state.isSuper = isSuper
    },
  },

  actions: {
    // 获取用户信息
    GetUserInfo({ commit, state }) {
      let userinfostr =getToken();
      let data = JSON.parse(userinfostr);
      commit('SET_NAME', data.username);
      commit('SET_AVATAR', data.avatar);
      commit('SET_ISSUPER', data.isSuper)
    },
    // 登出
    LogOut({ commit, state }) {
      return logout().then(res=>{
        removeToken()
      }).catch(err=>{
        removeToken()
      })

    },
  }
}

export default user
