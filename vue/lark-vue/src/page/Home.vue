<template>
  <div class="p_home">
    <p>{{name}}</p>
    <div class="main">
      <m-nav :nnavlist='navlist'></m-nav>
      <m-wrap></m-wrap>
    </div>
    
  </div>
</template>

<script>
import mNav from '@/components/Nav';
import mWrap from '@/components/Wrap';
export default {
  name: "Home",
  components: {
    mNav,mWrap
  },
  data() {
    return {
      name: "sssss",
      navlist:["1",'2',"3"]
    }
  }
}
</script>

<style lang="less" scoped>
.p_home{
  .main{
    position: relative;
    width:75rem;
    margin:0 auto;
    display: flex;
    .m_nav{
      flex:none;
    }
    .m_wrap{
      flex: 1;
    }
  }
}
p {
  background: #f00;
}
</style>

