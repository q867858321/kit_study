
<template>
  <div class="edit_container">
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
      @ready="onEditorReady($event)"
    ></quill-editor>
    <button @click="getEditorFocus">getEditorFocus</button>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      content: `<img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3272614416,1057598574&fm=58dd"/><p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
      editorOption: {},
      myEditor: null
    };
  },
  methods: {
    onEditorReady(editor) {
      console.log("editor", editor.focus());
      this.myEditor = editor;
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus(editor) {
      console.log("current editor focus", this.editor.focus());
    }, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    getEditorFocus() {
      this.editor.formatText(0, 40, "bold", true);
      console.log(
        "insert editor text"
        // this.editor.updateContents(
        //   '<img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3272614416,1057598574&fm=58"/>',
        //   (String = "api")
        // )
      );
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  }
};
</script>