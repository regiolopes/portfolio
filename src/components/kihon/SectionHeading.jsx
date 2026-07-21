import React from 'react'
import Reveal from './Reveal'

/**
 * Cabeçalho de seção consistente: eyebrow (mono) + título (display) + lead opcional.
 * `onInk` inverte as cores para uso sobre superfícies escuras (sumi).
 */
const SectionHeading = ({
  eyebrow,
  title,
  lead,
  align = 'center',
  onInk = false,
  className = '',
  titleId,
}) => {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow mb-4 ${onInk ? 'eyebrow-on-ink' : ''}`}>{eyebrow}</span>
      )}
      <h2
        id={titleId}
        className={`text-balance font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          onInk ? 'text-kihon-paper' : 'text-kihon-ink'
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            onInk ? 'text-kihon-chalk' : 'text-kihon-muted'
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  )
}

export default SectionHeading
