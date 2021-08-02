<template>
    <el-container>
        <el-aside width="auto">
            <side-bar></side-bar>
        </el-aside>
        <el-container>
            <el-header :height="nav_height">
                <navigate-bar></navigate-bar>
            </el-header>
            <Tagsview></Tagsview>
            <el-main :style="styles" v-if="isIframe == false">
                <el-scrollbar
                    style="padding: 20px;box-sizing:border-box;background:#fff;"
                >
                    <router-view v-slot="{ Component }">
                        <transition name="el-zoom-in-top" mode="out-in">
                            <keep-alive>
                                <component :key="routerAlive" :is="Component" />
                            </keep-alive>
                        </transition>
                    </router-view>
                </el-scrollbar>
            </el-main>
            <el-main v-if="isIframe">
                <router-view v-slot="{ Component }">
                    <transition name="el-zoom-in-top" mode="out-in">
                        <keep-alive>
                            <component :key="routerAlive" :is="Component" />
                        </keep-alive>
                    </transition>
                </router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import { nav_height } from "@/styles/variables.scss.js";
import NavigateBar from "@/components/layout/NavigateBar.vue";
import SideBar from "@/components/layout/SideBar.vue";
import Tagsview from "@/components/layout/Tagsview.vue";
import { provide, reactive, ref, toRefs, watchEffect } from "vue";
import { useRoute } from "vue-router";
export default {
    name: "AppMain",
    components: {
        NavigateBar,
        SideBar,
        Tagsview
    },
    // 获取用户相关信息和路由权限
    setup() {
        const route = useRoute();
        const styles = { "--nav_height": nav_height };
        const routerAlive = ref(null);
        const ob = reactive({
            isIframe: false
        });
        watchEffect(() => {
            routerAlive.value = route.name;
            console.log("route", route);
            // if (route.name.indexOf("i-") == 0) {
            if (route.meta.iframe == 1) {
                ob.isIframe = true;
            } else {
                ob.isIframe = false;
            }
        });
        provide("reload", () => {
            routerAlive.value = Math.random() + "_" + Math.random();
        });
        return { styles, nav_height, routerAlive, ...toRefs(ob) };
    }
};
</script>
<style lang="scss" scoped>
.el-main {
    height: calc(100vh - 85px);
    background: $main-bg-color;
    :deep(.el-scrollbar__bar.is-horizontal) {
        visibility: hidden;
    }
}
</style>
