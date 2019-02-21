<template>
  <div id="p-father" @click="show($event,10)">father
    <router-link to="/">to helo</router-link>
    <Son ref="son" :name="name" @fatherClick="fatherMethod($event)">你好</Son>
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
  mounted() {
    console.log("Father", this);
    console.log("ref", this.$refs);
  },
  methods: {
    show: function(event, name) {
      console.log(event);
      console.log(name);
    },
    fatherMethod: function(event) {
      console.log("aaa", event);
    }
  }
};
</script>

<style>
</style>
