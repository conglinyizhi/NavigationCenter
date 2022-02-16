import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    }, {
      path: '/tools',
      name: 'Tools',
      component: () => import('../views/tools_interface.vue')
    }, {
      path: '/debug',
      name: 'debug',
      component: () => import('../views/debug.vue')
    }
  ]
})

export default router