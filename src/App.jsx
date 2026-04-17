import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import KihonHome from './pages/KihonHome'
import KihonSobre from './pages/KihonSobre'
import KihonServicos from './pages/KihonServicos'
import KihonCases from './pages/KihonCases'
import KihonContato from './pages/KihonContato'
import SmartNotaPrivacidade from './pages/SmartNotaPrivacidade'
import PortfolioPessoal from './pages/PortfolioPessoal'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KihonHome />} />
        <Route path="/sobre" element={<KihonSobre />} />
        <Route path="/servicos" element={<KihonServicos />} />
        <Route path="/cases" element={<KihonCases />} />
        <Route path="/contato" element={<KihonContato />} />
        <Route path="/privacidade/smart-nota" element={<SmartNotaPrivacidade />} />
        <Route path="/regiolopes" element={<PortfolioPessoal />} />
      </Routes>
    </Router>
  )
}

export default App
