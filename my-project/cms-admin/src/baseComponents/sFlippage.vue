<template>
    <div class="m_scroll">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a href="">
                        <img src="http://h5res.appskyx.com/allgame/ICON/shuishangjiuyuan/iconbannersm.jpg"/>
                        <div class="item_bottem"> Save Santa !</div>
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="">
                        <img src="http://h5res.appskyx.com/allgame/ICON/shuishangjiuyuan/iconbannersm.jpg"/>
                        <div class="item_bottem"> Save Santa !</div>
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="">
                        <img src="http://h5res.appskyx.com/allgame/ICON/shuishangjiuyuan/iconbannersm.jpg"/>
                        <div class="item_bottem"> Save Santa !</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"sFlippage",
    mounted:function(){
       this.runswiper();
    },
    methods:{
        runswiper:function(){
            console.log("sFlippage",this);
            let _this=this;
            var swiper1 = new Swiper('.m_scroll .swiper-container',{
                autoplay:true, //是否自动播放
                slidesPerView: 1.5, //初始化的位置
                speed:1000,  // 播放速度
                spaceBetween: 5  //两个之间的间距
            });
        }
    }
}
</script>

<style scoped>
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
