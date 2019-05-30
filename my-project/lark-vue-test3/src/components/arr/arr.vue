<template>
    <div class="arr">
        user:{{user}}
        <button @click="change">change</button>
    </div>
</template>

<script>
export default {
  name: "arr",
  data() {
    return {
      user: [{ name: "li", age: "12" }, { name: "wang", age: 13 }]
    };
  },
  methods: {
    change() {
      //this.user[0] = { name: "liu", age: 11 };
      // this.user.splice(1, 0);
      let age = this.user[0].age;
      this.user[0].age = ++age;
      console.log(this.user);
    }
  }
};
</script>

<style>
</style>
