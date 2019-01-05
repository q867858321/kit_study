<template>
  <div class="m_nav">
    <ul>
      <li v-for="(item,index) in nnavlist">
        <router-link :to="'/detail?id='+item.id">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  components: {

  },
  props: ['nnavlist'],
  data() {
    return {
      nmsg: '你好vue',
      nlist: []
    }
  },
  created: function () {
    console.log("this", this);
  },
  methods: {
    run1: function () {
      console.log(this);
    },
  }
}
</script>

<style lang="less" scoped>
.m_nav {
  background: #fff;
  width: 20rem;
  ul {
    li {
      border-bottom: 1px solid #e3e3e3;
      &:last-of-type {
        border-bottom: none;
      }
    }
  }
}
</style>
