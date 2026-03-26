import { createSlice } from "@reduxjs/toolkit";
import { categoryProduct, productsThunk, singleProduct } from "./productThunk";

let initialState = {
    products: [],
    product: {},
    category:[],
    productsLoading: false,
  productLoading: false,
  categoryLoading: false,
  productsError: null,
  productError: null,
  categoryError: null,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsThunk.pending, (state) => {
                state.productsLoading = true;
                state.productsError = null;
            })
            .addCase(productsThunk.fulfilled, (state, action) => {
                state.productsLoading = false;
                state.products = action.payload
                
            })
            .addCase(productsThunk.rejected, (state, action) => {
                state.productsLoading = false;
                state.productsError = action.payload;
            })
            .addCase(singleProduct.pending,(state)=>{
             state.productLoading = true
            })
            .addCase(singleProduct.fulfilled, (state,action)=>{
                state.productLoading= false
                state.product = action.payload
                state.productError = null
            })
            .addCase(singleProduct.rejected, (state,action)=>{
                state.productLoading = false
                state.productError =action.payload
            })
            .addCase(categoryProduct.pending,(state)=>{
                state.categoryLoading = true
             state.categoryError = null
            })
            .addCase(categoryProduct.fulfilled,(state ,action)=>{
        state.categoryLoading = false
        state.category= action.payload
            })
             .addCase(categoryProduct.rejected, (state, action) => {
        state.categoryLoading = false;
        state.categoryError = action.payload;
      });
    }

});

export default productSlice.reducer;
