import Vue from 'vue'
import VueRouter from 'vue-router'
import bookDetail from '../components/vuex/bookDetail.vue'
// import compouted from '@/components/computed-get-set.vue'
// const compouted = () => import('./ page / About.vue')
import fu from '@/components/fuzhi/fu.vue'
import UEditor from '@/components/UEditor.vue'
import editor from '@/components/editor.vue'
const routers = [{
        path: "/booklist",
        component: bookDetail,
    },
    {
        path: '/book',
        component: resolve => require(['../components/vuex/book.vue'], resolve),
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
        path: '/fu2',
        component: resolve => require(['@/components/fuzhi/fu2.vue'], resolve),
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
        path: "/slot",
        component: resolve => require(['../components/slot/list.vue'], resolve),
    },
    {
        path: "/name",
        component: resolve => require(['../components/vuex/name.vue'], resolve)
    },
    {
        path: "/computed",
        component: resolve => require(['../components/computed/index.vue'], resolve)
    },
    {
        path: '/for-if',
        component: resolve => require(['../components/for-if/for-if.vue'], resolve)
    },
    {
        path: '/arr',
        component: resolve => require(['../components/arr/arr.vue'], resolve)
    },
    {
        path: "/element/form",
        component: resolve => require(['../components/element/formRule.vue'], resolve)
    }

]
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: routers
})
export default router;