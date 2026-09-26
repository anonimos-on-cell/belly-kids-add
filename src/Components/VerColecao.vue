<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const produtos = [
  {
    nome: 'Kit Bolsa Maternidade',
    preco: 'R$ 159,90',
    cor: 'Rosa Bebê',
    imagem: 'https://i.pinimg.com/736x/27/cb/30/27cb30dc0c0e3689757ba730b1e803df.jpg',
  },
  {
    nome: 'Mordedor de Silicone',
    preco: 'R$ 29,90',
    cor: 'Azul Pastel',
    imagem: 'https://rihappy.vtexassets.com/arquivos/ids/340519-800-auto?v=636432438318900000&width=800&height=auto&aspect=true',
  },
  {
    nome: 'Manta Soft Antialérgica',
    preco: 'R$ 89,90',
    cor: 'Nuvem Mágica',
    imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m6ph12rqb87bf7',
  },
  {
    nome: 'Naninha de Carneirinho',
    preco: 'R$ 45,90',
    cor: 'Branca Neve',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYHfLgAZdwNlHfCcT7t2d8ZbDRf4CUle_otWsshAgBkHAZ4Yjk2Op6Ck&s=10',
  },
  {
    nome: 'Chocalho Sensorial',
    preco: 'R$ 19,50',
    cor: 'Colorê',
    imagem: 'https://drogariasp.vteximg.com.br/arquivos/ids/1181392-1000-1000/image-4ebbcd9b6b7b46adb35398c013d6015f.jpg?v=638678711342800000',
  },
  {
    nome: 'Babador Bandana',
    preco: 'R$ 19,50',
    cor: 'Colorê',
    imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_759197-MLA113098054039_062026-F.webp',
  },
  {
    nome: 'Escova para Mamadeira',
    preco: 'R$ 19,50',
    cor: 'Colorê',
    imagem: 'https://product-data.raiadrogasil.io/images/3708289.webp',
  },
  {
    nome: 'Kit Pente e Escova',
    preco: 'R$ 19,50',
    cor: 'Colorê',
    imagem: 'https://cdn.awsli.com.br/757/757427/produto/157622158e975b01244.jpg',
  },
]

function voltarParaLoja() {
  router.push({ name: 'LojaPage' })
}
</script>

<template>
  <main class="colecao-page">
    <button type="button" class="voltar" @click="voltarParaLoja">
      &lt; Voltar para a loja
    </button>
    <div class="colecao-header">
      <p class="eyebrow">Coleção Belly Kids</p>
      <h1>Pequenos cuidados, grandes aconchegos</h1>
      <p>Encontre acessórios delicados e confortáveis para acompanhar cada momento do seu bebê.</p>
    </div>

    <section class="colecao-grid" aria-label="Produtos da coleção">
      <article v-for="produto in produtos" :key="produto.nome" class="produto-card">
        <div class="produto-imagem" :style="{ backgroundImage: `url(${produto.imagem})` }" />
        <div class="produto-conteudo">
          <p class="produto-cor">{{ produto.cor }}</p>
          <h2>{{ produto.nome }}</h2>
          <strong>{{ produto.preco }}</strong>
          <button type="button">Comprar</button>
        </div>
      </article>
    </section>

   
  </main>
</template>

<style scoped>
.colecao-page {
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px 20px 80px;
}

.voltar {
  border: 0;
  padding: 0;
  background: transparent;
  color: #d94476;
  font-weight: 700;
  font-size: 1.90rem;
  cursor: pointer;
}

.colecao-header {
  width: min(100%, 760px);
  box-sizing: border-box;
  margin: 32px auto 36px;
  padding: 32px 28px;
  text-align: center;
  border-radius: 24px;
  background: linear-gradient(135deg, #ffd7e9, #fff4fa);
  box-shadow: 0 10px 24px rgba(143, 68, 105, 0.08);
}

.eyebrow {
  margin: 0 0 12px;
  color: #d94476;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.colecao-header h1 {
  margin: 0 0 14px;
  color: #2d1b2d;
  font-size: clamp(1.9rem, 4vw, 3.1rem);
  line-height: 1.1;
}

.colecao-header > p:last-child {
  margin: 0;
  color: #6d5371;
  font-size: 1.05rem;
  line-height: 1.6;
}

@media (max-width: 520px) {
  .colecao-header {
    margin-top: 24px;
    padding: 24px 18px;
  }

  .colecao-header > p:last-child {
    font-size: 0.95rem;
  }
}

.colecao-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.produto-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 18px;
  background: white;
  box-shadow: 0 12px 28px rgba(143, 68, 105, 0.1);
}

.produto-imagem {
  height: 220px;
  flex-shrink: 0;
  background-color: #f8e8ef;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.produto-conteudo {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 18px;
}

.produto-cor {
  margin: 0 0 8px;
  color: #d94476;
  font-size: 0.85rem;
  font-weight: 700;
}

.produto-conteudo h2 {
  min-height: 52px;
  margin: 0 0 14px;
  color: #312330;
  font-size: 1.1rem;
}

.produto-conteudo strong {
  display: block;
  margin-bottom: 16px;
  color: #d94476;
  font-size: 1.1rem;
}

.produto-conteudo button {
  margin-top: auto;
  width: 100%;
  border: 0;
  border-radius: 999px;
  padding: 11px 16px;
  background: linear-gradient(135deg, #ef6aa0, #ff9bbd);
  color: white;
  font-weight: 700;
  cursor: pointer;
}

@media (max-width: 900px) {
  .colecao-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .colecao-grid {
    grid-template-columns: 1fr;
  }
}
</style>
