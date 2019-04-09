<template>
    <section data-page="v-p" class="m_result">
      <div @click="show">show m_result</div>
        <draggable element="div" v-model="arrList"  @update="datadragEnd" :options = "{animation:500}">
            <div v-for="(item ,index) in arrList" :key="index" class="item" :class="isactive==index?'active':''" @click="choose(index,item,item.subassemblyId)">
                <sFlippage :scroll='item' :num='index' v-if="item.subassemblyId==1"></sFlippage> 
                <div>2</div> 

                <div class="mask">
                    <el-button type="danger" icon="el-icon-delete" circle size="mini" v-on:click.stop="deleteItem(index)"></el-button>
                </div>
            </div>
            
        </draggable>
    </section>
</template>

<script>
import draggable from "vuedraggable";
import { mapState, mapGetters, mapActions } from "vuex";
import sFlippage from "./sFlippage.vue";
export default {
  name: "mShow",
  components: {
    draggable,
    sFlippage
  },
  data: function() {
    return {
      isactive: -1 //激活的下标
    };
  },
  computed: {
    ...mapState({
      arrList: state => state.pages.pageInfo
    })
  },
  methods: {
    show: function() {
      console.log("mResult", this);
    },
    choose(index, item, type) {
      //重要方法
      this.isactive = index;
      this.$store.commit("pages/chooseTemement", { index, item, type });
    },
    deleteItem(index) {},
    datadragEnd(evt) {
      evt.preventDefault();
      console.log("拖动前的索引 :" + evt.oldIndex);
      console.log("拖动后的索引 :" + evt.newIndex);
      console.log(this.colors);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.m_result {
  height: 568px;
  .item {
    position: relative;
    min-height: 100px;
    .mask {
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 100;
      .el-button {
        float: right;
      }
    }
    &.active {
      .mask {
        display: none;
      }
    }
  }
}
</style>
