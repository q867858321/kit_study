<template>
    <div class="m_show">
        <draggable v-model="colors" @update="datadragEnd" :options = "{animation:500}">
            <transition-group>
                <div v-for="item in colors" :key="item.text" class = "drag-item">
                    <sFlippage :dFlippage="dFlippage" v-if="item.subassemblyId==1"></sFlippage>
                </div>
                
            </transition-group>
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
import sFlippage from '@/baseComponents/sFlippage.vue';
export default {
    name:"mShow",
    components: {
        　　draggable,sFlippage
    },
    props:['dFlippage'],
    data:function(){
        return {
            msg:"这是测试组件",
            colors: [
                {
                    text: "Aquamarine",
                    contents:{
                        image:{
                            originalUrl:"http://image.appskyx.com/res/10001/image/icon/微信图片_20181212152309.png",
                            originalFormat:null,
                            originalSize:0
                        }
                    },
                    orderNum:2,
                    attributes:{
                        indicator:1,
                        statistic:1,
                        color:'#ffffff',
                        action:'game',
                        source:'1',
                        speed:100,
                        height:0
                    },
                    id:30,
                    subassemblyId:1
                }, 
                {
                    text: "Hotpink",
                }, 
                {
                    text: "Gold",
                }
            ],
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
        //为了防止火狐浏览器拖拽的时候以新标签打开，此代码真实有效
        document.body.ondrop = function (event) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
}
</script>

<style lang="less" scoped>
.m_show{
    height:568px;
    overflow-x: hidden;
}

</style>
