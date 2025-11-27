import React from 'react'

const KihonLogo = ({ className = '', size = 'default', variant = 'full', color = 'dark' }) => {
  const sizes = {
    small: { width: 160, height: 40 },
    default: { width: 200, height: 50 },
    large: { width: 260, height: 67 }
  }

  const { width, height } = sizes[size] || sizes.default

  // Logo simplificada apenas com kanji (para favicon)
  if (variant === 'icon') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Kanji 基本 sem círculo */}
        <text
          x="25"
          y="32"
          fontFamily="serif, 'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', sans-serif"
          fontSize="28"
          fill="#0F172A"
          textAnchor="middle"
          dominantBaseline="middle"
          fontWeight="500"
        >
          基本
        </text>
      </svg>
    )
  }

  // Logo completa com wordmark e kanji
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Wordmark "Kihon" à esquerda */}
      <text
        x="5"
        y="32"
        fontFamily="Poppins, Montserrat, system-ui, sans-serif"
        fontSize="32"
        fontWeight="600"
        fill={color === 'light' ? '#FFFFFF' : '#0F172A'}
        letterSpacing="-0.5px"
      >
        Kihon
      </text>
      
      {/* Linha decorativa sutil abaixo do texto - acento em vermelho */}
      <line
        x1="5"
        y1="38"
        x2="95"
        y2="38"
        stroke="#E53935"
        strokeWidth="2.5"
        opacity="0.8"
        strokeLinecap="round"
      />

      {/* Kanji 基本 à direita do wordmark - sem círculo */}
      <text
        x="130"
        y="32"
        fontFamily="serif, 'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', sans-serif"
        fontSize="24"
        fill={color === 'light' ? '#FFFFFF' : '#0F172A'}
        textAnchor="middle"
        dominantBaseline="middle"
        fontWeight="500"
        letterSpacing="0"
        style={{ fontVariant: 'normal' }}
      >
        基本
      </text>
    </svg>
  )
}

export default KihonLogo

