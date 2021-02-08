<template>
  <section class="section">
    <h2>shallowReactive</h2>
    <h3>m1:{{m1}}</h3>
    <h3>m2:{{m2}}</h3>
    <h3>m3:{{m3}}</h3>
    <h3>m4:{{m4}}</h3>
    <button @click="update">更新数据</button>
  </section>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  shallowReactive,
  shallowRef,
} from "vue";
export default defineComponent({
  setup() {
    const m1 = reactive({
      name: "名人",
      age: 20,
      car: {
        name: "奔驰",
        color: "red",
      },
    });
    const m2 = shallowReactive({
      name: "名人",
      age: 20,
      car: {
        name: "奔驰",
        color: "red",
      },
    });
    const m3 = ref({
      name: "名人",
      age: 20,
      car: {
        name: "奔驰",
        color: "red",
      },
    });
    const m4 = shallowRef({
      name: "名人",
      age: 20,
      car: {
        name: "奔驰",
        color: "red",
      },
    });
    const update = () => {
      console.log("2");
      m4.value.name = "22";
    };
    return {
      m1,
      m2,
      m3,
      m4,
      update,
    };
  },
});
</script>
<style lang="less" scoped>
.section {
}
</style>