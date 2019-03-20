<template>
    <div class="m_banner model_box">
        <img v-lazy="'http://h5res.appskyx.com/allgame/ICON/fkdjc1/iconbanner.jpg'" alt="">
    </div>
</template>

<script>
export default {
    name:"mBanner"
}
</script>

<style lang="less" scoped>
    .m_banner{
        width:100%;
        img{
            width:100%;
            min-height: 10.625rem;
            border-radius: 0.3125rem;
        }
    }
</style>
