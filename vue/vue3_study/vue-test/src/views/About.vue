<template>
  <div class="about">
    <h1 ref="aaa">父组件</h1>
    <Child :ref="child" :msg="msg" @xxx="xxx"></Child>
  </div>
</template>
<script lang="ts">
import { defineComponent, nextTick, reactive, Ref, ref } from "vue";
import Child from "@/components/Child.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Child,
  },
  setup() {
    let msg = ref(1);
    let m2 = reactive({
      name: "小明",
      wife: {
        name: "小红",
      },
    });

    let refs: Ref<any | null> = ref(null);
    const aaa = (el: any) => {
      refs = el;
    };
    nextTick(() => {
      console.log("ref", refs);
      // refs.alertd();
    });

    function xxx(txt: number) {
      console.log("txt", txt);
      msg.value += txt;
    }
    return {
      msg,
      m2,
      xxx,
      aaa,
    };
  },
});
</script>
