<template>
  <div class="app-container">
    <div class="filter-container">
      <!-- <el-input placeholder="渠道名称" v-model="listQuery.name" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
			<el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button> -->
      <el-input placeholder="项目英文" v-model="listQuery.eName" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      <el-button v-has="api.projectCreateApi.getPerm" class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">添加项目</el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      @sort-change="sortChange">
      <!-- <el-table-column type="selection" align="center"/> -->
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
      <el-table-column label="渠道" width="110">
        <template slot-scope="scope">
          {{ scope.row.channelCodeStr}}
        </template>
      </el-table-column>
      <el-table-column label="国家">
        <template slot-scope="scope">
          {{ scope.row.coverageStr}}
        </template>
      </el-table-column>
      <el-table-column label="状态" width="90">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status | filterStatus }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button-group class="project_btn_g">
            <router-link :to="{path:api.projectPageIndexApi.getPerm,query:{id:scope.row.id,name:scope.row.name}}" append><el-button type="primary" size="mini" v-if='btnGroupApi.projectPageIndexApi' >页面管理</el-button></router-link>
            <el-button type="primary" size="mini" v-if='btnGroupApi.projectUpdateApi' @click="handleUpdate(scope.row)">编辑</el-button>
            <el-button type="danger" size="mini" v-if='btnGroupApi.projectDeleteApi' @click="deleteData(scope.row)">删除</el-button>
            <el-button type="primary" size="mini" v-if='btnGroupApi.projectAuditApi'>{{ scope.row.status | filterStatusOp }}</el-button>
            <el-button type="primary" size="mini" v-if='btnGroupApi.projectPublishApi'  @click="publishData(scope.row)">发布</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-if="dialogFormVisible" :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :model="temp" label-position="left" label-width="19%" style="width: 80%; margin-left:50px;">

        <el-form-item label="标题" prop="name" verify>
          <el-input v-model="temp.name"/>
        </el-form-item>
        <el-form-item label="英文名称" prop="eName" verify>
          <el-input v-model="temp.eName"/>
        </el-form-item>
        <el-form-item label="覆盖范围">
          <el-select v-model="coverage" filterable placeholder="请选择" multiple @change="handleCoverage" style="width: 100%;" value-key="regionCode">
            <el-option
              v-for="item in optionsCoverageList"
              :key="item.regionCode"
              :label="item.name"
              :value="item.regionCode">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="渠道">
          <el-select v-model="temp.channelCode" filterable placeholder="请选择" style="width: 100%;" value-key="regionCode">
            <el-option
              v-for="item in optionsChannelsList"
              :key="item.id"
              :label="item.name"
              :value="item.code">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">确认</el-button>
        <el-button v-if="dialogStatus=='update'" type="primary" @click="updateData">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { projectListApi,projectCreateApi,projectCountryListApi,projectChannelListApi,projectUpdateApi,projectDeleteApi,projectPublishApi,projectPageIndexApi,projectPreviewApi,projectAuditApi,} from '../../api/project'
  import has, {hasApi} from '../../directive/has/has'
  export default {
    name:'project',
    filters:{
      filterStatus(val){

        return val?'已上线':'已下线';
      },
      filterStatusOp(val){

        return !val?'上线':'下线';
      },
      statusFilter(status) {
        if (!status) {
          return 'success';
        }else{
          return 'gray'
        }
      },

    },
    directives: {
      has
    },
    data() {
      return {
        api: {
          projectCreateApi,
          projectUpdateApi,
          projectDeleteApi,
          projectPublishApi,
          projectPageIndexApi,
          projectPreviewApi,
          projectAuditApi,
        },
        total: null,
        listLoading: true,
        listQuery: {
          eName: undefined,
          title: undefined,
          sort: undefined,
          order:undefined,
        },
        list: null,
        textMap: {
          update: '编辑',
          create: '添加'
        },
        optionsChannels:[],
        optionsCoverage:[],
        dialogStatus: '',
        dialogFormVisible: false,
        coverage:'',
        temp: {
          name: '',
          eName: '',
          coverage:'',
          channelCode:'',
        },
        btnGroupApi:null
      }
    },
    created() {
      let apis = this.api,btnGroupApi = {};
      console.debug("332");
      for( let ikey in apis){
        btnGroupApi[ikey] = hasApi(apis[ikey].getPerm)
      }
      console.debug("22222222222");
      this.btnGroupApi = btnGroupApi;
      Promise.all([this.getChannelsFn(),this.getOptionsFn()]).then(()=>{
        this.fetchData();
      }).catch(()=>{this.fetchData();})
    },
    computed:{
      optionsCoverageList:{
        get(){
          if(this.optionsCoverage&&this.optionsCoverage.length==0){
            this.getOptionsFn()
          }
          return this.optionsCoverage
        },
      },
      optionsChannelsList:{
        get(){
          if(this.optionsChannels&&this.optionsChannels.length==0){
            this.getChannelsFn()
          }
          return this.optionsChannels
        },
      },
    },
    methods: {
      filterChannel(val){
        let str=''
        this.optionsChannelsList.forEach(item=>{
          if(item.code==val){str=item.name}
        })
        return str
      },
      filterCoverage(val){
        let arr=[]
        let arr2=val.split(",")
        this.optionsCoverageList.forEach(item=>{
          if( arr2.includes(item.regionCode) ){arr.push(item.name)}
        })
        return arr.join(',')
      },
      getChannelsFn(){
        return projectChannelListApi().then(res=>{
          optionsChannelsList=this.optionsChannels=res||[];
        }).catch(()=>{})
      },
      getOptionsFn(){
        return projectCountryListApi().then(res=>{
          optionsCoverageList=this.optionsCoverage=res||[];
          console.log(optionsCoverageList)
        }).catch(()=>{})
      },
      fetchData() {

        this.listLoading = true
        projectListApi(this.listQuery).then(res=>{
          let list = res.rows||[]
          list.forEach(item=>{
            item.channelCodeStr=this.filterChannel(item.channelCode)
            item.coverageStr=this.filterCoverage(item.coverage)
          })
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
      handleFilter() {
        this.listQuery.page = 1
        this.fetchData()
      },
      publishData(row){
        projectPublishApi({idci:row.id}).then(()=>{
          this.$message({
            type: 'success',
            message: '操作成功!'
          });
        }).catch(err=>{
          this.$message({
            type: 'error',
            message: '出错!'
          });
        })
      },
      deleteData(row){
        this.$confirm('此操作将删除该项, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          projectDeleteApi({id:row.id}).then(res=>{
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
      handleCoverage(){
        let str=(this.coverage||[]).join(",")
        this.temp.coverage =str
      },
      resetTemp(def) {
        var obj = {
          name: '',
          eName: '',
          coverage:'',
          channelCode:'',
        }
        this.temp = def ? Object.assign(obj, def) : obj
        this.temp.coverage?this.coverage=this.temp.coverage.split(","):this.coverage=[]
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
            projectCreateApi(temp).then(response => {
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
            projectUpdateApi(tempData).then(() => {
              console.log(this.listQuery);
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
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .project_btn_g{
    .el-button{
      margin-bottom: 10px;
    }
  }
</style>
