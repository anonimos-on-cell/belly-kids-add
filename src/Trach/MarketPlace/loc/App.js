import Cabecalho from './Cabecalho.js'
import Carrinho from './Carrinho.js'
import Filtros from './Filtros.js'
import ProdutoCard from './ProdutoCard.js'
import Rodape from './Rodape.js'

const { createApp, ref, computed } = Vue

createApp({
  components: {
    Cabecalho,
    Carrinho,
    Filtros,
    ProdutoCard,
    Rodape
  },
  setup() {
    const filtro = ref('todos')
    const abrindo = ref(false)
    const aviso = ref(false)
    const carrinho = ref([])

    const produtos = [
      { id: 1, nome: 'Conjunto Camisa+Bermuda Menino', desc: 'Tecido macio, estampas', tam: 'RN/1-2a/3-4a', valor: 59.90, cat: 'masculino', categoria: 'Masculino', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400' },
      { id: 2, nome: "Macacão Bebê Menino Algodão", desc: "Confortável, botões na frente", tam: "RN/6m/12m", valor: 45.00, cat: "masculino", categoria: "Masculino", img: "https://images.unsplash.com/photo-1503948383309-5060c0432d05?w=400" },
      { id: 3, nome: "Vestido Floral Menina", desc: "Leve e elegante", tam: "RN/1-2a/3-4a", valor: 68.50, cat: "feminino", categoria: "Feminino", img: "https://images.unsplash.com/photo-1519238180329-8d27728a2b76?w=400" },
      { id: 4, nome: "Conjunto Blusa+Shorts Menina", desc: "Tecido respirável", tam: "6m/18m/3-4a", valor: 52.00, cat: "feminino", categoria: "Feminino", img: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400" },
      { id: 5, nome: "Vestido Gestante Amamentação", desc: "Prático e confortável", tam: "M/G/GG", valor: 89.90, cat: "maternidade", categoria: "Maternidade", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400" },
      { id: 6, nome: "Kit Fraldas de Pano (5un)", desc: "Estampas sortidas", tam: "Único", valor: 38.00, cat: "acessorios", categoria: "Acessórios", img: "https://images.unsplash.com/photo-1545034802-8e16d13aebc8?w=400" },
      { id: 7, nome: "Chupeta Silicone Ortopédica", desc: "Aprovada por pediatras", tam: "0-6m/6m+", valor: 22.00, cat: "acessorios", categoria: "Acessórios", img: "https://images.unsplash.com/photo-1596870230751-ebdfcec623ac?w=400" },
      { id: 8, nome: "Mamadeira Anticólica", desc: "Bico de silicone", tam: "150ml/240ml", valor: 28.50, cat: "acessorios", categoria: "Acessórios", img: "https://images.unsplash.com/photo-1585909606638-995e13321fa0?w=400" }
    ]

    const lista = computed(() => filtro.value === 'todos' ? produtos : produtos.filter(p => p.cat === filtro.value))
    const totalItens = computed(() => carrinho.value.reduce((s, i) => s + i.qtd, 0))
    const totalGeral = computed(() => carrinho.value.reduce((s, i) => s + i.valor * i.qtd, 0))

    const adicionar = (p) => {
      const i = carrinho.value.findIndex(x => x.id === p.id)
      if (i !== -1) {
        carrinho.value[i].qtd++
      } else {
        carrinho.value.push({ ...p, qtd: 1 })
      }
      aviso.value = true
      setTimeout(() => aviso.value = false, 2000)
    }

    const mudar = (i, delta) => {
      carrinho.value[i].qtd += delta
      if (carrinho.value[i].qtd <= 0) carrinho.value.splice(i, 1)
    }

    const finalizar = () => {
      if (!carrinho.value.length) return alert('Carrinho vazio!')
      alert(`Compra finalizada! 🎉\nTotal: R$ ${totalGeral.value.toFixed(2)}\nObrigado por escolher a Encanto Infantil!`)
      carrinho.value = []
      abrindo.value = false
    }

    return { filtro, lista, carrinho, abrindo, aviso, totalItens, totalGeral, adicionar, mudar, finalizar }
  },
  template: `
    <div class="d-flex flex-column min-vh-100 bg-light">
      <Cabecalho :total-itens="totalItens" @abrir-carrinho="abrindo = true" />
      
      <Filtros v-model="filtro" />
      
      <main class="container my-4 flex-grow-1">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          <div class="col" v-for="produto in lista" :key="produto.id">
            <ProdutoCard :produto="produto" @adicionar="adicionar" />
          </div>
        </div>
      </main>
      
      <div v-if="aviso" class="position-fixed bottom-0 start-50 translate-middle-x mb-4 shadow" style="z-index: 1060;">
        <div class="alert alert-success d-flex align-items-center mb-0 px-4 py-3 border-0 rounded-pill shadow">
          <i class="bi bi-check-circle-fill me-2 fs-5"></i>
          <span class="fw-medium">Produto adicionado ao carrinho!</span>
        </div>
      </div>
      
      <Carrinho 
        :abrindo="abrindo" 
        :carrinho="carrinho" 
        :total-geral="totalGeral" 
        @fechar="abrindo = false" 
        @mudar-qtd="mudar" 
        @finalizar="finalizar" 
      />
      
      <Rodape />
    </div>
  `
}).mount('#app')