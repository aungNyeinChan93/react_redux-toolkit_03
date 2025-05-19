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
        }),
        createProduct: builder.mutation({
            query: (newProduct) => ({
                url: `/products/add`,
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            })
        })
    })
});

export const { useGetProductsQuery, useGetProductQuery, useCreateProductMutation } = productApi;