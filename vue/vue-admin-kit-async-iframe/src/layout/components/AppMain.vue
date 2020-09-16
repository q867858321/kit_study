<template>
  <section class="app-main">
    <div v-for="(item,index) in pageList" :key="index">
      <transition name="fade-transform" mode="out-in">
        <iframe
          v-if="curPageIndex==index"
          class="ifa"
          scrolling="auto"
          :src="item.url"
          frameborder="0"
        ></iframe>
      </transition>
    </div>
    <div v-if="pageList.length==0">没内容</div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AppMain",
  data() {
    return {};
  },
  computed: {
    pageList() {
      return this.$store.getters.pageList;
    },
    curPageIndex() {
      return this.$store.getters.curPageIndex;
    },
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header + .app-main {
  padding-top: 80px;
}
.ifa {
  width: 100%;
  height: calc(100vh - 80px);
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
