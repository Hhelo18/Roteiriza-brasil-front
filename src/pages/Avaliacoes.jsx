import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Avaliacoes() {
  const [avaliacoes, setAvaliacoes] = useState([
    {
      id: 1,
      nome: 'Renata Lima',
      data: '21/05/2026',
      nota: 5,
      comentario: 'Melhor gastronomia que já experimentei. A Paulista no domingo é ótima para caminhar.'
    },
    {
      id: 2,
      nome: 'Diego Martins',
      data: '08/04/2026',
      nota: 4,
      comentario: 'Cidade grande e corrida, mas os museus são excelentes e quase todos gratuitos.'
    }
  ])

  const [novoNome, setNovoNome] = useState('')
  const [novoComentario, setNovoComentario] = useState('')
  const [novaNota, setNovaNota] = useState(5)
  const [mostrarModal, setMostrarModal] = useState(false)

  const adicionarAvaliacao = (e) => {
    e.preventDefault()
    if (!novoNome || !novoComentario) return

    const nova = {
      id: Date.now(),
      nome: novoNome,
      data: '25/10/2026',
      nota: Number(novaNota),
      comentario: novoComentario
    }

    setAvaliacoes([nova, ...avaliacoes])
    setNovoNome('')
    setNovoComentario('')
    setNovaNota(5)
    setMostrarModal(false)
  }

  const mediaNotas = avaliacoes.length > 0 
    ? (avaliacoes.reduce((acc, a) => acc + a.nota, 0) / avaliacoes.length).toFixed(1)
    : '5.0'

  return (
    <main className="avaliacoes-page">
      {/* Banner Principal */}
      <section className="home-hero" style={{ minHeight: '340px', padding: '50px 0' }}>
        <div className="home-hero-inner">
          <span className="eyebrow" style={{ color: '#a8edf6' }}>✦ EXPERIÊNCIAS DA COMUNIDADE</span>
          <h1>Avaliações dos viajantes</h1>
          <p>
            Confira as experiências, dicas e opiniões deixadas por quem já viajou por todo o Brasil.
          </p>

          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setMostrarModal(true)} 
              className="btn"
              style={{ background: '#fff', color: 'var(--primary)', border: 'none', fontWeight: '700' }}
            >
              ★ Escrever avaliação
            </button>
            <Link to="/destinos" className="btn" style={{ background: 'transparent', border: '1px solid #fff', color: '#fff' }}>
              Buscar destino
            </Link>
          </div>
        </div>
      </section>

      {/* Resumo de Avaliações */}
      <section className="container section" style={{ paddingBottom: '15px' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          background: '#ffffff', 
          padding: '24px 30px', 
          borderRadius: '16px', 
          border: '1px solid var(--border)', 
          boxShadow: 'var(--shadow)',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>CLASSIFICAÇÃO MÉDIA</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--dark)' }}>{mediaNotas}</span>
              <div>
                <div style={{ color: '#f59e0b', fontSize: '1.1rem' }}>★★★★★</div>
                <small style={{ color: 'var(--muted)' }}>Com base em {avaliacoes.length} avaliações</small>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setMostrarModal(true)}
            style={{ background: 'var(--primary)', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}
          >
            Escrever avaliação
          </button>
        </div>
      </section>

      {/* Lista de Avaliações */}
      <section className="container section" style={{ paddingTop: '15px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {avaliacoes.map((item) => (
            <div key={item.id} style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <strong style={{ display: 'block', color: 'var(--dark)', fontSize: '1.05rem' }}>{item.nome}</strong>
                  <small style={{ color: 'var(--muted)' }}>{item.data}</small>
                </div>
                <div style={{ color: '#f59e0b' }}>
                  {'★'.repeat(item.nota)}{'☆'.repeat(5 - item.nota)}
                </div>
              </div>
              <p style={{ color: 'var(--dark)', margin: 0, lineHeight: '1.5' }}>
                &ldquo;{item.comentario}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal para Nova Avaliação */}
      {mostrarModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', width: '400px', maxWidth: '90%', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
            <h3 style={{ marginBottom: '20px', color: 'var(--dark)' }}>Escrever avaliação</h3>
            <form onSubmit={adicionarAvaliacao}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '6px' }}>Seu Nome</label>
                <input 
                  type="text" 
                  value={novoNome} 
                  onChange={(e) => setNovoNome(e.target.value)}
                  placeholder="Ex: Ana Souza"
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)' }}
                  required
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '6px' }}>Nota (1 a 5)</label>
                <select 
                  value={novaNota} 
                  onChange={(e) => setNovaNota(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)' }}
                >
                  <option value="5">5 - Excelente</option>
                  <option value="4">4 - Muito bom</option>
                  <option value="3">3 - Bom</option>
                  <option value="2">2 - Regular</option>
                  <option value="1">1 - Ruim</option>
                </select>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '6px' }}>Comentário</label>
                <textarea 
                  value={novoComentario} 
                  onChange={(e) => setNovoComentario(e.target.value)}
                  placeholder="Conte como foi a sua experiência..."
                  rows="4"
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)', resize: 'vertical' }}
                  required
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button 
                  type="button" 
                  onClick={() => setMostrarModal(false)}
                  style={{ background: '#ccc', border: 'none', padding: '10px 16px', borderRadius: '8px', cursor: 'pointer' }}
                >
                  Cancelar
                </button>
                <button 
                  type="submit" 
                  style={{ background: 'var(--primary)', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}
                >
                  Publicar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}