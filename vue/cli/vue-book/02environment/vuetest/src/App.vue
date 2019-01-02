<template>
  <div id="ap2p">
    <!-- <img src="./assets/logo.png"> -->
    <router-link to="/aa">ShuangXiangShuJu</router-link>
    <router-link to="/ab">Fangfa</router-link>
    <router-link to="/cc">Shuangxiang</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
