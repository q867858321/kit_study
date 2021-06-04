<template>
  <section class="section">
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </section>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  setup() {
    const options = reactive([
      {
        value: "选项1",
        label: "黄金糕",
      },
      {
        value: "选项2",
        label: "双皮奶",
      },
      {
        value: "选项3",
        label: "蚵仔煎",
      },
      {
        value: "选项4",
        label: "龙须面",
      },
      {
        value: "选项5",
        label: "北京烤鸭",
      },
    ]);
    const value = ref("");
    return {
      options,
      value,
    };
  },
});
</script>
<style lang="less" scoped>
.section {
}
</style>