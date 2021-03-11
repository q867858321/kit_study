<template>
  <section class="section">
      父组件 <button @click="handleClick">父button</button>
      <son ref="RefChilde"></son>
  </section>
</template>

<script lang="ts">
import son from './son.vue'
import { defineComponent,ref } from "vue";
export default defineComponent({
    components:{
        son
    },
  setup() {
      // const RefChilde = ref<any>(null);
       const RefChilde = ref();
      const handleClick=()=>{
        console.log("RefChilde",RefChilde)
          RefChilde.value.sonFn();
      }
    return {
        RefChilde,
        handleClick
    };
  },
});
</script>
<style lang="less" scoped>
.section {
}
</style>
