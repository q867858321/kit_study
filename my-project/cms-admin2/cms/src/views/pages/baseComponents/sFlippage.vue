<template>
    <section data-page='v-p-b' class="s-flippage">
        <div @click="show">show sFlippage</div>
        <div class="swiper-container" ref="scroll">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in this.scroll.contents" :key="index">
                    <img :src="item.image.originalUrl" />
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="line" :style="{display:this.scroll.attributes.occupy==1?'block':'none',}"></div>
    </section>
</template>

<script>
export default {
  name: "sFlippage",
  props: ["scroll", "num"],
  data: function() {
    return {
      dscroll: {
        contents: [
          {
            image: {
              originalUrl:
                "http://h5res.appskyx.com/allgame/ICON/shuishangjiuyuan/iconbannersm.jpg"
            }
          },
          {
            image: {
              originalUrl:
                "http://h5res.appskyx.com/allgame/ICON/shuishangjiuyuan/iconbannersm.jpg"
            }
          }
        ]
      }
    };
  },
  mounted() {
    this.runswiper();
  },
  methods: {
    show() {
      console.log("sFlippage", this);
    },
    runswiper: function() {
      let _this = this;
      let swiper1 = new Swiper(_this.$refs.scroll, {
        autoplay: false, //是否自动播放
        speed: 100,
        slidesPerView: 1, //初始化的位置
        spaceBetween: 5, //两个之间的间距
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.s-flippage {
  background: #fff;
  padding: 5px 0 0;
  .swiper-container {
    position: relative;
    padding-left: 5px;
    .swiper-wrapper {
      .swiper-slide {
        img {
          display: block;
        }
      }
    }
    .swiper-pagination {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
  .line {
    height: 2px;
    background: #f00;
    margin-top: 5px;
  }
}
</style>
