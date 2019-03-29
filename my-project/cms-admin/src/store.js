import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pageInfo:[
      {
          "createTime":"2019-01-18 12:52:08",
          "contents":[
              {
                  "image":{
                      "originalUrl":"http://h5res.appskyx.com/allgame/ICON/shuishangjiuyuan/iconbannersm.jpg",
                      "originalFormat":"png",
                      "originalSize":1869
                  },
                  "createTime":"2019-01-18 12:52:08",
                  "orderNum":1,
                  "id":55,
                  "isNew":false,
                  "type":2,
                  "content":"6",
                  "via":null
              },
              {
                "image":{
                    "originalUrl":"http://h5res.appskyx.com/allgame/ICON/shuishangjiuyuan/iconbannersm.jpg",
                    "originalFormat":"png",
                    "originalSize":1869
                },
                "createTime":"2019-01-18 12:52:08",
                "orderNum":1,
                "id":55,
                "isNew":false,
                "type":2,
                "content":"6",
                "via":null
            },
            {
              "image":{
                  "originalUrl":"http://h5res.appskyx.com/allgame/ICON/shuishangjiuyuan/iconbannersm.jpg",
                  "originalFormat":"png",
                  "originalSize":1869
              },
              "createTime":"2019-01-18 12:52:08",
              "orderNum":1,
              "id":55,
              "isNew":false,
              "type":2,
              "content":"6",
              "via":null
          }
          ],
          "orderNum":1,
          "attributes":{
              "indicator":"1",
              "statistic":"1",
              "color":"#ffffff",
              "occupy":"1",
              "action":"game",
              "source":"1",
              "speed":"100",
              "height":"0"
          },
          "id":29,
          "subassemblyId":1
      },
      {
        "createTime":"2019-01-18 12:52:20",
        "contents":[
            {
                "image":{
                    "originalUrl":"http://image.appskyx.com/res/10001/image/icon/微信图片_20181212152309.png",
                    "originalFormat":null,
                    "originalSize":0
                },
                "createTime":"2019-01-18 12:52:20",
                "orderNum":1,
                "id":56,
                "isNew":false,
                "type":3,
                "content":"10001",
                "via":null
            }
        ],
        "orderNum":2,
        "attributes":{
            "indicator":"1",
            "statistic":"1",
            "color":"#ffffff",
            "occupy":"1",
            "action":"game",
            "source":"1",
            "speed":"100",
            "height":"0"
        },
        "id":30,
        "subassemblyId":2
      },
      {
        "createTime":"2019-01-18 12:52:20",
        "contents":[
            {
                "image":{
                    "originalUrl":"http://image.appskyx.com/res/10001/image/icon/微信图片_20181212152309.png",
                    "originalFormat":null,
                    "originalSize":0
                },
                "createTime":"2019-01-18 12:52:20",
                "orderNum":1,
                "id":56,
                "isNew":false,
                "type":3,
                "content":"10001",
                "via":null
            }
        ],
        "orderNum":2,
        "attributes":{
            "indicator":"1",
            "statistic":"1",
            "color":"#ffffff",
            "occupy":"1",
            "action":"game",
            "source":"1",
            "speed":"100",
            "height":"0"
        },
        "id":30,
        "subassemblyId":3
      }
  ]
  },
  mutations: {
    updatePageInfo(state,data){
      state.pageInfo=data;
    }
  },
  actions: {

  }
})
