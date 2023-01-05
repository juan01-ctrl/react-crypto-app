import CardItem from "./CardItem";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CoinType, TrendCoinType } from "../../../interfaces/ICoin";

const props: TrendCoinType | CoinType = {
  coin_id: 10,
  id: "BTC",
  large: "medium",
  market_cap_rank: 10000,
  name: "bitcoin",
  type: "trend",
  price_btc: 1,
  score: 5,
  slug: "btc",
  small: "example.png",
  symbol: "btc",
  thumb: "exampleThumb.png",
};
describe("CardItem", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/currency/BTC"]}>
        <CardItem details={props}></CardItem>
      </MemoryRouter>
    );
  });
  test("Component should render", () => {
    expect(screen.getAllByText(new RegExp(`${props.name}`, "i"))).toBeDefined();
  });
});
