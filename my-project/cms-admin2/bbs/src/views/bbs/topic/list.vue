<template>
  <div class="forum-module" v-loading.body="loading">
    <div class="forum-header">
      <span class="forum-name">帖列表</span>
    </div>
    <el-form :inline="true" class="demo-form-inline" style="margin:20px 20px 0;">
      <el-form-item>
        <!-- {{topicParams}} -->
        <el-input v-model="params.title" placeholder="标题"></el-input>
      </el-form-item>
      <el-form-item>
        <el-cascader
          :options="forums"
          placeholder="请选择版块"
          :props="forumSelectProps"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>
      <el-select v-model="params.type" placeholder="请选择主题分类" v-if="topicTypeOptions.length>0">
        <el-option
          v-for="item in topicTypeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          @change="getTopicList"
        ></el-option>
      </el-select>
      <el-button type="primary" icon="el-icon-search" @click="getTopicList">搜索</el-button>
      <el-button type="text" @click="topicShowFn">新增</el-button>
    </el-form>
    <div class="table-top-bar clearfix val-top-bar"></div>
    <div class="table-body table-responsive">
      <table class="bbs-table">
        <tr>
          <th>ID</th>
          <th>标题</th>
          <th>简介</th>
          <th>类型</th>
          <th>发帖时间</th>
          <th>作者</th>
          <th>操作</th>
        </tr>
        <tbody class="first-table">
          <tr class="parent-module" v-for="(item,index) in topicList" :key="index">
            <td style="width:150px;">{{item.id}}</td>
            <td style="width:300px;">
              <span class="title_box" :title="item.title">{{item.title}}</span>
              <span class="top">顶</span>
              <span class="top">精</span>
            </td>
            <td style="width:350px;">
              <div class="title_box2" :title="item.title">{{item.summary}}</div>
            </td>
            <td>{{item.types}}</td>
            <td>{{item.createTime}}</td>
            <td>{{item.author}}</td>
            <td style="width:250px;" class="btn_box">
              <el-button type="text">删除</el-button>
              <el-button type="text">置顶</el-button>
              <el-button type="text">屏蔽</el-button>
              <el-button type="text" @click="topicShowFn">修改</el-button>
            </td>
          </tr>
        </tbody>
        <!-- <tbody class="first-table" v-for="(hotTopic,index) in hotTopicList" :key="hotTopic.id">
            <tr class="parent-module">
              <td class="td-5">{{hotTopic.id}}</td>
              <td>{{hotTopic.topic.title}}</td>
              <td class="td-20">{{hotTopic.topic.summary}}</td>
              <td class="td-10">{{hotTopic.topic.createTime}}</td>
              <td class="td-10">{{hotTopic.topic.author.name}}</td>
              <td class="td-15">
                <a
                  href="javascript:void(0)"
                  title="移动到最底部"
                  @click="hotTopicSwapItems(index,0,'down')"
                  v-show="index+1 != hotTopicList.length"
                >
                  <i class="iconfont bbs-xiayi"></i>
                </a>
                <a
                  href="javascript:void(0)"
                  title="向下移动"
                  @click="hotTopicSwapItems(index,index+1,'none')"
                  v-show="index+1 != hotTopicList.length"
                >
                  <i class="iconfont bbs-xiayi1"></i>
                </a>
                <a
                  href="javascript:void(0)"
                  title="向上移动"
                  @click="hotTopicSwapItems(index,index-1,'none')"
                  v-show="index != 0"
                >
                  <i class="iconfont bbs-shangyi1" title="向上移动"></i>
                </a>
                <a
                  href="javascript:void(0)"
                  title="移动到顶部"
                  @click.native="hotTopicSwapItems(index,0,'up')"
                  v-show="index != 0"
                >
                  <i class="iconfont bbs-shangyi"></i>
                </a>
              </td>
              <td class="td-15">
                <a
                  class="t-del"
                  @click="deleteHotTopic(hotTopic.id,hotTopic.addState,index1,index)"
                >
                  <i class="iconfont bbs-delete"></i>
                </a>
              </td>
            </tr>
        </tbody>-->
      </table>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-size="10"
          layout="prev, pager, next, jumper"
          :total="topicTotal"
        ></el-pagination>
      </div>
    </div>

    <el-dialog title="用户" :visible.sync="topicVisible" width="50%" :before-close="handleClose">
      <span slot="footer" class="dialog-footer">
        <el-button @click="topicVisible = false">取 消</el-button>
        <el-button type="primary" @click="topicVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- <topicUpdatePop :show="topicVisible"></topicUpdatePop> -->
  </div>
</template>

