import request, {formData} from '../utils/request'
export function gameListApi (params) {
  return request.post('api/game/list', formData(params))
}
export function gameGetApi (params) {
  return request.get('api/game/get', {params})
}
