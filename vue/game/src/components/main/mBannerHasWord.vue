<template>
    <div class="m_bannerHasWord model_box_w">
        <router-link class="banner" to="/">
            <img v-lazy="'http://h5res.appskyx.com/allgame/ICON/haidaoxuanzhuan/iconbanner.jpg'" >
        </router-link>
        <div class="word">
          The Pirates lost the treasure hidden on the islands they own and they need your help to get the golden coins back.
          Tap to make the pirate jump from one place to another. Collect the coins and treasure chest you will find in between.
        </div>
        <div class="explain">
            <span>10 score</span>
            <span>&emsp;|&emsp;</span>
            <span>70358 play</span>
            <router-link to="/" class="play">play</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"mBannerHasWord"
}
</script>

<style lang="less" scoped>
    .m_bannerHasWord{
        width:100%;
        font-size:0.75rem;
        .banner{
            display: block;
            img{
                width:100%;
                min-height: 10.625rem;
                border-radius: 0.3125rem;
            }
        }
        .word{
            color: #444;
            padding:0.3125rem;
        }
        .explain{
            color:#888;
            padding:0 0 5px 0px;
            .play{
                float:right;
                padding:5px 10px;
                margin-top: -4px;
                background: #5677fc;
                color:#fff;
                border-radius:3px;
                margin-right:0.3125rem;
            }
        }
    }
</style>
