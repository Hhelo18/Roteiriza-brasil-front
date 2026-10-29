import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function MeuRoteiro() {
  const [roteiro, setRoteiro] = useState([])

  useEffect(() => {
    const carregados = JSON.parse(localStorage.getItem('roteiro_destinos') || '[]')
    setRoteiro(carregados)
  }, [])

  const removerDoRoteiro = (id) => {
    const atualizados = roteiro.filter(item => item.id !== id)
    setRoteiro(atualizados)
    localStorage.setItem('roteiro_destinos', JSON.stringify(atualizados))
  }

  const valorTotal = roteiro.reduce((acc, item) => acc + (item.preco || 350), 0)

  return (
    <main className="roteiro-page" style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* Banner Principal do Roteiro */}
      <section className="home-hero" style={{ minHeight: '320px', padding: '40px 0' }}>
        <div className="home-hero-inner">
          <h1 style={{ fontSize: '2.2rem', marginBottom: '8px' }}>Meu Roteiro</h1>
          <p style={{ fontSize: '1rem', maxWidth: '700px' }}>
            Organize as atrações, passeios e planeie sua viagem com facilidade e dados atualizados.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            <Link to="/destinos" className="btn" style={{ background: '#fff', color: 'var(--primary)', fontWeight: '700', textDecoration: 'none', padding: '10px 20px', borderRadius: '8px' }}>
              + Adicionar destinos
            </Link>
            <Link to="/gastos" className="btn" style={{ background: 'transparent', border: '1px solid #fff', color: '#fff', textDecoration: 'none', padding: '10px 20px', borderRadius: '8px' }}>
              Simular gastos
            </Link>
          </div>
        </div>
      </section>

      {/* Métricas do Roteiro */}
      <div className="container" style={{ marginTop: '-30px', position: 'relative', zIndex: 10, marginBottom: '40px' }}>
        <div style={{ 
          background: '#fff', padding: '20px 30px', borderRadius: '16px', 
          boxShadow: '0 10px 25px rgba(0,0,0,0.08)', border: '1px solid var(--border)',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center'
        }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', display: 'block' }}>ITENS NO ROTEIRO</span>
            <span style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--dark)' }}>{roteiro.length}</span>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', display: 'block' }}>DESTINOS</span>
            <span style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--primary)' }}>{roteiro.length}</span>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', display: 'block' }}>VALOR ESTIMADO</span>
            <span style={{ fontSize: '1.8rem', fontWeight: '800', color: '#16a34a' }}>
              R$ {valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>
      </div>

      {/* Listagem dos Destinos no Roteiro */}
      <div className="container">
        <h2 style={{ fontSize: '1.3rem', color: 'var(--dark)', marginBottom: '20px' }}>Destinos no seu roteiro</h2>

        {roteiro.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', background: '#fff', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '16px' }}>Seu roteiro está vazio.</p>
            <Link to="/destinos" style={{ background: 'var(--primary)', color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>
              Explorar destinos
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {roteiro.map((item) => (
              <div key={item.id} style={{ 
                background: '#fff', borderRadius: '16px', overflow: 'hidden', 
                border: '1px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ position: 'relative', height: '160px' }}>
                    <img src={item.imagem} alt={item.cidade} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{ 
                      position: 'absolute', top: '10px', left: '10px', 
                      background: 'rgba(0,0,0,0.7)', color: '#fff', 
                      padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '600' 
                    }}>
                      {item.estado} • {item.tag}
                    </span>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', color: 'var(--dark)' }}>{item.cidade}</h3>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                      {item.descricao}
                    </p>
                  </div>
                </div>

                <div style={{ padding: '0 20px 20px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: '800', color: 'var(--primary)', fontSize: '1rem' }}>
                    R$ {item.preco?.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) || '350,00'}
                  </span>
                  <button 
                    onClick={() => removerDoRoteiro(item.id)}
                    style={{ background: '#fee2e2', color: '#991b1b', border: 'none', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.8rem' }}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}