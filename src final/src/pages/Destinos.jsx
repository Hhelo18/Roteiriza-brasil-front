
import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const imagemReserva =
  '/referencias/saopaulo.jpg'

const todosDestinos = [
  {
    id: 'rio-de-janeiro',
    cidade: 'Rio de Janeiro',
    estado: 'RJ',
    regiao: 'Sudeste',
    subtitulo: 'RIO DE JANEIRO • SUDESTE',
    categoria: 'Praias',
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
    regiao: 'Sudeste',
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
    regiao: 'Nordeste',
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
    regiao: 'Sul',
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
    regiao: 'Nordeste',
    subtitulo: 'MARANHÃO • NORDESTE',
    categoria: 'Aventura',
    preco: 380,
    rating: 4.9,
    reviews: 14,
    descricao: 'Dunas de areia branca com lagoas de água doce, um cenário único no mundo.',
    imagem: '/referencias/lencoesmaranhenses.jpg',
  },
  {
    id: 'florianopolis',
    cidade: 'Florianópolis',
    estado: 'SC',
    regiao: 'Sul',
    subtitulo: 'SANTA CATARINA • SUL',
    categoria: 'Praias',
    preco: 350,
    rating: 4.7,
    reviews: 20,
    descricao: 'A Ilha da Magia combina praias paradisíacas, surf, trilhas e ótima infraestrutura.',
    imagem: '/referencias/florionopolis.jpg',
  },
  {
    id: 'gramado',
    cidade: 'Gramado',
    estado: 'RS',
    regiao: 'Sul',
    subtitulo: 'RIO GRANDE DO SUL • SUL',
    categoria: 'Montanhas',
    preco: 450,
    rating: 4.8,
    reviews: 30,
    descricao: 'Charmosa arquitetura europeia, chocolates artesanais e clima frio da Serra Gaúcha.',
    imagem: '/referencias/gramado.jpg',
  },
  {
    id: 'ouro-preto',
    cidade: 'Ouro Preto',
    estado: 'MG',
    regiao: 'Sudeste',
    subtitulo: 'MINAS GERAIS • SUDESTE',
    categoria: 'Cidades históricas',
    preco: 260,
    rating: 4.6,
    reviews: 12,
    descricao: 'História do Brasil colonial, ladeiras de pedra, igrejas barrocas e gastronomia mineira.',
    imagem: '/referencias/ouropreto.png',
  },
  {
    id: 'bonito',
    cidade: 'Bonito',
    estado: 'MS',
    regiao: 'Centro-Oeste',
    subtitulo: 'MATO GROSSO DO SUL • CENTRO-OESTE',
    categoria: 'Natureza',
    preco: 410,
    rating: 4.9,
    reviews: 19,
    descricao: 'Capital do ecoturismo, com rios cristalinos de águas transparentes e grutas incríveis.',
    imagem: '/referencias/bonito.jpg',
  },
  {
    id: 'porto-de-galinhas',
    cidade: 'Porto de Galinhas',
    estado: 'PE',
    regiao: 'Nordeste',
    subtitulo: 'PERNAMBUCO • NORDESTE',
    categoria: 'Praias',
    preco: 340,
    rating: 4.7,
    reviews: 28,
    descricao: 'Piscinas naturais de águas mornas e cristalinas repletas de peixes coloridos.',
    imagem: '/referencias/portodegalinhas.webp',
  },
  {
    id: 'chapadadosveadeiros',
    cidade: 'Alto Paraíso (Veadeiros)',
    estado: 'GO',
    regiao: 'Centro-Oeste',
    subtitulo: 'GOIÁS • CENTRO-OESTE',
    categoria: 'Aventura',
    preco: 290,
    rating: 4.8,
    reviews: 16,
    descricao: 'Cachoeiras imponentes, canions de quartzo e misticismo no coração do Cerrado.',
    imagem: '/referencias/altoparaiso.jpg',
  },
  {
    id: 'manaus',
    cidade: 'Manaus',
    estado: 'AM',
    regiao: 'Norte',
    subtitulo: 'AMAZONAS • NORTE',
    categoria: 'Natureza',
    preco: 370,
    rating: 4.6,
    reviews: 11,
    descricao: 'Porta de entrada para a Floresta Amazônica, Encontro das Águas e o histórico Teatro Amazonas.',
    imagem: '/referencias/manaus.jpg',
  },
]

