<template>
  <footer class="m_footer">
    {{slogan}}
  </footer>
</template>

<script>
export default {
  name: 'Header',
  components: {

  },
  data() {
    return {
      slogan: '爱生活，爱自己！',
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
.m_footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  color: rgb(235, 131, 131);
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 0.75rem;
  text-align: right;
  background: #f0f0f0;
}
</style>
