<template>
  <div class="forum-module">
    <div class="forum-header">
      <span class="forum-name">用户组列表</span>
    </div>
    <div class="table-top-bar clearfix">
      <a href="javascript:void(0)" class="add-Class" @click="addGroup($route.query.typeId)">添加</a>
    </div>
    <div class="table-responsive">
      <form class="form-horizontal no-margin">
        <table class="bbs-table table-striped table-hover">
          <tr class="table-header">
            <th>头衔</th>
            <th>头衔图标</th>
            <th v-if="typeId==1">需要累计积分</th>
            <th>操作</th>
          </tr>
          <tr v-for="item in groupList" :key="item.id">
            <td class="blue">{{item.name}}</td>
            <td>
              <img :src='$store.state.baseUrl+item.imgPath' alt="">
            </td>
            <td v-if="typeId==1">{{item.point}}</td>
            <td>
              <a href="javascript:void(0)" class="t-edit iconfont bbs-edit" title="编辑" @click="editGroup(item.id,typeId)"></a>
              <a href="javascript:void(0)" class="t-del iconfont bbs-delete" title="删除" @click="deleteGroup(item.id)"></a>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
  import * as fetch from '../../../api/usermanage'
  export default {
    data() {
      return {
        typeId: 1,
        groupList: []
      }
    },
    methods: {
      getList(typeId) {
        fetch.getGroupList({groupType: typeId, siteId: this.$store.state.siteId})
          .then(res => {
            this.groupList = res.data;
          })
          .catch(res => {
            console.log(res);
            this.$message({
              message: res.msg,
              type: 'error'
            })
          })
      },
      deleteGroup(id) {
        let params = {
          ids: id
        };
        let self = this;
        this.$confirm('您确定要删除当前会员组吗?', '提示', {
          type: 'warning'
        })
          .then(mes => {
            fetch.deleteGroupList(params)
              .then(res => {
                if (res.code == 1) {
                  self.getList(self.typeId);
                  this.$message({
                    message: '删除成功',
                    type: 'success'
                  })
                }
              })
          })
          .catch(mes => {})
      },
      addGroup(typeId) {
        this.$router.push({
          path:'/usergroupadd',
          query:{
            id:0,
            typeId:typeId,
            type:'add'
          }
        });
      },
      editGroup(id, typeId) {
        this.$router.push({
          path:'/usergroupedit',
          query:{
            id:id,
            typeId:typeId,
            type:'edit'
          }
        });
      }
    },
    created: function () {
      let typeId = this.$route.query.typeId;
      this.typeId = typeId;
      this.getList(typeId);
    }
  }
</script>

<style scoped>

</style>
