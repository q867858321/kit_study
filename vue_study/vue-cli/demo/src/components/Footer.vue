<template>
  <div id="app">
    <h1>{{title}}</h1>
    <users></users>
    <router-view/>
  </div>
</template>

<script>
import Users from './components/Users';

export default {
  name: 'App',
  data () {
    return {
      title: '这是我的第一个脚手架'
    }
  },
  components: {
    Users
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
