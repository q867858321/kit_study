<template>
  <div >
      <section class="joinState">
           <div class="joinStateHead">
                <span class="h3">全国改性料通讯录</span>
                
                <span class="joinStatus" @click="invokePushItems(item)">加入收藏列 利用action</span>
                <span class="joinStatus" @click="add(item)">加入收藏列 利用 mutations</span>
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
    console.log("bookDetail", this);
  },
  methods: {
    //...mapActions('collection',['invokePushItems']),
    add: function(item) {
      this.$store.commit("collection/pushCollects", item);
    }
  }
};
</script>

<style>
</style>
