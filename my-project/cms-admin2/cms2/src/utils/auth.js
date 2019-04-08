/**
 * @Description:
 * @author marin
 * @date 2/20/19
 */
import Cookies from 'js-cookie'
let topHost = '.' + document.domain.split(".").slice(-2).join(".");
const TokenKey = 'userinfo';
export function getToken() {
  setToken('{"username":"yingxian","avatar":"","realName":"英仙","sex":1,"phone":"15478968789","userId":5,"roleName":"英仙运营,"}');
  return Cookies.get(TokenKey,{domain:topHost})
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  Cookies.remove("JSESSIONID",{domain:topHost})
  return Cookies.remove(TokenKey,{domain:topHost})
}
