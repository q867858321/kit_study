<template>
  <div class="p_index">首页
    <p>{{now}}</p>
    <router-link to="/login">登录</router-link>
    <router-link :to="'/home/'+3">home</router-link>
    <router-link :to="{name:'home',params:{id:2}}">home2</router-link>
    <br>
    <router-link :to="'/school?id='+3">school</router-link>
    <router-link :to="{path:'/school',query:{id:'2'}}">school2</router-link>
    <For></For>
    <Form></Form>
    <Slider></Slider>
  </div>
</template>

<script>
import For from "@/components/For.vue";
import Form from "@/components/Form.vue";
import Slider from "@/components/Slider.vue";
export default {
  name: "index",
  components: { For, Form, Slider },
  data() {
    return {};
  },
  computed: {
    now: function() {
      return Date.now();
    }
  },
  mounted: function() {
    console.log("Index", this);
    console.log("config", this.config);
    // $('#app').on("click",'p',function(){
    //     alert(3);
    // })
  }
};
</script>

<style scoped>
</style>

