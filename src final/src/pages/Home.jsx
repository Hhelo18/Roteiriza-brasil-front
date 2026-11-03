import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
  const [termoBusca, setTermoBusca] = useState('')
  const navigate = useNavigate()

  const lidarComBusca = (e) => {
    e.preventDefault()
    if (termoBusca.trim()) {
      navigate(`/destinos?busca=${encodeURIComponent(termoBusca)}`)
    } else {
      navigate('/destinos')
    }
  }

  // Destinos em Destaque
  const destaques = [
    {
      id: 'rio-de-janeiro',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      subtitulo: 'RIO DE JANEIRO • SUDESTE',
      categoria: 'Praia',
      preco: 420,
      rating: 4.8,
      reviews: 18,
      descricao: 'Praia, cultura urbana e paisagens inesquecíveis no cartão-postal do Brasil.',
      imagem: '/referencias/cristoredentor.jpg',
    },
    {
      id: 'sao-paulo',
      cidade: 'São Paulo',
      estado: 'SP',
      subtitulo: 'SÃO PAULO • SUDESTE',
      categoria: 'Urbano',
      preco: 380,
      rating: 4.5,
      reviews: 25,
      descricao: 'Gastronomia, museus e vida cultural na maior cidade do país.',
     imagem: '/referencias/saopaulo.jpg',
    },
    {
      id: 'salvador',
      cidade: 'Salvador',
      estado: 'BA',
      subtitulo: 'BAHIA • NORDESTE',
      categoria: 'Cidades históricas',
      preco: 300,
      rating: 4.5,
      reviews: 15,
      descricao: 'O primeiro centro histórico do Brasil, com música, axé e comida baiana.',
      imagem: '/referencias/pelourinho.jpg',
    },
    {
      id: 'foz-do-iguacu',
      cidade: 'Foz do Iguaçu',
      estado: 'PR',
      subtitulo: 'PARANÁ • SUL',
      categoria: 'Natureza',
      preco: 390,
      rating: 4.9,
      reviews: 22,
      descricao: 'Parque Nacional com as majestosas quedas d’água e imersão na natureza.',
       imagem: '/referencias/cataratas.jpg',
    },
    {
      id: 'lencois-maranhenses',
      cidade: 'Barreirinhas (Lençóis)',
      estado: 'MA',
      subtitulo: 'MARANHÃO • NORDESTE',
      categoria: 'Aventura',
      preco: 380,
      rating: 4.9,
      reviews: 14,
      descricao: 'Dunas de areia branca com lagoas de água doce, um cenário único no mundo.',
      imagem: '/referencias/lencoesmaranhenses.jpg',
    }
  ]

  const categorias = [
    { nome: 'Praias', icone: '🏖️', desc: 'Sol, mar e litoral' },
    { nome: 'Montanhas', icone: '⛰️', desc: 'Clima de serra e frio' },
    { nome: 'Cidades históricas', icone: '🏛️', desc: 'Arquitetura e cultura' },
    { nome: 'Natureza', icone: '🌿', desc: 'Ecoturismo e parques' },
    { nome: 'Aventura', icone: '🧗', desc: 'Trilhas e adrenalina' },
    { nome: 'Urbano', icone: '🏙️', desc: 'Metrópoles e museus' }
  ]

  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* Banner Principal (Hero) com Barra de Busca */}
      <section style={{ 
        position: 'relative', 
        background: 'linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url("/referencias/cristoredentor.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '70px 20px 90px 20px',
        textAlign: 'left'
      }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <span style={{ 
            display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: '#a8edf6', 
            padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700', marginBottom: '16px',
            backdropFilter: 'blur(4px)'
          }}>
            ✦ PLANEJAMENTO DE VIAGENS PELO BRASIL
          </span>
          
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '16px', maxWidth: '700px', color: '#ffffff' }}>
            Descubra o Brasil do seu jeito
          </h1>

          <p style={{ fontSize: '1.05rem', color: '#f1f5f9', lineHeight: '1.6', maxWidth: '650px', marginBottom: '30px' }}>
            Encontre destinos, atrações, restaurantes e passeios em todo o país. Monte seu roteiro dia a dia, organize horários e acompanhe os custos da viagem.
          </p>

          <form onSubmit={lidarComBusca} style={{ 
            background: '#fff', padding: '8px', borderRadius: '12px', 
            display: 'flex', maxWidth: '600px', boxShadow: '0 10px 25px rgba(0,0,0,0.15)', gap: '8px' 
          }}>
            <input 
              type="text" 
              placeholder="Para onde você quer ir? Ex: Salvador, praia, serra..." 
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              style={{ flex: 1, border: 'none', padding: '12px 16px', fontSize: '0.95rem', outline: 'none', background: 'transparent' }}
            />
            <button type="submit" style={{ 
              background: '#0284c7', color: '#fff', border: 'none', 
              padding: '12px 24px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', fontSize: '0.95rem', whiteSpace: 'nowrap' 
            }}>
              Buscar destinos →
            </button>
          </form>

          <div style={{ display: 'flex', gap: '24px', marginTop: '24px', color: '#e2e8f0', fontSize: '0.85rem', flexWrap: 'wrap' }}>
            <span>📍 12 estados cadastrados</span>
            <span>📅 Roteiro organizado por dia e horário</span>
            <span>💰 Diárias de R$ 240,00 a R$ 450,00</span>
          </div>
        </div>
      </section>

      {/* Categorias de Experiências */}
      <div className="container" style={{ marginTop: '50px', marginBottom: '50px', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', color: '#0f172a', margin: '0 0 4px 0' }}>Categorias de experiências</h2>
            <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Escolha o tipo de viagem que combina com você — praia, serra, história, natureza, aventura ou urbano.</p>
          </div>
          <Link to="/destinos" style={{ color: '#0284c7', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Ver todos os destinos →</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginTop: '16px' }}>
          {categorias.map((cat, idx) => (
            <Link key={idx} to="/destinos" style={{ 
              background: '#fff', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0', 
              textAlign: 'center', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{cat.icone}</div>
              <div style={{ fontWeight: '700', color: '#0f172a', fontSize: '0.9rem', marginBottom: '4px' }}>{cat.nome}</div>
              <div style={{ color: '#64748b', fontSize: '0.75rem' }}>{cat.desc}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Destinos em Destaque */}
      <div className="container" style={{ marginBottom: '60px', padding: '0 20px' }}>
        <h2 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '20px' }}>Destinos em destaque</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {destaques.map((item) => (
            <div key={item.id} style={{ 
              background: '#fff', borderRadius: '16px', overflow: 'hidden', 
              border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ position: 'relative', height: '180px' }}>
                  <img src={item.imagem} alt={item.cidade} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ 
                    position: 'absolute', top: '10px', left: '10px', 
                    background: 'rgba(0,0,0,0.6)', color: '#fff', 
                    padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '600' 
                  }}>
                    {item.categoria}
                  </span>
                </div>
                
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                    <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#0f172a' }}>{item.cidade}</h3>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '600' }}>📍 {item.estado}</span>
                  </div>

                  <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: '700', marginBottom: '10px', letterSpacing: '0.5px' }}>
                    {item.subtitulo}
                  </div>

                  <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.4', margin: '0 0 12px 0' }}>
                    {item.descricao}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: '#f59e0b', fontSize: '0.9rem' }}>★★★★★</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0f172a' }}>{item.rating}</span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>({item.reviews} avaliações)</span>
                  </div>
                </div>
              </div>

              {/* Direcionando diretamente para /destinos */}
              <div style={{ padding: '16px 20px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: '700', display: 'block' }}>DIÁRIA MÉDIA</span>
                  <span style={{ fontSize: '1.15rem', fontWeight: '800', color: '#16a34a' }}>
                    R$ {item.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <Link to="/destinos" style={{ 
                  background: '#f1f5f9', color: '#0284c7', padding: '6px 12px', 
                  borderRadius: '8px', fontWeight: '700', fontSize: '0.85rem', textDecoration: 'none',
                  border: '1px solid #e2e8f0'
                }}>
                  Ver destinos →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Como Funciona */}
      <div className="container" style={{ marginBottom: '60px', padding: '0 20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.4rem', color: '#0f172a', margin: '0 0 4px 0' }}>Como funciona</h2>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Em três passos você sai da vontade de viajar para um roteiro pronto, com programação e orçamento.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '36px', height: '36px', background: '#e0f2fe', color: '#0284c7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', marginBottom: '14px' }}>1</div>
              <h3 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '8px' }}>1. Escolha o destino</h3>
              <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.5', margin: '0 0 20px 0' }}>
                Pesquise por cidade, estado ou tipo de experiência e veja preços médios, atrações e restaurantes.
              </p>
            </div>
            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '12px', fontSize: '0.8rem', color: '#64748b', display: 'flex', justifyContent: 'space-between' }}>
              <span>ESTADOS ATENDIDOS</span>
              <strong style={{ color: '#0f172a' }}>12</strong>
            </div>
          </div>

          <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '36px', height: '36px', background: '#e0f2fe', color: '#0284c7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', marginBottom: '14px' }}>2</div>
              <h3 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '8px' }}>2. Monte o roteiro</h3>
              <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.5', margin: '0 0 20px 0' }}>
                Adicione atrações, passeios e restaurantes com data e horário. Sua programação fica organizada automaticamente no Roteiro.
              </p>
            </div>
            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '12px', fontSize: '0.8rem', color: '#64748b', display: 'flex', justifyContent: 'space-between' }}>
              <span>ITENS PARA O ROTEIRO</span>
              <strong style={{ color: '#0f172a' }}>Roteiro completo</strong>
            </div>
          </div>

          <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '36px', height: '36px', background: '#e0f2fe', color: '#0284c7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', marginBottom: '14px' }}>3</div>
              <h3 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '8px' }}>3. Controle os gastos</h3>
              <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.5', margin: '0 0 20px 0' }}>
                Simule o custo da viagem, acompanhe o total por categoria e registre tudo em Gastos.
              </p>
            </div>
            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '12px', fontSize: '0.8rem', color: '#64748b', display: 'flex', justifyContent: 'space-between' }}>
              <span>CONTROLE FINANCEIRO</span>
              <strong style={{ color: '#0f172a' }}>Simulação + despesas</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Final */}
      <div className="container" style={{ padding: '0 20px' }}>
        <div style={{ 
          background: 'linear-gradient(135deg, #0284c7, #0369a1)', 
          borderRadius: '20px', padding: '40px', color: '#fff', textAlign: 'center',
          boxShadow: '0 10px 30px rgba(2, 132, 199, 0.2)'
        }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '12px', color: '#ffffff' }}>
            Pronto para montar seu roteiro?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#e0f2fe', maxWidth: '650px', margin: '0 auto 24px auto', lineHeight: '1.5' }}>
            Crie sua conta gratuita e comece a planejar a próxima viagem: adicione atrações, organize os horários e descubra quanto vai gastar antes de sair de casa.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/meu-roteiro" style={{ background: '#fff', color: '#0f172a', padding: '12px 24px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              📅 Criar meu roteiro
            </Link>
            <Link to="/cadastro" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', padding: '12px 24px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', fontSize: '0.95rem', backdropFilter: 'blur(4px)' }}>
              Criar conta gratuita
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}