import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const quoteApi = createApi({
    reducerPath: 'quoteApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({
        getQuotes: builder.query({
            query: () => `/quotes?limit=100`
        })
    })
});

export const { useGetQuotesQuery } = quoteApi