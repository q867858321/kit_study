import { onlineApi, dayOverviewApi, costOverviewApi, predictionsApi, channelsApi } from '@/api/active'
import { parseTime } from '../../utils/index'
function genCharData(lineDayDate, opFn) {
  const disc = lineDayDate.index
  const data = lineDayDate.data || []
  const datalength = data.length
  const seriesData = []
  if (data[0]) {
    data[0].forEach(item => {
      seriesData.push(new Array(datalength))
    })
  }
  data.forEach((item, index) => {
    item.forEach((item2, index2) => {
      opFn(seriesData, index2, index, item2)
    })
  })
  return { seriesData, disc }
}
const predictions = {
  namespaced: true,
  getters: {
    onlineData: state => {
      if (state.onlineData && state.onlineDataNow) {
        const allM = { '00:10': 0, '00:20': 0, '00:30': 0, '00:40': 0, '00:50': 0, '01:00': 0, '01:10': 0, '01:20': 0, '01:30': 0, '01:40': 0, '01:50': 0, '02:00': 0, '02:10': 0, '02:20': 0, '02:30': 0, '02:40': 0, '02:50': 0, '03:00': 0, '03:10': 0, '03:20': 0, '03:30': 0, '03:40': 0, '03:50': 0, '04:00': 0, '04:10': 0, '04:20': 0, '04:30': 0, '04:40': 0, '04:50': 0, '05:00': 0, '05:10': 0, '05:20': 0, '05:30': 0, '05:40': 0, '05:50': 0, '06:00': 0, '06:10': 0, '06:20': 0, '06:30': 0, '06:40': 0, '06:50': 0, '07:00': 0, '07:10': 0, '07:20': 0, '07:30': 0, '07:40': 0, '07:50': 0, '08:00': 0, '08:10': 0, '08:20': 0, '08:30': 0, '08:40': 0, '08:50': 0, '09:00': 0, '09:10': 0, '09:20': 0, '09:30': 0, '09:40': 0, '09:50': 0, '10:00': 0, '10:10': 0, '10:20': 0, '10:30': 0, '10:40': 0, '10:50': 0, '11:00': 0, '11:10': 0, '11:20': 0, '11:30': 0, '11:40': 0, '11:50': 0, '12:00': 0, '12:10': 0, '12:20': 0, '12:30': 0, '12:40': 0, '12:50': 0, '13:00': 0, '13:10': 0, '13:20': 0, '13:30': 0, '13:40': 0, '13:50': 0, '14:00': 0, '14:10': 0, '14:20': 0, '14:30': 0, '14:40': 0, '14:50': 0, '15:00': 0, '15:10': 0, '15:20': 0, '15:30': 0, '15:40': 0, '15:50': 0, '16:00': 0, '16:10': 0, '16:20': 0, '16:30': 0, '16:40': 0, '16:50': 0, '17:00': 0, '17:10': 0, '17:20': 0, '17:30': 0, '17:40': 0, '17:50': 0, '18:00': 0, '18:10': 0, '18:20': 0, '18:30': 0, '18:40': 0, '18:50': 0, '19:00': 0, '19:10': 0, '19:20': 0, '19:30': 0, '19:40': 0, '19:50': 0, '20:00': 0, '20:10': 0, '20:20': 0, '20:30': 0, '20:40': 0, '20:50': 0, '21:00': 0, '21:10': 0, '21:20': 0, '21:30': 0, '21:40': 0, '21:50': 0, '22:00': 0, '22:10': 0, '22:20': 0, '22:30': 0, '22:40': 0, '22:50': 0, '23:00': 0, '23:10': 0, '23:20': 0, '23:30': 0, '23:40': 0, '23:50': 0, '24:00': 0 }
        const allMNow = {}
        Object.assign(allMNow, allM); window.allM = allM
        var data = state.onlineData.data || []
        data.forEach((item) => {
          allM[String.prototype.substr.call(item[0], -5)] = item[1]
        })
        var dataNow = state.onlineDataNow.data || []
        dataNow.forEach((item) => {
          allMNow[String.prototype.substr.call(item[0], -5)] = item[1]
        })
        const seriesData = [[], [], []]
        Object.keys(allM).forEach(item => {
          seriesData[0].push(item)
          seriesData[1].push(allMNow[item])
          seriesData[2].push(allM[item])
        })
        console.log(seriesData)
        return { seriesData, disc: [null, '今日' + state.onlineDataNow['index'][1], '对比日' + state.onlineDataNow['index'][1]] }
      } else {
        return false
      }
    },
    barData: (state, getters) => typeName => {
      const barType = state['barType']['type' + typeName]
      if (barType == 0) {
        const lineDayDate = state['lineDayDate']['hour' + typeName]
        if (lineDayDate) {
          return genCharData(lineDayDate, (seriesData, index2, index, item2) => {
            let tmp = item2
            if (index2 == 0) {
              tmp = tmp.substr(-2)
            }
            seriesData[index2][index] = tmp
          })
        }
      } else {
        let channelsNow = state['channelsNow'], channelsNowData
        let channelsOld = state['channelsOld'], channelsOldData
        if (channelsOld.date == state.dateCompare) {
          for (const ikey in channelsNow) {
            if (ikey.toUpperCase() == typeName.toUpperCase()) {
              channelsOldData = channelsOld[ikey]
              channelsNowData = channelsNow[ikey]
            }
          }
          if (channelsOldData && channelsNowData) {
            let channelDataNow = {}, channelDataOld = {}
            const channelList = state.channelList
            const barNow = new Array(channelList.length)
            const barOld = new Array(channelList.length)
            channelList.forEach(function(item, index) {
              channelDataNow[item] = channelDataOld[item] = 0
            })
            channelsNowData.data.forEach((item, index) => {
              channelDataNow[item[0]] = item[1]
            })
            channelsOldData.data.forEach((item, index) => {
              channelDataOld[item[0]] = item[1]
            })
            channelList.forEach(function(item, index) {
              barNow[index] = channelDataNow[item]
              barOld[index] = channelDataOld[item]
            })
            if (barNow && barOld) {
              return { seriesData: [channelList, barNow, barOld],
                disc: [channelsNowData.index[0], '今日' + channelsNowData.index[1], '对比日' + channelsNowData.index[1]]
              }
            }
          }
        }
      }
      return false
    },
    lineData: state => typeName => {
      const linePried = state['linePried']['period' + typeName]
      if (linePried == 0) {
        const lineDayDate = state['lineDayDate']['day' + typeName]
        if (lineDayDate) {
          return genCharData(lineDayDate, (seriesData, index2, index, item2) => { seriesData[index2][index] = item2 })
        }
      } else {

      }
      return false
    }
  },
  state: {
    channelList: ['default'],
    dateCompare: '-1',
    onlineData: false,
    onlineDataNow: false,
    barType: {
      typeIncome: '0',
      typeActive: '0',
      typeNewDevices: '0'
    },
    predictions: {
      'activeAmplification': 0,
      'dateCurrentIncome': 0,
      'predictIncome': 0,
      'dateActive': 0,
      'currentIncome': 0,
      'currentNewDevice': 0,
      'dateCurrentActive': 0,
      'predictNewDevice': 0,
      'currentActive': 0,
      'dateCurrentNewDevice': 0,
      'dateNewDevice': 0,
      'incomeAmplification': 0,
      'predictActive': 0,
      'newDeviceAmplification': 0,
      'dateIncome': 0
    },
    lineDayDate: {},
    linePried: {
      periodNewDevices: 0,
      periodIncome: 0,
      periodActive: 0
    },
    linePriedData: {
      periodNewDevices: null,
      periodIncome: null,
      periodActive: null
    },
    channelsOld: { date: null },
    channelsNow: { date: null }
  },
  mutations: {
    CHANGE_DATECOMPARE: (state, val) => {
      state['dateCompare'] = val
    },
    CHANGE_CHANNELSOLD: (state, val) => {
      state['channelsOld'] = val
    },
    CHANGE_CHANNELSNOW: (state, val) => {
      state['channelsNow'] = val
    },
    CHANGE_BARTYPE: (state, val) => {
      Object.assign(state.barType, val)
    },
    CHANGE_PREDICTIONS: (state, val) => {
      state['predictions'] = val
    },
    CHANGE_LINEDAYDATE: (state, val) => {
      state['lineDayDate'] = val
    },
    ADD_ERROR_LOG: (state, log) => {
      state.logs.push(log)
    },
    CHANGE_LINEPRIED: (state, val) => {
      Object.assign(state.linePried, val)
    },
    CHANGE_ONLINEDATA: (state, val) => {
      state.onlineData = val
    },
    CHANGE_ONLINEDATANOW: (state, val) => {
      state.onlineDataNow = val
    }
  },
  actions: {
    addErrorLog({ commit }, log) {
      commit('ADD_ERROR_LOG', log)
    },
    reqCostOverviewApi({ commit }, date) {
      return new Promise(resolve => {
        costOverviewApi({ date }).then(res => {
          resolve()
        }).catch(err => {

        })
      })
    },
    reqDayOverviewApi({ commit }, date) {
      return new Promise(resolve => {
        dayOverviewApi({ date }).then(res => {
          commit('CHANGE_LINEDAYDATE', res)
          resolve()
        }).catch(err => {
          console.error(err)
        })
      })
    },
    reqOnlineApi({ commit }, date) {
      return new Promise(resolve => {
        onlineApi({ date }).then(res => {
          commit('CHANGE_ONLINEDATA', res)
          resolve()
        }).catch(err => {

        })
      })
    },
    reqOnlineNowApi({ commit }, date) {
      return new Promise(resolve => {
        onlineApi({ date }).then(res => {
          commit('CHANGE_ONLINEDATANOW', res)
          resolve()
        }).catch(err => {

        })
      })
    },
    reqChannelsApi({ commit }, { date, type }) {
      return new Promise(resolve => {
        channelsApi({ date }).then(res => {
          res.date = date
          res.newDevices = res.newDevice
          commit(type, res)
          resolve()
        }).catch(err => {

        })
      })
    },
    reqPredictionsApi({ commit }, date) {
      return new Promise(resolve => {
        predictionsApi({ date }).then(res => {
          commit('CHANGE_PREDICTIONS', res)
          resolve()
        }).catch(err => {

        })
      })
    },
    changeDatecompare({ commit, state, dispatch, rootState }, val) {
      commit('CHANGE_DATECOMPARE', val)
      dispatch('reqPredictionsApi', val)
      dispatch('reqOnlineApi', val)
      dispatch('reqDayOverviewApi', val)
      for (const ikey in state.barType) {
        if (state.barType[ikey] == '1') {
          const obj = {}
          obj[ikey] = 1
          dispatch('chagneBarType', obj)
        }
      }
    },
    chagneBarType({ commit, state, dispatch, rootState }, obj) {
      commit('CHANGE_BARTYPE', obj)
      let keysarr = Object.keys(obj), hasCh = false
      for (const ikey in obj) {
        if (obj[ikey] == 1) {
          hasCh = true
        }
      }
      if (hasCh) {
        if (state.channelsNow && state.channelsNow['date'] == parseTime(new Date(rootState.app.date), '{yyyy}-{mm}-{dd}')) {

        } else {
          dispatch('reqChannelsApi', { date: parseTime(new Date(rootState.app.date), '{yyyy}-{mm}-{dd}'), type: 'CHANGE_CHANNELSNOW' })
        }
        if (state.channelsOld && state.channelsOld['date'] == state.dateCompare) {

        } else {
          dispatch('reqChannelsApi', { date: state.dateCompare, type: 'CHANGE_CHANNELSOLD' })
        }
      }
    }
  }
}

export default predictions
