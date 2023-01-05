import CardList from "../../components/cards/CardSmall/CardList"
import BasicLayout from "../../components/layouts/BasicLayout"
import Loader from "../../components/Loader"
import { IExchangeRes } from "../../interfaces/IExchange"
import { useGetExchangesQuery } from "../../services/crypto"

export const ExchangesPage = () => {
  const { data, isLoading } = useGetExchangesQuery<IExchangeRes>(null)
  const dataSort = data && [...data]?.sort((a, b) => b?.trade_volume_24h_btc - a?.trade_volume_24h_btc)
  return (
    <BasicLayout>
      <>
        {isLoading ? (
          <Loader />
        )
          : <CardList data={dataSort} isLoading={isLoading} title='Exchanges' />
        }
      </>
    </BasicLayout>
  )
}
