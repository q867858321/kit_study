<template>
    <section>
        {{show}}， {{dialogVisible}},{{id}},
        <el-button type="text" @click="dialogVisible = true">子点击</el-button>
        <a @click="changeComputed()">改变 computed</a>
        <el-dialog  title="提示" :visible="dialogVisible"  width="30%" :before-close="close">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="close()">取 消</el-button>
                <el-button type="primary" @click="close()">确 定</el-button>
            </span>
        </el-dialog>    
    </section>
</template>

<script>
export default {
  props: ["show", "id"],
  data() {
    return {
      dialogVisible: false
    };
  },
  watch: {
    //可以监听 自己、父、vuex中的数据变化
    show(val, oldVal) {
      this.dialogVisible = val;
    }
  },
  computed: {
    //只能监听自己中的数据变化,计算属性不能通过事件更改
  },
  methods: {
    close() {
      this.dialogVisible = false;
      this.$emit("close");
    },
    changeComputed() {}
  },
  updated() {}
};
</script>

<style scoped>
</style>
