<template>
    <section data-page="v-p" class="edit">
        <div class="stik__top">
            <span class="link" @click="$router.go(-1)">{{name}}(项目)</span><i class="el-icon-arrow-right"></i>
            <span>{{pageName}}(页面编辑)</span>
            <el-button type="primary" size="mini" class="r-button" @click="saveResult">保存</el-button>
        </div>
        <div class="content">
            <div class="show">
                <mResult></mResult>   
            </div>
            <div class="main_content">
                <mAttrNav></mAttrNav>
                <mAttrController></mAttrController>
            </div>
        </div>
    </section>
</template>

<script>
import Http from "@/utils/http.js";
import mResult from "./baseComponents/mResult.vue";
import mAttrNav from "./attrComponents/mAttrNav.vue";
import mAttrController from "./attrComponents/mAttrController.vue";
export default {
  name: "edit",
  components: {
    mResult,
    mAttrNav,
    mAttrController
  },
  data() {
    return {
      projectId: null,
      name: null,
      pageName: null,
      pageId: null
    };
  },
  beforeCreate() {
    let query = this.$route.query;
    if (!query.id || !query.pageId) {
      this.$router.back();
    }
  },
  created() {
    let query = this.$route.query;
    this.projectId = query.id;
    this.pageName = query.pageName;
    this.pageId = query.pageId;
    this.name = query.name;
  },
  mounted() {
    this.getPageInfo();
  },
  methods: {
    getPageInfo() {
      let _this = this;
      // let url = "/manage/page/assembly/1";
      let testurl = "../../../static/assemby.json";
      Http.get(testurl).then(function(data) {
        console.log("data", data);
        _this.$store.commit("pages/addPageInfo", data.data);
      });
    },
    saveResult: function() {
      //   console.log("page,data", this);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "../../styles/UIManage.scss";
.edit {
  .content {
    position: relative;
    .show {
      position: absolute;
      width: 322px;
      top: 0;
      left: 100px;
      border: 1px solid #eee;
      background: #fff;
    }
    .main_content {
      margin: 5px 0 0 450px;
      min-width: 900px;
    }
  }
}
</style>
