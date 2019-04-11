<template>
  <div class="forum-module" v-loading.body="loading">
    <div class="forum-header">
      <span class="forum-name">编辑版块</span>
      <span class="forum-hint">必须先添加分区才能添加版块</span>
    </div>
    <div class="table-body table-responsive">
      <form class="form-horizontal no-margin">
        <table class="bbs-table">
          <tr>
            <th></th>
            <th>ID</th>
            <th>分区版块</th>
            <th>访问路径</th>
            <th>是否为游戏</th>
            <th>版块icon</th>
            <th>排序</th>
            <th>操作</th>
          </tr>
          <!--一级版块-->
          <tbody class="first-table" v-for="(category,index) in listGroupByCategory" :key="category.id">
            <tr class="parent-module">
              <td class="td-5 t-collapse"></td>
              <td class="td-5">{{category.id}}</td>
              <td>
                <input type="text" class="table-input" placeholder="新分区名称" v-model="category.title"
                      @keyup="autoCategoryPath(index)"

                      v-require/>
              </td>
              <td class="td-20"><input type="text"
                                      placeholder="访问路径"
                                      class="table-input-md"
                                      v-model="category.path"

                                      v-require/></td>
              <td></td>
              <td></td>
              <td class="td-15">
                <a href="javascript:void(0)" title="移动到最底部"
                  @click="categorySwapItems(index,0,'down')"
                  v-show="index+1 != listGroupByCategory.length">
                  <i class="iconfont bbs-xiayi"></i>
                </a>
                <a href="javascript:void(0)" title="向下移动"
                  @click="categorySwapItems(index,index+1,'none')"
                  v-show="index+1 != listGroupByCategory.length">
                  <i class="iconfont bbs-xiayi1"></i>
                </a>
                <a href="javascript:void(0)" title="向上移动"
                  @click="categorySwapItems(index,index-1,'none')"
                  v-show="index != 0">
                  <i class="iconfont bbs-shangyi1" title="向上移动"></i>
                </a>
                <a href="javascript:void(0)" title="移动到顶部"
                  @click.native="categorySwapItems(index,0,'up')"
                  v-show="index != 0">
                  <i class="iconfont bbs-shangyi"></i>
                </a>
              </td>
              <td class="td-15">
                <a href="javascript:void(0);"
                  class="t-del iconfont bbs-delete"
                  title="删除分区"
                  @click="deleteCategory(category.id,category.addState,index)"
                ></a>
              </td>
            </tr>
            <tr class="child-module" v-for="(forum,index1) in category.forums" :key="forum.id">
              <td></td>
              <td>{{forum.id}}</td>
              <td style="width:350px">
                <div class="child-box">
                  <input type="text" placeholder="新版块名称" class="table-input" v-model="forum.title"
                        @keyup="autoForumPath(index,index1)"
                        v-require/>
                </div>
              </td>
              <td>
                <input type="text" placeholder="新版块路径" class="table-input-md" v-model="forum.path" v-require />
              </td>
              <td>
                <!--<el-switch on-text="是" off-text="否" v-model="forum.isGame"></el-switch>-->
                <input type="text" disabled class="table-input-md" v-model="forum.gameId"/>
                <el-button type="text" @click="handleSelectGame(index, index1)">选择游戏</el-button>
              </td>
              <td>
                <el-upload class="avatar-uploader"
                          name="files"
                          action="/manage/upload/o_upload"
                          :data={categoryIndex:index,forumIndex:index1}
                          :show-file-list="false"
                          :on-success="handleAvatarSuccess"
                          :before-upload="beforeAvatarUpload">
                  <img v-if="forum.icon" :src="forum.icon" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </td>
              <td>
                <a href="javascript:void(0)"
                  v-show="index1+1 != category.forums.length"
                  @click="forumSwapItems(index1,0,'down',index)"
                >
                  <i class="iconfont bbs-xiayi"></i>
                </a>
                <a href="javascript:void(0)"
                  @click="forumSwapItems(index1,index1+1,'down',index)"
                  v-show="index1+1 != category.forums.length">
                  <i class="iconfont bbs-xiayi1"></i>
                </a>
                <a href="javascript:void(0)"
                  @click="forumSwapItems(index1,index1-1,'none',index)"
                  v-show="index1 != 0">
                  <i class="iconfont bbs-shangyi1"></i>
                </a>
                <a href="javascript:void(0)"
                  @click="forumSwapItems(index1,0,'up',index)"
                  v-show="index1 != 0">
                  <i class="iconfont bbs-shangyi"></i>
                </a>
              </td>
              <td>
                <a href="javascript:void(0)"
                  class="t-edit"
                  v-show="!forum.addState"
                  @click="editForum(forum.id)"> <i class="iconfont bbs-edit"></i></a>
                <a class="t-del"
                  @click="deleteForum(forum.id,forum.addState,index1,index)"><i class="iconfont bbs-delete"></i></a>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <div class="creat-add">
                  <a href="javascript:void(0);" @click="addForum(index)">添加新版块</a>
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
          <!--版块-->
          <tbody>
            <tr class="zone-box">
              <td class="td-5"></td>
              <td colspan="7">
                <div class="add-zone">
                  <a href="javascript:void(0);" @click="addCategory">添加新分区</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!--收缩隐藏-->
        <div class="margin-md" style="padding-left:25px">
          <input type="button" name="" value="提交" class="bbs-submit" @click.prevent="saveList"/>
          <input type="reset" name="" value="重置" class="bbs-reset" @click="resetList"/>
        </div>
      </form>
    </div>
    <!--收缩隐藏-->
    <router-view class="third-view"></router-view>
    <el-dialog title="选择游戏" :visible.sync="dialogTableVisible" v-loading="dialogLoading">
      <div class="table-responsive">
        <el-table :data="gameData" highlight-current-row @current-change="handleCurrentChange">
          <el-table-column property="id" align="center" label="游戏ID" width="150"></el-table-column>
          <el-table-column property="name" align="center" label="游戏名称" width="150">
          </el-table-column>
          <el-table-column property="icon" align="center" label="图标" width="150">
            <template slot-scope="scope">
              <img :src="scope.row.icon" class="avatar"/>
            </template>
          </el-table-column>
          <el-table-column property="developer" align="center" label="开发商" width="150"></el-table-column>
        </el-table>
      </div>
      <div class="table-bottom-bar">
        <div class="pull-left">
          <span class="ml-48">每页显示
                    <el-input v-model="dialogChangePageSize" @blur="dialogChangeSize" class="input-sm" type="number" min="1" max="50"></el-input>条,输入后按回车</span>
        </div>
        <div class="pull-right">
          <el-pagination layout="total,prev, pager, next" :total="dialogTotalCount" :page-size="dialogParams.pageSize" :current-page.sync='dialogCurrentPage' @current-change='getDialogPage' @size-change='getDialogSize'>
          </el-pagination>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSelectedGame">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import * as fetch from "../../../api/bbs";
