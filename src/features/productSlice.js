import { createSlice } from "@reduxjs/toolkit";
import { categoryProduct, productsThunk, singleProduct } from "./productThunk";

let initialState = {
    products: [],
    loading: false,
    error: null,
    product: {},
    category:[]
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(productsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload
                state.error = null;
            })
            .addCase(productsThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(singleProduct.pending,(state)=>{
             state.loading = true
            })
            .addCase(singleProduct.fulfilled, (state,action)=>{
                state.loading = false
                state.product = action.payload
                state.error = null
            })
            .addCase(singleProduct.rejected, (state,action)=>{
                state.loading = false
                state.error =action.payload
            })
            .addCase(categoryProduct.pending,(state)=>{
                state.loading = true
             state.error = null
            })
            .addCase(categoryProduct.fulfilled,(state ,action)=>{
        state.loading = false
        state.category= action.payload
            })
             .addCase(categoryProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    }

});

export default productSlice.reducer;
