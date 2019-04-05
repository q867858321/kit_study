import Cookies from 'js-cookie'
import {
  channelListApi
} from '../../api/channel'
const app = {
  state: {
    date: new Date().toString(),
    channelList: [],
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    SET_DATE: (state, str) => {
      state.date = str
    },
    SET_CHANNELLIST: (state, channelList) => {
      state.channelList = channelList
    }
  },
  actions: {
    toggleSideBar ({
      commit
    }) {
      commit('TOGGLE_SIDEBAR')
    },
    closeSideBar ({
      commit
    }, {
      withoutAnimation
    }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    setDate ({
      commit
    }, str) {
      commit('SET_DATE', str)
    },
    setChannelList ({
      commit
    }) {
      return new Promise(resolve => {
        channelListApi(undefined).then(res => {
          commit('SET_CHANNELLIST', res)
          resolve()
        }).catch(err => {
          console.log('err', err)
        })
      })
    }
  }
}

export default app
