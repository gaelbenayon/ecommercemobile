import { createSlice } from "@reduxjs/toolkit";

export const OrdersSlice = createSlice({
    name:"orders",
    initialState:{
        orders: []
    },
    reducers:{
        setLocalOrders: (state,action) => {
            state.orders = action.payload
        }
    }
})

export const {setLocalOrders} = OrdersSlice.actions;
export default OrdersSlice.reducer;