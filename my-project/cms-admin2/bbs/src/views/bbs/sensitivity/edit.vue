<template>
  <div class="forum-module">
    <div class="forum-header">
      <span class="forum-name">{{$route.name}}</span>
    </div>
    <div class="table-body table-responsive">
      <el-form :rules="rules" ref="ruleForm" :model="params">
        <el-form-item label="输入" class="form-group" prop="words">
          <el-col :span="9">
            <el-input type="textarea" :rows="14" v-model="params.words"></el-input>
          </el-col>
          <el-col :span="1">&nbsp;</el-col>
          <el-col :span="9">
            <div class="font-hint" style="margin-left:-15px;">
              <p> 每行一组敏感词，敏感词和替换词之间使用“=”进行分割；</p>
              <p>如果只是想将某个敏感词直接替换成 **，则只输入敏感词即可；</p>
              <p>如果想禁止发布所有包含敏感词的文字，则只需要输入敏感词并在</p>
              <p>
                列表页进行配置；</p>
              <p> 例如：</p>
              <p>toobad</p>
              <p>nobad</p>
              <p>badword=good</p>

            </div>
          </el-col>
        </el-form-item>
        <el-form-item label="添加方式" class="form-group">
          <el-col :span="10">
            <el-radio-group v-model="params.type">
              <el-radio :label="1">不替换已经存在的敏感词</el-radio>
              <el-radio :label="2">替换全部敏感词</el-radio>
              <el-radio :label="3">清空当前敏感词并导入新敏感词</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>
      </el-form>
      <div class="margin-md">
        <input type="button" value="提交" class="bbs-submit" @click="add('ruleForm')" />
        <input type="reset" value="重置" class="bbs-reset" @click="resetForm('ruleForm')" />
      </div>
    </div>
  </div>
</template>
<script>
  import * as fetch from '../../../api/bbs'
  export default {
    data() {
      return {
        params: {
          type: 1,
          words: '',
        },
        rules: {
          words: [{ required: true, message: '请填写敏感词内容', trigger: 'blur' }],
        },
        siteId: this.$route.query.siteId,
      }
    },
    methods: {
      back() {
        this.$router.push({
          path: '/sensitivitylist',
          query: {
            noceStr: Math.round(Math.random() * 10)
          }
        })
      },
      add(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = this.params;
            params.siteId = this.siteId;
            fetch.sensitivityBatchSave(params)
              .then(res => {
                if (res.code == 1) {
                  this.$message.success('添加成功');
                  setTimeout(() => {
                    this.$router.push({ path: '/sensitivitylist' })
                  }, 1000);
                }
              })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {//重置表单
        this.$refs[formName].resetFields();
      }
    },
    created: function() {

    }
  }
</script>

<style scoped>
  .el-radio-group .el-radio {
    display: block;
    margin-left: 0 !important;
    margin-bottom: 12px;
  }
</style>
