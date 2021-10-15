import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "ae5a6436e3mshbd690a32df75fe0p1a5760jsn1392df87c685",

  // "x-rapidapi-host": "https://api.coinranking.com/v2",
  // "x-access-token":
  //   "coinranking4bbe66efb55e96b0746adc2b5a13921e8732431ae232eb90",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";
// const baseUrl = "https://api.coinranking.com/v2";

const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
