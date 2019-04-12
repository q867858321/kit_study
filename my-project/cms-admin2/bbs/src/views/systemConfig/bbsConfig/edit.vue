<template>
  <div class="forum-module">
    <div class="forum-header">
      <span class="forum-name">{{$route.name}}</span>
    </div>
    <div class="table-body table-responsive" v-loading.body="loading">
      <el-form :model="systemInfo" :rules="rules" ref="topicInfo">
        <el-form-item label="在线保持时间" class="form-group" prop="keepMinute">
          <el-col :span="6">
            <el-input v-model.number="systemInfo.keepMinute" type="number"></el-input>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
          <el-col :span="7" class=""></el-col>
        </el-form-item>
        <el-form-item label="默认头像" class="form-group" prop="defAvatar">
          <el-col :span="6">
            <el-input v-model="systemInfo.defAvatar"></el-input>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
          <el-col :span="7" class=""></el-col>
        </el-form-item>
        <el-form-item label="图片上传缩率图默认宽度" class="form-group" prop="picZoomDefWidth">
          <el-col :span="6">
            <el-input v-model.number="systemInfo.picZoomDefWidth"></el-input>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
          <el-col :span="7" class=""></el-col>
        </el-form-item>
        <el-form-item label="头像宽度" class="form-group" prop="avatarWidth">
          <el-col :span="6">
            <el-input v-model.number="systemInfo.avatarWidth"></el-input>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
          <el-col :span="7" class=""></el-col>
        </el-form-item>
        <el-form-item label="头像高度" class="form-group" prop="avatarHeight">
          <el-col :span="6">
            <el-input v-model.number="systemInfo.avatarWidth"></el-input>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
          <el-col :span="7" class=""> </el-col>
        </el-form-item>
        <el-form-item label="每页主题数" class="form-group" prop="topicCountPerPage">
          <el-col :span="6">
            <el-input v-model.number="systemInfo.topicCountPerPage"></el-input>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
          <el-col :span="7" class=""></el-col>
        </el-form-item>
        <el-form-item label="每页帖子数" class="form-group" prop="postCountPerPage">
          <el-col :span="6">
            <el-input v-model.number="systemInfo.postCountPerPage"></el-input>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
          <el-col :span="7" class=""></el-col>
        </el-form-item>
        <el-form-item label="热帖回复数" class="form-group" prop="topicHotCount">
          <el-col :span="6">
            <el-input v-model.number="systemInfo.topicHotCount"></el-input>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
          <el-col :span="7" class=""></el-col>
        </el-form-item>
        <el-form-item label="首页关键字" class="form-group" prop="keywords">
          <el-col :span="6">
            <el-input v-model="systemInfo.keywords"></el-input>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
          <el-col :span="7" class=""></el-col>
        </el-form-item>
        <el-form-item label="首页描述" class="form-group" prop="description">
          <el-col :span="6">
            <el-input v-model="systemInfo.description"></el-input>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
          <el-col :span="7" class=""></el-col>
        </el-form-item>

        <el-form-item label="会员注册" class="form-group" :required="true">
          <el-col :span="6">
            <el-select v-model="systemInfo.registerStatus">
              <el-option label="关闭注册" :value="0"></el-option>
              <el-option label="开放普通注册" :value="1"></el-option>
              <el-option label="开放邀请注册" :value="2"></el-option>
            </el-select>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
          <el-col :span="7" class=""></el-col>
        </el-form-item>
        <el-form-item label="注册会员组" class="form-group" :required="true">
          <el-col :span="6">
            <el-select placeholder="用户组" v-model="systemInfo.registerGroupId">
              <el-option v-for="item in groupList" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
          <el-col :span="7" class=""></el-col>
        </el-form-item>
        <el-form-item label="默认会员组" class="form-group" :required="true">
          <el-col :span="6">
            <el-select placeholder="用户组" v-model="systemInfo.defaultGroupId">
              <el-option v-for="item in groupList" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
          <el-col :span="7" class=""></el-col>
        </el-form-item>
        <el-form-item label="禁止带敏感词发帖" class="form-group" :required="true">
          <el-col :span="6">
            <el-switch on-text="是" off-text="否" v-model="systemInfo.sensitivityInputOn"></el-switch>
          </el-col>
          <el-col :span="1" class="required">*</el-col>
          <el-col :span="7" class=""></el-col>
        </el-form-item>
        <el-form-item label="开启邮箱验证" class="form-group" :required="true">
          <el-col :span="6">
            <el-switch  on-text="是" off-text="否" v-model="systemInfo.emailValidate"></el-switch>
          </el-col>
          <el-col :span="1" class="required">*</el-col>
          <el-col :span="7" class=""></el-col>
        </el-form-item>
        <el-form-item label="注册协议" class="form-group" >
          <el-col :span="6">
            <el-input type="textarea" v-model="systemInfo.registerRule"></el-input>
          </el-col>
          <el-col :span="1" class="required">&nbsp;</el-col>
          <el-col :span="7" class=""></el-col>
        </el-form-item>
      </el-form>
      <div class="margin-md">
        <input type="button" value="提交" class="bbs-submit" @click="updateBbsInfo('topicInfo')" />
        <input type="reset" value="重置" class="bbs-reset" />
      </div>
    </div>
  </div>
</template>

<script>
  import * as fetch from '../../../api/systemConfig'
  import * as users from '../../../api/usermanage'
  export default {
    data() {
      return {
        loading: true,
        systemInfo: {},
        groupList: [],
        rules: {
          keepMinute: [{ required: true,type:'number', message: '请输入一个数字', trigger: 'blur' }],
          defAvatar: [{ required: true, message: '此项必填', trigger: 'blur' }],
          picZoomDefWidth: [{ required: true, type:'number',message: '请输入一个数字', trigger: 'blur' }],
          avatarWidth: [{ required: true,type:'number', message: '请输入一个数字', trigger: 'blur' }],
          avatarHeight: [{ required: true, type:'number',message: '此项必填', trigger: 'blur' }],
          topicCountPerPage: [{ required: true, type:'number',message: '此项必填', trigger: 'blur' }],
          postCountPerPage: [{ required: true,type:'number', message: '此项必填', trigger: 'blur' }],
          topicHotCount: [{ required: true, type:'number',message: '此项必填', trigger: 'blur' }],
          keywords: [{ required: true, message: '此项必填', trigger: 'blur' }],
          description: [{ required: true, message: '此项必填', trigger: 'blur' }]
        },
        siteId: this.$store.state.siteId
      }
    },
    methods: {
      getUserGroupList() {//获取会员组
        users.getGroupList({groupType: -1})
          .then(res => {
            this.groupList = res.data;
          })
      },
      getBbsInfo() {
        fetch.getBbsInfo({siteId: this.siteId})
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
      updateBbsInfo(formName) { //修改系统信息
        this.$refs[formName].validate((valid) => {
          document.querySelector("#main").scrollTop = 0;
          if (valid) {
            let params = this.systemInfo;
            params.siteId = this.siteId;
            fetch.updateBbsInfo(params)
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
            document.querySelector("#main").scrollTop = 0;
            return false;
          }
        })
      }
    },
    created: function () {
      this.getUserGroupList();
      this.getBbsInfo();
    },
    watch: {
      '$route': function(to, from) {
        this.loading = true;
        this.getBbsInfo()
      }
    }
  }
</script>

<style scoped>

</style>
