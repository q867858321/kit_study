<template>
  <div class="app-wrapper" :class="{'sidebar-hide':sidebarHide}">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar @isSidebarHide="isSidebarHide" />
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import AppMain from "@/views/layout/components/AppMain"; //页面布局的右侧区域
import sidebar from "@/views/layout/components/sidebar"; //页面布局的左侧菜单
import Navbar from "@/views/layout/components/Navbar.vue";
export default {
  name: "layout",
  data() {
    return {
      fixedHeader: true,
      sidebarHide: false,
    };
  },
  components: {
    sidebar,
    AppMain,
    Navbar,
  },
  methods: {
    isSidebarHide() {
      this.sidebarHide = !this.sidebarHide;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  &.sidebar-hide {
    .sidebar-container {
      width: 50px;
    }
    .main-container {
      margin-left: 50px;
    }
  }
  .main-container {
    .fixed-header {
      position: fixed;
    }
  }
}
</style>
