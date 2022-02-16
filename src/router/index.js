import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import tools from './tools.js'
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
      name: 'about',
      component: () => import('../views/About.vue')
    }, {
      path: '/tools',
      name: 'tools',
      component: () => import('../views/tools_interface.vue')
    }, {
      path: '/debug',
      name: 'debug',
      component: () => import('../views/debug.vue')
    }
  ].concat(tools)
})

export default router