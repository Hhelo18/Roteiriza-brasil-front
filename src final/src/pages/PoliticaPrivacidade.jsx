import { useState } from 'react'

export default function PoliticaPrivacidade() {
  const [aba, setAba] = useState('privacidade')

  const conteudos = {
    termos: {
      titulo: 'Termos de Uso',
      sub: 'Última atualização: 24 de setembro de 2026.',
      texto: (
        <>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>1. Aceitação dos Termos</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '16px' }}>
            Ao acessar e utilizar o Roteiriza Brasil, você concorda expressamente com estes Termos de Uso e com a nossa Política de Privacidade.
          </p>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>2. Propriedade Intelectual</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '16px' }}>
            Todo o conteúdo presente nesta plataforma, incluindo textos, imagens, logotipos e códigos, é de uso exclusivo para fins educacionais e do projeto acadêmico.
          </p>
        </>
      )
    },
    privacidade: {
      titulo: 'Política de Privacidade',
      sub: 'Última atualização: 24 de setembro de 2026.',
      texto: (
        <>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '24px' }}>
            A sua privacidade é muito importante para nós. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais na Roteiriza Brasil.
          </p>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>1. Quais dados coletamos</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '16px' }}>Podemos coletar as seguintes informações quando você utiliza nossa plataforma:</p>
          <ul style={{ color: 'var(--muted)', fontSize: '0.85rem', paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <li>Nome completo</li>
            <li>E-mail</li>
            <li>Telefone</li>
            <li>Preferências de viagem</li>
          </ul>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>2. Como usamos seus dados</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '16px' }}>Seus dados são utilizados para criar sua conta, personalizar sua experiência e processar roteiros.</p>
        </>
      )
    },
    cookies: {
      titulo: 'Política de Cookies',
      sub: 'Última atualização: 24 de setembro de 2026.',
      texto: (
        <>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>1. O que são Cookies?</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '16px' }}>
            Cookies são pequenos arquivos salvos no seu navegador para melhorar a experiência de navegação e lembrar suas preferências de roteiro.
          </p>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>2. Como utilizamos</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '16px' }}>
            Utilizamos cookies estritamente necessários para o armazenamento local das suas preferências de viagem na aplicação.
          </p>
        </>
      )
    },
    lgpd: {
      titulo: 'LGPD (Lei Geral de Proteção de Dados)',
      sub: 'Última atualização: 24 de setembro de 2026.',
      texto: (
        <>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>1. Direitos do Titular</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '16px' }}>
            Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem direito ao acesso facilitado, correção e exclusão dos seus dados cadastrados.
          </p>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>2. Contato do Encarregado</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '16px' }}>
            Para exercer seus direitos sob a LGPD, envie um e-mail para <strong style={{ color: 'var(--primary)' }}>lgpd@roteirizabrasil.com</strong>.
          </p>
        </>
      )
    }
  }

  const atual = conteudos[aba]

  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '60px' }}>
      <section style={{ 
        background: 'linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url("https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#fff'
      }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h1 style={{ fontSize: '2.4rem', fontWeight: '800', marginBottom: '8px', color: '#ffffff' }}>{atual.titulo}</h1>
          <p style={{ color: '#cbd5e1', fontSize: '1rem', margin: 0 }}>{atual.sub}</p>
        </div>
      </section>

      <div className="container" style={{ marginTop: '30px', maxWidth: '1100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr 260px', gap: '30px', alignItems: 'start' }}>
          
          <div style={{ background: '#fff', padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { chave: 'termos', nome: 'Termos de Uso' },
              { chave: 'privacidade', nome: 'Política de Privacidade' },
              { chave: 'cookies', nome: 'Cookies' },
              { chave: 'lgpd', nome: 'LGPD' }
            ].map((item) => {
              const ativo = aba === item.chave
              return (
                <button 
                  key={item.chave}
                  onClick={() => setAba(item.chave)}
                  style={{ 
                    textAlign: 'left', padding: '10px 12px', borderRadius: '8px', border: 'none', 
                    background: ativo ? '#e0f2fe' : 'transparent', color: ativo ? 'var(--primary)' : 'var(--dark)', 
                    fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer' 
                  }}
                >
                  {item.nome}
                </button>
              )
            })}
          </div>

          <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', color: 'var(--dark)', lineHeight: '1.6' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '16px' }}>{atual.titulo}</h2>
            {atual.texto}
          </div>

          <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🔒</div>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--dark)', marginBottom: '8px' }}>Seus dados são protegidos conosco.</h4>
            <p style={{ color: 'var(--muted)', fontSize: '0.75rem', lineHeight: '1.5', margin: 0 }}>
              Comprometimento com a sua privacidade e segurança em cada etapa do seu planejamento de viagem.
            </p>
          </div>

        </div>
      </div>
    </main>
  )
}