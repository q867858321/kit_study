<template>
  <div>
    <ul>
      <li>
        <router-link to="/vuex/book">book</router-link>
      </li>
      <li>
        <router-link to="/vuex/bookDetail">bookDetail</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
</style>
