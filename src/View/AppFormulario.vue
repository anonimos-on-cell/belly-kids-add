<template>
  <main class="login-page">
    <section class="login-card">
      <!-- Seção Informativa / Boas-vindas -->
      <div class="login-copy">
        <p class="eyebrow">Bem-vindo(a)</p>
        <h1>Entre na sua conta</h1>
        <p>Descubra produtos de beleza com qualidade, brilho e cuidado para cada momento.</p>
      </div>

      <!-- Formulário de Autenticação -->
      <form class="login-form" @submit.prevent="handleSubmit">
        
        <!-- Campo: Nome de Usuário -->
        <label>
          <span>Usuário</span>
          <input
            v-model="usuario"
            type="text"
            placeholder="Digite seu nome de usuário"
            autocomplete="username"
          />
        </label>

        <!-- Campo: E-mail -->
        <label>
          <span>E-mail</span>
          <input
            v-model="email"
            type="email"
            placeholder="seu@gmail.com"
            autocomplete="email"
          />
        </label>

        <!-- Campo: Senha -->
        <label>
          <span>Senha</span>
          <input
            v-model="senha"
            type="password"
            placeholder="Digite sua senha"
            autocomplete="current-password"
          />
        </label>

        <!-- Campo: Código de Verificação (2FA / PIN) -->
        <label>
          <span>Código de Verificação (6 dígitos)</span>
          <input
            v-model="codigoVerificacao"
            type="text"
            maxlength="6"
            placeholder="123456"
            autocomplete="one-time-code"
          />
        </label>

        <!-- Mensagem de erro dinâmica -->
        <p v-if="erroMensagem" class="erro-mensagem">
          {{ erroMensagem }}
        </p>

        <!-- Botão de submissão -->
        <button type="submit">Entrar</button>
      </form>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Instância do Vue Router para navegação programática
const router = useRouter()

// --- ESTADOS DOS CAMPOS DO FORMULÁRIO ---
const usuario = ref('')
const email = ref('')
const senha = ref('')
const codigoVerificacao = ref('')
const erroMensagem = ref('')

/**
 * Função de validação e processamento do formulário de login.
 */
const handleSubmit = () => {
  // Limpa mensagens de erros anteriores
  erroMensagem.value = ''

  // 1. Tratamento e higienização dos valores inseridos
  const usuarioValor = usuario.value.trim()
  const emailValor = email.value.trim()
  const senhaValor = senha.value
  const codigoValor = codigoVerificacao.value.trim()

  // 2. Validação: Todos os campos são obrigatórios
  if (!usuarioValor || !emailValor || !senhaValor || !codigoValor) {
    erroMensagem.value = 'Por favor, preencha todos os campos do formulário.'
    return
  }

  // 3. Validação: Tamanho do nome de usuário
  if (usuarioValor.length < 3) {
    erroMensagem.value = 'O nome de usuário deve conter no mínimo 3 caracteres.'
    return
  }

  // 4. Validação: Formato de e-mail (aceita qualquer e-mail válido)
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!regexEmail.test(emailValor)) {
    erroMensagem.value = 'Por favor, insira um endereço de e-mail válido.'
    return
  }

  // 5. Validação: Requisitos de segurança para a senha
  if (senhaValor.length < 6) {
    erroMensagem.value = 'A senha precisa ter no mínimo 6 caracteres.'
    return
  }

  // 6. Validação: Código de verificação (deve conter exatamente 6 números)
  const regexCodigo = /^\d{6}$/
  if (!regexCodigo.test(codigoValor)) {
    erroMensagem.value = 'O código de verificação deve conter exatamente 6 dígitos numéricos.'
    return
  }

  /*
   * 7. REDIRECIONAMENTO E ALTERAÇÃO DA URL
   * Após a validação bem-sucedida, o Vue Router é utilizado para alterar a URL
   * para '/components/dashboard' (ou a rota desejada dentro da sua pasta de componentes).
   * 
   * Certifique-se de que essa rota esteja devidamente registrada no seu arquivo router/index.js:
   * 
   * Exemplo de configuração de rota (router/index.js):
   * {
   *   path: '/components/dashboard',
   *   name: 'Dashboard',
   *   component: () => import('../components/DashboardComponent.vue')
   * }
   */
  router.push('/components/dashboard')
}


/*
Mudança de URL para a pasta components:

Ao finalizar o fluxo de validação sem erros, a função executa router.push('/components/dashboard').

Configuração do Router (router/index.js): Para carregar o componente armazenado na pasta components quando a URL for acessada, configure as rotas do projeto da seguinte forma:

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/AppFormulario.vue')
  },
  {
    // A URL mudará para chamadas na rota /components/dashboard
    path: '/components/dashboard',
    name: 'Dashboard',
    // Mapeia diretamente o arquivo localizado dentro da pasta src/components/
    component: () => import('../components/DashboardComponent.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

*/





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
  gap: 16px;
  padding: 40px 42px;
}

.login-form label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  color: #3c293b;
}

.login-form input {
  border: 1.5px solid #f3d6e6;
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 0.95rem;
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
  font-size: .85rem;
  font-weight: 600;
}

.login-form button {
  border: none;
  border-radius: 12px;
  padding: 14px;
  background: linear-gradient(135deg, #ef6aa0, #ff9bbd);
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform .2s ease, box-shadow .2s ease;
  margin-top: 8px;
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