export default {
  props: {
    abrindo: {
      type: Boolean,
      required: true
    },
    carrinho: {
      type: Array,
      required: true
    },
    totalGeral: {
      type: Number,
      required: true
    }
  },
  emits: ['fechar', 'mudar-qtd', 'finalizar'],
  template: `
    <div v-if="abrindo" class="modal d-block" style="background: rgba(0,0,0,0.5);" tabindex="-1">
      <div class="modal-dialog modal-dialog-scrollable modal-md position-fixed end-0 m-0 h-100" style="max-width: 450px; width: 100%;">
        <div class="modal-content h-100 rounded-0 border-0">
          <div class="modal-header border-bottom-0">
            <h5 class="modal-title fw-bold text-secondary">Seu Carrinho</h5>
            <button type="button" class="btn-close" @click="$emit('fechar')"></button>
          </div>
          
          <div class="modal-body overflow-auto px-4">
            <p v-if="!carrinho.length" class="text-center text-muted my-5 fs-5">Seu carrinho está vazio.</p>
            
            <div v-else class="d-flex flex-column gap-3">
              <div v-for="(item, idx) in carrinho" :key="item.id" class="d-flex gap-3 align-items-center border-bottom pb-3">
                <img :src="item.img" :alt="item.nome" class="img-fluid rounded border shadow-sm object-fit-cover" style="width: 70px; height: 70px;">
                <div class="flex-grow-1">
                  <h6 class="mb-0 fw-semibold text-dark text-truncate" style="max-width: 180px;">{{ item.nome }}</h6>
                  <small class="text-muted d-block mb-1">Tam: {{ item.tam }}</small>
                  <span class="fw-bold text-primary">R$ {{ item.valor.toFixed(2) }}</span>
                </div>
                <div class="d-flex align-items-center gap-1 border rounded bg-light px-1">
                  <button class="btn btn-sm btn-link p-1 text-decoration-none" @click="$emit('mudar-qtd', idx, -1)">-</button>
                  <span class="px-2 fw-medium small">{{ item.qtd }}</span>
                  <button class="btn btn-sm btn-link p-1 text-decoration-none" @click="$emit('mudar-qtd', idx, 1)">+</button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="modal-footer border-top p-4 d-flex flex-column gap-3 align-items-stretch">
            <div class="d-flex justify-content-between align-items-center w-100">
              <span class="fs-5 text-muted">Total:</span>
              <span class="fs-4 fw-bold text-success">R$ {{ totalGeral.toFixed(2) }}</span>
            </div>
            <button class="btn btn-primary btn-lg w-100 py-3 fw-bold shadow" @click="$emit('finalizar')">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  `
}