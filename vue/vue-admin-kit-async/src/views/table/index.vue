<template>
  <div class="app-container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="工号">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.name"
            v-show="scope.row.showEdit"
          ></el-input>
          <span v-show="!scope.row.showEdit">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.age"
            v-show="scope.row.showEdit"
          ></el-input>
          <span v-show="!scope.row.showEdit">{{ scope.row.age }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="score" label="分数">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.score"
            v-show="scope.row.showEdit"
          ></el-input>
          <span v-show="!scope.row.showEdit">{{ scope.row.score }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            class="btn bg_green"
            @click="handleEdit(scope.$index, scope.row)"
            >{{ scope.row.showEdit ? "保存" : "修改" }}</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      tableData: [
        {
          id: "10001",
          name: "张三",
          age: "26",
          score: "90",
          showEdit: false,
        },
        {
          id: "10002",
          name: "李四",
          age: "27",
          score: "95",
          showEdit: false,
        },
        {
          id: "10003",
          name: "王五",
          age: "26",
          score: "98",
          showEdit: false,
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      row.showEdit = !row.showEdit;
      if (!row.showEdit) {
        console.log("提交");
        console.log(row);
      }
    },
  },
};
</script>
