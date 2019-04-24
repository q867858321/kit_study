<template>
    <div class="name" @click="show">
        {{userName}}
        {{username}}
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "name",
  data() {
    return {
      username: ""
    };
  },
  witch: {},
  computed: {
    //computed 出来的数据是不能够再次修改的，vuex传过来的也不行。
    ...mapState({
      userName: function(state) {
        this.username = state.name.name;
        return state.name.name;
      }
    })
  },
  mounted() {
    console.log("name", this);
  },
  methods: {
    show() {
      console.log("name", this);
      this.username = "wang";
    }
  }
};
</script>

<style>
</style>
