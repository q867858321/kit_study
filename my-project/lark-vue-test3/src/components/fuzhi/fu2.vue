<template>
    <div>
        父2
        name:{{userName}}
        <zhi2 v-bind:userName.sync="userName"></zhi2>
    </div>
</template>

<script>
import zhi2 from "./zhi2.vue";
export default {
  components: { zhi2 },
  data() {
    return {
      userName: "li"
    };
  }
};
</script>

<style>
</style>
