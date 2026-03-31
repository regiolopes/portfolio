import React from 'react'
import KihonHeader from '../components/kihon/KihonHeader'
import KihonFooter from '../components/kihon/KihonFooter'
import KihonHero from '../components/kihon/KihonHero'
import WhyKihon from '../components/kihon/WhyKihon'
import ServicesHighlight from '../components/kihon/ServicesHighlight'
import TrustedBy from '../components/kihon/TrustedBy'
import Philosophy from '../components/kihon/Philosophy'
import TechnologiesStack from '../components/kihon/TechnologiesStack'
// import CasesHighlight from '../components/kihon/CasesHighlight' // TODO: melhorar seção Cases/Resultados e reativar
import FinalCTA from '../components/kihon/FinalCTA'

function KihonHome() {
  return (
    <div className="min-h-screen bg-kihon-white">
      <KihonHeader />
      <main>
        <KihonHero />
        <TrustedBy />
        <WhyKihon />
        <ServicesHighlight />
        <Philosophy />
        <TechnologiesStack />
        {/* Cases / Resultados — desativado temporariamente; reativar: import + <CasesHighlight /> */}
        {/* <CasesHighlight /> */}
        <FinalCTA />
      </main>
      <KihonFooter />
    </div>
  )
}

export default KihonHome

