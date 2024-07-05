import React from "react";

import { CryptoCoins, CoinTicker, Coin } from "../types/types";

type PriceDisplayProps = {
  coin: CryptoCoins;
  latest: number;
  average: number;
};

export default function PriceDisplay(props: PriceDisplayProps) {
  const { latest, average, coin } = props;

  return (
    <div>
      <h1>
        {Coin[coin]}({CoinTicker[coin]})
      </h1>
      <div>
        <p>Latest: {latest}</p>
        <p>Average: {average}</p>
      </div>
    </div>
  );
}
