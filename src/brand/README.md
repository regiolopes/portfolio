# Kihon — design system da marca

Tudo o que diz respeito ao logotipo mora nesta pasta. Se a marca precisar mudar,
muda aqui e todo o resto acompanha: site, favicon, Open Graph e assinatura de
e-mail saem do mesmo desenho.

```
src/brand/
├── geometry.js        o desenho: alfabeto, kanji, lockups e símbolo
├── kanji-paths.js     contornos de 基本 (gerado — não editar à mão)
├── tokens.js          cores, tipografia, URL do site, tamanhos mínimos
├── KihonLogo.jsx      a marca em React
├── KihonKanji.jsx     基 / 基本 em vetor, para uso de display
├── KihonRule.jsx      o filete de ênfase
└── emailSignature.js  o HTML da assinatura de e-mail

scripts/build-brand-assets.mjs   gera public/brand/ e os favicons
public/brand/                    SVG e PNG prontos para uso externo
```

## Regerar os arquivos

```bash
node scripts/build-brand-assets.mjs
```

Reescreve `public/brand/`, `public/favicon.svg`, `public/favicon.ico` e
`public/apple-touch-icon.png`. Os PNG precisam do Playwright; sem ele o script
escreve só os SVG e avisa.

---

## A marca

O alfabeto é **construído, não tipografado**. Nenhuma fonte participa das letras
K, I, H, O e N — elas são círculo, retângulo e diagonal, montados em
`geometry.js`. É por isso que a marca sai idêntica em qualquer máquina, o que a
versão anterior (feita com `<text>` e uma pilha de fontes que nunca carregava)
não conseguia.

Três regras governam o desenho:

| Regra | Valor | Por quê |
| --- | --- | --- |
| Espessura única | 19% da altura de caixa alta | Dá o aspecto de peça técnica, sem modulação caligráfica |
| O "O" é círculo exato | diâmetro = 102% da caixa alta | Deixa o hinomaru nascer da própria letra |
| Barra do H rebaixada | topo em 53,5% | Impede o wordmark de virar "geométrica genérica" |

As diagonais do K e do N são desenhadas para fora da caixa alta e **cortadas por
ela**. É o que produz a terminação reta; sem o corte elas sairiam em bisel.

### Variantes

| Variante | Quando usar |
| --- | --- |
| `full` | **Marca oficial.** Lockup horizontal com 基本. Padrão em todo lugar |
| `stacked` | Formatos quadrados e verticais |
| `wordmark` | Reduções abaixo de 110px, onde o kanji entope |
| `symbol` | Avatar, favicon, selo. Anel hinomaru + 基 |
| `disc` | Fundos que exigem mancha cheia |
| `monogram` | Uso restrito, onde nem o anel couber |

```jsx
import KihonLogo from '../brand/KihonLogo'

<KihonLogo variant="full" color="light" className="h-8 w-auto" />
<KihonLogo variant="symbol" className="h-10 w-10" />
<KihonLogo variant="full" accent className="h-8 w-auto" />  {/* "O" vermelho */}
```

`color` aceita `dark` (tinta sobre claro), `light` (sobre escuro) e `current`
(herda a cor do texto). `accent` liga o "O" vermelho.

### O "O" vermelho é variante, não a marca

A marca oficial é monocromática. O hinomaru entra onde a cor trabalha a favor —
campanha, peça grande — e sai onde a cor não sobrevive: bordado, carimbo,
impressão em uma cor. O símbolo (`variant="symbol"`) é a exceção: ali o anel é
sempre vermelho, porque ele existe justamente para carregar a cor da marca em
espaços pequenos.

### Tamanhos mínimos

| Peça | Mínimo | Abaixo disso |
| --- | --- | --- |
| Lockup horizontal | 110 px de largura | Troque pelo `wordmark` |
| Wordmark | 72 px | Troque pelo `symbol` |
| Símbolo | 16 px | A 16px o favicon perde o 基 e fica só o anel |

### Área de respiro

Uma espessura de traço (19% da caixa alta) em volta de toda a marca. Nada entra
nessa faixa: nem texto, nem borda, nem outra marca.

### O que não fazer

- Não redigite "KIHON" em nenhuma fonte. Use o componente ou os SVG.
- Não mude a entreletra, a espessura do traço nem a posição da barra do H.
- Não aplique sombra, contorno, gradiente ou inclinação.
- Não troque o vermelho. É `#E53935`, e `#A81018` só para texto pequeno sobre
  claro, onde o primeiro não passa em contraste.
- Não use o kanji solto como se fosse o símbolo: o símbolo é o anel com o 基.

---

## O sistema visual do site

