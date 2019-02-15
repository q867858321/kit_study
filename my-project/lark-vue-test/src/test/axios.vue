<template>
    <div>3</div>
</template>

<script>
export default {
    name:'axios',
    data(){
        return {}
    },
    mounted:function(){
        this.axios.get('/api/appapi.php?a=getPortalList&catid=20&page=1').then((response)=>{
               console.log('response',response.data);
           }).catch((response)=>{
               console.log(response);
           })
    }
}
/**
1、安装
    npm install axios
2、在main.js中
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios,axios) //全局用axios
3、引用
 this.axios.get('').then((response)=>{

 }
 */
</script>

<style>

</style>
