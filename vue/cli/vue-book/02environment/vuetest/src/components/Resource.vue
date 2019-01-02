// vue-resource
// axios
// fetch-jsonp
<template>
    <div id="resource">
        <button @click="getData()">button</button>
        <ul>
            <li v-for="(item,key) in list" :key="key">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'resorece',
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
      this.$http.get(api).then(function (response) {
        // console.log(response)
        var data = response.data
        this.list = data.result
        console.log(data)
      }, function (err) {
        console.log(err)
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
