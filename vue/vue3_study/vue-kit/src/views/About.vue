<template>
  <div class="about">
    <h1>This is an about page1</h1>
  </div>
</template>
<script>
import { defineComponent, reactive, toRaw } from "vue";
import { useRoute, useRouter, useLink } from "vue-router";
export default defineComponent({
  setup() {
    const a = { a: 3 };
    const route = useRoute()["__v_raw"];
    const router = toRaw(useRouter());
    const link = toRaw(useLink());
    console.log("route", route);
    console.log("router", router);
    console.log("link", link);
    const query = route.query;
    console.log("query", query);
  }
});
</script>
