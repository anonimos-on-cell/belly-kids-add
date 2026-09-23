<script setup lang="ts">
import { computed, ref } from 'vue'
import Cabecalho from '../../Components/MarketPlace/Cabecalho.vue'
import Carrinho from '../../Components/MarketPlace/Carrinho.vue'
import Filtros from '../../Components/MarketPlace/Filtros.vue'
import ProdutoCard from '../../Components/MarketPlace/ProdutoCard.vue'
import Rodape from '../../Components/MarketPlace/Rodape.vue'

type Categoria = 'todos' | 'masculino' | 'feminino' | 'maternidade' | 'acessorios'

type Produto = {
  id: number
  nome: string
  desc: string
  tam: string
  valor: number
  cat: Exclude<Categoria, 'todos'>
  categoria: string
  img: string
}

type ItemCarrinho = Produto & {
  qtd: number
}

const filtro = ref<Categoria>('todos')
const abrindo = ref(false)
const aviso = ref(false)
const carrinho = ref<ItemCarrinho[]>([])

const produtos: Produto[] = [
  { id: 1, nome: 'Conjunto Camisa+Bermuda Menino', desc: 'Tecido macio, estampas', tam: 'RN/1-2a/3-4a', valor: 59.9, cat: 'masculino', categoria: 'Masculino', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400' },
  { id: 2, nome: 'Macacão Bebê Menino Algodão', desc: 'Confortável, botões na frente', tam: 'RN/6m/12m', valor: 45, cat: 'masculino', categoria: 'Masculino', img: 'https://images.unsplash.com/photo-1503948383309-5060c0432d05?w=400' },
  { id: 3, nome: 'Vestido Floral Menina', desc: 'Leve e elegante', tam: 'RN/1-2a/3-4a', valor: 68.5, cat: 'feminino', categoria: 'Feminino', img: 'https://images.unsplash.com/photo-1519238180329-8d27728a2b76?w=400' },
  { id: 4, nome: 'Conjunto Blusa+Shorts Menina', desc: 'Tecido respirável', tam: '6m/18m/3-4a', valor: 52, cat: 'feminino', categoria: 'Feminino', img: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400' },
  { id: 5, nome: 'Vestido Gestante Amamentação', desc: 'Prático e confortável', tam: 'M/G/GG', valor: 89.9, cat: 'maternidade', categoria: 'Maternidade', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400' },
  { id: 6, nome: 'Kit Fraldas de Pano (5un)', desc: 'Estampas sortidas', tam: 'Único', valor: 38, cat: 'acessorios', categoria: 'Acessórios', img: 'https://images.unsplash.com/photo-1545034802-8e16d13aebc8?w=400' },
  { id: 7, nome: 'Chupeta Silicone Ortopédica', desc: 'Aprovada por pediatras', tam: '0-6m/6m+', valor: 22, cat: 'acessorios', categoria: 'Acessórios', img: 'https://images.unsplash.com/photo-1596870230751-ebdfcec623ac?w=400' },
  { id: 8, nome: 'Mamadeira Anticólica', desc: 'Bico de silicone', tam: '150ml/240ml', valor: 28.5, cat: 'acessorios', categoria: 'Acessórios', img: 'https://images.unsplash.com/photo-1585909606638-995e13321fa0?w=400' },
]

const lista = computed(() => {
  if (filtro.value === 'todos') return produtos
  return produtos.filter((p) => p.cat === filtro.value)
})

const totalItens = computed(() => carrinho.value.reduce((soma, item) => soma + item.qtd, 0))
const totalGeral = computed(() => carrinho.value.reduce((soma, item) => soma + item.valor * item.qtd, 0))

const adicionar = (produto: Produto) => {
  const itemExistente = carrinho.value.find((item) => item.id === produto.id)

  if (itemExistente) {
    itemExistente.qtd += 1
  } else {
    carrinho.value.push({ ...produto, qtd: 1 })
  }

  aviso.value = true
  setTimeout(() => {
    aviso.value = false
  }, 2000)
}

const mudarItem = (index: number, delta: number) => {
  const item = carrinho.value[index]

  if (!item) return

  item.qtd += delta

  if (item.qtd <= 0) {
    carrinho.value.splice(index, 1)
  }
}

const finalizarCompra = () => {
  if (!carrinho.value.length) {
    alert('Carrinho vazio!')
    return
  }

  alert(`Compra finalizada! 🎉\nTotal: R$ ${totalGeral.value.toFixed(2)}\nObrigado por escolher a Belly Kids!`)
  carrinho.value = []
  abrindo.value = false
}
</script>

<template>
  <div class="pagina-marketplace">
    <Cabecalho :total-itens="totalItens" @abrir-carrinho="abrindo = true" />

    <section class="hero">
      <h1>Roupas e Carinho para os Pequenos 💖</h1>
      <p>Do Recém-Nascido aos 4 anos | Masculino, Feminino, Maternidade e Acessórios</p>
    </section>

    <Filtros :filtro="filtro" @alterar-filtro="filtro = $event" />

    <main class="grade">
      <ProdutoCard
        v-for="produto in lista"
        :key="produto.id"
        :produto="produto"
        @adicionar="adicionar($event)"
      />
    </main>

    <Carrinho
      :aberto="abrindo"
      :carrinho="carrinho"
      :total="totalGeral"
      @fechar="abrindo = false"
      @mudar="mudarItem"
      @finalizar="finalizarCompra"
    />

    <div class="aviso" :class="{ mostrar: aviso }">✅ Adicionado com sucesso!</div>

    <Rodape />
  </div>
</template>

<style scoped>
:global(body) {
  margin: 0;
  background: #fef7fc;
  color: #2d3748;
  font-family: 'Segoe UI', sans-serif;
}

* {
  box-sizing: border-box;
}

.hero {
  background: linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('https://images.unsplash.com/photo-1519238263380-90c412d58efc?w=1200');
  background-size: cover;
  padding: 4rem 2rem;
  text-align: center;
}

.hero h1 {
  font-size: 2.5rem;
  margin: 0 0 1rem;
  background: linear-gradient(90deg, #ff6b9d, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  color: #4a5568;
}

.grade {
  max-width: 1200px;
  margin: 2rem auto 4rem;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;
}

.aviso {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%) translateY(120px);
  background: #06d6a0;
  color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: bold;
  transition: transform 0.3s ease;
  z-index: 300;
}

.aviso.mostrar {
  transform: translateX(-50%) translateY(0);
}
</style>
