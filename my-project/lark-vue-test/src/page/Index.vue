<template>
    <div class="p_index">
        首页
        <p>222</p>
        <router-link to="/login">登录</router-link>
    </div>
</template>

<script>
export default {
    name:"index",
    components:{},
    data(){
        return{}
    },
    mounted:function(){
        console.log("Index",this);
        console.log("config",this.config);
        $('#app').on("click",'p',function(){
            alert(3);
        })
    }
}
</script>

<style scoped>

</style>

