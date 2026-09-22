<template>
  <div class="produto-card">
    <img :src="produto.imagem" :alt="produto.nome" />
    <h2>{{ produto.nome }}</h2>
    <p>{{ produto.descricao }}</p>
    <p class="preco">R$ {{ produto.preco.toFixed(2) }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  produto: {
    imagem: string
    nome: string
    descricao: string
    preco: number
  }
}>()
</script>

<style scoped>
.produto-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  text-align: center;
}

.produto-card img {
  max-width: 100%;
  height: auto;
}

.preco {
  font-size: 1.5em;
  font-weight: bold;
}
</sty