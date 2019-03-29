<template>
    <div class="m_show">
        <div>aaaaaaaaaa</div>
        
        <!-- <draggable v-model="changeMemberTab" @update="datadragEnd" :options = "{animation:500}">
            <transition-group>
                <div v-for="(item ,index) in changeMemberTab" :key="index" class = "drag-item">
                    <sFlippage v-if="item.subassemblyId==1"></sFlippage>
                    <sGallery v-if="item.subassemblyId==2"></sGallery>
                </div>
                
            </transition-group>
        </draggable> -->
        <draggable element="div" v-model="list"  @update="datadragEnd" :options = "{animation:500}">
            <div v-for="(item ,index) in list" :key="index">
                {{item.name}}
                <sFlippage :fippage='item' :num='index' v-if="item.subassemblyId==1"></sFlippage>
                <sGallery v-if="item.subassemblyId==2"></sGallery>
                <sGallery v-if="item.subassemblyId==3"></sGallery>
            </div>
        </draggable>
        {{list}}
        <!-- <div v-for="(item ,index) in changeMemberTab" :key="index" class = "drag-item">
            <sFlippage v-if="item.subassemblyId==1"></sFlippage>
            <sGallery v-if="item.subassemblyId==2"></sGallery>
        </div> -->
    </div>
</template>

<script>
import draggable from 'vuedraggable';
import sFlippage from '@/baseComponents/sFlippage.vue';
import sGallery from '@/baseComponents/sGallery.vue';
export default {
    name:"mShow",
    components: {
        　　draggable,sFlippage,sGallery
    },
    props:[],
    computed:{
        changeMemberTab(){
            return this.$store.state.pageInfo;
        }
    },
    watch:{
        changeMemberTab:function(newval,oldval){
            console.log('newval',newval);
            console.log('oldval',oldval);
            this.list=newval;
        }
    },
    data:function(){
        return {
            msg:"这是测试组件",
            list:this.$store.state.pageInfo||[],
            startArr:[],
            endArr:[],
            count:0,
        }
    },
     methods:{
        getdata (evt) {
            console.log(evt.draggedContext.element.text)
        },
        datadragEnd (evt) {
            evt.preventDefault();
            console.log('拖动前的索引 :' + evt.oldIndex)
            console.log('拖动后的索引 :' + evt.newIndex)
            console.log(this.colors);
        }
    },
    mounted () {
        console.log("mShow",this);
        
    }
}
</script>

<style lang="less" scoped>
.m_show{
    height:568px;
    
}

</style>
