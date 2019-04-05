import { dmButtonMap } from '../../router'
export const hasApi = function (value) {
  if (value && typeof value === 'string' && value.length > 0) {
    const permissionRoles = value
    const hasPermission = dmButtonMap[permissionRoles] && dmButtonMap[permissionRoles].status
    return hasPermission
  } else { return false }
}
export default{
  inserted (el, binding, vnode) {
    const { value } = binding
    if (value && typeof value === 'string' && value.length > 0) {
      if (!hasApi(value)) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`xxx`)
    }
  }
}
