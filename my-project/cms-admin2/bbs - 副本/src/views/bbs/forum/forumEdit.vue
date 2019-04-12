<template>
  <div class="forum-module">
    <div class="forum-header">
      <span class="forum-name">{{$route.name}}</span>
      <span class="forum-hint">带"*"号的为必填项</span>
    </div>
    <div class="table-body table-responsive">
      <el-form :rules="rulesList" :model="ruleForm" ref="forumInfo">
        <el-form-item label="所属分区" class="form-group">
          <el-col :span="6">
            <el-select placeholder="所属分区" v-model="ruleForm.category" @change="changeIds">
              <el-option v-for="item in categoryList" :key="item.id" :label="item.title" :value="item.id">
              </el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="版块名称" class="form-group" prop="title">
          <el-col :span="6">
            <el-input v-model="ruleForm.title"></el-input>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
          <el-col :span="10"></el-col>
        </el-form-item>
        <el-form-item label="访问路径" class="form-group" prop="path">
          <el-col :span="6">
            <el-input v-model="ruleForm.path" @change="replaceStr"></el-input>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
          <el-col :span="10" class="font-hint">请输入英文字母或数字</el-col>
        </el-form-item>
        <el-form-item label="是否为游戏" class="form-group">
            <el-switch on-text="是" off-text="否" v-model="ruleForm.isGame"></el-switch>
        </el-form-item>
        <el-form-item label="关键字" class="form-group">
          <el-col :span="6">
            <el-input v-model="ruleForm.keywords"></el-input>
          </el-col>
          <el-col :span="1" class="required">&nbsp;</el-col>
          <el-col :span="10" class="font-hint">关键字，用于搜索引擎优化</el-col>
        </el-form-item>
        <el-form-item label="版主" class="form-group">
          <el-col :span="6">
            <el-input v-model="ruleForm.moderatorsStr"></el-input>
          </el-col>
          <el-col :span="1" class="required">&nbsp;</el-col>
          <el-col :span="10" class="font-hint">
             <i class="el-icon-circle-plus" @click="moderatorsStrVisible = true"></i>
             多个版主用","号隔开
          </el-col>
        </el-form-item>
        <!--高级设置-->
        <el-form-item label="" class="form-group">
          <span class="setting-collapse-option">高级设置</span>
        </el-form-item>
        <div v-if="collapse">
          <el-form-item label="版块介绍" class="form-group">
            <el-col :span="6">
              <el-input type="textarea" v-model="ruleForm.description"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="版块规则" class="form-group">
            <el-col :span="6">
              <el-input type="textarea" v-model="ruleForm.forumRule"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="外部链接" class="form-group">
            <el-col :span="6">
              <el-input v-model="ruleForm.outerUrl"></el-input>
            </el-col>
            <el-col :span="1" class="required">&nbsp;</el-col>
            <el-col :span="10" class="font-hint">指向外部url</el-col>
          </el-form-item>
          <!---积分规则-->
          <el-form-item label="积分规则" class="form-group">
            <div class="form-content">
              <label class="label-edit">发帖得积分</label>
              <el-input v-model="ruleForm.pointTopic" type="number"></el-input>
            </div>
            <div class="form-content">
              <label class="label-mes">回复得积分</label>
              <el-input v-model="ruleForm.pointReply" type="number"></el-input>
            </div>

            <div class="form-content">
              <label class="label-hot">加精华得积分</label>
              <el-input v-model="ruleForm.pointPrime" type="number"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="发帖是否需要审核" class="form-group" >
            <el-switch on-text="是" off-text="否" v-model="ruleForm.topicNeedCheck"></el-switch>
          </el-form-item>
          <el-form-item label="回帖是否需要审核" class="form-group" >
            <el-switch on-text="是" off-text="否" v-model="ruleForm.postNeedCheck"></el-switch>
          </el-form-item>
        </div>
      </el-form>
      <div class="margin-md">
        <input type="button" value="提交" class="bbs-submit" @click="updateForum" />
        <input type="reset" value="重置" class="bbs-reset" />
      </div>


      <el-dialog
        title="用户"
        :visible.sync="moderatorsStrVisible"
        width="30%"
        :before-close="handleClose">
        <el-form :inline="true" class="demo-form-inline">
          <div style="text-align:left;">
            <el-form-item label="用户">
              <el-input v-model="moderators" placeholder="版主"></el-input>
            </el-form-item>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            ba
          </div>
        </el-form>
        <el-table :data="moderatorsList" style="width: 100%">
          <el-table-column prop="date" label="日期"  width="180"></el-table-column>
          <el-table-column  prop="name"  label="姓名"  width="180"> </el-table-column>
          <el-table-column  prop="address" label="地址"></el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="moderatorsStrVisible = false">取 消</el-button>
          <el-button type="primary" @click="moderatorsStrVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import * as fetch from "../../../api/bbs";
