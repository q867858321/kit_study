<template>
  <div>
    {{username}}
    <button @click="change()">子button</button>
  </div>
</template>

<script>
export default {
  name: "child",
  props: ["username"],
  // 传入的是一个对象 {name：['']}，对象是可以修改的
  methods: {
    change() {
      this.username.list = [{ name: "lii", age: 12 }];
    }
  }
};
</script>

<style>
</style>
