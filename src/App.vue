<script setup lang="ts">
import { RouterView } from 'vue-router';
import Cabecalho from './Components/Mercado/cabecalho.vue';
import Rodape from './Components/Mercado/rodape.vue';
</script>

<template>
  <Cabecalho />
  <RouterView />
  <Rodape />
</template>

<style scoped></style>
