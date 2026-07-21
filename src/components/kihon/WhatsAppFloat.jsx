import React from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { useScroll } from '../../hooks/useScroll'

const WA_MESSAGE = encodeURIComponent(
  'Olá! Vim pelo site da Kihon e gostaria de conversar sobre um projeto.'
)
export const WHATSAPP_URL = `https://wa.me/5585997275766?text=${WA_MESSAGE}`

/**
 * Botão flutuante de WhatsApp — canal nº 1 de captação no Brasil.
 * Aparece após rolar a página, some no topo, e não sobrepõe o notch (safe-area).
 */
const WhatsAppFloat = () => {
  const show = useScroll(500)
  const reduce = useReducedMotion()

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar com a Kihon no WhatsApp"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.9 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduce ? undefined : { scale: 1.05 }}
          whileTap={reduce ? undefined : { scale: 0.95 }}
          className="group fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3.5
                     font-sans text-sm font-semibold text-white shadow-lift transition-colors hover:bg-[#1ebe5b]
                     focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40
                     sm:bottom-7 sm:right-7"
          style={{
            marginBottom: 'env(safe-area-inset-bottom)',
            marginRight: 'env(safe-area-inset-right)',
          }}
        >
          <FaWhatsapp className="h-6 w-6 shrink-0" aria-hidden="true" />
          <span className="hidden max-w-0 overflow-hidden whitespace-nowrap transition-[max-width] duration-300 group-hover:max-w-[10rem] sm:inline sm:max-w-[10rem]">
            Fale no WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}

export default WhatsAppFloat
