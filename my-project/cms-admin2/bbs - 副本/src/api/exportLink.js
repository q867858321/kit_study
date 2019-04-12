import qs from 'qs'
import store from '../store/index'

/**
 * 数据中心导出
 * @param params
 * @returns {string}
 */
export function forumStatisticExport(params) {
  let link='/manage/data/forumstatistic_export';
  params.appId=store.state.appId;
  params.sessionKey=localStorage.getItem('sessionKey');
  let url=link+'?'+qs.stringify(params);
  return url
}
