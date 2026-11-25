/**
 * Kihon — tokens da marca.
 *
 * Espelho em JS do que esta em tailwind.config.js, para o que nao passa pelo
 * Tailwind: SVG gerado, favicon, assinatura de e-mail, meta tags.
 * Mudou aqui, muda la — e vice-versa.
 */

export const COLORS = {
  // Vermelho hinomaru — a cor da marca
  red: '#E53935',
  redInk: '#A81018', // vermelho profundo: texto pequeno sobre claro (AA)
  redTint: '#FBEAE8',

  // Tinta sumi
  ink: '#17130F',
  inkSoft: '#26201A',
  black: '#0B0907',

  // Washi (papel)
  paper: '#FAF7F1',
  surface: '#F3ECE1',
  line: '#E7DFD3',

  // Texto
  muted: '#6E6459',
  faint: '#9A9082',
  chalk: '#CFC7BA',

  white: '#FFFFFF',
}

export const FONTS = {
  // Display — Jost, um revival de Futura. Mesma construcao da marca: bojo
  // circular, terminacao reta, esqueleto de compasso.
  display: '"Jost", "IBM Plex Sans", system-ui, sans-serif',
  // Corpo — Plex Sans. Geometrica em texto corrido cansa a leitura, e o Plex
  // sustenta o tom tecnico do site.
  sans: '"IBM Plex Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  mono: '"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
  // Pilha segura para cliente de e-mail: nenhuma webfont carrega la dentro
  email: 'Helvetica Neue, Helvetica, Arial, sans-serif',
}

/**
 * A marca so conhece duas formas: retangulo e circulo. Nada de
 * retangulo-arredondado no meio do caminho.
 *
 * Tudo que e retangular no site Kihon usa RADIUS.shape; `rounded-full` fica
 * reservado ao que e genuinamente circular (pontos, avatares, selos
 * numerados, orbes de desfoque). O portfolio legado /regiolopes mantem a
 * escala padrao do Tailwind e nao segue esta regra.
 */
export const RADIUS = {
  shape: '3px',
  circle: '9999px',
}

/** Endereco publico do site — usado nas URLs absolutas da assinatura de e-mail. */
export const SITE_URL = 'https://kihon.dev.br'

/** Dados de contato da empresa. */
export const COMPANY = {
  name: 'Kihon',
  tagline: 'O básico bem feito.',
  site: 'kihon.dev.br',
  city: 'Fortaleza, CE',
}

/**
 * Area de respiro minima ao redor da marca, em multiplos da espessura do traco
 * (STROKE em geometry.js). Nada entra nessa faixa.
 */
export const CLEAR_SPACE_UNITS = 1

/** Largura minima de uso, em pixels. */
export const MIN_WIDTH = {
  horizontal: 110, // abaixo disso o kanji entope: use o wordmark
  wordmark: 72,
  symbol: 16,
}
