import request from '../utils/request'
import {param} from "../utils/index";
import {genPromise,dmButtonMap} from '../router'

export function onlineApi(params) {
  return genPromise((url) => request.get(url, { params }), onlineApi)
}
onlineApi.getPerm = '96';
export function dayOverviewApi(params) {
  return genPromise((url) => request.get(url, { params }), dayOverviewApi)
}
dayOverviewApi.getPerm = '98';
export function costOverviewApi(params) {
  return genPromise((url) => request.get(url, { params }), costOverviewApi)
}
costOverviewApi.getPerm = '97';

export function predictionsApi(params) {
  return genPromise((url) => request.get(url, { params }), predictionsApi)
}
predictionsApi.getPerm = '119';

export function channelsApi(params) {
  return genPromise((url) => request.get(url, { params }), channelsApi)
}
channelsApi.getPerm = '-120';

export function activeDataApi(params) {
  return genPromise((url) => request.get(url, { params }), activeDataApi)
}
activeDataApi.getPerm = '101';

export function onlineAnalysisApi(params) {
  return genPromise((url) => request.get(url, { params }), onlineAnalysisApi)
}
onlineAnalysisApi.getPerm = '102';

export function playerBehaviorApi(params) {
  return genPromise((url) => request.get(url, { params }), playerBehaviorApi)
}
playerBehaviorApi.getPerm = '103';

export function sourceDataApi(params) {
  return genPromise((url) => request.get(url, { params }), sourceDataApi)
}
sourceDataApi.getPerm = '95';


export function deviceRetentionApi(params) {
  return genPromise((url) => request.get(url, { params }), deviceRetentionApi)
}
deviceRetentionApi.getPerm = '105';

export function userRetentionApi(params) {
  return genPromise((url) => request.get(url, { params }), userRetentionApi)
}
userRetentionApi.getPerm = '106';

export function incomeDataApi(params) {
  return genPromise((url) => request.get(url, { params }), incomeDataApi)
}
incomeDataApi.getPerm = '108';

export function userValueApi(params) {
  return genPromise((url) => request.get(url, { params }), userValueApi)
}
userValueApi.getPerm = '109';

export function exportTable(apiFn,params) {
  let button = dmButtonMap[apiFn.getPerm];
  console.log(button);
  if(button){
    let url = request.defaults.baseURL + button.url + '-export';
    url += '?' + param(params);
    location.href= url;
  }
}
