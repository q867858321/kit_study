/**
 *论坛api接口
 */
import fetch from './api'
import qs from 'qs'

/**
 * 分区版块列表
 * @param params
 */
export function listGroupByCategory(params) {
  return fetch({
    url:'/manage/forum/listGroupByCategory',
    method:'post',
    data:params
  })
}

/**
 * 分区列表信息
 * @param params
 */
export function getCategoryList(params) {
  return fetch({
    url:'/manage/category/list',
    method:'post',
    data:params
  })
}

/**
 * 热帖列表信息
 * @param params
 */
export function getHotTopicList(params) {
  return fetch({
    url:'/manage/topic/hot/list',
    method:'post',
    data:params
  })
}

/**
 * 热帖排序接口
 * @param params
 */
export function hotTopicListUpdate(params) {
  return fetch({
    url:'/manage/topic/hot/o_priority_update',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 删除热帖信息
 * @param params
 */
export function deleteHotTopic(params) {
  return fetch({
    url:'/manage/topic/hot/delete',
    method:'post',
    data:params
  })
}

/**
 * 推荐贴列表信息
 * @param params
 */
export function getRecommendTopicList(params) {
  return fetch({
    url:'/manage/topic/recommend/list',
    method:'post',
    data:params
  })
}

/**
 * 删除推荐贴信息
 * @param params
 */
export function deleteRecommendTopic(params) {
  return fetch({
    url:'/manage/topic/recommend/delete',
    method:'post',
    data:params
  })
}

/**
 * 推荐帖排序接口
 * @param params
 */
export function recommendTopicListUpdate(params) {
  return fetch({
    url:'/manage/topic/recommend/o_priority_update',
    method:'post',
    signValidate:true,
    data:params
  })
}


/**
 * 版块列表信息
 * @param params
 */
export function getForumList(params) {
  return fetch({
    url:'/manage/forum/list',
    method:'post',
    data:params
  })
}

/**
 * 分区版块修改
 */
export function saveList(params) {
  return fetch({
    url:'/manage/forum/batchupdate',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 删除分区
 * @param params
 */
export function deleteCategory(params) {
  return fetch({
    url:'/manage/category/delete',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 删除版块
 * @param params
 */
export function deleteForum(params) {
  return fetch({
    url:'/manage/forum/delete',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 分区排序接口
 * @param params
 */
export function categoryListUpdate(params) {
  return fetch({
    url:'/manage/category/o_priority_update',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 版块排序接口
 * @param params
 */
export function forumListUpdate(params) {
  return fetch({
    url:'/manage/forum/o_priority_update',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 获取版块所有的字段信息
 * @param params
 */
export function getForum(params) {
  return fetch({
    url:'/manage/forum/get',
    method:'post',
    data:params
  })
}

/**
 * 修改版块字段信息
 * @param params
 */
export function updateForum(params) {
  return fetch({
    url:'/manage/forum/update',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 话题
 * @param params
 */
export function getTopicTypeTree(params) {
  return fetch({
    url:'/manage/topicType/tree',
    method:'post',
    signValidate:false,
    data:params
  })
}

/**
 * 主题分类列表
 * @param params
 */
export function getTopicTypeList(params) {
  return fetch({
    url:'/manage/topicType/list',
    method:'post',
    signValidate:false,
    data:params
  })
}

/**
 * 主题分类信息
 * @param params
 */
export function getTopicTypeInfo(params) {
  return fetch({
    url:'/manage/topicType/get',
    method:'post',
    signValidate:false,
    data:params
  })
}

/**
 * 删除主题分类
 * @param params
 */
export function deleteTopicTypeInfo(params) {
  return fetch({
    url:'/manage/topicType/delete',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 修改主题分类信息
 * @param params
 */
export function updateTopicTypeInfo(params) {
  return fetch({
    url:'/manage/topicType/update',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 添加主题分类信息
 * @param params
 */
export function addTopicTypeInfo(params) {
  return fetch({
    url:'/manage/topicType/save',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 获取敏感词列表
 * @param params
 */
export function getSensitivityList(params) {
  return fetch({
    url:'/manage/sensitivity/list',
    method:'post',
    signValidate:false,
    data:params
  })
}

/**
 * 删除
 * @param params
 */
export function deleteSensitivityInfo(params) {
  return fetch({
    url:'/manage/sensitivity/delete',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 快速添加
 * @param params
 */
export function addFastSensitivity(params) {
  return fetch({
    url:'/manage/sensitivity/save',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 批量修改
 * @param params
 */
export function sensitivityBatchUpdate(params) {
  return fetch({
    url:'/manage/sensitivity/batch_update',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 批量添加
 * @param params
 */
export function sensitivityBatchSave(params) {
  return fetch({
    url:'/manage/sensitivity/batch_save',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 用户举报管理
 * @param params
 */
export function getReportList(params) {
  return fetch({
    url:'/manage/report/list',
    method:'post',
    data:params
  })
}

/**
 * 获取用户举报信息
 * @param params
 */
export function getReportInfo(params) {
  return fetch({
    url:'/manage/report/get',
    method:'post',
    data:params
  })
}

/**
 * 处理用户举报
 * @param params
 */
export function process(params) {
  return fetch({
    url:'/manage/report/process',
    signValidate:true,
    method:'post',
    data:params
  })
}

/**
 * 删除用户举报
 * @param params
 */
export function deleteReportInfo(params) {
  return fetch({
    url:'/manage/report/delete',
    signValidate:true,
    method:'post',
    data:params
  })
}

export function addJob(params) {
  return fetch({
    url: '/manage/job/save',
    signValidate:true,
    method: 'post',
    data: params
  })
}

export function deleteJob(params) {
  return fetch({
    url: '/manage/job/delete',
    signValidate:true,
    method: 'post',
    data: params
  })
}

export function pauseJob(params) {
  return fetch({
    url: '/manage/job/pause',
    signValidate:true,
    method: 'post',
    data: params
  })
}

export function triggerJob(params) {
  return fetch({
    url: '/manage/job/trigger',
    signValidate:true,
    method: 'post',
    data: params
  })
}

export function resumeJob(params) {
  return fetch({
    url: '/manage/job/resume',
    signValidate:true,
    method: 'post',
    data: params
  })
}
export function updateJob(params) {
  return fetch({
    url: '/manage/job/update',
    signValidate:true,
    method: 'post',
    data: params
  })
}

export function getJobList(params) {
  return fetch({
    url:'/manage/job/list',
    method:'post',
    signValidate:false,
    data:params
  })
}

export function getJob(params) {
  return fetch({
    url:'/manage/job/get',
    method:'post',
    signValidate:false,
    data:params
  })
}

/*获取游戏列表*/
export function getGameList(params){
  return fetch({
    url:'/manage/game/list',
    method:'post',
    signValidate:false,
    data:params
  })
}
