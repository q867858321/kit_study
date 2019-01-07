<template>
  <div class="m_head">
    <div class="main">
      <router-link class="index" to="/">
        <img class="log" src="@/img/log.png" alt="log">
      </router-link>
      <nav>
        <router-link class="index" to="/">生活</router-link>
        <router-link class="index" to="/detail">省钱</router-link>
        <router-link class="about" to="/about">关于</router-link>
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
      msg: "你好vue",
      list: []
    };
  },
  methods: {
    run1: function() {}
  }
};
</script>

<style lang="less" scoped>
.m_head {
  width: 100%;
  height: 7rem;
  background: #f0f0f0;
  border-bottom: 1px solid #e3e3e3;
  box-shadow: 0 2px 2px rgba(10, 16, 20, 0.1), 0 0 2px rgba(10, 16, 20, 0.12);
  .main {
    width: 75rem;
    margin: 0 auto;
    display: flex;
    .log {
      width: 7rem;
      height: 7rem;
      flex: none;
    }
    nav {
      flex: 1;
      margin: 3rem 0 0 2rem;
      font-size: 1.25rem;
      a {
        color: #00896c;
        margin-right: 1rem;
        &:hover {
          color: #40ad96;
        }
      }
    }
  }
}
</style>
