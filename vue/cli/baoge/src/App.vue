<template>
  <div id="app">
    <input type="text" v-model="inputs" />
    {{inputs}}
    <HelloWorld v-bind:msg="inputs" @say='onSay'/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    onSay: function (ev) {
      console.log(ev)
    }
  },
  data () {
    return {
      inputs: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
