<template>
  <section class="sidebar2">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>门户网站</span>
        </template>

        <el-menu-item
          index="1-1"
          @click="openPage({id:1,name:'百度',url:'https://www.baidu.com/'})"
        >百度</el-menu-item>
        <el-menu-item
          index="1-2"
          @click="openPage({id:2,name:'新浪',url:'https://www.sina.com.cn'})"
        >新浪</el-menu-item>

        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Sidebar2",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sidebar"]),
    isCollapse() {
      return !this.sidebar;
    },
  },
  methods: {
    change() {
      this.isCollapse = !this.isCollapse;
    },
    openPage(item) {
      this.$store.dispatch("page/pushPageUrl", item);
    },
  },
};
</script>

<style>
</style>