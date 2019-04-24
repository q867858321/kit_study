<template>
    <div>
        <detail>
            {{name}}
            <!-- <p>你好</p>
            <p>我好</p> -->
        </detail>
    </div>
</template>

<script>
import detail from "./detail";
export default {
  components: {
    detail
  },
  data() {
    return {
      name: "li"
    };
  }
};
</script>

<style>
</style>
