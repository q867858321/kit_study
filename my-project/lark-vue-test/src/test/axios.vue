<template>
    <div>3</div>
</template>

<script>
//import GLOBAL from '@/api/global_variable.js'; //局部引用js
export default {
    name:'axios',
    data(){
        return {}
    },
    mounted:function(){
        this.axios.get(this.GLOBAL.baseURL+'/appapi.php?a=getPortalList&catid=20&page=1').then((response)=>{
               console.log('response',response.data);
           }).catch((response)=>{
               console.log(response);
           })
        console.log('axios',this);
        $.ajax({
            url:"http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1",
            type:"GET",
            dataType:"json",
            success:function(data){
                console.log("data",data);
            }
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
