import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Destinos from './pages/Destinos'
import DetalheDestino from './pages/DetalheDestino'
import MeuRoteiro from './pages/MeuRoteiro'
import Agenda from './pages/Agenda'
import Gastos from './pages/Gastos'
import Planilha from './pages/Planilha'
import Avaliacoes from './pages/Avaliacoes'
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
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/gastos" element={<Gastos />} />
          <Route path="/planilha" element={<Planilha />} />
          <Route path="/avaliacoes" element={<Avaliacoes />} />
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