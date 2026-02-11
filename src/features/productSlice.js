import { createSlice } from "@reduxjs/toolkit";
import { productsThunk } from "./productThunk";

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
                state.products = action.payload;
                state.error = null;
            })
            .addCase(productsThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default productSlice.reducer;
