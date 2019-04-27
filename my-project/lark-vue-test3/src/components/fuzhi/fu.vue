<template>
  <div class="fu">
    fu {{open}}
    <button @click="change">父 button</button>
    {{test}}
    <zhi :kai="open" @childChange="fugai" v-bind:fatherNum.sync="test"></zhi>
  </div>
</template>

<script>
import zhi from "./zhi.vue";
export default {
  components: { zhi },
  name: "fu",
  data() {
    return {
      namelist: [],
      open: true,
      test: {
        name: "2",
        age: 0
      }
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
