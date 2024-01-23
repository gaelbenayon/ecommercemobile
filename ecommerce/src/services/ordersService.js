import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/database";

export const ordersApi = createApi({
    reducerPath:"ordersApi",
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: (builder) => ({
        getOrdersByUser: builder.query({
            query: (userId) => `orders.json?orderBy="userId"&equalTo="${userId}"`
        }),
        postOrder: builder.mutation({
            query: ({...order}) => ({
                url: 'orders.json',
                method:'POST',
                body: order
            })
        })
    })
})

export const {useGetOrdersByUserQuery,usePostOrderMutation} = ordersApi;