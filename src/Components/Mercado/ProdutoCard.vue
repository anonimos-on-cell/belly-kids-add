<template>
  <div class="card h-100 shadow-sm border-0 rounded-4 overflow-hidden card-produto">
    <div class="position-relative overflow-hidden" style="height: 240px;">
      <img :src="produto.img" :alt="produto.nome" class="w-100 h-100 object-fit-cover transition-scale">
      <span class="position-absolute bottom-0 start-0 m-3 badge bg-white text-dark shadow-sm rounded-pill fw-medium px-2 py-1">
        {{ produto.categoria }}
      </span>
    </div>
    
    <div class="card-body d-flex flex-column p-4">
      <h5 class="card-title fw-bold text-dark text-truncate mb-1">{{ produto.nome }}</h5>
      <p class="card-text text-muted text-clamp flex-grow-1 small mb-2">{{ produto.desc }}</p>
      <div class="d-flex align-items-center mb-3">
        <small class="text-secondary bg-light rounded px-2 py-1 border fw-semibold">Tam: {{ produto.tam }}</small>
      </div>
      
      <div class="d-flex justify-content-between align-items-center mt-auto pt-2 border-top">
        <span class="fs-4 fw-bold text-primary">R$ {{ produto.valor.toFixed(2) }}</span>
        <button class="btn btn-primary d-flex align-items-center justify-content-center p-2 rounded-circle shadow-sm" @click="$emit('adicionar', produto)">
          <i class="bi bi-plus-lg fs-5"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProdutoCard',
  props: {
    produto: {
      type: Object,
      required: true
    }
  },
  emits: ['adicionar']
}
</script>
