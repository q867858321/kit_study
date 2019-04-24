<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/booklist">book vuex</router-link>||
        <router-link to="/book">book</router-link>||
        <router-link to="/ff">父子</router-link>||
        <router-link to="/music">music</router-link>||
      </li>
    </ul>
    <router-view class="view main"></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Fauther from "./components/Fauther.vue";
import vuexModeles from "./components/vuexModeles.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Fauther,
    vuexModeles
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
