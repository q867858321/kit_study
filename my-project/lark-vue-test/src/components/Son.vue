<template>
  <div>
    子
    {{name}}
    <button @click="childMethod()">子点击</button>
  </div>
</template>

<script>
export default {
  name: "son",
  props: { name },
  data() {
    return {};
  },
  mounted: function() {
    console.log("Son", this);
  },
  methods: {
    childMethod() {
      this.$emit("fatherClick", "1111");
    }
  }
};
</script>

<style>
</style>
