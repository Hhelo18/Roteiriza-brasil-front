import { Link } from 'react-router-dom'

export default function DicasViagem() {
  const seguranca = [
    'Evite ostentar objetos de valor.',
    'Mantenha locais movimentados e bem iluminados.',
    'Mantenha seus documentos em um local seguro.',
    'Use aplicativos de transporte confiáveis.',
    'Informe alguém sobre seu roteiro de viagem.'
  ]

  const telefones = [
    { nome: 'Polícia Militar', num: '190' },
    { nome: 'Bombeiros', num: '193' },
    { nome: 'SAMU', num: '192' },
    { nome: 'Turismo (Informações)', num: '0800 600 4060' }
  ]

  const linksUteis = [
    { nome: 'Polícia Federal', icone: '🛂', url: 'https://www.gov.br/pf' },
    { nome: 'Consulado', icone: '🏛️', url: 'https://www.gov.br/mre' },
    { nome: 'Embaixada', icone: '🌐', url: 'https://www.gov.br/mre' },
    { nome: 'Defesa Civil', icone: '🛡️', url: 'https://www.gov.br' }
  ]

  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '60px' }}>
      <section style={{ 
        background: 'linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#fff'
      }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h1 style={{ fontSize: '2.4rem', fontWeight: '800', marginBottom: '8px', color: '#ffffff' }}>Dicas de viagem</h1>
          <p style={{ color: '#cbd5e1', fontSize: '1rem', margin: 0 }}>Informações importantes para você viajar com mais segurança e aproveitar ainda mais.</p>
        </div>
      </section>

      <div className="container" style={{ marginTop: '30px', maxWidth: '1100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px', marginBottom: '30px' }}>
          <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: '1.1rem', color: 'var(--dark)', marginBottom: '16px' }}>Dicas de segurança</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {seguranca.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--dark)' }}>
                  <span style={{ background: '#dcfce7', color: '#16a34a', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '700' }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: '1.1rem', color: 'var(--dark)', marginBottom: '16px' }}>Telefones úteis</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {telefones.map((t, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '8px', borderBottom: idx < telefones.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--dark)' }}>{t.nome}</span>
                  <strong style={{ color: 'var(--primary)', fontSize: '0.95rem' }}>{t.num}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
          <h2 style={{ fontSize: '1.1rem', color: 'var(--dark)', marginBottom: '16px' }}>Links importantes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', textAlign: 'center' }}>
            {linksUteis.map((item, idx) => (
              <a 
                key={idx} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ padding: '20px 16px', background: '#f8fafc', borderRadius: '10px', border: '1px solid var(--border)', textDecoration: 'none', display: 'block' }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{item.icone}</div>
                <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--primary)' }}>{item.nome} ↗</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}