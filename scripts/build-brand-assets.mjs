#!/usr/bin/env node
/**
 * Kihon — gerador dos arquivos da marca.
 *
 *   node scripts/build-brand-assets.mjs
 *
 * Le a geometria em src/brand/geometry.js e escreve public/brand/ mais os
 * favicons. Nada aqui e desenhado a mao: se o desenho mudar, rode de novo e
 * SVG, PNG, favicon e a imagem da assinatura de e-mail saem todos iguais.
 *
 * Os PNG precisam do Playwright (devDependency opcional). Sem ele o script
 * escreve os SVG, avisa, e sai com sucesso.
 */

import { Buffer } from 'node:buffer'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { CAP, LOCKUPS, STROKE } from '../src/brand/geometry.js'
import { COLORS } from '../src/brand/tokens.js'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'public', 'brand')
const PUBLIC = join(ROOT, 'public')

// ── SVG ─────────────────────────────────────────────────────────────────────

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')

/**
 * Monta o SVG de um lockup.
 * `ink` pinta letras e kanji, `accent` pinta o O / o anel, `background` e
 * opcional (favicon e apple-touch-icon precisam de fundo solido).
 */
function markup(name, { ink = COLORS.ink, accent = COLORS.red, background, clipId = 'cap' } = {}) {
  const { width, height, shapes } = LOCKUPS[name]()
  const paint = (role) => (role === 'accent' ? accent : role === 'knockout' ? background || COLORS.paper : ink)

  const body = shapes
    .map((s) => {
      const t = s.transform ? ` transform="${s.transform}"` : ''
      const o = s.role === 'rule' ? ' opacity="0.34"' : ''
      const fill = paint(s.role)
      if (s.kind === 'ring') {
        return `<circle cx="${s.cx}" cy="${s.cy}" r="${s.r}" fill="none" stroke="${fill}" stroke-width="${STROKE}"${t}${o}/>`
      }
      if (s.kind === 'disc') return `<circle cx="${s.cx}" cy="${s.cy}" r="${s.r}" fill="${fill}"${t}${o}/>`
      if (s.kind === 'stroke') {
        const clip = s.clip ? ` clip-path="url(#${clipId})"` : ''
        return `<path d="${s.d}" fill="none" stroke="${fill}" stroke-width="${STROKE}" stroke-linecap="butt" stroke-linejoin="miter"${clip}${t}${o}/>`
      }
      return `<path d="${s.d}" fill="${fill}"${t}${o}/>`
    })
    .join('')

  const defs = shapes.some((s) => s.clip)
    ? `<defs><clipPath id="${clipId}"><rect x="${-STROKE * 3}" y="0" width="${width + STROKE * 6}" height="${CAP}"/></clipPath></defs>`
    : ''

  return { width, height, defs, body }
}

/** SVG completo de um lockup, com respiro e fundo opcionais. */
function renderSVG(name, { pad = 0, title, ...opts } = {}) {
  const { width, height, defs, body } = markup(name, opts)
  const w = +(width + pad * 2).toFixed(2)
  const h = +(height + pad * 2).toFixed(2)
  const bg = opts.background ? `<rect width="${w}" height="${h}" fill="${opts.background}"/>` : ''
  const label = title ? `<title>${esc(title)}</title>` : ''

  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">` +
    `${label}${defs}${bg}<g transform="translate(${pad} ${pad})">${body}</g></svg>\n`
  )
}

