import { configureStore } from "@reduxjs/toolkit";
import authReduce from "./features/authSlice"
 const store = configureStore({
    reducer:{
        auth:authReduce
    }
})
export default store