<template>
  <div class="container">
    <h1>🛡️ Compra 100% Protegida</h1>
    
    <p>Queremos que sua experiência de compra seja perfeita do início ao fim. Na <strong>BellyKids</strong>, você conta com garantias completas do pedido até a entrega em sua residência.</p>

    <div class="caixa-destaque">
      <p><strong>Garantia de Satisfação e Entrega:</strong> Caso haja qualquer imprevisto com o envio do seu pedido, garantimos o reenvio sem custos adicionais ou o reembolso total do seu valor.</p>
    </div>

    <h2>Seus Direitos Garantidos</h2>
    <ul>
      <li><strong>Troca e Devolução Facilitada:</strong> Conforme o Código de Defesa do Consumidor, você tem até 7 dias após o recebimento para solicitar a devolução por arrependimento.</li>
      <li><strong>Suporte Humanizado:</strong> Nossa equipe em Feira de Santana está disponível via WhatsApp e e-mail para resolver qualquer dúvida.</li>
      <li><strong>Rastreamento Transparente:</strong> Acompanhe o status e a localização do seu pedido do momento do despacho até a entrega.</li>
    </ul>

    <router-link to="/" class="voltar">← Voltar para a Loja</router-link>
  </div>
</template>

<script setup>
// Componente de Compra Protegida
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  font-family: 'Segoe UI', Arial, sans-serif;
  color: #4a3f35;
}

h1 {
  color: #e88eaa;
  border-bottom: 3px solid #a8d5ff;
  padding-bottom: 10px;
  font-size: 2rem;
}

h2 {
  color: #5a5045;
  margin-top: 25px;
  font-size: 1.3rem;
}

p, li {
  line-height: 1.7;
  color: #6b5c4f;
}

.caixa-destaque {
  border-left: 4px solid #a8d5ff;
  background: #f0f7ff;
  padding: 15px;
  border-radius: 0 12px 12px 0;
  margin: 20px 0;
}

.voltar {
  display: inline-block;
  margin-top: 25px;
  color: #e88eaa;
  text-decoration: none;
  font-weight: bold;
}

.voltar:hover { 
  text-decoration: underline; 
}
</style>