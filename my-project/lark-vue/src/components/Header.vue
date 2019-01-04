<template>
  <div class="m_head">
    <div class="main">
      <router-link to="/">index</router-link>
      <router-link to="/detail">detail</router-link>
      <router-link to="/about">about</router-link>
    </div>
     
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {

  },
  data() {
    return {
      msg: '你好vue',
      list: []
    }
  },
  methods: {
    run1: function () {
   
    },
  }
}
</script>

<style lang="less" scoped>
    .m_head{
      height:2rem;
      background:#808080;
      .main{
        width:62.5rem;
        margin:0 auto;
        a{
          color:#f00;
          margin-right: 1rem;
        }
      }
      
    }
</style>
