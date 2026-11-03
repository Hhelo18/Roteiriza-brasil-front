import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Guias() {
  const [busca, setBusca] = useState('')

  const listaGuias = [
    { id: 1, nome: 'Mariana Silva', avaliacao: 5.0, reviews: 120, regiao: 'Rio de Janeiro - RJ', preco: 150, exp: '8 anos de experiência', foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80' },
    { id: 2, nome: 'Carlos Mendes', avaliacao: 4.8, reviews: 95, regiao: 'Salvador - BA', preco: 120, exp: '5 anos de experiência', foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80' },
    { id: 3, nome: 'Ana Ribeiro', avaliacao: 4.9, reviews: 110, regiao: 'Foz do Iguaçu - PR', preco: 130, exp: '6 anos de experiência', foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80' },
    { id: 4, nome: 'Lucas Ferreira', avaliacao: 4.7, reviews: 80, regiao: 'Gramado - RS', preco: 140, exp: '4 anos de experiência', foto: '/referencias/guialucas2.jpg' },
  ]

  const guiasFiltrados = listaGuias.filter(g => 
    g.nome.toLowerCase().includes(busca.toLowerCase()) || 
    g.regiao.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '60px' }}>
      <section style={{ 
        background: 'linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url("https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#fff'
      }}>
        <div className="container" style={{ maxWidth: '1100px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h1 style={{ fontSize: '2.4rem', fontWeight: '800', marginBottom: '8px', color: '#ffffff' }}>Guias turísticos certificados</h1>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', margin: 0 }}>Conheça guias locais, com avaliações e experiência comprovada.</p>
          </div>
          <span style={{ fontSize: '0.9rem', color: '#38bdf8', fontStyle: 'italic' }}>✦ O Brasil te guia para novas histórias.</span>
        </div>
      </section>

      <div className="container" style={{ marginTop: '30px', maxWidth: '1100px' }}>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '14px', border: '1px solid var(--border)', marginBottom: '30px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '16px', alignItems: 'center' }}>
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>BUSCAR GUIA</label>
            <input 
              type="text" 
              placeholder="Nome ou cidade..." 
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none' }} 
            />
          </div>
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>FILTRAR POR ESTADO</label>
            <select style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem', background: '#fff' }}>
              <option>Todos os estados</option>
              <option>Rio de Janeiro - RJ</option>
              <option>Bahia - BA</option>
              <option>Paraná - PR</option>
              <option>Rio Grande do Sul - RS</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>FAIXA DE PREÇO</label>
            <select style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem', background: '#fff' }}>
              <option>Todos</option>
              <option>Até R$ 130</option>
              <option>Acima de R$ 130</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>AVALIAÇÃO</label>
            <select style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem', background: '#fff' }}>
              <option>Todas</option>
              <option>5 estrelas</option>
              <option>4 estrelas ou mais</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '30px', alignItems: 'start' }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--dark)', marginBottom: '16px' }}>Filtrar por</h3>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '8px' }}>FAIXA DE PREÇO</label>
              <select style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border)', fontSize: '0.85rem' }}>
                <option>Todos</option>
                <option>Até R$ 120</option>
                <option>R$ 120 - R$ 150</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '8px' }}>AVALIAÇÃO</label>
              {['5 estrelas', '4 estrelas ou mais'].map((item, idx) => (
                <label key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--dark)', marginBottom: '6px', cursor: 'pointer' }}>
                  <input type="checkbox" /> {item}
                </label>
              ))}
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--muted)', fontWeight: '600' }}>{guiasFiltrados.length} guias encontrados</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {guiasFiltrados.map((guia) => (
                <div key={guia.id} style={{ background: '#fff', padding: '20px', borderRadius: '14px', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <img src={guia.foto} alt={guia.nome} style={{ width: '65px', height: '65px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div>
                      <h3 style={{ fontSize: '1.05rem', color: 'var(--dark)', margin: '0 0 4px 0' }}>{guia.nome}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', marginBottom: '6px' }}>
                        <span style={{ color: '#f59e0b' }}>★</span>
                        <strong style={{ color: 'var(--dark)' }}>{guia.avaliacao}</strong>
                        <span style={{ color: 'var(--muted)' }}>({guia.reviews} avaliações)</span>
                      </div>
                      <div style={{ display: 'flex', gap: '16px', fontSize: '0.75rem', color: 'var(--muted)', flexWrap: 'wrap' }}>
                        <span>📍 {guia.regiao}</span>
                        <span>💼 {guia.exp}</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right', minWidth: '130px' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--muted)', display: 'block', fontWeight: '700' }}>R$ {guia.preco},00 / dia</span>
                    <span style={{ fontSize: '0.65rem', color: 'var(--muted)', display: 'block', marginBottom: '8px' }}>a partir de</span>
                    <Link to={`/guias/${guia.id}`} style={{ background: 'var(--primary)', color: '#fff', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '0.85rem', display: 'inline-block' }}>
                      Ver perfil →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}