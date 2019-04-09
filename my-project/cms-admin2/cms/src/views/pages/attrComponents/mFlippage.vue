<template>
    <section data-page="v-p" class="m_flippage">
        <div  @click="show">show mFlippage</div>
        <h3 @click="submitData">属性</h3>
        <div class="arrt_box">
            <el-collapse v-model="activeNames">
                <el-collapse-item title="默认行为" name="1">
                     <el-select v-model="action" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value"  :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-collapse-item>
                <el-collapse-item title="幻灯片速度" name="2">
                    <el-input-number v-model="speed" @change="speedChange" :min="100" :step="100" :max="1000" label="幻灯片速度"></el-input-number>
                </el-collapse-item>
                <el-collapse-item title="是否显示页小亮点" name="3">
                    <el-radio v-model="indicator" label="1">显示</el-radio>
                    <el-radio v-model="indicator" label="0">不显示</el-radio>
                </el-collapse-item>
                <el-collapse-item title="是否显示分割线" name="4">
                    <el-radio v-model="occupy" label="1">显示</el-radio>
                    <el-radio v-model="occupy" label="0">不显示</el-radio>
                </el-collapse-item>
                <el-collapse-item title="分割线高" name="5">
                    <el-input-number v-model="height" @change="heightChange" :min="0" :step="1" :max="100" label="分割线高"></el-input-number>
                </el-collapse-item>
                <el-collapse-item title="分割线颜色" name="6">
                    <el-color-picker v-model="color"></el-color-picker>
                </el-collapse-item>
             </el-collapse>
        </div>
    </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "",
  props: ["item"],
  data: function() {
    let attributes = this.item.attributes;
    return {
      activeNames: ["1", "2", "3", "4", "5", "6"],
      options: [
        {
          value: "game",
          label: "游戏"
        },
        {
          value: "detail",
          label: "详情页"
        },
        {
          value: "page",
          label: "专题页"
        }
      ],
      action: attributes.action || "game",
      speed: attributes.speed || 100,
      indicator: attributes.indicator || "1",
      occupy: attributes.occupy || "1",
      height: attributes.height || "20",
      color: attributes.color || "#f00",
      source: "1", //wu
      statistic: "1" //wu
    };
  },
  computed: {
    ...mapState({
      pageInfo: state => state.pages.pageInfo
    })
  },
  methods: {
    speedChange: function() {},
    heightChange: function() {},
    show() {
      console.log("mFlippage", this);
    },
    submitData() {
      let data = {
        index: this.fIndex,
        item: {
          attributes: {
            action: this.action,
            color: this.color,
            height: this.height,
            indicator: this.indicator,
            occupy: this.occupy,
            source: this.source,
            speed: this.speed,
            statistic: this.statistic
          },
          contents: [
            {
              image: {
                originalUrl:
                  "http://h5res.appskyx.com/allgame/ICON/shuishangjiuyuan/iconbannersm.jpg",
                originalFormat: "png",
                originalSize: 1869
              },
              createTime: "2019-01-18 12:52:08",
              orderNum: 1,
              id: 55,
              isNew: false,
              type: 2,
              content: "6",
              via: null
            }
          ],
          orderNum: 1,
          id: 29,
          subassemblyId: 1
        },
        type: "1"
      };
      this.$store.commit("pages/chooseTemement", data);

      let pageInfo = this.pageInfo;
      let num = this.fIndex;
      let newpageInfo = pageInfo.map(function(item, index) {
        if (num == index) {
          item = data.item;
        }
        return item;
      });
      //  console.log("newpageInfo",newpageInfo);
      this.$store.commit("pages/addPageInfo", newpageInfo);
    }
  }
};
</script>

<style>
</style>
