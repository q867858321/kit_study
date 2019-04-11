
import Vue from 'vue'
import VueRouter from 'vue-router'
import bookDetail from '@/components/bookDetail.vue'
import compouted from '@/components/computed-get-set.vue'
const routers = [
    {
        path: "/home",
        component: bookDetail
    },
    {
        path: "/cgt",
        component: compouted
    }
]
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: routers
})
export default router;