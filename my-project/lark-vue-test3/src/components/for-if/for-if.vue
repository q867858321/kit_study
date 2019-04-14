<template>
    <div>
        <input type="text" v-model="name">
        <input type="text" v-model="age">
        <button @click="change">change</button>
        <ul>
            <li v-for="(item,index) in list" v-if="item.age==12">
                {{item}}
            </li>
        </ul>
        <child :username="list"></child>
    </div>
</template>

<script>
import child from "./for-if-child.vue";
export default {
  name: "forif",
  components: { child },
  data() {
    return {
      name: "",
      age: 0,
      list: [
        {
          name: "li",
          age: 12
        },
        {
          name: "li",
          age: 12
        }
      ]
    };
  },
  watch: {
    name(val, oldVal) {
      //   this.list.push({
      //     name: val,
      //     age: this.age
      //   });
    }
  },
  computed: {},
  created() {},
  methods: {
    change() {
      this.list[0].name = "www";
      this.list[0].age = 10;
    }
  }
};
</script>

<style>
</style>
