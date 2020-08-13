<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    {{hasSelectList}}
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
    Array.prototype.remove = function (val) {
      var index = this.indexOf(val);
      if (index > -1) {
        this.splice(index, 1);
      }
    };
    this.isCheck();
  },
  methods: {
    isCheck() {
      this.$nextTick(() => {
        this.listData.forEach((row) => {
          this.hasSelectList.forEach((item, index) => {
            console.log("item", item.id);
            if (item.id == row.id) {
              this.$refs.dataTable.toggleRowSelection(row, true);
            }
          });
        });
      });
    },
    handleSelectionChange(val, row) {
      let obArr = this.pubArr(this.hasSelectList);
      let selectList = [...obArr, ...val];
      console.log("selectList", selectList);
      this.hasSelectList = this.unique(selectList);
      console.log("obArr", obArr);
      console.log("val", val);
      console.log("row", row);
    },
    pubArr(macTypeList) {
      let arr = [];
      for (let i in macTypeList) {
        arr.push(macTypeList[i]);
      }
    },
    remove(arr, val) {
      let index = arr.indexOf(val);
      if (index > -1) {
        arr.splice(index, 1);
      }
      return arr;
    },
    unique(arr) {
      if (!Array.isArray(arr)) {
        console.log("type error!");
        return;
      }

      let array = [];
      for (let i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1) {
          array.push(arr[i]);
        }
      }
      return array;
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
