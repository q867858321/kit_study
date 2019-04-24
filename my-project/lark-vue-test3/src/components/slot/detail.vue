<template>
    <div>
        <h2>插槽</h2>
        <slot>
            只有没有内容才会显示
        </slot>
    </div>
</template>

<script>
export default {
  mounted() {
    console.log("this", this);
  }
};
</script>

<style>
</style>
