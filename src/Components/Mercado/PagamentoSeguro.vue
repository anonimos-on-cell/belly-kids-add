<template>
  <div class="container">
    <h1>💳 Pagamento Seguro</h1>
    
    <p>Comprar na <strong>BellyKids</strong> é fácil, prático e totalmente seguro. Utilizamos intermediadores e gateways de pagamento reconhecidos no mercado para garantir a proteção absoluta de todas as suas transações financeiras.</p>

    <h2>Formas de Pagamento Aceitas</h2>
    <div class="card-pagamento">
      <ul>
        <li><strong>Pix:</strong> Confirmação imediata e ambiente 100% criptografado pelo seu banco.</li>
        <li><strong>Cartão de Crédito:</strong> Aceitamos as principais bandeiras com parcelamento seguro.</li>
        <li><strong>Boleto Bancário:</strong> Emissão prática e processamento seguro em até 3 dias úteis.</li>
      </ul>
    </div>

    <h2>Processamento Criptografado</h2>
    <p>Nenhum dado financeiro ou de cartão de crédito é armazenado nos servidores da BellyKids. Toda a digitação e validação de cartão ocorrem diretamente em ambiente seguro do gateway de pagamento com padrão PCI-DSS.</p>

    <router-link to="/" class="voltar">← Voltar para a Loja</router-link>
  </div>
</template>

<script setup>
// Componente de Pagamento Seguro
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

.card-pagamento {
  background: #fff3b0;
  padding: 15px 20px;
  border-radius: 12px;
  margin-top: 15px;
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