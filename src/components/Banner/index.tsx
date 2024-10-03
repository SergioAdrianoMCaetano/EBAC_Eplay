import { Imagem, Titulo, Precos } from './styles'

import Tag from '../Tag'
import Button from '../Button'

import { formataPreco } from '../../util'

import { useGetFeaturedGameQuery } from '../../service/api'
import Loader from '../Loader'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }
  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaques do mês</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game?.prices.old)}</span> <br />
            por apenas {formataPreco(game?.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/produtos/${game.id}`}
          title="Clique aqui para aproveitar a oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
