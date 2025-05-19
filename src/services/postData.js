import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://dummyjson.com` }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => `/posts`
        }),
        getPost: builder.query({
            query: (id) => `/posts/${id}`
        })
        ,
        createPost: builder.mutation({
            query: (newPost) => ({
                url: '/posts/add',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPost)
            })
        })
    })
});

export const { useGetPostsQuery, useCreatePostMutation, useGetPostQuery } = postApi;