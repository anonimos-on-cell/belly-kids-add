<template>
  <main class="pagina-informativa">
    <section class="conteudo">
      <p class="eyebrow">Sobre a BellyKids</p>
      <h1>Cuidado em cada escolha</h1>
      <p>
        A BellyKids reúne produtos confortáveis, delicados e práticos para acompanhar
        os primeiros anos do seu bebê e tornar a rotina das famílias mais leve.
      </p>
      <p>
        Selecionamos cada item pensando em segurança, aconchego e qualidade para os
        momentos que realmente importam.
      </p>
    </section>
  </main>
</template>

<style scoped>
.pagina-informativa {
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px 80px;
}

.conteudo {
  max-width: 760px;
  margin: 0 auto;
  padding: 40px 32px;
  border-radius: 24px;
  background: linear-gradient(135deg, #ffd7e9, #fff4fa);
  color: #6d5371;
  line-height: 1.7;
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
  margin: 0 0 18px;
  color: #2d1b2d;
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: 1.1;
}

.conteudo p:not(.eyebrow) {
  margin: 0 0 14px;
}

.conteudo p:last-child {
  margin-bottom: 0;
}

@media (max-width: 520px) {
  .conteudo {
    padding: 28px 20px;
  }
}
</style>
