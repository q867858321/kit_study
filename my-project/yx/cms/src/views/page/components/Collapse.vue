<template>
<section class="v_p_c-collapse">
<el-collapse v-if="editSpecComponent" :value="Object.keys(attributes)">
  <el-form v-if="activeNames.length" ref="dataForm" :model="attributes" >
	  <el-collapse-item v-for="(attr, index) in getSpecCompAttr" :title="attr.name" :name="attr.eName"  :key='index'>
	    <div v-if="attr.type=='radio'">
	        <el-radio-group v-model="attributes[attr.eName]">
	          <el-radio v-for="(option,index) in attr.attrOptionList" :label="option[0]" :key='index' >{{option[1]}}</el-radio>
	        </el-radio-group>
	    </div>
	    <div v-if="attr.type=='select'">
	    	<el-select v-model="attributes[attr.eName]" placeholder="请选择">
	    		<el-option
			      v-for="option in attr.attrOptionList"
			      :key="option[0]"
			      :label="option[1]"
			      :value="option[0]">
			    </el-option>
	    	</el-select>
	    </div>
	    <div v-if="attr.type=='number'">
	    	<el-input-number v-model="attributes[attr.eName]"/>
	    </div>
	    <div v-if="attr.type=='color'">
	    	<el-color-picker v-model="attributes[attr.eName]"/>
	    </div>
	    <div v-if="attr.type=='text'">
	    	<el-input v-model="attributes[attr.eName]"/>
	    </div>
	  </el-collapse-item>
  </el-form>
</el-collapse>
</section>
</template>
<script>
import {mapActions,mapState,mapGetters} from 'vuex'
export default{
	data(){
		return {
			 attributes:{},
		}
	},
	computed:{
		...mapGetters('page/',['getSpecCompAttr','editSpecComponent']),
		contents(){
			this.editSpecComponent.localId
			return this.editSpecComponent.contents&&this.editSpecComponent.contents.length
		},
		activeNames(){
			this.attributes=Object.assign({},this.editSpecComponent.attributes,{source:0})
			return Object.keys(this.attributes)
		},
	},
	created(){
	},
	watch:{
		attributes:{
			deep:true,
			handler(val){
				if(val.source&&val.source!=0){
					this.setEditSpecAttr(val)
				}else{
					val.source=1;
				}
			},
		},
	},
	methods:{
		...mapActions('page',['setEditSpecAttr',]),
	},
}
</script>
