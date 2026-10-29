import { Link } from 'react-router-dom'

export default function DestinationCard({ destino }) {
  const {
    id,
    nome,
    uf,
    categoria,
    descricao,
    imagem,
    avaliacao,
    totalAvaliacoes,
  } = destino

  return (
    <article className="destination-card">
      <Link
        to={`/destinos/${id}`}
        className="destination-card-image-link"
        aria-label={`Conhecer ${nome}`}
      >
        <div className="destination-card-image">
          <img
            src={imagem}
            alt={`Paisagem de ${nome}`}
            loading="lazy"
          />

          {categoria && (
            <span className="destination-card-category">
              {categoria}
            </span>
          )}
        </div>
      </Link>

      <div className="destination-card-content">
        <span className="destination-card-location">
          <span aria-hidden="true">⌖</span> {uf}
        </span>

        <h3>
          <Link to={`/destinos/${id}`}>{nome}</Link>
        </h3>

        <p className="destination-card-description">
          {descricao}
        </p>

        <div className="destination-card-footer">
          <div className="destination-card-rating">
            {avaliacao != null ? (
              <>
                <span className="destination-card-star" aria-hidden="true">
                  ★
                </span>
                <strong>{Number(avaliacao).toFixed(1)}</strong>
                <span className="destination-card-reviews">
                  ({totalAvaliacoes ?? 0} avaliações)
                </span>
              </>
            ) : (
              <span className="destination-card-no-rating">
                Seja o primeiro a avaliar
              </span>
            )}
          </div>

          <Link
            className="destination-card-link"
            to={`/destinos/${id}`}
            aria-label={`Ver detalhes de ${nome}`}
          >
            →
          </Link>
        </div>
      </div>
    </article>
  )
}