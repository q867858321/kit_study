<template>
  <div class="forum-module inner-module">
    <!--<div style="margin-top: 20px; margin-bottom: 20px">-->
    <!--<el-radio-group v-model='siteId' size="mini" @change="siteChange">-->
    <!--<el-radio label='1' border>俄罗斯论坛</el-radio>-->
    <!--<el-radio label='2' border>印度论坛</el-radio>-->
    <!--</el-radio-group>-->
    <!--</div>-->
    <div class="table-top-bar clearfix">
      <a href="javascript:void(0)" class="add-Class" @click="addTopicType()">添加</a>
    </div>
    <div class="table-responsive" v-loading.body="loading">
      <form class="form-horizontal no-margin">
        <el-table style="width: 100%" :data="topicTypeList" @selection-change="checkIds">
          <el-table-column type="selection" align="center" width="68"></el-table-column>
          <el-table-column label="id" prop="id" align="center" width="68"></el-table-column>
          <el-table-column label="话题" prop="name" align="center"></el-table-column>
          <el-table-column label="路径" prop="path" align="center"></el-table-column>
          <el-table-column label="排序" prop="priority" align="center"></el-table-column>
          <el-table-column label="主题数" prop="topicCount" align="center"></el-table-column>
          <el-table-column label="加精数" prop="topicEssenceCount" align="center"></el-table-column>
          <el-table-column label="订阅数" prop="subscribeCount" align="center"></el-table-column>
          <el-table-column label="是否显示" prop="display" align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.display">是</span>
              <span class="red" v-else>否</span>
            </template>
          </el-table-column>

          <el-table-column label="关联的版块" width="100">
            <template slot-scope="scope">11</template>
          </el-table-column>
          <el-table-column label="操作" :width="200" align="center">
            <template slot-scope="scope">
              <a
                href="javascript:void(0)"
                class="t-edit bbs-edit"
                title="编辑"
                @click="editTopicType(scope.row.id)"
              ></a>
              <a
                href="javascript:void(0)"
                class="t-del iconfont bbs-delete"
                title="删除"
                @click="deleteTopicType(scope.row.id)"
              ></a>
            </template>
          </el-table-column>
        </el-table>
        <!--收缩隐藏-->
      </form>
    </div>
    <!---bottom-->
    <div class="table-bottom-bar">
      <div class="pull-left">
        <el-button :disabled="disabled" @click="deleteTopicTypeAll">批量删除</el-button>
        <span class="ml-48">
          每页显示
          <el-input
            v-model="changePageSize"
            @blur="changeSize"
            class="input-sm"
            type="number"
            min="1"
            max="50"
          ></el-input>条,输入后按回车
        </span>
      </div>
      <div class="pull-right">
        <el-pagination
          layout="total,prev, pager, next"
          :total="totalCount"
          :page-size="params.pageSize"
          :current-page.sync="currentPage"
          @current-change="getPage"
          @size-change="getSize"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import * as fetch from "../../../api/bbs";
import relevanceForumPop from "./relevanceForumPop";
export default {
  components: { relevanceForumPop },
  data() {
    return {
      siteId: this.$store.state.siteId,
      checkAll: false,
      isIndeterminate: true,
      loading: true,
      topicTypeList: [],
      ids: "", //批量删除列表
      sort: this.$store.state.sort, //排序列表
      lastLoginDay: this.$store.state.lastLoginDay, //时间排序列表
      groupList: [], //会员组列表
      params: {
        //接口参数
        pageNo: 1,
        pageSize: 20,
        root: ""
      },
      totalCount: 0,
      currentPage: 1,
      changePageSize: localStorage.getItem("PageSize"),
      disabled: true
    };
  },
  watch: {
    $route: function(to, from) {
      this.params.root = this.$route.query.id; //获取树形id
      this.loading = true;
      this.getTopicTypeList();
    }
  },
  created: function() {
    let size = localStorage.getItem("PageSize");
    if (size != null) {
      this.params.pageSize = parseInt(size); //取本地存储的条目
    } else {
      this.changePageSize = 20;
    }
    this.params.root = this.$route.query.id; //获取树形id
    this.getTopicTypeList();
  },
  methods: {
    getTopicTypeList() {
      // 获取主题信息列表
      let params = this.params;
      params.siteId = this.siteId;
      fetch
        .getTopicTypeList(params)
        .then(res => {
          if (res.code == 1) {
            this.topicTypeList = res.data.rows;
            this.totalCount = res.data.total;
            this.loading = false;
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
    addTopicType() {
      // 添加主题
      this.$router.push({
        path: "/topictypeadd",
        query: {
          type: "add",
          id: 0,
          siteId: this.siteId
        }
      });
    },
    editTopicType(id) {
      // 修改主题
      this.$router.push({
        path: "/topictypeedit",
        query: {
          type: "edit",
          id: id,
          siteId: this.siteId
        }
      });
    },
    deleteTopicType(id) {
      // 删除主题
      this.ids = id;
      this.$confirm("您确定要删除主题吗?", "警告", { type: "warning" })
        .then(mes => {
          fetch
            .deleteTopicTypeInfo({ ids: this.ids })
            .then(res => {
              this.loading = false;
              if (res.code == 1) {
                this.$message.success("删除成功");
                this.getTopicTypeList();
              } else {
                this.$message.error(res.msg);
              }
            })
            .catch(res => {
              this.loading = false;
              this.$message.error("网络异常");
            });
        })
        .catch(mes => {});
    },
    deleteTopicTypeAll() {
      //批量删除主题
      this.$confirm("您确定要删除主题吗?", "警告", { type: "warning" })
        .then(mes => {
          fetch
            .deleteTopicTypeInfo({ ids: this.ids })
            .then(res => {
              this.loading = false;
              if (res.code == 1) {
                this.$message.success("删除成功");
                this.getTopicTypeList();
              } else {
                this.$message.error(res.msg);
              }
            })
            .catch(res => {
              this.loading = false;
              this.$message.error("网络异常");
            });
        })
        .catch(mes => {});
    },
    getPage(val) {
      //获取当前页数
      this.loading = true;
      this.params.pageNo = val;
      this.getTopicTypeList();
    },
    getSize(val) {
      //分页
      this.loading = true;
      this.params.pageNo = val;
      this.getTopicTypeList();
    },
    changeSize(event) {
      //跳页
      let val = event.target.value;
      if (val < 1) {
        localStorage.setItem("PageSize", 20); //处理异常大小
        val = 20;
      } else {
        localStorage.setItem("PageSize", val); //本地存储下每页条数
      }
      this.loading = true;
      this.params.pageSize = parseInt(val);
      this.params.pageNo = 1;
      this.currentPage = 1;
      this.getTopicTypeList();
    },
    checkIds(res) {
      //选中当前的ids
      let ids = [];
      for (let i = 0; i < res.length; i++) {
        ids.push(res[i].id);
      }
      if (ids.length == 0) {
        this.ids = "";
        this.disabled = true;
      } else {
        this.ids = ids.join(",");
        this.disabled = false;
      }
    },
    siteChange: function(value) {
      this.siteId = value;
      this.getTopicTypeList();
    },
    relevanceForum(forumId) {
      let aa = this.moderatorsStrVisible;

      this.moderatorsStrVisible = !aa;
      this.forumId = forumId;
    }
  }
};
</script>

<style scoped>
.forum-table {
  width: 100%;
}
.forum-table tbody tr:nth-child(odd) {
  background: #fafbfc;
}
.forum-table td,
.forum-table th {
  height: 20px;
}
.forum-table td,
.forum-table th.is-leaf {
  border-bottom: 1px solid #ebeef5;
}
</style>