A marca é geométrica estrita. O site precisa falar a mesma língua, senão o
logotipo parece colado por cima de um projeto de outra pessoa.

### Tipografia

| Papel | Família | Por quê |
| --- | --- | --- |
| Display | **Jost** | Revival de Futura: mesmo esqueleto da marca — bojo circular, terminação reta, construção de compasso |
| Corpo | IBM Plex Sans | Geométrica em texto corrido cansa a leitura; o Plex sustenta o tom técnico |
| Rótulos e números | IBM Plex Mono | Eyebrows, métricas, legendas |

**Use sempre a escala `text-display-*` nos títulos**, nunca `text-3xl` e afins.
A Jost tem ascendente e descendente longos (1,02 e 0,25 do corpo, medidos no
navegador) e os tamanhos grandes do Tailwind vêm com `line-height: 1`, o que
encavala as linhas. Pior: como esses utilitários aparecem com prefixo de
breakpoint (`lg:text-6xl`), eles venciam qualquer `leading-` sem prefixo — o
bug ficava invisível até alguém abrir o site num monitor grande.

Na escala `display`, entrelinha e entreletra viajam junto com o tamanho:

```
text-display-xs   1.5rem    text-display-lg   3rem
text-display-sm   1.875rem  text-display-xl   3.75rem
text-display-md   2.25rem   text-display-2xl  4.5rem
text-display-ml   2.75rem
```

Não adicione `leading-` nem `tracking-` por cima delas.

### Formas

A marca só conhece **retângulo e círculo**. Nada de retângulo-arredondado no
meio do caminho.

- Tudo retangular usa `rounded-kihon` (3px): botões, campos, cartões, painéis.
- `rounded-full` fica para o que é genuinamente circular: pontos, avatares,
  selos numerados, orbes de desfoque, botões de ícone.
- **Sem halo e sem salto.** O botão primário não tem sombra colorida, e nada
  sobe no hover. Estado se comunica por cor de fundo e de borda. Uma marca de
  aresta dura não combina com brilho difuso.

O portfólio legado em `/regiolopes` não segue nada disso — mantém a escala
padrão do Tailwind e a paleta azul antiga. É intencional: é outro projeto
dentro do mesmo repositório.

---

## Kanji

Os contornos de 基本 vêm do **Noto Sans JP Bold**, sob SIL Open Font License 1.1.
A OFL permite usar os glifos em logotipo, e a marca resultante não fica vinculada
à licença.

Para kanji de display no site — marca d'água, bloco grande — use
`<KihonKanji />`, que desenha a partir do mesmo contorno da marca. Para kanji no
meio de uma frase, mantenha texto de verdade: dá para selecionar e ler em leitor
de tela.

Se um dia a Kihon quiser independência total da fonte, o caminho é redesenhar os
dois kanji na mesma geometria do wordmark. Até lá, a licença cobre o uso.

---

## Assinatura de e-mail

O gerador está em `/assinatura` (fora do índice de busca). Ele monta o HTML em
`emailSignature.js` e copia pronto para colar no Gmail, Outlook ou Apple Mail.

Duas restrições mandam no formato:

- **Cliente de e-mail não é navegador.** Só tabela, atributo e estilo inline.
  Nada de flexbox, grid, classe, variável CSS ou SVG.
- **A marca vai como PNG por URL absoluta** (`kihon.dev.br/brand/kihon-email.png`),
  porque imagem em base64 é bloqueada ou descartada por boa parte dos clientes.
  Ou seja: o site precisa estar no ar para a assinatura aparecer inteira para
  quem recebe.

O PNG tem o dobro do tamanho de exibição (494×88 para exibir 247×44), senão
serrilha em tela retina.

---

## Arquivos em `public/brand/`

| Arquivo | Uso |
| --- | --- |
| `kihon-horizontal.svg` · `-light` | Marca oficial, tinta e papel |
| `kihon-horizontal-hinomaru.svg` · `-light` | Variante com o "O" vermelho |
| `kihon-stacked.svg` · `-light` | Empilhada |
| `kihon-wordmark.svg` · `-light` · `-hinomaru` | Sem kanji |
| `kihon-symbol.svg` · `-light` · `-mono` | Anel hinomaru + 基 |
| `kihon-symbol-disc.svg` | Disco sólido |
| `kihon-monograma.svg` | K isolado |
| `kihon-symbol-{32,64,128,256,512}.png` | Avatar e perfis sociais |
| `kihon-email.png` · `-light` | Assinatura de e-mail |
| `og-image.png` | Open Graph e Twitter, 1200×630 |

Favicons ficam em `public/`: `favicon.svg`, `favicon.ico` (16/32/48) e
`apple-touch-icon.png` (180, com fundo papel, porque o iOS não respeita
transparência).
