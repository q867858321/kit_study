<template>
    <div class="m_scrollHasTitle model_box_w">
        <div class="head">
            <span>Action</span>
            <router-link class="more" to='/'>More</router-link>
        </div>
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
    name:"mScrollHasTitle",
    mounted:function(){
        var swiper1 = new Swiper('.m_scrollHasTitle .swiper-container',{
            slidesPerView: 2.2,
            spaceBetween: 5
        });
    }
}
</script>

<style lang='less' scoped>
.m_scrollHasTitle{
    background:#fff;
    .head{
        font-size: 0.9375rem;
        font-weight: 700;
        color:#333;
        margin:0 5px;
        .more{
            font-size:0.75rem;
            color:#5677fc;
            float: right;
        }
    }
    .swiper-container {
        padding-left:5px;
        margin-top:5px;
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

