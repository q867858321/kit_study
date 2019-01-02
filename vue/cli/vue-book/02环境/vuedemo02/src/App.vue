<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <p>{{obj.name}}</p>
    <ul>
      <li v-for="item in list">
        {{item}}
      </li>
    </ul>
    <ul>
      <li v-for="item in list1">
        {{item.title}}
      </li>
    </ul>
     你好vue
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      obj: {
        name: "张三"
      },
      list: ["101", "102", "103"],
      list1: [{ title: "1111" }, { title: "222" }, { title: "333" }],
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
