<template>
  <div id="app">
    <m-head></m-head>
    <div class="content">
      <router-view />
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
import mHead from '@/components/Header';
import mFooter from '@/components/Footer';
export default {
  name: 'App',
  components: {
    mHead,mFooter
  },
  data() {
    return {
      msg: '你好vue',
      list: []
    }
  },
  methods: {
    run1: function () {
      console.log(this);
      console.log(this.$store.state)
      alert('这是一个方法');
    },
  }
}
</script>

<style>
*{margin:0;padding:0;}
html{font-family: "Avenir", Helvetica, Arial, sans-serif,'Microsoft YaHei';background: #f5f6f7;color:#4f4f4f;}
ul,li{list-style: none;}
table {border-collapse:collapse;border-spacing:0; }
img { border:none; }
a{color:#009999;text-decoration: none;}
a:hover{color:00896C;}
.clear:after {content: ""; display: block; clear:both;}
.clear{zoom:1;}
.shadow{box-shadow: 0 2px 2px rgba(10,16,20,.1),0 0 2px rgba(10,16,20,.12);}
.shadow:hover{box-shadow: 0 8px 16px rgba(10,16,20,.1),0 0 16px rgba(59, 105, 136, 0.12);}

.hid{display: none;}
.hid_i{display: none !important;}

.content{margin-top:8.5rem;}
</style>
