import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/character/:id',
      name: 'character',
      component: () => import('../views/CharacterView.vue'),
      props: true
    },
    {
      path: '/page/:page',
      name: 'home-page',
      component: () => import('../views/HomeView.vue'),
      props: true
    }
  ]
})

export default router
