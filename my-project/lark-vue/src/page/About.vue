<template>
  <div class="p_about">
    <h1>about</h1>
    <router-link to="/">index</router-link>
    <router-link :to="{name:'home',params:{'username':'www'}}">to home</router-link>
    <p>{{$router.name}}333</p>
  </div>
</template>

<script>
export default {
  name: "About",
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

