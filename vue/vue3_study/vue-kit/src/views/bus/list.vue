<template>
  {{ aa }}
  <section class="section"><el-input v-model="aa" @blur="aa=trim(aa)" />
    <input
      type="text"
      :value="aa"
      @input="aa=$event.target.value"
    >
    <Header />
    {{ route }}
  </section>
</template>
<script lang="ts">
import Header from './header.vue'
import Bus from '@/utils/bus'
import { useRouter, useRoute } from 'vue-router'
import { defineComponent, reactive, toRefs, toRaw } from 'vue'
export default defineComponent({
  name: 'List',
  components: { Header },
  setup() {
    console.log('useRouter', useRouter())
    const route = toRaw(useRoute())
    console.log('useRoute', route)
    const ob = reactive({
      aa: ''
    })
    Bus.$on('change-menu', () => {
      console.log('11', 11)
    })
    return { ...toRefs(ob), route }
  },
  methods: {
    trim(str) { // 删除左右两端的空格
      console.log('str', str)
      // return str.replace(/(^\s*)|(\s*$)/g, '')
    }
  }
})
</script>
<style lang="less" scoped>
.section {
}
</style>
