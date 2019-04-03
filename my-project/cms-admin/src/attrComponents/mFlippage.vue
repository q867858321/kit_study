<template>
    <div class="m_flippage" @click="submitData">
        <h3 >属性</h3>
        <div class="arrt_box">
            <div class="item">
                <p class="title">默认行为</p>
                <el-select v-model="action" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="item">
                <p class="title">幻灯片速度</p>
                <el-input-number v-model="speed" @change="speedChange" :min="100" :step="100" :max="1000" label="幻灯片速度"></el-input-number>
            </div>
            <div class="item">
                <p class="title">是否显示页小亮点</p>
                <el-radio v-model="indicator" label="1">显示</el-radio>
                <el-radio v-model="indicator" label="0">不显示</el-radio>
            </div>
            <div class="item">
                <p class="title">是否显示分割线</p>
                <el-radio v-model="occupy" label="1">显示</el-radio>
                <el-radio v-model="occupy" label="0">不显示</el-radio>
            </div>
            <div class="item">
                <p class="title">分割线高</p>
                <el-input-number v-model="height" @change="heightChange" :min="0" :step="1" :max="100" label="分割线高"></el-input-number>
            </div>
            <div class="item">
                <p class="title">分割线颜色</p>
                <el-color-picker v-model="color"></el-color-picker>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"mFlippage",
    props:["fData",'fIndex'],
    data:function(){
         let attributes=this.fData.attributes;
         console.log("attributes",attributes);
        return {
             options: [{
                value: 'game',
                label: '游戏'
                }, {
                value: 'detail',
                label: '详情页'
                },{
                   value: 'page',
                   label: '专题页' 
                }],
            action: 'game',
            speed: 100,
            indicator:"0",
            occupy:'1',
            height:"20",
            color: '#f00',
            source:'1',  //wu
            statistic:'1' //wu
        }
    },
    watch:{
        fData:function(){
            let attributes=this.fData.attributes;
            this.action=attributes.action;
            this.speed=attributes.speed;
            this.indicator=attributes.indicator;
            this.occupy=attributes.occupy;
            this.height=attributes.height;
            this.color=attributes.color;
        },
    },
    mounted:function(){
        console.log("mFlippage this",this);
    },
    methods:{
        speedChange:function(){

        },
        heightChange:function(){
        },
        submitData:function(){
            let data={
                index:this.fIndex,
                item:{
                    attributes:{
                        action:this.action,
                        color:this.color,
                        height:this.height,
                        indicator:this.indicator,
                        occupy:this.occupy,
                        source:this.source,
                        speed:this.speed,
                        statistic:this.statistic
                    },
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
                        }
                    ],
                    "orderNum":1,
                     "id":29,
                    "subassemblyId":1
                },
                type:'1'
            };
             this.$store.commit('chooseTemement',data);
             
             let pageInfo=this.$store.state.pageInfo;
             let num=this.fIndex;
             let newpageInfo=pageInfo.map(function(item,index){
                 if(num==index){
                     item=data.item;
                 }
                 return item;
             });
             console.log("newpageInfo",newpageInfo);
             this.$store.commit('updatePageInfo',newpageInfo);
        }
    }
}
</script>

<style lang="less" scoped>
    .m_flippage{
        margin-top: 20px;
        .arrt_box{
            .item{
                margin:10px 0;
                padding:8px 0;
                border-bottom:1px solid #eee;
                .title{
                    font-size: 13px;
                    margin-bottom:5px;
                }
            }
        }
    }
</style>
