import { createRouter, createWebHistory } from 'vue-router'

import Mercado from '../View/MercadoMain.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Mercado',
      component: Mercado,
    },
  ],
})

export default router
