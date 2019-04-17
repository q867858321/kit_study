<template>
  <div class="forum-module">
    <div class="forum-header">
      <span class="forum-name">{{$route.name}}</span>
    </div>
    <div class="table-body table-responsive" v-loading.body="loading">
      <el-form :model="systemInfo" :rules="rules" ref="topicInfo">
        <el-form-item label="部署路径" class="form-group">
          <el-col :span="6">
            <el-input v-model="systemInfo.contextPath"></el-input>
          </el-col>
          <el-col :span="1" class="required">&nbsp; </el-col>
          <el-col :span="7" class="gray">部署在根目录请留空</el-col>
        </el-form-item>
        <el-form-item label="端口号" class="form-group">
          <el-col :span="6">
            <el-input v-model="systemInfo.port"></el-input>
          </el-col>
          <el-col :span="1" class="required">&nbsp; </el-col>
          <el-col :span="7" class="gray">默认留空</el-col>
        </el-form-item>
        <el-form-item label="默认图片" class="form-group" prop="defImg">
          <el-col :span="6">
            <el-input v-model="systemInfo.defImg"></el-input>
          </el-col>
          <el-col :span="1" class="required">&nbsp; </el-col>
          <el-col :span="7" class="gray">图片不存在时显示</el-col>
        </el-form-item>
        <el-form-item label="附件地址" class="form-group" prop="dbFileUri">
          <el-col :span="6">
            <el-input v-model="systemInfo.dbFileUri"></el-input>
          </el-col>
          <el-col :span="1" class="required">&nbsp;</el-col>
        </el-form-item>
        <el-form-item label="数据库附件" class="form-group">
          <el-col :span="6">
            <el-switch on-text="" off-text="" v-model="systemInfo.uploadToDb"></el-switch>
          </el-col>
          <el-col :span="1" class="required">&nbsp;</el-col>
          <el-col :span="7" class="gray">一般无需改动</el-col>
        </el-form-item>
        <el-form-item label="允许上传附件后缀" class="form-group">
          <el-col :span="6">
            <el-input v-model="systemInfo.allowSuffix"></el-input>
          </el-col>
          <el-col :span="1" class="required">&nbsp;</el-col>
          <el-col :span="7" class="gray">留空则不做限制</el-col>
        </el-form-item>
      </el-form>
      <div class="margin-md">
        <input type="button" value="提交" class="bbs-submit" @click="updateSystemGetInfo('topicInfo')" />
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
        systemInfo: {},
        rules: {
          dbFileUri: [{ required: true, message: '此项必填', trigger: 'blur' }],
          defImg: [{ required: true, message: '此项必填', trigger: 'blur' }]
        },
        siteId: this.$store.state.siteId
      }
    },
    methods: {
      getSystemGetInfo() {
        fetch.getSystemGetInfo({siteId: this.siteId})
          .then(res => {
            if (res.code == 1) {
              this.loading = false;
              this.systemInfo = res.data;
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
      updateSystemGetInfo(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = this.systemInfo;
            params.siteId = this.siteId;
            fetch.updateSystemGetInfo(params)
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
    created: function() {
      this.getSystemGetInfo();
    },
    watch: {
      '$route': function(to, from) {
        this.loading = true;
        this.getSystemGetInfo()
      }
    }
  }
</script>

<style scoped>

</style>
