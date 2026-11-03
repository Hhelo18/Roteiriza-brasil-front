import { useState } from 'react'

export default function Contato() {
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* Banner */}
      <section style={{ 
        background: 'linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url("https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#fff'
      }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h1 style={{ fontSize: '2.4rem', fontWeight: '800', marginBottom: '8px', color: '#ffffff' }}>Fale com a gente</h1>
          <p style={{ color: '#cbd5e1', fontSize: '1rem', margin: 0 }}>Tire suas dúvidas, envie sugestões ou fale conosco. Será um prazer te ajudar!</p>
        </div>
      </section>

      <div className="container" style={{ marginTop: '30px', maxWidth: '1100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1.2fr', gap: '30px', background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', alignItems: 'center' }}>
          
          {/* Informações de Contato */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: '700', display: 'block' }}>E-MAIL</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--dark)', fontWeight: '600' }}>contato@roteirizabrasil.com</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)', display: 'block' }}>Respondemos em até 24 horas.</span>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: '700', display: 'block' }}>TELEFONE</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--dark)', fontWeight: '600' }}>(11) 98765-4321</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)', display: 'block' }}>Segunda a sexta, das 9h às 18h.</span>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: '700', display: 'block' }}>HORÁRIO DE ATENDIMENTO</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--dark)' }}>Segunda a sexta, das 9h às 18h. Exceto feriados nacionais.</span>
            </div>
          </div>

          {/* Formulário */}
          <div>
            {enviado ? (
              <div style={{ background: '#dcfce7', border: '1px solid #86efac', padding: '20px', borderRadius: '12px', color: '#166534', textAlign: 'center', fontWeight: '600' }}>
                Mensagem enviada com sucesso! Retornaremos em breve.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', marginBottom: '4px' }}>NOME COMPLETO</label>
                  <input type="text" required placeholder="Digite seu nome" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', marginBottom: '4px' }}>E-MAIL</label>
                  <input type="email" required placeholder="seu@email.com" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', marginBottom: '4px' }}>MENSAGEM</label>
                  <textarea required rows="3" placeholder="Digite sua mensagem aqui..." style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem', resize: 'none' }}></textarea>
                </div>
                <button type="submit" style={{ background: 'var(--primary)', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', fontSize: '0.95rem' }}>
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>

          {/* Imagem Ilustrativa (Rigidamente igual ao print) */}
          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '240px' }}>
            <img src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=600&q=80" alt="Rio de Janeiro" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '16px', left: '16px', color: '#fff', fontWeight: '800', fontSize: '1.1rem', textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>
              Estamos aqui <br />para te ajudar! ✈️
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}