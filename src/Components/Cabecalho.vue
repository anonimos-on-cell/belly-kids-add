<template>
  <header class="cabecalho">
    <div class="nav">
      <div class="logo">👶 BELLY KIDS</div>

      <button class="carrinho-btn" @click="$emit('abrir-carrinho')">
        🛒 Carrinho
        <span class="badge">{{ totalItens }}</span>
      </button>
    </div>
  </header>
</template>

<script setup>
defineProps({
  totalItens: {
    type: Number,
    default: 0
  }
})

defineEmits(['abrir-carrinho'])
</script>
