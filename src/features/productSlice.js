import { createSlice } from "@reduxjs/toolkit";
import { productsThunk, singleProduct } from "./productThunk";

let initialState = {
    products: [],
    loading: false,
    error: null,
    product: {}
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
    }

});

export default productSlice.reducer;
