<template>
    <div class="m_cell model_box">
        <div class="head">
            <span>Action</span>
            <router-link class="more" to='/'>More</router-link>
        </div>
        <div class="item_list" v-bind:class="[num]">
            <a class="item" href="/">
                <img v-lazy="'http://h5res.appskyx.com/allgame/ICON/gundongdebingqiu/iconbannersm.jpg'" alt="">
                <p>Icy Spicy</p>
            </a>
            <a class="item" href="/">
                <img v-lazy="'http://h5res.appskyx.com/allgame/ICON/gundongdebingqiu/iconbannersm.jpg'" alt="">
                <p>Icy Spicy</p>
            </a>
            <a class="item" href="/">
                <img v-lazy="'http://h5res.appskyx.com/allgame/ICON/gundongdebingqiu/iconbannersm.jpg'" alt="">
                <p>Icy Spicy</p>
            </a>
            <a class="item" href="/">
                <img v-lazy="'http://h5res.appskyx.com/allgame/ICON/gundongdebingqiu/iconbannersm.jpg'" alt="">
                <p>Icy Spicy</p>
            </a>
            <a class="item" href="/">
                <img v-lazy="'http://h5res.appskyx.com/allgame/ICON/gundongdebingqiu/iconbannersm.jpg'" alt="">
                <p>Icy Spicy</p>
            </a>
            <a class="item" href="/">
                <img v-lazy="'http://h5res.appskyx.com/allgame/ICON/gundongdebingqiu/iconbannersm.jpg'" alt="">
                <p>Icy Spicy</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'mCell',
    props:['dNum'],
    data:function(){
        return{
          //  num:'num2' //默认为num2
        }
    },
    computed:{
        num:function(){
            if(this.dNum==4){
                return 'num4';
            }else{
                return 'num2';
            }
        }
    }

}
</script>

<style lang="less" scoped>
    .m_cell{
        .head{
            font-size: 0.9375rem;
            font-weight: 700;
            color:#333;
            .more{
                font-size:0.75rem;
                color:#5677fc;
                float: right;
            }
        }
        .item_list{
            display: flex;
            flex-wrap: wrap;
            justify-content:space-between;
            font-size: 0.75rem;
            text-align: center;

            .item{
                display: block;
                width:50%;
                margin-top:5px;
                img{
                    width:100%;
                    border-radius: 5px 5px 0 0 ;
                    display: block;
                }
                &:nth-of-type(2n+1){
                    padding-right: 5px;
                }
                p{
                    font-size:0.75rem;
                    overflow: hidden;
                    white-space:nowrap;
                    text-overflow: ellipsis;
                    height:1.5rem;
                    line-height: 1.5rem;
                    background: #eee;
                    border-radius: 0 0 5px 5px;
                }
            }
            &.num4{
                .item{
                    width:25%;
                    &:nth-of-type(2n){
                        padding-right: 5px;
                    }
                    &:nth-of-type(2n+4){
                        padding-right: 0;
                    }
                    img{
                        border-radius: 12%;
                        min-height: 4.5rem;
                        box-shadow: 1px 2px 3px 0 rgba(50,50,50,.75);
                    }
                    p{
                        background:none;
                    }
                }
            }
        }
    }
</style>
