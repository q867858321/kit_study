<template>
  <div class="forum-module">
    <div class="forum-header">
      <span class="forum-name">{{$route.name}}</span>
    </div>
    <div class="table-body table-responsive" v-loading.body="loading">
      <el-form :model="siteInfo" :rules="rules" ref="topicInfo">
        <el-form-item label="站点名称" class="form-group" prop="name">
          <el-col :span="6">
            <el-input v-model="siteInfo.name"></el-input>
          </el-col>
          <el-col :span="1" class="required">&nbsp; </el-col>
          <el-col :span="7" class="gray"></el-col>
        </el-form-item>
        <el-form-item label="站点简称" class="form-group" prop="shortName">
          <el-col :span="6">
            <el-input v-model="siteInfo.shortName"></el-input>
          </el-col>
          <el-col :span="1" class="required">&nbsp; </el-col>
          <el-col :span="7" class="gray"></el-col>
        </el-form-item>
        <el-form-item label="域名" class="form-group" prop="domain">
          <el-col :span="6">
            <el-input v-model="siteInfo.domain"></el-input>
          </el-col>
          <el-col :span="1" class="required">&nbsp; </el-col>
          <el-col :span="7" class="gray"></el-col>
        </el-form-item>
        <el-form-item label="路径" class="form-group" prop="path">
          <el-col :span="6">
            <el-input v-model="siteInfo.path"></el-input>
          </el-col>
          <el-col :span="1" class="required">&nbsp; </el-col>
          <el-col :span="7" class="gray">各站点资源的存放路径</el-col>
        </el-form-item>
        <el-form-item label="域名别名" class="form-group">
          <el-col :span="6">
            <el-input v-model="siteInfo.domainAlias"></el-input>
          </el-col>
          <el-col :span="1" class="required">&nbsp; </el-col>
          <el-col :span="7" class="gray"> 用","分开</el-col>
        </el-form-item>
        <el-form-item label="域名重定向" class="form-group">
          <el-col :span="6">
            <el-input v-model="siteInfo.domainRedirect"></el-input>
          </el-col>
          <el-col :span="1" class="required">&nbsp; </el-col>
          <el-col :span="7" class="gray">用","分开</el-col>
        </el-form-item>
        <el-form-item label="可信跨域url" class="form-group" prop="corsUrl">
          <el-col :span="6">
            <el-input v-model="siteInfo.corsUrl"></el-input>
          </el-col>
          <el-col :span="1" class="required">&nbsp; </el-col>
          <el-col :span="7" class="gray">部署在根目录请留空</el-col>
        </el-form-item>
        <el-form-item label="是否使用相对路径" class="form-group">
          <el-col :span="6">
            <el-switch on-text="" off-text="" v-model="siteInfo.isRelativePath"></el-switch>
          </el-col>
          <el-col :span="1" class="required">&nbsp;</el-col>
          <el-col :span="7" class="gray">只适于单站点</el-col>
        </el-form-item>
        <el-form-item label="访问协议" class="form-group">
          <el-col :span="6">
            <el-radio-group v-model="siteInfo.protocol">
              <el-radio label="http://"></el-radio>
              <el-radio label="https://"></el-radio>
            </el-radio-group>
          </el-col>
          <el-col :span="1" class="required">&nbsp;</el-col>
          <el-col :span="7" class="gray"></el-col>
        </el-form-item>
        <el-form-item label="动态页后缀" class="form-group">
          <el-col :span="6">
            <el-radio-group v-model="siteInfo.dynamicSuffix">
              <el-radio label=".jhtml"></el-radio>
              <el-radio label=".htm"></el-radio>
            </el-radio-group>
          </el-col>
          <el-col :span="1" class="required">&nbsp;</el-col>
          <el-col :span="7" class="gray">建议使用.jhtml为后缀，以避免冲突</el-col>
        </el-form-item>
        <el-form-item label="静态页后缀" class="form-group">
          <el-col :span="6">
            <el-radio-group v-model="siteInfo.staticSuffix">
              <el-radio label=".html"></el-radio>
              <el-radio label=".shtml"></el-radio>
            </el-radio-group>
          </el-col>
          <el-col :span="1" class="required">&nbsp;</el-col>
          <el-col :span="7" class="gray"></el-col>
        </el-form-item>
        <el-form-item label="后台本地化" class="form-group" prop="localeAdmin">
          <el-col :span="6">
            <el-input v-model="siteInfo.localeAdmin"></el-input>
          </el-col>
          <el-col :span="1" class="required">&nbsp;</el-col>
          <el-col :span="7" class="gray"></el-col>
        </el-form-item>
        <el-form-item label="前台本地化" class="form-group" prop="localeFront">
          <el-col :span="6">
            <el-input v-model="siteInfo.localeFront"></el-input>
          </el-col>
          <el-col :span="1" class="required">&nbsp;</el-col>
          <el-col :span="7" class="gray"></el-col>
        </el-form-item>
      </el-form>
      <div class="margin-md">
        <input type="button" value="提交" class="bbs-submit" @click="updateSiteInfo('topicInfo')" />
        <input type="reset" value="重置" class="bbs-reset" />
      </div>
    </div>
  </div>
</template>

<script>
  import * as fetch from '../../../api/systemConfig'
  export default {
    data() {
      return {
        loading: true,
        siteInfo: {},
        rules: {
          shortName: [{ required: true, message: '此项必填', trigger: 'blur' }],
          name: [{ required: true, message: '此项必填', trigger: 'blur' }],
          domain: [{ required: true, message: '此项必填', trigger: 'blur' }],
          path: [{ required: true, message: '此项必填', trigger: 'blur' }],
          corsUrl: [{ required: true, message: '此项必填', trigger: 'blur' }],
          localeAdmin: [{ required: true, message: '此项必填', trigger: 'blur' }],
          localeFront: [{ required: true, message: '此项必填', trigger: 'blur' }],
        }
      }
    },
    methods: {
      getSiteInfo(id) { //获取系统信息
        fetch.getSiteInfo({id: id})
          .then(res => {
            console.log(res);
            if (res.code == 1) {
              this.loading = false;
              this.siteInfo = res.data;
            } else {
              this.loading = false;
              this.$message.error(res.msg);
            }
          })
          .catch(res => {
            this.loading = false;
            this.$message.error('网络异常');
          })
      },
      updateSiteInfo(formName) { //修改系统信息
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = this.siteInfo;
            fetch.updateSiteInfo(params)
              .then(res => {
                if (res.code == 1) {
                  this.$message.success('修改成功');
                } else {
                  this.$message.error(res.msg);
                }
              })
              .catch(res => {
                this.$message.error('修改失败');
              })
          } else {
            return false;
          }
        })
      }
    },
    created: function () {
      let id = this.$route.query.id;
      this.getSiteInfo(id);
    },
    watch: {
      '$route': function(to, from) {
        let id = this.$route.query.id;
        this.loading = true;
        this.getSiteInfo(id);
      }
    }
  }
</script>

<style scoped>

</style>
