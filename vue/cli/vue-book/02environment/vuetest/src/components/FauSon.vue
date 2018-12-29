<template>
    <div class="zhi" >
      <div>子{{title}},{{msg}}</div>
      <button @click="homealert('123')">执行父方法</button>
      <button @click="getParent()">获取父方法</button>
    </div>
</template>

<script>
export default {
  name: 'FauSon',
  data () {
    console.log(this)
    console.log(this.home)
    return {
      msg: 'msg'
    }
  },
  methods: {
    getParent () {
      // alert(this.home.title)
      // this.home.run()
      // 或者
      console.log(this.$parent)
      this.$parent.run()
    },
    zhirun () {
      alert('我是子组件中的方法')
    }
  },
  // props: ['title', 'homealert', 'home']
  props: {'title': String, 'homealert': Function, 'home': Object}
}
</script>

<style>

</style>
