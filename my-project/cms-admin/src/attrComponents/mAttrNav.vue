<template>
    <div class="m_attrNav" @click="get()">
        <h3>组件</h3>
        <el-button  size="small" type="primary" plain @click="addFlippage">Flippage(3)<i class="el-icon-plus el-icon--right"></i></el-button>
        <el-button  size="small" type="primary" plain>Gallery(3)<i class="el-icon-plus el-icon--right"></i></el-button>
        <el-button  size="small" type="primary" plain>AppList(3)<i class="el-icon-plus el-icon--right"></i></el-button>
        <el-button  size="small" type="primary" plain>Infopage(3)<i class="el-icon-plus el-icon--right"></i></el-button>
        <el-button  size="small" type="primary" plain>Tab(3)<i class="el-icon-plus el-icon--right"></i></el-button>
        <el-button  size="small" type="primary" plain>Feed(3)<i class="el-icon-plus el-icon--right"></i></el-button>
        <el-button  size="small" type="primary" plain>Advertising(3)<i class="el-icon-plus el-icon--right"></i></el-button>
    </div>
</template>

<script>
import Http from '@/api/http.js';
export default {
    name:"mAttrNav",
    methods:{
        get:function(){
            console.log("mattrnav",this);
            
            //  this.$http.get('/manage/page/assembly/1').then(function(response){
            //      console.log("response",response.data);
            //  })
        },
        addFlippage:function(){
            var flippageData={ 
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
                "orderNum":0,
                "attributes":{
                    "indicator":"1",  
                    "statistic":"1",
                    "color":"#f00",
                    "occupy":"1",
                    "action":"game",
                    "source":"1",
                    "speed":"100",
                    "height":"0"
                },
                "id":29,
                "subassemblyId":1
            }
            this.$store.commit('updatePageInfo',flippageData);
        }
    }
}
</script>

<style lang="less" scoped>
.m_attrNav{
    padding-bottom:10px;
    border-bottom: 1px solid #eee;
    h3{
        margin-bottom:5px;
    }
}

</style>
