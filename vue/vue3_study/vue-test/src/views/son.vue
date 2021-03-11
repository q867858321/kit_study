<template>
  <section class="section">
        <h1>子 {{ conts }}</h1>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup(props,context) {
    console.log("props",props);
     console.log("context",context);
      const conts = ref(1);
      const sonFn=()=>{
          conts.value++
      }
    return {
        conts,
        sonFn
    };
  },
});
</script>
<style lang="less" scoped>
.section {
}
</style>