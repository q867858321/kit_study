<template>
    <div @click="run1()" class="m_wrap">
      {{queryidz}}
        <shengqian1 v-show="this.queryidz==0"></shengqian1>
    </div>
</template>

<script>
import shengqian1 from "@/components/article/monery/shengqian1/shengqian1";
export default {
  name: "Wrap",
  components: { shengqian1 },
  data() {
    return {
      shengqian1Show: true,
      queryidz:0
    };
  },
  created:function(){
    alert(23);
    this.queryidz=this.$attrs.queryid;
    console.log("this.$attrs.queryid",this.$attrs.queryid);
    console.log(" this.queryidz", this.queryidz);
  },
  updated:function(){
    console.log(2);
    this.queryidz=this.$attrs.queryid;
  },
  watch: {
    $route() {}
  },
  methods: {
    run1: function() {
      console.log("queryid",this.$attrs.queryid);
      console.log(this.$route.query.id);
    }
  }
};
</script>

<style lang="less">
.m_wrap {
  background: #fff;
  padding: 2rem 1rem;
  h1 {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  p {
    font-size: 0.75rem;
    margin: 0.5rem 0;
  }
  img {
    width: 300px;
    display: block;
    margin: 2rem auto;
  }
}
</style>

