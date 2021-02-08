<template>
  <section class="section">
    <h1>父组件</h1>
    <button @click="isShow=!isShow">切换显示</button>
    <Child v-if="isShow"></Child>
  </section>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Child from "../components/life_child.vue";
export default defineComponent({
  components: { Child },
  setup() {
    const isShow = ref(true);
    return { isShow };
  },
});
</script>
<style lang="less" scoped>
.section {
}
</style>