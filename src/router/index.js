import {createRouter, createWebHistory} from 'vue-router'
import MainPage from "@/views/MainPage.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: {name: "MainPage"}
        },
        {
            path: '/index',
            name: 'MainPage',
            component: MainPage,
        }
    ]
})

export default router
