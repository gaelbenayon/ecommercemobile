import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/database";

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => 'categorias.json'
        }),
        getProducts: builder.query({
            query: () => 'productos.json'
        }),
        getProductsByCategory: builder.query({
            query: (category) => `productos.json?orderBy="genre"&equalTo="${category}"`
        })
    })
})

export const {useGetCategoriesQuery, useGetProductsQuery, useGetProductsByCategoryQuery} = shopApi;