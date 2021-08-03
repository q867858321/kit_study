<template>
    <div class="ve_home">
        首页
    </div>
</template>

<script>
import { getList } from "@/api/test";
import { onMounted } from "vue";
export default {
    setup() {
        const fn = {
            async getList() {
                let params = {
                    page: 1
                };
                let res = await getList(params);
                console.log("res", res);
            }
        };
        onMounted(() => {
            fn.getList();
        });
        return {};
    }
};
</script>

<style lang="scss" scoped></style>
