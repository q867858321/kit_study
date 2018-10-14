<template>
  <header>
      <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: 'Vue.js'
    }
  }
}
</script>

<style scoped>
header {
  padding: 10px;
  background: #f00;
}
h1 {
  font-size: 12px;
}
</style>
