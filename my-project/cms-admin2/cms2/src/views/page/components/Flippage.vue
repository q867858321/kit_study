<template>
	<div class="flipBox">
		<div class="flipWrapper">
			<div class="flipScroller">
				<div v-show="contentList.includes(spObj)" class="deleteobj" @click="$emit('handleDelete',spObj)">
					&times;
				</div>
				<img v-if="spObj" :src="spObj.image.originalUrl||img404" alt="">
			</div>
			<div class="flipPageNa" v-if="data.attributes['indicator']==1">
				<div v-for="item in contentList" :class="{'isactive':item==spObj,'flipPa':true}"></div>
			</div>
		</div>
		<div class="flipCtrl">
			<div>
				<draggable v-model="contentList">
					<i v-for="(item,index) in contentList" :class="{'isactive':item==spObj,'el-icon-rank':true}" @click="$emit('update:spObj',item)"></i>
				</draggable>
			</div>
			<div><i class="el-icon-circle-plus-outline" @mousedown.stop @click="$emit('handleAdd')"></i></div>
		</div>
	</div>
</template>
<script>
import img404 from '../../../assets/404_images/404.png'
import draggable from 'vuedraggable'
export default{
	name:"Flippage",
	props:['content',"data","select","spObj","localId"],
	data(){
		return {
			img404,
		}
	},
	components:{
		draggable,
	},
	computed:{
		contentList:{
			get(){
				this.localId
				let content = this.content||[];
				return content.slice()
			},
			set(val){
				this.$emit("update:content",val)
			},
		},
	},
}
</script>