// name, arquivo, opcoes
const SVG_FILES = [
  // Marca oficial — lockup horizontal com 基本
  ['horizontal', 'kihon-horizontal.svg', { accent: COLORS.ink, title: 'Kihon 基本' }],
  ['horizontal', 'kihon-horizontal-light.svg', { ink: COLORS.paper, accent: COLORS.paper, title: 'Kihon 基本' }],
  ['horizontal', 'kihon-horizontal-hinomaru.svg', { title: 'Kihon 基本' }],
  ['horizontal', 'kihon-horizontal-hinomaru-light.svg', { ink: COLORS.paper, title: 'Kihon 基本' }],
  // Empilhada
  ['stacked', 'kihon-stacked.svg', { accent: COLORS.ink, title: 'Kihon 基本' }],
  ['stacked', 'kihon-stacked-light.svg', { ink: COLORS.paper, accent: COLORS.paper, title: 'Kihon 基本' }],
  // Wordmark
  ['wordmark', 'kihon-wordmark.svg', { accent: COLORS.ink, title: 'Kihon' }],
  ['wordmark', 'kihon-wordmark-light.svg', { ink: COLORS.paper, accent: COLORS.paper, title: 'Kihon' }],
  ['wordmark', 'kihon-wordmark-hinomaru.svg', { title: 'Kihon' }],
  // Simbolo — anel hinomaru
  ['symbol', 'kihon-symbol.svg', { title: 'Kihon' }],
  ['symbol', 'kihon-symbol-light.svg', { ink: COLORS.paper, title: 'Kihon' }],
  ['symbol', 'kihon-symbol-mono.svg', { accent: COLORS.ink, title: 'Kihon' }],
  ['disc', 'kihon-symbol-disc.svg', { background: COLORS.paper, title: 'Kihon' }],
  ['monogram', 'kihon-monograma.svg', { title: 'Kihon' }],
]

// ── PNG ─────────────────────────────────────────────────────────────────────

/** O Playwright e CJS: conforme o caminho, `chromium` vem solto ou em `default`. */
const pickChromium = (mod) => mod?.chromium || mod?.default?.chromium || null

async function loadChromium() {
  try {
    const found = pickChromium(await import('playwright'))
    if (found) return found
  } catch {
    /* tenta o caminho global abaixo */
  }
  // Instalado global: o import ESM ignora NODE_PATH, mas createRequire respeita.
  try {
    const { createRequire } = await import('node:module')
    const { pathToFileURL } = await import('node:url')
    const resolved = createRequire(import.meta.url).resolve('playwright')
    return pickChromium(await import(pathToFileURL(resolved).href))
  } catch {
    return null
  }
}

async function rasterizer() {
  const chromium = await loadChromium()
  if (!chromium) return null
  const browser = await chromium.launch()
  const page = await browser.newPage()

  /** Rasteriza um SVG em `width` x `height` com fundo transparente. */
  const toPNG = async (svg, width, height) => {
    await page.setViewportSize({ width: Math.ceil(width), height: Math.ceil(height) })
    await page.setContent(
      `<body style="margin:0;background:transparent">` +
        `<div style="width:${width}px;height:${height}px">` +
        svg.replace('<svg', '<svg style="width:100%;height:100%;display:block"') +
        `</div></body>`,
    )
    return page.screenshot({ omitBackground: true })
  }

  return { toPNG, close: () => browser.close() }
}

/** Empacota PNGs em um .ico (o formato aceita PNG embutido desde o Vista). */
function buildICO(pngs) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0) // reservado
  header.writeUInt16LE(1, 2) // tipo: icone
  header.writeUInt16LE(pngs.length, 4)

  let offset = 6 + pngs.length * 16
  const entries = []
  for (const { size, data } of pngs) {
    const e = Buffer.alloc(16)
    e.writeUInt8(size >= 256 ? 0 : size, 0)
    e.writeUInt8(size >= 256 ? 0 : size, 1)
    e.writeUInt8(0, 2) // paleta
    e.writeUInt8(0, 3) // reservado
    e.writeUInt16LE(1, 4) // planos
    e.writeUInt16LE(32, 6) // bits por pixel
    e.writeUInt32LE(data.length, 8)
    e.writeUInt32LE(offset, 12)
    entries.push(e)
    offset += data.length
  }
  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.data)])
}

// ── Execucao ────────────────────────────────────────────────────────────────

