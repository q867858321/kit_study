<template>
  <div>
    <div id="editor" type="text/plain"></div>
    <!-- <vue-ueditor-wrap v-model="msg" id="editor"></vue-ueditor-wrap> -->
    <button @click="addHtml">addHtml</button>
  </div>
</template>

<script>
import VueUeditorWrap from "vue-ueditor-wrap";
export default {
  name: "UEditor",
  components: {
    VueUeditorWrap
  },
  data() {
    return {
      msg:
        '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',
      editor: null
    };
  },
  mounted() {
    //初始化UE
    const _this = this;
    this.editor = UE.getEditor("editor");
  },
  methods: {
    addHtml() {
      console.log("tag", "11");
      this.editor.execCommand("inserthtml", "<img src='ddd'/>");
    }
  }
};
</script>

<style>
</style>
