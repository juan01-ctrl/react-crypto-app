import { Link, useParams } from "react-router-dom";
import ChartInfo from "../../components/ChartInfo";
import CoinInfo from "./components/CoinInfo";
import BasicLayout from "../../components/layouts/BasicLayout";
import Loader from "../../components/Loader";
import { IoMdArrowBack } from "react-icons/io";
import { CoinByIdType, ICoinByIdRes } from "../../interfaces/ICoinById";
import { useGetCoinByIdQuery } from "../../services/crypto";

export const CoinPage = () => {
  const { id } = useParams();
  const { data: coin, isLoading } = useGetCoinByIdQuery<ICoinByIdRes>(id);

  const cleanData: CoinByIdType = {
    description: coin?.description,
    id: coin?.id,
    name: coin?.name,
    image: coin?.image,
    symbol: coin?.symbol,
    market_data: coin?.market_data,
  };
  console.log(cleanData?.market_data);
  return (
    <BasicLayout>
      <>
      <Link to='/coins'>
        <IoMdArrowBack className="rounded-circle bg-dark p-2 cursor-pointer" color="white" size={35} />
      </Link>
        <ChartInfo id={id} />
        {isLoading ? <Loader /> : <CoinInfo data={cleanData} />}
      </>
    </BasicLayout>
  );
};
