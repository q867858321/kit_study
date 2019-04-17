<template>
  <div class="p_love" v-wechat-title="this.title">
      <div class="nav">
          <div>
            dd
          </div>
          <div>
            <img src="" />
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "Love",
  components: {
  },
  data() {
    return {
      title: "收藏",
    }
  },
  created(){
    console.log("life",this);
    console.log("left,store,state",this.$store.state)
  }
}
</script>

<style lang="less" scoped>
.p_love{
  
}
</style>

