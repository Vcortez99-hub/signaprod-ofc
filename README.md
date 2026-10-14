# Site da SignaProd

Site institucional estático publicado pelo GitHub Pages em **www.signaprod.com.br** (arquivo `CNAME`).
Mesma identidade da plataforma de atendimento: azul-maré, turquesa de sinal, um ponto de coral e as bandeiras do Código Internacional de Sinais.

## Páginas

| Página | Arquivo |
|---|---|
| Início: serviços, tábua de prazos, Signa, planos, como trabalhamos, para quem, quem faz, dúvidas | `index.html` |
| Atendimento com IA no WhatsApp e no Instagram (planos de R$ 700, R$ 1.500 e R$ 2.500) | `servicos/atendimento-ia.html` |
| IA com os seus documentos | `servicos/ia-com-documentos.html` |
| Automação de processos | `servicos/automacao-de-processos.html` |
| Sistemas sob medida | `servicos/sistemas-sob-medida.html` |
| Nuvem AWS | `servicos/nuvem-aws.html` |
| Treinamento IA na prática | `servicos/treinamento-ia.html` |
| Página de erro | `404.html` |

Os endereços antigos (`agentes-ia`, `rag-personalizado`, `otimizacao-de-processos`, `desenvolvimento-mvp`, `transformacao-digital`, `alocacao-profissionais`) redirecionam para as páginas novas, para não quebrar links já compartilhados.

## Trocar o endereço da plataforma ou o WhatsApp

Tudo em `assets/site.js`, nas duas primeiras linhas:

```js
const APP_URL = 'https://app.signaprod.com.br';   // onde ficam o cadastro, o login, os termos e a privacidade
const WHATSAPP = '551331501569';                  // WhatsApp da Signa, a IA de pré-venda
```

Os links do HTML já vêm com esses valores, e o script atualiza todos ao carregar a página.

## Preços e prazos

Preços e prazos aparecem na home (tábua de prazos, lista de serviços e planos) e em cada página de serviço. Se mudarem, atualize também a plataforma (`src/plans.js`) e o kit da Signa, para o site, o painel e a IA falarem a mesma coisa.

## Publicar

Merge na `main` e o GitHub Pages publica sozinho. Para testar antes, abra `index.html` no navegador ou rode `python3 -m http.server` nesta pasta.
