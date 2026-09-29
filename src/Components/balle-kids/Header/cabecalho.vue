<template>
  <header class="cabecalho">
    <div class="container">
      <h1 class="marca">🍼 BellyKids</h1>
      <p class="frase">Recém-nascido a 4 anos • Kits de maternidade e acessórios</p>

      <nav class="menu">
        <router-link to="/" class="item-menu">Início</router-link>
        <router-link to="/produtos" class="item-menu">Produtos</router-link>
        <router-link to="/sobre" class="item-menu">Sobre</router-link>
        <router-link to="/contato" class="item-menu">Contato</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
// Componente de cabeçalho
</script>

<style scoped>
.cabecalho {
  background: linear-gradient(90deg, #ffd6e0, #fff3b0, #a8d5ff);
  padding: 24px 16px;
  border-radius: 0 0 24px 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  margin-bottom: 20px;
}

.container {
  max-width: 580px;
  margin: 0 auto;
  text-align: center;
}

.marca {
  margin: 0;
  font-size: 2.2rem;
  color: #e88eaa;
  text-shadow: 2px 2px 0 rgba(168, 213, 255, 0.4);
}

.frase {
  margin: 6px 0 16px;
  color: #6b5c4f;
  font-size: 0.95rem;
}

.menu {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.item-menu {
  color: #4a3f35;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.6);
  transition: all 0.2s ease;
}

.item-menu:hover {
  background-color: #fff;
  transform: translateY(-2px);
}
</style>