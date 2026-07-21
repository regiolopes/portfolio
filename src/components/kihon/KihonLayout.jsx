import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import KihonHeader from './KihonHeader'
import KihonFooter from './KihonFooter'
import WhatsAppFloat from './WhatsAppFloat'

/**
 * Ao trocar de rota: rola para o topo. Se houver hash (#secao), rola até a âncora
 * depois da renderização — fazendo links internos e deep-links funcionarem.
 */
function useScrollBehaviorOnRoute() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' })
      })
      return () => cancelAnimationFrame(raf)
    }
    window.scrollTo({ top: 0, left: 0 })
  }, [pathname, hash])
}

/**
 * Casca comum das páginas Kihon: skip link + header fixo + <main> + footer + WhatsApp flutuante.
 * `padTop` afasta o conteúdo do header fixo (a home, com hero full-bleed, usa false).
 */
const KihonLayout = ({ children, padTop = true }) => {
  useScrollBehaviorOnRoute()

  return (
    <div className="flex min-h-screen flex-col bg-kihon-paper">
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <KihonHeader />
      <main id="conteudo" className={`flex-1 ${padTop ? 'pt-16 md:pt-20' : ''}`}>
        {children}
      </main>
      <KihonFooter />
      <WhatsAppFloat />
    </div>
  )
}

export default KihonLayout
