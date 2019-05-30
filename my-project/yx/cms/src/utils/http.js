import axios from 'axios';
import QS from 'qs';
import { Message } from 'element-ui'
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function get(url, params) {
    var num = new Date();
    return new Promise((resolve, reject) => {
        axios.get(url, { params: params }).then(res => {
            resolve(res.data);
        }).catch(err => {
            // reject(err.data)        
        })
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params)).then(res => {
            resolve(res.data);
        }).catch(err => {
            // reject(err.data)
        })
    });
}

// http response 拦截器
axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response) {
        Message({
            message: +error.response.status + "," + error.response.statusText || 'error occur',
            type: 'error',
            duration: 3 * 1000
        })
        switch (error.response.status) {
            case 401:
                // store.dispatch('logout');
                console.log("401");
                break;
            case 404:
                // router.push('/Error/Error404');
                break;
            case 500:
                router.push('/Error/Error500');
        }
    }
    return Promise.reject(error);// 返回接口返回的错误信息
});

export default { get, post };