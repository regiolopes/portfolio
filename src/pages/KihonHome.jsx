import React from 'react'
import KihonLayout from '../components/kihon/KihonLayout'
import KihonHero from '../components/kihon/KihonHero'
import TrustedBy from '../components/kihon/TrustedBy'
import WhyKihon from '../components/kihon/WhyKihon'
import ServicesHighlight from '../components/kihon/ServicesHighlight'
import JointVenture from '../components/kihon/JointVenture'
import ResultsStrip from '../components/kihon/ResultsStrip'
import Process from '../components/kihon/Process'
import TechnologiesStack from '../components/kihon/TechnologiesStack'
import FinalCTA from '../components/kihon/FinalCTA'

function KihonHome() {
  return (
    <KihonLayout padTop={false}>
      <KihonHero />
      <TrustedBy />
      <WhyKihon />
      <ServicesHighlight />
      <JointVenture />
      <ResultsStrip />
      <Process />
      <TechnologiesStack />
      <FinalCTA />
    </KihonLayout>
  )
}

export default KihonHome
