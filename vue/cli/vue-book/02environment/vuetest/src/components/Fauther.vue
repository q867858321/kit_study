<template>
    <div>
        <h2>{{msg}}</h2>
        <button @click="run()">执行button方法</button>
        <v-son v-if="flag"></v-son>
        <button @click="flag=!flag">挂载或卸载子方法</button>
    </div>
</template>

<script>
import fauSon from './FauSon.vue'
import storage from '../model/storage1.js'
console.log(storage)
export default {
  name: 'Fauther',
  data () {
    console.log('data')
    return {
      msg: '首页',
      flag: true
    }
  },
  components: {
    'v-son': fauSon
  },
  methods: {
    run () {
      this.msg = 'aa'
    }
  },
  beforeCreate () {
    console.log('实例创建之前')
  },
  created () {
    console.log('实例创建完成')
    var flag = storage.get('flag')
    console.log('flag', flag)
    if (flag === null) {
      flag = true
    }
    this.flag = flag
  },
  beforeMount () {
    console.log('模板编译之前')
  },
  mounted () { // 请求数据放在这，操作dom
    console.log('模板编译完成')
  },
  beforeUpdate () {
    console.log('数据更新之前')
  },
  updated () {
    console.log('数据更新完成')
    storage.set('flag', this.flag)
  },
  beforeDestroy () {
    console.log('实例销毁之前')
    console.log('this.flag', this.flag)
    storage.set('flag', this.flag)
  }
}
</script>

<style scoped lang="scss">
    h2{
        color:red
    }
</style>
