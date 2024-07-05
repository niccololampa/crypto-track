"use client";
import useFetchCryptoPrice from "../hooks/useFetchCryptoPrice";
import { CryptoPrice } from "../types/types";
import PriceDisplay from "../components/PriceDisplay";
import Layout from "../components/Layout";

type CoinPageParams = {
  params: { coin: string };
};
export default function CoinPage({ params }: CoinPageParams) {
  const { coin } = params;

  if (coin !== "bitcoin" && coin !== "dogecoin" && coin !== "ethereum") {
    return <div>Invalid coin</div>;
  }

  const { data, loading, error } = useFetchCryptoPrice<CryptoPrice>({
    coin: coin,
  });

  if (loading) {
    return <Layout>Loading...</Layout>;
  }

  return (
    <Layout>
      {data && (
        <PriceDisplay latest={data.latest} average={data.average} coin={coin} />
      )}

      {error && <div>Error downloading latest price data: {error}</div>}
    </Layout>
  );
}
