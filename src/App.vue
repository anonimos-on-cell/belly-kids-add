<script setup lang="ts">
import { RouterView } from 'vue-router';
import Cabecalho from '@/Components/balle-kids/Header/cabecalho.vue';
import Rodape from '@/Components/balle-kids/footer/rodape.vue';
</script>

<template>
  <Cabecalho />
  <RouterView />
  <Rodape />
</template>

<style scoped></style>
