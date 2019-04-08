<template>
  <div>
    <div class="stik__top">
      <el-button class="link" size="mini" @click="$router.go(-1)"><i class="el-icon-arrow-left"></i></el-button>
      <span>{{name}}(项目)</span>
    </div>

    <div class="app-container">
      <div class="filter-container">
        <el-input placeholder="页面英文" v-model="listQuery.eName" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
        <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">添加页面</el-button>
      </div>
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
        @sort-change="sortChange">
        <el-table-column align="center" type="index" label="编号" width="95" prop="id"/>
        <el-table-column label="标题" width="110">
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column prop="eName" sortable label="英文" width="110">
          <template slot-scope="scope">
            {{ scope.row.eName }}
          </template>
        </el-table-column>
        <el-table-column prop="createTime"  sortable label="创建时间">
          <template slot-scope="scope">
            {{ scope.row.createTime }}
          </template>
        </el-table-column>
        <el-table-column prop="name" label="颜色">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.color":style='{"background": scope.row.color}'></el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button-group class="project_btn_g">
              <router-link :to='{path:"edit",query:{id:projectId,name,name,pageId:scope.row.id,pageName:scope.row.name}}' append><el-button type="primary" size="mini">管理</el-button></router-link>
              <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
              <el-button type="danger" size="mini" @click="deleteData(scope.row)">删除</el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog v-if="dialogFormVisible" :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
        <el-form ref="dataForm" :model="temp" label-position="left" label-width="19%" style="width: 80%; margin-left:50px;">

          <el-form-item label="名称" prop="name" verify>
            <el-input v-model="temp.name"/>
          </el-form-item>
          <el-form-item label="英文名称" prop="eName" verify>
            <el-input v-model="temp.eName"/>
          </el-form-item>
          <el-form-item label="标题" prop="title" verify>
            <el-input v-model="temp.title"/>
          </el-form-item>
          <el-form-item label="颜色值" prop="color">
            <el-color-picker v-model="temp.color"></el-color-picker>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">确认</el-button>
          <el-button v-if="dialogStatus=='update'" type="primary" @click="updateData">确认</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import {pageIndexApi,pageCreateApi,pageUpdateApi,pageDeleteApi} from '../../api/page'
  export default{
    name:'Page',
    data(){
      return {
        name:null,projectId:null,
        listLoading: true,
        listQuery: {
          projectId:undefined,
          eName: undefined,
          title: undefined,
          sort: undefined,
          order:undefined,
          projectId:undefined,
        },
        temp: {
          name: '',
          eName: '',
          title: '',
          color: '',
        },
        list: null,
        dialogStatus: '',
        dialogFormVisible: false,
        textMap: {
          update: '编辑',
          create: '添加'
        },
      }
    },
    created(){
      let query = this.$route.query;
      if(!query.id){
        this.$router.back();
      }
      this.projectId=this.listQuery.projectId=query.id
      this.name=query.name
      this.fetchData()
    },
    methods:{
      fetchData() {
        this.listLoading = true
        pageIndexApi(this.listQuery).then(res=>{
          let list = res.rows||[]
          this.list = list;
          this.listLoading = false
        }).catch(err => {
          this.listLoading = false
        })
      },
      sortChange(val) {
        if (val.order) {
          this.listQuery.order = val.prop
          this.listQuery.sort = val.order == 'descending' ? 'desc' : (val.order == 'ascending' ? 'asc' : undefined)
        } else {
          this.listQuery.order = undefined
          this.listQuery.sort = undefined
        }
        this.fetchData()
      },
      resetTemp(def) {
        var obj = {
          name: '',
          eName: '',
          color: '',
          title: '',
          projectId:this.projectId,

        }
        this.temp = def ? Object.assign(obj, def,{project:undefined,}) : obj
      },
      handleFilter() {
        this.fetchData()
      },
      handleCreate() {
        this.resetTemp()
        this.dialogStatus = 'create'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      },
      createData() {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            const temp = this.temp
            pageCreateApi(temp).then(response => {
              this.fetchData()
              this.dialogFormVisible = false
            })
          }
        })
      },
      handleUpdate(row) {
        this.dialogStatus = 'update'
        this.resetTemp(row);
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      },
      updateData() {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            const tempData = Object.assign({}, this.temp)
            tempData.createTime=undefined;
            tempData.color===null?tempData.color="":'';
            pageUpdateApi(tempData).then(() => {
              this.fetchData();
              this.dialogFormVisible = false
              this.$notify({
                title: '成功',
                message: '更新成功',
                type: 'success',
                duration: 2000
              })
            })
          }
        })
      },
      deleteData(row){
        this.$confirm('此操作将删除该项, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          pageDeleteApi(row.id).then(res=>{
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.fetchData()
          }).catch(err=>{
            console.log(err)
          })
        }).catch(() => {});
      },
    },
  }
</script>

<style scoped>

</style>
