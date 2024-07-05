"use client";

import { useState } from "react";
import useFetchCryptoPrice from "../hooks/useFetchCryptoPrice";
import { CryptoPrice, CryptoCoins } from "../types/types";
import PriceDisplay from "../components/PriceDisplay";

export default function CryptoPricesPage() {
  const [coin, setCoin] = useState<CryptoCoins>("bitcoin");
  const { data, loading, error } = useFetchCryptoPrice<CryptoPrice>({
    coin: coin,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error Fetching Data: {error}</div>;
  }

  return (
    <div>
      {data && (
        <PriceDisplay latest={data.latest} average={data.average} coin={coin} />
      )}
    </div>
  );
}
