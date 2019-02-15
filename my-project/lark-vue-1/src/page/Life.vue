<template>
  <div class="p_life" v-wechat-title="this.title">
    生活
    <div>
      <p>最近有人问我，为什么软件开发者非常痛恨维护别人的代码？我思考了很久怎样回答这个问题，最后决定做一个简单的比喻。</p>
      <div class="pgc-img">
        <img src="http://p1.pstatp.com/large/pgc-image/f11f50afba4b4369bea172f08994db9e" img_width="800" img_height="533" alt="为什么程序员对旧代码深恶痛绝？" inline="0">
        <p class="pgc-img-caption"></p>
      </div>
      <p>有人请求你在一个岛上建一座实验室，而这是一个其他工程师遗留下来的烂尾工程。你去看了看工地，发现除了烂尾楼之外，还有许多意外的东西：</p>
      <ul>
        <li>
          <strong>一个巨大的风扇（有楼那么大）；</strong>
        </li>
        <li><strong>大号的热气球；</strong></li>
        <li><strong>满屋子的拖把。</strong></li>
      </ul>
      <p>你想都没想就把所有东西都扔掉，然后建好了实验室。把实验室交给科学家们之后还不到五分钟，他们就大叫着跑了出来：</p>
      <p><strong>“毒气泄漏！！！”</strong></p>
      <p><strong>你：</strong>“我擦！应该不会有问题啊！”你绝望地对前一个工程师喊道。</p>
      <p><strong>你：</strong>Johny，我们这里出现毒气泄漏了！出什么问题了？</p>
      <p><strong>同事：</strong>我不知道，应该没问题的。你在项目里改了什么东西？</p>
      <p><strong>你：</strong>只改了一点点，我把拖把都扔掉了……</p>
      <p><strong>同事：</strong>拖把是用来支撑天花板的！</p>
      <p><strong>你：</strong>什么？？？这***是什么鬼？</p>
      <p><strong>同事：</strong>我是说，拖把是用来支撑天花板的。上面有毒气罐子，罐子太重了所以我们在那个房间里堆满了拖把。</p>
      <p><strong>你：</strong>你至少应该在门上给我留个条子啊，告诉我拖把是用来支撑天花板的。好了现在毒气泄漏了，我们该怎么办？</p>
      <p><strong>同事：</strong>开电扇啊，就能把毒气吹跑了。</p>
      <p><strong>你：</strong>我擦，电扇我已经拆掉了！</p>
      <p><strong>同事：</strong>为什么？</p>
      <p><strong>你：</strong>那为什么你做了个120吨的电扇？为什么你不能简单地放一盒防毒面具？</p>
      <p><strong>同事：</strong>我得研究哪个防毒面具好用啊，但这个电扇是我上个项目留下来的我就直接拿来用了。</p>
      <p><strong>你：</strong>Johny，我已经把你的电扇拆掉了！现在我们要窒息了！</p>
      <p><strong>同事：</strong>那你**还等什么？赶快坐热气球跑啊！</p>
      <p><strong>你：</strong>... ...</p>
      <p>写到这里——同样身为程序员的你，当面对遗留代码时会如何处理？欢迎在评论区分享你的观点。</p>
      <blockquote>
        <p>相关链接：https://lvivity.com/programmers-hate-dealing-legacy-code，译者弯月，责编郭芮。</p>
      </blockquote>
    </div>
  </div>
</template>

<script>

import mNav from '@/components/Nav';
import mWrap from '@/components/Wrap';
export default {
  name: "Home",
  components: {
    mNav, mWrap
  },
  data() {
    return {
      title: "生活",
    }
  },
  created() {
    console.log("life", this);
    console.log("left,store,state", this.$store.state)
  }
}
</script>

<style lang="less" scoped>
.p_life {
}
</style>

