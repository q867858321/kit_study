<template>
    <div class="p_index">
        首页
        <p>{{now}}</p>
        <router-link to="/login">登录</router-link>
       <For></For>
        <Form></Form>
        <Slider></Slider>
    </div>
</template>

<script>
import For from '@/components/For.vue'
import Form from '@/components/Form.vue'
import Slider from '@/components/Slider.vue'
export default {
    name:"index",
    components:{For,Form,Slider},
    data(){
        return{
            
        }
    },
    computed:{
        now:function(){
            return Date.now();
        }
    },
    mounted:function(){
        console.log("Index",this);
        console.log("config",this.config);
        // $('#app').on("click",'p',function(){
        //     alert(3);
        // })
    }
}
</script>

<style scoped>

</style>

