import { configureStore } from "@reduxjs/toolkit";
import authReduce from "./features/authSlice"
import productReduce from "./features/productSlice"
 const store = configureStore({
    reducer:{
        auth:authReduce,
        product:productReduce
    }
})
export default store