import fetch from './api'
import qs from 'qs'

export function login(params) {
  return fetch({
    url: '/manage/user/login',
    method: 'post',
    signValidate: true,
    sessionKeyValidate: false,
    data: params
  })
}

export function logout(params) {
  return fetch({
    url:'/manage/user/logout',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function getAdminInfo(params) {
  return fetch({
    url:'/manage/user/get',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 验证旧密码
 * @param params
 */
export function checkPwd(params) {
  return fetch({
    url:'/manage/personal/check_pwd',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 旧密码
 * @param params
 */
export function pwdUpdate(params) {
  return fetch({
    url:'/manage/personal/update',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 登录鉴权
 * @param params
 */
export function getToken(params) {
  return fetch({
    url:'/api/front/user/getStatus',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function getPerms(params) {
  return fetch({
    url:'/api/member/user/getPerms',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 判断用户是否存在
 * @param params
 */
export function getUser(params) {
  return fetch({
    url:'/api/admin/user/comparison_username',
    method:'post',
    data:params
  })
}

/**
 * 首页index数据接口
 */
export function getIndex(params) {
  return fetch({
    url:'/api/admin/index',
    method:'post',
    data:params
  })
}

export function getChart(params) {
  return fetch({
    url:'/api/admin/income/indexStatistic',
    method:'post',
    data:params
  })
}

/**
 * 单点登录验证
 * @param params
 */
export function ssoLogin(params) {
  return fetch({
    url: '/sso/login.jspx',
    method: 'post',
    data: params
  })
}
