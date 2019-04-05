import request,{formData} from '../utils/request'
export function pageIndexApi (params) {
  return request.post('page/index', formData(params))
}
export function pageCreateApi (params) {
  return request.post('page/create', formData(params))
}
export function pageUpdateApi (params) {
  return request.post('page/update', formData(params))
}
export function pageDeleteApi (id) {
  return request.get('page/delete/' + id)
}
export function pageDetailApi (id) {
  return request.get('page/get/' + id)
}
export function pageUIApi (id) {
  return request.get('page/assembly/' + id)
}
export function subassemblyListApi () {
  return request.get('subassembly/list')
}
export function assemblyCreateApi (params) {
  return request.post('assembly/create', formData(params))
}
export function assemblyDeleteApi (params) {
  return request.post('assembly/delete/' + params.ids, formData(params))
}
export function assemblyContentDeleteApi (params) {
  return request.post('assembly/content/delete/' + params.ids, formData(params))
}
export function imageUpload (params) {
  return request.post('api/image/o_upload', params)
}
export function pageListApi (params) {
  return request.post('api/page/list', formData(params))
}
export function pageGetApi (params) {
  return request.get('api/page/get', {params})
}
