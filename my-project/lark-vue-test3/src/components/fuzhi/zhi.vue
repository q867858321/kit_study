<template>
  <div class="zhi">
    zhi {{kai}}, {{dkai}}
    {{user.age}}
    <button @click="change">子改变</button>
    <button @click="changefu">子改变父</button>
    <button @click="changeUser">user</button>
  </div>
</template>

<script>
export default {
  name: "zhi",
  props: ["kai", "fatherNum"],
  data() {
    return {
      dkai: this.kai,
      user: {
        name: "",
        age: 0
      }
    };
  },
  watch: {
    kai(val, oldVal) {
      alert(val);
      this.dkai = val;
    },
    dkai(val) {
      console.log("val", val);
    },
    user: {
      handler(val, oldVal) {
        console.log("val", val);
      },
      deep: true
    }
    // user(val) {
    //   console.log("val", val);
    // }
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
    },
    changefu() {
      console.log(this);
      this.$emit("childChange", this.dkai);
    },
    changeUser() {
      this.fatherNum.age = 33;
      this.user.age++;
    }
  }
};
</script>

<style>
</style>
