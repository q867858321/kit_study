<template>
  <div class="app-wrapper" :class="{'sidebar-hide':sidebarHide}">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <div class="header">
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
  height: 100%;
  width: 100%;
  display: flex;
  // 主体区域
  .main-container {
    height: 100%;
    flex: 1;
    transition: margin-left 0.28s;
  } // 侧边栏
  .sidebar-container {
    transition: width 0.28s;
    height: 100%;
    overflow: hidden;
    width: 200px;
    a {
      display: inline-block;
      width: 100%;
    }

    .el-menu {
      border: none;
      width: 100%;
    }
  }
}
</style>
