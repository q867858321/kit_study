<template>
  <section>请求本地文件</section>
</template>

<script>
export default {
  mounted() {
    this.axios
      .get("/index.json")
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        if (err.response) {
          console.log(err.response);
        }
      });
  }
};
</script>

<style>
</style>
