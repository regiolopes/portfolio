import React from 'react'

/**
 * Logo Kihon: wordmark + kanji 基本 (fundamentos) com traço vermelho de acento.
 * `color`: 'dark' (ink sobre claro) | 'light' (sobre superfícies escuras).
 */
const KihonLogo = ({ className = '', size = 'default', variant = 'full', color = 'dark' }) => {
  const sizes = {
    small: { width: 150, height: 38 },
    default: { width: 190, height: 48 },
    large: { width: 250, height: 63 },
  }
  const { width, height } = sizes[size] || sizes.default
  const fg = color === 'light' ? '#FAF7F1' : '#17130F'

  if (variant === 'icon') {
    return (
      <svg
        width={height}
        height={height}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label="Kihon"
      >
        <rect x="2" y="2" width="46" height="46" rx="12" fill="#E53935" />
        <text
          x="25"
          y="27"
          fontFamily="'Yu Gothic', 'Hiragino Sans', 'Noto Sans JP', serif"
          fontSize="26"
          fill="#FFFFFF"
          textAnchor="middle"
          dominantBaseline="central"
          fontWeight="700"
        >
          基
        </text>
      </svg>
    )
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 190 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Kihon"
      preserveAspectRatio="xMidYMid meet"
    >
      <text
        x="2"
        y="30"
        fontFamily="'Bricolage Grotesque', 'IBM Plex Sans', system-ui, sans-serif"
        fontSize="31"
        fontWeight="700"
        fill={fg}
        letterSpacing="-0.6"
      >
        Kihon
      </text>
      <path
        d="M4 37C24 34 62 34 92 36"
        stroke="#E53935"
        strokeWidth="2.75"
        strokeLinecap="round"
        fill="none"
      />
      <text
        x="128"
        y="30"
        fontFamily="'Yu Gothic', 'Hiragino Sans', 'Noto Sans JP', serif"
        fontSize="23"
        fill={fg}
        textAnchor="middle"
        dominantBaseline="central"
        fontWeight="500"
      >
        基本
      </text>
    </svg>
  )
}

export default KihonLogo