const categoriasBotoes = [
  'Todos',
  'Praias',
  'Montanhas',
  'Cidades históricas',
  'Natureza',
  'Aventura',
  'Urbano',
]

const estados = ['RJ', 'SP', 'BA', 'PR', 'MA', 'SC', 'RS', 'MG', 'MS', 'PE', 'GO', 'AM']
const regioes = ['Sudeste', 'Nordeste', 'Sul', 'Centro-Oeste', 'Norte']
const experiencias = ['Praias', 'Montanhas', 'Cidades históricas', 'Natureza', 'Aventura', 'Urbano']

export default function Destinos() {
  const [searchParams] = useSearchParams()
  const [termoBusca, setTermoBusca] = useState(searchParams.get('busca') || '')
  const [estadoSelecionado, setEstadoSelecionado] = useState('Todos os estados')
  const [regiaoSelecionada, setRegiaoSelecionada] = useState('Todas as regiões')
  const [experienciaSelecionada, setExperienciaSelecionada] = useState('Todas')
  const [precoMin, setPrecoMin] = useState(240)
  const [precoMax, setPrecoMax] = useState(450)
  const [ordenacao, setOrdenacao] = useState('Mais relevantes')
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos')

  const destinosFiltrados = useMemo(() => {
    const busca = termoBusca.trim().toLocaleLowerCase('pt-BR')

    const resultado = todosDestinos.filter((destino) => {
      const atendeBusca =
        !busca ||
        destino.cidade.toLocaleLowerCase('pt-BR').includes(busca) ||
        destino.estado.toLocaleLowerCase('pt-BR').includes(busca) ||
        destino.descricao.toLocaleLowerCase('pt-BR').includes(busca)

      const atendeEstado =
        estadoSelecionado === 'Todos os estados' || destino.estado === estadoSelecionado

      const atendeRegiao =
        regiaoSelecionada === 'Todas as regiões' || destino.regiao === regiaoSelecionada

      const atendeExperiencia =
        experienciaSelecionada === 'Todas' || destino.categoria === experienciaSelecionada

      const atendeCategoria =
        categoriaAtiva === 'Todos' || destino.categoria === categoriaAtiva

      const atendePreco =
        destino.preco >= Number(precoMin) && destino.preco <= Number(precoMax)

      return (
        atendeBusca &&
        atendeEstado &&
        atendeRegiao &&
        atendeExperiencia &&
        atendeCategoria &&
        atendePreco
      )
    })

    if (ordenacao === 'Menor preço') resultado.sort((a, b) => a.preco - b.preco)
    if (ordenacao === 'Maior preço') resultado.sort((a, b) => b.preco - a.preco)
    if (ordenacao === 'Melhor avaliados') resultado.sort((a, b) => b.rating - a.rating)

    return resultado
  }, [
    termoBusca,
    estadoSelecionado,
    regiaoSelecionada,
    experienciaSelecionada,
    categoriaAtiva,
    precoMin,
    precoMax,
    ordenacao,
  ])

  const limparFiltros = () => {
    setTermoBusca('')
    setEstadoSelecionado('Todos os estados')
    setRegiaoSelecionada('Todas as regiões')
    setExperienciaSelecionada('Todas')
    setPrecoMin(240)
    setPrecoMax(450)
    setOrdenacao('Mais relevantes')
    setCategoriaAtiva('Todos')
  }

  const aoFalharImagem = (event) => {
    event.currentTarget.onerror = null
    event.currentTarget.src = imagemReserva
  }

  return (
    <main style={styles.pagina}>
      <section style={styles.hero}>
        <div style={styles.conteudoHero}>
          <h1 style={styles.tituloHero}>Destinos</h1>
          <p style={styles.textoHero}>
            Explore os melhores lugares do Brasil e planeje sua próxima viagem com informações
            de preço, atrações e avaliações.
          </p>
        </div>
      </section>

      <div style={styles.areaFiltros}>
        <div style={styles.caixaFiltros}>
          <div style={styles.cabecalhoFiltros}>
            <span style={styles.tituloFiltros}>🔍 Encontre seu destino</span>
            <span style={styles.contagem}>
              {destinosFiltrados.length} destinos encontrados
            </span>
          </div>

          <div style={styles.gradeFiltros}>
            <div>
              <label style={labelStyle}>PESQUISAR</label>
              <input
                type="text"
                placeholder="🔍 Cidade, estado ou palavra-chave"
                value={termoBusca}
                onChange={(event) => setTermoBusca(event.target.value)}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>ESTADO</label>
              <select
                value={estadoSelecionado}
                onChange={(event) => setEstadoSelecionado(event.target.value)}
                style={inputStyle}
              >
                <option>Todos os estados</option>
                {estados.map((estado) => (
                  <option key={estado} value={estado}>{estado}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={labelStyle}>REGIÃO</label>
              <select
                value={regiaoSelecionada}
                onChange={(event) => setRegiaoSelecionada(event.target.value)}
                style={inputStyle}
              >
                <option>Todas as regiões</option>
                {regioes.map((regiao) => (
                  <option key={regiao} value={regiao}>{regiao}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={labelStyle}>EXPERIÊNCIA</label>
              <select
                value={experienciaSelecionada}
                onChange={(event) => setExperienciaSelecionada(event.target.value)}
                style={inputStyle}
              >
                <option>Todas</option>
                {experiencias.map((experiencia) => (
                  <option key={experiencia} value={experiencia}>{experiencia}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={styles.linhaFiltros}>
            <div style={styles.grupoPrecos}>
              <div>
                <label style={labelStyle}>PREÇO MÍNIMO (DIÁRIA)</label>
                <input
                  type="number"
                  min="0"
                  value={precoMin}
                  onChange={(event) => setPrecoMin(event.target.value)}
                  style={{ ...inputStyle, width: '125px' }}
                />
              </div>

              <div>
                <label style={labelStyle}>PREÇO MÁXIMO (DIÁRIA)</label>
                <input
                  type="number"
                  min="0"
                  value={precoMax}
                  onChange={(event) => setPrecoMax(event.target.value)}
                  style={{ ...inputStyle, width: '125px' }}
                />
              </div>

              <div>
                <label style={labelStyle}>ORDENAR POR</label>
                <select
                  value={ordenacao}
                  onChange={(event) => setOrdenacao(event.target.value)}
                  style={inputStyle}
                >
                  <option>Mais relevantes</option>
                  <option>Menor preço</option>
                  <option>Maior preço</option>
                  <option>Melhor avaliados</option>
                </select>
              </div>
            </div>

            <button type="button" onClick={limparFiltros} style={styles.botaoLimpar}>
              🔄 Limpar filtros
            </button>
          </div>

          <div style={styles.notaPreco}>Faixa de diárias de R$ 240,00 a R$ 450,00</div>
        </div>
      </div>

      <div style={styles.categorias}>
        {categoriasBotoes.map((categoria) => {
          const ativo = categoriaAtiva === categoria

          return (
            <button
              key={categoria}
              type="button"
              onClick={() => setCategoriaAtiva(categoria)}
              style={{
                ...styles.botaoCategoria,
                background: ativo ? '#0f172a' : '#fff',
                color: ativo ? '#fff' : '#475569',
              }}
            >
              {categoria}
            </button>
          )
        })}
      </div>

      <section style={styles.areaDestinos}>
        <h2 style={styles.tituloSecao}>Destinos mais buscados</h2>

        {destinosFiltrados.length > 0 ? (
          <div style={styles.gradeDestinos}>
            {destinosFiltrados.map((item) => (
              <article key={item.id} style={styles.card}>
                <div>
                  <div style={styles.areaImagem}>
                    <img
                      src={item.imagem}
                      alt={`Paisagem de ${item.cidade}`}
                      loading="lazy"
                      onError={aoFalharImagem}
                      style={styles.imagem}
                    />
                    <span style={styles.seloCategoria}>{item.categoria}</span>
                  </div>

                  <div style={styles.conteudoCard}>
                    <div style={styles.linhaTituloCard}>
                      <h3 style={styles.tituloCard}>{item.cidade}</h3>
                      <span style={styles.estadoCard}>📍 {item.estado}</span>
                    </div>

                    <div style={styles.subtituloCard}>{item.subtitulo}</div>
                    <p style={styles.descricaoCard}>{item.descricao}</p>

                    <div style={styles.avaliacao}>
                      <span style={styles.estrelas} aria-label={`${item.rating} de 5 estrelas`}>
                        ★★★★★
                      </span>
                      <span style={styles.notaAvaliacao}>{item.rating}</span>
                      <span style={styles.quantidadeAvaliacoes}>
                        ({item.reviews} avaliações)
                      </span>
                    </div>
                  </div>
                </div>

                <div style={styles.rodapeCard}>
                  <div>
                    <span style={styles.rotuloDiaria}>DIÁRIA MÉDIA</span>
                    <span style={styles.preco}>
                      R$ {item.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>

                  <Link to={`/destinos/${item.id}`} style={styles.linkDetalhes}>
                    Ver detalhes →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div style={styles.semResultados}>
            <p style={styles.semResultadosTitulo}>Nenhum destino encontrado</p>
            <p style={styles.semResultadosTexto}>
              Tente ajustar os filtros ou a faixa de preço para ver mais resultados.
            </p>
            <button type="button" onClick={limparFiltros} style={styles.botaoRestaurar}>
              Limpar filtros
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

const styles = {
  pagina: {
    background: '#f8fafc',
    minHeight: '100vh',
    paddingBottom: '60px',
  },
 hero: {
    position: 'relative',
    background:
      'linear-gradient(rgba(15,23,42,.65), rgba(15,23,42,.82)), url("/referencias/cristoredentor.jpg") center/cover',
    padding: '60px 20px 80px',
    color: '#fff',
  },
  conteudoHero: { maxWidth: '1100px', margin: '0 auto' },
  tituloHero: {
    fontSize: '2.4rem',
    fontWeight: '800',
    margin: '0 0 8px',
    color: '#fff',
  },
  textoHero: {
    fontSize: '1rem',
    color: '#e2e8f0',
    maxWidth: '650px',
    margin: 0,
    lineHeight: 1.5,
  },
  areaFiltros: {
    maxWidth: '1100px',
    margin: '-40px auto 30px',
    padding: '0 20px',
    position: 'relative',
    zIndex: 1,
  },
  caixaFiltros: {
    background: '#fff',
    borderRadius: '16px',
    padding: '24px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 10px 25px rgba(0,0,0,.06)',
  },
  cabecalhoFiltros: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    gap: '12px',
    flexWrap: 'wrap',
  },
  tituloFiltros: { fontWeight: '700', fontSize: '.95rem', color: '#0f172a' },
  contagem: { fontSize: '.8rem', color: '#64748b', fontWeight: '600' },
  gradeFiltros: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    marginBottom: '16px',
  },
  linhaFiltros: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    flexWrap: 'wrap',
    gap: '16px',
    borderTop: '1px solid #f1f5f9',
    paddingTop: '16px',
  },
  grupoPrecos: { display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'end' },
  botaoLimpar: {
    background: 'none',
    border: 'none',
    color: '#0284c7',
    cursor: 'pointer',
    fontSize: '.85rem',
    fontWeight: '600',
    padding: '10px 0',
  },
  notaPreco: { fontSize: '.75rem', color: '#94a3b8', marginTop: '10px' },
  categorias: {
    maxWidth: '1100px',
    margin: '0 auto 30px',
    padding: '0 20px',
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  botaoCategoria: {
    border: '1px solid #cbd5e1',
    padding: '8px 16px',
    borderRadius: '20px',
    fontWeight: '600',
    fontSize: '.85rem',
    cursor: 'pointer',
  },
  areaDestinos: { maxWidth: '1100px', margin: '0 auto', padding: '0 20px' },
  tituloSecao: {
    fontSize: '1.3rem',
    color: '#0f172a',
    marginBottom: '20px',
    fontWeight: '700',
  },
  gradeDestinos: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 12px rgba(0,0,0,.05)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minWidth: 0,
  },
  areaImagem: { position: 'relative', height: '200px', background: '#eaf2f4' },
  imagem: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  seloCategoria: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    background: 'rgba(0,0,0,.65)',
    color: '#fff',
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '.75rem',
    fontWeight: '600',
  },
  conteudoCard: { padding: '20px' },
  linhaTituloCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2px',
    gap: '8px',
  },
  tituloCard: { margin: 0, fontSize: '1.1rem', color: '#0f172a' },
  estadoCard: { fontSize: '.75rem', color: '#64748b', fontWeight: '600', whiteSpace: 'nowrap' },
  subtituloCard: {
    fontSize: '.7rem',
    color: '#64748b',
    fontWeight: '700',
    marginBottom: '10px',
    letterSpacing: '.5px',
  },
  descricaoCard: {
    color: '#64748b',
    fontSize: '.85rem',
    lineHeight: 1.5,
    margin: '0 0 12px',
  },
  avaliacao: { display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' },
  estrelas: { color: '#f59e0b', fontSize: '.9rem', letterSpacing: '1px' },
  notaAvaliacao: { fontSize: '.85rem', fontWeight: '700', color: '#0f172a' },
  quantidadeAvaliacoes: { fontSize: '.75rem', color: '#64748b' },
  rodapeCard: {
    padding: '16px 20px',
    borderTop: '1px solid #e2e8f0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
  },
  rotuloDiaria: {
    fontSize: '.65rem',
    color: '#64748b',
    fontWeight: '700',
    display: 'block',
  },
  preco: { fontSize: '1.15rem', fontWeight: '800', color: '#16a34a' },
  linkDetalhes: {
    background: '#f1f5f9',
    color: '#0284c7',
    padding: '8px 12px',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '.85rem',
    textDecoration: 'none',
    border: '1px solid #e2e8f0',
    whiteSpace: 'nowrap',
  },
  semResultados: {
    textAlign: 'center',
    padding: '60px 20px',
    background: '#fff',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
  },
  semResultadosTitulo: {
    fontSize: '1.2rem',
    color: '#0f172a',
    fontWeight: '700',
    marginBottom: '8px',
  },
  semResultadosTexto: { color: '#64748b', fontSize: '.9rem' },
  botaoRestaurar: {
    marginTop: '8px',
    background: '#0f766e',
    color: '#fff',
    border: 0,
    borderRadius: '8px',
    padding: '10px 16px',
    cursor: 'pointer',
    fontWeight: '700',
  },
}

const labelStyle = {
  display: 'block',
  fontSize: '.75rem',
  fontWeight: '700',
  color: '#64748b',
  marginBottom: '6px',
}

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: '8px',
  border: '1px solid #cbd5e1',
  fontSize: '.85rem',
  outline: 'none',
  background: '#fff',
  boxSizing: 'border-box',
}
