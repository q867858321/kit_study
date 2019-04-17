<template>
    <div class="m_gameList">
        <a class="item" href="/id=144/cid=orggame/gc=CSLY/" target="_self">
            <div class="item_left"> <img src="http://h5res.appskyx.com/allgame/ICON/tangguohuaxing/icon90.jpg"> </div>
            <div class="item_center">
                <h5>Candy Slide</h5>    
                <p>Try to Slide candy through Exit. And Try to Finish in Limited moves and time and Score 3 Star.</p>
            </div>
            <div class="item_right">
                <span class="play_btn">PLAY</span>
            </div>
        </a>
        <a class="item" href="/id=144/cid=orggame/gc=CSLY/" target="_self">
            <div class="item_left"> <img src="http://h5res.appskyx.com/allgame/ICON/tangguohuaxing/icon90.jpg"> </div>
            <div class="item_center">
                <h5>Candy Slide</h5>    
                <p>Try to Slide candy through Exit. And Try to Finish in Limited moves and time and Score 3 Star.</p>
            </div>
            <div class="item_right">
                <span class="play_btn">PLAY</span>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name:"mGameList"
}
</script>

<style lang="less" scoped>
    .m_gameList{
        background:#fff;
        padding:0 5px;
        font-size:0.75rem;
        color:rgba(68,68,68,0.6);
        .item{
            display: flex;
            padding: 0.625rem 0;
            border-bottom:1px solid #f5f5f5;
            .item_left{
                width:3rem;
                display: flex;
                align-items: center;
                img{
                    width:3rem;
                }
            }
            .item_center{
                flex:1;
                padding:0 5px;
                h5{
                    font-size: 0.9375rem;
                    font-weight: normal;
                    color: #444;
                }
                p{
                    margin-top: 5px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp:2;
                    -webkit-box-orient: vertical;
                }
            }
            .item_right{
                display: flex;
                align-items: center;
                .play_btn{
                    display: block;
                    width:3.75rem;
                    height:1.375rem;
                    line-height: 1.375rem;
                    text-align: center;
                    background: #29b6f6;
                    color: #FFF;
                    box-shadow: 0 1px 4px #c2c2c2;
                    padding:0 0.625rem;
                    border-radius: 3px;
                }
            }
            
        }
    }
</style>
