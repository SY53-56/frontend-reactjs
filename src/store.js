import { configureStore } from "@reduxjs/toolkit";
import authReduce from "./features/auth"
export const store = configureStore({
    reducer:{
        auth:authReduce
    }
})