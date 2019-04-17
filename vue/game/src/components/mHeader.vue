<template>
    <div class="m_header">
        <div class="title_header">
            <span class="menu">
                <img src="@/assets/img/menu4.png" alt="">
            </span>
            Game Center
        </div>
    </div>
</template>

<script>
export default {
    name:'mHeader',
    data:function(){
        return {}
    },
    mounted:function(){
        $(".menu").on("click",function(){
            $(".m_nav").show();
        });
    }

}
</script>

<style lang="less" scoped>
    .m_header{
        height:1.875rem;
        .title_header{
            height:1.875rem;
            line-height: 1.875rem;
            background:#5677fc;
            color: #fff;
            position:fixed;
            top: 0;
            left: 0;
            z-index: 11;
            width:100%;
            text-align: center;
            .menu{
                position: absolute;
                left: 0.3165rem;
                width:2rem;
                height: 1.875rem;
                display: flex;
                justify-content: center;
                align-items: center;  
                img{
                    width:1rem;
                }
            }
        }
    }
    @media screen and (max-width:640px) {  //pc端
    
    }
</style>
