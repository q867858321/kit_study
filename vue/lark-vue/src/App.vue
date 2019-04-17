<template>
  <div id="app">
    <m-head></m-head>
    <div class="content">
      <router-view :key="key" />
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
import mHead from "@/components/Header";
import mFooter from "@/components/Footer";
export default {
  name: "App",
  components: {
    mHead,
    mFooter
  },
  data() {
    return {
      msg: "你好vue",
      list: []
    };
  },
  computed:{
    key(){
      return this.$route.path+Math.random();
    }
  },
  methods: {
    run1: function() {
      console.log(this);
      console.log(this.$store.state);
      alert("这是一个方法");
    }
  }
};
</script>

<style>

</style>
