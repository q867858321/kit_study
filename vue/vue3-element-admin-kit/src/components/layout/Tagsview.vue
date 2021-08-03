<template>
    <div class="tags-view">
        <el-scrollbar :vertical="false" class="scroll-container">
            <div
                v-for="(item, index) in tagList"
                :key="index"
                :class="[
                    'scroll-item',
                    $route.path == item.path ? 'active' : ''
                ]"
            >
                <router-link :to="item.path">
                    {{ item.name }}
                </router-link>
                <span
                    @click="fn.deleteOneMenu(item)"
                    class="el-icon-close"
                ></span>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
    setup() {
        const route = useRoute();
        const router = useRouter();
        const $store = useStore();
        let ob = reactive({
            tagList: computed(() => $store.getters.tagList)
        });
        let fn = {
            deleteOneMenu(item) {
                $store.dispatch("app/delete_tag_list", item.path);
                const path = route.path;
                if (item.path == path) {
                    const tagList = $store.getters.tagList;
                    const newItem = tagList[tagList.length - 1];
                    router.push(newItem.path);
                }
            }
        };

        return {
            ...toRefs(ob),
            fn
        };
    }
};
</script>
<style lang="scss" scoped>
.tags-view {
    width: 100%;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 34px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);

    .scroll-item {
        border-radius: 3px;
        display: inline-block;
        height: 24px;
        line-height: 24px;
        border: 1px solid #d8dce5;
        color: #495060;
        background: #fff;
        padding: 0 8px;
        font-size: 12px;
        margin-left: 5px;
        margin-top: 4px;
    }
    a {
        text-decoration: none;
        color: #666;
        padding: 0 10px;
    }
    .active {
        position: relative;
        color: #fff;
        background-color: #42b983;
        border-color: #42b983;
        a {
            color: #fff;
        }
    }
}
.el-icon-close {
    cursor: pointer;
    border-radius: 50%;
    padding: 1px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.el-icon-close:hover {
    background: #b4bccc;
}
.scroll-container {
    text-align: left;
    padding: 5px 0;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    width: 100%;
    ::v-deep {
        .el-scrollbar__bar {
            bottom: 0px;
        }
        .el-scrollbar__wrap {
            height: 49px;
        }
        .el-scrollbar__wrap::-webkit-scrollbar {
            display: none;
        }
    }
}

.active::before {
    content: "";
    background: #fff;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 5px;
    margin-top: -4px;
    margin-right: 2px;
}
</style>
