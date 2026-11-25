import React from 'react'

import { COLORS } from './tokens'

/**
 * Kihon — filete de enfase.
 *
 * Substitui o antigo traco de pincel caligrafico. A marca passou a ser
 * construida com regua e compasso: traco de espessura unica, terminacao reta.
 * Um pincel ao lado dela conta outra historia.
 *
 * A ideia continua a mesma — um traco so, sem hesitacao — no vocabulario novo.
 *
 * O traco preenche a caixa inteira do SVG: a espessura e o recuo vem da altura
 * e do `bottom` que quem usa define, de preferencia em `em`, para acompanharem
 * o corpo do texto. Os 19% de espessura da marca sao pesados demais sob um
 * titulo — aqui o filete fica por volta de 9% do corpo, e so.
 *
 * O desenho (draw-on) vive em index.css (.kihon-rule-draw) e respeita
 * prefers-reduced-motion.
 */
const KihonRule = ({ className = '', color = COLORS.red, animate = true }) => (
  <svg
    className={className}
    viewBox="0 0 320 19"
    fill="none"
    preserveAspectRatio="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      className={animate ? 'kihon-rule-draw' : undefined}
      d="M0 9.5H320"
      stroke={color}
      strokeWidth="19"
      strokeLinecap="butt"
      pathLength="1"
    />
  </svg>
)

export default KihonRule
