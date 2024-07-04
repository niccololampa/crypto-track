type CRYPTOCOINS = 'bitcoin' | 'dogecoin' | 'ethereum';

type CRYPTODATA = {
  date: Date;
  price: number;
};

type CRYPTOPRICES = {
  bitcoin: CRYPTODATA[];
  ethereum: CRYPTODATA[];
  dogecoin: CRYPTODATA[];
};

type COINGECKOPRICEFORMAT = {
  usd: number;
};

type COINGECKOAPIPRICES = {
  [key in CRYPTOCOINS]: COINGECKOPRICEFORMAT;
};

export { CRYPTOPRICES, CRYPTODATA, COINGECKOAPIPRICES, COINGECKOPRICEFORMAT, CRYPTOCOINS };
