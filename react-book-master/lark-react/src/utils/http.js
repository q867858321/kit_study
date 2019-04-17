import {SHA1} from "./SHA1";

const AppId = "A6053788184630";
const AppKey = "8B3F5860-2646-2C47-DC50-39106919B260";
var now = Date.now();
const secureAppKey = SHA1(AppId+"UZ"+AppKey+"UZ"+now)+"."+now;

// const headers = new Headers({
//   "X-APICloud-AppId": AppId,
//   "X-APICloud-AppKey": secureAppKey,
//   "Accept": "application/json",
//   "Content-Type": "application/json"
// });
const headers = {
  "X-APICloud-AppId": AppId,
  "X-APICloud-AppKey": secureAppKey,
  "Accept": "application/json",
  "Content-Type": "application/json"
};
let baseUrl='';
export default async function ajax(url='',type='POST',data={}, method='fetch') => {
    type = type.toUpperCase();
    url =baseUrl+url;
  
    if(type === 'GET') { // 拼接参数
      let dataStr = '';
      Object.keys(data).forEach((key, index, array) => {
        dataStr = dataStr + key + '=' + data[key] + '&';
      })
  
      if(dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
      }
    }
  
    if(window.fetch && method === 'fetch') {
      let requestConfig = {
              method: type,
              headers:headers,
            //   headers: {
            //       'Accept': 'application/json', // 用户代理可处理的媒体类型
            //       'Content-Type': 'application/json' // 报文主体对象类型
            //   },
              mode: "cors", // 跨域
              cache: "force-cache"
      }
  
      if(type === 'POST') {
        requestConfig.body=JSON.stringify(data);
      }
      //如果需要带cookie
      //在登录时候返回access_token参数
      //localStorage.setItem('access_token', loginInfo.token);
      let accessToken = localStorage.getItem('access_token');
      if (accessToken !== null && accessToken !== '' && accessToken !== undefined) {
        requestConfig.headers['Cookie'] = `JSESSIONID=${accessToken}`;
      }
      try {
        const response = await fetch(url, requestConfig);
        const responseJson = await response.json();
        return responseJson;
      } catch (error) {
        throw new Error(error)
      }
    } else {
      // 如果浏览器不支持 fetch
      return new Promise((resolve, reject) => {
              let requestObj = new XMLHttpRequest();
  
              let sendData = '';
              if (type === 'POST') {
                  sendData = JSON.stringify(data);
              }
  
              requestObj.open(type, url, true);
              requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
              requestObj.send(sendData);
  
              requestObj.onreadystatechange = () => {
                  if (requestObj.readyState === 4) {
                      if (requestObj.status === 200) {
                          let obj = requestObj.response
                          if (typeof obj !== 'object') {
                              obj = JSON.parse(obj);
                          }
                          resolve(obj)
                      } else {
                          reject(requestObj)
                      }
                  }
              }
          })
    }
}