import React, { useState } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

/**
 * Clientes. Todo `logo` aponta para `public/clients/`, nunca para o site do
 * próprio cliente: hotlink quebra sem aviso quando o outro lado muda o caminho
 * ou passa a recusar requisição de outra origem — já aconteceu três vezes aqui.
 *
 * Um item sem `logo` cai no fallback de texto e continua na faixa.
 */
const trustedClients = [
  { name: 'Grupo Fornecedora', logo: '/clients/grupo-fornecedora.png' },
  { name: 'Fornecedora Engelog', logo: '/clients/fornecedora-engelog.png' },
  { name: 'Heian Dojo', logo: '/clients/heiandojo.png' },
  { name: 'Pires & Lima Advogados', logo: '/clients/pires-lima.png' },
  { name: 'Mendonça e Pires Advogados', logo: '/clients/mendonca-pires.png' },
  { name: 'Contabilidade DiPonta', logo: '/clients/contabilidade-diponta.png' },
  { name: 'CE Prof.ª Rosimar', logo: '/clients/cepr.jpg' },
  { name: 'Sunord Engenharia', logo: '/clients/sunord.png' },
  { name: 'Renova Demolições e Escavações', logo: '/clients/renova.png' },
  { name: 'Cavalcante Lima Advocacia', logo: '/clients/cavalcante-lima.png' },
]

function LogoItem({ name, logo, ariaHidden = false }) {
  // Se a logo não carregar (404, hotlink bloqueado, etc.), o item some da faixa
  // em vez de deixar um ícone de imagem quebrada.
  const [failed, setFailed] = useState(false)

  if (failed) return null

  return (
    <li
      aria-hidden={ariaHidden || undefined}
      className="mx-2.5 flex w-[150px] shrink-0 items-center justify-center sm:mx-3 sm:w-[172px]"
    >
      <div className="flex h-24 w-full items-center justify-center rounded-kihon border border-kihon-line bg-white p-5">
        {logo ? (
          <img
            src={logo}
            alt={ariaHidden ? '' : name}
            width={172}
            height={72}
            // A faixa anda por transform: o IntersectionObserver do lazy não
            // acompanha, e os clones da trilha duplicada nunca carregavam —
            // abrindo buracos no loop. São 10 logos pequenos; carrega tudo.
            loading="eager"
            decoding="async"
            onError={() => setFailed(true)}
            className="max-h-[60px] max-w-full object-contain opacity-70 grayscale transition-[opacity,filter] duration-500 group-hover:opacity-100 group-hover:grayscale-0"
          />
        ) : (
          <span className="text-center text-sm font-medium text-kihon-muted">{name}</span>
        )}
      </div>
    </li>
  )
}

const TrustedBy = () => (
  <section className="section-kihon border-y border-kihon-line bg-kihon-paper">
    <div className="container-max">
      <SectionHeading
        eyebrow="Quem confia na Kihon"
        title="Empresas que preferem base sólida a promessa vazia"
        lead="Parcerias em setores que exigem confiança e continuidade — educação, jurídico, contabilidade e varejo."
      />

      <Reveal delay={0.1} className="mt-14">
        {/* Carrossel infinito de logos — pausa no hover, rola no reduced-motion */}
        <div className="group relative overflow-hidden py-2 motion-reduce:overflow-x-auto">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-kihon-paper to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-kihon-paper to-transparent sm:w-24" />
          <ul
            aria-label="Logos de clientes da Kihon"
            className="kihon-stack-marquee flex w-max items-center group-hover:[animation-play-state:paused]"
          >
            {trustedClients.map((c) => (
              <LogoItem key={c.name} name={c.name} logo={c.logo} />
            ))}
            {trustedClients.map((c) => (
              <LogoItem key={`dup-${c.name}`} name={c.name} logo={c.logo} ariaHidden />
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
)

export default TrustedBy
