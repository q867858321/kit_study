<template>
  <div class="users">
      <ul>
          <li v-bind:key="index" v-for="(user,index) in title">
              {{user}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      title: ['Henry', 'Bucky', 'Emily']
    }
  }
}
</script>

<style>
</style>
