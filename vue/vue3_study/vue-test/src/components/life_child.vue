<template>
  <section class="section">
    <h2>life 子组件</h2>
    <div @click="update">{{msg}}</div>
  </section>
</template>
<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  ref,
} from "vue";
export default defineComponent({
  setup() {
    const msg = ref("abc");
    const update = () => {
      msg.value += "a";
    };
    onBeforeMount(() => {
      console.log("3.x onBeforeMount");
    });
    onMounted(() => {
      console.log("3.x onMounted");
    });
    onBeforeUpdate(() => {
      console.log("3.x onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("3.x onUpdated");
    });
    onBeforeMount(() => {
      console.log("3.x onBeforeMount");
    });
    onMounted(() => {
      console.log("3.x onMounted");
    });
    return { msg, update };
  },
  //   beforeCreate() {
  //     console.log("2x beforeCreate");
  //   },
  //   created() {
  //     console.log("2x created");
  //   },
  //   beforeMount() {
  //     console.log("2x beforeMount");
  //   },
  //   mounted() {
  //     console.log("2x mounted");
  //   },
  //   beforeUpdate() {
  //     console.log("2x beforeUpdate");
  //   },
  //   updated() {
  //     console.log("2x updated");
  //   },
  //   beforeUnmount() {
  //     console.log("2x beforeUnmount");
  //   },
  //   unmounted() {
  //     console.log("2x unmounted");
  //   },
});
</script>
<style lang="less" scoped>
.section {
}
</style>