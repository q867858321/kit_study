<template>
  <div class="forum-module">
    <div class="forum-header">
      <span class="forum-name">用户组列表</span>
    </div>
    <div class="table-responsive">
      <form class="form-horizontal no-margin">
        <table class="bbs-table table-striped table-hover">
          <tr class="table-header">
            <th>用户组</th>
            <th>操作</th>
          </tr>
          <tr>
            <td class="blue">会员组</td>
            <td>
              <a href="javascript:void(0)" class="t-edit iconfont bbs-edit" title="编辑" @click="link(1)"></a>
            </td>
          </tr>
          <tr>
            <td class="blue">系统组</td>
            <td>
              <a href="javascript:void(0)" class="t-edit iconfont bbs-edit" title="编辑" @click="link(2)"></a>
            </td>
          </tr>
          <tr>
            <td class="blue">特殊组</td>
            <td>
              <a href="javascript:void(0)" class="t-edit iconfont bbs-edit" title="编辑" @click="link(3)"></a>
            </td>
          </tr>
          <tr>
            <td class="blue">默认组</td>
            <td>
              <a href="javascript:void(0)" class="t-edit iconfont bbs-edit" title="编辑" @click="link(0)"></a>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      link(typeId){
        this.$router.push({path:'/usergrouplist',query:{typeId:typeId}})
      }
    }
  }
</script>

<style scoped>

</style>
