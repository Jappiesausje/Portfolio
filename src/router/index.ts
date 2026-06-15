import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainView
        },
        {
            path: '/project/:id',
            name: 'project-detail',
            component: ProjectDetailView,
            props: true
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router
