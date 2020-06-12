<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      let state2 = { a: 31 };
      sessionStorage.setItem("store2", JSON.stringify(state2));
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
      return confirm("确定退出吗");
    });
  },
  mounted() {
    console.log("vue", this.$store.state);
  }
};
</script>
