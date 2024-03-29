import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/database";

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: (builder) => ({
        getGenres: builder.query({
            query: () => 'categories.json'
        }),
        getProducts: builder.query({
            query: () => 'products.json'
        }),
        getProductsByGenre: builder.query({
            query: (genre) => `products.json?orderBy="genre"&equalTo="${genre}"`
        })
    })
})

export const {useGetGenresQuery, useGetProductsQuery, useGetProductsByGenreQuery} = shopApi;