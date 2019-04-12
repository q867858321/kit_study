<template>
  <div class="zhi">
    zhi {{kai}}, {{dkai}}
    <button @click="change">子改变</button>
  </div>
</template>

<script>
export default {
  name: "zhi",
  props: ["kai"],
  data() {
    return {
      dkai: this.kai
    };
  },
  watch: {
    kai(val, oldVal) {
      this.dkai = val;
    },
    // dkai(val, oldVal) {
    //   console.log(val);
    //   this.$emit("fugai", val);
    // }
    dkai: {
      get() {
        console.log("ddd");
        return this.dkai;
      },
      set(val) {
        console.log("zhi", val);
      }
    }
  },
  mounted() {
    console.log("zhi", this);
  },
  methods: {
    change() {
      let dkai = this.dkai;
      if (dkai == true) {
        this.dkai = false;
      } else {
        this.dkai = true;
      }
    }
  }
};
</script>

<style>
</style>
