import request from '@/utils/request'
import {
  post
} from '@/utils/request'
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
  // return post(
  //   '/user/login',
  //   data
  // )

}

//根据token 获取用户角色
export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: {
      token
    }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
