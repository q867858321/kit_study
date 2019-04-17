<template>
    <div class="m_scroll model_box_w">
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
    name:"mScroll",
    mounted:function(){
        var swiper1 = new Swiper('.m_scroll .swiper-container',{
            slidesPerView: 1.5,
            spaceBetween: 5
        });
    }
}
</script>

<style lang='less' scoped>
.m_scroll{
    background:#fff;
    .swiper-container {
        padding-left:5px;
        .swiper-slide{
            a{
                display: block;
                img{
                    display: block;
                    min-height: 6.5rem;
                    width:100%;
                    border-radius: .07rem;
                }
                .item_bottem {
                    font-size: 0.75rem;
                    line-height: 2rem;
                    height: 2rem;
                    text-align: center;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            } 
        }
        
    }
}
  
</style>
