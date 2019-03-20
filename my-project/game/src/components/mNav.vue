<template>
    <div class="m_nav">
        <div class="nav">
            <div class="head">
                <img src="//res.appskyx.net/allgame/ICON/dtsl/icon160.jpg" alt="user">
            </div>
            <div class="main">
                <router-link to="/link" class="item active" href="">
                    <img src="@/assets/img/home.png" alt="home"> Home
                </router-link>
                <router-link to="/link" class="item" href="">
                    <img src="@/assets/img/home.png" alt="action"> Action
                </router-link>
                <router-link to="/link" class="item" href="">
                    <img src="@/assets/img/home.png" alt="adventure"> Adventure
                </router-link>
                <router-link to="/link" class="item" href="">
                    <img src="@/assets/img/home.png" alt="puzzle"> Puzzle
                </router-link>
                <router-link to="/link" class="item" href="">
                    <img src="@/assets/img/home.png" alt="home"> Racing
                </router-link>
                <router-link to="/link" class="item" href="">
                    <img src="@/assets/img/home.png" alt="home"> Shoot
                </router-link>
                <router-link to="/link" class="item" href="">
                    <img src="@/assets/img/home.png" alt="home"> Trivia
                </router-link>
                <router-link to="/link" class="item" href="">
                    <img src="@/assets/img/home.png" alt="home"> Pixel Games
                </router-link>
                <router-link to="/link" class="item" href="">
                    <img src="@/assets/img/home.png" alt="home"> Arcade
                </router-link>
                <router-link to="/link" class="item" href="">
                    <img src="@/assets/img/home.png" alt="home"> Sports
                </router-link>
                <router-link to="/link" class="item" href="">
                    <img src="@/assets/img/home.png" alt="home"> Strategy
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'mNav',
    data:function(){
        return {}
    },
    mounted:function(){
        $(".m_nav").on("click",function(){
            $(this).hide();
        });
        $(".nav").on("click",function(){
            return false;
        });
    }
}
</script>

<style lang="less" scoped>
    .m_nav{
        position: fixed;
        top:0;
        left: 0;
        z-index:10;
        padding-top:1.875rem;
        width:100%;
        height: 100%;
        background:hsla(0,0%,78%,.7);
        display: none;
        .nav{
            background: #fff;
            width:12.5rem;
            height:100%;
            position:relative;
            top:0;
            left:0;
            animation:navmove 1s 1;
            .head{
                height: 4.125rem;
                display: flex;
                align-items: center;
                 padding:0 0 0 0.625rem;
                border-bottom:1px solid #e1e1e1;
                img{
                    width:2.8125rem;
                    height:2.8125rem;
                    display: block;
                    border-radius:50%;
                }
            }
            .main{
                .item{
                    display: block;
                    height: 1.875rem;
                    padding:0 0 0 0.625rem;
                    line-height: 1.875rem;
                    border-bottom:1px solid #e1e1e1;
                    img{
                        vertical-align: middle;
                        width:1rem;
                        margin-top: -4px;
                    }
                    &.active{
                        background:#5677fc;
                        color:#fff;
                    }
                }
            }
        }
    }

    @keyframes navmove {
        from{left:-12.5rem;}
        to{left: 0;}
    }
</style>
