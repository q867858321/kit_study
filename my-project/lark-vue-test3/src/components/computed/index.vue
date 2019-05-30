<template>
  <div>
    {{username}},{{name}}，
    <p>{{age}},{{computedAge()}}</p>
    <input v-model="age" />
    <button @click="change">改变username</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "3",
      age: 12
    };
  },
  computed: {
    username: {
      get() {
        return this.name;
      },
      set(val) {
        this.name = val + "1";
      }
    }
  },
  methods: {
    change() {
      this.username = "li";
    },
    computedAge() {
      return this.age;
    }
  }
};
</script>

<style>
</style>
