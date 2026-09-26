<script setup lang="ts">
import { ref } from 'vue'

const enviado = ref(false)

function enviarMensagem() {
  enviado.value = true
}
</script>

<template>
  <main class="pagina-contato">
    <section class="contato-card">
      <div class="contato-intro">
        <p class="eyebrow">Fale conosco</p>
        <h1>Estamos aqui para ajudar</h1>
        <p>Envie sua dúvida e nossa equipe retornará o mais breve possível.</p>
        <div class="dados-contato">
          <span>contato@bellykids.com.br</span>
          <span>(75) 98343-1855</span>
        </div>
      </div>

      <form class="formulario" @submit.prevent="enviarMensagem">
        <label for="nome">Nome</label>
        <input id="nome" type="text" required placeholder="Seu nome" />

        <label for="email">E-mail</label>
        <input id="email" type="email" required placeholder="voce@email.com" />

        <label for="mensagem">Mensagem</label>
        <textarea id="mensagem" required rows="5" placeholder="Como podemos ajudar?" />

        <button type="submit">Enviar mensagem</button>
        <p v-if="enviado" class="confirmacao">Mensagem enviada com sucesso.</p>
      </form>
    </section>
  </main>
</template>

<style scoped>
.pagina-contato {
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px 80px;
}

.contato-card {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 40px;
  max-width: 920px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 24px;
  background: linear-gradient(135deg, #fff4fa, #fff9e6);
  box-shadow: 0 10px 24px rgba(143, 68, 105, 0.08);
}

.eyebrow {
  margin: 0 0 12px;
  color: #d94476;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1 {
  margin: 0 0 16px;
  color: #2d1b2d;
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: 1.1;
}

.contato-intro > p:not(.eyebrow) {
  color: #6d5371;
  line-height: 1.6;
}

.dados-contato {
  display: grid;
  gap: 8px;
  margin-top: 28px;
  color: #d94476;
  font-weight: 700;
}

.formulario {
  display: grid;
  gap: 8px;
}

.formulario label {
  margin-top: 8px;
  color: #4a3f35;
  font-weight: 700;
}

.formulario input,
.formulario textarea {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #f0c4d3;
  border-radius: 10px;
  padding: 12px;
  background: white;
  color: #312330;
  font: inherit;
}

.formulario textarea {
  resize: vertical;
}

.formulario button {
  margin-top: 12px;
  border: 0;
  border-radius: 999px;
  padding: 12px 18px;
  background: linear-gradient(135deg, #ef6aa0, #ff9bbd);
  color: white;
  font-weight: 700;
  cursor: pointer;
}

.confirmacao {
  margin: 4px 0 0;
  color: #39805a;
  font-weight: 700;
  text-align: center;
}

@media (max-width: 700px) {
  .contato-card {
    grid-template-columns: 1fr;
    padding: 28px 20px;
  }
}
</style>
