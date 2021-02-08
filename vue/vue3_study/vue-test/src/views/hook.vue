<template>
  <section class="section">
    <h2>hook</h2>
    x{{x}},y{{y}}
    <h3 v-if="loading">正在加载中...</h3>
    <h3 v-else>错误信息：{{errorMsg}}</h3>
    <div>
      {{data}}
    </div>
  </section>
</template>
<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import userMousePosition from "../hooks/useMounsePosition";
import userRequest from "../hooks/useRequest";
export default defineComponent({
  setup() {
    const { x, y } = userMousePosition();
    interface IAddressData {
      id: number;
      address: string;
      distance: string;
    }
    interface IProductsData {
      id: string;
      title: string;
      price: string;
    }
    // const { loading, data, errorMsg } = userRequest<IAddressData>(
    //   "/data/address.json"
    // );
    const { loading, data, errorMsg } = userRequest<IProductsData[]>(
      "/data/products.json"
    );
    console.log("data", data);
    watch(data, () => {
      console.log("data3", data);
      if (data.value) {
        console.log("data3", data.value.length);
      }
    });
    return {
      x,
      y,
      loading,
      data,
      errorMsg,
    };
  },
});
</script>
<style lang="less" scoped>
.section {
}
</style>