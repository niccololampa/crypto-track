"use client";
import { CryptoData, CryptoCoins, CoinTicker, Coin } from "../types/types";
import moment from "moment";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

type PriceChartProps = {
  history: CryptoData[];
  coin: CryptoCoins;
};

export default function PriceChart(props: PriceChartProps) {
  const { history, coin } = props;

  const yData = history.map((point) => Number(point.price.toFixed(2)));

  const xData = history.map((point) =>
    moment(point.date).format("MM/DD/YY hh:mm a")
  );

  const options: ApexOptions = {
    colors: ["#14b8a6"],
    chart: {
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: `${Coin[coin]} Price (USD)`,
      align: "center",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: xData,
    },
  };

  const series: ApexAxisChartSeries = [
    {
      name: CoinTicker[coin],
      data: yData,
    },
  ];

  const chartData = {
    series: series,
    options: options,
  };

  return (
    <div className="mt-4">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </div>
  );
}
