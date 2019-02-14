<template>
  <div class="m_head">
    <div class="main">
      <router-link class="index" to="/">
        <img class="log" src="@/img/log.png" alt="log">
      </router-link>
      <nav class="clear">
        <router-link :class="{active:dNav=='life'}" to="/life">生活</router-link>
        <router-link :class="{active:dNav=='monery'}" to="/monery">省钱</router-link>
        <router-link :class="{active:dNav=='love'}" to="/love">收藏</router-link>
        <router-link :class="{active:dNav=='about'}" to="/about">关于</router-link>
        <span class="bottom_line" ref="bottom_line"></span>
      </nav>
    </div>

  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      dNav:"life",
      list: []
    };
  },
  created(){
    this.dNav=this.$route.name;
  },
  mounted(){
    $("nav a").on("click",function(){
      var index=$(this).index();
      var wid=$(this).width();
      
      $(".bottom_line").css({left:wid*index});
    });
    $("nav a.router-link-active").click();
  },
  updated(){
    this.dNav=this.$route.name;
  },
  methods: {
    run: function() {},
    navClick:function(event,index){
    //   console.log(event);
    //  var wid=event.target.offsetWidth;
    //  this.$refs.bottom_line.style.left=wid*index+'px';
    }
  }
};
</script>

<style lang="less" scoped>
.m_head {
  background: #f0f0f0;
  border-bottom: 1px solid #e3e3e3;
  box-shadow: 0 2px 2px rgba(10, 16, 20, 0.1), 0 0 2px rgba(10, 16, 20, 0.12);
  .main {
    display: flex;
    .log {
      flex: none;
      width: 4rem;
      height: 4rem;
    } 
    nav {
      margin: 1.5rem 0 0 1.5rem;
      position: relative;
      a {
        float:left;
        display:block;
        color: #00896c;
        width: 3rem;
        padding-bottom:0.5rem;
        &:hover {
          color: #40ad96;
        }
      }
      .bottom_line{
        position: absolute;
        width:2rem;
        height:2px;
        top:2rem;
        left:0;
        transition:left 0.5s;
        background:#00896c;
      }
    }
  }
}
@media screen and (min-width:640px){
  .m_head{
    height: 7rem;
    .main{
      width: 75rem;
      margin: 0 auto;
      .log{
        width: 7rem;
        height: 7rem;
      }
      nav{
        margin: 3rem 0 0 2rem;
      }
    }
  }
}
</style>
