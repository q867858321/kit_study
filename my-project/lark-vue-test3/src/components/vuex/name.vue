<template>
  <div class="name" @click="show">
    {{userName}}
    {{username}},age{{getAge}}
    <button @click="changeAge(2)">change Age</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
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
        this.username = state.user.name;
        return state.user.name;
      }
    }),
    ...mapGetters("user", ["getAge"])
  },
  mounted() {
    console.log("name", this);
  },
  methods: {
    ...mapMutations("user", ["changeAge"]),
    show() {
      console.log("name", this);
      this.username = "wang";
    }
  }
};
</script>

<style>
</style>
