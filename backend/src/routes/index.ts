import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();

router.get('/price/:coin', (req: Request, res: Response) => {
  const { coin } = req.params;
  const minutes = req.query.minutes || process.env.DEFAULT_PRICE_MINUTES;

  res.json({ latest: 0, average: 0, history: [], count: 0 });
});

export default router;
