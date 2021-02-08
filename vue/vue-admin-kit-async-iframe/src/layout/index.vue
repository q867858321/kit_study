<template>
  <div :class="classObj" class="app-wrapper">
    <sidebar2 class="sidebar-container" />
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
        <tagsView2 v-if="needTagsView" />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar2, AppMain, TagsView2 } from "./components";

export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar2,
    TagsView2,
    AppMain,
  },
  data() {
    return {
      needTagsView: true,
      fixedHeader: true,
    };
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar,
        openSidebar: this.sidebar,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
