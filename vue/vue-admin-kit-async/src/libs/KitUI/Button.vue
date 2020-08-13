<template>
  <button :class="['my-btn',btnStyle]" @click="handleChild">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "Mybtn",
  props: {
    btnStyle: String
  },
  mounted() {
    console.log(this);
  },
  methods: {
    handleChild() {
      this.$emit("click");
    }
  }
};
</script>
<style  scoped>
.my-btn {
  height: 40px;
  width: 80px;
  text-align: center;
}
.my-btn.btn-danger {
  background: #f00;
}
.my-btn.btn-success {
  background: #ff0;
}
</style>