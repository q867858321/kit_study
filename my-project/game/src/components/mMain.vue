<template>
    <div class="mMain">
        <mAd></mAd> 
        <mBanner></mBanner>
        <mBannerHasWord></mBannerHasWord>
        <mCell dNum="2"></mCell>
        <mCell dNum="4"></mCell>
        <mScroll></mScroll>
        <mScrollHasTitle></mScrollHasTitle>
    </div>
</template>

<script>
import mAd from '@/components/main/mAd.vue'
import mBanner from '@/components/main/mBanner.vue'
import mBannerHasWord from '@/components/main/mBannerHasWord.vue'
import mCell from '@/components/main/mCell.vue'
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
