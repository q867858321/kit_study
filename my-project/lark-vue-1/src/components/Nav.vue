<template>
  <div class="m_nav">
    <ul>
      <li
        v-for="(item,index) in nnavlist"
        @click="choose(index)"
        :class="{active:index==current&&current!=''}"
        :key="index"
      >
        <router-link :to="'/detail?id='+item.id" :title="item.title">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  components: {},
  props: ["nnavlist"],
  data() {
    return {
      current: "",
      nlist: []
    };
  },
  created: function() {
    console.log("this", this);
  },
  methods: {
    run1: function() {
      console.log(this);
    },
    choose: function(index) {
      this.current = index;
    }
  }
};
</script>

<style lang="less">
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
      &:last-of-type {
        border-bottom: none;
      }
    }
  }
}
</style>
