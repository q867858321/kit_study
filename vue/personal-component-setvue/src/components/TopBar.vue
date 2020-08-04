<template>
  <v-toolbar>
    <!-- 这里v开头的使用的是第三方ui组件库 -->
    <v-toolbar-side-icon @click="toMainPage()"></v-toolbar-side-icon>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="openMyGithub()">
        <v-avatar size="42">
          <img src="https://avatars3.githubusercontent.com/u/10973821?s=460&v=4" />
        </v-avatar>
        <span style="margin-left:8px;">About me: ssthouse</span>
      </v-btn>
      <v-tooltip bottom>
        <v-btn slot="activator" flat :href="sourceCodeLink">
          <v-avatar size="42">
            <img src="../assets/logo.png" />
          </v-avatar>Source Code
        </v-btn>
        <span class="top-bar-tooltip">
          Welcome to fork & star
          <br />; )
        </span>
      </v-tooltip>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  // 接受被组件化后传递的自定义属性
  // 源代码连接
  props: ["sourceCodeLink", "title"],
  methods: {
    openMyGithub() {
      // 自定义头像被点击的时候创建a标签并且跳转
      const a = document.createElement("a");
      a.target = "_blank";
      a.href = "https://github.com/mufengsm";
      a.click();
    },
    toMainPage() {
      this.$emit("to-main-page");
    }
  }
};
</script>

<style scoped>
.top-bar-tooltip {
  font-size: 18px;
}

a {
  color: black;
}
</style>

