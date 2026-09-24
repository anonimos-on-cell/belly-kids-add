<template>
  <div class="container my-4">
    <div class="d-flex flex-wrap gap-2 justify-content-center">
      <button 
        v-for="cat in categorias" 
        :key="cat.id"
        class="btn rounded-pill px-4 transition"
        :class="modelValue === cat.id ? 'btn-primary shadow' : 'btn-outline-secondary'"
        @click="$emit('update:modelValue', cat.id)"
      >
        {{ cat.nome }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Filtros',
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup() {
    const categorias = [
      { id: 'todos', nome: 'Todos' },
      { id: 'masculino', nome: 'Menino' },
      { id: 'feminino', nome: 'Menina' },
      { id: 'maternidade', nome: 'Maternidade' },
      { id: 'acessorios', nome: 'Acessórios' }
    ]
    
    return { categorias }
  }
}
</script>
