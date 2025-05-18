import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://dummyjson.com` }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/products`
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`
        })
    })
});

export const { useGetProductsQuery, useGetProductQuery } = productApi;