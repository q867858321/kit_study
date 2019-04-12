import fetch from './api'
import qs from 'qs'

/**
 * 全局设置信息
 * @param params
 */
export function getSystemGetInfo(params) {
  return fetch({
    url:'/manage/site_config/system_get',
    method:'post',
    data:params
  })
}

/**
 * 全局设置修改
 * @param params
 */
export function updateSystemGetInfo(params) {
  return fetch({
    url:'/manage/site_config/system_update',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 站点List
 * @param params
 */
export function getSiteList(params) {
  return fetch({
    url: '/manage/site_config/list',
    method: 'post',
    data: params
  })
}

/**
 * 删除站点
 * @param params
 */
export function deleteSiteInfo(params) {
  return fetch({
    url: '/manage/site_config/delete',
    method: 'post',
    signValidate: true,
    data: params
  })
}

/**
 * 站点设置信息
 * @param params
 */
export function getSiteInfo(params) {
  return fetch({
    url:'/manage/site_config/get',
    method:'post',
    data:params
  })
}

/**
 * 站点设置信息修改
 * @param params
 */
export function updateSiteInfo(params) {
  return fetch({
    url:'/manage/site_config/update',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 论坛设置信息
 * @param params
 */
export function getBbsInfo(params) {
  return fetch({
    url:'/manage/bbs_config/get',
    method:'post',
    data:params
  })
}

/**
 * 论坛设置信息修改
 * @param params
 */
export function updateBbsInfo(params) {
  return fetch({
    url:'/manage/bbs_config/update',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 登录设置信息
 * @param params
 */
export function getLoginInfo(params) {
  return fetch({
    url:'/manage/bbs_config/login_get',
    method:'post',
    data:params
  })
}

/**
 * 登录设置信息修改
 * @param params
 */
export function updateLoginInfo(params) {
  return fetch({
    url:'/manage/bbs_config/login_update',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 积分设置信息
 * @param params
 */
export function getPointInfo(params) {
  return fetch({
    url:'/manage/bbs_config/creditExchange_get',
    method:'post',
    data:params
  })
}

/**
 * 积分设置信息修改
 * @param params
 */
export function updatePointInfo(params) {
  return fetch({
    url:'/manage/bbs_config/creditExchange_update',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 消息设置信息
 * @param params
 */
export function getMessageInfo(params) {
  return fetch({
    url:'/manage/bbs_config/message_get',
    method:'post',
    data:params
  })
}

/**
 * 消息设置信息修改
 * @param params
 */
export function updateMessageInfo(params) {
  return fetch({
    url:'/manage/bbs_config/message_update',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 第三方设置信息
 * @param params
 */
export function getApiInfo(params) {
  return fetch({
    url:'/manage/bbs_config/api_get',
    method:'post',
    data:params
  })
}

/**
 * 第三方设置信息
 * @param params
 */
export function updateApiInfo(params) {
  return fetch({
    url:'/manage/bbs_config/api_update',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 单点设置信息修改
 * @param params
 */
export function getSsoInfo(params) {
  return fetch({
    url:'/manage/bbs_config/sso_get',
    method:'post',
    data:params
  })
}

/**
 * 模型列表信息
 * @param params
 */
export function getModelList(params) {
  return fetch({
    url:'/manage/bbs_config/item_list',
    method:'post',
    data:params
  })
}

export function deleteModelInfo(params) {
  return fetch({
    url:'/manage/bbs_config/item_delete',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function modelBatchUpdate(params) {
  return fetch({
    url:'/manage/bbs_config/item_priority',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function getModelInfo(params) {
  return fetch({
    url:'/manage/bbs_config/item_get',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function updateModelInfo(params) {
  return fetch({
    url:'/manage/bbs_config/item_update',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function addModelInfo(params) {
  return fetch({
    url:'/manage/bbs_config/item_save',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 接口
 * @param params
 */
export function getWebServiceList(params) {
  return fetch({
    url:'/manage/webservice/list',
    method:'post',
    data:params
  })
}

export function deleteWebServiceInfo(params) {
  return fetch({
    url:'/manage/webservice/delete',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function getWebServiceInfo(params) {
  return fetch({
    url:'/manage/webservice/get',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function updateWebServiceInfo(params) {
  return fetch({
    url:'/manage/webservice/update',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function addWebServiceInfo(params) {
  return fetch({
    url:'/manage/webservice/save',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 接口用户
 * @param params
 */
export function getWebServiceAuthList(params) {
  return fetch({
    url:'/manage/webserviceAuth/list',
    method:'post',
    data:params
  })
}

export function deleteWebServiceAuthInfo(params) {
  return fetch({
    url:'/manage/webserviceAuth/delete',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function getWebServiceAuthInfo(params) {
  return fetch({
    url:'/manage/webserviceAuth/get',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function updateWebServiceAuthInfo(params) {
  return fetch({
    url:'/manage/webserviceAuth/update',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function addWebServiceAuthInfo(params) {
  return fetch({
    url:'/manage/webserviceAuth/save',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 限制id
 * @param params
 */
export function getBbslimitList(params) {
  return fetch({
    url:'/manage/bbslimit/list',
    method:'post',
    data:params
  })
}

export function deleteBbslimitInfo(params) {
  return fetch({
    url:'/manage/bbslimit/delete',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function getBbslimitInfo(params) {
  return fetch({
    url:'/manage/bbslimit/get',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function updateBbslimitInfo(params) {
  return fetch({
    url:'/manage/bbslimit/update',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function addBbslimitInfo(params) {
  return fetch({
    url:'/manage/bbslimit/save',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * api接口
 * @param params
 */
export function getApiInfoList(params) {
  return fetch({
    url:'/manage/apiInfo/list',
    method:'post',
    data:params
  })
}

export function deleteApiInfoInfo(params) {
  return fetch({
    url:'/manage/apiInfo/delete',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function getApiInfoInfo(params) {
  return fetch({
    url:'/manage/apiInfo/get',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function updateApiInfoInfo(params) {
  return fetch({
    url:'/manage/apiInfo/update',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function addApiInfoInfo(params) {
  return fetch({
    url:'/manage/apiInfo/save',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function getApiAccountList(params) {
  return fetch({
    url:'/manage/apiAccount/list',
    method:'post',
    data:params
  })
}

export function deleteApiAccountInfo(params) {
  return fetch({
    url:'/manage/apiAccount/delete',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function getApiAccountInfo(params) {
  return fetch({
    url:'/manage/apiAccount/get',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function updateApiAccountInfo(params) {
  return fetch({
    url:'/manage/apiAccount/update',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function addApiAccountInfo(params) {
  return fetch({
    url:'/manage/apiAccount/save',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * api接口记录
 * @param params
 */
export function getApiRecordList(params) {
  return fetch({
    url:'/manage/apiRecord/list',
    method:'post',
    data:params
  })
}

export function deleteApiRecordInfo(params) {
  return fetch({
    url:'/manage/apiRecord/delete',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 独立密码验证
 * @param params
 */
export function validateApiPwd(params) {
  return fetch({
    url:'/manage/config_api_pwd/validate',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function updateApiPwd(params) {
  return fetch({
    url:'/manage/config_api_pwd/update',
    method:'post',
    signValidate:true,
    data:params
  })
}
