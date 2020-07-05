<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    {{hasSelectList}}
    <el-table
      :data="listData"
      ref="dataTable"
      @selection-change="handleSelectionChange"
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
    ...mapGetters(["name"])
  },
  data() {
    return {
      tableSelectList: [], //所有选中的数据，根据页码的一个二维数组
      queryList: {
        //打开弹窗的请求参数
        pageSize: 10, //一页十条数据
        pageNum: 1
      },
      tableData: [], //弹窗中的数组列表
      productList: [] //寄样登记表格中的数组
    };
  },
  mounted() {
    Array.prototype.remove = function(val) {
      var index = this.indexOf(val);
      if (index > -1) {
        this.splice(index, 1);
      }
    };
    this.isCheck();
  },
  methods: {
    getChooseItem(value) {
      //表格选中项切换的事件  @selection-change
      this.tableSelectList[this.queryList.pageNum] = value;
    },
    tableDefaultSelect() {
      let rows = []; //先定义一个选中行的数组
      if (JSON.stringify(this.tableSelectList) !== "[]") {
        //先判定是否有值
        let arr = this.tableSelectList.flat(); //将数组进行降维打击
        for (let i in arr) {
          //ES6新出的findIndex，返回符合条件的索引位置，有则返回，无则返回-1，唯一标识id请根据实际修改
          if (this.tableData.findIndex(x => x.id === arr[i].id) >= 0) {
            rows.push(this.tableData.findIndex(x => x.id === arr[i].id));
          }
        }
        this.$nextTick(() => {
          //等dom更新之后再选中，并且表格一定要设置ref
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(this.tableData[row]);
            });
          }
        });
      }
    },
    //分页切换的时候请求接口，然后调用渲染默认值的方法
    changePage(current) {
      this.queryList.pageNum = current;
      //调用接口拉取到数据之后再调用渲染默认值的方法，调用接口请自行补充
      this.tableDefaultSelect();
    },
    addList() {
      if (JSON.stringify(this.tableSelectList) !== "[]") {
        let arr = this.tableSelectList.flat();
        Array.from(arr, x => this.queryList.productList.push(x));
      }
    },
    //不重复添加
    noRepeatAddList(value1, value2) {
      for (let i in value1) {
        let flag = true;
        for (let j in value2) {
          if (value2[j].id === value1[i].id) {
            flag = false;
            break;
          }
        }
        if (flag) {
          value2.push(value1[i]);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
