<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const produtos = [
  { 
    // id: 1,
    nome: 'Kit Bolsa Maternidade',
    preco: 'R\$ 159,90', 
    cor: 'Rosa Bebê',
    imagem: 'https://i.pinimg.com/736x/27/cb/30/27cb30dc0c0e3689757ba730b1e803df.jpg' 
  },
  { 
    // id: 2,
    nome: 'Mordedor de Silicone', 
    preco: 'R\$ 29,90',
    cor: 'Azul Pastel',
    imagem: 'https://rihappy.vtexassets.com/arquivos/ids/340519-800-auto?v=636432438318900000&width=800&height=auto&aspect=true' 
  },
  { 
    // id: 3,
    nome: 'Manta Soft Antialérgica', 
    preco: 'R\$ 89,90', 
    cor: 'Nuvem Mágica',
    imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m6ph12rqb87bf7'
  },
  { 
    // id: 4,
    nome: 'Prendedor de Chupeta', 
    preco: 'R\$ 19,50', 
    cor: 'Colorê',
    imagem: 'https://s.brascol.com.br/product/2025/processados/1339187_1.jpg'
  },

  
  { 
    // id: 5,
    nome: 'Naninha de Carneirinho',
    preco: 'R\$ 45,90', 
    cor: 'Branca Neve',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYHfLgAZdwNlHfCcT7t2d8ZbDRf4CUle_otWsshAgBkHAZ4Yjk2Op6Ck&s=10'
  },
  { 
    // id: 6,
    nome: 'Chocalho Sensorial', 
    preco: 'R\$ 19,50', 
    cor: 'Colorê',
    imagem: 'https://drogariasp.vteximg.com.br/arquivos/ids/1181392-1000-1000/image-4ebbcd9b6b7b46adb35398c013d6015f.jpg?v=638678711342800000'
  },
  { 
    // id: 7,
    nome: 'Babador Bandana', 
    preco: 'R\$ 19,50', 
    cor: 'Colorê',
    imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_759197-MLA113098054039_062026-F.webp'
  },
  { 
    // id: 8,
    nome: 'Meias Antiderrapantes', 
    preco: 'R\$ 19,50', 
    cor: 'Colorê',
    imagem: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400'
  },
  { 
    // id: 9,
    nome: 'Toalha com Capuz', 
    preco: 'R\$ 19,50', 
    cor: 'Colorê',
    imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_624764-MLA113050758603_062026-F.webp'
  },
  { 
    // id: 10,
    nome: 'Escova para Mamadeira', 
    preco: 'R\$ 19,50', 
    cor: 'Colorê',
    imagem: 'https://product-data.raiadrogasil.io/images/3708289.webp'
  },
  { 
    // id: 11,
    nome: 'Kit Pente e Escova', 
    preco: 'R\$ 19,50', 
    cor: 'Colorê',
    imagem: 'https://cdn.awsli.com.br/757/757427/produto/157622158e975b01244.jpg'
  },
  { 
    // id: 12,
    nome: 'Porta-Chupeta', 
    preco: 'R\$ 19,50', 
    cor: 'Colorê',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4o052aTtfx7VrS6m8EafNFkhdEG8hd8tyJaeHGcn6TQ&s=10'
  },
]

const produtosCarrossel = ref<HTMLElement | null>(null)
const carrosselPausado = ref(false)
let intervaloCarrossel: ReturnType<typeof setInterval> | undefined
const router = useRouter()

function verColecao() {
  router.push({ name: 'VerColecao' })
}

function moverCarrossel(direcao: number) {
  produtosCarrossel.value?.scrollBy({
    left: direcao * 320,
    behavior: 'smooth',
  })
}

function girarCarrossel() {
  const carrossel = produtosCarrossel.value

  if (!carrossel || carrosselPausado.value) return

  const chegouAoFim = carrossel.scrollLeft + carrossel.clientWidth >= carrossel.scrollWidth - 10

  if (chegouAoFim) {
    carrossel.scrollTo({ left: 0, behavior: 'smooth' })
    return
  }

  moverCarrossel(1)
}

