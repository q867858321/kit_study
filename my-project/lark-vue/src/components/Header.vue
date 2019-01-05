<template>
  <div class="m_head">
    <div class="main">
      <router-link class="index" to="/">
        <img class="log" src="@/img/log.png" alt="log">
      </router-link>
      <nav>
        <router-link class="index" to="/">生活</router-link>
        <router-link class="index" to="/">省钱</router-link>
        <router-link class="about" to="/about">关于</router-link>
      </nav>

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
.m_head {
  position:fixed;
  top:0;
  width:100%;
  height: 8.5rem;
  background: #f0f0f0;
  border-bottom: 1px solid #e3e3e3;
  box-shadow: 0 2px 2px rgba(10, 16, 20, 0.1), 0 0 2px rgba(10, 16, 20, 0.12);
  .main {
    width: 75rem;
    margin: 0 auto;
    display: flex;
    .log {
      width: 8.5rem;
      height: 8.5rem;
      flex: none;
    }
    nav {
      flex: 1;
      margin: 3.5rem 0 0 2rem;
      font-size: 1.25rem;
      a {
        color: #f00;
        margin-right: 1rem;
      }
    }
  }
}
</style>
