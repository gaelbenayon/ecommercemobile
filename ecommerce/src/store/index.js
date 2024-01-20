import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shopSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { shopApi } from "../services/shopService";
import cartReducer from "../features/cartSlice";
import {authApi} from '../services/authService';
import authReducer from "../features/authSlice";
import ordersReducer from "../features/ordersSlice";
import { ordersApi } from "../services/ordersService";
import { profileApi } from "../services/profileService";

const store = configureStore({
    reducer: {
        shopReducer,
        cartReducer,
        authReducer,
        ordersReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware).concat(ordersApi.middleware).concat(profileApi.middleware).concat(authApi.middleware)
})

setupListeners(store.dispatch);

export default store;