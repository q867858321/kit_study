<template>
  <div class="p_monery" v-wechat-title="this.title">
      省钱
  </div>
</template>

<script>

export default {
  name: "Monery",
  components: {
  },
  data() {
    return {
      title: "省钱",
    }
  },
  created(){
    console.log("life",this);
    console.log("left,store,state",this.$store.state)
  }
}
</script>

<style lang="less" scoped>
.p_monery{
  
}
</style>

