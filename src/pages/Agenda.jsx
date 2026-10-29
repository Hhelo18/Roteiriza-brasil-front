import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Agenda() {
  const [atividades] = useState([
    {
      id: 1,
      dia: 'Segunda-feira, 12 de outubro',
      horario: '06:10',
      titulo: 'Avenida Paulista',
      local: 'São Paulo - SP',
      custo: 450.00
    }
  ])

  const custoTotalAgendado = atividades.reduce((acc, item) => acc + item.custo, 0)

  return (
    <main className="agenda-page">
      {/* Banner Principal da Agenda */}
      <section className="home-hero" style={{ minHeight: '340px', padding: '50px 0' }}>
        <div className="home-hero-inner">
          <span className="eyebrow" style={{ color: '#a8edf6' }}>✦ CRONOGRAMA DE VIAGEM</span>
          <h1>Agenda da viagem</h1>
          <p>
            Todas as atividades do seu roteiro organizadas por dia e horário — do primeiro café ao último passeio.
          </p>

          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            <Link to="/meu-roteiro" className="btn">
              ✏️ Editar roteiro
            </Link>
          </div>
        </div>
      </section>

      {/* Painel de Métricas / Resumo da Agenda */}
      <section className="container section" style={{ paddingBottom: '15px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', 
          gap: '16px', 
          background: '#ffffff', 
          padding: '24px', 
          borderRadius: '16px', 
          border: '1px solid var(--border)', 
          boxShadow: 'var(--shadow)',
          alignItems: 'center'
        }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>DIAS COM ATIVIDADES</span>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--dark)' }}>1</div>
            <small style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Datas organizadas</small>
          </div>

          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>ATIVIDADES AGENDADAS</span>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--dark)' }}>{atividades.length}</div>
            <small style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Itens com data definida</small>
          </div>

          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>SEM DATA DEFINIDA</span>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--dark)' }}>0</div>
            <small style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Ajuste no roteiro para agendar</small>
          </div>

          <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '20px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--primary)', display: 'block', marginBottom: '4px' }}>CUSTO AGENDADO</span>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary)' }}>
              R$ {custoTotalAgendado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <small style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Soma dos custos dos itens</small>
          </div>
        </div>
      </section>

      {/* Lista de Atividades por Dia */}
      <section className="container section" style={{ paddingTop: '15px' }}>
        <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
          <div style={{ background: 'var(--surface)', padding: '16px 24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--dark)' }}>Segunda-feira, 12 de outubro</h3>
            <span style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '0.95rem' }}>
              R$ 450,00
            </span>
          </div>

          <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontWeight: '700', color: 'var(--muted)', fontSize: '0.95rem' }}>06:10</span>
              <div>
                <strong style={{ display: 'block', color: 'var(--dark)', fontSize: '1rem' }}>Avenida Paulista</strong>
                <small style={{ color: 'var(--muted)' }}>Atração • São Paulo - SP</small>
              </div>
            </div>
            <div style={{ fontWeight: '700', color: 'var(--dark)' }}>
              R$ 450,00
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}