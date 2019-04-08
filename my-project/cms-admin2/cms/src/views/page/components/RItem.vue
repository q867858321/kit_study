<template>
	<section class="v_p_c-RItem re-item" @mouseenter="statuHover=true" @mouseleave="statuHover=false" @click="setEditSpecComponentIndex(data)">
		<div class="title">
			<h5 class="title5">{{data.name}}</h5>
		</div>
		<div class="content">
			<component :is="data.name"  :content.sync="contentList" :data="data" :select="editSpecComponent===data" @handleAdd="handleAdd" @handleDelete="handleDelete" :spObj.sync="spObj" :localId="data.localId"/>
		</div>
		<div class="mask" v-show="editSpecComponent===data || statuHover">
			<el-row>
			  <el-button type="primary" icon="el-icon-info" circle></el-button>
			  <el-button type="danger" icon="el-icon-delete" circle @click.stop="deleteComponent(data)"></el-button>
			</el-row>
		</div>
		<div class="maskbg" v-show="editSpecComponent!==data"></div>
	</section>
</template>
<script>
import Flippage from  './Flippage'
import Gallery from  './Gallery'
import Feed from  './Feed'
import AppList from  './AppList'
import Infopage from  './Infopage'
import Tab from  './Tab'
import {mapActions,mapState,mapGetters,mapMutations,} from 'vuex'

export default{
	name:'RItem',
	props:["data","indexNum"],
	components:{
		Flippage,
		Gallery,
		Feed,
		AppList,
		Infopage,
		Tab,
	},
	data(){
		return {
			statuHover:false,
		}
	},
	computed:{
		...mapGetters('page',['editSpecComponent']),
		contentList:{
			get(){
				this.data.localId;
				let content = this.data.contents||[]
				return content
			},
			set(val){
				this.updateContent(val)
			},
		},
		spObj:{
			get(){
				this.data.localId;
				let spObj = this.data.spObj||(this.data.content||[])[0]
				return spObj
			},
			set(val){
				this.UPDATA_SPOBJ({content:val})
			},
		},
	},
	methods:{
		...mapMutations('page',['UPDATA_SPOBJ']),
		...mapActions('page',['addContent','deleteContent','updateContent','setEditSpecComponentIndex','deleteComponent']),
		handleAdd(){
			this.addContent({content:{},keyId:this.data})
		},
		handleDelete(val){
			this.deleteContent(val)
		},
	},
}
</script>