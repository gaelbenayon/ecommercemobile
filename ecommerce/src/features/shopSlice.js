import {createSlice} from '@reduxjs/toolkit';

export const shopSlice = createSlice({
    name:'shop',
    initialState:{
        categorySelected: null,
        productIdSelected: null,
        productSelected: {},
        categories: [],
        products: [],
        productsFilteredByCategory: [],
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload;
            state.productsFilteredByCategory = state.products.filter(product => product.category === state.categorySelected);
        },
        setProductIdSelected: (state, action) => {
            state.productIdSelected = action.payload;
        },
        setProductSelected: (state) => {
            state.productSelected = state.products.find(item=>item.id === state.productIdSelected);
        },
        setProducts: (state,action) => {
            state.products = action.payload;
        },
        setCategories: (state,action) => {
            state.categories = action.payload;
        }
    }
})

export const {setCategorySelected,setProductIdSelected,setProductSelected,setProducts,setCategories} = shopSlice.actions;
export default shopSlice.reducer;