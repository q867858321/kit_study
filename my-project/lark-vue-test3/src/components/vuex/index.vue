<template>
  <div>
    <ul>
      <li>
        <router-link to="/vuex/book">book</router-link>
      </li>
      <li>
        <router-link to="/vuex/bookDetail">bookDetail</router-link>
      </li>
    </ul>
    <router-view></router-view>

    <ul>
      <li v-for="(val,index) in list" :key="index">
        <h5>{{val.productName}}</h5>
        <p>{{val.price}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      list: []
    };
  },
  watch: {
    arrList: function(val, oldVal) {
      this.list = val;
    }
  },
  computed: {
    ...mapState({
      //用mapState来获取collection.js里面的state的属性值
      // arrList: state => state.collection.collects
      arrList: function(state) {
        //页面发现有调用arrList的时候才会去调用
        return state.collection.collects;
      }
    })
  }
};
</script>

<style>
</style>
