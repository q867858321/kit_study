<template>
    <div class="m_header">
        <div class="user">
            欢迎你！{{username}} 
        </div>
    </div>
</template>

<script>
export default {
    name:"mHeader",
    data:function(){
        return {
            username:"yingxian"
        }
    }
}
</script>

<style type="less" scoped>
.m_header{
    text-align: right;
    border-bottom:2px solid #409eff;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    height:50px;
}
</style>
