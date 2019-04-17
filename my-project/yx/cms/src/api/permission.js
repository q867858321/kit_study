import request from '../utils/request'
import { genPromise } from '../router'

export function permissionIndexApi (params) {
  return genPromise((url) => request.get(url, { params }), permissionIndexApi)
}
permissionIndexApi.getPerm = '114'

export function permissionUpdateApi (params) {
  return genPromise((url) => request.get(url, { params }), permissionUpdateApi)
}
permissionUpdateApi.getPerm = '118'
