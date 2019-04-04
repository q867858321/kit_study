<template>
  <el-button plain  @click="open">
    可自动关闭
  </el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
      }
    }
  }
</script>