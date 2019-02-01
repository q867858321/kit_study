<template>
  <div class="p_about" v-wechat-title="this.title">
    <div class="main">
      <h1>关于我们</h1>
      <p style="margin-top:1.5rem;">本网站主要是分享一些生活技巧、省钱窍门、快乐生活等一些实用技巧，让大家的生活更加快捷、方便、实用，让大家快速成长。</p>
      <p>如果你有一些实用技巧或者人生感悟，欢迎分享给我们。</p>
      <p style="margin-top:1rem;">微信号：dug457</p>
      <p @click="change()">qq：867858321</p>
    </div>
    <div id="page" class="page_div hid"></div>
  </div>
</template>

<script>
export default {
  name: "About",
  components:{
    
  },
  data() {
    return {
      title:"关于",
    };
  },
  created(){
    console.log("about,store",this.$store.state);
  },
  mounted(){
    $("h1").on("click",function(){
      alert(3)
    });
    //分页
		$("#page").paging({
			pageNo:5,
			totalPage: 9,
			totalSize: 300,
			callback: function(num) {
				alert(num)
			}
		})
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
@import '../../static/reset.css';
.p_about {
  .main{
    margin:1rem 0.5rem;
    padding:1rem 0.5rem;
    min-height: 25rem;
    background: #fff;
  }
  h1 {
    text-align: center;
  }
}
@media screen and (min-width: 640px) {
  .p_about {
    margin: 0 auto;
    min-height: 40rem;
    .main{

    }
  }
}
</style>

