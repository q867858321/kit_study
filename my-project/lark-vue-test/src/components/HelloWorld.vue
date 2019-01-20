<template>
  <div class="hello" @click="show">22</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    show: function() {
      console.log("helloworld", this);
      console.log("this.$store", this.$store);

      console.log("helloworld.data", this.$store.state);
      console.log(this.$store.commit("hide")); //调用
      console.log("this.$store", this.$store);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
