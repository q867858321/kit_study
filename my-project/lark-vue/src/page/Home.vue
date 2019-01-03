<template>
  <div class="p_home">
    <h1>首页</h1>
    <p>{{name}}</p>
    <router-link to="/">index</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      name: "sssss"
    }
  }
}
</script>

<style scoped>
p {
  background: #f00;
}
</style>

