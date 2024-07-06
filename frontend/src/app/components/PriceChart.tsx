import { CryptoData, CryptoCoins, CoinTicker, Coin } from "../types/types";
import Chart from "react-apexcharts";

import moment from "moment";

type PriceChartProps = {
  history: CryptoData[];
  coin: CryptoCoins;
};

export default function PriceChart(props: PriceChartProps) {
  const { history, coin } = props;

  const yData = history.map((point) => point.price.toFixed(2));

  const xData = history.map((point) =>
    moment(point.date).format("MM/DD/YY hh:mm a")
  );

  const chartData = {
    series: [
      {
        name: CoinTicker[coin],
        data: yData,
      },
    ],
    options: {
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
    },
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
