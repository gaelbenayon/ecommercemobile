import {createSlice} from '@reduxjs/toolkit';

export const shopSlice = createSlice({
    name:'shop',
    initialState:{
        genreSelected: null,
        productIdSelected: null,
        productSelected: {},
        genres: [],
        products: [],
        productsFilteredByGenre: [],
    },
    reducers: {
        setGenreSelected: (state, action) => {
            state.genreSelected = action.payload;
            state.productsFilteredByGenre = state.products.filter(product => product.genre === state.genreSelected);
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
        setGenres: (state,action) => {
            state.genres = action.payload;
        }
    }
})

export const {setGenreSelected,setProductIdSelected,setProductSelected,setProducts,setGenres} = shopSlice.actions;
export default shopSlice.reducer;