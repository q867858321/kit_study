
import Vue from 'vue'
import VueRouter from 'vue-router'
import bookDetail from '../components/vuex/bookDetail.vue'
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
        path: "/pop",
        component: resolve => require(['../components/pop/list.vue'], resolve),
    },
    {
        path: "/axios",
        component: resolve => require(['../components/axios/index.vue'], resolve),
    },
    {
        path: "/vuex",
        component: resolve => require(['../components/vuex/index.vue'], resolve),
        redirect: '/vuex/bookDetail',
        children: [
            {
                path: "book",
                component: resolve => require(['../components/vuex/book.vue'], resolve)
            },
            {
                path: "bookDetail",
                component: resolve => require(['../components/vuex/bookDetail.vue'], resolve)
            }
        ]
    },
]
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: routers
})
export default router;