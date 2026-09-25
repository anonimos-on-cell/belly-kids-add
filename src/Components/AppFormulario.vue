<template>
  <main class="login-page">
    <section class="login-card">
      <div class="login-copy">
        <p class="eyebrow">Bem-vindo(a)</p>
        <h1>Entre na sua conta</h1>
        <p>Descubra produtos de beleza com qualidade, brilho e cuidado para cada momento.</p>
      </div>

      <form class="login-form" @submit.prevent="handleSubmit">
        <label>
          <span>E-mail</span>
          <input
            v-model="email"
            type="email"
            placeholder="seu@gmail.com"
            autocomplete="email"
          />
        </label>

        <label>
          <span>Senha</span>
          <input
            v-model="senha"
            type="password"
            placeholder="Digite sua senha"
            autocomplete="current-password"
          />
        </label>

        <p v-if="erroMensagem" class="erro-mensagem">
          {{ erroMensagem }}
        </p>

        <button type="submit">Entrar</button>
      </form>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const senha = ref('')
const erroMensagem = ref('')

const handleSubmit = () => {
  const emailValido = /^[^\s@]+@gmail\.com$/i.test(email.value.trim())

  if (!email.value.trim() || !senha.value) {
    erroMensagem.value = 'Preencha o e-mail e a senha para entrar.'
    return
  }

  if (!emailValido) {
    erroMensagem.value = 'Erro: use um e-mail do Gmail válido para continuar.'
    return
  }

  erroMensagem.value = ''
  
  // Redireciona via Vue Router
  router.push('/loja')
}
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px 20px;
  background: #fff7fb;
  color: #2d1b2d;
}

.login-card {
  width: min(920px, 100%);
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  background: #fff;
  border-radius: 28px;
  box-shadow: 0 18px 45px rgba(181, 63, 120, 0.12);
  overflow: hidden;
}

.login-copy {
  padding: 56px 42px;
  background: linear-gradient(135deg, #ffd6e8, #ffedf7 58%, #fff);
}

.eyebrow {
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: .12em;
  font-size: .72rem;
  font-weight: 700;
  color: #d94c86;
}

.login-copy h1 {
  margin: 0 0 12px;
  font-size: clamp(2rem, 3vw, 3rem);
}

.login-copy p:last-child {
  margin: 0;
  line-height: 1.7;
  color: #5d435c;
}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 56px 42px;
}

.login-form label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 600;
  color: #3c293b;
}

.login-form input {
  border: 1.5px solid #f3d6e6;
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 1rem;
  background: #fff9fc;
  transition: border-color .2s ease, box-shadow .2s ease;
}

.login-form input:focus {
  outline: none;
  border-color: #ef7aa9;
  box-shadow: 0 0 0 4px rgba(239, 122, 169, .12);
}

.erro-mensagem {
  margin: 0;
  color: #c62828;
  font-size: .9rem;
  font-weight: 600;
}

.login-form button {
  border: none;
  border-radius: 12px;
  padding: 16px;
  background: linear-gradient(135deg, #ef6aa0, #ff9bbd);
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform .2s ease, box-shadow .2s ease;
}

.login-form button:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 24px rgba(239, 106, 160, .25);
}

@media (max-width: 760px) {
  .login-card { grid-template-columns: 1fr; }
  .login-copy, .login-form { padding: 32px 24px; }
}
</style>