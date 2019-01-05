<template>
  <div class="p_detail">
    <div class="main">
      <m-nav :nnavlist='navlist' :ngetActile='getActile'></m-nav>
      <m-wrap :nwrap='wrap'></m-wrap>
    </div>
    <!-- <p @click="getDate()">请求数据</p>
    <p :style='{color:color}'>{{this.$store.state.count}}</p>
    <ul>
        <li v-for="(item, index) in this.$store.state.list">
            {{ index }} - {{ item.title }}
        </li>
    </ul> -->
  </div>
</template>

<script>
import http from '@/store/services';
import mNav from '@/components/Nav';
import mWrap from '@/components/Wrap';
export default {
  name: 'App',
  components: {
    mNav, mWrap
  },
  data() {
    return {
      msg: '你好vue',
      color: "#f00",
      list: [],
      // navlist: [{id:1,title:"111"},{id:2,title:"222"} ]
      navlist: [],
      wrap: ''
    }
  },
  mounted: function () {
    this.getActile();
    //this.getData();
  },
  watch:{
    $route(){
      this.getActile();
    }
    
  },
  updated: function () {
    
  },
  methods: {
    run1: function () {
      this.$store.commit('incCount', "#00f");
      this.color = this.$store.state.color;
      // this.$store.dispatch('incMutationsCount'); 
      console.log(this.$store);
      // console.log(this.$route.query);
    },
    getActile: function () {
      const taobao = this.$store.state.taobao;
      var nav=[];
      taobao.forEach(element => {
        nav.push({ id: element.id, title: element.title });
      });
      this.navlist=nav;
      const id = this.$route.query.id;
      taobao.filter(element => {
        console.log("id", id);
        console.log(element);
        if (element.id == id) {
          this.wrap = element.content
        }
      })
    },
    getData: function () {
      http.getData();
    }
  }
}
</script>

<style lang="less" scoped>
.p_detail {
  .main {
    position: relative;
    width: 75rem;
    margin: 0 auto;
    display: flex;
    .m_nav {
      flex: none;
    }
    .m_wrap {
      flex: 1;
    }
  }
}
</style>
