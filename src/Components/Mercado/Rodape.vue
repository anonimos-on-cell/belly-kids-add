<template>
  <footer class="rodape">
    <div class="conteudo-rodape">
      <!-- Bloco 1: Marca e Apresentação -->
      <div class="bloco-marca">
        <h2 class="nome-loja">🍼 BellyKids</h2>
        <p class="slogan">Cuidando com amor do sorriso do seu pequeno</p>
        <p class="faixa-etaria">Produtos para bebês de 0 a 4 anos</p>
      </div>

      <!-- Bloco 2: O que Vendemos -->
      <div class="bloco-links">
        <h3>O que oferecemos</h3>
        <ul>
          <li>🎁 Kits de Maternidade</li>
          <li>🍼 Chupetas</li>
          <li>🥛 Mamadeiras</li>
          <li>🚶 Passadeiras / Andadores</li>
        </ul>
      </div>

      <!-- Bloco 3: Contato e Localização -->
      <div class="bloco-contato">
        <h3>Fale Conosco</h3>
        <p class="item-contato">
          📧 <strong>E-mail:</strong> contato@bellykids.com.br
        </p>
        <p class="item-contato">
          📱 <strong>Telefone/WhatsApp:</strong> (75) 98343-1855 | 98137-3355
        </p>
        <p class="item-contato">
          📍 <strong>Local:</strong> Feira de santana— Bahia
        </p>
      </div>

      <!-- Bloco 4: Segurança e Direitos -->
      <div class="bloco-seguranca">
        <h3>Segurança & Confiança</h3>
        <p><a href="./ProdutosCertificados.vue">✅ Produtos certificado</a></p>
        <p><a href="./PagamentoSeguro.vue">✅ Pagamento seguro</a></p>
        <p><a href="./CompraProtegida.vue">✅ 100% protegido</a></p>
      </div>
    </div>

    <!-- Linha Inferior -->
    <div class="faixa-final">
      <p class="direitos">
        © 2026 BellyKids — Todos os direitos reservados
      </p>
      <p class="agradecimento">
        Feito com 💛 para as famílias e os pequenos
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Rodape'
}
</script>

<style scoped>
.rodape {
  background: linear-gradient(180deg, #fff3b0, #ffe8a8);
  padding: 40px 20px 20px;
  margin-top: 40px;
  border-radius: 24px 24px 0 0;
  box-shadow: 0 -4px 12px rgba(0,0,0,0.05);
  color: #4a3f35;
  font-family: 'Segoe UI', Arial, sans-serif;
}

.conteudo-rodape {
  max-width: 620px;
  margin: 0 auto;
  display: grid;
  gap: 25px;
}

.bloco-marca {
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px dashed rgba(74, 63, 53, 0.15);
}

.nome-loja {
  margin: 0;
  font-size: 1.8rem;
  color: #e88eaa;
  text-shadow: 2px 2px 0 rgba(168, 213, 255, 0.3);
}

.slogan {
  margin: 6px 0;
  font-style: italic;
  color: #6b5c4f;
}

.faixa-etaria {
  font-size: 0.95rem;
  color: #7a6f60;
}

.bloco-links h3,
.bloco-contato h3,
.bloco-seguranca h3 {
  font-size: 1.1rem;
  margin-bottom: 12px;
  color: #5a5045;
  border-bottom: 2px solid #a8d5ff;
  display: inline-block;
  padding-bottom: 4px;
}

.bloco-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.bloco-links li {
  padding: 5px 0;
  color: #5a5045;
}

.item-contato {
  padding: 5px 0;
  line-height: 1.6;
}

.bloco-seguranca p {
  padding: 4px 0;
}

.faixa-final {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px dashed rgba(74, 63, 53, 0.15);
  text-align: center;
}

.direitos {
  font-weight: 500;
  margin-bottom: 5px;
  color: #5a5045;
}

.agradecimento {
  font-size: 0.9rem;
  color: #7a6f60;
}

/* Responsividade para celular */
@media (min-width: 550px) {
  .conteudo-rodape {
    grid-template-columns: 1fr 1fr;
  }
  .bloco-marca {
    grid-column: 1 / -1;
  }
}
</style>