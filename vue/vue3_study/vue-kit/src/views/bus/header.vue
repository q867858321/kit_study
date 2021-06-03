
<template>
  <section class="section" @click="changeMenu">
    header
  </section>
</template>
<script lang="ts">
import Bus from '@/utils/bus'
import { defineComponent, onBeforeUnmount, ref } from 'vue'
export default defineComponent({
  setup() {
    const isCollapse = ref(true)

    function changeMenu() {
      console.log('112', 112)
      console.log('Bus', Bus)
      Bus.$emit('change-menu')
    }

    onBeforeUnmount(() => {
      Bus.$off('change-menu')
    })
    return { isCollapse, changeMenu }
  }
})
</script>
<style lang="less" scoped>
.section {
}
</style>
