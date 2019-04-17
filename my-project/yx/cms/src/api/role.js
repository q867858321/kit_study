import request,{formData} from '../utils/request'
import { genPromise } from '../router'

export function rolePermissionApi (params) {
  return genPromise((url) => request.get(url, { params }), rolePermissionApi)
}
rolePermissionApi.getPerm = '121'

export function roleUpdateApi (params) {
  return genPromise((url) => request.post(url, formData(params)), roleUpdateApi)
}
roleUpdateApi.getPerm = '123'

export function roleCreateApi (params) {
  return genPromise((url) => request.post(url, formData(params) ), roleCreateApi)
}
roleCreateApi.getPerm = '122'

export function roleDeleteApi (params) {
  return genPromise((url) => request.get(url, { params }), roleDeleteApi)
}
roleDeleteApi.getPerm = '124'

export function roleIndexApi (params) {
  return genPromise((url) => request.get(url, { params }), roleIndexApi)
}
roleIndexApi.getPerm = '120'
