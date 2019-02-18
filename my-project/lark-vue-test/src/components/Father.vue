<template>
  <div id="p-father" @click="show($event,10)">father
    <router-link to="/">to helo</router-link>
    <Son :name="name">你好</Son>
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  name: "father",
  components: { Son },
  data() {
    return {
      name: "father"
    };
  },
  methods: {
    show: function(event, name) {
      console.log(event);
      console.log(name);
    }
  }
};
</script>

<style>
</style>
