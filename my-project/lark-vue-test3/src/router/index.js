
import Vue from 'vue'
import VueRouter from 'vue-router'
import bookDetail from '@/components/bookDetail.vue'
import compouted from '@/components/computed-get-set.vue'
import fu from '@/components/fuzhi/fu.vue'
import UEditor from '@/components/UEditor.vue'
import editor from '@/components/editor.vue'
import tinymce from '@/components/tinymce.vue'
const routers = [
    {
        path: "/home",
        component: bookDetail
    },
    {
        path: "/cgt",
        component: compouted
    },
    {
        path: '/fu',
        component: fu
    },
    {
        path: '/ff',
        component: UEditor
    },
    {
        path: '/editor',
        component: editor
    },
]
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: routers
})
export default router;