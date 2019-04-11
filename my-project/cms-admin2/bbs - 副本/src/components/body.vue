<template>
  <div  class="main-body">
    <router-view ></router-view>
    <router-view name="mainLeft"></router-view>
    <router-view name="mainRight"></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-body {
  /* position: absolute; */
  top: 64px;
  bottom: 24px;
  width: 100%;
  padding: 0 24px;
}
</style>
