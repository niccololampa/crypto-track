import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { CryptoCoins } from 'types/types';
import { getStoredCoinPrice } from '../controllers/crypto-prices';

dotenv.config();
const router = express.Router();

router.get('/price/:coin', (req: Request, res: Response) => {
  const { coin } = req.params;
  const cryptoCoin = coin as CryptoCoins;
  const minutes = Number(req.query.minutes || process.env.DEFAULT_PRICE_MINUTES);

  if (coin === 'bitcoin' || coin === 'dogecoin' || coin === 'ethereum') {
  } else {
    res.status(400).send('Invalid cypto coin');
  }

  res.json(getStoredCoinPrice({ coin: cryptoCoin, minutes: minutes }));
});

export default router;
