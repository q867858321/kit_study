<template>
  <div class="forum-module">
    <div class="forum-header">
      <span class="forum-name">{{$route.name}}</span>
      <div class="pull-right"></div>
    </div>
    <div class="table-body table-responsive" v-loading.body="loading">
      <el-form :rules="rules" :model="topicTypeInfo" ref="topicInfo">
        <el-form-item label="名称" class="form-group" prop="name">
          <el-col :span="6">
            <el-input v-model="topicTypeInfo.name"></el-input>
          </el-col>
          <el-col :span="1" class="required">*</el-col>
        </el-form-item>

        <el-form-item label="路径" class="form-group" prop="path">
          <el-col :span="6">
            <el-input v-model="topicTypeInfo.path"></el-input>
          </el-col>
          <el-col :span="1" class="required">*</el-col>
        </el-form-item>
        <el-form-item label="排序" class="form-group" prop="priority">
          <el-col :span="6">
            <el-input v-model.number="topicTypeInfo.priority"></el-input>
          </el-col>
          <el-col :span="1" class="required">*</el-col>
        </el-form-item>

        <el-form-item label="是否显示" class="form-group">
          <el-col :span="1">
            <el-switch on-text="是" off-text="否" v-model="topicTypeInfo.display"></el-switch>
          </el-col>
        </el-form-item>
        <el-form-item label="关联版块" class="form-group">
          <el-col :span="8">
            <a class="t-rename el-icon-share" title="关联版块" @click="relevanceForum()"></a>
            {{forumsNames}}
          </el-col>
        </el-form-item>

        <el-form-item label="图标预览" class="form-group">
          <el-col :span="6">
            <el-upload
              class="avatar-uploader"
              name="files"
              action="/manage/upload/o_upload"
              :data="{categoryIndex:9999,forumIndex:9999}"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="topicTypeInfo.logo" :src="topicTypeInfo.logo" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-col>
        </el-form-item>

        <el-form-item label="描述" class="form-group">
          <el-col :span="6">
            <el-input type="textarea" v-model="topicTypeInfo.description"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
      <div class="margin-md">
        <input
          type="button"
          value="提交"
          class="bbs-submit"
          v-if="$route.query.type=='edit'"
          @click="updateTopicTypeInfo('topicInfo')"
        >
        <input
          type="button"
          value="提交"
          class="bbs-submit"
          v-if="$route.query.type=='add'"
          @click="addTopicTypeInfo('topicInfo')"
        >
        <input type="reset" value="重置" class="bbs-reset" @click="resetForm('topicInfo')">
      </div>
    </div>

    <!-- 弹出框 关联版块 -->
    <div data-page="v-t" class="relevanceForum">
      <el-dialog
        title="版块"
        :visible="moderatorsVisible"
        width="50%"
        top="10vh"
        :before-close="handleClose"
      >
        <div style="text-align:left;">已选版块：{{forumsNames}}</div>
        <table class="forum-table">
          <tr>
            <th class="td-5"></th>
            <th style="width:95px;">ID</th>
            <th style="width:270px;">分区版块</th>
            <th style="width:20px;"></th>
          </tr>

          <tbody class="first-table" v-for="item in listGroupByCategory" :key="item.id">
            <tr>
              <td class="t-collapse"></td>
              <td>{{item.id}}</td>
              <td>{{item.title}}</td>
              <td></td>
            </tr>
            <tr v-for="forum in item.forums" :key="forum.id">
              <td></td>
              <td>
                <el-checkbox v-model="forumsList" :label="forum.id"></el-checkbox>
              </td>
              <td>{{forum.id}}</td>
              <td>{{forum.title}}</td>
            </tr>
          </tbody>
        </table>
        <!--
       <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-size="10"
          layout="prev, pager, next, jumper"
          :total="this.userListTotal"
        ></el-pagination>
        </div>-->
        <span slot="footer" class="dialog-footer">
          <el-button @click="hidePop()">取 消</el-button>
          <el-button type="primary" @click="hidePop()">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import * as fetch from "../../../api/bbs";
