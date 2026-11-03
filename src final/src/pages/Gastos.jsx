import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const moeda = (valor) => Number(valor || 0).toLocaleString('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const despesasIniciais = [
  { id: 1, descricao: 'Hotel Central', categoria: 'Hospedagem', valor: 450, data: '12/10/2026' },
  { id: 2, descricao: 'Almoço no Mercado', categoria: 'Alimentação', valor: 85, data: '12/10/2026' }
]

export default function Gastos() {
  const [dias, setDias] = useState(5)
  const [hospedagem, setHospedagem] = useState(150)
  const [alimentacao, setAlimentacao] = useState(90)
  const [transporte, setTransporte] = useState(50)
  const [passeios, setPasseios] = useState(100)
  const [outros, setOutros] = useState(40)

  const [despesas, setDespesas] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('roteiriza_despesas') || 'null') || despesasIniciais
    } catch {
      return despesasIniciais
    }
  })
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [novaDescricao, setNovaDescricao] = useState('')
  const [novaCategoria, setNovaCategoria] = useState('Hospedagem')
  const [novoValor, setNovoValor] = useState('')
  const [novaData, setNovaData] = useState('')

  useEffect(() => {
    localStorage.setItem('roteiriza_despesas', JSON.stringify(despesas))
  }, [despesas])

  const qtdDias = Math.max(0, Number(dias) || 0)
  const custoEstimado = (Number(hospedagem) + Number(alimentacao) + Number(transporte) + Number(passeios) + Number(outros)) * qtdDias
  const mediaDiaria = qtdDias ? custoEstimado / qtdDias : 0
  const totalRegistrado = despesas.reduce((soma, item) => soma + Number(item.valor || 0), 0)
  const totalCategoria = (categoria) => despesas.filter(item => item.categoria === categoria).reduce((soma, item) => soma + Number(item.valor || 0), 0)

  const adicionarDespesa = (e) => {
    e.preventDefault()
    if (!novaDescricao.trim() || novoValor === '' || Number(novoValor) < 0) return
    setDespesas(atual => [{
      id: Date.now(),
      descricao: novaDescricao.trim(),
      categoria: novaCategoria,
      valor: Number(novoValor),
      data: novaData ? new Date(`${novaData}T12:00:00`).toLocaleDateString('pt-BR') : new Date().toLocaleDateString('pt-BR')
    }, ...atual])
    setNovaDescricao('')
    setNovoValor('')
    setNovaData('')
    setMostrarFormulario(false)
  }

  const removerDespesa = (id) => setDespesas(atual => atual.filter(item => item.id !== id))

  return (
    <main className="gastos-page" style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '50px' }}>
      <section className="home-hero" style={{ minHeight: '340px', padding: '50px 0' }}>
        <div className="home-hero-inner">
          <span className="eyebrow" style={{ color: '#a8edf6' }}>✦ ORÇAMENTO E PLANEJAMENTO</span>
          <h1>Gastos da viagem</h1>
          <p>Estime o orçamento da viagem e registre suas despesas em um só lugar.</p>
          <Link to="/meu-roteiro" className="btn">Ver meu roteiro</Link>
        </div>
      </section>

      <section className="container section" style={{ paddingBottom: 15 }}>
        <h2>Simulação de orçamento</h2>
        <div style={{ background: '#fff', padding: 24, borderRadius: 16, border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 18 }}>
            <label>Quantidade de dias
              <input type="number" min="1" value={dias} onChange={e => setDias(e.target.value)} style={campo} />
            </label>
            {[
              ['Hospedagem por dia', hospedagem, setHospedagem],
              ['Alimentação por dia', alimentacao, setAlimentacao],
              ['Transporte por dia', transporte, setTransporte],
              ['Passeios por dia', passeios, setPasseios],
              ['Outros gastos por dia', outros, setOutros]
            ].map(([label, value, setter]) => (
              <label key={label}>{label}
                <input type="number" min="0" value={value} onChange={e => setter(Number(e.target.value))} style={campo} />
              </label>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, marginTop: 24, padding: 20, borderRadius: 12, background: '#eff8fa' }}>
            <div><small>Total estimado</small><h2 style={{ color: 'var(--primary)', margin: 0 }}>R$ {moeda(custoEstimado)}</h2></div>
            <div><small>Média por dia</small><h3 style={{ margin: 0 }}>R$ {moeda(mediaDiaria)}</h3></div>
          </div>
        </div>
      </section>

      <section className="container section" style={{ paddingTop: 15 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 18 }}>
          <div><span className="eyebrow">CONTROLE FINANCEIRO</span><h2 style={{ margin: 0 }}>Despesas da viagem</h2></div>
          <button className="btn" onClick={() => setMostrarFormulario(v => !v)}>+ Adicionar despesa</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: 14, marginBottom: 20 }}>
          {[
            ['Total registrado', totalRegistrado],
            ['Hospedagem', totalCategoria('Hospedagem')],
            ['Alimentação', totalCategoria('Alimentação')],
            ['Transporte', totalCategoria('Transporte')]
          ].map(([label, valor]) => (
            <div key={label} style={{ background: '#fff', padding: 18, border: '1px solid var(--border)', borderRadius: 12 }}>
              <small style={{ color: 'var(--muted)', fontWeight: 700 }}>{label.toUpperCase()}</small>
              <h3 style={{ color: 'var(--primary)', margin: '6px 0 0' }}>R$ {moeda(valor)}</h3>
            </div>
          ))}
        </div>

        {mostrarFormulario && (
          <form onSubmit={adicionarDespesa} style={{ background: '#fff', padding: 22, border: '1px solid var(--border)', borderRadius: 14, marginBottom: 20, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 14 }}>
            <label>Descrição<input required value={novaDescricao} onChange={e => setNovaDescricao(e.target.value)} placeholder="Ex.: passeio de barco" style={campo} /></label>
            <label>Categoria<select value={novaCategoria} onChange={e => setNovaCategoria(e.target.value)} style={campo}>
              {['Hospedagem', 'Alimentação', 'Transporte', 'Passeios', 'Outros'].map(c => <option key={c}>{c}</option>)}
            </select></label>
            <label>Valor (R$)<input required type="number" min="0" step="0.01" value={novoValor} onChange={e => setNovoValor(e.target.value)} style={campo} /></label>
            <label>Data<input type="date" value={novaData} onChange={e => setNovaData(e.target.value)} style={campo} /></label>
            <div style={{ display: 'flex', alignItems: 'end', gap: 8 }}>
              <button className="btn" type="submit">Salvar</button>
              <button type="button" onClick={() => setMostrarFormulario(false)} style={botaoSecundario}>Cancelar</button>
            </div>
          </form>
        )}

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden' }}>
          {despesas.length === 0 ? <p style={{ padding: 28, color: 'var(--muted)', textAlign: 'center' }}>Nenhuma despesa registrada. Adicione a primeira acima.</p> : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead><tr style={{ background: '#f1f7f9', color: 'var(--muted)' }}>
                  {['Descrição', 'Categoria', 'Data', 'Valor', 'Ação'].map(t => <th key={t} style={{ padding: 14 }}>{t}</th>)}
                </tr></thead>
                <tbody>{despesas.map(item => <tr key={item.id} style={{ borderTop: '1px solid var(--border)' }}>
                  <td style={{ padding: 14, fontWeight: 600 }}>{item.descricao}</td>
                  <td style={{ padding: 14 }}>{item.categoria}</td>
                  <td style={{ padding: 14 }}>{item.data}</td>
                  <td style={{ padding: 14, color: 'var(--primary)', fontWeight: 700 }}>R$ {moeda(item.valor)}</td>
                  <td style={{ padding: 14 }}><button onClick={() => removerDespesa(item.id)} style={botaoExcluir}>Excluir</button></td>
                </tr>)}</tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

const campo = { display: 'block', width: '100%', marginTop: 6, padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)', background: '#fff', color: 'var(--dark)' }
const botaoSecundario = { padding: '10px 14px', border: '1px solid var(--border)', borderRadius: 8, background: '#fff', color: 'var(--dark)' }
const botaoExcluir = { padding: '7px 11px', border: 0, borderRadius: 7, background: '#fee2e2', color: '#991b1b', fontWeight: 700 }
