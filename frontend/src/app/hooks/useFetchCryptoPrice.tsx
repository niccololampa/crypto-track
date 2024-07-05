import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { CryptoCoins } from "../types/types";

function useFetchCryptoPrice<T>({
  coin,
  minutes,
}: {
  coin: CryptoCoins;
  minutes?: number;
}) {
  const [data, setData] = useState<T | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCryptoPrice = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL_BACKEND_API}/price/${coin}${
            minutes ? `?minutes=${minutes}` : ""
          }`
        );
        setData(response.data);
      } catch (err: unknown) {
        if (err instanceof AxiosError) {
          setError(err.message);
        } else {
          setError("Unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchCryptoPrice();

    const intervalID = setInterval(fetchCryptoPrice, 60000);
    return () => clearInterval(intervalID);
  }, [coin, minutes]);

  return { data, loading, error };
}

export default useFetchCryptoPrice;
