// vue-resource
// axios
// fetch-jsonp
<template>
    <div id="axios">
        <button @click="getData()">button</button>
        <ul>
            <li v-for="(item,key) in list" :key="key">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
import Axios from 'Axios'
export default {
  name: 'axios',
  data () {
    return {
      msg: '我是一个首页组件msg',
      flag: true,
      list: []
    }
  },
  methods: {
    getData () {
      console.log(this)
      var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'
      Axios.get(api).then(response => {
        console.log(response)
        var data = response.data
        this.list = data.result
        console.log(data)
      }).catch((error) => {
        console.log('请求失败', error)
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style>

</style>
