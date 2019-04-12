<template>
  <div class="fu">
    fu {{open}}
    <button @click="change">父 button</button>
    <zhi :kai="open"></zhi>
  </div>
</template>

<script>
import zhi from "./zhi";
export default {
  components: { zhi },
  name: "fu",
  data() {
    return {
      namelist: [],
      open: true
    };
  },
  watch: {},
  mounted() {},
  methods: {
    change() {
      let on = this.open;
      if (on == true) {
        this.open = false;
      } else {
        this.open = true;
      }
    },
    fugai(val) {
      console.log("val", val);
      this.open = val;
    }
  }
};
</script>

<style>
</style>
