<template>
	<div class="AppListBox">
		<div class="AppListWrapper">
			<div class="AppListScroller">
				<draggable v-model="contentList" class="scrollBox">
					<div class="AppListItem" v-for="(item,index) in contentList" @click="$emit('update:spObj',item)">
						<div class="itemImg">
							<i :class="{'isactive':item==spObj,'el-icon-success':true}"></i>
							<img v-if="item" :src="item
							.image.originalUrl||img404" alt="">
						</div>
						<div class="itemInfo">
							<div class="itemTitle">
								{{item.title}}
							</div>
							<div class="itemDetail">
								{{item.detail}}
							</div>
						</div>
						<div class="itemDelete" @click.stop="$emit('handleDelete',item)">
							删除
						</div>
					</div>
				</draggable>
				<div class="AppListItem" @click="$emit('handleAdd')">
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
import img404 from "../../../assets/404_images/404.png";
import draggable from "vuedraggable";
export default {
  name: "AppList",
  props: ["content", "data", "select", "spObj", "localId"],
  data() {
    return {
      img404
    };
  },
  components: {
    draggable
  },
  computed: {
    contentList: {
      get() {
        this.localId;
        let content = this.content || [];
        return content.slice();
      },
      set(val) {
        this.$emit("update:content", val);
      }
    }
  }
};
</script>
