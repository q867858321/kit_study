<template>
    <div class="ve_container">
        <div @click="keep++">菜单{{ keep }}</div>
        <!-- 搜索 -->
        <el-form ref="queryForm" :inline="true" :model="params">
            <el-form-item label="名称" prop="name">
                <el-input
                    clearable
                    v-model="name"
                    placeholder="名称"
                ></el-input>
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
                v-permission="['add']"
                size="mini"
                type="primary"
                @click="handleEdit(menus.add.name)"
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
            row-key="id"
            default-expand-all
        >
            <el-table-column prop="name" label="名称"> </el-table-column>
            <el-table-column prop="icon" label="图标">
                <template v-slot="{ row }">
                    <i v-if="row.type !== 2" :class="row.icon">{{
                        row.icon
                    }}</i>
                    <span v-else>/</span>
                </template>
            </el-table-column>
            <el-table-column prop="type" label="类型">
                <template v-slot="{ row }">
                    <el-tag
                        :type="
                            row.type == 0
                                ? ''
                                : row.type == 1
                                ? 'success'
                                : 'warning'
                        "
                        >{{
                            row.type == 0
                                ? "目录"
                                : row.type == 1
                                ? "菜单"
                                : "按钮"
                        }}</el-tag
                    >
                </template>
            </el-table-column>
            <el-table-column prop="sort" label="排序"
                ><template v-slot="{ row }">
                    <span v-if="row.type !== 2" style="font-weight:bold">{{
                        row.sort
                    }}</span>
                    <span v-else>/</span>
                </template>
            </el-table-column>
            <el-table-column prop="iframe" label="Iframe">
                <template v-slot="{ row }">
                    <el-tag
                        v-if="row.type == 1"
                        :type="row.iframe == 0 ? 'danger' : ''"
                        effect="dark"
                        >{{ row.iframe == 0 ? "否" : "是" }}</el-tag
                    >
                    <span v-else>/</span>
                </template>
            </el-table-column>
            <el-table-column prop="url" label="URL/标识" show-overflow-tooltip>
                <template v-slot="{ row }">
                    <template v-if="row.type == 1">
                        <el-link
                            v-if="isURL(row.url)"
                            type="primary"
                            :href="row.url"
                            target="_blank"
                            >{{ row.url }}</el-link
                        >
                        <span v-else>{{ row.url }}</span>
                    </template>
                    <span v-else-if="row.type == 2">{{ row.menu }}</span>
                    <span v-else>/</span>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="240">
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
                    <el-button
                        v-permission="['addChild']"
                        v-if="row.type == 0"
                        @click.prevent="handleEdit(menus.addChild.name, row)"
                        type="warning"
                        size="mini"
                    >
                        {{ menus.addChild.name }}</el-button
                    >
                    <el-button
                        v-permission="['addBtn']"
                        v-if="row.type == 1 && row.iframe == 0"
                        @click.prevent="handleEdit(menus.addBtn.name, row)"
                        type="success"
                        size="mini"
                    >
                        {{ menus.addBtn.name }}
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
        <menu-edit
            v-if="showDialog"
            :menuList="tableData"
            :rowData="rowData"
            :title="dialogTitle"
            :showDialog="showDialog"
            @closeDialog="handelDialog($event)"
        />
    </div>
</template>

<script>
import { isURL } from "@/utils/validate";
import MenuEdit from "./components/MenuEdit";
import { reactive, toRefs, ref, onMounted, getCurrentInstance } from "vue";
//?导入公共查询方法
import {
    onSubmit,
    resetForm,
    handleSizeChange,
    handleCurrentChange,
    rowClassName,
    cellClassName,
    rowClick,
    maxHeight
} from "@/views/layoutpages/common";
export default {
    data: () => ({
        description: "菜单查询与设置",
        menus: {
            search: { name: "查询" },
            add: { name: "添加" },
            edit: { name: "编辑" },
            del: { name: "删除" },
            addChild: { name: "添加子级" },
            addBtn: { name: "添加按钮" }
        }
    }),
    components: {
        MenuEdit
    },
    setup() {
        const { proxy } = getCurrentInstance();
        const toolBar = ref(null);
        const pagination = ref(null);
        const queryForm = ref(null);
        const ve_max_height = ref(0);
        const dialogTitle = ref("");
        const showDialog = ref(false);
        const rowData = ref(null);
        const ve_rowIndex = ref(null);
        const tableData = ref([]);
        const params = reactive({
            name: "",
            limit: 10,
            page: 1,
            total: 0
        });
        const ob = reactive({
            keep: 1
        });
        const { name, limit, page, total } = toRefs(params);

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
         * @description: dialog事件
         * @param {*}
         * @return {*}
         */
        const handelDialog = e => {
            showDialog.value = e;
            getDataList();
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
                    const { code } = await VE_API.system.menuDel({ id });
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
            const { code, data } = await VE_API.system.menuList(params);
            if (code == "00") {
                const list = XE.mapTree(
                    XE.toArrayTree(data, {
                        sortKey: "sort"
                    }),
                    item => {
                        if (item.children && item.children.length <= 0) {
                            delete item.children;
                        }
                        return item;
                    }
                );
                tableData.value = list;
            }
        };

        onMounted(async () => {
            await getDataList();
            maxHeight(pagination, queryForm, toolBar, ve_max_height);
        });
        return {
            getDataList,
            ve_rowIndex,
            tableData,
            params,
            ...{ name, limit, page, total },
            ...{ handleEdit, rowData, dialogTitle, showDialog },
            ve_max_height,
            ...{ pagination, queryForm, toolBar },
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
            isURL,
            handelDialog,
            handleDel,
            ...toRefs(ob)
        };
    }
};
</script>

<style lang="scss" scoped></style>
