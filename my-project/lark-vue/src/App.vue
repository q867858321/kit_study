<template>
  <div id="app">
    <m-head></m-head>
    <div class="content">
      <router-view :key="key" />
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
import mHead from "@/components/Header";
import mFooter from "@/components/Footer";
export default {
  name: "App",
  components: {
    mHead,
    mFooter
  },
  data() {
    return {
      msg: "你好vue",
      list: []
    };
  },
  computed:{
    key(){
      return this.$route.path+Math.random();
    }
  },
  methods: {
    run1: function() {
      console.log(this);
      console.log(this.$store.state);
      alert("这是一个方法");
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  font-family: "Avenir", Helvetica, Arial, sans-serif, "Microsoft YaHei";
  background: #f5f6f7;
  color: #4f4f4f;
}
body{
}
ul,
li {
  list-style: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
img {
  border: none;
}
h1 {
  font-size: 1.25rem;
}
a {
  text-decoration: none;
  color: #00896c;
}
a.active {
  color: #06913b;
}
a:hover {
  color: #42b983;
}
.clear:after {
  content: "";
  display: block;
  clear: both;
}
.clear {
  zoom: 1;
}
.shadow {
  box-shadow: 0 2px 2px rgba(10, 16, 20, 0.1), 0 0 2px rgba(10, 16, 20, 0.12);
}
.shadow:hover {
  box-shadow: 0 8px 16px rgba(10, 16, 20, 0.1),
    0 0 16px rgba(59, 105, 136, 0.12);
}

.hid {
  display: none;
}
.hid_i {
  display: none !important;
}

.content {
  margin: 1rem auto 2.5rem auto;
}
</style>
