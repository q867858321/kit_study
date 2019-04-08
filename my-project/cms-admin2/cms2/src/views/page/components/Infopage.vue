<template>
	<div class="InfopageBox">
		<div class="InfopageItem">
			<div class="itemImg">
				<img v-if="contentList[0]" :src="contentList[0].image.originalUrl||img404" alt="">
			</div>
			<div class="itemInfo"  v-if="contentList[0]" >
				<div class="itemIcon"><i class="el-icon-picture-outline"></i></div>
				<div class="itemTitle"></div>
				<div class="itemSource">{{contentList[0].title}}</div>
				<div class="itemDesc"></div>
			</div>
		</div>
	</div>
</template>
<script>
import img404 from '../../../assets/404_images/404.png'

export default{
	name:"Infopage",
	props:['content',"data","select","spObj","localId"],
	data(){
		return {
			img404,
		}
	},
	computed:{
		contentList(){
			this.localId
			let content = this.content||[]
			return content.slice()
		},
	},
	created(){
		if(!this.content.length){this.$emit('handleAdd')}
	},
}
</script>
