<template>
    <el-submenu
        :index="menu.id + ''"
        v-if="menu.type == 0 && filerMenus(menu.children)"
    >
        <template v-slot:title>
            <i :class="menu.icon"></i>
            <span>{{ menu.name }}</span>
        </template>
        <slide-menu
            v-for="child in menu.children"
            :key="child.id"
            :menu="child"
        ></slide-menu>
    </el-submenu>
    <el-menu-item
        v-else-if="menu.type == 1"
        :index="setIndex(menu)"
        @click="clickMenu(menu)"
    >
        <i :class="menu.icon"></i>
        <template #title>{{ menu.name }}</template>
    </el-menu-item>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
    props: ["menu"],
    setup() {
        const router = useRouter();
        const $store = useStore();

        const clickMenu = menu => {
            let name = menu.url.replace(/\//g, "-") + `-${menu.id}`;
            console.log("menu", menu);
            if (menu.iframe == 1) {
                name = `i-${menu.id}`;
            }
            router.push({
                name
            });
            $store.dispatch("app/add_tag_list", {
                path: "/" + name,
                name: menu.name
            });
        };

        const setIndex = menu => {
            let index = `/${menu.url.replace(/\//g, "-")}-${menu.id}`;
            if (menu.iframe == 1) {
                index = `/i-${menu.id}`;
            }
            return index;
        };
        /**
         * @description:过滤空目录
         * @param {*}
         * @return {*}
         */
        const filerMenus = menus => {
            if (menus && menus.length > 0) {
                let _menus = XE.toTreeArray(menus);
                return _menus.some(item => item.type == 1);
            } else {
                return false;
            }
        };

        return {
            router,
            setIndex,
            clickMenu,
            filerMenus
        };
    }
};
</script>

<style lang="scss">
li.el-menu-item.is-active {
    background-color: darken($sideBgColor, 15%) !important;
}
</style>