import { makePy } from "../../../untils/py";
export default {
  name: "forum",
  data() {
    return {
      loading: true,
      listGroupByCategory: [],
      defaultIcon: "",
      siteId: this.$store.state.siteId,
      dialogTableVisible: false,
      gameData: [],
      dialogParams: {
        //接口参数
        pageNo: 1,
        pageSize: 20
      },
      dialogTotalCount: 0,
      dialogCurrentPage: 1,
      dialogChangePageSize: localStorage.getItem("PageSize"),
      dialogLoading: true,
      currentRow: null,
      currentEditCategoryIndex: "",
      currentEditForumIndex: ""
    };
  },
  computed: {
    categoryIds() {
      //构造分区id
      let params = this.listGroupByCategory;
      let arr = [];
      for (let i = 0; i < params.length; i++) {
        arr.push(params[i].id);
      }
      return arr;
    },
    forumIds() {
      //构造版块id
      let params = this.listGroupByCategory;
      let arr = [];
      for (let i = 0; i < params.length; i++) {
        for (let j = 0; j < params[i].forums.length; j++) {
          arr.push(params[i].forums[j].id);
        }
      }
      return arr;
    },
    forumArrs: {
      get: function() {
        {
          //构造版块id
          let params = this.listGroupByCategory;
          let arr = [];
          for (let i = 0; i < params.length; i++) {
            arr[i] = [];
            for (let j = 0; j < params[i].forums.length; j++) {
              arr[i][j] = params[i].forums[j].id;
            }
          }
          return arr;
        }
      },
      set: function(newval) {
        this.forumArrs = newval;
      }
    },
    setCategories() {
      //构造后台传递的分区参数
      let params = this.listGroupByCategory;
      let arr = [];
      for (let i = 0; i < params.length; i++) {
        let obj = [];
        obj.push(params[i].id);
        obj.push(params[i].title);
        obj.push(params[i].path);
        obj = obj.join(",");
        arr.push(obj);
      }
      arr = arr.join(";");
      return arr;
    },
    setForums() {
      //构造后台传递的版块参数
      let params = this.listGroupByCategory;
      let categoryId = "";
      let arr = [];
      for (let i = 0; i < params.length; i++) {
        categoryId = params[i].id;
        for (let j = 0; j < params[i].forums.length; j++) {
          let obj = [];
          obj.push(params[i].forums[j].title);
          obj.push(params[i].forums[j].path);
          obj.push(params[i].forums[j].gameId);
          obj.push(params[i].forums[j].icon);
          obj.push(categoryId); //分区id
          if (params[i].forums[j].id != "") {
            obj.push(params[i].forums[j].id); //版块id
          }
          obj = obj.join(",");
          arr.push(obj);
        }
      }
      arr = arr.join(";");
      return arr;
    }
  },
  watch: {
    $route: function(to, from) {
      this.getCategoryList();
    },
    listGroupByCategory: {
      handler: function(newVal, oldVal) {
        for (let i = 0; i < this.listGroupByCategory.length; i++) {
          this.listGroupByCategory[i].title = this.listGroupByCategory[
            i
          ].title.replace(/[^A-Za-z0-9\u4e00-\u9fa5]/g, "");
          this.listGroupByCategory[i].path = this.listGroupByCategory[
            i
          ].path.replace(/[\W]/g, "");
          for (let j = 0; j < this.listGroupByCategory[i].forums.length; j++) {
            this.listGroupByCategory[i].forums[
              j
            ].title = this.listGroupByCategory[i].forums[j].title.replace(
              /[^A-Za-z0-9\u4e00-\u9fa5]/g,
              ""
            );
            this.listGroupByCategory[i].forums[
              j
            ].path = this.listGroupByCategory[i].forums[j].path.replace(
              /[\W]/g,
              ""
            );
          }
        }
      },
      deep: true
    }
  },
  created: function() {
    this.getCategoryList();
  },
  mounted() {
    $(function() {
      $(".bbs-table").on("click", ".t-collapse", function() {
        $(this).toggleClass("shows");
        if ($(this).hasClass("shows")) {
          $(this)
            .parent("tr")
            .siblings("tr")
            .hide();
        } else {
          $(this)
            .parent("tr")
            .siblings("tr")
            .show();
        }
      });
    });
  },
  methods: {
    getCategoryList() {
      fetch
        .listGroupByCategory({ siteId: this.siteId })
        .then(res => {
          if (res.code == 1) {
            this.loading = false;
            this.listGroupByCategory = res.data;
          } else {
            this.loading = false;
          }
        })
        .catch(res => {
          this.loading = false;
        });
    },
    resetList() {
      this.getCategoryList();
    },
    addCategory() {
      //添加分区
      let ids = this.categoryIds.sort();
      let id = 1;
      if (ids.length > 0) {
        id = parseInt(++ids[ids.length - 1]);
      }
      this.listGroupByCategory.push({
        path: "",
        forums: [],
        id: id,
        title: "",
        priority: 1,
        addState: true
      });
    },
    addForum(index) {
      //添加版块
      let category = this.listGroupByCategory[index];
      category.forums.push({
        path: "",
        id: "",
        title: "",
        priority: "",
        addState: true,
        icon: "",
        gameId: null
      });
    },
    saveList() {
      //修改版块
      this.loading = true;
      let params = {
        categories: this.setCategories,
        forums: this.setForums,
        siteId: this.siteId
      };
      fetch
        .saveList(params)
        .then(res => {
          this.loading = false;
          if (res.code == 1) {
            this.$message({
              message: "修改成功",
              type: "success"
            });
            this.getCategoryList();
          } else {
            this.$message({
              message: "修改失败",
              type: "error"
            });
          }
        })
        .catch(res => {
          this.loading = false;
        });
    },
    deleteCategory(ids, state, index) {
      if (state) {
        this.listGroupByCategory.splice(index, 1);
      } else {
        this.$confirm("您确定要删除当前分区吗?", "提示", {
          type: "warning"
        }).then(mes => {
          fetch.deleteCategory({ ids: ids, siteId: this.siteId }).then(res => {
            if (res.code == 1) {
              this.getCategoryList();
              this.$message({
                message: "删除成功",
                type: "success"
              });
            }
          });
        });
      }
    },
    deleteForum(ids, state, index1, index) {
      if (state) {
        this.listGroupByCategory[index].forums.splice(index1, 1);
      } else {
        this.$confirm("您确定要删除当前版块吗?", "提示", {
          type: "warning"
        }).then(mes => {
          fetch.deleteForum({ ids: ids, siteId: this.siteId }).then(res => {
            if (res.code == 1) {
              this.getCategoryList();
              this.$message({
                message: "删除成功",
                type: "success"
              });
            }
          });
        });
      }
    },
    editForum(ids) {
      this.$router.push({
        path: "/forum-edit",
        query: { id: ids, siteId: this.siteId }
      });
    },
    categorySwapItems(index1, index2, state) {
      //分区排序
      let arr = this.listGroupByCategory;
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
        .categoryListUpdate({
          ids: this.categoryIds.join(","),
          siteId: this.siteId
        })
        .then(res => {
          if (res.code == 1) {
            this.getCategoryList();
          } else {
            this.$message({
              message: "排序失败",
              type: "error"
            });
          }
        });
    },
    /**
     * forum sort
     * @param index1 current index
     * @param index2 target index
     * @param state up down top
     * @param index3 category index
     */
    forumSwapItems(index1, index2, state, index3) {
      //分区排序
      console.log(this.forumArrs);
      let arr = this.forumArrs[index3];
      console.log(arr);
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
      console.log(arr);
      this.forumArrs[index3] = arr;
      let ids = this.forumArrs.join(",");
      console.log(ids);
      fetch.forumListUpdate({ ids: ids, siteId: this.siteId }).then(res => {
        if (res.code == 1) {
          this.getCategoryList();
        } else {
          this.$message({
            message: "排序失败",
            type: "error"
          });
        }
      });
    },
    autoCategoryPath(index) {
      //自动填写路径
      let str = this.listGroupByCategory[index].title;
      str = str.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, "");
      if (str.length > 0) {
        str = makePy(str);
        str = str.join(",");
        this.listGroupByCategory[index].path = str;
      }
    },
    autoForumPath(index1, index) {
      //自动填写路径
      let str = this.listGroupByCategory[index1].forums[index].title;
      str = str.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, "");
      if (str.length > 0) {
        str = makePy(str);
        str = str.join(",");
        this.listGroupByCategory[index1].forums[index].path = str;
      }
    },
    beforeAvatarUpload: function(t) {
      var e =
          "image/jpeg" === t.type ||
          "image/png" === t.type ||
          "image/gif" === t.type,
        a = t.size / 1024 / 1024 < 2;
      return (
        e || this.$message.error("上传头像图片只能是 JPG 格式!"),
        a || this.$message.error("上传头像图片大小不能超过2MB!"),
        e && a
      );
    },
    handleAvatarSuccess: function(res, file) {
      if (res.code == 1) {
        this.listGroupByCategory[res.data.categoryIndex].forums[
          res.data.forumIndex
        ].icon = res.data.url;
      } else {
        this.$message({
          message: res.msg,
          type: "error"
        });
      }
    },
    siteChange: function(value) {
      this.siteId = value;
      this.getCategoryList();
    },
    handleSelectGame(index, index1) {
      this.dialogTableVisible = true;
      this.currentEditCategoryIndex = index;
      this.currentEditForumIndex = index1;
      this.getGameList();
    },
    handleSelectedGame() {
      this.dialogTableVisible = false;
      this.listGroupByCategory[this.currentEditCategoryIndex].forums[
        this.currentEditForumIndex
      ].icon = this.currentRow.icon;
      this.listGroupByCategory[this.currentEditCategoryIndex].forums[
        this.currentEditForumIndex
      ].title = this.currentRow.name;
      this.listGroupByCategory[this.currentEditCategoryIndex].forums[
        this.currentEditForumIndex
      ].gameId = this.currentRow.id;
    },
    getGameList() {
      let params = this.params;
      fetch
        .getGameList(params)
        .then(res => {
          console.log(res);
          if (res.code == 1) {
            this.dialogLoading = false;
            this.gameData = res.data.rows;
            this.totalCount = res.data.total;
          } else {
            this.dialogLoading = false;
            this.$message.error(res.msg);
          }
        })
        .catch(res => {
          this.dialogLoading = false;
          this.$message.error("网络异常");
        });
    },
    getDialogPage(val) {
      //获取当前页数
      this.loading = true;
      this.params.pageNo = val;
      this.getGameList();
    },
    getDialogSize(val) {
      //分页
      this.loading = true;
      this.params.pageNo = val;
      this.getGameList();
    },
    dialogChangeSize(event) {
      //跳页
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
      this.getGameList();
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    }
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.avatar {
  width: 40px;
  height: 40px;
  display: block;
}
</style>
