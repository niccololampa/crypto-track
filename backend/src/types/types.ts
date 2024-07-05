type CryptoCoins = 'bitcoin' | 'dogecoin' | 'ethereum';

type CryptoData = {
  date: Date;
  price: number;
};

type CryptoPrices = {
  bitcoin: CryptoData[];
  ethereum: CryptoData[];
  dogecoin: CryptoData[];
};

type CoinGeckoPriceFormat = {
  usd: number;
};

type CoinGeckoApiPrices = {
  [key in CryptoCoins]: CoinGeckoPriceFormat;
};

export { CryptoPrices, CryptoData, CoinGeckoApiPrices, CoinGeckoPriceFormat, CryptoCoins };
