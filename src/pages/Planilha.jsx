import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Planilha() {
  const [despesas, setDespesas] = useState([
    { id: 1, descricao: 'Hotel Central', categoria: 'Hospedagem', valor: 450.00, data: '12/10/2026' },
    { id: 2, descricao: 'Almoço no Mercado', categoria: 'Alimentação', valor: 85.00, data: '12/10/2026' }
  ])

  const [novaDescricao, setNovaDescricao] = useState('')
  const [novaCategoria, setNovaCategoria] = useState('Hospedagem')
  const [novoValor, setNovoValor] = useState('')
  const [novaData, setNovaData] = useState('')
  const [mostrarModal, setMostrarModal] = useState(false)

  const adicionarDespesa = (e) => {
    e.preventDefault()
    if (!novaDescricao || !novoValor) return

    const item = {
      id: Date.now(),
      descricao: novaDescricao,
      categoria: novaCategoria,
      valor: Number(novoValor),
      data: novaData || '12/10/2026'
    }

    setDespesas([...despesas, item])
    setNovaDescricao('')
    setNovoValor('')
    setNovaData('')
    setMostrarModal(false)
  }

  const removerDespesa = (id) => {
    setDespesas(despesas.filter(d => d.id !== id))
  }

  const totalGeral = despesas.reduce((acc, d) => acc + d.valor, 0)
  const totalHospedagem = despesas.filter(d => d.categoria === 'Hospedagem').reduce((acc, d) => acc + d.valor, 0)
  const totalAlimentacao = despesas.filter(d => d.categoria === 'Alimentação').reduce((acc, d) => acc + d.valor, 0)
  const totalTransporte = despesas.filter(d => d.categoria === 'Transporte').reduce((acc, d) => acc + d.valor, 0)

  return (
    <main className="planilha-page">
      {/* Banner Principal */}
      <section className="home-hero" style={{ minHeight: '340px', padding: '50px 0' }}>
        <div className="home-hero-inner">
          <span className="eyebrow" style={{ color: '#a8edf6' }}>✦ CONTROLE FINANCEIRO</span>
          <h1>Planilha de despesas</h1>
          <p>
            Registre cada gasto de viagem, edite qualquer um e acompanhe o total acumulado automaticamente.
          </p>

          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setMostrarModal(true)} 
              className="btn"
              style={{ background: '#fff', color: 'var(--primary)', border: 'none', fontWeight: '700' }}
            >
              + Nova despesa
            </button>
            <Link to="/meu-roteiro" className="btn" style={{ background: 'transparent', border: '1px solid #fff', color: '#fff' }}>
              Incluir custos do roteiro
            </Link>
          </div>
        </div>
      </section>

      {/* Painel de Resumos por Categoria */}
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
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--primary)', display: 'block', marginBottom: '4px' }}>TOTAL DA VIAGEM</span>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary)' }}>
              R$ {totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <small style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{despesas.length} despesas registradas</small>
          </div>

          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>HOSPEDAGEM</span>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--dark)' }}>
              R$ {totalHospedagem.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <small style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Gastos com estadia</small>
          </div>

          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>ALIMENTAÇÃO</span>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--dark)' }}>
              R$ {totalAlimentacao.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <small style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Refeições e cafés</small>
          </div>

          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>TRANSPORTE</span>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--dark)' }}>
              R$ {totalTransporte.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <small style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Deslocamentos</small>
          </div>
        </div>
      </section>

      {/* Tabela / Lista de Despesas */}
      <section className="container section" style={{ paddingTop: '15px' }}>
        <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: 'var(--shadow)', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--dark)' }}>Despesas da viagem</h3>
            <button 
              onClick={() => setMostrarModal(true)}
              style={{ background: 'var(--primary)', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}
            >
              + Adicionar despesa
            </button>
          </div>

          {despesas.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: 'var(--muted)' }}>
              Nenhuma despesa registrada ainda. Clique em adicionar para começar.
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border)', color: 'var(--muted)', fontSize: '0.85rem' }}>
                    <th style={{ padding: '12px' }}>DESCRIÇÃO</th>
                    <th style={{ padding: '12px' }}>CATEGORIA</th>
                    <th style={{ padding: '12px' }}>DATA</th>
                    <th style={{ padding: '12px' }}>VALOR</th>
                    <th style={{ padding: '12px', textAlign: 'right' }}>AÇÕES</th>
                  </tr>
                </thead>
                <tbody>
                  {despesas.map((item) => (
                    <tr key={item.id} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '14px 12px', fontWeight: '600', color: 'var(--dark)' }}>{item.descricao}</td>
                      <td style={{ padding: '14px 12px', color: 'var(--muted)' }}>{item.categoria}</td>
                      <td style={{ padding: '14px 12px', color: 'var(--muted)' }}>{item.data}</td>
                      <td style={{ padding: '14px 12px', fontWeight: '700', color: 'var(--primary)' }}>
                        R$ {item.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </td>
                      <td style={{ padding: '14px 12px', textAlign: 'right' }}>
                        <button 
                          onClick={() => removerDespesa(item.id)}
                          style={{ background: '#ff4d4d', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}
                        >
                          Excluir
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Modal Simples para Adicionar Despesa */}
      {mostrarModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', width: '400px', maxWidth: '90%', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
            <h3 style={{ marginBottom: '20px', color: 'var(--dark)' }}>Adicionar nova despesa</h3>
            <form onSubmit={adicionarDespesa}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '6px' }}>Descrição</label>
                <input 
                  type="text" 
                  value={novaDescricao} 
                  onChange={(e) => setNovaDescricao(e.target.value)}
                  placeholder="Ex: Passeio de barco, Jantar..."
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)' }}
                  required
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '6px' }}>Categoria</label>
                <select 
                  value={novaCategoria} 
                  onChange={(e) => setNovaCategoria(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)' }}
                >
                  <option value="Hospedagem">Hospedagem</option>
                  <option value="Alimentação">Alimentação</option>
                  <option value="Transporte">Transporte</option>
                  <option value="Passeios">Passeios</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '6px' }}>Valor (R$)</label>
                <input 
                  type="number" 
                  value={novoValor} 
                  onChange={(e) => setNovoValor(e.target.value)}
                  placeholder="0.00"
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)' }}
                  required
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '6px' }}>Data</label>
                <input 
                  type="text" 
                  value={novaData} 
                  onChange={(e) => setNovaData(e.target.value)}
                  placeholder="Ex: 12/10/2026"
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)' }}
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
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}