<template>
  <span class="item">
    <span v-if="icon" class="iconfont" :class="icon"></span>
    <span v-if="title" :class="title">{{title}}</span>
  </span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  mounted() {},
};
</script>

<style>
</style>