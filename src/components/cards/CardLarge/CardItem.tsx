import { Card, CardBody, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { BiTrendingUp, BiTrendingDown } from 'react-icons/bi';
import { MdOutlineTrendingFlat } from 'react-icons/md';

import { CoinType, TrendCoinType } from "../../../interfaces/ICoin"
import { formatNumber } from '../../../helpers/formatNumber'


type PropsType = {
  details: CoinType | TrendCoinType
  ranking?: number
}
const CardItem = ({ details, ranking }: PropsType) => {
  const isCoin = details.type === 'coin'
  const price = {
    value: isCoin ? details.current_price : details.price_btc,
    currency: !isCoin ? 'BTC' : 'USD'
  }

  const priceChangePercent = isCoin && (details.price_change_percentage_24h || 0)

  const trendDirectionSvg = (percent: number) => {
    if (percent > 0) {
      return <BiTrendingUp className="text-success" />
    } 
    if (percent < 0) {
      return <BiTrendingDown className="text-danger" />
    }
    return <MdOutlineTrendingFlat />
  }
  return (
    <li>
      <Link to={`/currency/${details.id}`}>
        <Card>
          <CardBody className='d-flex justify-content-between align-items-center gap-4'>
            <Col className='d-flex align-items-center gap-3 flex-wrap' md={3}>
              <img className='rounded-circle' width={50} src={details?.image} alt={details?.name} />
              <span>{!isCoin && `${ranking}.`} {details.name} <small>({details?.symbol.toUpperCase()})</small></span>
            </Col>
            <Col className='d-flex flex-column align-items-end justify-content-center' md={3}>
              <span className='text-primary'>{formatNumber(price)}</span>
              {
                priceChangePercent !== false
                && (
                  <div className={classnames('d-flex aling-items-center gap-1', {
                    'text-success': priceChangePercent > 0,
                    'text-danger': priceChangePercent < 0,
                    'text-secondary': priceChangePercent === 0
                  })}>
                    <span className='d-flex align-items-center'>{trendDirectionSvg(priceChangePercent)}</span>
                    <span>{priceChangePercent}%</span></div>
                )
              }
            </Col>
            {
              isCoin
                &&
                <Col className='text-secondary d-none d-md-block' md={3}>
                  <h6>Market Cap:</h6>
                  <span>{formatNumber({ decimals: 0, value: details.market_cap })}</span>
                </Col>
            }
          </CardBody>
        </Card>
      </Link>
    </li>

  )
}

export default CardItem