import { createRouter, createWebHashHistory } from 'vue-router'
import LoginComponent from '../views/LoginComponent.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginComponent
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
