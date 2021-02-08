
<template>
  <div>
    <div v-for="(item,index) in list" :key="index"  @click="openPage(item)">
      <el-submenu v-if="item.child!=null" :index="num+index+''">
          <template slot="title">
            <i :class="item.icon"></i>
            <span class="title_name">{{item.name}}</span>
          </template>
          <nav-item :list="item.child"></nav-item>
      </el-submenu>

      <el-menu-item :index="num+index+''" v-else>
        <i :class="item.icon"></i>
         <span class="title_name">{{item.name}}</span>
      </el-menu-item>
    </div>
  </div>
</template>
 <style>
 </style>
<script>
	export default{
		name:'navItem',
		props:{
			list: Array
		},
    data(){
        return{
            num:0
        }
    },
    mounted(){
        this.num=Math.random()
    },
    methods:{
      openPage(item){
        console.log("item",item)
        if(item.url!=""&&item.url!=null&&item.url!="#"){
          this.$store.dispatch("page/pushPageUrl", item);
        }
      },
    }
	}
</script>
<style>
.hideSidebar .title_name{
  display: none;
}
.el-submenu__title{
  font-size:13px;
  font-weight: 800;
}
.el-menu-item{
  font-size:13px;
  font-weight: 800;
}
.el-submenu__title{
  height: 40px;
  line-height: 40px;
}
.el-submenu .el-menu-item{
  height: 32px;
  line-height: 32px;
}
</style>