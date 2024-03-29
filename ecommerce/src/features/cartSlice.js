import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        total: 0,
        items: [],
    },
    reducers:{
        addItem: (state,action) => {
            const isProductInCart = state.items.find(item=>item.id === action.payload.id);
            if (!isProductInCart) {
                const updatedItems = [...state.items,action.payload]
                const total = updatedItems.reduce((acc,currentItem) => acc+= currentItem.price*currentItem.quantity,0);
                state.total = total;
                state.items = updatedItems;
            } else {
                const itemsUpdated = state.items.map(item=>{
                    if(item.id===action.payload.id) {
                        item.quantity+=action.payload.quantity;
                    }
                   return item
                })
                const total = itemsUpdated.reduce((acc,currentItem) => acc+= currentItem.price*currentItem.quantity,0);
                state.total = total;
                state.items = itemsUpdated;
            }
        },
        removeItem: (state,action) => {
            const updatedCart = state.items.filter(item => item.id !== action.payload);
            state.items = updatedCart;
            state.total = updatedCart.reduce((acc,item)=> acc+= item.price*item.quantity,0);
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;