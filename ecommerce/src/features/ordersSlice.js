import { createSlice } from "@reduxjs/toolkit";

export const OrdersSlice = createSlice({
    name:"orders",
    initialState:{
        orders: []
    },
    reducers:{
        setLocalOrders: (state,action) => {
            state.orders = action.payload
        },
        clearLocalOrders: (state) => {
            state.orders = []
        }
    }
})

export const {setLocalOrders,clearLocalOrders} = OrdersSlice.actions;
export default OrdersSlice.reducer;