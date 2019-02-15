<template>
    <div class="p_login">
        用户名：<input v-model:value='username' />{{this.username}} <br/>
        密码<input v-model:value='password' /> <br/>
        <input type="button" value="登录" @click="login" />
    </div>
</template>

<script>
import storage from '@/api/storage';
export default {
    name:"index",
    components:{},
    data(){
        return{
            username:"111",
            password:'222'
        }
    },
    methods:{
        login:function(){
            console.log("login",this);
            storage.setExpireStore('token','333');
        }
    }
}
</script>

<style scoped>

</style>
