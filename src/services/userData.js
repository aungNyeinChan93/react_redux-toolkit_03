import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://dummyjson.com/` }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `/users`
        }),
        getUser: builder.query({
            query: (id) => `/users/${id}`
        }),
        addUser: builder.mutation({
            query: (newUser) => ({
                url: `user/login`,
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: newUser
            })
        })
    })
});

export const { useGetUsersQuery, useGetUserQuery, useAddUserMutation } = userApi