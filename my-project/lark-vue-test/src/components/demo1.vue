<template>
  <div class="demo">
    <ul>
      <li
        v-for="(item,index) in list"
        :key="index"
        :class="{active:index==current && current!=''}"
        @click="choose(index)"
      >{{item}},{{index==current}}</li>
    </ul>
    <button @click="add">add</button>
    <ul>
      <li v-for="(item,index) in target" :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  type: '',
  data () {
    return {
      current: '',
      list: [1, 2, 3, 4],
      target: []
    }
  },
  created: function () {
    console.log(this)
  },
  methods: {
    choose (index) {
      this.current = index
    },
    add () {
      this.target.push(this.list[this.current])
      console.log(this)
    }
  }
}
</script>
<style>
li.active {
  background: #f00;
}
</style>
