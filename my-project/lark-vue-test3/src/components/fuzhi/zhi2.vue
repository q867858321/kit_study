<template>
    <div>
        子2
        {{userName}} 
        <button @click="change()">change</button>
    </div>
</template>

<script>
export default {
  props: ["userName"],
  mounted() {
    console.log("zhi2", this);
  },
  methods: {
    change() {
      this.$emit("update:userName", "wang");
    }
  }
};
</script>

<style>
</style>
