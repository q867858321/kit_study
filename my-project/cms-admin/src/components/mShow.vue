<template>
    <div class="m_show" @click="showData()">
        <draggable element="div" v-model="list"  @update="datadragEnd" :options = "{animation:500}">
            <div v-for="(item ,index) in list" :key="index" class="item" :class="isactive==index?'active':''" @click="choose(index,item,item.subassemblyId)">
                <sFlippage :scroll='item' :num='index' v-if="item.subassemblyId==1"></sFlippage>
                <sGallery v-if="item.subassemblyId==2"></sGallery>
                <sGallery v-if="item.subassemblyId==3"></sGallery>
                <div class="mask">
                    <el-button type="danger" icon="el-icon-delete" circle size="mini" v-on:click.stop="deleteItem(index)"></el-button>
                </div>
            </div>
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
import sFlippage from '@/baseComponents/sFlippage.vue';
import sGallery from '@/baseComponents/sGallery.vue';
import mTest from '@/components/mTest.vue';
export default {
    name:"mShow",
    components: {
        　　draggable,sFlippage,sGallery,mTest
    },
    props:[],
    data:function(){
        return {
            msg:"这是测试组件",
            list:this.$store.state.pageInfo||[],    //请求的数据
            chooseData:[],  //更改后的数据
            startArr:[],
            endArr:[],
            count:0,
            isactive : 0   //激活的下标
        }
    },
    computed:{
        changeMemberTab(){
            return this.$store.state.pageInfo;
        },
    },
    watch:{
        changeMemberTab:function(newval,oldval){
            this.list=newval;
        },
    },
     mounted () {
        // console.log("mShow",this);
        
    },
     methods:{
        getdata (evt) {
            console.log(evt.draggedContext.element.text)
        },
        choose(index,item,type){ //重要方法
            this.isactive=index;
            this.$store.commit('chooseTemement',{index,item,type});
        },
        deleteItem(index){
            this.list.splice(index,1);
        },
        datadragEnd (evt) {
            evt.preventDefault();
            console.log('拖动前的索引 :' + evt.oldIndex)
            console.log('拖动后的索引 :' + evt.newIndex)
            console.log(this.colors);
        },
        showData(){
            // console.log("mShow",this);
        }
    }
   
}
</script>

<style lang="sass" scoped>
.m_show{
    height:568px;
    .item{
        position: relative;
        min-height:100px;
        .mask{
            background: rgba(0,0,0,0.5);
            position: absolute;
            width:100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 100;
            .el-button{
                float:right;
            }
        }
        &.active{
            .mask{
                display: none;
            }
        }
    }
    
}

</style>
