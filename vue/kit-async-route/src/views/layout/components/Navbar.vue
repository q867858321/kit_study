<template>
  <section class="m_navbar">
    <img class="hamburger-container" @click="toggleSideBar" src="@/assets/img/nav.png" />
  </section>
</template>

<script>
export default {
  methods: {
    toggleSideBar() {
      this.$emit("isSidebarHide");
    },
  },
};
</script>