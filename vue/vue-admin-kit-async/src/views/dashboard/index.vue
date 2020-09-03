<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    hasSelectList:{{hasSelectList}}
    <el-table
      :data="listData"
      ref="dataTable"
      @select="handleSelectionChange"
      stripe
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="id" width="120"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"]),
  },
  data() {
    return {
      listData: [
        {
          id: 1,
          name: "kit",
        },
        {
          id: 2,
          name: "kit2",
        },
        {
          id: 3,
          name: "kit3",
        },
      ], //当前的table的数据
      hasSelectList: [
        {
          id: 2,
          name: "kit2",
        },
        {
          id: 3,
          name: "kit3",
        },
      ], //已经选择的id组成的数组
    };
  },
  mounted() {
    this.isCheck();
  },
  methods: {
    isCheck() {
      this.listData.forEach((row) => {
        this.hasSelectList.forEach((item, index) => {
          if (item.id == row.id) {
            this.$refs.dataTable.toggleRowSelection(row, true);
          }
        });
      });
    },
    handleSelectionChange(rows, item) {
      let index = -1;
      let isHasItem = false;
      this.hasSelectList.forEach((obItem, obIndex) => {
        if (obItem.id == item.id) {
          isHasItem = true;
          index = obIndex;
        }
      });
      if (!isHasItem) {
        this.hasSelectList.push(item);
      } else {
        this.hasSelectList.splice(index, 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
