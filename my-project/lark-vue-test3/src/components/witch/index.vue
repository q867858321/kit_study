<template>
    <div @click="change">{{cityName}}
      <input type="text" v-model="cityName.id"/>
    </div>
</template>

<script>
export default {
  data() {
    return {
      cityName: {
        id: 1,
        name: "shanghai"
      }
    };
  },
  watch: {
    cityName: {
      handler(val, oldVal) {
        console.log(val);
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    change() {
      this.cityName.name = "beijing";
    }
  }
};
</script>

<style>
</style>