async function main() {
  await mkdir(OUT, { recursive: true })

  const svgs = new Map()
  for (const [name, file, opts] of SVG_FILES) {
    const svg = renderSVG(name, opts)
    svgs.set(file, svg)
    await writeFile(join(OUT, file), svg, 'utf8')
  }
  console.log(`✓ ${SVG_FILES.length} SVG em public/brand/`)

  // favicon.svg — anel hinomaru com respiro, fundo transparente
  const faviconSVG = renderSVG('symbol', { pad: 9, title: 'Kihon' })
  await writeFile(join(PUBLIC, 'favicon.svg'), faviconSVG, 'utf8')
  console.log('✓ public/favicon.svg')

  const raster = await rasterizer()
  if (!raster) {
    console.warn('! Playwright nao encontrado — PNG e .ico nao foram gerados.')
    console.warn('  npm i -D playwright && npx playwright install chromium')
    return
  }

  try {
    // Simbolo em varios tamanhos
    for (const size of [32, 64, 128, 256, 512]) {
      const png = await raster.toPNG(svgs.get('kihon-symbol.svg'), size, size)
      await writeFile(join(OUT, `kihon-symbol-${size}.png`), png)
    }

    // apple-touch-icon: iOS nao respeita transparencia, entao vai com papel
    const touch = renderSVG('symbol', { pad: 17, background: COLORS.paper })
    await writeFile(join(PUBLIC, 'apple-touch-icon.png'), await raster.toPNG(touch, 180, 180))

    // favicon.ico: a 16px o kanji vira borrao, entao sobra so o anel
    const plain = renderSVG('symbolPlain', { pad: 9 })
    const ico = buildICO([
      { size: 16, data: await raster.toPNG(plain, 16, 16) },
      { size: 32, data: await raster.toPNG(faviconSVG, 32, 32) },
      { size: 48, data: await raster.toPNG(faviconSVG, 48, 48) },
    ])
    await writeFile(join(PUBLIC, 'favicon.ico'), ico)

    // Assinatura de e-mail: cliente de e-mail nao renderiza SVG.
    // Vai em 2x e e exibido em metade do tamanho, para nao serrilhar em tela retina.
    // Usa a marca oficial (monocromatica) — o "O" vermelho e variante, nao o padrao.
    const sig = svgs.get('kihon-horizontal.svg')
    const { width, height } = LOCKUPS.horizontal()
    const sigH = 44
    const sigW = Math.round((width / height) * sigH)
    await writeFile(join(OUT, 'kihon-email.png'), await raster.toPNG(sig, sigW * 2, sigH * 2))
    const sigLight = svgs.get('kihon-horizontal-light.svg')
    await writeFile(join(OUT, 'kihon-email-light.png'), await raster.toPNG(sigLight, sigW * 2, sigH * 2))
    console.log(`✓ PNG da assinatura: ${sigW}x${sigH} exibido, ${sigW * 2}x${sigH * 2} real`)

    // Open Graph: marca sobre tinta, 1200x630
    const og = markup('horizontal', { ink: COLORS.paper, clipId: 'og-cap' })
    const ogWidth = 660
    const ogScale = ogWidth / og.width
    const ogTop = 236
    const ogSVG =
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">` +
      `${og.defs}<rect width="1200" height="630" fill="${COLORS.ink}"/>` +
      `<g transform="translate(96 ${ogTop}) scale(${ogScale.toFixed(4)})">${og.body}</g>` +
      `<rect x="96" y="${ogTop + og.height * ogScale + 46}" width="64" height="6" fill="${COLORS.red}"/>` +
      `<text x="96" y="${ogTop + og.height * ogScale + 116}" fill="${COLORS.chalk}" ` +
      `font-family="Helvetica, Arial, sans-serif" font-size="30">` +
      `O básico bem feito. Software, dados e automação.</text></svg>`
    await writeFile(join(OUT, 'og-image.png'), await raster.toPNG(ogSVG, 1200, 630))
    console.log('✓ PNG: simbolo, apple-touch-icon, favicon.ico, assinatura, og-image')
  } finally {
    await raster.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
