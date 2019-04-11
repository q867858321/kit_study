<template>

</template>

<script>
  import Cookies from 'js-cookie'
  export default {
    name: "login",
    methods: {
      login() {
        Cookies.set('JSESSIONID', '123456', { expires:365, path: '/',domain:document.domain});
        Cookies.set('username', 'admin', { expires:365, path: '/',domain:document.domain});
        Cookies.set('domain', document.domain, { expires:365, path: '/',domain:document.domain});
        Cookies.remove('sso_logout');
        window.localStorage.setItem("sessionKey", '1111111111');
        window.localStorage.setItem("userName", 'admin');

        this.$store.dispatch('setRouters').then(()=>{
          this.loading = false;
          this.$router.push("/work");
          this.$router.addRoutes(this.$store.state.addRouters);
        });
      }
    },
    created: function () {
      this.login();
    }
  }
</script>

<style scoped>

</style>
