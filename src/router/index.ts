import { createRouter, createWebHistory } from 'vue-router';

import AppFormulario from '@/Components/AppFormulario.vue';
import LojaPage from '@/View/LojaPage.vue';
import ProdutosCertificados from '@/Components/Mercado/ProdutosCertificados.vue';
import PagamentoSeguro from '@/Components/Mercado/PagamentoSeguro.vue';
import CompraProtegida from '@/Components/Mercado/CompraProtegida.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LojaPage',
      component: LojaPage,
    },
    {
      path: '/AppFormulario',
      name: 'AppFormulario',
      component: AppFormulario,
    },
    {
      path: '/ProdutosCertificados',
      name: 'ProdutosCertificados',
      component: ProdutosCertificados,
    },
    {
      path: '/PagamentoSeguro',
      name: 'PagamentoSeguro',
      component: PagamentoSeguro,
    },
    {
      path: '/CompraProtegida',
      name: 'CompraProtegida',
      component: CompraProtegida,
    },
  ],
})

export default router
