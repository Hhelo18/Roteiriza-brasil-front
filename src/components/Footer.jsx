import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#0284c7', color: '#ffffff', position: 'relative', overflow: 'hidden', marginTop: '60px' }}>
      
      {/* Onda SVG no topo do Rodapé */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0, transform: 'rotate(180deg)' }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ position: 'relative', display: 'block', width: 'calc(100% + 1.3px)', height: '55px' }}>
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,20 1200,60 L1200,120 L0,120 Z" fill="#f8fafc"></path>
        </svg>
      </div>

      {/* Conteúdo do Rodapé */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '70px 20px 30px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', position: 'relative', zIndex: 1 }}>
        
        {/* Coluna 1: Logo e Descrição */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
            <img 
              src="/referencias/logo.png" 
              alt="Logo Roteiriza Brasil" 
              style={{ width: '38px', height: '38px', objectFit: 'contain', borderRadius: '50%', background: '#fff' }} 
            />
            <span style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff' }}>
              Roteiriza Brasil
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#e0f2fe', lineHeight: '1.5', margin: 0 }}>
            Descubra novos destinos, organize suas viagens e explore as maravilhas do Brasil com mais praticidade.
          </p>
          <div style={{ marginTop: '12px', fontSize: '0.85rem', color: '#bae6fd', fontWeight: '600' }}>
            ✦ Seu próximo destino começa aqui.
          </div>
        </div>

        {/* Coluna 2: Navegar */}
        <div>
          <h4 style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', marginBottom: '15px', color: '#bae6fd' }}>NAVEGAR</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
            <li><Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Início</Link></li>
            <li><Link to="/destinos" style={{ color: '#ffffff', textDecoration: 'none' }}>Destinos</Link></li>
            <li><Link to="/meu-roteiro" style={{ color: '#ffffff', textDecoration: 'none' }}>Meu roteiro</Link></li>
            <li><Link to="/agenda" style={{ color: '#ffffff', textDecoration: 'none' }}>Agenda</Link></li>
            <li><Link to="/dicas" style={{ color: '#ffffff', textDecoration: 'none' }}>Dicas de viagem</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Planejamento */}
        <div>
          <h4 style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', marginBottom: '15px', color: '#bae6fd' }}>PLANEJAMENTO</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
            <li><Link to="/meu-roteiro" style={{ color: '#ffffff', textDecoration: 'none' }}>Criar roteiro</Link></li>
            <li><Link to="/agenda" style={{ color: '#ffffff', textDecoration: 'none' }}>Agenda</Link></li>
            <li><Link to="/gastos" style={{ color: '#ffffff', textDecoration: 'none' }}>Gastos</Link></li>
            <li><Link to="/planilha" style={{ color: '#ffffff', textDecoration: 'none' }}>Planilha de viagem</Link></li>
          </ul>
        </div>

        {/* Coluna 4: Ajuda / Contato / Política de Privacidade corrigida para /politicaprivacidade */}
        <div>
          <h4 style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', marginBottom: '15px', color: '#bae6fd' }}>AJUDA</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
            <li><Link to="/avaliacoes" style={{ color: '#ffffff', textDecoration: 'none' }}>Avaliações</Link></li>
            <li><Link to="/contato" style={{ color: '#ffffff', textDecoration: 'none' }}>Contato</Link></li>
            <li><Link to="/politicaprivacidade" style={{ color: '#ffffff', textDecoration: 'none' }}>Política de privacidade</Link></li>
            <li><Link to="/login" style={{ color: '#ffffff', textDecoration: 'none' }}>Minha conta</Link></li>
          </ul>
        </div>

      </div>

      {/* Linha Inferior de Direitos Autorais */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px', borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', fontSize: '0.8rem', color: '#bae6fd' }}>
        <span>© 2026 Roteiriza Brasil — Todos os direitos reservados.</span>
        <span>Projeto acadêmico desenvolvido para fins educacionais.</span>
      </div>

    </footer>
  )
}