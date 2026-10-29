import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function PerfilGuia() {
  const { id } = useParams()
  const [abaAtiva, setAbaAtiva] = useState('sobre')

  const guiasData = {
    '1': {
      nome: 'Mariana Silva',
      avaliacao: 5.0,
      reviews: 120,
      idiomas: 'Português, Inglês, Espanhol',
      cidade: 'Rio de Janeiro - RJ',
      preco: 150,
      experiencia: '8 anos',
      foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      sobre: 'Sou a Mariana, guia turística certificada, apaixonada por mostrar o melhor do Rio de Janeiro. Trabalho com turismo há mais de 8 anos e adoro compartilhar histórias, curiosidades e experiências que fazem cada viagem única e inesquecível. Meu objetivo é proporcionar experiências autênticas e seguras, sempre com um atendimento personalizado.',
      passeios: [
        { nome: 'Cristo Redentor', local: 'Rio de Janeiro - RJ', img: '/referencias/cristoredentor.jpg' },
        { nome: 'Pão de Açúcar', local: 'Rio de Janeiro - RJ', img: '/referencias/paodeacucar.jpg' },
        
      ]
    },
    '2': {
      nome: 'Carlos Mendes',
      avaliacao: 4.8,
      reviews: 95,
      idiomas: 'Português, Espanhol',
      cidade: 'Salvador - BA',
      preco: 120,
      experiencia: '5 anos',
      foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      sobre: 'Especialista na história e cultura baiana, com foco no Pelourinho, igrejas barrocas e praias do litoral norte.',
      passeios: [
        { nome: 'Pelourinho', local: 'Salvador - BA', img: '/referencias/pelourinho.jpg' },
      ]
    },
    '3': {
      nome: 'Ana Ribeiro',
      avaliacao: 4.9,
      reviews: 110,
      idiomas: 'Português, Inglês',
      cidade: 'Foz do Iguaçu - PR',
      preco: 130,
      experiencia: '6 anos',
      foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      sobre: 'Guia credenciada no Parque Nacional do Iguaçu, especialista em ecoturismo e aventura nas cataratas.',
      passeios: [
        { nome: 'Parque Nacional das Cataratas', local: 'Foz do Iguaçu - PR', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cataratas_do_iguacu.jpg?width=1200' }
      ]
    },
    '4': {
      nome: 'Lucas Ferreira',
      avaliacao: 4.7,
      reviews: 80,
      idiomas: 'Português',
      cidade: 'Gramado - RS',
      preco: 140,
      experiencia: '4 anos',
      foto: '/referencias/guialucas2.jpg',
      sobre: 'Apaixonado pela serra gaúcha, ofereço roteiros personalizados de inverno, vinícolas e passeios culturais.',
      passeios: [
        { nome: 'Centro de Gramado', local: 'Gramado - RS', img:  '/referencias/ruacoberta.png' },
      ]
    }
  }

  const guia = guiasData[id] || guiasData['1']

  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* Banner Superior Mais Largo e Alinhado à Esquerda */}
      <section style={{ 
        background: 'linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url("https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#fff'
      }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: '800', margin: 0, color: '#ffffff' }}>Perfil do Guia</h1>
        </div>
      </section>

      {/* Link discreto "Voltar para guias" */}
      <div className="container" style={{ maxWidth: '1000px', marginTop: '20px', marginBottom: '12px' }}>
        <Link to="/guias" style={{ color: 'var(--muted)', fontWeight: '600', fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          ← Voltar para guias
        </Link>
      </div>

      {/* Cartão de Perfil Principal */}
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '30px', border: '1px solid var(--border)', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
            
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
              <img src={guia.foto} alt={guia.nome} style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--dark)', margin: 0 }}>{guia.nome}</h2>
                  <span style={{ background: '#dcfce7', color: '#16a34a', padding: '2px 8px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: '700' }}>✓ Guia certificado</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', marginBottom: '8px' }}>
                  <span style={{ color: '#f59e0b' }}>★</span>
                  <strong style={{ color: 'var(--dark)' }}>{guia.avaliacao}</strong>
                  <span style={{ color: 'var(--muted)' }}>({guia.reviews} avaliações)</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: 'var(--muted)', flexWrap: 'wrap' }}>
                  <span>🗣️ {guia.idiomas}</span>
                  <span>📍 {guia.cidade}</span>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#16a34a', display: 'block' }}>R$ {guia.preco},00 / dia</span>
              <Link to="/contato" style={{ background: 'var(--primary)', color: '#fff', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '0.85rem', display: 'inline-block', marginTop: '10px', boxShadow: '0 2px 8px rgba(2, 132, 199, 0.2)' }}>
                ✉️ Entrar em contato
              </Link>
            </div>

          </div>

          <div style={{ display: 'flex', gap: '30px', borderBottom: '1px solid var(--border)', marginTop: '30px', marginBottom: '24px' }}>
            {['sobre', 'avaliacoes', 'disponibilidade'].map((aba) => (
              <button 
                key={aba}
                onClick={() => setAbaAtiva(aba)}
                style={{ 
                  background: 'transparent', border: 'none', padding: '10px 0', fontSize: '0.95rem', fontWeight: '700', 
                  color: abaAtiva === aba ? 'var(--primary)' : 'var(--muted)', 
                  borderBottom: abaAtiva === aba ? '2px solid var(--primary)' : '2px solid transparent', 
                  cursor: 'pointer', textTransform: 'capitalize' 
                }}
              >
                {aba}
              </button>
            ))}
          </div>

          {abaAtiva === 'sobre' && (
            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--dark)', marginBottom: '10px' }}>Sobre {guia.nome}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '30px' }}>
                {guia.sobre}
              </p>

              <div style={{ display: 'flex', gap: '40px', marginBottom: '30px', background: '#f8fafc', padding: '16px 24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: '700', display: 'block' }}>EXPERIÊNCIA</span>
                  <strong style={{ color: 'var(--dark)', fontSize: '1.05rem' }}>{guia.experiencia}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: '700', display: 'block' }}>IDIOMAS</span>
                  <strong style={{ color: 'var(--dark)', fontSize: '1.05rem' }}>{guia.idiomas}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: '700', display: 'block' }}>AVALIAÇÃO</span>
                  <strong style={{ color: 'var(--dark)', fontSize: '1.05rem' }}>{guia.avaliacao} / 5.0</strong>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--dark)', margin: 0 }}>Principais passeios</h3>
                <Link to="/destinos" style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem', textDecoration: 'none' }}>Ver todos →</Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                {guia.passeios.map((p, idx) => (
                  <div key={idx} style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                    <img src={p.img} alt={p.nome} style={{ width: '100%', height: '130px', objectFit: 'cover' }} />
                    <div style={{ padding: '12px' }}>
                      <h4 style={{ fontSize: '0.95rem', color: 'var(--dark)', margin: '0 0 4px 0' }}>{p.nome}</h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>📍 {p.local}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {abaAtiva === 'avaliacoes' && (
            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--dark)', marginBottom: '16px' }}>Avaliações de viajantes</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { nome: 'Camila Souza', nota: 5, comentario: 'Excelente guia! Muito atenciosa, pontual e conhece todos os detalhes da cidade.' },
                  { nome: 'Roberto Alves', nota: 5, comentario: 'Passeio incrível! O Lucas tornou a experiência na serra inesquecível para toda a família.' }
                ].map((av, idx) => (
                  <div key={idx} style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <strong style={{ color: 'var(--dark)', fontSize: '0.9rem' }}>{av.nome}</strong>
                      <span style={{ color: '#f59e0b', fontSize: '0.85rem' }}>★★★★★</span>
                    </div>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem', margin: 0 }}>{av.comentario}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {abaAtiva === 'disponibilidade' && (
            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--dark)', marginBottom: '10px' }}>Agenda e Disponibilidade</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                Este guia possui disponibilidade para agendamento nos próximos meses. Entre em contato para verificar datas específicas.
              </p>
              <div style={{ background: '#dcfce7', border: '1px solid #86efac', padding: '16px', borderRadius: '10px', color: '#166534', fontWeight: '600', fontSize: '0.9rem' }}>
                🟢 Disponível para novas reservas e roteiros personalizados.
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}