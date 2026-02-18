import { configureStore } from "@reduxjs/toolkit";
import authReduce from "./features/authSlice"
import productReduce from "./features/productSlice"
import cartReduce from "./features/cartSlice"
 const store = configureStore({
    reducer:{
        auth:authReduce,
        product:productReduce,
        cart:cartReduce
    }
})
export default store