function iniciarCarrossel() {
  intervaloCarrossel = setInterval(girarCarrossel, 2400)
}

onMounted(iniciarCarrossel)
onUnmounted(() => clearInterval(intervaloCarrossel))
</script>

<template>
  <main class="loja-page">
    <section class="hero">
      <div>
        <!-- Título atualizado para o tema infantil -->
        <h1>O aconchego e carinho que seu bebê merece</h1>
      </div>
      <button type="button" @click="verColecao">Ver coleção</button>
    </section>

    <section class="produtos-section">
      <div
        class="carrossel-area"
        @mouseenter="carrosselPausado = true"
        @mouseleave="carrosselPausado = false"
        @focusin="carrosselPausado = true"
        @focusout="carrosselPausado = false"
      >
        <div class="carrossel-controles">
          <button type="button" aria-label="Produtos anteriores" @click="moverCarrossel(-1)">
            &lt;
          </button>
          <button type="button" aria-label="Próximos produtos" @click="moverCarrossel(1)">
            &gt;
          </button>
        </div>

        <div ref="produtosCarrossel" class="produtos">
          <article v-for="produto in produtos" :key="produto.nome" class="card">
            <div
              class="thumb"
              :style="{ backgroundImage: `url(${produto.imagem})` }"
            />
            <h2>{{ produto.nome }}</h2>
            <p>{{ produto.cor }}</p>
            <div class="card-footer">
              <strong>{{ produto.preco }}</strong>
              <button type="button">Comprar</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.loja-page {
  padding: 40px 20px 80px;
}

.hero {
  max-width: 1100px;
  margin: 0 auto 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: linear-gradient(135deg, #ffd7e9, #fff4fa);
  border-radius: 26px;
  padding: 32px 36px;
}

.hero h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.5rem);
  color: #2d1b2d;
}

.hero button,
.card-footer button {
  border: none;
  border-radius: 999px;
  padding: 12px 22px;
  background: linear-gradient(135deg, #ef6aa0, #ff9bbd);
  color: white;
  font-weight: 700;
  cursor: pointer;
}

.produtos-section {
  max-width: 1100px;
  margin: 0 auto;
}

.carrossel-controles {
  position: absolute;
  z-index: 1;
  top: 50%;
  right: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
  transform: translateY(-50%);
}

.carrossel-area {
  position: relative;
}

.carrossel-controles button {
  pointer-events: auto;
}

.carrossel-controles button + button {
  margin-left: auto;
}

.carrossel-controles {
  display: flex;
}

.carrossel-controles button {
  width: 42px;
  height: 42px;
  border: 1px solid #f1bfd2;
  border-radius: 50%;
  background: white;
  color: #d94476;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
}

.produtos {
  display: grid;
  grid-auto-columns: minmax(240px, 1fr);
  grid-auto-flow: column;
  gap: 22px;
  overflow-x: auto;
  padding: 4px 4px 18px;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #f1a8c4 transparent;
}

.card {
  background: white;
  border-radius: 22px;
  padding: 18px;
  box-shadow: 0 12px 28px rgba(143, 68, 105, 0.08);
}

.thumb {
  height: 160px;
  border-radius: 18px;
  margin-bottom: 16px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #e8e8e8;
}

.card h2 {
  margin: 0 0 6px;
  font-size: 1.2rem;
  color: #312330;
}

.card p {
  margin: 0 0 16px;
  color: #6d5371;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.card-footer strong {
  color: #d94476;
  font-size: 1.1rem;
}

@media (max-width: 720px) {
  .hero {
    flex-direction: column;
    align-items: flex-start;
  }

  .produtos {
    grid-auto-columns: minmax(78vw, 1fr);
  }
}
</style>
