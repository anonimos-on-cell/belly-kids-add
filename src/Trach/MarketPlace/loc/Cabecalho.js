export default {
  props: {
    totalItens: {
      type: Number,
      required: true
    }
  },
  emits: ['abrir-carrinho'],
  template: `
    <header class="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top px-4">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <a class="navbar-brand fw-bold text-primary fs-3" href="#">Encanto Infantil</a>
        <button class="btn btn-outline-primary position-relative d-flex align-items-center" @click="$emit('abrir-carrinho')">
          <i class="bi bi-cart3 fs-5 me-2"></i>
          <span>Carrinho</span>
          <span v-if="totalItens > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{ totalItens }}
          </span>
        </button>
      </div>
    </header>
  `
}