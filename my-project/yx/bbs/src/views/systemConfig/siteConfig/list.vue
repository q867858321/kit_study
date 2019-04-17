<template>
  <div class="forum-module inner-module">
    <div class="table-top-bar clearfix">
      <a href="javascript:void(0)" class="add-Class" @click="addSite()">添加</a>
    </div>
    <div class="table-responsive" v-loading.body="loading">
      <form class="form-horizontal no-margin" >
        <el-table style="width: 100%" :data="siteList" @selection-change="checkIds">
          <el-table-column type="selection" align="center" width="68"></el-table-column>
          <el-table-column label="id" prop="id" align="center" width="68"></el-table-column>
          <el-table-column label="域名" prop="domain" align="center" ></el-table-column>
          <el-table-column label="路径" prop="path" align="center" ></el-table-column>
          <el-table-column label="网站名称" prop="name" align="center" ></el-table-column>
          <el-table-column label="简短名称" prop="shortName" align="center" ></el-table-column>
          <el-table-column label="协议" prop="protocol" align="center" ></el-table-column>
          <el-table-column label="动态页后缀" prop="dynamicSuffix" align="center" ></el-table-column>
          <el-table-column label="简短名称" prop="staticSuffix" align="center" ></el-table-column>
          <el-table-column label="静态页后缀" prop="shortName" align="center" ></el-table-column>
          <el-table-column label="操作"  :width="200" align="center">
            <template slot-scope="scope">
              <a href="javascript:void(0)" class="t-edit iconfont bbs-edit" title="编辑" @click="editSite(scope.row.id)"></a>
              <a href="javascript:void(0)" class="t-del iconfont bbs-delete" title="删除" @click="deleteSite(scope.row.id)"></a>
            </template>
          </el-table-column>
        </el-table>
      </form>
    </div>
    <!---bottom-->
    <div class="table-bottom-bar">
      <div class="pull-left">
        <el-button :disabled="disabled" @click="deleteSiteAll">批量删除</el-button>
        <span class="ml-48">每页显示
                    <el-input v-model="changePageSize"   @blur="changeSize" class="input-sm" type="number" min="1" max="50"></el-input>条,输入后按回车</span>
      </div>
      <div class="pull-right">
        <el-pagination layout="total,prev, pager, next" :total="totalCount" :page-size="params.pageSize" :current-page.sync='currentPage' @current-change='getPage' @size-change='getSize'>
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import * as fetch from '../../../api/systemConfig'
  export default {
    data() {
      return {
        checkAll: false,
        isIndeterminate: true,
        loading: true,
        siteList: [],
        ids: '',//批量删除列表
        sort: this.$store.state.sort,//排序列表
        lastLoginDay: this.$store.state.lastLoginDay,//时间排序列表
        params: {//接口参数
          pageNo: 1,
          pageSize: 20
        },
        totalCount: 0,
        currentPage: 1,
        changePageSize: localStorage.getItem('PageSize'),
        disabled: true,
        siteId: '1'
      }
    },
    methods: {
      getSiteList() {
        let params = this.params;
        fetch.getSiteList(params)
          .then(res => {
            if (res.code == 1) {
              this.siteList = res.data.rows;
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
      addSite() {
        this.$router.push({
          path: '/site-add',
          query: {
            type: 'add',
            id: 0
          }
        })
      },
      editSite(id) {
        this.$router.push({
          path: '/site-edit',
          query: {
            type: 'edit',
            id: id
          }
        })
      },
      deleteSite(id) {
        this.ids = id;
        this.$confirm('您确定要删除站点吗?', '警告', { type: 'warning' })
          .then(mes => {
            fetch.deleteSiteInfo({ids: this.ids})
              .then(res => {
                this.loading = false;
                if (res.code == 1) {
                  this.$message.success('删除成功');
                  this.getSiteList();
                } else {
                  this.$message.error(res.msg);
                }
              })
              .catch(res => {
                this.loading = false;
                this.$message.error('网络异常');
              })
          })
          .catch(mes => {
            return false;
          })
      },
      deleteSiteAll() {
        this.$confirm('您确定要删除主题吗?', '警告', { type: 'warning' })
          .then(mes => {
            fetch.deleteSiteInfo({ids: this.ids})
              .then(res => {
                if (res.code == 1) {
                  this.$message.success('删除成功');
                  this.getSiteList();
                } else {
                  this.$message.error(res.msg);
                }
              })
              .catch(res => {
                this.loading = false;
                this.$message.error('网络异常')
              })
          })
          .catch(mes => {})
      },
      getPage(val) {//获取当前页数
        this.loading = true;
        this.params.pageNo = val;
        this.getSiteList();
      },
      getSize(val) {//分页
        this.loading = true;
        this.params.pageNo = val;
        this.getSiteList();
      },
      changeSize(event) {//跳页
        let val = event.target.value;
        if (val < 1) {
          localStorage.setItem('PageSize', 20); //处理异常大小
          val = 20;
        } else {
          localStorage.setItem('PageSize', val); //本地存储下每页条数
        }
        this.loading = true;
        this.params.pageSize = parseInt(val);
        this.params.pageNo = 1;
        this.currentPage = 1;
        this.getSiteList();
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
      }
    },
    created: function () {
      let size = localStorage.getItem('PageSize');
      if (size != null) {
        this.params.pageSize = parseInt(size);//取本地存储的条目
      } else {
        this.changePageSize = 20;
      }
      this.getSiteList();
    },
    watch: {
      '$route': function(to, from) {
        this.loading = true;
        this.getSiteList();
      }
    }
  }
</script>

<style scoped>

</style>
