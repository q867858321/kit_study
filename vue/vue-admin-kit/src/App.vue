<template>
  <div id="app">
    <my-btn btnStyle="btn-success" @click="btnClick(1)">Button</my-btn>
    <TopBar btnStyle="btn-danger" @click="btnClick(2)">Button2</TopBar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    btnClick(e) {
      alert(e);
    }
  }
};
</script>
