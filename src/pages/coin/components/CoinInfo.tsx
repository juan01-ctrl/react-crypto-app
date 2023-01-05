import { formatNumber } from "../../../helpers/formatNumber";
import { CoinByIdType } from "../../../interfaces/ICoinById";

type PropTypes = {
  data: CoinByIdType;
};
const CoinInfo = ({ data }: PropTypes) => {
  return (
    <div className="d-flex flex-column gap-4">
      <h4>
        <span className="text-primary">Current Price:</span>{" "}
        {formatNumber({
          value: data?.market_data?.current_price?.usd,
          decimals: 12,
        })}
      </h4>
      <div>
        <div className="d-flex align-items-center gap-1 mb-2">
          <img className="m-0" src={data?.image?.small} alt={data?.name} />
          <h2 className="h3">{data?.name}</h2>
        </div>
        <p dangerouslySetInnerHTML={{ __html: data?.description.en }}></p>
      </div>
    </div>
  );
};

export default CoinInfo;
