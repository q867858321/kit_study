<template>
  <div class="home">
      <HelloWorld msg="Welcome to Your Vue.j2s + TypeScript App" />
      {{aa}},{{count}}
        <button @click="show">aa</button>
        <button @click="addCount">bb</button>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  data(){
    return {
      aa:1
    }
  },
  setup(){
    let count=ref(0);
    let addCount=function(){
      count.value++
    }
    return {
      count,
      addCount
    }
  },
  components: {
      HelloWorld
  },
  methods:{
    show(){
      console.log(this);
      this.alert()
      this.aa++
    },
    alert(){
      console.log(1111)
    }
  }
});
</script>
