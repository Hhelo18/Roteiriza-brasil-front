import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const formatarData = (data) => {
  if (!data) return 'Data não definida'
  const [ano, mes, dia] = data.split('-')
  if (ano && mes && dia) return `${dia}/${mes}/${ano}`
  return data
}

export default function MeuRoteiro() {
  const [roteiro, setRoteiro] = useState([])

  useEffect(() => {
    const carregados = JSON.parse(localStorage.getItem('roteiro_destinos') || '[]')
    setRoteiro(carregados)
  }, [])

  const salvarRoteiro = (atualizados) => {
    setRoteiro(atualizados)
    localStorage.setItem('roteiro_destinos', JSON.stringify(atualizados))
  }

  const removerDoRoteiro = (id) => salvarRoteiro(roteiro.filter(item => item.id !== id))
  const valorTotal = roteiro.reduce((acc, item) => acc + (Number(item.preco) || 0), 0)

  const grupos = useMemo(() => {
    const ordenados = [...roteiro].sort((a, b) => {
      const dataA = a.data || '9999-12-31'
      const dataB = b.data || '9999-12-31'
      return dataA.localeCompare(dataB) || (a.hora || '23:59').localeCompare(b.hora || '23:59')
    })
    return ordenados.reduce((acc, item) => {
      const chave = item.data || 'sem-data'
      if (!acc[chave]) acc[chave] = []
      acc[chave].push(item)
      return acc
    }, {})
  }, [roteiro])

  return (
    <main className="roteiro-page" style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: 60 }}>
      <section className="home-hero" style={{ minHeight: 320, padding: '40px 0' }}>
        <div className="home-hero-inner">
          <h1 style={{ fontSize: '2.2rem', marginBottom: 8 }}>Meu Roteiro</h1>
          <p style={{ fontSize: '1rem', maxWidth: 700 }}>Organize suas atrações por dia e horário e acompanhe os custos planejados da viagem.</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 20, flexWrap: 'wrap' }}>
            <Link to="/destinos" className="btn">+ Adicionar atrações</Link>
            <Link to="/gastos" className="btn" style={{ background: 'transparent', border: '1px solid #fff', color: '#fff' }}>Ver gastos</Link>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: -30, position: 'relative', zIndex: 2, marginBottom: 38 }}>
        <div style={{ background: '#fff', padding: 22, borderRadius: 16, boxShadow: 'var(--shadow)', border: '1px solid var(--border)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 18, textAlign: 'center' }}>
          <div><small style={rotulo}>ATIVIDADES</small><strong style={numero}>{roteiro.length}</strong></div>
          <div><small style={rotulo}>DIAS PLANEJADOS</small><strong style={numero}>{Object.keys(grupos).filter(k => k !== 'sem-data').length}</strong></div>
          <div><small style={rotulo}>CUSTO ESTIMADO</small><strong style={{ ...numero, color: 'var(--primary)' }}>R$ {valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></div>
        </div>
      </div>

      <section className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
          <h2 style={{ margin: 0 }}>Programação da viagem</h2>
          <span style={{ color: 'var(--muted)', fontSize: '.9rem' }}>As atividades aparecem em ordem de data e horário.</span>
        </div>

        {roteiro.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 55, background: '#fff', borderRadius: 16, border: '1px solid var(--border)' }}>
            <h3>Seu roteiro ainda está vazio.</h3>
            <p style={{ color: 'var(--muted)' }}>Escolha um destino e adicione atrações com a data e o horário desejados.</p>
            <Link to="/destinos" className="btn">Explorar destinos</Link>
          </div>
        ) : Object.entries(grupos).map(([data, atividades]) => (
          <div key={data} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', marginBottom: 22, boxShadow: '0 3px 12px rgba(0,0,0,.03)' }}>
            <div style={{ background: '#eff7f9', padding: '15px 22px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
              <h3 style={{ margin: 0, fontSize: '1.05rem' }}>{data === 'sem-data' ? 'Atividades sem data' : `Dia ${formatarData(data)}`}</h3>
              <strong style={{ color: 'var(--primary)' }}> {atividades.length} {atividades.length === 1 ? 'atividade' : 'atividades'}</strong>
            </div>
            {atividades.map(item => (
              <article key={item.id} style={{ padding: 20, borderBottom: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '76px 100px minmax(0,1fr) auto', gap: 16, alignItems: 'center' }}>
                <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.05rem' }}>{item.hora || '--:--'}</div>
                <img src={item.imagem} alt={item.nomeItem || item.cidade || 'Atração'} style={{ width: 100, height: 76, objectFit: 'cover', borderRadius: 9 }} onError={e => { e.currentTarget.style.visibility = 'hidden' }} />
                <div>
                  <h4 style={{ margin: '0 0 4px' }}>{item.nomeItem || item.cidade || 'Atividade'}</h4>
                  <p style={{ margin: 0, color: 'var(--muted)', fontSize: '.88rem' }}>{item.cidade}{item.estado ? ` - ${item.estado}` : ''}</p>
                  {item.descricao && <p style={{ margin: '5px 0 0', color: 'var(--muted)', fontSize: '.85rem' }}>{item.descricao}</p>}
                  {item.observacoes && <small style={{ display: 'block', marginTop: 5 }}>Observações: {item.observacoes}</small>}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <strong style={{ display: 'block', color: 'var(--primary)', marginBottom: 8 }}>R$ {Number(item.preco || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>
                  <button onClick={() => removerDoRoteiro(item.id)} style={{ border: 0, background: '#fee2e2', color: '#991b1b', padding: '7px 10px', borderRadius: 7, fontWeight: 700 }}>Remover</button>
                </div>
              </article>
            ))}
          </div>
        ))}
      </section>
    </main>
  )
}

const rotulo = { display: 'block', color: 'var(--muted)', fontWeight: 700, fontSize: '.75rem' }
const numero = { display: 'block', fontSize: '1.6rem', marginTop: 5, color: 'var(--dark)' }