export default {
  data() {
    var validatePath = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入路径"));
      } else {
        let reg = /[\W]/g;
        if (reg.test(value)) {
          callback(new Error("路径只能输入数字，字母"));
        } else {
          callback();
        }
      }
    };
    return {
      fileState: true,
      dialogVisible: false,
      loading: true,
      count: 0,
      state: false,
      imgPath: "", //图片路径
      upobj: {
        //上传参数
        type: "image",
        sessionKey: localStorage.getItem("sessionKey"),
        appId: this.$store.state.appId
      },
      topicTypeInfo: {},
      siteId: this.$route.query.siteId,
      rules: {
        name: [
          { required: true, message: "请填写一个主题分类名", trigger: "blur" }
        ],
        path: [{ validator: validatePath, trigger: "blur" }],
        priority: [
          {
            required: true,
            type: "number",
            message: "请填写一个数字排序",
            trigger: "blur"
          }
        ]
      },
      //关联版主
      forumId: null,
      moderatorsVisible: false,
      listGroupByCategory: [],
      forumsList: [], //已选中的
      forumIds: "",
      forumsNames: ""
    };
  },
  methods: {
    showBig() {
      //获取主题信息列表
      this.dialogVisible = true;
    },
    getTopicTypeInfo(id) {
      //获取分类主题信息
      fetch
        .getTopicTypeInfo({ id: id })
        .then(res => {
          if (res.code == 1) {
            this.loading = false;
            if (this.$route.query.type == "add") {
              // res.data.parentId = this.$route.query.rootId;
            }
            this.topicTypeInfo = res.data;
            if (this.topicTypeInfo.typeLogo == "") {
              this.state = true;
            } else {
              this.imgPath = res.data.typeLogo;
              this.state = false;
            }
          } else {
            this.loading = false;
            this.$message.error(res.msg);
          }
        })
        .catch(res => {
          this.loading = false;
          this.$message.error("网络异常");
        });
    },
    setChange(val) {
      // 修改主题
      this.topicTypeInfo.root = val;
    },
    updateTopicTypeInfo(formName) {
      this.loading = true;
      //修改主题
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = this.topicTypeInfo;
          params.siteId = this.siteId;
          params.forumIds = this.forumIds;
          delete params["forums"];
          fetch.updateTopicTypeInfo(params).then(res => {
            this.loading = false;
            if (res.code == 1) {
              this.$message.success("修改成功");
              setTimeout(() => {
                this.$router.push({ path: "/topictypelist" });
              }, 1000);
            } else {
              this.$message.error(res.msg);
            }
          });
        } else {
          return false;
        }
      });
    },
    addTopicType() {
      //添加内的添加
      this.$router.push({
        path: "/topictypeadd",
        query: {
          type: "add",
          id: 0
        }
      });
    },
    addTopicTypeInfo(formName) {
      //添加主题
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = this.topicTypeInfo;
          params.siteId = this.siteId;
          fetch
            .addTopicTypeInfo(params)
            .then(res => {
              if (res.code == 1) {
                this.$message.success("添加成功");
                setTimeout(() => {
                  this.$router.push({ path: "/topictypelist" });
                }, 1000);
              } else {
                this.$message.error(res.msg);
              }
            })
            .catch(res => {
              this.$message.error("修改失败");
            });
        } else {
          return false;
        }
      });
    },
    back() {
      this.$router.push({
        path: "/topictypelist",
        query: {
          id: this.topicTypeInfo.root,
          noceStr: Math.round(Math.random() * 10)
        }
      });
    },
    //上次图片
    beforeAvatarUpload: function(t) {
      var e =
          "image/jpeg" === t.type ||
          "image/png" === t.type ||
          "image/gif" === t.type,
        a = t.size / 1024 / 1024 < 2;
      return (
        e || this.$message.error("上传头像图片只能是 JPG 格式!"),
        a || this.$message.error("上传头像图片大小不能超过2MB!"),
        e && a
      );
    },
    handleAvatarSuccess: function(res, file) {
      if (res.code == 1) {
        this.topicTypeInfo.logo = res.data.url;
      } else {
        this.$message({
          message: res.msg,
          type: "error"
        });
      }
    },

    resetForm(formName) {
      //重置表单
      let id = this.$route.query.id;
      this.$refs[formName].resetFields();
    },
    //弹出框设置
    //关联版主
    relevanceForum() {
      this.moderatorsVisible = true;
      let params = {
        siteId: this.siteId
      };
      fetch.listGroupByCategory(params).then(res => {
        if (res.code == 1) {
          this.listGroupByCategory = res.data;
        }
        console.log("listGroupByCategory", this.listGroupByCategory);
      });
    },
    handleClose() {
      this.moderatorsVisible = false;
    },
    replaceStr(val) {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.userParams.pageNo = val;
      this.getUserList();
    },
    hidePop() {
      this.moderatorsVisible = false;
    }
  },
  created: function() {
    let type = this.$route.query.type;
    let id = this.$route.query.id;
    // this.getTopicTypeTree();
    if (type == "add") {
      this.getTopicTypeInfo(id);
    } else if (type == "edit") {
      this.getTopicTypeInfo(id);
    }
  },
  mounted() {
    $(function() {
      $(".relevanceForum").on("click", ".t-collapse", function() {
        $(this).toggleClass("shows");
        if ($(this).hasClass("shows")) {
          $(this)
            .parent("tr")
            .siblings("tr")
            .hide();
        } else {
          $(this)
            .parent("tr")
            .siblings("tr")
            .show();
        }
      });
    });
  },
  watch: {
    $route: function(to, from) {
      let id = this.$route.query.id;
      this.loading = true;
      // this.getTopicTypeTree();
      this.getTopicTypeInfo(id);
    },
    forumsList(val, newVal) {
      this.forumIds = val.join(",");
      let forumsNames = "";
      this.listGroupByCategory.forEach(function(item, index) {
        item.forums.forEach(function(obj, num) {
          if (val.indexOf(obj.id) != -1) {
            forumsNames += obj.title + ",";
          }
        });
      });
      this.forumsNames = forumsNames.slice(0, forumsNames.length - 1);
    }
  }
};
</script>

<style scoped>
.avatar {
  width: 40px;
  height: 40px;
  display: block;
}
.relevanceForum {
}
.forum-table {
  width: 100%;
}
.forum-table tbody tr:nth-child(odd) {
  background: #fafbfc;
}
.forum-table td,
.forum-table th {
  height: 30px;
}
.forum-table td,
.forum-table th.is-leaf {
  border-bottom: 1px solid #ebeef5;
}
</style>
