<template>
    <div class="Fangfa">
        <img v-bind:url="url" />
        <img :url="url" />

        <button v-on:click="first()">第一种</button>
        <button aa-data="ddd" ref="button" @click="first()">第一种</button>
        <button data-aa="12" @click="deleteDate($event,1)">delete</button>
        <ul>
            <li v-for="(item,key) in list" v-bind:key="key" >
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'Fanfa',
  data () {
    return {
      url: 'www.baidu.com',
      username: 'li hua',
      list: ['2']
    }
  },
  methods: {
    first: function () {
      this.list = []
      for (var i = 0; i < 10; i++) {
        this.list.push('sw' + i)
      }
    },
    first2 () {
      alert(3)
    },
    deleteDate (ev, val) {
      console.log(ev)
      console.log(ev.srcElement)
      console.log(ev.target.getAttribute('data-aa'))
      console.log(this.$refs.button)
      this.list.splice(val, 1)
    }
  }

}
</script>
