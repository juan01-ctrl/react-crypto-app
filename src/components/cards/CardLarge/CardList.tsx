import { useEffect, useState } from "react";
import { TrendCoinType, CoinType } from "../../../interfaces/ICoin";
import CardDetails from "./CardItem";
import Loader from "../../Loader";

type PropsType = {
  data: TrendCoinType[] | CoinType[];
  isLoading: boolean;
  title: string;
};
const CardList = ({ data, isLoading, title }: PropsType) => {
  const [dataToShow, setDataToShow] = useState<TrendCoinType[] | CoinType[]>(
    []
  );

  useEffect(() => {
    setDataToShow(data?.slice(0, 20));
  }, [data]);

  const handleViewMore = () => {
    setDataToShow((prev) => data?.slice(0, prev.length + 20));
  };

  return (
    <div className="py-3">
      <h1 className="mb-4">{title}</h1>
      {isLoading ? (
        <Loader />
      ) : data?.length ? (
        <>
          <ul className="d-flex flex-column gap-2">
            {dataToShow?.map((el, idx) => {
              return (
                <CardDetails details={el} ranking={idx + 1} key={el?.id} />
              );
            })}
          </ul>
          {dataToShow?.length !== data?.length && (
            <div className="text-center">
              <button
                className="center btn btn-primary"
                onClick={handleViewMore}
              >
                View More
              </button>
            </div>
          )}
        </>
      ) : (
        <h5 className="text-center">Without Data...</h5>
      )}
    </div>
  );
};

export default CardList;
