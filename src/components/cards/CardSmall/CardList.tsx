import { Row } from "reactstrap";
import { ExchangeType } from "../../../interfaces/IExchange";
import Loader from "../../Loader";
import CardItem from "./CardItem";

type PropsType = {
data: ExchangeType[]
isLoading: boolean
title: string
}
const CardList = ({ data, isLoading, title }: PropsType) => {
  return (
    <div className="py-3">
      <h1 className="mb-4">{title}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Row md={12} className='gy-3'>
            {data?.map((el) => {
              return (
                <CardItem details={el} key={el?.id} />
              );
            })}
          </Row>
        </>
      )}
    </div>
  );
};

export default CardList;
