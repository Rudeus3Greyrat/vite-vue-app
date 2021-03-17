import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        component: () => import (
            /* webpackChunkName: "Index" */
            "@/views/Index.vue")
    },

    {
        path: '/about',
        component: () => import (
            /* webpackChunkName: "About" */
            "@/views/About.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
