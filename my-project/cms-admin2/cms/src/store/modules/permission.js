import { asyncRouterMap, constantRouterMap, dmRouterMap, dmButtonMap} from '../../router'
import { getPermsApi } from '../../api/login'
/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(routes, roles) {
  const res = [];

  routes.forEach(route => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, roles)
      }
      res.push(tmp)
    }
  });

  return res
}
function setButton(item) {
  const button = dmButtonMap[item.id];
  if (button) {
    button.status = true
    button.url = item.url
  }
}
function getButton(perms,thrid) {
  let arr=[];
  perms.forEach(item => {
    setButton(item);
    if(thrid[item.id]){
      arr.push({
        name: item.name,
        meta: { title: item.name, icon: item.icon }

      })
    }
  })
}

function getSubPath(perms, newPath, path, maps) {
  const hidden = maps.hidden;
  perms.forEach(item => {
    const dmRouterMapByItemId = maps[item.id];
    if (dmRouterMapByItemId) {
      const tmpArr = [];
      const tmpObj = {
        name: item.name,
        meta: { title: item.name, icon: item.icon }
      };
      tmpObj['path'] = path + '/' + item.id;
      tmpObj.component = dmRouterMapByItemId['component'];
      hidden ? tmpObj['hidden'] = true : '';
      if (dmRouterMapByItemId['routers']) {
        tmpObj.children = getSubPath(item.children, tmpArr, tmpObj.path, dmRouterMapByItemId['routers'])
        tmpObj.redirect = tmpObj.children[0].path
      }
      let thrid = dmRouterMapByItemId.thrid;
      if(item.children){
        item.children.forEach(perms2=>{
          setButton(perms2);
          let perms2Id = thrid[perms2.id];
          if(perms2Id){
            let perms2IdStart={
                name: perms2.name,
                path:tmpObj['path']+'/'+perms2.id,
                component:perms2Id.component,
                hidden:true,
                meta: { title: perms2.name, icon: perms2.icon },
            };
            newPath = [
              perms2IdStart,
              ...perms2Id.append.map(item=>{item.path=perms2IdStart.path+'/'+item.path;return item}),
              ...newPath,
            ]
          }
        })
      }

      setButton(item);
      newPath.push(tmpObj)
    }
  });
  return newPath
}
function getPath(perms, newPath, path) {
  perms.forEach(item => {
    const dmRouterMapByItemId = dmRouterMap[item.id];
    if (dmRouterMapByItemId) {
      const tmpArr = [];
      const tmpObj = {
        name: item.name,
        meta: { title: item.name, icon: item.icon }
      };
      try {
        tmpObj.path = dmRouterMapByItemId['path'];
        tmpObj.children = getSubPath(item.children, tmpArr, tmpObj.path, dmRouterMapByItemId['routers'])
        tmpObj.redirect = tmpObj.children && tmpObj.children[0] && tmpObj.children[0]['path']
        tmpObj.component = dmRouterMapByItemId['component'];
        if (tmpObj.children && tmpObj.children.length) {
          newPath.push(tmpObj)
        }
      } catch (e) {}
    }
  });
  return newPath
}
const permission = {
  state: {
    dmButtonMap: [],
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS_ADD: (state, routers) => {
      state.addRouters = routers.concat(state.addRouters)
      state.routers = routers.concat(state.routers)
    },
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise((resolve, reject) => {
        getPermsApi().then(response => {
          const perms = response.perms || [];
          let accessedRouters;
          accessedRouters = asyncRouterMap;
          commit('SET_ROUTERS', accessedRouters);
          let addarrs = getPath(perms, []);
          commit('SET_ROUTERS_ADD', addarrs);
          resolve()
        }).catch(error => {
          console.log(error);
          commit('SET_ROUTERS', asyncRouterMap);
          resolve()
        })
      })
    }
  }
};

export default permission
