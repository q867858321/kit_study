import request,{formData} from '../utils/request'
import { genPromise } from '../router'

export function userIndexApi(params) {
  return genPromise((url) => request.get(url, { params }), userIndexApi)
}
userIndexApi.getPerm = '113';
export function userCreateApi(params) {
  return genPromise((url) => request.post(url, formData(params)), userCreateApi)
}
userCreateApi.getPerm = '115';

export function userPermissionApi(params) {
  return genPromise((url) => request.get(url+'/'+params), userPermissionApi)
}
userPermissionApi.getPerm = '125';

export function userDeleteApi(params) {
  return genPromise((url) => request.get(url, { params }), userDeleteApi)
}
userDeleteApi.getPerm = '116';

export function userUpdateApi(params) {
  return genPromise((url) => request.post(url, formData(params)), userUpdateApi)
}
userUpdateApi.getPerm = '117';

export function userPermissionUpdateApi(id,params) {
  return request.post('/v1/ga-team/user/permission/update/'+id,formData(params))
}

export function uploadUserImgApi(params) {
  return request.post('/v1/ga-team/user/o_upload',params,{
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export function userPermissionTreeApi(params) {
  return request.get('/user/permission/tree')
}
