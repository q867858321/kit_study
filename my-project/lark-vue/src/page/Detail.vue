<template>
  <div class="p_detail">
    <p @click="run1()">详情页</p>
    <p @click="getDate()">请求数据</p>
    <p :style='{color:color}'>{{this.$store.state.count}}</p>
    <ul>
        <li v-for="(item, index) in this.$store.state.list">
            {{ index }} - {{ item.title }}
        </li>
    </ul>
  </div>
</template>

<script>
import http from '@/store/services'
export default {
  name: 'App',
  components: {
   
  },
  data() {
    return {
      msg: '你好vue',
      color:"#f00",
      list: []
    }
  },
  mounted:function(){
    this.getData();
  },
  methods: {
    run1: function () {
      this.$store.commit('incCount',"#00f");
      this.color=this.$store.state.color;
      // this.$store.dispatch('incMutationsCount'); 
      console.log(this.$store);
      // console.log(this.$route.query);
    },
    getData:function(){
      http.getData();
    }
  }
}
</script>

<style>

</style>
