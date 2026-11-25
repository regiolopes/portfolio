/**
 * Kihon — HTML da assinatura de e-mail.
 *
 * Cliente de e-mail nao e navegador. Nada de flexbox, grid, classe, variavel
 * CSS ou SVG: so tabela, atributo e estilo inline, que e o que Outlook, Gmail e
 * Apple Mail renderizam igual. A marca entra como PNG por URL absoluta, porque
 * imagem embutida em base64 e bloqueada ou descartada por boa parte deles.
 */

import { COLORS, FONTS, SITE_URL } from './tokens'

/** Dimensoes de exibicao do PNG da marca (o arquivo tem o dobro, para retina). */
export const LOGO = { width: 247, height: 44 }

const esc = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

/** Deixa so digitos: o link tel:/wa.me nao aceita mascara. */
const digits = (value = '') => String(value).replace(/\D/g, '')

const linkStyle = (color) => `color:${color};text-decoration:none`

export const DEFAULTS = {
  nome: 'Régio Lopes',
  cargo: 'Engenharia de Dados e Software',
  email: 'regio.lopes@kihon.dev.br',
  telefone: '+55 85 99727-5766',
  linkedin: 'linkedin.com/in/regiolopes',
  tema: 'claro', // 'claro' | 'escuro'
  mostrarTagline: true,
}

/**
 * Monta a assinatura.
 *
 * `tema` escuro troca o PNG da marca e as cores do texto, para quem usa o
 * cliente de e-mail em modo escuro.
 *
 * `origin` so existe para a previa na propria pagina poder carregar a imagem do
 * servidor local. O que e copiado sai sempre com a URL de producao, senao a
 * assinatura chega quebrada para quem recebe.
 */
export function buildSignature(data = {}, { origin = SITE_URL } = {}) {
  const d = { ...DEFAULTS, ...data }
  const dark = d.tema === 'escuro'

  const nameColor = dark ? COLORS.paper : COLORS.ink
  const roleColor = dark ? COLORS.chalk : COLORS.muted
  const metaColor = dark ? COLORS.chalk : COLORS.muted
  const ruleColor = dark ? '#3A322B' : COLORS.line
  const logo = `${origin}/brand/${dark ? 'kihon-email-light.png' : 'kihon-email.png'}`

  const font = FONTS.email
  const tel = digits(d.telefone)

  const rows = []

  if (d.nome) {
    rows.push(
      `<tr><td style="padding:0;font-family:${font};font-size:16px;line-height:22px;` +
        `font-weight:bold;color:${nameColor}">${esc(d.nome)}</td></tr>`,
    )
  }

  if (d.cargo) {
    rows.push(
      `<tr><td style="padding:2px 0 0;font-family:${font};font-size:13px;line-height:18px;` +
        `color:${roleColor}">${esc(d.cargo)}</td></tr>`,
    )
  }

  // Contatos, um por linha, separados por barra quando couber na mesma
  const contacts = []
  if (d.email) {
    contacts.push(
      `<a href="mailto:${esc(d.email)}" style="${linkStyle(metaColor)}">${esc(d.email)}</a>`,
    )
  }
  if (d.telefone) {
    contacts.push(
      `<a href="tel:+${esc(tel)}" style="${linkStyle(metaColor)}">${esc(d.telefone)}</a>`,
    )
  }

  if (contacts.length) {
    rows.push(
      `<tr><td style="padding:10px 0 0;font-family:${font};font-size:13px;line-height:20px;` +
        `color:${metaColor}">${contacts.join(
          `<span style="color:${ruleColor}"> &nbsp;|&nbsp; </span>`,
        )}</td></tr>`,
    )
  }

  const links = [
    `<a href="${SITE_URL}" style="${linkStyle(COLORS.red)}">kihon.dev.br</a>`,
  ]
  if (d.linkedin) {
    const url = d.linkedin.startsWith('http') ? d.linkedin : `https://${d.linkedin}`
    links.push(`<a href="${esc(url)}" style="${linkStyle(metaColor)}">LinkedIn</a>`)
  }
  rows.push(
    `<tr><td style="padding:3px 0 0;font-family:${font};font-size:13px;line-height:20px;` +
      `color:${metaColor}">${links.join(
        `<span style="color:${ruleColor}"> &nbsp;|&nbsp; </span>`,
      )}</td></tr>`,
  )

  if (d.mostrarTagline) {
    rows.push(
      `<tr><td style="padding:12px 0 0;font-family:${font};font-size:11px;line-height:16px;` +
        `letter-spacing:0.08em;text-transform:uppercase;color:${dark ? COLORS.faint : COLORS.faint}">` +
        `O básico bem feito</td></tr>`,
    )
  }

  // A borda esquerda vermelha e uma celula de 3px: border-left some em Outlook.
  return (
    `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse">` +
      `<tr>` +
        `<td style="padding:0 0 14px">` +
          `<a href="${SITE_URL}" style="text-decoration:none">` +
            `<img src="${logo}" width="${LOGO.width}" height="${LOGO.height}" alt="Kihon" ` +
            `style="display:block;border:0;outline:none;text-decoration:none;width:${LOGO.width}px;height:${LOGO.height}px">` +
          `</a>` +
        `</td>` +
      `</tr>` +
      `<tr>` +
        `<td style="padding:0">` +
          `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse">` +
            `<tr>` +
              `<td width="3" style="width:3px;background-color:${COLORS.red};font-size:0;line-height:0">&nbsp;</td>` +
              `<td width="16" style="width:16px;font-size:0;line-height:0">&nbsp;</td>` +
              `<td style="padding:0">` +
                `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse">` +
                  rows.join('') +
                `</table>` +
              `</td>` +
            `</tr>` +
          `</table>` +
        `</td>` +
      `</tr>` +
    `</table>`
  )
}

/** Versao em texto puro, para clientes que recusam HTML. */
export function buildPlainText(data = {}) {
  const d = { ...DEFAULTS, ...data }
  return [
    d.nome,
    d.cargo,
    [d.email, d.telefone].filter(Boolean).join(' | '),
    `kihon.dev.br${d.linkedin ? ` | ${d.linkedin}` : ''}`,
    d.mostrarTagline ? 'Kihon — o básico bem feito' : '',
  ]
    .filter(Boolean)
    .join('\n')
}
