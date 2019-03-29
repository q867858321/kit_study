<template>
    <div class="m_scroll" @click="show">
        <div class="swiper-container" ref="scroll">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a href="javascript:void(0);">
                        <img src="http://h5res.appskyx.com/allgame/ICON/shuishangjiuyuan/iconbannersm.jpg"/>
                        <div class="item_bottem"> Save Santa !</div>
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="javascript:void(0);">
                        <img src="http://h5res.appskyx.com/allgame/ICON/shuishangjiuyuan/iconbannersm.jpg"/>
                        <div class="item_bottem"> Save Santa !</div>
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="javascript:void(0);">
                        <img src="http://h5res.appskyx.com/allgame/ICON/shuishangjiuyuan/iconbannersm.jpg"/>
                        <div class="item_bottem"> Save Santa !</div>
                    </a>
                </div>
            </div>
            
        </div>
        <!-- <div class="change_box">
            <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
            <el-button type="primary" icon="el-icon-sort" size="mini"></el-button>
        </div> -->
    </div>
</template>

<script>
export default {
    name:"sFlippage",
    props:["fippage",'num'],
    data:function(){
        return {
            list:[

            ],
            indicator:"1",
            statistic:"1",
            color:"#ffffff",
            occupy:"1",
            action:"game",
            source:"1",
            speed:100,
            height:"0"
        }
    },
    computed:{
        
    },
    watch:{
         fippage:function(newval,oldval){
             console.log("newval",neval);
             alert(3);
             this.speed=2000;
         }
    },
    mounted:function(){
        console.log("sFlippage",this);
       this.runswiper();
    },
    methods:{
        runswiper:function(){
            console.log("sFlippage",this);
            let _this=this;
            let swiper1 = new Swiper(_this.$refs.scroll,{
                autoplay:true, //是否自动播放
                slidesPerView: 1, //初始化的位置
                speed:_this.speed,  // 播放速度
                spaceBetween: 5,  //两个之间的间距

            });
        },
        show:function(){
            console.log(this.$refs);
        }
        
    }
}
</script>

<style lang="less" scoped>
.m_scroll{
    background:#fff;
    padding: 5px 0 0;
}
.m_scroll .swiper-container {
    padding-left:5px;
}
.m_scroll .swiper-container .swiper-slide a{
    display: block;
}
.m_scroll .swiper-container .swiper-slide a img{
    display: block;
    width:100%;
    border-radius: 3px;
}
.m_scroll .swiper-container .swiper-slide a .item_bottem {
    font-size:12px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}


</style>
