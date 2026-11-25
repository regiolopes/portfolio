/**
 * Kihon — geometria da marca.
 *
 * Fonte unica de verdade do desenho do logotipo. Tanto o componente React
 * (src/brand/KihonLogo.jsx) quanto o gerador de arquivos estaticos
 * (scripts/build-brand-assets.mjs) montam a marca a partir daqui, para que SVG,
 * PNG, favicon e assinatura de e-mail nunca saiam do mesmo desenho.
 *
 * O alfabeto e construido, nao tipografado: nenhuma fonte participa das letras.
 * Todas as medidas sao relativas a altura de caixa alta (CAP = 100), com o topo
 * das maiusculas em y = 0 e a linha de base em y = 100.
 *
 * Ver src/brand/README.md para as regras de uso.
 */

import { KANJI } from './kanji-paths.js'

// ── Constantes de construcao ────────────────────────────────────────────────
export const CAP = 100 // altura de caixa alta
export const STROKE = 19 // espessura unica de todo traco (19% da caixa alta)
export const HBAR_TOP = 53.5 // topo da barra do H — rebaixada de proposito
export const TRACKING = 24 // entreletra padrao
export const O_DIAMETER = 102 // o "O" transborda 1 unidade da caixa, em cima e embaixo
export const KERN = { HO: -6, ON: -6 } // ajustes opticos ao redor do O

const HALF = STROKE / 2

const n = (v, p = 2) => Number(v.toFixed(p))

// ── Primitivas de forma ─────────────────────────────────────────────────────
// Cada forma e um objeto simples; quem renderiza decide a cor pelo `role`.
//   role 'ink'    → cor principal da marca
//   role 'accent' → o "O" (vermelho na variante hinomaru)
//   role 'kanji'  → 基本
//   role 'rule'   → o filete divisor do lockup horizontal

const bar = (x, y, w, h, role = 'ink') => ({
  kind: 'path',
  role,
  d: `M${n(x)} ${n(y)}H${n(x + w)}V${n(y + h)}H${n(x)}Z`,
})

const line = (x1, y1, x2, y2, role = 'ink') => ({
  kind: 'stroke',
  role,
  clip: true, // cortado pela caixa alta → terminacao reta, nunca em bisel
  d: `M${n(x1)} ${n(y1)}L${n(x2)} ${n(y2)}`,
})

const ring = (cx, cy, r, role = 'ink') => ({ kind: 'ring', role, cx: n(cx), cy: n(cy), r: n(r) })

const disc = (cx, cy, r, role = 'ink') => ({ kind: 'disc', role, cx: n(cx), cy: n(cy), r: n(r) })

const move = (shapes, dx, dy = 0) =>
  shapes.map((s) => ({
    ...s,
    transform: [`translate(${n(dx)} ${n(dy)})`, s.transform].filter(Boolean).join(' '),
  }))

// ── Alfabeto ────────────────────────────────────────────────────────────────
// Cada letra devolve { width, shapes }. As diagonais sao desenhadas para fora
// da caixa alta e cortadas por ela, o que produz o corte reto da referencia.

const GLYPHS = {
  K: () => ({
    width: 63.6,
    shapes: [
      bar(0, 0, STROKE, CAP),
      line(HALF, 52, 62.9, -14.2), // braco superior
      line(HALF, 52, 62.9, 118.2), // perna inferior
    ],
  }),

  I: () => ({ width: STROKE, shapes: [bar(0, 0, STROKE, CAP)] }),

  H: () => ({
    width: 66,
    shapes: [bar(0, 0, STROKE, CAP), bar(66 - STROKE, 0, STROKE, CAP), bar(0, HBAR_TOP, 66, STROKE)],
  }),

  O: () => ({
    width: O_DIAMETER,
    shapes: [ring(O_DIAMETER / 2, CAP / 2, (O_DIAMETER - STROKE) / 2, 'accent')],
  }),

  N: () => ({
    width: 66,
    shapes: [bar(0, 0, STROKE, CAP), bar(66 - STROKE, 0, STROKE, CAP), line(HALF, -12, 66 - HALF, 112)],
  }),
}

export function glyph(ch) {
  const build = GLYPHS[ch]
  if (!build) throw new Error(`Kihon: nao existe desenho para a letra "${ch}"`)
  return build()
}

// ── Kanji 基本 ───────────────────────────────────────────────────────────────
// `em` e o corpo do kanji; `x` e a borda esquerda da mancha; `baseline` a base.

export const kanjiInkWidth = (ch, em) => {
  const [xMin, , xMax] = KANJI[ch].bounds
  return ((xMax - xMin) * em) / 100
}

export const kanjiInkTop = (ch, em, baseline) => baseline - (KANJI[ch].bounds[3] * em) / 100
export const kanjiInkBottom = (ch, em, baseline) => baseline - (KANJI[ch].bounds[1] * em) / 100

export function kanjiShape(ch, em, x, baseline, role = 'kanji') {
  const g = KANJI[ch]
  const k = em / 100
  return {
    kind: 'path',
    role,
    d: g.path,
    transform: `translate(${n(x - g.bounds[0] * k)} ${n(baseline)}) scale(${n(k, 5)})`,
  }
}

