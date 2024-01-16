import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/database";

export const ordersApi = createApi({
    reducerPath:"ordersApi",
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: () => 'orders.json'
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

export const {useGetOrdersQuery,usePostOrderMutation} = ordersApi;