<template>
	<div class="TabBox">
		<div class="TabWrapper">
			<div class="TabScroller">
				<draggable v-model="contentList" class="scrollBox">
					<div class="TabItem" v-for="(item,index) in contentList" @click="$emit('update:spObj',item)">
						<div class="TabAxis">
							<i :class="{'isactive':item==spObj,'el-icon-success':true}"></i>
							<div class="itemImg">
								<img v-if="item" :src="item.image.originalUrl||img404" alt="">
							</div>
							<div class="itemName">
								{{item.title}}
							</div>
						</div>
						<div class="itemDelete" @click.stop="$emit('handleDelete',item)">
							删除
						</div>
					</div>
				</draggable>
				<div class="TabItem" @click="$emit('handleAdd')">
					<div class="itemImg">
						<i class="el-icon-plus"></i>
					</div>
					<div class="itemName">

					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import img404 from '../../../assets/404_images/404.png'
import draggable from 'vuedraggable'
export default{
	name:"Tab",
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
				let content = this.content||[]
				return content.slice()
			},
			set(val){
				this.$emit("update:content",val)
			},
		},
	},
}
</script>
