import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Gastos() {
  const [dias, setDias] = useState(5)
  const [hospedagem, setHospedagem] = useState(150)
  const [alimentacao, setAlimentacao] = useState(90)
  const [transporte, setTransporte] = useState(50)
  const [passeios, setPasseios] = useState(100)
  const [outros, setOutros] = useState(40)

  // Converte dias para número para garantir o cálculo correto em tempo real
  const qtdDias = Number(dias) || 0

  // Cálculo dos totais multiplicados pelos dias
  const totalHospedagem = hospedagem * qtdDias
  const totalAlimentacao = alimentacao * qtdDias
  const totalTransporte = transporte * qtdDias
  const totalPasseios = passeios * qtdDias
  const totalOutros = outros * qtdDias

  const custoTotal = totalHospedagem + totalAlimentacao + totalTransporte + totalPasseios + totalOutros
  const mediaDiaria = qtdDias > 0 ? custoTotal / qtdDias : 0

  return (
    <main className="gastos-page">
      {/* Banner Principal da Página de Gastos */}
      <section className="home-hero" style={{ minHeight: '340px', padding: '50px 0' }}>
        <div className="home-hero-inner">
          <span className="eyebrow" style={{ color: '#a8edf6' }}>✦ ORÇAMENTO E PLANEAMENTO</span>
          <h1>Simulação de gastos</h1>
          <p>
            Informe quantos dias vai viajar e quanto pretende gastar em cada categoria para ver o total estimado e a média por dia.
          </p>

          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            <Link to="/meu-roteiro" className="btn">
              📋 Estimar pelo roteiro
            </Link>
          </div>
        </div>
      </section>

      {/* Painel de Resumo / Total Estimado */}
      <section className="container section" style={{ paddingBottom: '15px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', 
          gap: '20px', 
          background: '#ffffff', 
          padding: '24px', 
          borderRadius: '16px', 
          border: '1px solid var(--border)', 
          boxShadow: 'var(--shadow)',
          alignItems: 'center'
        }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>TOTAL ESTIMADO DA VIAGEM</span>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)' }}>
              R$ {custoTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <small style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{qtdDias} dias de viagem</small>
          </div>

          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>MÉDIA DIÁRIA</span>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--dark)' }}>
              R$ {mediaDiaria.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <small style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Custo médio por dia</small>
          </div>

          <div style={{ textAlign: 'right' }}>
            <button 
              onClick={() => alert('Simulação salva com sucesso!')}
              className="btn"
              style={{ background: 'var(--primary)', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}
            >
              Salvar simulação
            </button>
          </div>
        </div>
      </section>

      {/* Formulário de Dados da Viagem e Categorias */}
      <section className="container section" style={{ paddingTop: '15px' }}>
        <div style={{ background: '#ffffff', padding: '30px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
          <h3 style={{ marginBottom: '20px', fontSize: '1.25rem', color: 'var(--dark)' }}>Dados da viagem</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '30px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--dark)', marginBottom: '8px' }}>
                Quantidade de dias
              </label>
              <input 
                type="number" 
                value={dias} 
                onChange={(e) => setDias(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem' }}
                min="1"
              />
            </div>
          </div>

          <h3 style={{ marginBottom: '20px', fontSize: '1.25rem', color: 'var(--dark)' }}>Custos médios diários por categoria (R$)</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--muted)', marginBottom: '6px' }}>Hospedagem (dia)</label>
              <input 
                type="number" 
                value={hospedagem} 
                onChange={(e) => setHospedagem(Number(e.target.value))}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--muted)', marginBottom: '6px' }}>Alimentação (dia)</label>
              <input 
                type="number" 
                value={alimentacao} 
                onChange={(e) => setAlimentacao(Number(e.target.value))}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--muted)', marginBottom: '6px' }}>Transporte (dia)</label>
              <input 
                type="number" 
                value={transporte} 
                onChange={(e) => setTransporte(Number(e.target.value))}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--muted)', marginBottom: '6px' }}>Passeios / Atividades (dia)</label>
              <input 
                type="number" 
                value={passeios} 
                onChange={(e) => setPasseios(Number(e.target.value))}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--muted)', marginBottom: '6px' }}>Outros gastos (dia)</label>
              <input 
                type="number" 
                value={outros} 
                onChange={(e) => setOutros(Number(e.target.value))}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)' }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}