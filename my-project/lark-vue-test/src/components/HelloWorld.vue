<template>
  <div class="hello" @click="show">22</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    show:function(){
      console.log("helloworld",this);
      console.log("this.$store",this.$store);
      
      console.log("helloworld.data",this.$store.state);
      console.log(this.$store.commit('hide'));  //调用
      console.log("this.$store",this.$store);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
