<template>
  <div>
    <div>
      <a @click="invokePushItems(item)">加入收藏列 利用action</a>
      &nbsp;&nbsp;
      <a @click="add(item)">加入收藏列 利用 mutations</a>
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
    console.log("bookDetail", this);
  },
  methods: {
    // ...mapActions("collection", ["invokePushItems"]),
    add: function(item) {
      this.$store.commit("collection/pushCollects", item);
    }
  }
};
</script>

<style>
</style>
