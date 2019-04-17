import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const HelloWorld = () => import("@/components/HelloWorld");
// import Father from '@/components/Father'
const Father = () => import("@/components/Father");
// import Cate from '@/components/Cate'
const Cate = () => import("@/components/Cate");
const StudentList = () => import("@/components/StudentList");

const Index = () => import("@/page/Index");
const Login = () => import("@/page/Login");
//const Home = () => import('@/page/Home');
import Home from '@/page/Home';
const School = () => import('@/page/School');

const tinymce = () => import('@/components/tinymce');
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        console.log('%c 路由独享守卫', 'color:blue');
        console.log(to, from);
        next();
      }

    },
    {
      path: '/home/:id',
      name: 'home',
      component: Home
    },
    {
      path: '/school',
      name: "School",
      component: School
    },

    //模块测试
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      // children: [
      //   { path: "cate", name: 'cate', component: Cate }
      // ]
    },
    {
      path: '/father',
      name: 'Father',
      component: Father,
      // component: resolve => require(['@/components/Father'], resolve),
    },
    {
      path: "/student",
      name: "student",
      component: StudentList
    },
    {
      path: '/tinymce',
      name: 'tinymce',
      component: tinymce
    }
  ]
})
