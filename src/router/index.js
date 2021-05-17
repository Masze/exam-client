import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

// 1. 定义路由组件.
const About = { template: '<div>About</div>' }

// 2. 定义一些路由
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    {
        path: "/login",
        name: "Login",
        meta: { title: '登录' },
        component: () => import("../views/Login.vue")//懒加载模式
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


// 登录之前做一个判断 ,判断它进入其它页面有没有先登录,
router.beforeEach((to, from, next) => {
    // 判断有没有登录
    
    const isLogin = sessionStorage.getItem('userName') ? true : false;
    // 如果当前访问的是登录页面或者注册页面可以让它进入
    if (to.path == '/login') {
        next()
    } else {
        isLogin ? next() : next('/login')
    }
})


export default router;