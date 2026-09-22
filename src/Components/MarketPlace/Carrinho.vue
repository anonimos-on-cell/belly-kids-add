<template>
  <div
    class="overlay"
    :class="{ ativo: aberto }"
    @click="$emit('fechar')"
  ></div>

  <aside class="painel" :class="{ aberto }">
    <button class="fechar" @click="$emit('fechar')">✕</button>

    <h2>🛒 Meu Carrinho</h2>

    <p v-if="carrinho.length === 0" class="vazio">
      Seu carrinho está vazio 😊
    </p>

    <div v-else>
      <div
        class="item"
        v-for="(item, index) in carrinho"
        :key="item.id"
      >
        <strong>{{ item.nome }}</strong>

        <p class="item-preco">
          R$ {{ item.valor.toFixed(2) }}
        </p>

        <div class="qtd">
          <button @click="$emit('mudar', index, -1)">−</button>
          <span>{{ item.qtd }}</span>
          <button @click="$emit('mudar', index, 1)">+</button>
        </div>
      </div>

      <div class="total">
        Total: R$ {{ total.toFixed(2) }}
      </div>

      <button class="btn-finalizar" @click="$emit('finalizar')">
        ✅ Finalizar Compra
      </button>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  aberto: Boolean,
  carrinho: {
    type: Array,
    default: () => []
  },
  total: {
    type: Number,
    default: 0
  }
})

defineEmits(['fechar', 'mudar', 'finalizar'])
</script>
