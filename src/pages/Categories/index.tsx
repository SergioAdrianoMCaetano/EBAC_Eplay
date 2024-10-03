import ProductList from '../../components/ProductList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSportGamesQuery,
  useGetSimulatioGamesQuery
} from '../../service/api'

export const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulatioGamesQuery()

  return (
    <>
      <ProductList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductList
        games={sportGames}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSport}
      />
      <ProductList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductList
        games={fightGames}
        title="Luta"
        background="gray"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductList
        games={rpgGames}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRPG}
      />
    </>
  )
}

export default Categories
