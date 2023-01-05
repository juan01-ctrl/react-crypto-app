import { IDataRes } from "./IDataRes";

export interface ICoinChartRes extends IDataRes {
    currentData: CoinChartType
    data: CoinChartType
}
export interface CoinChartType {
    prices?: ((number)[] | null)[] | null;
    market_caps?: ((number)[] | null)[] | null;
    total_volumes?: ((number)[] | null)[] | null;
  }
  