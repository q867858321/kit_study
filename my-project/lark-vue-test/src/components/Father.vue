<template>
  <div id="p-father" @click="show($event,10)">father</div>
</template>

<script>
export default {
  name: "father",
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
