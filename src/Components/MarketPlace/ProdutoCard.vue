<template>
  <article class="card">
    <img :src="produto.img" :alt="produto.nome">

    <div class="card-body">
      <span class="tag" :class="'tag-' + produto.cat">
        {{ produto.categoria }}
      </span>

      <h2>{{ produto.nome }}</h2>
      <p class="desc">{{ produto.desc }}</p>
      <p class="tam">Tamanho: {{ produto.tam }}</p>
      <p class="preco">R$ {{ produto.valor.toFixed(2) }}</p>

      <button class="btn-add" @click="$emit('adicionar', produto)">
        🛍️ Adicionar
      </button>
    </div>
  </article>
</template>

<script setup>
defineProps({
  produto: {
    type: Object,
    required: true
  }
})

defineEmits(['adicionar'])
</script>
