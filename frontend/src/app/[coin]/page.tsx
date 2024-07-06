"use client";
import useFetchCryptoPrice from "../hooks/useFetchCryptoPrice";
import { CryptoPrice, CryptoCoins } from "../types/types";
import PriceDisplay from "../components/PriceDisplay";
import Layout from "../components/Layout";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const PriceChart = dynamic(() => import("../components/PriceChart"), {
  ssr: false,
});

type CoinPageParams = {
  params: { coin: CryptoCoins };
};
export default function CoinPage({ params }: CoinPageParams) {
  const { coin } = params;
  const searchParams = useSearchParams();
  const searchMinutes = Number(searchParams.get("minutes"));

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

      {error && (
        <div className="flex justify-center text-[14px] text-red-400">
          Error downloading latest price data: {error}
        </div>
      )}
    </Layout>
  );
}
