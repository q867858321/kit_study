<template>
    <div class="ve_container">
        用户
        <!-- 搜索 -->
        <el-form ref="queryForm" :inline="true" :model="params">
            <el-form-item label="角色" prop="role">
                <el-select clearable v-model="role" placeholder="请选择">
                    <el-option
                        v-for="item in roleList"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button
                    type="primary"
                    @click="onSubmit(params, getDataList)"
                    >{{ menus.search.name }}</el-button
                >
                <el-button @click="resetForm(queryForm, params, getDataList)"
                    >重置</el-button
                >
            </el-form-item>
        </el-form>

        <!-- table工具条 -->
        <el-row ref="toolBar" class="ve_header_row_class_name ve_p_10">
            <el-button
                title="弹窗式"
                v-permission="['add']"
                size="mini"
                type="primary"
                @click="handleEdit(menus.add.name)"
                >{{ menus.add.name }}</el-button
            >
            <el-button
                title="路由式"
                v-permission="['add']"
                size="mini"
                type="primary"
                @click="handleEditRoute(menus.add.name)"
                >{{ menus.add.name }}</el-button
            >
        </el-row>

        <!-- 列表 -->
        <el-table
            :data="tableData"
            stripe
            border
            highlight-current-row
            @row-click="(row, column, event) => (ve_rowIndex = rowClick(event))"
            :row-class-name="
                ({ rowIndex }) => rowClassName(rowIndex, ve_rowIndex)
            "
            :cell-class-name="
                ({ rowIndex }) => cellClassName(rowIndex, ve_rowIndex)
            "
            header-row-class-name="ve_header_row_class_name"
            header-cell-class-name="ve_header_cell_class_name"
            style="width: 100%"
            :max-height="ve_max_height"
        >
            <el-table-column prop="name" label="账号"> </el-table-column>
            <el-table-column prop="userName" label="用户名"> </el-table-column>
            <el-table-column prop="password" label="密码"
                ><template v-slot="{ row }">
                    <el-tooltip
                        class="item"
                        effect="dark"
                        :content="row.password"
                        placement="top"
                    >
                        <span>{{
                            row.password &&
                                row.password
                                    .split("")
                                    .fill("*", 1, -1)
                                    .join()
                                    .replace(/\,/g, "")
                        }}</span>
                    </el-tooltip>
                </template>
            </el-table-column>
            <el-table-column prop="role" label="角色">
                <template v-slot="{ row }">
                    <el-tag>{{
                        (row.role || row.role == 0) &&
                            roleList.filter(item => item.id == row.role)[0].name
                    }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="status" label="状态">
                <template v-slot="{ row }">
                    <el-switch
                        :loading="row.load ? true : false"
                        v-model="row.status"
                        :active-value="1"
                        :inactive-value="0"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        @change="val => handelSwitch(val, row)"
                    >
                        >
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作">
                <template v-slot:default="{ row }">
                    <el-button
                        v-permission="['edit']"
                        @click.prevent="handleEdit(menus.edit.name, row)"
                        type="primary"
                        size="mini"
                    >
                        {{ menus.edit.name }}
                    </el-button>
                    <el-button
                        v-permission="['del']"
                        @click.prevent="handleDel(row.id)"
                        type="danger"
                        size="mini"
                    >
                        {{ menus.del.name }}
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页 -->
        <el-pagination
            ref="pagination"
            background
            @size-change="val => handleSizeChange(val, params, getDataList)"
            @current-change="
                val => handleCurrentChange(val, params, getDataList)
            "
            :hide-on-single-page="total <= limit ? true : false"
            layout="total, sizes, prev, pager, next, jumper"
            :page-sizes="[10, 20, 50, 100]"
            :current-page="page"
            :page-size="limit"
            :total="total"
        >
        </el-pagination>

        <!-- 编辑组件 -->
        <users-edit
            v-if="showDialog"
            :rowData="rowData"
            :title="dialogTitle"
            :showDialog="showDialog"
            @closeDialog="handelDialog($event)"
        />
    </div>
</template>

<script>
import UsersEdit from "./components/UsersEdit";
import { reactive, toRefs, ref, onMounted, getCurrentInstance } from "vue";
import { useRoute, useRouter } from "vue-router";
//?导入公共查询方法
import {
    onSubmit,
    resetForm,
    handleSizeChange,
    handleCurrentChange,
    rowClassName,
    cellClassName,
    rowClick,
    maxHeight,
    getAsyncRouteName
} from "@/views/layoutpages/common";
export default {
    data: () => ({
        description: "用户信息查询与设置",
        menus: {
            search: { name: "查询" },
            add: { name: "添加" },
            edit: { name: "编辑" },
            del: { name: "删除" }
        }
    }),
    components: {
        UsersEdit
    },
    setup() {
        const { proxy } = getCurrentInstance();
        const route = useRoute();
        const router = useRouter();
        const rowData = ref(null);
        const dialogTitle = ref("");
        const showDialog = ref(false);
        const ve_max_height = ref(0);
        const ve_rowIndex = ref(null);
        const toolBar = ref(null);
        const pagination = ref(null);
        const queryForm = ref(null);
        const tableData = ref([]);
        const params = reactive({
            role: isNaN(route.query.id * 1) ? "" : route.query.id * 1,
            limit: 10,
            page: 1,
            total: 0
        });
        const { role, limit, page, total } = toRefs(params);

        const roleList = ref([]);

        /**
         * @description:添加or编辑事件
         * @param {*}
         * @return {*}
         */
        const handleEdit = (title, row = null) => {
            showDialog.value = true;
            dialogTitle.value = title;
            rowData.value = row;
        };
        /**
         * @description: 添加页面路由式
         * @param {*}
         * @return {*}
         */
        const handleEditRoute = async title => {
            let path = "system/components/UsersEditRoute";
            const toName = await getAsyncRouteName(title, path, "add", {
                router,
                route
            });
            router.push({ name: toName });
        };
        /**
         * @description: 获取角色列表
         * @param {*}
         * @return {*}
         */
        const getRoleList = async () => {
            const { code, data } = await VE_API.system.roleList(
                {
                    page: 1,
                    limit: 10
                }
                // { Global: false }
            );
            if (code == "00") {
                const { list } = data;
                roleList.value = list;
            }
        };
        /**
         * @description: dialog事件
         * @param {*}
         * @return {*}
         */
        const handelDialog = e => {
            showDialog.value = e;
            getDataList();
        };
        /**
         * @description:用户状态切换
         * @param {*}
         * @return {*}
         */
        const handelSwitch = async (val, row) => {
            if (row.id == undefined) return;
            row.load = 1;
            const { code } = await VE_API.system.userStatus(
                {
                    id: row.id,
                    status: val
                },
                { Global: false }
            );
            row.load = 0;
            if (code != "00") {
                row.status = val == 1 ? 0 : 1;
            }
        };
        /**删除行数据
         * @description:
         * @param {*}
         * @return {*}
         */
        const handleDel = id => {
            proxy
                .$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "error"
                })
                .then(async () => {
                    const { code } = await VE_API.system.userDel({ id });
                    if (code == "00") {
                        getDataList();
                    }
                })
                .catch(() => {
                    proxy.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        };
        /**
         * @description: 获取列表数据
         * @param {*}
         * @return {*}
         */
        const getDataList = async () => {
            const { code, data } = await VE_API.system.userList(params);
            if (code == "00") {
                const { limit, page, total, list } = data;
                params.limit = limit;
                params.page = page;
                params.total = total;
                tableData.value = list;
            }
        };
        onMounted(async () => {
            await getRoleList();
            await getDataList();
            maxHeight(pagination, queryForm, toolBar, ve_max_height);
        });
        return {
            ve_max_height,
            ve_rowIndex,
            getDataList,
            tableData,
            params,
            ...{ role, limit, page, total },
            ...{ pagination, queryForm, toolBar },
            ...{ handleEdit, rowData, dialogTitle, showDialog },
            ...{
                onSubmit,
                resetForm,
                handleSizeChange,
                handleCurrentChange,
                rowClassName,
                cellClassName,
                rowClick,
                maxHeight
            },
            roleList,
            handelDialog,
            handleDel,
            handelSwitch,
            handleEditRoute
        };
    }
};
</script>

<style lang="scss" scoped></style>
