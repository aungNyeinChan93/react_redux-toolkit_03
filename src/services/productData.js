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
        }),
        updateProduct: builder.mutation({
            query: ({ id, updateProduct }) => ({
                url: `/products/${id}`,
                method: 'PUT',
                headers: {
                    'COntent-Type': 'application/json',
                },
                body: updateProduct,
            })
        }),
        dropProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE'
            })
        })

    })
});

export const { useGetProductsQuery, useGetProductQuery, useCreateProductMutation, useUpdateProductMutation, useDropProductMutation } = productApi;