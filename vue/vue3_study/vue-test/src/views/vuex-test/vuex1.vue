<template>
  <section class="section">
      <h2>{{ $store.state }}33</h2>
      <button @click="plusCount">点击</button>
  </section>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
      const store = useStore(); // 使用useStore方法
      console.log("store",store)
      function plusCount(){
          store.commit('increaseCount')
          store.commit('changeName',"abc")
      }
    return {plusCount};
  },
});
</script>
<style lang="less" scoped>
.section {
}
</style>