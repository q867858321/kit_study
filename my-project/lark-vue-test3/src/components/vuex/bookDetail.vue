<template>
  <div >
      <section class="joinState">
           <div class="joinStateHead">
                
                <span class="joinStatus" @click="invokePushItems(item)">利用action</span>
                &emsp;&emsp;
                <span class="joinStatus" @click="add(item)">利用 mutations</span>
           </div>
      </section>
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
