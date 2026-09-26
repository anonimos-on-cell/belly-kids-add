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
  padding: 28px 20px 14px;
  margin-top: 28px;
  border-radius: 24px 24px 0 0;
  box-shadow: 0 -4px 12px rgba(0,0,0,0.05);
  color: #4a3f35;
  font-family: 'Segoe UI', Arial, sans-serif;
}

.conteudo-rodape {
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr 1.4fr 1fr;
  gap: 24px;
  align-items: start;
}

.bloco-marca {
  text-align: left;
}

.nome-loja {
  margin: 0;
  font-size: 1.5rem;
  color: #e88eaa;
  text-shadow: 2px 2px 0 rgba(168, 213, 255, 0.3);
}

.slogan {
  margin: 5px 0;
  font-size: 0.9rem;
  font-style: italic;
  color: #6b5c4f;
}

.faixa-etaria {
  margin: 0;
  font-size: 0.85rem;
  color: #7a6f60;
}

.bloco-links h3,
.bloco-contato h3,
.bloco-seguranca h3 {
  font-size: 0.95rem;
  margin: 0 0 8px;
  color: #5a5045;
  border-bottom: 2px solid #a8d5ff;
  display: inline-block;
  padding-bottom: 3px;
}

.bloco-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.bloco-links li {
  padding: 2px 0;
  font-size: 0.85rem;
  color: #5a5045;
}

.item-contato {
  margin: 0;
  padding: 2px 0;
  font-size: 0.82rem;
  line-height: 1.4;
}

.bloco-seguranca p {
  margin: 0;
  padding: 2px 0;
  font-size: 0.85rem;
}

.faixa-final {
  max-width: 1120px;
  margin: 20px auto 0;
  padding-top: 12px;
  border-top: 1px dashed rgba(74, 63, 53, 0.15);
  text-align: center;
}

.direitos {
  font-weight: 500;
  margin: 0 0 4px;
  font-size: 0.8rem;
  color: #5a5045;
}

.agradecimento {
  margin: 0;
  font-size: 0.78rem;
  color: #7a6f60;
}

/* Responsividade para celular */
@media (max-width: 900px) {
  .conteudo-rodape {
    grid-template-columns: 1fr 1fr;
  }
  .bloco-marca {
    grid-column: 1 / -1;
    text-align: center;
  }
}

@media (max-width: 550px) {
  .conteudo-rodape {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .bloco-marca {
    grid-column: auto;
  }
}
</style>