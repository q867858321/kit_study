<template>
  <div id="app">
    <img src="./assets/logo.png" @click="run1()">
    <router-view/>
  </div>
</template>

<script>
  export default {   
    name: 'App',  
    data () { 
      return {
        msg: '你好vue',
        list:[]      
      }
    },
    methods:{
      run1:function(){
        console.log(this);
        console.log(this.$store.state)
        alert('这是一个方法');
      },
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
