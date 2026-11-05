import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Destinos from './pages/Destinos'
import DetalheDestino from './pages/DetalheDestino'
import MeuRoteiro from './pages/MeuRoteiro'
import Gastos from './pages/Gastos'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import MeusDados from './pages/MeusDados'
import Guias from './pages/Guias'
import PerfilGuia from './pages/PerfilGuia'
import DicasViagem from './pages/DicasViagem'
import Contato from './pages/Contato'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'

export default function App() {
  return ( 
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: '1' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/destinos/:id" element={<DetalheDestino />} />
          <Route path="/guias" element={<Guias />} />
          <Route path="/guias/:id" element={<PerfilGuia />} />
          <Route path="/meu-roteiro" element={<MeuRoteiro />} />
          <Route path="/gastos" element={<Gastos />} />
          {/* Redireciona endereços antigos para as funcionalidades reorganizadas. */}
          <Route path="/agenda" element={<Navigate to="/meu-roteiro" replace />} />
          <Route path="/planilha" element={<Navigate to="/gastos" replace />} />
          <Route path="/avaliacoes" element={<Navigate to="/destinos" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/meus-dados/:id" element={<MeusDados />} />
          <Route path="/dicas" element={<DicasViagem />} />
          <Route path="/contato" element={<Contato />} />
          {/* Rotas de política configuradas para evitar tela branca */}
          <Route path="/politica" element={<PoliticaPrivacidade />} />
          <Route path="/politicaprivacidade" element={<PoliticaPrivacidade />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}