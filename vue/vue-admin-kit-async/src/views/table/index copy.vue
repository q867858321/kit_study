<template>
  <div class="app-container">
    换页选中
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @select="handleSelectionChange"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column property="date" label="日期" width="120">
      </el-table-column>
      <el-table-column property="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column property="address" label="地址"> </el-table-column>
      <el-table-column label="flag">
        <template slot-scope="scope">
          {{ scope.row.flag }}
        </template>
      </el-table-column>
    </el-table>
    <el-pagination small layout="prev, pager, next" :total="3" :page-size="2">
    </el-pagination>
  </div>
</template>

<script>
import { getList } from "@/api/table";

export default {
  filters: {},
  data() {
    return {
      list: null,
      listLoading: true,
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      multipleSelectionAll: [
        // {
        //   id: 4,
        //   date: "2016-05-03",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1516 弄",
        // },
      ], //所有选中的列
      currentRow: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.setFlag();
    },
    handleSelectionChange(rows, rowItem) {
      let flag = false;
      for (let item of rows) {
        if (item.id === rowItem.id) {
          flag = true;
          rowItem.flag = true;
        }
      }
      if (flag == true) {
        //如果数据中没有就添加，有的话就删除
        this.multipleSelectionAll.push(rowItem);
      } else {
        this.multipleSelectionAll = this.multipleSelectionAll.filter(
          (item, index) => {
            return rowItem.id != item.id;
          }
        );
      }
      // console.log("rows", rows);
      // console.log("row", row);
    },
    // 向数组中设置flag标记
    setFlag() {
      this.tableData = this.tableData.map((item, index) => {
        let flag = false;
        this.multipleSelectionAll.forEach((item1, index1) => {
          if (item.id == item1.id) {
            flag = true;
          }
        });
        return {
          ...item,
          flag,
        };
      });
      this.retrievalDataChange(this.tableData);
    },
    // 根据flag 设置选中状态
    retrievalDataChange(rows) {
      for (let item of rows) {
        if (item.flag) {
          setTimeout(() => {
            this.$refs.singleTable.toggleRowSelection(item);
          });
        }
      }
    },
  },
};
</script>
