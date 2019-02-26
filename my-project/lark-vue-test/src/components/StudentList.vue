<template>
    <div class="hello">
        <Student v-for="(item,index) in items" :key="index" :item="item" 
         @studentClick="studentListMethod($event)"></Student>
        <button @click="add">add</button> 
    <div>
      <div v-for="(item,index) in itemList" :key="index">
        <p>name2-{{item.num}}：<input type="text" v-model="item.name"></p>  
        <p>age2-{{item.num}}：<input type="text" v-model="item.age"><button @click="delete2(index)">delete2</button></p>  
      </div>
      <button @click="add2">add2</button>
    </div> 
    </div>
</template>

<script>
import Student from "@/components/Student";
export default {
  name: "StudentList",
  components: { Student },
  data() {
    return {
      items: [{ name: "a", age: "", num: 0 }, { name: "b", age: "", num: 1 }],
      itemList: [{ name: "", age: "", num: 0 }]
    };
  },
  methods: {
    add: function() {},
    add2: function() {
      let num = this.itemList[this.itemList.length - 1].num + 1;
      this.itemList.push({ name: "", age: "", num: num });
    },
    studentListMethod: function(event) {
      console.log("event", event);
    },
    delete2: function(num) {
      this.itemList = this.itemList.filter(function(item, index, arr) {
        return num != index;
      });
    }
  }
};
</script>

<style>
</style>
