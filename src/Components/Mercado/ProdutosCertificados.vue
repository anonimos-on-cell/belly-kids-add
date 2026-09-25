<template>
  <div class="container">
    <span class="badge">Qualidade & Segurança</span>
    <h1>✅ Produtos Certificados</h1>
    
    <p>Na <strong>BellyKids</strong>, a saúde e o bem-estar do seu bebê vêm em primeiro lugar. Sabemos que os primeiros anos de vida exigem máxima proteção, e é por isso que trabalhamos exclusivamente com produtos aprovados pelos órgãos reguladores e de fiscalização.</p>

    <h2>Segurança do Bebê em Primeiro Lugar</h2>
    <p>Todos os itens disponibilizados em nossa loja — desde kits de maternidade, chupetas e mamadeiras até andadores e passadeiras — passam por rigorosos testes de qualidade e atendem aos parâmetros de conformidade do INMETRO e Anvisa.</p>

    <h2>Nossas Garantias de Qualidade:</h2>
    <ul>
      <li><strong>Livre de BPA (BPA Free):</strong> Nossas chupetas e mamadeiras não contêm Bisfenol A ou substâncias nocivas.</li>
      <li><strong>Materiais Atóxicos:</strong> Plásticos, silicones e tecidos hipoalergênicos próprios para a pele delicada dos bebês.</li>
      <li><strong>Ergonomia e Design Seguro:</strong> Produtos projetados sem cantos pontiagudos ou peças pequenas soltas.</li>
    </ul>

    <router-link to="/" class="voltar">← Voltar para a Loja</router-link>
  </div>
</template>

<script setup>
// Componente de Produtos Certificados
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

ul {
  padding-left: 20px;
}

.badge {
  display: inline-block;
  background: #ffe8a8;
  color: #4a3f35;
  padding: 6px 14px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 15px;
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