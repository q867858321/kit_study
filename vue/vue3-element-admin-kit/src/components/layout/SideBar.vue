<template>
    <router-link to="/">
        <logo />
    </router-link>
    <div class="ve_el_menu" :style="styles">
        <el-scrollbar>
            <el-menu
                :default-active="defaultActive"
                :collapse="opened"
                :collapseTransition="false"
                unique-opened
                :background-color="sideBgColor"
                :text-color="sideTextColor"
                :active-text-color="sideActiveTextColor"
            >
                <slide-menu
                    v-for="item in menus"
                    :key="item.id"
                    :menu="item"
                ></slide-menu>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import {
    nav_height,
    sideBgColor,
    sideTextColor,
    sideActiveTextColor
} from "@/styles/variables.scss.js";
import { computed, onMounted, toRaw } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { jsonArrToArray } from "@/utils/index";
import Logo from "./components/Logo";
import SlideMenu from "./components/SlideMenu";
export default {
    components: {
        Logo,
        SlideMenu
    },
    setup() {
        const styles = { "--nav_height": nav_height };
        const route = useRoute();
        const $store = useStore();
        const opened = computed(() => $store.getters.opened);
        const menus = computed(() => $store.getters.menuList);
        const defaultActive = computed(() => {
            let i = route.name.indexOf("/");
            if (i < 0) {
                return "/" + route.name;
            } else {
                return "/" + route.name.slice(0, i);
            }
        });
        onMounted(() => {
            const nameArr = route.name.split("-");
            let id = null;
            if (nameArr.length > 0) {
                id = nameArr[nameArr.length - 1];
            }

            let itemArr = jsonArrToArray(toRaw(menus.value));
            let item = null;

            itemArr.forEach(oItem => {
                if (oItem.id == id) {
                    item = oItem;
                }
            });
            console.log("item", item);
            if (item != null) {
                $store.dispatch("app/add_tag_list", {
                    path: "/" + route.name,
                    name: item.name
                });
            }
        });
        return {
            sideBgColor,
            sideTextColor,
            sideActiveTextColor,
            styles,
            opened,
            menus,
            defaultActive,
            nav_height
        };
    }
};
</script>

<style lang="scss" scoped>
a:active {
    color: $base-color;
}
.ve_el_menu {
    background: $sideBgColor;
    height: calc(100vh - var(--nav_height));
}
</style>
