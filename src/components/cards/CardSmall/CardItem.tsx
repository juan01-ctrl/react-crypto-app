import { Link } from "react-router-dom";
import { Button, Card, CardBody, Col } from "reactstrap";
import { formatNumber } from "../../../helpers/formatNumber";
import { ExchangeType } from "../../../interfaces/IExchange";

type PropTypes = {
  details: ExchangeType;
};

const CardItem = ({ details }: PropTypes) => {
  return (
    <Col md={6} lg={4}>
      <Card>
        <CardBody className="d-flex flex-column gap-3">
          <div className="d-flex align-items-center gap-2">
            <img width={50} src={details?.image} alt={details?.name} />
            <span>{details?.name}</span>
          </div>
          <div className="d-flex flex-column gap-3">
            <div>
              <h6 className="m-0">Trading volume in the last 24 hours:</h6>
              <span className="text-primary mb-4">
                {formatNumber({
                  value: details?.trade_volume_24h_btc,
                  currency: "BTC",
                  decimals: 2,
                })}
              </span>
              <h6 className="m-0 text-muted fw-normal">Trust score rank: {details?.trust_score_rank}</h6>
            </div>
            <a
              className="align-self-center"
              href={details?.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button color="primary">Go To Exchange</Button>
            </a>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CardItem;
