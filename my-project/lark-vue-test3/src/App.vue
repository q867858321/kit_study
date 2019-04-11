<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view class="view main"></router-view>
    <!-- <Fauther></Fauther>
    <vuexModeles></vuexModeles>
    <bookDetail></bookDetail>
    <book></book> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Fauther from "./components/Fauther.vue";
import vuexModeles from "./components/vuexModeles.vue";

import bookDetail from "./components/bookDetail.vue";
import book from "./components/book.vue";
export default {
  name: "app",
  components: {
    HelloWorld,
    Fauther,
    vuexModeles,
    bookDetail,
    book
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
