import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { useScroll } from '../../hooks/useScroll'
import KihonLogo from './KihonLogo'

const navItems = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Cases', href: '/cases' },
  { name: 'Contato', href: '/contato' },
]

const KihonHeader = () => {
  const isScrolled = useScroll(24)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const reduce = useReducedMotion()

  const isActive = (path) => location.pathname === path

  // Trava o scroll do fundo enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <motion.header
      initial={reduce ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        isScrolled || isMenuOpen
          ? 'border-b border-white/10 bg-kihon-ink/95 shadow-lg backdrop-blur-md'
          : 'border-b border-transparent bg-kihon-ink'
      }`}
    >
      <nav aria-label="Principal" className="container-max flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="flex items-center rounded-md transition-opacity hover:opacity-90"
          aria-label="Kihon — página inicial"
        >
          <KihonLogo size="default" color="light" className="h-7 w-auto md:h-8" />
        </Link>

        {/* Navegação desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`relative rounded-md px-3 py-2 font-sans text-sm font-medium transition-colors duration-200 ${
                isActive(item.href)
                  ? 'text-white'
                  : 'text-kihon-chalk hover:text-white'
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-kihon-red" aria-hidden="true" />
              )}
            </Link>
          ))}
          <Link to="/contato" className="btn-kihon ml-3 px-5 py-2.5 text-sm">
            Falar com a Kihon
          </Link>
        </div>

        {/* Botão do menu mobile */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-kihon-chalk transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kihon-red md:hidden"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-expanded={isMenuOpen}
          aria-controls="menu-mobile"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt4 className="h-6 w-6" />}
        </button>
      </nav>

      {/* Navegação mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-kihon-ink md:hidden"
            style={{ overscrollBehavior: 'contain' }}
          >
            <div className="container-max flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`rounded-lg px-3 py-3 font-sans text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-white/5 text-white'
                      : 'text-kihon-chalk hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contato"
                onClick={() => setIsMenuOpen(false)}
                className="btn-kihon mt-3 w-full"
              >
                Falar com a Kihon
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default KihonHeader
