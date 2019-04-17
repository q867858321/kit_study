<template>
  <section data-page="v-t" class="topicEdit" v-loading.body="loading">
    <el-form label-position="right" label-width="80px" :model="topic">
      <el-form-item label="所属版块">
        <el-cascader
          :options="forums"
          placeholder="请选择版块"
          :props="forumSelectProps"
          @change="handleChange"
          v-model="selectedForum"
          :disabled="isEdit"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="主题分类">
        <el-radio
          v-model="topic.typeIds"
          :label="item.value"
          v-for="(item,index) in topicType"
          :key="index"
          :disabled="isEdit"
        >{{item.label}}</el-radio>
      </el-form-item>
      <el-form-item label="发表人">
        <el-input v-model="topic.authorName" disabled>{{topic.authorName}}</el-input>
        <span class="custom-theme" style="margin-right:10px;" @click="getUserList" v-if="!isEdit">
          <i
            class="el-icon-plus"
            style="color:#409eff;cursor:pointer;"
            @click="moderatorsStrVisible = true"
          ></i>
        </span>
      </el-form-item>
      <el-form-item label="主题标题">
        <el-input v-model="topic.title" :disabled="isEdit"></el-input>
      </el-form-item>
      <el-form-item label="主题内容">
        <!-- <el-upload
          class="upload-demo"
          ref="upload"
          :on-change="handleSuccess"
          :file-list="imageList"
          :auto-upload="false"
          action="/manage/topic/save"
          list-type="picture"
          :data="topic"
          name="files"
        >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>-->
        <input type="file" name="imageFile" @change="uploadImage($event)">
        <input type="file" name="videoFile" @change="uploadVideo($event)">

        <!-- <div id="editor" type="text/plain" :v-model="topic.content"></div> -->
        <vue-ueditor-wrap v-model="topic.content" @ready="ueditorReady"></vue-ueditor-wrap>
      </el-form-item>
    </el-form>
    <div class="margin-md">
      <!-- <input type="button" value="提交" class="bbs-submit" @click="updateTopic"> -->

      <input
        type="button"
        value="提交"
        class="bbs-submit"
        v-if="$route.query.type=='update'"
        @click="updateTopic"
      >
      <input
        type="button"
        value="提交"
        class="bbs-submit"
        v-if="$route.query.type=='add'"
        @click="saveTopic"
      >
    </div>

    <!-- 用户弹出框 -->
    <el-dialog
      title="用户"
      :visible.sync="moderatorsStrVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-form :inline="true" class="demo-form-inline">
        <div style="text-align:left;">
          <el-form-item label="用户">
            <el-input v-model="userParams.username" placeholder="版主"></el-input>
          </el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="getUserList">搜索</el-button>
          <span>已选版主:&emsp;</span>
          <span>{{moderator.name}}</span>
        </div>
      </el-form>
      <table class="bbs-table">
        <tr>
          <th>是否选择</th>
          <th>ID</th>
          <th>姓名</th>
          <th>头像</th>
        </tr>
        <tbody>
          <tr v-for="(item,index) in userList" :key="index">
            <td>
              <input type="radio" v-model="moderator" :value="{id:item.id,name:item.name}">
            </td>
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>
              <img style="width:20px;" :src="item.avatar">
            </td>
          </tr>
        </tbody>
      </table>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-size="10"
          layout="prev, pager, next, jumper"
          :total="this.userListTotal"
        ></el-pagination>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="moderatorsStrVisible = false">取 消</el-button>
        <el-button type="primary" @click="moderatorsStrVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
import * as fetch from "@/api/bbs";
import * as userFetch from "../../../api/usermanage";
import VueUeditorWrap from "vue-ueditor-wrap";

