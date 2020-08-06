import request from '@/utils/request'
import {
  post,
  formData
} from '@/utils/request'
export function login(data) {
  console.log("request", request)
  // return request.post({
  //   url: '/user/login',
  //   data
  // })
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
