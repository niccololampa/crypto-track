# Crypto Tracker

This application utilizes Next.js (front-end) and Express.js(backend api) to track prices for the following crypto currencies. BTC, ETH and DOGE. 

It uses [coingecko.com](coingecko.com) API to gather data on crypto prices. 

Front-end interface will auto refresh every 60 seconds and by default will display latest 60 minutes of available data.

![Screenshot 2024-07-06 at 11 24 13 PM](https://github.com/niccololampa/crypto-track/assets/37615906/126b2390-8948-4e06-97d0-92eeb898bf57)

If you want to just display specific number of minutes (e.g. last 5 minutes)

Just modify the url to include the search parameter `minutes`

[http://localhost:3000/bitcoin?minutes=5](http://localhost:3000/bitcoin?minutes=5)

![Screenshot 2024-07-06 at 11 24 40 PM](https://github.com/niccololampa/crypto-track/assets/37615906/9c0e90e2-1ec0-4bc0-9a7f-eef2fecc5d74)



## Installing dependencies

Install dependencies for frontend by running the following:

```bash
cd frontend
yarn install
```

Install dependencies for backend by running the following:

```bash
cd backend
yarn install
```

## Running the backend application

For the backend you need to create a `.env` file in the `backend` folder

```
cd backend
touch .env
```

Insert the following in the .env file 

```.env
PORT=3002
BASE_URL='http://localhost'
DEFAULT_PRICE_MINUTES=60
COIN_GECKO_PUBLIC_API_KEY={YOUR COIN GECKO TOKEN HERE}
```
You will need to have your own coin gecko public key. For more information on how to create api key go to [https://docs.coingecko.com/v3.0.1/reference/setting-up-your-api-key](https://docs.coingecko.com/v3.0.1/reference/setting-up-your-api-key)

Next you will need to run the backend server

```
yarn run dev
```


## Running the front-end application 

For the frontend you need to create a `.env.local` file in the `frontend` folder

```bash
cd frontend
touch .env.local
```

Insert the following in the .env file 

```bash
NEXT_PUBLIC_URL_BACKEND_API=http://localhost:3002
```

Next you will need to run the frontend

```
yarn run dev
```
