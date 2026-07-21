import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Wrapper de revelação no scroll. Centraliza a animação usada em todo o site
 * e respeita `prefers-reduced-motion` (só faz fade quando o usuário pede menos movimento).
 */
const Reveal = ({
  children,
  className = '',
  delay = 0,
  y = 24,
  as = 'div',
  once = true,
}) => {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal
