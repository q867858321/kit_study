<template>
  <section class="sidebar2">
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#a7b1c2"
      active-text-color="rgb(64, 158, 255)"
    >
    <navItem :list="navList"></navItem>
    </el-menu>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import navItem from "./navItem.vue"
export default {
  name: "Sidebar2",
  components:{navItem},
  data() {
    return {
      navList:[
        {
          icon:"el-icon-location",
          name:"门户网站",
          url:"",
          child:[{
            icon:"el-icon-menu",
            name:"百度",
            url:"#",
            child:[
              {
                 icon:"el-icon-s-data",
              name:"百度指数",
              url:"http://index.baidu.com/v2/index.html",
                },
                {
                  icon:"el-icon-s-data",
                  name:"百度新闻",
                  url:" https://news.baidu.com",
                }
              ],
          },
          {
            icon:"el-icon-menu",
            name:"腾讯",
            url:"https://www.qq.com/",
          }]
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["sidebar"]),
    isCollapse() {
      return !this.sidebar;
    },
  },
  mounted(){
    console.log("navList",this.navList)
  },
  methods: {
    change() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style>

</style>