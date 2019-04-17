<template>
  <div class="p_index">
    <mHeader></mHeader>
    <div class="content">
      <mNav></mNav>
      <mDetails></mDetails>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import mHeader from '@/components/mHeader.vue'
import mNav from '@/components/mNav.vue'
import mDetails from '@/components/mDetails.vue'
export default {
  name: 'pIndex',
  components: {
    mHeader,mNav,mDetails
  }
}
</script>
<style type="less" scoped>
  .content{
    position: fixed;
    top:52px;
    left:0;
    right: 0;
    bottom:0;
    display: flex;
  }
</style>

