<template>
  <div class="p_index">
    <mHeader></mHeader> 
    <mNav></mNav> 
    <mMain></mMain>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import mHeader from '@/components/mHeader.vue'
import mNav from '@/components/mNav.vue'
import mMain from '@/components/mMain.vue'
export default {
  name: 'pIndex',
  components: {
    HelloWorld,mHeader,mNav,mMain
  }
}
</script>
