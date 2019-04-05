<template>
	<div>
		<div class="re-box">
			<draggable @end="endFn" v-model="editResultCopy">
				<RItem v-for="(item,index) in editResultCopy" :data="item" :indexNum="index" :key='index'/>
			</draggable>
			
		</div>
	</div>
</template>
<script>
import draggable from 'vuedraggable'
import {mapActions,mapState,mapGetters} from 'vuex'
import RItem from "./components/RItem"
export default{
	name:'Result',
	components:{
		RItem,
		draggable,
	},
	data(){
		return {
			editResultKeys:[],
		}
	},
	computed:{
		...mapState('page',["editResult","editSpecComponentIndex","editSpecContent",]),
		editResultCopy:{
			get() {
	            return this.editResult
	        },
	        set(value){
	        	this.setEditResult(value)
	        },
		},
		editResultLen(){
			return (this.editResult||[]).length
		},
	},
	created(){

		if(!this.editSpecComponentIndex&&this.editResult){
			this.setEditSpecComponentIndex(this.editResult[0])
		}
	},
	methods:{
		...mapActions("page",['setEditSpecComponentIndex',"setEditResult",]),
		endFn({newIndex}){this.setEditSpecComponentIndex(this.editResultCopy[newIndex])}
	},
}
</script>