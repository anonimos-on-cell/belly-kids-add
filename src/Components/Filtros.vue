<template>
  <section class="filtros">
    <button
      class="filtro-btn"
      :class="{ ativo: filtro === 'todos' }"
      @click="$emit('alterar-filtro', 'todos')"
    >
      Todos
    </button>

    <button
      class="filtro-btn"
      :class="{ ativo: filtro === 'masculino' }"
      @click="$emit('alterar-filtro', 'masculino')"
    >
      👦 Masculino
    </button>

    <button
      class="filtro-btn"
      :class="{ ativo: filtro === 'feminino' }"
      @click="$emit('alterar-filtro', 'feminino')"
    >
      👧 Feminino
    </button>

    <button
      class="filtro-btn"
      :class="{ ativo: filtro === 'maternidade' }"
      @click="$emit('alterar-filtro', 'maternidade')"
    >
      🤰 Maternidade
    </button>

    <button
      class="filtro-btn"
      :class="{ ativo: filtro === 'acessorios' }"
      @click="$emit('alterar-filtro', 'acessorios')"
    >
      🧸 Acessórios
    </button>
  </section>
</template>

<script setup>
defineProps({
  filtro: {
    type: String,
    default: 'todos'
  }
})

defineEmits(['alterar-filtro'])
</script>
