<template>
  <div class="forum-module" >
    <div class="forum-header">

      <span class="forum-name">{{$route.name}}</span>
      <div class="pull-right">
      </div>
    </div>
    <div class="table-body table-responsive" v-loading.body="loading">
      <el-form :rules="rules" :model="topicTypeInfo" ref="topicInfo">
        <el-form-item label="名称" class="form-group" prop="name">
          <el-col :span="6">
            <el-input v-model="topicTypeInfo.name"></el-input>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
        </el-form-item>

        <el-form-item label="路径" class="form-group" prop="path">
          <el-col :span="6">
            <el-input v-model="topicTypeInfo.path"></el-input>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
        </el-form-item>
        <el-form-item label="排序" class="form-group" prop="priority">
          <el-col :span="6">
            <el-input v-model.number="topicTypeInfo.priority"></el-input>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
        </el-form-item>

        <el-form-item label="是否显示" class="form-group">
          <el-col :span="1">
            <el-switch on-text="是" off-text="否" v-model="topicTypeInfo.display"></el-switch>
          </el-col>
        </el-form-item>

        <el-form-item label="图标预览" class="form-group">
          <el-col :span="6">
            <el-input v-model="topicTypeInfo.typeLogo"></el-input>
            <div :class="state ? 'pic-box' : 'pic-box-no'">

              <img :src="$store.state.baseUrl+imgPath" alt=""  @click="showBig"  v-if="!state" >

            </div>
          </el-col>
          <el-col :span="6">
            <el-upload class="upload-demo" :action="$store.state.upLoadUrl" name="uploadFile" :data="upobj"
                       :before-upload="beforeAvatarUpload"
                       :on-success="getImgPath"
                       :show-file-list="fileState">
              <el-button  type="primary" style="margin-left:10px">点击上传</el-button>
            </el-upload>
            <el-dialog title="按下esc退出全屏" v-model="dialogVisible" size="full" class="pic-dialog" >
              <img  :src="$store.state.baseUrl+imgPath" alt="" class="big-img">
            </el-dialog>
          </el-col>
        </el-form-item>

        <el-form-item label="描述" class="form-group">
          <el-col :span="6">
            <el-input type="textarea" v-model="topicTypeInfo.description"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
      <div class="margin-md">
        <input type="button" value="提交" class="bbs-submit" v-if="$route.query.type=='edit'" @click="updateTopicTypeInfo('topicInfo')"/>
        <input type="button" value="提交" class="bbs-submit" v-if="$route.query.type=='add'"  @click="addTopicTypeInfo('topicInfo')"/>
        <input type="reset" value="重置" class="bbs-reset" @click="resetForm('topicInfo')"/>
      </div>
    </div>
  </div>
</template>

<script>
  import * as fetch from '../../../api/bbs'
  export default {
    data() {
      var validatePath = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入路径'));
        } else {
          let reg = /[\W]/g;
          if (reg.test(value)) {
            callback(new Error('路径只能输入数字，字母'));
          } else {
            callback()
          }
        }
      };
      return {
        fileState: true,
        dialogVisible: false,
        loading: true,
        count: 0,
        state: false,
        imgPath: '',//图片路径
        upobj: {//上传参数
          type: 'image',
          sessionKey: localStorage.getItem('sessionKey'),
          appId: this.$store.state.appId
        },
        topicTypeInfo: {},
        siteId: this.$route.query.siteId,
        rules:{
          name: [{ required: true, message: '请填写一个主题分类名', trigger: 'blur' }],
          path: [{ validator: validatePath, trigger: 'blur' }],
          priority: [{ required: true,type: 'number', message: '请填写一个数字排序', trigger: 'blur' }]
        }
      }
    },
    methods: {
      showBig() {//获取主题信息列表
        this.dialogVisible = true
      },
      getTopicTypeInfo(id) {//获取分类主题信息
        fetch.getTopicTypeInfo({ id: id })
          .then(res => {
            if (res.code == 1) {
              this.loading = false;
              if (this.$route.query.type == 'add') {
                // res.data.parentId = this.$route.query.rootId;
              }
              this.topicTypeInfo = res.data;
              if (this.topicTypeInfo.typeLogo == '') {
                this.state=true;
              } else {
                this.imgPath=res.data.typeLogo;
                this.state=false;
              }
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
      setChange(val) {// 修改主题
        this.topicTypeInfo.root = val;
      },
      updateTopicTypeInfo(formName) {//修改主题
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = this.topicTypeInfo;
            fetch.updateTopicTypeInfo(params)
              .then(res => {
                if (res.code == 1) {
                  this.$message.success('修改成功');
                  setTimeout(() => {
                    this.$router.push({ path: '/topictypelist' })
                  }, 1000);
                } else {
                  this.$message.error(res.msg);
                }
              })
          } else {
            return false;
          }
        })
      },
      addTopicType() {//添加内的添加
        this.$router.push({
          path: '/topictypeadd',
          query: {
            type: 'add',
            id:0
          }
        });
      },
      addTopicTypeInfo(formName) {//添加主题
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = this.topicTypeInfo;
            params.siteId = this.siteId;
            fetch.addTopicTypeInfo(params)
              .then(res => {
                if (res.code == 1) {
                  this.$message.success('添加成功');
                  setTimeout(() => {
                    this.$router.push({ path: '/topictypelist' })
                  }, 1000);
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
      },
      back() {
        this.$router.push({
          path: '/topictypelist',
          query:{
            id: this.topicTypeInfo.root,
            noceStr: Math.round(Math.random()*10)
          }
        })
      },
      beforeAvatarUpload(file) {//上传验证
        this.fileState = true;
        const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过2MB!');
        }
        return isJPG && isLt2M;
      },
      getImgPath(res, file, fileList) {//回填服务器图片路径
        this.imgPath = res.data.url;
        this.fileState=false;
        this.state = false;
        this.topicTypeInfo.typeLogo = res.data.url;
      },
      resetForm(formName) {//重置表单
        let id = this.$route.query.id;
        this.$refs[formName].resetFields();
      }
    },
    created: function () {
      let type = this.$route.query.type;
      let id = this.$route.query.id;
      // this.getTopicTypeTree();
      if (type == 'add') {
        this.getTopicTypeInfo(id);

      } else if (type == 'edit') {
        this.getTopicTypeInfo(id);
      }
    },
    watch: {
      '$route': function(to, from) {
        let id = this.$route.query.id;
        this.loading = true;
        // this.getTopicTypeTree();
        this.getTopicTypeInfo(id);
      }
    }
  }
</script>

<style scoped>

</style>
