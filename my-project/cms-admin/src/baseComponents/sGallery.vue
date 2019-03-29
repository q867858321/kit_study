<template>
    <div class="s_gallery">
        abcdef
         <!-- <div class="change_box">
            <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
            <el-button type="primary" icon="el-icon-sort" size="mini"></el-button>
        </div> -->
    </div>
</template>

<script>
export default {
    name:"sGallery",
    methods:{
        changeSort:function(){
            alert(1);
        }
    }
}
</script>

<style lang="less" scoped>
.s_gallery{
    position: relative;
}
</style>
