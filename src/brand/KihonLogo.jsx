import React, { useId } from 'react'

import { CAP, LOCKUPS, STROKE } from './geometry'
import { COLORS } from './tokens'

/**
 * Kihon — marca.
 *
 * Desenho vetorial puro: as letras sao construidas em geometry.js e nenhuma
 * fonte participa delas, entao a marca sai identica em qualquer maquina.
 *
 * variant  'full'      lockup horizontal com 基本 — marca oficial
 *          'stacked'   empilhada, para formatos quadrados e verticais
 *          'wordmark'  so KIHON, para reducoes abaixo de 110px
 *          'symbol'    anel hinomaru + 基 — avatar, favicon, selo
 *          'disc'      disco solido + 基 vazado
 *          'monogram'  K isolado
 * color    'dark' (tinta sobre claro) | 'light' (sobre escuro) | 'current'
 * accent   true pinta o "O" / o anel de vermelho (variante hinomaru)
 */

const VARIANTS = {
  full: 'horizontal',
  stacked: 'stacked',
  wordmark: 'wordmark',
  symbol: 'symbol',
  disc: 'disc',
  monogram: 'monogram',
  icon: 'symbol', // alias legado
}

const LABELS = {
  horizontal: 'Kihon 基本',
  stacked: 'Kihon 基本',
  wordmark: 'Kihon',
  symbol: 'Kihon',
  disc: 'Kihon',
  monogram: 'Kihon',
}

// Alturas nominais. Na pratica o tamanho vem do className (h-8 w-auto etc.);
// isto so garante um fallback coerente quando nenhuma classe e passada.
const SIZES = { small: 28, default: 36, large: 52 }

const KihonLogo = ({
  className = '',
  size = 'default',
  variant = 'full',
  color = 'dark',
  accent = false,
  title,
  ...rest
}) => {
  const uid = useId().replace(/:/g, '')
  const key = VARIANTS[variant] || 'horizontal'
  const { width, height, shapes } = LOCKUPS[key]()

  const foreground = color === 'light' ? COLORS.paper : color === 'current' ? 'currentColor' : COLORS.ink
  const surface = color === 'light' ? COLORS.ink : COLORS.paper

  const paint = (role) => {
    if (role === 'accent') return accent ? COLORS.red : foreground
    if (role === 'knockout') return surface
    return foreground
  }

  const h = SIZES[size] || SIZES.default
  const clipId = `kihon-cap-${uid}`

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={Math.round((width / height) * h)}
      height={h}
      className={className}
      role="img"
      aria-label={title || LABELS[key]}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <defs>
        <clipPath id={clipId}>
          {/* Corta as diagonais na caixa alta: terminacao reta, nunca em bisel. */}
          <rect x={-STROKE * 3} y="0" width={width + STROKE * 6} height={CAP} />
        </clipPath>
      </defs>

      {shapes.map((s, i) => {
        const fill = paint(s.role)
        // `key` fica fora do spread de propósito: passar key por spread é
        // descontinuado no React 19, e o react/jsx-key nem enxerga ali.
        const common = {
          transform: s.transform,
          opacity: s.role === 'rule' ? 0.34 : undefined,
        }

        if (s.kind === 'ring') {
          return (
            <circle
              key={i}
              {...common}
              cx={s.cx}
              cy={s.cy}
              r={s.r}
              fill="none"
              stroke={fill}
              strokeWidth={STROKE}
            />
          )
        }
        if (s.kind === 'disc') {
          return <circle key={i} {...common} cx={s.cx} cy={s.cy} r={s.r} fill={fill} />
        }
        if (s.kind === 'stroke') {
          return (
            <path
              key={i}
              {...common}
              d={s.d}
              fill="none"
              stroke={fill}
              strokeWidth={STROKE}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              clipPath={s.clip ? `url(#${clipId})` : undefined}
            />
          )
        }
        return <path key={i} {...common} d={s.d} fill={fill} />
      })}
    </svg>
  )
}

export default KihonLogo
