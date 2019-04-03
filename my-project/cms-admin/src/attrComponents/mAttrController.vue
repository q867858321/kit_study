<template>
    <div class="m_attr_controller" @click="showaaa()">
        controller
        <div :if="pageChooseTemementData.type==1">
            <mFlippage :fData="pageChooseTemementData.data" :fIndex="pageChooseTemementData.index"></mFlippage>
        </div>
        
    </div>
</template>

<script>
import mFlippage from '@/attrComponents/mFlippage.vue';
export default {
    name:'mAttrController',
    components:{
        mFlippage
    },
    data:function(){
        let  temementData=this.$store.state.pageChooseTemementData; //初次渲染，极大概率为空
        return {
            pageChooseTemementData:{    //从store获取过来的数据临时存放地
                data:temementData.data||'',
                index:temementData.index||'',
                type:temementData.type||''
            }
        }
    },
    computed:{
        witchPageChooseTemementData(){
            this.pageChooseTemementData=this.$store.state.pageChooseTemementData;
            return this.$store.state.pageChooseTemementData;
        }
    },
    watch:{
        witchPageChooseTemementData:function(newval,oldval){
            this.pageChooseTemementData=newval;
        }
    },
    methods:{
        showaaa:function(){
            console.log("mAttrController",this.pageChooseTemementData);
        }
    }    
}
</script>

<style>

</style>
