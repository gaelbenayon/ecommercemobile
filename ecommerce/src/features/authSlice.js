import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        profilePicture: null,
        localId: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.email,
            state.token = action.payload.idToken
        },
        logOutUser: (state) => {
            state.user = null
        }
    }
})

export const { setUser, logOutUser } = authSlice.actions;

export default authSlice.reducer;