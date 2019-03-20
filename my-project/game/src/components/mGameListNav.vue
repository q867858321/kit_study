<template>
    <div class="m_gameListNav clear">
        <span data-id="1" class="active" >Action</span>
        <span data-id="2" >Adventure</span>
        <span data-id="3" >Puzzle</span>
        <span data-id="4" >Racing</span>
        <span data-id="5" >Action</span>
        <span data-id="6" >Shoot</span>
        <span data-id="7" >Trivia</span>
        <span data-id="8" >Pixel Games</span>
        <span data-id="9" >Arcade</span>
        <span data-id="10" >Sports</span>
        <span data-id="11" >Strategy</span>
    </div>
</template>

<script>
export default {
    name:"mGameListNav",
    mounted:function(){
        $(".m_gameListNav span").on("click",function(){
            $(this).addClass("active").siblings("span").removeClass("active");
        });
    }
}
</script>

<style lang="less" scoped>
.m_gameListNav{
    span{
        color:#666;
        display: block;
        float: left;
        padding:0.04rem 0.3rem;
        font-size: 1rem;
        margin:0.5rem 0.5rem 0 0;
        background:#f5f5f5;
        border-radius: 3px;
        &.active{
            background: #ff5d75;
			color:#fff;
        }
    }
}

</style>
