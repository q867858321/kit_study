<template>
    <div class="m_details">
        
        <div class="title">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">项目</el-breadcrumb-item>
                <el-breadcrumb-item>sdf页</el-breadcrumb-item>
            </el-breadcrumb>
             <el-button type="primary" size="small">提交</el-button>
        </div>
        <div class="content">
            <div class="show">
                <mShow></mShow>   
            </div>
            <div class="main_content">
                <mAttrNav></mAttrNav>
                <mFlippage></mFlippage>
            </div>
        </div>
    </div>
</template>

<script>
import mShow from '@/components/mShow.vue';
import mAttrNav from '@/attrComponents/mAttrNav.vue';
import mFlippage from '@/attrComponents/mFlippage.vue';
import Http from '@/api/http.js';
export default {
    name:"m_details",
    components:{
        mShow,mAttrNav,mFlippage
    },
    data:function(){
        return {
           dFlippage:{
               dFlipSpped:2000
           }
        }
    },
    watch:{
        'value':function(newVal){
            console.log("newVal",newVal);
        }
    },
    mounted:function(){
        $(".m_details").on("click",function(){
        });
       // this.getPageInfo();
    },
    methods:{
        getPageInfo:function(){
            let _this=this;
            Http.get('/manage/page/assembly/1').then(function(data){
                console.log("data",data);
                if(data!=null && data !=''){
                    _this.$store.commit('updatePageInfo',data.data);
                }
                alert(3);
                console.log(_this.$store.state.pageInfo);
            });
        }
    }
}
</script>

<style lang="less" scoped>
     .m_details{
        position: absolute;
        left:200px;
        top:0;
        bottom:0;
        right: 0;
        width: 100%;
        padding:5px;
        .title{
            border-bottom: 1px solid #eee;
            padding: 10px 10px;
            .el-breadcrumb{
                float:left;
                width: 1100px;
            }
        }
        .content{
            position: relative;
            .show{
                position: absolute;
                width:322px;
                top: 0;
                left: 100px;
                border:1px solid #eee;
                background:#fff;
            }
            .main_content{
                margin: 5px 0 0 450px;
                min-width: 900px;
            }
        }
        
    } 
</style>
