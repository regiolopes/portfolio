import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

/** Clientes: `logo` pode ser `/clients/...` (public/) ou URL absoluta. */
export const trustedClients = [
  { name: 'Grupo Fornecedora', logo: 'https://www.grupofornecedora.com.br/wp-content/uploads/2021/07/cropped-Logo_grupo-fornecedora-1.png' },
  { name: 'Fornecedora Engelog', logo: 'https://fornecedoraengelog.com.br/wp-content/uploads/2021/07/LOGO-ISO.png' },
  { name: 'Heian Dojo', logo: '/clients/heiandojo.png' },
  { name: 'Pires & Lima Advogados', logo: 'https://rppires-lima-production.up.railway.app/_next/image?url=%2Flogo-pires-lima.png&w=256&q=75' },
  { name: 'Mendonça e Pires Advogados', logo: 'https://mendonca-pires-inss-production.up.railway.app/_next/image?url=%2Flogo-mendonca-pires.png&w=256&q=75' },
  { name: 'Contabilidade DiPonta', logo: 'https://contabilidadediponta.com.br/_next/image?url=%2Flogo.png&w=640&q=75' },
  { name: 'CE Prof.ª Rosimar', logo: '/clients/cepr.jpg' },
]

function LogoItem({ name, logo, ariaHidden = false }) {
  return (
    <li
      aria-hidden={ariaHidden || undefined}
      className="mx-2.5 flex w-[150px] shrink-0 items-center justify-center sm:mx-3 sm:w-[172px]"
    >
      <div className="flex h-24 w-full items-center justify-center rounded-2xl border border-kihon-line bg-white p-5 shadow-card">
        {logo ? (
          <img
            src={logo}
            alt={ariaHidden ? '' : name}
            width={172}
            height={72}
            loading="lazy"
            decoding="async"
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
  <section className="section-kihon border-b border-kihon-line bg-kihon-paper">
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
