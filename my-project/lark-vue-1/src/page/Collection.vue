<template>
  <div class="p_detail" @click="run1()">
    <div class="main">
      <div class="m_nav">
        <ul>
          <li v-for="(item,index) in nnavlist">
            <router-link :to="'/detail?id='+item.id" :class="{active:item.active}" :title="item.title" >{{item.title}}</router-link>
          </li>
        </ul>
      </div>
      <m-wrap :nwrap='wrap' :queryid='queryid'></m-wrap>
    </div>
  </div>
</template>

<script>
import http from "@/store/services";
import mWrap from "@/components/Wrap";

export default {
  name: "App",
  components: {
    mNav,
    mWrap
  },
  data() {
    return {
      msg: "你好vue",
      color: "#f00",
      list: [],
      queryid:0,
      nnavlist: [
        { id: 0, title: "淘宝购物的省钱秘笈", active: false },
        { id: 1, title: "美团省钱小妙招", active: false }
      ],
      wrap: ""
    };
  },
  created:function(){
    this.initial(); 
  },
  mounted: function() {
  },
  updated: function() {},
  methods: {
    initial: function() {
      const id = this.$route.query.id;
      this.queryid=id;
      this.nnavlist.forEach(function(item, num, obj) {
        if (item.id == id) {
          obj[num].active = true;
        } else {
          obj[num].active = false;
        }
      });
    },
    run1: function() {
      // this.$store.commit("incCount", "#00f");
      // this.color = this.$store.state.color;
    },
    getActile: function() {
      const taobao = this.$store.state.taobao;
      var nav = [];
      taobao.forEach(element => {
        nav.push({ id: element.id, title: element.title });
      });
      this.navlist = nav;
      const id = this.$route.query.id;
      taobao.filter(element => {
        console.log("id", id);
        console.log(element);
        if (element.id == id) {
          this.wrap = element.content;
        }
      });
    },
    getData: function() {
      http.getData();
    }
  }
};
</script>

<style lang="less" scoped>
.p_detail {
  .m_nav {
    background: #fff;
    width: 20rem;
    padding: 2rem 1rem;
    margin-right: 1rem;
    ul {
      li {
        border-bottom: 1px solid #e3e3e3;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 0.5rem 0;
        a {
          &.active {
            color: #009999;
          }
        }
        &:last-of-type {
          border-bottom: none;
        }
      }
    }
  }
  .main {
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
