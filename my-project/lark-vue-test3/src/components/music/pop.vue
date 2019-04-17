<template>
    <section>
        {{show}}， {{dialogVisible}}
        <el-button type="text" @click="dialogVisible = true">子点击</el-button>
        <el-dialog  title="提示" :visible="dialogVisible"  width="30%" :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>    
    </section>
</template>

<script>
export default {
  props: ["show"],
  data() {
    return {
      dialogVisible: false
    };
  },
  watch: {
    show(val, oldVal) {
      alert(val);
      this.dialogVisible = val;
    },
    dialogVisible(val) {
      alert(val);
    }
  },
  computed: {
    show2() {
      this.dialogVisible = this.show;
      return this.show;
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style>
</style>
