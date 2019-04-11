<template>
  <el-row class="container">
    <el-col :span="24" class="bbs-header">
      <div class="logo"><img src="./../assets/images/u4.png" alt="" >
      </div>
      <div class="collapse-menu" @click="openAside"><img src="./../assets/images/collapse.png" alt=""></div>
      <div class="user-inner">
        <img src="./../assets/images/userlogo.png" alt="" class="user-logo">
        <span>{{userName}}</span>
        <span class="iconfont bbs-bianji-copy" @click="editUserInfo" title="修改密码"></span>
        <span class="iconfont bbs-wangzhan-copy" title="查看首页" @click="getIndex"></span>
        <span class="iconfont bbs-out-copy" @click="logout" title="退出"></span>
        <el-select placeholder="所属分区" v-model="siteId" @change="changeIds">
          <el-option v-for="item in siteList" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </div>
    </el-col>
    <div class="aside">
      <aside id="aside">
        <span class="aside-title">系统主菜单</span>
        <el-menu class="el-menu-vertical-demo" unique-opened router :collapse='collapse' :default-active="activeIndex">
          <template v-for="(item,index) in $store.state.routers" v-if="!item.hidden">
            <el-submenu :index="index+''" v-if="!item.leaf">
              <template slot="title">
                <i :class="item.iconCls" class="iconfont"></i>
                <span class="collapse-font">{{item.name}}</span>
              </template>
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">
                  {{child.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path" class="first-item">
              <i :class="item.iconCls" class="iconfont"></i>
              <span class="collapse-font">{{item.children[0].name}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </aside>
    </div>
    <section class="main-container" id="main">
      <ul class="breadcrumb">
        <li>
          <span class="iconfont bbs-home"></span>
        </li>
        <li v-for="(item,index) in $route.matched" :key="item.path" v-if="item.name!=undefined">
          <router-link :to="item.path" v-if="index!=$route.matched.length-1">{{item.name}}</router-link>
          <a href="javascript:void(0)" v-else>{{item.name}}</a>
        </li>
      </ul>
      <router-view></router-view>
    </section>
    <div class="right-sider">
      <el-form :model="userInfo" :rules="rules" ref="userInfo">
        <el-form-item label="" class="form-group label-no-margin" prop="origPwd">
          <el-col >
              <el-input placeholder="原密码" v-model="userInfo.origPwd" type="password"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="" class="form-group label-no-margin" prop="newPwd">
          <el-col >
              <el-input placeholder="新密码" v-model="userInfo.newPwd"  type="password"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="" class="form-group label-no-margin" prop="newPwd2" style="border:none">
          <el-col >
              <el-input placeholder="重复新密码" v-model="userInfo.newPwd2" type="password"></el-input>
          </el-col>
        </el-form-item>
        <div class="clearfix">
          <el-button type="primary" @click="changePwd" style="float:left;width:47%">修改密码</el-button>
          <el-button type="info"  @click="editUserInfo" style="float:right;width:47%;background:#999;border-color:#999">取消</el-button>
        </div>
      </el-form>
    </div>
  </el-row>
</template>

<script>
import { getRand } from "../untils/random";
import * as user from "../api/user";
import * as fetch from "../api/systemConfig";
import Cookies from "js-cookie";
export default {
  data() {
    var checkPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入旧密码"));
      } else {
        user
          .checkPwd({ origPwd: value })
          .then(res => {
            if (res.code == 100) {
              callback();
            } else {
              callback(new Error("旧密码不正确"));
            }
          })
          .catch(res => {
            callback(new Error("旧密码不正确"));
          });
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.userInfo.newPwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      collapse: false,
      activeIndex: "/work",
      userName: window.localStorage.getItem("userName"),
      userInfo: {
        origPwd: "",
        newPwd: "",
        newPwd2: ""
      },
      rules: {
        origPwd: [{ validator: checkPass, trigger: "change" }],
        newPwd: [{ validator: validatePass, trigger: "blur" }],
        newPwd2: [{ validator: validatePass2, trigger: "blur" }]
      },
      siteId: this.$store.state.siteId,
      siteList: []
    };
  },
  computed: {
    test() {
      return this.$store.state.userName;
    }
  },
  methods: {
    getIndex() {
      window.open(this.$store.state.baseUrl);
    },
    logout() {
      this.$confirm("您确定要退出吗?", "警告", { type: "warning" })
        .then(mes => {
          let params = {
            username: this.userName,
            nonce_str: getRand()
          };
          user
            .logout(params)
            .then(res => {
              if (res.code == "100") {
                // Cookies.remove('username');
                Cookies.remove("JSESSIONID");
                Cookies.set("sso_logout", false, {
                  expires: 365,
                  path: "/",
                  domain: Cookies.get("domain")
                });
                this.$store.dispatch("clearRouters");
              } else {
                this.$message.error("退出失败");
              }
            })
            .catch(res => {
              console.log(res);
            });
        })
        .catch(mes => {});
    },
    editUserInfo() {
      $(".right-sider").toggleClass("active");
    },
    changePwd() {
      this.$refs["userInfo"].validate(valid => {
        if (valid) {
          user
            .pwdUpdate(this.userInfo)
            .then(res => {
              if (res.code == "100") {
                this.$message.success("修改成功");
                localStorage.removeItem("sessionKey");
                localStorage.removeItem("userName");
                this.$router.push("/login");
              } else {
                this.$message.error("修改失败");
              }
            })
            .catch(res => {
              this.$message.error("修改失败");
            });
        } else {
          return false;
        }
      });
    },
    openAside() {
      this.collapse = !this.collapse;
      $(".aside").toggleClass("aside-collapse");
      $("body").toggleClass("mini");
    },
    mediaQuery() {
      let client = $(window).outerWidth();
      if (client > 1200) {
        this.collapse = false;
        $(".aside").removeClass("aside-collapse");
        $("body").removeClass("mini");
      } else {
        this.collapse = true;
        $(".aside").addClass("aside-collapse");
        $("body").addClass("mini");
      }
      $("#aside").slimScroll({
        height: "100%",
        width: "auto",
        wrapperClass: "asidebar",
        color: "#188ae2",
        opacity: 0
      });
    },
    changeIds(res) {
      this.$store.state.siteId = res;
      // this.$router.push({path: this.$route.matched[1].path});
      // 后续改成刷新当前
      this.$router.push({ path: "/" });
    },
    getSiteList() {
      let params = {};
      let self = this;
      fetch
        .getSiteList(params)
        .then(res => {
          if (res.code == 1) {
            res.data.rows.forEach(function(o) {
              self.siteList.push({
                id: o.id,
                name: o.name
              });
            });
          } else {
            this.$message.error(res.msg);
          }
        })
        .catch(res => {
          this.loading = false;
          this.$message.error("网络异常");
        });
    }
  },
  watch: {
    $route: function(to, from) {
      this.activeIndex = this.$route.matched[1].path;
    }
  },
  mounted() {
    this.activeIndex = this.$route.matched[1].path;
    this.mediaQuery();
    this.getSiteList();
    let self = this;
    window.onresize = function() {
      self.mediaQuery();
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.container {
  position: relative;
  width: 100%;
  background: #f0f4f6;
  min-height: 100%;
}

.bbs-header {
  height: 80px;
  background: #ffffff;
  box-shadow: 10px 1px 15px rgba(0, 0, 0, 0.17);
  padding: 0 24px;
  position: fixed;
  z-index: 2000;
  .logo {
    float: left;
    height: 80px;
    line-height: 80px;
    font-size: 24px;
    margin-left: 24px;
    color: #01121f;
    > span {
      display: inline-block;
      position: relative;
      top: -2px;
      border-radius: 8px;
      color: #fff;
      background: #4eb6f1;
      height: 20px;
      line-height: 20px;
      font-size: 16px;
      padding: 0 7px;
      margin-left: 10px;
    }
  }
}

.collapse-menu {
  float: left;
  height: 18px;
  overflow: hidden;
  width: 18px;
  position: absolute;
  top: 50%;
  margin-top: -9px;
  left: 245px;
  cursor: pointer;
  margin-left: -45px;
}

.user-inner {
  float: right;
  height: 80px;
  display: flex;
  align-items: center;
  .iconfont {
    color: #777;
    cursor: pointer;
    margin-left: 30px;
    &:hover {
      color: #2199ee;
    }
  }
}

.user-logo {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 16px;
}

.bbs-bianji-copy {
  font-size: 20px;
}

.bbs-wangzhan-copy {
  font-size: 20px;
}

.bbs-huanfu-copy {
  font-size: 24px;
}

.bbs-out-copy {
  font-size: 20px;
}

.bbs-home {
  color: #2691e3;
}

.breadcrumb {
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  li {
    float: left;
    font-size: 14px;
    a {
      color: #999;
    }
  }
}

.breadcrumb {
  padding: 0 24px;
}

.breadcrumb > li + li:before {
  content: " ";
  display: inline-block;
  width: 8px;
  height: 8px;
  position: relative;
  top: -1px;
  margin: 0 10px;
  background: url(./../assets/images/doubleright.png) no-repeat;
}

.aside {
  width: 220px;
  background: #188ae2;
  height: 100%;
  float: left;
  position: fixed;
  padding-top: 80px;
  padding-bottom: 10px;
  bottom: 0;
  z-index: 999;
  transition: width 0.3s;
  .el-menu {
    background: #188ae2;
  }
}
.el-menu-vertical-demo > .first-item i {
  left: 2px;
  margin-right: 16px;
}

.el-submenu__title i {
  left: 2px;
  margin-right: 16px;
}
.aside-collapse .el-submenu__title i {
  left: 0px;
}
.aside-collapse .first-item i {
  left: 0px;
}

.aside-title {
  display: block;
  color: #3caeff;
  padding: 20px 24px;
  font-size: 16px;
  outline: none;
}
.aside-collapse {
  width: 70px;
  .aside-title {
    display: none;
  }
}

.aside-collapse #aside > .el-menu {
  position: fixed;
  z-index: 9999;
}

.aside-collapse #aside .collapse-font {
  display: none;
}

.aside-collapse #aside .el-icon-arrow-down {
  display: none;
}

.mini .main-container {
  margin-left: 70px;
}

.main-container {
  margin-left: 220px;
  position: relative;
  right: 0;
  left: 0;
  padding-top: 80px;
}

.right-sider.active {
  right: 0px;
}

.right-sider {
  width: 240px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 2px;
  position: fixed;
  right: -240px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  transition: opacity 0.3s, transform 0.3s, right 0.3s, top 0.4s;
  overflow: hidden;
  z-index: 999;
  top: 80px;
  height: 100%;
}
.first-item {
}
.first-item.is-active::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 100%;
  width: 2px;
  background: #f5f72f;
}
.el-form-item__error {
  margin-left: 0;
}
</style>
