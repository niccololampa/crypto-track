type CRYPTODATA = {
  date: Date;
  price: number;
};

type CRYPTOPRICES = {
  bitcoin: CRYPTODATA[];
  ethereum: CRYPTODATA[];
  dogecoin: CRYPTODATA[];
};

const cryptoPrices: CRYPTOPRICES = {
  bitcoin: [],
  ethereum: [],
  dogecoin: []
};
