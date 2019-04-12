<template>
  <div class="forum-module">
    <div class="forum-header">
      <span class="forum-name">{{$route.name}}</span>
      <span class="forum-hint">带"*"号的为必填项</span>
    </div>
    <div class="table-body table-responsive">
      <el-form :rules="rulesList" :model="jobInfo" ref="jobInfo">
        <el-form-item label="任务名称" class="form-group" prop="jobName">
          <el-col :span="6">
            <el-input v-model="jobInfo.jobName" auto-complete="off"></el-input>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
          <el-col :span="10"></el-col>
        </el-form-item>
        <el-form-item label="任务分组" class="form-group" prop="jobGroup">
          <el-col :span="6">
            <el-input v-model="jobInfo.jobGroup" auto-complete="off"></el-input>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
          <el-col :span="10"></el-col>
        </el-form-item>
        <el-form-item label="任务描述" class="form-group" prop="description">
          <el-col :span="6">
            <el-input v-model="jobInfo.description" auto-complete="off"></el-input>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
          <el-col :span="10"></el-col>
        </el-form-item>
        <el-form-item label="执行时间" class="form-group" prop="cronExpression">
          <el-col :span="6">
            <el-input v-model="jobInfo.cronExpression" auto-complete="off"></el-input>
          </el-col>
          <el-col :span="1" class="required">* </el-col>
          <el-col :span="10"></el-col>
        </el-form-item>
      </el-form>
      <div class="margin-md">
        <input type="button" value="提交" class="bbs-submit" @click="addJobInfo('jobInfo')" />
        <input type="reset" value="重置" class="bbs-reset" @click="resetForm('jobInfo')"/>
      </div>
    </div>
  </div>
</template>

<script>
  import * as fetch from '../../../api/bbs'
  export default {
    data() {
      var validateJobName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入任务名称'));
        } else {
          callback();
        }
      };
      var validateJobGroup = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入任务分组'));
        } else {
          callback();
        }
      };
      var validateCronExpression = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入执行时间'));
        } else {
          callback();
        }
      };
      var validateDescription = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入任务描述'));
        } else {
          callback();
        }
      };
      return {
        jobInfo: {
          jobName:'',
          jobGroup:'',
          cronExpression:''
        },
        rules:{},
        rulesList: {
          jobName: [{ validator: validateJobName, trigger: 'blur' }],
          jonGroup: [{ validator: validateJobGroup,trigger: 'blur' }],
          conExpression: [{ validator: validateCronExpression,trigger: 'blur' }],
          description: [{ validator: validateDescription,trigger: 'blur' }]
        }
      }
    },
    methods: {
      addJobInfo(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = this.jobInfo;
            fetch.addJob(params)
              .then(res => {
                if (res.code == 1) {
                  this.$message.success('添加成功');
                  setTimeout(() => {
                    this.$router.push({ path: '/job-list' })
                  }, 500);
                } else {
                  this.$message.error(res.message);
                }
              })
              .catch(res => {
                this.$message.error('修改失败');
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

</style>
