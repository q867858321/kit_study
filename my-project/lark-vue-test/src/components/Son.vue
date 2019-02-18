<template>
  <div>
    子
    {{name}}
  </div>
</template>

<script>
export default {
  name: "son",
  props: { name },
  data() {
    return {};
  },
  mounted: function() {
    console.log("Son", this);
  }
};
</script>

<style>
</style>
