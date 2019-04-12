import axios from 'axios'
import { Message } from 'element-ui'
import store from '../store/index'
import router from '../router/index'
import qs from 'qs'
import { signParams } from '../utils/sign'

let href = location.href;//截取URL地址区分是否带项目路径
let localHref = href.substring(0, href.indexOf('/jeeadmin'));
let apiUrl = '';
apiUrl = process.env.Base_URL == '' ? localHref : process.env.Base_URL;//判断是否分离部署
const fetch = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  withCredentials: true
});
fetch.interceptors.request.use(config => {//拦截器配置,统一配置参数处理，页面上只需传递业务参数
  let sessionKeyValidate = false; //接口是否需要jsessionkey参数
  let signValidate = false;//接口是否需要签名
  if (config.hasOwnProperty('sessionKeyValidate')) {
    sessionKeyValidate = config.sessionKeyValidate;
  } else {
    sessionKeyValidate = true;
  }
  if (config.hasOwnProperty('signValidate')) {
    signValidate = config.signValidate;
  } else {
    signValidate = false;
  }
  let appId = store.state.appId;//appid
  let sessionKey = localStorage.getItem('sessionKey');//sessionkey
  let appKey = store.state.appKey;//appkey
  let params = {};
  for (let key in config.data) {
    params[key] = config.data[key];//添加进参数列表
  }
  params.appId = appId;
  if (sessionKeyValidate) {
    params.sessionKey = sessionKey;
  }
  if (signValidate) {
    params = signParams(params, appKey);
  }
  config.data = qs.stringify(params);
  return config;
}, error => {
  Promise.reject(error);
});
fetch.interceptors.response.use(response => {
  let res = response.data;
  switch (res.code) {
    case 1:
      break;
    case '302':
      Message({
        message: res.message,
        type: 'error'
      });
      router.push('/login');
      break;
    case '209':
      Message({
        message: '您没有足够的权限!',
        type: 'error',
        duration: 1000
      });
      break;
    case '202':
      Message({
        message: '参数错误',
        type: 'error',
        duration: 500
      });
      break;
    case '203':
      Message({
        message: '您没有足够的权限!',
        type: 'error',
        duration: 1000
      });
      break;
    case '205':
      Message({
        message: '删除失败',
        type: 'error',
        duration: 500
      });
      break;
    case '201':
      //console.log(res);
      Message({
        message: '缺少必填参数',
        type: 'error',
        duration: 500
      });
      break;
    case '204':
      //console.log(res);
      Message({
        message: '缺少必填参数',
        type: 'error',
        duration: 500
      });
      break;
    case '3':
      Message({
        message: '登录过期，请重新登录',
        type: 'error',
        duration: 500
      });
      localStorage.clear();
      router.push('/login');
      break;
    default:
      break;
  }
  return response.data;
}, error => {
  return Promise.reject(error)
});
export default fetch;
