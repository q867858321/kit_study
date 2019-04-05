<template>
    <div class="m_scroll">
        <div class="swiper-container" ref="scroll">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in this.scroll.contents" :key="index">
                    <img :src="item.image.originalUrl" />
                </div>
            </div>
            <div class="swiper-pagination" :style="{display:this.scroll.attributes.indicator=='1'?'block':'none'}"></div>
        </div>
        <div class="line" :style="{display:this.scroll.attributes.occupy==1?'block':'none',background:this.scroll.attributes.color,'margin-top':this.scroll.attributes.height+'px'}"></div>
        {{this.scroll.orderNum}}
    </div>
</template>

<script>
export default {
    name:"sFlippage",
    props:["scroll",'num'],
    data:function(){
        return {
            // list:this.scroll.contents || [],  //轮播图列表
            // attributes:{
            //     indicator:'1',  //指示器
            //     statistic:1,  //是否统计位置流量
            //     color:"#c0c0c0",   //分割线颜色
            //     occupy:1,     //是否有分割线
            //     action:"game", //默认行为
            //     speed:100,  //轮播速度
            //     height:0  //分割线的高
            // },
            // subassemblyId:1 //1 代表轮播模块
        }
    },
    // computed:{
    //     changePageChooseTemementData(){
    //         return this.$store.state.pageChooseTemementData;
    //     }
    // },
    // watch:{
    //     changePageChooseTemementData:function(newval,oldval){
    //         this.list=newval;
    //     }
    // },
    mounted:function(){
        console.log("sFlippage",this);
       this.runswiper();
    //    console.log("sFlippage",this);
    },
    updated:function(){

    },
    methods:{
        runswiper:function(){
            let _this=this;
            let swiper1 = new Swiper(_this.$refs.scroll,{
                autoplay:false, //是否自动播放
                speed:100,
                slidesPerView: 1, //初始化的位置
                spaceBetween: 5,  //两个之间的间距
                pagination:{
                    el:".swiper-pagination"
                }
            });
        },
        
    }
}
</script>

<style lang="less" scoped>
.m_scroll{
    background:#fff;
    padding: 5px 0 0;
    .swiper-container {
        position:relative;
        padding-left:5px;
        .swiper-wrapper{
            .swiper-slide{
                img{
                    display: block;
                }
            }
        }
        .swiper-pagination{
            position: absolute;
            bottom:0;
            left: 0;
            width:100%;
        }
    }
   
    .line{
        height:2px;
        margin-top:5px;
    }
}



</style>
