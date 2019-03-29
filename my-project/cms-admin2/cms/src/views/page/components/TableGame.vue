<template>
	<div class="digtable">
		<div class="filter-container">
				<el-input placeholder="name" v-model="listQuery.name" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      			<el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
		</div>
		<el-table
			  ref="table"
		      v-loading="listLoading"
		      :data="list"
		      element-loading-text="Loading"
		      border
		      fit
		      highlight-current-row
		      row-key="id"
		      @current-change="selectRowFn"
		      @sort-change="sortChange">
		      <el-table-column align="center" type="index" label="编号" width="95" prop="id"/>
		      <el-table-column label="标题" width="110">
		        <template slot-scope="scope">
		          {{ scope.row.name }}
		        </template>
		      </el-table-column>
		      <el-table-column label="icon">
		        <template slot-scope="scope">
		          <img width="50" height="50" :src="scope.row.icon.mediumUrl" alt="icon">
		        </template>
		      </el-table-column>
		      <el-table-column prop="createTime"  sortable label="创建时间">
		        <template slot-scope="scope">
		          {{ scope.row.createTime }}
		        </template>
		      </el-table-column>
		      <el-table-column prop="type" label="类型">
		        <template slot-scope="scope">
		          {{ scope.row.type }}
		        </template>
		      </el-table-column>
		</el-table>
		<div class="pagination-container">
			<el-pagination :current-page="listQuery.page" :page-sizes="[15,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
		</div>
	</div>
</template>
<script>
import {gameListApi,gameGetApi,} from '../../../api/game'
export default{
	props:['selectId'],
	data(){
		return {
			total: null,
			listLoading: true,
			listQuery: {
				name:undefined,
				page: 1,
		        limit: 15,
		        order:undefined,
		        sort: undefined,
		        projectId:undefined,
			},
			query:null,
			list: null,
			currentRow:null,
			lock:false,
		}
	},
	created(){
		let query = this.$route.query;
		if(!query.id){
			this.$router.back();
		}
		this.query = query
		this.listQuery.projectId=query.id
		this.fetchData()
	},
	watch:{
		selectId:{
			handler(val){
				this.currentRow=null
				this.opRes(this.list)
			},
		},
	},
	methods:{
		selectOption(list){
			let selectId = this.selectId
			return new Promise((resolve, reject)=>{
				if(selectId){
					if(list.some(item=>{
						if(item.appId==selectId){
							this.currentRow=item
							return true
						}
					})){
						resolve(1)
					}else{
						if(this.currentRow){
							list.unshift(this.currentRow)
							resolve(2)
						}else{
							gameGetApi({appId:selectId}).then(res=>{
								let row = res
								list.unshift(row)
								this.currentRow=row
								resolve(5);
							}).catch(err=>{
								reject(3)
							})
						}

					}
				}else{
					reject(0)
				}
			})
		},
		opRes(list){
			this.lock = true;
			this.$refs.table.setCurrentRow()
			this.selectOption(list).then(()=>{
	        	this.list = list;
	        	this.listLoading = false
	        	if(this.currentRow){
        			this.$refs.table.setCurrentRow(this.currentRow)
        		}
        		this.lock=false
	        }).catch(err=>{
	        	this.list = list;
	        	this.listLoading = false
	        	console.log(err)
	        	this.lock=false
	        })
		},
		fetchData() {
	      this.listLoading = true
	      gameListApi(this.listQuery).then(res=>{
	      	this.total=res.total
	        let list = res.rows||[]
	        this.opRes(list)
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
		    this.fetchData()
		},
		handleSizeChange(val) {
			this.listQuery.limit = val
			this.fetchData()
		},
		handleCurrentChange(val) {
			this.listQuery.page = val
			this.fetchData()
		},
		selectRowFn(currentRow, oldCurrentRow){
			if(!this.lock&&currentRow&&currentRow.appId!=this.selectId){
				this.$emit('choiceData',currentRow)
			}
		},
	},
}
</script>
