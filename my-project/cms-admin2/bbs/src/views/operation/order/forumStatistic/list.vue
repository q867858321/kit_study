<template>
  <div class="forum-module" v-loading.body="loading">
    <div class="forum-header">
      <span class="forum-name">数据中心列表</span>
    </div>
    <div class="table-top-bar clearfix">
      <div class="query-inline-box flex-left">
        <div class="query-inline-group">
          <label>时间段查询:</label>
          <el-date-picker v-model="params.begin" @keyup.enter.native="query" @change="formatTime"></el-date-picker>
          <span class="time-slot">-</span>
          <el-date-picker @keyup.enter.native="query" v-model="params.end" @change="formatTime2"></el-date-picker>
        </div>
        <div class="query-inline-group">
          <el-button @click="query" type="warning">查询</el-button>
        </div>
      </div>
    </div>
    <div class="table-responsive">
      <form class="form-horizontal no-margin">
        <el-table style="width: 100%" :data="orderList">
          <el-table-column label="版块" prop="forumTitle" align="center"></el-table-column>
          <el-table-column label="贴子数" prop="sumTopicCount" align="center"></el-table-column>
          <el-table-column label="回复数" prop="sumPostCount" align="center"></el-table-column>
          <el-table-column label="访问量" prop="sumVisitCount" align="center"></el-table-column>
        </el-table>
      </form>
    </div>
    <div class="table-bottom-bar">
      <div class="pull-left">
        <a :href="exportLink" class="el-button el-button--default">导出</a>
        <span class="ml-48">每页显示
                    <el-input v-model="changePageSize" @blur="changeSize" @keyup.enter.native="changeSize" class="input-sm" type="number" min="1" max="50"></el-input>条,输入后按回车</span>
      </div>
      <div class="pull-right">
        <el-pagination layout="total,prev, pager, next" :total="totalCount" :page-size="params.pageSize" :current-page.sync='currentPage' @current-change='getPage' @size-change='getSize'>
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import * as fetch from '../../../../api/operation'
  import * as exportExcel from '../../../../api/exportLink'
  export default {
    data() {
      return {
        checkAll: false,
        isIndeterminate: true,
        loading: true,
        orderList: [],
        ids: '',//批量删除列表
        groupList: [],//会员组列表
        params: {//接口参数
          begin: '',
          end: '',
          pageNo: 1,//
          pageSize: 20,//
          siteId: this.$store.state.siteId
        },
        totalCount: 0,
        currentPage: 1,
        changePageSize: localStorage.getItem('PageSize'),
        exportLink:'#'
      }
    },
    methods: {
      getOrderList() {// 获取用户信息列表
        let params = this.params;
        fetch.getForumStatisticList(params)
          .then(res => {
            if (res.code == 1) {
              this.loading = false;
              this.orderList = res.data;
            } else {
              this.loading = false;
              this.$message.error(res.msg);
            }
          })
      },
      formatTime(val){
        this.params.begin=val
      },
      formatTime2(val){
        this.params.end=val
      },
      getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var currentDate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        return currentDate;
      },
      query(){
        this.loading = true;
        this.getOrderList();
      },
      getPage(val) {//获取当前页数
        this.loading = true;
        this.params.pageNo = val;
        this.getOrderList();
      },
      getSize(val) {//分页
        this.loading = true;
        this.params.pageNo = val;
        this.getOrderList();
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
        this.getOrderList();
      }
    },
    watch:{
      'params': {
        handler(curVal,oldVal){
          this.exportLink = exportExcel.forumStatisticExport(this.params);
        },
        deep:true
      }
    },
    created: function() {
      let size = localStorage.getItem('PageSize');
      if (size != null) {
        this.params.pageSize = parseInt(size);//取本地存储的条目
      } else {
        this.changePageSize = 20;
      }
      this.params.begin=this.getNowFormatDate();
      this.params.end=this.getNowFormatDate();
      this.getOrderList();
    }
  }
</script>

<style scoped>
  .pull-right{
    text-align: right;
  }
  .pull-right label{
    display: inline-block;
    margin-top:8px;
    padding-right: 5px;
  }
</style>
