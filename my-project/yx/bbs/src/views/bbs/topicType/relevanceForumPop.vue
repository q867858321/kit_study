<template>
  <span data-page="v-t" class="relevanceForum">
    <el-dialog title="用户" :visible="moderatorsVisible" width="50%" :before-close="handleClose">
      <table class="forum-table">
        <tr>
          <th style="width:60px;"></th>
          <th style="width:52px;">ID</th>
          <th style="width:20px;">分区版块</th>
          <th style="width:20px;"></th>
        </tr>

        <tbody class="first-table" v-for="item in listGroupByCategory" :key="item.id">
          <tr>
            <td></td>
            <td>{{item.id}}</td>
            <td>{{item.title}}</td>
            <td></td>
          </tr>
          <tr v-for="forum in item.forums" :key="forum.id">
            <td></td>
            <td>
              <el-checkbox v-model="forums"></el-checkbox>
            </td>
            <td>{{forum.id}}</td>
            <td>{{forum.title}}</td>
          </tr>
        </tbody>
      </table>
      <!--
       <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-size="10"
          layout="prev, pager, next, jumper"
          :total="this.userListTotal"
        ></el-pagination>
      </div>-->
      <span slot="footer" class="dialog-footer">
        <el-button @click="hidePop()">取 消</el-button>
        <el-button type="primary" @click="hidePop()">确 定</el-button>
      </span>
    </el-dialog>
  </span>
</template>

<script>
import * as fetch from "../../../api/bbs";
export default {
  name: "relevanceForumPop",
  props: ["show", "forumId"],
  data() {
    return {
      siteId: this.$store.state.siteId,
      moderatorsVisible: false,
      listGroupByCategory: [],
      forums: ""
    };
  },
  computed: {
    aaa() {
      this.moderatorsVisible = this.show;
      alert(this.moderatorsVisible);
    }
  },
  mounted() {
    // this.relevanceForum();
  },
  methods: {
    //关联版主
    relevanceForum() {
      this.moderatorsVisible = true;
      let params = {
        siteId: this.siteId
      };
      fetch.listGroupByCategory(params).then(res => {
        if (res.code == 1) {
          this.listGroupByCategory = res.data;
        }
        console.log("listGroupByCategory", this.listGroupByCategory);
      });
    },
    handleClose(done) {
      this.moderatorsVisible = false;
    },
    replaceStr(val) {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.userParams.pageNo = val;
      this.getUserList();
    },
    hidePop() {
      this.moderatorsVisible = false;
    }
  }
};
</script>

<style scoped>
</style>
