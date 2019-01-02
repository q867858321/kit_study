<template>
    <div id="shuangxiang">
        <input type="text" v-model="todo" @keydown="doAdd($event)" /><button @click="add()">add</button>
        <p>代办</p>
        <ul>
            <li v-for="(item,key) in list" v-if="!item.checked" :key="key">
               <input type="checkbox" name="checkbox" @change="saveList(key,item.checked)"  v-model="item.checked"/> {{item}}<button @click="removeData($event,key)">remove</button>
            </li>
        </ul>
        <p>完成</p>
        <ul>
            <li v-for="(item,key) in list" v-if="item.checked" :key="key">
                <input type="checkbox" name="checkbox" @change="saveList(key,item.checked)"  v-model="item.checked"/> {{item}}<button @click="removeData($event,key)">remove</button>
            </li>
        </ul>
    </div>

</template>

<script>
import storage from '../model/storage1.js'
export default {
  name: 'shuangxiang',
  data () {
    return {
      ok: false,
      todo: '',
      list: [{name: 'aaa', checked: false}, {name: 'bbb', checked: true}, {name: 'ccc', checked: false}]
    }
  },
  methods: {
    doAdd (ev) {
      console.log(ev)
      if (ev.keyCode === 13) {
        this.add()
      }
    },
    add () {
      var item = this.todo
      this.list.push({name: item, checked: false})
      this.todo = ''
      storage.set('list', this.list)
    },
    saveList () {
      storage.set('list', this.list)
    },
    removeData (ev, key) {
      console.log('this', this)
      this.list.map(function (item, index, arr) {
        if (key === index) {
          arr.splice(index, 1)
          storage.set('list', arr)
        }
      })
    }
  },
  mounted () {
    var list = storage.get('list')
    if (list != null) {
      this.list = list
    }
  }
}
</script>

<style>

</style>
