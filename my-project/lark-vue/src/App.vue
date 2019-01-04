<template>
  <div id="app">
    <m-head></m-head>
    <router-view />
  </div>
</template>

<script>
import mHead from '@/components/Header'
export default {
  name: 'App',
  components: {
    mHead
  },
  data() {
    return {
      msg: '你好vue',
      list: []
    }
  },
  methods: {
    run1: function () {
      console.log(this);
      console.log(this.$store.state)
      alert('这是一个方法');
    },
  }
}
</script>

<style>
*{margin:0;padding:0;}
html{font-family: "Avenir", Helvetica, Arial, sans-serif;background: #f5f6f7;}
li{list-style: none;}
.hid{display: none;}
.hid_i{display: none !important;}
</style>
