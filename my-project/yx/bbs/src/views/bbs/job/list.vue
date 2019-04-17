<template>
  <div class="forum-module" v-loading.body="loading">
    <div class="forum-header">
      <span class="forum-name">定时任务列表</span>
    </div>
    <div class="table-top-bar clearfix val-top-bar">
      <el-button type="warning" @click="addJob">添加任务</el-button>
    </div>
    <div class="table-responsive">
      <form class="form-horizontal no-margin">
        <el-table style="width: 100%" :data="jobList">
          <el-table-column type="selection" align="center" width="68"></el-table-column>
          <el-table-column label="id" prop="id" align="center" width="68"></el-table-column>
          <el-table-column label="任务名称" prop="jobName" header-align="center" align="center" sortable="true" :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column label="任务所在组" prop="jobGroup" header-align="center" align="center" sortable="true">
          </el-table-column>
          <el-table-column label="任务描述" prop="description" header-align="center" align="center" sortable="true">
          </el-table-column>
          <el-table-column label="任务类名" prop="jobClassName" header-align="center" align="center" sortable="true">
          </el-table-column>
          <el-table-column label="执行时间" header-align="center" prop="cronExpression" align="center" sortable="true">
          </el-table-column>
          <el-table-column label="操作" header-align="center" align="center" width="300">
            <template slot-scope="scope">
              <a href="javascript:void(0)" class="t-del iconfont bbs-daoju-copy" title="触发" @click="handleTrigger(scope.$index, scope.row)"></a>
              <a href="javascript:void(0)" class="t-del iconfont bbs-daoju-copy" title="暂停" @click="handlePause(scope.$index, scope.row)"></a>
              <a href="javascript:void(0)" class="t-del iconfont bbs-replay" title="恢复" @click="handleResume(scope.$index, scope.row)"></a>
              <a href="javascript:void(0)" class="t-del iconfont bbs-edit" title="修改" @click="handleUpdate(scope.$index, scope.row)"></a>
              <a href="javascript:void(0)" class="t-del iconfont bbs-delete" title="删除" @click="handleDelete(scope.$index, scope.row)"></a>
            </template>
          </el-table-column>
        </el-table>
        <!--收缩隐藏-->
      </form>
    </div>
    <!---bottom-->
    <div class="table-bottom-bar">
      <div class="pull-left">
        <span class="ml-48">每页显示
          <el-input v-model="changePageSize" @blur="changeSize" class="input-sm" type="number" min="1" max="50"></el-input>条,输入后按回车
        </span>
      </div>
      <div class="pull-right">
        <el-pagination layout="total,prev, pager, next" :total="totalCount" :page-size="params.pageSize" :current-page.sync='currentPage' @current-change='getPage' @size-change='getSize'>
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import * as fetch from '../../../api/bbs'
  export default {
    data() {
      return {
        checkAll: false,
        isIndeterminate: true,
        loading: true,
        jobList: [],
        ids: '',//批量删除列表
        params: {//接口参数
          pageNo: 1,
          pageSize: 20
        },
        totalCount: 0,
        currentPage: 1,
        changePageSize: localStorage.getItem('PageSize'),
        disabled: true,
        siteId: this.$store.state.siteId
      }
    },
    methods: {
      getJobList() {
        let params = this.params;
        params.siteId = this.siteId;
        fetch.getJobList(params)
          .then(res => {
            if (res.code == 1) {
              this.jobList = res.data.rows;
              this.totalCount = res.data.total;
              this.loading = false;
            } else {
              this.loading = false;
              this.$message.error(res.msg);
            }
          })
          .catch(res => {
            this.loading = false;
            this.$message.error('网络异常')
          })
      },
      //触发任务
      handleTrigger(index, row) {
        fetch.triggerJob({"id":row.id})
          .then(res => {
            this.loading = false;
            if (res.code == 1) {
              this.$message.success('触发任务成功');
            } else {
              this.$message.error(res.msg);
            }
          })
          .catch(res => {
            this.loading = false;
            this.$message.error('网络异常');
          })
      },
      //停止任务
      handlePause(index, row){
        fetch.pauseJob({"id":row.id})
          .then(res => {
            this.loading = false;
            if (res.code == 1) {
              this.$message.success('停止任务成功');
            } else {
              this.$message.error(res.msg);
            }
          })
          .catch(res => {
            this.loading = false;
            this.$message.error('网络异常');
          })
      },
      //恢复任务
      handleResume(index, row){
        fetch.resumeJob({"id":row.id})
          .then(res => {
            this.loading = false;
            if (res.code == 1) {
              this.$message.success('恢复任务成功');
            } else {
              this.$message.error(res.msg);
            }
          })
          .catch(res => {
            this.loading = false;
            this.$message.error('网络异常');
          })
      },
      //移除任务
      handleDelete(index, row) {
        fetch.deleteJob({"id":row.id})
          .then(res => {
            this.loading = false;
            if (res.code == 1) {
              this.$message.success('删除成功');
              this.getJobList();
            } else {
              this.$message.error(res.msg);
            }
          })
          .catch(res => {
            this.loading = false;
            this.$message.error('网络异常');
          })
      },
      handleUpdate(index, row){
        this.$router.push({
          path: '/job-edit',
          query: {
            type: 'edit',
            id: row.id,
            siteId: this.siteId
          }
        })
      },
      //新建任务(略简单)
      addJob() {
        this.$router.push({
          path: '/job-add',
          query: {
            siteId: this.siteId
          }
        })
      },
      getPage(val) {//获取当前页数
        this.loading = true;
        this.params.pageNo = val;
        this.getJobList();
      },
      getSize(val) {//分页
        this.loading = true;
        this.params.pageSize = val;
        this.getJobList();
      },
      changeSize(event) {//跳页
        let val = event.target.value;
        if (val < 1) {
          localStorage.setItem('PageSize', 20); //处理异常大小
        } else {
          localStorage.setItem('PageSize', val); //本地存储下每页条数
        }
        this.loading = true;
        this.params.pageSize = parseInt(val);
        this.params.pageNo = 1;
        this.currentPage = 1;
        this.getJobList();
      },
      siteChange: function (value) {
        this.siteId = value;
        this.getJobList();
      }
    },
    created: function () {
      let size = localStorage.getItem('PageSize');
      if (size != null) {
        this.params.pageSize = parseInt(size);//取本地存储的条目
      } else {
        this.changePageSize = 20;
      }
      this.getJobList();
    }
  }
</script>

<style scoped>

</style>
