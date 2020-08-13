import request from '@/utils/request'
import {
  post
} from '@/utils/request'
export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
  // return post({
  //   url: '/table/list',
  //   params
  // })
}
