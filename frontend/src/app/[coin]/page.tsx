"use client";
import useFetchCryptoPrice from "../hooks/useFetchCryptoPrice";
import { CryptoPrice } from "../types/types";
import PriceDisplay from "../components/PriceDisplay";
import Layout from "../components/Layout";
import PriceChart from "../components/PriceChart";
import { useSearchParams } from "next/navigation";

type CoinPageParams = {
  params: { coin: string };
};
export default function CoinPage({ params }: CoinPageParams) {
  const { coin } = params;
  const searchParams = useSearchParams();
  const searchMinutes = Number(searchParams.get("minutes"));

  if (coin !== "bitcoin" && coin !== "dogecoin" && coin !== "ethereum") {
    return <div>Invalid coin</div>;
  }

  const { data, loading, error } = useFetchCryptoPrice<CryptoPrice>({
    coin: coin,
    minutes: searchMinutes,
  });

  if (loading) {
    return <Layout>Loading...</Layout>;
  }

  return (
    <Layout>
      {data && (
        <>
          <PriceDisplay
            latest={data.latest}
            average={data.average}
            coin={coin}
          />
          <PriceChart coin={coin} history={data.history} />
        </>
      )}

      {error && <div>Error downloading latest price data: {error}</div>}
    </Layout>
  );
}
