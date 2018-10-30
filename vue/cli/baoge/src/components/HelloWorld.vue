<template>
  <div class="hello">
    <h1>{{ msgaa }}</h1>
    <h2 v-on:click="say">Essential Links</h2>
    {{msg}}
    <ul>
      <li v-on:click="greet">2</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    greet: function (event) {
      console.log(event)
      console.log(event.target)
    },
    say: function () {
      // this.msg = '很好'
      this.$emit('say', this.msgaa)
    }
  },
  props: ['msg'],
  data () {
    return {
      msgaa: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
