<template>
    <div class="m_flippage">
        <h3>属性</h3>
        <div class="arrt_box">
            <div class="item">
                <p class="title">默认行为</p>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="item">
                <p class="title">幻灯片速度</p>
                <el-input-number v-model="speed" @change="speedChange" :min="100" :step="100" :max="1000" label="幻灯片速度"></el-input-number>
            </div>
            <div class="item">
                <p class="title">是否显示页小亮点</p>
                <el-radio v-model="indicator" label="1">显示</el-radio>
                <el-radio v-model="indicator" label="0">不显示</el-radio>
            </div>
            <div class="item">
                <p class="title">是否显示分割线</p>
                <el-radio v-model="occupy" label="1">显示</el-radio>
                <el-radio v-model="occupy" label="0">不显示</el-radio>
            </div>
            <div class="item">
                <p class="title">分割线高</p>
                <el-input-number v-model="height" @change="heightChange" :min="0" :step="1" :max="100" label="分割线高"></el-input-number>
            </div>
            <div class="item">
                <p class="title">分割线颜色</p>
                <el-color-picker v-model="color"></el-color-picker>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"mFlippage",
    data:function(){
        return {
             options: [{
                value: 'game',
                label: '游戏'
                }, {
                value: 'detail',
                label: '详情页'
                },{
                   value: 'page',
                   label: '专题页' 
                }],
            value: '',
            speed: 100,
            indicator:'1',
            occupy:'1',
            height:0,
            color: '#FFFFFF'
        }
    },
    methods:{
        speedChange:function(){
            // this.$emit("speed", this.speed);

        },
        heightChange:function(){
            console.log(222);
        }
    }
}
</script>

<style lang="less" scoped>
    .m_flippage{
        margin-top: 20px;
        .arrt_box{
            .item{
                margin:10px 0;
                padding:8px 0;
                border-bottom:1px solid #eee;
                .title{
                    font-size: 13px;
                    margin-bottom:5px;
                }
            }
        }
    }
</style>
