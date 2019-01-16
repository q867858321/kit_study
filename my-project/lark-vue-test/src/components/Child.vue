<template>
    <div>
        <h2>child子组件部分</h2>
        <p>{{message}}</p>
        <button v-on:click="sendMsgToParent('大连')">向父组件传值</button>
    </div>
</template>

<script>
export default {
    props:["message"],
    data(){
        return{
            "msg":"nihao"
        }
    },
    methods:{
        sendMsgToParent:function(val){
            let data={
                cityname:val
            }
           this.$emit("listenToChildEvent",data) ;  //像父级传值
           console.log(this);
        }
    }
}
</script>

<style>

</style>