/** 基本 lado a lado, compartilhando a mesma linha de base. */
export function kanjiPair(em, gap, x, baseline, role = 'kanji') {
  const w1 = kanjiInkWidth('基', em)
  const width = w1 + gap + kanjiInkWidth('本', em)
  return {
    width,
    shapes: [kanjiShape('基', em, x, baseline, role), kanjiShape('本', em, x + w1 + gap, baseline, role)],
  }
}

/** Linha de base que centra opticamente a mancha de 基本 em `center`. */
const kanjiBaselineForCenter = (em, center) => {
  const k = em / 100
  const top = KANJI['基'].bounds[3] // o mais alto dos dois
  const bottom = KANJI['本'].bounds[1] // o mais baixo dos dois
  return center + ((top + bottom) / 2) * k
}

// ── Wordmark ────────────────────────────────────────────────────────────────
export function wordmark({ text = 'KIHON', tracking = TRACKING } = {}) {
  const shapes = []
  let x = 0
  for (let i = 0; i < text.length; i += 1) {
    const g = glyph(text[i])
    shapes.push(...move(g.shapes, x))
    x += g.width
    if (i < text.length - 1) x += tracking + (KERN[text.slice(i, i + 2)] || 0)
  }
  return { width: n(x), height: CAP, shapes }
}

// ── Lockups ─────────────────────────────────────────────────────────────────

/** Marca oficial: wordmark + filete + 基本. */
export function lockupHorizontal({ tracking = TRACKING } = {}) {
  const wm = wordmark({ tracking })
  const em = 46
  const gap = 30
  const ruleW = 2.6
  const ruleX = wm.width + gap
  const kanjiX = ruleX + ruleW + gap
  const kanji = kanjiPair(em, em * 0.2, kanjiX, kanjiBaselineForCenter(em, CAP / 2))
  return {
    width: n(kanjiX + kanji.width),
    height: CAP,
    shapes: [...wm.shapes, bar(ruleX, 2, ruleW, CAP - 4, 'rule'), ...kanji.shapes],
  }
}

/** Empilhada: wordmark com 基本 centralizado embaixo. */
export function lockupStacked({ tracking = TRACKING } = {}) {
  const wm = wordmark({ tracking })
  const em = 30
  const gapAbove = 26
  const probe = kanjiPair(em, 26, 0, 0)
  const baseline = CAP + gapAbove + (KANJI['基'].bounds[3] * em) / 100
  const kanji = kanjiPair(em, 26, (wm.width - probe.width) / 2, baseline)
  return {
    width: wm.width,
    height: n(kanjiInkBottom('本', em, baseline)),
    shapes: [...wm.shapes, ...kanji.shapes],
  }
}

/** Wordmark isolado, sem kanji — para reducoes abaixo de 110px. */
export function lockupWordmark({ tracking = TRACKING } = {}) {
  return wordmark({ tracking })
}

// ── Simbolo ─────────────────────────────────────────────────────────────────

/** Anel hinomaru + 基 — simbolo oficial para avatar, favicon e selo. */
export function symbolRing() {
  const d = O_DIAMETER
  const em = 34
  const inkW = kanjiInkWidth('基', em)
  const inkH = ((KANJI['基'].bounds[3] - KANJI['基'].bounds[1]) * em) / 100
  const baseline = (d - inkH) / 2 + (KANJI['基'].bounds[3] * em) / 100
  return {
    width: d,
    height: d,
    shapes: [ring(d / 2, d / 2, (d - STROKE) / 2, 'accent'), kanjiShape('基', em, (d - inkW) / 2, baseline)],
  }
}

/**
 * Anel sem o kanji — unica versao que sobrevive a 16px.
 * Usada no favicon pequeno, onde 基 vira borrao.
 */
export function symbolRingPlain() {
  const d = O_DIAMETER
  return { width: d, height: d, shapes: [ring(d / 2, d / 2, (d - STROKE) / 2, 'accent')] }
}

/** Disco solido + 基 vazado — para fundos que exigem mancha cheia. */
export function symbolDisc() {
  const d = O_DIAMETER
  const em = 44
  const inkW = kanjiInkWidth('基', em)
  const inkH = ((KANJI['基'].bounds[3] - KANJI['基'].bounds[1]) * em) / 100
  const baseline = (d - inkH) / 2 + (KANJI['基'].bounds[3] * em) / 100
  return {
    width: d,
    height: d,
    shapes: [disc(d / 2, d / 2, d / 2, 'accent'), kanjiShape('基', em, (d - inkW) / 2, baseline, 'knockout')],
  }
}

/** Monograma K — uso restrito, onde o anel nao couber. */
export function monogramK({ padding = 16 } = {}) {
  const k = glyph('K')
  const box = CAP + padding * 2
  return { width: box, height: box, shapes: move(k.shapes, (box - k.width) / 2, padding) }
}

export const LOCKUPS = {
  horizontal: lockupHorizontal,
  stacked: lockupStacked,
  wordmark: lockupWordmark,
  symbol: symbolRing,
  symbolPlain: symbolRingPlain,
  disc: symbolDisc,
  monogram: monogramK,
}
