import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        date: new Date().toLocaleDateString(),
        total: 0,
        items: [],
    },
    reducers:{
        addItem: (state,action) => {
            const isProductInCart = state.items.find(item=>item.id === action.payload.id);
            if (!isProductInCart) {
                state.items.push(action.payload);
                const total = state.items.reduce((acc,currentItem) => acc+= currentItem.price*currentItem.quantity,0);
                state.total = total;
                state = {
                    ...state,
                    total,
                }
            } else {
                const itemsUpdated = state.items.map(item=>{
                    if(item.id===action.payload.id) {
                        item.quantity+=action.payload.quantity;
                    }
                   return item
                })
                const total = itemsUpdated.reduce((acc,currentItem) => acc+= currentItem.price*currentItem.quantity,0);
                state.total = total;
                state = {
                    ...state,
                    items: itemsUpdated,
                    total,
                    date: action.payload.date
                }
            }
        },
        removeItem: (state,action) => {
            const updatedCart = state.items.filter(item => item.id !== action.payload);
            state.items = updatedCart;
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;