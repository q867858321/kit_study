<template>
    <div id="cate" @click="getDate()">
        334
        <img ref="fileimg" src="../assets/logo.png">
    </div>
</template>

<script>
export default {
    name:"Cate",
    methods:{
       getDate:function(){
           console.log("cate",this);
           console.log("imgurl",this.$refs.fileimg.src);
           this.axios.get('../../static/data/cart.json').then((response)=>{
               console.log('response',response.data);
           }).catch((response)=>{
               console.log(response);
           })
       } 
    } 
}
</script>

<style scoped>

</style>
