<template>
    <div class="m_wrap" v-html="nwrap">
        {{nwrap}}
    </div>
</template>

<script>
export default {
    name: 'Wrap',
    props: ['nwrap'],
}
</script>

<style lang="less" scoped>

</style>

