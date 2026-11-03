import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  const linkStyle = (path) => ({
    color: isActive(path) ? '#0284c7' : '#475569',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.9rem',
    position: 'relative',
    paddingBottom: '4px',
    borderBottom: isActive(path) ? '2px solid #0284c7' : '2px solid transparent',
    transition: 'all 0.2s ease'
  })

  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '15px 30px', 
      background: '#fff', 
      borderBottom: '1px solid #e2e8f0',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      
      {/* Logo real puxando da pasta correta /referencias/logo.png */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
        <img 
          src="/referencias/logo.png" 
          alt="Logo Roteiriza Brasil" 
          style={{ width: '42px', height: '42px', objectFit: 'contain', borderRadius: '50%' }} 
        />
        <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.5px' }}>
          Roteiriza Brasil
        </span>
      </Link>

      {/* Menu de Navegação com o risquinho de página ativa */}
      <nav style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link to="/" style={linkStyle('/')}>Início</Link>
        <Link to="/destinos" style={linkStyle('/destinos')}>Destinos</Link>
        <Link to="/meu-roteiro" style={linkStyle('/meu-roteiro')}>Roteiro</Link>
         <Link to="/guias" style={linkStyle('/guias')}>Guias</Link>
        <Link to="/gastos" style={linkStyle('/gastos')}>Gastos</Link>
      </nav>

      {/* Botões de Acesso (Criar conta em Azul) */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Link to="/login" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', padding: '8px 16px' }}>
          Entrar
        </Link>
        <Link to="/cadastro" style={{ background: '#0284c7', color: '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', padding: '8px 16px', borderRadius: '8px' }}>
          Criar conta
        </Link>
      </div>
    </header>
  )
}