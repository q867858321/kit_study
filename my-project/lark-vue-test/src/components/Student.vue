<template>
    <div class="hello">
        <h1>Component:1</h1>
        <p>Name:<input type="text" v-model="item.name" placeholder="Place enter name"/></p>
        <p>Age:<input type="text" v-model="item.age" placeholder="Place enter age"/>
            <button @click="deleteStudent">delete</button>
        </p>
    </div>
</template>

<script>
export default {
  name: "Student",
  // props: {
  //   // index: { type: Number, required: true },
  //   items: { type: Array, default: Array }
  // },
  props: ["item"],
  data() {
    return {
      aaa: this.item,
      student: {
        name: "",
        age: ""
      }
    };
  },
  mounted() {
    console.log("student", this.item);
  },
  methods: {
    deleteStudent: function() {
      this.$emit("studentClick", 111);
      console.log("student", this);
    }
  }
};
</script>

<style>
</style>
