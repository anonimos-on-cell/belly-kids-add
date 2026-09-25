<script setup lang="ts">
const produtos = [
  { 
    nome: 'Kit Bolsa Maternidade',
    preco: 'R\$ 159,90', 
    cor: 'Rosa Bebê',
    imagem: 'https://i.pinimg.com/736x/27/cb/30/27cb30dc0c0e3689757ba730b1e803df.jpg' 
  },
  { 
    nome: 'Mordedor de Silicone', 
    preco: 'R\$ 29,90',
    cor: 'Azul Pastel',
    imagem: 'https://rihappy.vtexassets.com/arquivos/ids/340519-800-auto?v=636432438318900000&width=800&height=auto&aspect=true' 
  },
  { 
    nome: 'Manta Soft Antialérgica', 
    preco: 'R\$ 89,90', 
    cor: 'Nuvem Mágica',
    imagem: 'https://unsplash.com'
  },
  { 
    nome: 'Prendedor de Chupeta', 
    preco: 'R\$ 19,50', 
    cor: 'Colorê',
    imagem: 'https://unsplash.com'
  },
  { 
    nome: 'Naninha de Carneirinho',
    preco: 'R\$ 45,90', 
    cor: 'Branca Neve',
    imagem: 'https://unsplash.com'
  },
  { 
    nome: 'Prendedor de Chupeta', 
    preco: 'R\$ 19,50', 
    cor: 'Colorê',
    imagem: 'https://unsplash.com'
  },
  { 
    nome: 'Prendedor de Chupeta', 
    preco: 'R\$ 19,50', 
    cor: 'Colorê',
    imagem: 'https://unsplash.com'
  },
  { 
    nome: 'Prendedor de Chupeta', 
    preco: 'R\$ 19,50', 
    cor: 'Colorê',
    imagem: 'https://unsplash.com'
  },
  { 
    nome: 'Prendedor de Chupeta', 
    preco: 'R\$ 19,50', 
    cor: 'Colorê',
    imagem: 'https://unsplash.com'
  },
  { 
    nome: 'Prendedor de Chupeta', 
    preco: 'R\$ 19,50', 
    cor: 'Colorê',
    imagem: 'https://unsplash.com'
  },
  { 
    nome: 'Prendedor de Chupeta', 
    preco: 'R\$ 19,50', 
    cor: 'Colorê',
    imagem: 'https://unsplash.com'
  },
  { 
    nome: 'Prendedor de Chupeta', 
    preco: 'R\$ 19,50', 
    cor: 'Colorê',
    imagem: 'https://unsplash.com'
  },
]
</script>

<template>
  <main class="loja-page">
    <section class="hero">
      <div>
        <!-- Título atualizado para o tema infantil -->
        <h1>O aconchego e carinho que seu bebê merece</h1>
      </div>
      <button>Ver coleção</button>
    </section>

    <section class="produtos">
      <article v-for="produto in produtos" :key="produto.nome" class="card">
        <div 
          class="thumb" 
          :style="{ backgroundImage: `url(${produto.imagem})` }" 
        />
        <h2>{{ produto.nome }}</h2>
        <p>{{ produto.cor }}</p>
        <div class="card-footer">
          <strong>{{ produto.preco }}</strong>
          <button>Comprar</button>
        </div>
      </article>
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

.produtos {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 22px;
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
}
</style>
