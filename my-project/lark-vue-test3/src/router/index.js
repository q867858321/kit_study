
import Vue from 'vue'
import VueRouter from 'vue-router'
import bookDetail from '@/components/bookDetail.vue'
import compouted from '@/components/computed-get-set.vue'
import fu from '@/components/fuzhi/fu.vue'
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
    }
]
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: routers
})
export default router;