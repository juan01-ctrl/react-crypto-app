import { IDataRes } from "./IDataRes"

export type TrendCoinType = {
    coin_id: number
    id: string
    image?: string
    large: string
    market_cap_rank: number
    name: string
    type: 'trend'
    price_btc: number
    score: number
    slug: string
    small: string
    symbol: string
    thumb: string
}
export type CoinType ={
    id: string;
    symbol: string;
    name: string;
    image?: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    type: 'coin';
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: Date;
    atl: number;
    atl_change_percentage: number;
    atl_date: Date;
    roi?: any;
    last_updated: Date;
}
export interface ITrendsCoinsRes extends IDataRes {
    currentData: { coins: { item : TrendCoinType }[], exchanges: [] }
    data: { coins: { item: TrendCoinType  }[], exchanges: [] } 
}

export interface ICoinsRes extends IDataRes {
    currentData: CoinType[]
    data: CoinType[]
}