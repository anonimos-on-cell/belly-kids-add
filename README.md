# BallyKids

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```


=============================================
   ENCANTO INFANTIL - Loja Virtual Vue 3
=============================================

📂 ESTRUTURA DO PROJETO:
encanto-infantil/
├── public/
│   └── index.html          → Arquivo base HTML
├── src/
│   ├── App.vue             → Componente principal
│   ├── main.js             → Inicialização do Vue
│   ├── components/         → Componentes separados
│   │   ├── Cabecalho.vue
│   │   ├── Filtros.vue
│   │   ├── ProdutoCard.vue
│   │   ├── Carrinho.vue
│   │   └── Rodape.vue
│   ├── assets/
│   │   └── estilos.css     → Estilos globais
│   └── dados/
│       └── produtos.js     → Lista de produtos
├── package.json            → Configuração do projeto
├── vite.config.js          → Configuração do Vite
└── LEIA-ME.txt             → Este arquivo

🚀 COMO EXECUTAR:

1. Abra o Prompt de Comando/Terminal
2. Entre na pasta do projeto:
   cd encanto-infantil

3. Instale as dependências:
   npm install

4. Rode o servidor de desenvolvimento:
   npm run dev

5. Abra no navegador o endereço mostrado (ex: http://localhost:3000)

📦 PARA GERAR A VERSÃO FINAL:
   npm run build
→ Os arquivos prontos para hospedar vão para a pasta "dist"

✨ FUNCIONALIDADES:
- Código organizado em componentes Vue separados
- Filtros por categoria
- Carrinho de compras completo
- Layout responsivo
- Fácil de editar e expandir
- Produtos: RN a 4 anos, masculino, feminino, maternidade, acessórios

🔧 PERSONALIZAÇÃO:
- Adicionar produtos → edite: src/dados/produtos.js
- Mudar cores → edite: src/assets/estilos.css (--rosa, --roxo, etc)
- Mudar texto/contato → edite: src/components/Rodape.vue
- Mudar imagens → substitua as URLs em produtos.js

📍 Santo Antônio de Jesus - BA
📅 Atualizado: 21/09/2026





<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Encanto Infantil - Roupas para Bebês</title>
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif}
:root{--rosa:#ff6b9d;--roxo:#a855f7;--amarelo:#ffd166;--verde:#06d6a0;--escuro:#2d3748;--claro:#fef7fc;--sombra:0 4px 12px rgba(0,0,0,0.08)}
body{background:var(--claro);color:var(--escuro);line-height:1.6}
header{background:linear-gradient(135deg,var(--rosa),var(--roxo));color:white;padding:1rem 2rem;position:sticky;top:0;z-index:100}
.nav{max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}
.logo{font-size:1.8rem;font-weight:bold}
.carrinho-btn{background:rgba(255,255,255,0.2);border:none;color:white;padding:.6rem 1.2rem;border-radius:50px;cursor:pointer;display:flex;gap:.5rem}
.carrinho-btn:hover{background:rgba(255,255,255,0.4)}
.badge{background:var(--amarelo);color:var(--escuro);border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:.8rem}
.hero{background:linear-gradient(rgba(255,255,255,0.85),rgba(255,255,255,0.85)),url('https://images.unsplash.com/photo-1519238263380-90c412d58efc?w=1200');background-size:cover;padding:4rem 2rem;text-align:center}
.hero h1{font-size:2.5rem;margin-bottom:1rem;background:linear-gradient(90deg,var(--rosa),var(--roxo));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero p{font-size:1.2rem;max-width:700px;margin:0 auto;color:#4a5568}
.filtros{max-width:1200px;margin:2rem auto;display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;padding:0 2rem}
.filtro-btn{padding:.7rem 1.5rem;border:none;border-radius:50px;background:white;box-shadow:var(--sombra);cursor:pointer}
.filtro-btn.ativo{background:linear-gradient(135deg,var(--rosa),var(--roxo));color:white}
.grade{max-width:1200px;margin:0 auto 4rem;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:2rem;padding:0 2rem}
.card{background:white;border-radius:16px;overflow:hidden;box-shadow:var(--sombra);transition:transform .3s}
.card:hover{transform:translateY(-5px)}
.card img{width:100%;height:220px;object-fit:cover}
.card-body{padding:1.2rem}
.tag{display:inline-block;font-size:.75rem;padding:.25rem .7rem;border-radius:50px;margin-bottom:.6rem;font-weight:600}
.tag-masculino{background:#e6f0fa;color:#2b6cb0}
.tag-feminino{background:#fce7f3;color:#be185d}
.tag-maternidade{background:#fef3c7;color:#b45309}
.tag-acessorios{background:#d1fae5;color:#047857}
.card h3{font-size:1.1rem;font-weight:600;margin-bottom:.5rem}
.desc{font-size:.85rem;color:#718096;margin-bottom:.5rem}
.tam{font-size:.8rem;color:#a0aec0;margin-bottom:.5rem}
.preco{font-size:1.4rem;font-weight:bold;color:var(--rosa);margin-bottom:1rem}
.btn-add{width:100%;padding:.8rem;border:none;border-radius:10px;background:linear-gradient(135deg,var(--rosa),var(--roxo));color:white;font-weight:bold;cursor:pointer}
.overlay{position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:199;display:none}
.overlay.ativo{display:block}
.painel{position:fixed;top:0;right:0;width:100%;max-width:420px;height:100vh;background:white;box-shadow:-5px 0 30px rgba(0,0,0,0.15);padding:2rem;overflow-y:auto;transform:translateX(100%);transition:transform .3s;z-index:200}
.painel.aberto{transform:translateX(0)}
.fechar{position:absolute;top:1rem;right:1rem;background:none;border:none;font-size:1.5rem;cursor:pointer}
.item{padding:1rem 0;border-bottom:1px solid #eee}
.qtd{display:flex;gap:.5rem;align-items:center;margin:.5rem 0}
.qtd button{width:28px;height:28px;border-radius:50%;border:none;background:#eee;cursor:pointer}
.total{margin-top:1rem;font-size:1.3rem;font-weight:bold;text-align:right}
.btn-finalizar{width:100%;padding:1rem;border:none;border-radius:10px;background:var(--verde);color:white;font-weight:bold;cursor:pointer;margin-top:1rem}
.aviso{position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(100px);background:var(--verde);color:white;padding:1rem 2rem;border-radius:10px;font-weight:bold;transition:transform .3s;z-index:300}
.aviso.mostrar{transform:translateX(-50%) translateY(0)}
footer{background:var(--escuro);color:white;text-align:center;padding:2rem;margin-top:2rem}
.copy{margin-top:1rem;font-size:.85rem;color:#aaa}
</style>
</head>
<body>
<div id="app">
<header>
  <div class="nav">
    <div class="logo">👶 Encanto Infantil</div>
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

<footer>
  <h3>Encanto Infantil 👶</h3>
  <p>Roupas do RN aos 4 anos | Maternidade e Acessórios</p>
  <p>📞 (75) 9XXXX-XXXX | 📍 Santo Antônio de Jesus - BA</p>
  <p class="copy">© 2026 Todos os direitos reservados</p>
</footer>
</div>

<script>
const {createApp} = Vue
createApp({
  setup(){
    const filtro = Vue.ref('todos')
    const abrindo = Vue.ref(false)
    const aviso = Vue.ref(false)
    const carrinho = Vue.ref([])

    const produtos = [
      {id:1,nome:'Conjunto Camisa+Bermuda Menino',desc:'Tecido macio, estampas',tam:'RN/1-2a/3-4a',valor:59.90,cat:'masculino',categoria:'Masculino',img:'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400'},
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
</body>
</html>


belly-kids/
├── index.html
├── App.vue
├── main.js
├── style.css
│
└── components/
    ├── Cabecalho.vue
    ├── Filtros.vue
    ├── ProdutoCard.vue
    ├── Carrinho.vue
    └── Rodape.vue


    Cabecalho.vue
│   │   ├── Filtros.vue
│   │   ├── ProdutoCard.vue
│   │   ├── Carrinho.vue
│   │   └── Rodape.vue

Componentes
Cabecalho.vue → logo e botão do carrinho.
Filtros.vue → filtros Masculino, Feminino, Maternidade e Acessórios.
ProdutoCard.vue → cartão individual de cada produto.
Carrinho.vue → carrinho lateral, quantidade, total e finalização.
Rodape.vue → informações da BELLY KIDS.
App.vue → controla os componentes e a lógica principal.
style.css → estilos de todo o projeto.
main.js → inicializa o Vue.



https://github.com/gitjosepaulo/Belly-Kids.git


…ou crie um novo repositório na linha de comando.
echo "# Belly-Kids" >> README.md 
git init 
git add README.md 
git commit -m "primeiro commit" 
git branch -M main 
git remote add origin https://github.com/gitjosepaulo/Belly-Kids.git
 git push -u origin main
…ou enviar um repositório existente a partir da linha de comando.
git remote add origin https://github.com/gitjosepaulo/Belly-Kids.git
 git branch -M main 
git push -u origin main
