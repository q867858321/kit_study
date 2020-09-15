<template>
  <div class="app-container">table</div>
</template>

<script>
import { getList } from "@/api/table";

export default {
  filters: {},
  data() {
    return {
      list: null,
      listLoading: true,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {},
  },
};
</script>
