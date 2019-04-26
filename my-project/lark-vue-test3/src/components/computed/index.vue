<template>
  <div>
    {{username}},{{name}}，
    <button @click="change">改变username</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "3"
    };
  },
  computed: {
    username: {
      get() {
        return this.name;
      },
      set(val) {
        //关联 data
        this.name = val + "1";
      }
    }
  },
  methods: {
    change() {
      this.username = "li";
    }
  }
};
</script>

<style>
</style>
