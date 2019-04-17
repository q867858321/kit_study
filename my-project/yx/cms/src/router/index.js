import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'
Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('../views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('../views/errorPage/404'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: '11/12'
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const genPromise = function genPromise (reFn, sourceFn) {
  const button = dmButtonMap[sourceFn.getPerm] || {}
  if (button.status) {
    return reFn(button.url)
  } else {
    return new Promise((resolve, reject) => rej('403'))
  }
}

export function getUrlById (id) {
  console.debug(id, dmButtonMap[id])
  return dmButtonMap[id] && dmButtonMap[id].url
}
export const dmButtonMap = {
  '12': {
    apiName: 'projectListApi',
    status: false
  },
  '34': {
    apiName: 'projectCreateApi',
    status: false
  },
  '35': {
    apiName: 'projectUpdateApi',
    status: false
  },
  '36': {
    apiName: 'projectDeleteApi',
    status: false
  },
  '77': {
    apiName: 'projectPublishApi',
    status: false
  },
  '79': {
    apiName: 'projectPageIndexApi',
    status: false
  },
  '78': {
    apiName: 'projectPreviewApi',
    status: false
  },
  '113': {
    apiName: 'userIndexApi',
    status: true
  },
  '115': {
    apiName: 'userCreateApi',
    status: false
  },
  '116': {
    apiName: 'userDeleteApi',
    status: false
  },
  '117': {
    apiName: 'userUpdateApi',
    status: false
  },
  '125': {
    apiName: 'userRoleApi',
    status: false
  },
  '114': {
    apiName: 'permissionIndexApi',
    status: false
  },
  '118': {
    apiName: 'permissionUpdateApi',
    status: false
  },
  '95': {
    apiName: 'sourceDataApi',
    status: false
  },
  '96': {
    apiName: 'onlineApi',
    status: false
  },
  '98': {
    apiName: 'dayOverviewApi',
    status: false
  },
  '97': {
    apiName: 'costOverviewApi',
    status: false
  },
  '105': {
    apiName: 'deviceRetentionApi',
    status: false
  },
  '106': {
    apiName: 'userRetentionApi',
    status: false
  },
  '119': {
    apiName: 'costOverviewApi',
    url: '/v1/ga-overviews/predictions',
    status: false
  },
  '121': {
    apiName: 'rolePermissionApi',
    status: false
  },
  '122': {
    apiName: 'roleCreateApi',
    status: false
  },
  '123': {
    apiName: 'roleUpdateApi',
    status: false
  },
  '124': {
    apiName: 'roleDeleteApi',
    status: false
  },
  '120': {
    apiName: 'roleIndexApi',
    status: false
  },
  '127': {
    apiName: 'channelCreateApi',
    status: false
  },
  '126': {
    apiName: 'channelListApi',
    status: false
  },
  '-120': {
    apiName: 'channelsApi',
    url: '/v1/ga-overviews/channels',
    status: true
  }
}
// import page from './modules/page'
import page from './modules/page'
export const dmRouterMap = {
  '11': {
    component: Layout,
    path: '/11',
    routers: {
      '12': page
    }

  },
  '37': {
    path: '/110',
    component: Layout,
    routers: {
      '126': {
        component: () => import('../views/channel/index')
      }
    }
  }

}
export const asyncRouterMap = [
  { path: '*', redirect: '/404', hidden: true }
]
