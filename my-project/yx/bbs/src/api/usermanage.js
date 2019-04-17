/**
 * 用户api接口
 */
import fetch from './api'
import qs from 'qs'

/**
 * 会员组列表获取
 * @param params
 */
export function getGroupList(params) {
  return fetch({
    url:'/manage/group/list',
    method:'post',
    signValidate:false,
    data:params
  })
}

/**
 * 会员组列表删除
 * @param params
 */
export function deleteGroupList(params) {
  return fetch({
    url:'/manage/group/delete',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 上传接口
 * @param params
 */
export function upload(params) {
  return fetch({
    url:'/manage/upload/o_upload',
    method:'post',
    signValidate:false,
    data:params
  })
}

/**
 * 会员组字段获取接口
 * @param params
 */
export function getGroup(params) {
  return fetch({
    url:'/manage/group/get',
    method:'post',
    signValidate:false,
    data:params
  })
}

/**
 * 会员组字段修改接口
 * @param params
 */
export function updateGroup(params) {
  return fetch({
    url:'/manage/group/update',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 会员组添加接口
 * @param params
 */
export function addGroup(params) {
  return fetch({
    url:'/manage/group/save',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 用户列表接口
 * @param params
 */
export function getUserList(params) {
  return fetch({
    url:'/manage/user/list',
    method:'post',
    signValidate:false,
    data:params
  })
}

/**
 * 官网团队用户列表接口
 * @param params
 */
export function getOfficialList(params) {
  return fetch({
    url:'/manage/user/official_list',
    method:'post',
    signValidate:false,
    data:params
  })
}

/**
 * 获取用户或管理员 字段接口
 * @param params
 */
export function getUserInfo(params) {
  return fetch({
    url:'/manage/user/get',
    method:'post',
    signValidate:false,
    data:params
  })
}

/**
 * 用户修改
 * @param params
 */
export function updateUserInfo(params) {
  return fetch({
    url:'/manage/user/update',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 用户添加
 * @param params
 */
export function addUserInfo(params) {
  return fetch({
    url:'/manage/user/save',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 用户或管理员删除
 * @param params
 */
export function deleteUserInfo(params) {
  return fetch({
    url:'/manage/user/delete',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 管理员列表接口
 * @param params
 */
export function getAdminList(params) {
  return fetch({
    url:'/manage/admin/list',
    method:'post',
    signValidate:false,
    data:params
  })
}

/**
 * 管理员修改
 * @param params
 */
export function updateAdminInfo(params) {
  return fetch({
    url:'/manage/admin/update',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 管理员添加
 * @param params
 */
export function addAdminInfo(params) {
  return fetch({
    url:'/manage/admin/save',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 角色列表
 * @param params
 */
export function getRoleList(params) {
  return fetch({
    url:'/manage/role/list',
    method:'post',
    signValidate:false,
    data:params
  })
}

/**
 * 删除角色
 * @param params
 */
export function deleteRoleInfo(params) {
  return fetch({
    url:'/manage/role/delete',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function getRoleInfo(params) {
  return fetch({
    url:'/manage/role/get',
    method:'post',
    signValidate:false,
    data:params
  })
}

export function updateRoleInfo(params) {
  return fetch({
    url:'/manage/role/update',
    method:'post',
    signValidate:true,
    data:params
  })
}

export function addRoleInfo(params) {
  return fetch({
    url:'/manage/role/save',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 消息系统列表
 * @param params
 */
export function getSystemMessageList(params) {
  return fetch({
    url:'/manage/message/sys_list',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 删除系统消息列表
 * @param params
 */
export function deleteSystemMessageInfo(params) {
  return fetch({
    url:'/manage/message/delete',
    method:'post',
    signValidate:true,
    data:params
  })
}

/**
 * 发送系统消息列表
 * @param params
 */
export function addSystemMessageInfo(params) {
  return fetch({
    url:'/manage/message/sendSys',
    method:'post',
    signValidate:true,
    data:params
  })
}
