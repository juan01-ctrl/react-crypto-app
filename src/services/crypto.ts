import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: 'crypto',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3/' }),
  endpoints: (builder) => ({
    getTrendsCoins: builder.query({
      keepUnusedDataFor: 5,
      query: () => 'search/trending',
    }),
    getCoins: builder.query({
      query: () => `coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20tether%2C%20usd-coin%2Cbinancecoin%2C%20ripple%2C%20binance-usd%2C%20flixxo&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
    }),
    getCoinById: builder.query({
      query: (id) => `coins/${id}`,
    }),
    getCoinChartById: builder.query({
      query: (id) => `coins/${id}/market_chart?vs_currency=usd&days=max&interval=daily`,
    }),
    getExchanges: builder.query({
      query: () => `exchanges?page=0`,
    }),
  }),
})

export const { useGetTrendsCoinsQuery, useGetCoinByIdQuery, useGetCoinChartByIdQuery,useGetCoinsQuery, useGetExchangesQuery } = cryptoApi