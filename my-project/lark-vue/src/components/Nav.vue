<template>
  <div class="m_nav">
      <ul>  
          <li>
              <router-link to="/detail?id=1">detail-1</router-link>
          </li>
          <li>
              <router-link to="/detail?id=2">detail-2</router-link>
          </li>
      </ul>
     
  </div>
</template>

<script>
export default {
  name: 'Nav',
  components: {

  },
  data() {
    return {
      msg: '你好vue',
      list: []
    }
  },
  methods: {
    run1: function () {
   
    },
  }
}
</script>

<style>

</style>
