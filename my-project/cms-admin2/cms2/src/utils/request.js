import axios from 'axios'
import { Message,MessageBox } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

export const BASE_URL = '/manage';
const service = axios.create({
  baseURL: BASE_URL, // api 的 base_url
  timeout: 10000 // request timeout
});

service.interceptors.request.use(
  config => {
    // Do something before request is sent
    console.debug('request config:', config)
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      // config.headers['X-Token'] = getToken()
    }
    config['headers']['Content-Type'] = 'multipart/form-data'
    return config
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error)
  }
);

// response interceptor
service.interceptors.response.use(
  // response => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    console.debug('service.interceptors.response.use', response)
    store.dispatch('setDate', response.headers.date)
    const res = response.data;
    if (res.code !== 1) {
      Message({
        message: res.msg || 'error occur',
        type: 'error',
        duration: 5 * 1000
      });
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 30102 || res.code === 50012 || res.code === 50014) {
        // 请自行在引入 MessageBox
        // import { Message, MessageBox } from 'element-ui'
        /*MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('LogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        })*/
        location.href='/login'
      }
      return Promise.reject('error')
    } else {
      return response.data.data
    }
  },
  error => {
    console.log('err' + error); // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error)
  }
);
export default service
export function formData(params) {
  var bodyFormData = new FormData();
  for (const ikey in params) {
    if (params[ikey] !== undefined) {
      bodyFormData.set(ikey, params[ikey])
    }
  }
  return bodyFormData
}
