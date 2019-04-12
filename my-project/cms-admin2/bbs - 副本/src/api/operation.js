/**
 * 运营api接口
 */
import fetch from './api'
import qs from 'qs'

/**
 * 数据中心
 * @param params
 */
export function getForumStatisticList(params) {
  return fetch({
    url:'/manage/data/forumstatistic_list',
    method:'post',
    signValidate:false,
    data:params
  })
}