export default {
  data() {
    var validateTitle = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入版块名称"));
      } else {
        let reg = /[^A-Za-z0-9\u4e00-\u9fa5]/g;
        if (reg.test(value)) {
          callback(new Error("版块名称只能输入数字，字母和中文"));
        } else {
          callback();
        }
      }
    };
    var validatePath = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入版块路径"));
      } else {
        let reg = /[\W]/g;
        if (reg.test(value)) {
          callback(new Error("版块名称只能输入数字，字母"));
        } else {
          callback();
        }
      }
    };
    return {
      collapse: false,
      ruleForm: {},
      categoryList: [],
      rulesList: {
        title: [{ validator: validateTitle, trigger: "blur" }],
        path: [{ validator: validatePath, trigger: "blur" }]
      },
      moderatorsStrVisible: false, //版主弹出框是否显示
      moderatorsList: [
        {
          //版主
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      currentPage: 2,
      moderators: ""
    };
  },
  watch: {
    ruleForm: {
      handler: function(newVal, oldVal) {
        this.ruleForm.path = this.ruleForm.path;
      },
      deep: true
    }
  },
  mounted() {
    let self = this;
    $(function() {
      $(".table-body").on("click", ".setting-collapse-option", function() {
        $(this).toggleClass("setting-collapse-option-on");
        if ($(this).hasClass("setting-collapse-option-on")) {
          self.collapse = true;
        } else {
          self.collapse = false;
        }
      });
    });
  },
  created: function() {
    let id = this.$route.query.id;
    let siteId = this.$route.query.siteId;
    this.getForum(id);
    this.getCategoryList(siteId);
  },
  methods: {
    getCategoryList(siteId) {
      fetch.getCategoryList({ siteId: siteId }).then(res => {
        this.categoryList = res.data;
      });
    },
    getForum(id) {
      fetch
        .getForum({ id: id })
        .then(res => {
          this.ruleForm = res.data;
        })
        .catch(res => {
          this.$message("请求错误");
        });
    },
    changeIds(res) {
      let title = "";
      for (let i = 0; i < this.categoryList.length; i++) {
        if (this.categoryList[i].id == res) {
          title = this.categoryList[i].title;
          break;
        }
      }
      this.ruleForm.category = res;
      this.ruleForm.categoryTitle = title;
    },
    updateForum() {
      let params = {};
      for (let key in this.ruleForm) {
        params[key] = this.ruleForm[key];
      }
      params.siteId = this.$route.query.siteId;
      fetch
        .updateForum(params)
        .then(res => {
          if (res.code == 1) {
            this.$message({
              message: "修改成功!",
              type: "success"
            });
            setTimeout(() => {
              this.$router.push({ path: "/forum" });
            }, 500);
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        })
        .catch(res => {
          this.$message({
            message: "修改异常",
            type: "error"
          });
        });
    },
    handleClose(done) {},
    replaceStr(val) {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style scoped lang='scss'>
.form-content {
  display: inline-block;
  float: left;
  margin-right: 30px;

  > label {
    position: relative;
    color: #353535;
    padding-left: 21px;
    margin-right: 5px;
  }
  > .el-input {
    width: 80px;
  }
}
@media screen and(max-width:1390px) {
  .form-content {
    margin-bottom: 10px;
  }
}
</style>
