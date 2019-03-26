<template>
    <div class="m_attrNav" @click="get()">
        <h3>组件</h3>
        <el-button  size="small" type="primary" plain>Flippage(3)<i class="el-icon-plus el-icon--right"></i></el-button>
        <el-button  size="small" type="primary" plain>Gallery(3)<i class="el-icon-plus el-icon--right"></i></el-button>
        <el-button  size="small" type="primary" plain>AppList(3)<i class="el-icon-plus el-icon--right"></i></el-button>
        <el-button  size="small" type="primary" plain>Infopage(3)<i class="el-icon-plus el-icon--right"></i></el-button>
        <el-button  size="small" type="primary" plain>Tab(3)<i class="el-icon-plus el-icon--right"></i></el-button>
        <el-button  size="small" type="primary" plain>Feed(3)<i class="el-icon-plus el-icon--right"></i></el-button>
        <el-button  size="small" type="primary" plain>Advertising(3)<i class="el-icon-plus el-icon--right"></i></el-button>
    </div>
</template>

<script>
export default {
    name:"mAttrNav",
    methods:{
        get:function(){
            console.log("mattrnav",this);
            this.$http.get('../assets/assembly.json').then(function(response){
                console.log("response",response);
            });
            // this.$http.get('http://192.168.2.111:8764/manage/page/assembly/1').then(function(response){
            //     console.log("response",response);
            // })
        }
    }
}
</script>

<style lang="less" scoped>
.m_attrNav{
    padding-bottom:10px;
    border-bottom: 1px solid #eee;
    h3{
        margin-bottom:5px;
    }
}

</style>
