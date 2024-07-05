export type CryptoCoins = "bitcoin" | "dogecoin" | "ethereum";

export enum Coin {
  bitcoin = "Bitcoin",
  dogecoin = "Dogecoin",
  ethereum = "Ethereum",
}

export enum CoinTicker {
  bitcoin = "BTC",
  dogecoin = "DOGE",
  ethereum = "ETH",
}

export type CryptoData = {
  date: Date;
  price: number;
};

export type CryptoPrice = {
  latest: number;
  average: number;
  history: CryptoData;
  count: number;
};

export type FetchData<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};
