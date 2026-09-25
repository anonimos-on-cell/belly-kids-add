<template>
  <div class="app">
    <Cabecalho :pagina-atual="paginaAtual" @trocar="paginaAtual = $event" />

    <main>
      <PaginaInicio v-if="paginaAtual === 'inicio'" @ir-produtos="paginaAtual = 'produtos'" />
      <PaginaProdutos v-if="paginaAtual === 'produtos'" @comprar="irPagamento" />
      <PaginaSobre v-if="paginaAtual === 'sobre'" />
      <PaginaContato v-if="paginaAtual === 'contato'" />
      <PaginaPagamento 
        v-if="paginaAtual === 'pagamento'" 
        :carrinho="carrinho"
        @voltar="paginaAtual = 'produtos'"
        @limpar="carrinho = []"
      />
    </main>

    <Rodape />
  </div>
</template>

<script>
import Cabecalho from './components/Cabecalho.js'
import Rodape from './components/Rodape.js'
import PaginaInicio from './components/PaginaInicio.js'
import PaginaProdutos from './components/PaginaProdutos.js'
import PaginaSobre from './components/PaginaSobre.js'
import PaginaContato from './components/PaginaContato.js'
import PaginaPagamento from './components/PaginaPagamento.js'

export default {
  components: {
    Cabecalho, Rodape, PaginaInicio, PaginaProdutos, PaginaSobre, PaginaContato, PaginaPagamento
  },
  data() {
    return {
      paginaAtual: 'inicio',
      carrinho: []
    }
  },
  methods: {
    irPagamento(produto) {
      if (produto) {
        this.carrinho.push(produto)
      }
      this.paginaAtual = 'pagamento'
    }
  }
}
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  max-width: 620px;
  margin: 0 auto;
  padding: 0 20px 30px;
  width: 100%;
}
</style>