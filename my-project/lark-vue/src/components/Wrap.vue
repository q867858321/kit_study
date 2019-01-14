<template>
    <div @click="run1()" class="m_wrap">
        <shengqian1 v-show="this.queryid==0"></shengqian1>
        <meituan v-show="this.queryid==1"></meituan>
    </div>
</template>

<script>
import shengqian1 from "@/components/article/monery/shengqian1/shengqian1";
import meituan from "@/components/article/monery/meituan/Meituan";
export default {
  name: "Wrap",
  components: { shengqian1,meituan },
  data() {
    return {
      shengqian1Show: true,
      queryid:0
    };
  },
  created:function(){
    this.queryid=this.$attrs.queryid;
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
    font-size: 0.875rem;
    margin: 0.5rem 0;
  }
  img {
    width: 300px;
    display: block;
    margin: 2rem auto;
  }
}
</style>

