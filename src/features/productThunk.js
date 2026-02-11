import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const productsThunk = createAsyncThunk( "product/data",async(_,{rejectWithValue})=>{
    try{
        const res = await axios.get("https://fakestoreapi.com/products")
        console.log( "sahul",res.data)
        return res.data
        
    }catch(e){
        return rejectWithValue(e)
    }
})