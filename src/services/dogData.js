import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dogApi = createApi({
    reducerPath: 'dogApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://dog.ceo/api/breed/hound` }),
    endpoints: (builder) => ({
        getImages: builder.query({
            query: () => `/images`
        })
    })

})

export const { useGetImagesQuery } = dogApi;