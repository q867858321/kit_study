<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/home/33">路由1</router-link>||
        <router-link to="/home/33/router1">路由2</router-link>||
        <router-link to="/ff">父子</router-link>||
        <router-link to="/music">music</router-link>||
      </li>
    </ul>
    <router-view class="view main"></router-view>
    <!-- <Fauther></Fauther>
    <vuexModeles></vuexModeles>
    <bookDetail></bookDetail>
    <book></book>-->
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
