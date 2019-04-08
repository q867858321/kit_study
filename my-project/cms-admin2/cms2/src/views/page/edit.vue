<template>
  <div>
    <div class="stik__top">
      <span class="link" @click="$router.go(-1)">{{name}}(项目)</span><i class="el-icon-arrow-right"></i>
      <span>{{pageName}}(页面编辑)</span>
      <el-button type="primary" size="mini" class="r-button" @click="saveResult">保存</el-button>
    </div>
    <div class="app-container app-container2">
      <el-row class="splitBox">
        <el-col  class="splitleft"><Result/></el-col>
        <el-col class="splitright">
          <UIManage/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import UIManage from './UIManage'
  import Result from './Result'
  import {mapActions,mapState,mapGetters} from 'vuex'
  import {pageUIApi,pageDetailApi,assemblyCreateApi,assemblyDeleteApi,assemblyContentDeleteApi,} from '../../api/page'
  export default{
    components:{
      UIManage,
      Result,
    },
    data(){
      return{
        projectId:null,name:null,pageName:null,pageId:null,
      }
    },
    beforeCreate(){
      let query = this.$route.query;
      if(!query.id||!query.pageId){
        this.$router.back();
      }
    },
    computed:{
      ...mapState('page',['subassemblyList','editResult','deletedCompIds',]),
      ...mapGetters('page',['complist']),
      compObj(){
        let complist  = this.complist||[]
        let tmpObj = {}
        complist.map(item=>{
          tmpObj[item.id]=item.name
        })
        return tmpObj
      },
    },
    created(){
      let query = this.$route.query;
      this.projectId=query.id
      this.pageName=query.pageName
      this.pageId=query.pageId
      this.name=query.name
      this.setEditResult([])
      if(!this.subassemblyList){
        this.setSubassemblyList().then(()=>{
          this.fetchData()
        })
      }else{this.fetchData()}
    },
    methods:{
      ...mapActions('page',['setEditResult','setSubassemblyList','orderEditResult','setProPageQuery']),
      fetchData(){
        let pageId = this.pageId;
        this.setProPageQuery({pageId});
        pageUIApi(pageId).then(res=>{
          window.localStorage.setItem("__EditResult",JSON.stringify(res));
          let compObj = this.compObj;
          this.$nextTick(()=>{
            res.map(item=>{
              item.name = compObj[item.subassemblyId];
              item.localId = item.id;
              item.pageId = pageId
            });
            this.setEditResult(res)
          })
        }).catch(err=>{});
        pageDetailApi(this.pageId).then(res=>{
          //
        }).catch(err=>{})
      },
      saveResult(){
        let editResult = this.editResult;
        let deletedCompIds = this.deletedCompIds.join(',');
        if(deletedCompIds){
          assemblyDeleteApi({ids:deletedCompIds}).then(res=>{
            this.$message({
              message: '删除成功',
              type: 'success'
            });
          }).catch(err=>{
            this.$message({
              message: '删除error',
              type: 'error'
            });
            console.log(err)
          })
        }
        this.orderEditResult();
        assemblyCreateApi({
          assemblies:JSON.stringify(editResult),
          pageId:this.pageId,
        }).then(res=>{
          this.$message({
            message: '保存成功',
            type: 'success'
          });
        }).catch(err=>{
          this.$message({
            message: '保存error',
            type: 'error'
          });
          console.log(err)
        })
        //window.localStorage.setItem("__EditResult",JSON.stringify(this.$store.state.page.editResult))
      },
    },
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  @import '../../styles/UIManage.scss';
</style>
