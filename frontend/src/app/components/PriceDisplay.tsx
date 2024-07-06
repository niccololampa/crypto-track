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
    <div className="flex mt-4 justify-center text-[14px] flex-wrap">
      <div className="mr-1">
        <span className="mr-1">Crypto:</span>
        <span className="mr-1 font-bold text-teal-500">{Coin[coin]}</span>
      </div>

      <div className="mr-1">
        <span className="mr-1">Ticker:</span>
        <span className="mr-1 font-bold text-teal-500">{CoinTicker[coin]}</span>
      </div>

      <div className="mr-1">
        <span className="mr-1">Latest:</span>
        <span className="mr-1 font-bold text-teal-500">
          USD {latest.toFixed(2)}
        </span>
      </div>

      <div className="mr-1">
        <span className="mr-1">Average:</span>
        <span className="mr-1 font-bold text-teal-500">
          USD {average.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
