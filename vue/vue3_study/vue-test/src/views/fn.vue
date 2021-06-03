<template>
  <section class="section">父组件 <button @click="fn.a">fn</button></section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {},
  setup() {
    const fn = {
      a: () => {
        console.log("this", this);
        fn.b();
        // this.b();
      },
      b: () => {
        alert(3);
      },
    };
    return {
      fn,
    };
  },
});
</script>
<style lang="less" scoped>
.section {
}
</style>
