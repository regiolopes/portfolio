import React from 'react'

import { kanjiInkBottom, kanjiInkTop, kanjiInkWidth, kanjiPair, kanjiShape } from './geometry'
import { COLORS } from './tokens'

/**
 * Kihon — 基本 em vetor.
 *
 * O site desenhava os kanji com a pilha "Yu Gothic, Hiragino Sans, Noto Sans JP,
 * serif": nenhuma dessas fontes e carregada, entao o desenho mudava conforme a
 * maquina de quem abria — e virava tofu onde nao ha fonte japonesa instalada.
 * Aqui eles saem do mesmo contorno que a marca usa, identicos em todo lugar.
 *
 * Use so em exibicao (marca d'agua, display grande). Para kanji no meio de uma
 * frase, mantenha texto de verdade: da para selecionar e ler em leitor de tela.
 */

const EM = 100

const KihonKanji = ({ chars = '基本', gap = 0.2, color = 'current', className = '', title, ...rest }) => {
  const list = [...chars]
  const fill = color === 'light' ? COLORS.paper : color === 'dark' ? COLORS.ink : 'currentColor'

  let width
  let shapes
  if (list.length === 2) {
    const pair = kanjiPair(EM, EM * gap, 0, 0)
    width = pair.width
    shapes = pair.shapes
  } else {
    width = kanjiInkWidth(list[0], EM)
    shapes = [kanjiShape(list[0], EM, 0, 0)]
  }

  // A mancha e medida pelos contornos reais, nao pelo quadratim: o viewBox fica
  // justo e o kanji nao vem com folga fantasma em cima nem embaixo.
  const top = Math.min(...list.map((c) => kanjiInkTop(c, EM, 0)))
  const bottom = Math.max(...list.map((c) => kanjiInkBottom(c, EM, 0)))

  return (
    <svg
      viewBox={`0 ${top.toFixed(2)} ${width.toFixed(2)} ${(bottom - top).toFixed(2)}`}
      className={className}
      role={title ? 'img' : 'presentation'}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : 'true'}
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {shapes.map((s, i) => (
        <path key={i} d={s.d} transform={s.transform} fill={fill} />
      ))}
    </svg>
  )
}

export default KihonKanji
