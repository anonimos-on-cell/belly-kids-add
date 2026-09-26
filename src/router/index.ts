import { createRouter, createWebHistory } from 'vue-router';

import AppFormulario from '@/Components/AppFormulario.vue';
import LojaPage from '@/View/LojaPage.vue';
import ProdutosCertificados from '@/Components/Mercado/ProdutosCertificados.vue';
import PagamentoSeguro from '@/Components/Mercado/PagamentoSeguro.vue';
import CompraProtegida from '@/Components/Mercado/CompraProtegida.vue';
import VerColecao from '@/Components/VerColecao.vue';
import Sobre from '@/Components/Sobre.vue';
import Contato from '@/Components/Contato.vue';
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
    {
      path: '/VerColecao',
      name: 'VerColecao',
      component: VerColecao,
    },
    {
      path: '/produtos',
      name: 'Produtos',
      component: VerColecao,
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: Sobre,
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato,
    },
  ],
})

export default router
