import {parseTime} from './index'

export function parseOnline (sourceData) {
  const rows = []
  const { data, histogramData } = sourceData
  const { index } = histogramData
  const index2 = data.index
  const rowsCom = histogramData.data
  const rowsData = data.data
  const seriesDataCompare = []
  const disc = []
  let iobj
  rowsCom[0].forEach((item, ikey) => {
    seriesDataCompare[ikey] = []
  })
  rowsData.forEach((item, ikey) => {
    iobj = {}
    item.forEach((jItem, jKey) => {
      iobj[index2[jKey]] = jItem
    })
    rows.push(iobj)
  })
  iobj = {}
  data.summary[0] = '汇总或平均'
  data.summary.forEach((item, ikey) => {
    iobj[index2[ikey]] = item
  })
  rows.push(iobj)
  rowsCom.forEach((item, ikey) => {
    item.forEach((jItem, jKey) => {
      seriesDataCompare[jKey].push(jItem)
    })
  })
  return {
    rows,
    seriesDataCompare,
    disc: index
  }
}

function assginDate (sourceData, dateObj) {
  let {dataDateList, comparedDateList} = dateObj
  const { data, comparedData } = sourceData
  const { index, summary } = data
  let dataData = data.data
  let comparedDataData = comparedData.data;
  let tmp = []
  index.slice(1).forEach(item => {
    tmp.push('暂无')
  })
  dataDateList.forEach((item, jindex) => {
    if (dataData[jindex] && dataData[jindex][0] == item) {

    } else {
      dataData.splice(jindex,0,[item,...tmp])
    }
  })
  comparedDateList.forEach((item, kindex) => {
    if (comparedDataData[kindex] && comparedDataData[kindex][0]==item) {

    } else {
      comparedDataData.splice(kindex, 0, [item, ...tmp])
    }
  })
}
export function parseSource (sourceData, dateObj) {
  // sourceData  = tmpData;
  if (dateObj) { assginDate(sourceData, dateObj) }
  const rows = []
  const { data, comparedData } = sourceData
  const { index, summary } = comparedData
  const rowsCom = comparedData.data
  const rowsData = data.data
  const seriesData = []
  const seriesDataCompare = []
  const disc = []
  let iobj
  rowsData[0]?rowsData[0].forEach((item, ikey) => {
    seriesData[ikey] = []
    seriesDataCompare[ikey] = []
  }):'';

  rowsData.forEach((item, ikey) => {
    iobj = {}
    item.forEach((jItem, jKey) => {
      iobj[index[jKey]] = jItem;
      seriesData[jKey].push(jItem)
    })
    rows.push(iobj)
    iobj = {}
    rowsCom[ikey] && rowsCom[ikey].forEach((jItem, jKey) => {
      iobj[index[jKey]] = jItem
      seriesDataCompare[jKey].push(jItem)
    })
    rows.push(iobj)
  })
  iobj = {}
  data.summary[0] = '汇总或平均'
  iobj.rowSum = true
  data.summary.forEach((item, ikey) => {
    iobj[index[ikey]] = item
  })
  rows.push(iobj)
  iobj = {}
  iobj.rowSum = true
  comparedData.summary.forEach((item, ikey) => {
    iobj[index[ikey]] = item
  })
  rows.push(iobj)
  return {
    rows,
    seriesData,
    seriesDataCompare,
    disc: index
  }
}

export function generDateList (queryParams) {
  let { dateBegin, dateEnd, comparedDateBegin, comparedDateEnd } = queryParams
  let couter = new Date(dateBegin)
  let comparedCouter = new Date(comparedDateBegin)
  let end = new Date(dateEnd)
  let comparedEnd = new Date(comparedDateEnd)
  let dataDateList = []
  let comparedDateList = []
  while (+couter <= +end) {
    dataDateList.push(parseTime(couter, '{yyyy}-{mm}-{dd}'))
    couter = new Date(+couter + 24 * 3600 * 1000)
  }
  while (+comparedCouter <= +comparedEnd) {
    comparedDateList.push(parseTime(comparedCouter, '{yyyy}-{mm}-{dd}'))
    comparedCouter = new Date(+comparedCouter + 24 * 3600 * 1000)
  }
  return {dataDateList, comparedDateList}
}
