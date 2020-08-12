<template>
  <el-menu
    mode="vertical"
    unique-opened
    :default-active="$route.path"
    background-color="#304156"
    text-color="#fff"
    :collapse="isCollapse"
    active-text-color="#409EFF"
    @click="show"
  >
    <sidebar-item :routes="routes"></sidebar-item>
  </el-menu>
</template>

<script>
import sidebarItem from "./sidebarItem";

export default {
  components: { sidebarItem },
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    routes() {
      return global.antRouter;
    },
  },
  methods: {
    show() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>
