<template>
    <header>
  <div class="nav">
    <div class="logo">👶 BELLY KIDS</div>
    <button class="carrinho-btn" @click="abrindo=true">
      🛒 Carrinho <span class="badge">{{totalItens}}</span>
    </button>
  </div>
</header>
<Mercado />
</template>
<script setup lang="ts">
import Mercado from '@/View/loc/Mercado.vue';
</script>