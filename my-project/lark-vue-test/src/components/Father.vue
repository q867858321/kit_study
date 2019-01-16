<template>
    <div id="father">
        <h1>父组件部分</h1>
        <button @click="showChildDate">父按钮</button>
        {{toCity}}
        <child ref="child" v-bind:message="parentMsg" v-on:listenToChildEvent="showMsgFromChild"></child>
    </div>
</template>

<script>
import child from '@/components/Child';
export default {
    name:'Father',
    data(){
        return {
            parentMsg:"hello,child",
            toCity:"北京"
        }
    },
    components:{
        child
    },
    methods:{
        showMsgFromChild:function(data){
            this.toCity=data.cityname;
            console.log(data);
        },
        showChildDate:function(){
            console.log(this);
            console.log("this.$ref",this.$refs.child);
        }
    }
}
</script>

<style>

</style>
