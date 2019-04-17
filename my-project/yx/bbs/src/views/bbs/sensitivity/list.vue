<template>
  <div class="forum-module" v-loading.body="loading">
    <div class="forum-header">
      <span class="forum-name">敏感词列表</span>
    </div>
    <div class="table-top-bar clearfix val-top-bar">
      <el-button type="warning" @click="addSensitivity">批量添加</el-button>
      <div class="pull-right" style="width:80%">
        <el-form :inline="true" class="demo-form-inline" :rules="rules" :model="fastParams" ref="ruleForm">
          <el-form-item label="敏感词:" prop="search">
            <el-input placeholder="请输入敏感词" v-model="fastParams.search" class="w128"></el-input>
          </el-form-item>
          <el-form-item label="替换为:" prop="replacement">
            <el-input placeholder="请输入替换词" v-model="fastParams.replacement" class="w128"></el-input>
          </el-form-item>
          <el-form-item class='mr0'>
            <el-button type="warning" @click="addFastSensitivity('ruleForm')" class="pull-right">快速添加</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="table-responsive">
      <form class="form-horizontal no-margin">
        <el-table style="width: 100%" :data="sensitivityList" @selection-change="checkIds">
          <el-table-column type="selection" align="center" width="68"></el-table-column>
          <el-table-column label="id" prop="id" align="center" width="68"></el-table-column>
          <el-table-column label="敏感词" prop="search" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.search" style="width:30%;min-width:100px"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="替换为" prop="replacement" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.replacement" style="width:30%;min-width:100px"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center" width="100">
            <template slot-scope="scope">
              <a href="javascript:void(0)" class="t-del iconfont bbs-delete" title="删除" @click="deleteSensitivity(scope.row.id)"></a>
            </template>
          </el-table-column>
        </el-table>
        <!--收缩隐藏-->
      </form>
    </div>
    <!---bottom-->
    <div class="table-bottom-bar">
      <div class="pull-left">
        <el-button @click="batchUpdate" type="warning">保存内容</el-button>
        <el-button :disabled="disabled" @click="deleteSensitivity(ids)">批量删除</el-button>
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
        sensitivityList: [],
        ids: '',//批量删除列表
        groupList: [],//会员组列表
        fastParams: {//快速添加参数
          search: '',
          replacement: ''
        },
        params: {//接口参数
          pageNo: 1,
          pageSize: 20
        },
        totalCount: 0,
        currentPage: 1,
        changePageSize: localStorage.getItem('PageSize'),
        disabled: true,
        rules: {
          search: [{ required: true, message: '请输入敏感词', trigger: 'blur' }],
          replacement: [{ required: true, message: '请输入替换词', trigger: 'blur' }]
        },
        siteId: this.$store.state.siteId
      }
    },
    methods: {
      getSensitivityList() {//获取敏感词信息列表
        let params = this.params;
        params.siteId = this.siteId;
        fetch.getSensitivityList(params)
          .then(res => {
            if (res.code == 1) {
              this.sensitivityList = res.data.rows;
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
      addSensitivity() {//添加敏感词
        this.$router.push({
          path: '/sensitivityedit',
          query: {
            siteId: this.siteId
          }
        })
      },
      addFastSensitivity(formName) {//快速添加
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = this.fastParams;
            params.siteId = this.siteId;
            fetch.addFastSensitivity(params)
              .then(res => {
                this.loading = false;
                if (res.code == 1) {
                  this.$message.success('添加成功');
                  this.getSensitivityList();
                  this.$refs[formName].resetFields();
                } else {
                  this.$message.error('添加失败');
                }
              })
              .catch(res => {
                this.loading = false;
                this.$message.error('网络异常')
              })
          } else {
            return false;
          }
        })
      },
      batchUpdate() {//批量保存内容
        this.loading = true;
        let list = this.sensitivityList;
        let params = {
          ids: [],
          searchs: [],
          replacements: []
        };
        for (let i = 0; i < list.length; i++) {
          params.ids.push(list[i].id);
          params.searchs.push(list[i].search);
          params.replacements.push(list[i].replacement);
        }
        params.ids = params.ids.join(",");
        params.searchs = params.searchs.join(",");
        params.replacements = params.replacements.join(",");
        fetch.sensitivityBatchUpdate(params)
          .then(res => {
            this.loading = false;
            if (res.code == 1) {
              this.$message.success('保存成功');
              this.getSensitivityList();
            } else {
              this.$message.error(res.message);
            }
          })
          .catch(res => {
            this.loading = false;
          })
      },
      deleteSensitivity(id) {//删除敏感词
        this.ids = id;
        this.$confirm('您确定要删除用户吗?', '警告', { type: 'warning' })
          .then(mes => {
            fetch.deleteSensitivityInfo({ids: this.ids})
              .then(res => {
                this.loading = false;
                if (res.code == 1) {
                  this.$message.success('删除成功');
                  this.getSensitivityList();
                } else {
                  this.$message.error(res.msg);
                }
              })
              .catch(res => {
                this.loading = false;
                this.$message.error('网络异常');
              })
          })
          .catch(mes => {})
      },
      getPage(val) {//获取当前页数
        this.loading = true;
        this.params.pageNo = val;
        this.getSensitivityList();
      },
      getSize(val) {//分页
        this.loading = true;
        this.params.pageSize = val;
        this.getSensitivityList();
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
        this.getSensitivityList();
      },
      checkIds(res) {//选中当前的ids
        let ids = [];
        for (let i = 0; i < res.length; i++) {
          ids.push(res[i].id);
        }
        if (ids.length == 0) {
          this.ids = '';
          this.disabled = true;
        } else {
          this.ids = ids.join(',');
          this.disabled = false;
        }
      },
      siteChange: function (value) {
        this.siteId = value;
        this.getSensitivityList();
      }
    },
    created: function () {
      let size = localStorage.getItem('PageSize');
      if (size != null) {
        this.params.pageSize = parseInt(size);//取本地存储的条目
      } else {
        this.changePageSize = 20;
      }
      this.getSensitivityList();
    }
  }
</script>

<style scoped lang="scss">
  .demo-form-inline {
    text-align: right;
  }
</style>
