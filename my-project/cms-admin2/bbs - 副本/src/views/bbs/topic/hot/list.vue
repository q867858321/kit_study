<template>
  <div class="forum-module" v-loading.body="loading">
    <div class="forum-header">
      <span class="forum-name">热门帖列表</span>
    </div>
    <div class="table-top-bar clearfix val-top-bar">
    </div>
    <div class="table-body table-responsive">
      <form class="form-horizontal no-margin">
        <table class="bbs-table">
          <tr>
            <th>ID</th>
            <th>标题</th>
            <th>简介</th>
            <th>发帖时间</th>
            <th>作者</th>
            <th>排序</th>
            <th>操作</th>
          </tr>
          <tbody class="first-table" v-for="(hotTopic,index) in hotTopicList" :key="hotTopic.id">
          <tr class="parent-module">
            <td class="td-5">{{hotTopic.id}}</td>
            <td>
              {{hotTopic.topic.title}}
            </td>
            <td class="td-20">
              {{hotTopic.topic.summary}}
            </td>
            <td class="td-10">
              {{hotTopic.topic.createTime}}
            </td>
            <td class="td-10">
              {{hotTopic.topic.author.name}}
            </td>
            <td class="td-15">
              <a href="javascript:void(0)" title="移动到最底部"
                 @click="hotTopicSwapItems(index,0,'down')"
                 v-show="index+1 != hotTopicList.length">
                <i class="iconfont bbs-xiayi"></i>
              </a>
              <a href="javascript:void(0)" title="向下移动"
                 @click="hotTopicSwapItems(index,index+1,'none')"
                 v-show="index+1 != hotTopicList.length">
                <i class="iconfont bbs-xiayi1"></i>
              </a>
              <a href="javascript:void(0)" title="向上移动"
                 @click="hotTopicSwapItems(index,index-1,'none')"
                 v-show="index != 0">
                <i class="iconfont bbs-shangyi1" title="向上移动"></i>
              </a>
              <a href="javascript:void(0)" title="移动到顶部"
                 @click.native="hotTopicSwapItems(index,0,'up')"
                 v-show="index != 0">
                <i class="iconfont bbs-shangyi"></i>
              </a>
            </td>
            <td class="td-15">
              <!--<a href="javascript:void(0)"-->
                 <!--class="t-edit"-->
                 <!--v-show="!forum.addState"-->
                 <!--@click="editHotTipic(hotTopic.id)"> <i class="iconfont bbs-edit"></i></a>-->
              <a class="t-del"
                 @click="deleteHotTopic(hotTopic.id,hotTopic.addState,index1,index)"><i class="iconfont bbs-delete"></i></a>
            </td>
          </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
  import * as fetch from '../../../../api/bbs'
  export default {
    data() {
      return {
        checkAll: false,
        isIndeterminate: true,
        loading: true,
        hotTopicList: [],
        ids: '',//批量删除列表
        params: {//接口参数

        },
        disabled: true,
        siteId: this.$store.state.siteId
      }
    },
    methods: {
      getHotList() {//获取敏感词信息列表
        let params = this.params;
        params.siteId = this.siteId;
        fetch.getHotTopicList(params)
          .then(res => {
            if (res.code == 1) {
              this.hotTopicList = res.data.rows;
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
      deleteHotTopic(id) {//删除敏感词
        this.ids = id;
        this.$confirm('您确定要删除吗?', '警告', { type: 'warning' })
          .then(mes => {
            fetch.deleteHotTopic({ids: this.ids})
              .then(res => {
                this.loading = false;
                if (res.code == 1) {
                  this.$message.success('删除成功');
                  this.getHotList();
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
          .hotTopicListUpdate({ ids: this.hotTopicIds.join(','), siteId: this.siteId })
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
        this.getHotList();
      }
    },
    created: function () {
      let size = localStorage.getItem('PageSize');
      if (size != null) {
        this.params.pageSize = parseInt(size);//取本地存储的条目
      } else {
        this.changePageSize = 20;
      }
      this.getHotList();
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
    }
  }
</script>

<style scoped>

</style>
