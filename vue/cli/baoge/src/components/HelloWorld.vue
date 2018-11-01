<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>dd</p>
    <p>{{count}}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      count: 0,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mutations: {
    increment: function () {
      console.log(2)
    }
    // decrement: state => state.count--
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
