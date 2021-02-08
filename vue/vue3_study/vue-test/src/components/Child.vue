<template>
  child组件
  <p>msg2,{{msg}},{{msg2}}</p>
  <button @click='emitxxx'>分发事件</button>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    msg: Number,
  },
  setup(props, { attrs, slots, emit }) {
    let msg2 = ref(5);
    const emitxxx = () => {
      emit("xxx", 1);
    };
    const alertd = () => {
      alert(1);
      alert1();
    };
    const alert1 = () => {
      alert(2);
    };
    return {
      msg2,
      emitxxx,
      alertd,
    };
  },
});
</script>

<style lang="less" scoped>
</style>