<script>
import * as fetch from "@/api/bbs";
import { formatDate } from "@/utils/date";
import topicUpdatePop from "./topicUpdatePop";
export default {
  components: {
    topicUpdatePop
  },
  data() {
    return {
      checkAll: false,
      isIndeterminate: true,
      loading: false,
      topicTotal: 0,
      topicList: [
        // {
        //   id: null,
        //   summary: "too嗯吐了",
        //   title: "这是game中的论坛",
        //   createTime: "2019-01-16 20:22:24",
        //   author: "Dzp",
        //   types: "求助",
        //   isTop: false,
        //   isPrime: false
        // }
      ],
      ids: "111", //批量删除列表
      disabled: true,
      siteId: this.$store.state.siteId,
      params: {
        siteId: this.$store.state.siteId,
        pageNo: 1,
        pageSize: 10,
        forumId: null, //
        type: null,
        title: ""
      },
      forums: [
        // {
        //   value: "ziyuan",
        //   label: "资源",
        //   children: [
        //     {
        //       value: "axure",
        //       label: "Axure Components"
        //     },
        //     {
        //       value: "sketch",
        //       label: "Sketch Templates"
        //     },
        //     {
        //       value: "jiaohu",
        //       label: "组件交互文档"
        //     }
        //   ]
        // }
      ],
      forumSelectProps: {
        value: "id",
        label: "title",
        children: "forums"
      },
      topicTypeOptions: [
        // {
        //   value: "选项1",
        //   label: "黄金糕"
        // }
      ],
      topicType: "",
      selectedOptions: [],
      topicVisible: false
    };
  },
  computed: {
    hotTopicIds() {
      //构造分区id
      let params = this.hotTopicList;
      let arr = [];
      for (let i = 0; i < params.length; i++) {
        arr.push(params[i].id);
      }
      return arr;
    }
  },
  created: function() {
    let size = localStorage.getItem("PageSize");
    if (size != null) {
      this.params.pageSize = parseInt(size); //取本地存储的条目
    } else {
      this.changePageSize = 20;
    }
    this.getTopicList();
    this.listGroupByCategory();
    //this.getforum()
  },
  methods: {
    getTopicList() {
      //获取敏感词信息列表
      let params = this.params;
      let _this = this;
      console.log("params", params);
      fetch
        .getTopicList(params)
        .then(res => {
          if (res.code == 1) {
            _this.topicTotal = res.data.total;
            _this.topicList = [];
            res.data.rows.forEach(function(item, index) {
              let types = "";
              item.types.forEach(function(typeItem, index) {
                types = types + "," + typeItem.name;
              });
              _this.topicList.push({
                id: item.id,
                summary: item.summary,
                title: item.title,
                createTime: formatDate(item.createTime),
                author: item.author.name,
                types: types,
                isTop: item.isTop,
                isPrime: item.isPrime
              });
            });
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
    deleteHotTopic(id) {
      //删除敏感词
      this.ids = id;
      this.$confirm("您确定要删除吗?", "警告", { type: "warning" })
        .then(mes => {
          fetch
            .deleteHotTopic({ ids: this.ids })
            .then(res => {
              this.loading = false;
              if (res.code == 1) {
                this.$message.success("删除成功");
                this.getHotList();
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
    hotTopicSwapItems(index1, index2, state) {
      //分区排序
      let arr = this.hotTopicList;
      let obj;
      if (state == "none") {
        //普通移动
        arr[index1] = arr.splice(index2, 1, arr[index1])[0];
      } else {
        if (state == "up") {
          obj = arr.splice(index1, 1);
          arr.unshift(obj[0]);
        } else {
          obj = arr.splice(index1, 1);
          arr.push(obj[0]);
        }
      }
      fetch
        .hotTopicListUpdate({
          ids: this.hotTopicIds.join(","),
          siteId: this.siteId
        })
        .then(res => {
          if (res.code == 1) {
            this.getHotList();
          } else {
            this.$message({
              message: "排序失败",
              type: "error"
            });
          }
        });
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
      this.getHotList();
    },
    handleCurrentChange(val) {
      this.params.pageNo = val;
      this.getTopicList();
    },
    listGroupByCategory() {
      let params = {};
      params.siteId = this.$store.state.siteId;
      let _this = this;
      fetch.listGroupByCategory(params).then(res => {
        console.log("res", res);
        let data = res.data;

        // data.forEach(function(item,index){

        // })
        this.forums = data;
      });
    },
    handleChange(value) {
      console.log(value);
      let params = {
        siteId: this.$store.state.siteId,
        forumId: value[1],
        pageSize: 9999
      };
      let _this = this;

      fetch.getTopicTypeList(params).then(res => {
        console.log("res", res);
        _this.topicTypeOptions = [];
        _this.params.type = "";
        let arr = [];
        if (res.data.rows != null) {
          res.data.rows.forEach(function(item, index) {
            _this.topicTypeOptions.push({
              value: item.path,
              label: item.name
            });
          });
        }
      });
    },
    //弹出框的操作
    topicShowFn() {
      this.topicVisible = true;
    },
    handleClose() {
      this.topicVisible = false;
    },
    closeShowFn() {
      this.topicVisible = false;
    }
  }
};
</script>

<style scoped>
.title_box,
.title_box2 {
  width: 200px;
  line-height: 16px;
  overflow: hidden;
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.title_box2 {
  width: 300px;
}
.top {
  font-size: 12px;
  color: #fff;
  background: #f56c6c;
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
}
.btn_box .el-button {
  margin-left: 0;
  padding: 0;
}
.el-cascader {
  line-height: 30px;
}
</style>
