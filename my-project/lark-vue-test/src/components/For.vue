<template>
  <div>
    <ul v-if="itemList!=null && itemList.length!=0">
      <li v-for="(item,index) in itemList" :key="index"
        v-if="item!=3" class="button" v-bind:class="{'acitve':index==0}">
        {{item}}
        <span>v-bind:class="{'acitve':index==0}"</span> 跟
        <span>v-bind:class="[index==0?'active':'']"</span>
      </li>
    </ul>
    <p @click="show">dddd</p>
  </div>
</template>

<script>
export default {
  name: "for-select",
  data() {
    return {
      itemList: [1, 2, 3, 4, 5]
    };
  },
  computed: {
    now: function() {
      return Date.now();
    },
    showToken: function() {
      return this.$store.state.token;
    }
  },
  mounted() {
    //  Object.defineProperty
    console.log("For", this);
  },
  methods: {
    show() {
      alert(4);
    }
  }
};
</script>

<style>
</style>
