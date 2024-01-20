import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/database";

export const profileApi = createApi({
    reducerPath: "profileApi",
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: (builder) => ({
        getProfilePicture: builder.query({
            query: (localId) => `profilePictures/${localId}.json`
        }),        
        putProfilePicture: builder.mutation({
            query: ({image, localId}) => ({
                url: `profilePictures/${localId}.json`,
                method: 'PUT',
                body: {image}
            })
        })
    })
})

export const {useGetProfilePictureQuery, usePutProfilePictureMutation} = profileApi;