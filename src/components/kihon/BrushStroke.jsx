import React from 'react'

/**
 * Assinatura visual da Kihon: um traço de pincel (caligrafia) desenhado de uma vez —
 * "o básico bem feito: um traço, sem hesitação". Decorativo (aria-hidden).
 * O desenho (draw-on) vive em index.css (.brush-path) e respeita reduced-motion.
 */
const BrushStroke = ({ className = '', color = '#E53935', animate = true }) => (
  <svg
    className={className}
    viewBox="0 0 320 26"
    fill="none"
    preserveAspectRatio="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      className={animate ? 'brush-path' : undefined}
      d="M5 16C56 7 108 21 160 12 212 3 266 9 315 15"
      stroke={color}
      strokeWidth="9"
      strokeLinecap="round"
      pathLength="1"
    />
  </svg>
)

export default BrushStroke
