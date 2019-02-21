<template>
  <div class="p_login">
    用户名：
    <input v-model:value="username">
    {{username|capitalize}}
    <br>密码
    <input v-model:value="password">
    <br>
    <input type="button" value="登录" v-on:click="login">
    <!-- on 绑定多个事件 -->
    <span v-on="{click:login,mouseleave:MouseLeave}">登录</span>
    <p>331</p>
  </div>
</template>

<script>
import storage from "@/api/storage";
export default {
  name: "index",
  components: {},
  data() {
    return {
      username: "111",
      password: "222"
    };
  },
  filters: {
    //过滤器
    capitalize: function(value) {
      if (!value) {
        return "";
      }
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("%c beforeRouteEnter", "color:blue");
    console.log(to, from);
    next();
  },
  methods: {
    login: function() {
      console.log("login", this);
      storage.setExpireStore("token", "333");
      if (true) {
        this.$router.push("/index"); //利用js跳转
      }
    },
    MouseLeave: function() {
      //   alert(33);
    }
  }
};
</script>

<style scoped>
</style>
