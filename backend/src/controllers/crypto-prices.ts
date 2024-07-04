import axios from 'axios';
import { cryptoPrices } from '../prices';
import { COINGECKOAPIPRICES, CRYPTOCOINS, CRYPTODATA } from 'types/types';

const pushNewCoinPrices = ({ coin, date, price }: { coin: CRYPTOCOINS; date: Date; price: number }) => {
  cryptoPrices[coin].push({ date, price });
};

const getAverageCoinPrice = (arr: CRYPTODATA[]): number => {
  if (arr.length === 0) return 0; // Handle empty array case

  const sum = arr.reduce((acc, val) => acc + val.price, 0);
  return sum / arr.length;
};

const fetchCryptoPrices = async () => {
  const tokenPriceUrl =
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false&precision=2';

  const options = {
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': process.env.COIN_GECKO_PUBLIC_API_KEY
    }
  };

  try {
    axios.get(tokenPriceUrl, options).then((response: { data: COINGECKOAPIPRICES }) => {
      console.log(response.data);

      const downloadDate = new Date();

      const { bitcoin, dogecoin, ethereum } = response.data;

      pushNewCoinPrices({ coin: 'bitcoin', date: downloadDate, price: bitcoin.usd });
      pushNewCoinPrices({ coin: 'ethereum', date: downloadDate, price: ethereum.usd });
      pushNewCoinPrices({ coin: 'dogecoin', date: downloadDate, price: dogecoin.usd });
    });
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
};

const getStoredCoinPrice = ({ coin, minutes }: { coin: CRYPTOCOINS; minutes: number }) => {
  const timelinedData = cryptoPrices[coin].slice(cryptoPrices[coin].length - minutes);

  const timelinedDataLength = timelinedData.length;

  return {
    latest: timelinedData[timelinedDataLength - 1].price,
    average: getAverageCoinPrice(timelinedData),
    history: timelinedData,
    count: timelinedDataLength
  };
};

export { fetchCryptoPrices, getStoredCoinPrice };
