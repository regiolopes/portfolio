import React from 'react'
import KihonHeader from '../components/kihon/KihonHeader'
import KihonFooter from '../components/kihon/KihonFooter'
import KihonHero from '../components/kihon/KihonHero'
import WhyKihon from '../components/kihon/WhyKihon'
import ServicesHighlight from '../components/kihon/ServicesHighlight'
import Philosophy from '../components/kihon/Philosophy'
import TechnologiesStack from '../components/kihon/TechnologiesStack'
import CasesHighlight from '../components/kihon/CasesHighlight'
import FinalCTA from '../components/kihon/FinalCTA'

function KihonHome() {
  return (
    <div className="min-h-screen bg-kihon-white">
      <KihonHeader />
      <main>
        <KihonHero />
        <WhyKihon />
        <ServicesHighlight />
        <Philosophy />
        <TechnologiesStack />
        <CasesHighlight />
        <FinalCTA />
      </main>
      <KihonFooter />
    </div>
  )
}

export default KihonHome