import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import axios from "axios";
export default {
  name: "topicEdit",
  components: {
    quillEditor,
    VueUeditorWrap
  },
  data() {
    return {
      loading: false,
      action: this.$route.query.type,
      topicId: this.$route.query.id || null,
      isEdit: true,
      topic: {
        // title: "你好",
        // content:
        //   '<div><h1>标题</h1></img src="https://cn.vuejs.org/images/logo.png" /></div>',
        // authorName: "王二",
        // authorId: 1,
        // forumId: null,
        // typeIds: null
      },
      topicType: [],
      selectedForum: [],
      forums: [],
      forumSelectProps: {
        value: "id",
        label: "title",
        children: "forums"
      },
      content: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
      editorOption: {
        height: "200px"
      },
      msg:
        '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',
      editor: null,
      imageList: [],
      videoList: [],
      moderatorsStrVisible: false,
      userList: [],
      userListTotal: 0,
      userParams: {
        //接口参数
        siteId: this.$store.state.siteId,
        pageNo: 1,
        pageSize: 10,
        username: "" //用户名
      },

      moderatorsList: [],
      moderator: {
        //版主信息
        id: null,
        name: null
      },
      imageList: [],
      videoList: []
    };
  },
  computed: {},
  watch: {
    moderator(val, oldVol) {
      this.topic.authorId = val.id;
      this.topic.authorName = val.name;
    }
  },
  created() {},
  mounted() {
    console.log("topicEdit", this);
    // this.editor = UE.getEditor("editor", {});
    this.listGroupByCategory();
    if (this.action == "update") {
      //更新时候
      this.getTopic();
    } else {
      //添加时
      this.isEdit = false;
    }
  },
  methods: {
    handleSuccess(file, fileList) {
      console.log("file", file);
      console.log("fileList", fileList);
      let imgUrl = file.url;
      this.editor.execCommand("inserthtml", "<img src='" + imgUrl + "'/>");
    },
    ueditorReady(ueditorInstance) {
      this.editor = ueditorInstance;
    },
    getTopic() {
      let params = {
        siteId: this.$store.state.siteId,
        id: this.topicId
      };
      this.loading = true;
      console.log("params", params);
      fetch
        .getTopic(params)
        .then(res => {
          let data = res.data;

          //
          let categoryId = data.forum.category.id;
          let forumId = data.forum.id;
          this.selectedForum = [categoryId, forumId];

          this.listTopicTypeByForumId(forumId);

          this.topic.forumId = data.forum.id;
          this.topic.typeIds = data.types[0].id;
          this.topic.title = data.title;
          this.topic.content = data.contents.text;
          this.topic.authorName = data.author.name;
          this.topic.authorId = data.author.id;
          this.topic.siteId = this.$store.state.siteId;

          console.log("content", this.topic.content);

          // title: "你好",
          // content:
          //   '<div><h1>标题</h1></img src="https://cn.vuejs.org/images/logo.png" /></div>',
          // author: "王二",
          // creatorId: 1,
          this.loading = false;
        })
        .catch(res => {
          this.loading = false;
          this.$message.error("请求出错");
        });
    },
    listGroupByCategory() {
      let params = {};
      params.siteId = this.$store.state.siteId;
      let _this = this;
      fetch
        .listGroupByCategory(params)
        .then(res => {
          console.log("res", res);
          let data = res.data;
          this.forums = data;
        })
        .catch(res => {
          this.loading = false;
          this.$message.error("请求出错");
        });
    },
    listTopicTypeByForumId(forumId) {
      console.log("forumId", forumId);
      let params = {
        siteId: this.$store.state.siteId,
        forumId: forumId,
        pageSize: 9999
      };
      console.log("forumId", forumId);
      let _this = this;
      fetch.getTopicTypeList(params).then(res => {
        console.log("res topicType", res);
        _this.topicType = [];
        let arr = [];
        if (res.data.rows != null) {
          res.data.rows.forEach(function(item, index) {
            _this.topicType.push({
              value: item.id,
              label: item.name
            });
          });
        }
      });
    },
    updateTopic() {
      let formData = new FormData();
      formData.append("id", this.topicId);
      formData.append("forumId", this.topic.forumId);
      formData.append("typeIds", this.topic.typeIds);
      formData.append("title", this.topic.title);
      formData.append("content", this.topic.content);
      formData.append("authorId", this.topic.authorId);
      formData.append("siteId", this.$store.state.siteId);
      if (this.imageList != null && this.imageList.length > 0) {
        this.imageList.forEach(function(imageItem, index) {
          formData.append("files", imageItem);
        });
      }
      if (this.videoList != null && this.videoList.length > 0) {
        this.videoList.forEach(function(videoItem, index) {
          formData.append("videos", videoItem);
        });
      }
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      console.info("formData", formData);
      this.loading = true;
      axios
        .post("/manage/topic/update", formData, config)
        .then(res => {
          console.log("update topic res", res);
          if (res.status == 200 && res.data.code == 1) {
            this.$router.push({ path: "/topic-list" });
          } else {
            this.$message.error(res.data.msg);
          }
          this.loading = false;
        })
        .catch(res => {
          this.loading = false;
          this.$message.error("请求出错");
        });
    },
    saveTopic() {
      let formData = new FormData();
      formData.append("forumId", this.topic.forumId);
      formData.append("typeIds", this.topic.typeIds);
      formData.append("title", this.topic.title);
      formData.append("content", this.topic.content);
      formData.append("authorId", this.topic.authorId);
      formData.append("siteId", this.$store.state.siteId);
      console.log("image list", this.imageList);
      if (this.imageList != null && this.imageList.length > 0) {
        this.imageList.forEach(function(item, index) {
          formData.append("files", item);
        });
      }
      if (this.videoList != null && this.videoList.length > 0) {
        this.videoList.forEach(function(item, index) {
          formData.append("videos", item);
        });
      }
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };

      console.info("formData", formData);
      this.loading = true;
      axios
        .post("/manage/topic/save", formData, config)
        .then(res => {
          console.log("save topic res", res);
          this.loading = false;
          if (res.status == 200 && res.data.code == 1) {
            this.$router.push({ path: "/topic-list" });
          } else {
            this.$message.error(res.data.msg);
          }
        })
        .catch(res => {
          this.loading = false;
          this.$message.error("请求出错");
        });
    },
    handleChange(value) {
      console.log("value", value);
      let params = {
        siteId: this.$store.state.siteId,
        forumId: value[1],
        pageSize: 9999
      };
      let _this = this;
      _this.topic.forumId = value[1];
      fetch.getTopicTypeList(params).then(res => {
        console.log("res topicType", res);
        _this.topicType = [];
        let arr = [];
        if (res.data.rows != null) {
          res.data.rows.forEach(function(item, index) {
            _this.topicType.push({
              value: item.id,
              label: item.name
            });
          });
        }
      });
    },
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    //用户
    handleClose(done) {
      this.moderatorsStrVisible = false;
    },
    getUserList() {
      let params = this.userParams;

      userFetch.getUserList(params).then(res => {
        let data = res.data.rows;
        let _this = this;
        let newData = data.map(function(item, index) {
          let moderatorIdsArr = [];

          return item;
        });
        this.userList = newData;
        this.userListTotal = res.data.total;
      });
    },
    handleCurrentChange(val) {
      this.userParams.pageNo = val;
      this.getUserList();
    },
    uploadImage(event) {
      var windowURL = window.URL || window.webkitURL;
      let imgUrl = windowURL.createObjectURL(event.target.files[0]);
      this.imageList.push(event.target.files[0]);
      this.editor.execCommand("inserthtml", "<img src='" + imgUrl + "'/>");
    },
    uploadVideo(event) {
      var windowURL = window.URL || window.webkitURL;
      let imgUrl = windowURL.createObjectURL(event.target.files[0]);
      this.videoList.push(event.target.files[0]);
      this.editor.execCommand("inserthtml", "<video src='" + imgUrl + "'/>");
    }
  }
};
</script>

<style scoped>
.topicEdit .el-input {
  width: 400px;
}
.quill-editor {
  width: 640px;
}
.ql-editor {
  max-height: 300px;
}
.edui-default {
  max-width: 640px;
}
</style>
