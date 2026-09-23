<script setup lang="ts">
const {createApp} = Vue
createApp({
  setup(){
    const filtro = Vue.ref('todos')
    const abrindo = Vue.ref(false)
    const aviso = Vue.ref(false)
    const carrinho = Vue.ref([])

    const produtos = [
      {id:1,nome:
        'Conjunto Camisa+Bermuda Menino',
        desc:'Tecido macio, estampas',
        tam:'RN/1-2a/3-4a',
        valor:59.90,
        cat:'masculino',
        categoria:'Masculino',
        img:'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400'
      },

      {id:2,nome:'Macacão Bebê Menino Algodão',desc:'Confortável, botões na frente',tam:'RN/6m/12m',valor:45.00,cat:'masculino',categoria:'Masculino',img:'https://images.unsplash.com/photo-1503948383309-5060c0432d05?w=400'},
      {id:3,nome:'Vestido Floral Menina',desc:'Leve e elegante',tam:'RN/1-2a/3-4a',valor:68.50,cat:'feminino',categoria:'Feminino',img:'https://images.unsplash.com/photo-1519238180329-8d27728a2b76?w=400'},
      {id:4,nome:'Conjunto Blusa+Shorts Menina',desc:'Tecido respirável',tam:'6m/18m/3-4a',valor:52.00,cat:'feminino',categoria:'Feminino',img:'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400'},
      {id:5,nome:'Vestido Gestante Amamentação',desc:'Prático e confortável',tam:'M/G/GG',valor:89.90,cat:'maternidade',categoria:'Maternidade',img:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400'},
      {id:6,nome:'Kit Fraldas de Pano (5un)',desc:'Estampas sortidas',tam:'Único',valor:38.00,cat:'acessorios',categoria:'Acessórios',img:'https://images.unsplash.com/photo-1545034802-8e16d13aebc8?w=400'},
      {id:7,nome:'Chupeta Silicone Ortopédica',desc:'Aprovada por pediatras',tam:'0-6m/6m+',valor:22.00,cat:'acessorios',categoria:'Acessórios',img:'https://images.unsplash.com/photo-1596870230751-ebdfcec623ac?w=400'},
      {id:8,nome:'Mamadeira Anticólica',desc:'Bico de silicone',tam:'150ml/240ml',valor:28.50,cat:'acessorios',categoria:'Acessórios',img:'https://images.unsplash.com/photo-1585909606638-995e13321fa0?w=400'}
    ]

    const lista = Vue.computed(()=>filtro.value==='todos'?produtos:produtos.filter(p=>p.cat===filtro.value))
    const totalItens = Vue.computed(()=>carrinho.value.reduce((s,i)=>s+i.qtd,0))
    const totalGeral = Vue.computed(()=>carrinho.value.reduce((s,i)=>s+i.valor*i.qtd,0))

    const adicionar = (p) => {
      const i = carrinho.value.findIndex(x=>x.id===p.id)
      i!==-1 ? carrinho.value[i].qtd++ : carrinho.value.push({...p,qtd:1})
      aviso.value = true
      setTimeout(()=>aviso.value=false,2000)
    }
    const mudar = (i,delta) => {
      carrinho.value[i].qtd += delta
      if(carrinho.value[i].qtd<=0) carrinho.value.splice(i,1)
    }
    const finalizar = () => {
      if(!carrinho.value.length) return alert('Carrinho vazio!')
      alert(`Compra finalizada! 🎉\nTotal: R$ ${totalGeral.value.toFixed(2)}\nObrigado por escolher a Encanto Infantil!`)
      carrinho.value = []
      abrindo.value = false
    }
    return {filtro,lista,carrinho,abrindo,aviso,totalItens,totalGeral,adicionar,mudar,finalizar}
  }
}).mount('#app')



</script>


<template>
<div id="app">
<header>
  <div class="nav">
    <div class="logo">👶 BELLY KIDS</div>
    <button class="carrinho-btn" @click="abrindo=true">
      🛒 Carrinho <span class="badge">{{totalItens}}</span>
    </button>
  </div>
</header>




<section class="hero">
  <h1>Roupas e Carinho para os Pequenos 💖</h1>
  <p>Do Recém-Nascido aos 4 anos | Masculino, Feminino, Maternidade e Acessórios</p>
</section>

<div class="filtros">
  <button class="filtro-btn" :class="{ativo:filtro==='todos'}" @click="filtro='todos'">Todos</button>
  <button class="filtro-btn" :class="{ativo:filtro==='masculino'}" @click="filtro='masculino'">👦 Masculino</button>
  <button class="filtro-btn" :class="{ativo:filtro==='feminino'}" @click="filtro='feminino'">👧 Feminino</button>
  <button class="filtro-btn" :class="{ativo:filtro==='maternidade'}" @click="filtro='maternidade'">🤰 Maternidade</button>
  <button class="filtro-btn" :class="{ativo:filtro==='acessorios'}" @click="filtro='acessorios'">🧸 Acessórios</button>
</div>

<div class="grade">
  <div class="card" v-for="p in lista" :key="p.id">
    <img :src="p.img" :alt="p.nome">
    <div class="card-body">
      <span class="tag" :class="`tag-${p.cat}`">{{p.categoria}}</span>
      <h3>{{p.nome}}</h3>
      <p class="desc">{{p.desc}}</p>
      <p class="tam">Tamanho: {{p.tam}}</p>
      <p class="preco">R$ {{p.valor.toFixed(2)}}</p>
      <button class="btn-add" @click="adicionar(p)">🛍️ Adicionar</button>
    </div>
  </div>
</div>

<div class="overlay" :class="{ativo:abrindo}" @click="abrindo=false"></div>
<div class="painel" :class="{aberto:abrindo}">
  <button class="fechar" @click="abrindo=false">✕</button>
  <h2>🛒 Meu Carrinho</h2>
  <p v-if="carrinho.length===0" style="margin-top:2rem;text-align:center;color:#777">Seu carrinho está vazio 😊</p>
  <div v-else>
    <div class="item" v-for="(item,i) in carrinho" :key="i">
      <strong>{{item.nome}}</strong>
      <p style="color:var(--rosa);font-weight:bold">R$ {{item.valor.toFixed(2)}}</p>
      <div class="qtd">
        <button @click="mudar(i,-1)">−</button>
        <span>{{item.qtd}}</span>
        <button @click="mudar(i,1)">+</button>
      </div>
    </div>
    <div class="total">Total: R$ {{totalGeral.toFixed(2)}}</div>
    <button class="btn-finalizar" @click="finalizar">✅ Finalizar Compra</button>
  </div>
</div>

<div class="aviso" :class="{mostrar:aviso}">✅ Adicionado com sucesso!</div>
</template>


<style scoped>
</style>