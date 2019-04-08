<template>
	<section class="v_p-UIMange">
		<div class="opbox opbox--first">
			<div class="title">
				<span>组件</span>
			</div>
			<div class="oplist">
				<div class="complist">
					<div class="compitem">
						<el-tag
						v-for="(tag, index) in complist"
						 @close='addComponent(defaultAddMap[tag.id])'
						  closable :key='index'>
						  {{tag.name}}({{compLenObj[tag.name]||0}})
						</el-tag>
					</div>
				</div>
			</div>
		</div>
		<div class="opbox">
			<div class="title">
				<span>属性</span>
			</div>
			<div class="oplist">
				<Collapse/>
			</div>
		</div>
		<div class="opbox">
			<div class="title">
				<span>内容</span>
			</div>
			<div class="oplist">
				<Content/>
			</div>
		</div>
	</section>
</template>
<script>
import Collapse from './components/Collapse'
import Content from './components/Content'
import {mapActions,mapState,mapGetters} from 'vuex'
export default{
	name:'UIManage',
	components:{
		Collapse,
		Content,
	},
	data(){
		return {}
	},
	computed:{
		...mapState('page',['subassemblyList','editResult']),
		...mapGetters('page',['complist','defaultAddMap']),
		compLenObj(){
			let editResult = this.editResult||[]
			let tmpObj={};
			editResult.map(item => {
				tmpObj[item.name] = (+tmpObj[item.name]+1)||1
			});
			return tmpObj
		},
	},
	methods:{
		...mapActions('page',['addComponent']),
	},
}
</script>
