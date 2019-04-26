<template>
    <div>
        子：{{list}},{{contentList}}
        <input v-model="contentList[0].age">
    </div>
</template>

<script>
export default {
  name: "detail",
  props: ["list"],
  computed: {
    contentList: {
      get() {
        return this.list;
      },
      set(val) {
        this.$emit("update:content", val);
      }
    }
  }
};
</script>

<style>
</style>
