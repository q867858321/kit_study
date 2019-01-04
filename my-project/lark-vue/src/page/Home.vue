<template>
  <div class="p_home">
    <h1>首页</h1>
    <p>{{name}}</p>
    <m-nav></m-nav>
  </div>
</template>

<script>
import mNav from '@/components/Nav'
export default {
  name: "Home",
  components: {
    mNav
  },
  data() {
    return {
      name: "sssss"
    }
  }
}
</script>

<style scoped>
p {
  background: #f00;
}
</style>

