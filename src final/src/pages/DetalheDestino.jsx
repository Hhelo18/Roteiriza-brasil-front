import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

export default function DetalheDestino() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [modalAberto, setModalAberto] = useState(false)
  const [itemSelecionado, setItemSelecionado] = useState(null)
  const [dataItem, setDataItem] = useState('2026-10-15')
  const [horaItem, setHoraItem] = useState('09:00')
  const [custoItem, setCustoItem] = useState('0')
  const [obsItem, setObsItem] = useState('')

  const dadosDestinos = {
    'sao-paulo': {
      cidade: 'São Paulo',
      estado: 'SP',
      regiao: 'Sudeste',
      tag: 'Urbano e Gastronomia',
      imagem: '/referencias/avenidapaulista.jpg',
      descricao: 'São Paulo é o centro cultural e gastronômico do Brasil, com mais de 100 museus, restaurantes premiados, teatros e uma vida noturna intensa.',
      temperatura: '21°C',
      precoMedio: 'R$ 400,00',
      rating: 4.5,
      reviews: 25,
      atracoes: [
        { id: 'sp-1', nome: 'Avenida Paulista', desc: 'Avenida símbolo da cidade. Fechada para pedestres aos domingos.', preco: 0, imagem: '/referencias/avenidapaulista.jpg'},
        { id: 'sp-2', nome: 'Mercado Municipal', desc: 'Ótimo local para provar o famoso sanduíche de mortadela.', preco: 0, imagem: '/referencias/mercadomunicipal.jpg'},
        { id: 'sp-3', nome: 'Parque Ibirapuera', desc: 'Parque urbano com museus, pistas de corrida e lago.', preco: 0, imagem: '/referencias/ibirapuera.jpg'},
      ],
      passeios: [
        { id: 'sp-p1', nome: 'City tour histórico', desc: 'Caminhada guiada pelo Centro Histórico e Catedral da Sé.', preco: 0, imagem: '/referencias/citytour.jpg'},
        { id: 'sp-p2', nome: 'Roteiro de arte urbana', desc: 'Visite becos de arte e galerias na Vila Madalena.', preco: 0, imagem: '/referencias/arteurbana.jpg'},
      ]
    },
    'rio-de-janeiro': {
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      regiao: 'Sudeste',
      tag: 'Praia e Cultura',
      imagem: '/referencias/cristoredentor.jpg',
      descricao: 'A Cidade Maravilhosa combina praias icônicas, natureza exuberante e monumentos históricos mundialmente conhecidos.',
      temperatura: '27°C',
      precoMedio: 'R$ 420,00',
      rating: 4.8,
      reviews: 18,
      atracoes: [
        { id: 'rj-1', nome: 'Cristo Redentor', desc: 'Uma das 7 Maravilhas no topo do Morro do Corcovado.', preco: 134, imagem: '/referencias/cristoredentor.jpg'},
        { id: 'rj-2', nome: 'Pão de Açúcar', desc: 'Complexo de morros com teleférico e vista panorâmica.', preco: 160,imagem: '/referencias/paodeacucar.jpg'},
        { id: 'rj-3', nome: 'Praia de Copacabana', desc: 'A princesinha do mar, famosa pelo calçadão em ondas.', preco: 0, imagem: '/referencias/copacabana.png' }
      ],
      passeios: [
        { id: 'rj-p1', nome: 'Trilha do Morro da Urca', desc: 'Trilha leve pela mata atlântica com visual privilegiado.', preco: 0, imagem: '/referencias/morrodaurca.jpg' },
        { id: 'rj-p2', nome: 'Passeio de Barco na Baía', desc: 'Navegação contemplando os principais cartões postais da costa.', preco: 60, imagem: '/referencias/passeiobarco.webp' }
      ]
    },
    'lencois-maranhenses': {
      cidade: 'Barreirinhas (Lençóis)',
      estado: 'MA',
      regiao: 'Nordeste',
      tag: 'Ecoturismo',
      imagem: '/referencias/lencoesmaranhenses.jpg',
      descricao: 'Dunas de areia branca e lagoas de água cristalina formadas pelas chuvas.',
      temperatura: '29°C',
      precoMedio: 'R$ 380,00',
      rating: 4.9,
      reviews: 14,
      atracoes: [
        { id: 'lm-1', nome: 'Lagoa Bonita', desc: 'Uma das lagoas mais famosas nas dunas.', preco: 150, imagem: '/referencias/lagoabonita.webp' },
        { id: 'lm-2', nome: 'Lagoa Azul', desc: 'Paisagem deslumbrante de águas cristalinas.', preco: 150, imagem: '/referencias/lagoaazul.jpg' }
      ],
      passeios: [
        { id: 'lm-p1', nome: 'Passeio de lancha pelo Rio Preguiças', desc: 'Visita aos igarapés, Vassouras e Caburé.', preco: 130, imagem: '/referencias/riopreguicas.jpg' },
        { id: 'lm-p2', nome: 'Overquadriciclo nos Lençóis', desc: 'Aventura emocionante pelas trilhas de dunas e restinga.', preco: 300, imagem: '/referencias/overlencoes.jpg' }
      ]
    },
    'gramado': {
      cidade: 'Gramado',
      estado: 'RS',
      regiao: 'Sul',
      tag: 'Serra e Frio',
      imagem: '/referencias/gramado.jpg',
      descricao: 'Clima europeu na serra gaúcha, famosa por fondue, chocolates e charme único.',
      temperatura: '16°C',
      precoMedio: 'R$ 450,00',
      rating: 4.8,
      reviews: 30,
      atracoes: [
        { id: 'gr-1', nome: 'Lago Negro', desc: 'Cercado por árvores importadas da Floresta Negra.', preco: 0, imagem: '/referencias/lagonegro.jpg' },
        { id: 'gr-2', nome: 'Rua Coberta', desc: 'Centro de convivência charmoso com restaurantes.', preco: 0, imagem: '/referencias/ruacoberta.png' }
      ],
      passeios: [
        { id: 'gr-p1', nome: 'Tour de Fondue Tradicional', desc: 'Sequência completa de queijo, carne e chocolate.', preco: 179, imagem: '/referencias/fondue.jpg' },
        { id: 'gr-p2', nome: 'Visita ao Mini Mundo', desc: 'Parque com miniaturas ricas em detalhes de construções mundiais.', preco: 156, imagem: '/referencias/minimundo.jpg' }
      ]
    },
    'foz-do-iguacu': {
      cidade: 'Foz do Iguaçu',
      estado: 'PR',
      regiao: 'Sul',
      tag: 'Natureza',
      imagem: '/referencias/cataratas.jpg',
      descricao: 'Parque Nacional com as majestosas quedas d’água e imersão na natureza.',
      temperatura: '24°C',
      precoMedio: 'R$ 390,00',
      rating: 4.9,
      reviews: 22,
      atracoes: [
        { id: 'fi-1', nome: 'Cataratas do Iguaçu', desc: 'Trilha espetacular em frente à Garganta do Diabo.', preco: 134, imagem: '/referencias/cataratas.jpg' },
        { id: 'fi-2', nome: 'Usina de Itaipu', desc: 'Uma das maiores produtoras de energia limpa do mundo.', preco: 250, imagem: '/referencias/usina.jpg' }
      ],
      passeios: [
        { id: 'fi-p1', nome: 'Macuco Safari', desc: 'Passeio de barco elétrico sob as quedas d’água.', preco: 384, imagem: '/referencias/macucosafari.webp' },
        { id: 'fi-p2', nome: 'Parque das Aves', desc: 'Imersão em viveiros gigantes com centenas de aves resgatadas.', preco: 110, imagem: '/referencias/parqueaves.jpg' }
      ]
    },
    'salvador': {
      cidade: 'Salvador',
      estado: 'BA',
      regiao: 'Nordeste',
      tag: 'História e Praia',
      imagem: '/referencias/pelourinho.jpg',
      descricao: 'O primeiro centro histórico do Brasil, com música, axé e comida baiana.',
      temperatura: '28°C',
      precoMedio: 'R$ 300,00',
      rating: 4.5,
      reviews: 15,
      atracoes: [
        { id: 'sv-1', nome: 'Pelourinho', desc: 'Casarões coloridos barrocos e igrejas históricas.', preco: 0, imagem: '/referencias/pelourinho.jpg' },
        { id: 'sv-2', nome: 'Farol da Barra', desc: 'Cartão-postal histórico à beira-mar.', preco: 20, imagem: '/referencias/farol-da-barra.webp' }
      ],
      passeios: [
        { id: 'sv-p1', nome: 'Pôr do sol no Farol da Barra', desc: 'Visita guiada ao forte e contemplação do entardecer.', preco: 20, imagem: '/referencias/farol-pordosol.jpg' },
        { id: 'sv-p2', nome: 'Elevador Lacerda e Mercado Modelo', desc: 'Passeio cultural pelos pontos mais tradicionais.', preco: 0, imagem: '/referencias/elevadorlacerda.jpg' }
      ]
    },
    'ouro-preto': {
      cidade: 'Ouro Preto',
      estado: 'MG',
      regiao: 'Sudeste',
      tag: 'Cidades históricas',
      imagem: '/referencias/ouropreto.png',
      descricao: 'História do Brasil colonial, ladeiras de pedra, igrejas barrocas e gastronomia mineira.',
      temperatura: '20°C',
      precoMedio: 'R$ 260,00',
      rating: 4.6,
      reviews: 12,
      atracoes: [
        { id: 'op-1', nome: 'Igreja de São Francisco de Assis', desc: 'Obra-prima de Aleijadinho.', preco: 10, imagem: '/referencias/saofrancisco.jpg' },
        { id: 'op-2', nome: 'Praça Tiradentes', desc: 'Marco central da Inconfidência Mineira.', preco: 0, imagem: '/referencias/tiradentes.jpg'}
      ],
      passeios: [
        { id: 'op-p1', nome: 'Mina de Ouro da Passagem', desc: 'Descida de trolley para explorar as galerias subterrâneas.', preco: 290, imagem: '/referencias/minadeouro.jpg' },
        { id: 'op-p2', nome: 'Trem Maria Fumaça para Mariana', desc: 'Passeio panorâmico histórico de locomotiva a vapor.', preco: 460, precoLabel: 'R$ 460,00', imagem: '/referencias/trem.jpg' }
      ]
    },
    'porto-de-galinhas': {
      cidade: 'Porto de Galinhas',
      estado: 'PE',
      regiao: 'Nordeste',
      tag: 'Praias',
      imagem: '/referencias/portodegalinhas.webp',
      descricao: 'Piscinas naturais de águas mornas e cristalinas repletas de peixes coloridos.',
      temperatura: '28°C',
      precoMedio: 'R$ 340,00',
      rating: 4.7,
      reviews: 28,
      atracoes: [
        { id: 'pg-1', nome: 'Piscinas Naturais de Porto de Galinhas', desc: 'Famoso passeio de jangada para ver os peixinhos na maré baixa.', preco: 60, imagem: '/referencias/piscinas.jpg' },
        { id: 'pg-2', nome: 'Praia de Muro Alto', desc: 'Enseada com barreira de arrecifes que parece uma imensa lagoa sem ondas.', preco: 0, imagem: '/referencias/praiamuroalto.jpg' }
      ],
      passeios: [
        { id: 'pg-p1', nome: 'Passeio de Buggy "Ponta a Ponta"', desc: 'Conheça todas as praias de Porto de Galinhas em um passeio emocionante.', preco: 350-600, precoLabel: 'R$ 350 a R$ 600 por buggy (até 4 pessoas)', imagem: '/referencias/buggy.jpg' },
        { id: 'pg-p2', nome: 'Mergulho com cilindro', desc: 'Explore a vida marinha e naufrágios na costa.', preco: 380, precoLabel: 'R$  380,00', imagem: '/referencias/mergulhoporto.jpg' }
      ]
    },
    'chapadadosveadeiros': {
      cidade: 'Alto Paraíso (Veadeiros)',
      estado: 'GO',
      regiao: 'Centro-Oeste',
      tag: 'Aventura e Natureza',
      imagem: '/referencias/altoparaiso.jpg',
      descricao: 'Cachoeiras imponentes, cânions de quartzo e misticismo no coração do Cerrado.',
      temperatura: '25°C',
      precoMedio: 'R$ 290,00',
      rating: 4.8,
      reviews: 16,
      atracoes: [
        { id: 'cv-1', nome: 'Parque Nacional da Chapada dos Veadeiros', desc: 'Trilhas incríveis com vistas para os cânions e saltos d’água.', preco: 49, imagem: '/referencias/chapadaparque.jpg' },
        { id: 'cv-2', nome: 'Vale da Lua', desc: 'Formações rochosas esculpidas pelas águas do Rio São Miguel.', preco: 50, imagem: '/referencias/valedalua.jpg' }
      ],
      passeios: [
        { id: 'cv-p1', nome: 'Trilha dos Saltos do Rio Preto', desc: 'Caminhada guiada até as famosas quedas de 80 e 120 metros.', preco: 49, precoLabel: 'R$ 49,00', imagem: '/referencias/trilhario.jpg' },
        { id: 'cv-p2', nome: 'Banho nas Cachoeiras Almécegas', desc: 'Complexo de cachoeiras com poços cristalinos para banho.', preco: 80, precoLabel: 'R$ 80', imagem: '/referencias/banhocachoeira.jpg' }
      ]
    },
    'manaus': {
      cidade: 'Manaus',
      estado: 'AM',
      regiao: 'Norte',
      tag: 'Natureza',
      imagem: '/referencias/manaus.jpg',
      descricao: 'Porta de entrada para a Floresta Amazônica, Encontro das Águas e o histórico Teatro Amazonas.',
      temperatura: '29°C',
      precoMedio: 'R$ 370,00',
      rating: 4.6,
      reviews: 11,
      atracoes: [
        { id: 'mn-1', nome: 'Teatro Amazonas', desc: 'Jóia arquitetônica da época áurea da borracha.', preco: 20, imagem: '/referencias/teatroamazonas.jpg' },
        { id: 'mn-2', nome: 'Mercado Adolpho Lisboa', desc: 'Arquitetura em ferro inspirada na Europa.', preco: 0, imagem: '/referencias/mercadomanaus.jpg' }
      ],
      passeios: [
        { id: 'mn-p1', nome: 'Encontro das Águas e Botos', desc: 'Passeio de barco para ver a união dos rios Negro e Solimões.', preco: 80, precoLabel: 'A partir de R$ 80(+ R$ 20 opcional para interação com botos)', imagem: '/referencias/encontrodasaguas.jpg' },
        { id: 'mn-p2', nome: 'Imersão na Selva Amazônica', desc: 'Trilha guiada na floresta com vivência com comunidades.', preco: 120, precoLabel: ' R$ 120', imagem: '/referencias/imersao.jpg' }
      ]
    },
    'florianopolis': {
      cidade: 'Florianópolis',
      estado: 'SC',
      regiao: 'Sul',
      tag: 'Praias',
      imagem: '/referencias/florionopolis.jpg',
      descricao: 'A Ilha da Magia combina praias paradisíacas, surf, trilhas e ótima infraestrutura.',
      temperatura: '22°C',
      precoMedio: 'R$ 350,00',
      rating: 4.7,
      reviews: 20,
      atracoes: [
        { id: 'fl-1', nome: 'Praia da Joaquina', desc: 'Famosa pelas grandes dunas e ondas fortes para surf.', preco: 0, imagem: '/referencias/praiajoaquina.jpg'},
        { id: 'fl-2', nome: 'Lagoa da Conceição', desc: 'Coração turístico com esportes náuticos e gastronomia.', preco: 0, imagem: '/referencias/lagoaconceicao.jpg'}
      ],
      passeios: [
        { id: 'fl-p1', nome: 'Trilha da Lagoinha do Leste', desc: 'Trilha ecológica com praia deserta preservada.', preco: 0, imagem: '/referencias/trilhadoleste.jpg' },
        { id: 'fl-p2', nome: 'Passeio de Escuna na Ilha', desc: 'Águas cristalinas e sítios arqueológicos preservados.', preco: 35, imagem: '/referencias/escunailha.jpg' }
      ]
    },
    'bonito': {
      cidade: 'Bonito',
      estado: 'MS',
      regiao: 'Centro-Oeste',
      tag: 'Aventura',
      imagem: '/referencias/bonito.jpg',
      descricao: 'Capital do ecoturismo, com rios cristalinos de águas transparentes e grutas incríveis.',
      temperatura: '26°C',
      precoMedio: 'R$ 410,00',
      rating: 4.9,
      reviews: 19,
      atracoes: [
        { id: 'bn-1', nome: 'Gruta do Lago Azul', desc: 'Caverna inundada com águas de azul intenso impressionante.', preco: 120 - 180, precoLabel: 'R$ 120 a R$ 180', imagem: '/referencias/gruta.jpg' },
        { id: 'bn-2', nome: 'Balneário Municipal', desc: 'Águas correntes repletas de peixes coloridos para banho.', preco: 70-100 , precoLabel: 'R$ 70 a R$ 100', imagem: '/referencias/balneariomunicipal.jpg' }
      ],
      passeios: [
        { id: 'bn-p1', nome: 'Flutuação no Rio Sucuri', desc: 'Mergulho de superfície em águas cristalinas entre cardumes.', preco: 385, precoLabel: 'R$ 385', imagem: '/referencias/flutuacao.jpg' },
        { id: 'bn-p2', nome: 'Abismo Anhumas', desc: 'Rapel em caverna com lago subterrâneo cristalino.', preco: 1500, precoLabel: 'R$ 1500', imagem: '/referencias/abismo.jpg' }
      ]
    }
  }


  const destino = dadosDestinos[id] || dadosDestinos['sao-paulo']
  const chaveAvaliacoes = `roteiriza_avaliacoes_${id}`
  const [avaliacoes, setAvaliacoes] = useState(() => {
    try {
      const salvas = localStorage.getItem(chaveAvaliacoes)
      if (salvas) return JSON.parse(salvas)
    } catch {}
    return id === 'sao-paulo' ? [
      { id: 1, nome: 'Renata Lima', nota: 5, comentario: 'Melhor gastronomia que já experimentei. A Paulista no domingo é ótima para caminhar.', data: '21/05/2026' },
      { id: 2, nome: 'Diego Martins', nota: 4, comentario: 'Cidade grande e corrida, mas os museus são excelentes.', data: '08/04/2026' }
    ] : []
  })
  const [nomeAvaliacao, setNomeAvaliacao] = useState('')
  const [notaAvaliacao, setNotaAvaliacao] = useState('5')
  const [comentarioAvaliacao, setComentarioAvaliacao] = useState('')
  const mediaAvaliacoes = avaliacoes.length
    ? (avaliacoes.reduce((soma, item) => soma + Number(item.nota), 0) / avaliacoes.length).toFixed(1)
    : '—'

  const publicarAvaliacao = (e) => {
    e.preventDefault()
    if (!nomeAvaliacao.trim() || !comentarioAvaliacao.trim()) return
    const atualizadas = [{
      id: Date.now(),
      nome: nomeAvaliacao.trim(),
      nota: Number(notaAvaliacao),
      comentario: comentarioAvaliacao.trim(),
      data: new Date().toLocaleDateString('pt-BR')
    }, ...avaliacoes]
    setAvaliacoes(atualizadas)
    localStorage.setItem(chaveAvaliacoes, JSON.stringify(atualizadas))
    setNomeAvaliacao('')
    setNotaAvaliacao('5')
    setComentarioAvaliacao('')
  }

  const abrirModal = (item) => {
    setItemSelecionado(item)
    setDataItem('2026-10-15')
    setHoraItem('09:00')
    setCustoItem(item.preco ? item.preco.toString() : '0')
    setObsItem('')
    setModalAberto(true)
  }

  const confirmarAdicao = (e) => {
    e.preventDefault()
    if (!itemSelecionado) return

    const roteiroAtual = JSON.parse(localStorage.getItem('roteiro_destinos') || '[]')
    
    const novoItemRoteiro = {
      id: `${destino.id}-${itemSelecionado.id}-${Date.now()}`,
      cidade: destino.cidade,
      estado: destino.estado,
      nomeItem: itemSelecionado.nome,
      descricao: itemSelecionado.desc,
      imagem: itemSelecionado.imagem,
      data: dataItem,
      hora: horaItem,
      preco: Number(custoItem) || 0,
      observacoes: obsItem
    }

    roteiroAtual.push(novoItemRoteiro)
    localStorage.setItem('roteiro_destinos', JSON.stringify(roteiroAtual))

    setModalAberto(false)
    navigate('/meu-roteiro')
  }

  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* Banner Principal */}
      <div style={{ position: 'relative', height: '360px', width: '100%' }}>
        <img src={destino.imagem} alt={destino.cidade} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ 
          position: 'absolute', inset: 0, 
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.75))', 
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '40px 20px' 
        }} className="container">
          <Link to="/destinos" style={{ color: '#a8edf6', fontWeight: '700', fontSize: '0.85rem', textDecoration: 'none', marginBottom: '8px', display: 'inline-block' }}>
            ← Voltar para destinos
          </Link>
          <h1 style={{ color: '#fff', fontSize: '2.5rem', margin: '0 0 8px 0', fontWeight: '800' }}>
            {destino.cidade} - {destino.estado}
          </h1>
          <p style={{ color: '#e2e8f0', fontSize: '0.95rem', margin: 0, maxWidth: '700px' }}>
            {destino.tag} ⭐ {destino.rating} ({destino.reviews} avaliações)
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '30px' }}>
        {/* Bloco Sobre o Destino */}
        <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid var(--border)', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.3rem', color: 'var(--dark)', marginBottom: '14px' }}>Sobre o destino</h2>
          <p style={{ color: 'var(--muted)', lineHeight: '1.7', fontSize: '1rem', marginBottom: '24px' }}>
            {destino.descricao}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>REGIÃO / ESTADO</span>
              <span style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--dark)' }}>{destino.regiao} ({destino.estado})</span>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>TEMPERATURA MÉDIA</span>
              <span style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--dark)' }}>{destino.temperatura}</span>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>DIÁRIA MÉDIA</span>
              <span style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--primary)' }}>{destino.precoMedio}</span>
            </div>
          </div>
        </div>

        {/* Seção: Atrações em Destaque */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.3rem', color: 'var(--dark)', marginBottom: '16px' }}>Atrações em destaque</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {destino.atracoes.map((item) => (
              <div key={item.id} style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ height: '180px', position: 'relative' }}>
                    <img src={item.imagem} alt={item.nome} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', top: '10px', right: '10px', background: item.preco === 0 && !item.precoLabel ? '#16a34a' : 'var(--primary)', color: '#fff', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>
                      {item.precoLabel || (item.preco === 0 ? 'Gratuito' : `R$ ${Number(item.preco).toLocaleString('pt-BR')},00`)}
                    </span>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: 'var(--dark)' }}>{item.nome}</h3>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
                <div style={{ padding: '0 20px 20px 20px' }}>
                  <button 
                    onClick={() => abrirModal(item)}
                    style={{ width: '100%', background: '#f1f5f9', color: 'var(--dark)', border: '1px solid var(--border)', padding: '10px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem' }}
                  >
                    + No roteiro
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção: Passeios Turísticos */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.3rem', color: 'var(--dark)', marginBottom: '16px' }}>Passeios turísticos</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {destino.passeios.map((item) => (
              <div key={item.id} style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ height: '180px', position: 'relative' }}>
                    <img src={item.imagem} alt={item.nome} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', top: '10px', right: '10px', background: item.preco === 0 && !item.precoLabel ? '#16a34a' : 'var(--primary)', color: '#fff', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>
                      {item.precoLabel || (item.preco === 0 ? 'Gratuito' : `R$ ${Number(item.preco).toLocaleString('pt-BR')},00`)}
                    </span>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: 'var(--dark)' }}>{item.nome}</h3>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
                <div style={{ padding: '0 20px 20px 20px' }}>
                  <button 
                    onClick={() => abrirModal(item)}
                    style={{ width: '100%', background: '#f1f5f9', color: 'var(--dark)', border: '1px solid var(--border)', padding: '10px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem' }}
                  >
                    + No roteiro
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Avaliações deste destino */}
        <section style={{ marginBottom: 42 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 12, flexWrap: 'wrap', marginBottom: 18 }}>
            <div>
              <span className="eyebrow">OPINIÕES DE VIAJANTES</span>
              <h2 style={{ margin: 0 }}>Avaliações de {destino.cidade}</h2>
              <p style={{ color: 'var(--muted)', margin: '6px 0 0' }}>
                {avaliacoes.length ? `Nota média ${mediaAvaliacoes} de 5 • ${avaliacoes.length} ${avaliacoes.length === 1 ? 'avaliação' : 'avaliações'}` : 'Seja a primeira pessoa a avaliar este destino.'}
              </p>
            </div>
            <div style={{ color: '#f59e0b', fontSize: '1.15rem', fontWeight: 800 }}>{avaliacoes.length ? `${mediaAvaliacoes} ★` : '☆☆☆☆☆'}</div>
          </div>

          <form onSubmit={publicarAvaliacao} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: 22, marginBottom: 18 }}>
            <h3 style={{ marginBottom: 14 }}>Compartilhe sua experiência</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 14 }}>
              <label>Seu nome
                <input required value={nomeAvaliacao} onChange={e => setNomeAvaliacao(e.target.value)} placeholder="Como podemos te chamar?" style={estiloCampoAvaliacao} />
              </label>
              <label>Sua nota
                <select value={notaAvaliacao} onChange={e => setNotaAvaliacao(e.target.value)} style={estiloCampoAvaliacao}>
                  <option value="5">5 - Excelente</option><option value="4">4 - Muito bom</option><option value="3">3 - Bom</option><option value="2">2 - Regular</option><option value="1">1 - Ruim</option>
                </select>
              </label>
            </div>
            <label style={{ display: 'block', marginTop: 12 }}>Comentário
              <textarea required rows="3" value={comentarioAvaliacao} onChange={e => setComentarioAvaliacao(e.target.value)} placeholder="Conte como foi sua experiência neste destino..." style={{ ...estiloCampoAvaliacao, resize: 'vertical' }} />
            </label>
            <button type="submit" className="btn" style={{ marginTop: 12 }}>Publicar avaliação</button>
          </form>

          {avaliacoes.length > 0 && <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 14 }}>
            {avaliacoes.map(item => (
              <article key={item.id} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                  <strong>{item.nome}</strong><span style={{ color: '#f59e0b' }}>{'★'.repeat(Number(item.nota))}{'☆'.repeat(5 - Number(item.nota))}</span>
                </div>
                <small style={{ color: 'var(--muted)' }}>{item.data}</small>
                <p style={{ margin: '12px 0 0', color: 'var(--dark)' }}>{item.comentario}</p>
              </article>
            ))}
          </div>}
        </section>
      </div>

      {/* MODAL ADICIONAR AO ROTEIRO */}
      {modalAberto && itemSelecionado && (
        <div style={{ 
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', 
          display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '20px' 
        }}>
          <div style={{ background: '#fff', width: '100%', maxWidth: '480px', borderRadius: '16px', padding: '24px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '1.2rem', color: 'var(--dark)' }}>Adicionar ao roteiro</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '16px' }}>Defina quando você pretende fazer este passeio e quanto espera gastar. Para valores em faixa, o custo inicial usa o menor valor de referência.</p>
            {itemSelecionado.precoLabel && <p style={{ fontSize: '0.82rem', color: 'var(--primary)', marginTop: '-8px', marginBottom: '14px' }}>Referência de preço: {itemSelecionado.precoLabel}</p>}

            <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '10px', marginBottom: '16px', border: '1px solid var(--border)' }}>
              <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--dark)' }}>{itemSelecionado.nome}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{destino.cidade} - {destino.estado}</div>
            </div>

            <form onSubmit={confirmarAdicao}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', marginBottom: '4px' }}>DATA</label>
                  <input 
                    type="date" 
                    value={dataItem} 
                    onChange={(e) => setDataItem(e.target.value)} 
                    style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem' }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', marginBottom: '4px' }}>HORÁRIO</label>
                  <input 
                    type="time" 
                    value={horaItem} 
                    onChange={(e) => setHoraItem(e.target.value)} 
                    style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem' }}
                    required
                  />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', marginBottom: '4px' }}>CUSTO ESTIMADO (R$)</label>
                <input 
                  type="number" 
                  value={custoItem} 
                  onChange={(e) => setCustoItem(e.target.value)} 
                  style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: 'var(--muted)', marginBottom: '4px' }}>OBSERVAÇÕES</label>
                <textarea 
                  placeholder="Ex: Levar protetor solar, reservar com antecedência..." 
                  value={obsItem} 
                  onChange={(e) => setObsItem(e.target.value)} 
                  style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem', height: '70px', resize: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button 
                  type="button" 
                  onClick={() => setModalAberto(false)}
                  style={{ background: '#f1f5f9', color: 'var(--dark)', border: '1px solid var(--border)', padding: '10px 16px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}
                >
                  Cancelar
                </button>
                <button 
                  type="submit" 
                  style={{ background: 'var(--primary)', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}
                >
                  Adicionar ao roteiro
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}

const estiloCampoAvaliacao = { display: 'block', width: '100%', marginTop: 6, padding: '10px 12px', border: '1px solid var(--border)', borderRadius: 8, background: '#fff', color: 'var(--dark)' }
