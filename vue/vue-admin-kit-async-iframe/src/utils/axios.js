import Vue from 'vue'
import axios from 'axios'
let _axios = {}

_axios.get = function (url, data) {
    return new Promise((resolve, reject) => {
        axios.get(url, data).then(res => {
            resolve(res.data)
        }, err => {
            reject(err)
        })
    })
}

_axios.post = function (url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(res => {
            resolve(res.data)
        }, err => {
            reject(err)
        })
    })
}
Vue.prototype.$axios = _axios;
