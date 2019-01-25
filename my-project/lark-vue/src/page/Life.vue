<template>
  <div class="p_life">
    <m-head></m-head>
      生活
  </div>
</template>

<script>
import mHead from "@/components/Header";
import mNav from '@/components/Nav';
import mWrap from '@/components/Wrap';
export default {
  name: "Home",
  components: {
    mHead,mNav,mWrap
  },
  data() {
    return {
      name: "生活",
    }
  },
  created(){
    console.log("life",this);
    console.log("left,store,state",this.$store.state)
  }
}
</script>

<style lang="less" scoped>
.p_life{
  
}
</style>

