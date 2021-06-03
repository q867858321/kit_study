<template>
<!-- <h1>{{$store.state}}</h1> -->
 <h2>{{aa }}vuex3</h2>
  <section class="section" @click="plusCount">plusCount</section>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import userStore from '@/store/modules/user'
export default defineComponent({
  setup() {
    console.log("store",userStore)
   let aa=computed(()=>{
       return userStore.state.name
    })
     function plusCount(){
          userStore.commit('changeName')
      }
    return {plusCount,aa};
  },
});
</script>
<style lang="less" scoped>
.section {
}
</style>