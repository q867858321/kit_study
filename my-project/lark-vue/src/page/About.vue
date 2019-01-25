<template>
  <div class="p_about" v-wechat-title="this.title">
    <m-head></m-head>
    <h1>关于我们</h1>
    <p style="margin-top:1.5rem;">本网站主要是分享一些生活技巧、省钱窍门、快乐生活等一些实用技巧，让大家的生活更加快捷、方便、实用，让大家快速成长。</p>
    <p>如果你有一些实用技巧或者人生感悟，欢迎分享给我们。</p>
    <p style="margin-top:1rem;">微信号：dug457</p>
    <p @click="change()">qq：867858321</p>
  </div>
</template>

<script>
import mHead from "@/components/Header";
export default {
  name: "About",
  components:{
    mHead
  },
  data() {
    return {
      title:"关于我们",
      name: "sssss"
    };
  },
  created(){
    this.title='sss'; //如果要动态改变title
    console.log("about,store",this.$store.state);
  },
  methods:{
    change:function(){
      this.$store.commit("incCount","#f00");
      console.log("about,store",this.$store.state);
    }
  }
};
</script>

<style lang="less" scoped>
.p_about {
  padding:1rem;
  margin: 0 0.5rem;
  background: #fff;
  h1 {
    text-align: center;
  }
}
@media screen and (min-width: 640px) {
  .p_about {
    width: 75rem;
    margin: 0 auto;
    min-height: 40rem;
  }
}
</style>

