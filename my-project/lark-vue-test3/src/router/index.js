
import Vue from 'vue'
import VueRouter from 'vue-router'
import bookDetail from '@/components/bookDetail.vue'
// import compouted from '@/components/computed-get-set.vue'
// const compouted = () => import('./ page / About.vue')
import fu from '@/components/fuzhi/fu.vue'
import UEditor from '@/components/UEditor.vue'
import editor from '@/components/editor.vue'
import tinymce from '@/components/tinymce.vue'
const routers = [
    {
        path: "/home/:userid",
        component: bookDetail,
        children: [
            {
                path: "router1",
                component: fu
            }
        ]
    },
    {
        path: "/cgt",
        component: resolve => require(['../components/computed-get-set.vue'], resolve),
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
    {
        path: "/music",
        component: resolve => require(['../components/music/list.vue'], resolve),
    },
]
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: routers
})
export default router;