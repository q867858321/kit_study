import request from '../utils/request'

export function logout() {
  console.debug('logout');
  return request({
    url: '/user/revoke',
    method: 'get'
  })
}

export function getPermsApi() {
  console.debug('getPermsApi');
  return request({
    url: '/user/getPerms',
    method: 'get'
  })
}
