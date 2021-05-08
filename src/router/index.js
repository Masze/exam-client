import { createRouter, createWebHistory } from 'vue-router'

// 1. 定义路由组件.
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. 定义一些路由
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    {
        path: "/login",
        name: "Login",
        meta: { title: '登录' },
        component: () => import("../views/Login.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;