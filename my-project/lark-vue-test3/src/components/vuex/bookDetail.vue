<template>
  <div>
    <div class="btnbox">
      <span @click="invokePushItems(item)">加入收藏列 利用action</span>
      &nbsp;&nbsp;
      <span @click="add(item)">加入收藏列 利用 mutations</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {
    // conditionFilter
  },
  name: "bookDetail",
  data() {
    return {
      msg: "",
      item: {
        id: "01",
        productName: "苹果",
        price: "1.6元"
      }
    };
  },
  mounted() {
    this.$store.dispatch("footerStatus/hideFooter");
  },
  methods: {
    ...mapActions("collection", ["invokePushItems"]),
    add: function(item) {
      this.$store.commit("collection/pushCollects", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.btnbox {
  span {
    cursor: pointer;
  }
}
</style>
