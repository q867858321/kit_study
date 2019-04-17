<template>
  <div @click="showDate">
    2
    <el-dialog title="用户" :visible.sync="topicVisible" width="50%" :before-close="handleClose">
      <span slot="footer" class="dialog-footer">
        <el-button @click="topicVisible = false">取 消</el-button>
        <el-button type="primary" @click="topicVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "topicUpdatePop",
  props: ["show"],
  data: function() {
    return {
      topicVisible: false
    };
  },
  watch: {
    show: function(val, oldVol) {
      this.topicVisible = val;
    },
    topicVisible: function(val, oldVol) {
      alert(333);
      this.$emit("closeShowFn");
    }
  },
  mounted() {
    console.log("topic", this);
  },
  methods: {
    handleClose() {
      this.topicVisible = false;
    },
    showDate() {
      console.log("this", this);
    }
  }
};
</script>

<style>
</style>
