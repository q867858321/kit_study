<template>
    <div id="app1">
        <!-- 绑定属性 -->
        <h2 v-bind:title="msg">{{msg}}</h2>
        <img v-bind:src="url" alt="">

        <div v-html="p"></div>
        <div v-bind:class="{'red':flag, 'blue':!flag}"> sss</div>
    </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      msg: "nihao vue",
      url:
        "https://pan.baidu.com/box-static/disk-theme/theme/white/img/logo.png?t=1470151327639",
      p: "<p>qq</p>",
      flag: true
    };
  }
};
</script>

