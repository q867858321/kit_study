<template>
    <div class="mMain">
        <mAd></mAd> 
        <mBanner></mBanner>
        <mBannerHasWord></mBannerHasWord>
        <mCell2></mCell2>
        <mCell4></mCell4>
        <mScroll></mScroll>
        <mScrollHasTitle></mScrollHasTitle>
    </div>
</template>

<script>
import mAd from '@/components/main/mAd.vue'
import mBanner from '@/components/main/mBanner.vue'
import mBannerHasWord from '@/components/main/mBannerHasWord.vue'
import mCell2 from '@/components/main/mCell2.vue'
import mCell4 from '@/components/main/mCell4.vue'
import mScroll from '@/components/main/mScroll.vue'
import mScrollHasTitle from '@/components/main/mScrollHasTitle.vue'
export default {
    name:'mMain',
    components:{
        mAd,mBanner,mBannerHasWord,mCell,mScroll,mScrollHasTitle
    }
}
</script>

<style>

</style>
