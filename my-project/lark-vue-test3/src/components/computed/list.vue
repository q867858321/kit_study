<template>
    <div>
        父：{{list}}
        <detail :list="list"></detail>
    </div>

</template>

<script>
import detail from "./detail";
export default {
  name: "computed",
  components: {
    detail
  },
  data() {
    return {
      list: [{ name: "li", age: 13 }, { name: "wang", age: 11 }]
    };
  }
};
</script>

<style>
</style>
