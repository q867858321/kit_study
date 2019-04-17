<template>
  <div class="forum-module" v-loading.body="loading">
    <div class="forum-header">
      <span class="forum-name">用户列表</span>
    </div>
    <div class="table-top-bar clearfix">
      <div class="query-inline-box flex-between">
        <a href="javascript:void(0)" class="add-Class" @click="addUser">添加</a>
        <div class="query-inline-box">
          <div class="query-inline-group">
            <el-select placeholder="用户组" v-model="params.groupId" @change="selectQuery">
              <el-option label="所有分组" value=""></el-option>
              <el-option v-for="item in groupList" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </div>
          <div class="query-inline-group">
            <el-select placeholder="排序" v-model="params.orderBy" @change="selectQuery">
              <el-option v-for="item in sort" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="query-inline-group">
            <label>最近登录:</label>
            <el-select placeholder="登录时间" v-model="params.lastLoginDay" @change="selectQuery">
              <el-option v-for="item in lastLoginDay" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="query-inline-group">
            <el-input placeholder="请输入用户名" icon="search" v-model="params.username" :on-icon-click="queryUserName"></el-input>
          </div>
        </div>
      </div>
    </div>
    <div class="table-responsive">
      <form class="form-horizontal no-margin">
        <el-table style="width: 100%" :data="userList" @selection-change="checkIds">
          <el-table-column type="selection" width="68" align="center"></el-table-column>
          <el-table-column label="id" prop="id" align="center" :width="68"></el-table-column>
          <el-table-column label="用户名" prop="username" align="center"></el-table-column>
          <el-table-column label="会员组" prop="groupName" align="center"></el-table-column>
          <el-table-column label="积分" prop="point" align="center"></el-table-column>
          <el-table-column label="威望" prop="prestige" align="center"></el-table-column>
          <el-table-column label="最后登录时间" prop="lastLoginTime" align="center" :width="220"></el-table-column>
          <el-table-column label="最近登录IP" prop="lastLoginIp" align="center"></el-table-column>
          <el-table-column label="登录次数" prop="loginCount" align="center"></el-table-column>
          <el-table-column label="启用" prop="disabled" align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.disabled" class="red">否</span>
              <span v-else>是</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center" width="200">
            <template slot-scope="scope">
              <a href="javascript:void(0)" class="t-edit iconfont bbs-edit" title="编辑" @click="editUser(scope.row.id)">
              </a>
              <a href="javascript:void(0)" class="t-del iconfont bbs-delete" title="删除" @click="deleteUser(scope.row.id)"></a>
            </template>
          </el-table-column>
        </el-table>
      </form>
    </div>
    <div class="table-bottom-bar">
      <div class="pull-left">
        <el-button :disabled="disabled" @click="deleteUserAll">批量删除</el-button>
        <span class="ml-48">每页显示
                    <el-input v-model="changePageSize" @blur="changeSize" class="input-sm" type="number" min="1" max="50"></el-input>条,输入后按回车</span>
      </div>
      <div class="pull-right">
        <el-pagination layout="total,prev, pager, next" :total="totalCount" :page-size="params.pageSize" :current-page.sync='currentPage' @current-change='getPage' @size-change='getSize'>
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import * as fetch from "../../../api/usermanage";
  export default {
    data() {
      return {
        checkAll: false,
        isIndeterminate: true,
        loading: true,
        userList: [],
        ids: "", //批量删除列表
        sort: this.$store.state.sort, //排序列表
        lastLoginDay: this.$store.state.lastLoginDay, //时间排序列表
        groupList: [], //会员组列表
        params: { //接口参数
          siteId: this.$store.state.siteId,
          pageNo: 1,
          pageSize: 20,
          orderBy: "", //排序
          groupId: "", //会员组查询
          lastLoginDay: "", //登录时间
          username: "" //用户名
        },
        totalCount: 0,
        currentPage: 1,
        changePageSize: localStorage.getItem("PageSize"),
        disabled: true
      }
    },
    methods: {
      getUserGroupList() { //获取会员组
        fetch.getGroupList({groupType: -1})
          .then(res => {
            this.groupList = res.data;
          })
      },
      getUserList() { //获取用户信息列表
        let params = this.params;
        fetch.getUserList(params)
          .then(res => {
            if (res.code == 1) {
              this.userList = res.data.rows;
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
          })
      },
      addUser() {//添加用户
        this.$router.push({
          path: "/useradd",
          query: {
            type: "add",
            id: 0
          }
        });
      },
      editUser(id) {//修改用户
        this.$router.push({
          path: "/useredit",
          query: {
            type: "edit",
            id: id
          }
        });
      },
      deleteUser(id) { //删除用户
        this.ids = id;
        this.$confirm("您确定要删除用户吗?", "警告", {type: "warning"})
          .then(mes => {
            fetch.deleteUserInfo({ids: this.ids})
              .then(res => {
                this.loading = false;
                if (res.code == 1) {
                  this.$message.success("删除成功");
                  this.getUserList();
                } else {
                  this.$message.error(res.msg);
                }
              })
              .catch(res => {
                this.loading = false;
                this.$message.error("网络异常");
              })
          })
          .catch(mes => {})
      },
      selectQuery(val) { //下拉条件搜索
        this.getUserList();
      },
      queryUserName(ev) { //用户名搜索
        this.loading = true;
        this.getUserList();
      },
      getPage(val) {//获取当前页数
        this.loading = true;
        this.params.pageNo = val;
        this.getUserList();
      },
      getSize(val) {//分页
        this.loading = true;
        this.params.pageNo = val;
        this.getUserList();
      },
      changeSize(event) {//跳页
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
        this.getUserList();
      },
      checkIds(res) { //选中当前的ids
        let ids = [];
        for (let i = 0; i < res.length; i++) {
          ids.push(res[i].id);
        }
        if (ids.length == 0) {
          this.ids = "";
          this.disabled = true;
        } else {
          this.ids = ids.join(',');
          this.disabled = false;
        }
      }
    },
    created: function () {
      let size = localStorage.getItem("PageSize");
      if (size != null) {
        this.params.pageSize = parseInt(size); //取本地存储的条目
      } else {
        this.changePageSize = 20;
      }
      this.getUserGroupList();
      this.getUserList();
    }
  }
</script>

<style scoped>

</style>
