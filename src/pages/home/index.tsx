import { useGetCoinsQuery, useGetTrendsCoinsQuery } from "../../services/crypto"
import { CoinType, ICoinsRes, ITrendsCoinsRes, TrendCoinType } from "../../interfaces/ICoin"
import CardList from "../../components/cards/CardLarge/CardList"
import BasicLayout from "../../components/layouts/BasicLayout"



export const Home = () => {
  const { data: trends, isLoading: trendsIsLoading } = useGetTrendsCoinsQuery<ITrendsCoinsRes>(null)
  const { data: coinList, isLoading: coinsIsLoading } = useGetCoinsQuery<ICoinsRes>(null)
  const trendsCoins: TrendCoinType[] = trends?.coins.map(({ item }: { item: TrendCoinType }) => (
    { ...item, image: item?.small, type: 'trend' }
  ))
  const coins: CoinType[] = coinList?.map((item) => (
    { ...item, type: 'coin' }
  ))
  return (
    <BasicLayout>
      <>
        <CardList data={trendsCoins} isLoading={trendsIsLoading} title="Trending" />
        <CardList data={coins} isLoading={coinsIsLoading} title="Markets" />
      </>
    </BasicLayout>
  )
}
