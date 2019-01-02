<template>
    <div class="hello">
        <p id="aaa" ref="title" v-if="seen">kan dao le</p>
        <input ref="msg" type="text" v-model="msg" />
        <input ref="msg2" type="text" v-model="msg" />
        <button v-on:click="getMsg()">get msg</button>
        <button v-on:click="getInputMsg()">set input msg</button>
        <button v-on:click="setMsg()">set msg</button>
        <p>{{msg}}</p>
    </div>
</template>
<script>
export default {
  name: 'ShuangXiangShuJu',
  data () {
    return {
      msg: 'aa',
      seen: true
    }
  },
  methods: {
    getMsg () {
      console.log(this.msg)
    },
    getInputMsg () {
      console.log(this.$refs)
      console.log(this.$refs.msg)
      this.$refs.title.style.background = 'red'
    },
    setMsg () {
      this.msg = 'abc'
    }

  }
}
</script>
