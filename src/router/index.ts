import { createRouter, createWebHistory } from 'vue-router'
import bingGuard from './guard'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

bingGuard(router)
export default router
