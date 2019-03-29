import request,{formData} from '../utils/request'
import { genPromise } from '../router'

export function channelListApi(params) {
  return genPromise((url) => request.get(url, { params }), channelListApi)
}
channelListApi.getPerm = '126';

export function channelCreateApi(params) {
  return genPromise((url) => request.post(url, formData(params)), channelCreateApi)
}
channelCreateApi.getPerm = '127';
