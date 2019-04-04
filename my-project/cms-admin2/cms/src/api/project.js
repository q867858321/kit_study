import request,{formData} from '../utils/request'
import { genPromise } from '../router'
export function projectCountryListApi () {
  return request.get('project/country/list')
}
export function projectChannelListApi () {
  return request.get('project/channel/list')
}
export function projectListApi (params) {
  return genPromise((url) => request.post(url, formData(params)), projectListApi)
}
projectListApi.getPerm = '12'

export function projectCreateApi (params) {
  return genPromise((url) => request.post(url, formData(params)), projectCreateApi)
}
projectCreateApi.getPerm = '34'

export function projectUpdateApi (params) {
  return genPromise((url) => request.post(url, formData(params)), projectUpdateApi)
}
projectUpdateApi.getPerm = '35'

export function projectDeleteApi (params) {
  return genPromise((url) => request.post(url, formData(params)), projectDeleteApi)
}
projectDeleteApi.getPerm = '36'

export function projectPublishApi (params) {
  return genPromise((url) => request.post(url, formData(params)), projectPublishApi)
}
projectPublishApi.getPerm = '77'
export function projectPageIndexApi (params) {
  return genPromise((url) => request.post(url, formData(params)), projectPageIndexApi)
}
projectPageIndexApi.getPerm = '79'

export function projectPreviewApi (params) {
  return genPromise((url) => request.post(url, formData(params)), projectPreviewApi)
}
projectPreviewApi.getPerm = '78'

export function projectAuditApi (params) {
  return genPromise((url) => request.post(url, formData(params)), projectAuditApi)
}
projectAuditApi.getPerm = '78'
