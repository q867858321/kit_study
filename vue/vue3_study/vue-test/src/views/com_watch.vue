<template>
  <fieldset>
    <legend>计算属性输入</legend>
    姓:<input v-model="user.firstName" /><br>
    名:<input v-model="user.lastName" /><br>
  </fieldset>
  user:{{user}},{{fullName}}
  <input v-model="fullName2">
  fullName3 {{fullName3}}
</template>
<script lang='ts'>
import {
  computed,
  defineComponent,
  reactive,
  ref,
  watch,
  watchEffect,
} from "vue";

export default defineComponent({
  setup() {
    const user = reactive({
      firstName: "",
      lastName: "",
    });

    const fullName = computed(() => {
      return user.firstName + "_" + user.lastName;
    });
    const fullName2 = computed({
      get() {
        return user.firstName + "_" + user.lastName;
      },
      set(val: String) {
        let arr = val.split("_");
        user.firstName = arr[0];
        user.lastName = arr[1];
      },
    });
    let fullName3 = ref("");
    // watch(
    //   user,
    //   ({ firstName, lastName }) => {
    //     fullName3.value = firstName + "_" + lastName;
    //   },
    //   { immediate: true, deep: true }
    // );
    watch([() => user.firstName, () => user.lastName], () => {
      console.log("===");
    });
    // watchEffect(() => {
    //   fullName3.value = user.firstName + "_" + user.lastName;
    // });
    return {
      user,
      fullName,
      fullName2,
      fullName3,
    };
  },
});
</script>