<template>
  <section class="section">
    <h2>ref获取元素</h2>
    <input type="text" ref="inputRef">
  </section>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  setup() {
    const inputRef = ref<HTMLElement | null>(null);
    onMounted(() => {
      inputRef.value && inputRef.value.focus();
    });
    return { inputRef };
  },
});
</script>
<style lang="less" scoped>
.section {
}
</style>