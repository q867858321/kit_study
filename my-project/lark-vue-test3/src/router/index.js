
import Vue from 'vue'
import VueRouter from 'vue-router'
import bookDetail from '@/components/bookDetail.vue'

const routers = [
    {
        path: "/home",
        component: bookDetail
    }
]
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: routers
})
export default router;